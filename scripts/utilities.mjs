// here for any potential overlap of code

export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if(callback) {
      callback(data);
    }
}
export function renderListWithTemplate(templateFn, parentElement, list, position="afterbegin", clear=false) {
const htmlStrings = list.map(templateFn);
if (clear) {
    parentElement.innerHTML = "";
}
parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


export async function loadTemplate(path) {
  const template = await fetch(path).then(res => res.text());
  return template;
}
export async function loadFooter() {
  const footerTemplate = await loadTemplate("/movieapi/public/partials/footer.html");
  const footerElement = document.getElementById("main-footer");

  renderWithTemplate(footerTemplate, footerElement);
}
export async function loadHeader() {
  const headerTemplate = await loadTemplate("/movieapi/public/partials/header.html");
  const headerElement = document.getElementById("main-header");

  renderWithTemplate(headerTemplate, headerElement);
}

export function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}