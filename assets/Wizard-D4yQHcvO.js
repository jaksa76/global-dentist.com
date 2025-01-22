import{d as B,i as o,y as ie,z as a,A as _,C as g,D as $,E as I,G as re,a as H,u as M,b as oe,H as se,h as ne,I as ae,J as le,K as ce,c as S,e as h,L as de,M as E,N,O as T,P as pe,Q as W,R as ue,_ as he,S as fe,x as D,o as p,k as m,l as b,m as k,w as P,p as x,t as v,U as u,V as y,q as ve,n as O,B as j,s as V,r as me,v as xe}from"./index-CRtOA6tr.js";import{C as ze,S as Ce}from"./ClinicGrid-aNkXdQ5M.js";import ge from"./RequestOffersPage-m9rZ0_hz.js";import{g as Se}from"./Space-DRkVcbrn.js";import"./Carousel-DipX4x0E.js";import"./clinics-DRcoiyhm.js";const be=B({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),we={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function ye(e){const{fontWeightStrong:t,baseColor:s,textColorDisabled:r,primaryColor:l,errorColor:c,textColor1:i,textColor2:f}=e;return Object.assign(Object.assign({},we),{stepHeaderFontWeight:t,indicatorTextColorProcess:s,indicatorTextColorWait:r,indicatorTextColorFinish:l,indicatorTextColorError:c,indicatorBorderColorProcess:l,indicatorBorderColorWait:r,indicatorBorderColorFinish:l,indicatorBorderColorError:c,indicatorColorProcess:l,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:l,splitorColorError:r,headerTextColorProcess:i,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:c,descriptionTextColorProcess:f,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:c})}const $e={name:"Steps",common:ie,self:ye},ke=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[_("disabled","cursor: not-allowed"),_("clickable",`
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
 `,[$("title",`
 white-space: nowrap;
 flex: 0;
 `)]),$("description",`
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
 `,[$("index",`
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
 `,[I()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[I()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[I()])])]),_("vertical","flex-direction: column;",[re("show-description",[g(">",[a("step","padding-bottom: 8px;")])]),g(">",[a("step","margin-bottom: 16px;",[g("&:last-child","margin-bottom: 0;"),g(">",[a("step-indicator",[g(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[$("description","margin-top: 8px;")])])])])])]);function _e(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Ie(e){return e.map((t,s)=>_e(t,s))}const Te=Object.assign(Object.assign({},H.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),U=ae("n-steps"),Pe=B({name:"Steps",props:Te,setup(e,{slots:t}){const{mergedClsPrefixRef:s,mergedRtlRef:r}=M(e),l=oe("Steps",r,s),c=H("Steps","-steps",ke,$e,e,s);return se(U,{props:e,mergedThemeRef:c,mergedClsPrefixRef:s,stepsSlots:t}),{mergedClsPrefix:s,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Ie(ne(Se(this))))}}),Fe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},F=B({name:"Step",props:Fe,setup(e){const t=le(U,null);t||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=M(),{props:r,mergedThemeRef:l,mergedClsPrefixRef:c,stepsSlots:i}=t,f=S(()=>r.vertical),w=S(()=>{const{status:n}=e;if(n)return n;{const{internalIndex:d}=e,{current:C}=r;if(C===void 0)return"process";if(d<C)return"finish";if(d===C)return r.status||"process";if(d>C)return"wait"}return"process"}),R=S(()=>{const{value:n}=w,{size:d}=r,{common:{cubicBezierEaseInOut:C},self:{stepHeaderFontWeight:A,[h("stepHeaderFontSize",d)]:K,[h("indicatorIndexFontSize",d)]:G,[h("indicatorSize",d)]:L,[h("indicatorIconSize",d)]:J,[h("indicatorTextColor",n)]:Q,[h("indicatorBorderColor",n)]:X,[h("headerTextColor",n)]:Y,[h("splitorColor",n)]:Z,[h("indicatorColor",n)]:ee,[h("descriptionTextColor",n)]:te}}=l.value;return{"--n-bezier":C,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":X,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":G,"--n-indicator-size":L,"--n-indicator-text-color":Q,"--n-splitor-color":Z,"--n-step-header-font-size":K,"--n-step-header-font-weight":A}}),z=s?de("step",S(()=>{const{value:n}=w,{size:d}=r;return`${n[0]}${d[0]}`}),R,r):void 0,q=S(()=>{if(e.disabled)return;const{onUpdateCurrent:n,"onUpdate:current":d}=r;return n||d?()=>{n&&E(n,e.internalIndex),d&&E(d,e.internalIndex)}:void 0});return{stepsSlots:i,mergedClsPrefix:c,vertical:f,mergedStatus:w,handleStepClick:q,cssVars:s?void 0:R,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:s,disabled:r}=this,l=N(this.$slots.default,c=>{const i=c||this.description;return i?o("div",{class:`${e}-step-content__description`},i):null});return t==null||t(),o("div",{class:[`${e}-step`,r&&`${e}-step--disabled`,!r&&s&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(pe,null,{default:()=>N(this.$slots.icon,c=>{const{mergedStatus:i,stepsSlots:f}=this;return i==="finish"||i==="error"?i==="finish"?o(W,{clsPrefix:e,key:"finish"},{default:()=>T(f["finish-icon"],()=>[o(be,null)])}):i==="error"?o(W,{clsPrefix:e,key:"error"},{default:()=>T(f["error-icon"],()=>[o(ue,null)])}):null:c||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},T(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),l))}}),Be=e=>(me("data-v-ebf54c09"),e=e(),xe(),e),Re={class:"wizard"},Ee={class:"steps"},Ne={class:"step-indicator"},We={key:0},De={key:1},Oe={key:2},je={key:3},Ve={key:4},He={key:5},Me={class:"navigation"},Ue={class:"step-content"},qe=Be(()=>b("div",{class:"bottom-padding"},null,-1)),Ae={__name:"Wizard",setup(e){fe();const t=D(1),s=D("process"),r=S(()=>t.value===1?V.clinics.length>0:!0),l=()=>{t.value<3&&t.value++},c=()=>{t.value>1&&t.value--};return(i,f)=>(p(),m("div",Re,[b("div",Ee,[k(x(Pe),{class:"steps-component",current:t.value,"onUpdate:current":f[0]||(f[0]=w=>t.value=w),status:s.value},{default:P(()=>[k(x(F),{title:i.$t("wizard.selectClinics"),description:i.$t("wizard.selectClinicsDesc")},null,8,["title","description"]),k(x(F),{title:i.$t("wizard.selectServices"),description:i.$t("wizard.selectServicesDesc")},null,8,["title","description"]),k(x(F),{title:i.$t("wizard.requestOffers"),description:i.$t("wizard.requestOffersDesc")},null,8,["title","description"])]),_:1},8,["current","status"]),b("div",Ne,[b("p",null,v(i.$t("wizard.stepXofY",{current:t.value,total:3})),1),t.value===1?(p(),m("h2",We,v(i.$t("wizard.selectClinics")),1)):u("",!0),t.value===2?(p(),m("h2",De,v(i.$t("wizard.selectServices")),1)):u("",!0),t.value===3?(p(),m("h2",Oe,v(i.$t("wizard.requestOffers")),1)):u("",!0),t.value===1?(p(),m("p",je,v(i.$t("wizard.selectClinicsDesc")),1)):u("",!0),t.value===2?(p(),m("p",Ve,v(i.$t("wizard.selectServicesDesc")),1)):u("",!0),t.value===3?(p(),m("p",He,v(i.$t("wizard.requestOffersDesc")),1)):u("",!0)]),b("div",Me,[t.value>1?(p(),y(x(j),{key:0,onClick:c},{default:P(()=>[O(v(i.$t("wizard.previous")),1)]),_:1})):u("",!0),t.value<3?(p(),y(x(j),{key:1,type:"primary",onClick:l,disabled:!r.value,class:ve({"animate-next":t.value===1&&x(V).clinics.length>0})},{default:P(()=>[O(v(i.$t("wizard.next")),1)]),_:1},8,["disabled","class"])):u("",!0)])]),b("div",Ue,[t.value===1?(p(),y(ze,{key:0})):u("",!0),t.value===2?(p(),y(Ce,{key:1})):u("",!0),t.value===3?(p(),y(ge,{key:2})):u("",!0)]),qe]))}},Ye=he(Ae,[["__scopeId","data-v-ebf54c09"]]);export{Ye as default};
