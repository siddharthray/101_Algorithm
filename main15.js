function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// usage
function sum(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}

let curriedSum = curry(mul);
// console.log(curry(sum)(1)(2))
console.log(curriedSum(3)(2));
