var num = 4;
var placeValue = (num, res = [], factor = 1) => {
    if (num) {
        var val = (num % 10) * factor;
        res.unshift(val.toString());
        return placeValue(Math.floor(num / 10), res, factor * 10);
    };
    return res;
};
// console.log(placeValue(num));

var romanMap = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

// var descSort = Object.values(romanMap).sort((a, b) => b - a);
// var newRomanMap = descSort.map(item => {
//     let roman = Object.keys(romanMap).find(val => romanMap[val] === item);
//     return {
//         [roman]: item
//     }
// });

// console.log(newRomanMap)

const sumWithRoman = (num, romanMap) => {
    let remainingVal = 0;
    let romanRes = "";
    var descSort = Object.values(romanMap).sort((a, b) => b - a);
    let roman = Object.keys(romanMap).find(key => romanMap[key] === num);
    if (roman) {
        return roman
    }
    for (let i = 0; i < descSort.length; i++) {
        if (num >= descSort[i]) {
            let roman = Object.keys(romanMap).find(key => romanMap[key] === descSort[i]);
            remainingVal = num - descSort[i];
            if (roman && remainingVal === 0) {
                return romanRes += roman
            }
            romanRes += roman;
            num = remainingVal;
        }
    }
    return romanRes;

}


console.log(sumWithRoman(2000, romanMap));