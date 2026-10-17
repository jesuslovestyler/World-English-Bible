// World English Bible — service worker
// Offline: the whole app (page + both Bible data files) is stored on the
// device at install, so the Bible opens and reads with no internet.
// Updates: network-first — whenever the app is opened WITH internet, the
// freshest files are served and the stored copies are refreshed, so fixes
// and improvements arrive on their own. Offline opens use the stored copy.
// The app icons are cached at runtime once they exist, so their arrival is
// never a precondition for offline storage to switch on.
var CACHE = 'web-bible-v2';
var PRECACHE = [
  './',
  'index.html',
  'assets/ot.js',
  'assets/nt.js',
  'manifest.webmanifest'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE) return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') return;
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // e.g. GoatCounter — leave it alone

  event.respondWith(
    fetch(request).then(function (response) {
      if (response && response.ok) {
        var copy = response.clone();
        caches.open(CACHE).then(function (cache) {
          cache.put(request, copy);
        });
      }
      return response;
    }).catch(function () {
      return caches.match(request, { ignoreSearch: true }).then(function (cached) {
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('./');
        return Response.error();
      });
    })
  );
});
