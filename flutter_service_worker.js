'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fa8b3d86935666337000e544fde2d4ad",
"assets/AssetManifest.bin.json": "def725637a5a161b12953dadf15681d5",
"assets/AssetManifest.json": "7b9b2c62c4163c3d6548721f7316befb",
"assets/assets/attendance_6612108.png": "66deddad7129c90587d9042131eff767",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bcda77f90c3fb205c73f851a5936644e",
"assets/NOTICES": "8d0958204b981f94573dc20a3c2db444",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/custom_snackbar_plus/assets/images/back.svg": "8cdc05219e218423f0ebd2d79d4f0b00",
"assets/packages/custom_snackbar_plus/assets/images/bubbles.svg": "5b13919135c373ecb104d19ea881cd4d",
"assets/packages/custom_snackbar_plus/assets/images/failure.svg": "f9a890e8829d6d6daad90c3c802c872f",
"assets/packages/custom_snackbar_plus/assets/images/info.svg": "aa174f6b965cfa142ea40ed860d6f73e",
"assets/packages/custom_snackbar_plus/assets/images/success.svg": "1469f518293eb6faeea117ed742593e1",
"assets/packages/custom_snackbar_plus/assets/images/warning.svg": "f95dee4073d25d8e37df3b3b0829a880",
"assets/packages/custom_snackbar_plus/screenshots/auto_error_snackbar.png": "2554512c2ab3da6ece85db668d76faed",
"assets/packages/custom_snackbar_plus/screenshots/auto_info_banner.png": "900f4ab0040f393948fad2621794a915",
"assets/packages/custom_snackbar_plus/screenshots/auto_success_snackbar.png": "435f1fded24b8d0f33f6692eb8f2fe8a",
"assets/packages/custom_snackbar_plus/screenshots/auto_warning_banner.png": "7d1496f649d16ec61eee9286f1499b4f",
"assets/packages/custom_snackbar_plus/screenshots/CustomSnackbar%2520Preview.png": "c12d055ee55d285e3631dae0a46f9b96",
"assets/packages/custom_snackbar_plus/screenshots/custom_snackbar.png": "df832c21e0ed34e7c17570b44ba11653",
"assets/packages/custom_snackbar_plus/screenshots/error_snackbar.png": "3bb496d0e50df61e81b3c087a886a642",
"assets/packages/custom_snackbar_plus/screenshots/info_snackbar.png": "8439d96b5289472380d32b6be7fc351e",
"assets/packages/custom_snackbar_plus/screenshots/progress_snackbar.png": "3bb496d0e50df61e81b3c087a886a642",
"assets/packages/custom_snackbar_plus/screenshots/success_snackbar.png": "023a726f115796cf07e94987f5a7f9e0",
"assets/packages/custom_snackbar_plus/screenshots/warning_snackbar.png": "c2860f424968a47f54c5c08002634ea8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a53f9097be6245d92b304cd3c0d37043",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c15e8daf43bb3ce2c5e292c3a9a4039",
"/": "5c15e8daf43bb3ce2c5e292c3a9a4039",
"main.dart.js": "c8a0f795d19451c64c4d400a656b3353",
"manifest.json": "a31a4c3e9742ee7f566ba55b9c5da6ca",
"splash/img/dark-1x.png": "8c1e1be1401e2e15a6e9e09048ab09e8",
"splash/img/dark-2x.png": "6a2d498f15723e6c4da4a53ad7955bcf",
"splash/img/dark-3x.png": "7571b6af0770f5dfa6e4c68b65ad2449",
"splash/img/dark-4x.png": "93be7aa241488cc15f9f959ac61bede0",
"splash/img/light-1x.png": "8c1e1be1401e2e15a6e9e09048ab09e8",
"splash/img/light-2x.png": "6a2d498f15723e6c4da4a53ad7955bcf",
"splash/img/light-3x.png": "7571b6af0770f5dfa6e4c68b65ad2449",
"splash/img/light-4x.png": "93be7aa241488cc15f9f959ac61bede0",
"version.json": "6b7aff434db8f7e23d1ddc5f0667d10a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
