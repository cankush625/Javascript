/*Arrays*/

const superCars = ['Lamborghini', 'Mercedeze', 'Volvo'];

console.log(superCars);
console.log(superCars[0]);
console.log(superCars.length);

/*Finding last element in the array*/
console.log(superCars[superCars.length - 1]);

/*Printing dynamic data*/
console.log(`We have ${superCars.length} superCars.`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five'];
numbers[1] = 'Uno';

console.log(numbers);

numbers.shift(); //It shift the array one record towards the right. This element is not actually deleted, it is only shifted.
console.log(numbers.shift()); //Displaying the deleted record
console.log(numbers); //Displayes the records after shifting towards the right

/*Adding record at the start of the array*/
numbers.unshift('Something');
console.log(numbers);

/*Removing last record from the array*/
numbers.pop();
console.log(numbers);

/*Pushing new record to the array*/
numbers.push('Extra');
console.log(numbers);

/*Removing new record to the array*/
numbers.splice(5, 1, "Roshan");
console.log(numbers);