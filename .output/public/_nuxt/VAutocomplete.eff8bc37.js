import{i as yl,j as Ue,k as $e,V as Se,e as He}from"./VTextField.6efbedbb.js";import{bF as Q,bW as ve,bX as ze,bP as ye,bQ as Be,bG as ce,bH as ue,bY as Ge,L as I,aM as gl,aI as _e,bZ as Ne,bb as z,bI as se,b as n,b3 as G,r as X,bJ as bl,aw as q,bB as Fe,aW as je,F as ee,ak as Vl,b_ as fe,b$ as Ve,ax as Ie,bR as De,bS as qe,c0 as Ee,c1 as Me,bs as kl,c2 as We,bv as ne,c3 as Cl,bw as Te,bM as Pe,c4 as pl,bU as Re,c5 as Sl,c6 as Il,bL as pe,a as wl,c7 as Xe,f as Qe,u as be,c8 as xl,c9 as Pl}from"./entry.3ad6f5c7.js";import{m as Al,u as Ye,a as Je,V as we}from"./VList.d457f502.js";import{j as Ze,R as el,V as ie,k as ll,l as tl,n as Fl,o as al,c as nl,p as Tl,q as Bl,b as _l,r as Dl,s as Ml,t as Rl,e as Ll,v as Ol,f as El,w as Kl,x as Ul,g as $l,i as he,y as xe,z as Hl,A as zl,B as ul}from"./VAvatar.5f5bb358.js";import{g as Gl,a as Nl}from"./VOverlay.37a04bc1.js";import{V as ol}from"./VMenu.64f286d1.js";import{m as jl,u as ql,a as Wl,b as Xl,c as Ql}from"./index.cafcd46a.js";const il=Symbol.for("vuetify:selection-control-group"),cl=Q({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:ve,trueIcon:ve,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:ze},...ye(),...Ze(),...Be()},"SelectionControlGroup"),Yl=Q({...cl({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");ce()({name:"VSelectionControlGroup",props:Yl(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:l}=c;const u=ue(e,"modelValue"),t=Ge(),v=I(()=>e.id||`v-selection-control-group-${t}`),m=I(()=>e.name||v.value),o=new Set;return gl(il,{modelValue:u,forceUpdate:()=>{o.forEach(a=>a())},onForceUpdate:a=>{o.add(a),_e(()=>{o.delete(a)})}}),Ne({[e.defaultsTarget]:{color:z(e,"color"),disabled:z(e,"disabled"),density:z(e,"density"),error:z(e,"error"),inline:z(e,"inline"),modelValue:u,multiple:I(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),name:m,falseIcon:z(e,"falseIcon"),trueIcon:z(e,"trueIcon"),readonly:z(e,"readonly"),ripple:z(e,"ripple"),type:z(e,"type"),valueComparator:z(e,"valueComparator")}}),se(()=>{var a;return n("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(a=l.default)==null?void 0:a.call(l)])}),{}}});const sl=Q({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ye(),...cl()},"VSelectionControl");function Jl(e){const c=Vl(il,void 0),{densityClasses:l}=ll(e),u=ue(e,"modelValue"),t=I(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=I(()=>e.falseValue!==void 0?e.falseValue:!1),m=I(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),o=I({get(){const g=c?c.modelValue.value:u.value;return m.value?fe(g).some(C=>e.valueComparator(C,t.value)):e.valueComparator(g,t.value)},set(g){if(e.readonly)return;const C=g?t.value:v.value;let w=C;m.value&&(w=g?[...fe(u.value),C]:fe(u.value).filter(r=>!e.valueComparator(r,t.value))),c?c.modelValue.value=w:u.value=w}}),{textColorClasses:a,textColorStyles:y}=tl(I(()=>{if(!(e.error||e.disabled))return o.value?e.color:e.baseColor})),{backgroundColorClasses:F,backgroundColorStyles:h}=Fl(I(()=>o.value&&!e.error&&!e.disabled?e.color:void 0)),s=I(()=>o.value?e.trueIcon:e.falseIcon);return{group:c,densityClasses:l,trueValue:t,falseValue:v,model:o,textColorClasses:a,textColorStyles:y,backgroundColorClasses:F,backgroundColorStyles:h,icon:s}}const Ke=ce()({name:"VSelectionControl",directives:{Ripple:el},inheritAttrs:!1,props:sl(),emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:l,slots:u}=c;const{group:t,densityClasses:v,icon:m,model:o,textColorClasses:a,textColorStyles:y,backgroundColorClasses:F,backgroundColorStyles:h,trueValue:s}=Jl(e),g=Ge(),C=I(()=>e.id||`input-${g}`),w=G(!1),r=G(!1),p=X();t==null||t.onForceUpdate(()=>{p.value&&(p.value.checked=o.value)});function _(b){w.value=!0,Ve(b.target,":focus-visible")!==!1&&(r.value=!0)}function D(){w.value=!1,r.value=!1}function x(b){e.readonly&&t&&Ie(()=>t.forceUpdate()),o.value=b.target.checked}return se(()=>{var W,T;const b=u.label?u.label({label:e.label,props:{for:C.value}}):e.label,[oe,k]=bl(l),E=n("input",q({ref:p,checked:o.value,disabled:!!(e.readonly||e.disabled),id:C.value,onBlur:D,onFocus:_,onInput:x,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:s.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},k),null);return n("div",q({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":w.value,"v-selection-control--focus-visible":r.value,"v-selection-control--inline":e.inline},v.value,e.class]},oe,{style:e.style}),[n("div",{class:["v-selection-control__wrapper",a.value],style:y.value},[(W=u.default)==null?void 0:W.call(u,{backgroundColorClasses:F,backgroundColorStyles:h}),Fe(n("div",{class:["v-selection-control__input"]},[((T=u.input)==null?void 0:T.call(u,{model:o,textColorClasses:a,textColorStyles:y,backgroundColorClasses:F,backgroundColorStyles:h,inputNode:E,icon:m.value,props:{onFocus:_,onBlur:D,id:C.value}}))??n(ee,null,[m.value&&n(ie,{key:"icon",icon:m.value},null),E])]),[[je("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),b&&n(yl,{for:C.value,clickable:!0,onClick:Y=>Y.stopPropagation()},{default:()=>[b]})])}),{isFocused:w,input:p}}}),Zl=Q({indeterminate:Boolean,indeterminateIcon:{type:ve,default:"$checkboxIndeterminate"},...sl({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),rl=ce()({name:"VCheckboxBtn",props:Zl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{slots:l}=c;const u=ue(e,"indeterminate"),t=ue(e,"modelValue");function v(a){u.value&&(u.value=!1)}const m=I(()=>u.value?e.indeterminateIcon:e.falseIcon),o=I(()=>u.value?e.indeterminateIcon:e.trueIcon);return se(()=>{const a=De(Ke.filterProps(e),["modelValue"]);return n(Ke,q(a,{modelValue:t.value,"onUpdate:modelValue":[y=>t.value=y,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:m.value,trueIcon:o.value,"aria-checked":u.value?"mixed":void 0}),l)}),{}}});const dl=Symbol.for("vuetify:v-chip-group"),et=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...ye(),...jl({selectedClass:"v-chip--selected"}),...al(),...Be(),...nl({variant:"tonal"})},"VChipGroup");ce()({name:"VChipGroup",props:et(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:l}=c;const{themeClasses:u}=qe(e),{isSelected:t,select:v,next:m,prev:o,selected:a}=ql(e,dl);return Ne({VChip:{color:z(e,"color"),disabled:z(e,"disabled"),filter:z(e,"filter"),variant:z(e,"variant")}}),se(()=>n(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style},{default:()=>{var y;return[(y=l.default)==null?void 0:y.call(l,{isSelected:t,select:v,next:m,prev:o,selected:a.value})]}})),{}}});const lt=Q({activeClass:String,appendAvatar:String,appendIcon:ve,closable:Boolean,closeIcon:{type:ve,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:ve,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ee(),onClickOnce:Ee(),...Tl(),...ye(),...Ze(),...Bl(),...Wl(),..._l(),...Dl(),...Ml(),...al({tag:"span"}),...Be(),...nl({variant:"tonal"})},"VChip"),vl=ce()({name:"VChip",directives:{Ripple:el},props:lt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,c){let{attrs:l,emit:u,slots:t}=c;const{t:v}=Me(),{borderClasses:m}=Rl(e),{colorClasses:o,colorStyles:a,variantClasses:y}=Ll(e),{densityClasses:F}=ll(e),{elevationClasses:h}=Ol(e),{roundedClasses:s}=El(e),{sizeClasses:g}=Kl(e),{themeClasses:C}=qe(e),w=ue(e,"modelValue"),r=Xl(e,dl,!1),p=Ul(e,l),_=I(()=>e.link!==!1&&p.isLink.value),D=I(()=>!e.disabled&&e.link!==!1&&(!!r||e.link||p.isClickable.value)),x=I(()=>({"aria-label":v(e.closeLabel),onClick(k){k.stopPropagation(),w.value=!1,u("click:close",k)}}));function b(k){var E;u("click",k),D.value&&((E=p.navigate)==null||E.call(p,k),r==null||r.toggle())}function oe(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),b(k))}return()=>{const k=p.isLink.value?"a":e.tag,E=!!(e.appendIcon||e.appendAvatar),W=!!(E||t.append),T=!!(t.close||e.closable),Y=!!(t.filter||e.filter)&&r,le=!!(e.prependIcon||e.prependAvatar),J=!!(le||t.prepend),te=!r||r.isSelected.value;return w.value&&Fe(n(k,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":D.value,"v-chip--filter":Y,"v-chip--pill":e.pill},C.value,m.value,te?o.value:void 0,F.value,h.value,s.value,g.value,y.value,r==null?void 0:r.selectedClass.value,e.class],style:[te?a.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:D.value?0:void 0,onClick:b,onKeydown:D.value&&!_.value&&oe},{default:()=>{var Z;return[$l(D.value,"v-chip"),Y&&n(Ql,{key:"filter"},{default:()=>[Fe(n("div",{class:"v-chip__filter"},[t.filter?n(he,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):n(ie,{key:"filter-icon",icon:e.filterIcon},null)]),[[kl,r.isSelected.value]])]}),J&&n("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?n(he,{key:"prepend-defaults",disabled:!le,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):n(ee,null,[e.prependIcon&&n(ie,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&n(xe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n("div",{class:"v-chip__content"},[((Z=t.default)==null?void 0:Z.call(t,{isSelected:r==null?void 0:r.isSelected.value,selectedClass:r==null?void 0:r.selectedClass.value,select:r==null?void 0:r.select,toggle:r==null?void 0:r.toggle,value:r==null?void 0:r.value.value,disabled:e.disabled}))??e.text]),W&&n("div",{key:"append",class:"v-chip__append"},[t.append?n(he,{key:"append-defaults",disabled:!E,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):n(ee,null,[e.appendIcon&&n(ie,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&n(xe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),T&&n("button",q({key:"close",class:"v-chip__close",type:"button"},x.value),[t.close?n(he,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):n(ie,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[je("ripple"),D.value&&e.ripple,null]])}}});const tt=Q({renderless:Boolean,...ye()},"VVirtualScrollItem"),at=ce()({name:"VVirtualScrollItem",inheritAttrs:!1,props:tt(),emits:{"update:height":e=>!0},setup(e,c){let{attrs:l,emit:u,slots:t}=c;const{resizeRef:v,contentRect:m}=We(void 0,"border");ne(()=>{var o;return(o=m.value)==null?void 0:o.height},o=>{o!=null&&u("update:height",o)}),se(()=>{var o,a;return e.renderless?n(ee,null,[(o=t.default)==null?void 0:o.call(t,{itemRef:v})]):n("div",q({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(a=t.default)==null?void 0:a.call(t)])})}}),nt=-1,ut=1,Ae=100,ot=Q({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function it(e,c){const l=Cl(),u=G(0);Te(()=>{u.value=parseFloat(e.itemHeight||0)});const t=G(0),v=G(Math.ceil((parseInt(e.height)||l.height.value)/(u.value||16))||1),m=G(0),o=G(0),a=X(),y=X();let F=0;const{resizeRef:h,contentRect:s}=We();Te(()=>{h.value=a.value});const g=I(()=>{var d;return a.value===document.documentElement?l.height.value:((d=s.value)==null?void 0:d.height)||parseInt(e.height)||0}),C=I(()=>!!(a.value&&y.value&&g.value&&u.value));let w=Array.from({length:c.value.length}),r=Array.from({length:c.value.length});const p=G(0);let _=-1;function D(d){return w[d]||u.value}const x=pl(()=>{const d=performance.now();r[0]=0;const S=c.value.length;for(let K=1;K<=S-1;K++)r[K]=(r[K-1]||0)+D(K-1);p.value=Math.max(p.value,performance.now()-d)},p),b=ne(C,d=>{d&&(b(),F=y.value.offsetTop,x.immediate(),Z(),~_&&Ie(()=>{Re&&window.requestAnimationFrame(()=>{me(_),_=-1})}))});ne(g,(d,S)=>{S&&Z()}),_e(()=>{x.clear()});function oe(d,S){const K=w[d],$=u.value;u.value=$?Math.min(u.value,S):S,(K!==S||$!==u.value)&&(w[d]=S,x())}function k(d){return d=Pe(d,0,c.value.length-1),r[d]||0}function E(d){return ct(r,d)}let W=0,T=0,Y=0;function le(){if(!a.value||!y.value)return;const d=a.value.scrollTop,S=performance.now();S-Y>500?(T=Math.sign(d-W),F=y.value.offsetTop):T=d-W,W=d,Y=S,Z()}function J(){!a.value||!y.value||(T=0,Y=0,Z())}let te=-1;function Z(){cancelAnimationFrame(te),te=requestAnimationFrame(ge)}function ge(){if(!a.value||!g.value)return;const d=W-F,S=Math.sign(T),K=Math.max(0,d-Ae),$=Pe(E(K),0,c.value.length),P=d+g.value+Ae,M=Pe(E(P)+1,$+1,c.value.length);if((S!==nt||$<t.value)&&(S!==ut||M>v.value)){const R=k(t.value)-k($),U=k(M)-k(v.value);Math.max(R,U)>Ae?(t.value=$,v.value=M):($<=0&&(t.value=$),M>=c.value.length&&(v.value=M))}m.value=k(t.value),o.value=k(c.value.length)-k(v.value)}function me(d){const S=k(d);!a.value||d&&!S?_=d:a.value.scrollTop=S}const f=I(()=>c.value.slice(t.value,v.value).map((d,S)=>({raw:d,index:S+t.value})));return ne(c,()=>{w=Array.from({length:c.value.length}),r=Array.from({length:c.value.length}),x.immediate(),Z()},{deep:!0}),{containerRef:a,markerRef:y,computedItems:f,paddingTop:m,paddingBottom:o,scrollToIndex:me,handleScroll:le,handleScrollend:J,handleItemResize:oe}}function ct(e,c){let l=e.length-1,u=0,t=0,v=null,m=-1;if(e[l]<c)return l;for(;u<=l;)if(t=u+l>>1,v=e[t],v>c)l=t-1;else if(v<c)m=t,u=t+1;else return v===c?t:u;return m}const st=Q({items:{type:Array,default:()=>[]},renderless:Boolean,...ot(),...ye(),...Hl()},"VVirtualScroll"),fl=ce()({name:"VVirtualScroll",props:st(),setup(e,c){let{slots:l}=c;const u=Sl("VVirtualScroll"),{dimensionStyles:t}=zl(e),{containerRef:v,markerRef:m,handleScroll:o,handleScrollend:a,handleItemResize:y,scrollToIndex:F,paddingTop:h,paddingBottom:s,computedItems:g}=it(e,z(e,"items"));return Il(()=>e.renderless,()=>{function C(){var p,_;const r=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[r]("scroll",o,{passive:!0}),document[r]("scrollend",a)):((p=v.value)==null||p[r]("scroll",o,{passive:!0}),(_=v.value)==null||_[r]("scrollend",a))}wl(()=>{v.value=Gl(u.vnode.el,!0),C(!0)}),_e(C)}),se(()=>{const C=g.value.map(w=>n(at,{key:w.index,renderless:e.renderless,"onUpdate:height":r=>y(w.index,r)},{default:r=>{var p;return(p=l.default)==null?void 0:p.call(l,{item:w.raw,index:w.index,...r})}}));return e.renderless?n(ee,null,[n("div",{ref:m,class:"v-virtual-scroll__spacer",style:{paddingTop:pe(h.value)}},null),C,n("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:pe(s.value)}},null)]):n("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:a,style:[t.value,e.style]},[n("div",{ref:m,class:"v-virtual-scroll__container",style:{paddingTop:pe(h.value),paddingBottom:pe(s.value)}},[C])])}),{scrollToIndex:F}}});function ml(e,c){const l=G(!1);let u;function t(o){cancelAnimationFrame(u),l.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{l.value=!1})})}async function v(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(l.value){const a=ne(l,()=>{a(),o()})}else o()})}async function m(o){var F,h;if(o.key==="Tab"&&((F=c.value)==null||F.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(h=e.value)==null?void 0:h.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await v();const y=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const s=a.getBoundingClientRect().top;for(const g of y)if(g.getBoundingClientRect().top>=s){g.focus();break}}else{const s=a.getBoundingClientRect().bottom;for(const g of[...y].reverse())if(g.getBoundingClientRect().bottom<=s){g.focus();break}}}return{onListScroll:t,onListKeydown:m}}const hl=Q({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:ve,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Al({itemChildren:!1})},"Select"),rt=Q({...hl(),...De(Ue({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ul({transition:{component:Nl}})},"VSelect");ce()({name:"VSelect",props:rt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:l}=c;const{t:u}=Me(),t=X(),v=X(),m=X(),o=ue(e,"menu"),a=I({get:()=>o.value,set:f=>{var d;o.value&&!f&&((d=v.value)!=null&&d.ΨopenChildren)||(o.value=f)}}),{items:y,transformIn:F,transformOut:h}=Ye(e),s=ue(e,"modelValue",[],f=>F(f===null?[null]:fe(f)),f=>{const d=h(f);return e.multiple?d:d[0]??null}),g=I(()=>typeof e.counterValue=="function"?e.counterValue(s.value):typeof e.counterValue=="number"?e.counterValue:s.value.length),C=$e(),w=I(()=>s.value.map(f=>f.value)),r=G(!1),p=I(()=>a.value?e.closeText:e.openText);let _="",D;const x=I(()=>e.hideSelected?y.value.filter(f=>!s.value.some(d=>d===f)):y.value),b=I(()=>e.hideNoData&&!x.value.length||e.readonly||(C==null?void 0:C.isReadonly.value)),oe=I(()=>{var f;return{...e.menuProps,activatorProps:{...((f=e.menuProps)==null?void 0:f.activatorProps)||{},"aria-haspopup":"listbox"}}}),k=X(),{onListScroll:E,onListKeydown:W}=ml(k,t);function T(f){e.openOnClear&&(a.value=!0)}function Y(){b.value||(a.value=!a.value)}function le(f){var P,M;if(!f.key||e.readonly||C!=null&&C.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(f.key)&&f.preventDefault(),["Enter","ArrowDown"," "].includes(f.key)&&(a.value=!0),["Escape","Tab"].includes(f.key)&&(a.value=!1),f.key==="Home"?(P=k.value)==null||P.focus("first"):f.key==="End"&&((M=k.value)==null||M.focus("last"));const d=1e3;function S(R){const U=R.key.length===1,B=!R.ctrlKey&&!R.metaKey&&!R.altKey;return U&&B}if(e.multiple||!S(f))return;const K=performance.now();K-D>d&&(_=""),_+=f.key.toLowerCase(),D=K;const $=y.value.find(R=>R.title.toLowerCase().startsWith(_));$!==void 0&&(s.value=[$])}function J(f){if(e.multiple){const d=s.value.findIndex(S=>e.valueComparator(S.value,f.value));if(d===-1)s.value=[...s.value,f];else{const S=[...s.value];S.splice(d,1),s.value=S}}else s.value=[f],a.value=!1}function te(f){var d;(d=k.value)!=null&&d.$el.contains(f.relatedTarget)||(a.value=!1)}function Z(){var f;r.value&&((f=t.value)==null||f.focus())}function ge(f){r.value=!0}function me(f){if(f==null)s.value=[];else if(Ve(t.value,":autofill")||Ve(t.value,":-webkit-autofill")){const d=y.value.find(S=>S.title===f);d&&J(d)}else t.value&&(t.value.value="")}return ne(a,()=>{if(!e.hideSelected&&a.value&&s.value.length){const f=x.value.findIndex(d=>s.value.some(S=>e.valueComparator(S.value,d.value)));Re&&window.requestAnimationFrame(()=>{var d;f>=0&&((d=m.value)==null||d.scrollToIndex(f))})}}),ne(x,(f,d)=>{r.value&&(!f.length&&e.hideNoData&&(a.value=!1),!d.length&&f.length&&(a.value=!0))}),se(()=>{const f=!!(e.chips||l.chip),d=!!(!e.hideNoData||x.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),S=s.value.length>0,K=Se.filterProps(e),$=S||!r.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return n(Se,q({ref:t},K,{modelValue:s.value.map(P=>P.props.value).join(", "),"onUpdate:modelValue":me,focused:r.value,"onUpdate:focused":P=>r.value=P,validationValue:s.externalValue,counterValue:g.value,dirty:S,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":s.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:$,"onClick:clear":T,"onMousedown:control":Y,onBlur:te,onKeydown:le,"aria-label":u(p.value),title:u(p.value)}),{...l,default:()=>n(ee,null,[n(ol,q({ref:v,modelValue:a.value,"onUpdate:modelValue":P=>a.value=P,activator:"parent",contentClass:"v-select__content",disabled:b.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Z},oe.value),{default:()=>[d&&n(Je,{ref:k,selected:w.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:P=>P.preventDefault(),onKeydown:W,onFocusin:ge,onScrollPassive:E,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},{default:()=>{var P,M,R;return[(P=l["prepend-item"])==null?void 0:P.call(l),!x.value.length&&!e.hideNoData&&(((M=l["no-data"])==null?void 0:M.call(l))??n(we,{title:u(e.noDataText)},null)),n(fl,{ref:m,renderless:!0,items:x.value},{default:U=>{var N;let{item:B,index:i,itemRef:V}=U;const L=q(B.props,{ref:V,key:i,onClick:()=>J(B)});return((N=l.item)==null?void 0:N.call(l,{item:B,index:i,props:L}))??n(we,q(L,{role:"option"}),{prepend:A=>{let{isSelected:H}=A;return n(ee,null,[e.multiple&&!e.hideSelected?n(rl,{key:B.value,modelValue:H,ripple:!1,tabindex:"-1"},null):void 0,B.props.prependAvatar&&n(xe,{image:B.props.prependAvatar},null),B.props.prependIcon&&n(ie,{icon:B.props.prependIcon},null)])}})}}),(R=l["append-item"])==null?void 0:R.call(l)]}})]}),s.value.map((P,M)=>{function R(V){V.stopPropagation(),V.preventDefault(),J(P)}const U={"onClick:close":R,onMousedown(V){V.preventDefault(),V.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},B=f?!!l.chip:!!l.selection,i=B?Xe(f?l.chip({item:P,index:M,props:U}):l.selection({item:P,index:M})):void 0;if(!(B&&!i))return n("div",{key:P.value,class:"v-select__selection"},[f?l.chip?n(he,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:P.title}}},{default:()=>[i]}):n(vl,q({key:"chip",closable:e.closableChips,size:"small",text:P.title,disabled:P.props.disabled},U),null):i??n("span",{class:"v-select__selection-text"},[P.title,e.multiple&&M<s.value.length-1&&n("span",{class:"v-select__selection-comma"},[Qe(",")])])])})]),"append-inner":function(){var U;for(var P=arguments.length,M=new Array(P),R=0;R<P;R++)M[R]=arguments[R];return n(ee,null,[(U=l["append-inner"])==null?void 0:U.call(l,...M),e.menuIcon?n(ie,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),He({isFocused:r,menu:a,select:J},t)}});const dt=(e,c,l)=>e==null||c==null?-1:e.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),vt=Q({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ft(e,c,l){var o;const u=[],t=(l==null?void 0:l.default)??dt,v=l!=null&&l.filterKeys?fe(l.filterKeys):!1,m=Object.keys((l==null?void 0:l.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return u;e:for(let a=0;a<e.length;a++){const[y,F=y]=fe(e[a]),h={},s={};let g=-1;if(c&&!(l!=null&&l.noFilter)){if(typeof y=="object"){const r=v||Object.keys(F);for(const p of r){const _=xl(F,p,F),D=(o=l==null?void 0:l.customKeyFilter)==null?void 0:o[p];if(g=D?D(_,c,y):t(_,c,y),g!==-1&&g!==!1)D?h[p]=g:s[p]=g;else if((l==null?void 0:l.filterMode)==="every")continue e}}else g=t(y,c,y),g!==-1&&g!==!1&&(s.title=g);const C=Object.keys(s).length,w=Object.keys(h).length;if(!C&&!w||(l==null?void 0:l.filterMode)==="union"&&w!==m&&!C||(l==null?void 0:l.filterMode)==="intersection"&&(w!==m||!C))continue}u.push({index:a,matches:{...s,...h}})}return u}function mt(e,c,l,u){const t=X([]),v=X(new Map),m=I(()=>u!=null&&u.transform?be(c).map(a=>[a,u.transform(a)]):be(c));Te(()=>{const a=typeof l=="function"?l():be(l),y=typeof a!="string"&&typeof a!="number"?"":String(a),F=ft(m.value,y,{customKeyFilter:{...e.customKeyFilter,...be(u==null?void 0:u.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),h=be(c),s=[],g=new Map;F.forEach(C=>{let{index:w,matches:r}=C;const p=h[w];s.push(p),g.set(p.value,r)}),t.value=s,v.value=g});function o(a){return v.value.get(a.value)}return{filteredItems:t,filteredMatches:v,getMatches:o}}function ht(e,c,l){if(c==null)return e;if(Array.isArray(c))throw new Error("Multiple matches is not implemented");return typeof c=="number"&&~c?n(ee,null,[n("span",{class:"v-autocomplete__unmask"},[e.substr(0,c)]),n("span",{class:"v-autocomplete__mask"},[e.substr(c,l)]),n("span",{class:"v-autocomplete__unmask"},[e.substr(c+l)])]):e}const yt=Q({autoSelectFirst:{type:[Boolean,String]},search:String,...vt({filterKeys:["title"]}),...hl(),...De(Ue({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ul({transition:!1})},"VAutocomplete"),It=ce()({name:"VAutocomplete",props:yt(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:l}=c;const{t:u}=Me(),t=X(),v=G(!1),m=G(!0),o=G(!1),a=X(),y=X(),F=ue(e,"menu"),h=I({get:()=>F.value,set:i=>{var V;F.value&&!i&&((V=a.value)!=null&&V.ΨopenChildren)||(F.value=i)}}),s=G(-1),g=I(()=>{var i;return(i=t.value)==null?void 0:i.color}),C=I(()=>h.value?e.closeText:e.openText),{items:w,transformIn:r,transformOut:p}=Ye(e),{textColorClasses:_,textColorStyles:D}=tl(g),x=ue(e,"search",""),b=ue(e,"modelValue",[],i=>r(i===null?[null]:fe(i)),i=>{const V=p(i);return e.multiple?V:V[0]??null}),oe=I(()=>typeof e.counterValue=="function"?e.counterValue(b.value):typeof e.counterValue=="number"?e.counterValue:b.value.length),k=$e(),{filteredItems:E,getMatches:W}=mt(e,w,()=>m.value?"":x.value),T=I(()=>e.hideSelected?E.value.filter(i=>!b.value.some(V=>V.value===i.value)):E.value),Y=I(()=>b.value.map(i=>i.props.value)),le=I(()=>{var V;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&x.value===((V=T.value[0])==null?void 0:V.title))&&T.value.length>0&&!m.value&&!o.value}),J=I(()=>e.hideNoData&&!T.value.length||e.readonly||(k==null?void 0:k.isReadonly.value)),te=X(),{onListScroll:Z,onListKeydown:ge}=ml(te,t);function me(i){e.openOnClear&&(h.value=!0),x.value=""}function f(){J.value||(h.value=!0)}function d(i){J.value||(v.value&&(i.preventDefault(),i.stopPropagation()),h.value=!h.value)}function S(i){var N,A,H;if(e.readonly||k!=null&&k.isReadonly.value)return;const V=t.value.selectionStart,L=b.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(i.key))&&i.preventDefault(),["Enter","ArrowDown"].includes(i.key)&&(h.value=!0),["Escape"].includes(i.key)&&(h.value=!1),le.value&&["Enter","Tab"].includes(i.key)&&B(T.value[0]),i.key==="ArrowDown"&&le.value&&((N=te.value)==null||N.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(i.key)){if(s.value<0){i.key==="Backspace"&&!x.value&&(s.value=L-1);return}const O=s.value,ae=b.value[s.value];ae&&!ae.props.disabled&&B(ae),s.value=O>=L-1?L-2:O}if(i.key==="ArrowLeft"){if(s.value<0&&V>0)return;const O=s.value>-1?s.value-1:L-1;b.value[O]?s.value=O:(s.value=-1,t.value.setSelectionRange((A=x.value)==null?void 0:A.length,(H=x.value)==null?void 0:H.length))}if(i.key==="ArrowRight"){if(s.value<0)return;const O=s.value+1;b.value[O]?s.value=O:(s.value=-1,t.value.setSelectionRange(0,0))}}}function K(i){if(Ve(t.value,":autofill")||Ve(t.value,":-webkit-autofill")){const V=w.value.find(L=>L.title===i.target.value);V&&B(V)}}function $(){var i;v.value&&(m.value=!0,(i=t.value)==null||i.focus())}function P(i){v.value=!0,setTimeout(()=>{o.value=!0})}function M(i){o.value=!1}function R(i){(i==null||i===""&&!e.multiple)&&(b.value=[])}const U=G(!1);function B(i){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!i.props.disabled)if(e.multiple){const L=b.value.findIndex(N=>e.valueComparator(N.value,i.value));if(L===-1)b.value=[...b.value,i];else{const N=[...b.value];N.splice(L,1),b.value=N}}else b.value=V?[i]:[],U.value=!0,x.value=V?i.title:"",h.value=!1,m.value=!0,Ie(()=>U.value=!1)}return ne(v,(i,V)=>{var L;i!==V&&(i?(U.value=!0,x.value=e.multiple?"":String(((L=b.value.at(-1))==null?void 0:L.props.title)??""),m.value=!0,Ie(()=>U.value=!1)):(!e.multiple&&x.value==null?b.value=[]:le.value&&!o.value&&!b.value.some(N=>{let{value:A}=N;return A===T.value[0].value})&&B(T.value[0]),h.value=!1,x.value="",s.value=-1))}),ne(x,i=>{!v.value||U.value||(i&&(h.value=!0),m.value=!i)}),ne(h,()=>{if(!e.hideSelected&&h.value&&b.value.length){const i=T.value.findIndex(V=>b.value.some(L=>V.value===L.value));Re&&window.requestAnimationFrame(()=>{var V;i>=0&&((V=y.value)==null||V.scrollToIndex(i))})}}),ne(T,(i,V)=>{v.value&&(!i.length&&e.hideNoData&&(h.value=!1),!V.length&&i.length&&(h.value=!0))}),se(()=>{const i=!!(e.chips||l.chip),V=!!(!e.hideNoData||T.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),L=b.value.length>0,N=Se.filterProps(e);return n(Se,q({ref:t},N,{modelValue:x.value,"onUpdate:modelValue":[A=>x.value=A,R],focused:v.value,"onUpdate:focused":A=>v.value=A,validationValue:b.externalValue,counterValue:oe.value,dirty:L,onChange:K,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":h.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!l.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:L?void 0:e.placeholder,"onClick:clear":me,"onMousedown:control":f,onKeydown:S}),{...l,default:()=>n(ee,null,[n(ol,q({ref:a,modelValue:h.value,"onUpdate:modelValue":A=>h.value=A,activator:"parent",contentClass:"v-autocomplete__content",disabled:J.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:$},e.menuProps),{default:()=>[V&&n(Je,{ref:te,selected:Y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:A=>A.preventDefault(),onKeydown:ge,onFocusin:P,onFocusout:M,onScrollPassive:Z,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},{default:()=>{var A,H,O;return[(A=l["prepend-item"])==null?void 0:A.call(l),!T.value.length&&!e.hideNoData&&(((H=l["no-data"])==null?void 0:H.call(l))??n(we,{title:u(e.noDataText)},null)),n(fl,{ref:y,renderless:!0,items:T.value},{default:ae=>{var Oe;let{item:j,index:re,itemRef:de}=ae;const Le=q(j.props,{ref:de,key:re,active:le.value&&re===0?!0:void 0,onClick:()=>B(j)});return((Oe=l.item)==null?void 0:Oe.call(l,{item:j,index:re,props:Le}))??n(we,Le,{prepend:ke=>{let{isSelected:Ce}=ke;return n(ee,null,[e.multiple&&!e.hideSelected?n(rl,{key:j.value,modelValue:Ce,ripple:!1,tabindex:"-1"},null):void 0,j.props.prependAvatar&&n(xe,{image:j.props.prependAvatar},null),j.props.prependIcon&&n(ie,{icon:j.props.prependIcon},null)])},title:()=>{var ke,Ce;return m.value?j.title:ht(j.title,(ke=W(j))==null?void 0:ke.title,((Ce=x.value)==null?void 0:Ce.length)??0)}})}}),(O=l["append-item"])==null?void 0:O.call(l)]}})]}),b.value.map((A,H)=>{function O(de){de.stopPropagation(),de.preventDefault(),B(A,!1)}const ae={"onClick:close":O,onMousedown(de){de.preventDefault(),de.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},j=i?!!l.chip:!!l.selection,re=j?Xe(i?l.chip({item:A,index:H,props:ae}):l.selection({item:A,index:H})):void 0;if(!(j&&!re))return n("div",{key:A.value,class:["v-autocomplete__selection",H===s.value&&["v-autocomplete__selection--selected",_.value]],style:H===s.value?D.value:{}},[i?l.chip?n(he,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:A.title}}},{default:()=>[re]}):n(vl,q({key:"chip",closable:e.closableChips,size:"small",text:A.title,disabled:A.props.disabled},ae),null):re??n("span",{class:"v-autocomplete__selection-text"},[A.title,e.multiple&&H<b.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[Qe(",")])])])})]),"append-inner":function(){var ae;for(var A=arguments.length,H=new Array(A),O=0;O<A;O++)H[O]=arguments[O];return n(ee,null,[(ae=l["append-inner"])==null?void 0:ae.call(l,...H),e.menuIcon?n(ie,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:d,onClick:Pl,"aria-label":u(C.value),title:u(C.value)},null):void 0])}})}),He({isFocused:v,isPristine:m,menu:h,search:x,filteredItems:E,select:B},t)}});export{It as V};
