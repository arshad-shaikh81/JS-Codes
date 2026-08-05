
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
// ============================================================
