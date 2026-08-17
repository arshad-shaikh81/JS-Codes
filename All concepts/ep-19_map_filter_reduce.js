// What is map function
// Definition

// Example

const x = [1, 5, 10, 20];

// We want to make array like double
// [2, 10, 20, 40]

function double(x) {
    return x * 2;
}

const output = x.map(double);

console.log(output);

// How to convert into binary

function binary(x){
    return x.toString(2);
}
const B_output = x.map(binary);

console.log(B_output);

// What is filter function
// Definition

// Example

const arr = [1,2,3,4,5,6];

// we want only odd numbers Ex : [1,3,5]

function isOdd(arr){
    return arr % 2 != 0;
}
const ans = arr.filter(isOdd);

console.log(ans);

// 2 Example Now we want 4 > above values

function abv(arr){
    return arr > 4;
}
const Ans = arr.filter(abv);

console.log(Ans);

// what is Reduce Function
// Definition

// Ex
const users = [
    { firstName: "steave", lastName: "jobs", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// now we count age

// ans = {26 : 2, 75 : 1, 50 : 1}

const age_c = users.reduce(function (acc, curr) {
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(age_c);


