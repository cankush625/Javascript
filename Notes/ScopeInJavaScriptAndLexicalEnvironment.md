# Scope In JavaScript

Scope in JavaScript is directly related to the Lexical Environment.
Whenever an execution context is created, a `lexical environment` is also created.

## Lexical Environment

`Lexical Environment` is the local memory along with the lexical environment of it's parent (lexical parent).

Lexical means in hierarchy.

```
    function a() {
        var num = 10;
        function b() {
            console.log(num);
        }
    }

    a();
    console.log(num);
```

Here, num variable is present in the memory component of the execution context of function a. The lexical environment of function a has its memory component of execution context along with the lexical environment of the global scope. The lexical environment of the parent of global execution context is `null`. This whole chain of Lexical Environment is known as `Scope Chain`.

Here, the variable num can be accessed inside function b but the variable num cannot be accessed in the global scope because variable num is not present in the lexical environment of the global execution context.
