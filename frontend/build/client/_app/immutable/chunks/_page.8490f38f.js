import{r}from"./index.1de1fe79.js";const l=async({fetch:e,params:{id:a}})=>{const t=await e(`http://localhost:4200/api/gallery/${a}`).then(o=>o.json());if(t!==null)return t;throw r(307,"/")},s=Object.freeze(Object.defineProperty({__proto__:null,load:l},Symbol.toStringTag,{value:"Module"}));export{s as _,l};