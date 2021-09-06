//  Работа с переменными
let user = "John Doe";
console.log(`User ${user}`);
const student = "Lera";
user = student;
console.log(`User ${user}`);
// Lera

//  Работа с примитивами
let test = 1;
test++;
test += "1";
console.log(`Test ${test}`);
// 21, test - string
test -= 1;
console.log(`Test ${test}`);
// 20, test - number
test = Boolean(test);
console.log(`Test ${test}`);
// true

//   С помощью цикла for найдите произведение элементов массива.
const arr = [2, 3, 5, 8];
let result = 1;
for (let x = 0; x < arr.length; x++) {
  result *= arr[x];
}
console.log(`Product of array elements: ${result}`);

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
let result1 = "";
let result2 = "";
for (let x = 0; x < arr1.length; x++) {
  //  С помощью цикла for и оператора if найти элементы > 5-ти, но < 10-ти.
  if (arr1[x] > 5 && arr1[x] < 10) {
    result1 += arr1[x] + " ";
  }
  //  Вывести чётные элементы массива
  if (arr1[x] % 2 === 0) {
    result2 += arr1[x] + " ";
  }
}
console.log(`>5 and <10 numbers: ${result1}`);
console.log(`even numbers: ${result2}`);
