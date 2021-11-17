const getData = () => {
    // Call the API can get data
    console.log("Fetching data");
}

// This is the debouncing function that optimizes the API calls
const debounce = (fn, delay) => {
    let timer;
    return () => {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

// In the HTML, we will call this optimizedCalls function for the
// for each key up event
const optimizedCalls = debounce(getData, 300);
