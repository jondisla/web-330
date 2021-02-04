//First we check if this namespace exists
//If it doesn't exists we create the global object
var myApp1 = myApp1 || {};
//optional: nesting
//checking if myApp1.nestedNamespace exists
myApp1.nestedNamespace = myApp1.nestedNamespace || {};

//Contructor function to display customer name
//add the customer property to the nested namespace
myApp1.nestedNamespace.customer = ((fName, lName)=>{
    this.fName = fName;
    this.lName = lName;
    this.getFullName = (()=>{
        console.log(this.fName + ' ' + this.lName)
    })
})