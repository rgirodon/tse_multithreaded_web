let cumul = 0;

onconnect = function(e) {

    let port = e.ports[0];
  
    port.onmessage = function(e) {

        console.log('Worker received message : ' + e.data[0] + ' - ' + e.data[1]);

        let current = e.data[0] * e.data[1];

        cumul += current;

        let workerResult = 'Result: ' + current + ' (Cumul: ' + cumul + ')';

        port.postMessage(workerResult);
    }  
  }