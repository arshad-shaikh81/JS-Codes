// ============================================================
// UNIT 1 - JAVASCRIPT BASICS & LOGIC BUILDING
// Intro → Output → Variables → Data Types → Operators →
// Popup Boxes → Conditional Statements → Loops → Error Handling
// ============================================================


// ------------------------------------------------------------
// 1. Introduction to JavaScript
// ------------------------------------------------------------

// JavaScript is a programming language used to make web
// pages interactive.
//
// It can:
// - Change HTML content
// - React to user actions (clicks, typing, etc.)
// - Perform calculations and logic
// - Talk to servers (APIs)
//
// JavaScript code runs inside the browser (or Node.js).


// ------------------------------------------------------------
// 2. Output Methods
// ------------------------------------------------------------

// JavaScript gives multiple ways to show output.

console.log("\nOutput Methods:");

console.log("This is console.log - prints to the console");

// document.write("This writes directly to the HTML page");
// alert("This shows a popup box");            (covered in section 6)
// document.getElementById("id").innerHTML = "..."  (used with HTML)

// Note: document.write() and innerHTML need a browser/HTML file,
// so only console.log() is used to keep this file runnable
// in Node.js as well.


// ------------------------------------------------------------
// 3. Variables (var, let, const)
// ------------------------------------------------------------

// A variable is a container used to store data.
//
// var   → old way, function-scoped, can be redeclared
// let   → modern way, block-scoped, can be reassigned
// const → block-scoped, CANNOT be reassigned

var oldWay = "I am var";
let city = "Ahmedabad";
const pi = 3.14159;

console.log("\nVariables:");
console.log("var:", oldWay);
console.log("let:", city);
console.log("const:", pi);

// let can be reassigned
city = "Mumbai";
console.log("let after reassign:", city);

// const CANNOT be reassigned
// pi = 3.14;   // ❌ This line would throw an error


// ------------------------------------------------------------
// 4. Data Types
// ------------------------------------------------------------

// JavaScript has two categories of data types:
//
// PRIMITIVE TYPES:
// String, Number, Boolean, Undefined, Null, Symbol, BigInt
//
// NON-PRIMITIVE (Reference) TYPES:
// Object, Array, Function

let name = "Arshad";        // String
let age = 18;                // Number
let isStudent = true;        // Boolean
let address;                 // Undefined
let marks = null;            // Null
let hobbies = ["coding", "reading", "gaming"];   // Array (Object)
let student = { name: "Arshad", age: 18 };        // Object

console.log("\nData Types:");
console.log(typeof name, "→", name);
console.log(typeof age, "→", age);
console.log(typeof isStudent, "→", isStudent);
console.log(typeof address, "→", address);
console.log(typeof marks, "→", marks);
console.log(typeof hobbies, "→", hobbies);
console.log(typeof student, "→", student);


// ------------------------------------------------------------
// 5. Operators
// ------------------------------------------------------------

// Arithmetic Operators: +  -  *  /  %  **
// Assignment Operators: =  +=  -=  *=  /=
// Comparison Operators: ==  ===  !=  !==  >  <  >=  <=
// Logical Operators:    &&  ||  !

let x = 10;
let y = 3;

console.log("\nArithmetic Operators:");
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** y =", x ** y);

console.log("\nComparison Operators:");
console.log("x == '10' :", x == "10");    // true (loose)
console.log("x === '10' :", x === "10");  // false (strict)
console.log("x > y :", x > y);
console.log("x <= y :", x <= y);

console.log("\nLogical Operators:");
console.log("(x > 5 && y < 5):", (x > 5 && y < 5));
console.log("(x > 5 || y > 5):", (x > 5 || y > 5));
console.log("!(x > 5):", !(x > 5));


// ------------------------------------------------------------
// 6. Popup Boxes
// ------------------------------------------------------------

// Popup boxes only work in a browser environment.
// (They will NOT run in Node.js / VS Code terminal.)
//
// alert("This is an alert box");
//      → Shows a message to the user.
//
// let userName = prompt("Enter your name:");
//      → Takes input from the user.
//
// let isSure = confirm("Are you sure?");
//      → Returns true (OK) or false (Cancel).

console.log("\nPopup Boxes (browser only):");
console.log("alert()   → shows a message");
console.log("prompt()  → takes user input, returns a string");
console.log("confirm() → returns true or false");


// ------------------------------------------------------------
// 7. Conditional Statements
// ------------------------------------------------------------

// Used to make decisions in code.
//
// if, else if, else
// switch

let marksObtained = 75;

console.log("\nConditional Statements (if / else):");

if (marksObtained >= 90) {
    console.log("Grade: A+");
} else if (marksObtained >= 75) {
    console.log("Grade: A");
} else if (marksObtained >= 50) {
    console.log("Grade: B");
} else {
    console.log("Grade: Fail");
}

// switch statement

let day = 3;

console.log("\nConditional Statements (switch):");

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Some other day");
}


// ------------------------------------------------------------
// 8. Loops
// ------------------------------------------------------------

// Used to repeat a block of code multiple times.
//
// for, while, do-while

console.log("\nLoops (for):");

for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

console.log("\nLoops (while):");

let count = 1;
while (count <= 3) {
    console.log("count =", count);
    count++;
}

console.log("\nLoops (do-while):");

let num = 1;
do {
    console.log("num =", num);
    num++;
} while (num <= 3);


// ------------------------------------------------------------
// 9. Error Handling (try, catch, throw)
// ------------------------------------------------------------

// try    → Code that might cause an error.
// catch  → Code that runs if an error occurs.
// throw  → Manually creates a custom error.

console.log("\nError Handling:");

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log("10 / 2 =", divide(10, 2));
    console.log("10 / 0 =", divide(10, 0));
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("Division attempt finished");
}


// ============================================================
// QUICK REVISION
// ============================================================
//
// Introduction  → JS runs in browser/Node, adds interactivity.
//
// Output        → console.log(), document.write(), innerHTML.
//
// Variables     → var (old), let (reassignable), const (fixed).
//
// Data Types    → String, Number, Boolean, Undefined, Null,
//                 Object, Array.
//
// Operators     → Arithmetic, Assignment, Comparison, Logical.
//
// Popup Boxes   → alert(), prompt(), confirm()  (browser only).
//
// Conditionals  → if / else if / else, switch.
//
// Loops         → for, while, do-while.
//
// Error Handling→ try, catch, throw, finally.
//
// ============================================================


// ============================================================
// OUTPUT
// ============================================================
//
// Output Methods:
// This is console.log - prints to the console
//
// Variables:
// var: I am var
// let: Ahmedabad
// const: 3.14159
// let after reassign: Mumbai
//
// Data Types:
// string → Arshad
// number → 18
// boolean → true
// undefined → undefined
// object → null
// object → [ 'coding', 'reading', 'gaming' ]
// object → { name: 'Arshad', age: 18 }
//
// Arithmetic Operators:
// x + y = 13
// x - y = 7
// x * y = 30
// x / y = 3.3333333333333335
// x % y = 1
// x ** y = 1000
//
// Comparison Operators:
// x == '10' : true
// x === '10' : false
// x > y : true
// x <= y : false
//
// Logical Operators:
// (x > 5 && y < 5): true
// (x > 5 || y > 5): true
// !(x > 5): false
//
// Popup Boxes (browser only):
// alert()   → shows a message
// prompt()  → takes user input, returns a string
// confirm() → returns true or false
//
// Conditional Statements (if / else):
// Grade: A
//
// Conditional Statements (switch):
// Wednesday
//
// Loops (for):
// i = 1
// i = 2
// i = 3
// i = 4
// i = 5
//
// Loops (while):
// count = 1
// count = 2
// count = 3
//
// Loops (do-while):
// num = 1
// num = 2
// num = 3
//
// Error Handling:
// 10 / 2 = 5
// Error caught: Cannot divide by zero
// Division attempt finished
//
// ============================================================