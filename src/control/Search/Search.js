import { $ } from '../../common/element.js';
import createResult from '../../view/Result/Result.js';
import { calculateResultWeight, getResultPath } from '../Result/Result.js';
import {
  checkDepartureValidation,
  getDepartureValidation,
  getArrivalValidation,
} from './CheckValidation.js';

function checkInputValidation() {
  checkDepartureValidation();

  return getDepartureValidation() && getArrivalValidation();
}

function onSearchClick(event) {
  event.preventDefault();

  if (!checkInputValidation()) return;

  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const path = getResultPath(departure, arrival);
  const [distance, time] = calculateResultWeight(departure, arrival);
  createResult(distance, time, path);
}

export default function search() {
  $('search-button').addEventListener('click', onSearchClick);
}
