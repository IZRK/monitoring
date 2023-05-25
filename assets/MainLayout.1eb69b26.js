import{bs as E,U as c,ad as x,bt as Y,k as z,bu as Pe,at as U,ap as X,bv as ye,am as te,aa as Z,bw as be,ag as Ce,bx as P,aZ as w,by as Ke,bz as ae,bA as Ge,bB as I,bC as Je,bD as G,bE as de,bF as Te,bG as ce,bH as pe,bI as fe,bJ as et,bK as tt,bL as at,bM as nt,bN as it,bO as lt,bP as ot,bQ as rt,b4 as ut,bR as ke,bS as st,aB as Ee,bT as dt,bU as ct,bV as ft,bW as vt,bX as ve,r as J,ax as ht,bY as mt,bZ as bt,a5 as pt,aH as gt,az as yt,V as Ct,b2 as V,a3 as O,b_ as wt,a2 as Le,Y as T}from"./index.80497af1.js";import{c as qt,Q as xt}from"./selection.b90bd396.js";var St=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const n=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:n.value},Y(l.default))}}),zt=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const n=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:n.value,role:"toolbar"},Y(l.default))}});function Tt(){const e=z(!Pe.value);return e.value===!1&&U(()=>{e.value=!0}),e}const De=typeof ResizeObserver!="undefined",_e=De===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ge=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,r,t={width:-1,height:-1};function a(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:d,offsetHeight:u}=r;(d!==t.width||u!==t.height)&&(t={width:d,height:u},l("resize",t))}}const{proxy:h}=Z();if(De===!0){let d;const u=o=>{r=h.$el.parentNode,r?(d=new ResizeObserver(a),d.observe(r),s()):o!==!0&&te(()=>{u(!0)})};return U(()=>{u()}),X(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():r&&d.unobserve(r))}),ye}else{let o=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,be.passive),u=void 0)},C=function(){o(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",a,be.passive),s())};const d=Tt();let u;return U(()=>{te(()=>{r=h.$el,r&&C()})}),X(o),h.trigger=a,()=>{if(d.value===!0)return x("object",{style:_e.style,tabindex:-1,type:"text/html",data:_e.url,"aria-hidden":"true",onLoad:C})}}}}),kt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:r}}=Z(),t=Ce(ae,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=z(parseInt(e.heightHint,10)),s=z(!0),h=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),d=c(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?a.value:0;const f=a.value-t.scroll.value.position;return f>0?f:0}),u=c(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),o=c(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),C=c(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=c(()=>{const f=t.rows.value.top,k={};return f[0]==="l"&&t.left.space===!0&&(k[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(k[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function v(f,k){t.update("header",f,k)}function m(f,k){f.value!==k&&(f.value=k)}function M({height:f}){m(a,f),v("size",f)}function S(f){o.value===!0&&m(s,!0),n("focusin",f)}w(()=>e.modelValue,f=>{v("space",f),m(s,!0),t.animate()}),w(d,f=>{v("offset",f)}),w(()=>e.reveal,f=>{f===!1&&m(s,e.modelValue)}),w(s,f=>{t.animate(),n("reveal",f)}),w(t.scroll,f=>{e.reveal===!0&&m(s,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",d.value),X(()=>{t.instances.header===g&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const f=Ke(l.default,[]);return e.elevated===!0&&f.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(x(ge,{debounce:0,onResize:M})),x("header",{class:C.value,style:y.value,onFocusin:S},f)}}}),Lt=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=c(()=>parseInt(e.lines,10)),r=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=c(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>x("div",{style:t.value,class:r.value},Y(l.default))}});const we={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_t=Object.keys(we);we.all=!0;function Me(e){const l={};for(const n of _t)e[n]===!0&&(l[n]=!0);return Object.keys(l).length===0?we:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}function Be(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function he(e,l,n){const r=pe(e);let t,a=r.left-l.event.x,s=r.top-l.event.y,h=Math.abs(a),d=Math.abs(s);const u=l.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",h>d&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",h>d&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",h<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",h<d&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let o=!1;if(t===void 0&&n===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,o=!0,t==="left"||t==="right"?(r.left-=a,h=0,a=0):(r.top-=s,d=0,s=0)}return{synthetic:o,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:r,direction:t,isFirst:l.event.isFirst,isFinal:n===!0,duration:Date.now()-l.event.time,distance:{x:h,y:d},offset:{x:a,y:s},delta:{x:r.left-l.event.lastX,y:r.top-l.event.lastY}}}}let Mt=0;var me=Ge({name:"touch-pan",beforeMount(e,{value:l,modifiers:n}){if(n.mouse!==!0&&I.has.touch!==!0)return;function r(a,s){n.mouse===!0&&s===!0?et(a):(n.stop===!0&&ce(a),n.prevent===!0&&Te(a))}const t={uid:"qvtp_"+Mt++,handler:l,modifiers:n,direction:Me(n),noop:ye,mouseStart(a){Be(a,t)&&Je(a)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Be(a,t)){const s=a.target;G(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(I.is.firefox===!0&&de(e,!0),t.lastEvt=a,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Te(u),a.cancelBubble===!0&&ce(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}ce(a)}const{left:h,top:d}=pe(a);t.event={x:h,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:d}},move(a){if(t.event===void 0)return;const s=pe(a),h=s.left-t.event.x,d=s.top-t.event.y;if(h===0&&d===0)return;t.lastEvt=a;const u=t.event.mouse===!0,o=()=>{r(a,u);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),u===!0){const M=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{M(),m()},50):M()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:v,synthetic:m}=he(a,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(a);return}const C=Math.abs(h),y=Math.abs(d);C!==y&&(t.direction.horizontal===!0&&C>y||t.direction.vertical===!0&&C<y||t.direction.up===!0&&C<y&&d<0||t.direction.down===!0&&C<y&&d>0||t.direction.left===!0&&C>y&&h<0||t.direction.right===!0&&C>y&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(fe(t,"temp"),I.is.firefox===!0&&de(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(he(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=he(a===void 0?t.lastEvt:a,t,!0),d=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";G(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const n=e.__qtouchpan;n!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&n.end(),n.handler=l.value),n.direction=Me(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),fe(l,"main"),fe(l,"temp"),I.is.firefox===!0&&de(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function ee(e,l,n){return n<=l?l:Math.min(n,Math.max(l,e))}const $e=150;var Bt=E({name:"QDrawer",inheritAttrs:!1,props:{...tt,...at,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(e,{slots:l,emit:n,attrs:r}){const t=Z(),{proxy:{$q:a}}=t,s=it(e,a),{preventBodyScroll:h}=st(),{registerTimeout:d,removeTimeout:u}=lt(),o=Ce(ae,P);if(o===P)return console.error("QDrawer needs to be child of QLayout"),P;let C,y=null,v;const m=z(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),M=c(()=>e.mini===!0&&m.value!==!0),S=c(()=>M.value===!0?e.miniWidth:e.width),g=z(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),f=c(()=>e.persistent!==!0&&(m.value===!0||Qe.value===!0));function k(i,b){if(H(),i!==!1&&o.animate(),B(0),m.value===!0){const L=o.instances[j.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),D(1),o.isContainer.value!==!0&&h(!0)}else D(0),i!==!1&&re(!1);d(()=>{i!==!1&&re(!0),b!==!0&&n("show",i)},$e)}function p(i,b){N(),i!==!1&&o.animate(),D(0),B(F.value*S.value),ue(),b!==!0?d(()=>{n("hide",i)},$e):u()}const{show:q,hide:_}=ot({showing:g,hideOnRouteChange:f,handleShow:k,handleHide:p}),{addToHistory:H,removeFromHistory:N}=rt(g,_,f),R={belowBreakpoint:m,hide:_},$=c(()=>e.side==="right"),F=c(()=>(a.lang.rtl===!0?-1:1)*($.value===!0?1:-1)),qe=z(0),W=z(!1),ne=z(!1),xe=z(S.value*F.value),j=c(()=>$.value===!0?"left":"right"),ie=c(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),le=c(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf($.value?"R":"L")>-1||a.platform.is.ios===!0&&o.isContainer.value===!0),A=c(()=>e.overlay===!1&&g.value===!0&&m.value===!1),Qe=c(()=>e.overlay===!0&&g.value===!0&&m.value===!1),Ve=c(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&W.value===!1?" hidden":"")),He=c(()=>({backgroundColor:`rgba(0,0,0,${qe.value*.4})`})),Se=c(()=>$.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Re=c(()=>$.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Fe=c(()=>{const i={};return o.header.space===!0&&Se.value===!1&&(le.value===!0?i.top=`${o.header.offset}px`:o.header.space===!0&&(i.top=`${o.header.size}px`)),o.footer.space===!0&&Re.value===!1&&(le.value===!0?i.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(i.bottom=`${o.footer.size}px`)),i}),We=c(()=>{const i={width:`${S.value}px`,transform:`translateX(${xe.value}px)`};return m.value===!0?i:Object.assign(i,Fe.value)}),Ze=c(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=c(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${M.value===!0?"mini":"standard"}`+(le.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Se.value===!0?" q-drawer--top-padding":""))),Ae=c(()=>{const i=a.lang.rtl===!0?e.side:j.value;return[[me,Ye,void 0,{[i]:!0,mouse:!0}]]}),Ie=c(()=>{const i=a.lang.rtl===!0?j.value:e.side;return[[me,ze,void 0,{[i]:!0,mouse:!0}]]}),Ue=c(()=>{const i=a.lang.rtl===!0?j.value:e.side;return[[me,ze,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){je(m,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}w(m,i=>{i===!0?(C=g.value,g.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(g.value===!0?(B(0),D(0),ue()):q(!1))}),w(()=>e.side,(i,b)=>{o.instances[b]===R&&(o.instances[b]=void 0,o[b].space=!1,o[b].offset=0),o.instances[i]=R,o[i].size=S.value,o[i].space=A.value,o[i].offset=ie.value}),w(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),w(()=>e.behavior+e.breakpoint,oe),w(o.isContainer,i=>{g.value===!0&&h(i!==!0),i===!0&&oe()}),w(o.scrollbarWidth,()=>{B(g.value===!0?0:void 0)}),w(ie,i=>{Q("offset",i)}),w(A,i=>{n("onLayout",i),Q("space",i)}),w($,()=>{B()}),w(S,i=>{B(),se(e.miniToOverlay,i)}),w(()=>e.miniToOverlay,i=>{se(i,S.value)}),w(()=>a.lang.rtl,()=>{B()}),w(()=>e.mini,()=>{e.modelValue===!0&&(Xe(),o.animate())}),w(M,i=>{n("miniState",i)});function B(i){i===void 0?te(()=>{i=g.value===!0?0:S.value,B(F.value*i)}):(o.isContainer.value===!0&&$.value===!0&&(m.value===!0||Math.abs(i)===S.value)&&(i+=F.value*o.scrollbarWidth.value),xe.value=i)}function D(i){qe.value=i}function re(i){const b=i===!0?"remove":o.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function Xe(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,y=setTimeout(()=>{y=null,ne.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ye(i){if(g.value!==!1)return;const b=S.value,L=ee(i.distance.x,0,b);if(i.isFinal===!0){L>=Math.min(75,b)===!0?q():(o.animate(),D(0),B(F.value*b)),W.value=!1;return}B((a.lang.rtl===!0?$.value!==!0:$.value)?Math.max(b-L,0):Math.min(0,L-b)),D(ee(L/b,0,1)),i.isFirst===!0&&(W.value=!0)}function ze(i){if(g.value!==!0)return;const b=S.value,L=i.direction===e.side,K=(a.lang.rtl===!0?L!==!0:L)?ee(i.distance.x,0,b):0;if(i.isFinal===!0){Math.abs(K)<Math.min(75,b)===!0?(o.animate(),D(1),B(0)):_(),W.value=!1;return}B(F.value*K),D(ee(1-K/b,0,1)),i.isFirst===!0&&(W.value=!0)}function ue(){h(!1),re(!0)}function Q(i,b){o.update(e.side,i,b)}function je(i,b){i.value!==b&&(i.value=b)}function se(i,b){Q("size",i===!0?e.miniWidth:b)}return o.instances[e.side]=R,se(e.miniToOverlay,S.value),Q("space",A.value),Q("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("onLayout",A.value),n("miniState",M.value),C=e.showIfAbove===!0;const i=()=>{(g.value===!0?k:p)(!1,!0)};if(o.totalWidth.value!==0){te(i);return}v=w(o.totalWidth,()=>{v(),v=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?q(!1):i()})}),X(()=>{v!==void 0&&v(),y!==null&&(clearTimeout(y),y=null),g.value===!0&&ue(),o.instances[e.side]===R&&(o.instances[e.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const i=[];m.value===!0&&(e.noSwipeOpen===!1&&i.push(ut(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ae.value)),i.push(ke("div",{ref:"backdrop",class:Ve.value,style:He.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Ue.value)));const b=M.value===!0&&l.mini!==void 0,L=[x("div",{...r,key:""+b,class:[Ze.value,r.class]},b===!0?l.mini():Y(l.default))];return e.elevated===!0&&g.value===!0&&L.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(ke("aside",{ref:"content",class:Ne.value,style:We.value},L,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ie.value)),x("div",{class:"q-drawer-container"},i)}}}),$t=E({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=Z(),r=Ce(ae,P);if(r===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ee(dt,!0);const t=c(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>x("div",{class:"q-page-container",style:t.value},Y(l.default))}});const{passive:Oe}=be,Ot=["both","horizontal","vertical"];var Pt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ot.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;w(()=>e.scrollTarget,()=>{d(),h()});function s(){r!==null&&r();const C=Math.max(0,ft(t)),y=vt(t),v={top:C-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:C,left:y},n.directionChanged=n.direction!==m,n.delta=v,n.directionChanged===!0&&(n.direction=m,n.inflectionPoint=n.position),l("scroll",{...n})}function h(){t=ct(a,e.scrollTarget),t.addEventListener("scroll",u,Oe),u(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",u,Oe),t=void 0)}function u(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[y,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{v(y),r=null}}}const{proxy:o}=Z();return w(()=>o.$q.lang.rtl,s),U(()=>{a=o.$el.parentNode,h()}),X(()=>{r!==null&&r(),d()}),Object.assign(o,{trigger:u,getPosition:()=>n}),ye}}),Et=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:r}}=Z(),t=z(null),a=z(r.screen.height),s=z(e.container===!0?0:r.screen.width),h=z({position:0,direction:"down",inflectionPoint:0}),d=z(0),u=z(Pe.value===!0?0:ve()),o=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=c(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),y=c(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=c(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function m(p){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:p.position.top,direction:p.direction,directionChanged:p.directionChanged,inflectionPoint:p.inflectionPoint.top,delta:p.delta.top};h.value=q,e.onScroll!==void 0&&n("scroll",q)}}function M(p){const{height:q,width:_}=p;let H=!1;a.value!==q&&(H=!0,a.value=q,e.onScrollHeight!==void 0&&n("scrollHeight",q),g()),s.value!==_&&(H=!0,s.value=_),H===!0&&e.onResize!==void 0&&n("resize",p)}function S({height:p}){d.value!==p&&(d.value=p,g())}function g(){if(e.container===!0){const p=a.value>d.value?ve():0;u.value!==p&&(u.value=p)}}let f=null;const k={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:a,containerHeight:d,scrollbarWidth:u,totalWidth:c(()=>s.value+u.value),rows:c(()=>{const p=e.view.toLowerCase().split(" ");return{top:p[0].split(""),middle:p[1].split(""),bottom:p[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:h,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(p,q,_){k[p][q]=_}};if(Ee(ae,k),ve()>0){let _=function(){p=null,q.classList.remove("hide-scrollbar")},H=function(){if(p===null){if(q.scrollHeight>r.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(p);p=setTimeout(_,300)},N=function(R){p!==null&&R==="remove"&&(clearTimeout(p),_()),window[`${R}EventListener`]("resize",H)},p=null;const q=document.body;w(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),ht(()=>{N("remove")})}return()=>{const p=mt(l.default,[x(Pt,{onScroll:m}),x(ge,{onResize:M})]),q=x("div",{class:o.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},p);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(ge,{onResize:S}),x("div",{class:"absolute-full",style:y.value},[x("div",{class:"scroll",style:v.value},[q])])]):q}}});const Dt=pt({name:"MainLayout",setup(){const e=z(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),Qt=T("svg",{class:"logo",viewBox:"0 0 94 94",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M87.7376 23.6288C83.7207 16.6844 77.9649 10.8625 71.0645 6.76855C72.7813 11.0606 73.8929 15.5948 74.3331 20.2611C78.9774 20.7453 83.4896 21.8899 87.7376 23.6288Z",fill:"white"}),T("path",{d:"M19.8239 69.2677C19.8239 61.63 21.5517 54.2674 24.8203 47.6092C21.2656 40.7198 19.3726 33.0161 19.3726 25.0372C19.3726 24.0687 19.4057 23.1113 19.4607 22.1538C14.4422 22.7481 9.67692 24.1568 5.27478 26.2148C2.14926 32.4878 0.399414 39.5533 0.399414 47.0369C0.399414 54.2674 2.03921 61.1017 4.96663 67.2097C9.57788 69.4328 14.5963 70.9295 19.8899 71.5458C19.8459 70.7865 19.8239 70.0271 19.8239 69.2677Z",fill:"white"}),T("path",{d:"M25.0731 19.3365C33.096 19.3365 40.8218 21.2404 47.7331 24.8392C54.3143 21.6586 61.5889 19.9858 69.1055 19.9858C70.019 19.9858 70.9214 20.0188 71.8238 20.0629C71.2516 14.6702 69.7658 9.54175 67.5207 4.85347C61.3688 1.88202 54.4794 0.220215 47.1939 0.220215C39.6772 0.220215 32.5677 1.99208 26.2837 5.15061C24.2037 9.57476 22.784 14.3731 22.1897 19.4246C23.1362 19.3695 24.1046 19.3365 25.0731 19.3365Z",fill:"white"}),T("path",{d:"M74.5647 25.0371C74.5647 32.8069 72.7818 40.2905 69.4032 47.0478C72.6388 53.684 74.3556 61.0246 74.3556 68.6293C74.3556 69.5978 74.3226 70.5552 74.2676 71.5127C79.7152 70.8634 84.8657 69.2676 89.576 66.9235C92.4154 60.8815 94.0002 54.1463 94.0002 47.0368C94.0002 39.9384 92.4154 33.2141 89.587 27.1831C84.9427 24.916 79.8583 23.3973 74.5097 22.781C74.5537 23.5294 74.5647 24.2777 74.5647 25.0371Z",fill:"white"}),T("path",{d:"M22.729 7.12061C16.4119 11.0055 11.0854 16.3431 7.22247 22.6602C11.1954 21.1194 15.3664 20.0959 19.6585 19.6337C20.1317 15.3086 21.1663 11.1155 22.729 7.12061Z",fill:"white"}),T("path",{d:"M60.1257 59.891C56.9782 63.0386 53.4785 65.7018 49.7256 67.8589C55.5145 70.4231 61.9196 71.8538 68.6549 71.8538C69.7004 71.8538 70.7459 71.8208 71.7804 71.7438C71.8464 70.7203 71.8794 69.6748 71.8794 68.6293C71.8794 61.927 70.4707 55.5439 67.9285 49.7771C65.8045 53.4309 63.1962 56.8205 60.1257 59.891Z",fill:"white"}),T("path",{d:"M6.849 70.7642C10.8329 77.5214 16.4677 83.2002 23.1919 87.2172C21.5521 83.0241 20.4846 78.611 20.0554 74.0438C15.4772 73.5705 11.042 72.459 6.849 70.7642Z",fill:"white"}),T("path",{d:"M26.3064 50.2944C23.7311 56.0943 22.3004 62.5104 22.3004 69.2677C22.3004 70.1041 22.3224 70.9295 22.3664 71.7549C23.3349 71.8209 24.3034 71.8539 25.2719 71.8539C32.0071 71.8539 38.4122 70.4232 44.2011 67.859C40.4372 65.7019 36.9375 63.0386 33.79 59.8911C30.8846 56.9747 28.3754 53.7501 26.3064 50.2944Z",fill:"white"}),T("path",{d:"M87.6941 70.5227C83.369 72.3276 78.7908 73.5162 74.0695 74.0334C73.5632 78.7327 72.3857 83.2889 70.5918 87.581C77.6682 83.498 83.5781 77.5991 87.6941 70.5227Z",fill:"white"}),T("path",{d:"M67.9616 44.2965C70.6139 38.4197 72.0887 31.9045 72.0887 25.0372C72.0887 24.2008 72.0666 23.3754 72.0226 22.55C71.0541 22.4949 70.0857 22.4619 69.1062 22.4619C62.47 22.4619 56.1529 23.8486 50.4301 26.3468C53.8418 28.4048 57.0333 30.892 59.9277 33.7754C63.1083 36.956 65.7936 40.4887 67.9616 44.2965Z",fill:"white"}),T("path",{d:"M34.263 34.4246C37.4985 31.1891 41.1193 28.4487 45.0042 26.2587C38.9513 23.4083 32.205 21.8125 25.0735 21.8125C24.028 21.8125 22.9935 21.8565 21.959 21.9226C21.893 22.9571 21.8489 23.9916 21.8489 25.0371C21.8489 32.1355 23.4337 38.8598 26.2511 44.8907C28.4191 41.1049 31.0934 37.5832 34.263 34.4246Z",fill:"white"}),T("path",{d:"M68.6547 74.3302C61.006 74.3302 53.6324 72.6023 46.9631 69.3228C40.2939 72.5913 32.9203 74.3302 25.2716 74.3302C24.3581 74.3302 23.4557 74.3082 22.5643 74.2531C23.1255 79.5247 24.5562 84.5321 26.7133 89.1324C32.8983 92.1479 39.8537 93.8427 47.1943 93.8427C54.2707 93.8427 60.984 92.2689 66.9929 89.4515C69.315 84.7743 70.8888 79.6458 71.5381 74.2421C70.5806 74.2972 69.6232 74.3302 68.6547 74.3302Z",fill:"white"}),T("path",{d:"M47.1944 52.2535C44.2009 52.2535 41.7797 49.8323 41.7797 46.8389C41.7797 43.8454 44.2009 41.4242 47.1944 41.4242C50.1878 41.4242 52.609 43.8454 52.609 46.8389C52.62 49.8213 50.1878 52.2535 47.1944 52.2535ZM47.6896 27.6345C39.1164 32.0477 32.095 39.0361 27.6158 47.5762C32.051 55.6431 38.7973 62.2463 46.9633 66.5274C55.3053 62.1583 62.1726 55.335 66.6078 47.0259C62.3487 38.849 55.7455 32.0917 47.6896 27.6345Z",fill:"white"}),T("path",{d:"M47.1946 41.4133C44.2011 41.4133 41.78 43.8345 41.78 46.828C41.78 49.8214 44.2011 52.2426 47.1946 52.2426C50.1881 52.2426 52.6092 49.8214 52.6092 46.828C52.6202 43.8345 50.1881 41.4133 47.1946 41.4133Z",fill:"#002D59"})],-1);function Vt(e,l,n,r,t,a){const s=gt("router-view");return yt(),Ct(Et,{view:"lHh Lpr lFf"},{default:V(()=>[O(kt,{elevated:""},{default:V(()=>[O(zt,null,{default:V(()=>[O(wt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),O(St,{class:"kreon flex flex-center"},{default:V(()=>[Qt,Le(" IZRK MONITORING ")]),_:1})]),_:1})]),_:1}),O(Bt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=h=>e.leftDrawerOpen=h),"show-if-above":"",bordered:""},{default:V(()=>[O(xt,null,{default:V(()=>[O(Lt,{header:""},{default:V(()=>[Le(" IZRK ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),O($t,null,{default:V(()=>[O(s)]),_:1})]),_:1})}var Wt=bt(Dt,[["render",Vt]]);export{Wt as default};
