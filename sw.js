if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,f)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let n={};const o=e=>i(e,a),r={module:{uri:a},exports:n,require:o};s[a]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(f(...e),n)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"monitoring"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.06d68ed6.js",revision:"a4dac38c4df7d5ce41ebd87f47db4bbb"},{url:"assets/ErrorNotFound.4d67397d.js",revision:"6a9d2241d48e17ec7f8329cd867f60d0"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/i18n.497743d7.js",revision:"a68ca2f468eeeb2358ebe59e1e5ef388"},{url:"assets/index.2a99c17d.js",revision:"777636a1203d914af3a1571d5a68156e"},{url:"assets/index.e9998353.css",revision:"e0a6339475a51d15f4cb19ea04aaac64"},{url:"assets/IndexPage.dc6d43a7.js",revision:"769112325f3460a056055dce82a80c04"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.4244e90e.js",revision:"2c86ff4f604fb3c34ca718eaca693663"},{url:"assets/QBtn.81216b73.js",revision:"79d8780a202bcd44cca4a5eba5c4cfc3"},{url:"assets/QList.25a90297.js",revision:"6c7963a807eae068cf4c28835febe8c9"},{url:"assets/use-router-link.9bf4137a.js",revision:"a1e103dbb555a9cebea447862b41d492"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"d4564b259913cc5a77764d771eb7a3a3"},{url:"manifest.json",revision:"a1228f07b36587d485c7d0f3893bfdf7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));