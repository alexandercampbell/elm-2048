"use strict";var precacheConfig=[["/elm-2048/index.html","903475b47b5713b53c18d32ee2665136"],["/elm-2048/static/css/main.cb8ea5b7.chunk.css","10dfd4605206a261a4841b39666c4c7e"],["/elm-2048/static/js/main.c521b082.chunk.js","642faadeee9c311ee5636bb50049014a"],["/elm-2048/static/js/runtime~main.f1632f6e.js","4448b6c45f6b83678b19d958b56f32da"],["/elm-2048/static/js/vendors~main.3ca81432.chunk.js","86fba34edc08a61c670b6c7527e6b813"],["/elm-2048/static/media/ClearSans-Bold-webfont.637ed43d.svg","637ed43d88cc8d27eb7390d16e8413ca"],["/elm-2048/static/media/ClearSans-Bold-webfont.8e557428.woff","8e55742896553de18fbed1a44baf1d79"],["/elm-2048/static/media/ClearSans-Bold-webfont.92a9c29a.eot","92a9c29a5c673efec034d61617369a37"],["/elm-2048/static/media/ClearSans-Light-webfont.43f90ca7.eot","43f90ca76c3585fc286161208be42ca4"],["/elm-2048/static/media/ClearSans-Light-webfont.930193ff.woff","930193fff909a5f270126f7b1c885268"],["/elm-2048/static/media/ClearSans-Light-webfont.f6a8d8d7.svg","f6a8d8d7f680d9eef1f499a8ebcedd87"],["/elm-2048/static/media/ClearSans-Regular-webfont.051b4462.woff","051b44622bff6697c5591a681f33eb6a"],["/elm-2048/static/media/ClearSans-Regular-webfont.06720971.svg","067209713c5d920e1b705e13bd290559"],["/elm-2048/static/media/ClearSans-Regular-webfont.207557cd.eot","207557cd41a54883b13627dcfd0240aa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});