import { $ } from '../../common/element.js';
import createResult from '../../view/Result/Result.js';
import { calculateResultWeight, getResultPath } from '../Result/Result.js';

function onSearchClick(event) {
  event.preventDefault();
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const path = getResultPath(departure, arrival);
  const [distance, time] = calculateResultWeight(departure, arrival);
  createResult(distance, time, path);
}

export default function search() {
  $('search-button').addEventListener('click', onSearchClick);
}
