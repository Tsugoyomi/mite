import{m as k,a as T,b,V as p}from"./VOverlay.37a04bc1.js";import{e as A}from"./VTextField.6efbedbb.js";import{bF as S,bR as I,bG as K,bH as O,bY as R,L as y,r as U,ak as F,b3 as L,aM as N,bv as $,aw as V,bI as j,b as g,ca as G,bV as w,cb as P,ax as H}from"./entry.3ad6f5c7.js";import{u as Y}from"./VDivider.6a839c88.js";import{i as q}from"./VAvatar.5f5bb358.js";const z=S({id:String,...I(k({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:T}}),["absolute"])},"VMenu"),_=K()({name:"VMenu",props:z(),emits:{"update:modelValue":r=>!0},setup(r,E){let{slots:i}=E;const l=O(r,"modelValue"),{scopeId:x}=Y(),h=R(),f=y(()=>r.id||`v-menu-${h}`),n=U(),o=F(b,null),c=L(0);N(b,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(l.value=!1,o==null||o.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,a=e.target;await H(),l.value&&t!==a&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(a)&&!n.value.contentEl.contains(a)&&((d=w(n.value.contentEl)[0])==null||d.focus())}$(l,e=>{e?(o==null||o.register(),document.addEventListener("focusin",v,{once:!0})):(o==null||o.unregister(),document.removeEventListener("focusin",v))});function C(){o==null||o.closeParents()}function D(e){var t,a,s;r.disabled||e.key==="Tab"&&(G(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(l.value=!1,(s=(a=n.value)==null?void 0:a.activatorEl)==null||s.focus()))}function m(e){var a;if(r.disabled)return;const t=(a=n.value)==null?void 0:a.contentEl;t&&l.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(l.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=y(()=>V({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":f.value,onKeydown:m},r.activatorProps));return j(()=>{const e=p.filterProps(r);return g(p,V({ref:n,class:["v-menu",r.class],style:r.style},e,{modelValue:l.value,"onUpdate:modelValue":t=>l.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return g(q,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...a)]}})}})}),A({id:f,ΨopenChildren:c},n)}});export{_ as V};