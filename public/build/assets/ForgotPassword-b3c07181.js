import{T as u,o as r,c as d,w as i,b as t,j as s,Z as c,e as f,t as p,g as _,a,i as w,n as g,f as y}from"./app-dda98fda.js";import{_ as b}from"./GuestLayout-65be640d.js";import{_ as x,a as k}from"./TextInput-9e9d26b6.js";import{_ as h}from"./InputLabel-72ccd681.js";import{P as V}from"./PrimaryButton-2218db7d.js";import"./ApplicationLogo-ea873be3.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],P={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(S,l)=>(r(),d(b,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(r(),f("div",B,p(o.status),1)):_("",!0),a("form",{onSubmit:y(m,["prevent"])},[a("div",null,[t(h,{for:"email",value:"Email"}),t(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",P,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{z as default};