import{s as F,d as K,c as Z,o as fe,r as me,n as se}from"../chunks/scheduler.Cz0ahc-E.js";import{S as L,i as Q,e as y,k as V,c as w,a as D,l as z,d as b,g as M,o as N,p as $,B as ae,q as g,r as P,s as I,f as E,n as _,h as p,v as U,z as W,x as H,D as de,m as O}from"../chunks/index.BNQYNzSj.js";import{b as he}from"../chunks/paths.DB5GFtLz.js";import{I as x,r as $e}from"../chunks/Image.BOhfvA4S.js";import{w as J,d as pe}from"../chunks/index.B8O5jAbK.js";import{f as ie}from"../chunks/index.C1si9dtA.js";function ee(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ge(r){let e,n,l,s;return n=new x({props:{name:`counter-${r[0]}`}}),{c(){e=y("div"),V(n.$$.fragment)},l(o){e=w(o,"DIV",{});var t=D(e);z(n.$$.fragment,t),t.forEach(b)},m(o,t){M(o,e,t),N(n,e,null),s=!0},p(o,[t]){const u={};t&1&&(u.name=`counter-${o[0]}`),n.$set(u)},i(o){s||($(n.$$.fragment,o),o&&(l||K(()=>{l=ae(e,ie,{y:-1e3,duration:600}),l.start()})),s=!0)},o(o){g(n.$$.fragment,o),s=!1},d(o){o&&b(e),P(n)}}}function ve(r,e,n){let{color:l}=e;return r.$$set=s=>{"color"in s&&n(0,l=s.color)},[l]}class _e extends L{constructor(e){super(),Q(this,e,ve,ge,F,{color:0})}}const ue=Array(7*6).fill(void 0),{set:be,update:Ce,subscribe:ye}=J(ue),we={subscribe:ye};function ke(r){return new Promise(e=>{Ce(n=>{const l=[...n],s=n.map((o,t)=>({value:o,column:t%7,index:t})).filter(o=>o.column===r.indexColumn&&o.value===void 0).pop();return s?(l[s.index]=r.color,e(!0),l):(e(!1),n)})})}function Ie(){be(ue)}function te(r,e,n){const l=r.slice();return l[13]=e[n],l[15]=n,l}function ne(r){let e,n;return e=new _e({props:{color:r[3][r[15]]}}),{c(){V(e.$$.fragment)},l(l){z(e.$$.fragment,l)},m(l,s){N(e,l,s),n=!0},p(l,s){const o={};s&8&&(o.color=l[3][l[15]]),e.$set(o)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){g(e.$$.fragment,l),n=!1},d(l){P(e,l)}}}function re(r){let e,n,l,s,o,t=r[3][r[15]]&&ne(r);return{c(){e=y("button"),t&&t.c(),n=I(),this.h()},l(u){e=w(u,"BUTTON",{class:!0,id:!0,role:!0,tabindex:!0});var m=D(e);t&&t.l(m),n=E(m),m.forEach(b),this.h()},h(){_(e,"class","cell svelte-68yuez"),_(e,"id",`board-cell-${r[15]}`),_(e,"role","cell"),_(e,"tabindex","0")},m(u,m){M(u,e,m),t&&t.m(e,null),p(e,n),l=!0,s||(o=[U(e,"mouseenter",r[6](r[15])),U(e,"click",r[7](r[15]))],s=!0)},p(u,m){r=u,r[3][r[15]]?t?(t.p(r,m),m&8&&$(t,1)):(t=ne(r),t.c(),$(t,1),t.m(e,n)):t&&(W(),g(t,1,1,()=>{t=null}),H())},i(u){l||($(t),l=!0)},o(u){g(t),l=!1},d(u){u&&b(e),t&&t.d(),s=!1,me(o)}}}function le(r){let e,n=r[4].column,l,s=oe(r);return{c(){e=y("div"),s.c(),this.h()},l(o){e=w(o,"DIV",{class:!0});var t=D(e);s.l(t),t.forEach(b),this.h()},h(){_(e,"class","board-cursor")},m(o,t){M(o,e,t),s.m(e,null),l=!0},p(o,t){t&16&&F(n,n=o[4].column)?(W(),g(s,1,1,se),H(),s=oe(o),s.c(),$(s,1),s.m(e,null)):s.p(o,t)},i(o){l||($(s),l=!0)},o(o){g(s),l=!1},d(o){o&&b(e),s.d(o)}}}function oe(r){let e,n,l,s,o;return n=new x({props:{name:`marker-${r[2]}`}}),{c(){e=y("div"),V(n.$$.fragment),this.h()},l(t){e=w(t,"DIV",{style:!0});var u=D(e);z(n.$$.fragment,u),u.forEach(b),this.h()},h(){_(e,"style",l=`grid-area: cell-${r[4].column}`)},m(t,u){M(t,e,u),N(n,e,null),o=!0},p(t,u){r=t;const m={};u&4&&(m.name=`marker-${r[2]}`),n.$set(m),(!o||u&16&&l!==(l=`grid-area: cell-${r[4].column}`))&&_(e,"style",l)},i(t){o||($(n.$$.fragment,t),t&&(s||K(()=>{s=ae(e,ie,{x:-r[1],duration:ce,opacity:1}),s.start()})),o=!0)},o(t){g(n.$$.fragment,t),o=!1},d(t){t&&b(e),P(n)}}}function Ee(r){let e,n,l,s,o,t,u,m,B,A;K(r[8]),n=new x({props:{class:"shadow",name:"board-layer-black"}});let h=ee(Array(7*6)),c=[];for(let a=0;a<h.length;a+=1)c[a]=re(te(r,h,a));const v=a=>g(c[a],1,1,()=>{c[a]=null});t=new x({props:{class:"overlay",name:"board-layer-white"}});let f=r[0]>768&&le(r);return{c(){e=y("div"),V(n.$$.fragment),l=I(),s=y("div");for(let a=0;a<c.length;a+=1)c[a].c();o=I(),V(t.$$.fragment),u=I(),f&&f.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var i=D(e);z(n.$$.fragment,i),l=E(i),s=w(i,"DIV",{class:!0});var d=D(s);for(let k=0;k<c.length;k+=1)c[k].l(d);d.forEach(b),o=E(i),z(t.$$.fragment,i),u=E(i),f&&f.l(i),i.forEach(b),this.h()},h(){_(s,"class","cells svelte-68yuez"),_(e,"class","board svelte-68yuez")},m(a,i){M(a,e,i),N(n,e,null),p(e,l),p(e,s);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(s,null);p(e,o),N(t,e,null),p(e,u),f&&f.m(e,null),m=!0,B||(A=U(window,"resize",r[8]),B=!0)},p(a,[i]){if(i&200){h=ee(Array(7*6));let d;for(d=0;d<h.length;d+=1){const k=te(a,h,d);c[d]?(c[d].p(k,i),$(c[d],1)):(c[d]=re(k),c[d].c(),$(c[d],1),c[d].m(s,null))}for(W(),d=h.length;d<c.length;d+=1)v(d);H()}a[0]>768?f?(f.p(a,i),i&1&&$(f,1)):(f=le(a),f.c(),$(f,1),f.m(e,null)):f&&(W(),g(f,1,1,()=>{f=null}),H())},i(a){if(!m){$(n.$$.fragment,a);for(let i=0;i<h.length;i+=1)$(c[i]);$(t.$$.fragment,a),$(f),m=!0}},o(a){g(n.$$.fragment,a),c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)g(c[i]);g(t.$$.fragment,a),g(f),m=!1},d(a){a&&b(e),P(n),de(c,a),P(t),f&&f.d(),B=!1,A()}}}let ce=200;function Be(r,e,n){let l,s;Z(r,we,a=>n(3,l=a));const o=J(0),t=J(0);let u=0;const m=pe([o,t],([a,i])=>({column:a,prevColumn:i}));Z(r,m,a=>n(4,s=a)),fe(()=>{m.subscribe(({column:a,prevColumn:i})=>{const d=document.getElementById(`board-cell-${i}`).getClientRects()[0],k=document.getElementById(`board-cell-${a}`).getClientRects()[0];n(1,u=k.x-d.x)})});let B;function A(a){return()=>{clearTimeout(B),B=setTimeout(()=>{o.update(i=>(t.set(i),a%7))},ce*.75)}}let h="red";function c(a){return async i=>{await ke({indexColumn:a%7,color:h})&&n(2,h=h==="red"?"yellow":"red")}}let v;function f(){n(0,v=window.innerWidth)}return r.$$.update=()=>{r.$$.dirty&1},[v,u,h,l,s,m,A,c,f]}class De extends L{constructor(e){super(),Q(this,e,Be,Ee,F,{})}}function Ae(r){let e,n,l,s="Menu",o,t,u,m,B="Restart",A,h,c,v,f,a,i,d="Player 1's turn",k,S,X="3s",R,G,Y;return t=new x({props:{class:"logo",name:"logo"}}),h=new De({}),f=new x({props:{name:"turn-background-red"}}),{c(){e=y("main"),n=y("div"),l=y("a"),l.textContent=s,o=I(),V(t.$$.fragment),u=I(),m=y("button"),m.textContent=B,A=I(),V(h.$$.fragment),c=I(),v=y("div"),V(f.$$.fragment),a=I(),i=y("span"),i.textContent=d,k=I(),S=y("span"),S.textContent=X,this.h()},l(C){e=w(C,"MAIN",{class:!0});var T=D(e);n=w(T,"DIV",{class:!0});var j=D(n);l=w(j,"A",{href:!0,class:!0,"data-svelte-h":!0}),O(l)!=="svelte-axxoo7"&&(l.textContent=s),o=E(j),z(t.$$.fragment,j),u=E(j),m=w(j,"BUTTON",{class:!0,"data-svelte-h":!0}),O(m)!=="svelte-wnhnxd"&&(m.textContent=B),j.forEach(b),A=E(T),z(h.$$.fragment,T),c=E(T),v=w(T,"DIV",{class:!0});var q=D(v);z(f.$$.fragment,q),a=E(q),i=w(q,"SPAN",{"data-svelte-h":!0}),O(i)!=="svelte-kij4ef"&&(i.textContent=d),k=E(q),S=w(q,"SPAN",{"data-svelte-h":!0}),O(S)!=="svelte-1jhyk2k"&&(S.textContent=X),q.forEach(b),T.forEach(b),this.h()},h(){_(l,"href",`${he}${$e("/")}`),_(l,"class","flat-button button-purple"),_(m,"class","flat-button button-purple"),_(n,"class","menu"),_(v,"class","display-turn svelte-1q1jyhl"),_(e,"class","svelte-1q1jyhl")},m(C,T){M(C,e,T),p(e,n),p(n,l),p(n,o),N(t,n,null),p(n,u),p(n,m),p(e,A),N(h,e,null),p(e,c),p(e,v),N(f,v,null),p(v,a),p(v,i),p(v,k),p(v,S),R=!0,G||(Y=U(m,"click",r[0]),G=!0)},p:se,i(C){R||($(t.$$.fragment,C),$(h.$$.fragment,C),$(f.$$.fragment,C),R=!0)},o(C){g(t.$$.fragment,C),g(h.$$.fragment,C),g(f.$$.fragment,C),R=!1},d(C){C&&b(e),P(t),P(h),P(f),G=!1,Y()}}}function Te(r){return[()=>{Ie()}]}class qe extends L{constructor(e){super(),Q(this,e,Te,Ae,F,{})}}export{qe as component};
