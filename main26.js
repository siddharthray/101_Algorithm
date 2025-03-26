
function printPrime(inpA, inpB) {
    let res = [];

    for (let i = inpA; i <= inpB; i++) {
        let isPrime = true;
        // A prime number is only divisible by 1 and itself, so we start checking from 2 to the square root of i.
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break; // Break the loop if i is not prime.
            }
        }
        // If i is prime and not less than 2 then push it to the result array.
        if (isPrime && i > 1) {
            res.push(i);
        }
    }

    return res;
}

console.log(printPrime(2, 10));



// 2 3 4 5 6 7 8 9 10