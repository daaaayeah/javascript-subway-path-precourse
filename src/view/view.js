import { $ } from '../common/element.js';
import createSearch from './Search/Search.js';

export default function createView() {
  const search = createSearch();
  $('app').append(search);
}
