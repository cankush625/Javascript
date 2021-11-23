## Difference between async and defer in JavaScript

When we include the scripts directly into the HTML, then when HTML parse reach to the line where <br>
JS scripts are included then it will first stops the HTML parsing and download the script and start executing them. <br>
After the scripts are fully executed, it will resume the HTML parsing. This will make the HTML parsing slow in browser.
```
    <script src="" />
```

To overcome above issue we use async and defer.

### async attribute
The `async` attribute will load the scripts and do the HTML parsing in parallel. But as soon as JS scripts are downloaded,
it will stop the HTML parsing, execute the JS scripts completely and then resume the HTML parsing. <br>
The `async` attribute does not gurantees the order of execution of the scripts.
```
    <script async src="" />
```

### defer attribute
The `defer` attribute is best of the both worlds. When we use defer, the downloading of JS scripts and HTML parsing will 
happen in parallel. Once the HTML parsing is completed, it will execute the JS scripts. <br>
The `defer` attribute guarantees the order of execution of the scripts.
```
    <script defer src="" />
```


## Debouncing in JavaScript
Debouncing is used to improve the performance of the webpage.

### Applications:

Debouncing is used when we are implementing search bars. It is used to optimize the API calls that made when we type any letter in
the search bar. Here, rather than making API call when we enter the letter, we can implement the functionality that if we pause
while writing for 400 milliseconds then do an API call. This will reduce the number of API calls made and increase the performance
of the system.


# Event Bubbling and Even Capturing(Trickling) in JavaScript

If we have nested elements lets say div inside div inside div and lets say we have added onclick event to all of these three nested
divs. Here, when user clicks on the inner div, it will call the onclick event of all three divs, but these onclick events will be 
called in a order. If the onclick event on innermost div (child div) is called first and then outer div (parent div) and then outest 
div (grandparent div), this is called `event bubbling`. The onclick will always bubble up in case of event bubbling. <br>
In case of event Trickling, if user click on outest div then the outest div will be called first, then inner div and then the inner-most
div is called. Here, the onclick event will be trickled down.
```
    <div id="grandparent>
        <div id="parent>
            <div id="child>
            </div>
        </div>
    </div>
```

```
    // Event Bubbling
    // Set the attribute in event listener to false
    document.querySelector("#grandparent")
      .addEventListener("click", () => {
        console.log("Grandparent clicked!");
    }, false);

    document.querySelector("#parent")
      .addEventListener("click", () => {
        console.log("Parent clicked!");
    }, false);

    document.querySelector("#child")
      .addEventListener("click", () => {
        console.log("Child clicked!");
    }, false);
```

```
    // Event Trickling (Capturing)
    // Set the attribute in event listener to true
    document.querySelector("#grandparent")
      .addEventListener("click", () => {
        console.log("Grandparent clicked!");
    }, true);

    document.querySelector("#parent")
      .addEventListener("click", () => {
        console.log("Parent clicked!");
    }, true);

    document.querySelector("#child")
      .addEventListener("click", () => {
        console.log("Child clicked!");
    }, true);
```

The above code has a performance issue because it does propagation of onclick events. We can control the propagation by
mixing the event listener attribute.

```
    // Event 
    document.querySelector("#grandparent")
      .addEventListener("click", () => {
        console.log("Grandparent clicked!");
    }, true); // trickling

    document.querySelector("#parent")
      .addEventListener("click", () => {
        console.log("Parent clicked!");
    }, false); // bubbling

    document.querySelector("#child")
      .addEventListener("click", () => {
        console.log("Child clicked!");
    }, true); // trickling
```

Stop the bubbling and trickling propagation

```
    // Event Bubbling
    // Set the attribute in event listener to false
    document.querySelector("#grandparent")
      .addEventListener("click", () => {
        console.log("Grandparent clicked!");
    }, false);

    document.querySelector("#parent")
      .addEventListener("click", (e) => {
        console.log("Parent clicked!");
        e.stopPropagation();
    }, false);

    document.querySelector("#child")
      .addEventListener("click", () => {
        console.log("Child clicked!");
    }, false);
```
