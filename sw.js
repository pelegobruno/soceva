const CACHE_NAME = "soceva-cache-v1";
const urlsToCache = [
  "/soceva/", // Atualize conforme necessário
  "/soceva/info.html", // Página inicial correta
  "/soceva/styles/style.css", // CSS principal
  "/soceva/scripts/app.js", // Seu JS principal
  "/soceva/assets/icons/SO-CEVA-192.png",
  "/soceva/assets/icons/SO-CEVA-512.png"
];

// Instala o Service Worker e armazena arquivos no cache
self.addEventListener("install", (event) => {
  console.log("Service Worker instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache criado com sucesso");
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa o Service Worker e limpa caches antigos
self.addEventListener("activate", (event) => {
  console.log("Service Worker ativado");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cache antigo removido:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Intercepta requisições e serve do cache (se disponível)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
