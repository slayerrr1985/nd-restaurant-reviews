/* SERVICE WORKER */

var staticCacheName = 'reviews-static-v1';


self.addEventListener('install', function(event) {

    urlsToCatch = [
        './',
        './index.html',
        './restaurant.html',
        './css/styles.css',
        './data/restaurants.json',
        './js/',
        './js/dbhelper.js',
        './js/registersw.js',
        './js/main.js',
        './js/restaurant_info.js',
        './img/',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
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

    event.respondWith(
        caches.match(event.request).then(
            function(response){
                if (response) return response
                return fetch(event.request);
            })
    );
});
