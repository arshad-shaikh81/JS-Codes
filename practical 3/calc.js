// // 3 Develop a simple arithmetic calculator using JavaScript operators and user
// // input.
console.log("=".repeat(40));
console.log(" ".repeat(8) + "Simple Arithmetic calculator");
console.log("=".repeat(40));

const prompt = require('prompt-sync')();
let a = (Number(prompt("Enter a number 1 : ")));
let b = (Number(prompt("Enter a number 2 : ")));

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Please enter valid numbers.");
    process.exit();
}

console.log("+ = 1");
console.log("- = 2");
console.log("% = 3");
console.log("* = 4")
console.log("/ = 5");
let c = (Number(prompt("Which Action you want to perform :")));

let result;

switch (c){
    case 1:
        result = `Your Anwser is : ${a} + ${b} = ${a + b}`;
        break;
    case 2:
        result = `Your Answer is : ${a} - ${b} = ${a - b}`;
        break;
    case 3:
        result = `Your Answer is : ${a} % ${b} = ${a % b}`;
        break;
    case 4:
        result = `Your Answer is : ${a} * ${b} = ${a * b}`;
        break;
    case 5:
        if (b===0){
            console.log("Error: cannot divide by zero ");
            result = undefined;
        }else{
            result =`Your Answer is : ${a} / ${b} = ${a / b}`;
        }
        break;
    default:
        console.log("Invalid choice");
        result = undefined;
}

console.log(result);


