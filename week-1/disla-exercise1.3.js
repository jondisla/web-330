/*
============================================
; Title:  Exercise 1.3
; Author: Jonathan Disla
; Date:    January 4 2021
; Description: Classes Refresher
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 1.3"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//this function object cellPhone takes in parameters and
//declares three methods.
function cellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    //returns the property price from above
    this.getPrice = function(){
        return this.price;
    }
    //returns the model property from above
    this.getModel = function(){
        return this.model;
    }
    //returns all the information in form of a string
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

//assign values to the parameters in the object function above.
var samsung = new cellPhone("Samsung", "Galaxy S20", "black", 349.99);

console.log(samsung.getDetails());