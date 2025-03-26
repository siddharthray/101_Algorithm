let arr = [
    { no: 1, name: "aa" },
    { no: 2, name: "bb" },
    { no: 1, name: "cc" },
    { no: 2, name: "aa" },
    { no: 2, name: "bb" },
    { no: 3, name: "aa" },
    { no: 1, name: "aa" },
    { name: "bb", no: 2 }
]

function removeDuplicate(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(JSON.stringify({ no: arr[i].no, name: arr[i].name }))
    }

    [...set].forEach(item => console.log(JSON.parse(item)))
}

removeDuplicate(arr)