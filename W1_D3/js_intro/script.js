console.log("ready to go!");

// ------------------------------
// WHAT IS JS?
// ------------------------------

// ------------------------------
// Pass function as argument
// ------------------------------
// Sum Function
function sum(a, b) {
  return a + b;
}

// Multiply Function
function multiply(a, b) {
  return a * b;
}

// Do Operation Function
function doOperation(a, b, operation) {
  return operation(a, b);
}

// Call doOperation with sum
// console.log(doOperation(2, 3, sum));

// Call doOperation with multiply
// console.log(doOperation(2, 3, multiply));

// ------------------------------
// Return a function from another function
// ------------------------------
function greet(name) {
  function specialGreet(name) {
    return "Hello " + name;
  }
  return specialGreet(name);
}

// console.log(greet("World"));

// ------------------------------
// Function assigned to a variable
// ------------------------------
const greet2 = function (name) {
  return "Hello " + name;
};

// console.log(greet2("João"));

// ------------------------------
// COMMENTS
// ------------------------------

// ------------------------------
// These are one line comments
// ------------------------------

/* ------------------------------
  This is a multi-line comment
  ------------------------------ */

// ------------------------------
// VARIABLES
// ------------------------------

// Data Types (string, number, boolean, null, undefined, array, object, technically, there are more...)

let name; // Declaring a variable
let fullName, age, email, isHappy, favoriteFood; // Declaring multiple variables

let teacher;
teacher = "João"; // Assigning a value to a variable

let teacherAssistant = "Mateus"; // Declaring and assigning a value to a variable

// JS is case sensitive
let student = "John";
let Student = "Doe";

// console.log(student);
// console.log(Student);

// Reserved words
// let let = "João";
// console.log(let);

// Changing the value of a variable
let numberOfFriends = 6;
numberOfFriends = 7;
// console.log(numberOfFriends);

// Changing the value and the type of a variable
let numberOfChickens = 6;
numberOfChickens = "six";
// console.log("Value:", numberOfChickens, "// Type:", typeof numberOfChickens);

// CONST
// const country = "Portugal";
// country = "Spain";

// let discountedPrice; // we can do this
// const price; // we can't do this, error
