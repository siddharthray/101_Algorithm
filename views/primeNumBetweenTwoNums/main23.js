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
    const startElement = document.getElementById('startInput');
    const endElement = document.getElementById('endInput');
    const primeListElement = document.getElementById('primeList');
    
    const startNumber = parseInt(startElement.value);
    const endNumber = parseInt(endElement.value);
    
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber >= endNumber || startNumber < 2) {
        primeListElement.innerHTML = '<li>Please enter valid numbers: start number should be greater than or equal to 2 and less than end number.</li>';
        return;
    }
    
    let primeList = [];
    for (let i = startNumber; i <= endNumber; i++) {
        if (isPrime(i)) {
            primeList.push(i);
        }
    }
    
    if (primeList.length === 0) {
        primeListElement.innerHTML = '<li>No prime numbers found between ' + startNumber + ' and ' + endNumber + '.</li>';
    } else {
        const primeItems = primeList.map(number => '<li>' + number + '</li>').join('');
        primeListElement.innerHTML = primeItems;
    }
}
