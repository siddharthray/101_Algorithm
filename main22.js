// const a = { "A": 1 };
// a.A = 2;
// console.log(a);
function incByN(num1) {
    let val = num1;
    
    return function (num2) {
        return val + num2
    }

 };

 const incBy5 = incByN(5)
 console.log(incBy5(1))
 console.log(incBy5(2))
const incBy1 = incByN(1);
console.log("=================")
console.log(incBy1(1))
console.log(incBy1(2))
console.log(incBy1(5))


 
//  inst1(1); //--> 6
//  const inst12 = incByN(5)
//  inst1(2); // --> 7
  
// ----------
    // Example 1
    // ----------
    // incBy5 = incByN(5);
    // incBy5(1) --> 6
    // incBy5(2) --> 7
 
    // 
    // incBy5(5) --> 10
    // ----------
    // Example 2
    // ----------
    // incBy1 = incByN(1);
    // incBy1(1) --> 2
    // incBy1(2) --> 3
    // .
    // incBy1(5) --> 6