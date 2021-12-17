import { $ } from '../../common/element.js';
import { calculateResultWeight, getResultPath } from '../Result/Result.js';

function onSearchClick(event) {
  event.preventDefault();
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const path = getResultPath(departure, arrival);
  const [distance, time] = calculateResultWeight(departure, arrival);
  console.log(path, distance, time);
}

export default function search() {
  $('search-button').addEventListener('click', onSearchClick);
}
