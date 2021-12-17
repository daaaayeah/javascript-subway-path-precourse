import { $ } from '../../common/element.js';
import createResult from '../../view/Result/Result.js';

function onSearchClick(event) {
  event.preventDefault();
  createResult('', '', '');
}

export default function search() {
  $('search-button').addEventListener('click', onSearchClick);
}
