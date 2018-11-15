/* SERVICE WORKER */

var staticCacheName = 'reviews-static-v1';


self.addEventListener('install', function(event) {

    urlsToCatch = [
        '../',
        '../index.html',
        '../restaurant.html',
        '../css/styles.css',
        '../data/restaurants.json',
        '../js/',
        '../js/dbhelper.js',
        '../js/registersw.js',
        '../js/main.js',
        '../js/restaurant_info.js',
        '../img/'
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


self.addEventListener('activate', function(event) {
    event.waitUntil(
     caches.keys().then(function(cacheNames) {
       return Promise.all(
         cacheNames.filter(function(cacheName) {
           return cacheName.startsWith('reviews-static-') &&
                  cacheName != staticCacheName;
         }).map(function(cacheName) {
           return caches.delete(cacheName);
         })
       );
     })
   ); 
});


self.addEventListener('fetch', function(event) {
    console.log(event.request);
});
