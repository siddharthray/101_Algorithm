//fibonaaci num



function fibonaaci(num) {
    // let num = [0, 1];

    if (num <= 1) {
        return num;
    }

    return fibonaaci(num - 1) + fibonaaci(num - 2);

}

function iterate(num) {
    for (let i = 0; i <= num; i++) {
        console.log(fibonaaci(i));
    }
}

// console.log(iterate(6))


// function fibonaaci(num) {
//     let res = [1];
//     let tmp = 0;
//     for (let i = 1; i <= num; i++) {
//         let val = i;
//         tmp = tmp + val;
//         res.push(tmp)
//     }
//     return res;
// }



console.log(iterate(10));
// console.log(fibonaaci(10));

// function arithemetic(num1) {
//     return function (ops, num2) {
//         if (ops === "+") {
//             return num1 + num2
//         }
//         if (ops === "-") {
//             return num1 - num2
//         }
//     }
// }

// const arth = arithemetic(10);
// console.log(arth("+", 5))
// console.log(arth("-", 5))