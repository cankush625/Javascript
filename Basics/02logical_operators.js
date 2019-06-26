/*To allow the user to buy the things or to play the demo for the specific thing. We are building these features by using logical operators*/

/*
    && - AND : all conditions are true
    || - OR : one of the condition is true
*/

let isVerified = true; //if we made isVerified false we will be in the guest mode in the code below
let isLoggedIn = true;
let isGuest = false;
let isSufficientBalance = true;

if (isVerified && isLoggedIn && isSufficientBalance) {
    console.log("Hi there, here is the BUY link for your product");
} else if (isGuest || isSufficientBalance) {
    console.log("Hi there, you are in a guest mode. Please verify your account");
} else {
    console.log("Access is denied!");
}

/* ! - NOT : it reverses the value. If the value is true the " ! " makes it false*/
if (!isVerified && isLoggedIn && isSufficientBalance) { //here i have used " ! "
    console.log("Hi there, here is the BUY link for your product");
} else if (isGuest || isSufficientBalance) {
    console.log("Hi there, you are in a guest mode. Please verify your account");
} else {
    console.log("Access is denied!");
}