import { $ } from '../common/element.js';
import style from '../common/style.js';
import createSearch from './Search/Search.js';

export default function createView() {
  document.head.innerHTML += style;
  const search = createSearch();
  $('app').append(search);
}
