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