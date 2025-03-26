var arr = [4, 2, 8, 4, 1, 2, 3];

// console.log([...new Set(arr)])

let unique = [...new Set(arr)];

let sortArr = unique.sort((a, b) => a - b)
console.log(sortArr)


function insertionOrder(str) {
    let map = {};
    let res = [];
    let tmp = str[0];

    for (let i = 0; i < str.length; i++) {
        if (tmp !== str[i]) {
            res.push(`${tmp}${map[tmp]}`)
            delete map[tmp]
            tmp = str[i];
            map[tmp] = 1
        } else if (!map[str[i]]) {
            map[str[i]] = 1
        } else {
            map[str[i]] += 1
        }

    }
    res.push(`${tmp}${map[tmp]}`)
    return res.join("")
}

console.log(insertionOrder("aabbbccccaaaaa"))


function revString(str) {
    let arr = str.split(" ");

    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        let res = ""
        for (let j = arr[i].length - 1; j >= 0; j--) {
            res += arr[i][j]
        }
        resArr.push(res);
    }
    return resArr.join(" ")

}

console.log(revString("Hello World"))