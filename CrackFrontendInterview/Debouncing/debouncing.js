// Debouncing in js
let counter=0;
const getData = () => {
// calls an API and gets data
console.log("Fetching data..."+counter++);
}

const debounceMethod = function(fn, d){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, d);
    }
}
const betterFunction = debounceMethod(getData, 300);