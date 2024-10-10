document.querySelector("#category").addEventListener('click', (e) => {
    console.log(e.target.id);
    if(e.target.tagName == 'LI'){
        window.location.href = "/" + e.target.id;
    }
});

document.querySelector("#form").addEventListener('keyup', (e) =>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value =  e.target.value.toUpperCase();
    }
})


// sum (1)(2)(3)(4).....(10)
console.log("sum(1)(2)(3)(4).....(10) program")
let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
console.log(sum(1)(2)(3)(4)());

// single line of code
let sum1 = a => b => b ? sum1(a+b) : a;
console.log(sum1(1)(2)(3)(4)());
