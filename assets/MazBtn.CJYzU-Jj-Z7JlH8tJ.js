const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MazSpinner.CBjYZ4KZ-BL6x06zn.js","assets/ShootingTypeView-Y1CJ3FOw.js","assets/index-BigHXWpM.js","assets/index-DekdswoP.js","assets/index-_hbOuL01.css","assets/no-bookings-found-57le8Je1.js","assets/ShootingTypeView-KhiI70iv.css","assets/MazSpinner-DQ9_cbMH.css","assets/MazIcon.Cq1v4J3r-c9x4iEfz.js"])))=>i.map(i=>d[i]);
import{k as $,aB as S,p as o,o as t,z as a,f as h,y as i,G as d,n as l,P as u,d as r,c as E,b as j,s as C,I as m,J as y}from"./index-DekdswoP.js";import{S as O}from"./ShootingTypeView-Y1CJ3FOw.js";import"./index-BigHXWpM.js";import"./no-bookings-found-57le8Je1.js";const P={key:0,class:"m-btn-loader-container"},A=$({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},justify:{default:"center"}},setup(v){const n=v,b=m(()=>y(()=>import("./MazSpinner.CBjYZ4KZ-BL6x06zn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),c=m(()=>y(()=>import("./MazIcon.Cq1v4J3r-c9x4iEfz.js"),__vite__mapDeps([8,3,4]))),{href:g,to:z}=S(),f=o(()=>g?"a":z?"router-link":"button"),B=o(()=>n.pastel?`--${n.color}-pastel`:n.outline?`--${n.color}-outline`:`--${n.color}`),p=o(()=>(n.loading||n.disabled)&&f.value==="button"),_=o(()=>p.value?"--cursor-default":"--cursor-pointer"),k=o(()=>`--is-${n.variant}`),x=o(()=>n.loading&&n.variant==="button"),I=o(()=>f.value==="button"?n.type:void 0),s=o(()=>n.size==="xl"?"maz-text-3xl":n.size==="lg"?"maz-text-2xl":n.size==="md"?"maz-text-xl":n.size==="sm"?"maz-text-lg":n.size==="xs"?"maz-text-base":n.size==="mini"?"maz-text-sm":"maz-text-xl");return(e,R)=>(t(),a(u(f.value),{disabled:p.value||void 0,class:l(["m-btn m-reset-css",[`--${e.size}`,!e.fab&&!e.rounded&&e.roundedSize&&`--rounded-${e.roundedSize}`,B.value,_.value,k.value,{"--block":e.block,"--no-underline":e.noUnderline,"--fab":e.fab,"--loading":e.loading,"--disabled":p.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]]),style:C([`--justify: ${e.justify}`]),type:I.value},{default:h(()=>[i(e.$slots,"left-icon",{},()=>[typeof e.leftIcon=="string"?(t(),a(d(c),{key:0,name:e.leftIcon,class:l([s.value])},null,8,["name","class"])):e.leftIcon?(t(),a(u(e.leftIcon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),i(e.$slots,"icon",{},()=>[typeof e.icon=="string"?(t(),a(d(c),{key:0,name:e.icon,class:l([s.value])},null,8,["name","class"])):e.icon?(t(),a(u(e.icon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),i(e.$slots,"default",{},void 0,!0),i(e.$slots,"right-icon",{},()=>[typeof e.rightIcon=="string"?(t(),a(d(c),{key:0,name:e.rightIcon,class:l([s.value])},null,8,["name","class"])):e.rightIcon?(t(),a(u(e.rightIcon),{key:1,class:l([s.value])},null,8,["class"])):r("v-if",!0)],!0),x.value?(t(),E("div",P,[j(d(b),{size:"2em",color:e.color},null,8,["color"])])):r("v-if",!0)]),_:3},8,["disabled","class","style","type"]))}}),N=O(A,[["__scopeId","data-v-6b881156"]]);export{N as default};