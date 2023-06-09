/*! For license information please see component---src-pages-index-js-0aec43e2b5c512b15a03.js.LICENSE.txt */
(self.webpackChunkmatteo_melotti_portfolio=self.webpackChunkmatteo_melotti_portfolio||[]).push([[678],{1275:function(t,e,M){"use strict";M.r(e),M.d(e,{default:function(){return eM}});var r={};M.r(r),M.d(r,{BZ:function(){return We},nC:function(){return Pe},YM:function(){return Ge},PS:function(){return Ve},O7:function(){return Re},Ng:function(){return He},h1:function(){return Be},Mf:function(){return Je},IN:function(){return Fe},Ac:function(){return Xe},SQ:function(){return _e},ad:function(){return $e},A_:function(){return Ke}});var a=M(7294),L=M.t(a,2),i=M(376),n=M(8183);var s=function(){function t(t){var e=this;this._insertTag=function(t){var M;M=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,M),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var M=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{M.insertRule(t,M.cssRules.length)}catch(r){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),u=Math.abs,o=String.fromCharCode,j=Object.assign;function c(t){return t.trim()}function N(t,e,M){return t.replace(e,M)}function y(t,e){return t.indexOf(e)}function w(t,e){return 0|t.charCodeAt(e)}function l(t,e,M){return t.slice(e,M)}function D(t){return t.length}function m(t){return t.length}function g(t,e){return e.push(t),t}var I=1,T=1,d=0,z=0,C=0,S="";function x(t,e,M,r,a,L,i){return{value:t,root:e,parent:M,type:r,props:a,children:L,line:I,column:T,length:i,return:""}}function E(t,e){return j(x("",null,null,"",null,null,0),t,{length:-t.length},e)}function A(){return C=z>0?w(S,--z):0,T--,10===C&&(T=1,I--),C}function p(){return C=z<d?w(S,z++):0,T++,10===C&&(T=1,I++),C}function f(){return w(S,z)}function O(){return z}function b(t,e){return l(S,t,e)}function h(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y(t){return I=T=1,d=D(S=t),z=0,[]}function k(t){return S="",t}function v(t){return c(b(z-1,Z(91===t?t+2:40===t?t+1:t)))}function Q(t){for(;(C=f())&&C<33;)p();return h(t)>2||h(C)>3?"":" "}function U(t,e){for(;--e&&p()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return b(t,O()+(e<6&&32==f()&&32==p()))}function Z(t){for(;p();)switch(C){case t:return z;case 34:case 39:34!==t&&39!==t&&Z(C);break;case 40:41===t&&Z(t);break;case 92:p()}return z}function W(t,e){for(;p()&&t+C!==57&&(t+C!==84||47!==f()););return"/*"+b(e,z-1)+"*"+o(47===t?t:p())}function P(t){for(;!h(f());)p();return b(t,z)}var G="-ms-",V="-moz-",R="-webkit-",H="comm",B="rule",J="decl",F="@keyframes";function X(t,e){for(var M="",r=m(t),a=0;a<r;a++)M+=e(t[a],a,t,e)||"";return M}function _(t,e,M,r){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case J:return t.return=t.return||t.value;case H:return"";case F:return t.return=t.value+"{"+X(t.children,r)+"}";case B:t.value=t.props.join(",")}return D(M=X(t.children,r))?t.return=t.value+"{"+M+"}":""}function $(t){return k(K("",null,null,null,[""],t=Y(t),0,[0],t))}function K(t,e,M,r,a,L,i,n,s){for(var u=0,j=0,c=i,l=0,m=0,I=0,T=1,d=1,z=1,C=0,S="",x=a,E=L,b=r,h=S;d;)switch(I=C,C=p()){case 40:if(108!=I&&58==w(h,c-1)){-1!=y(h+=N(v(C),"&","&\f"),"&\f")&&(z=-1);break}case 34:case 39:case 91:h+=v(C);break;case 9:case 10:case 13:case 32:h+=Q(I);break;case 92:h+=U(O()-1,7);continue;case 47:switch(f()){case 42:case 47:g(tt(W(p(),O()),e,M),s);break;default:h+="/"}break;case 123*T:n[u++]=D(h)*z;case 125*T:case 59:case 0:switch(C){case 0:case 125:d=0;case 59+j:-1==z&&(h=N(h,/\f/g,"")),m>0&&D(h)-c&&g(m>32?et(h+";",r,M,c-1):et(N(h," ","")+";",r,M,c-2),s);break;case 59:h+=";";default:if(g(b=q(h,e,M,u,j,a,n,S,x=[],E=[],c),L),123===C)if(0===j)K(h,e,b,b,x,L,c,n,E);else switch(99===l&&110===w(h,3)?100:l){case 100:case 108:case 109:case 115:K(t,b,b,r&&g(q(t,b,b,0,0,a,n,S,a,x=[],c),E),a,E,c,n,r?x:E);break;default:K(h,b,b,b,[""],E,0,n,E)}}u=j=m=0,T=z=1,S=h="",c=i;break;case 58:c=1+D(h),m=I;default:if(T<1)if(123==C)--T;else if(125==C&&0==T++&&125==A())continue;switch(h+=o(C),C*T){case 38:z=j>0?1:(h+="\f",-1);break;case 44:n[u++]=(D(h)-1)*z,z=1;break;case 64:45===f()&&(h+=v(p())),l=f(),j=c=D(S=h+=P(O())),C++;break;case 45:45===I&&2==D(h)&&(T=0)}}return L}function q(t,e,M,r,a,L,i,n,s,o,j){for(var y=a-1,w=0===a?L:[""],D=m(w),g=0,I=0,T=0;g<r;++g)for(var d=0,z=l(t,y+1,y=u(I=i[g])),C=t;d<D;++d)(C=c(I>0?w[d]+" "+z:N(z,/&\f/g,w[d])))&&(s[T++]=C);return x(t,e,M,0===a?B:n,s,o,j)}function tt(t,e,M){return x(t,e,M,H,o(C),l(t,2,-2),0)}function et(t,e,M,r){return x(t,e,M,J,l(t,0,r),l(t,r+1,-1),r)}var Mt=function(t,e,M){for(var r=0,a=0;r=a,a=f(),38===r&&12===a&&(e[M]=1),!h(a);)p();return b(t,z)},rt=function(t,e){return k(function(t,e){var M=-1,r=44;do{switch(h(r)){case 0:38===r&&12===f()&&(e[M]=1),t[M]+=Mt(z-1,e,M);break;case 2:t[M]+=v(r);break;case 4:if(44===r){t[++M]=58===f()?"&\f":"",e[M]=t[M].length;break}default:t[M]+=o(r)}}while(r=p());return t}(Y(t),e))},at=new WeakMap,Lt=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,M=t.parent,r=t.column===M.column&&t.line===M.line;"rule"!==M.type;)if(!(M=M.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||at.get(M))&&!r){at.set(t,!0);for(var a=[],L=rt(e,a),i=M.props,n=0,s=0;n<L.length;n++)for(var u=0;u<i.length;u++,s++)t.props[s]=a[n]?L[n].replace(/&\f/g,i[u]):i[u]+" "+L[n]}}},it=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function nt(t,e){switch(function(t,e){return 45^w(t,0)?(((e<<2^w(t,0))<<2^w(t,1))<<2^w(t,2))<<2^w(t,3):0}(t,e)){case 5103:return R+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return R+t+V+t+G+t+t;case 6828:case 4268:return R+t+G+t+t;case 6165:return R+t+G+"flex-"+t+t;case 5187:return R+t+N(t,/(\w+).+(:[^]+)/,R+"box-$1$2"+G+"flex-$1$2")+t;case 5443:return R+t+G+"flex-item-"+N(t,/flex-|-self/,"")+t;case 4675:return R+t+G+"flex-line-pack"+N(t,/align-content|flex-|-self/,"")+t;case 5548:return R+t+G+N(t,"shrink","negative")+t;case 5292:return R+t+G+N(t,"basis","preferred-size")+t;case 6060:return R+"box-"+N(t,"-grow","")+R+t+G+N(t,"grow","positive")+t;case 4554:return R+N(t,/([^-])(transform)/g,"$1"+R+"$2")+t;case 6187:return N(N(N(t,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),t,"")+t;case 5495:case 3959:return N(t,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return N(N(t,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+t+t;case 4095:case 3583:case 4068:case 2532:return N(t,/(.+)-inline(.+)/,R+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(t)-1-e>6)switch(w(t,e+1)){case 109:if(45!==w(t,e+4))break;case 102:return N(t,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+V+(108==w(t,e+3)?"$3":"$2-$3"))+t;case 115:return~y(t,"stretch")?nt(N(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==w(t,e+1))break;case 6444:switch(w(t,D(t)-3-(~y(t,"!important")&&10))){case 107:return N(t,":",":"+R)+t;case 101:return N(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(45===w(t,14)?"inline-":"")+"box$3$1"+R+"$2$3$1"+G+"$2box$3")+t}break;case 5936:switch(w(t,e+11)){case 114:return R+t+G+N(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return R+t+G+N(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return R+t+G+N(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return R+t+G+t+t}return t}var st=[function(t,e,M,r){if(t.length>-1&&!t.return)switch(t.type){case J:t.return=nt(t.value,t.length);break;case F:return X([E(t,{value:N(t.value,"@","@"+R)})],r);case B:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([E(t,{props:[N(e,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return X([E(t,{props:[N(e,/:(plac\w+)/,":"+R+"input-$1")]}),E(t,{props:[N(e,/:(plac\w+)/,":-moz-$1")]}),E(t,{props:[N(e,/:(plac\w+)/,G+"input-$1")]})],r)}return""}))}}],ut=function(t){var e=t.key;if("css"===e){var M=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(M,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var r=t.stylisPlugins||st;var a,L,i={},n=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),M=1;M<e.length;M++)i[e[M]]=!0;n.push(t)}));var u,o,j,c,N=[_,(c=function(t){u.insert(t)},function(t){t.root||(t=t.return)&&c(t)})],y=(o=[Lt,it].concat(r,N),j=m(o),function(t,e,M,r){for(var a="",L=0;L<j;L++)a+=o[L](t,e,M,r)||"";return a});L=function(t,e,M,r){u=M,X($(t?t+"{"+e.styles+"}":e.styles),y),r&&(w.inserted[e.name]=!0)};var w={key:e,sheet:new s({key:e,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:L};return w.sheet.hydrate(n),w};function ot(t,e,M){var r="";return M.split(" ").forEach((function(M){void 0!==t[M]?e.push(t[M]+";"):r+=M+" "})),r}var jt=function(t,e,M){var r=t.key+"-"+e.name;!1===M&&void 0===t.registered[r]&&(t.registered[r]=e.styles)},ct=function(t,e,M){jt(t,e,M);var r=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var a=e;do{t.insert(e===a?"."+r:"",a,t.sheet,!0),a=a.next}while(void 0!==a)}};var Nt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yt(t){var e=Object.create(null);return function(M){return void 0===e[M]&&(e[M]=t(M)),e[M]}}var wt=/[A-Z]|^ms/g,lt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dt=function(t){return 45===t.charCodeAt(1)},mt=function(t){return null!=t&&"boolean"!=typeof t},gt=yt((function(t){return Dt(t)?t:t.replace(wt,"-$&").toLowerCase()})),It=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(lt,(function(t,e,M){return dt={name:e,styles:M,next:dt},e}))}return 1===Nt[t]||Dt(t)||"number"!=typeof e||0===e?e:e+"px"};function Tt(t,e,M){if(null==M)return"";if(void 0!==M.__emotion_styles)return M;switch(typeof M){case"boolean":return"";case"object":if(1===M.anim)return dt={name:M.name,styles:M.styles,next:dt},M.name;if(void 0!==M.styles){var r=M.next;if(void 0!==r)for(;void 0!==r;)dt={name:r.name,styles:r.styles,next:dt},r=r.next;return M.styles+";"}return function(t,e,M){var r="";if(Array.isArray(M))for(var a=0;a<M.length;a++)r+=Tt(t,e,M[a])+";";else for(var L in M){var i=M[L];if("object"!=typeof i)null!=e&&void 0!==e[i]?r+=L+"{"+e[i]+"}":mt(i)&&(r+=gt(L)+":"+It(L,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=e&&void 0!==e[i[0]]){var n=Tt(t,e,i);switch(L){case"animation":case"animationName":r+=gt(L)+":"+n+";";break;default:r+=L+"{"+n+"}"}}else for(var s=0;s<i.length;s++)mt(i[s])&&(r+=gt(L)+":"+It(L,i[s])+";")}return r}(t,e,M);case"function":if(void 0!==t){var a=dt,L=M(t);return dt=a,Tt(t,e,L)}}if(null==e)return M;var i=e[M];return void 0!==i?i:M}var dt,zt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Ct=function(t,e,M){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var r=!0,a="";dt=void 0;var L=t[0];null==L||void 0===L.raw?(r=!1,a+=Tt(M,e,L)):a+=L[0];for(var i=1;i<t.length;i++)a+=Tt(M,e,t[i]),r&&(a+=L[i]);zt.lastIndex=0;for(var n,s="";null!==(n=zt.exec(a));)s+="-"+n[1];var u=function(t){for(var e,M=0,r=0,a=t.length;a>=4;++r,a-=4)e=1540483477*(65535&(e=255&t.charCodeAt(r)|(255&t.charCodeAt(++r))<<8|(255&t.charCodeAt(++r))<<16|(255&t.charCodeAt(++r))<<24))+(59797*(e>>>16)<<16),M=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&M)+(59797*(M>>>16)<<16);switch(a){case 3:M^=(255&t.charCodeAt(r+2))<<16;case 2:M^=(255&t.charCodeAt(r+1))<<8;case 1:M=1540483477*(65535&(M^=255&t.charCodeAt(r)))+(59797*(M>>>16)<<16)}return(((M=1540483477*(65535&(M^=M>>>13))+(59797*(M>>>16)<<16))^M>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:dt}},St=!!L.useInsertionEffect&&L.useInsertionEffect,xt=St||function(t){return t()},Et=(St||a.useLayoutEffect,{}.hasOwnProperty),At=a.createContext("undefined"!=typeof HTMLElement?ut({key:"css"}):null);At.Provider;var pt=function(t){return(0,a.forwardRef)((function(e,M){var r=(0,a.useContext)(At);return t(e,r,M)}))};var ft=a.createContext({});var Ot="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",bt=function(t){var e=t.cache,M=t.serialized,r=t.isStringTag;return jt(e,M,r),xt((function(){return ct(e,M,r)})),null};var ht=pt((function(t,e,M){var r=t.css;"string"==typeof r&&void 0!==e.registered[r]&&(r=e.registered[r]);var L=t[Ot],i=[r],n="";"string"==typeof t.className?n=ot(e.registered,i,t.className):null!=t.className&&(n=t.className+" ");var s=Ct(i,void 0,a.useContext(ft));n+=e.key+"-"+s.name;var u={};for(var o in t)Et.call(t,o)&&"css"!==o&&o!==Ot&&(u[o]=t[o]);return u.ref=M,u.className=n,a.createElement(a.Fragment,null,a.createElement(bt,{cache:e,serialized:s,isStringTag:"string"==typeof L}),a.createElement(L,u))}));M(434),M(8679);function Yt(){for(var t=arguments.length,e=new Array(t),M=0;M<t;M++)e[M]=arguments[M];return Ct(e)}var kt=function(){var t=Yt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},vt=function t(e){for(var M=e.length,r=0,a="";r<M;r++){var L=e[r];if(null!=L){var i=void 0;switch(typeof L){case"boolean":break;case"object":if(Array.isArray(L))i=t(L);else for(var n in i="",L)L[n]&&n&&(i&&(i+=" "),i+=n);break;default:i=L}i&&(a&&(a+=" "),a+=i)}}return a};var Qt=function(t){var e=t.cache,M=t.serializedArr;return xt((function(){for(var t=0;t<M.length;t++)ct(e,M[t],!1)})),null},Ut=pt((function(t,e){var M=[],r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var L=Ct(r,e.registered);return M.push(L),jt(e,L,!1),e.key+"-"+L.name},L={css:r,cx:function(){for(var t=arguments.length,M=new Array(t),a=0;a<t;a++)M[a]=arguments[a];return function(t,e,M){var r=[],a=ot(t,r,M);return r.length<2?M:a+e(r)}(e.registered,r,vt(M))},theme:a.useContext(ft)},i=t.children(L);return!0,a.createElement(a.Fragment,null,a.createElement(Qt,{cache:e,serializedArr:M}),i)}));function Zt(){return Zt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var r in M)Object.prototype.hasOwnProperty.call(M,r)&&(t[r]=M[r])}return t},Zt.apply(this,arguments)}const Wt=new Map,Pt=new WeakMap;let Gt,Vt=0;function Rt(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(M=t.root,M?(Pt.has(M)||(Vt+=1,Pt.set(M,Vt.toString())),Pt.get(M)):"0"):t[e]}`;var M})).toString()}function Ht(t,e,M={},r=Gt){if(void 0===window.IntersectionObserver&&void 0!==r){const a=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:"number"==typeof M.threshold?M.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:L,elements:i}=function(t){let e=Rt(t),M=Wt.get(e);if(!M){const r=new Map;let a;const L=new IntersectionObserver((e=>{e.forEach((e=>{var M;const L=e.isIntersecting&&a.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=L),null==(M=r.get(e.target))||M.forEach((t=>{t(L,e)}))}))}),t);a=L.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),M={id:e,observer:L,elements:r},Wt.set(e,M)}return M}(M);let n=i.get(t)||[];return i.has(t)||i.set(t,n),n.push(e),L.observe(t),function(){n.splice(n.indexOf(e),1),0===n.length&&(i.delete(t),L.unobserve(t)),0===i.size&&(L.disconnect(),Wt.delete(a))}}const Bt=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Jt(t){return"function"!=typeof t.children}class Ft extends a.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),Jt(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:M,trackVisibility:r,delay:a,fallbackInView:L}=this.props;this._unobserveCb=Ht(this.node,this.handleChange,{threshold:t,root:e,rootMargin:M,trackVisibility:r,delay:a},L)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Jt(this.props)){const{inView:t,entry:e}=this.state;return this.props.children({inView:t,entry:e,ref:this.handleNode})}const t=this.props,{children:e,as:M}=t,r=function(t,e){if(null==t)return{};var M,r,a={},L=Object.keys(t);for(r=0;r<L.length;r++)M=L[r],e.indexOf(M)>=0||(a[M]=t[M]);return a}(t,Bt);return a.createElement(M||"div",Zt({ref:this.handleNode},r),e)}}function Xt({threshold:t,delay:e,trackVisibility:M,rootMargin:r,root:L,triggerOnce:i,skip:n,initialInView:s,fallbackInView:u,onChange:o}={}){var j;const[c,N]=a.useState(null),y=a.useRef(),[w,l]=a.useState({inView:!!s,entry:void 0});y.current=o,a.useEffect((()=>{if(n||!c)return;let a;return a=Ht(c,((t,e)=>{l({inView:t,entry:e}),y.current&&y.current(t,e),e.isIntersecting&&i&&a&&(a(),a=void 0)}),{root:L,rootMargin:r,threshold:t,trackVisibility:M,delay:e},u),()=>{a&&a()}}),[Array.isArray(t)?t.toString():t,c,L,r,i,n,M,u,e]);const D=null==(j=w.entry)?void 0:j.target,m=a.useRef();c||!D||i||n||m.current===D||(m.current=D,l({inView:!!s,entry:void 0}));const g=[N,w.inView,w.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var _t=M(4954),$t=M(5893),Kt=$t.Fragment;function qt(t,e,M){return Et.call(e,"css")?$t.jsx(ht,function(t,e){var M={};for(var r in e)Et.call(e,r)&&(M[r]=e[r]);return M[Ot]=t,M}(t,e),M):$t.jsx(t,e,M)}kt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,kt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,kt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,kt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,kt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,kt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,kt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,kt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,kt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,kt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,kt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,kt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,kt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var te=kt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ee=kt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me=kt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=kt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=kt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Le=kt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=kt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=kt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=kt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=kt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=kt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,je=kt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=kt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ne(t,e){return M=>M?t():e()}function ye(t){return Ne(t,(()=>null))}var we=t=>{const{cascade:e=!1,damping:M=.5,delay:r=0,duration:L=1e3,fraction:i=0,keyframes:n=Le,triggerOnce:s=!1,className:u,style:o,childClassName:j,childStyle:c,children:N,onVisibilityChange:y}=t,w=(0,a.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:M="ease",keyframes:r=Le,iterationCount:a=1}){return Yt`
    animation-duration: ${t}ms;
    animation-timing-function: ${M};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:n,duration:L})),[L,n]);return null==N?null:"string"==typeof(l=N)||"number"==typeof l||"boolean"==typeof l?qt(De,{...t,animationStyles:w,children:String(N)}):(0,_t.isFragment)(N)?qt(me,{...t,animationStyles:w}):qt(Kt,{children:a.Children.map(N,((n,N)=>{if(!(0,a.isValidElement)(n))return null;const l=r+(e?N*L*M:0);switch(n.type){case"ol":case"ul":return qt(Ut,{children:({cx:e})=>qt(n.type,{...n.props,className:e(u,n.props.className),style:Object.assign({},o,n.props.style),children:qt(we,{...t,children:n.props.children})})});case"li":return qt(Ft,{threshold:i,triggerOnce:s,onChange:y,children:({inView:t,ref:e})=>qt(Ut,{children:({cx:M})=>qt(n.type,{...n.props,ref:e,className:M(j,n.props.className),css:ye((()=>w))(t),style:Object.assign({},c,n.props.style,{animationDelay:l+"ms"})})})});default:return qt(Ft,{threshold:i,triggerOnce:s,onChange:y,children:({inView:t,ref:e})=>qt("div",{ref:e,className:u,css:ye((()=>w))(t),style:Object.assign({},o,{animationDelay:l+"ms"}),children:qt(Ut,{children:({cx:t})=>qt(n.type,{...n.props,className:t(j,n.props.className),style:Object.assign({},c,n.props.style)})})})})}}))});var l},le={display:"inline-block",whiteSpace:"pre"},De=t=>{const{animationStyles:e,cascade:M=!1,damping:r=.5,delay:a=0,duration:L=1e3,fraction:i=0,triggerOnce:n=!1,className:s,style:u,children:o,onVisibilityChange:j}=t,{ref:c,inView:N}=Xt({triggerOnce:n,threshold:i,onChange:j});return Ne((()=>qt("div",{ref:c,className:s,style:Object.assign({},u,le),children:o.split("").map(((t,M)=>qt("span",{css:ye((()=>e))(N),style:{animationDelay:a+M*L*r+"ms"},children:t},M)))})),(()=>qt(me,{...t,children:o})))(M)},me=t=>{const{animationStyles:e,fraction:M=0,triggerOnce:r=!1,className:a,style:L,children:i,onVisibilityChange:n}=t,{ref:s,inView:u}=Xt({triggerOnce:r,threshold:M,onChange:n});return qt("div",{ref:s,className:a,css:ye((()=>e))(u),style:L,children:i})};kt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,kt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,kt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,kt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,kt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,kt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var ge=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ie=kt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Te=kt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,de=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ze=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ce=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Se=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,xe=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ee=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ae=kt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,pe=kt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,fe=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Oe=kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var be=t=>{const{big:e=!1,direction:M,reverse:r=!1,...L}=t,i=(0,a.useMemo)((()=>function(t,e,M){switch(M){case"bottom-left":return e?Ie:ee;case"bottom-right":return e?Te:Me;case"down":return t?e?ze:ae:e?de:re;case"left":return t?e?Se:ie:e?Ce:Le;case"right":return t?e?Ee:se:e?xe:ne;case"top-left":return e?Ae:ue;case"top-right":return e?pe:oe;case"up":return t?e?Oe:ce:e?fe:je;default:return e?ge:te}}(e,r,M)),[e,M,r]);return qt(we,{keyframes:i,...L})};kt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,kt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,kt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,kt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,kt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;kt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,kt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,kt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;kt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,kt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,kt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,kt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,kt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,kt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;kt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,kt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,kt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;kt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,kt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,kt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,kt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,kt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;var he=M.p+"static/elasticsearch-65d15845f5cd6c5ef1035efee2041a2f.png",Ye={name:"Matteo",headerTagline:["Curious person","tech lover","and driven"],headerParagraph:"Web Developer at DevInterface Srl",contactEmail:"matteo.melotti@proton.me",projects:[{title:"Project One",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"},{title:"Project Two",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"},{title:"Project Three",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"},{title:"Project Four",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"},{title:"Project Five",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"},{title:"Project Six",para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",imageSrc:"https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",url:"https://matteomelotti.github.io/"}],aboutParaOne:"Hi, I am Matteo. A Web Developer from Verona, Italy. Since I was young I have been interested in technology and from 2016 I working as a Web Developer.",aboutParaTwo:"My professional career started developing and maintaining Ruby on Rails applications as e-commerce, management software and simple websites with ",aboutParaThree:"Throughout my carrer I needed to improve my soft skills as time management, teamwork and project management, and my hard skills with new programming languages and frameworks as ReactJS, Vue.JS, Node.JS, Nest, Spree e-commerce, Typescript.",aboutParaFour:"I am a curious person and a lover of new technologies. I like working in young and dynamic work groups where I can contribute to development of new ideas. My dream work place is a company that contributes to improve the quality of people ‘s life and planet sustainability. An environment with the possibility of continuous professional growth.",aboutParaFive:'Here you can find my updated <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/19zG9PSTj_0ElWVnzn39g7MzMvSxS8Ja_/view">CV</a>.',aboutImage:M.p+"static/profile-pic-a361f896de10034817d77a9becfa8414.jpeg",experiences:[{company:{link:"",logo:"",name:""},positions:[{dateFinish:null,dateStart:"",title:"",description:""}]}],skills:[{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzNCAzMiI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE5LjMxNCAxNS45ODdhMi4zOTIgMi4zOTIgMCAxIDEtNC43ODQgMCAyLjM5MiAyLjM5MiAwIDAgMSA0Ljc4NCAweiIvPjxwYXRoIGZpbGw9IiM0NDQiIGQ9Ik0xNi45MjIgMjQuNzgzYzEuODc4IDEuODI2IDMuNzI5IDIuOTA2IDUuMjIxIDIuOTA2LjQ4OSAwIC45NTItLjEwMyAxLjMzNy0uMzM0IDEuMzM3LS43NzIgMS44MjYtMi43MDEgMS4zNjMtNS40NTMtLjA3Ny0uNDg5LS4xOC0uOTc3LS4zMDktMS40OTIuNTE0LS4xNTQuOTc3LS4zMDkgMS40NC0uNDYzIDIuNTk4LTEuMDAzIDQuMDM4LTIuMzkyIDQuMDM4LTMuOTA5IDAtMS41NDMtMS40NC0yLjkzMi00LjAzOC0zLjkwOS0uNDYzLS4xOC0uOTI2LS4zMzQtMS40NC0uNDYzLjEyOS0uNTE0LjIzMi0xLjAwMy4zMDktMS40OTIuNDM3LTIuODAzLS4wNTEtNC43NTgtMS4zODktNS41My0uMzg2LS4yMzEtLjg0OS0uMzM0LTEuMzM3LS4zMzQtMS40NjYgMC0zLjM0NCAxLjA4LTUuMjIxIDIuOTA2LTEuODUyLTEuODI2LTMuNzA0LTIuOTA2LTUuMTk1LTIuOTA2LS40ODkgMC0uOTUyLjEwMy0xLjMzNy4zMzQtMS4zMzcuNzcyLTEuODI2IDIuNzAxLTEuMzYzIDUuNDUzLjA3Ny40ODkuMTguOTc3LjMwOSAxLjQ5Mi0uNTE0LjE1NC0uOTc3LjMwOS0xLjQ0LjQ2My0yLjU5OCAxLjAwMy00LjAzOCAyLjM5Mi00LjAzOCAzLjkwOSAwIDEuNTQzIDEuNDQgMi45MzIgNC4wMzggMy45MDkuNDYzLjE4LjkyNi4zMzQgMS40NC40NjNhMTYuODgyIDE2Ljg4MiAwIDAgMC0uMzA5IDEuNDkyYy0uNDM3IDIuNzUyLjA1MSA0LjcwNyAxLjM2MyA1LjQ1My4zODYuMjMyLjg0OS4zMzQgMS4zMzcuMzM0IDEuNDkyLjA1MSAzLjM0NC0xLjAyOSA1LjIyMS0yLjgyOXptLTEuNDQxLTMuNDcyYy40NjMuMDI2Ljk1Mi4wMjYgMS40NC4wMjZzLjk3NyAwIDEuNDQtLjAyNmEyNC41MjMgMjQuNTIzIDAgMCAxLTEuNDQgMS43MjMgMjQuMjUyIDI0LjI1MiAwIDAgMS0xLjQ0LTEuNzIzem0tMy4xODktMi42NDljLjI1Ny40MzcuNDg5Ljg0OS43NzIgMS4yNmEyNy43ODYgMjcuNzg2IDAgMCAxLTIuMjYzLS4zODZjLjIzMi0uNjk0LjQ4OS0xLjQxNS43OTctMi4xMzUuMjA2LjQxMS40MzcuODQ5LjY5NCAxLjI2ek0xMC44IDEyLjQ2M2MuNzItLjE1NCAxLjQ2Ni0uMjgzIDIuMjYzLS4zODYtLjI1Ny40MTItLjUxNC44MjMtLjc3MiAxLjI2cy0uNDg5Ljg0OS0uNjk0IDEuMjg2YTE3LjEwOSAxNy4xMDkgMCAwIDEtLjc5Ny0yLjE2MXptMS40MTUgMy41MjRjLjMzNC0uNjk0LjY5NC0xLjM4OSAxLjEwNi0yLjA4My4zODYtLjY2OS44MjMtMS4zMzcgMS4yNi0yLjAwNmEzNS4yOTMgMzUuMjkzIDAgMCAxIDQuNjgyIDBjLjQ2My42NjkuODc0IDEuMzM3IDEuMjYgMi4wMDYuNDEyLjY5NC43NzIgMS4zODkgMS4xMDYgMi4wODNhMjYuOTIyIDI2LjkyMiAwIDAgMS0xLjEwNiAyLjA4M2MtLjM4Ni42NjktLjgyMyAxLjMzNy0xLjI2IDIuMDA2YTM1LjI5MyAzNS4yOTMgMCAwIDEtNC42ODIgMCAyOC42OTUgMjguNjk1IDAgMCAxLTEuMjYtMi4wMDYgMjcuMTA2IDI3LjEwNiAwIDAgMS0xLjEwNi0yLjA4M3ptMTAuMDU3LTEuMzg5bC0uNjk0LTEuMjg2Yy0uMjU3LS40MzctLjQ4OS0uODQ5LS43NzItMS4yNi43OTcuMTAzIDEuNTQzLjIzMiAyLjI2My4zODYtLjIzMS43Mi0uNDg5IDEuNDQtLjc5NyAyLjE2MXptMCAyLjc3OGMuMzA5LjcyLjU2NiAxLjQ0Ljc5NyAyLjEzNS0uNzIuMTU0LTEuNDY2LjI4My0yLjI2My4zODYuMjU3LS40MTIuNTE0LS44MjMuNzcyLTEuMjYuMjMyLS4zODYuNDYzLS44MjMuNjk0LTEuMjZ6bS41OTEgOC45MjVjLS4yMDYuMTI5LS40NjMuMTgtLjc0Ni4xOC0xLjI2IDAtMi44MjktMS4wMjktNC4zNzItMi41NzJhMjYuODY4IDI2Ljg2OCAwIDAgMCAyLjE4Ni0yLjcwMSAyMy42MTkgMjMuNjE5IDAgMCAwIDMuNDQ3LS41NGMuMTI5LjQ2My4yMDYuOTI2LjI4MyAxLjM4OS4zNiAyLjE4Ni4wNzcgMy43NTUtLjc5NyA0LjI0NHptMS4zMzgtMTMuNTU1YzIuODgxLjgyMyA0LjYwNCAyLjA4MyA0LjYwNCAzLjI0MSAwIDEuMDAzLTEuMTgzIDIuMDA2LTMuMjY2IDIuODA0LS40MTIuMTU0LS44NzQuMzA5LTEuMzM3LjQzN2EyNy4wMSAyNy4wMSAwIDAgMC0xLjI2LTMuMjQxYy41MTQtMS4xMDYuOTUyLTIuMTg2IDEuMjYtMy4yNDF6bS0yLjA1OC03LjI1M2MuMjgzIDAgLjUxNC4wNTEuNzQ2LjE4Ljg0OS40ODkgMS4xNTcgMi4wMzIuNzk3IDQuMjQ0LS4wNzcuNDM3LS4xOC45LS4yODMgMS4zODlhMzMuMDcyIDMzLjA3MiAwIDAgMC0zLjQ0Ny0uNTQgMjMuNzc0IDIzLjc3NCAwIDAgMC0yLjE4Ni0yLjcwMWMxLjU0My0xLjUxOCAzLjExMi0yLjU3MiA0LjM3Mi0yLjU3MnptLTMuNzgxIDUuMTdjLS40NjMtLjAyNi0uOTUyLS4wMjYtMS40NC0uMDI2cy0uOTc3IDAtMS40NC4wMjZjLjQ2My0uNjE3Ljk1Mi0xLjE4MyAxLjQ0LTEuNzIzLjQ4OS41NC45NzcgMS4xMzIgMS40NCAxLjcyM3ptLTcuMzgyLTQuOTljLjIwNi0uMTI5LjQ2My0uMTguNzQ2LS4xOCAxLjI2IDAgMi44MjkgMS4wMjkgNC4zNzIgMi41NzJhMjYuNzU2IDI2Ljc1NiAwIDAgMC0yLjE4NiAyLjcwMSAyMy42MTkgMjMuNjE5IDAgMCAwLTMuNDQ3LjU0Yy0uMTI5LS40NjMtLjIwNi0uOTI2LS4yODMtMS4zODktLjM2LTIuMTg2LS4wNzctMy43MjkuNzk3LTQuMjQ0ek05LjY0MyAxOS4yMjhjLTIuODgxLS44MjMtNC42MDQtMi4wODMtNC42MDQtMy4yNDEgMC0xLjAwMyAxLjE4My0yLjAwNiAzLjI2Ni0yLjgwMy40MTItLjE1NC44NzQtLjMwOSAxLjMzNy0uNDM3YTI3LjAxIDI3LjAxIDAgMCAwIDEuMjYgMy4yNDFjLS41MTQgMS4xMDYtLjk1MiAyLjIxMi0xLjI2IDMuMjQxem0uNTQgMi44MjljLjA3Ny0uNDM3LjE4LS45LjI4My0xLjM4OSAxLjA4LjIzMiAyLjIzOC40MTIgMy40NDcuNTRhMjMuNzc0IDIzLjc3NCAwIDAgMCAyLjE4NiAyLjcwMWMtMS41NDMgMS41MTctMy4xMTIgMi41NzItNC4zNzIgMi41NzItLjI4MyAwLS41MTQtLjA1MS0uNzQ2LS4xOC0uODc1LS40ODktMS4xNTctMi4wNTgtLjc5Ny00LjI0NHoiLz48bWV0YWRhdGE+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9InJlYWN0IiBkYzpkZXNjcmlwdGlvbj0icmVhY3QiIGRjOnB1Ymxpc2hlcj0iSWNvbnNjb3V0IiBkYzpkYXRlPSIyMDE3LTA5LTI0IiBkYzpmb3JtYXQ9ImltYWdlL3N2Zyt4bWwiIGRjOmxhbmd1YWdlPSJlbiI+PGRjOmNyZWF0b3I+PHJkZjpCYWc+PHJkZjpsaT5Wb3JpbGxhejwvcmRmOmxpPjwvcmRmOkJhZz48L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PC9zdmc+",para:"ReactJS"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjMjEyMTIxIiBkPSJNMiA0LjVDMiAzLjExOTI5IDMuMTE5MjkgMiA0LjUgMkgxMS41QzEyLjg4MDcgMiAxNCAzLjExOTI5IDE0IDQuNVYxMS41QzE0IDEyLjg4MDcgMTIuODgwNyAxNCAxMS41IDE0SDQuNUMzLjExOTI5IDE0IDIgMTIuODgwNyAyIDExLjVWNC41Wk03LjUgNkM3LjIyMzg2IDYgNyA2LjIyMzg2IDcgNi41VjEwLjVDNyAxMC43NzYxIDYuNzc2MTQgMTEgNi41IDExSDUuNUM1LjIyMzg2IDExIDUgMTEuMjIzOSA1IDExLjVDNSAxMS43NzYxIDUuMjIzODYgMTIgNS41IDEySDYuNUM3LjMyODQzIDEyIDggMTEuMzI4NCA4IDEwLjVWNi41QzggNi4yMjM4NiA3Ljc3NjE0IDYgNy41IDZaTTguNSA3LjVWOEM4LjUgOC44Mjg0MyA5LjE3MTU3IDkuNSAxMCA5LjVIMTAuNUMxMC43NzYxIDkuNSAxMSA5LjcyMzg2IDExIDEwVjEwLjVDMTEgMTAuNzc2MSAxMC43NzYxIDExIDEwLjUgMTFIOUM4LjcyMzg2IDExIDguNSAxMS4yMjM5IDguNSAxMS41QzguNSAxMS43NzYxIDguNzIzODYgMTIgOSAxMkgxMC41QzExLjMyODQgMTIgMTIgMTEuMzI4NCAxMiAxMC41VjEwQzEyIDkuMTcxNTcgMTEuMzI4NCA4LjUgMTAuNSA4LjVIMTBDOS43MjM4NiA4LjUgOS41IDguMjc2MTQgOS41IDhWNy41QzkuNSA3LjIyMzg2IDkuNzIzODYgNyAxMCA3SDExLjVDMTEuNzc2MSA3IDEyIDYuNzc2MTQgMTIgNi41QzEyIDYuMjIzODYgMTEuNzc2MSA2IDExLjUgNkgxMEM5LjE3MTU3IDYgOC41IDYuNjcxNTcgOC41IDcuNVoiLz48L3N2Zz4=",para:"Javascript"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIj48cGF0aCBkPSJNMTMyMiA1OTdsMTYtMTc1aC04ODRsNDcgNTM0aDYxMmwtMjIgMjI4LTE5NyA1My0xOTYtNTMtMTMtMTQwaC0xNzVsMjIgMjc4IDM2MiAxMDBoNHYtMWwzNTktOTkgNTAtNTQ0aC02NDRsLTE1LTE4MWg2NzR6bS0xMTMwLTQ2OWgxNDA4bC0xMjggMTQzOC01NzggMTYyLTU3NC0xNjJ6Ii8+CgkKCTxtZXRhZGF0YT4KCQk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnJkZnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDEvcmRmLXNjaGVtYSMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CgkJCTxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9Ikh0bWwsIFByb2dyYW1taW5nLCBMYW5ndWFnZSwgQ3NzLCBFZGl0aW5nLCBTdHlsZSIgZGM6ZGVzY3JpcHRpb249Ikh0bWwsIFByb2dyYW1taW5nLCBMYW5ndWFnZSwgQ3NzLCBFZGl0aW5nLCBTdHlsZSIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTYtMTItMTQiIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj4KCQkJCTxkYzpjcmVhdG9yPgoJCQkJCTxyZGY6QmFnPgoJCQkJCQk8cmRmOmxpPkZvbnQgQXdlc29tZTwvcmRmOmxpPgoJCQkJCTwvcmRmOkJhZz4KCQkJCTwvZGM6Y3JlYXRvcj4KCQkJPC9yZGY6RGVzY3JpcHRpb24+CgkJPC9yZGY6UkRGPgogICAgPC9tZXRhZGF0YT48L3N2Zz4K",para:"HTML"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcwLjY5OSA0NzAuNjk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzAuNjk5IDQ3MC42OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTQyNi45ODEsMEg0My43MDFDMzQuNTIsMCwyNy42MzIsNy43NjksMjguNDQyLDE2Ljk0OUw2My40NSw0MDkuMjU0YzAuODExLDkuMTczLDguNzQ1LDE4Ljc3NCwxNy42NDQsMjEuMjUzCglsMTM4LjAwNiwzOC4zMzVjOC44ODcsMi40NjMsMjMuNDEzLDIuNDc5LDMyLjMxMywwLjAzMmwxMzguMTc3LTM4LjI4MWM4LjkwMS0yLjQ3MiwxNi44MzUtMTEuOTg2LDE3LjY0NS0yMS4xNzVsMzUuMDIzLTM5Mi40NjkKCUM0NDMuMDY4LDcuNzY5LDQzNi4yMDksMCw0MjYuOTgxLDB6IE0zNjAuNTEsMTQxLjYxMWMtMC4wMDYsMC4wNi0wLjA1MywwLjEwNy0wLjExMiwwLjExN2MtMC4wNiwwLjAxLTAuMTE4LTAuMDIxLTAuMTQ0LTAuMDc3CglMMjUyLjEzLDE4NS45NmMtMS41NCwwLjYzMS0yLjQxOCwyLjI2NC0yLjA5OCwzLjg5N2MwLjMyMiwxLjYzMywxLjc1NCwyLjgxMSwzLjQxOSwyLjgxMWg4NC4xMDNjNC40NzQsMCw4LjczNiwxLjksMTEuNzI4LDUuMjI3CgljMi45OTEsMy4zMjcsNC40MjksNy43NjgsMy45NTQsMTIuMjE2bC0xMy4xNDEsMTIzLjI3M2MtMC42NDUsNi4wNDgtNC43MDksMTEuMTg2LTEwLjQ0NywxMy4yMDVsLTg5LjI2OSwzMS40MQoJYy0zLjM2MiwxLjE4NC03LjAyNywxLjE5My0xMC4zOTcsMC4wMjVsLTg4Ljg1Mi0zMC43NzhjLTUuNzczLTItOS44NzEtNy4xNTMtMTAuNTItMTMuMjI4bC01Ljk1Ny01NS44MjgKCWMtMC4zMTMtMi45MzEsMC42MzQtNS44NTcsMi42MDQtOC4wNDhjMS45NzEtMi4xOTIsNC43NzktMy40NDQsNy43MjctMy40NDRoMjQuNzI1YzUuMzEzLDAsOS43NjksNC4wMDcsMTAuMzMxLDkuMjg5bDMuNjU1LDM0LjMxNgoJbDYxLjUyMSwyMS4zODVsNjEuODAzLTIxLjU4bDcuNTU5LTcxLjE3SDEyOS44MzVjLTUuMjk3LDAtOS43NDYtMy45ODUtMTAuMzI3LTkuMjVsLTMuMzI3LTMwLjE2NAoJYy0wLjUwOC00LjYwMSwyLjA4OC04Ljk4Miw2LjM2Ni0xMC43NDVsMTExLjgzNy00Ni4xMDljMS4yNjktMC41MjMsMS45OS0xLjg2OCwxLjcyNC0zLjIxNGMtMC4yNjctMS4zNDUtMS40NDYtMi4zMTQtMi44MTctMi4zMTQKCUgxMTUuNTQyYy0zLjU0NSwwLTYuNTE4LTIuNjc3LTYuODg4LTYuMjAxbC0zLjQwNi0zMi40MjFjLTAuMjA1LTEuOTUxLDAuNDI4LTMuODk4LDEuNzQxLTUuMzU3CgljMS4zMTMtMS40NTgsMy4xODQtMi4yOTEsNS4xNDYtMi4yOTFoMjQ2LjM3OWMxLjk3MywwLDMuODUyLDAuODQyLDUuMTY2LDIuMzEzYzEuMzE0LDEuNDcyLDEuOTM4LDMuNDM0LDEuNzE1LDUuMzk0TDM2MC41MSwxNDEuNjExCgl6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=",para:"CSS"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMiAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHRpdGxlPnBvc3RncmVzcWw8L3RpdGxlPgo8cGF0aCBkPSJNMjIuOCwwYy0xLjIsMC0yLjUsMC4yLTMuNywwLjVsLTAuMSwwYy0wLjgtMC4xLTEuNS0wLjItMi4zLTAuMmMtMS42LDAtMi45LDAuNC00LDFjLTEuMS0wLjQtMy4zLTEtNS42LTAuOQoJQzUuNSwwLjUsMy43LDEsMi40LDIuNEMxLjEsMy44LDAuNCw2LDAuNiw4LjljMCwwLjgsMC4zLDIuMSwwLjcsMy44YzAuNCwxLjcsMC45LDMuNywxLjYsNS41YzAuNywxLjgsMS40LDMuNSwyLjYsNC42CgljMC42LDAuNiwxLjQsMSwyLjMsMWMwLjcsMCwxLjItMC4zLDEuOC0wLjdjMC4yLDAuMywwLjUsMC41LDAuOCwwLjZjMC4zLDAuMiwwLjYsMC4zLDAuOSwwLjRjMC42LDAuMSwxLjUsMC4zLDIuNiwwLjEKCWMwLjQtMC4xLDAuOC0wLjIsMS4yLTAuNGMwLDAuNCwwLDAuOSwwLDEuM2MwLjEsMS40LDAuMSwyLjcsMC41LDMuOGMwLjEsMC4yLDAuMywxLjEsMSwyYzAuNywwLjgsMi4xLDEuMywzLjcsMQoJYzEuMS0wLjIsMi42LTAuNywzLjUtMmMwLjktMS4zLDEuNC0zLjMsMS41LTYuNGMwLTAuMiwwLTAuMywwLjEtMC40bDAuMiwwaDBjMS4yLDAuMSwyLjUtMC4xLDMuNi0wLjZjMS0wLjQsMS43LTAuOSwyLjItMS43CgljMC4xLTAuMiwwLjMtMC40LDAuMy0wLjljMC0wLjQtMC4yLTEuMS0wLjYtMS40Yy0wLjgtMC42LTEuMy0wLjQtMS44LTAuM2MtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjJjMS41LTIuNiwyLjYtNS40LDMuMy03LjgKCWMwLjQtMS40LDAuNi0yLjgsMC42LTMuOWMwLTEuMi0wLjEtMi4yLTAuOC0zLjFDMjguNSwwLjgsMjUuNCwwLDIzLjEsMEMyMywwLDIyLjksMCwyMi44LDBMMjIuOCwweiBNMjIuOCwwLjkKCWMyLjIsMCw1LjEsMC42LDcuMSwzLjJjMC41LDAuNiwwLjYsMS40LDAuNiwyLjVzLTAuMiwyLjMtMC42LDMuN2MtMC43LDIuNy0yLDUuOC0zLjksOC43YzAuMSwwLDAuMSwwLjEsMC4yLDAuMQoJYzAuNCwwLjIsMS4zLDAuMywzLTAuMWMwLjQtMC4xLDAuOC0wLjIsMS4xLDAuMWMwLjIsMC4xLDAuMywwLjMsMC4yLDAuNmMwLDAuMi0wLjEsMC4zLTAuMiwwLjRjLTAuMywwLjUtMSwxLTEuOSwxLjQKCWMtMC44LDAuNC0xLjksMC41LTIuOCwwLjVjLTAuNSwwLTAuOSwwLTEuMy0wLjJsMCwwYy0wLjEsMS40LTAuNSw0LjItMC43LDUuNWMtMC4yLDEtMC41LDEuOC0xLjEsMi41Yy0wLjYsMC42LTEuNCwxLTIuNSwxLjIKCWMtMS40LDAuMy0yLjQsMC0zLTAuNnMtMC45LTEuMy0xLjEtMS43Yy0wLjEtMC4zLTAuMi0wLjctMC4yLTEuMmMtMC4xLTAuNS0wLjEtMS4yLTAuMS0xLjljMC0xLjEtMC4xLTIuMiwwLTMuNAoJYy0wLjYsMC41LTEuMywwLjktMi4xLDFjLTAuOSwwLjItMS43LDAtMi4yLTAuMWMtMC4yLTAuMS0wLjUtMC4yLTAuNy0wLjNjLTAuMi0wLjEtMC40LTAuMy0wLjYtMC41Yy0wLjEtMC4yLTAuMS0wLjMtMC4xLTAuNQoJYzAtMC4yLDAuMS0wLjMsMC4zLTAuNGMwLjMtMC4yLDAuNi0wLjMsMS4xLTAuNGMxLTAuMiwxLjMtMC4zLDEuNS0wLjVjMC4yLTAuMSwwLjQtMC40LDAuNy0wLjhjMCwwLDAsMCwwLTAuMQoJYy0wLjYsMC0xLjItMC4yLTEuOC0wLjVjLTAuMiwwLjItMS4yLDEuMy0yLjUsMi44Yy0wLjUsMC42LTEuMSwxLTEuNywxYy0wLjYsMC0xLjItMC4zLTEuNi0wLjdjLTAuOS0wLjktMS43LTIuNS0yLjMtNC4zCglzLTEuMi0zLjctMS42LTUuNGMtMC40LTEuNy0wLjYtMy0wLjYtMy43QzEuMyw2LDEuOSw0LjIsMywzczIuNi0xLjYsNC4xLTEuN2MyLjctMC4yLDUuMiwwLjgsNS43LDFjMS0wLjcsMi4zLTEuMSwzLjktMS4xCgljMC44LDAsMS41LDAuMSwyLjIsMC4zbDAsMGMwLjMtMC4xLDAuNy0wLjIsMS0wLjNDMjAuOSwxLDIxLjgsMC45LDIyLjgsMC45TDIyLjgsMC45eiBNMjMsMS43aC0wLjJjLTAuOCwwLTEuNSwwLjEtMi4zLDAuMwoJYzEuNywwLjcsMi45LDEuOSwzLjgsM2MwLjYsMC44LDEuMSwxLjYsMS41LDIuNmMwLjIsMC40LDAuMywwLjcsMC4zLDAuOWMwLDAuMSwwLDAuMiwwLjEsMC4zYzAsMC4xLDAsMC4xLDAsMC4yYzAsMCwwLDAsMCwwCgljMCwxLjItMC4yLDItMC4zLDMuMWMwLDAuOCwwLjIsMS44LDAuMiwyLjhjMCwxLTAuMSwyLTAuNywzLjFjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjJjMS43LTIuNiwyLjktNS41LDMuNS04CgljMC4zLTEuMywwLjUtMi42LDAuNS0zLjVjMC0xLTAuMi0xLjctMC40LTEuOUMyNy40LDIuMywyNSwxLjgsMjMsMS43TDIzLDEuN3ogTTE2LjYsMi4xYy0xLjYsMC0yLjcsMC41LTMuNiwxLjIKCUMxMi4xLDQsMTEuNSw1LDExLjIsNi4xYy0wLjUsMS4yLTAuNiwyLjQtMC43LDMuMmwwLDBDMTEsOSwxMS42LDguNywxMi4zLDguNmMwLjctMC4yLDEuNC0wLjIsMiwwLjFjMC43LDAuMiwxLjIsMC44LDEuNCwxLjcKCWMwLjksNC4zLTAuMyw2LTAuNyw3LjJjLTAuMiwwLjQtMC4zLDAuOS0wLjQsMS4zYzAuMSwwLDAuMSwwLDAuMiwwYzAuMywwLDAuNiwwLjEsMC43LDAuMWMwLjUsMC4yLDAuOCwwLjYsMC45LDEKCWMwLDAuMSwwLjEsMC4yLDAuMSwwLjRjMCwwLjEsMCwwLjEsMCwwLjJjLTAuMSwxLjcsMCwzLjMsMCw1YzAsMC43LDAuMSwxLjMsMC4xLDEuOGMwLjEsMC41LDAuMSwwLjksMC4yLDFjMC4yLDAuNCwwLjQsMSwwLjksMS40CgljMC40LDAuNCwxLjEsMC42LDIuMywwLjRjMS0wLjIsMS43LTAuNSwyLjEtMWMwLjQtMC40LDAuNy0xLjEsMC44LTJjMC4yLTEuNCwwLjctNS41LDAuOC02LjJjMC0wLjYsMC4xLTEsMC4yLTEuNAoJYzAuMi0wLjMsMC41LTAuNiwwLjctMC43YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xYy0wLjEtMC4xLTAuMi0wLjMtMC4zLTAuNEMyNC4zLDE4LDI0LDE3LjUsMjMuOCwxN2MtMC4xLTAuMi0wLjItMC40LTAuMy0wLjYKCWMtMC4yLTAuMy0wLjQtMC43LTAuNi0xLjJjLTAuNS0wLjktMS0yLTEuMi0zLjFjLTAuMy0xLjEtMC4zLTIuMiwwLjQtMi45YzAuNi0wLjcsMS43LTEsMy4yLTAuOGMwLTAuMS0wLjEtMC4zLTAuMi0wLjQKCWMtMC40LTAuOC0wLjgtMS42LTEuNC0yLjRjLTEuMy0xLjctMy41LTMuNC02LjktMy41TDE2LjYsMi4xeiBNNy43LDIuMmMtMC4yLDAtMC4zLDAtMC41LDBDNS45LDIuMyw0LjYsMi42LDMuNywzLjYKCWMtMC45LDEtMS41LDIuNS0xLjQsNS4yYzAsMC41LDAuMiwxLjksMC42LDMuNWMwLjQsMS43LDAuOSwzLjYsMS41LDUuM2MwLjYsMS43LDEuNCwzLjIsMi4xLDMuOWMwLjQsMC4zLDAuNywwLjUsMSwwLjUKCWMwLjMsMCwwLjYtMC4yLDEuMS0wLjdjMC44LTAuOSwxLjYtMS44LDIuNC0yLjdjLTEuMi0xLTEuOC0yLjYtMS42LTQuMmMwLjEtMSwwLjItMS45LDAuMS0yLjZjMC0wLjctMC4xLTEuMi0wLjEtMS41YzAsMCwwLDAsMCwwdjAKCWwwLDBjMC0xLjUsMC4zLTMuMSwwLjgtNC41YzAuNC0xLDAuOS0yLDEuOC0yLjhjLTAuOC0wLjMtMi4zLTAuNy0zLjgtMC44QzguMSwyLjIsNy45LDIuMiw3LjcsMi4yTDcuNywyLjJ6IE0yNC4zLDkuMgoJYy0wLjksMC0xLjQsMC4zLTEuNywwLjZjLTAuNCwwLjQtMC40LDEuMi0wLjIsMi4xYzAuMiwwLjksMC43LDIsMS4yLDIuOWMwLjIsMC40LDAuNCwwLjgsMC42LDEuMWMwLjIsMC4zLDAuMywwLjUsMC40LDAuNwoJYzAuMSwwLjIsMC4yLDAuMywwLjIsMC41YzAuMy0wLjcsMC40LTEuNSwwLjQtMi4yYzAtMC45LTAuMy0xLjktMC4yLTIuOWMwLTEuMSwwLjMtMS45LDAuMy0yLjhDMjQuOSw5LjIsMjQuNiw5LjIsMjQuMyw5LjIKCUwyNC4zLDkuMnogTTEzLjMsOS40Yy0wLjMsMC0wLjYsMC0wLjgsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS41LDAuNmMtMC4yLDAuMS0wLjMsMC4yLTAuNSwwLjNsMCwwYzAsMC4yLDAsMC43LDAuMSwxLjQKCWMwLDAuOCwwLDEuNy0wLjEsMi44Yy0wLjMsMi4zLDEuMyw0LjIsMy4zLDQuMmMwLjEtMC41LDAuMy0wLjksMC41LTEuNGMwLjUtMS41LDEuNi0yLjUsMC43LTYuN2MtMC4xLTAuNy0wLjQtMS0wLjgtMS4xCglDMTMuOCw5LjQsMTMuNSw5LjMsMTMuMyw5LjRMMTMuMyw5LjR6IE0yMy44LDkuNkwyMy44LDkuNmMwLjIsMCwwLjIsMCwwLjMsMGMwLjEsMCwwLjEsMCwwLjIsMC4xYzAuMSwwLDAuMSwwLjEsMC4xLDAuMXYwCgljMCwwLjEsMCwwLjEsMCwwLjJjMCwwLjEtMC4xLDAuMS0wLjEsMC4yYy0wLjEsMC4yLTAuMywwLjMtMC41LDAuM2MtMC4yLDAtMC40LDAtMC41LTAuMWMtMC4xLDAtMC4xLTAuMS0wLjItMC4yCgljMCwwLTAuMS0wLjEtMC4xLTAuMmMwLTAuMSwwLTAuMSwwLjEtMC4yYzAsMCwwLjEtMC4xLDAuMi0wLjFjMC4xLTAuMSwwLjMtMC4xLDAuNS0wLjJDMjMuNyw5LjYsMjMuOCw5LjYsMjMuOCw5LjZMMjMuOCw5LjZ6CgkgTTEzLjQsOS44YzAuMSwwLDAuMSwwLDAuMiwwYzAuMiwwLDAuNCwwLjEsMC41LDAuMmMwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC4xLDAuMSwwLjEsMC4xLDAuMSwwLjJjMCwwLjEsMCwwLjItMC4xLDAuMgoJYy0wLjEsMC4xLTAuMSwwLjEtMC4yLDAuMmMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjJjLTAuMiwwLTAuNC0wLjEtMC42LTAuM2MtMC4xLTAuMS0wLjEtMC4xLTAuMi0wLjJjMC0wLjEtMC4xLTAuMi0wLjEtMC4yCgljMC0wLjEsMC4xLTAuMiwwLjMtMC4zQzEzLjEsOS45LDEzLjMsOS45LDEzLjQsOS44TDEzLjQsOS44eiBNMjUuNSwxOS42TDI1LjUsMTkuNmMtMC4yLDAuMS0wLjQsMC4xLTAuNSwwLjIKCWMtMC4xLDAuMS0wLjMsMC4yLTAuMywwLjNjLTAuMSwwLjItMC4yLDAuNC0wLjEsMC45YzAuMSwwLDAuMSwwLjEsMC4yLDAuMWMwLjIsMC4xLDAuNiwwLjEsMSwwLjFjMC44LDAsMS45LTAuMiwyLjUtMC41CgljMC41LTAuMiwwLjktMC41LDEuMy0wLjhjLTEuOSwwLjQtMi45LDAuMy0zLjYsMEMyNS44LDE5LjgsMjUuNiwxOS44LDI1LjUsMTkuNkwyNS41LDE5LjZ6IE0xNC44LDE5LjhMMTQuOCwxOS44CgljLTAuMSwwLTAuMiwwLTAuNCwwLjNjLTAuNSwwLjUtMC42LDAuOC0xLDEuMmMtMC40LDAuMy0wLjksMC41LTEuOSwwLjdDMTEuMiwyMS45LDExLDIyLDEwLjksMjJjMCwwLDAsMCwwLjEsMC4xCgljMC4xLDAuMSwwLjMsMC4yLDAuNSwwLjJjMC40LDAuMSwxLjEsMC4yLDEuOSwwLjFjMC43LTAuMSwxLjUtMC41LDIuMS0xLjRjMC4xLTAuMiwwLjEtMC40LDAtMC42Yy0wLjEtMC4yLTAuMy0wLjUtMC40LTAuNQoJQzE1LDE5LjgsMTQuOSwxOS44LDE0LjgsMTkuOEwxNC44LDE5Ljh6Ii8+Cjwvc3ZnPgo=",para:"PostgreSQL"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCAxOTIuNzU2IDE5Mi43NTYiPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAiIGQ9Ik0wIDBoMTkyLjc1NnYxOTIuNzU2SDBWMHoiLz48cGF0aCBkPSJNMTIuNjU0IDEyNy4yN2g1LjUyNnYtMjEuODkzbDguNjI5IDE5LjA4OGMuOTc4IDIuMjk1IDIuMzgxIDMuMTQ1IDUuMTAxIDMuMTQ1IDIuNzIxIDAgNC4wMzktLjg1IDUuMDU5LTMuMTQ1bDguNTg3LTE5LjA4OHYyMS44OTNoNS41Njl2LTIxLjg5M2MwLTIuMTI1LS44NS0zLjE0NS0yLjYzNi0zLjY5Ny00LjIwOC0xLjI3NS03LjAxNC0uMTctOC4yODkgMi42NzhsLTguNDYgMTguODc1LTguMTYyLTE4Ljg3NWMtMS4yMzMtMi44NDgtNC4wODItMy45NTMtOC4zMzMtMi42NzgtMS43NDMuNTUzLTIuNTkzIDEuNTcyLTIuNTkzIDMuNjk3djIxLjg5M2guMDAyek01NS43MTcgMTA5LjQ1OWg1LjU2OHYxMi4wMjljLS4wNDIuNjgyLjIxMyAyLjIxMSAzLjIzIDIuMjU0IDEuNTczLjA0MyAxMS45ODggMCAxMi4wNzMgMHYtMTQuMzY5aDUuNTY5djE5LjY4NGMwIDQuODQ2LTUuOTk0IDUuOTA4LTguNzk5IDUuOTUxSDU1Ljg0NHYtMy42OTloMTcuNTU3YzMuNTcxLS4zODMgMy4xNDYtMi4xNjggMy4xNDYtMi43NjRWMTI3LjFINjQuNzcxYy01LjQ4NC0uMDQxLTkuMDEyLTIuNDY1LTkuMDU0LTUuMjI5IDAtLjI1NC4xMjctMTIuMzI4IDAtMTIuNDEyek0xNzUuMTcyIDk1LjUxNWMtMy40LS4wODUtNi4wMzcuMjU1LTguMjQ4IDEuMTktLjYzNy4yNTYtMS42NTguMjU2LTEuNzQyIDEuMDYyLjM0LjM0Mi4zODMuODkzLjY4IDEuMzYxLjUxLjg1IDEuNDAyIDEuOTk4IDIuMjExIDIuNTk0Ljg5My42OCAxLjc4NSAxLjM1OSAyLjcyMSAxLjk1NSAxLjY1OCAxLjAyIDMuNTI3IDEuNjE1IDUuMTQzIDIuNjM1LjkzNi41OTYgMS44NzEgMS4zNjEgMi44MDcgMS45OTguNDY3LjM0Ljc2Ni44OTMgMS4zNTkgMS4xMDV2LS4xMjdjLS4yOTctLjM4My0uMzgxLS45MzYtLjY4LTEuMzYxLS40MjQtLjQyNC0uODUtLjgwNy0xLjI3NS0xLjIzMi0xLjIzMi0xLjY1OC0yLjc2Mi0zLjEwNC00LjQyLTQuMjkzLTEuMzYxLS45MzYtNC4zMzYtMi4yMTEtNC44ODktMy43ODVsLS4wODYtLjA4NGMuOTM2LS4wODQgMi4wNDEtLjQyNCAyLjkzNC0uNjggMS40NDUtLjM4MyAyLjc2NC0uMjk5IDQuMjUtLjY4YTM3Ljc2IDM3Ljc2IDAgMCAwIDIuMDQxLS41OTZ2LS4zODNjLS43NjYtLjc2NS0xLjMxNi0xLjc4Ni0yLjEyNS0yLjUwOC0yLjE2OC0xLjg3LTQuNTQ5LTMuNjk4LTcuMDE0LTUuMjI5LTEuMzE4LS44NS0zLjAyLTEuNDAzLTQuNDIyLTIuMTI1LS41MS0uMjU1LTEuMzU5LS4zODMtMS42NTgtLjgwOC0uNzY2LS45MzYtMS4xODktMi4xNjgtMS43NDItMy4yNzMtMS4yMzItMi4zMzgtMi40MjQtNC45MzEtMy40ODYtNy4zOTYtLjc2Ni0xLjY1OC0xLjIzMi0zLjMxNi0yLjE2OC00Ljg0Ni00LjM3OS03LjIyNy05LjE0MS0xMS42MDUtMTYuNDUxLTE1Ljg5OS0xLjU3NC0uODkzLTMuNDQzLTEuMjc1LTUuNDQxLTEuNzQzLTEuMDYyLS4wNDItMi4xMjUtLjEyNy0zLjE4OS0uMTctLjY4LS4yOTgtMS4zNTktMS4xMDUtMS45NTUtMS40ODgtMi40MjItMS41My04LjY3Mi00Ljg0Ni0xMC40NTctLjQ2Ny0xLjE0OCAyLjc2MyAxLjcwMSA1LjQ4MyAyLjY3OCA2Ljg4Ny43MjMuOTc4IDEuNjU4IDIuMDgzIDIuMTY4IDMuMTg4LjI5Ny43MjIuMzgzIDEuNDg4LjY4IDIuMjUzLjY4MiAxLjg3IDEuMzE4IDMuOTUzIDIuMjExIDUuNjk2LjQ2OS44OTMuOTc5IDEuODI4IDEuNTc0IDIuNjM1LjM0LjQ2OC45MzQuNjggMS4wNjIgMS40NDYtLjU5Ni44NS0uNjM5IDIuMTI1LS45NzkgMy4xODgtMS41MjkgNC44MDQtLjkzNiAxMC43NTUgMS4yMzIgMTQuMjg0LjY4MiAxLjA2MyAyLjI5NyAzLjQwMSA0LjQ2NSAyLjUwOCAxLjkxMi0uNzY1IDEuNDg2LTMuMTg4IDIuMDM5LTUuMzEzLjEyOS0uNTExLjA0My0uODUxLjI5OS0xLjE5di4wODVjLjU5NiAxLjE5IDEuMTg5IDIuMzM4IDEuNzQyIDMuNTI4IDEuMzE4IDIuMDgzIDMuNjEzIDQuMjUxIDUuNTI3IDUuNjk2IDEuMDIuNzY1IDEuODI4IDIuMDgzIDMuMTA0IDIuNTUxdi0uMTI5aC0uMDg2Yy0uMjU2LS4zODEtLjYzNy0uNTUzLS45NzctLjg1LS43NjYtLjc2NS0xLjYxNy0xLjcwMS0yLjIxMS0yLjU1LTEuNzg3LTIuMzgxLTMuMzU5LTUuMDE3LTQuNzYyLTcuNzM3LS42OC0xLjMxNy0xLjI3NS0yLjc2My0xLjgyOC00LjA4MS0uMjU2LS41MS0uMjU2LTEuMjc1LS42OC0xLjUzLS42MzkuOTM1LTEuNTc0IDEuNzQzLTIuMDQxIDIuODktLjgwNyAxLjgyOC0uODkzIDQuMDgxLTEuMTg5IDYuNDE5LS4xNzIuMDQyLS4wODYgMC0uMTcyLjA4NS0xLjM1OS0uMzQtMS44MjYtMS43NDMtMi4zMzgtMi45MzMtMS4yNzUtMy4wMTktMS40ODYtNy44NjUtLjM4MS0xMS4zNS4yOTctLjg5MyAxLjU3Mi0zLjY5OSAxLjA2Mi00LjU0OS0uMjU2LS44MDgtMS4xMDUtMS4yNzUtMS41NzQtMS45MTMtLjU1My0uODA4LTEuMTQ2LTEuODI4LTEuNTI5LTIuNzIxLTEuMDIxLTIuMzgtMS41MzEtNS4wMTYtMi42MzctNy4zOTctLjUxLTEuMTA1LTEuNDAyLTIuMjUzLTIuMTI1LTMuMjczLS44MDctMS4xNDgtMS43MDEtMS45NTYtMi4zMzgtMy4zMTYtLjIxMy0uNDY4LS41MS0xLjIzMy0uMTctMS43NDMuMDg2LS4zNC4yNTQtLjQ2OC41OTYtLjU1Mi41NTMtLjQ2OCAyLjEyNS4xMjcgMi42NzguMzgyIDEuNTcyLjYzOCAyLjg5MSAxLjIzMiA0LjIwOSAyLjEyNS41OTQuNDI1IDEuMjMyIDEuMjMzIDEuOTk4IDEuNDQ2aC44OTNjMS4zNTkuMjk3IDIuODkxLjA4NSA0LjE2Ni40NjcgMi4yNTIuNzIyIDQuMjkzIDEuNzg2IDYuMTIxIDIuOTMzIDUuNTY4IDMuNTI4IDEwLjE2IDguNTQ1IDEzLjI2NCAxNC41MzkuNTEuOTc4LjcyMyAxLjg3IDEuMTg5IDIuODkxLjg5MyAyLjA4MyAxLjk5OCA0LjIwOCAyLjg5MSA2LjI0OS44OTMgMS45OTggMS43NDIgNC4wMzggMy4wMTggNS42OTYuNjM5Ljg5MyAzLjE4OSAxLjM2IDQuMzM2IDEuODI4Ljg1Mi4zODIgMi4xNy43MjMgMi45MzQgMS4xOSAxLjQ0NS44OTMgMi44OTEgMS45MTMgNC4yNTIgMi44OTEuNjc3LjUxMSAyLjgwMiAxLjU3NCAyLjkzMSAyLjQyNHoiLz48cGF0aCBkPSJNMTMxLjgxMSA1OC41NzNjLS43MjMgMC0xLjIzMi4wODUtMS43NDIuMjEydi4wODVoLjA4NGMuMzQuNjguOTM2IDEuMTQ3IDEuMzU5IDEuNzQzLjM0Mi42OC42MzkgMS4zNi45NzkgMi4wNDFsLjA4Ni0uMDg1Yy41OTYtLjQyNi44OTMtMS4xMDUuODkzLTIuMTI2LS4yNTYtLjI5OC0uMjk3LS41OTUtLjUxLS44OTMtLjI1Ny0uNDI0LS44MS0uNjM2LTEuMTQ5LS45Nzd6TTg2LjQxIDEyNy4yN2gxNS45ODNjMS44NzEgMCAzLjY1Ni0uMzgxIDUuMTAyLTEuMDYyIDIuNDI0LTEuMTA1IDMuNTcyLTIuNTkyIDMuNTcyLTQuNTQ5di00LjA4YzAtMS41NzItMS4zMTgtMy4wNjEtMy45NTUtNC4wODItMS4zNTktLjUxLTMuMDYxLS44MDctNC43MTktLjgwN2gtNi43MTZjLTIuMjUzIDAtMy4zMTYtLjY4LTMuNjE0LTIuMTY4LS4wNDItLjE3LS4wNDItLjM0LS4wNDItLjUxdi0yLjUwOGMwLS4xMjkgMC0uMjk5LjA0Mi0uNDY5LjI5OC0xLjE0OC44OTMtMS40NDUgMi44NDktMS42NThoMTYuMzY2di0zLjY5N0g5NS43MTljLTIuMjUzIDAtMy40NDMuMTI3LTQuNTA2LjQ2Ny0zLjI3MyAxLjAyLTQuNzE5IDIuNjM3LTQuNzE5IDUuNDg0djMuMjNjMCAyLjUwOCAyLjgwNiA0LjYzMyA3LjU2NyA1LjE0NS41MS4wNDEgMS4wNjMuMDQxIDEuNjE2LjA0MWg1LjczOWMuMjEzIDAgLjQyNCAwIC41OTYuMDQzIDEuNzQyLjE3IDIuNTA4LjQ2OSAzLjAxOCAxLjEwNS4zNC4zNC40MjQuNjM5LjQyNCAxLjAydjMuMjMyYzAgLjM4MS0uMjU0Ljg5My0uNzY0IDEuMzE2LS41MS40MjYtMS4zMTguNzIzLTIuMzgxLjc2Ni0uMjEzIDAtLjM0LjA0My0uNTUzLjA0M0g4Ni40MXYzLjY5OHpNMTQ1LjY3IDEyMC44NTJjMCAzLjc4MyAyLjg0OCA1LjkwOCA4LjU0MyA2LjMzNC41NTMuMDQzIDEuMDY0LjA4NCAxLjYxNS4wODRoMTQuNDU1di0zLjY5N2gtMTQuNTgyYy0zLjIzIDAtNC40NjMtLjgwOS00LjQ2My0yLjc2NFYxMDEuNjhoLTUuNTY4djE5LjE3MnpNMTE0LjU5NCAxMjEuMDIxdi0xMy4xNzhjMC0zLjM1OSAyLjM4MS01LjQgNy4wMTQtNi4wMzcuNTEtLjA0MyAxLjAyMS0uMDg0IDEuNDg4LS4wODRoMTAuNTQzYy41NTMgMCAxLjAyLjA0MSAxLjU3Mi4wODQgNC42MzUuNjM3IDYuOTczIDIuNjc4IDYuOTczIDYuMDM3djEzLjE3OGMwIDIuNzIxLS45NzkgNC4xNjYtMy4yNzMgNS4xNDVsNS40NDEgNC45M2gtNi40MmwtNC40Mi0zLjk5Ni00LjQ2NS4yNTZoLTUuOTUxYTEyLjkyIDEyLjkyIDAgMCAxLTMuMjMtLjQyNmMtMy41My0uOTc3LTUuMjcyLTIuODQ4LTUuMjcyLTUuOTA5em01Ljk5NC0uMjk2YzAgLjE3LjA4NC4zNC4xMjcuNTUzLjI5OSAxLjUyOSAxLjc0NCAyLjM3OSAzLjk1MyAyLjM3OWg1LjAxOGwtNC41OTItNC4xNjZoNi40MThsNC4wMzkgMy42NTZjLjc2Ni0uNDI2IDEuMjM0LTEuMDIgMS40MDQtMS43ODUuMDQxLS4xNy4wNDEtLjM4My4wNDEtLjU1M3YtMTIuNjI1YzAtLjE3IDAtLjM0LS4wNDEtLjUxLS4yOTktMS40NDUtMS43NDQtMi4yNTQtMy45MTItMi4yNTRoLTguMzc1Yy0yLjQ2NSAwLTQuMDggMS4wNjItNC4wOCAyLjc2NHYxMi41NDF6TTE3Mi44MzQgMTI3LjMxMmguODA3di0zLjEwNGgxLjA2MnYtLjYzN2gtMi45NzV2LjYzN2gxLjEwNXYzLjEwNGguMDAxem02LjE2NCAwaC43NjR2LTMuNzRoLTEuMTQ2bC0uOTM2IDIuNTUxLTEuMDItMi41NTFoLTEuMTA3djMuNzRoLjcyNXYtMi44NDhoLjA0MWwxLjA2MiAyLjg0OGguNTUzbDEuMDY0LTIuODQ4djIuODQ4eiIvPjwvZz48L3N2Zz4K",para:"MySQL"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPg0KPGc+PGcgaWQ9Il94MzVfMTUxZTBjODQ5MmU1MTAzYzA5NmFmODhhNTFmNjU4NCI+PHBhdGggZD0iTTk5MCwyMDQuMmwtMjEuNiwzMi40YzAsMC01NC02MS4xLTE1Mi44LTUwLjRDNzE2LjcsMTk3LDU0Mi4zLDI5Ny43LDUxNS4zLDUxOC45QzQ4OC4zLDc0MCw1OTQuNCw5ODEsNTk0LjQsOTgxSDExNi4xYzAsMC0xMi42LTc5LjEsMTgtMjMwLjJjMzAuNi0xNTEsNzUuNS0yNTEuNywxNTIuOC0zOTUuNkMzNjQuMiwyMTEuNCw0ODguMyw5Mi43LDY2OC4xLDc2LjVDODQ3LjksNjAuNCw5OTAsMjA0LjIsOTkwLDIwNC4yeiBNMjAuOCw3NDAuMUwxMCw4MzBsODguMSwxMC44bDE2LjItOTMuNUwyMC44LDc0MC4xeiBNMTkzLjQsNDcyLjFsLTgyLjctMzIuNGwtMjcsNzUuNWw4NC41LDI3TDE5My40LDQ3Mi4xeiBNMzMzLjcsMjQzLjhsLTYyLjktNDEuNGwtNTAuMyw1NS43bDY0LjcsNDMuMkwzMzMuNywyNDMuOHogTTUxNS4zLDk2LjNsLTQzLjItNDguNmwtNTkuMywzMC42bDQzLjIsNTIuMUw1MTUuMyw5Ni4zeiBNNzA3LjcsNjkuM2wtNy4yLTQ2LjhMNjIzLjIsMTlMNjM0LDcxLjJMNzA3LjcsNjkuM3ogTTkzMi41LDExNy45bC01OS4zLTQzLjJsLTEuOCwzMi40bDUwLjMsMjdMOTMyLjUsMTE3Ljl6IE04NjIuMywyNDAuMmw0OC42LDUuNFYyMjRsLTQ4LjYtMTAuOFYyNDAuMnogTTcwNy43LDIzNi42bDIzLjQsNDMuMWwzNC4yLTI3TDc1OCwyMjRMNzA3LjcsMjM2LjZ6IE02NjkuOSwzNDYuM2wtMzYtNTMuOWwtMzcuOCwzNC4ybDUyLjEsNTcuNUw2NjkuOSwzNDYuM3ogTTUzOC43LDQ4OC4zbDYxLjEsNTIuMmwxNC40LTU5LjNMNTYyLDQ0MS42TDUzOC43LDQ4OC4zeiBNNTMzLjMsNjY4LjFsNzUuNSwzMi40bC0zLjYtNTkuM2wtNjguMy0zNkw1MzMuMyw2NjguMXogTTY3MS43LDg5OC4zbC0zNC4yLTcwLjFoLTc5LjFsMTgsNjQuN0w2NzEuNyw4OTguM3oiLz48L2c+PC9nPg0KPC9zdmc+",para:"Ruby/Ruby On Rails"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzY1TDE3LjU5MiAzLjMyOCAxNC4zMTYgMy4zMjggMTIgNy4zMyAxMiA3LjMzMiA5LjY4OCAzLjMyOCA2LjQwOCAzLjMyOHoiLz48cGF0aCBkPSJNMTguNDYxIDMuMzMyTDEyIDE0LjIzNSA1LjUzOSAzLjMzMiAxLjk5MiAzLjMzMiAxMiAyMC42NzIgMjIuMDA4IDMuMzMyeiIvPjwvc3ZnPg==",para:"VueJS"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPg0KPGc+PHBhdGggZD0iTTIyMS43LDUxMS45YzAtNC4xLTIuMi03LjktNS43LTkuOWwtOTQuNS01NC40Yy0xLjYtMC45LTMuNC0xLjQtNS4yLTEuNWgtMWMtMS44LDAuMS0zLjYsMC42LTUuMiwxLjVMMTUuNyw1MDJjLTMuNSwyLTUuNyw1LjgtNS43LDkuOWwwLjIsMTQ2LjRjMCwyLDEuMSwzLjksMi44LDQuOWMxLjgsMS4xLDMuOSwxLjEsNS43LDBsNTYuMS0zMi4xYzMuNi0yLjEsNS43LTUuOCw1LjctOS45di02OC40YzAtNC4xLDIuMi03LjksNS43LTkuOWwyMy45LTEzLjhjMS44LTEsMy43LTEuNSw1LjctMS41YzEuOSwwLDMuOSwwLjUsNS43LDEuNWwyMy45LDEzLjhjMy41LDIsNS43LDUuOCw1LjcsOS45djY4LjRjMCw0LjEsMi4yLDcuOCw1LjcsOS45bDU2LjEsMzIuMWMxLjgsMS4xLDQsMS4xLDUuNywwYzEuNy0xLDIuOC0yLjksMi44LTQuOUwyMjEuNyw1MTEuOSIvPjxwYXRoIGQ9Ik02NjQuMSw1ODguMmMwLDEtMC41LDItMS40LDIuNWwtMzIuNCwxOC43Yy0wLjksMC41LTIsMC41LTIuOCwwbC0zMi41LTE4LjdjLTAuOS0wLjUtMS40LTEuNS0xLjQtMi41di0zNy41YzAtMSwwLjUtMiwxLjQtMi41bDMyLjQtMTguN2MwLjktMC41LDItMC41LDIuOSwwbDMyLjQsMTguN2MwLjksMC41LDEuNCwxLjQsMS40LDIuNVY1ODguMiBNNjcyLjksMzEwLjdjLTEuOC0xLTMuOS0xLTUuNywwLjFjLTEuNywxLTIuOCwyLjktMi44LDQuOXYxNDVjMCwxLjQtMC44LDIuNy0yLDMuNWMtMS4yLDAuNy0yLjgsMC43LTQsMGwtMjMuNy0xMy42Yy0zLjUtMi03LjktMi0xMS40LDBMNTI4LjgsNTA1Yy0zLjUsMi01LjcsNS44LTUuNyw5LjlWNjI0YzAsNC4xLDIuMiw3LjgsNS43LDkuOWw5NC41LDU0LjZjMy41LDIsNy45LDIsMTEuNCwwbDk0LjUtNTQuNmMzLjUtMiw1LjctNS44LDUuNy05LjlWMzUyLjFjMC00LjEtMi4yLTcuOS01LjktMTBMNjcyLjksMzEwLjd6Ii8+PHBhdGggZD0iTTk4NC4zLDU0OS43YzMuNS0yLDUuNy01LjgsNS43LTkuOXYtMjYuNGMwLTQuMS0yLjItNy44LTUuNy05LjlMODkwLjQsNDQ5Yy0zLjUtMi4xLTcuOS0yLjEtMTEuNCwwbC05NC41LDU0LjVjLTMuNSwyLTUuNyw1LjgtNS43LDkuOXYxMDkuMWMwLDQuMSwyLjIsNy45LDUuOCw5LjlsOTMuOSw1My41YzMuNSwyLDcuNywyLDExLjIsMC4xbDU2LjgtMzEuNmMxLjgtMSwyLjktMi45LDIuOS00LjljMC0yLjEtMS4xLTQtMi45LTVsLTk1LjEtNTQuNmMtMS44LTEtMi45LTIuOS0yLjktNXYtMzQuMmMwLTIsMS4xLTMuOSwyLjktNC45bDI5LjYtMTcuMWMxLjgtMSwzLjktMSw1LjcsMGwyOS42LDE3LjFjMS44LDEsMi45LDIuOSwyLjksNC45djI2LjljMCwyLDEuMSwzLjksMi45LDVjMS44LDEsMy45LDEsNS43LDBMOTg0LjMsNTQ5LjciLz48cGF0aCBkPSJNMzY2LjksNDQ4LjRjMy41LTIsNy45LTIsMTEuNCwwbDk0LjUsNTQuNWMzLjUsMiw1LjcsNS44LDUuNyw5LjlWNjIyYzAsNC4xLTIuMiw3LjgtNS43LDkuOWwtOTQuNSw1NC42Yy0zLjUsMi03LjksMi0xMS40LDBsLTk0LjUtNTQuNmMtMy41LTItNS43LTUuOC01LjctOS45VjUxMi44YzAtNC4xLDIuMi03LjgsNS43LTkuOUwzNjYuOSw0NDguNCIvPjxwYXRoIGQ9Ik04ODQuNCw1OTUuNkw4NjAsNTgxLjV2LTI4LjJsMjQuNC0xNC4xbDI0LjQsMTQuMXYyOC4yTDg4NC40LDU5NS42eiIvPjwvZz4NCjwvc3ZnPg==",para:"NodeJS"},{img:he,para:"Elasticsearch"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=",para:"Multitasking"},{img:M.p+"static/time-management-5f2e1c985f3953cd5c49e708ceb68b53.jpeg",para:"Time management"},{img:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4gPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgLS0+IDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2My40MTQgNjMuNzA3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2My40MTQgNjMuNzA3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxnIGlkPSJjby1mb3VuZGVyLWJ1c2luZXNzLWVudHJlcG5ldXItc3RhcnR1cCI+IDxyZWN0IHg9IjM0LjcwNyIgeT0iOCIgd2lkdGg9IjIiIGhlaWdodD0iMiI+PC9yZWN0PiA8cmVjdCB4PSIxMy43MDciIHk9IjUyLjU4NiIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMzMuODc2MiAyNi4yMTU3KSIgd2lkdGg9IjIiIGhlaWdodD0iMi44MjgiPjwvcmVjdD4gPHBhdGggZD0iTTUzLjQxNCw0MS4yOTNsLTMtM2MtMC4xOTItMC4xOTMtMC40NjgtMC4zMS0wLjcyNy0wLjI5M2MtMC4yNzIsMC4wMDYtMC41MywwLjEyMi0wLjcxNSwwLjMyMmwtMC4xMDgsMC4yNzVMNDgsMzcuNTg2VjM1IGMwLTAuMjY1LTAuMTA1LTAuNTItMC4yOTMtMC43MDdMNDIsMjguNTg2VjIyYzAtMC4yNjUtMC4xMDUtMC41Mi0wLjI5My0wLjcwN0w0MCwxOS41ODZWMThjMCwwLDEtMC40NDgsMS0xdi00Vi0wLjI5M2gtMnYxMkgyNSB2LTEyaC0yVjEzdjRjMCwwLjU1MiwwLDEsMSwxdjEuNTg2bC0zLjcwNywzLjcwN0MyMC4xMDUsMjMuNDgsMjAsMjMuNzM1LDIwLDI0djIuNTg2bC00LjcwNyw0LjcwN0MxNS4xMDUsMzEuNDgsMTUsMzEuNzM1LDE1LDMyIHY1LjU4NmwtMS4xNDYsMWwtMC4zNjYtMC4yOTNjLTAuMzkxLTAuMzkxLTEuMDYtMC4zOTEtMS40NTEsMGwtMy4wMTgsM2wtOS4wMDksOWwxLjQwOSwxLjQxNGw4LjI5MS04LjI5M0wyMC4yOTQsNTRsLTguMjk0LDguMjkzIGwxLjQxNCwxLjQxNGw5LTlsMy0zYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMjUuMTIxLDUwbDEuMDU0LTEuMDU0QzI2LjM0OCw0OC45NzcsMjYuNTI1LDQ5LDI2LjcwNyw0OSBjMC4zOTUsMCwwLjc3LTAuMDgxLDEuMTE2LTAuMjJjMC4zNDYsMS4yNzUsMS41MDEsMi4yMiwyLjg4NCwyLjIyYzEuMDY1LDAsMS45OTctMC43MDksMi41MjktMS41NDggYzAuNDM3LDAuMjQ4LDAuOTM0LDAuMjU1LDEuNDcxLDAuMjU1aDEuNTg2bDAuOTg4LDEuMTM0bC0wLjMwOCwwLjQwN2MtMC4zNjQsMC4zOTUtMC4zNTIsMS4wNDIsMC4wMjgsMS40MjJsMywzLjAxOGw4LDguMDA5IGwxLjQxNC0xLjQwOWwtNy4zMi03LjMxOWwzLjU0Ny0zLjg0Mmw3LjA5NS03LjY4Nkw2Miw1Mi43MDdsMS40MTQtMS40MTRMNTMuNDE0LDQxLjI5M3ogTTM5LDEzLjcwN3YySDI1di0ySDM5eiBNMjEuNzA3LDUyLjU4NiBMMTEuMTIxLDQybDEuNTg2LTEuNTg2TDEzLDQwLjcwN2wxMCwxMEwyMy4yOTMsNTFMMjEuNzA3LDUyLjU4NnogTTE1LjEyMSw0MGwxLjQzOS0xLjI5M0MxNi43NDgsMzguNTIsMTcsMzguMjY1LDE3LDM4di01LjU4NmwzLTMgVjMxYzAsMC4yNjUsMC4xMDUsMC41MiwwLjI5MywwLjcwN0wyNCwzNS40MTRWNDZjMCwwLjcyMiwwLjEyLDEuMzc1LDAuNTQ2LDEuODk0bC0wLjc2NiwwLjY5MkwxNS4xMjEsNDB6IE0zNCw0N1YzMS43MDdoLTJWNDd2MSBjMCwwLjU1MS0wLjQ0OSwxLTEsMXMtMS0wLjQ0OS0xLTF2LTJWMzEuNzA3aC0yVjQ2YzAsMC41NTEtMC40NDksMS0xLDFzLTEtMC40NDktMS0xVjI5LjcwN2gtMnYyLjg3OWwtMi0yVjI4di0ydi0xLjU4NiBsMy43MDctMy43MDdDMjUuODk1LDIwLjUyLDI2LDIwLjI2NSwyNiwyMHYtMi4yOTNoMTJWMjBjMCwwLjI2NSwwLjEwNSwwLjUyLDAuMjkzLDAuNzA3TDQwLDIyLjQxNFY0MmMwLDAuNTUxLTAuNDQ5LDEtMSwxIHMtMS0wLjQ0OS0xLTFWMzEuNzA3aC0yVjQydjVjMCwwLjU1MS0wLjQ0OSwxLTEsMVMzNCw0Ny41NTEsMzQsNDd6IE0zNy40MTQsNDguMjkzYy0wLjAwMy0wLjAwMywwLjE0LTAuMDAzLDAuMTM4LTAuMDA2IEMzNy43NCw0Ny44OTYsMzgsNDcuNDYzLDM4LDQ3di0yLjE4NEMzOCw0NC45MjgsMzguNjQ4LDQ1LDM5LDQ1YzEuNjU0LDAsMy0xLjM0NiwzLTNWMzEuNDE0bDQsNFYzOCBjMCwwLjI2NS0wLjA0MSwwLjUyLDAuMTQ2LDAuNzA3bDEuMjUyLDEuMzI2bC00LjQwNSw0LjgwNWwtNC4zMzgsNC42NzlMMzcuNDE0LDQ4LjI5M3ogTTM5LjIwNSw1MS44NTEgYzAuMDg2LTAuMDUxLDAuMTczLTAuMTAzLDAuMjQxLTAuMTc4bDUuMDA2LTUuNTA3bDUuMjgzLTUuNzIzbDEuNTg0LDEuNTg1bC0zLjU0NywzLjg0M2wtNy4wOTUsNy42ODZsLTEuNTg0LTEuNTg1TDM5LjIwNSw1MS44NTF6ICI+PC9wYXRoPiA8cmVjdCB4PSI1MS4yOTMiIHk9IjQ4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xOS4yMTA3IDUxLjYyMTMpIiB3aWR0aD0iMi44MjgiIGhlaWdodD0iMiI+PC9yZWN0PiA8cGF0aCBkPSJNMzEuNzA3LDU5Yy0zLjM0LDAtNi41ODEtMC42NDctOS42MzQtMS45MjRsLTAuNzcxLDEuODQ2QzI0LjYsNjAuMzAxLDI4LjEwMSw2MSwzMS43MDcsNjEgYzIuODM2LDAsNS42MzEtMC40MzgsOC4zMDctMS4zMDJMMzkuNCw1Ny43OTRDMzYuOTIzLDU4LjU5NCwzNC4zMzQsNTksMzEuNzA3LDU5eiI+PC9wYXRoPiA8cGF0aCBkPSJNNTYuNzA3LDM0YzAsMi4zNDMtMC4zMjMsNC42NjEtMC45NjEsNi44OWwxLjkyMywwLjU1MWMwLjY4OS0yLjQwOCwxLjAzOS00LjkxMiwxLjAzOS03LjQ0IGMwLTEwLjQ0MS02LjExNC0yMC4wNDctMTUuNTc2LTI0LjQ3MWwtMC44NDcsMS44MTJDNTEuMDQ1LDE1LjQzOCw1Ni43MDcsMjQuMzMyLDU2LjcwNywzNHoiPjwvcGF0aD4gPHBhdGggZD0iTTcuNjI0LDQwLjczMUM3LjAxNSwzOC41NTEsNi43MDcsMzYuMjg2LDYuNzA3LDM0YzAtOS42NjgsNS42NjItMTguNTYyLDE0LjQyMy0yMi42NTlsLTAuODQ3LTEuODEyIEMxMC44MjEsMTMuOTUzLDQuNzA3LDIzLjU1OSw0LjcwNywzNGMwLDIuNDY4LDAuMzMzLDQuOTEzLDAuOTksNy4yNjhMNy42MjQsNDAuNzMxeiI+PC9wYXRoPiA8L2c+IDxnIGlkPSJMYXllcl8xIj4gPC9nPiA8L3N2Zz4g",para:"Teamwork"}],promotionHeading:"Next Steps",promotionPara:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",contactSubHeading:"Let's keep in touch",social:[{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIsMi4yNDY3QTEwLjAwMDQyLDEwLjAwMDQyLDAsMCwwLDguODM3NTIsMjEuNzM0MTljLjUuMDg3NTIuNjg3NS0uMjEyNDcuNjg3NS0uNDc1LDAtLjIzNzQ5LS4wMTI1MS0xLjAyNS0uMDEyNTEtMS44NjI0OUM3LDE5Ljg1OTE5LDYuMzUsMTguNzg0MjMsNi4xNSwxOC4yMjE3M0EzLjYzNiwzLjYzNiwwLDAsMCw1LjEyNSwxNi44MDkyYy0uMzUtLjE4NzUtLjg1LS42NS0uMDEyNTEtLjY2MjQ4QTIuMDAxMTcsMi4wMDExNywwLDAsMSw2LjY1LDE3LjE3MTY5YTIuMTM3NDIsMi4xMzc0MiwwLDAsMCwyLjkxMjQ4LjgyNUEyLjEwMzc2LDIuMTAzNzYsMCwwLDEsMTAuMiwxNi42NTkyM2MtMi4yMjUtLjI1LTQuNTUtMS4xMTI1NC00LjU1LTQuOTM3NWEzLjg5MTg3LDMuODkxODcsMCwwLDEsMS4wMjUtMi42ODc1LDMuNTkzNzMsMy41OTM3MywwLDAsMSwuMS0yLjY1cy44Mzc0Ny0uMjYyNTEsMi43NSwxLjAyNWE5LjQyNzQ3LDkuNDI3NDcsMCwwLDEsNSwwYzEuOTEyNDgtMS4zLDIuNzUtMS4wMjUsMi43NS0xLjAyNWEzLjU5MzIzLDMuNTkzMjMsMCwwLDEsLjEsMi42NSwzLjg2OSwzLjg2OSwwLDAsMSwxLjAyNSwyLjY4NzVjMCwzLjgzNzQ3LTIuMzM3NTIsNC42ODc1LTQuNTYyNSw0LjkzNzVhMi4zNjgxNCwyLjM2ODE0LDAsMCwxLC42NzUsMS44NWMwLDEuMzM3NTItLjAxMjUxLDIuNDEyNDgtLjAxMjUxLDIuNzUsMCwuMjYyNTEuMTg3NS41NzUuNjg3NS40NzVBMTAuMDA1MywxMC4wMDUzLDAsMCwwLDEyLDIuMjQ2N1oiLz48L3N2Zz4=",url:"https://github.com/matteomelotti"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6Ii8+PC9zdmc+",url:"https://www.linkedin.com/in/matteo-melotti"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTcuMzQsNS40NmgwYTEuMiwxLjIsMCwxLDAsMS4yLDEuMkExLjIsMS4yLDAsMCwwLDE3LjM0LDUuNDZabTQuNiwyLjQyYTcuNTksNy41OSwwLDAsMC0uNDYtMi40Myw0Ljk0LDQuOTQsMCwwLDAtMS4xNi0xLjc3LDQuNyw0LjcsMCwwLDAtMS43Ny0xLjE1LDcuMyw3LjMsMCwwLDAtMi40My0uNDdDMTUuMDYsMiwxNC43MiwyLDEyLDJzLTMuMDYsMC00LjEyLjA2YTcuMyw3LjMsMCwwLDAtMi40My40N0E0Ljc4LDQuNzgsMCwwLDAsMy42OCwzLjY4LDQuNyw0LjcsMCwwLDAsMi41Myw1LjQ1YTcuMyw3LjMsMCwwLDAtLjQ3LDIuNDNDMiw4Ljk0LDIsOS4yOCwyLDEyczAsMy4wNi4wNiw0LjEyYTcuMyw3LjMsMCwwLDAsLjQ3LDIuNDMsNC43LDQuNywwLDAsMCwxLjE1LDEuNzcsNC43OCw0Ljc4LDAsMCwwLDEuNzcsMS4xNSw3LjMsNy4zLDAsMCwwLDIuNDMuNDdDOC45NCwyMiw5LjI4LDIyLDEyLDIyczMuMDYsMCw0LjEyLS4wNmE3LjMsNy4zLDAsMCwwLDIuNDMtLjQ3LDQuNyw0LjcsMCwwLDAsMS43Ny0xLjE1LDQuODUsNC44NSwwLDAsMCwxLjE2LTEuNzcsNy41OSw3LjU5LDAsMCwwLC40Ni0yLjQzYzAtMS4wNi4wNi0xLjQuMDYtNC4xMlMyMiw4Ljk0LDIxLjk0LDcuODhaTTIwLjE0LDE2YTUuNjEsNS42MSwwLDAsMS0uMzQsMS44NiwzLjA2LDMuMDYsMCwwLDEtLjc1LDEuMTUsMy4xOSwzLjE5LDAsMCwxLTEuMTUuNzUsNS42MSw1LjYxLDAsMCwxLTEuODYuMzRjLTEsLjA1LTEuMzcuMDYtNCwuMDZzLTMsMC00LS4wNkE1LjczLDUuNzMsMCwwLDEsNi4xLDE5LjgsMy4yNywzLjI3LDAsMCwxLDUsMTkuMDVhMywzLDAsMCwxLS43NC0xLjE1QTUuNTQsNS41NCwwLDAsMSwzLjg2LDE2YzAtMS0uMDYtMS4zNy0uMDYtNHMwLTMsLjA2LTRBNS41NCw1LjU0LDAsMCwxLDQuMjEsNi4xLDMsMywwLDAsMSw1LDUsMy4xNCwzLjE0LDAsMCwxLDYuMSw0LjIsNS43Myw1LjczLDAsMCwxLDgsMy44NmMxLDAsMS4zNy0uMDYsNC0uMDZzMywwLDQsLjA2YTUuNjEsNS42MSwwLDAsMSwxLjg2LjM0QTMuMDYsMy4wNiwwLDAsMSwxOS4wNSw1LDMuMDYsMy4wNiwwLDAsMSwxOS44LDYuMSw1LjYxLDUuNjEsMCwwLDEsMjAuMTQsOGMuMDUsMSwuMDYsMS4zNy4wNiw0UzIwLjE5LDE1LDIwLjE0LDE2Wk0xMiw2Ljg3QTUuMTMsNS4xMywwLDEsMCwxNy4xNCwxMiw1LjEyLDUuMTIsMCwwLDAsMTIsNi44N1ptMCw4LjQ2QTMuMzMsMy4zMywwLDEsMSwxNS4zMywxMiwzLjMzLDMuMzMsMCwwLDEsMTIsMTUuMzNaIi8+PC9zdmc+",url:"https://www.instagram.com/matteo__melotti"},{img:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIzIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDI4OGgtMzJ2LTY0aDMydjY0em0yODgtMTI4djE5MkgyODh2MzJIMTYwdi0zMkgwVjE2MGg1NzZ6bS00MTYgMzJIMzJ2MTI4aDY0di05NmgzMnY5NmgzMlYxOTJ6bTE2MCAwSDE5MnYxNjBoNjR2LTMyaDY0VjE5MnptMjI0IDBIMzUydjEyOGg2NHYtOTZoMzJ2OTZoMzJ2LTk2aDMydjk2aDMyVjE5MnoiLz48L3N2Zz4=",url:"https://npmjs.com/~maaatt"}]};var ke=()=>a.createElement("div",{className:"secion",id:"about"},a.createElement("div",{className:"container about-container"},a.createElement(be,{bottom:!0,cascade:!0},a.createElement("span",{className:"head"},"ABOUT ME")),a.createElement("div",{className:"about-section"},a.createElement("div",{className:"content"},a.createElement("h3",{className:"light"},"Hi, I'm Matteo Melotti, a Web Developer from Verona ",a.createElement("span",{role:"img","aria-label":"Emoji"},"🇮🇹"),"  currently working at"," ",a.createElement("a",{href:"https://www.devinterface.com",rel:"noopener noreferrer",target:"_blank"},a.createElement("b",null,"DevInterface")),"."),a.createElement("h3",{className:"light"},"I am much interested in technology and coding and I try to stay updated with the latest languages and libraries."),a.createElement("h3",{className:"light"},"When I'm not working, I enjoy trailing with my bike or work out at gym."),a.createElement("h3",{className:"light"},"You can find me on"," ",a.createElement("a",{href:"https://www.linkedin.com/in/matteo-melotti",rel:"noopener noreferrer",target:"_blank"},a.createElement("b",null,"Linkedin"))," ","and"," ",a.createElement("a",{href:"https://github.com/matteomelotti",rel:"noopener noreferrer",target:"_blank"},a.createElement("b",null,"GitHub")),".")),a.createElement("div",{className:"image-wrapper"},a.createElement("img",{className:"about-me-img",src:Ye.aboutImage,alt:"about"})))));var ve=()=>a.createElement("div",{className:"section",id:"home"},a.createElement("div",{className:"container"},a.createElement("div",{className:"header-wrapper"},a.createElement(be,{bottom:!0},a.createElement("h2",null,"Hi, I'm ",Ye.name," ",a.createElement("span",{role:"img","aria-label":"Emoji"},"👋"))),a.createElement(be,{cascade:!0},a.createElement("div",{className:"heading-wrapper"},a.createElement("h1",null,Ye.headerTagline[0]?Ye.headerTagline[0]:"Building digital"),a.createElement("h1",null," ",Ye.headerTagline[1]?Ye.headerTagline[1]:"products, brands"),a.createElement("h1",null," ",Ye.headerTagline[2]?Ye.headerTagline[2]:"and experience"))),a.createElement(be,{cascade:!0},a.createElement("h2",null,Ye.headerParagraph)),a.createElement(be,{cascade:!0},a.createElement("a",{href:"mailto:"+(Ye.contactEmail?Ye.contactEmail:"matteo.melotti11@gmail.com")},a.createElement("p",{className:"primary-btn"},"CONNECT WITH ME"))))));var Qe=()=>a.createElement("div",{className:"section"},a.createElement("div",{className:"container"},a.createElement("div",{className:"skills-container"},a.createElement("span",{className:"head"},"MAIN SKILLS"),a.createElement("div",{className:"skills-grid"},Ye.skills.map(((t,e)=>a.createElement("div",{className:"skill",key:e},a.createElement("img",{src:t.img,alt:"css"}),a.createElement("p",null,t.para)))))))),Ue=M(9583),Ze=M(5434),We="Experience-module--box--85514",Pe="Experience-module--container--1aa36",Ge="Experience-module--head--2d782",Ve="Experience-module--label--9ad97",Re="Experience-module--row--58f34",He="Experience-module--row_md_12--3b7bb",Be="Experience-module--timeline_centered--49afc",Je="Experience-module--timeline_entry--43d80",Fe="Experience-module--timeline_entry_inner--56192",Xe="Experience-module--timeline_icon--33d78",_e="Experience-module--timeline_icon_2--3642b",$e="Experience-module--timeline_icon_3--7ca26",Ke="Experience-module--timeline_icon_5--64ad6";var qe=()=>a.createElement("div",{className:"section",id:"work"},a.createElement("div",{className:"container"},a.createElement("div",{className:"work-wrapper"},a.createElement("span",{className:Ge},"MY JOURNEY"),a.createElement("div",{className:We,id:"education"},a.createElement("section",{className:Pe},a.createElement("div",{className:r.container_content},a.createElement("div",{className:Re},a.createElement("div",{className:He},a.createElement("div",{className:Be},a.createElement(be,{bottom:!0},a.createElement("article",{className:Je},a.createElement("div",{className:Xe+" "+Ke},a.createElement(Ze.CvH,null)),a.createElement("div",{className:Ve},a.createElement("h2",null,"Experience"," ",a.createElement("span",null,"December 2016 - Present")),a.createElement("p",null,"I am currently working as"," ",a.createElement("b",null,"Web Developer")," at"," ",a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.devinterface.com/"},a.createElement("b",null,"DevInterface"))," ","where I develop and mantain web apps with the following technologies:"),a.createElement("li",null,"Framework and solutions: Ruby on Rails (RoR), Node.js, Express, Spree e-commerce, ActiveAdmin, Redis, Elasticsearch"),a.createElement("li",null,"Frontend: ReactJS, Vue.js, CSS3, Jquery, Bootstrap, basics of Typescript"),a.createElement("li",null,"Database: MySQL, PostgreSQL, MongoDB"),a.createElement("li",null,"Software versioning: GIT")))),a.createElement(be,{bottom:!0},a.createElement("article",{className:Je},a.createElement("div",{className:Xe+" "+Ke},a.createElement(Ze.CvH,null)),a.createElement("div",{className:Ve},a.createElement("h2",null,"Experience"," ",a.createElement("span",null,"June 2016 - November 2016")),a.createElement("p",null,"I started my developer carreer at"," ",a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.bluemilkdigital.it/en"},a.createElement("b",null,"BlueMilk"))," ","where I first approached coding challenges and where I:"),a.createElement("li",null,"Developed management software"),a.createElement("li",null,"Developed single-page applications for iOS and Android smartphones and tablets."),a.createElement("li",null,"Developed landing pages with responsive design")))),a.createElement(be,{bottom:!0},a.createElement("article",{className:Je},a.createElement("div",{className:Xe},a.createElement(Ze.eAf,null)),a.createElement("div",{className:Ve},a.createElement("h2",null,"University ",a.createElement("span",null,"2015")),a.createElement("p",null,"I completed my bachelor degree in Astronomy (Computer Science and Engineering) from"," ",a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.unipd.it/en/"},a.createElement("b",null,"University of Padua")),"."),a.createElement("p",null,"The core topics were Statistics, Mathematics, Physics, Astrophysics, Astronomy and Quantum Physics")))),a.createElement(be,{bottom:!0},a.createElement("article",{className:Je},a.createElement("div",{className:Xe+" "+_e},a.createElement(Ue.VI,null)),a.createElement("div",{className:Ve},a.createElement("h2",null,"High School ",a.createElement("span",null,"2006")),a.createElement("p",null,"I completed my higher education in Informatics from"," ",a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.marconiverona.edu.it/"},a.createElement("b",null,"ITIS G.Marconi"))," ","with major subjects as Programming languages (Java, PHP), SQL and computer network bases.")),a.createElement("div",{className:Fe},a.createElement("div",{className:$e||r.color_none})))))))))))));var tM=()=>a.createElement("div",{className:"section",id:"contact"},a.createElement("div",{className:"container"},a.createElement("div",{className:"footer-container"},a.createElement(be,{bottom:!0,cascade:!0},a.createElement("h1",null,"Contact"),a.createElement("h2",null,Ye.contactSubHeading)),a.createElement("a",{className:"email-link",href:"mailto:"+Ye.contactEmail},Ye.contactEmail),a.createElement("div",{className:"social-icons"},Ye.social.map(((t,e)=>a.createElement("a",{key:e,href:t.url,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{src:t.img,alt:"icons"}))))))));var eM=()=>a.createElement(i.Z,null,a.createElement(n.Z,{title:"Matteo Melotti Website"}),a.createElement(ve,null),a.createElement(ke,null),a.createElement(Qe,null),a.createElement(qe,null),a.createElement(tM,null))},8679:function(t,e,M){"use strict";var r=M(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n={};function s(t){return r.isMemo(t)?i:n[t.$$typeof]||a}n[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n[r.Memo]=i;var u=Object.defineProperty,o=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,N=Object.getPrototypeOf,y=Object.prototype;t.exports=function t(e,M,r){if("string"!=typeof M){if(y){var a=N(M);a&&a!==y&&t(e,a,r)}var i=o(M);j&&(i=i.concat(j(M)));for(var n=s(e),w=s(M),l=0;l<i.length;++l){var D=i[l];if(!(L[D]||r&&r[D]||w&&w[D]||n&&n[D])){var m=c(M,D);try{u(e,D,m)}catch(g){}}}}return e}},4415:function(t,e){"use strict";var M,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),o=Symbol.for("react.server_context"),j=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),l=Symbol.for("react.offscreen");function D(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case L:case n:case i:case c:case N:return t;default:switch(t=t&&t.$$typeof){case o:case u:case j:case w:case y:case s:return t;default:return e}}case a:return e}}}M=Symbol.for("react.module.reference"),e.isFragment=function(t){return D(t)===L}},4954:function(t,e,M){"use strict";t.exports=M(4415)},4405:function(t,e,M){"use strict";M.d(e,{w_:function(){return u}});var r=M(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=r.createContext&&r.createContext(a),i=function(){return i=Object.assign||function(t){for(var e,M=1,r=arguments.length;M<r;M++)for(var a in e=arguments[M])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)},n=function(t,e){var M={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(M[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(M[r[a]]=t[r[a]])}return M};function s(t){return t&&t.map((function(t,e){return r.createElement(t.tag,i({key:e},t.attr),s(t.child))}))}function u(t){return function(e){return r.createElement(o,i({attr:i({},t.attr)},e),s(t.child))}}function o(t){var e=function(e){var M,a=t.attr,L=t.size,s=t.title,u=n(t,["attr","size","title"]),o=L||e.size||"1em";return e.className&&(M=e.className),t.className&&(M=(M?M+" ":"")+t.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,u,{className:M,style:i(i({color:t.color||e.color},e.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),t.children)};return void 0!==L?r.createElement(L.Consumer,null,(function(t){return e(t)})):e(a)}},9921:function(t,e){"use strict";var M="function"==typeof Symbol&&Symbol.for,r=M?Symbol.for("react.element"):60103,a=M?Symbol.for("react.portal"):60106,L=M?Symbol.for("react.fragment"):60107,i=M?Symbol.for("react.strict_mode"):60108,n=M?Symbol.for("react.profiler"):60114,s=M?Symbol.for("react.provider"):60109,u=M?Symbol.for("react.context"):60110,o=M?Symbol.for("react.async_mode"):60111,j=M?Symbol.for("react.concurrent_mode"):60111,c=M?Symbol.for("react.forward_ref"):60112,N=M?Symbol.for("react.suspense"):60113,y=M?Symbol.for("react.suspense_list"):60120,w=M?Symbol.for("react.memo"):60115,l=M?Symbol.for("react.lazy"):60116,D=M?Symbol.for("react.block"):60121,m=M?Symbol.for("react.fundamental"):60117,g=M?Symbol.for("react.responder"):60118,I=M?Symbol.for("react.scope"):60119;function T(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case o:case j:case L:case n:case i:case N:return t;default:switch(t=t&&t.$$typeof){case u:case c:case l:case w:case s:return t;default:return e}}case a:return e}}}function d(t){return T(t)===j}e.AsyncMode=o,e.ConcurrentMode=j,e.ContextConsumer=u,e.ContextProvider=s,e.Element=r,e.ForwardRef=c,e.Fragment=L,e.Lazy=l,e.Memo=w,e.Portal=a,e.Profiler=n,e.StrictMode=i,e.Suspense=N,e.isAsyncMode=function(t){return d(t)||T(t)===o},e.isConcurrentMode=d,e.isContextConsumer=function(t){return T(t)===u},e.isContextProvider=function(t){return T(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return T(t)===c},e.isFragment=function(t){return T(t)===L},e.isLazy=function(t){return T(t)===l},e.isMemo=function(t){return T(t)===w},e.isPortal=function(t){return T(t)===a},e.isProfiler=function(t){return T(t)===n},e.isStrictMode=function(t){return T(t)===i},e.isSuspense=function(t){return T(t)===N},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===L||t===j||t===n||t===i||t===N||t===y||"object"==typeof t&&null!==t&&(t.$$typeof===l||t.$$typeof===w||t.$$typeof===s||t.$$typeof===u||t.$$typeof===c||t.$$typeof===m||t.$$typeof===g||t.$$typeof===I||t.$$typeof===D)},e.typeOf=T},9864:function(t,e,M){"use strict";t.exports=M(9921)},434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var M=arguments[e];for(var r in M)Object.prototype.hasOwnProperty.call(M,r)&&(t[r]=M[r])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-0aec43e2b5c512b15a03.js.map