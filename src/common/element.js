export function $(id) {
  return document.getElementById(id);
}

export function createHeader(level, textContent) {
  const header = document.createElement(level);
  header.textContent = textContent;

  return header;
}

export function createDiv() {
  return document.createElement('div');
}

export function getStandard() {
  const radioButtons = document.getElementsByName('search-type');
  let standard = '';

  radioButtons.forEach((button) => {
    if (button.checked) {
      standard = button.value;
    }
  });

  return standard;
}
