import{d as f,u as p,c as h,r as u,o as _,a as g,w as v,b as E,e as y,f as N,g as L,h as S,i as T,j as A,k as P,N as k,l as C,m as I,n as O,p as R,q as b,s as w,t as D,v as H}from"./vendor.7971d4fc.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};B();const M=f({setup(n){document.title="\u5728\u4E0B\u5389\u98DE\u96E8\uFF0C\u9053\u53CB\u8BF7\u7559\u6B65";const r=p(),i=h(()=>r.getters.theme);return console.log(i.value),(s,e)=>{const t=u("router-view"),o=u("n-config-provider");return _(),g(o,{theme:y(i)},{default:v(()=>[E(t)]),_:1},8,["theme"])}}}),V="modulepreload",l={},$="/blog-vite/",j=function(r,i){return!i||i.length===0?r():Promise.all(i.map(s=>{if(s=`${$}${s}`,s in l)return;l[s]=!0;const e=s.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":V,e||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),e)return new Promise((m,d)=>{o.addEventListener("load",m),o.addEventListener("error",d)})})).then(()=>r())},{BASE_URL:q}={VITE_APP_TITLE:"\u5728\u4E0B\u5389\u98DE\u96E8\uFF0C\u9053\u53CB\u8BF7\u7559\u6B65",BASE_URL:"/blog-vite/",MODE:"production",DEV:!1,PROD:!0},x=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>j(()=>import("./Home.a86f6314.js"),["assets/Home.a86f6314.js","assets/Home.34ac7560.css","assets/vendor.7971d4fc.js"])}],K=N({history:L(q),routes:x});var c;(function(n){n.DARK="dark",n.LIGHT="light"})(c||(c={}));var U={state:()=>({theme:sessionStorage.getItem("N_THEME")}),mutations:{SET_THEME(n,r){n.theme=r,sessionStorage.setItem("N_THEME",r)}},getters:{theme:n=>n.theme===c.DARK?S:null}};const W=T({modules:{app:U},state:()=>({}),mutations:{},actions:{}}),F=P({components:[k,C,I,O,R,b,w,D,H]}),a=A(M);a.use(W);a.use(K);a.use(F);setTimeout(()=>{a.mount("#app")},0);
