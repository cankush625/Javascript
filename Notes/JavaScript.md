# JavaScript Notes

Browser is like an interpreter.<br>
HTML is used to print the content in the browser.<br>
CSS is used to style the content in the browser.<br>
The tag name that we write inside HTML tag is called an <b>element</b>.<br>
The browser knows whatever activies we are doing on the browser page. Even if we move the mouse pointer, the browser knows that the pointer has been moved. Browser also knows if the keyboard key is pressed or not or which key is pressed. This is known as an <b>event</b>.<br>
Every event has a name. For eg. if we click then the event has a name <b>onclick</b>.
Browser understands the instructions in the language called <b>JavaScript</b>.

# JavaScript Hack

JavaScript code for current page is known to the borwser. We can run any of the JavaScript function present in the code of current page from the address bar in the browser.<br>
Go to the browser and run the javascript code using following syntax:

```
    // This will print the current URL of the page
    javascript: alert(document.location)
```
<br>

Similarly, if the code of current page has a function named `payment()` then this function can be executed directly from the browser address bar using following code:

```
    javascript: payment()
```

<br>

If we go to the link using HTML anchor tag(<a></a>) then we will have the option to go the previous page. But if we set the new location using JavaScript `document.location` then we don't have any option to go to the previous page.

# Functions

In JavaScript, we write functions mainly in two ways.
- Statement:
```
    function addition(num1, num2) {
        return num1 + num2;
    }
```
- Expression:
```
    const sum = function(num1, num2) {
        return num1 + num2;
    }
```
Prefer to write the function in expression for because it does not hoisted. They are less likely to pollute the global namespace.

## Functions with Rest paramneters
We can provide as many arguments as we want using `...` before the parameter name.
```
    function hello(name, ...args) {
        console.log(name, args);
    }
```

# Immediately Invoked Function Expression (IIFE)
These are used to run the function immediately after defining it. Here, we wrap the annonymous function in the parenthesis and invoke it using parenthesis afterwards.
```
    (function() {
        console.log("Invoked immediately");
    })();
```

# Arrow functions
Arrow functions are always expressions. Arrow functions don't have their own this object.
```
    const sum = (num1, num2) => return num1 + num2;
```

# Pure functions
Pure function only depends on it's input parameters and only mutates variable within it's local scope. And also it should not produce any side effects.
```
    function square(num) {
        return num ** 2;
    }
```

# Higher Order functions
A function that takes another function as an argument or returns a function when they are called.
```
    function makeCall() {
        return true;
    }

    function callMe(makeCall) {
        makeCall();
        return () => "Called successful";
    }
```

# Replacing for loop with function
```
    arr = [1, 2, 3, 4]
    const square = arr.map(num => num ** 2);
    console.log(square);
```

# Closures
Defining function inside a function
```
    const outer = () => {
        const inner = () => {

        }
    }
```
