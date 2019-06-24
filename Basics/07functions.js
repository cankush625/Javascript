/*Writing function in javascript*/

let myFunction = function() {
    console.log("Hello!");
};

myFunction();

let myFunction1 = function(name) {
    console.log(`Hello! ${name}`);
};

myFunction1("Ankush");

let fullNameMaker = function(firstName, lastName) {
    console.log(`Hello! ${firstName} ${lastName}`);
};

fullNameMaker("Ankush", "Chavan");

/*Addition of two numbers using function*/
let myAdder = function(num1, num2) {
    let addition = num1 + num2;
    return addition;
};

console.log(myAdder(2, 5)); //type1

let result = myAdder(2, 3);
console.log(result);