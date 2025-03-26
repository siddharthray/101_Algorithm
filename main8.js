const placeValue = (num, res = [], factor = 1) => {
    if (num) {
        let val = (num % 10) * factor;
        res.unshift(val);
        return placeValue(Math.floor((num / 10)), res, factor * 10)
    }
    return res;
}

const sumWithRoman = (num, romanMap) => {
    if (num === 0) {
        return ""
    }
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
            if (remainingVal === descSort[i]) {
                romanRes += roman
                break
            }
        }
    }
    return romanRes;

}
const intToNumeral = (num) => {
    let res = "";
    let romanMap = {
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

    let placeValues = placeValue(num);
    for (let i = 0; i < placeValues.length; i++) {
        res += sumWithRoman(placeValues[i], romanMap)
    }

    return res;
};


console.log(intToNumeral(2008))


//a*aabc*****