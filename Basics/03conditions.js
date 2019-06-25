/*Conditions are the kind of triggers which are allows the website to decide the action using js*/
/*if-else conditions*/
if(false) {
    console.log("This is the if statement");
} else {
    console.log("This is the else statement");
}

/*Anything imside the curley brackets is a codeblock {}*/

/*using if-else to determine the type of user*/
let whoIsHere = 'student';

if (whoIsHere === 'student') {
    console.log("Greeting message to the student");
} else if (whoIsHere === 'teacher') {
    console.log("Greeting message to the teacher");
} else if (whoIsHere === 'programmer') {
    console.log("Greeting message to the programmer");
} else {
    console.log("Please verify your email");
}

/*for loop*/

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

/*printing in reverse order*/
for (let i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}