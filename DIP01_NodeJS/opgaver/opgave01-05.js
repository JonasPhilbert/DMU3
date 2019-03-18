function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

function logPrimes(max) {
    for (let i = 2; i < max + 1; i++) {
        if (isPrime(i)) console.log(i);
    }
}

logPrimes(1000000);