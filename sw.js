if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>n(s,r),a={module:{uri:r},exports:o,require:u};e[r]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-1ea6f077"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"e7b623dfe431b0c4c3cd2a4c87d5490c"},{url:"android-chrome-192x192.png",revision:"b4f2901e7aa3f4164c0370b5387d7e59"},{url:"android-chrome-512x512.png",revision:"8fe944841c66043371f9c15f009d4cd2"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"assets/AppLayout-3z7XNHP0.js",revision:null},{url:"assets/AppLayout-CiV0uM38.css",revision:null},{url:"assets/background-icons-C3MNEZqM.svg",revision:null},{url:"assets/BookingList-BqnSup6g.js",revision:null},{url:"assets/BookingList-CyMRkki5.css",revision:null},{url:"assets/check.C9Q_W85g-CIrqjP-q.js",revision:null},{url:"assets/chevron-down.BkvtON3b-B5ApBZe6.js",revision:null},{url:"assets/eye-slash.BoO00xzs-BhhpdKhn.js",revision:null},{url:"assets/eye.f8zAUc30-DlHFnkSZ.js",revision:null},{url:"assets/GuestLayout-BEg3Q80w.js",revision:null},{url:"assets/GuestLayout-CVZ783v-.css",revision:null},{url:"assets/HomeView-B28L4DD4.css",revision:null},{url:"assets/HomeView-BoIVvjp_.js",revision:null},{url:"assets/index-_hbOuL01.css",revision:null},{url:"assets/index-BigHXWpM.js",revision:null},{url:"assets/index-DekdswoP.js",revision:null},{url:"assets/LoginView-GD1vidBZ.js",revision:null},{url:"assets/magnifying-glass.-nBiyXot-CUHgpRHa.js",revision:null},{url:"assets/MazBadge-CIY0hr5U.css",revision:null},{url:"assets/MazBadge.AdlIDWRs-C0nZc5NV.js",revision:null},{url:"assets/MazBtn-DRGAvMws.css",revision:null},{url:"assets/MazBtn.CJYzU-Jj-Z7JlH8tJ.js",revision:null},{url:"assets/MazCheckbox-CA7GJd2c.css",revision:null},{url:"assets/MazCheckbox.L0nhQFjM-DYRy-_lV.js",revision:null},{url:"assets/MazIcon.Cq1v4J3r-c9x4iEfz.js",revision:null},{url:"assets/MazSpinner-DQ9_cbMH.css",revision:null},{url:"assets/MazSpinner.CBjYZ4KZ-BL6x06zn.js",revision:null},{url:"assets/no-bookings-found-57le8Je1.js",revision:null},{url:"assets/no-bookings-found-BluZXIsf.png",revision:null},{url:"assets/no-symbol.CIgKzsrB-B1f90_ez.js",revision:null},{url:"assets/NotFound-DAU5rl1K.css",revision:null},{url:"assets/NotFound-DlsT6o2Z.js",revision:null},{url:"assets/OfficialLogo-D3FZ35jx.js",revision:null},{url:"assets/RegisterView-D5EJ_bYn.js",revision:null},{url:"assets/Render-Media-Official-Logo-1X-XcKHW.png",revision:null},{url:"assets/Render-Media-Official-Logo-Cropped-B7AyI_AK.png",revision:null},{url:"assets/Render-Media-Official-Logo-Mini-zMD5W-SP.png",revision:null},{url:"assets/ShootingTypeView-KhiI70iv.css",revision:null},{url:"assets/ShootingTypeView-Y1CJ3FOw.js",revision:null},{url:"assets/VerifyView-C9LwBiyJ.js",revision:null},{url:"assets/VerifyView-DF9-aY4y.css",revision:null},{url:"favicon-16x16.png",revision:"38acc14ca8cb437d18a46af46d274295"},{url:"favicon-32x32.png",revision:"dfe6a324b5c794327856e8af9e58119c"},{url:"index.html",revision:"fc6bef34ca88b47353adcbbd2a29f6e3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/home-screen.png",revision:"88ed1ea123daf13aa5b9dc20f218b6c7"},{url:"screenshots/login-screen.png",revision:"ae2ca74bee06e86f3bc5d846f31a0ef6"},{url:"shortcuts/home-144x144.png",revision:"fbd1b51c6c94254688453b0e8c30a296"},{url:"shortcuts/home-192x192.png",revision:"243445817a8ffd7283dd0008f5adeaf4"},{url:"shortcuts/home-36x36.png",revision:"eaa0301bf1f67fed805cea33e533a863"},{url:"shortcuts/home-48x48.png",revision:"1f54f8b3b6bce4144b5636234cbb6033"},{url:"shortcuts/home-72x72.png",revision:"2d46a625061091107fb8f5fa0093593c"},{url:"shortcuts/home-96x96.png",revision:"b9f4d5c3eefe8f6e5b24f3f99c8afdc1"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"favicon.ico",revision:"0ef3519ff91d6db3eb131fa653d2ddf3"},{url:"manifest.webmanifest",revision:"3a47596913290daa7babcafde6c2e497"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html"))),s.registerRoute(/^https?.*\.(html|js|css|png|jpg|svg)$/,new s.NetworkFirst({cacheName:"dynamic-content-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
