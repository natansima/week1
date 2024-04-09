console.log("ready to go!");

/*
Writing big numbers
*/
const bigNumber = 1000000000;
const anotherBigNumber = 1e9;

const areEqual = bigNumber === anotherBigNumber;
// console.log(areEqual);

const smallNumber = 1e-3;
const anotherSmallNumber = 1 / 1000;
// console.log(someSmallNumber);
// console.log(anotherSmallNumber);

/*
Number Methods for Rounding
*/
const intOne = 3.4;
const intTwo = -1.2;
const intThree = 3.6;

// Math.floor() => Rounds down
const floorOne = Math.floor(intOne); // <== 3
const floorTwo = Math.floor(intTwo); // <== -2
const floorThree = Math.floor(intThree); // <== 3
// console.log(floorOne, floorTwo, floorThree);

// Math.ceil() => Rounds up
const ceilOne = Math.ceil(intOne); // <== 4
const ceilTwo = Math.ceil(intTwo); // <== -1
const ceilThree = Math.ceil(intThree); // <== 4
// console.log(ceilOne, ceilTwo, ceilThree);

// Math.round() => Rounds to the nearest integer
const roundOne = Math.round(intOne); // <== 3
const roundTwo = Math.round(intTwo); // <== -1
const roundThree = Math.round(intThree); // <== 4
// console.log(roundOne, roundTwo, roundThree);

/*
Rounding to a specific number of decimal places
*/

// Multiply and Divide + Math.round()
let num = 3.14159265359;

let roundToOneDecimal = Math.round(num * 10) / 10; // <== 3.1
// console.log(roundToOneDecimal);
let roundToTwoDecimals = Math.round(num * 100) / 100; // <== 3.14
// console.log(roundToTwoDecimals);
let roundToThreeDecimals = Math.round(num * 1000) / 1000; // <== 3.142
// console.log(roundToThreeDecimals);

// toFixed()
const fixedOne = num.toFixed(1); // <== "3.1", problem... it returns a string
// console.log(fixedOne);
const fixedOneSolution = Number(num.toFixed(1)); // <== 3.1
const fixedOneSolution2 = +num.toFixed(1); // <== 3.1
// console.log(fixedOneSolution, fixedOneSolution2);

/*
Other math methods on numbers
*/

// Math.random()
const randomNumberOne = Math.random(); // <== random number between 0 and 1
const randomNumberTwo = Math.random();
const randomNumberThree = Math.random();
// console.log(randomNumberOne, randomNumberTwo, randomNumberThree);

// Math.max() and Math.min()
const maxNumber = Math.max(1, 2, 3, 4, 5); // <== 5
const minNumber = Math.min(1, 2, 3, 4, 5); // <== 1
// console.log(maxNumber, minNumber);

// Math.pow()
const power = Math.pow(2, 10); // <== 1024
// console.log(power);
