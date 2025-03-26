var arr = ['cat', 'dog', 'tac', 'god', 'act', 'sad', 'king', 'das'];

// {
//     cat: 3,
//     dog: 2,
//     sad: 2,
// }


function numOfAnagram(arr) {

    let count = {};
    let keyMap = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === undefined) {
                break;
            }
            if (arr[j] === undefined) {
                continue;
            }
            arr[i].split('').forEach((element, index) => {
                let key1 = element;
                let key2 = arr[j][index];
                if (!count[element]) count[element] = 0;
                if (!count[key2]) count[key2] = 0;
                count[key1] += 1;
                count[key2] -= 1;
            });
            let anagram = true;
            for (let item in count) {
                if (count[item] !== 0) {
                    anagram = false;
                }
            }
            if (anagram) {
                if (!keyMap[arr[i]]) {
                    keyMap[arr[i]] = 2;
                } else {
                    keyMap[arr[i]] += 1;
                }
                arr[j] = undefined;
            }
            count = {};
        }

    }

    return JSON.stringify(keyMap, null, 2);

}
// function numOfAnagram(arr) {
//     let sort = [];
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         sort.push(arr[i].split('').sort().join(''));
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (!map[sort[i]]) {
//             map[sort[i]] = 1
//         } else {
//             map[sort[i]] += 1
//         }
//     }

//     return map;

// }

console.log(numOfAnagram(arr));