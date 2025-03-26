/**
 * Encodes a number to a Roman numeral.
 *
 * @param {number} n - The number to encode to Roman numeral.
 * @returns {string} The encoded Roman numeral.
*/

const placeValue = (num: number, res: number[] = [], factor: number = 1): number[] => {
    if (num) {
        let val: number = (num % 10) * factor;
        res.unshift(val);
        return placeValue(Math.floor((num / 10)), res, factor * 10)
    }
    return res;
}

const sumWithRoman = (num: number, romanMap: { [key: string]: number }): string => {
    if (num === 0) {
        return ""
    }
    let remainingVal: number = 0;
    let romanRes: string = "";
    var descSort: number[] = Object.values(romanMap).sort((a, b) => b - a);
    let roman: string | undefined = Object.keys(romanMap).find(key => romanMap[key] === num);
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
            while (num >= descSort[i]) {
                romanRes += roman
                remainingVal = num - descSort[i];
                num = remainingVal;
            }
        }
    }
    return romanRes;

}
const intToNumeral = (num: number): string => {
    let res: string = "";
    let romanMap: { [key: string]: number } = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let placeValues: number[] = placeValue(num);
    for (let i = 0; i < placeValues.length; i++) {
        res += sumWithRoman(placeValues[i], romanMap)
    }
    return res;
};

console.log(intToNumeral(89))

export { intToNumeral };