// Write a program to print Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// Write a program to check if a number is prime number or not

function Fibonacci(num) {
    if (num < 2) {
        return num
    }
    return Fibonacci(num - 1) + Fibonacci(num - 2)
}


function printFibonnaci(num) {
    for (let i = 0; i <= num; i++) {
        console.log(Fibonacci(i))
    }
}


function isPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is prime`)
    } else {
        console.log(`${num} is not prime`)
    }

}

isPrime(8);
