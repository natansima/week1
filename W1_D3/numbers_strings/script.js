console.log("ready to go!");

/*
Primitive Data Types
*/
// Number
// String
// Boolean
// Undefined
// Null
// Symbol

// ------------------------------
// NUMBERS
// ------------------------------
const age = 34;
const price = 12.99;
const temperatureCelcius = -5;
const firstName = "João";
const halfOfMe = firstName / 2;

// console.log(halfOfMe); // NaN, error

/*
Operators
*/
const addition = 2 + 3;
const subtraction = 2 - 3;
const multiplication = 2 * 3;
const division = 2 / 3;

/*
Advanced Operators
*/
// // Exponentiation
const exponentiation = 2 ** 3;
// 2 * 2 * 2 * 2 * 2
// 8

// // Modulus
const divide = 4 / 2; // output is a float
const modulo = 4 % 2; // output is 0

const divide2 = 7 / 2; // output is a float
const modulo2 = 7 % 2; // output is the remainder -> portion of the dividend that cannot be fairly divided by the divisor

/*
Assignment Operators
*/
let numberOfAttendees = 2;
numberOfAttendees += 3; // numberOfAttendees = numberOfAttendees + 3;

// console.log(numberOfAttendees);

/*
Operators with grouping => ATTENTION to precedence just like math
*/
const resultWithGrouping = (2 + 3) * 4; // 20
const resultWithoutGrouping = 2 + 3 * 4; // 14

const anotherResultWithGrouping = (2 + 3) * 4 ** 2; // 80
const anotherResultWithoutGrouping = 2 + 3 * 4 ** 2; // 50

// ------------------------------
// STRINGS
// ------------------------------
const nameDoubleQuotes = "João";
const nameSingleQuotes = "João";
const nameBackticks = `João`;

/*
Template Literals
*/
const myNameIs = `My name is ${nameDoubleQuotes}`;
const myNameIsAndAge = `My name is ${nameDoubleQuotes} and I am ${2024 - 1984} years old`; // prettier-ignore
const beforeES6 = "My name is " + nameDoubleQuotes + " and I am " + (2024 - 1984) + " years old"; // prettier-ignore

const car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2004,
  color: "red",
  price: 5000,
};
const carAd = `For sale: ${car.brand} ${car.model} from ${car.year} in ${car.color} for only ${car.price}€`;

/*
Multiline Interpolation
*/
const fruits = `
1. banana
2. apple
3. orange
4. cherry
`;
// console.log(fruits);

/*
Special characters
*/
// // Using double quotes inside double quotes
const doubleQuotesInsideDoubleQuotes = 'My name is "João"';
// console.log(doubleQuotesInsideDoubleQuotes);

const withBackslashes = "My name is \"João\""; // prettier-ignore

// // Using apostrophes inside single quotes
const apostrophesInsideSingleQuotes = "I'm 39 years old";
// console.log(apostrophesInsideSingleQuotes);

const withBackslashes2 = 'I\'m 39 years old'; // prettier-ignore

/*
String length
*/

const nameLength = nameDoubleQuotes.length;
// console.log(nameLength);

/*
Methods for string manipulation
*/

// Adding To Strings
let emptyString = "";
emptyString += "Hello Web Dev Bootcamp";
// console.log(emptyString);

// Accessing characters
const message = "Hello there!";
// console.log(`"${message}" is a string and it's length is ${message.length}.`);

// console.log(message.charAt(0)); // <== H, DON'T FORGET that the index starts at 0
// console.log(message.charAt(6)); // <== t

// for (let i = 0; i < message.length; i++) {
//   console.log(message.charAt(i));
// }

// Finding a substring
// console.log(message.indexOf("there")); // <== 6
// console.log(message.indexOf("lo")); // <== 3
// console.log(message.indexOf("Bootcamp")); // <== -1

// Substring multiple occurrences
// console.log(message.indexOf("e")); // <== 1
// console.log(message.indexOf("e", 2)); // <== 8

// Last occurrence
// console.log(message.lastIndexOf("e")); // <== 10

// Repeat a string
const repeat = "ha";
// console.log(repeat.repeat(5)); // <== hahahahaha

// Getting a substring
// // substring(startIndex, endIndex) => endIndex is not included
const substring = message.substring(0, 5); // <== Hello
// console.log(substring);

// // substr(startIndex, length)
const substr = message.substr(6, 5); // <== there  // prettier-ignore

// // slice(startIndex, endIndex) => endIndex is not included
const slice = message.slice(6, 11); // <== there
// console.log(slice);

// Getting a substring with negative indexes
// // substring
const negativeSubstring = message.substring(-5, -1); // <== ""

// // substr
const negativeSubstr = message.substr(-5, -1); // <== ""
const negativeSubstrWithLength = message.substr(-5, 4); // <== here

// // slice
const negativeSlice = message.slice(-5, -1); // <== here

// localeCompare
const a = "a";
const b = "b";

const result = a.localeCompare(b); // <== -1
// console.log(result);
const result2 = b.localeCompare(a); // <== 1
// console.log(result2);

/*
ES6 new string methods
*/

// startsWith
const fromBeginning = message.startsWith("Hello"); // <== true
// console.log(fromBeginning);
const fromMiddle = message.startsWith("Hello", 2); // <== false
// console.log(fromMiddle);

// endsWith
const ending = message.endsWith("there!"); // <== true
// console.log(ending);
const withLength = message.endsWith("Hello", 5); // <== true
// console.log(withLength);

// includes
const includes = message.includes("lo"); // <== true
// console.log(includes);
const includesWithIndex = message.includes("lo", 4); // <== false
// console.log(includesWithIndex);
