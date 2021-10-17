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
