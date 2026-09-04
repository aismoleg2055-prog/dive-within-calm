const CACHE_NAME = 'dive-within-calm-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Пока простой вариант — просто пропускаем запросы
});