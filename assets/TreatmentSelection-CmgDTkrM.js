import{z as _,G as T,C as n,A as c,D as k,d as A,u as R,a3 as I,H as z,a4 as M,b as V,i as D,o as l,k as d,l as s,_ as G,U as q,x as L,t as $,F as P,Y as Q,q as j,m as g,w as b,p as m,a5 as F,V as v,B as C,a6 as w,n as B,Z as a}from"./index-CC1aYuAQ.js";import{T as O}from"./treatments-FRMeeQws.js";const t="0!important",N="-1px!important";function f(o){return c(`${o}-type`,[n("& +",[_("button",{},[c(`${o}-type`,[k("border",{borderLeftWidth:t}),k("state-border",{left:N})])])])])}function h(o){return c(`${o}-type`,[n("& +",[_("button",[c(`${o}-type`,[k("border",{borderTopWidth:t}),k("state-border",{top:N})])])])])}const W=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[T("vertical",{flexDirection:"row"},[T("rtl",[_("button",[n("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),n("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),n("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),f("default"),c("ghost",[f("primary"),f("info"),f("success"),f("warning"),f("error")])])])]),c("vertical",{flexDirection:"column"},[_("button",[n("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),n("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),n("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),h("default"),c("ghost",[h("primary"),h("info"),h("success"),h("warning"),h("error")])])])]),H={size:{type:String,default:void 0},vertical:Boolean},K=A({name:"ButtonGroup",props:H,setup(o){const{mergedClsPrefixRef:u,mergedRtlRef:i}=R(o);return I("-button-group",W,u),z(M,o),{rtlEnabled:V("ButtonGroup",i,u),mergedClsPrefix:u}},render(){const{mergedClsPrefix:o}=this;return D("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Y=s("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Z=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 176L217.6 336L160 272"},null,-1),J=[Y,Z],X=A({name:"CheckmarkCircleOutline",render:function(u,i){return l(),d("svg",U,J)}}),tt={class:"treatment-selection"},et={class:"treatment-grid"},rt=["onClick"],ot={key:0,class:"selected-indicator"},st={class:"card-image"},it=["src","alt"],nt={class:"card-content"},at={key:0,class:"treatment-description"},lt={key:1,class:"quantity-controls"},dt={class:"quantity"},ct={__name:"TreatmentSelection",setup(o){q(),L(!1);const u=e=>{const p=e.id;i(p)?a.removeTreatment(p):(a.addTreatment(p),e.fixedAmount&&(a.TREATMENT_VARIANTS[p]=1))},i=e=>e in a.treatments,y=e=>a.treatments[e]||0,S=e=>{e.fixedAmount||a.incTreatment(e.id)},E=e=>{e.fixedAmount||a.decTreatment(e.id)};return(e,p)=>(l(),d("div",tt,[s("h3",null,$(e.$t("message.selectTreatments")),1),s("div",et,[(l(!0),d(P,null,Q(m(O),r=>(l(),d("div",{key:r.id,class:j(["treatment-card",{selected:i(r.id)}]),onClick:x=>u(r)},[i(r.id)?(l(),d("div",ot,[g(m(F),{color:"#18a058"},{default:b(()=>[g(m(X))]),_:1})])):v("",!0),s("div",st,[s("img",{src:`${r.image}`,alt:r.id},null,8,it)]),s("div",nt,[s("h4",null,$(e.$t("treatments."+r.id)),1),!i(r.id)||r.fixedAmount?(l(),d("p",at,$(e.$t("treatmentDescriptions."+r.id)),1)):v("",!0),i(r.id)&&!r.fixedAmount?(l(),d("div",lt,[g(m(K),null,{default:b(()=>[g(m(C),{size:"small",onClick:w(x=>E(r),["stop"]),"aria-label":"Decrease treatment quantity"},{default:b(()=>[B("-")]),_:2},1032,["onClick"]),s("span",dt,$(y(r.id)),1),g(m(C),{size:"small",onClick:w(x=>S(r),["stop"]),"aria-label":"Increase treatment quantity"},{default:b(()=>[B("+")]),_:2},1032,["onClick"])]),_:2},1024)])):v("",!0)])],10,rt))),128))])]))}},ft=G(ct,[["__scopeId","data-v-95688368"]]);export{ft as T};
