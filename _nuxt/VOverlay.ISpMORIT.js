import{cd as Te,ce as Le,bH as Fe,b as R,az as $,y as le,bG as z,r as D,bU as q,c7 as ve,h as L,aK as V,cf as je,O as k,aA as ee,bM as N,bN as ge,f as de,ad as Be,cg as Ye,c6 as Me,an as Re,bT as he,c0 as Ge,b5 as j,c4 as Xe,aH as Ue,aR as Ne,aO as Je,aS as Ke,bb as Qe,bW as Ze,bQ as et,bI as tt,bS as nt,ch as ot,bc as at,j as rt,bJ as it,T as st,bB as lt,bu as ct,aY as ut,F as ft}from"./entry.6pNwWNX7.js";import{l as U,n as vt,s as ce,o as dt,p as He,q as _e,B as oe,r as be}from"./VTextField.gdcGVEzQ.js";import{C as we,D as ae,E as re,F as Ee,G as xe,z as mt,B as yt,n as gt,A as ht,H as bt,M as wt,J as Et}from"./VAvatar.b22ksWPv.js";import{u as xt}from"./VDivider.iQi5Fdkf.js";const J=new WeakMap;function St(e,n){Object.keys(n).forEach(t=>{if(Te(t)){const o=Le(t),a=J.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),J.has(e)||J.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ot(e,n){Object.keys(n).forEach(t=>{if(Te(t)){const o=Le(t),a=J.get(e);a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function De(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?kt(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function kt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const At=z({target:[Object,Array]},"v-dialog-transition"),sn=Fe()({name:"VDialogTransition",props:At(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var h;await new Promise(y=>requestAnimationFrame(y)),await new Promise(y=>requestAnimationFrame(y)),a.style.visibility="";const{x:s,y:i,sx:u,sy:c,speed:f}=Oe(e.target,a),g=U(a,[{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:vt});(h=Se(a))==null||h.forEach(y=>{U(y,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),g.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var h;await new Promise(y=>requestAnimationFrame(y));const{x:s,y:i,sx:u,sy:c,speed:f}=Oe(e.target,a);U(a,[{},{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:dt}).finished.then(()=>r()),(h=Se(a))==null||h.forEach(y=>{U(y,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(le,$({name:"dialog-transition"},o,{css:!1}),t):R(le,{name:"dialog-transition"},t)}});function Se(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Oe(e,n){const t=He(e),o=_e(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(A=>parseFloat(A)),[s,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||i==="left"?u-=t.width/2:(s==="right"||i==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||i==="top"?c-=t.height/2:(s==="bottom"||i==="bottom")&&(c+=t.height/2);const f=t.width/o.width,g=t.height/o.height,h=Math.max(1,f,g),y=f/h||0,d=g/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(r+o.top),sx:y,sy:d,speed:P}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ct(e,n){return{x:e.x-n.x,y:e.y-n.y}}function pe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:r},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ve={static:Ft,connected:Mt},Tt=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ve},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Lt(e,n){const t=D({}),o=D();q&&ve(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var s,i;L(()=>e.locationStrategy,r),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(i=Ve[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var s;(s=o.value)==null||s.call(o,r)}return{contentStyles:t,updateLocation:o}}function Ft(){}function Bt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=_e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Mt(e,n,t){(Array.isArray(e.target.value)||Pt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=je(()=>{const d=we(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?ae(d):we(n.origin,e.isRtl.value);return d.side===v.side&&d.align===re(v).align?{preferredAnchor:Ee(d),preferredOrigin:Ee(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,i,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const h=new ResizeObserver(()=>{g&&y()});L([e.target,e.contentEl],(d,v)=>{let[P,A]=d,[x,w]=v;x&&!Array.isArray(x)&&h.unobserve(x),P&&!Array.isArray(P)&&h.observe(P),w&&h.unobserve(w),A&&h.observe(A)},{immediate:!0}),V(()=>{h.disconnect()});function y(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.target.value||!e.contentEl.value)return;const d=He(e.target.value),v=Bt(e.contentEl.value,e.isRtl.value),P=Q(e.contentEl.value),A=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=P.reduce((O,E)=>{const m=E.getBoundingClientRect(),b=new oe({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return O?new oe({x:Math.max(O.left,b.left),y:Math.max(O.top,b.top),width:Math.min(O.right,b.right)-Math.max(O.left,b.left),height:Math.min(O.bottom,b.bottom)-Math.max(O.top,b.top)}):b},void 0);x.x+=A,x.y+=A,x.width-=A*2,x.height-=A*2;let w={anchor:a.value,origin:r.value};function I(O){const E=new oe(v),m=pe(O.anchor,d),b=pe(O.origin,E);let{x:F,y:M}=Ct(m,b);switch(O.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":F-=f.value[0];break;case"right":F+=f.value[0];break}switch(O.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":F-=f.value[1];break;case"right":F+=f.value[1];break}return E.x+=F,E.y+=M,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:be(E,x),x:F,y:M}}let B=0,C=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:O,y:E,overflows:m}=I(w);B+=O,C+=E,v.x+=O,v.y+=E;{const b=xe(w.anchor),F=m.x.before||m.x.after,M=m.y.before||m.y.after;let Y=!1;if(["x","y"].forEach(p=>{if(p==="x"&&F&&!T.x||p==="y"&&M&&!T.y){const W={anchor:{...w.anchor},origin:{...w.origin}},G=p==="x"?b==="y"?re:ae:b==="y"?ae:re;W.anchor=G(W.anchor),W.origin=G(W.origin);const{overflows:H}=I(W);(H[p].before<=m[p].before&&H[p].after<=m[p].after||H[p].before+H[p].after<(m[p].before+m[p].after)/2)&&(w=W,Y=T[p]=!0)}}),Y)continue}m.x.before&&(B+=m.x.before,v.x+=m.x.before),m.x.after&&(B-=m.x.after,v.x-=m.x.after),m.y.before&&(C+=m.y.before,v.y+=m.y.before),m.y.after&&(C-=m.y.after,v.y-=m.y.after);{const b=be(v,x);l.x=x.width-b.x.before-b.x.after,l.y=x.height-b.y.before-b.y.after,B+=b.x.before,v.x+=b.x.before,C+=b.y.before,v.y+=b.y.before}break}const ne=xe(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:N(se(C)),left:e.isRtl.value?void 0:N(se(B)),right:e.isRtl.value?N(se(-B)):void 0,minWidth:N(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:N(ke(ge(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:N(ke(ge(l.y,i.value===1/0?0:i.value,c.value)))}),{available:l,contentBox:v}}return L(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>y()),ee(()=>{const d=y();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{y(),requestAnimationFrame(()=>{y()})})}),{updateLocation:y}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ke(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const Z=[];function Rt(e){!ue||Z.length?(Z.push(e),fe()):(ue=!1,e(),fe())}let Pe=-1;function fe(){cancelAnimationFrame(Pe),Pe=requestAnimationFrame(()=>{const e=Z.shift();e&&e(),Z.length?fe():ue=!0})}const K={none:null,close:_t,block:Dt,reposition:Vt},Nt=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in K}},"VOverlay-scroll-strategies");function Ht(e,n){if(!q)return;let t;de(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Be(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=K[e.scrollStrategy])==null||o.call(K,n,e,t)}))}),V(()=>{t==null||t.stop()})}function _t(e){function n(t){e.isActive.value=!1}Ie(e.targetEl.value??e.contentEl.value,n)}function Dt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Q(e.targetEl.value,n.contained?t:void 0),...Q(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>me(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((i,u)=>{const c=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-c,i.scrollTop=-f}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Vt(e,n,t){let o=!1,a=-1,r=-1;function s(i){Rt(()=>{var f,g;const u=performance.now();(g=(f=e.updateLocation).value)==null||g.call(f,i),o=(performance.now()-u)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{Ie(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Ie(e,n){const t=[document,...Q(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const It=Symbol.for("vuetify:v-menu"),Wt=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function $t(e,n){let t=()=>{};function o(s){t==null||t();const i=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ye(i,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const qt=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Wt()},"VOverlay-activator");function zt(e,n){let{isActive:t,isTop:o}=n;const a=Me("useActivator"),r=D();let s=!1,i=!1,u=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:g,runCloseDelay:h}=$t(e,l=>{l===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),y=D(),d={onClick:l=>{l.stopPropagation(),r.value=l.currentTarget||l.target,t.value||(y.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,r.value=l.currentTarget||l.target,g())},onMouseleave:l=>{s=!1,h()},onFocus:l=>{Ge(l.target,":focus-visible")!==!1&&(i=!0,l.stopPropagation(),r.value=l.currentTarget||l.target,g())},onBlur:l=>{i=!1,l.stopPropagation(),h()}},v=k(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),P=k(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,g()},l.onMouseleave=()=>{s=!1,h()}),c.value&&(l.onFocusin=()=>{i=!0,g()},l.onFocusout=()=>{i=!1,h()}),e.closeOnContentClick){const T=Re(It,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),A=k(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,g())},l.onMouseleave=()=>{s=!1,h()}),l});L(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(t.value=!1)}),L(t,l=>{l||setTimeout(()=>{y.value=void 0})},{flush:"post"});const x=D();de(()=>{x.value&&ee(()=>{r.value=he(x.value)})});const w=D(),I=k(()=>e.target==="cursor"&&y.value?y.value:w.value?he(w.value):We(e.target,a)||r.value),B=k(()=>Array.isArray(I.value)?void 0:I.value);let C;return L(()=>!!e.activator,l=>{l&&q?(C=Be(),C.run(()=>{jt(e,a,{activatorEl:r,activatorEvents:v})})):C&&C.stop()},{flush:"post",immediate:!0}),V(()=>{C==null||C.stop()}),{activatorEl:r,activatorRef:x,target:I,targetEl:B,targetRef:w,activatorEvents:v,contentEvents:P,scrimEvents:A}}function jt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=i(c);f&&s(f)}u&&ee(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),V(()=>{s()});function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&St(u,$(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,$(a.value,c))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=We(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function We(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Yt(){if(!q)return j(!1);const{ssr:e}=Xe();if(e){const n=j(!1);return Ue(()=>{n.value=!0}),n}else return j(!0)}const Gt=z({eager:Boolean},"lazy");function Xt(e,n){const t=j(!1),o=k(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Ae=Symbol.for("vuetify:stack"),X=Ne([]);function Ut(e,n,t){const o=Me("useStack"),a=!t,r=Re(Ae,void 0),s=Ne({activeChildren:new Set});Je(Ae,s);const i=j(+n.value);ve(e,()=>{var g;const f=(g=X.at(-1))==null?void 0:g[1];i.value=f?f+10:+n.value,a&&X.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),V(()=>{if(a){const h=Qe(X).findIndex(y=>y[0]===o.uid);X.splice(h,1)}r==null||r.activeChildren.delete(o.uid)})});const u=j(!0);a&&de(()=>{var g;const f=((g=X.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=f)});const c=k(()=>!s.activeChildren.size);return{globalTop:Ke(u),localTop:c,stackStyles:k(()=>({zIndex:i.value}))}}function Jt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Kt(){return!0}function $e(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=De(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Kt)(e)}function Qt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&$e(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Ce(e,n){const t=De(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Zt={mounted(e,n){const t=a=>Qt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=$e(a,e,n)};Ce(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Ce(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function en(e){const{modelValue:n,color:t,...o}=e;return R(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...qt(),...Ze(),...mt(),...Gt(),...Tt(),...Nt(),...et(),...yt()},"VOverlay"),ln=Fe()({name:"VOverlay",directives:{ClickOutside:Zt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=tt(e,"modelValue"),s=k({get:()=>r.value,set:S=>{S&&e.disabled||(r.value=S)}}),{teleportTarget:i}=Jt(k(()=>e.attach||e.contained)),{themeClasses:u}=nt(e),{rtlClasses:c,isRtl:f}=ot(),{hasContent:g,onAfterLeave:h}=Xt(e,s),y=gt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=Ut(s,at(e,"zIndex"),e._disableGlobalStack),{activatorEl:A,activatorRef:x,target:w,targetEl:I,targetRef:B,activatorEvents:C,contentEvents:l,scrimEvents:T}=zt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=ht(e),ne=Yt(),{scopeId:O}=xt();L(()=>e.disabled,S=>{S&&(s.value=!1)});const E=D(),m=D(),{contentStyles:b,updateLocation:F}=Lt(e,{isRtl:f,contentEl:m,target:w,isActive:s});Ht(e,{root:E,contentEl:m,targetEl:I,isActive:s,updateLocation:F});function M(S){a("click:outside",S),e.persistent?H():s.value=!1}function Y(){return s.value&&d.value}q&&L(s,S=>{S?window.addEventListener("keydown",p):window.removeEventListener("keydown",p)},{immediate:!0}),rt(()=>{q&&window.removeEventListener("keydown",p)});function p(S){var _,ye;S.key==="Escape"&&d.value&&(e.persistent?H():(s.value=!1,(_=m.value)!=null&&_.contains(document.activeElement)&&((ye=A.value)==null||ye.focus())))}const W=bt();ve(()=>e.closeOnBack,()=>{Et(W,S=>{d.value&&s.value?(S(!1),e.persistent?H():s.value=!1):S()})});const G=D();L(()=>s.value&&(e.absolute||e.contained)&&i.value==null,S=>{if(S){const _=pt(E.value);_&&_!==document.scrollingElement&&(G.value=_.scrollTop)}});function H(){e.noClickAnimation||m.value&&U(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function ze(){h(),a("afterLeave")}return it(()=>{var S;return R(ft,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,props:$({ref:x,targetRef:B},C.value,e.activatorProps)}),!e.disabled&&ne.value&&g.value&&R(st,{disabled:!i.value,to:i.value},{default:()=>[R("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[P.value,{top:N(G.value)},e.style],ref:E},O,o),[R(en,$({color:y,modelValue:!!e.scrim&&s.value},T.value),null),R(wt,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:ze},{default:()=>{var _;return[lt(R("div",$({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,b.value]},l.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[ct,s.value],[ut("click-outside"),{handler:M,closeConditional:Y,include:()=>[A.value]}]])]}})])]})])}),{activatorEl:A,target:w,animateClick:H,contentEl:m,globalTop:d,localTop:v,updateLocation:F}}});export{ln as V,sn as a,It as b,pt as g,tn as m};