// Currying can be done in two ways:
//    - Using bind() method
//    - Using closures

var multiply = function (a, b) {
    console.log(a * b);
}

// Function Currying using bind() method
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(10);

let multiplyByFive = multiply.bind(this, 5);
multiplyByFive(2);

// Function Currying using closures
var multiply = function (a) {
    return function (b) {
        console.log(a * b);
    }
}

let multiplyByThree = multiply(3);
multiplyByThree(5);

let multiplyBySeven = multiply(7);
multiplyBySeven(3);
