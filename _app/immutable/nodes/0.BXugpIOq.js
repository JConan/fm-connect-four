import{s as g,b as z,c as v,k as E,u as I,l as O,m as V,n as W}from"../chunks/scheduler.AzDCfVhA.js";import{S as B,i as L,e as S,c as j,a as q,d as _,n as m,g as C,v as M,q as c,x as P,p,B as T,C as A,z as F}from"../chunks/index.B8-DSJg-.js";import{n as G,p as H}from"../chunks/stores.EmVDweYT.js";import{f as h}from"../chunks/index.CD0jvZvz.js";const J=!0;function K({url:r}){return{url:r.pathname}}const Z=Object.freeze(Object.defineProperty({__proto__:null,load:K,prerender:J},Symbol.toStringTag,{value:"Module"}));function w(r){let l,s,n,t;const u=r[7].default,a=E(u,r,r[6],null);return{c(){l=S("div"),a&&a.c()},l(e){l=j(e,"DIV",{});var o=q(l);a&&a.l(o),o.forEach(_)},m(e,o){C(e,l,o),a&&a.m(l,null),t=!0},p(e,o){r=e,a&&a.p&&(!t||o&64)&&I(a,u,r,r[6],t?V(u,r[6],o,null):O(r[6]),null)},i(e){t||(p(a,e),e&&z(()=>{t&&(n&&n.end(1),s=T(l,h,{...r[4][r[2]][0],duration:600,delay:600}),s.start())}),t=!0)},o(e){c(a,e),s&&s.invalidate(),e&&(n=A(l,h,{...r[4][r[2]][1],duration:600})),t=!1},d(e){e&&_(l),a&&a.d(e),e&&n&&n.end()}}}function N(r){let l,s=r[0].url,n,t,u,a;z(r[8]);let e=w(r);return{c(){l=S("div"),e.c(),this.h()},l(o){l=j(o,"DIV",{class:!0,style:!0});var d=q(l);e.l(d),d.forEach(_),this.h()},h(){m(l,"class","container svelte-174mn3j"),m(l,"style",n=`background-color: ${r[1]>=640&&r[3].route.id==="/"?"var(--dark-purple)":"var(--purple)"}`)},m(o,d){C(o,l,d),e.m(l,null),t=!0,u||(a=M(window,"resize",r[8]),u=!0)},p(o,[d]){d&1&&g(s,s=o[0].url)?(F(),c(e,1,1,W),P(),e=w(o),e.c(),p(e,1),e.m(l,null)):e.p(o,d),(!t||d&10&&n!==(n=`background-color: ${o[1]>=640&&o[3].route.id==="/"?"var(--dark-purple)":"var(--purple)"}`))&&m(l,"style",n)},i(o){t||(p(e),t=!0)},o(o){c(e),t=!1},d(o){o&&_(l),e.d(o),u=!1,a()}}}let f=500;function Q(r,l,s){let n,t,u;v(r,G,i=>s(5,t=i)),v(r,H,i=>s(3,u=i));let{$$slots:a={},$$scope:e}=l,{data:o}=l,d={"to:rule":[{y:f},{y:-f}],"to:game":[{y:-f},{y:f}],"from:rule":[{y:-f},{y:f}],"from:game":[{y:f},{y:-f}],fallback:[{},{}]},y;function D(){s(1,y=window.innerWidth)}return r.$$set=i=>{"data"in i&&s(0,o=i.data),"$$scope"in i&&s(6,e=i.$$scope)},r.$$.update=()=>{var i,b,k;r.$$.dirty&32&&s(2,n=t?((i=t==null?void 0:t.from)==null?void 0:i.route.id)==="/"?((b=t==null?void 0:t.to)==null?void 0:b.route.id)==="/rule"?"to:rule":"to:game":((k=t==null?void 0:t.from)==null?void 0:k.route.id)==="/rule"?"from:rule":"from:game":"fallback")},[o,y,n,u,d,t,e,a,D]}class $ extends B{constructor(l){super(),L(this,l,Q,N,g,{data:0})}}export{$ as component,Z as universal};