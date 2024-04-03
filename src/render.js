import { addDays, format, isEqual } from 'date-fns';

export const renderSelectDays = (parent, state) => {
  const dateRange = [];
  for (let i = -7; i <= 7; i += 1) {
    const date = addDays(state.time.dateNow, i);
    dateRange.push(format(date, 'dd/MM/yyyy'));
  }
  dateRange.forEach((date) => {
    const option = document.createElement('option');
    if (isEqual(date, state.time.currentDay)) {
      option.setAttribute('selected', '');
    }
    option.textContent = date;
    parent.appendChild(option);
  });
};

export const chooseCurrentSession = (selectSession, state) => {
  const currentSessionOption = selectSession.querySelector(`[value = "${state.time.currentSession}"]`);
  currentSessionOption.setAttribute('selected', '');
};

export const renderSeats = (seats, state) => {
  seats.forEach((seat) => {
    seat.classList.remove('select');
    seat.classList.remove('reserved');
  });
  state.seats.selected.forEach((i) => {
    document.querySelector(`.seat-${i}`).classList.add('select');
  });
  state.seats.reserved.forEach((i) => {
    document.querySelector(`.seat-${i}`).classList.add('reserved');
  });
};