import{c,W as z,K as V,h as f,E as Q,g as I}from"./index.2a99c17d.js";const U={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function T(e,t=U){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const W=e=>z(V(e)),oe=e=>z(e);function G(e,t){return e!==void 0&&e()||t}function ue(e,t){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return t}function R(e,t){return e!==void 0?t.concat(e()):t}function le(e,t,a,n,l,u){t.key=n+l;const i=f(e,t,a);return l===!0?Q(i,u()):i}const P="0 0 24 24",w=e=>e,S=e=>`ionicons ${e}`,M={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},D={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},J=new RegExp("^("+Object.keys(M).join("|")+")"),N=new RegExp("^("+Object.keys(D).join("|")+")"),C=new RegExp("^("+Object.keys(q).join("|")+")"),X=/^[Mm]\s?[-+]?\.?\d/,Y=/^img:/,Z=/^svguse:/,ee=/^ion-/,te=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ce=W({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=I(),n=T(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let i,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(X.test(r)===!0){const[s,h=P]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(b=>{const[$,x,k]=b.split("@@");return f("path",{style:x,d:$,transform:k})})}}if(Y.test(r)===!0)return{img:!0,src:r.substring(4)};if(Z.test(r)===!0){const[s,h=P]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const d=r.match(J);if(d!==null)i=M[d[1]](r);else if(te.test(r)===!0)i=r;else if(ee.test(r)===!0)i=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(C.test(r)===!0){i="notranslate material-symbols";const s=r.match(C);s!==null&&(r=r.substring(6),i+=q[s[1]]),y=r}else{i="notranslate material-icons";const s=r.match(N);s!==null&&(r=r.substring(2),i+=D[s[1]]),y=r}return{cls:i,content:y}});return()=>{const i={class:l.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?f(e.tag,i,G(t.default)):u.value.img===!0?f("span",i,R(t.default,[f("img",{src:u.value.src})])):u.value.svg===!0?f("span",i,R(t.default,[f("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?f("span",i,R(t.default,[f("svg",{viewBox:u.value.viewBox},[f("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(i.class+=" "+u.value.cls),f(e.tag,i,R(t.default,[u.value.content])))}}});function ne(e){return e.appContext.config.globalProperties.$router!==void 0}function fe(e){return e.isUnmounted===!0||e.isDeactivated===!0}function L(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function re(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((u,i)=>u!==l[i]))return!1}return!0}function j(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function se(e,t){return Array.isArray(e)===!0?j(e,t):Array.isArray(t)===!0?j(t,e):e===t}function ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(se(e[a],t[a])===!1)return!1;return!0}const ve={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function de({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=I(),{props:n,proxy:l,emit:u}=a,i=ne(a),r=c(()=>n.disable!==!0&&n.href!==void 0),y=t===!0?c(()=>i===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>i===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=c(()=>y.value===!0?E(n.to):null),s=c(()=>d.value!==null),h=c(()=>r.value===!0||s.value===!0),b=c(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=c(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:d.value.href,target:n.target}:{}),x=c(()=>{if(s.value===!1)return-1;const{matched:o}=d.value,{length:v}=o,g=o[v-1];if(g===void 0)return-1;const m=l.$route.matched;if(m.length===0)return-1;const p=m.findIndex(_.bind(null,g));if(p>-1)return p;const O=L(o[v-2]);return v>1&&L(g)===O&&m[m.length-1].path!==O?m.findIndex(_.bind(null,o[v-2])):p}),k=c(()=>s.value===!0&&x.value!==-1&&re(l.$route.params,d.value.params)),A=c(()=>k.value===!0&&x.value===l.$route.matched.length-1&&ie(l.$route.params,d.value.params)),K=c(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(o){try{return l.$router.resolve(o)}catch{}return null}function B(o,{returnRouterError:v,to:g=n.to,replace:m=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const p=l.$router[m===!0?"replace":"push"](g);return v===!0?p:p.then(()=>{}).catch(()=>{})}function F(o){if(s.value===!0){const v=g=>B(o,g);u("click",o,v),o.defaultPrevented!==!0&&v()}else u("click",o)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:b,resolvedLink:d,linkIsActive:k,linkIsExactActive:A,linkClass:K,linkAttrs:$,getLink:E,navigateToRouterLink:B,navigateOnClick:F}}export{ce as Q,ue as a,fe as b,W as c,oe as d,le as e,R as f,H as g,G as h,ve as i,T as j,de as k,U as u,ne as v};
