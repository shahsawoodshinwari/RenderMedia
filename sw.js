if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),u={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-1ea6f077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"e7b623dfe431b0c4c3cd2a4c87d5490c"},{url:"android-chrome-192x192.png",revision:"b4f2901e7aa3f4164c0370b5387d7e59"},{url:"android-chrome-512x512.png",revision:"8fe944841c66043371f9c15f009d4cd2"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"assets/AppLayout-BSnRdBIF.js",revision:null},{url:"assets/AppLayout-CiV0uM38.css",revision:null},{url:"assets/background-icons-C3MNEZqM.svg",revision:null},{url:"assets/GuestLayout-BHyhaDvc.js",revision:null},{url:"assets/GuestLayout-CVZ783v-.css",revision:null},{url:"assets/HomeView-CjtbPusm.css",revision:null},{url:"assets/HomeView-ro_kMBgI.js",revision:null},{url:"assets/index-CSzWKpXR.js",revision:null},{url:"assets/index-DO5Hg77Y.css",revision:null},{url:"assets/index-oy32WMro.js",revision:null},{url:"assets/LoginView-B75GZJK0.js",revision:null},{url:"assets/NotFound-Byy3bI3v.js",revision:null},{url:"assets/NotFound-DAU5rl1K.css",revision:null},{url:"assets/OfficialLogo-DA9x57_3.js",revision:null},{url:"assets/RegisterView-DIohXcU1.js",revision:null},{url:"assets/Render-Media-Official-Logo-1X-XcKHW.png",revision:null},{url:"assets/Render-Media-Official-Logo-Cropped-B7AyI_AK.png",revision:null},{url:"assets/Render-Media-Official-Logo-Mini-zMD5W-SP.png",revision:null},{url:"assets/VerifyView-DF9-aY4y.css",revision:null},{url:"assets/VerifyView-ZkewNZ_R.js",revision:null},{url:"favicon-16x16.png",revision:"38acc14ca8cb437d18a46af46d274295"},{url:"favicon-32x32.png",revision:"dfe6a324b5c794327856e8af9e58119c"},{url:"index.html",revision:"ffde2485eb35adc437cde97785b722e7"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/home-screen.png",revision:"88ed1ea123daf13aa5b9dc20f218b6c7"},{url:"screenshots/login-screen.png",revision:"ae2ca74bee06e86f3bc5d846f31a0ef6"},{url:"shortcuts/home-144x144.png",revision:"fbd1b51c6c94254688453b0e8c30a296"},{url:"shortcuts/home-192x192.png",revision:"243445817a8ffd7283dd0008f5adeaf4"},{url:"shortcuts/home-36x36.png",revision:"eaa0301bf1f67fed805cea33e533a863"},{url:"shortcuts/home-48x48.png",revision:"1f54f8b3b6bce4144b5636234cbb6033"},{url:"shortcuts/home-72x72.png",revision:"2d46a625061091107fb8f5fa0093593c"},{url:"shortcuts/home-96x96.png",revision:"b9f4d5c3eefe8f6e5b24f3f99c8afdc1"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"favicon.ico",revision:"0ef3519ff91d6db3eb131fa653d2ddf3"},{url:"manifest.webmanifest",revision:"3a47596913290daa7babcafde6c2e497"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute(/^https?.*\.(html|js|css|png|jpg|svg)$/,new e.NetworkFirst({cacheName:"dynamic-content-cache",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
