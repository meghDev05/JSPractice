// Lecture 6 DOM 

// console.log("Hello");
// window.console.log("Hello");
// console.log(window.document);
// console.log(document);
// console.dir(document.body);
// console.log(document.body);

// console.dir(document.body.childNodes[3]);

// let heading = document.getElementById("heading");
// console.dir(heading);

// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let tagName = document.getElementsByTagName("p");
// console.log(tagName);

// let firstEl = document.querySelector("p"); // 1st Element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); // all Elements
// console.dir(allEl);


// let div = document.querySelector("div");
// console.log(div);

// qs 1
// let oldheading = document.querySelector("h1");

// let h2 = document.querySelector("h2");

// h2.innerText = h2.innerText + " From Apana College Students";

// qs2
// let boxdivs = document.querySelectorAll(".box");
// console.log(boxdivs[0]);

// boxdivs[0].innerText = "new value 1";
// boxdivs[1].innerText = "new value 2";
// boxdivs[2].innerText = "new value 3";

// let idx = 1;
// for(let div of boxdivs){
//     div.innerText = `New Value ${idx}`;
//     idx++;
// }

// let iddiv = document.querySelector("#box");
// console.log(iddiv);

// let id = iddiv.getAttribute("id");
// console.log(id);

// let name = iddiv.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p"); 
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "newClass");
// console.log(para);


// let divbox = document.querySelector("#box");

// divbox.style.backgroundColor = "green";
// divbox.style.backgroundColor = "purple";
// divbox.style.fontSize = "26px";
// divbox.innerText = "Hello";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// divbox.append(newBtn);
// divbox.prepend(newBtn);
// divbox.before(newBtn);
// divbox.after(newBtn);

// para.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// para.remove();
// newHeading.remove();

// Qs 1

let nBtn = document.createElement("button");
nBtn.innerText = "click me";

nBtn.style.backgroundColor = "red";
nBtn.style.color = "white";

document.querySelector("body").prepend(nBtn);

// QS 2

let newPara = document.querySelector(".content");
console.log(newPara);

newPara.classList.add("newClass");
console.log(newPara);