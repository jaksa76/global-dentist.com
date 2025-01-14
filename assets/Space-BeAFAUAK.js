import{J as Ie,c as A,aO as vr,d as _,i as n,aP as pr,z as x,C as z,D as p,E as mr,Y as Le,a3 as Se,P as gr,O as te,Q as de,aQ as br,y as yr,aC as we,I as wr,x as P,at as Pe,au as xr,A as k,G as Q,u as Ve,a as he,aR as Cr,aj as Sr,ai as Pr,a1 as $e,a2 as Mr,a0 as zr,ar as ke,H as Fr,b as Ne,e as ue,aS as Tr,L as Ar,N as se,aT as Rr,F as $r,a6 as kr,aA as De,az as We,M,aB as Ee,a4 as Dr,g as Wr,f as Be,h as Er,aU as Br}from"./index-B2mZQ67M.js";function _r(t,a="default",o=[]){const d=t.$slots[a];return d===void 0?o:d()}const Ir={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:t=>`Please load all ${t}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"RRRR-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:t=>`Total ${t} items`,selected:t=>`${t} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};function xe(t){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=a.width?String(a.width):t.defaultWidth,f=t.formats[o]||t.formats[t.defaultWidth];return f}}function Z(t){return function(a,o){var f=o!=null&&o.context?String(o.context):"standalone",d;if(f==="formatting"&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,c=o!=null&&o.width?String(o.width):i;d=t.formattingValues[c]||t.formattingValues[i]}else{var l=t.defaultWidth,h=o!=null&&o.width?String(o.width):t.defaultWidth;d=t.values[h]||t.values[l]}var u=t.argumentCallback?t.argumentCallback(a):a;return d[u]}}function ee(t){return function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=o.width,d=f&&t.matchPatterns[f]||t.matchPatterns[t.defaultMatchWidth],i=a.match(d);if(!i)return null;var c=i[0],l=f&&t.parsePatterns[f]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(l)?Vr(l,function(m){return m.test(c)}):Lr(l,function(m){return m.test(c)}),u;u=t.valueCallback?t.valueCallback(h):h,u=o.valueCallback?o.valueCallback(u):u;var v=a.slice(c.length);return{value:u,rest:v}}}function Lr(t,a){for(var o in t)if(t.hasOwnProperty(o)&&a(t[o]))return o}function Vr(t,a){for(var o=0;o<t.length;o++)if(a(t[o]))return o}function Nr(t){return function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=a.match(t.matchPattern);if(!f)return null;var d=f[0],i=a.match(t.parsePattern);if(!i)return null;var c=t.valueCallback?t.valueCallback(i[0]):i[0];c=o.valueCallback?o.valueCallback(c):c;var l=a.slice(d.length);return{value:c,rest:l}}}var Or={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Hr=function(a,o,f){var d,i=Or[a];return typeof i=="string"?d=i:o===1?d=i.one:d=i.other.replace("{{count}}",o.toString()),f!=null&&f.addSuffix?f.comparison&&f.comparison>0?"in "+d:d+" ago":d},jr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ur={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Kr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},qr={date:xe({formats:jr,defaultWidth:"full"}),time:xe({formats:Ur,defaultWidth:"full"}),dateTime:xe({formats:Kr,defaultWidth:"full"})},Gr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xr=function(a,o,f,d){return Gr[a]},Yr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Jr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Qr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Zr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},to={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ro=function(a,o){var f=Number(a),d=f%100;if(d>20||d<10)switch(d%10){case 1:return f+"st";case 2:return f+"nd";case 3:return f+"rd"}return f+"th"},oo={ordinalNumber:ro,era:Z({values:Yr,defaultWidth:"wide"}),quarter:Z({values:Jr,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:Z({values:Qr,defaultWidth:"wide"}),day:Z({values:Zr,defaultWidth:"wide"}),dayPeriod:Z({values:eo,defaultWidth:"wide",formattingValues:to,defaultFormattingWidth:"wide"})},ao=/^(\d+)(th|st|nd|rd)?/i,no=/\d+/i,io={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lo={any:[/^b/i,/^(a|c)/i]},so={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},co={any:[/1/i,/2/i,/3/i,/4/i]},uo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ho={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},po={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},mo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},go={ordinalNumber:Nr({matchPattern:ao,parsePattern:no,valueCallback:function(a){return parseInt(a,10)}}),era:ee({matchPatterns:io,defaultMatchWidth:"wide",parsePatterns:lo,defaultParseWidth:"any"}),quarter:ee({matchPatterns:so,defaultMatchWidth:"wide",parsePatterns:co,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:ee({matchPatterns:uo,defaultMatchWidth:"wide",parsePatterns:ho,defaultParseWidth:"any"}),day:ee({matchPatterns:fo,defaultMatchWidth:"wide",parsePatterns:vo,defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:po,defaultMatchWidth:"any",parsePatterns:mo,defaultParseWidth:"any"})},bo={code:"en-US",formatDistance:Hr,formatLong:qr,formatRelative:Xr,localize:oo,match:go,options:{weekStartsOn:0,firstWeekContainsDate:1}};const yo={name:"en-US",locale:bo};function wo(t){const{mergedLocaleRef:a,mergedDateLocaleRef:o}=Ie(vr,null)||{},f=A(()=>{var i,c;return(c=(i=a==null?void 0:a.value)===null||i===void 0?void 0:i[t])!==null&&c!==void 0?c:Ir[t]});return{dateLocaleRef:A(()=>{var i;return(i=o==null?void 0:o.value)!==null&&i!==void 0?i:yo}),localeRef:f}}const xo=_({name:"Eye",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),n("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Co=_({name:"EyeOff",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),n("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),n("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),n("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),n("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),So=_({name:"ChevronDown",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Po=pr("clear",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Mo=x("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[z(">",[p("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[z("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),z("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),p("placeholder",`
 display: flex;
 `),p("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[mr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Me=_({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(t){return Le("-base-clear",Mo,Se(t,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:t}=this;return n("div",{class:`${t}-base-clear`},n(gr,null,{default:()=>{var a,o;return this.show?n("div",{key:"dismiss",class:`${t}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},te(this.$slots.icon,()=>[n(de,{clsPrefix:t},{default:()=>n(Po,null)})])):n("div",{key:"icon",class:`${t}-base-clear__placeholder`},(o=(a=this.$slots).placeholder)===null||o===void 0?void 0:o.call(a))}}))}}),zo=_({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(t,{slots:a}){return()=>{const{clsPrefix:o}=t;return n(br,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:t.loading},{default:()=>t.showArrow?n(Me,{clsPrefix:o,show:t.showClear,onClear:t.onClear},{placeholder:()=>n(de,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>te(a.default,()=>[n(So,null)])})}):null})}}}),Fo={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function To(t){const{textColor2:a,textColor3:o,textColorDisabled:f,primaryColor:d,primaryColorHover:i,inputColor:c,inputColorDisabled:l,borderColor:h,warningColor:u,warningColorHover:v,errorColor:m,errorColorHover:y,borderRadius:D,lineHeight:C,fontSizeTiny:H,fontSizeSmall:R,fontSizeMedium:U,fontSizeLarge:S,heightTiny:F,heightSmall:W,heightMedium:T,heightLarge:$,actionColor:B,clearColor:I,clearColorHover:E,clearColorPressed:L,placeholderColor:K,placeholderColorDisabled:q,iconColor:fe,iconColorDisabled:ve,iconColorHover:G,iconColorPressed:pe}=t;return Object.assign(Object.assign({},Fo),{countTextColorDisabled:f,countTextColor:o,heightTiny:F,heightSmall:W,heightMedium:T,heightLarge:$,fontSizeTiny:H,fontSizeSmall:R,fontSizeMedium:U,fontSizeLarge:S,lineHeight:C,lineHeightTextarea:C,borderRadius:D,iconSize:"16px",groupLabelColor:B,groupLabelTextColor:a,textColor:a,textColorDisabled:f,textDecorationColor:a,caretColor:d,placeholderColor:K,placeholderColorDisabled:q,color:c,colorDisabled:l,colorFocus:c,groupLabelBorder:`1px solid ${h}`,border:`1px solid ${h}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${h}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${we(d,{alpha:.2})}`,loadingColor:d,loadingColorWarning:u,borderWarning:`1px solid ${u}`,borderHoverWarning:`1px solid ${v}`,colorFocusWarning:c,borderFocusWarning:`1px solid ${v}`,boxShadowFocusWarning:`0 0 0 2px ${we(u,{alpha:.2})}`,caretColorWarning:u,loadingColorError:m,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${y}`,colorFocusError:c,borderFocusError:`1px solid ${y}`,boxShadowFocusError:`0 0 0 2px ${we(m,{alpha:.2})}`,caretColorError:m,clearColor:I,clearColorHover:E,clearColorPressed:L,iconColor:fe,iconColorDisabled:ve,iconColorHover:G,iconColorPressed:pe,suffixTextColor:a})}const Ao={name:"Input",common:yr,self:To},Oe=wr("n-input");function Ro(t){let a=0;for(const o of t)a++;return a}function ce(t){return t===""||t==null}function $o(t){const a=P(null);function o(){const{value:i}=t;if(!(i!=null&&i.focus)){d();return}const{selectionStart:c,selectionEnd:l,value:h}=i;if(c==null||l==null){d();return}a.value={start:c,end:l,beforeText:h.slice(0,c),afterText:h.slice(l)}}function f(){var i;const{value:c}=a,{value:l}=t;if(!c||!l)return;const{value:h}=l,{start:u,beforeText:v,afterText:m}=c;let y=h.length;if(h.endsWith(m))y=h.length-m.length;else if(h.startsWith(v))y=v.length;else{const D=v[u-1],C=h.indexOf(D,u-1);C!==-1&&(y=C+1)}(i=l.setSelectionRange)===null||i===void 0||i.call(l,y,y)}function d(){a.value=null}return Pe(t,d),{recordCursor:o,restoreCursor:f}}const _e=_({name:"InputWordCount",setup(t,{slots:a}){const{mergedValueRef:o,maxlengthRef:f,mergedClsPrefixRef:d,countGraphemesRef:i}=Ie(Oe),c=A(()=>{const{value:l}=o;return l===null||Array.isArray(l)?0:(i.value||Ro)(l)});return()=>{const{value:l}=f,{value:h}=o;return n("span",{class:`${d.value}-input-word-count`},xr(a.default,{value:h===null||Array.isArray(h)?"":h},()=>[l===void 0?c.value:`${c.value} / ${l}`]))}}}),ko=x("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[p("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),p("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),p("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),z("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),z("&:-webkit-autofill ~",[p("placeholder","display: none;")])]),k("round",[Q("textarea","border-radius: calc(var(--n-height) / 2);")]),p("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[z("span",`
 width: 100%;
 display: inline-block;
 `)]),k("textarea",[p("placeholder","overflow: visible;")]),Q("autosize","width: 100%;"),k("autosize",[p("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),x("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),p("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),p("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[z("&[type=password]::-ms-reveal","display: none;"),z("+",[p("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),Q("textarea",[p("placeholder","white-space: nowrap;")]),p("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),k("textarea","width: 100%;",[x("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),k("resizable",[x("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),p("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),p("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),k("pair",[p("input-el, placeholder","text-align: center;"),p("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[x("icon",`
 color: var(--n-icon-color);
 `),x("base-icon",`
 color: var(--n-icon-color);
 `)])]),k("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[p("border","border: var(--n-border-disabled);"),p("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),p("placeholder","color: var(--n-placeholder-color-disabled);"),p("separator","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),x("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),p("suffix, prefix","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),Q("disabled",[p("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[z("&:hover",`
 color: var(--n-icon-color-hover);
 `),z("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),z("&:hover",[p("state-border","border: var(--n-border-hover);")]),k("focus","background-color: var(--n-color-focus);",[p("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),p("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),p("state-border",`
 border-color: #0000;
 z-index: 1;
 `),p("prefix","margin-right: 4px;"),p("suffix",`
 margin-left: 4px;
 `),p("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[x("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),x("base-clear",`
 font-size: var(--n-icon-size);
 `,[p("placeholder",[x("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),z(">",[x("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),x("base-icon",`
 font-size: var(--n-icon-size);
 `)]),x("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(t=>k(`${t}-status`,[Q("disabled",[x("base-loading",`
 color: var(--n-loading-color-${t})
 `),p("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${t});
 `),p("state-border",`
 border: var(--n-border-${t});
 `),z("&:hover",[p("state-border",`
 border: var(--n-border-hover-${t});
 `)]),z("&:focus",`
 background-color: var(--n-color-focus-${t});
 `,[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]),k("focus",`
 background-color: var(--n-color-focus-${t});
 `,[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))]),Do=x("input",[k("disabled",[p("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Wo=Object.assign(Object.assign({},he.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),No=_({name:"Input",props:Wo,setup(t){const{mergedClsPrefixRef:a,mergedBorderedRef:o,inlineThemeDisabled:f,mergedRtlRef:d}=Ve(t),i=he("Input","-input",ko,Ao,t,a);Cr&&Le("-input-safari",Do,a);const c=P(null),l=P(null),h=P(null),u=P(null),v=P(null),m=P(null),y=P(null),D=$o(y),C=P(null),{localeRef:H}=wo("Input"),R=P(t.defaultValue),U=Se(t,"value"),S=Sr(U,R),F=Pr(t),{mergedSizeRef:W,mergedDisabledRef:T,mergedStatusRef:$}=F,B=P(!1),I=P(!1),E=P(!1),L=P(!1);let K=null;const q=A(()=>{const{placeholder:e,pair:r}=t;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[H.value.placeholder]:[e]}),fe=A(()=>{const{value:e}=E,{value:r}=S,{value:s}=q;return!e&&(ce(r)||Array.isArray(r)&&ce(r[0]))&&s[0]}),ve=A(()=>{const{value:e}=E,{value:r}=S,{value:s}=q;return!e&&s[1]&&(ce(r)||Array.isArray(r)&&ce(r[1]))}),G=$e(()=>t.internalForceFocus||B.value),pe=$e(()=>{if(T.value||t.readonly||!t.clearable||!G.value&&!I.value)return!1;const{value:e}=S,{value:r}=G;return t.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(I.value||r):!!e&&(I.value||r)}),me=A(()=>{const{showPasswordOn:e}=t;if(e)return e;if(t.showPasswordToggle)return"click"}),X=P(!1),He=A(()=>{const{textDecoration:e}=t;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),ze=P(void 0),je=()=>{var e,r;if(t.type==="textarea"){const{autosize:s}=t;if(s&&(ze.value=(r=(e=C.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!l.value||typeof s=="boolean")return;const{paddingTop:b,paddingBottom:w,lineHeight:g}=window.getComputedStyle(l.value),V=Number(b.slice(0,-2)),N=Number(w.slice(0,-2)),O=Number(g.slice(0,-2)),{value:Y}=h;if(!Y)return;if(s.minRows){const J=Math.max(s.minRows,1),ye=`${V+N+O*J}px`;Y.style.minHeight=ye}if(s.maxRows){const J=`${V+N+O*s.maxRows}px`;Y.style.maxHeight=J}}},Ue=A(()=>{const{maxlength:e}=t;return e===void 0?void 0:Number(e)});Mr(()=>{const{value:e}=S;Array.isArray(e)||be(e)});const Ke=zr().proxy;function re(e,r){const{onUpdateValue:s,"onUpdate:value":b,onInput:w}=t,{nTriggerFormInput:g}=F;s&&M(s,e,r),b&&M(b,e,r),w&&M(w,e,r),R.value=e,g()}function oe(e,r){const{onChange:s}=t,{nTriggerFormChange:b}=F;s&&M(s,e,r),R.value=e,b()}function qe(e){const{onBlur:r}=t,{nTriggerFormBlur:s}=F;r&&M(r,e),s()}function Ge(e){const{onFocus:r}=t,{nTriggerFormFocus:s}=F;r&&M(r,e),s()}function Xe(e){const{onClear:r}=t;r&&M(r,e)}function Ye(e){const{onInputBlur:r}=t;r&&M(r,e)}function Je(e){const{onInputFocus:r}=t;r&&M(r,e)}function Qe(){const{onDeactivate:e}=t;e&&M(e)}function Ze(){const{onActivate:e}=t;e&&M(e)}function et(e){const{onClick:r}=t;r&&M(r,e)}function tt(e){const{onWrapperFocus:r}=t;r&&M(r,e)}function rt(e){const{onWrapperBlur:r}=t;r&&M(r,e)}function ot(){E.value=!0}function at(e){E.value=!1,e.target===m.value?ae(e,1):ae(e,0)}function ae(e,r=0,s="input"){const b=e.target.value;if(be(b),e instanceof InputEvent&&!e.isComposing&&(E.value=!1),t.type==="textarea"){const{value:g}=C;g&&g.syncUnifiedContainer()}if(K=b,E.value)return;D.recordCursor();const w=nt(b);if(w)if(!t.pair)s==="input"?re(b,{source:r}):oe(b,{source:r});else{let{value:g}=S;Array.isArray(g)?g=[g[0],g[1]]:g=["",""],g[r]=b,s==="input"?re(g,{source:r}):oe(g,{source:r})}Ke.$forceUpdate(),w||De(D.restoreCursor)}function nt(e){const{countGraphemes:r,maxlength:s,minlength:b}=t;if(r){let g;if(s!==void 0&&(g===void 0&&(g=r(e)),g>Number(s))||b!==void 0&&(g===void 0&&(g=r(e)),g<Number(s)))return!1}const{allowInput:w}=t;return typeof w=="function"?w(e):!0}function it(e){Ye(e),e.relatedTarget===c.value&&Qe(),e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===m.value||e.relatedTarget===l.value)||(L.value=!1),ne(e,"blur"),y.value=null}function lt(e,r){Je(e),B.value=!0,L.value=!0,Ze(),ne(e,"focus"),r===0?y.value=v.value:r===1?y.value=m.value:r===2&&(y.value=l.value)}function st(e){t.passivelyActivated&&(rt(e),ne(e,"blur"))}function ct(e){t.passivelyActivated&&(B.value=!0,tt(e),ne(e,"focus"))}function ne(e,r){e.relatedTarget!==null&&(e.relatedTarget===v.value||e.relatedTarget===m.value||e.relatedTarget===l.value||e.relatedTarget===c.value)||(r==="focus"?(Ge(e),B.value=!0):r==="blur"&&(qe(e),B.value=!1))}function ut(e,r){ae(e,r,"change")}function dt(e){et(e)}function ht(e){Xe(e),Fe()}function Fe(){t.pair?(re(["",""],{source:"clear"}),oe(["",""],{source:"clear"})):(re("",{source:"clear"}),oe("",{source:"clear"}))}function ft(e){const{onMousedown:r}=t;r&&r(e);const{tagName:s}=e.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(t.resizable){const{value:b}=c;if(b){const{left:w,top:g,width:V,height:N}=b.getBoundingClientRect(),O=14;if(w+V-O<e.clientX&&e.clientX<w+V&&g+N-O<e.clientY&&e.clientY<g+N)return}}e.preventDefault(),B.value||Te()}}function vt(){var e;I.value=!0,t.type==="textarea"&&((e=C.value)===null||e===void 0||e.handleMouseEnterWrapper())}function pt(){var e;I.value=!1,t.type==="textarea"&&((e=C.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function mt(){T.value||me.value==="click"&&(X.value=!X.value)}function gt(e){if(T.value)return;e.preventDefault();const r=b=>{b.preventDefault(),Ee("mouseup",document,r)};if(We("mouseup",document,r),me.value!=="mousedown")return;X.value=!0;const s=()=>{X.value=!1,Ee("mouseup",document,s)};We("mouseup",document,s)}function bt(e){t.onKeyup&&M(t.onKeyup,e)}function yt(e){switch(t.onKeydown&&M(t.onKeydown,e),e.key){case"Escape":ge();break;case"Enter":wt(e);break}}function wt(e){var r,s;if(t.passivelyActivated){const{value:b}=L;if(b){t.internalDeactivateOnEnter&&ge();return}e.preventDefault(),t.type==="textarea"?(r=l.value)===null||r===void 0||r.focus():(s=v.value)===null||s===void 0||s.focus()}}function ge(){t.passivelyActivated&&(L.value=!1,De(()=>{var e;(e=c.value)===null||e===void 0||e.focus()}))}function Te(){var e,r,s;T.value||(t.passivelyActivated?(e=c.value)===null||e===void 0||e.focus():((r=l.value)===null||r===void 0||r.focus(),(s=v.value)===null||s===void 0||s.focus()))}function xt(){var e;!((e=c.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function Ct(){var e,r;(e=l.value)===null||e===void 0||e.select(),(r=v.value)===null||r===void 0||r.select()}function St(){T.value||(l.value?l.value.focus():v.value&&v.value.focus())}function Pt(){const{value:e}=c;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ge()}function Mt(e){if(t.type==="textarea"){const{value:r}=l;r==null||r.scrollTo(e)}else{const{value:r}=v;r==null||r.scrollTo(e)}}function be(e){const{type:r,pair:s,autosize:b}=t;if(!s&&b)if(r==="textarea"){const{value:w}=h;w&&(w.textContent=`${e??""}\r
`)}else{const{value:w}=u;w&&(e?w.textContent=e:w.innerHTML="&nbsp;")}}function zt(){je()}const Ae=P({top:"0"});function Ft(e){var r;const{scrollTop:s}=e.target;Ae.value.top=`${-s}px`,(r=C.value)===null||r===void 0||r.syncUnifiedContainer()}let ie=null;ke(()=>{const{autosize:e,type:r}=t;e&&r==="textarea"?ie=Pe(S,s=>{!Array.isArray(s)&&s!==K&&be(s)}):ie==null||ie()});let le=null;ke(()=>{t.type==="textarea"?le=Pe(S,e=>{var r;!Array.isArray(e)&&e!==K&&((r=C.value)===null||r===void 0||r.syncUnifiedContainer())}):le==null||le()}),Fr(Oe,{mergedValueRef:S,maxlengthRef:Ue,mergedClsPrefixRef:a,countGraphemesRef:Se(t,"countGraphemes")});const Tt={wrapperElRef:c,inputElRef:v,textareaElRef:l,isCompositing:E,clear:Fe,focus:Te,blur:xt,select:Ct,deactivate:Pt,activate:St,scrollTo:Mt},At=Ne("Input",d,a),Re=A(()=>{const{value:e}=W,{common:{cubicBezierEaseInOut:r},self:{color:s,borderRadius:b,textColor:w,caretColor:g,caretColorError:V,caretColorWarning:N,textDecorationColor:O,border:Y,borderDisabled:J,borderHover:ye,borderFocus:Rt,placeholderColor:$t,placeholderColorDisabled:kt,lineHeightTextarea:Dt,colorDisabled:Wt,colorFocus:Et,textColorDisabled:Bt,boxShadowFocus:_t,iconSize:It,colorFocusWarning:Lt,boxShadowFocusWarning:Vt,borderWarning:Nt,borderFocusWarning:Ot,borderHoverWarning:Ht,colorFocusError:jt,boxShadowFocusError:Ut,borderError:Kt,borderFocusError:qt,borderHoverError:Gt,clearSize:Xt,clearColor:Yt,clearColorHover:Jt,clearColorPressed:Qt,iconColor:Zt,iconColorDisabled:er,suffixTextColor:tr,countTextColor:rr,countTextColorDisabled:or,iconColorHover:ar,iconColorPressed:nr,loadingColor:ir,loadingColorError:lr,loadingColorWarning:sr,[ue("padding",e)]:cr,[ue("fontSize",e)]:ur,[ue("height",e)]:dr}}=i.value,{left:hr,right:fr}=Tr(cr);return{"--n-bezier":r,"--n-count-text-color":rr,"--n-count-text-color-disabled":or,"--n-color":s,"--n-font-size":ur,"--n-border-radius":b,"--n-height":dr,"--n-padding-left":hr,"--n-padding-right":fr,"--n-text-color":w,"--n-caret-color":g,"--n-text-decoration-color":O,"--n-border":Y,"--n-border-disabled":J,"--n-border-hover":ye,"--n-border-focus":Rt,"--n-placeholder-color":$t,"--n-placeholder-color-disabled":kt,"--n-icon-size":It,"--n-line-height-textarea":Dt,"--n-color-disabled":Wt,"--n-color-focus":Et,"--n-text-color-disabled":Bt,"--n-box-shadow-focus":_t,"--n-loading-color":ir,"--n-caret-color-warning":N,"--n-color-focus-warning":Lt,"--n-box-shadow-focus-warning":Vt,"--n-border-warning":Nt,"--n-border-focus-warning":Ot,"--n-border-hover-warning":Ht,"--n-loading-color-warning":sr,"--n-caret-color-error":V,"--n-color-focus-error":jt,"--n-box-shadow-focus-error":Ut,"--n-border-error":Kt,"--n-border-focus-error":qt,"--n-border-hover-error":Gt,"--n-loading-color-error":lr,"--n-clear-color":Yt,"--n-clear-size":Xt,"--n-clear-color-hover":Jt,"--n-clear-color-pressed":Qt,"--n-icon-color":Zt,"--n-icon-color-hover":ar,"--n-icon-color-pressed":nr,"--n-icon-color-disabled":er,"--n-suffix-text-color":tr}}),j=f?Ar("input",A(()=>{const{value:e}=W;return e[0]}),Re,t):void 0;return Object.assign(Object.assign({},Tt),{wrapperElRef:c,inputElRef:v,inputMirrorElRef:u,inputEl2Ref:m,textareaElRef:l,textareaMirrorElRef:h,textareaScrollbarInstRef:C,rtlEnabled:At,uncontrolledValue:R,mergedValue:S,passwordVisible:X,mergedPlaceholder:q,showPlaceholder1:fe,showPlaceholder2:ve,mergedFocus:G,isComposing:E,activated:L,showClearButton:pe,mergedSize:W,mergedDisabled:T,textDecorationStyle:He,mergedClsPrefix:a,mergedBordered:o,mergedShowPasswordOn:me,placeholderStyle:Ae,mergedStatus:$,textAreaScrollContainerWidth:ze,handleTextAreaScroll:Ft,handleCompositionStart:ot,handleCompositionEnd:at,handleInput:ae,handleInputBlur:it,handleInputFocus:lt,handleWrapperBlur:st,handleWrapperFocus:ct,handleMouseEnter:vt,handleMouseLeave:pt,handleMouseDown:ft,handleChange:ut,handleClick:dt,handleClear:ht,handlePasswordToggleClick:mt,handlePasswordToggleMousedown:gt,handleWrapperKeydown:yt,handleWrapperKeyup:bt,handleTextAreaMirrorResize:zt,getTextareaScrollContainer:()=>l.value,mergedTheme:i,cssVars:f?void 0:Re,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender})},render(){var t,a;const{mergedClsPrefix:o,mergedStatus:f,themeClass:d,type:i,countGraphemes:c,onRender:l}=this,h=this.$slots;return l==null||l(),n("div",{ref:"wrapperElRef",class:[`${o}-input`,d,f&&`${o}-input--${f}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:i==="textarea",[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&i!=="textarea",[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},n("div",{class:`${o}-input-wrapper`},se(h.prefix,u=>u&&n("div",{class:`${o}-input__prefix`},u)),i==="textarea"?n(Rr,{ref:"textareaScrollbarInstRef",class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var u,v;const{textAreaScrollContainerWidth:m}=this,y={width:this.autosize&&m&&`${m}px`};return n($r,null,n("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${o}-input__textarea-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style,y],onBlur:this.handleInputBlur,onFocus:D=>{this.handleInputFocus(D,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`,style:[this.placeholderStyle,y],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?n(kr,{onResize:this.handleTextAreaMirrorResize},{default:()=>n("div",{ref:"textareaMirrorElRef",class:`${o}-input__textarea-mirror`,key:"mirror"})}):null)}}):n("div",{class:`${o}-input__input`},n("input",Object.assign({type:i==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":i},this.inputProps,{ref:"inputElRef",class:[`${o}-input__input-el`,(t=this.inputProps)===null||t===void 0?void 0:t.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,0)},onInput:u=>{this.handleInput(u,0)},onChange:u=>{this.handleChange(u,0)}})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[0])):null,this.autosize?n("div",{class:`${o}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&se(h.suffix,u=>u||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?n("div",{class:`${o}-input__suffix`},[se(h["clear-icon-placeholder"],v=>(this.clearable||v)&&n(Me,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>v,icon:()=>{var m,y;return(y=(m=this.$slots)["clear-icon"])===null||y===void 0?void 0:y.call(m)}})),this.internalLoadingBeforeSuffix?null:u,this.loading!==void 0?n(zo,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?u:null,this.showCount&&this.type!=="textarea"?n(_e,null,{default:v=>{var m;return(m=h.count)===null||m===void 0?void 0:m.call(h,v)}}):null,this.mergedShowPasswordOn&&this.type==="password"?n("div",{class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?te(h["password-visible-icon"],()=>[n(de,{clsPrefix:o},{default:()=>n(xo,null)})]):te(h["password-invisible-icon"],()=>[n(de,{clsPrefix:o},{default:()=>n(Co,null)})])):null]):null)),this.pair?n("span",{class:`${o}-input__separator`},te(h.separator,()=>[this.separator])):null,this.pair?n("div",{class:`${o}-input-wrapper`},n("div",{class:`${o}-input__input`},n("input",{ref:"inputEl2Ref",type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:c?void 0:this.maxlength,minlength:c?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,1)},onInput:u=>{this.handleInput(u,1)},onChange:u=>{this.handleChange(u,1)}}),this.showPlaceholder2?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[1])):null),se(h.suffix,u=>(this.clearable||u)&&n("div",{class:`${o}-input__suffix`},[this.clearable&&n(Me,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var v;return(v=h["clear-icon"])===null||v===void 0?void 0:v.call(h)},placeholder:()=>{var v;return(v=h["clear-icon-placeholder"])===null||v===void 0?void 0:v.call(h)}}),u]))):null,this.mergedBordered?n("div",{class:`${o}-input__border`}):null,this.mergedBordered?n("div",{class:`${o}-input__state-border`}):null,this.showCount&&i==="textarea"?n(_e,null,{default:u=>{var v;const{renderCount:m}=this;return m?m(u):(v=h.count)===null||v===void 0?void 0:v.call(h,u)}}):null)}}),Eo={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Bo(){return Eo}const _o={name:"Space",self:Bo};let Ce;function Io(){if(!Dr)return!0;if(Ce===void 0){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const a=t.scrollHeight===1;return document.body.removeChild(t),Ce=a}return Ce}const Lo=Object.assign(Object.assign({},he.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Oo=_({name:"Space",props:Lo,setup(t){const{mergedClsPrefixRef:a,mergedRtlRef:o}=Ve(t),f=he("Space","-space",void 0,_o,t,a),d=Ne("Space",o,a);return{useGap:Io(),rtlEnabled:d,mergedClsPrefix:a,margin:A(()=>{const{size:i}=t;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[ue("gap",i)]:c}}=f.value,{row:l,col:h}=Wr(c);return{horizontal:Be(h),vertical:Be(l)}})}},render(){const{vertical:t,reverse:a,align:o,inline:f,justify:d,itemClass:i,itemStyle:c,margin:l,wrap:h,mergedClsPrefix:u,rtlEnabled:v,useGap:m,wrapItem:y,internalUseGap:D}=this,C=Er(_r(this),!1);if(!C.length)return null;const H=`${l.horizontal}px`,R=`${l.horizontal/2}px`,U=`${l.vertical}px`,S=`${l.vertical/2}px`,F=C.length-1,W=d.startsWith("space-");return n("div",{role:"none",class:[`${u}-space`,v&&`${u}-space--rtl`],style:{display:f?"inline-flex":"flex",flexDirection:t&&!a?"column":t&&a?"column-reverse":!t&&a?"row-reverse":"row",justifyContent:["start","end"].includes(d)?`flex-${d}`:d,flexWrap:!h||t?"nowrap":"wrap",marginTop:m||t?"":`-${S}`,marginBottom:m||t?"":`-${S}`,alignItems:o,gap:m?`${l.vertical}px ${l.horizontal}px`:""}},!y&&(m||D)?C:C.map((T,$)=>T.type===Br?T:n("div",{role:"none",class:i,style:[c,{maxWidth:"100%"},m?"":t?{marginBottom:$!==F?U:""}:v?{marginLeft:W?d==="space-between"&&$===F?"":R:$!==F?H:"",marginRight:W?d==="space-between"&&$===0?"":R:"",paddingTop:S,paddingBottom:S}:{marginRight:W?d==="space-between"&&$===F?"":R:$!==F?H:"",marginLeft:W?d==="space-between"&&$===0?"":R:"",paddingTop:S,paddingBottom:S}]},T)))}});export{No as N,Oo as a,_r as g};
