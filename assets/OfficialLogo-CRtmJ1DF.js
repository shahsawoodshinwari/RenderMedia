import{_ as t,r as a,o as n,A as s,h as c,a as r}from"./index-C-IaE0sQ.js";const f="/assets/Render-Media-Official-Logo-1X-XcKHW.png",l="/assets/Render-Media-Official-Logo-Mini-zMD5W-SP.png",d="/assets/Render-Media-Official-Logo-Cropped-B7AyI_AK.png",p={name:"OfficialLogo",props:{width:{type:String,default:"200"},mini:{type:Boolean,default:!1},cropped:{type:Boolean,default:!1}},computed:{logo(){return this.mini?l:this.cropped?d:f}}},g=["src","width","height"];function h(u,_,e,m,L,o){const i=a("RouterLink");return n(),s(i,{to:{name:"home"}},{default:c(()=>[r("img",{src:o.logo,class:"img-fluid",width:e.width,height:e.width,alt:"Render Media Official Logo"},null,8,g)]),_:1})}const M=t(p,[["render",h]]);export{M as O};
