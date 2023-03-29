import{S as x,i as K,s as L,k as m,q as Y,a as T,l as E,m as _,r as S,h as d,c as O,n as p,b as j,E as h,I as W,M as $,V as B,J as A,N as C,u as V}from"./index.464477ab.js";var u=(e=>(e[e.SECOND=1e3]="SECOND",e[e.MINUTE=6e4]="MINUTE",e[e.HOUR=36e5]="HOUR",e[e.DAY=864e5]="DAY",e[e.WEEK=6048e5]="WEEK",e[e.MONTH=24192e5]="MONTH",e[e.YEAR=31536e6]="YEAR",e))(u||{});const J=async(e,n,s)=>await fetch(e,{method:n,body:s}).then(t=>t.json());function P(){const e=new FileReader,n=this.nextElementSibling,s=this.parentElement;this.files!==null&&n!==null&&(e.readAsDataURL(this.files[0]),e.addEventListener("load",function(){const r=this.result;typeof r=="string"&&n.setAttribute("src",r)})),s!==null&&(s.style.backgroundImage="url()")}const z=e=>{const n=new Date(e),r=new Date().getTime()-n.getTime();if(r<u.MINUTE)return"just now";if(r<u.HOUR){const t=Math.trunc(r/u.MINUTE);return t>1?`${t} minutes ago`:`${t} minute ago`}else if(r<u.DAY){const t=Math.trunc(r/u.HOUR);return t>1?`${t} hours ago`:`${t} hour ago`}else if(r<u.WEEK){const t=Math.trunc(r/u.DAY);return t>1?`${t} days ago`:`${t} day ago`}else if(r<u.MONTH){const t=Math.trunc(r/u.WEEK);return t>1?`${t} weeks ago`:`${t} week ago`}else if(r<u.YEAR){const t=Math.trunc(r/u.MONTH);return t>1?`${t} months ago`:`${t} month ago`}else{const t=Math.trunc(r/u.YEAR);return t>1?`${t} years ago`:`${t} year ago`}};function R(e,n,s){const r=e.slice();return r[2]=n[s],r}function H(e){let n,s=e[1][e[2]]+"",r,t;return{c(){n=m("li"),r=Y(s),t=T()},l(a){n=E(a,"LI",{});var c=_(n);r=S(c,s),t=O(c),c.forEach(d)},m(a,c){j(a,n,c),h(n,r),h(n,t)},p(a,c){c&2&&s!==(s=a[1][a[2]]+"")&&V(r,s)},d(a){a&&d(n)}}}function q(e){let n,s,r,t,a,c,M,g,v,w,N,b=Object.keys(e[1]),o=[];for(let i=0;i<b.length;i+=1)o[i]=H(R(e,b,i));return{c(){n=m("div"),s=m("div"),r=m("p"),t=Y("The following errors have been found:"),a=T(),c=m("ul");for(let i=0;i<o.length;i+=1)o[i].c();M=T(),g=m("button"),v=m("i"),this.h()},l(i){n=E(i,"DIV",{class:!0});var f=_(n);s=E(f,"DIV",{class:!0});var l=_(s);r=E(l,"P",{});var k=_(r);t=S(k,"The following errors have been found:"),k.forEach(d),a=O(l),c=E(l,"UL",{class:!0});var I=_(c);for(let y=0;y<o.length;y+=1)o[y].l(I);I.forEach(d),l.forEach(d),M=O(f),g=E(f,"BUTTON",{class:!0});var U=_(g);v=E(U,"I",{class:!0}),_(v).forEach(d),U.forEach(d),f.forEach(d),this.h()},h(){p(c,"class","error-list svelte-1hwbcik"),p(s,"class","error-box svelte-1hwbcik"),p(v,"class","error-icon fa-solid fa-xmark svelte-1hwbcik"),p(g,"class","error-delete svelte-1hwbcik"),p(n,"class","error-container svelte-1hwbcik")},m(i,f){j(i,n,f),h(n,s),h(s,r),h(r,t),h(s,a),h(s,c);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(c,null);h(n,M),h(n,g),h(g,v),w||(N=W(g,"click",$(function(){B(e[0])&&e[0].apply(this,arguments)})),w=!0)},p(i,[f]){if(e=i,f&2){b=Object.keys(e[1]);let l;for(l=0;l<b.length;l+=1){const k=R(e,b,l);o[l]?o[l].p(k,f):(o[l]=H(k),o[l].c(),o[l].m(c,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=b.length}},i:A,o:A,d(i){i&&d(n),C(o,i),w=!1,N()}}}function D(e,n,s){let{hide:r}=n,{errors:t}=n;return e.$$set=a=>{"hide"in a&&s(0,r=a.hide),"errors"in a&&s(1,t=a.errors)},[r,t]}class G extends x{constructor(n){super(),K(this,n,D,q,L,{hide:0,errors:1})}}export{G as E,J as g,P as h,z as t};