const D={"/":"/","/game/[mode]":t=>`/game/${t.mode}`,"/rule":"/rule"},p={},F={},I={},l={...D,...F,...p,...I};[...new Set(Object.keys(l).map(t=>{var i;return((i=/^\/.*|[^ ]?\/.*$/.exec(t))==null?void 0:i[0])??t}))];function H(t,...i){if(l[t]instanceof Function){const e=l[t];return e(...i)}else return l[t]}function f(t){const i=/(\d+)(\D*)/,[,e="0",n=""]=t.match(i)||[];return{number:parseInt(e,10),unit:n}}function A(t,i){const{width:e,height:n}=t;if("width"in i){const{width:s}=i;return{width:s,height:s/e*n}}const{height:u}=i;return{width:u/n*e,height:u}}function N(t,i){const e=t.getAttribute("width"),n=t.getAttribute("height");if(e&&n)return{width:e,height:n};const u={width:e||"",height:n||""},s=i.getAttribute("width"),c=i.getAttribute("height"),r=i.getAttribute("viewBox");if(!(s&&c||r))return u;let h=0,o=0,m="",w="";if(s&&c?({number:h,unit:m}=f(s),{number:o,unit:w}=f(c)):r&&([,,h,o]=r.split(" ").map(g=>parseInt(g,10))),m!==w)return{width:e||s||"",height:n||c||""};if(e){const{number:g,unit:b}=f(e),a=A({width:h,height:o},{width:g}),d=b||m;return{width:a.width.toFixed(2)+d,height:a.height.toFixed(2)+d}}if(n){const{number:g,unit:b}=f(n),a=A({width:h,height:o},{height:g}),d=b||w;return{width:a.width.toFixed(2)+d,height:a.height.toFixed(2)+d}}return{width:h+m,height:o+w}}function v(t,i){let e=x(i);async function n(){if(e.src){const u=await fetch(e.src,{cache:e.cache}),s=e.transform(await u.text()),c=new DOMParser().parseFromString(s,"image/svg+xml").documentElement;for(let r=0;r<c.attributes.length;r++){const h=c.attributes[r];!t.hasAttribute(h.name)&&!["width","height"].includes(h.name)&&t.setAttribute(h.name,h.value)}if(e.autoDimensions){const r=N(t,c);t.setAttribute("width",r.width),t.setAttribute("height",r.height)}else t.setAttribute("width",t.getAttribute("width")||""),t.setAttribute("height",t.getAttribute("height")||"");t.innerHTML=c.innerHTML}}return n(),{update(u){e=x(u),n()}}}const S={src:"",cache:"no-cache",autoDimensions:!0,transform:t=>t};function x(t=""){return typeof t=="string"?{...S,src:t}:{...S,...t}}export{v as i,H as r};