/*
============================================
; Title:  Exercise 2.2
; Author: Jonathan Disla
; Date:    January 13 2021
; Description: Using object literals to create
; a function and create a new instance of the
; object.
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 2.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//declare an object literal person
var person = {
    //a function that returns the person's age
    getAge : function(){
        this.age;
    }
}

//second object literal using object.create
//to create a new person
var jon = Object.create(person,{
    //assign the properties age and full name
    //to the new person
    "age":{
        "value": "26"
    },
    "fullname":{
        "value": "Jon Jones"
    }
})

//call the getAge function for the name Jon
jon.getAge();
//Log the results
console.log("Full name: " + jon.fullname);
console.log("age: " + jon.age);

// end program

