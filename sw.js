if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),u={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>u[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";importScripts("/sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/App-B5yf-Ts0.js",revision:null},{url:"assets/Guest-RyMudNUb.js",revision:null},{url:"assets/Home-n0ExSEto.js",revision:null},{url:"assets/index-BnIf6iVn.css",revision:null},{url:"assets/index-Di8k-Rm4.js",revision:null},{url:"assets/Login-qE4om8et.js",revision:null},{url:"assets/NotFound-DAU5rl1K.css",revision:null},{url:"assets/NotFound-DcZZ2hNm.js",revision:null},{url:"index.html",revision:"f299970552b6c53bcead80078f5c609f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"apple-touch-icon.png",revision:"d55dd869879d1ddf918bc09a8e5cacee"},{url:"favicon.ico",revision:"0ef3519ff91d6db3eb131fa653d2ddf3"},{url:"manifest.webmanifest",revision:"a7cc0344a05661fbf72bf4d1483a0d9b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
