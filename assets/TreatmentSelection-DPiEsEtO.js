import{z as b,G as x,C as s,A as l,D as y,d as S,u as w,a5 as I,H as V,a6 as z,b as D,i as G,_ as q,U as M,x as P,o as d,k as c,l as n,t as $,F as L,$ as Q,q as F,m as h,w as _,p as u,a7 as W,V as T,B as k,a8 as A,n as B,a0 as a}from"./index-CB4KVYo_.js";import{T as j}from"./treatments-FRMeeQws.js";import{C as H}from"./CheckmarkCircleOutline-GnwY9jsF.js";const t="0!important",N="-1px!important";function f(o){return l(`${o}-type`,[s("& +",[b("button",{},[l(`${o}-type`,[y("border",{borderLeftWidth:t}),y("state-border",{left:N})])])])])}function m(o){return l(`${o}-type`,[s("& +",[b("button",[l(`${o}-type`,[y("border",{borderTopWidth:t}),y("state-border",{top:N})])])])])}const K=b("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[x("vertical",{flexDirection:"row"},[x("rtl",[b("button",[s("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),s("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),s("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),f("default"),l("ghost",[f("primary"),f("info"),f("success"),f("warning"),f("error")])])])]),l("vertical",{flexDirection:"column"},[b("button",[s("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),s("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),s("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),m("default"),l("ghost",[m("primary"),m("info"),m("success"),m("warning"),m("error")])])])]),O={size:{type:String,default:void 0},vertical:Boolean},U=S({name:"ButtonGroup",props:O,setup(o){const{mergedClsPrefixRef:p,mergedRtlRef:i}=w(o);return I("-button-group",K,p),V(z,o),{rtlEnabled:D("ButtonGroup",i,p),mergedClsPrefix:p}},render(){const{mergedClsPrefix:o}=this;return G("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),J={class:"treatment-selection"},X={class:"treatment-grid"},Y=["onClick"],Z={key:0,class:"selected-indicator"},tt={class:"card-image"},et=["src","alt"],rt={class:"card-content"},ot={key:0,class:"treatment-description"},st={key:1,class:"quantity-controls"},it={class:"quantity"},nt={__name:"TreatmentSelection",setup(o){M(),P(!1);const p=e=>{const g=e.id;i(g)?a.removeTreatment(g):(a.addTreatment(g),e.fixedAmount&&(a.TREATMENT_VARIANTS[g]=1))},i=e=>e in a.treatments,v=e=>a.treatments[e]||0,E=e=>{e.fixedAmount||a.incTreatment(e.id)},R=e=>{e.fixedAmount||a.decTreatment(e.id)};return(e,g)=>(d(),c("div",J,[n("h3",null,$(e.$t("message.selectTreatments")),1),n("div",X,[(d(!0),c(L,null,Q(u(j),r=>(d(),c("div",{key:r.id,class:F(["treatment-card",{selected:i(r.id)}]),onClick:C=>p(r)},[i(r.id)?(d(),c("div",Z,[h(u(W),{color:"#18a058"},{default:_(()=>[h(u(H))]),_:1})])):T("",!0),n("div",tt,[n("img",{src:`${r.image}`,alt:r.id},null,8,et)]),n("div",rt,[n("h4",null,$(e.$t("treatments."+r.id)),1),!i(r.id)||r.fixedAmount?(d(),c("p",ot,$(e.$t("treatmentDescriptions."+r.id)),1)):T("",!0),i(r.id)&&!r.fixedAmount?(d(),c("div",st,[h(u(U),null,{default:_(()=>[h(u(k),{size:"small",onClick:A(C=>R(r),["stop"]),"aria-label":"Decrease treatment quantity"},{default:_(()=>[B("-")]),_:2},1032,["onClick"]),n("span",it,$(v(r.id)),1),h(u(k),{size:"small",onClick:A(C=>E(r),["stop"]),"aria-label":"Increase treatment quantity"},{default:_(()=>[B("+")]),_:2},1032,["onClick"])]),_:2},1024)])):T("",!0)])],10,Y))),128))])]))}},ct=q(nt,[["__scopeId","data-v-95688368"]]);export{ct as T};
