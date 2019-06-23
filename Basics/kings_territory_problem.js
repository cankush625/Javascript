/*Kings territory problem*/

let king = "Ankush";

/*This will print the king in the scope of the if statement where console.log() is there*/
if (true) {
    let king = "Roshan";
    
    if (true) {
        let king = "John";
        console.log(king);
    }
}

/*This will print the king which is active level above the scope of the if statement where console.log() is there*/
if (true) {
    let king = "Roshan";
    
    if (true) {
        //let king = "John";
        console.log(king);
    }
}

if (true) {
    console.log("I am second king " + king);
}