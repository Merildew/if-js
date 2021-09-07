/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `  
  <p id="text1">Text 1</p>
  <p id="text2">Text 2</p>
  <p id="text3">Text 3</p>`;

const sum = require("./lesson-4");
const changeColor = require("./lesson-4");

test("adds 5 + 2 to equal 7", async () => {
  expect(sum(5)(2)).toBe(7);
});

describe("check out change text color", () => {
  const element1 = document.getElementById("text1");
  const element2 = document.getElementById("text2");
  const element3 = document.getElementById("text3");
  const pBlock = [element1, element2, element3];
  test("expect 1st click color is magenta", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("magenta");
    }
  });

  test("expect 2st click color is cyan", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("cyan");
    }
  });

  test("expect 3st click color is firebrick", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("firebrick");
    }
  });

  test("expect 4th click color is springgreen", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("springgreen");
    }
  });

  test("expect 5th click color is skyblue", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("skyblue");
    }
  });

  test("check cycle actions", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changeColor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("magenta");
    }
  });
});
