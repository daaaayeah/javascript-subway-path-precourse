import { MESSAGE, STATION } from '../../common/constant.js';
import stations from '../../common/data.js';
import { $ } from '../../common/element.js';

function showAlert(message) {
  alert(message);
}

function getAllStations() {
  const allStations = [];

  stations.forEach((station) => {
    if (!allStations.includes(station.departure)) {
      allStations.push(station.departure);
    } else if (!allStations.includes(station.arrival)) {
      allStations.push(station.arrival);
    }
  });

  return allStations;
}

function checkArrivalValidation() {
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const allStations = getAllStations();

  if (!arrival) {
    showAlert(MESSAGE.NULL_ARRIVAL);
  } else if (arrival.length < STATION.MIN_LENGTH) {
    showAlert(MESSAGE.LEAST_ARRIVAL);
  } else if (!allStations.includes(arrival)) {
    showAlert(MESSAGE.NON_EXIST_ARRIVAL);
  } else if (departure === arrival) {
    showAlert(MESSAGE.DUPLICATE);
  }
}

export function checkDepartureValidation() {
  const departure = $('departure-station-name-input').value;
  const allStations = getAllStations();

  if (!departure) {
    showAlert(MESSAGE.NULL_DEPARTURE);
  } else if (departure.length < STATION.MIN_LENGTH) {
    showAlert(MESSAGE.LEAST_DEPARTURE);
  } else if (!allStations.includes(departure)) {
    showAlert(MESSAGE.NON_EXIST_DEPARTURE);
  } else {
    checkArrivalValidation();
  }
}

export function getDepartureValidation() {
  const departure = $('departure-station-name-input').value;
  const allStations = getAllStations();

  return (
    departure &&
    departure.length >= STATION.MIN_LENGTH &&
    allStations.includes(departure)
  );
}

export function getArrivalValidation() {
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const allStations = getAllStations();

  return (
    arrival &&
    arrival.length >= STATION.MIN_LENGTH &&
    allStations.includes(arrival) &&
    arrival !== departure
  );
}
