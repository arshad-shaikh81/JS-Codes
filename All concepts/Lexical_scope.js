// What is scope in JavaScript
// Scope in JavaScript determines the accessibility and visibility of variables in
// different parts of the code.

// Global Scope Example :

// let name = "Arshad";

// function greet() {
//     console.log(name);
// }
// greet();


// Global Scope — variable almost poore program mein accessible hota hai.
// Function Scope — variable sirf us function ke andar accessible hota hai.
// Block Scope — let aur const se { } ke andar declare variable sirf us block ke andar
// accessible hota hai.

// Easy Trick 🧠
//    Scope	         Variable accessible kaha?
// Global Scope	       Almost everywhere
// Function Scope	   Sirf function ke andar
// Block Scope	       Sirf { } ke andar

// Lexical Scope in JavaScript
// Lexical Scope ka matlab hai ki inner function apne outer/parent function ke
// variables ko access kar sakta hai, based on function code mein kaha define hua hai.

function outer() {
    let name = "Arshad";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();