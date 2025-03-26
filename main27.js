// console.log(a);

let a = 10;
let b = 20;
// console.log(d)
function hoist() {
    // console.log(a);
    // let a = 50;
    // let c = 30;
    // var d = 60;
    a = 40;
    console.log("a inside hoist ", a);
    
}

// console.log(c);
console.log("a outside hoist ", a);

hoist();