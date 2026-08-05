// ============================================================
// 2.5 STRINGS IN JAVASCRIPT
// length → toUpperCase() → toLowerCase() → includes() → trim()
// ============================================================

// A String is a sequence of characters used to store
// and work with textual data in JavaScript.


// ------------------------------------------------------------
// 1. Creating Strings
// ------------------------------------------------------------

// Strings can be created using:
// 1. Double Quotes  " "
// 2. Single Quotes  ' '
// 3. Backticks      ` `

let firstName = "Arshad";
let city = 'Mumbai';
let message = `Hello JavaScript`;

console.log("Creating Strings:");
console.log(firstName);
console.log(city);
console.log(message);


// ------------------------------------------------------------
// 2. String length Property
// ------------------------------------------------------------

// Definition:
// The .length property returns the total number of characters
// present in a string.
//
// Important:
// Spaces are also counted as characters.
//
// Syntax:
// string.length

let language = "JavaScript";

console.log("\nString Length:");
console.log("JavaScript Length:", language.length);

// Output:
// JavaScript Length: 10


// Example with spaces:

let greeting = "Hello World";

console.log("Hello World Length:", greeting.length);

// Output:
// Hello World Length: 11
//
// "Hello" = 5
// Space   = 1
// "World" = 5
//
// Total = 11


// ------------------------------------------------------------
// 3. toUpperCase() Method
// ------------------------------------------------------------

// Definition:
// toUpperCase() converts all letters of a string
// into UPPERCASE letters.
//
// Syntax:
// string.toUpperCase();

let lowerText = "hello javascript";

console.log("\ntoUpperCase() Method:");
console.log("Original:", lowerText);
console.log("Uppercase:", lowerText.toUpperCase());

// Output:
// Original: hello javascript
// Uppercase: HELLO JAVASCRIPT


// ------------------------------------------------------------
// 4. toLowerCase() Method
// ------------------------------------------------------------

// Definition:
// toLowerCase() converts all letters of a string
// into lowercase letters.
//
// Syntax:
// string.toLowerCase();

let upperText = "LEARN JAVASCRIPT";

console.log("\ntoLowerCase() Method:");
console.log("Original:", upperText);
console.log("Lowercase:", upperText.toLowerCase());

// Output:
// Original: LEARN JAVASCRIPT
// Lowercase: learn javascript


// ------------------------------------------------------------
// 5. includes() Method
// ------------------------------------------------------------

// Definition:
// includes() checks whether specified text exists
// inside a string.
//
// Syntax:
// string.includes(searchValue);
//
// Returns:
//
// true  → Text exists
// false → Text does not exist

let sentence = "I am learning JavaScript";

console.log("\nincludes() Method:");

console.log("Contains JavaScript?",sentence.includes("JavaScript"));

console.log(
    "Contains Python?",
    sentence.includes("Python")
);

// Output:
// Contains JavaScript? true
// Contains Python? false


// ------------------------------------------------------------
// 6. includes() is Case-Sensitive
// ------------------------------------------------------------

// JavaScript string searching is case-sensitive.
//
// "JavaScript" and "javascript" are considered different.

let course = "JavaScript";

console.log("\nCase-Sensitive includes():");

console.log(course.includes("Java")); // true
console.log(course.includes("java")); // false


// ------------------------------------------------------------
// 7. trim() Method
// ------------------------------------------------------------

// Definition:
// trim() removes extra whitespace from the BEGINNING
// and END of a string.
//
// Syntax:
// string.trim();
//
// Important:
// It does NOT remove spaces between words.

let username = "   Arshad   ";

console.log("\ntrim() Method:");

console.log("Before Trim:", `"${username}"`);
console.log("After Trim:", `"${username.trim()}"`);

// Output:
//
// Before Trim: "   Arshad   "
// After Trim: "Arshad"


// Example:

let text = "   Hello World   ";

console.log("Trimmed Text:", `"${text.trim()}"`);

// Output:
// "Hello World"
//
// The space between "Hello" and "World" remains.


// ------------------------------------------------------------
// 8. String Methods Do Not Change the Original String
// ------------------------------------------------------------

// Strings in JavaScript are immutable.
//
// Methods like:
// toUpperCase()
// toLowerCase()
// trim()
//
// return a NEW string instead of changing the original string.

let originalName = "arshad";

let uppercaseName = originalName.toUpperCase();

console.log("\nOriginal vs New String:");

console.log("Original:", originalName);
console.log("New:", uppercaseName);

// Output:
// Original: arshad
// New: ARSHAD


// ------------------------------------------------------------
// 9. Storing Modified String
// ------------------------------------------------------------

// If we want to keep the modified value,
// we need to assign it back to a variable.

let userName = "   arshad   ";

userName = userName.trim();
userName = userName.toUpperCase();

console.log("\nModified String:");
console.log(userName);

// Output:
// ARSHAD


// ------------------------------------------------------------
// 10. Method Chaining
// ------------------------------------------------------------

// Multiple string methods can be used together.
// This is called Method Chaining.

let userInput = "   javascript   ";

let cleanedInput = userInput
    .trim()
    .toUpperCase();

console.log("\nMethod Chaining:");
console.log(cleanedInput);

// Output:
// JAVASCRIPT


// ------------------------------------------------------------
// 11. Small Program - Username Cleaner
// ------------------------------------------------------------

// Suppose a user enters a username with unnecessary spaces
// and inconsistent capitalization.

let enteredUsername = "   aRsHaD   ";

let cleanUsername = enteredUsername
    .trim()
    .toLowerCase();

console.log("\nUsername Cleaner:");
console.log("Entered Username:", `"${enteredUsername}"`);
console.log("Clean Username:", cleanUsername);

// Output:
// Entered Username: "   aRsHaD   "
// Clean Username: arshad


// ------------------------------------------------------------
// 12. Small Program - Search Keyword
// ------------------------------------------------------------

let description = "I am learning JavaScript programming";

let hasJavaScript = description.includes("JavaScript");

console.log("\nSearch Program:");
console.log("Contains JavaScript:", hasJavaScript);

// Output:
// Contains JavaScript: true


// ============================================================
// QUICK REVISION
// ============================================================
//
// String
// → Used to store textual data.
//
// .length
// → Returns the total number of characters.
// → Spaces are also counted.
//
// toUpperCase()
// → Converts letters to UPPERCASE.
//
// toLowerCase()
// → Converts letters to lowercase.
//
// includes()
// → Checks whether specified text exists.
// → Returns true or false.
// → Case-sensitive.
//
// trim()
// → Removes whitespace from the beginning and end.
// → Does NOT remove spaces between words.
//
// Method Chaining
// → Using multiple methods together.
//
// Example:
// text.trim().toUpperCase()
//
// ============================================================


// ============================================================
// EASY WAY TO REMEMBER
// ============================================================
//
// "JavaScript".length
//       ↓
//      COUNT
//
//
// "hello".toUpperCase()
//       ↓
//     "HELLO"
//
//
// "HELLO".toLowerCase()
//       ↓
//     "hello"
//
//
// "Hello JavaScript".includes("JavaScript")
//       ↓
//      true
//
//
// "   Hello   ".trim()
//       ↓
//     "Hello"
//
// ============================================================


// ============================================================
// OUTPUT
// ============================================================
//
// Creating Strings:
// Arshad
// Mumbai
// Hello JavaScript
//
// String Length:
// JavaScript Length: 10
// Hello World Length: 11
//
// toUpperCase() Method:
// Original: hello javascript
// Uppercase: HELLO JAVASCRIPT
//
// toLowerCase() Method:
// Original: LEARN JAVASCRIPT
// Lowercase: learn javascript
//
// includes() Method:
// Contains JavaScript? true
// Contains Python? false
//
// Case-Sensitive includes():
// true
// false
//
// trim() Method:
// Before Trim: "   Arshad   "
// After Trim: "Arshad"
// Trimmed Text: "Hello World"
//
// Original vs New String:
// Original: arshad
// New: ARSHAD
//
// Modified String:
// ARSHAD
//
// Method Chaining:
// JAVASCRIPT
//
// Username Cleaner:
// Entered Username: "   aRsHaD   "
// Clean Username: arshad
//
// Search Program:
// Contains JavaScript: true
//
// ============================================================