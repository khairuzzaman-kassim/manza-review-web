import{o as i,c as N,w as e,a as s,r as p,d as L,u as z,e as d,b as o,f as U,n as b,g as _,T as $,h as w,i as a,j as r,F as C,k as P,t as y}from"./app-dda98fda.js";import{_ as W}from"./ActionMessage-61899418.js";import{S as E,_ as H,a as S}from"./DialogModal-1bfdcb10.js";import{_ as T}from"./Checkbox-4cf8cc4a.js";import{_ as Y,a as A}from"./SecondaryButton-fef4361d.js";import{D as q}from"./DangerButton-2f00c6c2.js";import{_ as G,a as J}from"./TextInput-9e9d26b6.js";import{_ as B}from"./InputLabel-72ccd681.js";import{P as j}from"./PrimaryButton-2218db7d.js";import{S as K}from"./SectionBorder-8db42466.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},Q={class:"sm:flex sm:items-start"},R=s("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[s("svg",{class:"h-6 w-6 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),X={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Z={class:"text-lg font-medium text-gray-900"},ee={class:"mt-4 text-sm text-gray-600"},se={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},te={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(m,{emit:g}){const l=()=>{g("close")};return(c,h)=>(i(),N(Y,{show:m.show,"max-width":m.maxWidth,closeable:m.closeable,onClose:l},{default:e(()=>[s("div",O,[s("div",Q,[R,s("div",X,[s("h3",Z,[p(c.$slots,"title")]),s("div",ee,[p(c.$slots,"content")])])])]),s("div",se,[p(c.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},oe={class:"md:grid md:grid-cols-3 md:gap-6"},le={class:"mt-5 md:mt-0 md:col-span-2"},ne={class:"grid grid-cols-6 gap-6"},ae={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},ie={__name:"FormSection",emits:["submitted"],setup(m){const g=L(()=>!!z().actions);return(l,c)=>(i(),d("div",oe,[o(E,null,{title:e(()=>[p(l.$slots,"title")]),description:e(()=>[p(l.$slots,"description")]),_:3}),s("div",le,[s("form",{onSubmit:c[0]||(c[0]=U(h=>l.$emit("submitted"),["prevent"]))},[s("div",{class:b(["px-4 py-5 bg-white sm:p-6 shadow",g.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[s("div",ne,[p(l.$slots,"form")])],2),g.value?(i(),d("div",ae,[p(l.$slots,"actions")])):_("",!0)],32)])]))}},re={class:"col-span-6 sm:col-span-4"},de={key:0,class:"col-span-6"},ce={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},me={class:"flex items-center"},ue={class:"ml-2 text-sm text-gray-600"},pe={key:0},fe={class:"mt-10 sm:mt-0"},ve={class:"space-y-6"},_e={class:"break-all"},ge={class:"flex items-center ml-2"},he={key:0,class:"text-sm text-gray-400"},ke=["onClick"],ye=["onClick"],xe=s("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),be={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},$e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},we={class:"flex items-center"},Ce={class:"ml-2 text-sm text-gray-600"},Ne={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(m){const l=$({name:"",permissions:m.defaultPermissions}),c=$({permissions:[]}),h=$({}),x=w(!1),f=w(null),v=w(null),D=()=>{l.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{x.value=!0,l.reset()}})},F=u=>{c.permissions=u.abilities,f.value=u},I=()=>{c.put(route("api-tokens.update",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})},V=u=>{v.value=u},M=()=>{h.delete(route("api-tokens.destroy",v.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>v.value=null})};return(u,n)=>(i(),d("div",null,[o(ie,{onSubmitted:D},{title:e(()=>[a(" Create API Token ")]),description:e(()=>[a(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[s("div",re,[o(B,{for:"name",value:"Name"}),o(G,{id:"name",modelValue:r(l).name,"onUpdate:modelValue":n[0]||(n[0]=t=>r(l).name=t),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(J,{message:r(l).errors.name,class:"mt-2"},null,8,["message"])]),m.availablePermissions.length>0?(i(),d("div",de,[o(B,{for:"permissions",value:"Permissions"}),s("div",ce,[(i(!0),d(C,null,P(m.availablePermissions,t=>(i(),d("div",{key:t},[s("label",me,[o(T,{checked:r(l).permissions,"onUpdate:checked":n[1]||(n[1]=k=>r(l).permissions=k),value:t},null,8,["checked","value"]),s("span",ue,y(t),1)])]))),128))])])):_("",!0)]),actions:e(()=>[o(W,{on:r(l).recentlySuccessful,class:"mr-3"},{default:e(()=>[a(" Created. ")]),_:1},8,["on"]),o(j,{class:b({"opacity-25":r(l).processing}),disabled:r(l).processing},{default:e(()=>[a(" Create ")]),_:1},8,["class","disabled"])]),_:1}),m.tokens.length>0?(i(),d("div",pe,[o(K),s("div",fe,[o(H,null,{title:e(()=>[a(" Manage API Tokens ")]),description:e(()=>[a(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[s("div",ve,[(i(!0),d(C,null,P(m.tokens,t=>(i(),d("div",{key:t.id,class:"flex items-center justify-between"},[s("div",_e,y(t.name),1),s("div",ge,[t.last_used_ago?(i(),d("div",he," Last used "+y(t.last_used_ago),1)):_("",!0),m.availablePermissions.length>0?(i(),d("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:k=>F(t)}," Permissions ",8,ke)):_("",!0),s("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:k=>V(t)}," Delete ",8,ye)])]))),128))])]),_:1})])])):_("",!0),o(S,{show:x.value,onClose:n[3]||(n[3]=t=>x.value=!1)},{title:e(()=>[a(" API Token ")]),content:e(()=>[xe,u.$page.props.jetstream.flash.token?(i(),d("div",be,y(u.$page.props.jetstream.flash.token),1)):_("",!0)]),footer:e(()=>[o(A,{onClick:n[2]||(n[2]=t=>x.value=!1)},{default:e(()=>[a(" Close ")]),_:1})]),_:1},8,["show"]),o(S,{show:f.value!=null,onClose:n[6]||(n[6]=t=>f.value=null)},{title:e(()=>[a(" API Token Permissions ")]),content:e(()=>[s("div",$e,[(i(!0),d(C,null,P(m.availablePermissions,t=>(i(),d("div",{key:t},[s("label",we,[o(T,{checked:r(c).permissions,"onUpdate:checked":n[4]||(n[4]=k=>r(c).permissions=k),value:t},null,8,["checked","value"]),s("span",Ce,y(t),1)])]))),128))])]),footer:e(()=>[o(A,{onClick:n[5]||(n[5]=t=>f.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),o(j,{class:b(["ml-3",{"opacity-25":r(c).processing}]),disabled:r(c).processing,onClick:I},{default:e(()=>[a(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(te,{show:v.value!=null,onClose:n[8]||(n[8]=t=>v.value=null)},{title:e(()=>[a(" Delete API Token ")]),content:e(()=>[a(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[o(A,{onClick:n[7]||(n[7]=t=>v.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),o(q,{class:b(["ml-3",{"opacity-25":r(h).processing}]),disabled:r(h).processing,onClick:M},{default:e(()=>[a(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ne as default};