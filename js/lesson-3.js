//  Создайте функцию palindrome
let enter = prompt('Enter your palindrome');

// 1 variant
function palindrome(world){
    return world==world.split('').reverse().join('');
}
console.log('is palindrome 1', palindrome(enter));

// 2 variant
function palindrome2(world){
    world = world.split('');
    for(let i=0; i < world.length / 2; i++){
        if(world[i] !== world[world.length-i-1])
            return false;
    }
    return true;
}
console.log('is palindrome 2', palindrome2(enter));

//  Функция min(a, b) и функция max(a,b)
let a,b;
a = validation(a);
b = validation(b);
let min = (a,b) => Number(a)>Number(b) ? b : a;
let max = (a,b) => Number(a)<Number(b) ? b : a;
console.log(`Min from ${a} and ${b} is ${min(a,b)}`);
console.log(`Max from ${a} and ${b} is ${max(a,b)}`);

function validation(x){
    x = prompt(`Enter`);
    if(isNaN(Number(x))){
        alert('Enter the number');
        return validation(x);
    }
    else return x;
}

// Массив из 10 чисел, 0 заменяется на 'zero'
let arr10 = Array.from({length:10}, ()=>Math.floor(Math.random() * 100));
console.log('Initial Array', arr10);

// first method
arr10 = Array.from(arr10, elem = isZero)
console.log(arr10);

function isZero(elem){
    elem = String(elem);
    if(elem.includes('0')){
        elem = elem.replace(/0/g, 'zero');
    }
    return elem;
}

//second method
console.log(toZero(arr10));
function toZero(arr){
    arr = arr.join(',').split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i]=='0'){
            arr[i]='zero';
        }
    }
    arr = arr.join('').split(',');
    return arr;
}



