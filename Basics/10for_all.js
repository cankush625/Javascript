const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(days[0]);

let sayHello = function() {
    console.log('Hello!');
};

days.forEach(sayHello);

days.forEach(function(day) {
   console.log(`Hey, ${day}`); 
});