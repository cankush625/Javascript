# How JavaScript Works?

JavaScript is an `interpreted` language. It requires an interpreter.

JavaScript is a `dynamically typed` language.

JavaScript is a `multi-paradigmed` language.

JavaScript is based on `prototypal inheritance`. Prototypal Inheritance means that objects can inherit behaviours from other objects. This differs from classical inheritance where we define a class as a blueprint for each object and instantiate it.

Everything in JavaScript is an `object`.

JavaScript is a `single-threaded` language, means it can run only one instruction at a time, even if CPU has multiple cores and available threads.

`JIT (Just In Time) compilation` can be done with JavaScript with the help of modern JS engines like V8, Spidermonkey, or Nitro.

Developers use the JS like the interpreted language, while the JS engines magically compiles parts of source code to low-level machine code behind the scene.

An infinite loop can break the single threaded language. So, to overcome this problem we use an `Event Loop`. Event Loop is a feature that is implemented by JS engines like V8 that allows JS to achieve concurrency. Event Loop can be assumed as a message queue between the single JS thread and the OS.

For each round of the event loop:
- Run synchronous code
- Run Promise or microtask callbacks
- Run async task callbacks
