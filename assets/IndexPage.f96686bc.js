import{ad as q,bs as W,U as b,bt as ae,k as H,c0 as ke,bF as ue,am as ze,bD as j,aZ as E,at as We,ap as D,aa as N,bI as G,bw as ee,c1 as ce,bB as Me,bX as Be,bK as Oe,c2 as Qe,bM as Ae,c3 as je,bO as De,c4 as Ve,bP as Ie,c5 as Ne,bU as Re,b7 as Fe,bJ as we,bL as Ke,c6 as Ue,bN as Xe,c7 as Ye,by as Ze,ag as de,bx as _,bz as Je,bT as Ge,bZ as et,aH as tt,az as w,V as X,b2 as v,W as Y,Y as z,X as O,aF as he,a3 as g,c8 as fe,a2 as S,D as $,c9 as Q,I as me,ca as nt}from"./index.80497af1.js";import{c as te,Q as at}from"./selection.b90bd396.js";const lt=q("div",{class:"q-space"});var it=W({name:"QSpace",setup(){return()=>lt}}),A=W({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const i=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:i.value},ae(n.default))}});const ot={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function st({showing:e,avoidEmit:n,configureAnchorEl:i}){const{props:t,proxy:l,emit:d}=N(),a=H(null);let s=null;function u(o){return a.value===null?!1:o===void 0||o.touches===void 0||o.touches.length<=1}const r={};i===void 0&&(Object.assign(r,{hide(o){l.hide(o)},toggle(o){l.toggle(o),o.qAnchorHandled=!0},toggleKey(o){ke(o,13)===!0&&r.toggle(o)},contextClick(o){l.hide(o),ue(o),ze(()=>{l.show(o),o.qAnchorHandled=!0})},prevent:ue,mobileTouch(o){if(r.mobileCleanup(o),u(o)!==!0)return;l.hide(o),a.value.classList.add("non-selectable");const p=o.target;j(r,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,l.show(o),o.qAnchorHandled=!0},300)},mobileCleanup(o){a.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&o!==void 0&&te()}}),i=function(o=t.contextMenu){if(t.noParentEvent===!0||a.value===null)return;let p;o===!0?l.$q.platform.is.mobile===!0?p=[[a.value,"touchstart","mobileTouch","passive"]]:p=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:p=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],j(r,"anchor",p)});function c(){G(r,"anchor")}function f(o){for(a.value=o;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;i()}function x(){if(t.target===!1||t.target===""||l.$el.parentNode===null)a.value=null;else if(t.target===!0)f(l.$el.parentNode);else{let o=t.target;if(typeof t.target=="string")try{o=document.querySelector(t.target)}catch{o=void 0}o!=null?(a.value=o.$el||o,i()):(a.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return E(()=>t.contextMenu,o=>{a.value!==null&&(c(),i(o))}),E(()=>t.target,()=>{a.value!==null&&c(),x()}),E(()=>t.noParentEvent,o=>{a.value!==null&&(o===!0?c():i())}),We(()=>{x(),n!==!0&&t.modelValue===!0&&a.value===null&&d("update:modelValue",!1)}),D(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:a,canShow:u,anchorEvents:r}}function rt(e,n){const i=H(null);let t;function l(s,u){const r=`${u!==void 0?"add":"remove"}EventListener`,c=u!==void 0?u:t;s!==window&&s[r]("scroll",c,ee.passive),window[r]("scroll",c,ee.passive),t=u}function d(){i.value!==null&&(l(i.value),i.value=null)}const a=E(()=>e.noParentEvent,()=>{i.value!==null&&(d(),n())});return D(a),{localScrollTarget:i,unconfigureScrollTarget:d,changeScrollEvent:l}}const{notPassiveCapture:V}=ee,T=[];function I(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let i=ce.length-1;for(;i>=0;){const t=ce[i].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;i--}for(let t=T.length-1;t>=0;t--){const l=T[t];if((l.anchorEl.value===null||l.anchorEl.value.contains(n)===!1)&&(n===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(n)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function ut(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",I,V),document.addEventListener("touchstart",I,V))}function ve(e){const n=T.findIndex(i=>i===e);n>-1&&(T.splice(n,1),T.length===0&&(document.removeEventListener("mousedown",I,V),document.removeEventListener("touchstart",I,V)))}let ge,pe;function be(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ct(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ne={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ne[`${e}#ltr`]=e,ne[`${e}#rtl`]=e});function ye(e,n){const i=e.split(" ");return{vertical:i[0],horizontal:ne[`${i[1]}#${n===!0?"rtl":"ltr"}`]}}function dt(e,n){let{top:i,left:t,right:l,bottom:d,width:a,height:s}=e.getBoundingClientRect();return n!==void 0&&(i-=n[1],t-=n[0],d+=n[1],l+=n[0],a+=n[0],s+=n[1]),{top:i,bottom:d,height:s,left:t,right:l,width:a,middle:t+(l-t)/2,center:i+(d-i)/2}}function ht(e,n,i){let{top:t,left:l}=e.getBoundingClientRect();return t+=n.top,l+=n.left,i!==void 0&&(t+=i[1],l+=i[0]),{top:t,bottom:t+1,height:1,left:l,right:l+1,width:1,middle:l,center:t}}function ft(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function xe(e,n,i){return{top:e[i.anchorOrigin.vertical]-n[i.selfOrigin.vertical],left:e[i.anchorOrigin.horizontal]-n[i.selfOrigin.horizontal]}}function mt(e){if(Me.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:u,offsetTop:r}=window.visualViewport;u!==ge&&(s.setProperty("--q-pe-left",u+"px"),ge=u),r!==pe&&(s.setProperty("--q-pe-top",r+"px"),pe=r)}const{scrollLeft:n,scrollTop:i}=e.el,t=e.absoluteOffset===void 0?dt(e.anchorEl,e.cover===!0?[0,0]:e.offset):ht(e.anchorEl,e.absoluteOffset,e.offset);let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const d=ft(e.el);let a=xe(t,d,e);if(e.absoluteOffset===void 0||e.offset===void 0)Z(a,t,d,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:u}=a;Z(a,t,d,e.anchorOrigin,e.selfOrigin);let r=!1;if(a.top!==s){r=!0;const c=2*e.offset[1];t.center=t.top-=c,t.bottom-=c+2}if(a.left!==u){r=!0;const c=2*e.offset[0];t.middle=t.left-=c,t.right-=c+2}r===!0&&(a=xe(t,d,e),Z(a,t,d,e.anchorOrigin,e.selfOrigin))}l={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(l.maxHeight=a.maxHeight+"px",t.height>a.maxHeight&&(l.minHeight=l.maxHeight)),a.maxWidth!==void 0&&(l.maxWidth=a.maxWidth+"px",t.width>a.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==i&&(e.el.scrollTop=i),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function Z(e,n,i,t,l){const d=i.bottom,a=i.right,s=Be(),u=window.innerHeight-s,r=document.body.clientWidth;if(e.top<0||e.top+d>u)if(l.vertical==="center")e.top=n[t.vertical]>u/2?Math.max(0,u-d):0,e.maxHeight=Math.min(d,u);else if(n[t.vertical]>u/2){const c=Math.min(u,t.vertical==="center"?n.center:t.vertical===l.vertical?n.bottom:n.top);e.maxHeight=Math.min(d,c),e.top=Math.max(0,c-d)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===l.vertical?n.top:n.bottom),e.maxHeight=Math.min(d,u-e.top);if(e.left<0||e.left+a>r)if(e.maxWidth=Math.min(a,r),l.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-a):0;else if(n[t.horizontal]>r/2){const c=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.right:n.left);e.maxWidth=Math.min(a,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===l.horizontal?n.left:n.right),e.maxWidth=Math.min(a,r-e.left)}var J=W({name:"QTooltip",inheritAttrs:!1,props:{...ot,...Oe,...Qe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:be},self:{type:String,default:"top middle",validator:be},offset:{type:Array,default:()=>[14,14],validator:ct},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ae],setup(e,{slots:n,emit:i,attrs:t}){let l,d;const a=N(),{proxy:{$q:s}}=a,u=H(null),r=H(!1),c=b(()=>ye(e.anchor,s.lang.rtl)),f=b(()=>ye(e.self,s.lang.rtl)),x=b(()=>e.persistent!==!0),{registerTick:o,removeTick:p}=je(),{registerTimeout:C}=De(),{transitionProps:R,transitionStyle:F}=Ve(e),{localScrollTarget:M,changeScrollEvent:h,unconfigureScrollTarget:B}=rt(e,se),{anchorEl:y,canShow:Te,anchorEvents:L}=st({showing:r,configureAnchorEl:Le}),{show:qe,hide:K}=Ie({showing:r,canShow:Te,handleShow:_e,handleHide:Se,hideOnRouteChange:x,processOnMount:!0});Object.assign(L,{delayShow:Ee,delayHide:He});const{showPortal:le,hidePortal:ie,renderPortal:Ce}=Ne(a,u,$e,"tooltip");if(s.platform.is.mobile===!0){const m={anchorEl:y,innerRef:u,onClickOutside(k){return K(k),k.target.classList.contains("q-dialog__backdrop")&&we(k),!0}},U=b(()=>e.modelValue===null&&e.persistent!==!0&&r.value===!0);E(U,k=>{(k===!0?ut:ve)(m)}),D(()=>{ve(m)})}function _e(m){le(),o(()=>{d=new MutationObserver(()=>P()),d.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),P(),se()}),l===void 0&&(l=E(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,P)),C(()=>{le(!0),i("show",m)},e.transitionDuration)}function Se(m){p(),ie(),oe(),C(()=>{ie(!0),i("hide",m)},e.transitionDuration)}function oe(){d!==void 0&&(d.disconnect(),d=void 0),l!==void 0&&(l(),l=void 0),B(),G(L,"tooltipTemp")}function P(){const m=u.value;y.value===null||!m||mt({el:m,offset:e.offset,anchorEl:y.value,anchorOrigin:c.value,selfOrigin:f.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ee(m){if(s.platform.is.mobile===!0){te(),document.body.classList.add("non-selectable");const U=y.value,k=["touchmove","touchcancel","touchend","click"].map(re=>[U,re,"delayHide","passiveCapture"]);j(L,"tooltipTemp",k)}C(()=>{qe(m)},e.delay)}function He(m){s.platform.is.mobile===!0&&(G(L,"tooltipTemp"),te(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),C(()=>{K(m)},e.hideDelay)}function Le(){if(e.noParentEvent===!0||y.value===null)return;const m=s.platform.is.mobile===!0?[[y.value,"touchstart","delayShow","passive"]]:[[y.value,"mouseenter","delayShow","passive"],[y.value,"mouseleave","delayHide","passive"]];j(L,"anchor",m)}function se(){if(y.value!==null||e.scrollTarget!==void 0){M.value=Re(y.value,e.scrollTarget);const m=e.noParentEvent===!0?P:K;h(M.value,m)}}function Pe(){return r.value===!0?q("div",{...t,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,F.value],role:"tooltip"},ae(n.default)):null}function $e(){return q(Fe,R.value,Pe)}return D(oe),Object.assign(a.proxy,{updatePosition:P}),Ce}}),vt=W({name:"QItem",props:{...Ke,...Ue,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:i}){const{proxy:{$q:t}}=N(),l=Xe(e,t),{hasLink:d,linkAttrs:a,linkClass:s,linkTag:u,navigateOnClick:r}=Ye(),c=H(null),f=H(null),x=b(()=>e.clickable===!0||d.value===!0||e.tag==="label"),o=b(()=>e.disable!==!0&&x.value===!0),p=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=b(()=>{if(e.insetLevel===void 0)return null;const h=t.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function R(h){o.value===!0&&(f.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===c.value?f.value.focus():document.activeElement===f.value&&c.value.focus()),r(h))}function F(h){if(o.value===!0&&ke(h,13)===!0){we(h),h.qKeyEvent=!0;const B=new MouseEvent("click",h);B.qKeyEvent=!0,c.value.dispatchEvent(B)}i("keyup",h)}function M(){const h=Ze(n.default,[]);return o.value===!0&&h.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:f})),h}return()=>{const h={ref:c,class:p.value,style:C.value,role:"listitem",onClick:R,onKeyup:F};return o.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,a.value)):x.value===!0&&(h["aria-disabled"]="true"),q(u.value,h,M())}}}),gt=W({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:i}}=N(),t=de(Je,_);if(t===_)return console.error("QPage needs to be a deep child of QLayout"),_;if(de(Ge,_)===_)return console.error("QPage needs to be child of QPageContainer"),_;const d=b(()=>{const s=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const u=t.isContainer.value===!0?t.containerHeight.value:i.screen.height;return e.styleFn(s,u)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-s+"px":i.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":i.screen.height-s+"px"}}),a=b(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:a.value,style:d.value},ae(n.default))}});const pt={name:"IndexPage",data:()=>({conf:null,status:{},temps:[],chartOptions:{chart:{id:"temps"},xaxis:{type:"datetime"},yaxis:{max:40,min:0}}}),created(){fetch("https://monitoring.izrk.zrc-sazu.si/index/sts").then(e=>e.json()).then(e=>{this.status=e}).catch(e=>{this.$q.dialog({title:"Unable to load status",message:e.message})}),fetch("https://monitoring.izrk.zrc-sazu.si/index/conf").then(e=>e.json()).then(e=>{this.conf=e}).catch(e=>{this.$q.dialog({title:"Unable to load configuration file",message:e.message})}),fetch("https://monitoring.izrk.zrc-sazu.si/index/temps").then(e=>e.json()).then(e=>{this.temps=e}).catch(e=>{this.$q.dialog({title:"Unable to load temperature data",message:e.message})})}},bt=z("div",{class:"text-h4 kreon q-py-md"}," Server status ",-1),yt={class:"row q-col-gutter-md"},xt={class:"row text-h6"},kt={style:{"font-size":"10px"}},wt={class:"text-h4 kreon q-py-md"},Tt={key:0,class:"text-h6"};function qt(e,n,i,t,l,d){const a=tt("apexchart");return e.conf?(w(),X(gt,{key:0,class:"q-ma-md"},{default:v(()=>[bt,z("div",yt,[(w(!0),O(me,null,he(e.conf.servers,(s,u)=>(w(),O("div",{key:u,class:"col-lg-4 col-12"},[g(nt,null,{default:v(()=>[g(fe,{class:"bg-primary text-white"},{default:v(()=>{var r,c;return[z("div",xt,[S($(u)+" ("+$(s.hostname)+") ",1),g(it),g(Q,{name:"circle",color:((r=e.status[s.hostname])==null?void 0:r.ping)=="up"?"positive":"negative"},null,8,["color"])]),z("code",kt,$((c=e.status[s.hostname])==null?void 0:c.uptime),1)]}),_:2},1024),s.virt?(w(),X(fe,{key:0,class:"bg-dark"},{default:v(()=>[g(at,{dark:""},{default:v(()=>[(w(!0),O(me,null,he(s.virt,(r,c)=>(w(),X(vt,{key:c},{default:v(()=>[g(A,null,{default:v(()=>[S($(c),1)]),_:2},1024),g(A,{avatar:""},{default:v(()=>{var f;return[g(Q,{name:"flag_circle",color:((f=e.status[c])==null?void 0:f.autostart)=="enable"?"positive":"negative"},{default:v(()=>[g(J,null,{default:v(()=>[S("Virtual machine autostart status")]),_:1})]),_:2},1032,["color"])]}),_:2},1024),g(A,{avatar:""},{default:v(()=>{var f;return[g(Q,{name:"circle",color:((f=e.status[r.hostname])==null?void 0:f.ping)=="up"?"positive":"negative"},{default:v(()=>[g(J,null,{default:v(()=>[S("Virtual machine ping response")]),_:1})]),_:2},1032,["color"])]}),_:2},1024),g(A,{avatar:""},{default:v(()=>{var f;return[g(Q,{name:"lan",color:((f=e.status[c])==null?void 0:f.virt)=="enable"?"positive":"negative"},{default:v(()=>[g(J,null,{default:v(()=>[S("Virtual machine running status")]),_:1})]),_:2},1032,["color"])]}),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)):Y("",!0)]),_:2},1024)]))),128))]),z("div",wt,[S(" Server room temperature "),e.temps.length>0?(w(),O("span",Tt," ("+$(e.temps[e.temps.length-1].avgTemp)+" \xB0C current) ",1)):Y("",!0)]),g(a,{height:"350",type:"line",options:e.chartOptions,series:[{name:"Temperature",data:e.temps.map(s=>[new Date(s.datetime).getTime(),s.avgTemp])}]},null,8,["options","series"])]),_:1})):Y("",!0)}var St=et(pt,[["render",qt]]);export{St as default};
