import{y as ie,z as a,A as T,C as g,D as y,E as _,G as re,d as V,u as H,b as oe,a as M,H as se,i as s,h as ne,I as ae,J as le,K as ce,c as b,e as h,L as de,M as R,N as E,O as I,P as pe,Q as W,R as ue,S as he,_ as fe,U as ve,x as N,k as x,l as S,m as $,w as F,p as m,t as f,V as u,W as w,q as me,s as D,o as p,n as O,B as j,r as xe,v as ze}from"./index-BTRyhiNw.js";/* empty css                                                                     */import{C as Ce}from"./ClinicGrid-B5DWEgMx.js";import{T as ge}from"./TreatmentSelection-Bmctnm2W.js";import be from"./RequestOffersPage-C4p4i3Y1.js";import{g as Se}from"./Space-BlYY4TXQ.js";import"./clinics-2t2T0PJ3.js";import"./prices-Sgi2l8nr.js";import"./Carousel-BBNKhwtg.js";import"./Rate-CQ4Qgrdo.js";import"./treatments-FRMeeQws.js";import"./CheckmarkCircleOutline-DTDivFPc.js";import"./Time-C1q3GIax.js";import"./index-BMp7SzWM.js";import"./Input-PVNVBCjA.js";const we={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function ye(e){const{fontWeightStrong:t,baseColor:o,textColorDisabled:r,primaryColor:l,errorColor:i,textColor1:c,textColor2:v}=e;return Object.assign(Object.assign({},we),{stepHeaderFontWeight:t,indicatorTextColorProcess:o,indicatorTextColorWait:r,indicatorTextColorFinish:l,indicatorTextColorError:i,indicatorBorderColorProcess:l,indicatorBorderColorWait:r,indicatorBorderColorFinish:l,indicatorBorderColorError:i,indicatorColorProcess:l,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:l,splitorColorError:r,headerTextColorProcess:c,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:i,descriptionTextColorProcess:v,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:i})}const $e={name:"Steps",common:ie,self:ye},ke=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[T("disabled","cursor: not-allowed"),T("clickable",`
 cursor: pointer;
 `),g("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),a("step-content","flex: 1;",[a("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[y("title",`
 white-space: nowrap;
 flex: 0;
 `)]),y("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[a("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[y("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[_()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[_()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[_()])])]),T("vertical","flex-direction: column;",[re("show-description",[g(">",[a("step","padding-bottom: 8px;")])]),g(">",[a("step","margin-bottom: 16px;",[g("&:last-child","margin-bottom: 0;"),g(">",[a("step-indicator",[g(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[y("description","margin-top: 8px;")])])])])])]);function Te(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function _e(e){return e.map((t,o)=>Te(t,o))}const Ie=Object.assign(Object.assign({},M.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),U=ae("n-steps"),Fe=V({name:"Steps",props:Ie,setup(e,{slots:t}){const{mergedClsPrefixRef:o,mergedRtlRef:r}=H(e),l=oe("Steps",r,o),i=M("Steps","-steps",ke,$e,e,o);return se(U,{props:e,mergedThemeRef:i,mergedClsPrefixRef:o,stepsSlots:t}),{mergedClsPrefix:o,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},_e(ne(Se(this))))}}),Pe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},P=V({name:"Step",props:Pe,setup(e){const t=le(U,null);t||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:o}=H(),{props:r,mergedThemeRef:l,mergedClsPrefixRef:i,stepsSlots:c}=t,v=b(()=>r.vertical),k=b(()=>{const{status:n}=e;if(n)return n;{const{internalIndex:d}=e,{current:C}=r;if(C===void 0)return"process";if(d<C)return"finish";if(d===C)return r.status||"process";if(d>C)return"wait"}return"process"}),B=b(()=>{const{value:n}=k,{size:d}=r,{common:{cubicBezierEaseInOut:C},self:{stepHeaderFontWeight:A,[h("stepHeaderFontSize",d)]:K,[h("indicatorIndexFontSize",d)]:G,[h("indicatorSize",d)]:L,[h("indicatorIconSize",d)]:J,[h("indicatorTextColor",n)]:Q,[h("indicatorBorderColor",n)]:X,[h("headerTextColor",n)]:Y,[h("splitorColor",n)]:Z,[h("indicatorColor",n)]:ee,[h("descriptionTextColor",n)]:te}}=l.value;return{"--n-bezier":C,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":X,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":G,"--n-indicator-size":L,"--n-indicator-text-color":Q,"--n-splitor-color":Z,"--n-step-header-font-size":K,"--n-step-header-font-weight":A}}),z=o?de("step",b(()=>{const{value:n}=k,{size:d}=r;return`${n[0]}${d[0]}`}),B,r):void 0,q=b(()=>{if(e.disabled)return;const{onUpdateCurrent:n,"onUpdate:current":d}=r;return n||d?()=>{n&&R(n,e.internalIndex),d&&R(d,e.internalIndex)}:void 0});return{stepsSlots:c,mergedClsPrefix:i,vertical:v,mergedStatus:k,handleStepClick:q,cssVars:o?void 0:B,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:o,disabled:r}=this,l=E(this.$slots.default,i=>{const c=i||this.description;return c?s("div",{class:`${e}-step-content__description`},c):null});return t==null||t(),s("div",{class:[`${e}-step`,r&&`${e}-step--disabled`,!r&&o&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:o},s("div",{class:`${e}-step-indicator`},s("div",{class:`${e}-step-indicator-slot`},s(pe,null,{default:()=>E(this.$slots.icon,i=>{const{mergedStatus:c,stepsSlots:v}=this;return c==="finish"||c==="error"?c==="finish"?s(W,{clsPrefix:e,key:"finish"},{default:()=>I(v["finish-icon"],()=>[s(ue,null)])}):c==="error"?s(W,{clsPrefix:e,key:"error"},{default:()=>I(v["error-icon"],()=>[s(he,null)])}):null:i||s("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?s("div",{class:`${e}-step-splitor`}):null),s("div",{class:`${e}-step-content`},s("div",{class:`${e}-step-content-header`},s("div",{class:`${e}-step-content-header__title`},I(this.$slots.title,()=>[this.title])),this.vertical?null:s("div",{class:`${e}-step-splitor`})),l))}}),Be=e=>(xe("data-v-dbbd3597"),e=e(),ze(),e),Re={class:"wizard"},Ee={class:"steps"},We={class:"step-indicator"},Ne={key:0},De={key:1},Oe={key:2},je={key:3},Ve={key:4},He={key:5},Me={class:"navigation"},Ue={class:"step-content"},qe=Be(()=>S("div",{class:"bottom-padding"},null,-1)),Ae={__name:"Wizard",setup(e){ve();const t=N(1),o=N("process");b(()=>t.value===1?D.clinics.length>0:!0);const r=()=>{t.value<3&&t.value++},l=()=>{t.value>1&&t.value--};return(i,c)=>(p(),x("div",Re,[S("div",Ee,[$(m(Fe),{class:"steps-component",current:t.value,"onUpdate:current":c[0]||(c[0]=v=>t.value=v),status:o.value},{default:F(()=>[$(m(P),{title:i.$t("wizard.selectClinics"),description:i.$t("wizard.selectClinicsDesc")},null,8,["title","description"]),$(m(P),{title:i.$t("wizard.selectTreatments"),description:i.$t("wizard.selectTreatmentsDesc")},null,8,["title","description"]),$(m(P),{title:i.$t("wizard.requestOffers"),description:i.$t("wizard.requestOffersDesc")},null,8,["title","description"])]),_:1},8,["current","status"]),S("div",We,[S("p",null,f(i.$t("wizard.stepXofY",{current:t.value,total:3})),1),t.value===1?(p(),x("h2",Ne,f(i.$t("wizard.selectClinics")),1)):u("",!0),t.value===2?(p(),x("h2",De,f(i.$t("wizard.selectTreatments")),1)):u("",!0),t.value===3?(p(),x("h2",Oe,f(i.$t("wizard.requestOffers")),1)):u("",!0),t.value===1?(p(),x("p",je,f(i.$t("wizard.selectClinicsDesc")),1)):u("",!0),t.value===2?(p(),x("p",Ve,f(i.$t("wizard.selectTreatmentsDesc")),1)):u("",!0),t.value===3?(p(),x("p",He,f(i.$t("wizard.requestOffersDesc")),1)):u("",!0)]),S("div",Me,[t.value>1?(p(),w(m(j),{key:0,onClick:l},{default:F(()=>[O(f(i.$t("wizard.previous")),1)]),_:1})):u("",!0),t.value<3?(p(),w(m(j),{key:1,type:"primary",onClick:r,class:me({"animate-next":t.value===1&&m(D).clinics.length>0})},{default:F(()=>[O(f(i.$t("wizard.next")),1)]),_:1},8,["class"])):u("",!0)])]),S("div",Ue,[t.value===1?(p(),w(m(Ce),{key:0})):u("",!0),t.value===2?(p(),w(ge,{key:1})):u("",!0),t.value===3?(p(),w(be,{key:2})):u("",!0)]),qe]))}},at=fe(Ae,[["__scopeId","data-v-dbbd3597"]]);export{at as default};
