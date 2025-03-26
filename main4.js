var arr = [[1, 2], [3, 4], [4, 5]]

//output arr = [1,2,3,4,5]

function uniqueAndFlat(arr) {
    let obj = {}
    let result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!obj[arr[i][j]]) {
                obj[arr[i][j]] = arr[i][j]
                result.push(arr[i][j])
            }
        }
    }
    return result;
}

console.log(uniqueAndFlat(arr))