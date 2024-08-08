import{s as z,e as J,c as F,o as K,n as Q,r as ge}from"../chunks/scheduler.Bf1hPX8E.js";import{S as G,i as R,e as k,k as D,c as y,a as I,l as S,d as p,g as N,o as A,p as g,B as ce,q as _,C as pe,r as V,w as te,v as O,z as W,x,n as C,s as T,t as j,f as P,b as q,h as v,j as re,D as ve,m as ne}from"../chunks/index.CGhscT6l.js";import{d as _e,w as H}from"../chunks/index.BPNK3XrK.js";import{f as fe,a as be}from"../chunks/index.3i_vlO88.js";import{I as M,r as Ce}from"../chunks/Image.BZ-VQZpA.js";import{b as we}from"../chunks/paths.CE61VFY1.js";function le(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const me=Array(7*6).fill(void 0),de="red",X=H(de),Y=H(me),Z=H(0),U=_e([Y,X,Z],([a,e,n])=>({grid:a,turn:e,activeColumn:n}));function ke(a){return new Promise(e=>{Y.update(n=>{const l=[...n],s=n.map((r,t)=>({value:r,column:t%7,index:t})).filter(r=>r.column===a.indexColumn&&r.value===void 0).pop();return s?(X.update(r=>(l[s.index]=r,r==="red"?"yellow":"red")),e(!0),l):(e(!1),n)})})}function $e(){Y.set(me),X.set(de),Z.set(0)}function ye(a){Z.set(a%7)}function Ie(a){let e,n,l,s,r;return n=new M({props:{name:`counter-${a[0]}`}}),{c(){e=k("div"),D(n.$$.fragment)},l(t){e=y(t,"DIV",{});var o=I(e);S(n.$$.fragment,o),o.forEach(p)},m(t,o){N(t,e,o),A(n,e,null),r=!0},p(t,[o]){const i={};o&1&&(i.name=`counter-${t[0]}`),n.$set(i)},i(t){r||(g(n.$$.fragment,t),t&&J(()=>{r&&(s&&s.end(1),l=ce(e,fe,{y:-1e3,duration:600}),l.start())}),r=!0)},o(t){_(n.$$.fragment,t),l&&l.invalidate(),t&&(s=pe(e,be,{})),r=!1},d(t){t&&p(e),V(n),t&&s&&s.end()}}}function Ee(a,e,n){let{color:l}=e;return a.$$set=s=>{"color"in s&&n(0,l=s.color)},[l]}class Be extends G{constructor(e){super(),R(this,e,Ee,Ie,z,{color:0})}}function se(a){let e,n=a[2].current,l,s=ae(a);return{c(){e=k("div"),s.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var t=I(e);s.l(t),t.forEach(p),this.h()},h(){C(e,"class","board-cursor svelte-7k3e")},m(r,t){N(r,e,t),s.m(e,null),l=!0},p(r,t){t&4&&z(n,n=r[2].current)?(W(),_(s,1,1,Q),x(),s=ae(r),s.c(),g(s,1),s.m(e,null)):s.p(r,t)},i(r){l||(g(s),l=!0)},o(r){_(s),l=!1},d(r){r&&p(e),s.d(r)}}}function ae(a){let e,n,l,s,r;return n=new M({props:{name:`marker-${a[3].turn}`}}),{c(){e=k("div"),D(n.$$.fragment),this.h()},l(t){e=y(t,"DIV",{style:!0});var o=I(e);S(n.$$.fragment,o),o.forEach(p),this.h()},h(){C(e,"style",l=`grid-area: cell-${a[2].current}`)},m(t,o){N(t,e,o),A(n,e,null),r=!0},p(t,o){a=t;const i={};o&8&&(i.name=`marker-${a[3].turn}`),n.$set(i),(!r||o&4&&l!==(l=`grid-area: cell-${a[2].current}`))&&C(e,"style",l)},i(t){r||(g(n.$$.fragment,t),t&&(s||J(()=>{s=ce(e,fe,{x:-a[0],duration:200,opacity:1}),s.start()})),r=!0)},o(t){_(n.$$.fragment,t),r=!1},d(t){t&&p(e),V(n)}}}function De(a){let e,n,l,s;J(a[5]);let r=a[1]>768&&se(a);return{c(){r&&r.c(),e=te()},l(t){r&&r.l(t),e=te()},m(t,o){r&&r.m(t,o),N(t,e,o),n=!0,l||(s=O(window,"resize",a[5]),l=!0)},p(t,[o]){t[1]>768?r?(r.p(t,o),o&2&&g(r,1)):(r=se(t),r.c(),g(r,1),r.m(e.parentNode,e)):r&&(W(),_(r,1,1,()=>{r=null}),x())},i(t){n||(g(r),n=!0)},o(t){_(r),n=!1},d(t){t&&p(e),r&&r.d(t),l=!1,s()}}}function Se(a,e,n){let l,s;F(a,U,d=>n(3,s=d));let r=0;const t=H({});F(a,t,d=>n(2,l=d)),K(()=>{t.subscribe(({current:d,previous:h})=>{if(d!==void 0&&h!==void 0){const w=document.getElementById(`board-cell-${h}`).getClientRects()[0],u=document.getElementById(`board-cell-${d}`).getClientRects()[0];n(0,r=u.x-w.x)}}),U.subscribe(d=>{t.update(h=>h.current!==d.activeColumn?{current:d.activeColumn,previous:h.current}:h)})});let o;function i(){n(1,o=window.innerWidth)}return[r,o,l,s,t,i]}class Ae extends G{constructor(e){super(),R(this,e,Se,De,z,{})}}function Ve(a){let e,n,l,s,r,t,o,i,d,h,w;return n=new M({props:{name:"turn-background-red"}}),{c(){e=k("div"),D(n.$$.fragment),l=T(),s=k("span"),r=j(a[1]),t=j(" turn"),o=T(),i=k("span"),d=j(a[0]),h=j("s"),this.h()},l(u){e=y(u,"DIV",{class:!0});var m=I(e);S(n.$$.fragment,m),l=P(m),s=y(m,"SPAN",{});var E=I(s);r=q(E,a[1]),t=q(E," turn"),E.forEach(p),o=P(m),i=y(m,"SPAN",{});var f=I(i);d=q(f,a[0]),h=q(f,"s"),f.forEach(p),m.forEach(p),this.h()},h(){C(e,"class","display-turn svelte-10g0ndx")},m(u,m){N(u,e,m),A(n,e,null),v(e,l),v(e,s),v(s,r),v(s,t),v(e,o),v(e,i),v(i,d),v(i,h),w=!0},p(u,[m]){(!w||m&2)&&re(r,u[1]),(!w||m&1)&&re(d,u[0])},i(u){w||(g(n.$$.fragment,u),w=!0)},o(u){_(n.$$.fragment,u),w=!1},d(u){u&&p(e),V(n)}}}function Te(a,e,n){let l,s="red",r=30;return K(()=>{const t=setInterval(()=>{n(0,r=r-1)},1e3);return U.subscribe(({turn:o})=>{o!==s&&(n(2,s=o),n(0,r=30))}),()=>{clearInterval(t)}}),a.$$.update=()=>{a.$$.dirty&4&&n(1,l=s==="red"?"Player 1's":"Player 2's")},[r,l,s]}class Pe extends G{constructor(e){super(),R(this,e,Te,Ve,z,{})}}function oe(a,e,n){const l=a.slice();return l[4]=e[n],l[6]=n,l}function ie(a){let e,n;return e=new Be({props:{color:a[0].grid[a[6]]}}),{c(){D(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,s){A(e,l,s),n=!0},p(l,s){const r={};s&1&&(r.color=l[0].grid[l[6]]),e.$set(r)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){_(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function ue(a){let e,n,l,s,r,t=a[0].grid[a[6]]&&ie(a);return{c(){e=k("button"),t&&t.c(),n=T(),this.h()},l(o){e=y(o,"BUTTON",{class:!0,id:!0,role:!0,tabindex:!0});var i=I(e);t&&t.l(i),n=P(i),i.forEach(p),this.h()},h(){C(e,"class","cell svelte-lmrhm9"),C(e,"id",`board-cell-${a[6]}`),C(e,"role","cell"),C(e,"tabindex","0")},m(o,i){N(o,e,i),t&&t.m(e,null),v(e,n),l=!0,s||(r=[O(e,"mouseenter",a[1](a[6])),O(e,"click",a[2](a[6]))],s=!0)},p(o,i){a=o,a[0].grid[a[6]]?t?(t.p(a,i),i&1&&g(t,1)):(t=ie(a),t.c(),g(t,1),t.m(e,n)):t&&(W(),_(t,1,1,()=>{t=null}),x())},i(o){l||(g(t),l=!0)},o(o){_(t),l=!1},d(o){o&&p(e),t&&t.d(),s=!1,ge(r)}}}function Ne(a){let e,n,l,s,r,t,o,i,d,h,w,u,m;s=new M({props:{class:"shadow",name:"board-layer-black"}});let E=le(Array(7*6)),f=[];for(let c=0;c<E.length;c+=1)f[c]=ue(oe(a,E,c));const he=c=>_(f[c],1,1,()=>{f[c]=null});return i=new M({props:{class:"overlay",name:"board-layer-white"}}),h=new Ae({}),u=new Pe({}),{c(){e=k("div"),n=k("div"),l=k("div"),D(s.$$.fragment),r=T(),t=k("div");for(let c=0;c<f.length;c+=1)f[c].c();o=T(),D(i.$$.fragment),d=T(),D(h.$$.fragment),w=T(),D(u.$$.fragment),this.h()},l(c){e=y(c,"DIV",{});var b=I(e);n=y(b,"DIV",{class:!0});var $=I(n);l=y($,"DIV",{class:!0});var B=I(l);S(s.$$.fragment,B),r=P(B),t=y(B,"DIV",{class:!0});var ee=I(t);for(let L=0;L<f.length;L+=1)f[L].l(ee);ee.forEach(p),o=P(B),S(i.$$.fragment,B),d=P(B),S(h.$$.fragment,B),B.forEach(p),$.forEach(p),w=P(b),S(u.$$.fragment,b),b.forEach(p),this.h()},h(){C(t,"class","cells svelte-lmrhm9"),C(l,"class","board-grid svelte-lmrhm9"),C(n,"class","board")},m(c,b){N(c,e,b),v(e,n),v(n,l),A(s,l,null),v(l,r),v(l,t);for(let $=0;$<f.length;$+=1)f[$]&&f[$].m(t,null);v(l,o),A(i,l,null),v(l,d),A(h,l,null),v(e,w),A(u,e,null),m=!0},p(c,[b]){if(b&7){E=le(Array(7*6));let $;for($=0;$<E.length;$+=1){const B=oe(c,E,$);f[$]?(f[$].p(B,b),g(f[$],1)):(f[$]=ue(B),f[$].c(),g(f[$],1),f[$].m(t,null))}for(W(),$=E.length;$<f.length;$+=1)he($);x()}},i(c){if(!m){g(s.$$.fragment,c);for(let b=0;b<E.length;b+=1)g(f[b]);g(i.$$.fragment,c),g(h.$$.fragment,c),g(u.$$.fragment,c),m=!0}},o(c){_(s.$$.fragment,c),f=f.filter(Boolean);for(let b=0;b<f.length;b+=1)_(f[b]);_(i.$$.fragment,c),_(h.$$.fragment,c),_(u.$$.fragment,c),m=!1},d(c){c&&p(e),V(s),ve(f,c),V(i),V(h),V(u)}}}function ze(a,e,n){let l;F(a,U,o=>n(0,l=o)),K(()=>{$e()});let s;function r(o){return()=>{clearTimeout(s),s=setTimeout(()=>{ye(o)},150)}}function t(o){return()=>{ke({indexColumn:o%7})}}return[l,r,t]}class Me extends G{constructor(e){super(),R(this,e,ze,Ne,z,{})}}function Ge(a){let e,n,l="Menu",s,r,t,o,i="Restart",d,h,w;return r=new M({props:{class:"logo",name:"logo"}}),{c(){e=k("div"),n=k("a"),n.textContent=l,s=T(),D(r.$$.fragment),t=T(),o=k("button"),o.textContent=i,this.h()},l(u){e=y(u,"DIV",{class:!0});var m=I(e);n=y(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),ne(n)!=="svelte-axxoo7"&&(n.textContent=l),s=P(m),S(r.$$.fragment,m),t=P(m),o=y(m,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(o)!=="svelte-1akbaj5"&&(o.textContent=i),m.forEach(p),this.h()},h(){C(n,"href",`${we}${Ce("/")}`),C(n,"class","flat-button button-purple"),C(o,"class","flat-button button-purple"),C(e,"class","menu svelte-195tzy6")},m(u,m){N(u,e,m),v(e,n),v(e,s),A(r,e,null),v(e,t),v(e,o),d=!0,h||(w=O(o,"click",a[0]),h=!0)},p:Q,i(u){d||(g(r.$$.fragment,u),d=!0)},o(u){_(r.$$.fragment,u),d=!1},d(u){u&&p(e),V(r),h=!1,w()}}}function Re(a){return[()=>{$e()}]}class je extends G{constructor(e){super(),R(this,e,Re,Ge,z,{})}}function qe(a){let e,n,l,s,r;return n=new je({}),s=new Me({}),{c(){e=k("main"),D(n.$$.fragment),l=T(),D(s.$$.fragment),this.h()},l(t){e=y(t,"MAIN",{class:!0});var o=I(e);S(n.$$.fragment,o),l=P(o),S(s.$$.fragment,o),o.forEach(p),this.h()},h(){C(e,"class","svelte-kspa5k")},m(t,o){N(t,e,o),A(n,e,null),v(e,l),A(s,e,null),r=!0},p:Q,i(t){r||(g(n.$$.fragment,t),g(s.$$.fragment,t),r=!0)},o(t){_(n.$$.fragment,t),_(s.$$.fragment,t),r=!1},d(t){t&&p(e),V(n),V(s)}}}class Fe extends G{constructor(e){super(),R(this,e,null,qe,z,{})}}export{Fe as component};
