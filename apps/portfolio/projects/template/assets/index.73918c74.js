import{r as g,o as u,c as a,a as i,w as f,b as c,d as p,e as d,F as m,f as y,t as h,u as l,g as b,h as x,i as A,j as S}from"./vendor.3b54c467.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&r(_)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};C();var v=(s,t)=>{const n=s.__vccOpts||s;for(const[r,e]of t)n[r]=e;return n};const H={},V=c("h2",{class:"mb-12"}," Vite - Vue 3 - Pinia - Vue Router 4 - TypeScript - CSS - ESLint - Prettier ",-1),$=p("Home"),k=p(" | "),w=p("About");function L(s,t){const n=g("router-link");return u(),a("div",null,[V,i(n,{to:"/",class:"text-orange-400"},{default:f(()=>[$]),_:1}),k,i(n,{to:"/about",class:"text-orange-800"},{default:f(()=>[w]),_:1})])}var N=v(H,[["render",L]]);const O=d({__name:"App",setup(s){return(t,n)=>{const r=g("router-view");return u(),a(m,null,[i(N),i(r)],64)}}}),P=y("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}}),B=d({__name:"Store",setup(s){const t=P();return(n,r)=>(u(),a(m,null,[c("h1",null,"Count: "+h(l(t).count),1),c("button",{class:"px-6 py-2 bg-indigo-500 font-medium text-sm hover:bg-indigo-600 text-indigo-100 rounded",onClick:r[0]||(r[0]=e=>l(t).increment())}," Increment "),c("div",null,h(l(t)),1)],64))}});const E=c("h3",null,"Home",-1),F=d({__name:"Home",setup(s){return(t,n)=>(u(),a(m,null,[E,i(B)],64))}}),I={};function R(s,t){return u(),a("h3",null,"About")}var T=v(I,[["render",R]]);const j=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:T}],q=b({history:x(),routes:j});A(O).use(q).use(S()).mount("#app");