// setTimeout takes first argument as a callback function and 
// second argument as a timer in miliseconds
setTimeout(function () {
    console.log("Executed after 5 seconds");
}, 5000);
console.log("Hello");

// Using setTimeout inside loop
function outer() {
    // Use let for variable i to make sure that every instance of 
    // setTimeout have it's own copy of variable i
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("I'm printed before setTimeout");
}
outer();
