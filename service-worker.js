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

var precacheConfig = [["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/15/pwn/index.html","10bfef976ee8a3858c6ffeee5d07a1db"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/20/web学习笔记/index.html","5f6376b454e6651d3e0f85888a570bec"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/27/计算机基础/index.html","bb5f2d7d473a6dc88bf7853bec1df44b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/07/27/逆向基础知识/index.html","647108a4c75b88d78c0978c2d2ad109d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/09/11/SMC介绍/index.html","43b9605db7b3cce2106b564118743bdd"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/09/11/卢本伟病毒样本分析/index.html","91f9b3da164ff04eba7dc6cd6c62baff"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/19/安卓逆向常用命令/index.html","a44d6d9bbe1840a34e756e7dc4f75e19"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/22/安全设备理论/index.html","0c3172ff45f3501f1de88ea2b55fff06"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/23/OWASP TOP10/index.html","e6fade7018a3df413ba495eb8e83ff8b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/11/23/等级保护/index.html","14019ac1ce252588f4943aa89c6876a0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全值守服务and日志分析/index.html","28c62a8b8c963b0de74bd652cb1837e5"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全加固/index.html","2a7281669072f79439a446c2d947a44d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/04/安全运维/index.html","fe52c01fa07965366de5c80ab24294b3"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2020/12/22/PWN基础和技巧/index.html","5abaaee28030b0b0efa71033ced8273b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2021/09/11/vx/index.html","1b4ea4b806e9025dc063661575151376"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2021/09/11/vx_notebook/vx_notebook/index.html","4a1d56ea37f1f0dbe0b735ff384c0c83"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/2021/09/11/vx_recycle_bin/vx/index.html","5874b8e9f4fbf8af1a048ab16a1cf4c4"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/404.html","41d46236b2739cd8469d5b28519c42a2"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/about/index.html","44d50977b33c738d2b69a90a6f6df21d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/07/index.html","263fad19eef4449e4c81d5b74a34d67e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/09/index.html","12d8c1fafb553781b52fa06bcb65143c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/11/index.html","b7e5232ba28acabd97d6cfc76abe0cac"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/12/index.html","8a2029f580b553fe8fabc8828bd10adb"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/index.html","5a02824bad98766d934d4ae695ec378c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2020/page/2/index.html","37ec5233915f68195b5d52b0eebcf533"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2021/09/index.html","8fedefd6362a6c3a1b6eff14a3d75d56"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/2021/index.html","e0b7e294c806de9ac49a178c95441f90"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/index.html","97c24ec653b1267bdf79b788805618c5"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/archives/page/2/index.html","b588f474026cc0b3d18362800abaebc9"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/PE/index.html","13bb6afec8fd0a61fc4943414dff9c43"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/binary-analysis/index.html","dbf03f3065f6095771f34700a25a4200"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/computer/index.html","2047d189c2937713bb65e1eddf795d52"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/index.html","a9820748db743dd100795127403c9c67"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/pwn/index.html","d8352a6bf743403d4963a123f0480992"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/reverse/index.html","d8dfab32a9e99652998e46281dcdce90"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/web/index.html","c0d4d7c55729cd49757e5464b31440f4"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/安全服务/index.html","cbea9323b1cac831d253b93a4ebd76de"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/安卓/index.html","b69daab955cb95ae8c3aabdc148049c6"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/categories/等级保护/index.html","af4ef3756c5ffa6aded917bd1abf7935"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/background.css","e30d486dd86ed06e40b96b9f68c6caf9"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/index.css","2f8c24ce68f6a25d63dcc3579efb2a3a"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/avatar.gif","65fc9be83818b61d18eafb6615b51642"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/index.html","ebb7fad9d93d6a631f1b56a5490c6e34"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/crash_cheat.js","1b661b8a2bb0a28ce4d9db81b2c3ae03"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/link/index.html","aeab4272979b1bda24381550434b3dde"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/page/2/index.html","7979aaaba2d757d6347669f5fea3030b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/CTF/index.html","e0b48d2c317b236e9521e556a50090ee"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/GB/index.html","98e57ed0f04617bcc7e0ef6031e1d648"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/PE/index.html","8c53dd5d0ef8d3079d8e1fe052f185eb"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/basic/index.html","08736a88fead29d4ee9eb14a122b3184"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/index.html","5dab7313ae1cfca712d8b6992aae7dcf"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/programme-analysis/index.html","2d23a2d7b065f6796af1eb1d0a6f8d0b"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/virus-analysis/index.html","29f0b56bfacd6cf69e4922683e1b84e5"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/基础/index.html","4fa7b7862e11ae6f1aff66046fd10d7f"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全加固/index.html","b01eaac5416ed3633e02b9d03698e890"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全设备/index.html","59052eed478dfbf54bec6e9d006708d0"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/安全运维/index.html","d30e708cd10e8ee49a0ea64a65cc1df8"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/渗透/index.html","60e9347c6f7be5c0819b771431b28b95"],["C:/Users/Administrator/Desktop/z3lce.github.io/public/tags/调试/index.html","f3a4a0640ffe3a043c2376beffb6d1ec"]];
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







