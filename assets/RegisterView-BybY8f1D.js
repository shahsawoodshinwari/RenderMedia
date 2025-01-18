import{u as b,O as h}from"./Render-Media-Official-Logo-QwD57gFI.js";import{_,o as i,c as r,a as n,w as l,v as a,n as t,t as m,d,h as C,F as V,i as x,j as R,e as g,b as u,f as y,g as L,r as c}from"./index-C2R6CbGk.js";const F={name:"RegisterForm",data(){return{form:b("post","/register",{first_name:"",last_name:"",email:"",phone:"",gender:"",password:"",password_confirmation:"",privacy:!1}),genders:[{key:"male",value:"Male"},{key:"female",value:"Female"},{key:"other",value:"Other"}]}},methods:{onSubmit(){this.form.submit().then(f=>{console.log(f)}).catch(f=>{console.log(f)})}}},U={class:"col-12"},N={key:0,class:"invalid-feedback"},S={class:"col-12"},M={key:0,class:"invalid-feedback"},O={class:"col-12"},P={key:0,class:"invalid-feedback"},B={class:"col-12"},D={key:0,class:"invalid-feedback"},j={class:"col-12"},z=["value"],E={key:0,class:"invalid-feedback"},G={class:"col-12"},I={key:0,class:"invalid-feedback"},T={class:"col-12"},A={key:0,class:"invalid-feedback"},q={class:"col-12"},H={class:"form-check"},J={class:"col-8"},K=["disabled"],Q={key:0,class:"spinner-border spinner-border-sm",role:"status"},W={key:1},X={class:"col-12 text-center"};function Y(f,e,k,w,o,p){const v=c("RouterLink");return i(),r("form",{onSubmit:e[16]||(e[16]=L((...s)=>p.onSubmit&&p.onSubmit(...s),["prevent"])),class:"row justify-content-center g-3"},[n("div",U,[l(n("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.first_name=s),onChange:e[1]||(e[1]=s=>o.form.validate("first_name")),class:t(["form-control",{"is-invalid":o.form.invalid("first_name")}]),placeholder:"First Name"},null,34),[[a,o.form.first_name]]),o.form.invalid("first_name")?(i(),r("div",N,m(o.form.errors.first_name),1)):d("",!0)]),n("div",S,[l(n("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.last_name=s),onChange:e[3]||(e[3]=s=>o.form.validate("last_name")),class:t(["form-control",{"is-invalid":o.form.invalid("last_name")}]),placeholder:"Last Name"},null,34),[[a,o.form.last_name]]),o.form.invalid("last_name")?(i(),r("div",M,m(o.form.errors.last_name),1)):d("",!0)]),n("div",O,[l(n("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.email=s),onChange:e[5]||(e[5]=s=>o.form.validate("email")),class:t(["form-control",{"is-invalid":o.form.invalid("email")}]),placeholder:"Email"},null,34),[[a,o.form.email]]),o.form.invalid("email")?(i(),r("div",P,m(o.form.errors.email),1)):d("",!0)]),n("div",B,[l(n("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>o.form.phone=s),onChange:e[7]||(e[7]=s=>o.form.validate("phone")),class:t(["form-control",{"is-invalid":o.form.invalid("phone")}]),placeholder:"Phone No"},null,34),[[a,o.form.phone]]),o.form.invalid("phone")?(i(),r("div",D,m(o.form.errors.phone),1)):d("",!0)]),n("div",j,[l(n("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.form.gender=s),onChange:e[9]||(e[9]=s=>o.form.validate("gender")),class:t(["form-select",{"is-invalid":o.form.invalid("gender")}])},[e[17]||(e[17]=n("option",{value:""},"Select Gender",-1)),(i(!0),r(V,null,x(o.genders,s=>(i(),r("option",{value:s.key,key:s.key},m(s.value),9,z))),128))],34),[[C,o.form.gender]]),o.form.invalid("gender")?(i(),r("div",E,m(o.form.errors.gender),1)):d("",!0)]),n("div",G,[l(n("input",{type:"password","onUpdate:modelValue":e[10]||(e[10]=s=>o.form.password=s),onChange:e[11]||(e[11]=s=>o.form.validate("password")),class:t(["form-control",{"is-invalid":o.form.invalid("password")}]),placeholder:"Password"},null,34),[[a,o.form.password]]),o.form.invalid("password")?(i(),r("div",I,m(o.form.errors.password),1)):d("",!0)]),n("div",T,[l(n("input",{type:"password","onUpdate:modelValue":e[12]||(e[12]=s=>o.form.password_confirmation=s),onChange:e[13]||(e[13]=s=>o.form.validate("password_confirmation")),class:t(["form-control",{"is-invalid":o.form.invalid("password_confirmation")}]),placeholder:"Password Confirmation"},null,34),[[a,o.form.password_confirmation]]),o.form.invalid("password_confirmation")?(i(),r("div",A,m(o.form.errors.password_confirmation),1)):d("",!0)]),n("div",q,[n("div",H,[l(n("input",{class:t(["form-check-input",{"is-invalid":o.form.invalid("privacy")}]),"onUpdate:modelValue":e[14]||(e[14]=s=>o.form.privacy=s),onChange:e[15]||(e[15]=s=>o.form.validate("privacy")),type:"checkbox",value:"accepted",id:"privacy"},null,34),[[R,o.form.privacy]]),e[18]||(e[18]=n("label",{class:"form-check-label",for:"privacy"}," I accept terms & conditions ",-1))])]),n("div",J,[n("button",{class:"btn btn-primary w-100",disabled:o.form.processing},[o.form.processing?(i(),r("div",Q,e[19]||(e[19]=[n("span",{class:"visually-hidden"},"Loading...",-1)]))):(i(),r("span",W,"SIGN UP"))],8,K)]),n("div",X,[e[21]||(e[21]=g(" Already a Member? ")),u(v,{to:{name:"auth.login"}},{default:y(()=>e[20]||(e[20]=[g("Login")])),_:1})])],32)}const Z=_(F,[["render",Y]]),$={name:"RegisterView",components:{RegisterForm:Z},data(){return{logo:h}}},oo={class:"text-center mb-4"},eo=["src"];function so(f,e,k,w,o,p){const v=c("RouterLink"),s=c("RegisterForm");return i(),r("div",null,[n("div",oo,[u(v,{to:{name:"home"}},{default:y(()=>[n("img",{src:o.logo,class:"img-fluid",width:"200",alt:"Render Media Official Logo"},null,8,eo)]),_:1}),e[0]||(e[0]=n("h1",{class:"text-capitalize fw-bold"},"sign up to find work you",-1)),e[1]||(e[1]=n("p",{class:"mx-auto"}," Discover your passion and forge a meaningful career path by signing up to find work you love - where your aspriations meet opportunity. ",-1))]),u(s)])}const ro=_($,[["render",so]]);export{ro as default};
