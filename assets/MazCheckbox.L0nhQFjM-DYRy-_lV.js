import{S as N,k as $}from"./ShootingTypeView-Y1CJ3FOw.js";import A from"./check.C9Q_W85g-CIrqjP-q.js";import{k as E,p as o,l as I,o as b,c as x,a as s,q as D,G as c,b as K,n as u,s as t,y as M,e as P,t as y,d as T}from"./index-DekdswoP.js";import"./index-BigHXWpM.js";import"./no-bookings-found-57le8Je1.js";const q=["for","aria-checked"],F=["id","checked","disabled","name"],G={class:"m-checkbox__text"},H=E({inheritAttrs:!1,__name:"MazCheckbox",props:{style:{default:void 0},class:{default:void 0},modelValue:{default:void 0},id:{default:void 0},color:{default:"primary"},value:{type:[String,Number,Boolean],default:void 0},name:{default:"m-checkbox"},size:{default:"md"},label:{default:void 0},disabled:{type:Boolean,default:!1},error:{type:Boolean},success:{type:Boolean},warning:{type:Boolean},hint:{}},emits:["update:model-value","change","blur","focus"],setup(k,{emit:z}){const a=k,r=z,d=$({componentName:"MazCheckbox",providedId:a.id}),i=o(()=>typeof a.value!="boolean"&&Array.isArray(a.modelValue)?a.modelValue.includes(a.value):typeof a.modelValue=="boolean"?a.modelValue:!1),m=o(()=>{switch(a.size){case"xl":return"2rem";case"lg":return"1.75rem";case"sm":return"1.25rem";case"xs":return"1rem";case"mini":return"0.75rem";default:return"1.5rem"}}),g=o(()=>{switch(a.size){case"xl":return"maz-text-2xl";case"lg":return"maz-text-xl";case"sm":return"maz-text-base";case"xs":return"maz-text-sm";case"mini":return"maz-text-xs";default:return"maz-text-lg"}}),V=o(()=>a.color==="theme"?"var(--maz-color-bg)":`var(--maz-color-${a.color}-contrast)`),w=o(()=>a.color==="theme"?"var(--maz-color-bg-theme)":`var(--maz-color-${a.color})`),f=o(()=>a.error?"var(--maz-color-danger)":a.warning?"var(--maz-color-warning)":a.success?"var(--maz-color-success)":["black","transparent","theme"].includes(a.color)?"var(--maz-color-muted)":`var(--maz-color-${a.color}-alpha)`);function B(e){["Space"].includes(e.code)&&(e.preventDefault(),p(a.value??!a.modelValue))}function S(e){return typeof e=="boolean"&&(typeof a.modelValue=="boolean"||a.modelValue===void 0||a.modelValue===null)?!a.modelValue:Array.isArray(a.modelValue)&&typeof e!="boolean"?a.modelValue.includes(e)?a.modelValue.filter(l=>l!==e):[...a.modelValue,e]:[e]}function p(e){const l=S(e);r("update:model-value",l),r("change",l)}const n=I();function _(e){var l;(l=n.value)==null||l.dispatchEvent(new Event("blur")),r("blur",e)}function C(e){var l;(l=n.value)==null||l.dispatchEvent(new Event("focus")),r("focus",e)}return(e,l)=>(b(),x("label",{for:c(d),class:u(["m-checkbox m-reset-css",[{"--disabled":e.disabled,"--error":e.error,"--warning":e.warning,"--success":e.success},a.class]]),tabindex:"0",style:t([e.style,{"--checkbox-selected-color":w.value,"--checkbox-box-shadow-color":f.value}]),role:"checkbox","aria-checked":i.value,onKeydown:B,onBlur:_,onFocus:C},[s("input",D({id:c(d),ref_key:"inputRef",ref:n,checked:i.value},e.$attrs,{tabindex:"-1",disabled:e.disabled,name:e.name,type:"checkbox",onChange:l[0]||(l[0]=v=>{var h;return p(e.value??((h=v==null?void 0:v.target)==null?void 0:h.checked))})}),null,16,F),s("span",{style:t({width:m.value,height:m.value})},[K(c(A),{class:u(["check-icon",g.value]),style:t({color:V.value})},null,8,["class","style"])],4),s("div",G,[M(e.$slots,"default",{value:e.value},()=>[P(y(e.label),1)],!0),e.hint?(b(),x("span",{key:0,class:u(["m-checkbox__hint",{"--error":e.error,"--success":e.success,"--warning":e.warning}]),style:t({boxShadow:`0 0 0 0.125rem ${f.value}`})},y(e.hint),7)):T("v-if",!0)])],46,q))}}),Q=N(H,[["__scopeId","data-v-66c21eaf"]]);export{Q as default};