function k(){}const S=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function v(){return Object.create(null)}function j(t){t.forEach(E)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function C(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function D(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(q(n,e))}function U(t,n,e,r){if(t){const o=m(t,n,e,r);return t[0](o)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let u=0;u<_;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=m(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function L(t){return t??""}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function y(){if(!f)throw new Error("Function called outside component initialization");return f}function Q(t){y().$$.on_mount.push(t)}function R(t){y().$$.after_update.push(t)}const i=[],g=[];let s=[];const b=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(F))}function T(){return O(),x}function z(t){s.push(t)}const h=new Set;let c=0;function F(){if(c!==0)return;const t=f;do{try{for(;c<i.length;){const n=i[c];c++,d(n),M(n.$$)}}catch(n){throw i.length=0,c=0,n}for(d(null),i.length=0,c=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(i.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function V(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{d as A,E as B,i as C,O as D,L as E,q as a,N as b,P as c,S as d,z as e,w as f,C as g,K as h,A as i,J as j,R as k,g as l,U as m,k as n,Q as o,I as p,G as q,j as r,B as s,T as t,H as u,v,F as w,D as x,V as y,f as z};
