const CACHE_NAME = 'hisab-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/income.html',
  '/expense.html',
  '/wallets.html',
  '/reports.html',
  '/budget.html',
  '/settings.html',
  '/credits.html',
  '/login.html',
  '/register.html',
  '/css/style.css',
  '/css/mobile.css',
  '/js/app.js',
  '/logo.png',
  'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
