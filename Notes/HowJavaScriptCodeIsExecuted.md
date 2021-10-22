# How JavaScript code is executed?

When we run the JavaScript, the first thing happens is the creation of Execution Context. This is also known as a `global execution context`.

Execution context is created in two phases:
1. Memory Create phase: (Phase 1)<br>
In this phase, JavaScript will go through the whole program line-by-line and it allocates memory to all the variables and functions. As soon as it encounters a variable, it allocates a memory to that variables and the value as `undefined`. And in case of functions, the whole `function code` is stored in the memory space of the function name as a variable.

2. Code Execution phase: (Phase 2)<br>
JavaScript once again runs through the whole JavaScript program line-by-line. Here, the functions and calculations in program are done. In this phase, the variables in memory component will get the actual values. when it encounters a function, it does not do anything and goes to the next lines.<br>
When a `function invocation` is encountered, a brand new execution context is created. On function invocation, it creates an execution context in the Code Component of the global execution context. For this new execution context inside global execution context, the creation will also be carried out in two phases as we discussed earlier. Here, only the code inside the function body will be taken into consideration.<br>
When the `return` keyword is encountered in the function exectution, the `return` keyword tells the function just return the whole control back to the execution context where the function was invoked. Here, the whole execution context created by invoked function will be deleted completely.<br>
After the whole program is executed, the `global execution context` will be deleted completely.

## Call Stack

To manage creation, deletion and control management of execution context, JavaScript manages a Stack. This is known as `Call Stack`.
In the bottom of the call stack we have a global execution context. When a function is invoked, new execution context is created then this new execution context is pushed into the call stack.<br>
When we done with function execution, we return the value from function. Here, the new execution context is popped out and the control goes back to the execution context where the function was invoked. At the very end, the global execution context is also popped out and the call stack will be empty.<br>
Call Stack is also known as:<br>
- Execution Context Stack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

Reference: https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=3