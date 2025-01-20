import{k as z,l as m,p,E as k,aC as x,o as L,c as T,q as C,d as H,M as $,H as q}from"./index-DekdswoP.js";function I(s,i){const o=q(s,i);if(!o)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${s.toString()}`);return o}const P=["innerHTML"],j=z({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:s=>s}},emits:["loaded","unloaded","error"],setup(s,{emit:i}){const o=s,c=i,l={},u=m(),d=m();function v(){try{return I("mazIconPath")}catch{return}}const f=p(()=>o.path??v()),g=p(()=>o.src?o.src:f.value?`${f.value}/${o.name}.svg`:`/${o.name}.svg`);k(()=>{!o.name&&!o.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});function y(e,n){const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}}function S(e){return Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{})}function h(e){const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n}function w(e){e.cloneNode(!0);const n=o.transformSource(e);return o.title&&y(n,o.title),e.innerHTML}async function E(e){l[e]||(l[e]=M(e));try{u.value=await l[e],await $(),c("loaded",d.value)}catch(n){u.value&&(u.value=void 0,c("unloaded")),delete l[e],c("error",n)}}function M(e){return new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let a=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];a?(a=o.transformSource(a),n(a)):t(new Error('Loaded file is not valid SVG"'))}catch(a){t(a)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",a=>t(a)),r.send()})}return x(()=>E(g.value)),(e,n)=>u.value?(L(),T("svg",C({key:0,ref_key:"svgElem",ref:d,class:"m-icon m-reset-css",width:"1em",height:"1em"},{...h(u.value),...S(e.$attrs)},{style:`font-size: ${s.size}`,innerHTML:w(u.value)}),null,16,P)):H("v-if",!0)}});export{j as default};
