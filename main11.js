function method1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved from method1")
        }, 2000)
    })
}

async function retriveData() {
    let res;
    try {
        res = await method1();
        console.log(res)
        console.log("some other steps")
        // if (!data) {
        console.log("data logged before promised resolved")

        // }

    } catch (err) {
        console.log("err ", err)
    }
    console.log("res => ", res)


}

retriveData();

function syncFunc() {
    console.log("Sync func logged")
}

syncFunc();