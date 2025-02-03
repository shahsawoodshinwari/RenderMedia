import{_ as y,x,r as p,o as r,d as i,b as n,a as l,f,n as m,t as a,g as t,h as V,F as g,i as L,A as S,z as _,e as u,w as k,j as U}from"./index-_x6ZEf8W.js";import{u as F}from"./index-q97hEzb5.js";import{O as R}from"./OfficialLogo-CU8RSD9h.js";const C={name:"RegisterForm",data(){return{form:F("post","/register",{first_name:"",last_name:"",email:"",phone:"",gender:"",password:"",password_confirmation:"",privacy:!1}),userStore:x(),genders:[{key:"male",value:"Male"},{key:"female",value:"Female"},{key:"other",value:"Other"}]}},methods:{onSubmit(){this.form.submit().then(d=>{this.userStore.setUserData(d.data.data),this.$router.push({name:"home"})}).catch(d=>{console.log(d)})}}},I={class:"col-12"},N={key:0,class:"invalid-feedback"},M={class:"col-12"},O={key:0,class:"invalid-feedback"},B={class:"col-12"},D={key:0,class:"invalid-feedback"},E={class:"col-12"},P={key:0,class:"invalid-feedback"},z={class:"col-12"},j=["value"],A={key:0,class:"invalid-feedback"},G={class:"col-12"},T={key:0,class:"invalid-feedback"},q={class:"col-12"},H={key:0,class:"invalid-feedback"},J={class:"col-12"},K={class:"form-check"},Q={class:"col-8"},W=["disabled"],X={key:0,class:"spinner-border spinner-border-sm",role:"status"},Y={key:1},Z={key:0,class:"col-12 text-center"};function $(d,e,w,b,o,v){const c=p("RouterLink");return r(),i("form",{onSubmit:e[16]||(e[16]=U((...s)=>v.onSubmit&&v.onSubmit(...s),["prevent"])),class:"row justify-content-center g-3"},[n("div",I,[l(n("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.first_name=s),name:"first_name",onInput:e[1]||(e[1]=s=>o.form.validate("first_name")),class:m(["form-control",{"is-invalid":o.form.invalid("first_name")}]),placeholder:"First Name",autocomplete:"given-name"},null,34),[[f,o.form.first_name]]),o.form.invalid("first_name")?(r(),i("div",N,a(o.form.errors.first_name),1)):t("",!0)]),n("div",M,[l(n("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.last_name=s),name:"last_name",onInput:e[3]||(e[3]=s=>o.form.validate("last_name")),class:m(["form-control",{"is-invalid":o.form.invalid("last_name")}]),placeholder:"Last Name",autocomplete:"family-name"},null,34),[[f,o.form.last_name]]),o.form.invalid("last_name")?(r(),i("div",O,a(o.form.errors.last_name),1)):t("",!0)]),n("div",B,[l(n("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.email=s),name:"email",onInput:e[5]||(e[5]=s=>o.form.validate("email")),class:m(["form-control",{"is-invalid":o.form.invalid("email")}]),placeholder:"Email",autocomplete:"email"},null,34),[[f,o.form.email]]),o.form.invalid("email")?(r(),i("div",D,a(o.form.errors.email),1)):t("",!0)]),n("div",E,[l(n("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>o.form.phone=s),name:"phone",onInput:e[7]||(e[7]=s=>o.form.validate("phone")),class:m(["form-control",{"is-invalid":o.form.invalid("phone")}]),placeholder:"Phone No",autocomplete:"mobile"},null,34),[[f,o.form.phone]]),o.form.invalid("phone")?(r(),i("div",P,a(o.form.errors.phone),1)):t("",!0)]),n("div",z,[l(n("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.form.gender=s),name:"gender",onChange:e[9]||(e[9]=s=>o.form.validate("gender")),class:m(["form-select",{"is-invalid":o.form.invalid("gender")}])},[e[17]||(e[17]=n("option",{value:""},"Select Gender",-1)),(r(!0),i(g,null,L(o.genders,s=>(r(),i("option",{value:s.value,key:s.key},a(s.value),9,j))),128))],34),[[V,o.form.gender]]),o.form.invalid("gender")?(r(),i("div",A,a(o.form.errors.gender),1)):t("",!0)]),n("div",G,[l(n("input",{type:"password","onUpdate:modelValue":e[10]||(e[10]=s=>o.form.password=s),name:"password",onInput:e[11]||(e[11]=s=>o.form.validate("password")),class:m(["form-control",{"is-invalid":o.form.invalid("password")}]),placeholder:"Password",autocomplete:"new-password"},null,34),[[f,o.form.password]]),o.form.invalid("password")?(r(),i("div",T,a(o.form.errors.password),1)):t("",!0)]),n("div",q,[l(n("input",{type:"password","onUpdate:modelValue":e[12]||(e[12]=s=>o.form.password_confirmation=s),name:"password_confirmation",onInput:e[13]||(e[13]=s=>o.form.validate("password_confirmation")),class:m(["form-control",{"is-invalid":o.form.invalid("password_confirmation")}]),placeholder:"Password Confirmation",autocomplete:"new-password"},null,34),[[f,o.form.password_confirmation]]),o.form.invalid("password_confirmation")?(r(),i("div",H,a(o.form.errors.password_confirmation),1)):t("",!0)]),n("div",J,[n("div",K,[l(n("input",{class:m(["form-check-input",{"is-invalid":o.form.invalid("privacy")}]),name:"privacy","onUpdate:modelValue":e[14]||(e[14]=s=>o.form.privacy=s),onChange:e[15]||(e[15]=s=>o.form.validate("privacy")),type:"checkbox",value:"accepted",id:"privacy"},null,34),[[S,o.form.privacy]]),e[18]||(e[18]=n("label",{class:"form-check-label",for:"privacy"}," I accept terms & conditions ",-1))])]),n("div",Q,[n("button",{class:"btn btn-primary w-100",disabled:o.form.processing},[o.form.processing?(r(),i("div",X,e[19]||(e[19]=[n("span",{class:"visually-hidden"},"Loading...",-1)]))):(r(),i("span",Y,"SIGN UP"))],8,W)]),d.routeExists("auth.login")?(r(),i("div",Z,[e[21]||(e[21]=_(" Already a Member? ")),u(c,{to:{name:"auth.login"}},{default:k(()=>e[20]||(e[20]=[_("Login")])),_:1})])):t("",!0)],32)}const ee=y(C,[["render",$]]),oe={name:"RegisterView",components:{RegisterForm:ee,OfficialLogo:R}},se={class:"text-center mb-4"},ne={key:0,class:"text-center py-3"};function re(d,e,w,b,o,v){const c=p("OfficialLogo"),s=p("RegisterForm"),h=p("RouterLink");return r(),i(g,null,[n("div",se,[u(c),e[0]||(e[0]=n("h1",{class:"text-capitalize fw-bold"},"sign up to find work you",-1)),e[1]||(e[1]=n("p",{class:"mx-auto"}," Discover your passion and forge a meaningful career path by signing up to find work you love - where your aspriations meet opportunity. ",-1))]),u(s),d.routeExists("freelancer.become")?(r(),i("div",ne,[u(h,{to:{name:"freelancer.become"}},{default:k(()=>e[2]||(e[2]=[_(" Become a Freelancer ")])),_:1})])):t("",!0)],64)}const me=y(oe,[["render",re]]);export{me as default};
