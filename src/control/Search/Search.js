import { $ } from '../../common/element.js';
import getResultPath from '../Result/Result.js';

function onSearchClick(event) {
  event.preventDefault();
  const departure = $('departure-station-name-input').value;
  const arrival = $('arrival-station-name-input').value;
  const path = getResultPath(departure, arrival);
  console.log(path);
}

export default function search() {
  $('search-button').addEventListener('click', onSearchClick);
}
