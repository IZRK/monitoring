import{v as pt,c as Pe,g as yt,a as gt,Q as bt}from"./QBtn.8bfab2ff.js";import{c as P,h as j,a as wt,b as qt,d as Oe,e as Ct}from"./render.2b3a6646.js";import{c as v,h as T,r as x,j as Ue,o as Y,k as N,n as xe,l as U,g as M,m as B,p as H,w as q,a as ze,q as ae,H as Ve,s as $,t as je,u as Tt,v as Lt,P as St,x as xt,y as oe,z as he,A as He,B as pe,C as Le,D as ye,E as zt,G as Ke,I as kt,J as le,b as Et,_ as _t,K as $t,L as Bt,M as Pt,N as W,d as V,O as Me,Q as Ot}from"./index.03e7bcec.js";var Vt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:l.value},j(o.default))}}),Ht=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:l.value,role:"toolbar"},j(o.default))}});function Mt(){const e=x(!Ue.value);return e.value===!1&&Y(()=>{e.value=!0}),e}const Ze=typeof ResizeObserver!="undefined",De=Ze===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,i,t={width:-1,height:-1};function n(c){c===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),i){const{offsetWidth:c,offsetHeight:d}=i;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:f}=M();if(Ze===!0){let c;const d=a=>{i=f.$el.parentNode,i?(c=new ResizeObserver(n),c.observe(i),s()):a!==!0&&U(()=>{d(!0)})};return Y(()=>{d()}),N(()=>{l!==null&&clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),xe}else{let a=function(){l!==null&&(clearTimeout(l),l=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",n,B.passive),d=void 0)},w=function(){a(),i&&i.contentDocument&&(d=i.contentDocument.defaultView,d.addEventListener("resize",n,B.passive),s())};const c=Mt();let d;return Y(()=>{U(()=>{i=f.$el,i&&w()})}),N(a),f.trigger=n,()=>{if(c.value===!0)return T("object",{style:De.style,tabindex:-1,type:"text/html",data:De.url,"aria-hidden":"true",onLoad:w})}}}}),Dt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=M(),t=ze(ae,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const n=x(parseInt(e.heightHint,10)),s=x(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),d=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=v(()=>{const u=t.rows.value.top,C={};return u[0]==="l"&&t.left.space===!0&&(C[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(C[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),C});function m(u,C){t.update("header",u,C)}function h(u,C){u.value!==C&&(u.value=C)}function z({height:u}){h(n,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),l("focusin",u)}q(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),q(c,u=>{m("offset",u)}),q(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),q(s,u=>{t.animate(),l("reveal",u)}),q(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",c.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=wt(o.default,[]);return e.elevated===!0&&u.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(T(Se,{debounce:0,onResize:z})),T("header",{class:w.value,style:b.value,onFocusin:L},u)}}}),Qt=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const l=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>T("div",{style:t.value,class:i.value},j(o.default))}});const Ge={dark:{type:Boolean,default:null}};function Je(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}var Wt=P({name:"QList",props:{...Ge,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const l=M(),i=Je(e,l.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>T(e.tag,{class:t.value},j(o.default))}});function Rt(e,o,l){let i;function t(){i!==void 0&&(Ve.remove(i),i=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>l.value===!0,handler:o},Ve.add(i)}}}const At={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ft=["beforeShow","show","beforeHide","hide"];function Nt({showing:e,canShow:o,hideOnRouteChange:l,handleShow:i,handleHide:t,processOnMount:n}){const s=M(),{props:f,emit:c,proxy:d}=s;let a;function w(u){e.value===!0?h(u):b(u)}function b(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||C===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),i!==void 0?i(u):c("show",u))}function h(u){if(f.disable===!0)return;const C=f["onUpdate:modelValue"]!==void 0;C===!0&&(c("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||C===!1)&&z(u)}function z(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),t!==void 0?t(u):c("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:z)(a)}q(()=>f.modelValue,L),l!==void 0&&pt(s)===!0&&q(()=>d.$route.fullPath,()=>{l.value===!0&&e.value===!0&&h()}),n===!0&&Y(()=>{L(f.modelValue)});const g={show:b,hide:h,toggle:w};return Object.assign(d,g),g}const It=[null,document,document.body,document.scrollingElement,document.documentElement];function Xt(e,o){let l=yt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return It.includes(l)?window:l}function et(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function tt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ge(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");Pe(e,{width:"100%",height:"200px"}),Pe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return l===i&&(i=o.clientWidth),o.remove(),ne=l-i,ne}function Yt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,be,we,J,qe=!1,Qe,We,Re,F=null;function Ut(e){jt(e)&&je(e)}function jt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Tt(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||i?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const s=o[n];if(Yt(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ie(e){qe!==!0&&(qe=!0,requestAnimationFrame(()=>{qe=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=l-o,document.scrollingElement.scrollTop=i),i>J&&(document.scrollingElement.scrollTop-=Math.ceil((i-J)/8))}))}function Fe(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);be=tt(window),we=et(window),Qe=o.style.left,We=o.style.top,Re=window.location.href,o.style.left=`-${be}px`,o.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ie,B.passiveCapture),window.visualViewport.addEventListener("scroll",ie,B.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ae,B.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",Ut,B.notPassive),e==="remove"&&($.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ie,B.passiveCapture),window.visualViewport.removeEventListener("scroll",ie,B.passiveCapture)):window.removeEventListener("scroll",Ae,B.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Qe,o.style.top=We,window.location.href===Re&&window.scrollTo(be,we),J=void 0)}function Kt(e){let o="add";if(e===!0){if(G++,F!==null){clearTimeout(F),F=null;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(o="remove",$.is.ios===!0&&$.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Fe(o),F=null},100);return}}Fe(o)}function Zt(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Kt(o))}}}function Gt(){let e=null;const o=M();function l(){e!==null&&(clearTimeout(e),e=null)}return Lt(l),N(l),{removeTimeout:l,registerTimeout(i,t){l(),gt(o)===!1&&(e=setTimeout(i,t))}}}const ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Jt=Object.keys(ke);ke.all=!0;function Ne(e){const o={};for(const l of Jt)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?ke:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Ie(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function eo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),St.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ce(e,o,l){const i=Le(e);let t,n=i.left-o.event.x,s=i.top-o.event.y,f=Math.abs(n),c=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&n>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(i.left-=n,f=0,n=0):(i.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:n,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let to=0;var Te=qt({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&$.has.touch!==!0)return;function i(n,s){l.mouse===!0&&s===!0?je(n):(l.stop===!0&&pe(n),l.prevent===!0&&He(n))}const t={uid:"qvtp_"+to++,handler:o,modifiers:l,direction:Ne(l),noop:xe,mouseStart(n){Ie(n,t)&&xt(n)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Ie(n,t)){const s=n.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if($.is.firefox===!0&&he(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&He(d),n.cancelBubble===!0&&pe(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}pe(n)}const{left:f,top:c}=Le(n);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(n){if(t.event===void 0)return;const s=Le(n),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=n;const d=t.event.mouse===!0,a=()=>{i(n,d);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),eo(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{z(),h()},50):z()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(n,t.event.mouse);const{payload:m,synthetic:h}=Ce(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const w=Math.abs(f),b=Math.abs(c);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&c<0||t.direction.down===!0&&w<b&&c>0||t.direction.left===!0&&w>b&&f<0||t.direction.right===!0&&w>b&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ye(t,"temp"),$.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ce(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Ce(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}$.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ne(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),$.is.firefox===!0&&he(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const Xe=150;var oo=P({name:"QDrawer",inheritAttrs:!1,props:{...At,...Ge,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ft,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:i}){const t=M(),{proxy:{$q:n}}=t,s=Je(e,n),{preventBodyScroll:f}=Zt(),{registerTimeout:c,removeTimeout:d}=Gt(),a=ze(ae,H);if(a===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,b=null,m;const h=x(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),z=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>z.value===!0?e.miniWidth:e.width),g=x(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||ot.value===!0));function C(r,p){if(R(),r!==!1&&a.animate(),_(0),h.value===!0){const k=a.instances[ee.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),D(1),a.isContainer.value!==!0&&f(!0)}else D(0),r!==!1&&fe(!1);c(()=>{r!==!1&&fe(!0),p!==!0&&l("show",r)},Xe)}function y(r,p){K(),r!==!1&&a.animate(),D(0),_(I.value*L.value),ve(),p!==!0?c(()=>{l("hide",r)},Xe):d()}const{show:S,hide:E}=Nt({showing:g,hideOnRouteChange:u,handleShow:C,handleHide:y}),{addToHistory:R,removeFromHistory:K}=Rt(g,E,u),A={belowBreakpoint:h,hide:E},O=v(()=>e.side==="right"),I=v(()=>(n.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),Ee=x(0),X=x(!1),ue=x(!1),_e=x(L.value*I.value),ee=v(()=>O.value===!0?"left":"right"),se=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),de=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),Z=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),ot=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),lt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),nt=v(()=>({backgroundColor:`rgba(0,0,0,${Ee.value*.4})`})),$e=v(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),it=v(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),rt=v(()=>{const r={};return a.header.space===!0&&$e.value===!1&&(de.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&it.value===!1&&(de.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),at=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${_e.value}px)`};return h.value===!0?r:Object.assign(r,rt.value)}),ut=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),st=v(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(de.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),dt=v(()=>{const r=n.lang.rtl===!0?e.side:ee.value;return[[Te,mt,void 0,{[r]:!0,mouse:!0}]]}),ct=v(()=>{const r=n.lang.rtl===!0?ee.value:e.side;return[[Te,Be,void 0,{[r]:!0,mouse:!0}]]}),ft=v(()=>{const r=n.lang.rtl===!0?ee.value:e.side;return[[Te,Be,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){ht(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}q(h,r=>{r===!0?(w=g.value,g.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(_(0),D(0),ve()):S(!1))}),q(()=>e.side,(r,p)=>{a.instances[p]===A&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[r]=A,a[r].size=L.value,a[r].space=Z.value,a[r].offset=se.value}),q(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),q(()=>e.behavior+e.breakpoint,ce),q(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&ce()}),q(a.scrollbarWidth,()=>{_(g.value===!0?0:void 0)}),q(se,r=>{Q("offset",r)}),q(Z,r=>{l("onLayout",r),Q("space",r)}),q(O,()=>{_()}),q(L,r=>{_(),me(e.miniToOverlay,r)}),q(()=>e.miniToOverlay,r=>{me(r,L.value)}),q(()=>n.lang.rtl,()=>{_()}),q(()=>e.mini,()=>{e.modelValue===!0&&(vt(),a.animate())}),q(z,r=>{l("miniState",r)});function _(r){r===void 0?U(()=>{r=g.value===!0?0:L.value,_(I.value*r)}):(a.isContainer.value===!0&&O.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=I.value*a.scrollbarWidth.value),_e.value=r)}function D(r){Ee.value=r}function fe(r){const p=r===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function vt(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,b=setTimeout(()=>{b=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(r){if(g.value!==!1)return;const p=L.value,k=re(r.distance.x,0,p);if(r.isFinal===!0){k>=Math.min(75,p)===!0?S():(a.animate(),D(0),_(I.value*p)),X.value=!1;return}_((n.lang.rtl===!0?O.value!==!0:O.value)?Math.max(p-k,0):Math.min(0,k-p)),D(re(k/p,0,1)),r.isFirst===!0&&(X.value=!0)}function Be(r){if(g.value!==!0)return;const p=L.value,k=r.direction===e.side,te=(n.lang.rtl===!0?k!==!0:k)?re(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(a.animate(),D(1),_(0)):E(),X.value=!1;return}_(I.value*te),D(re(1-te/p,0,1)),r.isFirst===!0&&(X.value=!0)}function ve(){f(!1),fe(!0)}function Q(r,p){a.update(e.side,r,p)}function ht(r,p){r.value!==p&&(r.value=p)}function me(r,p){Q("size",r===!0?e.miniWidth:p)}return a.instances[e.side]=A,me(e.miniToOverlay,L.value),Q("space",Z.value),Q("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Y(()=>{l("onLayout",Z.value),l("miniState",z.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?C:y)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}m=q(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):r()})}),N(()=>{m!==void 0&&m(),b!==null&&(clearTimeout(b),b=null),g.value===!0&&ve(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,Q("size",0),Q("offset",0),Q("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(zt(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),dt.value)),r.push(Oe("div",{ref:"backdrop",class:lt.value,style:nt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ft.value)));const p=z.value===!0&&o.mini!==void 0,k=[T("div",{...i,key:""+p,class:[ut.value,i.class]},p===!0?o.mini():j(o.default))];return e.elevated===!0&&g.value===!0&&k.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Oe("aside",{ref:"content",class:st.value,style:at.value},k,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>ct.value)),T("div",{class:"q-drawer-container"},r)}}}),lo=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=M(),i=ze(ae,H);if(i===H)return console.error("QPageContainer needs to be child of QLayout"),H;Ke(kt,!0);const t=v(()=>{const n={};return i.header.space===!0&&(n.paddingTop=`${i.header.size}px`),i.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(n.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),n});return()=>T("div",{class:"q-page-container",style:t.value},j(o.default))}});const{passive:Ye}=B,no=["both","horizontal","vertical"];var io=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>no.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,n;q(()=>e.scrollTarget,()=>{c(),f()});function s(){i!==null&&i();const w=Math.max(0,et(t)),b=tt(t),m={top:w-l.position.top,left:b-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:w,left:b},l.directionChanged=l.direction!==h,l.delta=m,l.directionChanged===!0&&(l.direction=h,l.inflectionPoint=l.position),o("scroll",{...l})}function f(){t=Xt(n,e.scrollTarget),t.addEventListener("scroll",d,Ye),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Ye),t=void 0)}function d(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[b,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{m(b),i=null}}}const{proxy:a}=M();return q(()=>a.$q.lang.rtl,s),Y(()=>{n=a.$el.parentNode,f()}),N(()=>{i!==null&&i(),c()}),Object.assign(a,{trigger:d,getPosition:()=>l}),xe}}),ro=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=M(),t=x(null),n=x(i.screen.height),s=x(e.container===!0?0:i.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),d=x(Ue.value===!0?0:ge()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),b=v(()=>d.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),m=v(()=>d.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=S,e.onScroll!==void 0&&l("scroll",S)}}function z(y){const{height:S,width:E}=y;let R=!1;n.value!==S&&(R=!0,n.value=S,e.onScrollHeight!==void 0&&l("scrollHeight",S),g()),s.value!==E&&(R=!0,s.value=E),R===!0&&e.onResize!==void 0&&l("resize",y)}function L({height:y}){c.value!==y&&(c.value=y,g())}function g(){if(e.container===!0){const y=n.value>c.value?ge():0;d.value!==y&&(d.value=y)}}let u=null;const C={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:d,totalWidth:v(()=>s.value+d.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:le({size:0,offset:0,space:!1}),right:le({size:300,offset:0,space:!1}),footer:le({size:0,offset:0,space:!1}),left:le({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,S,E){C[y][S]=E}};if(Ke(ae,C),ge()>0){let E=function(){y=null,S.classList.remove("hide-scrollbar")},R=function(){if(y===null){if(S.scrollHeight>i.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(E,300)},K=function(A){y!==null&&A==="remove"&&(clearTimeout(y),E()),window[`${A}EventListener`]("resize",R)},y=null;const S=document.body;q(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Et(()=>{K("remove")})}return()=>{const y=Ct(o.default,[T(io,{onScroll:h}),T(Se,{onResize:z})]),S=T("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(Se,{onResize:L}),T("div",{class:"absolute-full",style:b.value},[T("div",{class:"scroll",style:m.value},[S])])]):S}}});const ao=$t({name:"MainLayout",setup(){const e=x(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function uo(e,o,l,i,t,n){const s=Ot("router-view");return Bt(),Pt(ro,{view:"lHh Lpr lFf"},{default:W(()=>[V(Dt,{elevated:""},{default:W(()=>[V(Ht,null,{default:W(()=>[V(bt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),V(Vt,null,{default:W(()=>[Me(" IZRK monitoring ")]),_:1})]),_:1})]),_:1}),V(oo,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=f=>e.leftDrawerOpen=f),"show-if-above":"",bordered:""},{default:W(()=>[V(Wt,null,{default:W(()=>[V(Qt,{header:""},{default:W(()=>[Me(" IZRK ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),V(lo,null,{default:W(()=>[V(s)]),_:1})]),_:1})}var mo=_t(ao,[["render",uo]]);export{mo as default};