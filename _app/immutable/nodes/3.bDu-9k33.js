import{s as Y,b as K,c as A,o as pe,n as ae,D as R,E as ie,r as Ae,j as je}from"../chunks/scheduler.AzDCfVhA.js";import{S as te,i as re,e as k,k as U,c as w,a as P,l as j,d as h,g as O,o as M,p as S,B as x,q as I,C as _e,r as G,w as ce,v as L,z as oe,x as ue,n as C,s as D,t as F,f as N,b as J,D as Ee,h as g,j as fe,m as H,E as Me}from"../chunks/index.B8-DSJg-.js";import{d as Ge,w as W,g as Re}from"../chunks/entry.Bh8wApN3.js";import{f as X,a as Ve}from"../chunks/index.CD0jvZvz.js";import{I as ee,r as qe}from"../chunks/Image.Bq8RvNpP.js";import{b as We}from"../chunks/paths.CiPgU9HS.js";import{p as Le}from"../chunks/stores.EmVDweYT.js";function Se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const Oe=Array(7*6).fill(void 0),ze="red",he=W(ze),$e=W(Oe),be=W(0),Ue=W(0),le=W(),Q=W(!1),ve=W(!1),de=W(0),me=W(0),se=Ge([$e,he,be],([t,e,r])=>({grid:t,turn:e,activeColumn:r}));function Qe(t){return new Promise(e=>{$e.update(r=>{const l=[...r],s=r.map((a,n)=>({value:a,column:n%7,index:n})).filter(a=>a.column===t.indexColumn&&a.value===void 0).pop();return s?(he.update(a=>(l[s.index]=a,a==="red"?"yellow":"red")),e(!0),l):(e(!1),r)})})}function ye(){$e.set(Oe),he.set(ze),be.set(0),Ue.update(t=>t+1),le.set(void 0)}function He(t){be.set(t%7)}function Fe(t){let e,r,l,s,a;return r=new ee({props:{name:`counter-${t[0]}`}}),{c(){e=k("div"),U(r.$$.fragment)},l(n){e=w(n,"DIV",{});var o=P(e);j(r.$$.fragment,o),o.forEach(h)},m(n,o){O(n,e,o),M(r,e,null),a=!0},p(n,[o]){const u={};o&1&&(u.name=`counter-${n[0]}`),r.$set(u)},i(n){a||(S(r.$$.fragment,n),n&&K(()=>{a&&(s&&s.end(1),l=x(e,X,{y:-1e3,duration:600}),l.start())}),a=!0)},o(n){I(r.$$.fragment,n),l&&l.invalidate(),n&&(s=_e(e,Ve,{})),a=!1},d(n){n&&h(e),G(r),n&&s&&s.end()}}}function Je(t,e,r){let{color:l}=e;return t.$$set=s=>{"color"in s&&r(0,l=s.color)},[l]}class Ke extends te{constructor(e){super(),re(this,e,Je,Fe,Y,{color:0})}}function Te(t){let e,r=t[2].current,l,s=Ie(t);return{c(){e=k("div"),s.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var n=P(e);s.l(n),n.forEach(h),this.h()},h(){C(e,"class","board-cursor svelte-7k3e")},m(a,n){O(a,e,n),s.m(e,null),l=!0},p(a,n){n&4&&Y(r,r=a[2].current)?(oe(),I(s,1,1,ae),ue(),s=Ie(a),s.c(),S(s,1),s.m(e,null)):s.p(a,n)},i(a){l||(S(s),l=!0)},o(a){I(s),l=!1},d(a){a&&h(e),s.d(a)}}}function Ie(t){let e,r,l,s,a;return r=new ee({props:{name:`marker-${t[3].turn}`}}),{c(){e=k("div"),U(r.$$.fragment),this.h()},l(n){e=w(n,"DIV",{style:!0});var o=P(e);j(r.$$.fragment,o),o.forEach(h),this.h()},h(){C(e,"style",l=`grid-area: cell-${t[2].current}`)},m(n,o){O(n,e,o),M(r,e,null),a=!0},p(n,o){t=n;const u={};o&8&&(u.name=`marker-${t[3].turn}`),r.$set(u),(!a||o&4&&l!==(l=`grid-area: cell-${t[2].current}`))&&C(e,"style",l)},i(n){a||(S(r.$$.fragment,n),n&&(s||K(()=>{s=x(e,X,{x:-t[0],duration:200,opacity:1}),s.start()})),a=!0)},o(n){I(r.$$.fragment,n),a=!1},d(n){n&&h(e),G(r)}}}function Xe(t){let e,r,l,s;K(t[5]);let a=t[1]>1079&&Te(t);return{c(){a&&a.c(),e=ce()},l(n){a&&a.l(n),e=ce()},m(n,o){a&&a.m(n,o),O(n,e,o),r=!0,l||(s=L(window,"resize",t[5]),l=!0)},p(n,[o]){n[1]>1079?a?(a.p(n,o),o&2&&S(a,1)):(a=Te(n),a.c(),S(a,1),a.m(e.parentNode,e)):a&&(oe(),I(a,1,1,()=>{a=null}),ue())},i(n){r||(S(a),r=!0)},o(n){I(a),r=!1},d(n){n&&h(e),a&&a.d(n),l=!1,s()}}}function Ye(t,e,r){let l,s;A(t,se,i=>r(3,s=i));let a=0;const n=W({});A(t,n,i=>r(2,l=i)),pe(()=>{n.subscribe(({current:i,previous:c})=>{if(i!==void 0&&c!==void 0){const m=document.getElementById(`board-cell-${c}`).getClientRects()[0],T=document.getElementById(`board-cell-${i}`).getClientRects()[0];r(0,a=T.x-m.x)}}),se.subscribe(i=>{n.update(c=>c.current!==i.activeColumn?{current:i.activeColumn,previous:c.current}:c)})});let o;function u(){r(1,o=window.innerWidth)}return[a,o,l,s,n,u]}class Ze extends te{constructor(e){super(),re(this,e,Ye,Xe,Y,{})}}function xe(t){let e,r,l,s,a,n,o,u,i,c,m,T,v,f;return r=new ee({props:{name:`turn-background-${t[1].turn}`}}),{c(){e=k("div"),U(r.$$.fragment),l=D(),s=k("span"),a=F(t[2]),n=F(" turn"),o=D(),u=k("span"),i=F(t[0]),c=F("s"),this.h()},l(p){e=w(p,"DIV",{class:!0});var d=P(e);j(r.$$.fragment,d),l=N(d),s=w(d,"SPAN",{});var _=P(s);a=J(_,t[2]),n=J(_," turn"),_.forEach(h),o=N(d),u=w(d,"SPAN",{});var V=P(u);i=J(V,t[0]),c=J(V,"s"),V.forEach(h),d.forEach(h),this.h()},h(){Ee(u,"pause",t[3]),C(e,"class",m=ie(`display-turn ${t[1].turn}`)+" svelte-19chnvg")},m(p,d){O(p,e,d),M(r,e,null),g(e,l),g(e,s),g(s,a),g(s,n),g(e,o),g(e,u),g(u,i),g(u,c),f=!0},p(p,d){const _={};d&2&&(_.name=`turn-background-${p[1].turn}`),r.$set(_),(!f||d&4)&&fe(a,p[2]),(!f||d&1)&&fe(i,p[0]),(!f||d&8)&&Ee(u,"pause",p[3]),(!f||d&2&&m!==(m=ie(`display-turn ${p[1].turn}`)+" svelte-19chnvg"))&&C(e,"class",m)},i(p){f||(S(r.$$.fragment,p),p&&K(()=>{f&&(v&&v.end(1),T=x(e,X,{delay:1e3,y:300}),T.start())}),f=!0)},o(p){I(r.$$.fragment,p),T&&T.invalidate(),p&&(v=_e(e,X,{duration:300,y:300})),f=!1},d(p){p&&h(e),G(r),p&&v&&v.end()}}}function et(t){let e,r,l=t[4]==="red"?"player 1":"player 2",s,a,n,o="Wins",u,i,c="Play again",m,T,v,f,p;return{c(){e=k("div"),r=k("span"),s=F(l),a=D(),n=k("span"),n.textContent=o,u=D(),i=k("button"),i.textContent=c,this.h()},l(d){e=w(d,"DIV",{class:!0});var _=P(e);r=w(_,"SPAN",{});var V=P(r);s=J(V,l),V.forEach(h),a=N(_),n=w(_,"SPAN",{"data-svelte-h":!0}),H(n)!=="svelte-1r2u0sx"&&(n.textContent=o),u=N(_),i=w(_,"BUTTON",{class:!0,"data-svelte-h":!0}),H(i)!=="svelte-axctrz"&&(i.textContent=c),_.forEach(h),this.h()},h(){C(i,"class","flat-button button-dark-purple"),C(e,"class","end-game svelte-19chnvg")},m(d,_){O(d,e,_),g(e,r),g(r,s),g(e,a),g(e,n),g(e,u),g(e,i),v=!0,f||(p=L(i,"click",t[8]),f=!0)},p(d,_){(!v||_&16)&&l!==(l=d[4]==="red"?"player 1":"player 2")&&fe(s,l)},i(d){v||(d&&K(()=>{v&&(T&&T.end(1),m=x(e,X,{delay:300,y:300,duration:300}),m.start())}),v=!0)},o(d){m&&m.invalidate(),d&&(T=_e(e,X,{y:300,duration:300})),v=!1},d(d){d&&h(e),d&&T&&T.end(),f=!1,p()}}}function tt(t){let e,r,l,s;const a=[et,xe],n=[];function o(u,i){return u[4]?0:1}return e=o(t),r=n[e]=a[e](t),{c(){r.c(),l=ce()},l(u){r.l(u),l=ce()},m(u,i){n[e].m(u,i),O(u,l,i),s=!0},p(u,[i]){let c=e;e=o(u),e===c?n[e].p(u,i):(oe(),I(n[c],1,1,()=>{n[c]=null}),ue(),r=n[e],r?r.p(u,i):(r=n[e]=a[e](u),r.c()),S(r,1),r.m(l.parentNode,l))},i(u){s||(S(r),s=!0)},o(u){I(r),s=!1},d(u){u&&h(l),n[e].d(u)}}}function rt(t,e,r){let l,s,a,n,o,u;A(t,Q,v=>r(3,s=v)),A(t,se,v=>r(1,a=v)),A(t,le,v=>r(4,n=v)),A(t,ve,v=>r(6,o=v)),A(t,Ue,v=>r(7,u=v));let i="red",c=30;function m(v){r(0,c=30),v&&(R(Q,s=!0,s),setTimeout(()=>{R(Q,s=!1,s)},v))}pe(()=>{m(3e3);const v=setInterval(()=>{s||r(0,c=c-1)},1e3);return()=>{clearInterval(v)}});const T=()=>ye();return t.$$.update=()=>{t.$$.dirty&192&&u&&(r(5,i="red"),m(o?2e3:1e3),R(ve,o=!1,o)),t.$$.dirty&34&&a.turn!==i&&(r(5,i=a.turn),m(1e3)),t.$$.dirty&32&&r(2,l=i==="red"?"Player 1's":"Player 2's"),t.$$.dirty&3&&c<=0&&(R(ve,o=!0,o),R(Q,s=!0,s),R(le,n=a.turn==="red"?"yellow":"red",n))},[c,a,l,s,n,i,o,u,T]}class nt extends te{constructor(e){super(),re(this,e,rt,tt,Y,{})}}function Pe(t,e,r){const l=t.slice();return l[6]=e[r],l[8]=r,l}function De(t){let e,r;return e=new Ke({props:{color:t[0].grid[t[8]]}}),{c(){U(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,s){M(e,l,s),r=!0},p(l,s){const a={};s&1&&(a.color=l[0].grid[l[8]]),e.$set(a)},i(l){r||(S(e.$$.fragment,l),r=!0)},o(l){I(e.$$.fragment,l),r=!1},d(l){G(e,l)}}}function Ne(t){let e,r,l,s,a,n=t[0].grid[t[8]]&&De(t);return{c(){e=k("button"),n&&n.c(),r=D(),this.h()},l(o){e=w(o,"BUTTON",{class:!0,id:!0,role:!0,tabindex:!0});var u=P(e);n&&n.l(u),r=N(u),u.forEach(h),this.h()},h(){C(e,"class","cell svelte-10z11uh"),C(e,"id",`board-cell-${t[8]}`),C(e,"role","cell"),C(e,"tabindex","0")},m(o,u){O(o,e,u),n&&n.m(e,null),g(e,r),l=!0,s||(a=[L(e,"mouseenter",t[2](t[8])),L(e,"click",t[3](t[8]))],s=!0)},p(o,u){t=o,t[0].grid[t[8]]?n?(n.p(t,u),u&1&&S(n,1)):(n=De(t),n.c(),S(n,1),n.m(e,r)):n&&(oe(),I(n,1,1,()=>{n=null}),ue())},i(o){l||(S(n),l=!0)},o(o){I(n),l=!1},d(o){o&&h(e),n&&n.d(),s=!1,Ae(a)}}}function lt(t){let e,r,l,s,a,n,o,u,i,c,m,T,v,f,p,d,_,V,Z,z;s=new ee({props:{class:"shadow",name:"board-layer-black"}});let q=Se(Array(7*6)),E=[];for(let $=0;$<q.length;$+=1)E[$]=Ne(Pe(t,q,$));const ne=$=>I(E[$],1,1,()=>{E[$]=null});return u=new ee({props:{class:"overlay",name:"board-layer-white"}}),m=new Ze({}),p=new nt({}),{c(){e=k("div"),r=k("div"),l=k("div"),U(s.$$.fragment),a=D(),n=k("div");for(let $=0;$<E.length;$+=1)E[$].c();o=D(),U(u.$$.fragment),i=D(),c=k("div"),U(m.$$.fragment),v=D(),f=k("div"),U(p.$$.fragment),d=D(),_=k("div"),this.h()},l($){e=w($,"DIV",{class:!0});var b=P(e);r=w(b,"DIV",{class:!0});var y=P(r);l=w(y,"DIV",{class:!0});var B=P(l);j(s.$$.fragment,B),a=N(B),n=w(B,"DIV",{class:!0});var Ce=P(n);for(let ge=0;ge<E.length;ge+=1)E[ge].l(Ce);Ce.forEach(h),o=N(B),j(u.$$.fragment,B),i=N(B),c=w(B,"DIV",{});var ke=P(c);j(m.$$.fragment,ke),ke.forEach(h),B.forEach(h),y.forEach(h),v=N(b),f=w(b,"DIV",{class:!0});var we=P(f);j(p.$$.fragment,we),we.forEach(h),d=N(b),_=w(b,"DIV",{class:!0,style:!0}),P(_).forEach(h),b.forEach(h),this.h()},h(){C(n,"class","cells svelte-10z11uh"),C(l,"class","board-grid svelte-10z11uh"),C(r,"class","board"),C(f,"class","game-status svelte-10z11uh"),C(_,"class","game-status-background svelte-10z11uh"),C(_,"style",V=`background-color: var(--${t[1]?t[1]:"dark-purple"})`),C(e,"class","board-container svelte-10z11uh")},m($,b){O($,e,b),g(e,r),g(r,l),M(s,l,null),g(l,a),g(l,n);for(let y=0;y<E.length;y+=1)E[y]&&E[y].m(n,null);g(l,o),M(u,l,null),g(l,i),g(l,c),M(m,c,null),g(e,v),g(e,f),M(p,f,null),g(e,d),g(e,_),z=!0},p($,[b]){if(b&13){q=Se(Array(7*6));let y;for(y=0;y<q.length;y+=1){const B=Pe($,q,y);E[y]?(E[y].p(B,b),S(E[y],1)):(E[y]=Ne(B),E[y].c(),S(E[y],1),E[y].m(n,null))}for(oe(),y=q.length;y<E.length;y+=1)ne(y);ue()}(!z||b&2&&V!==(V=`background-color: var(--${$[1]?$[1]:"dark-purple"})`))&&C(_,"style",V)},i($){if(!z){S(s.$$.fragment,$);for(let b=0;b<q.length;b+=1)S(E[b]);S(u.$$.fragment,$),S(m.$$.fragment,$),$&&(T||K(()=>{T=x(c,Ve,{delay:1e3}),T.start()})),S(p.$$.fragment,$),$&&(Z||K(()=>{Z=x(_,X,{delay:1e3,y:300}),Z.start()})),z=!0}},o($){I(s.$$.fragment,$),E=E.filter(Boolean);for(let b=0;b<E.length;b+=1)I(E[b]);I(u.$$.fragment,$),I(m.$$.fragment,$),I(p.$$.fragment,$),z=!1},d($){$&&h(e),G(s),Me(E,$),G(u),G(m),G(p)}}}function st(t,e,r){let l,s,a;A(t,Q,i=>r(5,l=i)),A(t,se,i=>r(0,s=i)),A(t,le,i=>r(1,a=i)),pe(()=>{ye()});let n;function o(i){return()=>{clearTimeout(n),l||(n=setTimeout(()=>{He(i)},150))}}function u(i){return()=>{l||Qe({indexColumn:i%7})}}return[s,a,o,u]}class at extends te{constructor(e){super(),re(this,e,st,lt,Y,{})}}function ot(t){let e,r,l="Menu",s,a,n,o,u="Restart",i,c,m,T="PAUSE",v,f,p="Continue game",d,_,V="Restart",Z,z,q="Quit Game",E,ne,$;return a=new ee({props:{class:"logo",name:"logo"}}),{c(){e=k("div"),r=k("button"),r.textContent=l,s=D(),U(a.$$.fragment),n=D(),o=k("button"),o.textContent=u,i=D(),c=k("dialog"),m=k("span"),m.textContent=T,v=D(),f=k("button"),f.textContent=p,d=D(),_=k("button"),_.textContent=V,Z=D(),z=k("button"),z.textContent=q,this.h()},l(b){e=w(b,"DIV",{class:!0});var y=P(e);r=w(y,"BUTTON",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-jmehzd"&&(r.textContent=l),s=N(y),j(a.$$.fragment,y),n=N(y),o=w(y,"BUTTON",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-j25n9j"&&(o.textContent=u),y.forEach(h),i=N(b),c=w(b,"DIALOG",{class:!0});var B=P(c);m=w(B,"SPAN",{"data-svelte-h":!0}),H(m)!=="svelte-16naano"&&(m.textContent=T),v=N(B),f=w(B,"BUTTON",{class:!0,"data-svelte-h":!0}),H(f)!=="svelte-vst0ui"&&(f.textContent=p),d=N(B),_=w(B,"BUTTON",{class:!0,"data-svelte-h":!0}),H(_)!=="svelte-15pdyjx"&&(_.textContent=V),Z=N(B),z=w(B,"BUTTON",{class:!0,"data-svelte-h":!0}),H(z)!=="svelte-1xzbx5t"&&(z.textContent=q),B.forEach(h),this.h()},h(){C(r,"class","flat-button button-purple"),C(o,"class","flat-button button-purple"),C(e,"class","menu svelte-6c595u"),C(f,"class","text-button raised-button button-white"),C(_,"class","text-button raised-button button-white"),C(z,"class","text-button raised-button button-red"),C(c,"class","svelte-6c595u")},m(b,y){O(b,e,y),g(e,r),g(e,s),M(a,e,null),g(e,n),g(e,o),O(b,i,y),O(b,c,y),g(c,m),g(c,v),g(c,f),g(c,d),g(c,_),g(c,Z),g(c,z),t[5](c),E=!0,ne||($=[L(r,"click",t[1]),L(o,"click",t[3]),L(f,"click",t[2]),L(_,"click",t[3]),L(z,"click",t[4])],ne=!0)},p:ae,i(b){E||(S(a.$$.fragment,b),E=!0)},o(b){I(a.$$.fragment,b),E=!1},d(b){b&&(h(e),h(i),h(c)),G(a),t[5](null),ne=!1,Ae($)}}}function ut(t,e,r){let l;A(t,Q,c=>r(6,l=c));let s;const a=()=>{s.showModal(),R(Q,l=!0,l)},n=()=>{s.close(),R(Q,l=!1,l)},o=()=>{ye(),n()},u=()=>{n(),Re(`${We}${qe("/")}`)};function i(c){je[c?"unshift":"push"](()=>{s=c,r(0,s)})}return[s,a,n,o,u,i]}class it extends te{constructor(e){super(),re(this,e,ut,ot,Y,{})}}function ct(t){let e;return{c(){e=F(t[6])},l(r){e=J(r,t[6])},m(r,l){O(r,e,l)},p:ae,d(r){r&&h(e)}}}function ft(t){let e;return{c(){e=F(t[5])},l(r){e=J(r,t[5])},m(r,l){O(r,e,l)},p:ae,d(r){r&&h(e)}}}function dt(t){let e,r,l,s,a,n,o=(t[0]==="red"?t[2]:t[1])+"",u,i,c,m;r=new ee({props:{class:`${!t[3]&&t[0]===t[4].turn?"active":""} icon ${t[0]}`,name:t[0]==="red"?t[7]:t[8]}});function T(p,d){return p[0]==="red"?ft:ct}let v=T(t),f=v(t);return{c(){e=k("div"),U(r.$$.fragment),l=D(),s=k("span"),f.c(),a=D(),n=k("span"),u=F(o),this.h()},l(p){e=w(p,"DIV",{class:!0});var d=P(e);j(r.$$.fragment,d),l=N(d),s=w(d,"SPAN",{class:!0});var _=P(s);f.l(_),_.forEach(h),a=N(d),n=w(d,"SPAN",{class:!0});var V=P(n);u=J(V,o),V.forEach(h),d.forEach(h),this.h()},h(){C(s,"class","svelte-1gtaefu"),C(n,"class","svelte-1gtaefu"),C(e,"class",i=ie(`score-board ${t[0]}`)+" svelte-1gtaefu")},m(p,d){O(p,e,d),M(r,e,null),g(e,l),g(e,s),f.m(s,null),g(e,a),g(e,n),g(n,u),m=!0},p(p,[d]){t=p;const _={};d&25&&(_.class=`${!t[3]&&t[0]===t[4].turn?"active":""} icon ${t[0]}`),d&1&&(_.name=t[0]==="red"?t[7]:t[8]),r.$set(_),v===(v=T(t))&&f?f.p(t,d):(f.d(1),f=v(t),f&&(f.c(),f.m(s,null))),(!m||d&7)&&o!==(o=(t[0]==="red"?t[2]:t[1])+"")&&fe(u,o),(!m||d&1&&i!==(i=ie(`score-board ${t[0]}`)+" svelte-1gtaefu"))&&C(e,"class",i)},i(p){m||(S(r.$$.fragment,p),p&&(c||K(()=>{c=x(e,X,{x:300*(t[0]==="red"?-1:1),delay:1e3}),c.start()})),m=!0)},o(p){I(r.$$.fragment,p),m=!1},d(p){p&&h(e),G(r),f.d()}}}function mt(t,e,r){let l,s,a,n,o,u;A(t,me,f=>r(1,l=f)),A(t,de,f=>r(2,s=f)),A(t,le,f=>r(9,a=f)),A(t,Le,f=>r(10,n=f)),A(t,Q,f=>r(3,o=f)),A(t,se,f=>r(4,u=f));let{player:i}=e;const c=n.params.mode==="vs-player"?"player 1":"you",m=n.params.mode==="vs-player"?"player 2":"cpu",T=n.params.mode==="vs-player"?"player-one":"you",v=n.params.mode==="vs-player"?"player-two":"cpu";return t.$$set=f=>{"player"in f&&r(0,i=f.player)},t.$$.update=()=>{t.$$.dirty&519&&a===i&&(i==="red"?R(de,s+=1,s):R(me,l+=1,l))},[i,l,s,o,u,c,m,T,v,a]}class Be extends te{constructor(e){super(),re(this,e,mt,dt,Y,{player:0})}}function pt(t){let e,r,l,s,a,n,o,u,i;return r=new it({}),s=new Be({props:{player:"red"}}),n=new Be({props:{player:"yellow"}}),u=new at({}),{c(){e=k("main"),U(r.$$.fragment),l=D(),U(s.$$.fragment),a=D(),U(n.$$.fragment),o=D(),U(u.$$.fragment),this.h()},l(c){e=w(c,"MAIN",{class:!0});var m=P(e);j(r.$$.fragment,m),l=N(m),j(s.$$.fragment,m),a=N(m),j(n.$$.fragment,m),o=N(m),j(u.$$.fragment,m),m.forEach(h),this.h()},h(){C(e,"class","svelte-q24hre")},m(c,m){O(c,e,m),M(r,e,null),g(e,l),M(s,e,null),g(e,a),M(n,e,null),g(e,o),M(u,e,null),i=!0},p:ae,i(c){i||(S(r.$$.fragment,c),S(s.$$.fragment,c),S(n.$$.fragment,c),S(u.$$.fragment,c),i=!0)},o(c){I(r.$$.fragment,c),I(s.$$.fragment,c),I(n.$$.fragment,c),I(u.$$.fragment,c),i=!1},d(c){c&&h(e),G(r),G(s),G(n),G(u)}}}function gt(t,e,r){let l,s;return A(t,me,a=>r(0,l=a)),A(t,de,a=>r(1,s=a)),pe(()=>{R(de,s=0,s),R(me,l=0,l)}),[]}class kt extends te{constructor(e){super(),re(this,e,gt,pt,Y,{})}}export{kt as component};
