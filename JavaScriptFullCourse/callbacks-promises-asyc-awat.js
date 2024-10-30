// Lecture 12: callbacks, promises & async-await


// asynchronous 

function hello(){
    console.log("hello");
}

console.log("one");
console.log("two");

setTimeout(hello, 2000) //timeout; 2s = 2000ms

setTimeout(() =>{
    console.log("hello");
}, 3000);   

console.log("three");

// callbacks - A callback is a function passed as an argument to another function

function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(1, 2, sum);

calculator(1, 2, (a, b) =>{
    console.log(a+b);
});

const hello1 = () => {
    console.log("hello");
}

setTimeout(hello1, 3000);

// nesting

let age = 19;

if (age >= 18){
    if(age >= 60){
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

for (let i = 0; i<=5; i++){
    let str = "";
    for(let j = 0; j<=5; j++){
        str = str + j;
    }
    console.log(i, str);
}

// callback

function getData(dataId){
    console.log("data ", dataId);    
}