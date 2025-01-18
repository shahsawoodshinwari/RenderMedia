import{_ as g,aj as m,o as s,c as n,F as i,i as d,a as e,n as u,t as y,ak as f,b as _,r as v}from"./index-CSzWKpXR.js";const k={title:"Explore Videography Tools - Edit, Record, Create",meta:[{name:"description",content:"Unlock the power of videography with our tools for editing, recording, and creative storytelling. Perfect for professionals and enthusiasts alike."},{name:"keywords",content:"videography, video editing, recording, storytelling, creative tools"},{property:"og:title",content:"Explore Videography Tools - Edit, Record, Create"},{property:"og:description",content:"Unlock the power of videography with our tools for editing, recording, and creative storytelling. Perfect for professionals and enthusiasts alike."},{property:"og:image",content:"/screenshots/home-screen.png"},{property:"og:url",content:"https://your-videography-app.com"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Explore Videography Tools - Edit, Record, Create"},{name:"twitter:description",content:"Unlock the power of videography with our tools for editing, recording, and creative storytelling. Perfect for professionals and enthusiasts alike."},{name:"twitter:image",content:"/screenshots/home-screen.png"}],link:[{rel:"canonical",href:"/"}]},w={name:"CategoryIndex",data(){return{categories:[],isLoading:!0}},mounted(){this.fetchCategories()},methods:{isFullSize(t){return t===this.categories.length-1&&this.categories.length%2!==0},async fetchCategories(){try{const t=await m.get("/categories");this.categories=t.data.data,this.isLoading=!1}catch(t){console.error("Error fetching categories:",t)}}}},x={class:"row g-3 justify-content-center"},C=["src","alt"],E={class:"text-center text-truncated"};function L(t,r,p,h,a,c){return s(),n("div",x,[a.isLoading?(s(),n(i,{key:0},d(4,o=>e("div",{key:"skeleton-"+o,class:"col-6"},r[0]||(r[0]=[e("div",{class:"placeholder-glow text-center"},[e("div",{class:"placeholder col-12 rounded-4 mb-2",style:{height:"150px"}}),e("div",{class:"placeholder py-2 w-75 mx-auto rounded"})],-1)]))),64)):(s(!0),n(i,{key:1},d(a.categories,(o,l)=>(s(),n("div",{class:u([c.isFullSize(l)?"col-12":"col-6"]),key:l},[e("img",{src:o.cover,class:"img-fluid w-100 rounded-4 mb-1",loading:"lazy",alt:o.name},null,8,C),e("div",E,y(o.name),1)],2))),128))])}const b=g(w,[["render",L],["__scopeId","data-v-ed35e498"]]),V={name:"HomeView",components:{CategoryList:b},methods:{metaData(){f(k)}}};function $(t,r,p,h,a,c){const o=v("CategoryList");return s(),n(i,null,[r[0]||(r[0]=e("div",{class:"text-center mb-3"},[e("h1",{class:"fw-medium mb-3"},"Are You Looking For ?"),e("p",{class:"mb-0"},"Are you looking for the key to unlock your next opportunity?")],-1)),_(o)],64)}const z=g(V,[["render",$]]);export{z as default};