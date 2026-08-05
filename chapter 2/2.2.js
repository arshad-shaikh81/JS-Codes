// ============================================================
// 2.2 ARROW FUNCTIONS
// Modern Syntax and Everyday Usage
// ============================================================


// ------------------------------------------------------------
// 1. Normal Function
// ------------------------------------------------------------

function add(a, b) {
    return a + b;
}

console.log("Normal Function:");
console.log("5 + 5 =", add(5, 5));


// ------------------------------------------------------------
// 2. Arrow Function
// ------------------------------------------------------------

const subtract = (a, b) => {
    return a - b;
};

console.log("\nArrow Function:");
console.log("10 - 5 =", subtract(10, 5));


// ------------------------------------------------------------
// 3. One-Line Arrow Function (Implicit Return)
// ------------------------------------------------------------

// When an arrow function contains only one expression,
// we can remove the curly braces {} and the 'return' keyword.

const multiply = (a, b) => a * b;

console.log("\nOne-Line Arrow Function:");
console.log("5 * 5 =", multiply(5, 5));


// ------------------------------------------------------------
// 4. Usage in Small Programs
// ------------------------------------------------------------

// Example 1: Square Calculator

const square = num => num * num;

console.log("\nSquare Calculator:");
console.log("Square of 4 =", square(4));


// Example 2: Check Even Number

const isEven = num => num % 2 === 0;

console.log("\nCheck Even Number:");
console.log("Is 5 even?", isEven(5));


// Example 3: Greeting Program

const greet = name => "Hello " + name;

console.log("\nGreeting Program:");
console.log(greet("Arshad"));


// ============================================================
// OUTPUT
// ============================================================
//
// Normal Function:
// 5 + 5 = 10
//
// Arrow Function:
// 10 - 5 = 5
//
// One-Line Arrow Function:
// 5 * 5 = 25
//
// Square Calculator:
// Square of 4 = 16
//
// Check Even Number:
// Is 5 even? false
//
// Greeting Program:
// Hello Arshad
//
// ============================================================
