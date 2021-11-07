const filterButton = document.getElementById("filter-button");
const filter = document.getElementById("filter");

filterButton.onclick = function () {
  filter.classList.toggle("display");
};

const filterCounters = document.getElementsByClassName("filter-counter");
for (const elem of filterCounters) {
  elem.firstElementChild.hidden = true;
}

const reduceButtons = document.getElementsByClassName("reduce-button");
const increaseButtons = document.getElementsByClassName("increase-button");

for (const btn of reduceButtons) {
  btn.addEventListener("click", reduceValue);
}
for (const btn of increaseButtons) {
  btn.addEventListener("click", increaseValue);
}

const childrenIncrease = document.getElementById("increaseButton2");
const childrenReduce = document.getElementById("reduceButton2");
const ageSelector = document.getElementById("age-selector");

childrenIncrease.addEventListener("click", addChildren);
childrenReduce.addEventListener("click", removeChildren);

function removeChildren() {
  const childrenValue = document.getElementById("childrenValue");
  if (childrenValue.innerHTML === "0") {
    ageSelector.style.display = "none";
  }
  const selectTag = ageSelector.getElementsByTagName("select");
  selectTag[selectTag.length - 1].remove();
}

function addChildren() {
  ageSelector.style.display = "flex";
  const selectOptions = document.createElement("select");
  selectOptions.classList.add("year-selector");
  selectOptions.setAttribute("name", "year-selector");
  selectOptions.innerHTML = `<select>
                  <option>1 years old</option>
                  <option>2 years old</option>
                  <option>3 years old</option>
                  <option>4 years old</option>
                  <option>5 years old</option>
                  <option>6 years old</option>
                  <option>7 years old</option>
                  <option>8 years old</option>
                  <option>9 years old</option>
                  <option>10 years old</option>
                  <option>11 years old</option>
                  <option>12 years old</option>
                  <option>13 years old</option>
                  <option>14 years old</option>
                  <option>15 years old</option>
                  <option>16 years old</option>
                  <option>17 years old</option>
                </select>`;
  ageSelector.append(selectOptions);
}

function reduceValue() {
  const counterText = event.target.nextElementSibling;
  let counter = counterText.innerHTML;
  counter--;
  buttonDisable(counterText, counter);
  counterText.innerHTML = counter;
  event.target.parentElement.firstElementChild.setAttribute("value", counter);
  displayVisitors();
}

function increaseValue() {
  const counterText = event.target.previousElementSibling;
  let counter = counterText.innerHTML;
  counter++;
  buttonDisable(counterText, counter);
  counterText.innerHTML = counter;
  event.target.parentElement.firstElementChild.setAttribute("value", counter);
  displayVisitors();
}

function buttonDisable(elem, value) {
  if (value === 0) {
    elem.previousElementSibling.setAttribute("disabled", "disabled");
  } else elem.previousElementSibling.removeAttribute("disabled");

  let upperLimit;
  if (elem === document.getElementById("childrenValue")) {
    upperLimit = 10;
  } else upperLimit = 30;
  if (value === upperLimit) {
    elem.nextElementSibling.setAttribute("disabled", "disabled");
  } else elem.nextElementSibling.removeAttribute("disabled");
}

function displayVisitors() {
  const adultsInput = document.getElementById("adultsInput");
  const childrenInput = document.getElementById("childrenInput");
  const roomsInput = document.getElementById("roomsInput");

  let adults;
  let children;
  let rooms;

  if (adultsInput.hasAttribute("value"))
    adults = adultsInput.getAttribute("value");
  else adults = 0;
  if (childrenInput.hasAttribute("value"))
    children = childrenInput.getAttribute("value");
  else children = 0;
  if (roomsInput.hasAttribute("value"))
    rooms = roomsInput.getAttribute("value");
  else rooms = 0;

  filterButton.setAttribute(
    "value",
    `${adults} Adults — ${children} Children — ${rooms} Rooms `
  );
}
