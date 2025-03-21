import{aK as Ut,aL as Ie,x as Je,ac as qe,G as jt,I as Bt,J as Wt,H as Ft,d as ee,u as te,v as _,aM as Zt,i as g,aN as Ht,c as h,X as Qe,a3 as et,y as tt,C as u,A as $,z as f,aO as _e,at as nt,a7 as ot,aG as Xt,aP as Kt,as as fe,a as xe,K as at,h as Yt,aa as Oe,aQ as Le,az as Gt,a1 as Jt,T as qt,aR as Qt,aE as en,aS as q,aD as Ue,aT as Q,E as tn,aq as nn,e as on,aU as an,W as rn,P as sn,L as je}from"./index-CutREJzL.js";function ln(e){return Ut(Ie(e).toLowerCase())}function un(e,n,a,s){for(var i=-1,x=e==null?0:e.length;++i<x;)a=n(a,e[i],i,e);return a}function cn(e){return function(n){return e==null?void 0:e[n]}}var dn={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},fn=cn(dn),vn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hn="\\u0300-\\u036f",xn="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",pn=hn+xn+mn,gn="["+pn+"]",bn=RegExp(gn,"g");function wn(e){return e=Ie(e),e&&e.replace(vn,fn).replace(bn,"")}var yn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Cn(e){return e.match(yn)||[]}var Sn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Rn(e){return Sn.test(e)}var rt="\\ud800-\\udfff",zn="\\u0300-\\u036f",Pn="\\ufe20-\\ufe2f",In="\\u20d0-\\u20ff",Nn=zn+Pn+In,st="\\u2700-\\u27bf",lt="a-z\\xdf-\\xf6\\xf8-\\xff",kn="\\xac\\xb1\\xd7\\xf7",An="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vn="\\u2000-\\u206f",Dn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",it="A-Z\\xc0-\\xd6\\xd8-\\xde",$n="\\ufe0e\\ufe0f",ut=kn+An+Vn+Dn,ct="['’]",Be="["+ut+"]",En="["+Nn+"]",dt="\\d+",Mn="["+st+"]",ft="["+lt+"]",vt="[^"+rt+ut+dt+st+lt+it+"]",Tn="\\ud83c[\\udffb-\\udfff]",_n="(?:"+En+"|"+Tn+")",On="[^"+rt+"]",ht="(?:\\ud83c[\\udde6-\\uddff]){2}",xt="[\\ud800-\\udbff][\\udc00-\\udfff]",K="["+it+"]",Ln="\\u200d",We="(?:"+ft+"|"+vt+")",Un="(?:"+K+"|"+vt+")",Fe="(?:"+ct+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+ct+"(?:D|LL|M|RE|S|T|VE))?",mt=_n+"?",pt="["+$n+"]?",jn="(?:"+Ln+"(?:"+[On,ht,xt].join("|")+")"+pt+mt+")*",Bn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fn=pt+mt+jn,Zn="(?:"+[Mn,ht,xt].join("|")+")"+Fn,Hn=RegExp([K+"?"+ft+"+"+Fe+"(?="+[Be,K,"$"].join("|")+")",Un+"+"+Ze+"(?="+[Be,K+We,"$"].join("|")+")",K+"?"+We+"+"+Fe,K+"+"+Ze,Wn,Bn,dt,Zn].join("|"),"g");function Xn(e){return e.match(Hn)||[]}function Kn(e,n,a){return e=Ie(e),n=n,n===void 0?Rn(e)?Xn(e):Cn(e):e.match(n)||[]}var Yn="['’]",Gn=RegExp(Yn,"g");function Jn(e){return function(n){return un(Kn(wn(n).replace(Gn,"")),e,"")}}var He=Jn(function(e,n,a){return n=n.toLowerCase(),e+(a?ln(n):n)});function qn(){return{dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}}const Qn={name:"Carousel",common:Je,self:qn};function eo(e){const{length:n}=e;return n>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[n-1],n-1,"prepend"))),e}function Xe(e,n,a){return qe(e,{key:`carousel-item-duplicate-${n}-${a}`})}function Ke(e,n,a){return n===1?0:a?e===0?n-3:e===n-1?0:e-1:e}function ze(e,n){return n?e+1:e}function to(e,n,a){return e<0?null:e===0?a?n-1:null:e-1}function no(e,n,a){return e>n-1?null:e===n-1?a?0:null:e+1}function oo(e,n){return n&&e>3?e-2:e}function Ye(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ge(e,n){let{offsetWidth:a,offsetHeight:s}=e;if(n){const i=getComputedStyle(e);a=a-Number.parseFloat(i.getPropertyValue("padding-left"))-Number.parseFloat(i.getPropertyValue("padding-right")),s=s-Number.parseFloat(i.getPropertyValue("padding-top"))-Number.parseFloat(i.getPropertyValue("padding-bottom"))}return{width:a,height:s}}function ve(e,n,a){return e<n?n:e>a?a:e}function ao(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(n);if(a){const[,s,,i="ms"]=a;return Number(s)*(i==="ms"?1:1e3)}return 0}const gt=Ft("n-carousel-methods");function ro(e){jt(gt,e)}function Ne(e="unknown",n="component"){const a=Bt(gt);return a||Wt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),a}const so={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},lo=ee({name:"CarouselDots",props:so,setup(e){const{mergedClsPrefixRef:n}=te(e),a=_([]),s=Ne();function i(m,d){switch(m.key){case"Enter":case" ":m.preventDefault(),s.to(d);return}e.keyboard&&p(m)}function x(m){e.trigger==="hover"&&s.to(m)}function R(m){e.trigger==="click"&&s.to(m)}function p(m){var d;if(m.shiftKey||m.altKey||m.ctrlKey||m.metaKey)return;const w=(d=document.activeElement)===null||d===void 0?void 0:d.nodeName.toLowerCase();if(w==="input"||w==="textarea")return;const{code:k}=m,O=k==="PageUp"||k==="ArrowUp",U=k==="PageDown"||k==="ArrowDown",P=k==="PageUp"||k==="ArrowRight",I=k==="PageDown"||k==="ArrowLeft",A=s.isVertical(),V=A?O:P,b=A?U:I;!V&&!b||(m.preventDefault(),V&&!s.isNextDisabled()?(s.next(),C(s.currentIndexRef.value)):b&&!s.isPrevDisabled()&&(s.prev(),C(s.currentIndexRef.value)))}function C(m){var d;(d=a.value[m])===null||d===void 0||d.focus()}return Zt(()=>a.value.length=0),{mergedClsPrefix:n,dotEls:a,handleKeydown:i,handleMouseenter:x,handleClick:R}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return g("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ht(this.total,a=>{const s=a===this.currentIndex;return g("div",{"aria-selected":s,ref:i=>n.push(i),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,s&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:i=>{this.handleKeydown(i,a)}})}))}}),io=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),uo=g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},g("g",{fill:"none"},g("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),co=ee({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=te(e),{isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:x,next:R}=Ne();return{mergedClsPrefix:n,isVertical:a,isPrevDisabled:s,isNextDisabled:i,prev:x,next:R}},render(){const{mergedClsPrefix:e}=this;return g("div",{class:`${e}-carousel__arrow-group`},g("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},io),g("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},uo))}}),he="CarouselItem";function fo(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===he}const vo=ee({name:he,setup(e){const{mergedClsPrefixRef:n}=te(e),a=Ne(He(he),`n-${He(he)}`),s=_(),i=h(()=>{const{value:d}=s;return d?a.getSlideIndex(d):-1}),x=h(()=>a.isPrev(i.value)),R=h(()=>a.isNext(i.value)),p=h(()=>a.isActive(i.value)),C=h(()=>a.getSlideStyle(i.value));Qe(()=>{a.addSlide(s.value)}),et(()=>{a.removeSlide(s.value)});function m(d){const{value:w}=i;w!==void 0&&(a==null||a.onCarouselItemClick(w,d))}return{mergedClsPrefix:n,selfElRef:s,isPrev:x,isNext:R,isActive:p,index:i,style:C,handleClick:m}},render(){var e;const{$slots:n,mergedClsPrefix:a,isPrev:s,isNext:i,isActive:x,index:R,style:p}=this,C=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:x,[`${a}-carousel__slide--prev`]:s,[`${a}-carousel__slide--next`]:i}];return g("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":R,"aria-hidden":!x,style:p,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:s,isNext:i,isActive:x,index:R}))}}),ho=tt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[u("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[u("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[$("> img",`
 display: block;
 `)])]),u("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[u("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[$("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[u("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[$("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),u("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[$("svg",`
 height: 1em;
 width: 1em;
 `),$("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[u("slides",`
 flex-direction: column;
 `),f("fade",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[u("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[u("slides",[$(">",[$("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `)]),u("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[u("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[u("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[u("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[u("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[u("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[$("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[u("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[u("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),u("dot",`
 margin: 4px 0;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[$("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[u("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 top: 12px;
 right: 12px;
 `,[$("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[u("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[u("dot",`
 margin: 0 4px;
 `)])]),u("dot",`
 margin: 0 4px;
 `),u("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[$("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[u("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[u("slides",`
 perspective: 1000px;
 `),u("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),xo=["transitionDuration","transitionTimingFunction"],mo=Object.assign(Object.assign({},xe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Pe=!1;const Ro=ee({name:"Carousel",props:mo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=te(e),s=_(null),i=_(null),x=_([]),R={value:[]},p=h(()=>e.direction==="vertical"),C=h(()=>p.value?"height":"width"),m=h(()=>p.value?"bottom":"right"),d=h(()=>e.effect==="slide"),w=h(()=>e.loop&&e.slidesPerView===1&&d.value),k=h(()=>e.effect==="custom"),O=h(()=>!d.value||e.centeredSlides?1:e.slidesPerView),U=h(()=>k.value?1:e.slidesPerView),P=h(()=>O.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),I=_({width:0,height:0}),A=h(()=>{const{value:t}=x;if(!t.length)return[];const{value:o}=P;if(o)return t.map(S=>Ge(S));const{value:r}=U,{value:c}=I,{value:v}=C;let l=c[v];if(r!=="auto"){const{spaceBetween:S}=e,E=l-(r-1)*S,de=1/Math.max(1,r);l=E*de}const y=Object.assign(Object.assign({},c),{[v]:l});return t.map(()=>y)}),V=h(()=>{const{value:t}=A;if(!t.length)return[];const{centeredSlides:o,spaceBetween:r}=e,{value:c}=C,{[c]:v}=I.value;let l=0;return t.map(({[c]:y})=>{let S=l;return o&&(S+=(y-v)/2),l+=y+r,S})}),b=_(!1),z=h(()=>{const{transitionStyle:t}=e;return t?_e(t,xo):{}}),D=h(()=>k.value?0:ao(z.value.transitionDuration)),B=h(()=>{const{value:t}=x;if(!t.length)return[];const o=!(P.value||U.value===1),r=y=>{if(o){const{value:S}=C;return{[S]:`${A.value[y][S]}px`}}};if(k.value)return t.map((y,S)=>r(S));const{effect:c,spaceBetween:v}=e,{value:l}=m;return t.reduce((y,S,E)=>{const de=Object.assign(Object.assign({},r(E)),{[`margin-${l}`]:`${v}px`});return y.push(de),b.value&&(c==="fade"||c==="card")&&Object.assign(de,z.value),y},[])}),N=h(()=>{const{value:t}=O,{length:o}=x.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:r}=A,{length:c}=r;if(!c)return o;const{value:v}=V,{value:l}=C,y=I.value[l];let S=r[r.length-1][l],E=c;for(;E>1&&S<y;)E--,S+=v[E]-v[E-1];return ve(E+1,1,c)}}),ne=h(()=>oo(N.value,w.value)),bt=ze(e.defaultIndex,w.value),me=_(Ke(bt,N.value,w.value)),L=nt(ot(e,"currentIndex"),me),M=h(()=>ze(L.value,w.value));function Y(t){var o,r;t=ve(t,0,N.value-1);const c=Ke(t,N.value,w.value),{value:v}=L;c!==L.value&&(me.value=c,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,c,v),(r=e.onUpdateCurrentIndex)===null||r===void 0||r.call(e,c,v))}function oe(t=M.value){return to(t,N.value,e.loop)}function ae(t=M.value){return no(t,N.value,e.loop)}function wt(t){const o=F(t);return o!==null&&oe()===o}function yt(t){const o=F(t);return o!==null&&ae()===o}function ke(t){return M.value===F(t)}function Ct(t){return L.value===t}function Ae(){return oe()===null}function Ve(){return ae()===null}function pe(t){const o=ve(ze(t,w.value),0,N.value);(t!==L.value||o!==M.value)&&Y(o)}function ge(){const t=oe();t!==null&&Y(t)}function re(){const t=ae();t!==null&&Y(t)}let T=!1;function St(){(!T||!w.value)&&ge()}function Rt(){(!T||!w.value)&&re()}let W=0;const be=_({});function se(t,o=0){be.value=Object.assign({},z.value,{transform:p.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function G(t=0){d.value?we(M.value,t):W!==0&&(!T&&t>0&&(T=!0),se(W=0,t))}function we(t,o){const r=De(t);r!==W&&o>0&&(T=!0),W=De(M.value),se(r,o)}function De(t){let o;return t>=N.value-1?o=$e():o=V.value[t]||0,o}function $e(){if(O.value==="auto"){const{value:t}=C,{[t]:o}=I.value,{value:r}=V,c=r[r.length-1];let v;if(c===void 0)v=o;else{const{value:l}=A;v=c+l[l.length-1][t]}return v-o}else{const{value:t}=V;return t[N.value-1]||0}}const J={currentIndexRef:L,to:pe,prev:St,next:Rt,isVertical:()=>p.value,isHorizontal:()=>!p.value,isPrev:wt,isNext:yt,isActive:ke,isPrevDisabled:Ae,isNextDisabled:Ve,getSlideIndex:F,getSlideStyle:It,addSlide:zt,removeSlide:Pt,onCarouselItemClick:Nt};ro(J);function zt(t){t&&x.value.push(t)}function Pt(t){if(!t)return;const o=F(t);o!==-1&&x.value.splice(o,1)}function F(t){return typeof t=="number"?t:t?x.value.indexOf(t):-1}function It(t){const o=F(t);if(o!==-1){const r=[B.value[o]],c=J.isPrev(o),v=J.isNext(o);return c&&r.push(e.prevSlideStyle||""),v&&r.push(e.nextSlideStyle||""),Qt(r)}}let ye=0,Ce=0,j=0,Se=0,le=!1,Re=!1;function Nt(t,o){let r=!T&&!le&&!Re;e.effect==="card"&&r&&!ke(t)&&(pe(t),r=!1),r||(o.preventDefault(),o.stopPropagation())}let ie=null;function ue(){ie&&(clearInterval(ie),ie=null)}function Z(){ue(),!e.autoplay||ne.value<2||(ie=window.setInterval(re,e.interval))}function Ee(t){var o;if(Pe||!(!((o=i.value)===null||o===void 0)&&o.contains(en(t))))return;Pe=!0,le=!0,Re=!1,Se=Date.now(),ue(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const r=Ye(t)?t.touches[0]:t;p.value?Ce=r.clientY:ye=r.clientX,e.touchable&&(q("touchmove",document,ce),q("touchend",document,H),q("touchcancel",document,H)),e.draggable&&(q("mousemove",document,ce),q("mouseup",document,H))}function ce(t){const{value:o}=p,{value:r}=C,c=Ye(t)?t.touches[0]:t,v=o?c.clientY-Ce:c.clientX-ye,l=I.value[r];j=ve(v,-l,l),t.cancelable&&t.preventDefault(),d.value&&se(W-j,0)}function H(){const{value:t}=M;let o=t;if(!T&&j!==0&&d.value){const r=W-j,c=[...V.value.slice(0,N.value-1),$e()];let v=null;for(let l=0;l<c.length;l++){const y=Math.abs(c[l]-r);if(v!==null&&v<y)break;v=y,o=l}}if(o===t){const r=Date.now()-Se,{value:c}=C,v=I.value[c];j>v/2||j/r>.4?o=oe(t):(j<-v/2||j/r<-.4)&&(o=ae(t))}o!==null&&o!==t?(Re=!0,Y(o),Ue(()=>{(!w.value||me.value!==L.value)&&G(D.value)})):G(D.value),Me(),Z()}function Me(){le&&(Pe=!1),le=!1,ye=0,Ce=0,j=0,Se=0,Q("touchmove",document,ce),Q("touchend",document,H),Q("touchcancel",document,H),Q("mousemove",document,ce),Q("mouseup",document,H)}function kt(){if(d.value&&T){const{value:t}=M;we(t,0)}else Z();d.value&&(be.value.transitionDuration="0ms"),T=!1}function At(t){if(t.preventDefault(),T)return;let{deltaX:o,deltaY:r}=t;t.shiftKey&&!o&&(o=r);const c=-1,v=1,l=(o||r)>0?v:c;let y=0,S=0;p.value?S=l:y=l;const E=10;(S*r>=E||y*o>=E)&&(l===v&&!Ve()?re():l===c&&!Ae()&&ge())}function Vt(){I.value=Ge(s.value,!0),Z()}function Dt(){var t,o;P.value&&((o=(t=A.effect).scheduler)===null||o===void 0||o.call(t),A.effect.run())}function $t(){e.autoplay&&ue()}function Et(){e.autoplay&&Z()}Qe(()=>{Xt(Z),requestAnimationFrame(()=>b.value=!0)}),et(()=>{Me(),ue()}),Kt(()=>{const{value:t}=x,{value:o}=R,r=new Map,c=l=>r.has(l)?r.get(l):-1;let v=!1;for(let l=0;l<t.length;l++){const y=o.findIndex(S=>S.el===t[l]);y!==l&&(v=!0),r.set(t[l],y)}v&&t.sort((l,y)=>c(l)-c(y))}),fe(M,(t,o)=>{if(t!==o)if(Z(),d.value){if(w.value){const{value:r}=N;ne.value>2&&t===r-2&&o===1?t=0:t===1&&o===r-2&&(t=r-1)}we(t,D.value)}else G()},{immediate:!0}),fe([w,O],()=>void Ue(()=>{Y(M.value)})),fe(V,()=>{d.value&&G()},{deep:!0}),fe(d,t=>{t?G():(T=!1,se(W=0))});const Mt=h(()=>({onTouchstartPassive:e.touchable?Ee:void 0,onMousedown:e.draggable?Ee:void 0,onWheel:e.mousewheel?At:void 0})),Tt=h(()=>Object.assign(Object.assign({},_e(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ne.value,currentIndex:L.value})),_t=h(()=>({total:ne.value,currentIndex:L.value,to:J.to})),Ot={getCurrentIndex:()=>L.value,to:pe,prev:ge,next:re},Lt=xe("Carousel","-carousel",ho,Qn,e,n),Te=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:r,dotColorActive:c,dotColorFocus:v,dotLineWidth:l,dotLineWidthActive:y,arrowColor:S}}=Lt.value;return{"--n-bezier":t,"--n-dot-color":r,"--n-dot-color-focus":v,"--n-dot-color-active":c,"--n-dot-size":o,"--n-dot-line-width":l,"--n-dot-line-width-active":y,"--n-arrow-color":S}}),X=a?at("carousel",void 0,Te,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:s,slidesElRef:i,slideVNodes:R,duplicatedable:w,userWantsControl:k,autoSlideSize:P,realIndex:M,slideStyles:B,translateStyle:be,slidesControlListeners:Mt,handleTransitionEnd:kt,handleResize:Vt,handleSlideResize:Dt,handleMouseenter:$t,handleMouseleave:Et,isActive:Ct,arrowSlotProps:Tt,dotSlotProps:_t},Ot),{cssVars:a?void 0:Te,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:a,userWantsControl:s,slideStyles:i,dotType:x,dotPlacement:R,slidesControlListeners:p,transitionProps:C={},arrowSlotProps:m,dotSlotProps:d,$slots:{default:w,dots:k,arrow:O}}=this,U=w&&Yt(w())||[];let P=po(U);return P.length||(P=U.map(I=>g(vo,null,{default:()=>qe(I)}))),this.duplicatedable&&(P=eo(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map(I=>g(Oe,{onResize:this.handleSlideResize},{default:()=>I}))),(e=this.onRender)===null||e===void 0||e.call(this),g("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${R}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,s&&`${n}-carousel--usercontrol`],style:this.cssVars},p,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),g(Oe,{onResize:this.handleResize},{default:()=>g("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},s?P.map((I,A)=>g("div",{style:i[A],key:A},Gt(g(qt,Object.assign({},C),{default:()=>I}),[[Jt,this.isActive(A)]]))):P)}),this.showDots&&d.total>1&&Le(k,d,()=>[g(lo,{key:x+R,total:d.total,currentIndex:d.currentIndex,dotType:x,trigger:this.trigger,keyboard:this.keyboard})]),a&&Le(O,m,()=>[g(co,null)]))}});function po(e){return e.reduce((n,a)=>(fo(a)&&n.push(a),n),[])}function go(e){const{railColor:n}=e;return{itemColor:n,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}const bo={name:"Rate",common:Je,self:go},wo=g("svg",{viewBox:"0 0 512 512"},g("path",{d:"M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"})),yo=tt("rate",{display:"inline-flex",flexWrap:"nowrap"},[$("&:hover",[u("item",`
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),u("item",`
 position: relative;
 display: flex;
 transition:
 transform .1s var(--n-bezier),
 color .3s var(--n-bezier);
 transform: scale(1);
 font-size: var(--n-item-size);
 color: var(--n-item-color);
 `,[$("&:not(:first-child)",`
 margin-left: 6px;
 `),f("active",`
 color: var(--n-item-color-active);
 `)]),tn("readonly",`
 cursor: pointer;
 `,[u("item",[$("&:hover",`
 transform: scale(1.05);
 `),$("&:active",`
 transform: scale(0.96);
 `)])]),u("half",`
 display: flex;
 transition: inherit;
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 width: 50%;
 overflow: hidden;
 color: rgba(255, 255, 255, 0);
 `,[f("active",`
 color: var(--n-item-color-active);
 `)])]),Co=Object.assign(Object.assign({},xe.props),{allowHalf:Boolean,count:{type:Number,default:5},value:Number,defaultValue:{type:Number,default:null},readonly:Boolean,size:{type:[String,Number],default:"medium"},clearable:Boolean,color:String,onClear:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),zo=ee({name:"Rate",props:Co,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:a}=te(e),s=xe("Rate","-rate",yo,bo,e,n),i=ot(e,"value"),x=_(e.defaultValue),R=_(null),p=nn(e),C=nt(i,x);function m(b){const{"onUpdate:value":z,onUpdateValue:D}=e,{nTriggerFormChange:B,nTriggerFormInput:N}=p;z&&je(z,b),D&&je(D,b),x.value=b,B(),N()}function d(b,z){return e.allowHalf?z.offsetX>=Math.floor(z.currentTarget.offsetWidth/2)?b+1:b+.5:b+1}let w=!1;function k(b,z){w||(R.value=d(b,z))}function O(){R.value=null}function U(b,z){var D;const{clearable:B}=e,N=d(b,z);B&&N===C.value?(w=!0,(D=e.onClear)===null||D===void 0||D.call(e),R.value=null,m(null)):m(N)}function P(){w=!1}const I=h(()=>{const{size:b}=e,{self:z}=s.value;return typeof b=="number"?`${b}px`:z[on("size",b)]}),A=h(()=>{const{common:{cubicBezierEaseInOut:b},self:z}=s.value,{itemColor:D,itemColorActive:B}=z,{color:N}=e;return{"--n-bezier":b,"--n-item-color":D,"--n-item-color-active":N||B,"--n-item-size":I.value}}),V=a?at("rate",h(()=>{const b=I.value,{color:z}=e;let D="";return b&&(D+=b[0]),z&&(D+=an(z)),D}),A,e):void 0;return{mergedClsPrefix:n,mergedValue:C,hoverIndex:R,handleMouseMove:k,handleClick:U,handleMouseLeave:O,handleMouseEnterSomeStar:P,cssVars:a?void 0:A,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const{readonly:e,hoverIndex:n,mergedValue:a,mergedClsPrefix:s,onRender:i,$slots:{default:x}}=this;return i==null||i(),g("div",{class:[`${s}-rate`,{[`${s}-rate--readonly`]:e},this.themeClass],style:this.cssVars,onMouseleave:this.handleMouseLeave},rn(this.count,(R,p)=>{const C=x?x({index:p}):g(sn,{clsPrefix:s},{default:()=>wo}),m=n!==null?p+1<=n:p+1<=(a||0);return g("div",{key:p,class:[`${s}-rate__item`,m&&`${s}-rate__item--active`],onClick:e?void 0:d=>{this.handleClick(p,d)},onMouseenter:this.handleMouseEnterSomeStar,onMousemove:e?void 0:d=>{this.handleMouseMove(p,d)}},C,this.allowHalf?g("div",{class:[`${s}-rate__half`,{[`${s}-rate__half--active`]:!m&&n!==null?p+.5<=n:p+.5<=(a||0)}]},C):null)}))}});export{Ro as N,zo as a,vo as b};
