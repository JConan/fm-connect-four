import{d as c}from"./scheduler.CfH2YMek.js";function _(n){const t=n-1;return t*t*t+1}function U(n,{delay:t=0,duration:a=400,easing:e=_,x:i=0,y:f=0,opacity:u=0}={}){const o=getComputedStyle(n),s=+o.opacity,y=o.transform==="none"?"":o.transform,l=s*(1-u),[m,p]=c(i),[$,d]=c(f);return{delay:t,duration:a,easing:e,css:(r,x)=>`
			transform: ${y} translate(${(1-r)*m}${p}, ${(1-r)*$}${d});
			opacity: ${s-l*x}`}}export{U as f};
