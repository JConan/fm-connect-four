var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>Y(t,typeof e!="symbol"?e+"":e,n);import{n as x,r as w,i as D,e as A,d as L,v as I,w as Z,x as tt,y as et,z as nt,A as T,B as it,C as rt,D as st}from"./scheduler.Bf1hPX8E.js";const M=typeof window<"u";let q=M?()=>window.performance.now():()=>Date.now(),P=M?t=>requestAnimationFrame(t):x;const g=new Set;function H(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&P(H)}function F(t){let e;return g.size===0&&P(H),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function lt(){O=!0}function at(){O=!1}function ct(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:ct(1,r,_=>e[n[_]].claim_order,a))-1;i[l]=n[u]+1;const o=u+1;n[o]=l,r=Math.max(o,r)}const c=[],s=[];let f=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);f>=l;f--)s.push(e[f]);f--}for(;f>=0;f--)s.push(e[f]);c.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<c.length&&s[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(s[l],u)}}function ot(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ut(t){const e=W("style");return e.textContent="/* empty */",_t(U(t),e),e.sheet}function _t(t,e){return ot(t.head||t,e),e.sheet}function dt(t,e){if(O){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){O&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function Bt(){return R(" ")}function Pt(){return R("")}function Rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const ht=["width","height"];function zt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&ht.indexOf(i)===-1?t[i]=e[i]:mt(t,i,e[i])}function It(t){return t.dataset.svelteH}function pt(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function G(t,e,n,i,r=!1){yt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const f=t[s];if(e(f)){const l=n(f);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),f}}for(let s=t.claim_info.last_index-1;s>=0;s--){const f=t[s];if(e(f)){const l=n(f);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,f}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function $t(t,e,n,i){return G(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const f=r.attributes[s];n[f.name]||c.push(f.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Tt(t,e,n){return $t(t,e,n,W)}function gt(t,e){return G(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Lt(t){return gt(t," ")}function Mt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ht(t,e){return new t(e)}const E=new Map;let C=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function wt(t,e){const n={stylesheet:ut(e),rules:{}};return E.set(t,n),n}function J(t,e,n,i,r,c,s,f=0){const l=16.666/i;let a=`{
`;for(let y=0;y<=1;y+=l){const p=e+(n-e)*c(y);a+=y*100+`%{${s(p,1-p)}}
`}const u=a+`100% {${s(n,1-n)}}
}`,o=`__svelte_${vt(u)}_${f}`,_=U(t),{stylesheet:d,rules:m}=E.get(_)||wt(_,t);m[o]||(m[o]=!0,d.insertRule(`@keyframes ${o} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${o} ${i}ms linear ${r}ms 1 both`,C+=1,o}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),C-=r,C||Nt())}function Nt(){P(()=>{C||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&V(e)}),E.clear())})}let v;function K(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function S(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const b=new Set;let $;function Ft(){$={r:0,c:[],p:$}}function Ut(){$.r||w($.c),$=$.p}function bt(t,e){t&&t.i&&(b.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(b.has(t))return;b.add(t),$.c.push(()=>{b.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Q={duration:0};function Wt(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,f,l=0;function a(){s&&B(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=L,tick:h=x,css:y}=r||Q;y&&(s=J(t,0,1,d,_,m,y,l++)),h(0,1);const p=q()+_,N=p+d;f&&f.abort(),c=!0,A(()=>S(t,!0,"start")),f=F(j=>{if(c){if(j>=N)return h(1,0),S(t,!0,"end"),a(),c=!1;if(j>=p){const z=m((j-p)/d);h(z,1-z)}}return c})}let o=!1;return{start(){o||(o=!0,B(t),D(r)?(r=r(i),K().then(u)):u())},invalidate(){o=!1},end(){c&&(a(),c=!1)}}}function Gt(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const f=$;f.r+=1;let l;function a(){const{delay:u=0,duration:o=300,easing:_=L,tick:d=x,css:m}=r||Q;m&&(s=J(t,1,0,o,u,_,m));const h=q()+u,y=h+o;A(()=>S(t,!1,"start")),"inert"in t&&(l=t.inert,t.inert=!0),F(p=>{if(c){if(p>=y)return d(0,1),S(t,!1,"end"),--f.r||w(f.c),!1;if(p>=h){const N=_((p-h)/o);d(1-N,N)}}return c})}return D(r)?K().then(()=>{r=r(i),a()}):a(),{end(u){u&&"inert"in t&&(t.inert=l),u&&r.tick&&r.tick(1,0),c&&(s&&B(t,s),c=!1)}}}function Jt(t){t&&t.c()}function Kt(t,e){t&&t.l(e)}function At(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),A(()=>{const c=t.$$.on_mount.map(it).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),r.forEach(A)}function Et(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ct(t,e){t.$$.dirty[0]===-1&&(rt.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,n,i,r,c,s=null,f=[-1]){const l=nt;T(t);const a=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:I(),dirty:f,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(o,_,...d)=>{const m=d.length?d[0]:_;return a.ctx&&r(a.ctx[o],a.ctx[o]=m)&&(!a.skip_bound&&a.bound[o]&&a.bound[o](m),u&&Ct(t,o)),_}):[],a.update(),u=!0,w(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){lt();const o=pt(e.target);a.fragment&&a.fragment.l(o),o.forEach(V)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),At(t,e.target,e.anchor),at(),Z()}T(l)}class Xt{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){Et(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);export{Ht as A,Wt as B,Gt as C,kt as D,Xt as S,pt as a,gt as b,Tt as c,V as d,W as e,Lt as f,jt as g,dt as h,Qt as i,Mt as j,Jt as k,Kt as l,It as m,mt as n,At as o,bt as p,Vt as q,Et as r,Bt as s,R as t,zt as u,Rt as v,Pt as w,Ut as x,qt as y,Ft as z};
