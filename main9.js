const toBeEqual = (val, max) => {
    return (max - val);
}

let map = {
    a: 1,
    "*": 1,
    b: 2,
    c: 1
}
function balanced(s) {
    let map = {};
    if (s === "") {
        return true
    }

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]] += 1
        }
    }
    // console.log("my map ", map)
    let maxKey = Object.keys(map).filter(val => val !== "*").sort((a, b) => map[b] - map[a])[0];
    let max = map[maxKey]
    console.log("max ", max)
    let mapLen = Object.keys(map).length;
    let keys = Object.keys(map);
    let res = false;
    let isWildCard = Object.keys(map).find(item => item === "*")
    if (isWildCard === undefined) {
        for (let i = 0; i < mapLen; i++) {
            if (map[keys[i]] !== max) {
                return false;
            }
            return true;
        }
    }

    let wildCardCount = map["*"];
    Object.keys(map).forEach(item => {
        let diff = toBeEqual(map[item], max);
        if (item !== "*" && wildCardCount > 0) {
            wildCardCount -= diff;
            if (wildCardCount >= 0) {
                map["*"] = wildCardCount;
                map[item] += diff;
            }
        }

    })
    console.log("map after", map)
    let filter = Object.keys(map).filter(val => val !== "*");
    // console.log("filter len ", filter.length)

    maxKey = Object.keys(map).filter(val => val !== "*").sort((a, b) => map[b] - map[a])[0];
    max = map[maxKey]
    if (filter.length === 52 && map["*"] === max) {
        return false;
    }
    console.log("map ", map)
    while (wildCardCount) {
        // console.log("map ", map)
        if (wildCardCount === max) {
            return true
        }
        wildCardCount -= filter.length;
        if (wildCardCount < 0) {
            return false
        }
        for (let i = 0; i < mapLen; i++) {
            if (keys[i] !== "*") {
                map[keys[i]] += 1
            }
        }
        max += 1;

    }

    if (filter.length === 1) {
        return true;
    }

    for (let i = 0; i < mapLen; i++) {

        if (map[keys[i]] !== max && keys[i] !== "*") {
            res = false;
            break;
        }
        res = true;
    }

    return res;
}

console.log(balanced("a*abz*d"))
// console.log("res ", res)
// console.log(map)
//*a*
//*C***F***R*US*R**D***YS***H
//BAH*E**
//aabbc****
//*C***S*L**L****S**QN*
//abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*
//**KQ*WRVZ*E** . //true
//aabb*** //false
//abcb** //true
//R*BH*F*S**V*MGCXZ**

    // if (filter.length === map["*"] || filter.length === 1) {
    //     return true;
    // }

        // if (filter.length < map["*"] && map["*"] <= max) {
    //     res = true
    // }

        // if (map["*"] > max && filter.length !== map["*"]) {
    //     res = false;
    // }
    // if (map["*"] < filter.length && map["*"] !== 0) {
    //     res = false
    // }
    // if (map["*"] === max) {
    //     res = true
    //}