import{S as Z,i as x,s as ee,k as b,a as k,q,l as E,m as I,h as v,c as C,r as F,n as _,D as ce,b as H,E as f,I as se,M as fe,u as K,J as Q,g as T,v as ae,d as P,f as ne,C as ve,F as ge,G as pe,H as be,O as Ee,P as Ue,Q as Ne,R as ye,K as Be,w as me,T as _e,y as X,z as j,A as W,U as de,B as Y,e as $e,N as Oe}from"../chunks/index.464477ab.js";import{t as ue,g as Pe,E as qe}from"../chunks/ErrorBox.450e1b91.js";function Ie(n){let e,s=n[0].description+"",t;return{c(){e=b("div"),t=q(s),this.h()},l(l){e=E(l,"DIV",{class:!0});var r=I(e);t=F(r,s),r.forEach(v),this.h()},h(){_(e,"class","image-description svelte-25w0vb")},m(l,r){H(l,e,r),f(e,t)},p(l,r){r&1&&s!==(s=l[0].description+"")&&K(t,s)},d(l){l&&v(e)}}}function Fe(n){let e,s,t,l,r=n[0].title+"",a,o,c,m,h,p,i,u,g,d,w,A,$,D,V,z=n[0].views+"",M,J,S,N,y,L=ue(n[0].createdAt)+"",G,R,le,U=n[0].description&&Ie(n);return{c(){e=b("div"),s=b("h1"),t=b("i"),l=k(),a=q(r),o=k(),c=b("button"),m=b("i"),h=q(`\r
			Delete`),i=k(),u=b("img"),d=k(),U&&U.c(),w=k(),A=b("div"),$=b("p"),D=b("i"),V=k(),M=q(z),J=k(),S=b("p"),N=b("i"),y=k(),G=q(L),this.h()},l(B){e=E(B,"DIV",{class:!0});var O=I(e);s=E(O,"H1",{class:!0});var te=I(s);t=E(te,"I",{class:!0}),I(t).forEach(v),l=C(te),a=F(te,r),o=C(te),c=E(te,"BUTTON",{class:!0,name:!0});var he=I(c);m=E(he,"I",{class:!0}),I(m).forEach(v),h=F(he,`\r
			Delete`),he.forEach(v),te.forEach(v),i=C(O),u=E(O,"IMG",{class:!0,src:!0,alt:!0}),d=C(O),U&&U.l(O),w=C(O),A=E(O,"DIV",{class:!0});var re=I(A);$=E(re,"P",{});var oe=I($);D=E(oe,"I",{class:!0}),I(D).forEach(v),V=C(oe),M=F(oe,z),oe.forEach(v),J=C(re),S=E(re,"P",{});var ie=I(S);N=E(ie,"I",{class:!0}),I(N).forEach(v),y=C(ie),G=F(ie,L),ie.forEach(v),re.forEach(v),O.forEach(v),this.h()},h(){_(t,"class","fa-solid fa-image"),_(m,"class","fa-solid fa-xmark"),_(c,"class","image-delete svelte-25w0vb"),_(c,"name",p=n[0].uniqueId),_(s,"class","image-title general-header svelte-25w0vb"),_(u,"class","image-content svelte-25w0vb"),ce(u.src,g="http://localhost:4200/uploads/"+n[0].filename)||_(u,"src",g),_(u,"alt",""),_(D,"class","fa-solid fa-eye"),_(N,"class","fa-regular fa-clock"),_(A,"class","image-stats svelte-25w0vb"),_(e,"class","image-container svelte-25w0vb")},m(B,O){H(B,e,O),f(e,s),f(s,t),f(s,l),f(s,a),f(s,o),f(s,c),f(c,m),f(c,h),f(e,i),f(e,u),f(e,d),U&&U.m(e,null),f(e,w),f(e,A),f(A,$),f($,D),f($,V),f($,M),f(A,J),f(A,S),f(S,N),f(S,y),f(S,G),R||(le=se(c,"click",fe(n[1])),R=!0)},p(B,[O]){O&1&&r!==(r=B[0].title+"")&&K(a,r),O&1&&p!==(p=B[0].uniqueId)&&_(c,"name",p),O&1&&!ce(u.src,g="http://localhost:4200/uploads/"+B[0].filename)&&_(u,"src",g),B[0].description?U?U.p(B,O):(U=Ie(B),U.c(),U.m(e,w)):U&&(U.d(1),U=null),O&1&&z!==(z=B[0].views+"")&&K(M,z),O&1&&L!==(L=ue(B[0].createdAt)+"")&&K(G,L)},i:Q,o:Q,d(B){B&&v(e),U&&U.d(),R=!1,le()}}}function ze(n,e,s){let{image:t}=e,{alert:l}=e;const r=()=>s(2,l=!0);return n.$$set=a=>{"image"in a&&s(0,t=a.image),"alert"in a&&s(2,l=a.alert)},[t,r,l]}class Se extends Z{constructor(e){super(),x(this,e,ze,Fe,ee,{image:0,alert:2})}}function we(n){let e;const s=n[3].default,t=ve(s,n,n[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&4)&&ge(t,s,l,l[2],e?be(s,l[2],r,null):pe(l[2]),null)},i(l){e||(T(t,l),e=!0)},o(l){P(t,l),e=!1},d(l){t&&t.d(l)}}}function He(n){let e,s,t,l,r,a,o,c,m,h,p,i,u=n[0]&&we(n);return{c(){e=b("div"),s=b("div"),t=b("h2"),l=b("i"),r=q(` \r
			Comment`),a=k(),o=b("button"),c=b("i"),m=k(),u&&u.c(),this.h()},l(g){e=E(g,"DIV",{class:!0});var d=I(e);s=E(d,"DIV",{class:!0});var w=I(s);t=E(w,"H2",{class:!0});var A=I(t);l=E(A,"I",{class:!0}),I(l).forEach(v),r=F(A,` \r
			Comment`),A.forEach(v),a=C(w),o=E(w,"BUTTON",{class:!0});var $=I(o);c=E($,"I",{class:!0}),I(c).forEach(v),$.forEach(v),w.forEach(v),m=C(d),u&&u.l(d),d.forEach(v),this.h()},h(){_(l,"class","fa-solid fa-comment"),_(t,"class","image-comment-title svelte-126mx63"),_(c,"class","fa-solid fa-angle-down"),_(o,"class","image-comment-show svelte-126mx63"),_(s,"class","image-comment svelte-126mx63"),_(e,"class","image-post svelte-126mx63")},m(g,d){H(g,e,d),f(e,s),f(s,t),f(t,l),f(t,r),f(s,a),f(s,o),f(o,c),f(e,m),u&&u.m(e,null),h=!0,p||(i=se(o,"click",n[1]),p=!0)},p(g,[d]){g[0]?u?(u.p(g,d),d&1&&T(u,1)):(u=we(g),u.c(),T(u,1),u.m(e,null)):u&&(ae(),P(u,1,1,()=>{u=null}),ne())},i(g){h||(T(u),h=!0)},o(g){P(u),h=!1},d(g){g&&v(e),u&&u.d(),p=!1,i()}}}function Me(n,e,s){let{$$slots:t={},$$scope:l}=e,r=!1;const a=()=>s(0,r=!r);return n.$$set=o=>{"$$scope"in o&&s(2,l=o.$$scope)},[r,a,l,t]}class Ge extends Z{constructor(e){super(),x(this,e,Me,He,ee,{})}}function ke(n){let e,s;const t=n[2].default,l=ve(t,n,n[1],null);return{c(){e=b("div"),l&&l.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=I(e);l&&l.l(a),a.forEach(v),this.h()},h(){_(e,"class","image-comments-list svelte-1s3baub")},m(r,a){H(r,e,a),l&&l.m(e,null),s=!0},p(r,a){l&&l.p&&(!s||a&2)&&ge(l,t,r,r[1],s?be(t,r[1],a,null):pe(r[1]),null)},i(r){s||(T(l,r),s=!0)},o(r){P(l,r),s=!1},d(r){r&&v(e),l&&l.d(r)}}}function Re(n){let e,s,t,l,r,a,o,c,m,h=n[0]>0&&ke(n);return{c(){e=b("div"),s=b("div"),t=b("h2"),l=b("i"),r=k(),a=q(n[0]),o=q(" comments"),c=k(),h&&h.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var i=I(e);s=E(i,"DIV",{class:!0});var u=I(s);t=E(u,"H2",{});var g=I(t);l=E(g,"I",{class:!0}),I(l).forEach(v),r=C(g),a=F(g,n[0]),o=F(g," comments"),g.forEach(v),u.forEach(v),c=C(i),h&&h.l(i),i.forEach(v),this.h()},h(){_(l,"class","fa-solid fa-comments"),_(s,"class","image-comments-header svelte-1s3baub"),_(e,"class","image-comments svelte-1s3baub")},m(p,i){H(p,e,i),f(e,s),f(s,t),f(t,l),f(t,r),f(t,a),f(t,o),f(e,c),h&&h.m(e,null),m=!0},p(p,[i]){(!m||i&1)&&K(a,p[0]),p[0]>0?h?(h.p(p,i),i&1&&T(h,1)):(h=ke(p),h.c(),T(h,1),h.m(e,null)):h&&(ae(),P(h,1,1,()=>{h=null}),ne())},i(p){m||(T(h),m=!0)},o(p){P(h),m=!1},d(p){p&&v(e),h&&h.d()}}}function Je(n,e,s){let{$$slots:t={},$$scope:l}=e,{comments:r}=e;return n.$$set=a=>{"comments"in a&&s(0,r=a.comments),"$$scope"in a&&s(1,l=a.$$scope)},[r,l,t]}class Ke extends Z{constructor(e){super(),x(this,e,Je,Re,ee,{comments:0})}}function Le(n){let e,s,t,l,r,a,o,c,m=n[0].name+"",h,p,i,u,g,d=n[0].email+"",w,A,$,D=n[0].comment+"",V,z,M,J=ue(n[0].createdAt)+"",S;return{c(){e=b("div"),s=b("div"),t=b("img"),a=k(),o=b("div"),c=b("div"),h=q(m),p=k(),i=b("sup"),u=q("."),g=k(),w=q(d),A=k(),$=b("div"),V=q(D),z=k(),M=b("div"),S=q(J),this.h()},l(N){e=E(N,"DIV",{class:!0});var y=I(e);s=E(y,"DIV",{class:!0});var L=I(s);t=E(L,"IMG",{src:!0,alt:!0}),L.forEach(v),a=C(y),o=E(y,"DIV",{class:!0});var G=I(o);c=E(G,"DIV",{class:!0});var R=I(c);h=F(R,m),p=C(R),i=E(R,"SUP",{});var le=I(i);u=F(le,"."),le.forEach(v),g=C(R),w=F(R,d),R.forEach(v),A=C(G),$=E(G,"DIV",{});var U=I($);V=F(U,D),U.forEach(v),z=C(G),M=E(G,"DIV",{class:!0});var B=I(M);S=F(B,J),B.forEach(v),G.forEach(v),y.forEach(v),this.h()},h(){ce(t.src,l="http://gravatar.com/avatar/"+n[0].gravatar+"?d=monsterid&s=45")||_(t,"src",l),_(t,"alt",r=n[0].name),_(s,"class","comment-container-avatar svelte-2suzrv"),_(c,"class","comment-name svelte-2suzrv"),_(M,"class","comment-createdat svelte-2suzrv"),_(o,"class","comment-content svelte-2suzrv"),_(e,"class","comment-container-content svelte-2suzrv")},m(N,y){H(N,e,y),f(e,s),f(s,t),f(e,a),f(e,o),f(o,c),f(c,h),f(c,p),f(c,i),f(i,u),f(c,g),f(c,w),f(o,A),f(o,$),f($,V),f(o,z),f(o,M),f(M,S)},p(N,[y]){y&1&&!ce(t.src,l="http://gravatar.com/avatar/"+N[0].gravatar+"?d=monsterid&s=45")&&_(t,"src",l),y&1&&r!==(r=N[0].name)&&_(t,"alt",r),y&1&&m!==(m=N[0].name+"")&&K(h,m),y&1&&d!==(d=N[0].email+"")&&K(w,d),y&1&&D!==(D=N[0].comment+"")&&K(V,D),y&1&&J!==(J=ue(N[0].createdAt)+"")&&K(S,J)},i:Q,o:Q,d(N){N&&v(e)}}}function Qe(n,e,s){let{comment:t}=e;return n.$$set=l=>{"comment"in l&&s(0,t=l.comment)},[t]}class Xe extends Z{constructor(e){super(),x(this,e,Qe,Le,ee,{comment:0})}}function je(n){const e=n-1;return e*e*e+1}function Ce(n,{delay:e=0,duration:s=400,easing:t=je,x:l=0,y:r=0,opacity:a=0}={}){const o=getComputedStyle(n),c=+o.opacity,m=o.transform==="none"?"":o.transform,h=c*(1-a),[p,i]=Ee(l),[u,g]=Ee(r);return{delay:e,duration:s,easing:t,css:(d,w)=>`
			transform: ${m} translate(${(1-d)*p}${i}, ${(1-d)*u}${g});
			opacity: ${c-h*w}`}}function De(n){let e;const s=n[7].default,t=ve(s,n,n[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&64)&&ge(t,s,l,l[6],e?be(s,l[6],r,null):pe(l[6]),null)},i(l){e||(T(t,l),e=!0)},o(l){P(t,l),e=!1},d(l){t&&t.d(l)}}}function We(n){let e,s,t,l,r,a,o,c,m,h,p,i,u,g,d,w,A,$=n[1]&&De(n);return{c(){e=b("form"),$&&$.c(),s=k(),t=b("input"),l=k(),r=b("input"),a=k(),o=b("textarea"),c=k(),m=b("button"),h=b("i"),p=q(`\r
		Post`),this.h()},l(D){e=E(D,"FORM",{class:!0,action:!0,method:!0});var V=I(e);$&&$.l(V),s=C(V),t=E(V,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),l=C(V),r=E(V,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),a=C(V),o=E(V,"TEXTAREA",{class:!0,name:!0,rows:!0,placeholder:!0}),I(o).forEach(v),c=C(V),m=E(V,"BUTTON",{class:!0});var z=I(m);h=E(z,"I",{class:!0}),I(h).forEach(v),p=F(z,`\r
		Post`),z.forEach(v),V.forEach(v),this.h()},h(){_(t,"class","comment-input svelte-15ht31p"),_(t,"type","text"),_(t,"name","name"),_(t,"placeholder","Name"),_(r,"class","comment-input svelte-15ht31p"),_(r,"type","email"),_(r,"name","email"),_(r,"placeholder","Email"),_(o,"class","comment-input svelte-15ht31p"),_(o,"name","comment"),_(o,"rows","2"),_(o,"placeholder","Comment"),_(h,"class","fa-solid fa-comment"),_(m,"class","comment-button svelte-15ht31p"),_(e,"class","comment-form svelte-15ht31p"),_(e,"action",i="http://localhost:4200/api/"+n[0]+"/comment"),_(e,"method","POST")},m(D,V){H(D,e,V),$&&$.m(e,null),f(e,s),f(e,t),f(e,l),f(e,r),f(e,a),f(e,o),f(e,c),f(e,m),f(m,h),f(m,p),d=!0,w||(A=se(e,"submit",fe(n[2])),w=!0)},p(D,[V]){D[1]?$?($.p(D,V),V&2&&T($,1)):($=De(D),$.c(),T($,1),$.m(e,s)):$&&(ae(),P($,1,1,()=>{$=null}),ne()),(!d||V&1&&i!==(i="http://localhost:4200/api/"+D[0]+"/comment"))&&_(e,"action",i)},i(D){d||(T($),Ue(()=>{d&&(g&&g.end(1),u=Ne(e,Ce,{y:0,duration:200}),u.start())}),d=!0)},o(D){P($),u&&u.invalidate(),g=ye(e,Ce,{y:0,duration:200}),d=!1},d(D){D&&v(e),$&&$.d(),D&&g&&g.end(),w=!1,A()}}}function Ye(n,e,s){let{$$slots:t={},$$scope:l}=e,{id:r}=e,{see:a}=e,{errors:o}=e,{change:c}=e,{addComment:m}=e;const h=i=>s(3,o=i);async function p(){const i=new FormData(this),u=await Pe(this.action,this.method,i);if(u.gravatar!==void 0){a&&c();const d=this.children;for(const w of d)w.value="";m(u)}else c(),h(u)}return n.$$set=i=>{"id"in i&&s(0,r=i.id),"see"in i&&s(1,a=i.see),"errors"in i&&s(3,o=i.errors),"change"in i&&s(4,c=i.change),"addComment"in i&&s(5,m=i.addComment),"$$scope"in i&&s(6,l=i.$$scope)},[r,a,p,o,c,m,l,t]}class Ze extends Z{constructor(e){super(),x(this,e,Ye,We,ee,{id:0,see:1,errors:3,change:4,addComment:5})}}function xe(n){let e,s,t,l,r,a,o,c,m,h,p,i;return{c(){e=b("div"),s=b("div"),t=b("p"),l=q("Are you sure of delete this image?"),r=k(),a=b("button"),o=q("Cancel"),c=k(),m=b("button"),h=q("Accept"),this.h()},l(u){e=E(u,"DIV",{class:!0});var g=I(e);s=E(g,"DIV",{class:!0});var d=I(s);t=E(d,"P",{class:!0});var w=I(t);l=F(w,"Are you sure of delete this image?"),w.forEach(v),r=C(d),a=E(d,"BUTTON",{class:!0});var A=I(a);o=F(A,"Cancel"),A.forEach(v),c=C(d),m=E(d,"BUTTON",{class:!0});var $=I(m);h=F($,"Accept"),$.forEach(v),d.forEach(v),g.forEach(v),this.h()},h(){_(t,"class","alert-paragraph svelte-1g4o3b7"),_(a,"class","alert-button cancel svelte-1g4o3b7"),_(m,"class","alert-button accept svelte-1g4o3b7"),_(s,"class","alert-content svelte-1g4o3b7"),_(e,"class","alert-container svelte-1g4o3b7")},m(u,g){H(u,e,g),f(e,s),f(s,t),f(t,l),f(s,r),f(s,a),f(a,o),f(s,c),f(s,m),f(m,h),p||(i=[se(a,"click",fe(n[0])),se(m,"click",fe(n[1]))],p=!0)},p:Q,i:Q,o:Q,d(u){u&&v(e),p=!1,Be(i)}}}function et(n,e,s){let{id:t}=e,{alert:l}=e;const r=()=>s(2,l=!1);async function a(){const o=`http://localhost:4200/api/${t}`,c=await Pe(o,"DELETE",null);window.location.href=c.url}return n.$$set=o=>{"id"in o&&s(3,t=o.id),"alert"in o&&s(2,l=o.alert)},[r,a,l,t]}class tt extends Z{constructor(e){super(),x(this,e,et,xe,ee,{id:3,alert:2})}}function Ve(n,e,s){const t=n.slice();return t[12]=e[s],t}function Te(n){let e,s,t;function l(a){n[8](a)}let r={id:n[4].uniqueId};return n[3]!==void 0&&(r.alert=n[3]),e=new tt({props:r}),me.push(()=>_e(e,"alert",l)),{c(){X(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,o){const c={};!s&&o&8&&(s=!0,c.alert=a[3],de(()=>s=!1)),e.$set(c)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){Y(e,a)}}}function lt(n){let e,s,t;function l(a){n[10](a)}let r={hide:n[6]};return n[1]!==void 0&&(r.errors=n[1]),e=new qe({props:r}),me.push(()=>_e(e,"errors",l)),{c(){X(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,o){const c={};!s&&o&2&&(s=!0,c.errors=a[1],de(()=>s=!1)),e.$set(c)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){Y(e,a)}}}function st(n){let e,s,t;function l(a){n[11](a)}let r={id:n[4].uniqueId,see:n[2],change:n[6],addComment:n[5],$$slots:{default:[lt]},$$scope:{ctx:n}};return n[1]!==void 0&&(r.errors=n[1]),e=new Ze({props:r}),me.push(()=>_e(e,"errors",l)),{c(){X(e.$$.fragment)},l(a){j(e.$$.fragment,a)},m(a,o){W(e,a,o),t=!0},p(a,o){const c={};o&4&&(c.see=a[2]),o&32770&&(c.$$scope={dirty:o,ctx:a}),!s&&o&2&&(s=!0,c.errors=a[1],de(()=>s=!1)),e.$set(c)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){Y(e,a)}}}function Ae(n){let e,s;return e=new Xe({props:{comment:n[12]}}),{c(){X(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,l){W(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.comment=t[12]),e.$set(r)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){Y(e,t)}}}function at(n){let e,s,t=n[0],l=[];for(let a=0;a<t.length;a+=1)l[a]=Ae(Ve(n,t,a));const r=a=>P(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=$e()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=$e()},m(a,o){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(a,o);H(a,e,o),s=!0},p(a,o){if(o&1){t=a[0];let c;for(c=0;c<t.length;c+=1){const m=Ve(a,t,c);l[c]?(l[c].p(m,o),T(l[c],1)):(l[c]=Ae(m),l[c].c(),T(l[c],1),l[c].m(e.parentNode,e))}for(ae(),c=t.length;c<l.length;c+=1)r(c);ne()}},i(a){if(!s){for(let o=0;o<t.length;o+=1)T(l[o]);s=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);s=!1},d(a){Oe(l,a),a&&v(e)}}}function nt(n){let e,s,t,l,r,a,o,c,m=n[3]&&Te(n);function h(i){n[9](i)}let p={image:n[4]};return n[3]!==void 0&&(p.alert=n[3]),s=new Se({props:p}),me.push(()=>_e(s,"alert",h)),r=new Ge({props:{$$slots:{default:[st]},$$scope:{ctx:n}}}),o=new Ke({props:{comments:n[0].length,$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){m&&m.c(),e=k(),X(s.$$.fragment),l=k(),X(r.$$.fragment),a=k(),X(o.$$.fragment)},l(i){m&&m.l(i),e=C(i),j(s.$$.fragment,i),l=C(i),j(r.$$.fragment,i),a=C(i),j(o.$$.fragment,i)},m(i,u){m&&m.m(i,u),H(i,e,u),W(s,i,u),H(i,l,u),W(r,i,u),H(i,a,u),W(o,i,u),c=!0},p(i,[u]){i[3]?m?(m.p(i,u),u&8&&T(m,1)):(m=Te(i),m.c(),T(m,1),m.m(e.parentNode,e)):m&&(ae(),P(m,1,1,()=>{m=null}),ne());const g={};!t&&u&8&&(t=!0,g.alert=i[3],de(()=>t=!1)),s.$set(g);const d={};u&32774&&(d.$$scope={dirty:u,ctx:i}),r.$set(d);const w={};u&1&&(w.comments=i[0].length),u&32769&&(w.$$scope={dirty:u,ctx:i}),o.$set(w)},i(i){c||(T(m),T(s.$$.fragment,i),T(r.$$.fragment,i),T(o.$$.fragment,i),c=!0)},o(i){P(m),P(s.$$.fragment,i),P(r.$$.fragment,i),P(o.$$.fragment,i),c=!1},d(i){m&&m.d(i),i&&v(e),Y(s,i),i&&v(l),Y(r,i),i&&v(a),Y(o,i)}}}function rt(n,e,s){let{data:t}=e,{image:l,comments:r}=t,a={},o=!1,c=!1;const m=d=>s(0,r=[d,...r]),h=()=>s(2,o=!o);function p(d){c=d,s(3,c)}function i(d){c=d,s(3,c)}function u(d){a=d,s(1,a)}function g(d){a=d,s(1,a)}return n.$$set=d=>{"data"in d&&s(7,t=d.data)},[r,a,o,c,l,m,h,t,p,i,u,g]}class ct extends Z{constructor(e){super(),x(this,e,rt,nt,ee,{data:7})}}export{ct as default};