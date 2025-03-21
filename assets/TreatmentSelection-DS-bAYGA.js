import{y as _,E as x,A as n,z as c,C as k,d as A,u as R,Y as I,G as z,b as M,i as G,Z as V,o as l,k as d,l as s,_ as q,R as D,v as L,t as $,F as P,W as Q,q as W,m as g,w as b,p as m,$ as j,S as v,B as C,a0 as w,n as B}from"./index-CutREJzL.js";import{a}from"./state-i2mN-v4y.js";import{T as F}from"./treatments-FRMeeQws.js";const t="0!important",S="-1px!important";function f(o){return c(`${o}-type`,[n("& +",[_("button",{},[c(`${o}-type`,[k("border",{borderLeftWidth:t}),k("state-border",{left:S})])])])])}function p(o){return c(`${o}-type`,[n("& +",[_("button",[c(`${o}-type`,[k("border",{borderTopWidth:t}),k("state-border",{top:S})])])])])}const O=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[x("vertical",{flexDirection:"row"},[x("rtl",[_("button",[n("&:first-child:not(:last-child)",`
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
 `),p("default"),c("ghost",[p("primary"),p("info"),p("success"),p("warning"),p("error")])])])]),K={size:{type:String,default:void 0},vertical:Boolean},Y=A({name:"ButtonGroup",props:K,setup(o){const{mergedClsPrefixRef:u,mergedRtlRef:i}=R(o);return I("-button-group",O,u),z(V,o),{rtlEnabled:M("ButtonGroup",i,u),mergedClsPrefix:u}},render(){const{mergedClsPrefix:o}=this;return G("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},H=s("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),J=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M352 176L217.6 336L160 272"},null,-1),U=[H,J],X=A({name:"CheckmarkCircleOutline",render:function(u,i){return l(),d("svg",Z,U)}}),tt={class:"treatment-selection"},et={class:"treatment-grid"},rt=["onClick"],ot={key:0,class:"selected-indicator"},st={class:"card-image"},it=["src","alt"],nt={class:"card-content"},at={key:0,class:"treatment-description"},lt={key:1,class:"quantity-controls"},dt={class:"quantity"},ct={__name:"TreatmentSelection",setup(o){D(),L(!1);const u=e=>{const h=e.id;i(h)?a.removeTreatment(h):(a.addTreatment(h),e.fixedAmount&&(a.TREATMENT_VARIANTS[h]=1))},i=e=>e in a.treatments,y=e=>a.treatments[e]||0,E=e=>{e.fixedAmount||a.incTreatment(e.id)},N=e=>{e.fixedAmount||a.decTreatment(e.id)};return(e,h)=>(l(),d("div",tt,[s("h3",null,$(e.$t("message.selectTreatments")),1),s("div",et,[(l(!0),d(P,null,Q(m(F),r=>(l(),d("div",{key:r.id,class:W(["treatment-card",{selected:i(r.id)}]),onClick:T=>u(r)},[i(r.id)?(l(),d("div",ot,[g(m(j),{color:"#18a058"},{default:b(()=>[g(m(X))]),_:1})])):v("",!0),s("div",st,[s("img",{src:`${r.image}`,alt:r.id},null,8,it)]),s("div",nt,[s("h4",null,$(e.$t("treatments."+r.id)),1),!i(r.id)||r.fixedAmount?(l(),d("p",at,$(e.$t("treatmentDescriptions."+r.id)),1)):v("",!0),i(r.id)&&!r.fixedAmount?(l(),d("div",lt,[g(m(Y),null,{default:b(()=>[g(m(C),{size:"small",onClick:w(T=>N(r),["stop"]),"aria-label":"Decrease treatment quantity"},{default:b(()=>[B("-")]),_:2},1032,["onClick"]),s("span",dt,$(y(r.id)),1),g(m(C),{size:"small",onClick:w(T=>E(r),["stop"]),"aria-label":"Increase treatment quantity"},{default:b(()=>[B("+")]),_:2},1032,["onClick"])]),_:2},1024)])):v("",!0)])],10,rt))),128))])]))}},pt=q(ct,[["__scopeId","data-v-95688368"]]);export{pt as T};
