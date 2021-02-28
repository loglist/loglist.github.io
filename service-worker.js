/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","fe4c911035b3d2da286e7f2d44452d0d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","4c0463992af3939001b3a9b6bd7a9aea"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/09/30/numpy/index.html","b9a68556369dcecab81709e5c265a091"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","9647ea3775a26127869635fa255df54c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","7018dcd03cc27b978e8f48e8154cd592"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","6701f57b10d5f7c0f1fd6505d1f1e14b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/20/css3极简笔记/index.html","3c1a6b83add8faabe91f0b40ef316e44"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/JS极简笔记/index.html","5aabb37cc70f13681d5124b23f61401c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/hello-world/index.html","31992ae0717ccb8e21b2d469d35f41f8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/23/react极简笔记/index.html","569e3a91319a497f04c529951c504b93"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/Jsdeivr限制50M后怎么办/index.html","fe30e8ddfa0c46b1fc40360940c2473c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/如何查找google-analytics-key/index.html","45cc25b45f11c946d318a2d77b1f3733"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/29/whyAxiosCan’tGetCharlesMapLocalData/index.html","1b6def13f0e04df294f7235a1ae9e2f2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/05/react案例-简书/index.html","ad91971e86032202df1c02b4afe856e2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/15/dynamo实战应用/index.html","f96493ce0801a32281f066598e7979c7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/22/reactNative项目实例/index.html","272ca6765e87f9d119224883e2529176"],["C:/Users/raydied/OneDrive - sprat/loglist/public/404.html","113d0e2cb9153d6893721d2edc03c47d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/about/index.html","24b3615f2788bb8a6a9e9b7bb3391e58"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/03/index.html","a719a04e7d391e86df0e7458bd816abe"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/09/index.html","c8f8675e975fee4e93cbee31879b10a6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/index.html","7375f0803a6e646c61cccf4701aaa9bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/page/2/index.html","7c524881cd7ee2fc05d9fcd408793526"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/11/index.html","2adcd9ac75f136aa749ccd57a4549b3c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/index.html","5f9e81094cc269ecbae14975853892ae"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/page/2/index.html","be53776be3a6183f8fcdb4e8029e6534"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/index.html","9fa649f211bc74af5b2f52e3579c9dcd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/page/2/index.html","9fa649f211bc74af5b2f52e3579c9dcd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/categories/index.html","9bc2f3f9d336d0042c13f44eb441a007"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/tags/index.html","4d4ac537c6fcb4056f7581faef0f1bce"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/BIM/index.html","893e315947f2f6227adca706971b78cf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Code/index.html","1556941336e8730d6881d2499dc4ebb0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Site/index.html","2265abd0f9b4fc16d0e3765eb8a027ee"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Skill/index.html","12a721f3e11c903fc70d533875a32468"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/index.html","9bc2f3f9d336d0042c13f44eb441a007"],["C:/Users/raydied/OneDrive - sprat/loglist/public/css/style.css","027c952d44798790c773cd5e4f50aff6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/friends/index.html","20127c1d0eef52ff8be526dfceb31cf2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/index.html","8b480db0bb08c8b6b10fa1653be113ca"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/page/2/index.html","36366e60d1eb856e1eb72ebb09958e01"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-animation.html","b97fe703dd9bc426f24c5b6110e2a2a9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-transition.html","18546f5053aece674790d523a23eb401"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css3-cube.html","98e9e28d7cc5df6c41fc5f4316bfa23a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/js-hoisting.html","a1dd9b06ad11601b07e81343c1dc5685"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/json.html","efffd25769a892b092f41c85ae0b845e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/jsvar.html","0853d1c6e690a471176b8b828f09d9cf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/C/index.html","49c7eb5930a25a096b3652b2d6ba1119"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Charles/index.html","7afbae8cd66712a842143f761888a86b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Dynamo/index.html","dcadd91e6bea8f1b3a5c8d94d33660d9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Hexo/index.html","8b929d8b317f5a025448b44d7a9a9f12"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Numpy/index.html","3caa0c3db7ee4bb834956c8ee7095f95"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Python/index.html","cd9d4f879f8962d548a76c545f9750d4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Shell/index.html","7ae520de4d21049aed7dfc65a65c27b1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/css/index.html","f16c90ba881806fe17363ed82442ac35"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/error/index.html","ae1acfc0911d1b238454ce48958aaf67"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/ffmpeg/index.html","a534999472392a0fff2adaef598cd122"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/index.html","4d4ac537c6fcb4056f7581faef0f1bce"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/js/index.html","78853c7565c9d0b0949aca92260d17f2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/jsdelivr/index.html","535c7ac210e6fc6040f7e92210952ca2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/notes/index.html","b66dc2ef48b76a9b84f16fe8017e2074"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/project/index.html","9176d9030945bfe6d95a9cf84d767034"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/proxy/index.html","f403b5845f96b445b6a3cb00ba631445"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/react/index.html","9ca55d7d89f6735dbf3ef1e612cdaecc"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/rss/index.html","305e136082a75f8ccf9cf4cbba46ae26"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tools/index.html","d9ad0e1a3623ddf24228d424e44f7c4f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







