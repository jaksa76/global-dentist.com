import{d as W,i as a,x as l,y as H,z as v,A as S,C as _,u as U,D as ue,E as K,G as he,b as X,H as fe,I as M,a as Y,h as me,J as ve,K as ge,L as be,c as R,e as k,M as xe,N as G,O as q,P as O,Q as Ce,R as L,S as $e,o as d,k as C,U as ze,_ as J,v as D,V as Q,l as $,p as i,t as m,W as g,F as ke,X as we,n as F,m as x,w,B as E,Y as Se,Z as ye,$ as N,q as _e,r as Te,s as Ie}from"./index-BXE75nQu.js";import{C as Be}from"./TreatmentSelection.vue_vue_type_style_index_0_scoped_e33f5f91_lang-BsBSYZnM.js";import{a as y,b as Pe,s as A}from"./state-yZZTxevt.js";import{N as Re,R as Ne}from"./RequestOffersPage-Cw20ajIc.js";import{g as Fe}from"./Space-BvgTU2sM.js";import"./Carousel-Dvf8cRlY.js";const Ee=W({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),s="0!important",Z="-1px!important";function B(e){return S(`${e}-type`,[v("& +",[l("button",{},[S(`${e}-type`,[_("border",{borderLeftWidth:s}),_("state-border",{left:Z})])])])])}function P(e){return S(`${e}-type`,[v("& +",[l("button",[S(`${e}-type`,[_("border",{borderTopWidth:s}),_("state-border",{top:Z})])])])])}const We=l("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[H("vertical",{flexDirection:"row"},[H("rtl",[l("button",[v("&:first-child:not(:last-child)",`
 margin-right: ${s};
 border-top-right-radius: ${s};
 border-bottom-right-radius: ${s};
 `),v("&:last-child:not(:first-child)",`
 margin-left: ${s};
 border-top-left-radius: ${s};
 border-bottom-left-radius: ${s};
 `),v("&:not(:first-child):not(:last-child)",`
 margin-left: ${s};
 margin-right: ${s};
 border-radius: ${s};
 `),B("default"),S("ghost",[B("primary"),B("info"),B("success"),B("warning"),B("error")])])])]),S("vertical",{flexDirection:"column"},[l("button",[v("&:first-child:not(:last-child)",`
 margin-bottom: ${s};
 margin-left: ${s};
 margin-right: ${s};
 border-bottom-left-radius: ${s};
 border-bottom-right-radius: ${s};
 `),v("&:last-child:not(:first-child)",`
 margin-top: ${s};
 margin-left: ${s};
 margin-right: ${s};
 border-top-left-radius: ${s};
 border-top-right-radius: ${s};
 `),v("&:not(:first-child):not(:last-child)",`
 margin: ${s};
 border-radius: ${s};
 `),P("default"),S("ghost",[P("primary"),P("info"),P("success"),P("warning"),P("error")])])])]),je={size:{type:String,default:void 0},vertical:Boolean},De=W({name:"ButtonGroup",props:je,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=U(e);return ue("-button-group",We,t),K(he,e),{rtlEnabled:X("ButtonGroup",n,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Me={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function Oe(e){const{fontWeightStrong:t,baseColor:n,textColorDisabled:o,primaryColor:p,errorColor:u,textColor1:r,textColor2:c}=e;return Object.assign(Object.assign({},Me),{stepHeaderFontWeight:t,indicatorTextColorProcess:n,indicatorTextColorWait:o,indicatorTextColorFinish:p,indicatorTextColorError:u,indicatorBorderColorProcess:p,indicatorBorderColorWait:o,indicatorBorderColorFinish:p,indicatorBorderColorError:u,indicatorColorProcess:p,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:o,splitorColorWait:o,splitorColorFinish:p,splitorColorError:o,headerTextColorProcess:r,headerTextColorWait:o,headerTextColorFinish:o,headerTextColorError:u,descriptionTextColorProcess:c,descriptionTextColorWait:o,descriptionTextColorFinish:o,descriptionTextColorError:u})}const Ve={name:"Steps",common:fe,self:Oe},He=l("steps",`
 width: 100%;
 display: flex;
`,[l("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[S("disabled","cursor: not-allowed"),S("clickable",`
 cursor: pointer;
 `),v("&:last-child",[l("step-splitor","display: none;")])]),l("step-splitor",`
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
 `),l("step-content","flex: 1;",[l("step-content-header",`
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
 `,[_("title",`
 white-space: nowrap;
 flex: 0;
 `)]),_("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l("step-indicator",`
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
 `,[l("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[_("index",`
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
 `,[M()]),l("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[M()]),l("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[M()])])]),S("vertical","flex-direction: column;",[H("show-description",[v(">",[l("step","padding-bottom: 8px;")])]),v(">",[l("step","margin-bottom: 16px;",[v("&:last-child","margin-bottom: 0;"),v(">",[l("step-indicator",[v(">",[l("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),l("step-content",[_("description","margin-top: 8px;")])])])])])]);function Ue(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Ge(e){return e.map((t,n)=>Ue(t,n))}const qe=Object.assign(Object.assign({},Y.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),ee=ve("n-steps"),Le=W({name:"Steps",props:qe,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:o}=U(e),p=X("Steps",o,n),u=Y("Steps","-steps",He,Ve,e,n);return K(ee,{props:e,mergedThemeRef:u,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:p}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Ge(me(Fe(this))))}}),Ae={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},V=W({name:"Step",props:Ae,setup(e){const t=ge(ee,null);t||be("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=U(),{props:o,mergedThemeRef:p,mergedClsPrefixRef:u,stepsSlots:r}=t,c=R(()=>o.vertical),z=R(()=>{const{status:h}=e;if(h)return h;{const{internalIndex:f}=e,{current:I}=o;if(I===void 0)return"process";if(f<I)return"finish";if(f===I)return o.status||"process";if(f>I)return"wait"}return"process"}),T=R(()=>{const{value:h}=z,{size:f}=o,{common:{cubicBezierEaseInOut:I},self:{stepHeaderFontWeight:te,[k("stepHeaderFontSize",f)]:re,[k("indicatorIndexFontSize",f)]:oe,[k("indicatorSize",f)]:ie,[k("indicatorIconSize",f)]:se,[k("indicatorTextColor",h)]:ne,[k("indicatorBorderColor",h)]:ae,[k("headerTextColor",h)]:le,[k("splitorColor",h)]:ce,[k("indicatorColor",h)]:de,[k("descriptionTextColor",h)]:pe}}=p.value;return{"--n-bezier":I,"--n-description-text-color":pe,"--n-header-text-color":le,"--n-indicator-border-color":ae,"--n-indicator-color":de,"--n-indicator-icon-size":se,"--n-indicator-index-font-size":oe,"--n-indicator-size":ie,"--n-indicator-text-color":ne,"--n-splitor-color":ce,"--n-step-header-font-size":re,"--n-step-header-font-weight":te}}),b=n?xe("step",R(()=>{const{value:h}=z,{size:f}=o;return`${h[0]}${f[0]}`}),T,o):void 0,j=R(()=>{if(e.disabled)return;const{onUpdateCurrent:h,"onUpdate:current":f}=o;return h||f?()=>{h&&G(h,e.internalIndex),f&&G(f,e.internalIndex)}:void 0});return{stepsSlots:r,mergedClsPrefix:u,vertical:c,mergedStatus:z,handleStepClick:j,cssVars:n?void 0:T,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:o}=this,p=q(this.$slots.default,u=>{const r=u||this.description;return r?a("div",{class:`${e}-step-content__description`},r):null});return t==null||t(),a("div",{class:[`${e}-step`,o&&`${e}-step--disabled`,!o&&n&&`${e}-step--clickable`,this.themeClass,p&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(Ce,null,{default:()=>q(this.$slots.icon,u=>{const{mergedStatus:r,stepsSlots:c}=this;return r==="finish"||r==="error"?r==="finish"?a(L,{clsPrefix:e,key:"finish"},{default:()=>O(c["finish-icon"],()=>[a(Ee,null)])}):r==="error"?a(L,{clsPrefix:e,key:"error"},{default:()=>O(c["error-icon"],()=>[a($e,null)])}):null:u||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},O(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),p))}}),Ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xe=ze('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>',6),Ye=[Xe],Je=W({name:"TrashOutline",render:function(t,n){return d(),C("svg",Ke,Ye)}}),Qe={class:"service-selection"},Ze={class:"selected-services"},et={key:0},tt={__name:"TreatmentSelection",emits:["change"],setup(e,{emit:t}){const n=D(!1),{t:o}=Q(),p=c=>o("treatments."+c),u=c=>{y.addTreatment(c),n.value=!1},r=D(!1);return(c,z)=>(d(),C("div",Qe,[$("ul",Ze,[Object.keys(i(y).treatments).length===0?(d(),C("li",et,m(c.$t("message.noServiceSelected")),1)):g("",!0),(d(!0),C(ke,null,we(i(y).treatments,(T,b)=>(d(),C("li",{class:"selected-service",key:b},[$("span",null,[$("b",null,m(T)+" x",1),F(" "+m(p(b)),1)]),x(i(De),null,{default:w(()=>[x(i(E),{size:"small",onClick:j=>i(y).decTreatment(b)},{default:w(()=>[F("-")]),_:2},1032,["onClick"]),x(i(E),{size:"small",onClick:j=>i(y).incTreatment(b)},{default:w(()=>[F("+")]),_:2},1032,["onClick"]),x(i(E),{size:"small",onClick:j=>i(y).removeTreatment(b)},{default:w(()=>[x(i(Se),null,{default:w(()=>[x(i(Je))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]))),128))]),x(i(ye),{options:i(Pe),onSelect:u,size:"large",trigger:"click"},{default:w(()=>[x(i(E),{id:"service-selection-button",type:"primary"},{default:w(()=>[F(m(c.$t("message.addService")),1)]),_:1})]),_:1},8,["options"]),$("div",null,[$("a",{href:"#",class:"showNotesButton",onClick:z[0]||(z[0]=T=>r.value=!r.value)},m(r.value?c.$t("message.hideNotes"):c.$t("message.addNotes")),1),r.value?(d(),N(i(Re),{key:0,id:"notes",type:"textarea",autosize:{minRows:3,maxRows:5},value:i(y).notes,"onUpdate:value":z[1]||(z[1]=T=>i(y).notes=T),placeholder:c.$t("message.notesPlaceholder")},null,8,["value","placeholder"])):g("",!0)])]))}},rt=J(tt,[["__scopeId","data-v-e33f5f91"]]),ot=e=>(Te("data-v-525ce5bb"),e=e(),Ie(),e),it={class:"wizard"},st={class:"steps"},nt={class:"step-indicator"},at={key:0},lt={key:1},ct={key:2},dt={key:3},pt={key:4},ut={key:5},ht={class:"navigation"},ft={class:"step-content"},mt=ot(()=>$("div",{class:"bottom-padding"},null,-1)),vt={__name:"Wizard",setup(e){Q();const t=D(1),n=D("process"),o=R(()=>t.value===1?A.clinics.length>0:!0),p=()=>{t.value<3&&t.value++},u=()=>{t.value>1&&t.value--};return(r,c)=>(d(),C("div",it,[$("div",st,[x(i(Le),{class:"steps-component",current:t.value,"onUpdate:current":c[0]||(c[0]=z=>t.value=z),status:n.value},{default:w(()=>[x(i(V),{title:r.$t("wizard.selectClinics"),description:r.$t("wizard.selectClinicsDesc")},null,8,["title","description"]),x(i(V),{title:r.$t("wizard.selectTreatments"),description:r.$t("wizard.selectTreatmentsDesc")},null,8,["title","description"]),x(i(V),{title:r.$t("wizard.requestOffers"),description:r.$t("wizard.requestOffersDesc")},null,8,["title","description"])]),_:1},8,["current","status"]),$("div",nt,[$("p",null,m(r.$t("wizard.stepXofY",{current:t.value,total:3})),1),t.value===1?(d(),C("h2",at,m(r.$t("wizard.selectClinics")),1)):g("",!0),t.value===2?(d(),C("h2",lt,m(r.$t("wizard.selectTreatments")),1)):g("",!0),t.value===3?(d(),C("h2",ct,m(r.$t("wizard.requestOffers")),1)):g("",!0),t.value===1?(d(),C("p",dt,m(r.$t("wizard.selectClinicsDesc")),1)):g("",!0),t.value===2?(d(),C("p",pt,m(r.$t("wizard.selectTreatmentsDesc")),1)):g("",!0),t.value===3?(d(),C("p",ut,m(r.$t("wizard.requestOffersDesc")),1)):g("",!0)]),$("div",ht,[t.value>1?(d(),N(i(E),{key:0,onClick:u},{default:w(()=>[F(m(r.$t("wizard.previous")),1)]),_:1})):g("",!0),t.value<3?(d(),N(i(E),{key:1,type:"primary",onClick:p,disabled:!o.value,class:_e({"animate-next":t.value===1&&i(A).clinics.length>0})},{default:w(()=>[F(m(r.$t("wizard.next")),1)]),_:1},8,["disabled","class"])):g("",!0)])]),$("div",ft,[t.value===1?(d(),N(Be,{key:0})):g("",!0),t.value===2?(d(),N(rt,{key:1})):g("",!0),t.value===3?(d(),N(Ne,{key:2})):g("",!0)]),mt]))}},kt=J(vt,[["__scopeId","data-v-525ce5bb"]]);export{kt as default};
