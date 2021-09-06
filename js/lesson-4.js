// sum function
function sum(x) {
  return function (y) {
    return x + y;
  };
}
console.log(sum(5)(2));

// colored text task
const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
const element1 = document.getElementById("text1");
const element2 = document.getElementById("text2");
const element3 = document.getElementById("text3");
const pBlock = [element1, element2, element3];
console.log(pBlock);

for (let i = 0; i < pBlock.length; i++) {
  pBlock[i].addEventListener("click", changeColor(pBlock[i]));
}

function changeColor(elem) {
  let counter = 0;
  return function () {
    if (counter === colors.length) {
      counter = 0;
    }
    elem.style.color = colors[counter];
    counter++;
  };
}
