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
