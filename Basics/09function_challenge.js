let gradeCalculator = function(java, python, javascript) {
    let totalMarks = java + python + javascript;
    
    let averageMarks = totalMarks / 3;
    
    if (averageMarks >= 90) {
        console.log('You are passed with with an A+ grade');
    } else if (averageMarks >= 85 && averageMarks < 90) {
        console.log('You are passed with with an A grade');
    } else if (averageMarks >= 80 && averageMarks < 85) {
        console.log('You are passed with with an B+ grade');
    } else if (averageMarks >= 75 && averageMarks < 80) {
        console.log('You are passed with with an B grade');
    } else if (averageMarks >= 70 && averageMarks < 75) {
        console.log('You are passed with with an C+ grade');
    } else if (averageMarks >= 65 && averageMarks < 70) {
        console.log('You are passed with with an C grade');
    } else if (averageMarks >= 60 && averageMarks < 65) {
        console.log('You are passed with with an D grade');
    } else if (averageMarks >= 50 && averageMarks < 60) {
        console.log('You are passed with with an E grade');
    } else {
        console.log('You are failed!');
    }
};

gradeCalculator(90, 98, 97);
gradeCalculator(78, 88, 89);

/*--------OR---------*/

let gradeCalc = function(currentMarks, totalMarks) {
    let myPercent = (currentMarks / totalMarks) * 100;
    
    let myGrade = '';
    
    if (myPercent >= 90) {
        myGrade = 'A';
    } else if (myPercent >= 80) {
        myGrade = 'B';   
    } else if (myPercent >= 70) {
        myGrade = 'C';
    } else if (myPercent >= 60) {
        myGrade = 'D';   
    } else if (myPercent >= 50) {
        myGrade = 'E';
    }else {
        myGrade = 'F';
    }
    
    return `Your grade is ${myGrade} and percentage is ${myPercent}`;
};

let myResult = gradeCalc(466, 500);

console.log(myResult);