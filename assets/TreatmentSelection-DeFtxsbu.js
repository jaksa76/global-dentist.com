import{y as b,E as N,A as a,z as l,C as y,d as R,u as E,X as V,G,b as I,i as P,Y as D,o as u,k as g,Z as L,_ as O,v as S,R as F,l as m,p as t,t as f,S as T,F as U,V as W,n as _,m as n,w as i,B as C,$ as A,a0 as K,U as X}from"./index-2vcL1dim.js";import{a as s,c as Y}from"./state-C8m106h5.js";/* empty css                                                                           */import{N as Z}from"./Input-BfgpQ1u_.js";const e="0!important",z="-1px!important";function d(r){return l(`${r}-type`,[a("& +",[b("button",{},[l(`${r}-type`,[y("border",{borderLeftWidth:e}),y("state-border",{left:z})])])])])}function c(r){return l(`${r}-type`,[a("& +",[b("button",[l(`${r}-type`,[y("border",{borderTopWidth:e}),y("state-border",{top:z})])])])])}const q=b("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[N("vertical",{flexDirection:"row"},[N("rtl",[b("button",[a("&:first-child:not(:last-child)",`
 margin-right: ${e};
 border-top-right-radius: ${e};
 border-bottom-right-radius: ${e};
 `),a("&:last-child:not(:first-child)",`
 margin-left: ${e};
 border-top-left-radius: ${e};
 border-bottom-left-radius: ${e};
 `),a("&:not(:first-child):not(:last-child)",`
 margin-left: ${e};
 margin-right: ${e};
 border-radius: ${e};
 `),d("default"),l("ghost",[d("primary"),d("info"),d("success"),d("warning"),d("error")])])])]),l("vertical",{flexDirection:"column"},[b("button",[a("&:first-child:not(:last-child)",`
 margin-bottom: ${e};
 margin-left: ${e};
 margin-right: ${e};
 border-bottom-left-radius: ${e};
 border-bottom-right-radius: ${e};
 `),a("&:last-child:not(:first-child)",`
 margin-top: ${e};
 margin-left: ${e};
 margin-right: ${e};
 border-top-left-radius: ${e};
 border-top-right-radius: ${e};
 `),a("&:not(:first-child):not(:last-child)",`
 margin: ${e};
 border-radius: ${e};
 `),c("default"),l("ghost",[c("primary"),c("info"),c("success"),c("warning"),c("error")])])])]),H={size:{type:String,default:void 0},vertical:Boolean},J=R({name:"ButtonGroup",props:H,setup(r){const{mergedClsPrefixRef:p,mergedRtlRef:k}=E(r);return V("-button-group",q,p),G(D,r),{rtlEnabled:I("ButtonGroup",k,p),mergedClsPrefix:p}},render(){const{mergedClsPrefix:r}=this;return P("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}}),Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ee=L('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>',6),te=[ee],re=R({name:"TrashOutline",render:function(p,k){return u(),g("svg",Q,te)}}),oe={class:"service-selection"},ne={class:"selected-services"},se={key:0},ae={__name:"TreatmentSelection",emits:["change"],setup(r,{emit:p}){const k=S(!1),{t:x}=F(),M=o=>x("treatments."+o),j=o=>{s.addTreatment(o),k.value=!1},$=S(!1);return(o,v)=>(u(),g("div",oe,[m("ul",ne,[Object.keys(t(s).treatments).length===0?(u(),g("li",se,f(o.$t("message.noServiceSelected")),1)):T("",!0),(u(!0),g(U,null,W(t(s).treatments,(w,h)=>(u(),g("li",{class:"selected-service",key:h},[m("span",null,[m("b",null,f(w)+" x",1),_(" "+f(M(h)),1)]),n(t(J),null,{default:i(()=>[n(t(C),{size:"small",onClick:B=>t(s).decTreatment(h)},{default:i(()=>[_("-")]),_:2},1032,["onClick"]),n(t(C),{size:"small",onClick:B=>t(s).incTreatment(h)},{default:i(()=>[_("+")]),_:2},1032,["onClick"]),n(t(C),{size:"small",onClick:B=>t(s).removeTreatment(h)},{default:i(()=>[n(t(A),null,{default:i(()=>[n(t(re))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]))),128))]),n(t(K),{options:t(Y),onSelect:j,size:"large",trigger:"click"},{default:i(()=>[n(t(C),{id:"service-selection-button",type:"primary"},{default:i(()=>[_(f(o.$t("message.addService")),1)]),_:1})]),_:1},8,["options"]),m("div",null,[m("a",{href:"#",class:"showNotesButton",onClick:v[0]||(v[0]=w=>$.value=!$.value)},f($.value?o.$t("message.hideNotes"):o.$t("message.addNotes")),1),$.value?(u(),X(t(Z),{key:0,id:"notes",type:"textarea",autosize:{minRows:3,maxRows:5},value:t(s).notes,"onUpdate:value":v[1]||(v[1]=w=>t(s).notes=w),placeholder:o.$t("message.notesPlaceholder")},null,8,["value","placeholder"])):T("",!0)])]))}},ue=O(ae,[["__scopeId","data-v-e33f5f91"]]);export{ue as T};
