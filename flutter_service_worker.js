'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "242e577076e07fd6a3dd3683fcb8d34b",
".git/config": "88ee296a69ff5a33510b1dd2561b6a59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "044eaae9c55c104d583ba1619762a06a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8672cc3425d49be2d96d91a7c7aa2fc",
".git/logs/refs/heads/main": "e8672cc3425d49be2d96d91a7c7aa2fc",
".git/logs/refs/remotes/origin/main": "c1258843d593f384d1d247c7fd798899",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/313116d6caabef1a41d24ae318d37565049445": "29c676f1928429717c00195570179a2e",
".git/objects/05/e280394c59512aca1b97cd14c05a491db3775a": "8985f8337ba0144141d02cceef5e4d75",
".git/objects/11/19f1cf6b65397eab48912015e14125f073f30f": "11df97b05dbc63ddcdd18d4e0c75dc9b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/4382aceea2966970db50e07bc465470861efca": "df6e5369962cf734e10dd08aee57165d",
".git/objects/22/ee6c565eed281b21d6e63067b3a7323f51e9d5": "d56161cf2f1a80d67f27258e6dae946f",
".git/objects/27/891a4dc08bcaed25752167ca63b95ba816c503": "1705b63785e3ec10ce71bc49cc1bb1d8",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/8b544a51d81e9b61fe91429560f91bfde812fa": "4bd86f1d5badd9ce90e1fa400141888f",
".git/objects/36/5d213a103cc7c2348d37d11b57452d7a2415d4": "20197a7710ea87e5b9ab562567f98e67",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3d/ed7fb72faff971c0154a4ac441a9f0bbc266bd": "4cda5fa7842c1d0c37b1b81d3fe68f31",
".git/objects/42/70db939fa15a7d5fbe0cbcc087752100591422": "533ae1e516ccd8e0c441b4c7546ee7f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/54/58dc67cf9168128cc5acb570e47005e3f12f26": "4a5c4f2e784b940f5fb141ba86416bd9",
".git/objects/54/ac3782adae99c9b307ab7b9cf3b23db3acd1f0": "b4a811befa98e00878d431081a07d666",
".git/objects/58/2e31e4ae39a4d6d0988141e566ca13283e62ce": "4d8380271dc3564c85896cd3a7322ee5",
".git/objects/5f/3a2a164ff03fc30b009442f433e9998d787668": "7b3b5980b4bc121549c33b4c58ff7b47",
".git/objects/65/be58a1a705a199cbabfd5e9027d903b6220776": "cff42d895769472127d39a065a339daf",
".git/objects/66/37fb1682e9e9dbf4e26b6b3b1b58a937d3af33": "4e5d7c6d4b608c8be26579c06d243453",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d6dcf6c74030e91c745832a74c442e07d2b0b6": "2ec3a033221e10b07bb1e1df6d6b883a",
".git/objects/6d/8e82761e22f47871ba4cf38cd456c6efc8d286": "3da3bc8f3128cb40f1b2ddb66fca10d4",
".git/objects/71/46bacd133f2a35caaf2e61c92c83774486da8e": "f757b577a3e6c1634755f8e5b4510d4f",
".git/objects/75/6fef55e08a33b3fa28a06090ea1bdbea30d2bc": "40ec548b1c4a1366815ceeac6eff87a1",
".git/objects/79/246f6cc743067ad0eb6ddfba7e433416eda8b8": "1020079f9ed837f88b8cdd7f2812eda9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/b0ad572c079b127b43095717dbb75b3a0e5b16": "83d556dfec72cd5b82033276fb3a4bc1",
".git/objects/7f/fa3963fa702c0783985ce012f30d2f205d3ca2": "0d3251e2bc06fd4854d5d425eeb3feb5",
".git/objects/80/4300974cf6978f65597d532c0d6034b459b528": "200d82e0185d070b2a0748dfc57a9a31",
".git/objects/80/d801981e6b6f49d0d7ebf40b39429ed88d5069": "088f20c02d602bee5e8f0dad8c417514",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/90/7c307f80a5efc18f30067b89b944d2d955ca43": "6e5d54f65aba3c514afaa3d5d3eb90a8",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/63d0398ee33a5a8a57c9305249202fce325d55": "c890b7153f2a90a8e26f3e4b576156d5",
".git/objects/a5/aadd3be2f7661485ab7bc63d78e16f6b7845ed": "c8ab23a2f6aff5c44057f1fe02f3e753",
".git/objects/a7/962539c326479e671aa23d716abf5b7f310dc9": "762df2143e2f5b8ca04ee947aabae34e",
".git/objects/b0/4aebb4c185dd59db3a2b0abcc55c7c03ac6175": "e64e7a1dbecd0eb1cec6ecc21acd8efb",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1d365136da989417c092f909331dc6e4f9714d": "582b24a70536c7064f77b1f595b3dec3",
".git/objects/b8/682696862230015592c1161cb0579c260c517f": "ac77fc9b9d66bb57c94aeca8c65c6cdf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/10a1a50c055c5b8133f38075067a47e960ea63": "2372c27c549483d33944205f7b78b8d0",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/afd32e93bc8632a935e203a7ac8a4f40b0ec28": "56bdb73072abfaba56004bbd386c80c1",
".git/objects/d0/6f4414e75c2b695ec66c1e2aa2cb99b5ad3281": "38bf8850848b45ce0e57bd64497a7c42",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f2ad7e607592c47de5111b7ec7ddda0346293d": "061d6216bdf0fb7432eb9595d6edfe53",
".git/objects/d9/f31b5cb2101a3d31585e21078cfe6d172b5bc9": "719f1db79e186deafa10ad22cf300085",
".git/objects/e0/1aa186623b52b352b4b0a49811597405832c22": "40b79d7a68662194b120ea3924ec9227",
".git/objects/e0/4e56abb91416d125933671fe34c7cd00d897da": "5be740ae4a3ec8c9f2dd0aa8f259aa4d",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/8567a15ae5664009aa07b84c5ff31ad791743b": "c4784c4d076547726005ccbff024c495",
".git/objects/e6/5eea05da597bf4f6f76b9c8e4e6f6aaf51190d": "eda20676880be379d9eda35d7d7db325",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/de37b608bc6e714e0bea729d0627c875599765": "93947fb843a81cb49e4c20a87753085e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "8caf2888c786ecfe81a435711b63463b",
".git/refs/remotes/origin/main": "8caf2888c786ecfe81a435711b63463b",
"assets/AssetManifest.bin": "fa8b3d86935666337000e544fde2d4ad",
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
"flutter_bootstrap.js": "f95b84c731eafeee28f3d729fb5bd8bd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c15e8daf43bb3ce2c5e292c3a9a4039",
"/": "5c15e8daf43bb3ce2c5e292c3a9a4039",
"main.dart.js": "fbd16c46fd4c8f23a59ebc64f810611f",
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
