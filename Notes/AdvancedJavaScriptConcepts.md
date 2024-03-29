# Advanced JavaScript Concepts

## Primitives
The lowest level building blocks in JavaScript are `primitives`, which include: undefined, null, string, number, bigint, boolean and symbol. All primitives are immutable.

## Truthy vs Falsy
In JavaScript, we can convert the value to boolean using the logical NOT (!) operator. Use NOT operator twice infront of the value to get its boolean value.
```
    !! "hello"
    !! []
    !! true
    !! 0
    !! -1
    !! 1
```

## Hoisting
Even if we used the variable before defining and defined the variable later then also the variable will be considered as the top level. This is called hoist. The function/variable will always be placed at the top of the execution context in the memory. So, it is good to use the variable after defining it. It is safe to use `let` than a `var`.

For the variable that should never be reassigned is defined using `const` type.

```
    getName();
    console.log(x);
    console.log(getName);

    var x = 10;

    function getName() {
        console.log("Ankush");
    }

    console.log(getName);

    // output:
    // Ankush
    // undefined
    // f getName() {
    //     console.log("Ankush");
    // }
    // f getName() {
    //     console.log("Ankush");
    // }

    `Here x has a value undefined because in the first phase of execution context creation, the value of x is undefined. In the second phase of execution context that is code execution, the x is referenced before x gets the value 10. Hence, x is undefined.
    For a function getName(), in the first phase, it stores the whole function code in the memory component of the execution context. Hence, in second phase that is code execution phase, the function getName is got execution even before the function definition because at this time the function code is present in the memory component of the execution context.
    If we try to print function to console, it will print entire function to the console.`
```

```
    getName();
    console.log(x);

    function getName() {
        console.log("Ankush");
    }

    // output:
    // Ankush
    // Error: variable x is not defined

    `Here in the first phase of execution context creation, the variable x will not be created in the memory component because x is not defined. Now, in the second phase of execution context that is code execution, if we try to reference the variable x the variable x is not present in the memory component of the execution context. Hence, it will give the error x is not defined.`
```

```
    getName();
    getName2();

    var getName = () => {
        console.log("Ankush");
    }

    var getName2 = function() {
        console.log("Ankush");
    }

    // output:
    // Throw error getName function is undefined
    // Throw error getName function is undefined

    `When define a function as an arrow function, in the first phase of execution context creation it will allocate the memory for getName function and store the value undefined because the arrow function is considered as a variable. We cannot execute undefined function hence it will throw an error.
    For a function without arrow but defined as an anonymous function, it will store value undefined in the memory component in the first phase of execution context creation. Hence, it will also throw an error of undefined function.`
```

## let and const declarations
`Let and const declarations are hoisted.`
Let and const have allocated memory but they are stored in different memory space than Global memory space. And we cannot access this declarations before putting actual values in them. This is the `hoisting` in let and const.

### Temporal Dead Zone
`Temporal Dead Zone` is the time since the let variable is hoisted and till it is initialized some value.

## Block Scope

### Block
The open and close curley braces is a block in JavaScript. Block is known as `Compound Statement`.
```
{
}
```
The above code is the block in JavaScript and it is doing nothing.<br>
Block is used to group multiple statements together. It is used to place multiple statements in the place where JavaScript expects only one statement.<br>
Eg. For an if condition, JavaScript expects a single statement.
```
    if (true) true;
```
Above code is a valid if condition with a single statement.<br>
If we want to write multiple statements into if condition then we need to use block.
```
    if (true) {
        var num = 10;
        console.log(num);
    }
```
The `if` statement does not have curley braces in it's syntax.

### Block Scope
Every block has a separate memory space. The variables defined using `let` and `const` keywords are placed in the Block Scope. The variables defined in the block using `var` keyword are placed in the Global Scope.

## Shadowing
If the variable is defined outside the block with the same name then the variable inside the block shadows the variable outside the block.
```
    var num = 10;
    let val = 50;
    {
        var num = 50;
        let val = 60;
        let a = 30;
        console.log(num);
        console.log(val);
    }
    console.log(num);
    console.log(val);

    // output
    // 10
    // 60
    // 10
    // 50
```
Here, `num` variable inside the block is shadowing the `num` outside the block. When the num inside the block is executed, it modifies the value of the variable num outside the block.<br>
For variable defined with `let` keyword, the variable `val` inside the block has a block scope and the variable val outside the block has a script scope. The script scope is not a global scope.

Shadowing works the same way in the function as well.

### Illegal shadowing
```
    let a = 20;
    {
        var a = 40;
    }
```
The above code is an illegal shadowing. It will throw the error a is already defined.<br>
If variable is shadowing something, it should never cross the boundry of it's scope. In the above example, var crosses the boundry of the block.
But if we put the above code in the function block then it will be an legal shadowing.
```
    let a = 20;
    function sum() {
        var a = 40;
    }
```
The above code is legal shadowing because the variable defined using var does not crosses its boundry that is the function block.
The `const` also behaves the same.

But we can shadow the variable a using `let` keyword at both places.
```
    let a = 20;
    {
        let a = 40;
    }
```
The above code is the valid shadowing.

```
    var a = 20;
    {
        let a = 40;
    }
```
The above code is also the valid shadowing.

## Arrow function scope
The rules and scope that work on normal function are exactly same for the arrow function.

## Closures
Defining a function inside a function is called `closure`.
```
    function x() {
        var a = 10;
        function y() {
            console.log(a);
        }
        y();
    }
    x();

    // output
    // 10
```

### Returning a function from function
```
    function x() {
        var a = 10;
        function y() {
            console.log(a);
        }
        return y;
    }
    var f = x();
    f();

    // output
    // 10
```
The output of above code will be 10. Here, the function x is gone from memory after execution. So, there is not variable `a`. So, how could function `f` print the value 10? Here comes the role of `closure`.

When function is returned from another function, it still maintain it's lexical scope. Hence, though function `x` no longer exist in the memoty, the function `y` remembers from where it is returned. Along with function `y` the lexical scope of the function `y` is also returned. So, `f` will have function `y` as well as the lexical scope of the function `y` when it is returned from the function `x`.<br>
Important Note and Observation: The function `y` will remember the lexical scope of function `x` only if the variables from function `x` are used in function `y`. If not any variable from function `x` is used in function `y` then function `y` will not remember the lexical scope of function `x` because it is of no use to function `y` here.

### Corner cases with closures

```
    function x() {
        var a = 10;
        function y() {
            console.log(a);
        }
        a = 100;
        return y;
    }
    var f = x();
    f();

    // output
    // 100
```
The output of above code will be 100 because the value of a is reassigned to 100 in the lexical scope of function `y` and then the function `y` with it's lexical scope is returned from function `x`.

```
    function x() {
        var a = 10;
        function y() {
            var b = 30;
            function z() {
                console.log(a, b);
            }
            z();
        }
        y();
    }
    x();

    // output
    // 10, 30
```
In the above code, two closures will be formed. One closure `y` (with variable `b = 30`) for function `z` and another closure `x` (with variable `a = 10`) for function `y`. The variables are not garbage collected. The variables are retained in JavaScript closures.

### Uses of Closures
- Module Design Pattern
- Currying
- Functions like once
- Memoize
- Maintaining state in async world
- setTimeouts
- Iterators
- Data hiding and encapsulation

### Disadvantages of Closures
- Excess use of memory
- Closures are not garbage collected
- If not handled properly, it can lead to memory leak

## setTimeout + Closures
```
    function f() {
        var num = 1;
        setTimeout(function() {
            console.log(num);
        }, 2000);
        console.log("Im executed before setTimeout");
    }
    f();

    // output
    // Im executed before setTimeout
    // 1
```
If we execute above code then `Im executed before setTimeout` will be printed first then JavaScript waits for 2 seconds and then the callback function inside `setTimeout` will be executed and print value of variable `num` that is `1`.
The callback function inside setTimeout forms a closure. setTimeout takes the callback function and stores the function somewhere and attaches the timer to this callback function. When the timer of callback function expires then it takes the callback function, put it again in the call stack and runs it.

JavaScript doesn't wait for setTimeout to complete the timeout. It will execute the next code.

### The wrong approach to use setTimeout
```
    function f() {
        for (var i = 1; i <= 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        console.log("Im executed before setTimeout");
    }
    f();

    // output
    // Im executed before setTimeout
    // 6
    // 6
    // 6
    // 6
    // 6
```
The expected output of the above code is
```
    Im executed before setTimeout
    1
    2
    3
    4
    5
```
But the output is print different that expected is because the the setTimeout is inside a function f. The callback function inside a setTimeout forms a closure. As the callback function inside setTimeout is stored somewhere till the timer expires, the for loop will done with its execution. So, value of `i` will be `6`. As the callback function inside setTimeout forms a closure, it haves the data of its lexical environment. The lexical environment have refernce to the variable `i`. The value of `i` is 6 by the time the timer of callback function expires. Hence, the output will be printed as five times `6`.<br>
To fix the above code we have to use `let` for the variable `i`. This works because the `let` is block scoped. Hence, every callback function inside setTimeout will have it's own copy of the variable `i`.
```
    function f() {
        for (let i = 1; i <= 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        console.log("Im executed before setTimeout");
    }
    f();

    // output
    // Im executed before setTimeout
    // 1
    // 2
    // 3
    // 4
    // 5
```

We can prform the same thing by using var as well. Here, somehow we have to give new copy of `i` everytime to callback function inside setTimeout.
```
    function f() {
        for (var i = 1; i <= 5; i++) {
            function close(x) {
                setTimeout(function () {
                    console.log(x);
                }, x * 1000);
            }
            close(i);
        }
        console.log("Im executed before setTimeout");
    }
    f();

    // output
    // Im executed before setTimeout
    // 1
    // 2
    // 3
    // 4
    // 5
```

### Tricky Interview Question on setTimeout:
What will be the output of following code where timer is set to 0 miliseconds for setTimeout.
```
    console.log("Beginning");

    setTimeout(function() {
        console.log("Callback");
    }, 0);

    console.log("End");
```

The output of obove code will be:
```
    Beginning
    End
    Callback
```
This is because, the `Beginning` will be printed first. Then the callback with the timer 0 miliseconds will be registered and it will wait in the callback queue till the callstack becomes empty. Meanwhile, the control goes to next line of code in the main thread(callstack) and prints `End`, after this the callstack will be empty. Now, the callback function will be pushed to the callstack by event loop and the callback function will be executed and prints `Callstack` to the console.
If there is more code after the line `console.log("End");` then that code will be executed first and if that code takes 10 seconds then the callback function will run after 10 seconds even if we set the timer to 0 seconds. These are the `trust issues` with setTimeout function. But it guarantees that the callback function will wait atleast for provided timer.

### Data hiding and encapsulation using Closure
```
    function counter() {
        var count = 0;
        return function incrementCount() {
            count++;
            console.log(count);
        }
    }

    var counter1 = counter();
    counter1();
    counter1();

    // output
    // 1
    // 2
```
In above code, variable count is hidden from outer scope. So, no one can use or modify the value of variable `count` from the outer scope. This is the data hiding and kind of an encapsulation.

## Constructor function in JavaScript
Constructor function is a good way to write multiple functions inside a function to form a Closure. We have to use `new` keyword while instantiating constructor function.
```
    function Counter() {
        var count = 0;
        this.incrementCounter = function () {
            count++;
            console.log(count);
        }
        this.decrementCounter = function () {
            count--;
            console.log(count);
        }
    }

    var counter1 = new Counter();
    counter1.incrementCounter();
    counter1.incrementCounter();
    counter1.decrementCounter();

    // output
    // 1
    // 2
    // 1
```

## Objects
Object is just a data structure that allows us to associate a collection of key-value pairs.
```
    const obj = new Object();
```
```
    const obj = {
        name: "Ankush",
        hello: function() {
            console.log(`Hello ${this.name}`)
        }
    }
```
Anything that is not a primitive is an object.

## this Keyword
The `this` refers to the owner of the method/object/global object. The browser window, the Global object is [object Window].
