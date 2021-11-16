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
