import{d as l,o as a,c as u,a as d,F as _,b as c,r as m,e as f,t as h,u as p,f as g,g as y,h as v,i as b}from"./vendor.0581f081.js";const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};x();const A=c("h1",null,"lala",-1),C=c("h2",null,"lala",-1),H=c("h3",null,"lala",-1),L=c("h4",null,"lala",-1),N=l({__name:"App",setup(r){return(t,s)=>{const o=m("router-view");return a(),u(_,null,[A,C,H,L,d(o)],64)}}}),O=f("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}}),$=l({__name:"Counter",setup(r){const t=O();return(s,o)=>(a(),u(_,null,[c("h1",null,"Count: "+h(p(t).count),1),c("button",{class:"px-6 py-2 bg-indigo-500 font-medium text-sm hover:bg-indigo-600 text-indigo-100 rounded",onClick:o[0]||(o[0]=e=>p(t).increment())}," Increment ")],64))}});const k=c("h3",null,"Home",-1),w=l({__name:"Home",setup(r){return(t,s)=>(a(),u(_,null,[k,d($)],64))}});var S=(r,t)=>{const s=r.__vccOpts||r;for(const[o,e]of t)s[o]=e;return s};const B={};function F(r,t){return a(),u("h3",null,"About")}var P=S(B,[["render",F]]);const V=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:P}],E=g({history:y(),routes:V});v(N).use(E).use(b()).mount("#app");
