let myself = {
    "firstName": "Ankush",
    "lastName": "Chavan",
}

function printName(age) {
    console.log(this.firstName + " " + this.lastName + " is " + age + " years old");
}

// call() function will call the function inside another object
printName.call(myself, 21);

// apply() function is similar to call function, only difference is it takes list of arguments
printName.apply(myself, [21]);

// bind() function is used to bind a function to the object. Bind will return a function and we can invoke this function later
let myName = printName.bind(myself, 21);
myName();

let myName2 = printName.bind(myself);
myName(22);
