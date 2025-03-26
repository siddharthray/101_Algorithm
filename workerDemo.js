if (window.Worker) {
const worker = new Worker("worker.js");

function simpleLog() {
    console.log("First Simple Log");
    worker.postMessage({number: 100000000});
    console.log("Second Simple Log");
    worker.onmessage = function (e) {
        console.log("data ", e);
        const { totalSum } = e.data;
        console.log("totalSum ", totalSum);

    }

    worker.onerror = function(error) {
        console.error('Worker error:', error);
    };
     
}

simpleLog();
}