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

var precacheConfig = [["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/15/pwn/index.html","ff2cc12e4719c772bd1c4afcbb0fa0ab"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/20/web学习笔记/index.html","144f4f71a5bafcb25378061a4765dfbb"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/27/计算机基础/index.html","76d7f7e5113d39875f4fa639c6d1a919"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/27/逆向基础知识/index.html","9c8fcfd5a9d4e9052805bdb6d5ecf5de"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/09/11/SMC介绍/index.html","8551b013fa646b7f11592200f86f90b0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/09/11/卢本伟病毒样本分析/index.html","69b85de1ef8a26b4d8bd6c5b4305c8a7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/19/安卓逆向常用命令/index.html","a8b55f8414fcc60fa64ddc8e42cdb4bf"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/22/安全设备理论/index.html","c678c1a2b71548bac2e32fc61b5a0beb"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/23/OWASP TOP10/index.html","d4c2e7c0286e4bf6ddea3d8fa7f2425d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/23/等级保护/index.html","251f79882a8fed8ee7dfa740b36e01be"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全值守服务and日志分析/index.html","facad7a6711e17f8d5c4e541593b7c63"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全加固/index.html","512fcab5c6483be7b93b884230abee57"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全运维/index.html","3b36b5ae181097b65066a433ee982ce5"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/22/PWN基础和技巧/index.html","52194aa9e23634824829a4c086d266aa"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/404.html","07cebcd429b44d7c39d9f52f99907136"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/about/index.html","df813f846ce6e49e1e8000420a9a378c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/07/index.html","310dba7bd58ec0beb268cb4b5c9a60e4"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/09/index.html","af9e756c564c0aa269ca5a442c93a55f"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/11/index.html","3c26e8063db3cae9044b79ee53be8b0d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/12/index.html","a85ef896d92bedc502669e79a279ddfc"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/index.html","2abc166bc5d0381bd749bc347de72427"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/page/2/index.html","24df8aef473e6e81e6c0495409489286"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/index.html","df2370237c351ed246eae45f2241ea1a"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/page/2/index.html","d761b673fd4b19fa9d3da957af1e3bb1"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/PE/index.html","8e16dab52e97cdb04d041fce2bc98de7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/binary-analysis/index.html","358ddb8f35eb7e649860edd21be7645b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/computer/index.html","c2a37bea146af16ab722e11cbcd56ff9"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/index.html","23af01f4e960481e3deadddf83bb21d0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/pwn/index.html","1e38519c597a8c4b85cccc50d97ceed8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/reverse/index.html","b81d18d04afd19a89693266db855ffb5"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/web/index.html","da5bf5c94d9a0a609e023cc2a4d10228"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/安全服务/index.html","c5291937841397896326de35dd0bbe6b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/安卓/index.html","ccb799de220a3fa8bd0ed54340fbae71"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/等级保护/index.html","57eaee988dd6dfd49ae8c2eeab2bd267"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/background.css","e30d486dd86ed06e40b96b9f68c6caf9"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/index.css","2f8c24ce68f6a25d63dcc3579efb2a3a"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/avatar.gif","65fc9be83818b61d18eafb6615b51642"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/index.html","62ae09142f7c8490e5785549997c3d89"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/crash_cheat.js","1b661b8a2bb0a28ce4d9db81b2c3ae03"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/link/index.html","9a4fb41f7bad57229ab617650e399cc2"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/page/2/index.html","5e63a96dc53207d2da78b0875d9ad343"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/CTF/index.html","70fced52c3b2aa0fc65cd2facd9695e0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/GB/index.html","c888c0d0a191a5403a72a26f1ea56c1f"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/PE/index.html","e407385b9d3d2b796d4cc1167043955f"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/basic/index.html","187ca496a2dee352cad21cd080516af0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/index.html","016d4a535efb79d9a49c5bca7556ae37"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/programme-analysis/index.html","f65efed6de2ff40810603607387c0045"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/virus-analysis/index.html","bab7d1fcbffb4ad212d58e631c5f536d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/基础/index.html","a7d6e94d8412756f20642812b8590d94"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全加固/index.html","dc5e6a184f7bc37280255b29a0fdc4f3"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全设备/index.html","8d166542764a0b1987db802966850e39"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全运维/index.html","3405194faf0b2c609c2514c6b6706cb2"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/渗透/index.html","e087e749c3f0390c91f5370d977d0cfa"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/调试/index.html","937c59d0e7db2234cfc523f9dd2fb84e"]];
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







