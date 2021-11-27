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


## Event Bubbling and Even Capturing(Trickling) in JavaScript

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


## Event Delegation in JavaScript

When we add event handlers for the elements, we add separate event handler for every element. This is not a right
approach to use event handlers. This is because every event handler will reside in the memory and utilize lots of
memory impacting the performance of the website.
Lets say if we have a list like following:
```
    <ul id="electronics">
        <li id="iphone12">Iphone 12</li>
        <li id="applemacm1max">Apple Macbook M1 Max</li>
        <li id="samsunggalaxy">Samsung Galaxy</li>
    </ul>
```

In the above code, if we add event handler for every list item then it is not an efficient code.
The solution is to use the concept of event delegation. From the event bubbling, we know that event are bubbled up
in the website. The events on list items are propagated up to the ul tag with id electronics. Here, we can write a
single event listener for ul element with electronics id and when event reaches there, we check on which item the 
click had occured and we will redirect to the respective page. As we have used single event handler, the performance
of the website will be improved.

The use of event delegation is only possible because of event bubbling in JavaScript.
```
    document.querySelector("#electronics).addEventListener('click', (e) => {
      console.log(e.target.id);
      if (e.target.tagName == 'LI') {
          window.location.href = "/" + e.target.id;
      }
    });
```

Note: Not all type of events are bubbled up. The events like blur or scroll are not propagated up and need to be handled
separately. But the events like click are always propagated up.
