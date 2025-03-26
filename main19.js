let arr = [1, 0, 0, 0, 1, 0, 1];

function moveAllZero(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}

// function moveAllZero(arr) {
//     let tmp = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         tmp.push(0)
//         arr.splice(i, 1, undefined);
//     }
// }

//     while (tmp.length < arr.length) {
//         tmp.unshift(1)
//     }
//     return tmp;
// }


console.log(moveAllZero(arr));