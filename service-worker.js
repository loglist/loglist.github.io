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

var precacheConfig = [["D:/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","2a638415809584303aff92127d0d3d5f"],["D:/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","c8049a321262654992a7b2f5efc5ec2e"],["D:/OneDrive - sprat/loglist/public/2020/08/13/hello-world/index.html","ceddea3ee92d24c5da6ca378ae115361"],["D:/OneDrive - sprat/loglist/public/404.html","8b237a3e6259664923c5e4464f545c3b"],["D:/OneDrive - sprat/loglist/public/about/index.html","b300b12f904b9a6dd30f386d2df9d49e"],["D:/OneDrive - sprat/loglist/public/archives/2020/03/index.html","c7797392602292302ce2f032144a36ba"],["D:/OneDrive - sprat/loglist/public/archives/2020/08/index.html","e3fccc3c9bb909683e0bc67991b443b9"],["D:/OneDrive - sprat/loglist/public/archives/2020/index.html","211a7ffb5a70da5579ebbbe1de4cc8ad"],["D:/OneDrive - sprat/loglist/public/archives/index.html","43aba7977905f3fed7cfc48f83230387"],["D:/OneDrive - sprat/loglist/public/blog/categories/index.html","20ace0bb232f4637c6d8f5d7fc35e1a1"],["D:/OneDrive - sprat/loglist/public/blog/tags/index.html","ef5156f07f388740b6b5aceb36035aef"],["D:/OneDrive - sprat/loglist/public/categories/CodeLanguage/index.html","783c6ff1e28cc7d74827c3fda2ecc29f"],["D:/OneDrive - sprat/loglist/public/categories/Site/index.html","0e350bca473da697c37323510981c9fd"],["D:/OneDrive - sprat/loglist/public/categories/index.html","20ace0bb232f4637c6d8f5d7fc35e1a1"],["D:/OneDrive - sprat/loglist/public/css/style.css","cd211b2d12b515c3158f5f7028b78d01"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["D:/OneDrive - sprat/loglist/public/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["D:/OneDrive - sprat/loglist/public/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["D:/OneDrive - sprat/loglist/public/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["D:/OneDrive - sprat/loglist/public/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["D:/OneDrive - sprat/loglist/public/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["D:/OneDrive - sprat/loglist/public/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["D:/OneDrive - sprat/loglist/public/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["D:/OneDrive - sprat/loglist/public/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["D:/OneDrive - sprat/loglist/public/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["D:/OneDrive - sprat/loglist/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/OneDrive - sprat/loglist/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/OneDrive - sprat/loglist/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/OneDrive - sprat/loglist/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/OneDrive - sprat/loglist/public/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["D:/OneDrive - sprat/loglist/public/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["D:/OneDrive - sprat/loglist/public/img/loglist.png","19217e3fe478363da60be39de72a5f5c"],["D:/OneDrive - sprat/loglist/public/index.html","201102a5c550152c88646300808210be"],["D:/OneDrive - sprat/loglist/public/js/app.js","3efe9ec73cf447af4342722b18e3f90c"],["D:/OneDrive - sprat/loglist/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["D:/OneDrive - sprat/loglist/public/js/valine.js","f70b377010100ac6af3382c85c59901f"],["D:/OneDrive - sprat/loglist/public/tags/C/index.html","5b4c556b59f35bb7aea45c08c36dea00"],["D:/OneDrive - sprat/loglist/public/tags/Hexo/index.html","f18c7005cb89e36882fc53f90309342d"],["D:/OneDrive - sprat/loglist/public/tags/index.html","ef5156f07f388740b6b5aceb36035aef"]];
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







