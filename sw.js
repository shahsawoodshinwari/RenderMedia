if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const u=s=>i(s,o),a={module:{uri:o},exports:l,require:u};e[o]=Promise.all(n.map((s=>a[s]||u(s)))).then((s=>(r(...s),l)))}}define(["./workbox-1ea6f077"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-144x144.png",revision:"e7b623dfe431b0c4c3cd2a4c87d5490c"},{url:"android-chrome-192x192.png",revision:"b4f2901e7aa3f4164c0370b5387d7e59"},{url:"android-chrome-512x512.png",revision:"8fe944841c66043371f9c15f009d4cd2"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"assets/AppLayout--CQGk9lZ.js",revision:null},{url:"assets/AppLayout-CiV0uM38.css",revision:null},{url:"assets/background-icons-C3MNEZqM.svg",revision:null},{url:"assets/BookingList-BONWV-fG.js",revision:null},{url:"assets/BookingList-CyMRkki5.css",revision:null},{url:"assets/Filming-Location-Background-Dz1fLR32.png",revision:null},{url:"assets/GuestLayout-CVZ783v-.css",revision:null},{url:"assets/GuestLayout-DvsoV0jr.js",revision:null},{url:"assets/HomeView-CcpbOsS5.css",revision:null},{url:"assets/HomeView-KXcpeVhu.js",revision:null},{url:"assets/index-Ch9gveX5.js",revision:null},{url:"assets/index-COt3QmvA.css",revision:null},{url:"assets/index-DRT0zegg.js",revision:null},{url:"assets/LoginView-BQnkFBCp.js",revision:null},{url:"assets/MazBadge-CIY0hr5U.css",revision:null},{url:"assets/MazBadge.AdlIDWRs-CvGWm5VS.js",revision:null},{url:"assets/MazSpinner-DQ9_cbMH.css",revision:null},{url:"assets/MazSpinner.Dl1PcqAK-CUbLgKG_.js",revision:null},{url:"assets/no-bookings-found-57le8Je1.js",revision:null},{url:"assets/no-bookings-found-BluZXIsf.png",revision:null},{url:"assets/no-photography.BJX8HSus-CQMntAsz.js",revision:null},{url:"assets/NotFound-DAU5rl1K.css",revision:null},{url:"assets/NotFound-DF59f1LG.js",revision:null},{url:"assets/OfficialLogo-DKGTMOfV.js",revision:null},{url:"assets/RegisterView-CxfDZY-1.js",revision:null},{url:"assets/Render-Media-Official-Logo-1X-XcKHW.png",revision:null},{url:"assets/Render-Media-Official-Logo-Cropped-B7AyI_AK.png",revision:null},{url:"assets/Render-Media-Official-Logo-Mini-zMD5W-SP.png",revision:null},{url:"assets/SettingsView-DZvGXinV.js",revision:null},{url:"assets/SettingsView-Mt0jjOer.css",revision:null},{url:"assets/VerifyView-29UgwpwR.js",revision:null},{url:"assets/VerifyView-DF9-aY4y.css",revision:null},{url:"favicon-16x16.png",revision:"38acc14ca8cb437d18a46af46d274295"},{url:"favicon-32x32.png",revision:"dfe6a324b5c794327856e8af9e58119c"},{url:"index.html",revision:"4755738f811b6acfed0d8b478f73d40b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"screenshots/home-screen.png",revision:"88ed1ea123daf13aa5b9dc20f218b6c7"},{url:"screenshots/login-screen.png",revision:"ae2ca74bee06e86f3bc5d846f31a0ef6"},{url:"shortcuts/bookings/192x192.png",revision:"d359ccf2148c3293cfa9daf2b7ca8aab"},{url:"shortcuts/bookings/256x256.png",revision:"2612e4627e5a7f7780eb2fc25389553f"},{url:"shortcuts/bookings/512x512.png",revision:"1391aa2408bf955013b701fc0451cc9e"},{url:"shortcuts/bookings/512x512.svg",revision:"64b4e3b9695b43ab85fe2173884b0a76"},{url:"shortcuts/home/192x192.png",revision:"f7650be41d86b5d742a229f6576e2190"},{url:"shortcuts/home/256x256.png",revision:"be69a3331f8887e7f3dd0fc0d17678cf"},{url:"shortcuts/home/512x512.png",revision:"4bd64900b21884d843e681da6fc36f75"},{url:"shortcuts/home/512x512.svg",revision:"6db896caa39dca66914ae8feede54d83"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"favicon.ico",revision:"0ef3519ff91d6db3eb131fa653d2ddf3"},{url:"robots.txt",revision:"076ca7d51c63095db8e4ddb474c25986"},{url:"manifest.webmanifest",revision:"3a47596913290daa7babcafde6c2e497"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html"))),s.registerRoute(/^https?.*\.(html|js|css|png|jpg|svg)$/,new s.NetworkFirst({cacheName:"dynamic-content-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
