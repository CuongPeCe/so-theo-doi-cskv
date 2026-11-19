/* Sổ theo dõi CSKV – service worker: mở được khi mạng yếu, luôn ưu tiên bản mới nhất */
const C = 'so-cskv-v3';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(CORE))); });
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (/script\.google|googleusercontent|localhost/.test(u.hostname)) return;   // dữ liệu Google: luôn lấy trực tiếp
  const put = r => { const cp = r.clone(); caches.open(C).then(c => c.put(req, cp)); return r; };
  if (u.origin === location.origin) {            // trang của mình: mạng trước, mất mạng thì dùng bản đã lưu
    e.respondWith(fetch(req).then(put).catch(() => caches.match(req).then(m => m || caches.match('./index.html'))));
  } else if (/cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net/.test(u.hostname)) {   // thư viện: dùng bản đã lưu
    e.respondWith(caches.match(req).then(m => m || fetch(req).then(put)));
  }
});
