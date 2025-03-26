function stringToIntegrer(str) {
    let number = 0;
    for (let i = 0; i < str.length; i++) {
        number = number * 10 + (str.charCodeAt(i)) - '0'.charCodeAt(0);
    }
    return number;
}

console.log(stringToIntegrer('123') === 123);