const myTodos = [];

myTodos.push("Learn java");
myTodos.push("Got to the Gym");
myTodos.push("Learn database");

myTodos.forEach(function(todo, index){
    console.log(`Your task no ${index + 1} is ${todo}`);
});