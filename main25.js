

let obj = {
    name: "Sidd"
};
function someFunc(val1, val2) {
    
    let sum = () => {
        return val1  + val2
    }

    function sub() {
        console.log("substract")
    }

    return {
        sum
    }

}


// someFunc()

let ins1 =  new someFunc(10,20);

console.log(ins1.sum());

let ins2 =  new someFunc(10,40);

console.log(ins2.sum());


// function closureFunc() {

//     let val1 = 10;
//     return function() {
//         let innerVal = val1;
//     }
// }

// function someFunc1() {
//     // implementation
//     let val1 = 10;
//     let val2 = 10;
//     return val1 + val2;
// }

// function executeSomeTask(arg1) {
//     arg1();

//     let somePromsie = new Promise((resolve, reject))
// }

let arr = [1,2,3,4,5];

const reducedValue = arr.reduce((prev, curr) => prev + curr, 0);
console.log(reducedValue)
// executeSomeTask(someFunc1);

// someFUnction(()=> {}, () => {})