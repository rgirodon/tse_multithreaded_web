let n = 1;

let end = 1000000;

while (n <= end) {

    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i == 0) {

            isPrime = false;

            break;
        }
    }
    
    if (isPrime) {
        
        console.log('Found a prime : 0 ' + n);

        // found a prime!
        postMessage(n);
    }

    n++;
}