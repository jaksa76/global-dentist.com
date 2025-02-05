import{d as B,i as o,x as re,y as a,z as T,A as g,C as y,D as _,E as ie,a as M,u as V,b as oe,G as se,h as ne,H as ae,I as le,J as ce,c as b,e as h,K as de,L as E,M as N,N as I,O as pe,P as W,Q as ue,_ as he,R as fe,v as D,o as p,k as m,l as S,m as $,w as F,p as x,t as f,S as u,U as w,q as ve,n as O,B as j,r as me,s as xe}from"./index-DAZqQ6gb.js";import{C as ze}from"./ClinicGrid-CgnucrTz.js";import{T as Ce}from"./TreatmentSelection-BXIj5u1u.js";import{s as H}from"./state-CRiP_8oC.js";import ge from"./RequestOffersPage-wrwc-E37.js";import{g as be}from"./Space-Dt9gvxbW.js";import"./Carousel-DB5Gjr-d.js";import"./clinics-B7tgPy8H.js";/* empty css                                                                           */import"./Input-fRmAlXWs.js";import"./use-locale-kaAa-Bc_.js";const Se=B({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),we={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function ye(e){const{fontWeightStrong:t,baseColor:s,textColorDisabled:i,primaryColor:l,errorColor:r,textColor1:c,textColor2:v}=e;return Object.assign(Object.assign({},we),{stepHeaderFontWeight:t,indicatorTextColorProcess:s,indicatorTextColorWait:i,indicatorTextColorFinish:l,indicatorTextColorError:r,indicatorBorderColorProcess:l,indicatorBorderColorWait:i,indicatorBorderColorFinish:l,indicatorBorderColorError:r,indicatorColorProcess:l,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:i,splitorColorWait:i,splitorColorFinish:l,splitorColorError:i,headerTextColorProcess:c,headerTextColorWait:i,headerTextColorFinish:i,headerTextColorError:r,descriptionTextColorProcess:v,descriptionTextColorWait:i,descriptionTextColorFinish:i,descriptionTextColorError:r})}const $e={name:"Steps",common:re,self:ye},ke=a("steps",`
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
 `,[_()])])]),T("vertical","flex-direction: column;",[ie("show-description",[g(">",[a("step","padding-bottom: 8px;")])]),g(">",[a("step","margin-bottom: 16px;",[g("&:last-child","margin-bottom: 0;"),g(">",[a("step-indicator",[g(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[y("description","margin-top: 8px;")])])])])])]);function Te(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function _e(e){return e.map((t,s)=>Te(t,s))}const Ie=Object.assign(Object.assign({},M.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),U=ae("n-steps"),Fe=B({name:"Steps",props:Ie,setup(e,{slots:t}){const{mergedClsPrefixRef:s,mergedRtlRef:i}=V(e),l=oe("Steps",i,s),r=M("Steps","-steps",ke,$e,e,s);return se(U,{props:e,mergedThemeRef:r,mergedClsPrefixRef:s,stepsSlots:t}),{mergedClsPrefix:s,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},_e(ne(be(this))))}}),Pe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},P=B({name:"Step",props:Pe,setup(e){const t=le(U,null);t||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=V(),{props:i,mergedThemeRef:l,mergedClsPrefixRef:r,stepsSlots:c}=t,v=b(()=>i.vertical),k=b(()=>{const{status:n}=e;if(n)return n;{const{internalIndex:d}=e,{current:C}=i;if(C===void 0)return"process";if(d<C)return"finish";if(d===C)return i.status||"process";if(d>C)return"wait"}return"process"}),R=b(()=>{const{value:n}=k,{size:d}=i,{common:{cubicBezierEaseInOut:C},self:{stepHeaderFontWeight:A,[h("stepHeaderFontSize",d)]:K,[h("indicatorIndexFontSize",d)]:G,[h("indicatorSize",d)]:L,[h("indicatorIconSize",d)]:J,[h("indicatorTextColor",n)]:Q,[h("indicatorBorderColor",n)]:X,[h("headerTextColor",n)]:Y,[h("splitorColor",n)]:Z,[h("indicatorColor",n)]:ee,[h("descriptionTextColor",n)]:te}}=l.value;return{"--n-bezier":C,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":X,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":G,"--n-indicator-size":L,"--n-indicator-text-color":Q,"--n-splitor-color":Z,"--n-step-header-font-size":K,"--n-step-header-font-weight":A}}),z=s?de("step",b(()=>{const{value:n}=k,{size:d}=i;return`${n[0]}${d[0]}`}),R,i):void 0,q=b(()=>{if(e.disabled)return;const{onUpdateCurrent:n,"onUpdate:current":d}=i;return n||d?()=>{n&&E(n,e.internalIndex),d&&E(d,e.internalIndex)}:void 0});return{stepsSlots:c,mergedClsPrefix:r,vertical:v,mergedStatus:k,handleStepClick:q,cssVars:s?void 0:R,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:s,disabled:i}=this,l=N(this.$slots.default,r=>{const c=r||this.description;return c?o("div",{class:`${e}-step-content__description`},c):null});return t==null||t(),o("div",{class:[`${e}-step`,i&&`${e}-step--disabled`,!i&&s&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(pe,null,{default:()=>N(this.$slots.icon,r=>{const{mergedStatus:c,stepsSlots:v}=this;return c==="finish"||c==="error"?c==="finish"?o(W,{clsPrefix:e,key:"finish"},{default:()=>I(v["finish-icon"],()=>[o(Se,null)])}):c==="error"?o(W,{clsPrefix:e,key:"error"},{default:()=>I(v["error-icon"],()=>[o(ue,null)])}):null:r||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},I(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),l))}}),Be=e=>(me("data-v-7760b05d"),e=e(),xe(),e),Re={class:"wizard"},Ee={class:"steps"},Ne={class:"step-indicator"},We={key:0},De={key:1},Oe={key:2},je={key:3},He={key:4},Me={key:5},Ve={class:"navigation"},Ue={class:"step-content"},qe=Be(()=>S("div",{class:"bottom-padding"},null,-1)),Ae={__name:"Wizard",setup(e){fe();const t=D(1),s=D("process");b(()=>t.value===1?H.clinics.length>0:!0);const i=()=>{t.value<3&&t.value++},l=()=>{t.value>1&&t.value--};return(r,c)=>(p(),m("div",Re,[S("div",Ee,[$(x(Fe),{class:"steps-component",current:t.value,"onUpdate:current":c[0]||(c[0]=v=>t.value=v),status:s.value},{default:F(()=>[$(x(P),{title:r.$t("wizard.selectClinics"),description:r.$t("wizard.selectClinicsDesc")},null,8,["title","description"]),$(x(P),{title:r.$t("wizard.selectTreatments"),description:r.$t("wizard.selectTreatmentsDesc")},null,8,["title","description"]),$(x(P),{title:r.$t("wizard.requestOffers"),description:r.$t("wizard.requestOffersDesc")},null,8,["title","description"])]),_:1},8,["current","status"]),S("div",Ne,[S("p",null,f(r.$t("wizard.stepXofY",{current:t.value,total:3})),1),t.value===1?(p(),m("h2",We,f(r.$t("wizard.selectClinics")),1)):u("",!0),t.value===2?(p(),m("h2",De,f(r.$t("wizard.selectTreatments")),1)):u("",!0),t.value===3?(p(),m("h2",Oe,f(r.$t("wizard.requestOffers")),1)):u("",!0),t.value===1?(p(),m("p",je,f(r.$t("wizard.selectClinicsDesc")),1)):u("",!0),t.value===2?(p(),m("p",He,f(r.$t("wizard.selectTreatmentsDesc")),1)):u("",!0),t.value===3?(p(),m("p",Me,f(r.$t("wizard.requestOffersDesc")),1)):u("",!0)]),S("div",Ve,[t.value>1?(p(),w(x(j),{key:0,onClick:l},{default:F(()=>[O(f(r.$t("wizard.previous")),1)]),_:1})):u("",!0),t.value<3?(p(),w(x(j),{key:1,type:"primary",onClick:i,class:ve({"animate-next":t.value===1&&x(H).clinics.length>0})},{default:F(()=>[O(f(r.$t("wizard.next")),1)]),_:1},8,["class"])):u("",!0)])]),S("div",Ue,[t.value===1?(p(),w(ze,{key:0})):u("",!0),t.value===2?(p(),w(Ce,{key:1})):u("",!0),t.value===3?(p(),w(ge,{key:2})):u("",!0)]),qe]))}},it=he(Ae,[["__scopeId","data-v-7760b05d"]]);export{it as default};
