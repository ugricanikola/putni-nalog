const CACHE_NAME = 'putni-nalog-v1';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener('fetch', function(event) {
  // Aplikacija zahteva internet.
  // Ne čuvamo Google Sheet podatke offline.
});
