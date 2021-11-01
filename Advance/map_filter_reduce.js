arr = [1, 2, 3, 4];

// Get list of square of all elements in the array
const result = arr.map(function (x) {
    return x * x;
})

console.log(result);

// Get list of cube of all elements in the array
const cube = arr.map((x) => x * x * x);
console.log(cube);

// Get list of odd numbers from the array
const oddNumbers = arr.filter((x) => x % 2);
console.log(oddNumbers);

// Get list of even numbers from the array
const evenNumbers = arr.filter((x) => x % 2 === 0);
console.log(evenNumbers);

// Get the max element from the array
const max = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(max);

// Get the sum of all elements in the array
const sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
console.log(sum);
console.log(sum);
