import{d as P,h as i,a as ee,c as a,b as k,e as v,f as S,i as $,g as te,u as M,j as re,k as V,p as ie,l as oe,m as ne,n as se,t as ae,o as g,q as p,r as le,s as R,v as E,w as I,N as ce,x as N,E as de,_ as pe,y as ue,z as W,A as fe,B as w,C as y,D as T,F as m,G as _,H as z,I as b,J as he,K as x,L as j,M as H}from"./index-ZbUo2G-L.js";import{C as ve,S as me}from"./ClinicGrid-xHEN-Pf_.js";import xe from"./RequestOffersPage-Buiju_VV.js";import{g as ge}from"./Space-D12Y-g7Q.js";import"./Carousel-Bp59EoQv.js";import"./clinics-DRcoiyhm.js";const Ce=P({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ze={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function be(e){const{fontWeightStrong:t,baseColor:n,textColorDisabled:r,primaryColor:l,errorColor:c,textColor1:o,textColor2:u}=e;return Object.assign(Object.assign({},ze),{stepHeaderFontWeight:t,indicatorTextColorProcess:n,indicatorTextColorWait:r,indicatorTextColorFinish:l,indicatorTextColorError:c,indicatorBorderColorProcess:l,indicatorBorderColorWait:r,indicatorBorderColorFinish:l,indicatorBorderColorError:c,indicatorColorProcess:l,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:l,splitorColorError:r,headerTextColorProcess:o,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:c,descriptionTextColorProcess:u,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:c})}const Se={name:"Steps",common:ee,self:be},we=a("steps",`
 width: 100%;
 display: flex;
`,[a("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[k("disabled","cursor: not-allowed"),k("clickable",`
 cursor: pointer;
 `),v("&:last-child",[a("step-splitor","display: none;")])]),a("step-splitor",`
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
 `,[S("title",`
 white-space: nowrap;
 flex: 0;
 `)]),S("description",`
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
 `,[S("index",`
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
 `,[$()]),a("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[$()]),a("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[$()])])]),k("vertical","flex-direction: column;",[te("show-description",[v(">",[a("step","padding-bottom: 8px;")])]),v(">",[a("step","margin-bottom: 16px;",[v("&:last-child","margin-bottom: 0;"),v(">",[a("step-indicator",[v(">",[a("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),a("step-content",[S("description","margin-top: 8px;")])])])])])]);function ye(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function ke(e){return e.map((t,n)=>ye(t,n))}const $e=Object.assign(Object.assign({},V.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),O=ne("n-steps"),Ie=P({name:"Steps",props:$e,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:r}=M(e),l=re("Steps",r,n),c=V("Steps","-steps",we,Se,e,n);return ie(O,{props:e,mergedThemeRef:c,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:l}},render(){const{mergedClsPrefix:e}=this;return i("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},ke(oe(ge(this))))}}),Te={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},F=P({name:"Step",props:Te,setup(e){const t=se(O,null);t||ae("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=M(),{props:r,mergedThemeRef:l,mergedClsPrefixRef:c,stepsSlots:o}=t,u=g(()=>r.vertical),C=g(()=>{const{status:s}=e;if(s)return s;{const{internalIndex:d}=e,{current:h}=r;if(h===void 0)return"process";if(d<h)return"finish";if(d===h)return r.status||"process";if(d>h)return"wait"}return"process"}),B=g(()=>{const{value:s}=C,{size:d}=r,{common:{cubicBezierEaseInOut:h},self:{stepHeaderFontWeight:U,[p("stepHeaderFontSize",d)]:A,[p("indicatorIndexFontSize",d)]:q,[p("indicatorSize",d)]:K,[p("indicatorIconSize",d)]:G,[p("indicatorTextColor",s)]:L,[p("indicatorBorderColor",s)]:J,[p("headerTextColor",s)]:X,[p("splitorColor",s)]:Y,[p("indicatorColor",s)]:Q,[p("descriptionTextColor",s)]:Z}}=l.value;return{"--n-bezier":h,"--n-description-text-color":Z,"--n-header-text-color":X,"--n-indicator-border-color":J,"--n-indicator-color":Q,"--n-indicator-icon-size":G,"--n-indicator-index-font-size":q,"--n-indicator-size":K,"--n-indicator-text-color":L,"--n-splitor-color":Y,"--n-step-header-font-size":A,"--n-step-header-font-weight":U}}),f=n?le("step",g(()=>{const{value:s}=C,{size:d}=r;return`${s[0]}${d[0]}`}),B,r):void 0,D=g(()=>{if(e.disabled)return;const{onUpdateCurrent:s,"onUpdate:current":d}=r;return s||d?()=>{s&&R(s,e.internalIndex),d&&R(d,e.internalIndex)}:void 0});return{stepsSlots:o,mergedClsPrefix:c,vertical:u,mergedStatus:C,handleStepClick:D,cssVars:n?void 0:B,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:r}=this,l=E(this.$slots.default,c=>{const o=c||this.description;return o?i("div",{class:`${e}-step-content__description`},o):null});return t==null||t(),i("div",{class:[`${e}-step`,r&&`${e}-step--disabled`,!r&&n&&`${e}-step--clickable`,this.themeClass,l&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},i("div",{class:`${e}-step-indicator`},i("div",{class:`${e}-step-indicator-slot`},i(ce,null,{default:()=>E(this.$slots.icon,c=>{const{mergedStatus:o,stepsSlots:u}=this;return o==="finish"||o==="error"?o==="finish"?i(N,{clsPrefix:e,key:"finish"},{default:()=>I(u["finish-icon"],()=>[i(Ce,null)])}):o==="error"?i(N,{clsPrefix:e,key:"error"},{default:()=>I(u["error-icon"],()=>[i(de,null)])}):null:c||i("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?i("div",{class:`${e}-step-splitor`}):null),i("div",{class:`${e}-step-content`},i("div",{class:`${e}-step-content-header`},i("div",{class:`${e}-step-content-header__title`},I(this.$slots.title,()=>[this.title])),this.vertical?null:i("div",{class:`${e}-step-splitor`})),l))}}),_e={class:"wizard"},Fe={class:"steps"},Pe={class:"step-indicator"},Be={class:"navigation"},Re={class:"step-content"},Ee={__name:"Wizard",setup(e){ue();const t=W(1),n=W("process"),r=g(()=>t.value===1?he.clinics.length>0:!0),l=()=>{t.value<3&&t.value++},c=()=>{t.value>1&&t.value--};return(o,u)=>(x(),fe("div",_e,[w("div",Fe,[y(m(Ie),{class:"steps-component",current:t.value,"onUpdate:current":u[0]||(u[0]=C=>t.value=C),status:n.value},{default:T(()=>[y(m(F),{title:o.$t("wizard.selectClinics"),description:"Select the clinics that you would like to ask for offers."},null,8,["title"]),y(m(F),{title:o.$t("wizard.selectServices"),description:"Describe what services do you need."},null,8,["title"]),y(m(F),{title:o.$t("wizard.requestOffers"),description:"Fill in your contact information and request the offers from the selected clinics."},null,8,["title"])]),_:1},8,["current","status"]),w("div",Pe,_(o.$t("wizard.stepXofY",{current:t.value,total:3})),1),w("div",Be,[t.value>1?(x(),z(m(H),{key:0,onClick:c},{default:T(()=>[j(_(o.$t("wizard.previous")),1)]),_:1})):b("",!0),t.value<3?(x(),z(m(H),{key:1,type:"primary",onClick:l,disabled:!r.value},{default:T(()=>[j(_(o.$t("wizard.next")),1)]),_:1},8,["disabled"])):b("",!0)])]),w("div",Re,[t.value===1?(x(),z(ve,{key:0})):b("",!0),t.value===2?(x(),z(me,{key:1})):b("",!0),t.value===3?(x(),z(xe,{key:2})):b("",!0)])]))}},Oe=pe(Ee,[["__scopeId","data-v-3e9f982f"]]);export{Oe as default};