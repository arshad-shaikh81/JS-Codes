// ============================================================
// 2.3 ARRAYS IN JAVASCRIPT
// Creating Arrays → Accessing Values → Array Properties & Length
// ============================================================


// ------------------------------------------------------------
// 1. What is an Array?
// ------------------------------------------------------------

// An Array is used to store multiple values in a single variable.

// Without Array:
let fruit1 = "Apple";
let fruit2 = "Mango";
let fruit3 = "Banana";

// With Array:
let fruits = ["Apple", "Mango", "Banana"];

console.log("Fruits:", fruits);


// ------------------------------------------------------------
// 2. Creating Arrays
// ------------------------------------------------------------

// Arrays are commonly created using square brackets [].

let colors = ["Red", "Green", "Blue"];

console.log("\nColors Array:");
console.log(colors);


// Arrays can also store different data types.

let data = ["Arshad", 18, true, 85.5];

console.log("\nDifferent Data Types:");
console.log(data);


// ------------------------------------------------------------
// 3. Accessing Array Values
// ------------------------------------------------------------

// Every element in an array has an index number.
//
// Index:       0        1         2
//              ↓        ↓         ↓
// Fruits:  ["Apple", "Mango", "Banana"]
//
// Important: Array indexing starts from 0.

console.log("\nAccessing Array Values:");

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Third Fruit:", fruits[2]);


// ------------------------------------------------------------
// 4. Changing Array Values
// ------------------------------------------------------------

// We can change an existing value using its index.

fruits[1] = "Orange";

console.log("\nAfter Changing Array Value:");
console.log(fruits);

// "Mango" is replaced with "Orange".


// ------------------------------------------------------------
// 5. Array Length Property
// ------------------------------------------------------------

// The .length property returns the total number of elements
// present in an array.

let cities = ["New York", "Bangkok", "Mumbai"];

console.log("\nArray Length:");
console.log("Total Cities:", cities.length);


// ------------------------------------------------------------
// 6. Accessing the Last Element
// ------------------------------------------------------------

// Array length and last index are NOT the same.
//
// Example:
//
// Array:       ["New York", "Bangkok", "Mumbai"]
// Index:            0          1         2
// Length:           3
//
// Last Index = Length - 1

console.log("\nLast Element:");
console.log("Last City:", cities[cities.length - 1]);


// ============================================================
// OUTPUT
// ============================================================
//
// Fruits: [ 'Apple', 'Mango', 'Banana' ]
//
// Colors Array:
// [ 'Red', 'Green', 'Blue' ]
//
// Different Data Types:
// [ 'Arshad', 18, true, 85.5 ]
//
// Accessing Array Values:
// First Fruit: Apple
// Second Fruit: Mango
// Third Fruit: Banana
//
// After Changing Array Value:
// [ 'Apple', 'Orange', 'Banana' ]
//
// Array Length:
// Total Cities: 3
//
// Last Element:
// Last City: Mumbai
//
// ============================================================