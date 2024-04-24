import{_ as z}from"./Snackbars.vue.1bbe4526.js";import{$ as H,r as i,aP as B,a as K,o as v,O as $,b as a,w as o,F as R,aT as Q,u as l,aw as A,ap as G,f as p,e as D,c as F,i as V,b7 as W,p as X,h as Y}from"./entry.3ad6f5c7.js";import{a as k}from"./axios.c24e582b.js";import{a as Z,V as ee}from"./VRow.d3b503d4.js";import{V as f,a as te}from"./VBtn.202a4522.js";import{V as O}from"./VTooltip.2e681230.js";import{V as P,b as j,a as ae}from"./VCard.f0ffc319.js";import{V as oe}from"./VToolbar.28ce98ac.js";import{V as le}from"./VForm.5124d501.js";import{V as T}from"./VTextField.6efbedbb.js";import{V as J}from"./VDivider.6a839c88.js";import{V as se}from"./VDialog.4825e979.js";import{V as re}from"./VAvatar.5f5bb358.js";import{_ as ne}from"./_plugin-vue_export-helper.c27b6911.js";import"./VOverlay.37a04bc1.js";/* empty css              */import"./index.cafcd46a.js";const L=_=>(X("data-v-f9048691"),_=_(),Y(),_),ue={class:"containerz w-100 py-4",style:{position:"relative"}},ie=L(()=>V("span",null,"Exit",-1)),de=["src"],ce=L(()=>V("span",null,"Create Group",-1)),me={class:"text-right"},pe=H({__name:"index",setup(_){const g=i(null),E=i([]),c=i(!1),S=i(),u=B({name:"",img:"",type:"GROUP"}),y=B({code:""}),I=i([s=>s?!0:"Requred."]),b=i(""),w=i(""),d=i(!1),m=i(1),C=async()=>{const s={userId:g.value};await k.post("http://127.0.0.1:8000/room/list",s).then(e=>{E.value=e.data.data}).catch(e=>{throw new Error(e)})},N=async s=>{var n;if((await((n=S.value)==null?void 0:n.validate())).valid)if(s===1){const t=btoa(u.name),r=btoa("--EIR AOI--"),x=btoa(u.type),U={...u,code:`${t}$${r}$${x}`,userId:g.value};await k.post("http://127.0.0.1:8000/room/create",U).then(h=>{b.value=h.data.statusCode===200?"success":"red",w.value=h.data.message,d.value=!0}).catch(h=>{throw new Error(h)}).finally(()=>{c.value=!1,C(),u.name="",u.img="",setTimeout(()=>{d.value=!1},1e3)})}else{const t={...y,type:"GROUP",userId:g.value};await k.post("http://127.0.0.1:8000/room/join",t).then(r=>{b.value=r.data.statusCode===200?"success":"red",w.value=r.data.message,d.value=!0}).catch(r=>{throw new Error(r)}).finally(()=>{c.value=!1,C(),y.code="",setTimeout(()=>{d.value=!1},1e3)})}},q=s=>{location.href=`/iris/${s}`},M=async s=>{const e={name:s.name,code:s.code,type:s.type,userId:s.user_id};await k.post("http://127.0.0.1:8000/room/leave",e).then(n=>{b.value=n.data.statusCode===200?"success":"red",w.value=n.data.message,d.value=!0}).catch(n=>{throw new Error(n)}).finally(()=>{C()})};return K(()=>{const s=indexedDB.open("iris",3);s.onsuccess=e=>{const t=e.target.result.transaction("user","readwrite").objectStore("user");t.getAll().onsuccess=r=>{g.value=r.target.result[0].user_id}},setTimeout(()=>{C()},500)}),(s,e)=>{const n=z;return v(),$("div",ue,[a(Z,{class:"w-100"},{default:o(()=>[(v(!0),$(R,null,Q(l(E),(t,r)=>(v(),F(ee,{cols:"3",key:r,class:"mb-3 list-group"},{default:o(()=>[a(P,{class:"elevation-3 card-group"},{default:o(()=>[a(ae,{class:"headline text-primary"},{default:o(()=>[V("b",null,W(t.name),1),a(O,{location:"top"},{activator:o(({props:x})=>[a(re,A({class:"icon-exit"},x,{onClick:D(U=>M(t),["prevent"])}),{default:o(()=>[p("mdi-exit-run")]),_:2},1040,["onClick"])]),default:o(()=>[ie]),_:2},1024)]),_:2},1024),a(J),a(j,null,{default:o(()=>[V("img",{src:t.img,width:"100%",alt:""},null,8,de),a(f,{class:"mt-2",block:"",variant:"outlined",color:"primary",onClick:x=>q(t.code)},{default:o(()=>[p("Enter")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(O,{location:"top"},{activator:o(({props:t})=>[a(f,A({color:"success",class:"icon-add"},t,{icon:"mdi-plus",onClick:e[0]||(e[0]=r=>c.value=!0)}),null,16)]),default:o(()=>[ce]),_:1}),a(se,{modelValue:l(c),"onUpdate:modelValue":e[7]||(e[7]=t=>G(c)?c.value=t:null),transition:"dialog-bottom-transition",width:"30%"},{default:o(()=>[a(P,null,{default:o(()=>[a(oe,{color:"primary",title:l(m)===1?"Create Group":"Join Group"},null,8,["title"]),a(j,null,{default:o(()=>[a(te,{modelValue:l(m),"onUpdate:modelValue":e[1]||(e[1]=t=>G(m)?m.value=t:null),color:"primary",mandatory:"",density:"compact",class:"mb-4"},{default:o(()=>[a(f,{value:1},{default:o(()=>[p("Create")]),_:1}),a(f,{value:2},{default:o(()=>[p("Join")]),_:1})]),_:1},8,["modelValue"]),a(le,{ref_key:"formInput",ref:S,onSubmit:e[6]||(e[6]=D(t=>N(l(m)),["prevent"]))},{default:o(()=>[l(m)===1?(v(),$(R,{key:0},[a(T,{modelValue:l(u).name,"onUpdate:modelValue":e[2]||(e[2]=t=>l(u).name=t),rules:l(I),label:"Group name",variant:"outlined",density:"compact",class:"mb-6","hide-details":""},null,8,["modelValue","rules"]),a(T,{modelValue:l(u).img,"onUpdate:modelValue":e[3]||(e[3]=t=>l(u).img=t),rules:l(I),label:"Group image",variant:"outlined",density:"compact",class:"mb-8","hide-details":""},null,8,["modelValue","rules"])],64)):(v(),F(T,{key:1,modelValue:l(y).code,"onUpdate:modelValue":e[4]||(e[4]=t=>l(y).code=t),rules:l(I),label:"Group code",variant:"outlined",density:"compact",class:"mb-6","hide-details":""},null,8,["modelValue","rules"])),a(J,{class:"mb-4"}),V("div",me,[a(f,{color:"warning",variant:"outlined",class:"mr-3",onClick:e[5]||(e[5]=t=>c.value=!1)},{default:o(()=>[p("Close")]),_:1}),a(f,{color:"success",variant:"outlined",type:"submit"},{default:o(()=>[p("Submit")]),_:1})])]),_:1},512)]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(n,{flag:l(b),text:l(w),modelValue:l(d),"onUpdate:modelValue":e[8]||(e[8]=t=>G(d)?d.value=t:null)},null,8,["flag","text","modelValue"])])}}});const Se=ne(pe,[["__scopeId","data-v-f9048691"]]);export{Se as default};