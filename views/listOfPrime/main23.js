function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimeList() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');
    
    const maxNumber = parseInt(inputElement.value);
    if (isNaN(maxNumber) || maxNumber < 2) {
        resultElement.textContent = 'Please enter a valid number greater than or equal to 2.';
        return;
    }
    
    let primeList = [];
    for (let i = 2; i <= maxNumber; i++) {
        if (isPrime(i)) {
            primeList.push(i);
        }
    }
    
    resultElement.textContent = <p>'Prime numbers up to '</p> + maxNumber + ': ' + primeList.join(', ');
}
