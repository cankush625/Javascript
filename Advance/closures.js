let a = 10;
console.log("hello");
function f(b) {
    console.log(a, b);
}

// inner function forms a closure with it's outer function and inner function will have memory of it's lexical scope.
function outer() {
    let twenty = 20;
    function inner(num2) {
        console.log(a + num2);
    }
    inner(twenty);
}

f(20);
outer();