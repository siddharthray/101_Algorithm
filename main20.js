function mul(val, cb) {
    let mulVal = val * 2;
    cb(mulVal);
};


function someCallback(val) {
    console.log(`callback becoming hell here ${val}`)
}


function sum(val, cb) {
    let someVal = val * 2;
    cb(someVal, someCallback)
}



const sumIns = sum(2, mul);

console.log(sumIns);
