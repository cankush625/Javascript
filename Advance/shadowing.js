// Shadowing - If the variable is defined outside the block with the 
// same name then the variable inside the block shadows the variable outside the block.

// Shadowing in Block Scope
// This is the valid shadowing
var num = 10;
let digit = 5;
// Block Scope
{
    var num = 20;
    let digit = 7;
    console.log(num); // 20
    console.log(digit); // 7
}
console.log(num); // 20
console.log(digit); // 5

// Shadowing in Function Scope
var username = "ankush";
let rank = 1;
function myName() {
    var username = "roshan";
    let rank = 2;
    console.log(username); // roshan
    console.log(rank); // 2
}
myName();
console.log(username); // ankush
console.log(rank); // 1

// Illegal Shadowing
// let a = 20;
// {
//     var a = 40;
// }

// Legal Shadowing
// let a = 20;
// function sum() {
//     var a = 40;
// }

// let a = 20;
// {
//     let a = 40;
// }

// var a = 20;
// {
//     let a = 40;
// }