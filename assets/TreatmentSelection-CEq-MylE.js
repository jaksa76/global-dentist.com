import{y as k,E as N,A as a,z as l,C,d as R,u as E,X as V,G,b as I,i as D,Y as P,o as p,k as b,Z as L,_ as F,v as S,R as O,l as f,p as t,t as g,S as T,F as q,V as U,n as _,m as n,w as i,B as y,$ as W,a0 as A,U as K}from"./index-D653pp2w.js";import{a as s,d as X}from"./state-DVY2Mody.js";/* empty css                                                                           */import{N as Y}from"./Input-Ch7ROuvJ.js";const e="0!important",z="-1px!important";function c(r){return l(`${r}-type`,[a("& +",[k("button",{},[l(`${r}-type`,[C("border",{borderLeftWidth:e}),C("state-border",{left:z})])])])])}function u(r){return l(`${r}-type`,[a("& +",[k("button",[l(`${r}-type`,[C("border",{borderTopWidth:e}),C("state-border",{top:z})])])])])}const Z=k("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[N("vertical",{flexDirection:"row"},[N("rtl",[k("button",[a("&:first-child:not(:last-child)",`
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
 `),c("default"),l("ghost",[c("primary"),c("info"),c("success"),c("warning"),c("error")])])])]),l("vertical",{flexDirection:"column"},[k("button",[a("&:first-child:not(:last-child)",`
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
 `),u("default"),l("ghost",[u("primary"),u("info"),u("success"),u("warning"),u("error")])])])]),H={size:{type:String,default:void 0},vertical:Boolean},J=R({name:"ButtonGroup",props:H,setup(r){const{mergedClsPrefixRef:m,mergedRtlRef:v}=E(r);return V("-button-group",Z,m),G(P,r),{rtlEnabled:I("ButtonGroup",v,m),mergedClsPrefix:m}},render(){const{mergedClsPrefix:r}=this;return D("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}}),Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ee=L('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>',6),te=[ee],re=R({name:"TrashOutline",render:function(m,v){return p(),b("svg",Q,te)}}),oe={class:"service-selection"},ne={class:"selected-services"},se={key:0},ae={__name:"TreatmentSelection",emits:["change"],setup(r,{emit:m}){const v=S(!1),{t:x}=O(),M=o=>x("treatments."+o),j=o=>{try{s.addTreatment(o),v.value=!1}catch(d){console.error("Failed to add service:",d)}},$=S(!1);return(o,d)=>(p(),b("div",oe,[f("ul",ne,[Object.keys(t(s).treatments).length===0?(p(),b("li",se,g(o.$t("message.noServiceSelected")),1)):T("",!0),(p(!0),b(q,null,U(t(s).treatments,(w,h)=>(p(),b("li",{class:"selected-service",key:h},[f("span",null,[f("b",null,g(w)+" x",1),_(" "+g(M(h)),1)]),n(t(J),null,{default:i(()=>[n(t(y),{size:"small",onClick:B=>t(s).decTreatment(h),"aria-label":"Decrease treatment quantity"},{default:i(()=>[_("-")]),_:2},1032,["onClick"]),n(t(y),{size:"small",onClick:B=>t(s).incTreatment(h),"aria-label":"Increase treatment quantity"},{default:i(()=>[_("+")]),_:2},1032,["onClick"]),n(t(y),{size:"small",onClick:B=>t(s).removeTreatment(h),"aria-label":"Remove treatment"},{default:i(()=>[n(t(W),null,{default:i(()=>[n(t(re))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]))),128))]),n(t(A),{options:t(X),onSelect:j,size:"large",trigger:"click"},{default:i(()=>[n(t(y),{id:"service-selection-button",type:"primary"},{default:i(()=>[_(g(o.$t("message.addService")),1)]),_:1})]),_:1},8,["options"]),f("div",null,[f("a",{href:"#",class:"showNotesButton",onClick:d[0]||(d[0]=w=>$.value=!$.value)},g($.value?o.$t("message.hideNotes"):o.$t("message.addNotes")),1),$.value?(p(),K(t(Y),{key:0,id:"notes",type:"textarea",autosize:{minRows:3,maxRows:5},value:t(s).notes,"onUpdate:value":d[1]||(d[1]=w=>t(s).notes=w),placeholder:o.$t("message.notesPlaceholder")},null,8,["value","placeholder"])):T("",!0)])]))}},ue=F(ae,[["__scopeId","data-v-ddb8c8e7"]]);export{ue as T};
