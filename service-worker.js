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

var precacheConfig = [["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","832cc270e22ef434038f9e053512c0e6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","8f37e9d98f08eab55d7db49a3066ae54"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/09/30/numpy/index.html","76c9feb5cba02c8f9e7fdd03a8e11342"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","c987547d83e852704f30ec1838f04d7a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","9b2d8b24c62919bcebc57659a555f915"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","0721550930e33fa0483f3f031e183897"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/20/css3极简笔记/index.html","cb9d80c8f4642e01350764625af97990"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/JS极简笔记/index.html","777e7f1bb1bcba177d651472858912ea"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/hello-world/index.html","133d54795f9dbc71e6a1b9ca40613069"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/23/react极简笔记/index.html","93773d004a66e47c3d2af2214383b4d3"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/Jsdeivr限制50M后怎么办/index.html","baeaeedad559df82033807be3c253e4f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/如何查找google-analytics-key/index.html","1754cb0b3b79057e59e2eac37eac621a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/404.html","a1f35f3928bf6363331804290d4b1712"],["C:/Users/raydied/OneDrive - sprat/loglist/public/about/index.html","bd863e649d77f680c1d7ac5559102d4a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/03/index.html","bf95f7be6fab3882b7cdc5a16f46b5b9"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/09/index.html","ccf88ae67907c8b99ac6b5ef78b28f8e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/index.html","d3d49d4501ec7e6ea8bc6ed605368fab"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/page/2/index.html","56dbca41dcfc66ff2d5382f7e924152d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/index.html","8eb9bcce24f899582cbfe925809f3e2f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/page/2/index.html","dae140d95acc159194311d4aed5a4256"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/index.html","f9031743f6e9f71cfe81ca9a10df1084"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/page/2/index.html","f9031743f6e9f71cfe81ca9a10df1084"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/categories/index.html","3d24c3b4f2c2d31a73ddeb6e3b3ee18a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/tags/index.html","5bbece9acd4f07f625d8ec5cfd79087b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Code/index.html","6902fe176bdeb2330b739e769a5f2398"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Site/index.html","939c8d16ba64ae45b092b80a6b7d0050"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/index.html","3d24c3b4f2c2d31a73ddeb6e3b3ee18a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/css/style.css","a13750a92ba67b896038720ac1e20c64"],["C:/Users/raydied/OneDrive - sprat/loglist/public/friends/index.html","66d6b041114e5475744394e6babbd50b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/index.html","6f384def600f6024cfe0e51d067d3015"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/page/2/index.html","54c696be267b01554f6184fdbb2561fb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-animation.html","876e3759b709d95f56d3a8b1d94a88b4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-transition.html","a32ecbe1c7a7aade4aa5c27ebd420c44"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css3-cube.html","d071c8639d845a7471925b819990ca97"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/js-hoisting.html","c787564194654f26bc9b55ce5214aa15"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/json.html","11156beb2917de6c9c560a7cbe819557"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/jsvar.html","3077a48a593133ef09dee140a3eae7b7"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/C/index.html","ee16d2927b3488bd863dc7116db81bc8"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Hexo/index.html","e1962085a4d91f9d93c611262300361d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Linux/index.html","2a722ea40f16fb1d6378af03bb4f8dc6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Numpy/index.html","3b5d8406aa2e5a84864fb76c21158025"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Python/index.html","96378dd9d3c69dcfdf51a4c9cfca0251"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Shell/index.html","484a3fafe26a5601d7f3e6ace24fe675"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/css3/index.html","1038e74df7a845eec8f60bd149f64fe4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/ffmpeg/index.html","98dee07c1fb90be975609d36bf3c2a3a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/google-analytics-key/index.html","39ac3ba578d835fb9f320ea477cfe7fe"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/index.html","5bbece9acd4f07f625d8ec5cfd79087b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/js/index.html","7aea1693841c982d2371d65c68b6235c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/kills/index.html","ef071b4840730663e5ba1927c736aff2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/picgo/index.html","ac90fbeec960ce5affa6d7cd558adb24"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/react/index.html","34a22f3c10b530d65774f9cb6a20d42e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/rss/index.html","b01b3c8a36cd6d857983a8f4b335b5e2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/volantis/index.html","955876fd50deb08748c877f1c13880a0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/图床/index.html","01d05ee5fcf803ad2774f84198def144"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/极简/index.html","9a3cd7337f847df0941d3143ce6b3c76"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/笔记/index.html","9321910404580d1b404701eb475000f0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/网盘/index.html","11aa377abc7d56621aa9248b51d58160"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tools/index.html","efc26354ba7dc6fd531bfead8cb8acf0"]];
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







