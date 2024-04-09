console.log("ready to go!");

/*
Boolean logic operators
*/
const isTrue = true;
const isFalse = false;

const varWithLogic = 4 > 2;

// Logic Operators
// // OR
const trueOrFalse = isTrue || isFalse;
// // AND
const trueAndFalse = isTrue && isFalse;
// // NOT
const notTrue = !isTrue;

/*
Undefined
*/

let name;
// console.log(name);

/*
Truthy and falsy values
*/
const falsyValues = [0, "", null, undefined, NaN, false];
const truthyValues = [1, " ", "João", {}, [], true, new Date()];

// if ("false") {
//   console.log("Passed thingy is truthy");
// } else {
//   console.log("Passed thingy is falsy");
// }

/*
Immutability
*/
let myName = "João";
// console.log(myName);
myName = "Fernando";
// console.log(myName);
console.log(myName[0]);
myName[0] = "G";
console.log(myName);
