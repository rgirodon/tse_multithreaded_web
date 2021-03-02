var cacheName = 'helloUnicornWorld';

self.addEventListener('install', event => {
    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => cache.addAll([
                './images/unicorn.jpg',
                './',
                './index.html',
                './styles/styles.css'
            ]))
    );
});

self.addEventListener('fetch', function(event) {    
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
        );
});

