// ============================================================
// JavaScript Array Methods
// map() | filter() | reduce()
// ============================================================


// ============================================================
// 1. MAP FUNCTION
// ============================================================

// Definition:
// map() is used to transform each element of an array
// and returns a new array.

// Example:

const numbers = [1, 5, 10, 20];

// We want to double every number.
// Expected Output: [2, 10, 20, 40]

function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);

console.log("Doubled Numbers:", doubledNumbers);


// ------------------------------------------------------------
// Example 2: Convert Numbers into Binary
// ------------------------------------------------------------

function convertToBinary(number) {
    return number.toString(2);
}

const binaryNumbers = numbers.map(convertToBinary);

console.log("Binary Numbers:", binaryNumbers);


// ============================================================
// 2. FILTER FUNCTION
// ============================================================

// Definition:
// filter() is used to filter elements from an array
// based on a condition and returns a new array.

// Example 1:
// We want only odd numbers.
// Expected Output: [1, 3, 5]

const numbersArray = [1, 2, 3, 4, 5, 6];

function isOdd(number) {
    return number % 2 !== 0;
}

const oddNumbers = numbersArray.filter(isOdd);

console.log("Odd Numbers:", oddNumbers);


// ------------------------------------------------------------
// Example 2:
// We want numbers greater than 4.
// Expected Output: [5, 6]
// ------------------------------------------------------------

function greaterThanFour(number) {
    return number > 4;
}

const numbersAboveFour = numbersArray.filter(greaterThanFour);

console.log("Numbers Greater Than 4:", numbersAboveFour);


// ============================================================
// 3. REDUCE FUNCTION
// ============================================================

// Definition:
// reduce() is used to reduce an array into a single value.

// Example:
// Count how many users belong to each age group.

const users = [
    { firstName: "steave", lastName: "jobs", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// Expected Output:
// {
//     26: 2,
//     75: 1,
//     50: 1
// }

const ageCount = users.reduce(function (accumulator, currentUser) {

    if (accumulator[currentUser.age]) {
        accumulator[currentUser.age]++;
    } else {
        accumulator[currentUser.age] = 1;
    }

    return accumulator;

}, {});

console.log("Age Count:", ageCount);


// ============================================================
// 4. COMBINATION OF FILTER() + MAP()
// ============================================================

// Question:
// Find the first names of users whose age is less than 30.

// Expected Output:
// ["steave", "deepika"]

const usersBelow30 = users
    .filter(user => user.age < 30)
    .map(user => user.firstName);

console.log("Users Below 30:", usersBelow30);


// ============================================================
// 5. SAME QUESTION USING REDUCE()
// ============================================================

// Question:
// Find the first names of users whose age is less than 30.

// We can perform filtering and transformation
// together using reduce().

const usersBelow30UsingReduce = users.reduce(function (accumulator, currentUser) {

    if (currentUser.age < 30) {
        accumulator.push(currentUser.firstName);
    }

    return accumulator;

}, []);

console.log("Users Below 30 Using Reduce:", usersBelow30UsingReduce);


// ============================================================
// SUMMARY
// ============================================================

// map()    -> Transform every element
// filter() -> Select elements based on a condition
// reduce() -> Reduce an array into a single value