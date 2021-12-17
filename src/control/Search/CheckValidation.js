import { MESSAGE, STATION } from '../../common/constant.js';
import stations from '../../common/data.js';
import { $ } from '../../common/element.js';

function showAlert(message) {
  alert(message);
}

function getDepartures() {
  const departures = [];

  stations.forEach((station) => departures.push(station.departure));

  return departures;
}

function getArrivals() {
  const arrivals = [];

  stations.forEach((station) => arrivals.push(station.arrival));

  return arrivals;
}

function checkArrivalValidation() {
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const arrivals = getArrivals();

  if (!arrival) {
    showAlert(MESSAGE.NULL_ARRIVAL);
  } else if (arrival.length < STATION.MIN_LENGTH) {
    showAlert(MESSAGE.LEAST_ARRIVAL);
  } else if (!arrivals.includes(arrival)) {
    showAlert(MESSAGE.NON_EXIST_ARRIVAL);
  } else if (departure === arrival) {
    showAlert(MESSAGE.DUPLICATE);
  }
}

export function checkDepartureValidation() {
  const departure = $('departure-station-name-input').value;
  const departures = getDepartures();

  if (!departure) {
    showAlert(MESSAGE.NULL_DEPARTURE);
  } else if (departure.length < STATION.MIN_LENGTH) {
    showAlert(MESSAGE.LEAST_DEPARTURE);
  } else if (!departures.includes(departure)) {
    showAlert(MESSAGE.NON_EXIST_DEPARTURE);
  } else {
    checkArrivalValidation();
  }
}

export function getDepartureValidation() {
  const departure = $('departure-station-name-input').value;
  const departures = getDepartures();

  return (
    departure &&
    departure.length >= STATION.MIN_LENGTH &&
    departures.includes(departure)
  );
}

export function getArrivalValidation() {
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const arrivals = getArrivals();

  return (
    arrival &&
    arrival.length >= STATION.MIN_LENGTH &&
    arrivals.includes(arrival) &&
    arrivals !== departure
  );
}
