# JavaScript Runtime Environment (JSRE)

JavaScript Runtime Environment consists of JS Engine, Web APIs, Event Loop, Callback Queue, Microtask Queue, etc. Every browser has JavaScript Runtime Environment.

NodeJS also has a JavaScript Runtime Environment. NodeJS is a JavaScript Runtime.

The JavaScript Runtime Environment can have different APIs for browser and different APIs for NodeJS.

# JavaScript Engine
JavaScript Engine takes the code as input. This code goes through 3 main things: `Parsing`, `Compilation` and `Execution`.

During Parsing phase, the code is broken down into token. There is a syntax parser. It converts the code into `AST(Abstract Syntax Tree)`. AST looks like JSON.<br>
Website for generating AST for JavaScript code: `astexplorer.net`.

Compilation and Execution goes hand-in-hand.<br>
When JavaScript is first developed, the JS is written to be an interpreted language. JavaScript can behave like `interpreted` as well as `compiled` language. It's totally depends on the implementation of JS Engine.<br> 
JavaScript Engines use both Interpreter and compiler. This is called `Just In Time compilation(JIT Compilation)`.<br>
The job of compiler is to optimize the code as much as it can so that the code can run faster.

Execution phase is carried out by `Memory Heap` and `Callstack`. Memory Heap is where all variables and functions are stored.<br
Garbage Collector is a program that does the work of cleaing the memory heap. It tries to remove the unused variables to free up the memory. Garbage Collector use `Mark and Sweep Algorithm` for cleaning the memory.

Compilers use many things to do optimizations for the code like:
- Inlining
- Copyelision
- Inline Caching
