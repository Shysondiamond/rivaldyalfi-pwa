const CACHE_NAME = "rivaldyalfi-cache-v1";
const urlsToCache = [
    "https://www.rivaldyalfi.com",
    "https://www.rivaldyalfi.com/index.html",
    "https://www.rivaldyalfi.com/favicon.ico"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
