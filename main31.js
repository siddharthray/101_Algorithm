var str = "ccaabbabc";

function unique(str) {
    let strMap = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        if(key in strMap) {
            continue;
        } else {
            strMap[key] = i;
        }
    }
    console.log(Object.keys(strMap))
}

unique(str);

var firstUniqChar = function(s) {
    let strMap = {};
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if(key in strMap) {
            strMap[key] += 1;
        } else {
            strMap[key] = 1;
        }
    }
    return Object.values(strMap).forEach(char => char === 1 ? char : -1);
};

console.log(firstUniqChar("aadadaad"));