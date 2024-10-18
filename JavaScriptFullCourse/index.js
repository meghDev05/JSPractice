// Lecture 1 Variables & Data Types
console.log("Welcome to JS");
// fullName = "Tony Stark";
// age = 24;
// price = 145;
// a = null;
// y = undefined;
// isFollow = true;
// console.log(isFollow);

// const student = {
//     fullName : "Rahul",
//     age : 20,
//     marks: 86
// };

// console.log(student);
// console.log(student.fullName);
// console.log(student.age);

// student["name"] = "Deepak";

// console.log(student["name"]);

// const product = {
//     title : "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 280,
// };
// console.log(product);

// ..............................................................

// Lecture 2 

// let a = 5;
// let b = 2;

// console.log("a = ", a, " b = ", b);

// console.log("a++ = ", a++);
// console.log(a);

// a *= 4;
// a /= 4;
// a += 4;
// a -= 5;

// a **= 4; // a = a ** 4;

// Logical or || 

// a < b || a === 6

// console.log(a);

// conditional statement


// let age = 25;

// if (age > 18){
//     console.log("You Can Vote ");
// }

// let result = age>18 ? "adult" : "not adult";
// console.log(result);

// odd or even

// let num = 5;

// if(num % 2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// practice qs1

// let enterNum = prompt("Enter A Number Multiply by 5");

// if(enterNum % 5 === 0){
//     console.log(enterNum, "Is multiply by 5");
// } else {
//     console.log(enterNum, "Is NOT multiply by 5");
// }

// practice qs2

let score = 75;
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
} else if(score >= 70 && score <= 89){
    grade = "B";
} else if(score >= 60 && score <= 69){
    grade = "C";
} else if(score >= 50 && score <= 59){
    grade = "D";
} else if(score >= 0 && score <= 49){
    grade = "F";
}

console.log("Grade ", grade);