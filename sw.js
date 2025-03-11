self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('game-cache').then((cache) => {
            console.log('Service Worker установлен и кэш создан');
            return cache.addAll([]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker активирован');
});
