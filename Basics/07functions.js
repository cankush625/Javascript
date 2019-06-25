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

let myMultiplier = function(num1, num2) {
    return num1 * num2;
};

console.log(myMultiplier(2, 3));

/*Default parameters*/
let guestUser = function(name = "unnamed", courseCount = 0) {
    return 'Hello ' + name + ' and your course count is ' + courseCount;
}

console.log(guestUser());

/*Taking input*/
console.log(guestUser("Ankush"));
console.log(guestUser("Ankush", 2));