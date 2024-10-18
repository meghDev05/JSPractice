// Lecture 3 Loop & String

// for(let count = 1; count <= 10; count++){
//         console.log("Apna College", count);
// }

// let sum = 0;

// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("Sum = ",sum);

//let i = 20;
// while(i <= 10){
//     console.log("Apna College");
//     i++;
// }

// do{
//     console.log("Apna College");
//     i++;
// } while(i <= 10);

// for-of loop

// let str = "JavaScript";
// let size = 0;

// for(i of str){ // iterator --> characters
//     console.log(i);
//     size++;
// }
// console.log("String size = ", size);

// for-in loop

// let student = {
//     name: "Meghshyam",
//     age: 37,
//     cgpa: 7.5,
//     isPass: true,
// }   

// for (let key in student){
//     console.log("Key = ", key, "Value = ", student[key]);
// }

// practice Qs 1

// for(let num = 0; num <= 100; num++){
//     if(num % 2 === 0){ // even number
//         console.log("even num = ", num);
//     }
// }
// for(let num = 0; num <= 100; num++){
//     if(num % 2 !== 0){ // odd number
//         console.log("odd num = ", num);
//     }
// }

// practice Qs 2

// let gameNum = 25;
// let userNum = prompt("Guess a number");

// while(userNum != gameNum){
//     userNum = prompt("No, Guess again");
// };

// console.log("Congratulations!");

// String

// let str = "Meghshyam";
// let str2 = "Vaishnav";
// console.log(typeof str);

// template literals

// let obj = {
//     item : "Pen",
//     price: 10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rs, ${5 + 5}`; // template litarals backtick ` ` // string interpolation
// console.log(output);
// console.log("Price of", obj.item, " is ", obj.price, "rs"); // normally in console


let str = "    Megh  shyam    ";
let str2 = "Vaishnav";
str = str.toUpperCase(); // toLowerCase() for lower case
console.log(str.trim());// trim() method removes space of start and end
console.log(str.concat(str2));
console.log(str.slice(1, 8));
let str3 = "hello";
console.log(str.replace("GH","GHA")); // can use replaceAll() for replace all 
console.log(str.charAt(5));

let fullName = prompt("Enter your full name");
let userName = "@" + fullName + fullName.length;
console.log(userName);





