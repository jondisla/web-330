/*
============================================
; Title:  Exercise 1.3 -
; Author: Jonathan Disla
; Date:    January 4 2021
; Description: 
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

function cellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
        return this.price;
    }
    this.getModel = function(){
        return this.model;
    }
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
}

var samsung = new cellPhone("Samsung", "Galaxy S20", "black", 349.99);

console.log(samsung.getDetails())