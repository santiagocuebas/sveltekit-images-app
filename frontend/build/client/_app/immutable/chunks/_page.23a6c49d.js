import{r as o}from"./index.1de1fe79.js";import{e as l}from"./public.8bedac22.js";const n=async({fetch:r,params:{id:t}})=>{const e=await r(l.PUBLIC_DIR+`/api/gallery/${t}`).then(a=>a.json());if(e!==null)return e;throw o(307,"/")},p=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{p as _,n as l};
