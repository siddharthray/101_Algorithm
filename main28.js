let str = "abccbaacz";

function firstLetterAppearTwice(str) {
    let strMap = new Map();
    for(let i = 0; i < str.length; i++) {
        let key = str[i];
        if(strMap.has(key)) {
            return key
        } else {
            strMap.set(key);
        }
    }
}

console.log(firstLetterAppearTwice(str));