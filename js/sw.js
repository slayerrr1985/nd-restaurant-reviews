/* SERVICE WORKER */

var staticCacheName = 'reviews-static-v1';


self.addEventListener('install', function(event) {

    urlsToCatch = [
        '../',
        '../restaurant.html',
        '../css/styles.css',
        '../data/restaurants.json',
        '../js/',
        '../js/dbhelper.js',
        '../js/registersw.js',
        '../js/main.js',
        '../js/restaurant_info.js'
    ];

     event.waitUntil(
        caches.open(staticCacheName)
        .then(function(cache) {
            console.log("Cache loading success!");
            return cache.addAll(urlsToCatch)
            .catch(function(error){
                console.log("Cache loading failed! " + error);
            });
        })
    ); 
});


self.addEventListener('fetch', function(event) {
    console.log(event.request)
});
