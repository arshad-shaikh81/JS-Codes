// // function myName(){
// //     console.log("My Name is Arshad");
// // }
// // myName();
// var a;
// console.log(a);
// a = 10;
//

// Closure Example
// function x(){
//     var a = 11;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

function x(){
    var a = 11;
    function y(){
        console.log(a);
    }
    a = 100;
    return y();
}
x();