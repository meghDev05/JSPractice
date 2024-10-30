// Lecture 11: Classes & Objects

const student = {
    fullName: "A",
    marks: 94.4,
    printMarks: function(){
        console.log("Marks = ", this.marks);
    },
}

const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax(){
        console.log("tax rate is 20%");
    }
};
// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };
// const karanArjun4 = {
//     salary: 50000,
// };

karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


class ToyataCar {
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyataCar("fortuner", 10); // constructor
fortuner.setBrand("fortuner");
let lexus = new ToyataCar("lexus", 12);



// Inheritance in JS

class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent {}

let obj = new Child();

class Person {
    constructor(name){
        console.log("enter parent constructor");
        this.species = "homo sepiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person {
    constructor(name){
        console.log("enter child constructor");
        super(name); // to invoke parent class constructor
        console.log("exit child constructor");
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}


class Doctor extends Person {
    work(){
        console.log("treat patients");
    }
}

let engObj = new Engineer("shradha");
let shradhaObj = new Engineer();


// QS

let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("A", "a@g.com");
let student2 = new User("B", "b@g.com");

let teacher1 = new User("Dean", "dean@g.com");



let admin1 = new Admin("admin", "a@g.com");


// use try catch for error handling