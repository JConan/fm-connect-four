import{s as T,e as K,c as H,o as Q,n as X,r as ve,E as re}from"../chunks/scheduler.Bp73tsFP.js";import{S as q,i as z,e as k,k as x,c as y,a as D,l as j,d as m,g as C,o as A,p as g,B as me,q as v,C as _e,r as P,w as ne,v as L,z as R,x as O,n as w,s as I,t as U,f as S,b as W,h as b,j as le,D as be,m as M}from"../chunks/index.WTjgDaL3.js";import{d as we,w as F}from"../chunks/index.CpYc9ZES.js";import{f as de,a as ke}from"../chunks/index.BXk-0J-c.js";import{I as V,r as ye}from"../chunks/Image.mjpg1owz.js";import{b as Ce}from"../chunks/paths.Dm9iTkpd.js";function se(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}const $e=Array(7*6).fill(void 0),pe="red",Y=F(pe),Z=F($e),ee=F(0),G=we([Z,Y,ee],([a,e,r])=>({grid:a,turn:e,activeColumn:r}));function Ee(a){return new Promise(e=>{Z.update(r=>{const n=[...r],s=r.map((l,t)=>({value:l,column:t%7,index:t})).filter(l=>l.column===a.indexColumn&&l.value===void 0).pop();return s?(Y.update(l=>(n[s.index]=l,l==="red"?"yellow":"red")),e(!0),n):(e(!1),r)})})}function ge(){Z.set($e),Y.set(pe),ee.set(0)}function Ie(a){ee.set(a%7)}function Se(a){let e,r,n,s,l;return r=new V({props:{name:`counter-${a[0]}`}}),{c(){e=k("div"),x(r.$$.fragment)},l(t){e=y(t,"DIV",{});var i=D(e);j(r.$$.fragment,i),i.forEach(m)},m(t,i){C(t,e,i),A(r,e,null),l=!0},p(t,[i]){const u={};i&1&&(u.name=`counter-${t[0]}`),r.$set(u)},i(t){l||(g(r.$$.fragment,t),t&&K(()=>{l&&(s&&s.end(1),n=me(e,de,{y:-1e3,duration:600}),n.start())}),l=!0)},o(t){v(r.$$.fragment,t),n&&n.invalidate(),t&&(s=_e(e,ke,{})),l=!1},d(t){t&&m(e),P(r),t&&s&&s.end()}}}function xe(a,e,r){let{color:n}=e;return a.$$set=s=>{"color"in s&&r(0,n=s.color)},[n]}class je extends q{constructor(e){super(),z(this,e,xe,Se,T,{color:0})}}function ae(a){let e,r=a[2].current,n,s=oe(a);return{c(){e=k("div"),s.c(),this.h()},l(l){e=y(l,"DIV",{class:!0});var t=D(e);s.l(t),t.forEach(m),this.h()},h(){w(e,"class","board-cursor svelte-7k3e")},m(l,t){C(l,e,t),s.m(e,null),n=!0},p(l,t){t&4&&T(r,r=l[2].current)?(R(),v(s,1,1,X),O(),s=oe(l),s.c(),g(s,1),s.m(e,null)):s.p(l,t)},i(l){n||(g(s),n=!0)},o(l){v(s),n=!1},d(l){l&&m(e),s.d(l)}}}function oe(a){let e,r,n,s,l;return r=new V({props:{name:`marker-${a[3].turn}`}}),{c(){e=k("div"),x(r.$$.fragment),this.h()},l(t){e=y(t,"DIV",{style:!0});var i=D(e);j(r.$$.fragment,i),i.forEach(m),this.h()},h(){w(e,"style",n=`grid-area: cell-${a[2].current}`)},m(t,i){C(t,e,i),A(r,e,null),l=!0},p(t,i){a=t;const u={};i&8&&(u.name=`marker-${a[3].turn}`),r.$set(u),(!l||i&4&&n!==(n=`grid-area: cell-${a[2].current}`))&&w(e,"style",n)},i(t){l||(g(r.$$.fragment,t),t&&(s||K(()=>{s=me(e,de,{x:-a[0],duration:200,opacity:1}),s.start()})),l=!0)},o(t){v(r.$$.fragment,t),l=!1},d(t){t&&m(e),P(r)}}}function Ae(a){let e,r,n,s;K(a[5]);let l=a[1]>768&&ae(a);return{c(){l&&l.c(),e=ne()},l(t){l&&l.l(t),e=ne()},m(t,i){l&&l.m(t,i),C(t,e,i),r=!0,n||(s=L(window,"resize",a[5]),n=!0)},p(t,[i]){t[1]>768?l?(l.p(t,i),i&2&&g(l,1)):(l=ae(t),l.c(),g(l,1),l.m(e.parentNode,e)):l&&(R(),v(l,1,1,()=>{l=null}),O())},i(t){r||(g(l),r=!0)},o(t){v(l),r=!1},d(t){t&&m(e),l&&l.d(t),n=!1,s()}}}function Pe(a,e,r){let n,s;H(a,G,o=>r(3,s=o));let l=0;const t=F({});H(a,t,o=>r(2,n=o)),Q(()=>{t.subscribe(({current:o,previous:c})=>{if(o!==void 0&&c!==void 0){const d=document.getElementById(`board-cell-${c}`).getClientRects()[0],f=document.getElementById(`board-cell-${o}`).getClientRects()[0];r(0,l=f.x-d.x)}}),G.subscribe(o=>{t.update(c=>c.current!==o.activeColumn?{current:o.activeColumn,previous:c.current}:c)})});let i;function u(){r(1,i=window.innerWidth)}return[l,i,n,s,t,u]}class Be extends q{constructor(e){super(),z(this,e,Pe,Ae,T,{})}}function De(a){let e,r,n,s,l,t,i,u,o,c,d;return r=new V({props:{name:`turn-background-${a[2].turn}`}}),{c(){e=k("div"),x(r.$$.fragment),n=I(),s=k("span"),l=U(a[1]),t=U(" turn"),i=I(),u=k("span"),o=U(a[0]),c=U("s"),this.h()},l(f){e=y(f,"DIV",{class:!0});var h=D(e);j(r.$$.fragment,h),n=S(h),s=y(h,"SPAN",{});var B=D(s);l=W(B,a[1]),t=W(B," turn"),B.forEach(m),i=S(h),u=y(h,"SPAN",{});var p=D(u);o=W(p,a[0]),c=W(p,"s"),p.forEach(m),h.forEach(m),this.h()},h(){w(e,"class","display-turn svelte-10g0ndx")},m(f,h){C(f,e,h),A(r,e,null),b(e,n),b(e,s),b(s,l),b(s,t),b(e,i),b(e,u),b(u,o),b(u,c),d=!0},p(f,[h]){const B={};h&4&&(B.name=`turn-background-${f[2].turn}`),r.$set(B),(!d||h&2)&&le(l,f[1]),(!d||h&1)&&le(o,f[0])},i(f){d||(g(r.$$.fragment,f),d=!0)},o(f){v(r.$$.fragment,f),d=!1},d(f){f&&m(e),P(r)}}}function Ne(a,e,r){let n,s;H(a,G,i=>r(2,s=i));let l="red",t=30;return Q(()=>{const i=setInterval(()=>{r(0,t=t-1)},1e3);return G.subscribe(({turn:u})=>{u!==l&&(r(3,l=u),r(0,t=30))}),()=>{clearInterval(i)}}),a.$$.update=()=>{a.$$.dirty&8&&r(1,n=l==="red"?"Player 1's":"Player 2's")},[t,n,s,l]}class Ve extends q{constructor(e){super(),z(this,e,Ne,De,T,{})}}function ie(a,e,r){const n=a.slice();return n[4]=e[r],n[6]=r,n}function ue(a){let e,r;return e=new je({props:{color:a[0].grid[a[6]]}}),{c(){x(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,s){A(e,n,s),r=!0},p(n,s){const l={};s&1&&(l.color=n[0].grid[n[6]]),e.$set(l)},i(n){r||(g(e.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),r=!1},d(n){P(e,n)}}}function ce(a){let e,r,n,s,l,t=a[0].grid[a[6]]&&ue(a);return{c(){e=k("button"),t&&t.c(),r=I(),this.h()},l(i){e=y(i,"BUTTON",{class:!0,id:!0,role:!0,tabindex:!0});var u=D(e);t&&t.l(u),r=S(u),u.forEach(m),this.h()},h(){w(e,"class","cell svelte-1jcmusq"),w(e,"id",`board-cell-${a[6]}`),w(e,"role","cell"),w(e,"tabindex","0")},m(i,u){C(i,e,u),t&&t.m(e,null),b(e,r),n=!0,s||(l=[L(e,"mouseenter",a[1](a[6])),L(e,"click",a[2](a[6]))],s=!0)},p(i,u){a=i,a[0].grid[a[6]]?t?(t.p(a,u),u&1&&g(t,1)):(t=ue(a),t.c(),g(t,1),t.m(e,r)):t&&(R(),v(t,1,1,()=>{t=null}),O())},i(i){n||(g(t),n=!0)},o(i){v(t),n=!1},d(i){i&&m(e),t&&t.d(),s=!1,ve(l)}}}function Te(a){let e,r,n,s,l,t,i,u,o,c,d,f,h;s=new V({props:{class:"shadow",name:"board-layer-black"}});let B=se(Array(7*6)),p=[];for(let $=0;$<B.length;$+=1)p[$]=ce(ie(a,B,$));const he=$=>v(p[$],1,1,()=>{p[$]=null});return u=new V({props:{class:"overlay",name:"board-layer-white"}}),c=new Be({}),f=new Ve({}),{c(){e=k("div"),r=k("div"),n=k("div"),x(s.$$.fragment),l=I(),t=k("div");for(let $=0;$<p.length;$+=1)p[$].c();i=I(),x(u.$$.fragment),o=I(),x(c.$$.fragment),d=I(),x(f.$$.fragment),this.h()},l($){e=y($,"DIV",{class:!0});var E=D(e);r=y(E,"DIV",{class:!0});var _=D(r);n=y(_,"DIV",{class:!0});var N=D(n);j(s.$$.fragment,N),l=S(N),t=y(N,"DIV",{class:!0});var te=D(t);for(let J=0;J<p.length;J+=1)p[J].l(te);te.forEach(m),i=S(N),j(u.$$.fragment,N),o=S(N),j(c.$$.fragment,N),N.forEach(m),_.forEach(m),d=S(E),j(f.$$.fragment,E),E.forEach(m),this.h()},h(){w(t,"class","cells svelte-1jcmusq"),w(n,"class","board-grid svelte-1jcmusq"),w(r,"class","board"),w(e,"class","board-container svelte-1jcmusq")},m($,E){C($,e,E),b(e,r),b(r,n),A(s,n,null),b(n,l),b(n,t);for(let _=0;_<p.length;_+=1)p[_]&&p[_].m(t,null);b(n,i),A(u,n,null),b(n,o),A(c,n,null),b(e,d),A(f,e,null),h=!0},p($,[E]){if(E&7){B=se(Array(7*6));let _;for(_=0;_<B.length;_+=1){const N=ie($,B,_);p[_]?(p[_].p(N,E),g(p[_],1)):(p[_]=ce(N),p[_].c(),g(p[_],1),p[_].m(t,null))}for(R(),_=B.length;_<p.length;_+=1)he(_);O()}},i($){if(!h){g(s.$$.fragment,$);for(let E=0;E<B.length;E+=1)g(p[E]);g(u.$$.fragment,$),g(c.$$.fragment,$),g(f.$$.fragment,$),h=!0}},o($){v(s.$$.fragment,$),p=p.filter(Boolean);for(let E=0;E<p.length;E+=1)v(p[E]);v(u.$$.fragment,$),v(c.$$.fragment,$),v(f.$$.fragment,$),h=!1},d($){$&&m(e),P(s),be(p,$),P(u),P(c),P(f)}}}function qe(a,e,r){let n;H(a,G,i=>r(0,n=i)),Q(()=>{ge()});let s;function l(i){return()=>{clearTimeout(s),s=setTimeout(()=>{Ie(i)},150)}}function t(i){return()=>{Ee({indexColumn:i%7})}}return[n,l,t]}class ze extends q{constructor(e){super(),z(this,e,qe,Te,T,{})}}function Me(a){let e,r,n="Menu",s,l,t,i,u="Restart",o,c,d;return l=new V({props:{class:"logo",name:"logo"}}),{c(){e=k("div"),r=k("a"),r.textContent=n,s=I(),x(l.$$.fragment),t=I(),i=k("button"),i.textContent=u,this.h()},l(f){e=y(f,"DIV",{class:!0});var h=D(e);r=y(h,"A",{href:!0,class:!0,"data-svelte-h":!0}),M(r)!=="svelte-axxoo7"&&(r.textContent=n),s=S(h),j(l.$$.fragment,h),t=S(h),i=y(h,"BUTTON",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-1akbaj5"&&(i.textContent=u),h.forEach(m),this.h()},h(){w(r,"href",`${Ce}${ye("/")}`),w(r,"class","flat-button button-purple"),w(i,"class","flat-button button-purple"),w(e,"class","menu svelte-1bcp1gc")},m(f,h){C(f,e,h),b(e,r),b(e,s),A(l,e,null),b(e,t),b(e,i),o=!0,c||(d=L(i,"click",a[0]),c=!0)},p:X,i(f){o||(g(l.$$.fragment,f),o=!0)},o(f){v(l.$$.fragment,f),o=!1},d(f){f&&m(e),P(l),c=!1,d()}}}function Ge(a){return[()=>{ge()}]}class Re extends q{constructor(e){super(),z(this,e,Ge,Me,T,{})}}function Oe(a){let e,r,n,s="Player 2",l,t,i="23",u;return e=new V({props:{class:"icon yellow",name:"player-two"}}),{c(){x(e.$$.fragment),r=I(),n=k("span"),n.textContent=s,l=I(),t=k("span"),t.textContent=i,this.h()},l(o){j(e.$$.fragment,o),r=S(o),n=y(o,"SPAN",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-1j8zg49"&&(n.textContent=s),l=S(o),t=y(o,"SPAN",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-19edwfx"&&(t.textContent=i),this.h()},h(){w(n,"class","svelte-1kosjcw"),w(t,"class","svelte-1kosjcw")},m(o,c){A(e,o,c),C(o,r,c),C(o,n,c),C(o,l,c),C(o,t,c),u=!0},i(o){u||(g(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){o&&(m(r),m(n),m(l),m(t)),P(e,o)}}}function Ue(a){let e,r,n,s="Player 1",l,t,i="12",u;return e=new V({props:{class:"icon red",name:"player-one"}}),{c(){x(e.$$.fragment),r=I(),n=k("span"),n.textContent=s,l=I(),t=k("span"),t.textContent=i,this.h()},l(o){j(e.$$.fragment,o),r=S(o),n=y(o,"SPAN",{class:!0,"data-svelte-h":!0}),M(n)!=="svelte-bxk3g8"&&(n.textContent=s),l=S(o),t=y(o,"SPAN",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-dbx7z1"&&(t.textContent=i),this.h()},h(){w(n,"class","svelte-1kosjcw"),w(t,"class","svelte-1kosjcw")},m(o,c){A(e,o,c),C(o,r,c),C(o,n,c),C(o,l,c),C(o,t,c),u=!0},i(o){u||(g(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){o&&(m(r),m(n),m(l),m(t)),P(e,o)}}}function We(a){let e,r,n,s,l;const t=[Ue,Oe],i=[];function u(o,c){return o[0]==="red"?0:1}return r=u(a),n=i[r]=t[r](a),{c(){e=k("div"),n.c(),this.h()},l(o){e=y(o,"DIV",{class:!0});var c=D(e);n.l(c),c.forEach(m),this.h()},h(){w(e,"class",s=re(`score-board ${a[0]}`)+" svelte-1kosjcw")},m(o,c){C(o,e,c),i[r].m(e,null),l=!0},p(o,[c]){let d=r;r=u(o),r!==d&&(R(),v(i[d],1,1,()=>{i[d]=null}),O(),n=i[r],n||(n=i[r]=t[r](o),n.c()),g(n,1),n.m(e,null)),(!l||c&1&&s!==(s=re(`score-board ${o[0]}`)+" svelte-1kosjcw"))&&w(e,"class",s)},i(o){l||(g(n),l=!0)},o(o){v(n),l=!1},d(o){o&&m(e),i[r].d()}}}function He(a,e,r){let{player:n}=e;return a.$$set=s=>{"player"in s&&r(0,n=s.player)},[n]}class fe extends q{constructor(e){super(),z(this,e,He,We,T,{player:0})}}function Le(a){let e,r,n,s,l,t,i,u,o;return r=new Re({}),s=new fe({props:{player:"red"}}),t=new fe({props:{player:"yellow"}}),u=new ze({}),{c(){e=k("main"),x(r.$$.fragment),n=I(),x(s.$$.fragment),l=I(),x(t.$$.fragment),i=I(),x(u.$$.fragment),this.h()},l(c){e=y(c,"MAIN",{class:!0});var d=D(e);j(r.$$.fragment,d),n=S(d),j(s.$$.fragment,d),l=S(d),j(t.$$.fragment,d),i=S(d),j(u.$$.fragment,d),d.forEach(m),this.h()},h(){w(e,"class","svelte-1fmyuk2")},m(c,d){C(c,e,d),A(r,e,null),b(e,n),A(s,e,null),b(e,l),A(t,e,null),b(e,i),A(u,e,null),o=!0},p:X,i(c){o||(g(r.$$.fragment,c),g(s.$$.fragment,c),g(t.$$.fragment,c),g(u.$$.fragment,c),o=!0)},o(c){v(r.$$.fragment,c),v(s.$$.fragment,c),v(t.$$.fragment,c),v(u.$$.fragment,c),o=!1},d(c){c&&m(e),P(r),P(s),P(t),P(u)}}}class Ze extends q{constructor(e){super(),z(this,e,null,Le,T,{})}}export{Ze as component};
