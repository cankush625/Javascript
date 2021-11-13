country = {
    "name": "India",
    "capital": "Delhi"
}

function showCountry(states, uts) {
    console.log("The capital of " + this.name + " is " + this.capital + " and " + states + " states and " + uts + " union territories");
}

// bind method provided by JavaScript
let showMyCountry = showCountry.bind(country, 28);
showMyCountry(8);

// My implementation of bind method as a fallback to bind method provided by JavaScript
Function.prototype.myBindFunction = function (...args) {
    let otherargs = args.slice(1);
    let obj = this;
    return (...args2) => {
        obj.apply(args[0], [...otherargs, ...args2]);
    }
}

let showMyCountry2 = showCountry.myBindFunction(country, 28);
showMyCountry2(8);
