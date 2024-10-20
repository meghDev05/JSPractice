// Lecture 5: Functions & Methods

function myFunction(msg, n){
    // parameter -> input
    console.log(msg * n); // NaN - Not a Number
}

// myFunction("I Love JS", 100); // argument

// function myFunction2(){
//     console.log("Apana College");
//     console.log("We are learning JS");
// }

// myFunction2();

// function sum of two numbers

// function sum(x, y){
//     console.log("Sum = ", x + y);
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }

// let val = sum(3,4);
// console.log(val);

// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }

// const printHello = () => {
//     console.log("Hello");
// }

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// for each

let arr = ["pune","Mumbai"];

// arr.forEach((val, idx, arr) =>{
//     console.log(val.toUpperCase(), idx, arr);
// });

let nums = [11,22,33,44,55];

// let caclSq = ((num)=>{
//     console.log(num*num);
// })

// nums.forEach(caclSq);

// map() method

    // nums.map((val) =>{
    //     console.log(val);
    // });

// let newArr = nums.map((val)=>{
//     return val * 2;
// });
// console.log(newArr);

// filter() method

// let evenArr = nums.filter((val)=>{
//     return val % 2 ===0;
// });
// console.log(evenArr);

// reduce() method

const output = nums.reduce((res, curr) =>{
    return res + curr;
});
console.log(output);

const largestNum = nums.reduce((prev, curr) =>{
    return prev > curr ? prev : curr;
});
console.log(largestNum);


// filter array of 90+ marks

let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) =>{
    return val > 90;
});
console.log(toppers);


// print array up to given number in input

let n = prompt("Enter a number");

let printArr = [];

for (let i = 1; i <= n; i++){
    printArr[i-1] = i;
}
console.log(printArr);

// make sum

let sum = printArr.reduce((res, curr)=>{
    return res + curr;
});
console.log("Sum = ", sum);

// make factorial

let factorial = printArr.reduce((res, curr)=>{
    return res * curr;
});
console.log("Factorial = ",factorial);

