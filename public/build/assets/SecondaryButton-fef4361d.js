import{q as p,s as w,x as h,d as v,o as u,c as x,b as l,w as n,m as c,y as r,a as t,z as i,n as g,r as y,g as b,C as _,e as k}from"./app-dda98fda.js";const B={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},C=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),E=[C],N={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const s=e;p(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const d=()=>{s.closeable&&a("close")},m=o=>{o.key==="Escape"&&s.show&&d()};w(()=>document.addEventListener("keydown",m)),h(()=>{document.removeEventListener("keydown",m),document.body.style.overflow=null});const f=v(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(o,$)=>(u(),x(_,{to:"body"},[l(i,{"leave-active-class":"duration-200"},{default:n(()=>[c(t("div",B,[l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[c(t("div",{class:"fixed inset-0 transform transition-all",onClick:d},E,512),[[r,e.show]])]),_:1}),l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[c(t("div",{class:g(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",f.value])},[e.show?y(o.$slots,"default",{key:0}):b("",!0)],2),[[r,e.show]])]),_:3})],512),[[r,e.show]])]),_:3})]))}},S=["type"],V={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(e){return(a,s)=>(u(),k("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[y(a.$slots,"default")],8,S))}};export{N as _,V as a};
