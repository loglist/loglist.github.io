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

var precacheConfig = [["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/03/24/cSharpBase/index.html","e6268b01cfb2e979aa36a67eb74085ea"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","5922a14262a9debd8650139331d7cc0b"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/09/15/hello-world/index.html","72971cb606983a1b0f0e454eb79797ff"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/09/30/numpy/index.html","26e88e4313ed61513b0e09a3a7938258"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","81f34ec5e396b95ccb4f69422395ba19"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","79b7db3f143f0919e45344f5e0723c97"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/18/JS极简笔记/index.html","f68d34531a82010345446af059e9a244"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","9c4c1dc12c22903c962cefa07843937a"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/2020/10/20/css3极简笔记/index.html","cb497c742dd873531c226cf3328b5146"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/404.html","93f576f7b2955bc238540664a760ed68"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/about/index.html","9a8669c4436d2a48f05edbcd4d278815"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/03/index.html","59d0b2344146db176f91d96abed319ec"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/09/index.html","68ae567477570c2d087f7924706a2031"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/10/index.html","31b426e1bd328b95f2cf5c5260bff652"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/index.html","37c483d8f38f667d63e2f0428996e000"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/2020/page/2/index.html","6a37f376396b5186ff5db90930a4d79f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/index.html","68590d52e68745654570ac055d37d130"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/archives/page/2/index.html","68590d52e68745654570ac055d37d130"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/blog/categories/index.html","c2d109388b140125ac96784938a0ca9f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/blog/tags/index.html","88d57cc10f349af27d5751705b54ec63"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Code/index.html","1ae482d156d8af6b56058a7e68bc9b90"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Hexo/index.html","a0c646e4046ac16045f95c1a98b0117d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/Site/index.html","99874cb5ee3c776fd047e08228ac41b4"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/categories/index.html","c2d109388b140125ac96784938a0ca9f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/css/style.css","43728bd66a6db3947890f5bd509b0cd5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/friends/index.html","a0c6dc8f7a008f05558bfa343bd3cb7f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/index.html","ddd128d76f5f5e62f1d7e9860d2cc169"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/page/2/index.html","d8ec3ab3c88a74a1e1cd1728d056c013"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/csscode/css-animation.html","f9985741e6899389c6280d5b2a62d3d6"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/csscode/css-transition.html","69bca0edee88d677c446a94c6e8a23cc"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/csscode/css3-cube.html","5fa7d00fa56ba32c24476aa419da1a2b"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/jscode/js-hoisting.html","b218ac46423bb035180582fc5cda45fe"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/jscode/json.html","ca5440aac2aedf932f2ff6cf490d1970"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/html/jscode/jsvar.html","005e305c3a5848ff234e1ea56270eb99"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/C/index.html","adcaaace6a5b3c3770779eb3198f234c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Hexo/index.html","38a52d500f86198736fdae5f43d8d09a"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Linux/index.html","659a487b52820c9cd7f42622fce825ad"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Numpy/index.html","9e0d7a79903b98f6c5d112c02476d886"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Python/index.html","40a2fb1e02d4c6f31e983f630fe4166c"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/Shell/index.html","0fd84a77d3b9a3284354b67778e166ab"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/css3/index.html","201a9e7c04f1eb8dd2c3dc8e0b3252f7"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/ffmpeg/index.html","6314f58c6c450e88ead7e305d8def26b"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/index.html","88d57cc10f349af27d5751705b54ec63"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/js/index.html","f1493e6d93ebea1ffd1822991af04375"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/rss/index.html","d7529063d88bfb63ebc90683e2721ff8"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tags/图床/index.html","e2fbdcf3e5a666c743cc074643988016"],["C:/Users/sprattop/OneDrive - sprat (1)/loglist/public/tools/index.html","3f08303c4f7b39c33434b9d1a6f0c90d"]];
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







