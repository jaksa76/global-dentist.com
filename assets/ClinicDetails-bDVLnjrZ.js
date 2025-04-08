const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/leaflet-src-MwF3y8gD.js","assets/index-CC1aYuAQ.js","assets/index-BBbjgUBh.css"])))=>i.map(i=>d[i]);
import{d as K,x as L,aR as Ca,aS as Sa,i as T,aT as rt,aU as _a,aV as Me,aW as wa,y as $a,I as Ta,J as be,K as La,c as Y,af as Ra,F as ie,Q as ka,aX as Pa,aY as Ba,aZ as za,z as p,A as R,C as U,D as q,G as Aa,u as Ia,a as yt,a_ as st,h as Ue,aB as Oa,aA as ve,a2 as fe,H as ee,ad as J,a$ as ja,aP as Ea,e as Q,b0 as Ae,L as Wa,N as it,ag as Ge,M as Ie,f as Ma,aC as te,aI as Va,a7 as Na,b1 as Da,ai as Ua,_ as Xe,o as S,k as z,l as s,m as X,w as re,W as se,p as H,V as M,Y as pe,q as $e,t as B,n as We,r as xt,v as Ct,b2 as ae,b3 as Te,b4 as Ga,a9 as St,b5 as Ye,b6 as Ha,b7 as Fa,j as qa,s as lt,B as Za}from"./index-CC1aYuAQ.js";import{c as Xa}from"./clinics-DqPopm-J.js";/* empty css                                                                     */import{b as Oe,N as dt,a as Ya}from"./Rate-i6e_IZBT.js";const Ka=rt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[rt("&::-webkit-scrollbar",{width:0,height:0})]),Ja=K({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=L(null);function t(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const a=Ca();return Ka.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Sa,ssr:a}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...n){var r;(r=e.value)===null||r===void 0||r.scrollTo(...n)}})},render(){return T("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Qa=/\s/;function eo(e){for(var t=e.length;t--&&Qa.test(e.charAt(t)););return t}var to=/^\s+/;function ao(e){return e&&e.slice(0,eo(e)+1).replace(to,"")}var ct=NaN,oo=/^[-+]0x[0-9a-f]+$/i,no=/^0b[01]+$/i,ro=/^0o[0-7]+$/i,so=parseInt;function ut(e){if(typeof e=="number")return e;if(_a(e))return ct;if(Me(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Me(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ao(e);var a=no.test(e);return a||ro.test(e)?so(e.slice(2),a?2:8):oo.test(e)?ct:+e}var He=function(){return wa.Date.now()},io="Expected a function",lo=Math.max,co=Math.min;function uo(e,t,a){var o,n,r,d,c,m,v=0,b=!1,y=!1,_=!0;if(typeof e!="function")throw new TypeError(io);t=ut(t)||0,Me(a)&&(b=!!a.leading,y="maxWait"in a,r=y?lo(ut(a.maxWait)||0,t):r,_="trailing"in a?!!a.trailing:_);function h(w){var N=o,F=n;return o=n=void 0,v=w,d=e.apply(F,N),d}function O(w){return v=w,c=setTimeout(C,t),b?h(w):d}function j(w){var N=w-m,F=w-v,$=t-N;return y?co($,r-F):$}function E(w){var N=w-m,F=w-v;return m===void 0||N>=t||N<0||y&&F>=r}function C(){var w=He();if(E(w))return k(w);c=setTimeout(C,j(w))}function k(w){return c=void 0,_&&o?h(w):(o=n=void 0,d)}function W(){c!==void 0&&clearTimeout(c),v=0,o=m=n=c=void 0}function P(){return c===void 0?d:k(He())}function A(){var w=He(),N=E(w);if(o=arguments,n=this,m=w,N){if(c===void 0)return O(m);if(y)return clearTimeout(c),c=setTimeout(C,t),h(m)}return c===void 0&&(c=setTimeout(C,t)),d}return A.cancel=W,A.flush=P,A}var bo="Expected a function";function Fe(e,t,a){var o=!0,n=!0;if(typeof e!="function")throw new TypeError(bo);return Me(a)&&(o="leading"in a?!!a.leading:o,n="trailing"in a?!!a.trailing:n),uo(e,t,{leading:o,maxWait:t,trailing:n})}const fo=K({name:"Add",render(){return T("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),po={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function vo(e){const{textColor2:t,primaryColor:a,textColorDisabled:o,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:c,closeColorPressed:m,tabColor:v,baseColor:b,dividerColor:y,fontWeight:_,textColor1:h,borderRadius:O,fontSize:j,fontWeightStrong:E}=e;return Object.assign(Object.assign({},po),{colorSegment:v,tabFontSizeCard:j,tabTextColorLine:h,tabTextColorActiveLine:a,tabTextColorHoverLine:a,tabTextColorDisabledLine:o,tabTextColorSegment:h,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:o,tabTextColorBar:h,tabTextColorActiveBar:a,tabTextColorHoverBar:a,tabTextColorDisabledBar:o,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:a,tabTextColorDisabledCard:o,barColor:a,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:c,closeColorPressed:m,closeBorderRadius:O,tabColor:v,tabColorSegment:b,tabBorderColor:y,tabFontWeightActive:_,tabFontWeight:_,tabBorderRadius:O,paneTextColor:t,fontWeightStrong:E})}const mo={name:"Tabs",common:$a,self:vo},Ke=Ta("n-tabs"),_t={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},xe=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_t,setup(e){const t=be(Ke,null);return t||La("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return T("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),go=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},za(_t,["displayDirective"])),Ze=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:go,setup(e){const{mergedClsPrefixRef:t,valueRef:a,typeRef:o,closableRef:n,tabStyleRef:r,addTabStyleRef:d,tabClassRef:c,addTabClassRef:m,tabChangeIdRef:v,onBeforeLeaveRef:b,triggerRef:y,handleAdd:_,activateTab:h,handleClose:O}=be(Ke);return{trigger:y,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:j}=e;return j===void 0?n.value:j}),style:r,addStyle:d,tabClass:c,addTabClass:m,clsPrefix:t,value:a,type:o,handleClose(j){j.stopPropagation(),!e.disabled&&O(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){_();return}const{name:j}=e,E=++v.id;if(j!==a.value){const{value:C}=b;C?Promise.resolve(C(e.name,a.value)).then(k=>{k&&v.id===E&&h(j)}):h(j)}}}},render(){const{internalAddable:e,clsPrefix:t,name:a,disabled:o,label:n,tab:r,value:d,mergedClosable:c,trigger:m,$slots:{default:v}}=this,b=n??r;return T("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?T("div",{class:`${t}-tabs-tab-pad`}):null,T("div",Object.assign({key:a,"data-name":a,"data-disabled":o?!0:void 0},Ra({class:[`${t}-tabs-tab`,d===a&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),T("span",{class:`${t}-tabs-tab__label`},e?T(ie,null,T("div",{class:`${t}-tabs-tab__height-placeholder`}," "),T(ka,{clsPrefix:t},{default:()=>T(fo,null)})):v?v():typeof b=="object"?b:Pa(b??a)),c&&this.type==="card"?T(Ba,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),ho=p("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[R("segment-type",[p("tabs-rail",[U("&.transition-disabled",[p("tabs-capsule",`
 transition: none;
 `)])])]),R("top",[p("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),R("left",[p("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),R("left, right",`
 flex-direction: row;
 `,[p("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),R("right",`
 flex-direction: row-reverse;
 `,[p("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),p("tabs-bar",`
 left: 0;
 `)]),R("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[p("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),p("tabs-bar",`
 top: 0;
 `)]),p("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[p("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),p("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[p("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),U("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),R("flex",[p("tabs-nav",`
 width: 100%;
 position: relative;
 `,[p("tabs-wrapper",`
 width: 100%;
 `,[p("tabs-tab",`
 margin-right: 0;
 `)])])]),p("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[q("prefix, suffix",`
 display: flex;
 align-items: center;
 `),q("prefix","padding-right: 16px;"),q("suffix","padding-left: 16px;")]),R("top, bottom",[p("tabs-nav-scroll-wrapper",[U("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),U("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),R("shadow-start",[U("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-end",[U("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),R("left, right",[p("tabs-nav-scroll-content",`
 flex-direction: column;
 `),p("tabs-nav-scroll-wrapper",[U("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),U("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),R("shadow-start",[U("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-end",[U("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),p("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[p("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[U("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),U("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),p("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),p("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),p("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),p("tabs-tab",`
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
 `,[R("disabled",{cursor:"not-allowed"}),q("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),q("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),p("tabs-bar",`
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
 `,[U("&.transition-disabled",`
 transition: none;
 `),R("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),p("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),p("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[U("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),U("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),U("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),U("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),U("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),p("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),R("line-type, bar-type",[p("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[U("&:hover",{color:"var(--n-tab-text-color-hover)"}),R("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),R("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),p("tabs-nav",[R("line-type",[R("top",[q("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 bottom: -1px;
 `)]),R("left",[q("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 right: -1px;
 `)]),R("right",[q("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 left: -1px;
 `)]),R("bottom",[q("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),p("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),p("tabs-bar",`
 top: -1px;
 `)]),q("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-bar",`
 border-radius: 0;
 `)]),R("card-type",[q("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),p("tabs-tab",`
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
 `,[R("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[q("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Aa("disabled",[U("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),R("closable","padding-right: 8px;"),R("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),R("disabled","color: var(--n-tab-text-color-disabled);")]),p("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),R("left, right",[p("tabs-wrapper",`
 flex-direction: column;
 `,[p("tabs-tab-wrapper",`
 flex-direction: column;
 `,[p("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),R("top",[R("card-type",[p("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[R("active",`
 border-bottom: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),R("left",[R("card-type",[p("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[R("active",`
 border-right: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),R("right",[R("card-type",[p("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[R("active",`
 border-left: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),R("bottom",[R("card-type",[p("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[R("active",`
 border-top: 1px solid #0000;
 `)]),p("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),p("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),yo=Object.assign(Object.assign({},yt.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),xo=K({name:"Tabs",props:yo,setup(e,{slots:t}){var a,o,n,r;const{mergedClsPrefixRef:d,inlineThemeDisabled:c}=Ia(e),m=yt("Tabs","-tabs",ho,mo,e,d),v=L(null),b=L(null),y=L(null),_=L(null),h=L(null),O=L(null),j=L(!0),E=L(!0),C=st(e,["labelSize","size"]),k=st(e,["activeName","value"]),W=L((o=(a=k.value)!==null&&a!==void 0?a:e.defaultValue)!==null&&o!==void 0?o:t.default?(r=(n=Ue(t.default())[0])===null||n===void 0?void 0:n.props)===null||r===void 0?void 0:r.name:null),P=Oa(k,W),A={id:0},w=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ve(P,()=>{A.id=0,oe(),ne()});function N(){var i;const{value:l}=P;return l===null?null:(i=v.value)===null||i===void 0?void 0:i.querySelector(`[data-name="${l}"]`)}function F(i){if(e.type==="card")return;const{value:l}=b;if(!l)return;const x=l.style.opacity==="0";if(i){const I=`${d.value}-tabs-bar--disabled`,{barWidth:D,placement:Z}=e;if(i.dataset.disabled==="true"?l.classList.add(I):l.classList.remove(I),["top","bottom"].includes(Z)){if(V(["top","maxHeight","height"]),typeof D=="number"&&i.offsetWidth>=D){const de=Math.floor((i.offsetWidth-D)/2)+i.offsetLeft;l.style.left=`${de}px`,l.style.maxWidth=`${D}px`}else l.style.left=`${i.offsetLeft}px`,l.style.maxWidth=`${i.offsetWidth}px`;l.style.width="8192px",x&&(l.style.transition="none"),l.offsetWidth,x&&(l.style.transition="",l.style.opacity="1")}else{if(V(["left","maxWidth","width"]),typeof D=="number"&&i.offsetHeight>=D){const de=Math.floor((i.offsetHeight-D)/2)+i.offsetTop;l.style.top=`${de}px`,l.style.maxHeight=`${D}px`}else l.style.top=`${i.offsetTop}px`,l.style.maxHeight=`${i.offsetHeight}px`;l.style.height="8192px",x&&(l.style.transition="none"),l.offsetHeight,x&&(l.style.transition="",l.style.opacity="1")}}}function $(){if(e.type==="card")return;const{value:i}=b;i&&(i.style.opacity="0")}function V(i){const{value:l}=b;if(l)for(const x of i)l.style[x]=""}function oe(){if(e.type==="card")return;const i=N();i?F(i):$()}function ne(){var i;const l=(i=h.value)===null||i===void 0?void 0:i.$el;if(!l)return;const x=N();if(!x)return;const{scrollLeft:I,offsetWidth:D}=l,{offsetLeft:Z,offsetWidth:de}=x;I>Z?l.scrollTo({top:0,left:Z,behavior:"smooth"}):Z+de>I+D&&l.scrollTo({top:0,left:Z+de-D,behavior:"smooth"})}const ge=L(null);let f=0,g=null;function u(i){const l=ge.value;if(l){f=i.getBoundingClientRect().height;const x=`${f}px`,I=()=>{l.style.height=x,l.style.maxHeight=x};g?(I(),g(),g=null):g=I}}function G(i){const l=ge.value;if(l){const x=i.getBoundingClientRect().height,I=()=>{document.body.offsetHeight,l.style.maxHeight=`${x}px`,l.style.height=`${Math.max(f,x)}px`};g?(g(),g=null,I()):g=I}}function Wt(){const i=ge.value;if(i){i.style.maxHeight="",i.style.height="";const{paneWrapperStyle:l}=e;if(typeof l=="string")i.style.cssText=l;else if(l){const{maxHeight:x,height:I}=l;x!==void 0&&(i.style.maxHeight=x),I!==void 0&&(i.style.height=I)}}}const et={value:[]},tt=L("next");function Mt(i){const l=P.value;let x="next";for(const I of et.value){if(I===l)break;if(I===i){x="prev";break}}tt.value=x,Vt(i)}function Vt(i){const{onActiveNameChange:l,onUpdateValue:x,"onUpdate:value":I}=e;l&&Ie(l,i),x&&Ie(x,i),I&&Ie(I,i),W.value=i}function Nt(i){const{onClose:l}=e;l&&Ie(l,i)}function at(){const{value:i}=b;if(!i)return;const l="transition-disabled";i.classList.add(l),oe(),i.classList.remove(l)}const he=L(null);function Ne({transitionDisabled:i}){const l=v.value;if(!l)return;i&&l.classList.add("transition-disabled");const x=N();x&&he.value&&(he.value.style.width=`${x.offsetWidth}px`,he.value.style.height=`${x.offsetHeight}px`,he.value.style.transform=`translateX(${x.offsetLeft-Ma(getComputedStyle(l).paddingLeft)}px)`,i&&he.value.offsetWidth),i&&l.classList.remove("transition-disabled")}ve([P],()=>{e.type==="segment"&&te(()=>{Ne({transitionDisabled:!1})})}),fe(()=>{e.type==="segment"&&Ne({transitionDisabled:!0})});let ot=0;function Dt(i){var l;if(i.contentRect.width===0&&i.contentRect.height===0||ot===i.contentRect.width)return;ot=i.contentRect.width;const{type:x}=e;if((x==="line"||x==="bar")&&at(),x!=="segment"){const{placement:I}=e;De((I==="top"||I==="bottom"?(l=h.value)===null||l===void 0?void 0:l.$el:O.value)||null)}}const Ut=Fe(Dt,64);ve([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:i}=e;(i==="line"||i==="bar")&&at()})});const Be=L(!1);function Gt(i){var l;const{target:x,contentRect:{width:I}}=i,D=x.parentElement.offsetWidth;if(!Be.value)D<I&&(Be.value=!0);else{const{value:Z}=_;if(!Z)return;D-I>Z.$el.offsetWidth&&(Be.value=!1)}De(((l=h.value)===null||l===void 0?void 0:l.$el)||null)}const Ht=Fe(Gt,64);function Ft(){const{onAdd:i}=e;i&&i(),te(()=>{const l=N(),{value:x}=h;!l||!x||x.scrollTo({left:l.offsetLeft,top:0,behavior:"smooth"})})}function De(i){if(!i)return;const{placement:l}=e;if(l==="top"||l==="bottom"){const{scrollLeft:x,scrollWidth:I,offsetWidth:D}=i;j.value=x<=0,E.value=x+D>=I}else{const{scrollTop:x,scrollHeight:I,offsetHeight:D}=i;j.value=x<=0,E.value=x+D>=I}}const qt=Fe(i=>{De(i.target)},64);ee(Ke,{triggerRef:J(e,"trigger"),tabStyleRef:J(e,"tabStyle"),tabClassRef:J(e,"tabClass"),addTabStyleRef:J(e,"addTabStyle"),addTabClassRef:J(e,"addTabClass"),paneClassRef:J(e,"paneClass"),paneStyleRef:J(e,"paneStyle"),mergedClsPrefixRef:d,typeRef:J(e,"type"),closableRef:J(e,"closable"),valueRef:P,tabChangeIdRef:A,onBeforeLeaveRef:J(e,"onBeforeLeave"),activateTab:Mt,handleClose:Nt,handleAdd:Ft}),ja(()=>{oe(),ne()}),Ea(()=>{const{value:i}=y;if(!i)return;const{value:l}=d,x=`${l}-tabs-nav-scroll-wrapper--shadow-start`,I=`${l}-tabs-nav-scroll-wrapper--shadow-end`;j.value?i.classList.remove(x):i.classList.add(x),E.value?i.classList.remove(I):i.classList.add(I)});const Zt={syncBarPosition:()=>{oe()}},Xt=()=>{Ne({transitionDisabled:!0})},nt=Y(()=>{const{value:i}=C,{type:l}=e,x={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[l],I=`${i}${x}`,{self:{barColor:D,closeIconColor:Z,closeIconColorHover:de,closeIconColorPressed:Yt,tabColor:Kt,tabBorderColor:Jt,paneTextColor:Qt,tabFontWeight:ea,tabBorderRadius:ta,tabFontWeightActive:aa,colorSegment:oa,fontWeightStrong:na,tabColorSegment:ra,closeSize:sa,closeIconSize:ia,closeColorHover:la,closeColorPressed:da,closeBorderRadius:ca,[Q("panePadding",i)]:ze,[Q("tabPadding",I)]:ua,[Q("tabPaddingVertical",I)]:ba,[Q("tabGap",I)]:fa,[Q("tabGap",`${I}Vertical`)]:pa,[Q("tabTextColor",l)]:va,[Q("tabTextColorActive",l)]:ma,[Q("tabTextColorHover",l)]:ga,[Q("tabTextColorDisabled",l)]:ha,[Q("tabFontSize",i)]:ya},common:{cubicBezierEaseInOut:xa}}=m.value;return{"--n-bezier":xa,"--n-color-segment":oa,"--n-bar-color":D,"--n-tab-font-size":ya,"--n-tab-text-color":va,"--n-tab-text-color-active":ma,"--n-tab-text-color-disabled":ha,"--n-tab-text-color-hover":ga,"--n-pane-text-color":Qt,"--n-tab-border-color":Jt,"--n-tab-border-radius":ta,"--n-close-size":sa,"--n-close-icon-size":ia,"--n-close-color-hover":la,"--n-close-color-pressed":da,"--n-close-border-radius":ca,"--n-close-icon-color":Z,"--n-close-icon-color-hover":de,"--n-close-icon-color-pressed":Yt,"--n-tab-color":Kt,"--n-tab-font-weight":ea,"--n-tab-font-weight-active":aa,"--n-tab-padding":ua,"--n-tab-padding-vertical":ba,"--n-tab-gap":fa,"--n-tab-gap-vertical":pa,"--n-pane-padding-left":Ae(ze,"left"),"--n-pane-padding-right":Ae(ze,"right"),"--n-pane-padding-top":Ae(ze,"top"),"--n-pane-padding-bottom":Ae(ze,"bottom"),"--n-font-weight-strong":na,"--n-tab-color-segment":ra}}),ye=c?Wa("tabs",Y(()=>`${C.value[0]}${e.type[0]}`),nt,e):void 0;return Object.assign({mergedClsPrefix:d,mergedValue:P,renderedNames:new Set,segmentCapsuleElRef:he,tabsPaneWrapperRef:ge,tabsElRef:v,barElRef:b,addTabInstRef:_,xScrollInstRef:h,scrollWrapperElRef:y,addTabFixed:Be,tabWrapperStyle:w,handleNavResize:Ut,mergedSize:C,handleScroll:qt,handleTabsResize:Ht,cssVars:c?void 0:nt,themeClass:ye==null?void 0:ye.themeClass,animationDirection:tt,renderNameListRef:et,yScrollElRef:O,handleSegmentResize:Xt,onAnimationBeforeLeave:u,onAnimationEnter:G,onAnimationAfterEnter:Wt,onRender:ye==null?void 0:ye.onRender},Zt)},render(){const{mergedClsPrefix:e,type:t,placement:a,addTabFixed:o,addable:n,mergedSize:r,renderNameListRef:d,onRender:c,paneWrapperClass:m,paneWrapperStyle:v,$slots:{default:b,prefix:y,suffix:_}}=this;c==null||c();const h=b?Ue(b()).filter(A=>A.type.__TAB_PANE__===!0):[],O=b?Ue(b()).filter(A=>A.type.__TAB__===!0):[],j=!O.length,E=t==="card",C=t==="segment",k=!E&&!C&&this.justifyContent;d.value=[];const W=()=>{const A=T("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},k?null:T("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),j?h.map((w,N)=>(d.value.push(w.props.name),qe(T(Ze,Object.assign({},w.props,{internalCreatedByPane:!0,internalLeftPadded:N!==0&&(!k||k==="center"||k==="start"||k==="end")}),w.children?{default:w.children.tab}:void 0)))):O.map((w,N)=>(d.value.push(w.props.name),qe(N!==0&&!k?pt(w):w))),!o&&n&&E?ft(n,(j?h.length:O.length)!==0):null,k?null:T("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return T("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},E&&n?T(Ge,{onResize:this.handleTabsResize},{default:()=>A}):A,E?T("div",{class:`${e}-tabs-pad`}):null,E?null:T("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},P=C?"top":a;return T("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${r}-size`,k&&`${e}-tabs--flex`,`${e}-tabs--${P}`],style:this.cssVars},T("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${P}`,`${e}-tabs-nav`]},it(y,A=>A&&T("div",{class:`${e}-tabs-nav__prefix`},A)),C?T(Ge,{onResize:this.handleSegmentResize},{default:()=>T("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},T("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},T("div",{class:`${e}-tabs-wrapper`},T("div",{class:`${e}-tabs-tab`}))),j?h.map((A,w)=>(d.value.push(A.props.name),T(Ze,Object.assign({},A.props,{internalCreatedByPane:!0,internalLeftPadded:w!==0}),A.children?{default:A.children.tab}:void 0))):O.map((A,w)=>(d.value.push(A.props.name),w===0?A:pt(A))))}):T(Ge,{onResize:this.handleNavResize},{default:()=>T("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(P)?T(Ja,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:W}):T("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},W()))}),o&&n&&E?ft(n,!0):null,it(_,A=>A&&T("div",{class:`${e}-tabs-nav__suffix`},A))),j&&(this.animated&&(P==="top"||P==="bottom")?T("div",{ref:"tabsPaneWrapperRef",style:v,class:[`${e}-tabs-pane-wrapper`,m]},bt(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):bt(h,this.mergedValue,this.renderedNames)))}});function bt(e,t,a,o,n,r,d){const c=[];return e.forEach(m=>{const{name:v,displayDirective:b,"display-directive":y}=m.props,_=O=>b===O||y===O,h=t===v;if(m.key!==void 0&&(m.key=v),h||_("show")||_("show:lazy")&&a.has(v)){a.has(v)||a.add(v);const O=!_("if");c.push(O?Va(m,[[Na,h]]):m)}}),d?T(Da,{name:`${d}-transition`,onBeforeLeave:o,onEnter:n,onAfterEnter:r},{default:()=>c}):c}function ft(e,t){return T(Ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function pt(e){const t=Ua(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function qe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Le=e=>(xt("data-v-b2d7762d"),e=e(),Ct(),e),Co={class:"image-gallery"},So={class:"mobile-carousel"},_o=Le(()=>s("i",{class:"fa fa-chevron-left"},null,-1)),wo=[_o],$o=["src"],To=["src","alt","onLoad"],Lo=Le(()=>s("i",{class:"fa fa-chevron-right"},null,-1)),Ro=[Lo],ko={class:"mobile-carousel-footer"},Po=["src"],Bo=["src"],zo={key:0,class:"secondary-images"},Ao=["onClick"],Io=["src","alt","onLoad"],Oo={key:0,class:"gallery-modal"},jo=Le(()=>s("i",{class:"fa fa-times"},null,-1)),Eo={class:"modal-content"},Wo=Le(()=>s("i",{class:"fa fa-chevron-left"},null,-1)),Mo=[Wo],Vo=["src"],No=["src","alt"],Do=Le(()=>s("i",{class:"fa fa-chevron-right"},null,-1)),Uo=[Do],Go={class:"modal-footer"},Ho={__name:"ImageGallery",props:{images:{type:Array,required:!0},videoUrl:{type:String,default:null}},setup(e){const t=e,a=L(0),o=L(!1),n=L(new Set),r=L(0),d=Y(()=>t.videoUrl?t.images.length+1:t.images.length),c=Y(()=>t.videoUrl?t.images.length+1:t.images.length),m=C=>{n.value.add(C)},v=C=>{a.value=C},b=()=>{a.value=(a.value-1+d.value)%d.value},y=()=>{a.value=(a.value+1)%d.value},_=C=>{a.value=(t.videoUrl,C),o.value=!0,document.body.style.overflow="hidden"},h=()=>{o.value=!1,document.body.style.overflow="auto"},O=C=>{r.value=C},j=()=>{r.value=(r.value-1+d.value)%d.value},E=()=>{r.value=(r.value+1)%d.value};return(C,k)=>(S(),z("div",Co,[s("div",So,[s("button",{class:"nav-button prev",onClick:j},wo),X(H(dt),{"current-index":r.value,"onUpdate:currentIndex":O,"dot-type":"line","show-arrow":!1,effect:"fade",interval:5e3,duration:500,autoplay:!1},{default:re(()=>[e.videoUrl?(S(),se(H(Oe),{class:"video-item",key:"video"},{default:re(()=>[s("video",{src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:"",class:"video-element"},null,8,$o)]),_:1})):M("",!0),(S(!0),z(ie,null,pe(e.images,(W,P)=>(S(),se(H(Oe),{key:"image-"+P,class:"image-item"},{default:re(()=>[s("img",{src:W,alt:`Image ${e.videoUrl?P+2:P+1}`,onLoad:A=>m(P),class:$e({"image-loaded":n.value.has(P)})},null,42,To)]),_:2},1024))),128))]),_:1},8,["current-index"]),s("button",{class:"nav-button next",onClick:E},Ro),s("div",ko,[s("span",null,B(r.value+1)+" / "+B(d.value),1)])]),s("div",{class:$e(["gallery-grid",{"single-image":c.value===1,"few-images":c.value>1&&c.value<5}])},[s("div",{class:"main-image",onClick:k[1]||(k[1]=W=>_(0))},[e.videoUrl?(S(),z("video",{key:0,src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:"",class:"video-element"},null,8,Po)):(S(),z(ie,{key:1},[e.images.length>0?(S(),z("img",{key:0,src:e.images[0],alt:"Main image",onLoad:k[0]||(k[0]=W=>m(0)),class:$e({"image-loaded":n.value.has(0)})},null,42,Bo)):M("",!0)],64))]),c.value>1?(S(),z("div",zo,[(S(!0),z(ie,null,pe(e.images.slice(e.videoUrl?0:1,e.videoUrl?4:5),(W,P)=>(S(),z("div",{key:P,class:"secondary-image",onClick:A=>_((e.videoUrl,P+1))},[s("img",{src:W,alt:`Image ${e.videoUrl?P+2:P+1}`,onLoad:A=>m(P),class:$e({"image-loaded":n.value.has(P)})},null,42,Io)],8,Ao))),128)),c.value>2&&c.value!==5?(S(),z("button",{key:0,class:"show-all-button",onClick:k[2]||(k[2]=W=>_(0))},B(C.$t("message.showAllPhotos")),1)):M("",!0)])):M("",!0)],2),o.value?(S(),z("div",Oo,[s("div",{class:"modal-header"},[s("button",{class:"close-button",onClick:h},[jo,We(" Close ")])]),s("div",Eo,[s("button",{class:"nav-button prev",onClick:b},Mo),X(H(dt),{"current-index":a.value,"onUpdate:currentIndex":v,"show-arrow":!1,"dot-type":"line",effect:"fade",interval:5e3,duration:500,autoplay:!1},{default:re(()=>[e.videoUrl?(S(),se(H(Oe),{class:"video-item",key:"video"},{default:re(()=>[s("video",{src:e.videoUrl,autoplay:"",muted:"",loop:"",playsinline:""},null,8,Vo)]),_:1})):M("",!0),(S(!0),z(ie,null,pe(e.images,(W,P)=>(S(),se(H(Oe),{key:"image-"+P,class:"image-item"},{default:re(()=>[s("img",{src:W,alt:`Image ${P+1}`},null,8,No)]),_:2},1024))),128))]),_:1},8,["current-index"]),s("button",{class:"nav-button next",onClick:y},Uo)]),s("div",Go,[s("span",null,B(a.value+1)+" / "+B(d.value),1)])])):M("",!0)]))}},Fo=Xe(Ho,[["__scopeId","data-v-b2d7762d"]]),vt=(e,t)=>{for(const a of Object.keys(t))e.on(a,t[a])},wt=e=>{for(const t of Object.keys(e)){const a=e[t];a&&ce(a.cancel)&&a.cancel()}},qo=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),ce=e=>typeof e=="function",Ce=(e,t,a)=>{for(const o in a){const n="set"+qo(o);e[n]?ve(()=>a[o],(r,d)=>{e[n](r,d)}):t[n]&&ve(()=>a[o],r=>{t[n](r)})}},me=(e,t,a={})=>{const o={...a};for(const n in e){const r=t[n],d=e[n];r&&(r&&r.custom===!0||d!==void 0&&(o[n]=d))}return o},Re=e=>{const t={},a={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const n=o.slice(2).toLocaleLowerCase();t[n]=e[o]}else a[o]=e[o];return{listeners:t,attrs:a}},Zo=async e=>{const t=await Promise.all([ae(()=>import("./marker-icon-2x-D4k_ikNW.js"),[]),ae(()=>import("./marker-icon-C2eJqgqv.js"),[]),ae(()=>import("./marker-shadow-DU6CIJ0p.js"),[])]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},je=e=>{const t=L((...o)=>console.warn(`Method ${e} has been invoked without being replaced`)),a=(...o)=>t.value(...o);return a.wrapped=t,ee(e,a),a},Ee=(e,t)=>e.wrapped.value=t,ue=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,le=e=>{const t=be(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},Se=Symbol("useGlobalLeaflet"),ke=Symbol("addLayer"),$t=Symbol("removeLayer"),Tt=Symbol("registerControl"),Xo=Symbol("registerLayerControl"),Lt=Symbol("canSetParentHtml"),Rt=Symbol("setParentHtml"),kt=Symbol("setIcon"),Yo=Symbol("bindPopup"),Ko=Symbol("bindTooltip"),Jo=Symbol("unbindPopup"),Qo=Symbol("unbindTooltip"),Pe={options:{type:Object,default:()=>({}),custom:!0}},Ve=e=>({options:e.options,methods:{}}),_e={...Pe,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},Pt=(e,t,a)=>{const o=le(ke),n=le($t),{options:r,methods:d}=Ve(e),c=me(e,_e,r),m=()=>o({leafletObject:t.value}),v=()=>n({leafletObject:t.value}),b={...d,setAttribution(y){v(),t.value.options.attribution=y,e.visible&&m()},setName(){v(),e.visible&&m()},setLayerType(){v(),e.visible&&m()},setVisible(y){t.value&&(y?m():v())},bindPopup(y){if(!t.value||!ce(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(y)},bindTooltip(y){if(!t.value||!ce(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(y)},unbindTooltip(){t.value&&(ce(t.value.closeTooltip)&&t.value.closeTooltip(),ce(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(ce(t.value.closePopup)&&t.value.closePopup(),ce(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(y){a.emit("update:visible",y)}};return ee(Yo,b.bindPopup),ee(Ko,b.bindTooltip),ee(Jo,b.unbindPopup),ee(Qo,b.unbindTooltip),Ye(()=>{b.unbindPopup(),b.unbindTooltip(),v()}),{options:c,methods:b}},en=(e,t)=>{if(e&&t.default)return T("div",{style:{display:"none"}},t.default())},tn={..._e,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},Bt={...tn,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},an={...Bt,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...an});const we={...Pe,position:{type:String}},on=(e,t)=>{const{options:a,methods:o}=Ve(e),n=me(e,we,a),r={...o,setPosition(d){t.value&&t.value.setPosition(d)}};return Ye(()=>{t.value&&t.value.remove()}),{options:n,methods:r}},nn=e=>e.default?T("div",{ref:"root"},e.default()):null;K({name:"LControl",props:{...we,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const a=L(),o=L(),n=be(Se),r=le(Tt),{options:d,methods:c}=on(e,a);return fe(async()=>{const{Control:m,DomEvent:v}=n?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),b=m.extend({onAdd(){return o.value}});a.value=Te(new b(d)),Ce(c,a.value,e),r({leafletObject:a.value}),e.disableClickPropagation&&o.value&&v.disableClickPropagation(o.value),e.disableScrollPropagation&&o.value&&v.disableScrollPropagation(o.value),te(()=>t.emit("ready",a.value))}),{root:o,leafletObject:a}},render(){return nn(this.$slots)}});({...we});({...we});({...we});({...we});const zt={..._e};({...zt});({...zt});const Je={..._e,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},At=(e,t,a)=>{const{options:o,methods:n}=Pt(e,t,a),r=me(e,Je,o),d={...n,setTileComponent(){var c;(c=t.value)==null||c.redraw()}};return Ye(()=>{t.value.off()}),{options:r,methods:d}},rn=(e,t,a,o)=>e.extend({initialize(n){this.tileComponents={},this.on("tileunload",this._unloadTile),a.setOptions(this,n)},createTile(n){const r=this._tileCoordsToKey(n);this.tileComponents[r]=t.create("div");const d=T({setup:o,props:["coords"]},{coords:n});return Ha(d,this.tileComponents[r]),this.tileComponents[r]},_unloadTile(n){const r=this._tileCoordsToKey(n.coords);this.tileComponents[r]&&(this.tileComponents[r].innerHTML="",this.tileComponents[r]=void 0)}});K({props:{...Je,childRender:{type:Function,required:!0}},setup(e,t){const a=L(),o=L(null),n=L(!1),r=be(Se),d=le(ke),{options:c,methods:m}=At(e,a,t);return fe(async()=>{const{GridLayer:v,DomUtil:b,Util:y}=r?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),_=rn(v,b,y,e.childRender);a.value=Te(new _(c));const{listeners:h}=Re(t.attrs);a.value.on(h),Ce(m,a.value,e),d({...e,...m,leafletObject:a.value}),n.value=!0,te(()=>t.emit("ready",a.value))}),{root:o,ready:n,leafletObject:a}},render(){return this.ready?T("div",{style:{display:"none"},ref:"root"}):null}});const mt={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}};K({name:"LIcon",props:{...mt,...Pe},setup(e,t){const a=L(),o=be(Se),n=le(Lt),r=le(Rt),d=le(kt);let c,m,v,b,y;const _=(E,C,k)=>{const W=E&&E.innerHTML;if(!C){k&&y&&n()&&r(W);return}const{listeners:P}=Re(t.attrs);y&&m(y,P);const{options:A}=Ve(e),w=me(e,mt,A);W&&(w.html=W),y=w.html?v(w):b(w),c(y,P),d(y)},h=()=>{te(()=>_(a.value,!0,!1))},O=()=>{te(()=>_(a.value,!1,!0))},j={setIconUrl:h,setIconRetinaUrl:h,setIconSize:h,setIconAnchor:h,setPopupAnchor:h,setTooltipAnchor:h,setShadowUrl:h,setShadowRetinaUrl:h,setShadowAnchor:h,setBgPos:h,setClassName:h,setHtml:h};return fe(async()=>{const{DomEvent:E,divIcon:C,icon:k}=o?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);c=E.on,m=E.off,v=C,b=k,Ce(j,{},e),new MutationObserver(O).observe(a.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),h()}),{root:a}},render(){const e=this.$slots.default?this.$slots.default():void 0;return T("div",{ref:"root"},e)}});({..._e});function It(e,t,a){var o,n,r;t===void 0&&(t=50),a===void 0&&(a={});var d=(o=a.isImmediate)!=null&&o,c=(n=a.callback)!=null&&n,m=a.maxWait,v=Date.now(),b=[];function y(){if(m!==void 0){var h=Date.now()-v;if(h+t>=m)return m-h}return t}var _=function(){var h=[].slice.call(arguments),O=this;return new Promise(function(j,E){var C=d&&r===void 0;if(r!==void 0&&clearTimeout(r),r=setTimeout(function(){if(r=void 0,v=Date.now(),!d){var W=e.apply(O,h);c&&c(W),b.forEach(function(P){return(0,P.resolve)(W)}),b=[]}},y()),C){var k=e.apply(O,h);return c&&c(k),j(k)}b.push({resolve:j,reject:E})})};return _.cancel=function(h){r!==void 0&&clearTimeout(r),b.forEach(function(O){return(0,O.reject)(h)}),b=[]},_}const gt={...Pe,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},sn=K({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:gt,setup(e,t){const a=L(),o=Ga({ready:!1,layersToAdd:[],layersInControl:[]}),{options:n}=Ve(e),r=me(e,gt,n),{listeners:d,attrs:c}=Re(t.attrs),m=je(ke),v=je($t),b=je(Tt),y=je(Xo);ee(Se,e.useGlobalLeaflet);const _=Y(()=>{const C={};return e.noBlockingAnimations&&(C.animate=!1),C}),h=Y(()=>{const C=_.value;return e.padding&&(C.padding=e.padding),e.paddingTopLeft&&(C.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(C.paddingBottomRight=e.paddingBottomRight),C}),O={moveend:It(C=>{o.leafletRef&&(t.emit("update:zoom",o.leafletRef.getZoom()),t.emit("update:center",o.leafletRef.getCenter()),t.emit("update:bounds",o.leafletRef.getBounds()))}),overlayadd(C){const k=o.layersInControl.find(W=>W.name===C.name);k&&k.updateVisibleProp(!0)},overlayremove(C){const k=o.layersInControl.find(W=>W.name===C.name);k&&k.updateVisibleProp(!1)}};fe(async()=>{e.useGlobalLeaflet&&(ue.L=ue.L||await ae(()=>import("./leaflet-src-MwF3y8gD.js").then($=>$.l),__vite__mapDeps([0,1,2])));const{map:C,CRS:k,Icon:W,latLngBounds:P,latLng:A,stamp:w}=e.useGlobalLeaflet?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);try{r.beforeMapMount&&await r.beforeMapMount()}catch($){console.error(`The following error occurred running the provided beforeMapMount hook ${$.message}`)}await Zo(W);const N=typeof r.crs=="string"?k[r.crs]:r.crs;r.crs=N||k.EPSG3857;const F={addLayer($){$.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd.push($):o.layersInControl.find(V=>w(V.leafletObject)===w($.leafletObject))||(o.layerControl.addLayer($),o.layersInControl.push($))),$.visible!==!1&&o.leafletRef.addLayer($.leafletObject)},removeLayer($){$.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd=o.layersToAdd.filter(V=>V.name!==$.name):(o.layerControl.removeLayer($.leafletObject),o.layersInControl=o.layersInControl.filter(V=>w(V.leafletObject)!==w($.leafletObject)))),o.leafletRef.removeLayer($.leafletObject)},registerLayerControl($){o.layerControl=$,o.layersToAdd.forEach(V=>{o.layerControl.addLayer(V)}),o.layersToAdd=[],b($)},registerControl($){o.leafletRef.addControl($.leafletObject)},setZoom($){const V=o.leafletRef.getZoom();$!==V&&o.leafletRef.setZoom($,_.value)},setCrs($){const V=o.leafletRef.getBounds();o.leafletRef.options.crs=$,o.leafletRef.fitBounds(V,{animate:!1,padding:[0,0]})},fitBounds($){o.leafletRef.fitBounds($,h.value)},setBounds($){if(!$)return;const V=P($);V.isValid()&&!(o.lastSetBounds||o.leafletRef.getBounds()).equals(V,0)&&(o.lastSetBounds=V,o.leafletRef.fitBounds(V))},setCenter($){if($==null)return;const V=A($),oe=o.lastSetCenter||o.leafletRef.getCenter();(oe.lat!==V.lat||oe.lng!==V.lng)&&(o.lastSetCenter=V,o.leafletRef.panTo(V,_.value))}};Ee(m,F.addLayer),Ee(v,F.removeLayer),Ee(b,F.registerControl),Ee(y,F.registerLayerControl),o.leafletRef=Te(C(a.value,r)),Ce(F,o.leafletRef,e),vt(o.leafletRef,O),vt(o.leafletRef,d),o.ready=!0,te(()=>t.emit("ready",o.leafletRef))}),St(()=>{wt(O),o.leafletRef&&(o.leafletRef.off(),o.leafletRef.remove())});const j=Y(()=>o.leafletRef),E=Y(()=>o.ready);return{root:a,ready:E,leafletObject:j,attrs:c}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),T("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),ln=["Symbol(Comment)","Symbol(Text)"],dn=["LTooltip","LPopup"],Ot={..._e,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},cn=(e,t,a)=>{const{options:o,methods:n}=Pt(e,t,a),r=me(e,Ot,o),d={...n,setDraggable(c){t.value.dragging&&(c?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(c){a.emit("update:latLng",c.latlng),a.emit("update:lat-lng",c.latlng)},setLatLng(c){if(c!=null&&t.value){const m=t.value.getLatLng();(!m||!m.equals(c))&&t.value.setLatLng(c)}}};return{options:r,methods:d}},un=(e,t)=>{const a=t.slots.default&&t.slots.default();return a&&a.length&&a.some(bn)};function bn(e){return!(ln.includes(e.type.toString())||dn.includes(e.type.name))}const fn=K({name:"LMarker",props:Ot,setup(e,t){const a=L(),o=L(!1),n=be(Se),r=le(ke);ee(Lt,()=>{var v;return!!((v=a.value)!=null&&v.getElement())}),ee(Rt,v=>{var b,y;const _=ce((b=a.value)==null?void 0:b.getElement)&&((y=a.value)==null?void 0:y.getElement());_&&(_.innerHTML=v)}),ee(kt,v=>{var b;return((b=a.value)==null?void 0:b.setIcon)&&a.value.setIcon(v)});const{options:d,methods:c}=cn(e,a,t),m={moveHandler:It(c.latLngSync)};return fe(async()=>{const{marker:v,divIcon:b}=n?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);un(d,t)&&(d.icon=b({className:""})),a.value=Te(v(e.latLng,d));const{listeners:y}=Re(t.attrs);a.value.on(y),a.value.on("move",m.moveHandler),Ce(c,a.value,e),r({...e,...c,leafletObject:a.value}),o.value=!0,te(()=>t.emit("ready",a.value))}),St(()=>wt(m)),{ready:o,leafletObject:a}},render(){return en(this.ready,this.$slots)}}),pn={...Bt,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},ht={...pn},jt={...Pe,content:{type:String,default:null}};({...jt});({...ht,latLngs:{...ht.latLngs}});const Qe={...Je,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},vn=(e,t,a)=>{const{options:o,methods:n}=At(e,t,a),r=me(e,Qe,o),d={...n};return{options:r,methods:d}},mn=K({props:Qe,setup(e,t){const a=L(),o=be(Se),n=le(ke),{options:r,methods:d}=vn(e,a,t);return fe(async()=>{const{tileLayer:c}=o?ue.L:await ae(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);a.value=Te(c(e.url,r));const{listeners:m}=Re(t.attrs);a.value.on(m),Ce(d,a.value,e),n({...e,...d,leafletObject:a.value}),te(()=>t.emit("ready",a.value))}),{leafletObject:a}},render(){return null}});({...jt});({...Qe});const gn={class:"map-container"},hn="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",yn='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',xn={__name:"Map",props:{center:{default:()=>[51.505,-.159]},zoom:{default:15}},setup(e){const t=e,a=L(null);let o=null;const n={scrollWheelZoom:!1,zoomControl:!0},r=d=>{o=d,o&&(o.invalidateSize(),o.setView(t.center,t.zoom))};return ve(()=>t.center,d=>{d&&o&&o.setView(d,t.zoom)},{deep:!0}),(d,c)=>(S(),z("div",gn,[X(H(sn),{ref_key:"mapRef",ref:a,zoom:e.zoom,center:e.center,options:n,onReady:r},{default:re(()=>[X(H(mn),{url:hn,attribution:yn}),X(H(fn),{"lat-lng":e.center},null,8,["lat-lng"])]),_:1},8,["zoom","center"])]))}},Cn=Xe(xn,[["__scopeId","data-v-1c7d12bb"]]),Et=e=>(xt("data-v-ded9dd51"),e=e(),Ct(),e),Sn={key:0,class:"clinic-details"},_n={class:"container"},wn={class:"sticky-nav"},$n=Et(()=>s("span",{class:"icon-back"},"←",-1)),Tn={key:0,class:"hero-section"},Ln={class:"mobile-tabs"},Rn={class:"desktop-layout"},kn={class:"content-column"},Pn={class:"hero-section-header"},Bn={class:"clinic-name"},zn={class:"clinic-description"},An={class:"location"},In={key:0,class:"reviews-section"},On={class:"reviews-box"},jn={class:"rating-text"},En={key:0,id:"about-section",class:"about-section"},Wn={key:1,id:"cases-section"},Mn={class:"case-grid"},Vn=["onClick"],Nn={key:0,class:"before-after"},Dn=["src","alt"],Un=["src","alt"],Gn={key:1,class:"only-after"},Hn=["src","alt"],Fn={class:"description-overlay"},qn={class:"description"},Zn={key:2,id:"staff-section"},Xn={class:"doctors-grid"},Yn=["src","alt"],Kn={class:"biography"},Jn={key:3,id:"price-section"},Qn={class:"price-table"},er={key:4,id:"certifications-section"},tr={class:"certifications-grid"},ar=["onClick"],or=["src","alt"],nr={id:"location-section",class:"location-container"},rr={class:"sidebar-column"},sr={class:"sections-nav"},ir={key:0},lr={key:1},dr={key:2},cr={key:3},ur={key:4},br={class:"fixed-bottom-overlay"},fr=Et(()=>s("span",{class:"icon-back"},"←",-1)),pr=["src","alt"],vr={class:"case-overlay-content"},mr={key:0,class:"before-after-large"},gr=["src","alt"],hr=["src","alt"],yr={key:1,class:"only-after-large"},xr=["src","alt"],Cr={class:"case-overlay-description"},Sr={__name:"ClinicDetails",setup(e){const t=Fa(),a=qa(),o=t.params.id,n=L(null),r=L({}),d=L([]),c=L([]),m=L([]),v=L([]),b=L("about"),y=L(null),_=L(null),h=L(!1),O=f=>{y.value=f},j=f=>{_.value=f};async function E(f){try{return(await(await fetch(`/data/${f.folder}/doctors.json`)).json()).doctors.map(G=>({...G,photo:G.image?`/data/${f.folder}/images/${G.image}`:null}))}catch(g){return console.error("Error loading doctors:",g),[]}}async function C(f){try{const u=await(await fetch(`/data/${f.folder}/info.json`)).json();return u.images&&u.images.forEach(G=>{G.src=`/data/${f.folder}/images/${G.filename}`}),u}catch(g){return console.error("Error loading clinic info:",g),{}}}async function k(f){try{const u=await(await fetch(`/data/${f.folder}/cases.json`)).json();return u.cases.forEach(G=>{G.beforeImage&&(G.beforeSrc=`/data/${f.folder}/images/${G.beforeImage}`),G.afterSrc=`/data/${f.folder}/images/${G.afterImage}`}),u.cases}catch(g){return console.error("Error loading cases:",g),[]}}async function W(f){try{const u=await(await fetch(`/data/${f.folder}/certifications.json`)).json();return u.certifications.forEach(G=>{G.src=`/data/${f.folder}/images/${G.image}`}),u.certifications}catch(g){return console.error("Error loading certifications:",g),[]}}async function P(f){try{return(await(await fetch(`/data/${f.folder}/prices.json`)).json()).prices}catch(g){return console.error("Error loading prices:",g),[]}}const A=L(null);async function w(f){try{const u=await(await fetch(`/data/${f.folder}/video.json`)).json();return u.video?`/data/${f.folder}/videos/${u.video.filename}`:null}catch(g){return console.error("Error loading video:",g),null}}const N=()=>{a.push("/editor/clinics")},F=()=>{lt.clinics.includes(parseInt(o))||lt.clinics.push(parseInt(o)),a.push("/request-offers")};fe(async()=>{window.scrollTo(0,0),n.value=Xa.find(f=>f.id===parseInt(o)),r.value=await C(n.value),d.value=await E(n.value),m.value=await W(n.value),c.value=await k(n.value),v.value=await P(n.value),A.value=await w(n.value),window.addEventListener("scroll",()=>{h.value=window.scrollY>0})});const $=L(!1);L(null);const V=Y(()=>{var f,g,u;return((u=(g=(f=r.value)==null?void 0:f.info)==null?void 0:g.longDescription)==null?void 0:u.length)>300}),oe=()=>{$.value=!$.value},ne=(f,g)=>{f.preventDefault();const u=document.getElementById(g);if(u)switch(u.scrollIntoView({behavior:"smooth"}),g){case"about-section":b.value="about";break;case"cases-section":b.value="cases";break;case"staff-section":b.value="staff";break;case"price-section":b.value="price";break;case"certifications-section":b.value="certifications";break;case"location-section":b.value="location";break}};ve(b,f=>{ge(f)});const ge=f=>{let g;switch(f){case"about":g="about-section";break;case"cases":g="cases-section";break;case"staff":g="staff-section";break;case"price":g="price-section";break;case"certifications":g="certifications-section";break;case"location":g="location-section";break}if(g){const u=document.getElementById(g);u&&u.scrollIntoView({behavior:"smooth"})}};return(f,g)=>n.value?(S(),z("div",Sn,[s("main",_n,[s("div",wn,[s("div",{onClick:N,class:"back-button"},[$n,We(" "+B(f.$t("message.backToClinics")),1)]),s("div",{onClick:F,class:"request-offer-button"},B(f.$t("message.requestOffers")),1)]),r.value.images&&r.value.images.length?(S(),z("section",Tn,[X(H(Fo),{images:r.value.images.map(u=>u.src),"video-url":A.value},null,8,["images","video-url"])])):M("",!0),s("div",Ln,[X(H(xo),{value:b.value,"onUpdate:value":g[0]||(g[0]=u=>b.value=u),animated:""},{default:re(()=>[X(H(xe),{name:"about",tab:f.$t("message.aboutUs")},null,8,["tab"]),c.value.length?(S(),se(H(xe),{key:0,name:"cases",tab:f.$t("message.ourWork")},null,8,["tab"])):M("",!0),d.value.length?(S(),se(H(xe),{key:1,name:"staff",tab:f.$t("message.ourStaff")},null,8,["tab"])):M("",!0),v.value.length?(S(),se(H(xe),{key:2,name:"price",tab:f.$t("message.priceCatalogue")},null,8,["tab"])):M("",!0),m.value.length?(S(),se(H(xe),{key:3,name:"certifications",tab:f.$t("message.ourCertifications")},null,8,["tab"])):M("",!0),X(H(xe),{name:"location",tab:f.$t("message.clinicLocation")},null,8,["tab"])]),_:1},8,["value"])]),s("div",Rn,[s("div",kn,[s("div",Pn,[s("h2",Bn,B(n.value.name),1),s("p",zn,B(n.value.description),1),s("p",An,B(f.$t("message.location",{location:`${n.value.town}, ${n.value.country}`})),1),n.value.rating?(S(),z("div",In,[s("div",On,[s("div",jn,B(Number(n.value.rating).toFixed(1)),1),X(H(Ya),{value:n.value.rating,count:5,color:"var(--primary-color)",readonly:"",size:"1","allow-half":""},null,8,["value"])])])):M("",!0)]),r.value.info&&r.value.info.longDescription?(S(),z("section",En,[s("h2",null,B(f.$t("message.aboutUs")),1),s("div",{class:$e(["clinic-info",{expanded:$.value}])},[s("p",null,B(r.value.info.longDescription),1)],2),V.value?(S(),se(H(Za),{key:0,onClick:oe,class:"expand-button"},{default:re(()=>[We(B($.value?f.$t("message.showLess"):f.$t("message.showMore")),1)]),_:1})):M("",!0)])):M("",!0),c.value.length?(S(),z("section",Wn,[s("h2",null,B(f.$t("message.ourWork")),1),s("div",Mn,[(S(!0),z(ie,null,pe(c.value,u=>(S(),z("div",{class:"card case-card",key:u.id,onClick:G=>j(u)},[u.beforeSrc?(S(),z("div",Nn,[s("img",{src:u.beforeSrc,alt:u.description+" (before)",class:"before-image"},null,8,Dn),s("img",{src:u.afterSrc,alt:u.description+" (after)",class:"after-image"},null,8,Un)])):(S(),z("div",Gn,[s("img",{src:u.afterSrc,alt:u.description+" (after)",class:"only-after-image"},null,8,Hn)])),s("div",Fn,[s("p",qn,[s("b",null,B(u.description),1)])])],8,Vn))),128))])])):M("",!0),d.value.length?(S(),z("section",Zn,[s("h2",null,B(f.$t("message.ourStaff")),1),s("div",Xn,[(S(!0),z(ie,null,pe(d.value,u=>(S(),z("div",{key:u.id,class:"doctor-card"},[s("div",null,[u.photo?(S(),z("img",{key:0,src:u.photo,alt:u.name},null,8,Yn)):M("",!0),s("div",null,[s("h3",null,B(u.name),1),s("p",null,B(u.title),1)])]),s("div",Kn,B(u.biography),1)]))),128))])])):M("",!0),v.value.length?(S(),z("section",Jn,[s("h2",null,B(f.$t("message.priceCatalogue")),1),s("table",Qn,[s("thead",null,[s("tr",null,[s("th",null,B(f.$t("message.treatment")),1),s("th",null,B(f.$t("message.price")),1)])]),s("tbody",null,[(S(!0),z(ie,null,pe(v.value,u=>(S(),z("tr",{key:u.service},[s("td",null,B(u.service),1),s("td",null,B(u.price)+" "+B(u.currency||"€"),1)]))),128))])])])):M("",!0),m.value.length?(S(),z("section",er,[s("h2",null,B(f.$t("message.ourCertifications")),1),s("div",tr,[(S(!0),z(ie,null,pe(m.value,u=>(S(),z("div",{key:u.id,class:"card certification-card",onClick:G=>O(u)},[s("h3",null,B(u.name),1),s("img",{src:u.src,alt:u.name,class:"certification-icon"},null,8,or)],8,ar))),128))])])):M("",!0),s("section",nr,[s("h2",null,B(f.$t("message.clinicLocation")),1),s("p",null,B(n.value.address),1),X(Cn,{center:[n.value.latLng[0],n.value.latLng[1]],zoom:15},null,8,["center"])])]),s("div",rr,[s("div",sr,[s("h3",null,B(f.$t("message.sections")),1),s("ul",null,[r.value.info&&r.value.info.longDescription?(S(),z("li",ir,[s("a",{href:"#about-section",onClick:g[1]||(g[1]=u=>ne(u,"about-section"))},B(f.$t("message.aboutUs")),1)])):M("",!0),c.value.length?(S(),z("li",lr,[s("a",{href:"#cases-section",onClick:g[2]||(g[2]=u=>ne(u,"cases-section"))},B(f.$t("message.ourWork")),1)])):M("",!0),d.value.length?(S(),z("li",dr,[s("a",{href:"#staff-section",onClick:g[3]||(g[3]=u=>ne(u,"staff-section"))},B(f.$t("message.ourStaff")),1)])):M("",!0),v.value.length?(S(),z("li",cr,[s("a",{href:"#price-section",onClick:g[4]||(g[4]=u=>ne(u,"price-section"))},B(f.$t("message.priceCatalogue")),1)])):M("",!0),m.value.length?(S(),z("li",ur,[s("a",{href:"#certifications-section",onClick:g[5]||(g[5]=u=>ne(u,"certifications-section"))},B(f.$t("message.ourCertifications")),1)])):M("",!0),s("li",null,[s("a",{href:"#location-section",onClick:g[6]||(g[6]=u=>ne(u,"location-section"))},B(f.$t("message.clinicLocation")),1)])])])])])]),s("section",br,[s("div",{onClick:N,class:"back-button"},[fr,We(" "+B(f.$t("message.backToClinics")),1)]),s("div",{onClick:F,class:"request-offer-button"},B(f.$t("message.requestOffers")),1)]),y.value?(S(),z("div",{key:0,class:"certificate-overlay",onClick:g[7]||(g[7]=u=>y.value=null)},[s("img",{src:y.value.src,alt:y.value.name,class:"certificate-overlay-image"},null,8,pr)])):M("",!0),_.value?(S(),z("div",{key:1,class:"case-overlay",onClick:g[8]||(g[8]=u=>_.value=null)},[s("div",vr,[_.value.beforeSrc?(S(),z("div",mr,[s("img",{src:_.value.beforeSrc,alt:_.value.description+" (before)"},null,8,gr),s("img",{src:_.value.afterSrc,alt:_.value.description+" (after)"},null,8,hr)])):(S(),z("div",yr,[s("img",{src:_.value.afterSrc,alt:_.value.description+" (after)"},null,8,xr)])),s("p",Cr,[s("b",null,B(_.value.description),1)])])])):M("",!0)])):M("",!0)}},Lr=Xe(Sr,[["__scopeId","data-v-ded9dd51"]]);export{Lr as default};
