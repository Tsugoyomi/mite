import{c6 as c,bG as d,bW as v,bQ as u,bH as m,bS as h,bc as b,O as g,bJ as f,b as C,bM as i}from"./entry.6pNwWNX7.js";import{l as S}from"./VAvatar.b22ksWPv.js";function I(){const t=c("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const k=d({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...u()},"VDivider"),V=m()({name:"VDivider",props:k(),setup(e,t){let{attrs:r}=t;const{themeClasses:o}=h(e),{textColorClasses:a,textColorStyles:n}=S(b(e,"color")),l=g(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),s});return f(()=>C("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,a.value,e.class],style:[l.value,n.value,e.style],"aria-orientation":!r.role||r.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${r.role||"separator"}`},null)),{}}});export{V,I as u};