'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7e2b411dd0a617a901c6dc68d4f7d199",
"version.json": "bac40db0904e7dfbc0ecabf69add18a0",
"favicon.ico": "afdada28a73e5269dcfd16e60d0aa435",
"index.html": "93ccb223c926e542a62e567f3c7d94c2",
"/": "93ccb223c926e542a62e567f3c7d94c2",
"main.dart.js": "bc27ec54763b440219fcb2c81664c5fb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/apple-touch-icon.png": "d14ff66cda5470a01af3a14b4d86cec3",
"icons/icon-192.png": "62ee5f6ca09a36a591adb9446445e56e",
"icons/icon-192-maskable.png": "db76ed2b7becc00a607c0baadc21e422",
"icons/icon-512-maskable.png": "870d7d1aa9e409544ec4b8c3a04e5c4a",
"icons/icon-512.png": "9455760091307f9991a0ef3b77fc5573",
"style.css": "ef4fcd1c4cc44bad0d3b0f9f3ae763ab",
"manifest.json": "1c2da69e98cce149264a8b6b23438a83",
".git/config": "50bda67012eb4197ba2a6cfc7ccbe0bf",
".git/objects/3e/150d9a1e66cbd1cf05d8ac746f7ee45ab8ac25": "7811c56c47b2057790fac2365879a0f4",
".git/objects/50/292175920fad25f48a76217b39a022ae75dca7": "47838ff032656a12b93c4b7b543b3ec2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/f8edaa3836cef661e8c48453a8bddace8830bc": "9a16b42e3d8fbf01b962cf9c3a947608",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/e3015fb97a115f0452409567a96b01aab2207e": "1f7eea8081f9b262ce648bbc9e598b8c",
".git/objects/02/810008362d31f28fbea56fa9f4b8f6e325f29b": "b717acba1e6998cd80d35f53957f0859",
".git/objects/02/8c630d641011d3510691dea4793aa425e3c033": "9cc6800e9a3a8b871a97ce7c48097610",
".git/objects/02/c5dd99e0739fad33784fe06eaed8bd74998c1a": "9fe61507be0a683b395bd32c25949b7a",
".git/objects/ad/a003d5a2eed7ad7b71772b0bd5908cc7115e3b": "bc7b53bea50e12cb2ddf64fd7e77526d",
".git/objects/ad/067c3e4952c6c27dcd52a5a48b93e60e8adcb7": "9db5f3a4bdbdb3358c379eef020f3ed1",
".git/objects/bb/67ad9c28f7e97bc2d55ff740b2f0c600a6bdd3": "3ff1cf051f460c5f2f23161d3f9c83aa",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/a8628aef07a1c6782e5c3e38a544ba9479c81a": "bf34a5577a693dc8b84d5ec64d0cbfec",
".git/objects/a2/f6a3f9cec82a10cc2b0605ffa9b5fe9babddbc": "b6e7ea02eaf9ebf67e6041a80dcea721",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/ae/02922e03ab06d253f0c28652d0dd8899beee83": "9a5916222bcfc416e5eac7f2eda2a46d",
".git/objects/eb/e34a873120a62c7ecfc81c0535ba1347ae2919": "431361adb528d2ea7a2ef535e49e7999",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/5c6ca66637004e4bfa68842d178289d4c24be1": "a550c3b0f2bdc22670787d28828a85d0",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/65212a284ea71f9b678a3403a86de349f7a872": "124db1b64c4ce0d35a38b7a6c7e7368b",
".git/objects/1f/01306ff4ced50f1280a08746e41fd15e73f23a": "b979a8e403ccf957a07dd11d6e21bd77",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/75/377e040c7689d8c090056f896ebe78a72e6add": "663c59672b40bc151c106050bb987543",
".git/objects/2f/6601036aa0349864de3fb924a01036e98c2542": "9e0607a3af7f83a61d1fa49a147a1402",
".git/objects/07/d32622c1eaea69b7821f3fe7f80e38c32bf723": "8cec4c02ea2da8826575f88733c7e8ba",
".git/objects/6d/7d2919f898fb176401d2f4298cd0ea35e7e853": "16b606fae597ac9909146949f6e89f9b",
".git/objects/01/6b1003ee235d5d8e163d96de3e152e4a22390e": "d431180c9f912366eedfddacfb448179",
".git/objects/39/6b6f6d1fb0bc0a3df913d6a63747b35a6f093d": "367ff5ff0c8a4d51585ceff889fc8aa9",
".git/objects/99/13ccc04982f372d03fb0e7d9d795428110e70a": "d45c7e17ccd0b5e7170cb422c40209dc",
".git/objects/97/5d746eb0fc72e3d22101c1b9ad561e8e86a78c": "fad44c4dd8f095381ae51306c1dcfa29",
".git/objects/90/bda12a88a15bf2cf53dcffa5bdea719c996547": "a1769b70c6b11028bab0c34e4729ece6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/525d95a149f05df6bd44c7420e21d67f867dec": "46733bf37502434144ed83e4cf2b8eaf",
".git/objects/aa/a1e4f1a02a49ee3a76e237c8ba947a0ab055b5": "df0fdb08e076183db2a719e9088f9070",
".git/objects/f7/43d045b9ae3388b982e0dc594e8456f765ee4d": "b421a44ed63f6f66400b9667bc9215af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/5b2dfa9e4073a9e4662ed509d6f9ef1410f868": "cd72e9e7ecbe056e010389d90335d272",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/13a80be9a9743d784d08c2a64a392bbc0e6b76": "c11b0549a69c0909926a3480bb603ee0",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/23ece12c207c0d4fc354dc1f5552f9fff4614b": "36e868c3c2c55af9bc72e8336d2f561f",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/2b/371c7995ec986a21a6aae4c5bb812946aa5061": "e4b525ff9953a79cad214767e819e76b",
".git/objects/7a/314ea63bfcda7f0348914a40de6ffd86b69831": "8ae1dacb4e8962970732e5f4f8d928a1",
".git/objects/22/1b297084e6c76ab5f33ae7ab76856163085bc4": "66f21a7ddaec9789db1823592e97df46",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0d5f7994634038e047fba5138258dab",
".git/logs/refs/heads/main": "67db72f5b54b9171a547c66993401b49",
".git/logs/refs/remotes/origin/main": "8df50d8bd8d297e28a349f38fd9ffa29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b83b0bd50dbaed4ac39272f3579676a7",
".git/refs/remotes/origin/main": "b83b0bd50dbaed4ac39272f3579676a7",
".git/index": "e26aac344cc5931ed571de9f5af1d782",
".git/COMMIT_EDITMSG": "747d839efff095332afd4a7fd9230e48",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
