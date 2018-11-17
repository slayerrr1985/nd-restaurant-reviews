/* SERVICE WORKER REGISTRATION */

// check if the browser supports service workers
if (navigator.serviceWorker){
    navigator.serviceWorker.register("./sw.js")
        .then(function(reg) {
            console.log("Service worker registered! :) " + reg);
        })
        .catch(function(error) {
            console.log("Service worker registration failed! " + error);
        });
}else {
    console.log('Service Worker is not supported in this browser.');
}

