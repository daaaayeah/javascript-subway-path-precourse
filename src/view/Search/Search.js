import * as CONS from '../../common/constant.js';
import { createDiv, createHeader } from '../../common/element.js';

function createMainHeader() {
  return createHeader('h1', CONS.HEADER.MAIN);
}

function createForm() {
  return document.createElement('form');
}

function createStationInput(text, id) {
  return `
    ${text} <input id="${id}"></input>
    <br><br>
  `;
}

function createDepartureInput() {
  return createStationInput(
    CONS.STATION.DEPARTURE,
    // eslint-disable-next-line comma-dangle
    'departure-station-name-input'
  );
}

function createArrivalInput() {
  return createStationInput(CONS.STATION.ARRIVAL, 'arrival-station-name-input');
}

function createRadioButton(textContent) {
  const radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('name', 'search-type');
  radioButton.setAttribute('value', textContent);

  return radioButton;
}

function createDepartureLabel() {
  const label = document.createElement('label');
  const radioButton = createRadioButton(CONS.DISTANCE.MIN);
  radioButton.setAttribute('checked', 'checked');
  label.append(radioButton);
  label.innerHTML += CONS.DISTANCE.MIN;

  return label;
}

function createArrivalLabel() {
  const label = document.createElement('label');
  const radioButton = createRadioButton(CONS.TIME.MIN);
  label.append(radioButton);
  label.innerHTML += CONS.TIME.MIN;

  return label;
}

function createRadioButtons() {
  const departureRadioButton = createDepartureLabel();
  const arrivalRadioButton = createArrivalLabel();

  return [departureRadioButton, arrivalRadioButton];
}

function createSearchButton() {
  const searchButton = document.createElement('button');
  searchButton.setAttribute('id', 'search-button');
  searchButton.textContent = CONS.BUTTON.SEARCH;

  return searchButton;
}

function createSearchForm() {
  const searchForm = createForm();
  const departureInput = createDepartureInput();
  searchForm.innerHTML += departureInput;
  const arrivalInput = createArrivalInput();
  searchForm.innerHTML += arrivalInput;
  const radioButtons = createRadioButtons();
  radioButtons.forEach((radioButton) => searchForm.append(radioButton));
  searchForm.innerHTML += '<br><br>';
  const searchButton = createSearchButton();
  searchForm.append(searchButton);

  return searchForm;
}

export default function createSearch() {
  const search = createDiv();
  const mainHeader = createMainHeader();
  const searchForm = createSearchForm();
  search.append(mainHeader, searchForm);

  return search;
}
