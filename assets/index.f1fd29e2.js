var M=Object.defineProperty,S=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(r,s,t)=>s in r?M(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t,f=(r,s)=>{for(var t in s||(s={}))O.call(s,t)&&v(r,t,s[t]);if(N)for(var t of N(s))A.call(s,t)&&v(r,t,s[t]);return r},p=(r,s)=>S(r,j(s));import{j as h,r as l,R as E,a as T}from"./vendor.0edab834.js";const k=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}};k();const c=h.exports.jsx,u=h.exports.jsxs,w=h.exports.Fragment,L=({card:r,handleChoice:s,flipped:t,disabled:i})=>{const e=()=>{!i&&!t&&s(r)};return c("div",{className:"card",children:u("div",{className:t?"flipped":"",children:[c("img",{className:"front",src:r.src,alt:"card front"}),c("img",{className:"back",src:"/img/cover.png",onClick:e,alt:"card back"})]})})},C=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];function B(){const[r,s]=l.exports.useState([]),[t,i]=l.exports.useState(0),[e,n]=l.exports.useState(null),[a,m]=l.exports.useState(null),[b,g]=l.exports.useState(!1),x=()=>{const o=[...C,...C].sort(()=>Math.random()-.5).map(d=>p(f({},d),{id:Math.random()}));n(null),m(null),s(o),i(0)};l.exports.useEffect(()=>{e&&a&&(g(!0),e.src===a.src?(s(o=>o.map(d=>d.src===e.src?p(f({},d),{matched:!0}):d)),y()):setTimeout(()=>y(),1e3))},[e,a]),l.exports.useEffect(()=>{x()},[]);const F=o=>{e?m(o):n(o),console.log(o)},y=()=>{n(null),m(null),i(o=>o+1),g(!1)};return u(w,{children:[u("div",{className:"App",children:[c("h1",{children:"Magic Match"}),c("h2",{className:"creador",children:"By Brahyan Pro\xA9 - Dominican \u{1F1E9}\u{1F1F4}"}),c("button",{onClick:x,children:"New Game"}),c("div",{className:"card-grid",children:r.map(o=>c(L,{card:o,handleChoice:F,flipped:o===e||o===a||o.matched,disabled:b},o.id))}),u("p",{children:["Turns: ",t]})]}),c("p",{className:"abajo",children:"BAMM \u{1F1E9}\u{1F1F4}"})]})}E.render(c(T.StrictMode,{children:c(B,{})}),document.getElementById("root"));