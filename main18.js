// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.prompt('Enter lower number: ', num1 => {
//     console.log(`inputs are ${num1}`);
//     getPrimeNums(num)
//     readline.close();
// });

// rl.on('line', (line) => {
//     matrix.push(line.split(' '));
//     nbr++;

//     // number of lines to read
//     if (nbr > 5)
//         rl.close();
// });


// looping from lowerNumber to higherNumber

function getPrimeNums(lowerNumber, higherNumber) {
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

getPrimeNums(91, 144)