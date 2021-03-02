const sleep = (milliseconds) => {
    
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

const computePrimes = async () => {

    let n = 1;

    let end = 100;

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

        await sleep(100);
    }
}

computePrimes();