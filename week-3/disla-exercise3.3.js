/*
============================================
; Title:  Exercise 3.2
; Author: Jonathan Disla
; Date:    January 24 2021
; Description: The singleton Pattern
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 3.2"));



// start program

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
   })();
   
   function databaseSingletonTest(){
       var oracle = DatabaseSingleton.getInstance();
       var postgres = DatabaseSingleton.getInstance();

       console.log("Same database instance? %s", oracle === postgres);
   }

   databaseSingletonTest();
//end