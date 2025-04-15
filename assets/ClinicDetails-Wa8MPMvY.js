const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/leaflet-src-CxpSAQsi.js","assets/index-Xw2_clFB.js","assets/index-COoRUktF.css"])))=>i.map(i=>d[i]);
import{d as X,x as L,aS as xa,aT as Ca,i as T,aU as rt,aV as Sa,aW as Me,aX as wa,y as _a,I as $a,J as fe,K as Ta,c as Q,af as La,F as ie,Q as ka,aY as Ra,aZ as Pa,a_ as Ba,z as v,A as k,C as G,D as Z,G as za,u as Aa,a as Ct,a$ as st,h as Ue,aC as Ia,aB as ge,a1 as be,H as oe,ad as te,b0 as ja,aQ as Oa,e as ae,b1 as Ae,L as Ea,N as it,ag as Ge,M as Ie,f as Wa,aD as ne,aJ as Ma,a7 as Va,b2 as Na,ai as Da,o as y,k as R,l as s,_ as Xe,m as q,w as K,W as J,p as N,V as M,Y as ve,q as $e,t as B,n as We,r as Ua,v as Ga,b3 as re,b4 as Te,b5 as Ha,a9 as St,b6 as Ye,b7 as Fa,b8 as qa,j as Za,s as lt,a5 as dt,B as Xa}from"./index-Xw2_clFB.js";import{c as Ya}from"./clinics-DqPopm-J.js";/* empty css                                                                     */import{b as je,N as ct,a as Ja}from"./Rate-BpLgCo6Q.js";const Ka=rt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[rt("&::-webkit-scrollbar",{width:0,height:0})]),Qa=X({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function t(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const a=xa();return Ka.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ca,ssr:a}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...n){var r;(r=e.value)===null||r===void 0||r.scrollTo(...n)}})},render(){return T("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var eo=/\s/;function to(e){for(var t=e.length;t--&&eo.test(e.charAt(t)););return t}var ao=/^\s+/;function oo(e){return e&&e.slice(0,to(e)+1).replace(ao,"")}var ut=NaN,no=/^[-+]0x[0-9a-f]+$/i,ro=/^0b[01]+$/i,so=/^0o[0-7]+$/i,io=parseInt;function ft(e){if(typeof e=="number")return e;if(Sa(e))return ut;if(Me(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Me(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=oo(e);var a=ro.test(e);return a||so.test(e)?io(e.slice(2),a?2:8):no.test(e)?ut:+e}var He=function(){return wa.Date.now()},lo="Expected a function",co=Math.max,uo=Math.min;function fo(e,t,a){var o,n,r,d,c,m,g=0,f=!1,x=!1,w=!0;if(typeof e!="function")throw new TypeError(lo);t=ft(t)||0,Me(a)&&(f=!!a.leading,x="maxWait"in a,r=x?co(ft(a.maxWait)||0,t):r,w="trailing"in a?!!a.trailing:w);function h(_){var D=o,F=n;return o=n=void 0,g=_,d=e.apply(F,D),d}function j(_){return g=_,c=setTimeout(S,t),f?h(_):d}function O(_){var D=_-m,F=_-g,$=t-D;return x?uo($,r-F):$}function E(_){var D=_-m,F=_-g;return m===void 0||D>=t||D<0||x&&F>=r}function S(){var _=He();if(E(_))return P(_);c=setTimeout(S,O(_))}function P(_){return c=void 0,w&&o?h(_):(o=n=void 0,d)}function W(){c!==void 0&&clearTimeout(c),g=0,o=m=n=c=void 0}function z(){return c===void 0?d:P(He())}function A(){var _=He(),D=E(_);if(o=arguments,n=this,m=_,D){if(c===void 0)return j(m);if(x)return clearTimeout(c),c=setTimeout(S,t),h(m)}return c===void 0&&(c=setTimeout(S,t)),d}return A.cancel=W,A.flush=z,A}var bo="Expected a function";function Fe(e,t,a){var o=!0,n=!0;if(typeof e!="function")throw new TypeError(bo);return Me(a)&&(o="leading"in a?!!a.leading:o,n="trailing"in a?!!a.trailing:n),fo(e,t,{leading:o,maxWait:t,trailing:n})}const po=X({name:"Add",render(){return T("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),vo={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function go(e){const{textColor2:t,primaryColor:a,textColorDisabled:o,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:c,closeColorPressed:m,tabColor:g,baseColor:f,dividerColor:x,fontWeight:w,textColor1:h,borderRadius:j,fontSize:O,fontWeightStrong:E}=e;return Object.assign(Object.assign({},vo),{colorSegment:g,tabFontSizeCard:O,tabTextColorLine:h,tabTextColorActiveLine:a,tabTextColorHoverLine:a,tabTextColorDisabledLine:o,tabTextColorSegment:h,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:o,tabTextColorBar:h,tabTextColorActiveBar:a,tabTextColorHoverBar:a,tabTextColorDisabledBar:o,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:a,tabTextColorDisabledCard:o,barColor:a,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:c,closeColorPressed:m,closeBorderRadius:j,tabColor:g,tabColorSegment:f,tabBorderColor:x,tabFontWeightActive:w,tabFontWeight:w,tabBorderRadius:j,paneTextColor:t,fontWeightStrong:E})}const mo={name:"Tabs",common:_a,self:go},Je=$a("n-tabs"),wt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},pe=X({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:wt,setup(e){const t=fe(Je,null);return t||Ta("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return T("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ho=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ba(wt,["displayDirective"])),Ze=X({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ho,setup(e){const{mergedClsPrefixRef:t,valueRef:a,typeRef:o,closableRef:n,tabStyleRef:r,addTabStyleRef:d,tabClassRef:c,addTabClassRef:m,tabChangeIdRef:g,onBeforeLeaveRef:f,triggerRef:x,handleAdd:w,activateTab:h,handleClose:j}=fe(Je);return{trigger:x,mergedClosable:Q(()=>{if(e.internalAddable)return!1;const{closable:O}=e;return O===void 0?n.value:O}),style:r,addStyle:d,tabClass:c,addTabClass:m,clsPrefix:t,value:a,type:o,handleClose(O){O.stopPropagation(),!e.disabled&&j(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){w();return}const{name:O}=e,E=++g.id;if(O!==a.value){const{value:S}=f;S?Promise.resolve(S(e.name,a.value)).then(P=>{P&&g.id===E&&h(O)}):h(O)}}}},render(){const{internalAddable:e,clsPrefix:t,name:a,disabled:o,label:n,tab:r,value:d,mergedClosable:c,trigger:m,$slots:{default:g}}=this,f=n??r;return T("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?T("div",{class:`${t}-tabs-tab-pad`}):null,T("div",Object.assign({key:a,"data-name":a,"data-disabled":o?!0:void 0},La({class:[`${t}-tabs-tab`,d===a&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),T("span",{class:`${t}-tabs-tab__label`},e?T(ie,null,T("div",{class:`${t}-tabs-tab__height-placeholder`}," "),T(ka,{clsPrefix:t},{default:()=>T(po,null)})):g?g():typeof f=="object"?f:Ra(f??a)),c&&this.type==="card"?T(Pa,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),yo=v("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[k("segment-type",[v("tabs-rail",[G("&.transition-disabled",[v("tabs-capsule",`
 transition: none;
 `)])])]),k("top",[v("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),k("left",[v("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),k("left, right",`
 flex-direction: row;
 `,[v("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),v("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),k("right",`
 flex-direction: row-reverse;
 `,[v("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),v("tabs-bar",`
 left: 0;
 `)]),k("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[v("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),v("tabs-bar",`
 top: 0;
 `)]),v("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),v("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[v("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[k("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),G("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),k("flex",[v("tabs-nav",`
 width: 100%;
 position: relative;
 `,[v("tabs-wrapper",`
 width: 100%;
 `,[v("tabs-tab",`
 margin-right: 0;
 `)])])]),v("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[Z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),Z("prefix","padding-right: 16px;"),Z("suffix","padding-left: 16px;")]),k("top, bottom",[v("tabs-nav-scroll-wrapper",[G("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),G("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),k("shadow-start",[G("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),k("shadow-end",[G("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),k("left, right",[v("tabs-nav-scroll-content",`
 flex-direction: column;
 `),v("tabs-nav-scroll-wrapper",[G("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),G("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),k("shadow-start",[G("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),k("shadow-end",[G("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),v("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[v("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[G("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),G("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),v("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),v("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),v("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),v("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("disabled",{cursor:"not-allowed"}),Z("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Z("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),v("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[G("&.transition-disabled",`
 transition: none;
 `),k("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),v("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),v("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[G("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),G("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),G("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),G("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),G("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),v("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),k("line-type, bar-type",[v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[G("&:hover",{color:"var(--n-tab-text-color-hover)"}),k("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),k("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),v("tabs-nav",[k("line-type",[k("top",[Z("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 bottom: -1px;
 `)]),k("left",[Z("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 right: -1px;
 `)]),k("right",[Z("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 left: -1px;
 `)]),k("bottom",[Z("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),v("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),v("tabs-bar",`
 top: -1px;
 `)]),Z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-bar",`
 border-radius: 0;
 `)]),k("card-type",[Z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),v("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[k("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[Z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),za("disabled",[G("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),k("closable","padding-right: 8px;"),k("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),k("disabled","color: var(--n-tab-text-color-disabled);")]),v("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),k("left, right",[v("tabs-wrapper",`
 flex-direction: column;
 `,[v("tabs-tab-wrapper",`
 flex-direction: column;
 `,[v("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),k("top",[k("card-type",[v("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[k("active",`
 border-bottom: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),k("left",[k("card-type",[v("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[k("active",`
 border-right: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),k("right",[k("card-type",[v("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[k("active",`
 border-left: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),k("bottom",[k("card-type",[v("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[k("active",`
 border-top: 1px solid #0000;
 `)]),v("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),v("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),xo=Object.assign(Object.assign({},Ct.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Co=X({name:"Tabs",props:xo,setup(e,{slots:t}){var a,o,n,r;const{mergedClsPrefixRef:d,inlineThemeDisabled:c}=Aa(e),m=Ct("Tabs","-tabs",yo,mo,e,d),g=L(null),f=L(null),x=L(null),w=L(null),h=L(null),j=L(null),O=L(!0),E=L(!0),S=st(e,["labelSize","size"]),P=st(e,["activeName","value"]),W=L((o=(a=P.value)!==null&&a!==void 0?a:e.defaultValue)!==null&&o!==void 0?o:t.default?(r=(n=Ue(t.default())[0])===null||n===void 0?void 0:n.props)===null||r===void 0?void 0:r.name:null),z=Ia(P,W),A={id:0},_=Q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ge(z,()=>{A.id=0,se(),ee()});function D(){var i;const{value:l}=z;return l===null?null:(i=g.value)===null||i===void 0?void 0:i.querySelector(`[data-name="${l}"]`)}function F(i){if(e.type==="card")return;const{value:l}=f;if(!l)return;const C=l.style.opacity==="0";if(i){const I=`${d.value}-tabs-bar--disabled`,{barWidth:U,placement:Y}=e;if(i.dataset.disabled==="true"?l.classList.add(I):l.classList.remove(I),["top","bottom"].includes(Y)){if(V(["top","maxHeight","height"]),typeof U=="number"&&i.offsetWidth>=U){const de=Math.floor((i.offsetWidth-U)/2)+i.offsetLeft;l.style.left=`${de}px`,l.style.maxWidth=`${U}px`}else l.style.left=`${i.offsetLeft}px`,l.style.maxWidth=`${i.offsetWidth}px`;l.style.width="8192px",C&&(l.style.transition="none"),l.offsetWidth,C&&(l.style.transition="",l.style.opacity="1")}else{if(V(["left","maxWidth","width"]),typeof U=="number"&&i.offsetHeight>=U){const de=Math.floor((i.offsetHeight-U)/2)+i.offsetTop;l.style.top=`${de}px`,l.style.maxHeight=`${U}px`}else l.style.top=`${i.offsetTop}px`,l.style.maxHeight=`${i.offsetHeight}px`;l.style.height="8192px",C&&(l.style.transition="none"),l.offsetHeight,C&&(l.style.transition="",l.style.opacity="1")}}}function $(){if(e.type==="card")return;const{value:i}=f;i&&(i.style.opacity="0")}function V(i){const{value:l}=f;if(l)for(const C of i)l.style[C]=""}function se(){if(e.type==="card")return;const i=D();i?F(i):$()}function ee(){var i;const l=(i=h.value)===null||i===void 0?void 0:i.$el;if(!l)return;const C=D();if(!C)return;const{scrollLeft:I,offsetWidth:U}=l,{offsetLeft:Y,offsetWidth:de}=C;I>Y?l.scrollTo({top:0,left:Y,behavior:"smooth"}):Y+de>I+U&&l.scrollTo({top:0,left:Y+de-U,behavior:"smooth"})}const he=L(null);let b=0,p=null;function u(i){const l=he.value;if(l){b=i.getBoundingClientRect().height;const C=`${b}px`,I=()=>{l.style.height=C,l.style.maxHeight=C};p?(I(),p(),p=null):p=I}}function H(i){const l=he.value;if(l){const C=i.getBoundingClientRect().height,I=()=>{document.body.offsetHeight,l.style.maxHeight=`${C}px`,l.style.height=`${Math.max(b,C)}px`};p?(p(),p=null,I()):p=I}}function Et(){const i=he.value;if(i){i.style.maxHeight="",i.style.height="";const{paneWrapperStyle:l}=e;if(typeof l=="string")i.style.cssText=l;else if(l){const{maxHeight:C,height:I}=l;C!==void 0&&(i.style.maxHeight=C),I!==void 0&&(i.style.height=I)}}}const et={value:[]},tt=L("next");function Wt(i){const l=z.value;let C="next";for(const I of et.value){if(I===l)break;if(I===i){C="prev";break}}tt.value=C,Mt(i)}function Mt(i){const{onActiveNameChange:l,onUpdateValue:C,"onUpdate:value":I}=e;l&&Ie(l,i),C&&Ie(C,i),I&&Ie(I,i),W.value=i}function Vt(i){const{onClose:l}=e;l&&Ie(l,i)}function at(){const{value:i}=f;if(!i)return;const l="transition-disabled";i.classList.add(l),se(),i.classList.remove(l)}const ye=L(null);function Ne({transitionDisabled:i}){const l=g.value;if(!l)return;i&&l.classList.add("transition-disabled");const C=D();C&&ye.value&&(ye.value.style.width=`${C.offsetWidth}px`,ye.value.style.height=`${C.offsetHeight}px`,ye.value.style.transform=`translateX(${C.offsetLeft-Wa(getComputedStyle(l).paddingLeft)}px)`,i&&ye.value.offsetWidth),i&&l.classList.remove("transition-disabled")}ge([z],()=>{e.type==="segment"&&ne(()=>{Ne({transitionDisabled:!1})})}),be(()=>{e.type==="segment"&&Ne({transitionDisabled:!0})});let ot=0;function Nt(i){var l;if(i.contentRect.width===0&&i.contentRect.height===0||ot===i.contentRect.width)return;ot=i.contentRect.width;const{type:C}=e;if((C==="line"||C==="bar")&&at(),C!=="segment"){const{placement:I}=e;De((I==="top"||I==="bottom"?(l=h.value)===null||l===void 0?void 0:l.$el:j.value)||null)}}const Dt=Fe(Nt,64);ge([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{const{type:i}=e;(i==="line"||i==="bar")&&at()})});const Be=L(!1);function Ut(i){var l;const{target:C,contentRect:{width:I}}=i,U=C.parentElement.offsetWidth;if(!Be.value)U<I&&(Be.value=!0);else{const{value:Y}=w;if(!Y)return;U-I>Y.$el.offsetWidth&&(Be.value=!1)}De(((l=h.value)===null||l===void 0?void 0:l.$el)||null)}const Gt=Fe(Ut,64);function Ht(){const{onAdd:i}=e;i&&i(),ne(()=>{const l=D(),{value:C}=h;!l||!C||C.scrollTo({left:l.offsetLeft,top:0,behavior:"smooth"})})}function De(i){if(!i)return;const{placement:l}=e;if(l==="top"||l==="bottom"){const{scrollLeft:C,scrollWidth:I,offsetWidth:U}=i;O.value=C<=0,E.value=C+U>=I}else{const{scrollTop:C,scrollHeight:I,offsetHeight:U}=i;O.value=C<=0,E.value=C+U>=I}}const Ft=Fe(i=>{De(i.target)},64);oe(Je,{triggerRef:te(e,"trigger"),tabStyleRef:te(e,"tabStyle"),tabClassRef:te(e,"tabClass"),addTabStyleRef:te(e,"addTabStyle"),addTabClassRef:te(e,"addTabClass"),paneClassRef:te(e,"paneClass"),paneStyleRef:te(e,"paneStyle"),mergedClsPrefixRef:d,typeRef:te(e,"type"),closableRef:te(e,"closable"),valueRef:z,tabChangeIdRef:A,onBeforeLeaveRef:te(e,"onBeforeLeave"),activateTab:Wt,handleClose:Vt,handleAdd:Ht}),ja(()=>{se(),ee()}),Oa(()=>{const{value:i}=x;if(!i)return;const{value:l}=d,C=`${l}-tabs-nav-scroll-wrapper--shadow-start`,I=`${l}-tabs-nav-scroll-wrapper--shadow-end`;O.value?i.classList.remove(C):i.classList.add(C),E.value?i.classList.remove(I):i.classList.add(I)});const qt={syncBarPosition:()=>{se()}},Zt=()=>{Ne({transitionDisabled:!0})},nt=Q(()=>{const{value:i}=S,{type:l}=e,C={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[l],I=`${i}${C}`,{self:{barColor:U,closeIconColor:Y,closeIconColorHover:de,closeIconColorPressed:Xt,tabColor:Yt,tabBorderColor:Jt,paneTextColor:Kt,tabFontWeight:Qt,tabBorderRadius:ea,tabFontWeightActive:ta,colorSegment:aa,fontWeightStrong:oa,tabColorSegment:na,closeSize:ra,closeIconSize:sa,closeColorHover:ia,closeColorPressed:la,closeBorderRadius:da,[ae("panePadding",i)]:ze,[ae("tabPadding",I)]:ca,[ae("tabPaddingVertical",I)]:ua,[ae("tabGap",I)]:fa,[ae("tabGap",`${I}Vertical`)]:ba,[ae("tabTextColor",l)]:pa,[ae("tabTextColorActive",l)]:va,[ae("tabTextColorHover",l)]:ga,[ae("tabTextColorDisabled",l)]:ma,[ae("tabFontSize",i)]:ha},common:{cubicBezierEaseInOut:ya}}=m.value;return{"--n-bezier":ya,"--n-color-segment":aa,"--n-bar-color":U,"--n-tab-font-size":ha,"--n-tab-text-color":pa,"--n-tab-text-color-active":va,"--n-tab-text-color-disabled":ma,"--n-tab-text-color-hover":ga,"--n-pane-text-color":Kt,"--n-tab-border-color":Jt,"--n-tab-border-radius":ea,"--n-close-size":ra,"--n-close-icon-size":sa,"--n-close-color-hover":ia,"--n-close-color-pressed":la,"--n-close-border-radius":da,"--n-close-icon-color":Y,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":Xt,"--n-tab-color":Yt,"--n-tab-font-weight":Qt,"--n-tab-font-weight-active":ta,"--n-tab-padding":ca,"--n-tab-padding-vertical":ua,"--n-tab-gap":fa,"--n-tab-gap-vertical":ba,"--n-pane-padding-left":Ae(ze,"left"),"--n-pane-padding-right":Ae(ze,"right"),"--n-pane-padding-top":Ae(ze,"top"),"--n-pane-padding-bottom":Ae(ze,"bottom"),"--n-font-weight-strong":oa,"--n-tab-color-segment":na}}),xe=c?Ea("tabs",Q(()=>`${S.value[0]}${e.type[0]}`),nt,e):void 0;return Object.assign({mergedClsPrefix:d,mergedValue:z,renderedNames:new Set,segmentCapsuleElRef:ye,tabsPaneWrapperRef:he,tabsElRef:g,barElRef:f,addTabInstRef:w,xScrollInstRef:h,scrollWrapperElRef:x,addTabFixed:Be,tabWrapperStyle:_,handleNavResize:Dt,mergedSize:S,handleScroll:Ft,handleTabsResize:Gt,cssVars:c?void 0:nt,themeClass:xe==null?void 0:xe.themeClass,animationDirection:tt,renderNameListRef:et,yScrollElRef:j,handleSegmentResize:Zt,onAnimationBeforeLeave:u,onAnimationEnter:H,onAnimationAfterEnter:Et,onRender:xe==null?void 0:xe.onRender},qt)},render(){const{mergedClsPrefix:e,type:t,placement:a,addTabFixed:o,addable:n,mergedSize:r,renderNameListRef:d,onRender:c,paneWrapperClass:m,paneWrapperStyle:g,$slots:{default:f,prefix:x,suffix:w}}=this;c==null||c();const h=f?Ue(f()).filter(A=>A.type.__TAB_PANE__===!0):[],j=f?Ue(f()).filter(A=>A.type.__TAB__===!0):[],O=!j.length,E=t==="card",S=t==="segment",P=!E&&!S&&this.justifyContent;d.value=[];const W=()=>{const A=T("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},P?null:T("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),O?h.map((_,D)=>(d.value.push(_.props.name),qe(T(Ze,Object.assign({},_.props,{internalCreatedByPane:!0,internalLeftPadded:D!==0&&(!P||P==="center"||P==="start"||P==="end")}),_.children?{default:_.children.tab}:void 0)))):j.map((_,D)=>(d.value.push(_.props.name),qe(D!==0&&!P?vt(_):_))),!o&&n&&E?pt(n,(O?h.length:j.length)!==0):null,P?null:T("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return T("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},E&&n?T(Ge,{onResize:this.handleTabsResize},{default:()=>A}):A,E?T("div",{class:`${e}-tabs-pad`}):null,E?null:T("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},z=S?"top":a;return T("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${r}-size`,P&&`${e}-tabs--flex`,`${e}-tabs--${z}`],style:this.cssVars},T("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${z}`,`${e}-tabs-nav`]},it(x,A=>A&&T("div",{class:`${e}-tabs-nav__prefix`},A)),S?T(Ge,{onResize:this.handleSegmentResize},{default:()=>T("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},T("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},T("div",{class:`${e}-tabs-wrapper`},T("div",{class:`${e}-tabs-tab`}))),O?h.map((A,_)=>(d.value.push(A.props.name),T(Ze,Object.assign({},A.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0}),A.children?{default:A.children.tab}:void 0))):j.map((A,_)=>(d.value.push(A.props.name),_===0?A:vt(A))))}):T(Ge,{onResize:this.handleNavResize},{default:()=>T("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(z)?T(Qa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:W}):T("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},W()))}),o&&n&&E?pt(n,!0):null,it(w,A=>A&&T("div",{class:`${e}-tabs-nav__suffix`},A))),O&&(this.animated&&(z==="top"||z==="bottom")?T("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,m]},bt(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):bt(h,this.mergedValue,this.renderedNames)))}});function bt(e,t,a,o,n,r,d){const c=[];return e.forEach(m=>{const{name:g,displayDirective:f,"display-directive":x}=m.props,w=j=>f===j||x===j,h=t===g;if(m.key!==void 0&&(m.key=g),h||w("show")||w("show:lazy")&&a.has(g)){a.has(g)||a.add(g);const j=!w("if");c.push(j?Ma(m,[[Va,h]]):m)}}),d?T(Na,{name:`${d}-transition`,onBeforeLeave:o,onEnter:n,onAfterEnter:r},{default:()=>c}):c}function pt(e,t){return T(Ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function vt(e){const t=Da(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function qe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const So={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},wo=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M328 112L184 256l144 144"},null,-1),_o=[wo],gt=X({name:"ChevronBack",render:function(t,a){return y(),R("svg",So,_o)}}),Le=e=>(Ua("data-v-b2d7762d"),e=e(),Ga(),e),$o={class:"image-gallery"},To={class:"mobile-carousel"},Lo=Le(()=>s("i",{class:"fa fa-chevron-left"},null,-1)),ko=[Lo],Ro=["src"],Po=["src","alt","onLoad"],Bo=Le(()=>s("i",{class:"fa fa-chevron-right"},null,-1)),zo=[Bo],Ao={class:"mobile-carousel-footer"},Io=["src"],jo=["src"],Oo={key:0,class:"secondary-images"},Eo=["onClick"],Wo=["src","alt","onLoad"],Mo={key:0,class:"gallery-modal"},Vo=Le(()=>s("i",{class:"fa fa-times"},null,-1)),No={class:"modal-content"},Do=Le(()=>s("i",{class:"fa fa-chevron-left"},null,-1)),Uo=[Do],Go=["src"],Ho=["src","alt"],Fo=Le(()=>s("i",{class:"fa fa-chevron-right"},null,-1)),qo=[Fo],Zo={class:"modal-footer"},Xo={__name:"ImageGallery",props:{images:{type:Array,required:!0},videoUrl:{type:String,default:null}},setup(e){const t=e,a=L(0),o=L(!1),n=L(new Set),r=L(0),d=Q(()=>t.videoUrl?t.images.length+1:t.images.length),c=Q(()=>t.videoUrl?t.images.length+1:t.images.length),m=S=>{n.value.add(S)},g=S=>{a.value=S},f=()=>{a.value=(a.value-1+d.value)%d.value},x=()=>{a.value=(a.value+1)%d.value},w=S=>{a.value=(t.videoUrl,S),o.value=!0,document.body.style.overflow="hidden"},h=()=>{o.value=!1,document.body.style.overflow="auto"},j=S=>{r.value=S},O=()=>{r.value=(r.value-1+d.value)%d.value},E=()=>{r.value=(r.value+1)%d.value};return(S,P)=>(y(),R("div",$o,[s("div",To,[s("button",{class:"nav-button prev",onClick:O},ko),q(N(ct),{"current-index":r.value,"onUpdate:currentIndex":j,"dot-type":"line","show-arrow":!1,effect:"fade",interval:5e3,duration:500,autoplay:!1},{default:K(()=>[e.videoUrl?(y(),J(N(je),{class:"video-item",key:"video"},{default:K(()=>[s("video",{src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:"",class:"video-element"},null,8,Ro)]),_:1})):M("",!0),(y(!0),R(ie,null,ve(e.images,(W,z)=>(y(),J(N(je),{key:"image-"+z,class:"image-item"},{default:K(()=>[s("img",{src:W,alt:`Image ${e.videoUrl?z+2:z+1}`,onLoad:A=>m(z),class:$e({"image-loaded":n.value.has(z)})},null,42,Po)]),_:2},1024))),128))]),_:1},8,["current-index"]),s("button",{class:"nav-button next",onClick:E},zo),s("div",Ao,[s("span",null,B(r.value+1)+" / "+B(d.value),1)])]),s("div",{class:$e(["gallery-grid",{"single-image":c.value===1,"few-images":c.value>1&&c.value<5}])},[s("div",{class:"main-image",onClick:P[1]||(P[1]=W=>w(0))},[e.videoUrl?(y(),R("video",{key:0,src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:"",class:"video-element"},null,8,Io)):(y(),R(ie,{key:1},[e.images.length>0?(y(),R("img",{key:0,src:e.images[0],alt:"Main image",onLoad:P[0]||(P[0]=W=>m(0)),class:$e({"image-loaded":n.value.has(0)})},null,42,jo)):M("",!0)],64))]),c.value>1?(y(),R("div",Oo,[(y(!0),R(ie,null,ve(e.images.slice(e.videoUrl?0:1,e.videoUrl?4:5),(W,z)=>(y(),R("div",{key:z,class:"secondary-image",onClick:A=>w((e.videoUrl,z+1))},[s("img",{src:W,alt:`Image ${e.videoUrl?z+2:z+1}`,onLoad:A=>m(z),class:$e({"image-loaded":n.value.has(z)})},null,42,Wo)],8,Eo))),128)),c.value>2&&c.value!==5?(y(),R("button",{key:0,class:"show-all-button",onClick:P[2]||(P[2]=W=>w(0))},B(S.$t("message.showAllPhotos")),1)):M("",!0)])):M("",!0)],2),o.value?(y(),R("div",Mo,[s("div",{class:"modal-header"},[s("button",{class:"close-button",onClick:h},[Vo,We(" Close ")])]),s("div",No,[s("button",{class:"nav-button prev",onClick:f},Uo),q(N(ct),{"current-index":a.value,"onUpdate:currentIndex":g,"show-arrow":!1,"dot-type":"line",effect:"fade",interval:5e3,duration:500,autoplay:!1},{default:K(()=>[e.videoUrl?(y(),J(N(je),{class:"video-item",key:"video"},{default:K(()=>[s("video",{src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:""},null,8,Go)]),_:1})):M("",!0),(y(!0),R(ie,null,ve(e.images,(W,z)=>(y(),J(N(je),{key:"image-"+z,class:"image-item"},{default:K(()=>[s("img",{src:W,alt:`Image ${z+1}`},null,8,Ho)]),_:2},1024))),128))]),_:1},8,["current-index"]),s("button",{class:"nav-button next",onClick:x},qo)]),s("div",Zo,[s("span",null,B(a.value+1)+" / "+B(d.value),1)])])):M("",!0)]))}},Yo=Xe(Xo,[["__scopeId","data-v-b2d7762d"]]),mt=(e,t)=>{for(const a of Object.keys(t))e.on(a,t[a])},_t=e=>{for(const t of Object.keys(e)){const a=e[t];a&&ce(a.cancel)&&a.cancel()}},Jo=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),ce=e=>typeof e=="function",Ce=(e,t,a)=>{for(const o in a){const n="set"+Jo(o);e[n]?ge(()=>a[o],(r,d)=>{e[n](r,d)}):t[n]&&ge(()=>a[o],r=>{t[n](r)})}},me=(e,t,a={})=>{const o={...a};for(const n in e){const r=t[n],d=e[n];r&&(r&&r.custom===!0||d!==void 0&&(o[n]=d))}return o},ke=e=>{const t={},a={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const n=o.slice(2).toLocaleLowerCase();t[n]=e[o]}else a[o]=e[o];return{listeners:t,attrs:a}},Ko=async e=>{const t=await Promise.all([re(()=>import("./marker-icon-2x-D4k_ikNW.js"),[]),re(()=>import("./marker-icon-C2eJqgqv.js"),[]),re(()=>import("./marker-shadow-DU6CIJ0p.js"),[])]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},Oe=e=>{const t=L((...o)=>console.warn(`Method ${e} has been invoked without being replaced`)),a=(...o)=>t.value(...o);return a.wrapped=t,oe(e,a),a},Ee=(e,t)=>e.wrapped.value=t,ue=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,le=e=>{const t=fe(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},Se=Symbol("useGlobalLeaflet"),Re=Symbol("addLayer"),$t=Symbol("removeLayer"),Tt=Symbol("registerControl"),Qo=Symbol("registerLayerControl"),Lt=Symbol("canSetParentHtml"),kt=Symbol("setParentHtml"),Rt=Symbol("setIcon"),en=Symbol("bindPopup"),tn=Symbol("bindTooltip"),an=Symbol("unbindPopup"),on=Symbol("unbindTooltip"),Pe={options:{type:Object,default:()=>({}),custom:!0}},Ve=e=>({options:e.options,methods:{}}),we={...Pe,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},Pt=(e,t,a)=>{const o=le(Re),n=le($t),{options:r,methods:d}=Ve(e),c=me(e,we,r),m=()=>o({leafletObject:t.value}),g=()=>n({leafletObject:t.value}),f={...d,setAttribution(x){g(),t.value.options.attribution=x,e.visible&&m()},setName(){g(),e.visible&&m()},setLayerType(){g(),e.visible&&m()},setVisible(x){t.value&&(x?m():g())},bindPopup(x){if(!t.value||!ce(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(x)},bindTooltip(x){if(!t.value||!ce(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(x)},unbindTooltip(){t.value&&(ce(t.value.closeTooltip)&&t.value.closeTooltip(),ce(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(ce(t.value.closePopup)&&t.value.closePopup(),ce(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(x){a.emit("update:visible",x)}};return oe(en,f.bindPopup),oe(tn,f.bindTooltip),oe(an,f.unbindPopup),oe(on,f.unbindTooltip),Ye(()=>{f.unbindPopup(),f.unbindTooltip(),g()}),{options:c,methods:f}},nn=(e,t)=>{if(e&&t.default)return T("div",{style:{display:"none"}},t.default())},rn={...we,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},Bt={...rn,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},sn={...Bt,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...sn});const _e={...Pe,position:{type:String}},ln=(e,t)=>{const{options:a,methods:o}=Ve(e),n=me(e,_e,a),r={...o,setPosition(d){t.value&&t.value.setPosition(d)}};return Ye(()=>{t.value&&t.value.remove()}),{options:n,methods:r}},dn=e=>e.default?T("div",{ref:"root"},e.default()):null;X({name:"LControl",props:{..._e,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const a=L(),o=L(),n=fe(Se),r=le(Tt),{options:d,methods:c}=ln(e,a);return be(async()=>{const{Control:m,DomEvent:g}=n?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),f=m.extend({onAdd(){return o.value}});a.value=Te(new f(d)),Ce(c,a.value,e),r({leafletObject:a.value}),e.disableClickPropagation&&o.value&&g.disableClickPropagation(o.value),e.disableScrollPropagation&&o.value&&g.disableScrollPropagation(o.value),ne(()=>t.emit("ready",a.value))}),{root:o,leafletObject:a}},render(){return dn(this.$slots)}});({..._e});({..._e});({..._e});({..._e});const zt={...we};({...zt});({...zt});const Ke={...we,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},At=(e,t,a)=>{const{options:o,methods:n}=Pt(e,t,a),r=me(e,Ke,o),d={...n,setTileComponent(){var c;(c=t.value)==null||c.redraw()}};return Ye(()=>{t.value.off()}),{options:r,methods:d}},cn=(e,t,a,o)=>e.extend({initialize(n){this.tileComponents={},this.on("tileunload",this._unloadTile),a.setOptions(this,n)},createTile(n){const r=this._tileCoordsToKey(n);this.tileComponents[r]=t.create("div");const d=T({setup:o,props:["coords"]},{coords:n});return Fa(d,this.tileComponents[r]),this.tileComponents[r]},_unloadTile(n){const r=this._tileCoordsToKey(n.coords);this.tileComponents[r]&&(this.tileComponents[r].innerHTML="",this.tileComponents[r]=void 0)}});X({props:{...Ke,childRender:{type:Function,required:!0}},setup(e,t){const a=L(),o=L(null),n=L(!1),r=fe(Se),d=le(Re),{options:c,methods:m}=At(e,a,t);return be(async()=>{const{GridLayer:g,DomUtil:f,Util:x}=r?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),w=cn(g,f,x,e.childRender);a.value=Te(new w(c));const{listeners:h}=ke(t.attrs);a.value.on(h),Ce(m,a.value,e),d({...e,...m,leafletObject:a.value}),n.value=!0,ne(()=>t.emit("ready",a.value))}),{root:o,ready:n,leafletObject:a}},render(){return this.ready?T("div",{style:{display:"none"},ref:"root"}):null}});const ht={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}};X({name:"LIcon",props:{...ht,...Pe},setup(e,t){const a=L(),o=fe(Se),n=le(Lt),r=le(kt),d=le(Rt);let c,m,g,f,x;const w=(E,S,P)=>{const W=E&&E.innerHTML;if(!S){P&&x&&n()&&r(W);return}const{listeners:z}=ke(t.attrs);x&&m(x,z);const{options:A}=Ve(e),_=me(e,ht,A);W&&(_.html=W),x=_.html?g(_):f(_),c(x,z),d(x)},h=()=>{ne(()=>w(a.value,!0,!1))},j=()=>{ne(()=>w(a.value,!1,!0))},O={setIconUrl:h,setIconRetinaUrl:h,setIconSize:h,setIconAnchor:h,setPopupAnchor:h,setTooltipAnchor:h,setShadowUrl:h,setShadowRetinaUrl:h,setShadowAnchor:h,setBgPos:h,setClassName:h,setHtml:h};return be(async()=>{const{DomEvent:E,divIcon:S,icon:P}=o?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);c=E.on,m=E.off,g=S,f=P,Ce(O,{},e),new MutationObserver(j).observe(a.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),h()}),{root:a}},render(){const e=this.$slots.default?this.$slots.default():void 0;return T("div",{ref:"root"},e)}});({...we});function It(e,t,a){var o,n,r;t===void 0&&(t=50),a===void 0&&(a={});var d=(o=a.isImmediate)!=null&&o,c=(n=a.callback)!=null&&n,m=a.maxWait,g=Date.now(),f=[];function x(){if(m!==void 0){var h=Date.now()-g;if(h+t>=m)return m-h}return t}var w=function(){var h=[].slice.call(arguments),j=this;return new Promise(function(O,E){var S=d&&r===void 0;if(r!==void 0&&clearTimeout(r),r=setTimeout(function(){if(r=void 0,g=Date.now(),!d){var W=e.apply(j,h);c&&c(W),f.forEach(function(z){return(0,z.resolve)(W)}),f=[]}},x()),S){var P=e.apply(j,h);return c&&c(P),O(P)}f.push({resolve:O,reject:E})})};return w.cancel=function(h){r!==void 0&&clearTimeout(r),f.forEach(function(j){return(0,j.reject)(h)}),f=[]},w}const yt={...Pe,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},un=X({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:yt,setup(e,t){const a=L(),o=Ha({ready:!1,layersToAdd:[],layersInControl:[]}),{options:n}=Ve(e),r=me(e,yt,n),{listeners:d,attrs:c}=ke(t.attrs),m=Oe(Re),g=Oe($t),f=Oe(Tt),x=Oe(Qo);oe(Se,e.useGlobalLeaflet);const w=Q(()=>{const S={};return e.noBlockingAnimations&&(S.animate=!1),S}),h=Q(()=>{const S=w.value;return e.padding&&(S.padding=e.padding),e.paddingTopLeft&&(S.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(S.paddingBottomRight=e.paddingBottomRight),S}),j={moveend:It(S=>{o.leafletRef&&(t.emit("update:zoom",o.leafletRef.getZoom()),t.emit("update:center",o.leafletRef.getCenter()),t.emit("update:bounds",o.leafletRef.getBounds()))}),overlayadd(S){const P=o.layersInControl.find(W=>W.name===S.name);P&&P.updateVisibleProp(!0)},overlayremove(S){const P=o.layersInControl.find(W=>W.name===S.name);P&&P.updateVisibleProp(!1)}};be(async()=>{e.useGlobalLeaflet&&(ue.L=ue.L||await re(()=>import("./leaflet-src-CxpSAQsi.js").then($=>$.l),__vite__mapDeps([0,1,2])));const{map:S,CRS:P,Icon:W,latLngBounds:z,latLng:A,stamp:_}=e.useGlobalLeaflet?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);try{r.beforeMapMount&&await r.beforeMapMount()}catch($){console.error(`The following error occurred running the provided beforeMapMount hook ${$.message}`)}await Ko(W);const D=typeof r.crs=="string"?P[r.crs]:r.crs;r.crs=D||P.EPSG3857;const F={addLayer($){$.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd.push($):o.layersInControl.find(V=>_(V.leafletObject)===_($.leafletObject))||(o.layerControl.addLayer($),o.layersInControl.push($))),$.visible!==!1&&o.leafletRef.addLayer($.leafletObject)},removeLayer($){$.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd=o.layersToAdd.filter(V=>V.name!==$.name):(o.layerControl.removeLayer($.leafletObject),o.layersInControl=o.layersInControl.filter(V=>_(V.leafletObject)!==_($.leafletObject)))),o.leafletRef.removeLayer($.leafletObject)},registerLayerControl($){o.layerControl=$,o.layersToAdd.forEach(V=>{o.layerControl.addLayer(V)}),o.layersToAdd=[],f($)},registerControl($){o.leafletRef.addControl($.leafletObject)},setZoom($){const V=o.leafletRef.getZoom();$!==V&&o.leafletRef.setZoom($,w.value)},setCrs($){const V=o.leafletRef.getBounds();o.leafletRef.options.crs=$,o.leafletRef.fitBounds(V,{animate:!1,padding:[0,0]})},fitBounds($){o.leafletRef.fitBounds($,h.value)},setBounds($){if(!$)return;const V=z($);V.isValid()&&!(o.lastSetBounds||o.leafletRef.getBounds()).equals(V,0)&&(o.lastSetBounds=V,o.leafletRef.fitBounds(V))},setCenter($){if($==null)return;const V=A($),se=o.lastSetCenter||o.leafletRef.getCenter();(se.lat!==V.lat||se.lng!==V.lng)&&(o.lastSetCenter=V,o.leafletRef.panTo(V,w.value))}};Ee(m,F.addLayer),Ee(g,F.removeLayer),Ee(f,F.registerControl),Ee(x,F.registerLayerControl),o.leafletRef=Te(S(a.value,r)),Ce(F,o.leafletRef,e),mt(o.leafletRef,j),mt(o.leafletRef,d),o.ready=!0,ne(()=>t.emit("ready",o.leafletRef))}),St(()=>{_t(j),o.leafletRef&&(o.leafletRef.off(),o.leafletRef.remove())});const O=Q(()=>o.leafletRef),E=Q(()=>o.ready);return{root:a,ready:E,leafletObject:O,attrs:c}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),T("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),fn=["Symbol(Comment)","Symbol(Text)"],bn=["LTooltip","LPopup"],jt={...we,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},pn=(e,t,a)=>{const{options:o,methods:n}=Pt(e,t,a),r=me(e,jt,o),d={...n,setDraggable(c){t.value.dragging&&(c?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(c){a.emit("update:latLng",c.latlng),a.emit("update:lat-lng",c.latlng)},setLatLng(c){if(c!=null&&t.value){const m=t.value.getLatLng();(!m||!m.equals(c))&&t.value.setLatLng(c)}}};return{options:r,methods:d}},vn=(e,t)=>{const a=t.slots.default&&t.slots.default();return a&&a.length&&a.some(gn)};function gn(e){return!(fn.includes(e.type.toString())||bn.includes(e.type.name))}const mn=X({name:"LMarker",props:jt,setup(e,t){const a=L(),o=L(!1),n=fe(Se),r=le(Re);oe(Lt,()=>{var g;return!!((g=a.value)!=null&&g.getElement())}),oe(kt,g=>{var f,x;const w=ce((f=a.value)==null?void 0:f.getElement)&&((x=a.value)==null?void 0:x.getElement());w&&(w.innerHTML=g)}),oe(Rt,g=>{var f;return((f=a.value)==null?void 0:f.setIcon)&&a.value.setIcon(g)});const{options:d,methods:c}=pn(e,a,t),m={moveHandler:It(c.latLngSync)};return be(async()=>{const{marker:g,divIcon:f}=n?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);vn(d,t)&&(d.icon=f({className:""})),a.value=Te(g(e.latLng,d));const{listeners:x}=ke(t.attrs);a.value.on(x),a.value.on("move",m.moveHandler),Ce(c,a.value,e),r({...e,...c,leafletObject:a.value}),o.value=!0,ne(()=>t.emit("ready",a.value))}),St(()=>_t(m)),{ready:o,leafletObject:a}},render(){return nn(this.ready,this.$slots)}}),hn={...Bt,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},xt={...hn},Ot={...Pe,content:{type:String,default:null}};({...Ot});({...xt,latLngs:{...xt.latLngs}});const Qe={...Ke,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},yn=(e,t,a)=>{const{options:o,methods:n}=At(e,t,a),r=me(e,Qe,o),d={...n};return{options:r,methods:d}},xn=X({props:Qe,setup(e,t){const a=L(),o=fe(Se),n=le(Re),{options:r,methods:d}=yn(e,a,t);return be(async()=>{const{tileLayer:c}=o?ue.L:await re(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);a.value=Te(c(e.url,r));const{listeners:m}=ke(t.attrs);a.value.on(m),Ce(d,a.value,e),n({...e,...d,leafletObject:a.value}),ne(()=>t.emit("ready",a.value))}),{leafletObject:a}},render(){return null}});({...Ot});({...Qe});const Cn={class:"map-container"},Sn="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",wn='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',_n={__name:"Map",props:{center:{default:()=>[51.505,-.159]},zoom:{default:15}},setup(e){const t=e,a=L(null);let o=null;const n={scrollWheelZoom:!1,zoomControl:!0},r=d=>{o=d,o&&(o.invalidateSize(),o.setView(t.center,t.zoom))};return ge(()=>t.center,d=>{d&&o&&o.setView(d,t.zoom)},{deep:!0}),(d,c)=>(y(),R("div",Cn,[q(N(un),{ref_key:"mapRef",ref:a,zoom:e.zoom,center:e.center,options:n,onReady:r},{default:K(()=>[q(N(xn),{url:Sn,attribution:wn}),q(N(mn),{"lat-lng":e.center},null,8,["lat-lng"])]),_:1},8,["zoom","center"])]))}},$n=Xe(_n,[["__scopeId","data-v-1c7d12bb"]]),Tn={key:0,class:"clinic-details"},Ln={class:"container"},kn={class:"sticky-nav"},Rn={key:0,id:"hero-section",class:"hero-section"},Pn={class:"mobile-tabs"},Bn={class:"desktop-layout"},zn={class:"content-column"},An={class:"hero-section-header"},In={class:"clinic-name"},jn={class:"clinic-description"},On={class:"location"},En={key:0,class:"reviews-section"},Wn={class:"reviews-box"},Mn={class:"rating-text"},Vn={key:0,id:"about-section",class:"about-section"},Nn={key:1,id:"cases-section"},Dn={class:"case-grid"},Un=["onClick"],Gn={key:0,class:"before-after"},Hn=["src","alt"],Fn=["src","alt"],qn={key:1,class:"only-after"},Zn=["src","alt"],Xn={class:"description-overlay"},Yn={class:"description"},Jn={key:2,id:"staff-section"},Kn={class:"doctors-grid"},Qn=["src","alt"],er={class:"biography"},tr={key:3,id:"price-section"},ar={class:"price-table"},or={key:4,id:"certifications-section"},nr={class:"certifications-grid"},rr=["onClick"],sr=["src","alt"],ir={id:"location-section",class:"location-container"},lr={class:"sidebar-column"},dr={class:"sections-nav"},cr={key:0},ur={key:1},fr={key:2},br={key:3},pr={key:4},vr={key:5},gr={class:"fixed-bottom-overlay"},mr=["src","alt"],hr={class:"case-overlay-content"},yr={key:0,class:"before-after-large"},xr=["src","alt"],Cr=["src","alt"],Sr={key:1,class:"only-after-large"},wr=["src","alt"],_r={class:"case-overlay-description"},$r={__name:"ClinicDetails",setup(e){const t=qa(),a=Za(),o=t.params.id,n=L(null),r=L({}),d=L([]),c=L([]),m=L([]),g=L([]),f=L("about"),x=L(null),w=L(null),h=L(!1),j=b=>{x.value=b},O=b=>{w.value=b};async function E(b){try{return(await(await fetch(`/data/${b.folder}/doctors.json`)).json()).doctors.map(H=>({...H,photo:H.image?`/data/${b.folder}/images/${H.image}`:null}))}catch(p){return console.error("Error loading doctors:",p),[]}}async function S(b){try{const u=await(await fetch(`/data/${b.folder}/info.json`)).json();return u.images&&u.images.forEach(H=>{H.src=`/data/${b.folder}/images/${H.filename}`}),u}catch(p){return console.error("Error loading clinic info:",p),{}}}async function P(b){try{const u=await(await fetch(`/data/${b.folder}/cases.json`)).json();return u.cases.forEach(H=>{H.beforeImage&&(H.beforeSrc=`/data/${b.folder}/images/${H.beforeImage}`),H.afterSrc=`/data/${b.folder}/images/${H.afterImage}`}),u.cases}catch(p){return console.error("Error loading cases:",p),[]}}async function W(b){try{const u=await(await fetch(`/data/${b.folder}/certifications.json`)).json();return u.certifications.forEach(H=>{H.src=`/data/${b.folder}/images/${H.image}`}),u.certifications}catch(p){return console.error("Error loading certifications:",p),[]}}async function z(b){try{return(await(await fetch(`/data/${b.folder}/prices.json`)).json()).prices}catch(p){return console.error("Error loading prices:",p),[]}}const A=L(null);async function _(b){try{const u=await(await fetch(`/data/${b.folder}/video.json`)).json();return u.video?`/data/${b.folder}/videos/${u.video.filename}`:null}catch(p){return console.error("Error loading video:",p),null}}const D=()=>{a.push("/editor/clinics")},F=()=>{lt.clinics.includes(parseInt(o))||lt.clinics.push(parseInt(o)),a.push("/request-offers")};be(async()=>{window.scrollTo(0,0),n.value=Ya.find(b=>b.id===parseInt(o)),r.value=await S(n.value),d.value=await E(n.value),m.value=await W(n.value),c.value=await P(n.value),g.value=await z(n.value),A.value=await _(n.value),window.addEventListener("scroll",()=>{h.value=window.scrollY>0})});const $=L(!1);L(null);const V=Q(()=>{var b,p,u;return((u=(p=(b=r.value)==null?void 0:b.info)==null?void 0:p.longDescription)==null?void 0:u.length)>300}),se=()=>{$.value=!$.value},ee=(b,p)=>{b.preventDefault();const u=document.getElementById(p);if(u)switch(u.scrollIntoView({behavior:"smooth"}),p){case"hero-section":f.value="hero";break;case"about-section":f.value="about";break;case"cases-section":f.value="cases";break;case"staff-section":f.value="staff";break;case"price-section":f.value="price";break;case"certifications-section":f.value="certifications";break;case"location-section":f.value="location";break}};ge(f,b=>{he(b)});const he=b=>{let p;switch(b){case"hero":p="hero-section";break;case"about":p="about-section";break;case"cases":p="cases-section";break;case"staff":p="staff-section";break;case"price":p="price-section";break;case"certifications":p="certifications-section";break;case"location":p="location-section";break}if(p){const u=document.getElementById(p);u&&u.scrollIntoView({behavior:"smooth"})}};return(b,p)=>n.value?(y(),R("div",Tn,[s("main",Ln,[s("div",kn,[s("div",{onClick:D,class:"back-button",style:{display:"flex","align-items":"center",gap:"8px"}},[q(N(dt),null,{default:K(()=>[q(N(gt))]),_:1}),We(" "+B(b.$t("message.backToClinics")),1)]),s("div",{onClick:F,class:"request-offer-button"},B(b.$t("message.requestOffers")),1)]),r.value.images&&r.value.images.length?(y(),R("section",Rn,[q(N(Yo),{images:r.value.images.map(u=>u.src),"video-url":A.value},null,8,["images","video-url"])])):M("",!0),s("div",Pn,[q(N(Co),{value:f.value,"onUpdate:value":p[0]||(p[0]=u=>f.value=u),animated:""},{default:K(()=>[r.value.images&&r.value.images.length?(y(),J(N(pe),{key:0,name:"hero",tab:b.$t("message.photos")},null,8,["tab"])):M("",!0),r.value.info&&r.value.info.longDescription?(y(),J(N(pe),{key:1,name:"about",tab:b.$t("message.aboutUs")},null,8,["tab"])):M("",!0),c.value.length?(y(),J(N(pe),{key:2,name:"cases",tab:b.$t("message.ourWork")},null,8,["tab"])):M("",!0),d.value.length?(y(),J(N(pe),{key:3,name:"staff",tab:b.$t("message.ourStaff")},null,8,["tab"])):M("",!0),g.value.length?(y(),J(N(pe),{key:4,name:"price",tab:b.$t("message.priceCatalogue")},null,8,["tab"])):M("",!0),m.value.length?(y(),J(N(pe),{key:5,name:"certifications",tab:b.$t("message.ourCertifications")},null,8,["tab"])):M("",!0),q(N(pe),{name:"location",tab:b.$t("message.clinicLocation")},null,8,["tab"])]),_:1},8,["value"])]),s("div",Bn,[s("div",zn,[s("div",An,[s("h2",In,B(n.value.name),1),s("p",jn,B(n.value.description),1),s("p",On,B(b.$t("message.location",{location:`${n.value.town}, ${n.value.country}`})),1),n.value.rating?(y(),R("div",En,[s("div",Wn,[s("div",Mn,B(Number(n.value.rating).toFixed(1)),1),q(N(Ja),{value:n.value.rating,count:5,color:"var(--primary-color)",readonly:"",size:"1","allow-half":""},null,8,["value"])])])):M("",!0)]),r.value.info&&r.value.info.longDescription?(y(),R("section",Vn,[s("h2",null,B(b.$t("message.aboutUs")),1),s("div",{class:$e(["clinic-info",{expanded:$.value}])},[s("p",null,B(r.value.info.longDescription),1)],2),V.value?(y(),J(N(Xa),{key:0,onClick:se,class:"expand-button"},{default:K(()=>[We(B($.value?b.$t("message.showLess"):b.$t("message.showMore")),1)]),_:1})):M("",!0)])):M("",!0),c.value.length?(y(),R("section",Nn,[s("h2",null,B(b.$t("message.ourWork")),1),s("div",Dn,[(y(!0),R(ie,null,ve(c.value,u=>(y(),R("div",{class:"card case-card",key:u.id,onClick:H=>O(u)},[u.beforeSrc?(y(),R("div",Gn,[s("img",{src:u.beforeSrc,alt:u.description+" (before)",class:"before-image"},null,8,Hn),s("img",{src:u.afterSrc,alt:u.description+" (after)",class:"after-image"},null,8,Fn)])):(y(),R("div",qn,[s("img",{src:u.afterSrc,alt:u.description+" (after)",class:"only-after-image"},null,8,Zn)])),s("div",Xn,[s("p",Yn,[s("b",null,B(u.description),1)])])],8,Un))),128))])])):M("",!0),d.value.length?(y(),R("section",Jn,[s("h2",null,B(b.$t("message.ourStaff")),1),s("div",Kn,[(y(!0),R(ie,null,ve(d.value,u=>(y(),R("div",{key:u.id,class:"doctor-card"},[s("div",null,[u.photo?(y(),R("img",{key:0,src:u.photo,alt:u.name},null,8,Qn)):M("",!0),s("div",null,[s("h3",null,B(u.name),1),s("p",null,B(u.title),1)])]),s("div",er,B(u.biography),1)]))),128))])])):M("",!0),g.value.length?(y(),R("section",tr,[s("h2",null,B(b.$t("message.priceCatalogue")),1),s("table",ar,[s("thead",null,[s("tr",null,[s("th",null,B(b.$t("message.treatment")),1),s("th",null,B(b.$t("message.price")),1)])]),s("tbody",null,[(y(!0),R(ie,null,ve(g.value,u=>(y(),R("tr",{key:u.service},[s("td",null,B(u.service),1),s("td",null,B(u.price)+" "+B(u.currency||"€"),1)]))),128))])])])):M("",!0),m.value.length?(y(),R("section",or,[s("h2",null,B(b.$t("message.ourCertifications")),1),s("div",nr,[(y(!0),R(ie,null,ve(m.value,u=>(y(),R("div",{key:u.id,class:"card certification-card",onClick:H=>j(u)},[s("h3",null,B(u.name),1),s("img",{src:u.src,alt:u.name,class:"certification-icon"},null,8,sr)],8,rr))),128))])])):M("",!0),s("section",ir,[s("h2",null,B(b.$t("message.clinicLocation")),1),s("p",null,B(n.value.address),1),q($n,{center:[n.value.latLng[0],n.value.latLng[1]],zoom:15},null,8,["center"])])]),s("div",lr,[s("div",dr,[s("h3",null,B(b.$t("message.sections")),1),s("ul",null,[r.value&&r.value.images&&r.value.images.length?(y(),R("li",cr,[s("a",{href:"#hero-section",onClick:p[1]||(p[1]=u=>ee(u,"hero-section"))},B(b.$t("message.photos")),1)])):M("",!0),r.value.info&&r.value.info.longDescription?(y(),R("li",ur,[s("a",{href:"#about-section",onClick:p[2]||(p[2]=u=>ee(u,"about-section"))},B(b.$t("message.aboutUs")),1)])):M("",!0),c.value.length?(y(),R("li",fr,[s("a",{href:"#cases-section",onClick:p[3]||(p[3]=u=>ee(u,"cases-section"))},B(b.$t("message.ourWork")),1)])):M("",!0),d.value.length?(y(),R("li",br,[s("a",{href:"#staff-section",onClick:p[4]||(p[4]=u=>ee(u,"staff-section"))},B(b.$t("message.ourStaff")),1)])):M("",!0),g.value.length?(y(),R("li",pr,[s("a",{href:"#price-section",onClick:p[5]||(p[5]=u=>ee(u,"price-section"))},B(b.$t("message.priceCatalogue")),1)])):M("",!0),m.value.length?(y(),R("li",vr,[s("a",{href:"#certifications-section",onClick:p[6]||(p[6]=u=>ee(u,"certifications-section"))},B(b.$t("message.ourCertifications")),1)])):M("",!0),s("li",null,[s("a",{href:"#location-section",onClick:p[7]||(p[7]=u=>ee(u,"location-section"))},B(b.$t("message.clinicLocation")),1)])])])])])]),s("section",gr,[s("div",{onClick:D,class:"back-button"},[q(N(dt),null,{default:K(()=>[q(N(gt))]),_:1}),We(" "+B(b.$t("message.backToClinics")),1)]),s("div",{onClick:F,class:"request-offer-button"},B(b.$t("message.requestOffers")),1)]),x.value?(y(),R("div",{key:0,class:"certificate-overlay",onClick:p[8]||(p[8]=u=>x.value=null)},[s("img",{src:x.value.src,alt:x.value.name,class:"certificate-overlay-image"},null,8,mr)])):M("",!0),w.value?(y(),R("div",{key:1,class:"case-overlay",onClick:p[9]||(p[9]=u=>w.value=null)},[s("div",hr,[w.value.beforeSrc?(y(),R("div",yr,[s("img",{src:w.value.beforeSrc,alt:w.value.description+" (before)"},null,8,xr),s("img",{src:w.value.afterSrc,alt:w.value.description+" (after)"},null,8,Cr)])):(y(),R("div",Sr,[s("img",{src:w.value.afterSrc,alt:w.value.description+" (after)"},null,8,wr)])),s("p",_r,[s("b",null,B(w.value.description),1)])])])):M("",!0)])):M("",!0)}},Pr=Xe($r,[["__scopeId","data-v-3b2adeef"]]);export{Pr as default};
