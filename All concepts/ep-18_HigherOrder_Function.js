// ==========================================
// Higher-Order Function & DRY Principle
// ==========================================


// What is a Higher-Order Function?

// Definition:
// A Higher-Order Function is a function that takes another function
// as an argument or returns a function as its result.


// ------------------------------------------
// Normal Programmer Code
// ------------------------------------------

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//     const output = [];

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// };

// console.log(calculateArea(radius));


// ------------------------------------------
// Using Higher-Order Function
// ------------------------------------------

const radius = [3, 1, 2, 4];

// This function contains the logic for calculating area.
const area = function (radius) {
    return Math.PI * radius * radius;
};

// Higher-Order Function
// It takes another function (logic) as an argument.
const calculate = function (radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
};

console.log(calculate(radius, area));


// ==========================================
// DRY Principle
// ==========================================

// DRY stands for:
// "Don't Repeat Yourself"

// Definition:
// DRY means avoiding duplicate code by writing reusable logic
// instead of repeating the same code multiple times.


// ❌ Without DRY

// function calculateArea(radius) {
//     return Math.PI * radius * radius;
// }

// function calculateAreaAgain(radius) {
//     return Math.PI * radius * radius;
// }

// The same logic is repeated multiple times.
// This violates the DRY principle.


// ✅ With DRY

function calculateArea(radius) {
    return Math.PI * radius * radius;
}

console.log(calculateArea(3));
console.log(calculateArea(5));
console.log(calculateArea(10));

// We wrote the logic once and reused the function multiple times.