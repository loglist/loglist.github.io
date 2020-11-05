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

var precacheConfig = [["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","ed0727f86543a715cf6ffea471f10ccf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","58260ed0dacbc201a7d0938c01caa0c9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/09/30/numpy/index.html","56f1bfc8582e464c516e800f9599af37"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","f33631c71603000797cd9b2a948bb0f3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","86e73310617b4b501cb4389d80589208"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","ad62d2d68cc48501b5cf50ad78d90444"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/20/css3极简笔记/index.html","c6c9782531003fb72b44bb87affd0f3c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/JS极简笔记/index.html","210fe81d2707907bf72edd8f174408d5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/hello-world/index.html","c8addcd99180b2e2a8838cbbda006975"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/23/react极简笔记/index.html","61ae877c606a338e1b9c8ccc7518488e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/Jsdeivr限制50M后怎么办/index.html","51def6544b66c93fab4fa84ba4d452b2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/如何查找google-analytics-key/index.html","06604af97948364e484aca5f4b1eaabf"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/29/whyAxiosCan’tGetCharlesMapLocalData/index.html","de06582016147f1762a827d0862531cd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/11/05/react案例-简书/index.html","e8439b7e13ebba4fe4fcb1f8370a0152"],["C:/Users/raydied/OneDrive - sprat/loglist/public/404.html","477f5635919153b92db96822833fb375"],["C:/Users/raydied/OneDrive - sprat/loglist/public/about/index.html","baae067b9f3639f693c10f84a85f7642"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/03/index.html","5694bdea72f01cb8ca0b240614e02215"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/09/index.html","0d3d034c64d5c1d8c4bb5fe0754944e5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/index.html","2e43dfd21ab191ca86fc50117a5f49ae"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/page/2/index.html","3ab983c14f23a671e9d5c209e7464b44"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/11/index.html","f0df1fd14004a43d26767c136a5fc473"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/index.html","c6a1861103d75915787db8746104adc4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/page/2/index.html","94d30d6a35afc64fd1800419fa000b42"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/index.html","eb6bcd868fba6865bb1ec45a9980007c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/page/2/index.html","eb6bcd868fba6865bb1ec45a9980007c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/categories/index.html","4b65f3bc86ff66b09ec65c2c52164fcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/tags/index.html","21d360cdacce0a2216eb5fdd3566bd98"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Code/index.html","4687642bfd871f5a3bc4ade6b4071bc4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Site/index.html","39542d7a0ac5b4f25f0a26a6719ba404"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Skill/index.html","0a72bde698ec03b326387dae7e041eb7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/index.html","4b65f3bc86ff66b09ec65c2c52164fcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/css/style.css","a13750a92ba67b896038720ac1e20c64"],["C:/Users/raydied/OneDrive - sprat/loglist/public/friends/index.html","78baed829f4f45ad62c9d8ee46a8c0b4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/index.html","c4b95d26d7f924aa96a6ffd71198212b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/page/2/index.html","4dc684570a0907bdb4e4d942b69b6e37"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-animation.html","a957091ee6fd78f0976d7041a2e96bf3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-transition.html","ba561eb3428b7204c75a77f3be0eea71"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css3-cube.html","128f733a8344a526b966d40357e47213"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/js-hoisting.html","09cff12c17dc6bed5676c9c7b3a038f9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/json.html","3220bb4e94a942c292f38acd6b7a1c50"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/jsvar.html","73490480d4009437a6a0c58670af8825"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/C/index.html","b15f7feb2029c2507f37bba38767a891"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Charles/index.html","54d34586edf9b20553ffd4e767715c2a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Hexo/index.html","4fc53a174304110ccc96dafd340de540"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Numpy/index.html","c1f9512a4a6addf5f738adcb8fe0cdf9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Python/index.html","753023e5c1a2d3b9dfff966663a08b06"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Shell/index.html","2bbd597a56f2b974a0a4e7e54e21d1a8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/css/index.html","c3551bf0f49455a62af021788fe4b8c0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/error/index.html","5571d01d6b451db4cd93ccebc25bbb31"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/ffmpeg/index.html","335091af75d8246ab49820e43030b15f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/index.html","21d360cdacce0a2216eb5fdd3566bd98"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/js/index.html","918dd81e8e6f6430be4cb622543927f3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/jsdelivr/index.html","fe42a059c270b7bd90f75ef747d9678e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/notes/index.html","2448e5f6174aaa2a3088d5470f0c704b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/project/index.html","819b4f126fa10bddf787b05d85d27754"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/proxy/index.html","f85755d804d07cf3ea6df563780ceb51"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/react/index.html","339c738959f8e6f90cc5aae611ef3b28"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/rss/index.html","584316ca492301bf7a8ec3738e98016a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tools/index.html","a27cdecc9de838599eb8bbf3979e3128"]];
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







