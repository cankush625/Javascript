# Shortest JS Program

The empty JS file is the shortest JavaScript program.
```
```
Even if the file is empty, when we run the empty JS file, JavaScript will create an `Global Execution Context`. Here, JavaScript creates one object called `window`. This window object is created by `JavaScript Engine`.<br>
This window object has lots of functions and variables. We can use the functions and variables provided by the window object anywhere in our JavaScript code.<br>
JavaScript engine also creates a `this` keyword. At the global level, `this` points to the window object.

`Global space` is the space having the code that is not written in the function in JavaScript.
```
    var num = 10;
    function a() {
        var sum = 0;
    }
```
In the above code, variable num and function a are in the global space but variable sum is not in the glabal space.
The variables and functions in the global space will get attach to the global object that is `window` object.

## Accessing variables and functions in the global space.
We can access the variables and functions in the global space using the window object. If we don't put window infront of the variable or function, then it will assume that we are referring the variable or function from the global space that is from the `window` object. We can also access the variable or function from the global space using `this` keyword.
```
    var num = 10;
    function a() {
        var sum = 0;
    }

    console.log(window.num);
    console.log(num);
    console.log(this.num);
```