(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI"),a=n.n(r),i=n("R/WZ"),o=n("Wbzz"),c=Object(i.a)((function(){return{container:{width:"100%",height:"40px",backgroundColor:"black",display:"flex",alignItems:"center"},content:{width:"900px",margin:"0 auto",textAlign:"end",color:"white",fontSize:"14px",fontFamily:"BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",fontWeight:"400"}}}));function u(){var e=c();return a.a.createElement("div",{className:e.container},a.a.createElement("div",{className:e.content},"Blog | Portfolio | ",a.a.createElement(o.a,{to:"/about"},"About")))}var f=n("JOti"),l=n("ebOG"),d=n.n(l),s=Object(i.a)((function(){return{image:{width:"280px",height:"280px",borderRadius:"16px",backgroundColor:"lightgreen"}}})),p=function(e){var t=e.data.site.siteMetadata,n=t.title,r=t.description,i=s();return a.a.createElement("div",null,a.a.createElement("img",{className:i.image,src:d.a,alt:"Dave Martinez Picture"}),a.a.createElement("h3",null,n),a.a.createElement("h4",null,r))},g=function(){return a.a.createElement(o.b,{query:"3000541721",render:function(e){return a.a.createElement(p,{data:e})},data:f})},m=Object(i.a)((function(){return{root:{borderTop:"1px solid #e1e4e8",margin:"12px 0",padding:"16px 0 4px 0",width:"100%",display:"flex",justifyContent:"space-between"}}})),h=function(){var e=m();return a.a.createElement("div",{className:e.root},a.a.createElement("small",null,"(C) Dave Martinez 2020"),a.a.createElement("small",null,a.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"Blog RSS")))},b=Object(i.a)((function(){return{vertical:{maxWidth:"900px",width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",minHeight:"calc(100vh - 54px)"},container:{display:"flex",flexWrap:"wrap",flexDirection:"row",flexGrow:1},personalContainer:{minWidth:"300px",maxWidth:"300px",justifyContent:"center",display:"flex",marginTop:"25px"},contentContainer:{padding:"24px 0",flexGrow:1,maxWidth:"600px"}}}));function v(e){var t=b();return a.a.createElement(r.Fragment,null,a.a.createElement(u,null),a.a.createElement("div",{className:t.vertical},a.a.createElement("div",{className:t.container},a.a.createElement("div",{className:t.personalContainer},a.a.createElement(g,null)),a.a.createElement("div",{className:t.contentContainer},e.children)),a.a.createElement(h,null)))}},JOti:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Dave Martinez","description":"Front-End Engineer"}}}}')},"R/WZ":function(e,t,n){"use strict";var r=n("wx14"),a=n("RD7I");n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("U6Bt");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n("Ff2n"),c=n("2+6g"),u=["xs","sm","md","lg","xl"];function f(e){var t=e.values,n=void 0===t?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,a=e.unit,i=void 0===a?"px":a,c=e.step,f=void 0===c?5:c,l=Object(o.a)(e,["values","unit","step"]);function d(e){var t="number"==typeof n[e]?n[e]:e;return"@media (min-width:".concat(t).concat(i,")")}function s(e,t){var r=u.indexOf(t);return r===u.length-1?d(e):"@media (min-width:".concat("number"==typeof n[e]?n[e]:e).concat(i,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[u[r+1]]?n[u[r+1]]:t)-f/100).concat(i,")")}return Object(r.a)({keys:u,values:n,up:d,down:function(e){var t=u.indexOf(e)+1,r=n[u[t]];return t===u.length?d("xs"):"@media (max-width:".concat(("number"==typeof r&&t>0?r:e)-f/100).concat(i,")")},between:s,only:function(e){return s(e,e)},width:function(e){return n[e]}},l)}function l(e,t,n){var a;return Object(r.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({paddingLeft:t(2),paddingRight:t(2)},n,i({},e.up("sm"),Object(r.a)({paddingLeft:t(3),paddingRight:t(3)},n[e.up("sm")])))},toolbar:(a={minHeight:56},i(a,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),i(a,e.up("sm"),{minHeight:64}),a)},n)}function d(e){for(var t="https://material-ui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}var s={black:"#000",white:"#fff"},p={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},g={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},m={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},h={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},v={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},y={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};n("YBKJ"),n("HQhv"),n("q8oJ"),n("C9fy"),n("AqHK"),n("Ll4R"),n("klQ5");function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function O(e){if(e.type)return e;if("#"===e.charAt(0))return O(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(d(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function A(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function w(e){var t="hsl"===(e=O(e)).type?O(function(e){var t=(e=O(e)).values,n=t[0],r=t[1]/100,a=t[2]/100,i=r*Math.min(a,1-a),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return a-i*Math.max(Math.min(t-3,9-t,1),-1)},c="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(c+="a",u.push(t[3])),A({type:c,values:u})}(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function E(e,t){if(e=O(e),t=x(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return A(e)}function j(e,t){if(e=O(e),t=x(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return A(e)}var I={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:s.white,default:p[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},k={text:{primary:s.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:p[800],default:"#303030"},action:{active:s.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function N(e,t,n,r){var a=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=j(e.main,a):"dark"===t&&(e.dark=E(e.main,i)))}function M(e){var t=e.primary,n=void 0===t?{light:g[300],main:g[500],dark:g[700]}:t,a=e.secondary,i=void 0===a?{light:m.A200,main:m.A400,dark:m.A700}:a,u=e.error,f=void 0===u?{light:h[300],main:h[500],dark:h[700]}:u,l=e.warning,x=void 0===l?{light:b[300],main:b[500],dark:b[700]}:l,O=e.info,A=void 0===O?{light:v[300],main:v[500],dark:v[700]}:O,E=e.success,j=void 0===E?{light:y[300],main:y[500],dark:y[700]}:E,M=e.type,R=void 0===M?"light":M,S=e.contrastThreshold,T=void 0===S?3:S,z=e.tonalOffset,W=void 0===z?.2:z,C=Object(o.a)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function F(e){return function(e,t){var n=w(e),r=w(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,k.text.primary)>=T?k.text.primary:I.text.primary}var B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=Object(r.a)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error(d(4,t));if("string"!=typeof e.main)throw new Error(d(5,JSON.stringify(e.main)));return N(e,"light",n,W),N(e,"dark",a,W),e.contrastText||(e.contrastText=F(e.main)),e},L={dark:k,light:I};return Object(c.a)(Object(r.a)({common:s,type:R,primary:B(n),secondary:B(i,"A400","A200","A700"),error:B(f),warning:B(x),info:B(A),success:B(j),grey:p,contrastThreshold:T,getContrastText:F,augmentColor:B,tonalOffset:W},L[R]),C)}function R(e){return Math.round(1e5*e)/1e5}var S={textTransform:"uppercase"};function T(e,t){var n="function"==typeof t?t(e):t,a=n.fontFamily,i=void 0===a?'"Roboto", "Helvetica", "Arial", sans-serif':a,u=n.fontSize,f=void 0===u?14:u,l=n.fontWeightLight,d=void 0===l?300:l,s=n.fontWeightRegular,p=void 0===s?400:s,g=n.fontWeightMedium,m=void 0===g?500:g,h=n.fontWeightBold,b=void 0===h?700:h,v=n.htmlFontSize,y=void 0===v?16:v,x=n.allVariants,O=n.pxToRem,A=Object(o.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var w=f/14,E=O||function(e){return"".concat(e/y*w,"rem")},j=function(e,t,n,a,o){return Object(r.a)({fontFamily:i,fontWeight:e,fontSize:E(t),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===i?{letterSpacing:"".concat(R(a/t),"em")}:{},o,x)},I={h1:j(d,96,1.167,-1.5),h2:j(d,60,1.2,-.5),h3:j(p,48,1.167,0),h4:j(p,34,1.235,.25),h5:j(p,24,1.334,0),h6:j(m,20,1.6,.15),subtitle1:j(p,16,1.75,.15),subtitle2:j(m,14,1.57,.1),body1:j(p,16,1.5,.15),body2:j(p,14,1.43,.15),button:j(m,14,1.75,.4,S),caption:j(p,12,1.66,.4),overline:j(p,12,2.66,1,S)};return Object(c.a)(Object(r.a)({htmlFontSize:y,pxToRem:E,round:R,fontFamily:i,fontSize:f,fontWeightLight:d,fontWeightRegular:p,fontWeightMedium:m,fontWeightBold:b},I),A,{clone:!1})}function z(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var W=["none",z(0,2,1,-1,0,1,1,0,0,1,3,0),z(0,3,1,-2,0,2,2,0,0,1,5,0),z(0,3,3,-2,0,3,4,0,0,1,8,0),z(0,2,4,-1,0,4,5,0,0,1,10,0),z(0,3,5,-1,0,5,8,0,0,1,14,0),z(0,3,5,-1,0,6,10,0,0,1,18,0),z(0,4,5,-2,0,7,10,1,0,2,16,1),z(0,5,5,-3,0,8,10,1,0,3,14,2),z(0,5,6,-3,0,9,12,1,0,3,16,2),z(0,6,6,-3,0,10,14,1,0,4,18,3),z(0,6,7,-4,0,11,15,1,0,4,20,3),z(0,7,8,-4,0,12,17,2,0,5,22,4),z(0,7,8,-4,0,13,19,2,0,5,24,4),z(0,7,9,-4,0,14,21,2,0,5,26,4),z(0,8,9,-5,0,15,22,2,0,6,28,5),z(0,8,10,-5,0,16,24,2,0,6,30,5),z(0,8,11,-5,0,17,26,2,0,6,32,5),z(0,9,11,-5,0,18,28,2,0,7,34,6),z(0,9,12,-6,0,19,29,2,0,7,36,6),z(0,10,13,-6,0,20,31,3,0,8,38,7),z(0,10,13,-6,0,21,33,3,0,8,40,7),z(0,10,14,-6,0,22,35,3,0,8,42,7),z(0,11,14,-7,0,23,36,3,0,9,44,8),z(0,11,15,-7,0,24,38,3,0,9,46,8)],C={borderRadius:4};n("R48M"),n("MIFh");var F=n("BsWD");function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||Object(F.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n("KQm4");var L=n("U8pU");n("17x9");var q=function(e,t){return t?Object(c.a)(e,t,{clone:!1}):e},D={xs:0,sm:600,md:960,lg:1280,xl:1920},J={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(D[e],"px)")}};var P,U,H={m:"margin",p:"padding"},Y={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},G={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},K=(P=function(e){if(e.length>2){if(!G[e])return[e];e=G[e]}var t=B(e.split(""),2),n=t[0],r=t[1],a=H[n],i=Y[r]||"";return Array.isArray(i)?i.map((function(e){return a+e})):[a+i]},U={},function(e){return void 0===U[e]&&(U[e]=P(e)),U[e]}),Q=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function _(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}function V(e,t){return function(n){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t)return t;var n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-".concat(n)}(t,n),e}),{})}}function X(e){var t=_(e.theme);return Object.keys(e).map((function(n){if(-1===Q.indexOf(n))return null;var r=V(K(n),t),a=e[n];return function(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||J;return t.reduce((function(e,a,i){return e[r.up(r.keys[i])]=n(t[i]),e}),{})}if("object"===Object(L.a)(t)){var a=e.theme.breakpoints||J;return Object.keys(t).reduce((function(e,r){return e[a.up(r)]=n(t[r]),e}),{})}return n(t)}(e,a,r)})).reduce(q,{})}X.propTypes={},X.filterProps=Q;function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var t=_({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 0===n.length?t(1):1===n.length?t(n[0]):n.map((function(e){if("string"==typeof e)return e;var n=t(e);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var $={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ee={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function te(e){return"".concat(Math.round(e),"ms")}var ne={easing:$,duration:ee,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,r=void 0===n?ee.standard:n,a=t.easing,i=void 0===a?$.easeInOut:a,c=t.delay,u=void 0===c?0:c;Object(o.a)(t,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"==typeof r?r:te(r)," ").concat(i," ").concat("string"==typeof u?u:te(u))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}},re={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};var ae=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.breakpoints,n=void 0===t?{}:t,r=e.mixins,a=void 0===r?{}:r,i=e.palette,u=void 0===i?{}:i,d=e.spacing,s=e.typography,p=void 0===s?{}:s,g=Object(o.a)(e,["breakpoints","mixins","palette","spacing","typography"]),m=M(u),h=f(n),b=Z(d),v=Object(c.a)({breakpoints:h,direction:"ltr",mixins:l(h,b,a),overrides:{},palette:m,props:{},shadows:W,typography:T(m,p),spacing:b,shape:C,transitions:ne,zIndex:re},g),y=arguments.length,x=new Array(y>1?y-1:0),O=1;O<y;O++)x[O-1]=arguments[O];return v=x.reduce((function(e,t){return Object(c.a)(e,t)}),v)}();t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)(e,Object(r.a)({defaultTheme:ae},t))}},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));n("YBKJ");var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),o=n.n(i);n.d(t,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue;var c=a.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,o=n?n.data:t[r]&&t[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return a.a.createElement(c.Consumer,null,(function(e){return a.a.createElement(u,{data:t,query:n,render:r||i,staticQueryData:e})}))}},YBKJ:function(e,t,n){"use strict";var r=n("emib"),a=n("qDzq"),i=n("CCE/"),o=n("TUPI"),c=n("kxs/"),u=n("96qb"),f=n("chL8").f,l=n("Drra").f,d=n("rjfK").f,s=n("EU/P").trim,p=r.Number,g=p,m=p.prototype,h="Number"==i(n("nsRs")(m)),b="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=b?t.trim():s(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,u=t.slice(2),f=0,l=u.length;f<l;f++)if((o=u.charCodeAt(f))<48||o>a)return NaN;return parseInt(u,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(h?u((function(){m.valueOf.call(n)})):"Number"!=i(n))?o(new g(v(t)),n,p):v(t)};for(var y,x=n("QPJK")?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;x.length>O;O++)a(g,y=x[O])&&!a(p,y)&&d(p,y,l(g,y));p.prototype=m,m.constructor=p,n("IYdN")(r,"Number",p)}},ebOG:function(e,t,n){e.exports=n.p+"static/dave-martinez-114d9b080a73d06d71e70c111617eb7c.jpeg"},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),i=n("rjfK").f,o=n("chL8").f,c=n("mhTz"),u=n("lb9j"),f=r.RegExp,l=f,d=f.prototype,s=/a/g,p=/a/g,g=new f(s)!==s;if(n("QPJK")&&(!g||n("96qb")((function(){return p[n("sOol")("match")]=!1,f(s)!=s||f(p)==p||"/a/i"!=f(s,"i")})))){f=function(e,t){var n=this instanceof f,r=c(e),i=void 0===t;return!n&&r&&e.constructor===f&&i?e:a(g?new l(r&&!i?e.source:e,t):l((r=e instanceof f)?e.source:e,r&&i?u.call(e):t),n?this:d,f)};for(var m=function(e){e in f||i(f,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},h=o(l),b=0;h.length>b;)m(h[b++]);d.constructor=f,f.prototype=d,n("IYdN")(r,"RegExp",f)}n("to/b")("RegExp")},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=commons-1b89d89988cca8286d90.js.map