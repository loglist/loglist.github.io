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

var precacheConfig = [["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/24/cSharpBase/index.html","c2bbac7c458f49c15e13c230610f5d29"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/03/25/aNewWayToSyncSourceCodeOfHexo/index.html","eb8d312c673381d572ce38403722aec0"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/09/30/numpy/index.html","bc389ff65936f6d5d534405e8517ca88"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/11/theErrorAboutInstallOlaindex/index.html","1101e44911cb21b17718f05b4053e29c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/14/shell-ffmpeg批量转flac至wav的方法/index.html","dfcf9a744a1abd760a42266807385c8f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/19/Hexo的jsdelivr-picgo图床与rss订阅/index.html","b7b81d82803d691006820046c32a49d5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/20/css3极简笔记/index.html","2fb2d29da443146779b42b23b9ef9919"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/JS极简笔记/index.html","48b6e9ee357f5ab1f3b2c40e9853af0f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/22/hello-world/index.html","1575318368eb23544dc07aa820edd66c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/23/react极简笔记/index.html","dedc34de78ca69d4768b8d1c9394b376"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/Jsdeivr限制50M后怎么办/index.html","f3a97150c50d54d22cc3d5c85d36554d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/2020/10/26/如何查找google-analytics-key/index.html","0758bc5853c0312c614765873f390987"],["C:/Users/raydied/OneDrive - sprat/loglist/public/404.html","264dbca80521dc303458b3a171e7aa13"],["C:/Users/raydied/OneDrive - sprat/loglist/public/about/index.html","da803b2c2561f827d585c7cc7f8e83ce"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/03/index.html","cc51c7fc276376811ae4781c97336849"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/09/index.html","8c27fc4cb53fc12beec0c2628dea8fb2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/index.html","e6d6a87ceb01eabca93fe4d3593073fa"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/10/page/2/index.html","b3f1c70a953c97469652387efed18099"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/index.html","f627b5b5a557aea27842958bebde6a38"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/2020/page/2/index.html","0dc5bda6744193e4622293a9162c301e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/index.html","736ea214f3a39c670e66b974196cc33c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/archives/page/2/index.html","736ea214f3a39c670e66b974196cc33c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/categories/index.html","7c87e59252e2350e9cb02851c27ddadb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/blog/tags/index.html","5dfd55a6474e9904405a76a155617939"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Code/index.html","aa8ba8a9052c429e7cad9767c49ef48d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/Site/index.html","2a77e3e80b966364a27f34914edec93c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/categories/index.html","7c87e59252e2350e9cb02851c27ddadb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/css/style.css","a13750a92ba67b896038720ac1e20c64"],["C:/Users/raydied/OneDrive - sprat/loglist/public/friends/index.html","e26287aef6a66b66f74c131cab98264b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/index.html","d9d7bb9aa80598441769512295f409bc"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/app.js","4d34f2cbf4a768badb1a283211c3dcc1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/page/2/index.html","1a46c058cda235fbf7765d3edf2c134c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-animation.html","bd9036edb7313f91f435e160f3fe80e2"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css-transition.html","20df5d71dccdeaf5a959919f284484d5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/csscode/css3-cube.html","f6ff32a45a975c65a7646c9da5cb3506"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/js-hoisting.html","64c2bfde3f13dbe9f69f291f4a69913c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/json.html","c56e5baafeb13f5f2c78437ada52fad1"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/html/jscode/jsvar.html","bd9b79ce55b47c8e39e6a3a6e27f08b5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-192x192.png","5722d3988df8c186ad0ad668a912ce94"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-36x36.png","359f6ab3b2a0f1b66fe9fa1a29da9c0e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-48x48.png","152e2c61a43f8dab3503cc625f66d655"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/android-icon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-114x114.png","7fc7bac6bec77b2e74d362e65157793e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-120x120.png","34dfe44ef4b559d653022e2f1ff05695"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-152x152.png","1f22f66afe224ea7c7b9f067144a2a92"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-180x180.png","0908377f0f4849cee38a74b406f832c6"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-57x57.png","b4c9f623bae24fe989a43d372584b133"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-60x60.png","3616e18cb1094b74aba96217db27f049"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-72x72.png","88dfd84fbc2413f65f879546761d2310"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-76x76.png","f6783ac354d83564bc5307802d8aa757"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon-precomposed.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/apple-icon.png","c820ca3a3bca92cd3e544f0bdb6941ff"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-16x16.png","4663a8bbb23de5af79bf332e6cbc4bcb"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-32x32.png","554c23f0febfabed533eaae7762c669d"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/favicon-96x96.png","46c2be455f5d4203416cf5e27e1c6088"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/loglist.png","19217e3fe478363da60be39de72a5f5c"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-144x144.png","d8bf6e0b6cc83190d1f214feaf2a9a45"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-150x150.png","280f77f5ed5646ba1b17d8d199a79959"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-310x310.png","30ccbe0ab86abbbdd6006212f6bfe085"],["C:/Users/raydied/OneDrive - sprat/loglist/public/storage/image/favicon/ms-icon-70x70.png","89b0c7ecae47cf557e73973473fcdd55"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/C/index.html","86df95ef5d87fbf399c1a346e7d0c407"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Hexo/index.html","093b33d1994f816bd3e50fd20963c2dc"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Linux/index.html","0e2606cac00fc6a7dd5bd364f1e50c4b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Numpy/index.html","a8e0f801e55506b4ec868eb2e2651f2e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Python/index.html","2a829754ce5bd58d58609f61b4dce2d4"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/Shell/index.html","8f78c6c90a3eefa51626e7b25cade05b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/css3/index.html","35e3e9604fa033718381136263619506"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/ffmpeg/index.html","e4355890515812a2cdd3d4cc2a8a0a20"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/google-analytics-key/index.html","e38c266fed57b5f19be597f93641b193"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/index.html","5dfd55a6474e9904405a76a155617939"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/js/index.html","660818d24765dd35268c8f0dd75f408a"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/kills/index.html","84e441e00843d0a9db7266d3fc5c2392"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/picgo/index.html","cadc8a263215da535e1dbcac331c802f"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/react/index.html","2b50116921a0bf802c549c781d78ec36"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/rss/index.html","4ccbce1af324a610d1cdc3966757d72b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/volantis/index.html","4c471c54431becfe9c4d37b95501ce02"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/图床/index.html","58cb912bcb3b5e42c178d188cbcdb395"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/极简/index.html","6e3c094122cf392984f96a8d56952a3b"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/笔记/index.html","5bcca8981d0449c47a10d518ce74531e"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tags/网盘/index.html","eb034fdfd8a4bac5ad1c7ea4ae549927"],["C:/Users/raydied/OneDrive - sprat/loglist/public/tools/index.html","8a4e3946c7785b4bd217eb0ef6f3ce00"]];
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







