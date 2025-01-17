import{d as B,i as o,y as te,z as a,A as _,C,D as $,E as I,G as re,a as H,u as M,b as ie,H as oe,h as se,I as ne,J as ae,K as le,c as S,e as h,L as ce,M as E,N,O as T,P as de,Q as W,R as pe,_ as ue,S as he,x as D,o as p,k as m,l as b,m as k,w as P,n as g,t as v,T as u,U as y,q as O,B as j,r as fe,v as ve,p as me}from"./index-CTdMq4qO.js";import{C as xe,S as ze}from"./ClinicGrid-BcQWTf2z.js";import Ce from"./RequestOffersPage-CP3cwryv.js";import{g as ge}from"./Space-DsAFG4fs.js";import"./Carousel-BLFTYqoA.js";import"./clinics-DRcoiyhm.js";const Se=B({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),be={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function we(e){const{fontWeightStrong:t,baseColor:s,textColorDisabled:i,primaryColor:l,errorColor:c,textColor1:r,textColor2:f}=e;return Object.assign(Object.assign({},be),{stepHeaderFontWeight:t,indicatorTextColorProcess:s,indicatorTextColorWait:i,indicatorTextColorFinish:l,indicatorTextColorError:c,indicatorBorderColorProcess:l,indicatorBorderColorWait:i,indicatorBorderColorFinish:l,indicatorBorderColorError:c,indicatorColorProcess:l,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:i,splitorColorWait:i,splitorColorFinish:l,splitorColorError:i,headerTextColorProcess:r,headerTextColorWait:i,headerTextColorFinish:i,headerTextColorError:c,descriptionTextColorProcess:f,descriptionTextColorWait:i,descriptionTextColorFinish:i,descriptionTextColorError:c})}const ye={name:"Steps",common:te,self:we},$e=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[_("disabled","cursor: not-allowed"),_("clickable",`
 cursor: pointer;
 `),C("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
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
 `,[I()])])]),_("vertical","flex-direction: column;",[re("show-description",[C(">",[a("step","padding-bottom: 8px;")])]),C(">",[a("step","margin-bottom: 16px;",[C("&:last-child","margin-bottom: 0;"),C(">",[a("step-indicator",[C(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[$("description","margin-top: 8px;")])])])])])]);function ke(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function _e(e){return e.map((t,s)=>ke(t,s))}const Ie=Object.assign(Object.assign({},H.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),V=ne("n-steps"),Te=B({name:"Steps",props:Ie,setup(e,{slots:t}){const{mergedClsPrefixRef:s,mergedRtlRef:i}=M(e),l=ie("Steps",i,s),c=H("Steps","-steps",$e,ye,e,s);return oe(V,{props:e,mergedThemeRef:c,mergedClsPrefixRef:s,stepsSlots:t}),{mergedClsPrefix:s,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},_e(se(ge(this))))}}),Pe={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},F=B({name:"Step",props:Pe,setup(e){const t=ae(V,null);t||le("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:s}=M(),{props:i,mergedThemeRef:l,mergedClsPrefixRef:c,stepsSlots:r}=t,f=S(()=>i.vertical),w=S(()=>{const{status:n}=e;if(n)return n;{const{internalIndex:d}=e,{current:z}=i;if(z===void 0)return"process";if(d<z)return"finish";if(d===z)return i.status||"process";if(d>z)return"wait"}return"process"}),R=S(()=>{const{value:n}=w,{size:d}=i,{common:{cubicBezierEaseInOut:z},self:{stepHeaderFontWeight:q,[h("stepHeaderFontSize",d)]:A,[h("indicatorIndexFontSize",d)]:K,[h("indicatorSize",d)]:G,[h("indicatorIconSize",d)]:L,[h("indicatorTextColor",n)]:J,[h("indicatorBorderColor",n)]:Q,[h("headerTextColor",n)]:X,[h("splitorColor",n)]:Y,[h("indicatorColor",n)]:Z,[h("descriptionTextColor",n)]:ee}}=l.value;return{"--n-bezier":z,"--n-description-text-color":ee,"--n-header-text-color":X,"--n-indicator-border-color":Q,"--n-indicator-color":Z,"--n-indicator-icon-size":L,"--n-indicator-index-font-size":K,"--n-indicator-size":G,"--n-indicator-text-color":J,"--n-splitor-color":Y,"--n-step-header-font-size":A,"--n-step-header-font-weight":q}}),x=s?ce("step",S(()=>{const{value:n}=w,{size:d}=i;return`${n[0]}${d[0]}`}),R,i):void 0,U=S(()=>{if(e.disabled)return;const{onUpdateCurrent:n,"onUpdate:current":d}=i;return n||d?()=>{n&&E(n,e.internalIndex),d&&E(d,e.internalIndex)}:void 0});return{stepsSlots:r,mergedClsPrefix:c,vertical:f,mergedStatus:w,handleStepClick:U,cssVars:s?void 0:R,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:s,disabled:i}=this,l=N(this.$slots.default,c=>{const r=c||this.description;return r?o("div",{class:`${e}-step-content__description`},r):null});return t==null||t(),o("div",{class:[`${e}-step`,i&&`${e}-step--disabled`,!i&&s&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:s},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(de,null,{default:()=>N(this.$slots.icon,c=>{const{mergedStatus:r,stepsSlots:f}=this;return r==="finish"||r==="error"?r==="finish"?o(W,{clsPrefix:e,key:"finish"},{default:()=>T(f["finish-icon"],()=>[o(Se,null)])}):r==="error"?o(W,{clsPrefix:e,key:"error"},{default:()=>T(f["error-icon"],()=>[o(pe,null)])}):null:c||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},T(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),l))}}),Fe=e=>(fe("data-v-b17c74e1"),e=e(),ve(),e),Be={class:"wizard"},Re={class:"steps"},Ee={class:"step-indicator"},Ne={key:0},We={key:1},De={key:2},Oe={key:3},je={key:4},He={key:5},Me={class:"navigation"},Ve={class:"step-content"},Ue=Fe(()=>b("div",{class:"bottom-padding"},null,-1)),qe={__name:"Wizard",setup(e){he();const t=D(1),s=D("process"),i=S(()=>t.value===1?me.clinics.length>0:!0),l=()=>{t.value<3&&t.value++},c=()=>{t.value>1&&t.value--};return(r,f)=>(p(),m("div",Be,[b("div",Re,[k(g(Te),{class:"steps-component",current:t.value,"onUpdate:current":f[0]||(f[0]=w=>t.value=w),status:s.value},{default:P(()=>[k(g(F),{title:r.$t("wizard.selectClinics"),description:r.$t("wizard.selectClinicsDesc")},null,8,["title","description"]),k(g(F),{title:r.$t("wizard.selectServices"),description:r.$t("wizard.selectServicesDesc")},null,8,["title","description"]),k(g(F),{title:r.$t("wizard.requestOffers"),description:r.$t("wizard.requestOffersDesc")},null,8,["title","description"])]),_:1},8,["current","status"]),b("div",Ee,[b("p",null,v(r.$t("wizard.stepXofY",{current:t.value,total:3})),1),t.value===1?(p(),m("h2",Ne,v(r.$t("wizard.selectClinics")),1)):u("",!0),t.value===2?(p(),m("h2",We,v(r.$t("wizard.selectServices")),1)):u("",!0),t.value===3?(p(),m("h2",De,v(r.$t("wizard.requestOffers")),1)):u("",!0),t.value===1?(p(),m("p",Oe,v(r.$t("wizard.selectClinicsDesc")),1)):u("",!0),t.value===2?(p(),m("p",je,v(r.$t("wizard.selectServicesDesc")),1)):u("",!0),t.value===3?(p(),m("p",He,v(r.$t("wizard.requestOffersDesc")),1)):u("",!0)]),b("div",Me,[t.value>1?(p(),y(g(j),{key:0,onClick:c},{default:P(()=>[O(v(r.$t("wizard.previous")),1)]),_:1})):u("",!0),t.value<3?(p(),y(g(j),{key:1,type:"primary",onClick:l,disabled:!i.value},{default:P(()=>[O(v(r.$t("wizard.next")),1)]),_:1},8,["disabled"])):u("",!0)])]),b("div",Ve,[t.value===1?(p(),y(xe,{key:0})):u("",!0),t.value===2?(p(),y(ze,{key:1})):u("",!0),t.value===3?(p(),y(Ce,{key:2})):u("",!0)]),Ue]))}},Xe=ue(qe,[["__scopeId","data-v-b17c74e1"]]);export{Xe as default};
