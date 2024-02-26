'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b3294dcba3178fcbd38c3fe61968ead8",
"assets/AssetManifest.bin.json": "426b56551b958046d7a4922499c0ec5c",
"assets/AssetManifest.json": "81a05fdbf40e1840a56537b93af66586",
"assets/assets/files/academic_qualifications.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/files/projects.json": "de4fb731f51278197ce72d16c32285df",
"assets/assets/files/project_categories.json": "d7ddd2b085051071d4084fc78580e01d",
"assets/assets/files/skills.json": "3935074fd2e8107ea1162b75e3624540",
"assets/assets/files/work_experiences.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/naxa_assessment/logo.png": "1009b94b7ed9919ab759ce1a71880c2c",
"assets/assets/images/pdra/logo.png": "59ccdaa661a79788174634c560c5cbde",
"assets/assets/images/rkado/logo.png": "719df96b3b376dd417c5b475afd64d5f",
"assets/assets/images/rkado/screenshot1.png": "9688c7647ef1719f1cba21d428bcc6db",
"assets/assets/images/rkado/screenshot2.png": "80b3051c461ae00521be7e89c62a97bb",
"assets/assets/images/rkado/screenshot3.png": "988782026a49f278a214350e81f4d95f",
"assets/assets/images/rkado/screenshot4.png": "14c96373171cc9887544921ab12bbcb0",
"assets/assets/images/rkado/screenshot5.png": "a95cbcf27e28bd90239775af4defcdf8",
"assets/assets/images/rkado/screenshot6.png": "baabf60ef14f3d6b45ddd035ee27b89e",
"assets/assets/images/rkado/screenshot7.png": "0a73d1025d2150c95918e0a994a7d4fe",
"assets/assets/images/safa_nepal/logo.png": "5f8335ab35e7c4753de85ca2b51eae67",
"assets/assets/images/safa_nepal/screenshot1.png": "a35c7ccad6fd85d62a99912854ce0f54",
"assets/assets/images/safa_nepal/screenshot2.png": "1aec6839acefb3ece4d68f80a65cad28",
"assets/assets/images/safa_nepal/screenshot3.png": "3585a96e1e2e725831c6b8b51a747720",
"assets/assets/images/safa_nepal/screenshot4.png": "9b021c063cc1d544e6a7fffab6f2d688",
"assets/assets/images/shopazard/logo.png": "4744abbdfe01f6560af245f29244b695",
"assets/assets/images/shopazard/screenshot1.png": "83b10f0f6d537df8cad90a98db954446",
"assets/assets/images/shopazard/screenshot2.png": "6f107db73c5bed7f9c15f0c546188ba1",
"assets/assets/images/shopazard/screenshot3.png": "8e9324e48583380176d0e1eb2d4daad5",
"assets/assets/images/shopazard/screenshot4.png": "1e957ffda24ed5e0b4be0d254dbc3ea8",
"assets/assets/images/zite/logo.png": "ffc41351c18dfdabe86254c143a1d1f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "241b960473f01d071a10a619cc705056",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "515e5d4f33735bc2f9200492ec289a0c",
"/": "515e5d4f33735bc2f9200492ec289a0c",
"main.dart.js": "9583dadf22596c7b4e44bbcbdb6c1360",
"manifest.json": "7cbcf28ee19be9c61bf7975779a404ec",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
