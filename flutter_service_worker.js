'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f12d40e15ca7da7ada1199b7df0518a5",
"assets/assets/crypto_logos/ADA.svg": "ae420ebbfc77f03e4478e125e3a16aa3",
"assets/assets/crypto_logos/BTC.svg": "0364d62faf62d68dc8d437d9ef1d3e34",
"assets/assets/crypto_logos/DAI.svg": "f6dfa22ff3beac4098189c4844b3216d",
"assets/assets/crypto_logos/DASH.svg": "7aa551ac6cf06475538d1d78000da498",
"assets/assets/crypto_logos/DOGE.svg": "801128d93df53a0ebec64d6e4fdca3fe",
"assets/assets/crypto_logos/ETH.svg": "eb992962c01ce429beac4328ed5eec13",
"assets/assets/crypto_logos/EURP.svg": "9af5f9d7b327b097be62ada71820d874",
"assets/assets/crypto_logos/LTC.svg": "62c807de3ad926339f56cc939e6a9a7b",
"assets/assets/crypto_logos/RUBP.svg": "092fe2d30035cdda4cb74e03277510b5",
"assets/assets/crypto_logos/TRX.svg": "196a2981218f458951ba3585e22fc619",
"assets/assets/crypto_logos/UNKNOW.svg": "6c8cab7b6e9f4010ef60153663e7428f",
"assets/assets/crypto_logos/USDP.svg": "34bfdfb8d36636578fb4386c18b34eff",
"assets/assets/crypto_logos/USDT.svg": "65cd4e7fcb055d5bd0c79c614a90b2b4",
"assets/assets/crypto_logos/USDTT.svg": "39e0effe93e641fc3f7c38aa61348fce",
"assets/assets/crypto_logos/XMR.svg": "cff34d17f78b5b11138990f16b939f4e",
"assets/assets/crypto_logos/XRP.svg": "a654aa5e3cecd71fc36d9f205fad5c50",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "8aa7fa4bac8320541a6a01b558c53879",
"assets/assets/fonts/Rubik-Medium.ttf": "11f22f212ab3e9b8e241cbd69d3c43e7",
"assets/assets/fonts/Rubik-Regular.ttf": "cd619a4f068dc66cc6e58fe0a91a8a34",
"assets/assets/fonts/Rubik-SemiBold.ttf": "75852e6bdc48c05b3c39f4b3b94d2a9c",
"assets/FontManifest.json": "ad5a82f7a3fb08927451dbd0f5489ef3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "4703afa4b4ad02242e40028bf83377dc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "44caa767818878c33c150b1bc8231767",
"/": "44caa767818878c33c150b1bc8231767",
"main.dart.js": "b3c26c0342bbefdee7b176ec98a14c2e",
"manifest.json": "83fb490c71f417e97abe80694e387f8c",
"version.json": "64042e27bff47cd2f2791fd78da46030"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
