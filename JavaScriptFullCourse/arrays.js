//* Lecture 4 Arrays
//* array is a collection of items

// let marks = [100, 100, 75, 88, 100];
// console.log(marks);
// console.log(marks.length);

// let heros = ["Ironman", "Spiderman", "Antman", "Superman", "Thor", "Hulk", "Shaktiman", "Nagraj", "Dhruv", "Parmanu", "Doga", "Tiranga", "Volvorine", "Dr. Strange", "Batman"];
// console.log(heros);
// console.log(heros.length);

// for (let idx = 0; idx < heros.length; idx++){
//     console.log(heros[idx]);
// }

// for (let hero of heros){
//     console.log(hero.toUpperCase());
// }

// let sum = 0;

// for (let val of marks){
//     sum = sum + val; // sum += val;
// }
// console.log(sum);

// let avg = sum / marks.length;
// console.log(`avarage of marks is ${avg}`);


// QS // apply 10 % offer on each item

let items = [250, 645, 300, 900, 50];

// let idx = 0;

// for (let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer ${items[idx]}`)
//     idx++;
// }


// for(let i = 0; i< items.length; i++){
//     console.log(`value of item at index ${i} is ${items[i]}`);
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(`value after offer ${items[i]}`);
// }

// console.log(items);

//* Topic:  Array Methods
// push(): add and elment at the end of the array, pop(): remove an emlement at the end of the array, toString(), concat()
// unshift(): add to start,  shift(): delete from start and return;

// let foodItems = ["Potato", "Apple", "Litchi", "Tomato"];
// foodItems.push("Chips", "Banana");
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("Deleted Items is ", deletedItem);
// console.log(items.toString());


// let marvalHeroes = ["Ironman","Thor","Hulk"];
// let dcHeroes = ["Superman", "Batman"];
// let indianHeroes = ["Krish", "Shaktiman"];

// let Heroes = marvalHeroes.concat(dcHeroes);
// console.log(Heroes.concat(indianHeroes));

// marvalHeroes.unshift("Antman");
// console.log(marvalHeroes);

// let val = marvalHeroes.shift();
// console.log("deleted val ", val);

// slice(): returns a piece of the array
// slice(startIndex, endIndex)

// console.log(marvalHeroes.slice(1,2));
// console.log(Heroes.slice(1));
// console.log(Heroes.slice());

// splice(): change original array(add, remove, replace);

let arr = [1,2,3,4,5,6,7];
console.log(arr);

// splice(startIndex, deleteCount, newEl1)
arr.splice(2,2,103,104);
console.log(arr);

// Add Element
arr.splice(2,0,101);
console.log(arr);

// Delete Element
arr.splice(3,1);
console.log(arr);

// Replace Element
arr.splice(3,1,101);
console.log(arr);

arr.splice(4); // delete ahead from 4th (given) index
console.log(arr);

arr.splice(); // nothing will delete just make copy of array
console.log(arr);


// Qs -

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies)

// Remove the first company from the array
companies.shift();
console.log(companies);

// Remove Uber & add Ola in its place
companies.splice(1,1,"Ola");
console.log(companies);

// Add amazon at the end
companies.push("Amazon");
console.log(companies);