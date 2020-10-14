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

var precacheConfig = [["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/03/24/cSharpBase/index.html","fc63809d60c5345c40c5007293b60804"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","02d3a4b863b42329086912aa6e4ba0b3"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/09/15/hello-world/index.html","be57369ae136e17379dec2087f14fa2d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/09/24/javaScriptBase/index.html","18a3b3a1f033b9d199749cefce1c9f31"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/09/30/numpy/index.html","7a282bbb042b968cb5e0db1129751990"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","2dcebf8cf335d971c34c33bf38f09e48"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","6749b94b28ff5cfee7f60cb7a89f2617"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/404.html","1f488680048ddce07bc9adffbe9ff55f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/about/index.html","14b05f1170a56035e3c0309c5225a667"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/03/index.html","66594235be2c14268dfb5281dace5572"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/09/index.html","d78702b58c92d7ade7ddc48d0e0f90f1"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/10/index.html","80a2e217757c73ee6557f4b92b2849e5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/index.html","6683cd6cad5081112b525829b3e6739a"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/index.html","3ccbaf8a548faddb5f41115503166919"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/blog/categories/index.html","27fb7aa6d8b9ecb4ade5f2dd1a7d8755"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/blog/tags/index.html","212148e3ebefeeac4fb15202ea208da9"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Code/index.html","49ca9065e82809e792cc07f921e06618"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Codelanguage/index.html","46ef7f7040e037e6477ed3453e417ad1"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Site/index.html","5ce300ea5500f1af54489c6e1a5d4685"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/index.html","27fb7aa6d8b9ecb4ade5f2dd1a7d8755"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/css/style.css","b7527be9ed31fe4c5d4b29e0af758573"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/friends/index.html","8be58956b806d986f11d5708a0c1ae71"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/index.html","120bdb0e30b91167234a7d4d0760085c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/Figure_1.png","7b80c89495ea1a323996c382983715c5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/Figure_2.png","5515ea6063307a68666965f51d96c093"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/bimproj/zjproj/jpg03.png","e15dfa2340c2938eb9a9454ca5c6e9fb"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/bimproj/zjproj/jpg06.png","c98807bffb23f6261a7f0f637be18c25"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/bimproj/zjproj/jpg09.png","d2908d68eab28f12907696b9b225752f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/icon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/loglisthmpg.png","e54c98fe233fffbf5d268ec9dd7d40a2"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/olaindex_1.jpg","b4acda407596984c1ea47e935385604c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/olaindex_2.jpg","72e4adf3ba6824b0bc9ca516810c13f9"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/olaindex_3.jpg","6a1b397e9736a3676ec01f2331eeae0f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/olaindex_4.jpg","c8403436280d99493baf681a599f3356"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/jscode/jsvar.html","266f9526c0e1bd1fa2f73f0781789677"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/C/index.html","45d05cd3672c4c22fef4118865e53acb"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Hexo/index.html","6b63574819ab7ff4aab831b1d9265e99"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Js/index.html","6d25e83aa9cf1ffd977cbe2974d12de3"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Numpy/index.html","1e2d9d655c5a194225b944498b98532f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Python/index.html","85dd1c302a264d07044072bade531c39"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Shell/index.html","c11a1043596c26ab83ca5f3e16f304d6"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/ffmpeg/index.html","7fc303e8bdf0615555a7dcfe5534a674"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/index.html","212148e3ebefeeac4fb15202ea208da9"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tools/index.html","0b43b75325b28468d80f1a2eb412b1cd"]];
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







