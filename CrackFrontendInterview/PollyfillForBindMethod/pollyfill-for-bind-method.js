// pollyfill for bind method
let data = {
    firstName: "Akshay",
    lastName: "Saini",
};

let printName = function(hometown, state, country) {
    console.log(this.firstName+" "+this.lastName+" , "+this.hometown+" , "+this.state+" , "+this.country);
};

let printMyName = printName.bind(data, "Deharadun", "Uttarakhand");
printMyName("India");

Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.call(args[0],[...params,...args2]);
    }
};

let printMyName2 = printName.mybind(data, "Deharadun", "Uttarakhand");
printMyName2("India");

// function curring in js
let multiply1 = function(x, y){
    console.log(x*y);
}

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

multiply1(2,4);
multiply1(8,10);

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);