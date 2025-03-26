// a simple memoized function to add something
const memoizedAdd = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
}
// returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9)); // calculated
// console.log(newAdd(9)); // cached

function memoized() {
    let sum;
    let map = {};

    return function (inp1, inp2) {

        if (map[0] === inp1 && map[1] === inp2) {
            console.log("memoized")
            return sum;
        } else {
            console.log("recalculated")
            map[0] = inp1;
            map[1] = inp2;
            sum = inp1 + inp2;
            return sum;
        }
    }
}
// let add = memoize();
// console.log(add(1, 2))
// console.log(add(1, 2))
// console.log(add(2, 2))


// same memoize function from before
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const factorial = memoize(calculateFactorial);

function calculateFactorial (x) {
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5