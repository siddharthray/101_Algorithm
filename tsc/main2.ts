/**
 * Decodes a Roman numeral to a number.
 *
 * @param {string} roman - The Roman numeral to decode.
 * @returns {number} The decoded Roman numeral.
*/

const decodeRoman = (roman: string, romanMap: { [key: string]: number }): number => {
    let res = 0;
    let str = roman;
    if (romanMap[roman] || romanMap[roman.slice(0, 2)]) {
        res += romanMap[roman.slice(0, 2)]
        str = str.slice(2);
    }
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (romanMap[strArr[i] + strArr[i + 1]]) {
            res += romanMap[strArr[i] + strArr[i + 1]];
            i++;
        } else if (romanMap[strArr[i]]) {
            res += romanMap[strArr[i]];
        }
    }
    return res;
}
const intToNumeral = (roman: string): number => {
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
    return decodeRoman(roman, romanMap);
};

console.log(intToNumeral("XXI"))

export { intToNumeral };