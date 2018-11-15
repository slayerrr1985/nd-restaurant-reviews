/* SERVICE WORKER REGISTRATION */

// check if the browser supports service workers
if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./js/sw.js")
    .then(function(reg) {
        console.log("Service worker registered! :) " + reg.scope);
    })
    .catch(function(error) {
        console.log("Service worker registration failed! " + error);
    });
  }
