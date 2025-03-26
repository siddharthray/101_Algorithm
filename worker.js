onmessage = function (e) {
    console.log("event", e);
    const { number } = e.data;
    let totalSum = 0
    // for (let i = 1; i <= number; i++) {
    //     totalSum += i;
    // }
    totalSum = BigInt(number) * (BigInt(number) + BigInt(1)) / BigInt(2);

    postMessage({totalSum: totalSum.toString()});
}