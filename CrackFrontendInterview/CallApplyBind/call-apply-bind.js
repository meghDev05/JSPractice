let printName = {
    firstName: "Akshay",
    lastName: "Saini",
    // Inside object function
    // printFullName: function(){
    //     console.log(this.firstName+" "+this.lastName);
    // }
}

let printName2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    // printFullName: function(){
    //     console.log(this.firstName+" "+this.lastName);
    // }
}

// Outside function
let printFullName = function(hometown, state){
    console.log(this.firstName+" "+this.lastName+" from "+this.hometown+" , "+this.state);
}
console.log("argument passing not working")

// calling inside object function
// printName.printFullName();

// outside function - passing object name as argument - using call() method
printFullName.call(printName, "Dehradun", "Uttarakhand");


//printName2.printFullName();

// other than we can borrow function for same use 
// function borrowing
// for that we have to use call() method.

// inside object function borrowing from other object - use call() method
// printName.printFullName.call(printName2); // result will printName2 object names - C D

// outside function - passing object name as argument - using call() method
printFullName.call(printName2, "Mumbai", "Maharastra");

printFullName.apply(printName2, ["Mumbai", "Maharashtra"]);
// apply takes second argument as array list of the parameter of function

let printMyName = printFullName.bind(printName2, "Mumbai", "Maharastra");
console.log(printMyName);
printMyName();
// it gives the copy of exactly same method, which can invoke letter
