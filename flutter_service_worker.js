'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a9ce9f542334957ce5a9b0f09e3341ad",
"assets/AssetManifest.bin.json": "6af617c39638b2e82c1b810a1812463c",
"assets/AssetManifest.json": "d26dac9fa998133cf8853616cd5763e3",
"assets/assets/files/academic_qualifications.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/files/projects.json": "d52c92063fc48ce2652df22fb20a2699",
"assets/assets/files/project_categories.json": "d7ddd2b085051071d4084fc78580e01d",
"assets/assets/files/skills.json": "3935074fd2e8107ea1162b75e3624540",
"assets/assets/files/work_experiences.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/github.png": "7e96f65c99f0ad3ab8e7cf70a2d21e34",
"assets/assets/icons/linkedin.png": "d58e1aebc037a407e46b5f40b235abc4",
"assets/assets/icons/playstore.png": "9efbed43d7692b4c0050e05987555aa0",
"assets/assets/icons/pub.png": "f8e8a20371ce73f05f74bb21478afc52",
"assets/assets/icons/website.png": "77660d724c26e4471ab86f23a1699291",
"assets/assets/images/naxa_assessment/logo.png": "1009b94b7ed9919ab759ce1a71880c2c",
"assets/assets/images/naxa_assessment/screenshot1.png": "3d8c063ff47c1978b62bb1c08f2d58d4",
"assets/assets/images/naxa_assessment/screenshot2.png": "65680fb9509941d963f4bd436c084fdb",
"assets/assets/images/naxa_assessment/screenshot3.png": "ab1feb8cb66a2e84df027f2c54552931",
"assets/assets/images/naxa_assessment/screenshot4.png": "28115ac1fa81a26fc824f9897e5ab6c0",
"assets/assets/images/naxa_assessment/screenshot5.png": "d98a1fe3f129f0de1f5a75ed3c2f1689",
"assets/assets/images/pdra/logo.png": "59ccdaa661a79788174634c560c5cbde",
"assets/assets/images/pdra/screenshot1.png": "3aa0a245344410dbe8885f1c26709758",
"assets/assets/images/pdra/screenshot2.png": "f49902914d79bddcedca3593e194a3a4",
"assets/assets/images/pdra/screenshot3.png": "e7a877ac6c3d24490feb37a8c23795e9",
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
"assets/assets/images/zite/screenshot1.png": "2f8d82aa5fd85948f52c10b5f5cf7268",
"assets/assets/images/zite/screenshot10.png": "d0925e82947d8ba30de3ac155c040019",
"assets/assets/images/zite/screenshot2.png": "105fd67d110c641ead3abf820562eb8f",
"assets/assets/images/zite/screenshot3.png": "d65524deae7d02dfc89aff4a9282e5ae",
"assets/assets/images/zite/screenshot4.png": "1e79342d881f3f179ac90e65e52df475",
"assets/assets/images/zite/screenshot5.png": "f2f36d3a1985e0d3782c069baa98e327",
"assets/assets/images/zite/screenshot6.png": "f871559a5d9dc086c5c7ebcc21d03190",
"assets/assets/images/zite/screenshot7.png": "a4beb92ff4a730c672e605dd50448ad1",
"assets/assets/images/zite/screenshot8.png": "a2fc4349d4155b2ee68e2b19954cfc88",
"assets/assets/images/zite/screenshot9.png": "4b6b9283675e516eb435ba4f2c51a2c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "31368718080ab192e827a3795a7e1f64",
"assets/NOTICES": "e4ffec99b116906e9123b4d98094a5a6",
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
"index.html": "cf19684cf2e3532667d0a302bf623459",
"/": "cf19684cf2e3532667d0a302bf623459",
"main.dart.js": "a614c50e474c28529d35c8a5b25cd58e",
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
