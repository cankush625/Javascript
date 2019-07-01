let myTodos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,
    
    addMeeting : function(num) {
    console.log(this); //this keyword referencing to the variables defined at the top level. The this keyword has an access to all variables.
    console.log("Hey, Im a function.");
        
        this.meetings = this.meetings + num;
}
};

myTodos.addMeeting();