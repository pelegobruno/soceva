const CACHE_NAME = "soceva-cache-v1";
const urlsToCache = [
  "index.html",
  "info.html",
  "styles/style.css",
  "scripts/script.js",
  "scripts/automação.js",
  "assets/image/logo/SO CEVA.png",
  "assets/icons/SO-CEVA-192.png",
  "assets/icons/SO-CEVA-512.png"
];

self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
