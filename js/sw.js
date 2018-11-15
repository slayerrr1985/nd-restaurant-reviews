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
    var requestUrl = new URL(event.request.url);
    console.log(requestUrl);
    event.respondWith(
        caches.match(event.request.url)
    );
});

/*

self.addEventListener('activate', function(event) {
     event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('wittr-') &&
                   cacheName != staticCacheName;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    ); 
});
*/

/* 
self.addEventListener('fetch', function(event) {
    console.log("holi");
    if (event.request.url.endsWith(".jpg")){
        event.respondWith(
        fetch('../img/corgiswimflip.gif')
        );
    }
}); */


/*
self.addEventListener('fetch', function(event) {
    console.log(event);

    event.respondWith(
        fetch('../img/corgiswimflip.gif')
    );

    
    if (event.request.url.endsWith(".jpg")){
        event.respondWith(
            fetch('./img/corgiswimflip.gif')
        );
    }

    
    var cacheRequest = event.request;
    var requestUrl = new URL(event.request.url);

    if (requestUrl.origin === location.origin){
        if (requestUrl.pathname === '/'){
        event.respondWith(caches.match('/'));
        return;
        }
    }

    event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        })
    );


});
    */