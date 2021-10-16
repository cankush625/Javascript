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
