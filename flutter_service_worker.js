'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01ca81918899ce85d8f79b77b366787e",
".git/config": "60bdb47323385b1b6d99137eae0a3fee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "3c0ada180db1ca1639902172409cd9a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb86cb43083d512d3d6c6361e0851459",
".git/logs/refs/heads/main": "0e38ddcecfefb07f0563a79378097213",
".git/logs/refs/remotes/origin/main": "b477e52fcb7b66005d1fb9a6d89e8025",
".git/objects/06/a67a2dae1f9a696831fc800728be170eb1faf2": "3d89a62ae324464739b5e2055e21d158",
".git/objects/12/10f69bed0a917b4b52654f25b4d323fcb8246b": "29a60712cf3d628254e807ede2c47119",
".git/objects/12/43dfaee0d370fa397661ca57e1f96e2ce8db22": "5addffcf6d3137eca3d759092a1898f7",
".git/objects/13/f5d0f57fe9337f7c9a80e0c0eafdb4089f05c6": "21155d11aafd935775214738ba465c08",
".git/objects/1b/4f5aaee05df73c4a666a5484b0e95fadc428ff": "e5ceda88b38f169bda5f80c3c343af95",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/f6a9c831d0b5670216ce7c2af77596f9b5be51": "a218df6c0b2d93606ec633d7a88924f5",
".git/objects/3e/eeb116bc83bed5b55d7ae2caa6293aec361c5d": "8877d3e4b201168c49c350ae0854a1b6",
".git/objects/46/f1a44f33ea7444efe60068e324aedcf81fdcde": "376b43d47bde4190df0220248d84b847",
".git/objects/49/13e758aae236091e3dea69ac0bbcff5eaaec55": "056eb1da652d595964ff1edc2adfecf7",
".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e": "4b18fd1e638db069054698091a47e5b4",
".git/objects/4b/dca546bee444f2a21a05ed161cdabb06f15540": "a44a6161f4e5e5af4fc3d8f3299e4c37",
".git/objects/4d/b5ac3faa24f72680032401e1208f7b1ea2665b": "cac34b7261aa70722df5047bda86d228",
".git/objects/52/46d98dececc0abe1f6a98e26d71e0b9e983744": "4d979c7294f42f972c5488e5907b1fe7",
".git/objects/53/1a0c2749cd45414c3a632fe3d6d1640799a5cb": "535a16ff3e26bd60d0b56b0a1affe780",
".git/objects/55/2cfe294bd0f5a22ac55cec2e39bdbb9c250992": "5c3da85f7d66414775117932b3d67576",
".git/objects/56/2824bca4e5b99784c34401480f791767590ae0": "2da6cc12251446c2b1c0ff8009d439c8",
".git/objects/59/752e7c071327d7fee40475f9f45da689f28f7c": "d9ae5473c868efa26629219f5cc8484d",
".git/objects/6b/db3b4bb48d4c64679afd468ee920130b3a1d09": "696b895c1b9237d3ebec8421a437716e",
".git/objects/6d/8d146ef1b8628e9c37fc0b925051294c218e12": "7102e3c171563b375d6d1fb3d8968aa7",
".git/objects/75/21510b18017b95f9337ab46e9b41e74c01172c": "1ae284a8b2a6896ccab5990ecdb4319b",
".git/objects/78/7bc8bb8d9b2c2c56088b435697ec3587c87858": "6618b07db7c5f0307d00b7fea1729d71",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/c267dc3de48eeb0cf2a9594ee6811979b972d9": "76ef97c009ecd3a4c6fe40a2a9664bd3",
".git/objects/a1/4f86f36b020c1de0c8edd358591cb5ae527c1e": "8be46af9e4cfcb87570e7d153bfb0b0a",
".git/objects/a4/cfd87e3d3748f88b46fa6a995d4c3156340df6": "80e8ef5964ce884f3101cefd8af84956",
".git/objects/a7/bdebccf7bd26da18ea32f6bf2ec47c78266dd6": "a5ac1a15e09fda31d9ab95df06b2e7c1",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b1/6e1d73874054b4e746c7b920d1f428aa29970a": "66154e8c3334711bbda569b245c8761f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/b7bb7d364975d2a66fe9b6f6668e714bd20841": "5b49b8ef85f52006481e932c88d39ab5",
".git/objects/bb/2d77ed592821fbc2178712319d84ac142993ad": "0bfef84aa25bdfbf5042752dfba8cec3",
".git/objects/cc/23c4f38f5379335165171c1c816757079247db": "add5c594903fb5e49dc1794544cf635f",
".git/objects/d0/4a823d3a3a801b164facd2807f4556b2f11aa9": "25418a7559b502404ea7fdc079a695cd",
".git/objects/d1/0a91ebc4f369c99dc68cbce8d168e0a7537610": "e0d2e1a65e117d4ce38b195e78aa4388",
".git/objects/da/8a306982374869615c61871dbf9cc0f2930a9c": "999ac158c73ca40c45336dc38fe25e46",
".git/objects/e9/833cb47f81a5caa38a4d7e38b7439b696b44b5": "0a19b27e877d660b269b7bf9be12c0ec",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/12c65d6b4e4fc707e80e7530ae914346fc6392": "310c46f19ae0c792c4eb847dfbe031eb",
".git/objects/f8/cfcbef5456c8fb6686c90637b9dae87249d5be": "7a1e6e5ff92f54ff846300c43cf7f746",
".git/refs/heads/main": "5d67e19156a07d3e392b1299203eb806",
".git/refs/remotes/origin/main": "5d67e19156a07d3e392b1299203eb806",
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
"index.html": "33e2f3b2559e3b9ee70780861189e4b9",
"/": "33e2f3b2559e3b9ee70780861189e4b9",
"main.dart.js": "d416ce210efcd8e04d64586197582f79",
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
