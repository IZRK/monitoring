import{c as g,h as p,i as T,k as M,a as U,Q as z}from"./use-router-link.9bf4137a.js";import{h as f,c as u,r as w,U as W,t as X,g as x,p as m,a as L,q as Y,I as Z,_ as G,L as h,M as C,N as c,X as P,Q,Y as B,Z as F,F as I,d,O as E,$ as _}from"./index.2a99c17d.js";import{u as j,a as R,Q as J}from"./QList.25a90297.js";const ee=f("div",{class:"q-space"});var te=g({name:"QSpace",setup(){return()=>ee}}),K=g({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:s}){const n=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>f(e.tag,{class:n.value},p(s.default))}}),N=g({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:s}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>f("div",{class:n.value},p(s.default))}}),ae=g({name:"QItem",props:{...j,...T,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:s,emit:n}){const{proxy:{$q:a}}=x(),q=R(e,a),{hasLink:y,linkAttrs:l,linkClass:r,linkTag:i,navigateOnClick:v}=M(),o=w(null),b=w(null),$=u(()=>e.clickable===!0||y.value===!0||e.tag==="label"),k=u(()=>e.disable!==!0&&$.value===!0),D=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(q.value===!0?" q-item--dark":"")+(y.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(k.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),V=u(()=>{if(e.insetLevel===void 0)return null;const t=a.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function A(t){k.value===!0&&(b.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===o.value?b.value.focus():document.activeElement===b.value&&o.value.focus()),v(t))}function H(t){if(k.value===!0&&W(t,13)===!0){X(t),t.qKeyEvent=!0;const S=new MouseEvent("click",t);S.qKeyEvent=!0,o.value.dispatchEvent(S)}n("keyup",t)}function O(){const t=U(s.default,[]);return k.value===!0&&t.unshift(f("div",{class:"q-focus-helper",tabindex:-1,ref:b})),t}return()=>{const t={ref:o,class:D.value,style:V.value,role:"listitem",onClick:A,onKeyup:H};return k.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,l.value)):$.value===!0&&(t["aria-disabled"]="true"),f(i.value,t,O())}}}),ne=g({name:"QCard",props:{...j,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:s}){const{proxy:{$q:n}}=x(),a=R(e,n),q=u(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>f(e.tag,{class:q.value},p(s.default))}}),se=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:s}){const{proxy:{$q:n}}=x(),a=L(Y,m);if(a===m)return console.error("QPage needs to be a deep child of QLayout"),m;if(L(Z,m)===m)return console.error("QPage needs to be child of QPageContainer"),m;const y=u(()=>{const r=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const i=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(r,i)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-r+"px":n.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":n.screen.height-r+"px"}}),l=u(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:l.value,style:y.value},p(s.default))}});const re={name:"IndexPage",data:()=>({conf:null,status:{}}),created(){fetch("https://monitoring.izrk.zrc-sazu.si/index/status").then(e=>e.json()).then(e=>{this.status=e}),fetch("https://monitoring.izrk.zrc-sazu.si/index/conf").then(e=>e.json()).then(e=>{this.conf=e})}},oe={class:"row q-col-gutter-md"},le={class:"row text-h6"},ue={style:{"font-size":"10px"}};function ie(e,s,n,a,q,y){return e.conf?(h(),C(se,{key:0,class:"q-ma-md"},{default:c(()=>[Q("div",oe,[(h(!0),B(I,null,F(e.conf.servers,(l,r)=>(h(),B("div",{key:r,class:"col-lg-4 col-12"},[d(ne,null,{default:c(()=>[d(K,{class:"bg-primary text-white"},{default:c(()=>{var i,v,o;return[Q("div",le,[E(_(r)+" ("+_(l.hostname)+") ",1),d(te),d(z,{name:"circle",color:((i=e.status[l.hostname])==null?void 0:i.ping.val)=="up"?"positive":"negative"},null,8,["color"])]),Q("code",ue,_((o=(v=e.status[l.hostname])==null?void 0:v.uptime)==null?void 0:o.val),1)]}),_:2},1024),l.virt?(h(),C(K,{key:0,class:"bg-dark"},{default:c(()=>[d(J,{dark:""},{default:c(()=>[(h(!0),B(I,null,F(l.virt,(i,v)=>(h(),C(ae,{key:v},{default:c(()=>[d(N,null,{default:c(()=>[E(_(v),1)]),_:2},1024),d(N,{avatar:""},{default:c(()=>{var o;return[d(z,{name:"circle",color:((o=e.status[i.hostname])==null?void 0:o.ping.val)=="up"?"positive":"negative"},null,8,["color"])]}),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)):P("",!0)]),_:2},1024)]))),128))])]),_:1})):P("",!0)}var fe=G(re,[["render",ie]]);export{fe as default};
