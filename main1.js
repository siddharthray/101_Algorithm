"use strict";
/**
 * Encodes a number to a Roman numeral.
 *
 * @param {number} n - The number to encode to Roman numeral.
 * @returns {string} The encoded Roman numeral.
*/
exports.__esModule = true;
exports.intToNumeral = void 0;
var placeValue = function (num, res, factor) {
    if (res === void 0) { res = []; }
    if (factor === void 0) { factor = 1; }
    if (num) {
        var val = (num % 10) * factor;
        res.unshift(val);
        return placeValue(Math.floor((num / 10)), res, factor * 10);
    }
    return res;
};
var sumWithRoman = function (num, romanMap) {
    if (num === 0) {
        return "";
    }
    var remainingVal = 0;
    var romanRes = "";
    var descSort = Object.values(romanMap).sort(function (a, b) { return b - a; });
    var roman = Object.keys(romanMap).find(function (key) { return romanMap[key] === num; });
    if (roman) {
        return roman;
    }
    var _loop_1 = function (i) {
        if (num >= descSort[i]) {
            var roman_1 = Object.keys(romanMap).find(function (key) { return romanMap[key] === descSort[i]; });
            remainingVal = num - descSort[i];
            if (roman_1 && remainingVal === 0) {
                return { value: romanRes += roman_1 };
            }
            romanRes += roman_1;
            num = remainingVal;
            if (remainingVal === descSort[i]) {
                romanRes += roman_1;
                return "break";
            }
        }
    };
    for (var i = 0; i < descSort.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
        if (state_1 === "break")
            break;
    }
    return romanRes;
};
var intToNumeral = function (num) {
    var res = "";
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
    };
    var placeValues = placeValue(num);
    for (var i = 0; i < placeValues.length; i++) {
        res += sumWithRoman(placeValues[i], romanMap);
    }
    return res;
};
exports.intToNumeral = intToNumeral;
console.log(intToNumeral(2008));
