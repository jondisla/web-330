/*
============================================
; Title:  Exercise 1.4
; Author: Jonathan Disla
; Date:    January 10 2021
; Description: Classes Refresher
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 1.4"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model){
    this.model = model;
}
Car.prototype.start = function(){
    console.log("Car added to the racetrack");
}
function Truck(model, year){
    this.model = model;
    this.year = year;
}
Truck.prototype.start = function(){
    console.log("Truck added to the racetrack");
}
function Jeep(model, year){
    this.model = model;
    this.year = year;
}
Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack");
}

var racetrack = [];

function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

var Camry = new Car("Camry");
var Ford = new Truck("F150", 2020);
var Cherokee = new Jeep("Grand Cherokee", 2018);

driveIt(Camry);
driveIt(Ford);
driveIt(Cherokee);

for (let i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
    
}

// end program


