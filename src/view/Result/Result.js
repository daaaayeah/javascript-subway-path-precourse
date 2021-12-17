import { DISTANCE, HEADER, TIME } from '../../common/constant.js';
import * as elem from '../../common/element.js';

function createResultHeader() {
  return elem.createHeader('h2', HEADER.RESULT);
}

function createStandardHeader() {
  return elem.createHeader('h3', elem.getStandard());
}

function createResultTableHeader() {
  return `
    <thead>
        <tr>
            <th>${DISTANCE.TOTAL}</th>
            <th>${TIME.TOTAL}</th>
        </tr>
    </thead>
  `;
}

function createResultTableBody(distance, time, path) {
  return `
    <tbody>
        <tr>
            <td>${distance}${DISTANCE.UNIT}</td>
            <td>${time}${TIME.UNIT}</td>
        </tr>
        <tr>
            <td colspan="2">${path}</td>
        </tr>
    </tbody>
  `;
}

function createResultTable(distance, time, path) {
  const resultTable = document.createElement('table');
  const resultTableHeader = createResultTableHeader();
  resultTable.innerHTML += resultTableHeader;
  const resultTableBody = createResultTableBody(distance, time, path);
  resultTable.innerHTML += resultTableBody;

  return resultTable;
}

function removeResult() {
  if (elem.$('result-div')) {
    elem.$('result-div').remove();
  }
}

export default function createResult(distance, time, path) {
  removeResult();

  const result = elem.createDiv();
  result.setAttribute('id', 'result-div');
  const resultHeader = createResultHeader();
  const standardHeader = createStandardHeader();
  result.append(resultHeader, standardHeader);
  const resultTable = createResultTable(distance, time, path);
  result.append(resultTable);
  elem.$('app').append(result);

  return result;
}
