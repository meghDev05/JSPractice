let gp = document.querySelector("#grandparent");
let pt = document.querySelector("#parent");
let ch = document.querySelector("#child");

gp.addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
}, true);

pt.addEventListener('click', () => {
    console.log("Parent Clicked!");
}, true);

ch.addEventListener('click', (e) => {
    console.log("Child Clicked!");
    
}, true);

// if third argument is true it will trickling down or capturing down
// by default or at false argument it will bubble up