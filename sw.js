if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const u=s=>i(s,o),a={module:{uri:o},exports:l,require:u};e[o]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(r(...s),l)))}}define(["./workbox-1ea6f077"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"e7b623dfe431b0c4c3cd2a4c87d5490c"},{url:"android-chrome-192x192.png",revision:"b4f2901e7aa3f4164c0370b5387d7e59"},{url:"android-chrome-512x512.png",revision:"8fe944841c66043371f9c15f009d4cd2"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"assets/AppLayout-CiV0uM38.css",revision:null},{url:"assets/AppLayout-tCJ4ArWx.js",revision:null},{url:"assets/background-icons-C3MNEZqM.svg",revision:null},{url:"assets/BookingList-CyMRkki5.css",revision:null},{url:"assets/BookingList-DzylQvDu.js",revision:null},{url:"assets/FilmingLocationView-Biui7sxa.js",revision:null},{url:"assets/GuestLayout-B2qfVPtG.js",revision:null},{url:"assets/GuestLayout-CVZ783v-.css",revision:null},{url:"assets/HomeView-B28L4DD4.css",revision:null},{url:"assets/HomeView-BqEo8qeb.js",revision:null},{url:"assets/index-C-IaE0sQ.js",revision:null},{url:"assets/index-COt3QmvA.css",revision:null},{url:"assets/index-yjE1fwSx.js",revision:null},{url:"assets/LoginView-DxwNg-f5.js",revision:null},{url:"assets/MazBadge-CIY0hr5U.css",revision:null},{url:"assets/MazBadge.AdlIDWRs-CNDMpuPE.js",revision:null},{url:"assets/no-bookings-found-57le8Je1.js",revision:null},{url:"assets/no-bookings-found-BluZXIsf.png",revision:null},{url:"assets/NotFound-Cljyw1gM.js",revision:null},{url:"assets/NotFound-DAU5rl1K.css",revision:null},{url:"assets/OfficialLogo-CRtmJ1DF.js",revision:null},{url:"assets/RegisterView-DMhsNiZy.js",revision:null},{url:"assets/Render-Media-Official-Logo-1X-XcKHW.png",revision:null},{url:"assets/Render-Media-Official-Logo-Cropped-B7AyI_AK.png",revision:null},{url:"assets/Render-Media-Official-Logo-Mini-zMD5W-SP.png",revision:null},{url:"assets/ShootingTypeView-uP91s_EB.js",revision:null},{url:"assets/VerifyView-BQED2kzt.js",revision:null},{url:"assets/VerifyView-DF9-aY4y.css",revision:null},{url:"favicon-16x16.png",revision:"38acc14ca8cb437d18a46af46d274295"},{url:"favicon-32x32.png",revision:"dfe6a324b5c794327856e8af9e58119c"},{url:"index.html",revision:"3222ac6362ac869c3719befcaadf0a83"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/home-screen.png",revision:"88ed1ea123daf13aa5b9dc20f218b6c7"},{url:"screenshots/login-screen.png",revision:"ae2ca74bee06e86f3bc5d846f31a0ef6"},{url:"shortcuts/home-144x144.png",revision:"fbd1b51c6c94254688453b0e8c30a296"},{url:"shortcuts/home-192x192.png",revision:"243445817a8ffd7283dd0008f5adeaf4"},{url:"shortcuts/home-36x36.png",revision:"eaa0301bf1f67fed805cea33e533a863"},{url:"shortcuts/home-48x48.png",revision:"1f54f8b3b6bce4144b5636234cbb6033"},{url:"shortcuts/home-72x72.png",revision:"2d46a625061091107fb8f5fa0093593c"},{url:"shortcuts/home-96x96.png",revision:"b9f4d5c3eefe8f6e5b24f3f99c8afdc1"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"favicon.ico",revision:"0ef3519ff91d6db3eb131fa653d2ddf3"},{url:"robots.txt",revision:"076ca7d51c63095db8e4ddb474c25986"},{url:"manifest.webmanifest",revision:"3a47596913290daa7babcafde6c2e497"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html"))),s.registerRoute(/^https?.*\.(html|js|css|png|jpg|svg)$/,new s.NetworkFirst({cacheName:"dynamic-content-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
