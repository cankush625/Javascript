# Functions

## Function Statement aka Function Decalration
```
    function f() {
        
    }
```
The code above is called function statement

## Function Expression
```
    var f = function () {

    }
```
Assigning function to the variable is called Function Expression

## Difference  between Function Statement and Function Expression
The major difference between function statement and function expression is the hoisting.

We can call function statement even before creating it. But function expression cannot be called before it is created.

## Anonymous Function
Function without name is an anonymous function.
```
    var f = function () {

    }
```
An anonymous function does not have it's own identity. According to ES6 function statement should always have a name.<br>
Anomymous functions are used when the functions are used as values.

## Named Function Expression
Named function expression is same as that of the anonymous function but it have a name.
```
    var a = function f() {

    }
```
The above function is a named function expression. We cannot call this function like `f()`, it will give error. Here, `f` is not a function in outer scope, we cannot use it in outer scope.<br>

## Difference between Parameters and Arguments
The identifiers placed in the function are called Parameters.
```
    function f(a, b) {

    }
```
In above code, a and b are parameters. Parameters are variables.<br>
The values that we provide to the function call are called arguments.
```
    f(2, 3);
```
In the above code, `2` and `3` are called arguments.

## First Class Functions
The ability of functions to use functions as values and pass functions as arguments to another function, or funcitons can be returned from functions are called First Class Functions.
We can pass functions as arguments to another function.
Functions are First Class Citizens in JavaScript.


## Callback Functions
When we pass function to another function it is called Callback function.<br>
Callback allows us to do async operations in JavaScript.
```
    function x(y) {
        console.log("x");
        y();
    }

    x(function y() {
        console.log("y");
    });
```
The callback function forms a `closure` with it's outer environment/lexical environment.

## Main Thread in JavaScript
Call Stack is also known as Main Thread in JavaScript.
We should never write a code that will block the main thread. So, we can use async operations in JavaScript to keep the main thread unblocked.

## Event Listeners
The event listeners take the callback function as argument.
```
    document.get ElementById("clickHere)
        .addEventListener("click", function c() {
            console.log("I'm clicked!");
    });
```

To achieve the data hiding/encapsulation, we should use the event listeners with the Closures.
```
    function evntListener() {
        let count = 0;
        document.get ElementById("clickHere)
            .addEventListener("click", function c() {
                console.log("I'm clicked!", count++);
        });
    }

    evntListener();
```
The callback function in Event Listener forms a `closure` with it's lexical environment.

## Garbage Collection and removeEventListeners
Event Listners are heavy. They take lots of memory because they form closure. That's why we should remove event listeners when we are not using them.
