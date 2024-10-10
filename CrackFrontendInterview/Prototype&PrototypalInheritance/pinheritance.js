let object = {
    name: "Akshay",
    city: "Deharadun",
    getIntro: () => {
        console.log(this.name+" "+this.city);
    },
}

function fun(){

}

let obj2 = {
    name: "Aditya",
}

//Never do like this    for modify prototype
obj2.__proto__ = object;
