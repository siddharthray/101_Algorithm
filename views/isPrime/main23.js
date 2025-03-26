function isPrime(num) {
    if (num < 2) {
        return 'Not a prime';
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 'Not a prime';
        }
    }
    return 'Prime number';
}

function checkPrime() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    
    const num = parseInt(inputElement.value);
    const result = isPrime(num);
    
    resultElement.textContent = result;
}
