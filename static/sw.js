importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/011c8ceb9c3ccd3622ff.js",
    "revision": "77b8d46e164586be8648ae4127447594"
  },
  {
    "url": "/_nuxt/1e2f74545ed197c137ba.js",
    "revision": "b45e6f7f7bb026b660395ae39fc1d8e6"
  },
  {
    "url": "/_nuxt/2e33d7c65423dc06df87.js",
    "revision": "8460e72941e8bc08d5a05fc8c6f72a06"
  },
  {
    "url": "/_nuxt/5c90d65e25f207855777.js",
    "revision": "4c5f72e49c7235e1ff43010c54976dd9"
  },
  {
    "url": "/_nuxt/a921421e92633538a4c0.js",
    "revision": "45d12ff0caf5843dcf84f751bfe00e85"
  },
  {
    "url": "/_nuxt/ea81e70fe7fcfc7e4211.js",
    "revision": "d3a86de07ce9152ed4aaca60ea696cef"
  }
], {
  "cacheId": "ajagad-nuxtjs-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
