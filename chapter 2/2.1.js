// ============================================================
// FUNCTIONS IN JAVASCRIPT
// Definition → Calling → Parameters → Arguments → Return
// ============================================================


// ------------------------------------------------------------
// 1. What is a Function?
// ------------------------------------------------------------

// A function is a reusable block of code that performs
// a specific task.
//
// Write once → Call whenever needed.


// Without Function:

let a = 10;
let b = 20;

console.log("Without Function:");
console.log(a + b);


// With Function:

function add(a, b) {
    return a + b;
}

console.log("\nWith Function:");
console.log("10 + 20 =", add(10, 20));
console.log("5 + 7 =", add(5, 7));
console.log("100 + 200 =", add(100, 200));


// ------------------------------------------------------------
// 2. Defining a Function
// ------------------------------------------------------------

// Creating a function is called "Function Definition".
//
// Basic Syntax:
//
// function functionName() {
//     // code to execute
// }
//
// Parts:
//
// function  → Keyword
// greet     → Function Name
// ()        → Parentheses
// {}        → Function Body

function greet() {
    console.log("Hello!");
}


// ------------------------------------------------------------
// 3. Calling a Function
// ------------------------------------------------------------

// Defining a function does NOT execute it.
//
// To execute the function, we need to call (invoke) it
// using the function name followed by ().

console.log("\nCalling a Function:");

greet();

// Output:
// Hello!


// ------------------------------------------------------------
// 4. Parameters
// ------------------------------------------------------------

// Parameters allow functions to accept input values.
//
// Here "name" is a parameter.

function greetPerson(name) {
    console.log("Hello " + name);
}

console.log("\nFunction with Parameter:");

greetPerson("Arshad");
greetPerson("Rahul");
greetPerson("Priya");


// ------------------------------------------------------------
// 5. Multiple Parameters
// ------------------------------------------------------------

// A function can accept multiple parameters.
// Parameters are separated using commas.

function sum(num1, num2) {
    return num1 + num2;
}

console.log("\nMultiple Parameters:");
console.log("10 + 5 =", sum(10, 5));


// ------------------------------------------------------------
// 6. Parameters vs Arguments
// ------------------------------------------------------------

// PARAMETER:
// Variable written inside the function definition.
//
// ARGUMENT:
// Actual value passed while calling the function.
//
// Example:

function introduce(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}

introduce("Arshad", 18);

// name, age      → Parameters
// "Arshad", 18   → Arguments


// ------------------------------------------------------------
// 7. How Values Flow
// ------------------------------------------------------------

function calculateTotal(a, b) {
    return a + b;
}

let total = calculateTotal(10, 5);

console.log("\nHow Values Flow:");
console.log("Result:", total);

// Flow:
//
// calculateTotal(10, 5)
//
//        ↓
//
// a = 10
// b = 5
//
//        ↓
//
// a + b
//
//        ↓
//
// return 15


// ------------------------------------------------------------
// 8. console.log() vs return
// ------------------------------------------------------------

// This is an important difference:
//
// console.log() → Displays a value on the screen/console.
// return        → Sends a value back from the function.


// Example 1: Using console.log()

function addWithLog(a, b) {
    console.log(a + b);
}

console.log("\nUsing console.log():");

let result1 = addWithLog(10, 20);

console.log("Stored Value:", result1);

// Output:
//
// 30
// Stored Value: undefined
//
// Why?
// Because the function printed 30,
// but it did NOT return 30.


// Example 2: Using return

function addWithReturn(a, b) {
    return a + b;
}

console.log("\nUsing return:");

let result2 = addWithReturn(10, 20);

console.log("Stored Value:", result2);

// Output:
//
// Stored Value: 30
//
// Here return sends the value back,
// so it can be stored and reused.


// ------------------------------------------------------------
// 9. Reusing Returned Values
// ------------------------------------------------------------

function multiply(a, b) {
    return a * b;
}

let answer = multiply(5, 4);

console.log("\nReusing Returned Value:");
console.log("Answer:", answer);
console.log("Answer + 10 =", answer + 10);


// ============================================================
// QUICK REVISION
// ============================================================
//
// Function   → Reusable block of code.
//
// Definition → Creating a function.
//
// Calling    → Running a function using functionName().
//
// Parameter  → Variable in the function definition.
//
// Argument   → Actual value passed to the function.
//
// console.log()
//            → Displays a value.
//
// return     → Sends a value back from the function.
//
// ============================================================


// ============================================================
// OUTPUT
// ============================================================
//
// Without Function:
// 30
//
// With Function:
// 10 + 20 = 30
// 5 + 7 = 12
// 100 + 200 = 300
//
// Calling a Function:
// Hello!
//
// Function with Parameter:
// Hello Arshad
// Hello Rahul
// Hello Priya
//
// Multiple Parameters:
// 10 + 5 = 15
//
// Name: Arshad
// Age: 18
//
// How Values Flow:
// Result: 15
//
// Using console.log():
// 30
// Stored Value: undefined
//
// Using return:
// Stored Value: 30
//
// Reusing Returned Value:
// Answer: 20
// Answer + 10 = 30
//
// ============================================================
