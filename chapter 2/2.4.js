// ============================================================
// 2.4 ARRAY METHODS IN JAVASCRIPT
// push() → pop() → shift() → unshift() → indexOf() → includes()
// ============================================================

// Array methods are built-in JavaScript functions used to
// add, remove, search, or check elements inside an array.


// ------------------------------------------------------------
// 1. push() Method
// ------------------------------------------------------------

// Definition:
// push() adds one or more elements to the END of an array.
//
// Syntax:
// array.push(element);

let numbers = [1, 2, 3, 4];

numbers.push(5);

console.log("push() Method:");
console.log(numbers);

// Output:
// [1, 2, 3, 4, 5]


// ------------------------------------------------------------
// 2. pop() Method
// ------------------------------------------------------------

// Definition:
// pop() removes the LAST element from an array.
//
// Syntax:
// array.pop();
//
// It also returns the removed element.

let fruits = ["Apple", "Banana", "Orange"];

let removedFruit = fruits.pop();

console.log("\npop() Method:");
console.log("Updated Array:", fruits);
console.log("Removed Element:", removedFruit);

// Output:
// Updated Array: [ 'Apple', 'Banana' ]
// Removed Element: Orange


// ------------------------------------------------------------
// 3. shift() Method
// ------------------------------------------------------------

// Definition:
// shift() removes the FIRST element from an array.
//
// Syntax:
// array.shift();
//
// It also returns the removed element.

let countries = ["Japan", "China", "Germany"];

let removedCountry = countries.shift();

console.log("\nshift() Method:");
console.log("Updated Array:", countries);
console.log("Removed Element:", removedCountry);

// Output:
// Updated Array: [ 'China', 'Germany' ]
// Removed Element: Japan


// ------------------------------------------------------------
// 4. unshift() Method
// ------------------------------------------------------------

// Definition:
// unshift() adds one or more elements to the BEGINNING
// of an array.
//
// Syntax:
// array.unshift(element);
//
// It returns the new length of the array.

let cities = ["Mumbai", "Kerala", "Bengaluru"];

let newLength = cities.unshift("Gujarat");

console.log("\nunshift() Method:");
console.log("Updated Array:", cities);
console.log("New Length:", newLength);

// Output:
// Updated Array: [ 'Gujarat', 'Mumbai', 'Kerala', 'Bengaluru' ]
// New Length: 4


// ------------------------------------------------------------
// 5. indexOf() Method
// ------------------------------------------------------------

// Definition:
// indexOf() returns the index of a specified element.
//
// Syntax:
// array.indexOf(element);
//
// If the element is not found, it returns -1.

let students = ["Nolan", "Tony", "Peter"];

let position = students.indexOf("Tony");

console.log("\nindexOf() Method:");
console.log("Index of Tony:", position);

// Output:
// Index of Tony: 1


// Example when element does not exist:

console.log("Index of Bruce:", students.indexOf("Bruce"));

// Output:
// Index of Bruce: -1


// ------------------------------------------------------------
// 6. includes() Method
// ------------------------------------------------------------

// Definition:
// includes() checks whether an element exists in an array.
//
// Syntax:
// array.includes(element);
//
// Returns:
// true  → Element exists
// false → Element does not exist

let superheroes = ["Iron Man ", "Spider-Man ", "Thor "];

console.log("\nincludes() Method:");

console.log("superheroes : "+superheroes);
console.log("Is Thor present?", superheroes.includes("Thor"));
console.log("Is Hulk present?", superheroes.includes("Hulk"));

// Output:
// Is Thor present? true
// Is Hulk present? false


// ============================================================
// QUICK REVISION
// ============================================================
//
// push()     → Adds element(s) at the END
//
// pop()      → Removes element from the END
//
// shift()    → Removes element from the BEGINNING
//
// unshift()  → Adds element(s) at the BEGINNING
//
// indexOf()  → Returns the index of an element
//              Returns -1 if not found
//
// includes() → Checks whether an element exists
//              Returns true or false
//
// ============================================================


// ============================================================
// EASY WAY TO REMEMBER
// ============================================================
//
//                  ARRAY
//
//        START                END
//          ↓                   ↓
//
//      unshift()   → ADD ←   push()
//
//      shift()     → REMOVE ← pop()
//
//
// Search:
// indexOf()  → "Where is it?"
//
// Check:
// includes() → "Is it there?"
//
// ============================================================