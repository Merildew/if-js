import {
  addChildren,
  increaseValue,
  reduceValue,
  removeChildren,
} from "./top-section-script.js";
import { fillHotels } from "./hotels-script.js";
import { searchDisable, searchRequest } from "./search-script.js";

const filterButton = document.getElementById("filter-button");
const filter = document.getElementById("filter");
const filterCounters = document.getElementsByClassName("filter-counter");
const reduceButtons = document.getElementsByClassName("reduce-button");
const increaseButtons = document.getElementsByClassName("increase-button");
const childrenReduce = document.getElementById("reduceButton2");
const childrenIncrease = document.getElementById("increaseButton2");
const submitButton = document.getElementById("submitButton");
const buttonsForChildrenAndAdults = [
  document.getElementById("reduceButton1"),
  document.getElementById("reduceButton2"),
  document.getElementById("increaseButton1"),
  document.getElementById("increaseButton2"),
];

submitButton.addEventListener("click", searchRequest);

filterButton.onclick = function () {
  filter.classList.toggle("display");
};

for (const elem of filterCounters) {
  elem.firstElementChild.hidden = true;
}

for (const btn of reduceButtons) {
  btn.addEventListener("click", reduceValue);
}
for (const btn of increaseButtons) {
  btn.addEventListener("click", increaseValue);
}

for (const button of buttonsForChildrenAndAdults) {
  button.addEventListener("click", searchDisable);
}

childrenIncrease.addEventListener("click", addChildren);
childrenReduce.addEventListener("click", removeChildren);

fillHotels().catch(() => {
  alert("Oops! Something went wrong. Please try again later.");
});
