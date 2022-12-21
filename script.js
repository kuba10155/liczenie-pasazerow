
let count = 0
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

function implement() {

  count++
  countEl.textContent = count;
}

function save() {
  let countDashed = count + " - "
  saveEl.textContent += countDashed
  count = 0
  countEl.textContent = 0;
}
