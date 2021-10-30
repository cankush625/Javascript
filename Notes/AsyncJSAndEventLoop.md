# Asynchronous JavaScript

## Web APIs in JavaScript
Most of the things we do in JavaScript are comming from Web APIs. The console, setTimeout, DOM APIs, local storage, fetch, location these functions are comming from browser/Web APIs. These things are not a part of JavaScript but these are provided by browser. The `window` object has all of these methods. The `window` is a global object.

## Event Loop
When we use setTimeout function, for example, then setTimeout function takes one function as a callback function and the timer. When setTimeout executes, the callback function is stored at some place for the time till timer gets expire. After the timer is expired, the callback function of setTimeout needs to be bringed to the callstack inorder to execute. But the callback function does not go directly to the callstack. The callback function go to the callstack through `callback queue`. The Job of event loop is to look for the functions in callback queue and push the callback function from callback queue to the callstack.<br>
The only job of event loop is continuous monitor the callback queue and push the callback functions from callback queue to the callstack when callstack is empty. After the callback function is pushed to the callstack the callback function is removed from the callback queue.

### Callback Queue (Task Queue)
The callback functions that are stored somewhere are bringed to the queue when they are ready to execute. For example, when the timer of the callback function of setTimeout is expired, the callback function is ready to execute. Now, the callback function will be brought to the callback queue.<br>
The event listeners also register an callback for the callback function that will execute on particular event. These callback function also need to brought to the callstack through the callback queue.

### Microtask Queue
Microtask Queue is similar to the Callback Queue but the Microtask Queue has higher priority. The callback function of the promises is go to the microtask queue. And from microtask queue this function will be pushed to the callstack by event loop.

The fetch function is used to make API calls. The fetch function gives a promise when it executes. This promise has a callback function. When the callback function of the promise is ready to execute then the callback function from promise will be pushed to the microtask queue. After that the event loop will look for if the callstack is empty. When the callstack is empty, the event loop will push the callback function from microtask queue to the callstack and run the callback function. Even if the callback queue has callback functions then also the functions from microtask queue will be pushed first to the callstack because microtask queue has high priority.

All the callback functions that come through promises and mutation observer are go through microtask queue.
All other callback functions goes through the callback queue.

## Starvation of functions in callback queue
Sometimes the callstack has lots of lines of code is to execute, so the callback functions inside the callback queue are keep on waiting for their turn to get execute. This is known as the starvation of the tasks/functions inside callback queue.
