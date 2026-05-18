(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},rl={},qs={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),Sc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),jo=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eu=Object.assign,tu={};function on(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||bs}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nu(){}nu.prototype=on.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=tu,this.updater=n||bs}var Gi=Hi.prototype=new nu;Gi.constructor=Hi;eu(Gi,on.prototype);Gi.isPureReactComponent=!0;var Bo=Array.isArray,ru=Object.prototype.hasOwnProperty,Vi={current:null},lu={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ru.call(t,r)&&!lu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Xn,type:e,key:i,ref:o,props:l,_owner:Vi.current}}function Ec(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function kc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kc(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xn:case dc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+El(o,0):r,Bo(l)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Yi(l)&&(l=Ec(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Uo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Bo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+El(i,s);o+=wr(i,t,n,u,l)}else if(u=_c(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+El(i,s++),o+=wr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},_r={transition:null},Cc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:_r,ReactCurrentOwner:Vi};function ou(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=on;O.Fragment=fc;O.Profiler=hc;O.PureComponent=Hi;O.StrictMode=pc;O.Suspense=vc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;O.act=ou;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Vi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ru.call(t,u)&&!lu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Xn,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};O.createElement=iu;O.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:gc,render:e}};O.isValidElement=Yi;O.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:xc}};O.memo=function(e,t){return{$$typeof:Sc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};O.unstable_act=ou;O.useCallback=function(e,t){return ue.current.useCallback(e,t)};O.useContext=function(e){return ue.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};O.useEffect=function(e,t){return ue.current.useEffect(e,t)};O.useId=function(){return ue.current.useId()};O.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ue.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};O.useRef=function(e){return ue.current.useRef(e)};O.useState=function(e){return ue.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ue.current.useTransition()};O.version="18.3.1";qs.exports=O;var re=qs.exports;const Tc=cc(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc=re,Ac=Symbol.for("react.element"),Rc=Symbol.for("react.fragment"),Oc=Object.prototype.hasOwnProperty,Ic=Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dc={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Oc.call(t,r)&&!Dc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ac,type:e,key:i,ref:o,props:l,_owner:Ic.current}}rl.Fragment=Rc;rl.jsx=su;rl.jsxs=su;Js.exports=rl;var v=Js.exports,Zl={},uu={exports:{}},Se={},au={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,A){var R=x.length;x.push(A);e:for(;0<R;){var G=R-1>>>1,X=x[G];if(0<l(X,A))x[G]=A,x[R]=X,R=G;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var A=x[0],R=x.pop();if(R!==A){x[0]=R;e:for(var G=0,X=x.length,er=X>>>1;G<er;){var yt=2*(G+1)-1,_l=x[yt],gt=yt+1,tr=x[gt];if(0>l(_l,R))gt<X&&0>l(tr,_l)?(x[G]=tr,x[gt]=R,G=gt):(x[G]=_l,x[yt]=R,G=yt);else if(gt<X&&0>l(tr,R))x[G]=tr,x[gt]=R,G=gt;else break e}}return A}function l(x,A){var R=x.sortIndex-A.sortIndex;return R!==0?R:x.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],c=[],p=1,m=null,h=3,S=!1,w=!1,_=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=x)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function y(x){if(_=!1,f(x),!w)if(n(u)!==null)w=!0,Sl(E);else{var A=n(c);A!==null&&wl(y,A.startTime-x)}}function E(x,A){w=!1,_&&(_=!1,d(N),N=-1),S=!0;var R=h;try{for(f(A),m=n(u);m!==null&&(!(m.expirationTime>A)||x&&!Ne());){var G=m.callback;if(typeof G=="function"){m.callback=null,h=m.priorityLevel;var X=G(m.expirationTime<=A);A=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(u)&&r(u),f(A)}else r(u);m=n(u)}if(m!==null)var er=!0;else{var yt=n(c);yt!==null&&wl(y,yt.startTime-A),er=!1}return er}finally{m=null,h=R,S=!1}}var T=!1,C=null,N=-1,H=5,I=-1;function Ne(){return!(e.unstable_now()-I<H)}function an(){if(C!==null){var x=e.unstable_now();I=x;var A=!0;try{A=C(!0,x)}finally{A?cn():(T=!1,C=null)}}else T=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var zo=new MessageChannel,ac=zo.port2;zo.port1.onmessage=an,cn=function(){ac.postMessage(null)}}else cn=function(){L(an,0)};function Sl(x){C=x,T||(T=!0,cn())}function wl(x,A){N=L(function(){x(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,Sl(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var R=h;h=A;try{return x()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var R=h;h=x;try{return A()}finally{h=R}},e.unstable_scheduleCallback=function(x,A,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,x){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=R+X,x={id:p++,callback:A,priorityLevel:x,startTime:R,expirationTime:X,sortIndex:-1},R>G?(x.sortIndex=R,t(c,x),n(u)===null&&x===n(c)&&(_?(d(N),N=-1):_=!0,wl(y,R-G))):(x.sortIndex=X,t(u,x),w||S||(w=!0,Sl(E))),x},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(x){var A=h;return function(){var R=h;h=A;try{return x.apply(this,arguments)}finally{h=R}}}})(cu);au.exports=cu;var Pc=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=re,ve=Pc;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var du=new Set,Dn={};function It(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Dn[e]=t,e=0;e<t.length;e++)du.add(t[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,Fc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wo={},Ho={};function Mc(e){return Jl.call(Ho,e)?!0:Jl.call(Wo,e)?!1:Fc.test(e)?Ho[e]=!0:(Wo[e]=!0,!1)}function $c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zc(e,t,n,r){if(t===null||typeof t>"u"||$c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qi,Ki);ee[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qi,Ki);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qi,Ki);ee[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zc(t,n,l,r)&&(n=null),r||l===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),Zi=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),fu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),Ji=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),qi=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),hu=Symbol.for("react.offscreen"),Go=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Go&&e[Go]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,kl;function Sn(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var xl=!1;function Cl(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function jc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Lt:return"Portal";case ql:return"Profiler";case Zi:return"StrictMode";case bl:return"Suspense";case ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case fu:return(e._context.displayName||"Context")+".Provider";case Ji:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qi:return t=e.displayName||null,t!==null?t:ti(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ti(e(t))}catch{}}return null}function Bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ti(t);case 8:return t===Zi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uc(e){var t=mu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Uc(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function ri(e,t){gu(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?li(e,t.type,n):t.hasOwnProperty("defaultValue")&&li(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function li(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(wn(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function vu(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function _u(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=_u(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ai=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,Qt=null,Kt=null;function Xo(e){if(e=qn(e)){if(typeof ci!="function")throw Error(g(280));var t=e.stateNode;t&&(t=ul(t),ci(e.stateNode,e.type,t))}}function ku(e){Qt?Kt?Kt.push(e):Kt=[e]:Qt=e}function xu(){if(Qt){var e=Qt,t=Kt;if(Kt=Qt=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function Cu(e,t){return e(t)}function Tu(){}var Tl=!1;function Nu(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return Cu(e,t,n)}finally{Tl=!1,(Qt!==null||Kt!==null)&&(Tu(),xu())}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var di=!1;if(Ve)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){di=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{di=!1}function Gc(e,t,n,r,l,i,o,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var xn=!1,Pr=null,Lr=!1,fi=null,Vc={onError:function(e){xn=!0,Pr=e}};function Yc(e,t,n,r,l,i,o,s,u){xn=!1,Pr=null,Gc.apply(Vc,arguments)}function Qc(e,t,n,r,l,i,o,s,u){if(Yc.apply(this,arguments),xn){if(xn){var c=Pr;xn=!1,Pr=null}else throw Error(g(198));Lr||(Lr=!0,fi=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Au(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Dt(e)!==e)throw Error(g(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function Ru(e){return e=Kc(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Iu=ve.unstable_scheduleCallback,Jo=ve.unstable_cancelCallback,Xc=ve.unstable_shouldYield,Zc=ve.unstable_requestPaint,V=ve.unstable_now,Jc=ve.unstable_getCurrentPriorityLevel,eo=ve.unstable_ImmediatePriority,Du=ve.unstable_UserBlockingPriority,Fr=ve.unstable_NormalPriority,qc=ve.unstable_LowPriority,Pu=ve.unstable_IdlePriority,ll=null,ze=null;function bc(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var or=64,sr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=_n(s):(i&=o,i!==0&&(r=_n(i)))}else o=n&~l,o!==0?r=_n(o):i!==0&&(r=_n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=rd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function id(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var P=0;function Fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,no,$u,zu,ju,hi=!1,ur=[],rt=null,lt=null,it=null,Fn=new Map,Mn=new Map,be=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sd(e,t,n,r,l){switch(t){case"focusin":return rt=pn(rt,e,t,n,r,l),!0;case"dragenter":return lt=pn(lt,e,t,n,r,l),!0;case"mouseover":return it=pn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,pn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Mn.set(i,pn(Mn.get(i)||null,e,t,n,r,l)),!0}return!1}function Bu(e){var t=_t(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Au(n),t!==null){e.blockedOn=t,ju(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Er(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ai=r,n.target.dispatchEvent(r),ai=null}else return t=qn(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function bo(e,t,n){Er(e)&&n.delete(t)}function ud(){hi=!1,rt!==null&&Er(rt)&&(rt=null),lt!==null&&Er(lt)&&(lt=null),it!==null&&Er(it)&&(it=null),Fn.forEach(bo),Mn.forEach(bo)}function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ud)))}function $n(e){function t(l){return hn(l,e)}if(0<ur.length){hn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&hn(rt,e),lt!==null&&hn(lt,e),it!==null&&hn(it,e),Fn.forEach(t),Mn.forEach(t),n=0;n<be.length;n++)r=be[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(n=be[0],n.blockedOn===null);)Bu(n),n.blockedOn===null&&be.shift()}var Xt=Xe.ReactCurrentBatchConfig,$r=!0;function ad(e,t,n,r){var l=P,i=Xt.transition;Xt.transition=null;try{P=1,ro(e,t,n,r)}finally{P=l,Xt.transition=i}}function cd(e,t,n,r){var l=P,i=Xt.transition;Xt.transition=null;try{P=4,ro(e,t,n,r)}finally{P=l,Xt.transition=i}}function ro(e,t,n,r){if($r){var l=mi(e,t,n,r);if(l===null)$l(e,t,r,zr,n),qo(e,r);else if(sd(l,e,t,n,r))r.stopPropagation();else if(qo(e,r),t&4&&-1<od.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Mu(i),i=mi(e,t,n,r),i===null&&$l(e,t,r,zr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var zr=null;function mi(e,t,n,r){if(zr=null,e=bi(r),e=_t(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Au(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zr=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case eo:return 1;case Du:return 4;case Fr:case qc:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var tt=null,lo=null,kr=null;function Wu(){if(kr)return kr;var e,t=lo,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function es(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:es,this.isPropagationStopped=es,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=we(sn),Jn=U({},sn,{view:0,detail:0}),dd=we(Jn),Al,Rl,mn,il=U({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Al=e.screenX-mn.screenX,Rl=e.screenY-mn.screenY):Rl=Al=0,mn=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ts=we(il),fd=U({},il,{dataTransfer:0}),pd=we(fd),hd=U({},Jn,{relatedTarget:0}),Ol=we(hd),md=U({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=we(md),gd=U({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vd=we(gd),Sd=U({},sn,{data:0}),ns=we(Sd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ed[e])?!!t[e]:!1}function oo(){return kd}var xd=U({},Jn,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=we(xd),Td=U({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=we(Td),Nd=U({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Ad=we(Nd),Rd=U({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=we(Rd),Id=U({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=we(Id),Pd=[9,13,27,32],so=Ve&&"CompositionEvent"in window,Cn=null;Ve&&"documentMode"in document&&(Cn=document.documentMode);var Ld=Ve&&"TextEvent"in window&&!Cn,Hu=Ve&&(!so||Cn&&8<Cn&&11>=Cn),ls=" ",is=!1;function Gu(e,t){switch(e){case"keyup":return Pd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Fd(e,t){switch(e){case"compositionend":return Vu(t);case"keypress":return t.which!==32?null:(is=!0,ls);case"textInput":return e=t.data,e===ls&&is?null:e;default:return null}}function Md(e,t){if(Mt)return e==="compositionend"||!so&&Gu(e,t)?(e=Wu(),kr=lo=tt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hu&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$d[e.type]:t==="textarea"}function Yu(e,t,n,r){ku(r),t=jr(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,zn=null;function zd(e){ra(e,0)}function ol(e){var t=jt(e);if(yu(t))return e}function jd(e,t){if(e==="change")return t}var Qu=!1;if(Ve){var Il;if(Ve){var Dl="oninput"in document;if(!Dl){var ss=document.createElement("div");ss.setAttribute("oninput","return;"),Dl=typeof ss.oninput=="function"}Il=Dl}else Il=!1;Qu=Il&&(!document.documentMode||9<document.documentMode)}function us(){Tn&&(Tn.detachEvent("onpropertychange",Ku),zn=Tn=null)}function Ku(e){if(e.propertyName==="value"&&ol(zn)){var t=[];Yu(t,zn,e,bi(e)),Nu(zd,t)}}function Bd(e,t,n){e==="focusin"?(us(),Tn=t,zn=n,Tn.attachEvent("onpropertychange",Ku)):e==="focusout"&&us()}function Ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(zn)}function Wd(e,t){if(e==="click")return ol(t)}function Hd(e,t){if(e==="input"||e==="change")return ol(t)}function Gd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:Gd;function jn(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Jl.call(t,l)||!Le(e[l],t[l]))return!1}return!0}function as(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cs(e,t){var n=as(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=as(n)}}function Xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vd(e){var t=Zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xu(n.ownerDocument.documentElement,n)){if(r!==null&&uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=cs(n,i);var o=cs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=Ve&&"documentMode"in document&&11>=document.documentMode,$t=null,yi=null,Nn=null,gi=!1;function ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||$t==null||$t!==Dr(r)||(r=$t,"selectionStart"in r&&uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&jn(Nn,r)||(Nn=r,r=jr(yi,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zt={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Pl={},Ju={};Ve&&(Ju=document.createElement("div").style,"AnimationEvent"in window||(delete zt.animationend.animation,delete zt.animationiteration.animation,delete zt.animationstart.animation),"TransitionEvent"in window||delete zt.transitionend.transition);function sl(e){if(Pl[e])return Pl[e];if(!zt[e])return e;var t=zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ju)return Pl[e]=t[n];return e}var qu=sl("animationend"),bu=sl("animationiteration"),ea=sl("animationstart"),ta=sl("transitionend"),na=new Map,fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){na.set(e,t),It(t,[e])}for(var Ll=0;Ll<fs.length;Ll++){var Fl=fs[Ll],Qd=Fl.toLowerCase(),Kd=Fl[0].toUpperCase()+Fl.slice(1);pt(Qd,"on"+Kd)}pt(qu,"onAnimationEnd");pt(bu,"onAnimationIteration");pt(ea,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(ta,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));It("onBeforeInput",["compositionend","keypress","textInput","paste"]);It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function ps(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function ra(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ps(l,s,c),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ps(l,s,c),i=u}}}if(Lr)throw e=fi,Lr=!1,fi=null,e}function M(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(la(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),la(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[dr]){e[dr]=!0,du.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ml("selectionchange",!1,t))}}function la(e,t,n,r){switch(Uu(t)){case 1:var l=ad;break;case 4:l=cd;break;default:l=ro}n=l.bind(null,t,n,e),l=void 0,!di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Nu(function(){var c=i,p=bi(n),m=[];e:{var h=na.get(e);if(h!==void 0){var S=io,w=e;switch(e){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":S=Cd;break;case"focusin":w="focus",S=Ol;break;case"focusout":w="blur",S=Ol;break;case"beforeblur":case"afterblur":S=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ad;break;case qu:case bu:case ea:S=yd;break;case ta:S=Od;break;case"scroll":S=dd;break;case"wheel":S=Dd;break;case"copy":case"cut":case"paste":S=vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=rs}var _=(t&4)!==0,L=!_&&e==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var a=c,f;a!==null;){f=a;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Ln(a,d),y!=null&&_.push(Un(a,y,f)))),L)break;a=a.return}0<_.length&&(h=new S(h,w,null,n,p),m.push({event:h,listeners:_}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&n!==ai&&(w=n.relatedTarget||n.fromElement)&&(_t(w)||w[Ye]))break e;if((S||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?_t(w):null,w!==null&&(L=Dt(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(_=ts,y="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(_=rs,y="onPointerLeave",d="onPointerEnter",a="pointer"),L=S==null?h:jt(S),f=w==null?h:jt(w),h=new _(y,a+"leave",S,n,p),h.target=L,h.relatedTarget=f,y=null,_t(p)===c&&(_=new _(d,a+"enter",w,n,p),_.target=f,_.relatedTarget=L,y=_),L=y,S&&w)t:{for(_=S,d=w,a=0,f=_;f;f=Pt(f))a++;for(f=0,y=d;y;y=Pt(y))f++;for(;0<a-f;)_=Pt(_),a--;for(;0<f-a;)d=Pt(d),f--;for(;a--;){if(_===d||d!==null&&_===d.alternate)break t;_=Pt(_),d=Pt(d)}_=null}else _=null;S!==null&&hs(m,h,S,_,!1),w!==null&&L!==null&&hs(m,L,w,_,!0)}}e:{if(h=c?jt(c):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var E=jd;else if(os(h))if(Qu)E=Hd;else{E=Ud;var T=Bd}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Wd);if(E&&(E=E(e,c))){Yu(m,E,n,p);break e}T&&T(e,h,c),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&li(h,"number",h.value)}switch(T=c?jt(c):window,e){case"focusin":(os(T)||T.contentEditable==="true")&&($t=T,yi=c,Nn=null);break;case"focusout":Nn=yi=$t=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,ds(m,n,p);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ds(m,n,p)}var C;if(so)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Mt?Gu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Hu&&n.locale!=="ko"&&(Mt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Mt&&(C=Wu()):(tt=p,lo="value"in tt?tt.value:tt.textContent,Mt=!0)),T=jr(c,N),0<T.length&&(N=new ns(N,e,null,n,p),m.push({event:N,listeners:T}),C?N.data=C:(C=Vu(n),C!==null&&(N.data=C)))),(C=Ld?Fd(e,n):Md(e,n))&&(c=jr(c,"onBeforeInput"),0<c.length&&(p=new ns("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=C))}ra(m,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ln(e,n),i!=null&&r.unshift(Un(e,i,l)),i=Ln(e,t),i!=null&&r.push(Un(e,i,l))),e=e.return}return r}function Pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Ln(n,i),u!=null&&o.unshift(Un(n,u,s))):l||(u=Ln(n,i),u!=null&&o.push(Un(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zd=/\r\n?/g,Jd=/\u0000|\uFFFD/g;function ys(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(Jd,"")}function fr(e,t,n){if(t=ys(t),ys(e)!==t&&n)throw Error(g(425))}function Br(){}var vi=null,Si=null;function wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _i=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,gs=typeof Promise=="function"?Promise:void 0,bd=typeof queueMicrotask=="function"?queueMicrotask:typeof gs<"u"?function(e){return gs.resolve(null).then(e).catch(ef)}:_i;function ef(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);$n(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),$e="__reactFiber$"+un,Wn="__reactProps$"+un,Ye="__reactContainer$"+un,Ei="__reactEvents$"+un,tf="__reactListeners$"+un,nf="__reactHandles$"+un;function _t(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vs(e);e!==null;){if(n=e[$e])return n;e=vs(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[$e]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function ul(e){return e[Wn]||null}var ki=[],Bt=-1;function ht(e){return{current:e}}function $(e){0>Bt||(e.current=ki[Bt],ki[Bt]=null,Bt--)}function F(e,t){Bt++,ki[Bt]=e.current,e.current=t}var ft={},ie=ht(ft),fe=ht(!1),Tt=ft;function bt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Ur(){$(fe),$(ie)}function Ss(e,t,n){if(ie.current!==ft)throw Error(g(168));F(ie,t),F(fe,n)}function ia(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(g(108,Bc(e)||"Unknown",l));return U({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Tt=ie.current,F(ie,e),F(fe,fe.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=ia(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,$(fe),$(ie),F(ie,e)):$(fe),F(fe,n)}var Ue=null,al=!1,jl=!1;function oa(e){Ue===null?Ue=[e]:Ue.push(e)}function rf(e){al=!0,oa(e)}function mt(){if(!jl&&Ue!==null){jl=!0;var e=0,t=P;try{var n=Ue;for(P=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,al=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),Iu(eo,mt),l}finally{P=t,jl=!1}}return null}var Ut=[],Wt=0,Hr=null,Gr=0,_e=[],Ee=0,Nt=null,We=1,He="";function St(e,t){Ut[Wt++]=Gr,Ut[Wt++]=Hr,Hr=e,Gr=t}function sa(e,t,n){_e[Ee++]=We,_e[Ee++]=He,_e[Ee++]=Nt,Nt=e;var r=We;e=He;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-De(t)+l|n<<l|r,He=i+e}else We=1<<i|n<<l|r,He=e}function ao(e){e.return!==null&&(St(e,1),sa(e,1,0))}function co(e){for(;e===Hr;)Hr=Ut[--Wt],Ut[Wt]=null,Gr=Ut[--Wt],Ut[Wt]=null;for(;e===Nt;)Nt=_e[--Ee],_e[Ee]=null,He=_e[--Ee],_e[Ee]=null,We=_e[--Ee],_e[Ee]=null}var ge=null,ye=null,z=!1,Ie=null;function ua(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,ye=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:We,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,ye=null,!0):!1;default:return!1}}function xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ci(e){if(z){var t=ye;if(t){var n=t;if(!_s(e,t)){if(xi(e))throw Error(g(418));t=ot(n.nextSibling);var r=ge;t&&_s(e,t)?ua(r,n):(e.flags=e.flags&-4097|2,z=!1,ge=e)}}else{if(xi(e))throw Error(g(418));e.flags=e.flags&-4097|2,z=!1,ge=e}}}function Es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!z)return Es(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wi(e.type,e.memoizedProps)),t&&(t=ye)){if(xi(e))throw aa(),Error(g(418));for(;t;)ua(e,t),t=ot(t.nextSibling)}if(Es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ge?ot(e.stateNode.nextSibling):null;return!0}function aa(){for(var e=ye;e;)e=ot(e.nextSibling)}function en(){ye=ge=null,z=!1}function fo(e){Ie===null?Ie=[e]:Ie.push(e)}var lf=Xe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function hr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ks(e){var t=e._init;return t(e._payload)}function ca(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=ct(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,a,f,y){return a===null||a.tag!==6?(a=Yl(f,d.mode,y),a.return=d,a):(a=l(a,f),a.return=d,a)}function u(d,a,f,y){var E=f.type;return E===Ft?p(d,a,f.props.children,y,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ks(E)===a.type)?(y=l(a,f.props),y.ref=yn(d,a,f),y.return=d,y):(y=Ir(f.type,f.key,f.props,null,d.mode,y),y.ref=yn(d,a,f),y.return=d,y)}function c(d,a,f,y){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ql(f,d.mode,y),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function p(d,a,f,y,E){return a===null||a.tag!==7?(a=Ct(f,d.mode,y,E),a.return=d,a):(a=l(a,f),a.return=d,a)}function m(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Yl(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return f=Ir(a.type,a.key,a.props,null,d.mode,f),f.ref=yn(d,null,a),f.return=d,f;case Lt:return a=Ql(a,d.mode,f),a.return=d,a;case Je:var y=a._init;return m(d,y(a._payload),f)}if(wn(a)||dn(a))return a=Ct(a,d.mode,f,null),a.return=d,a;hr(d,a)}return null}function h(d,a,f,y){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(d,a,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===E?u(d,a,f,y):null;case Lt:return f.key===E?c(d,a,f,y):null;case Je:return E=f._init,h(d,a,E(f._payload),y)}if(wn(f)||dn(f))return E!==null?null:p(d,a,f,y,null);hr(d,f)}return null}function S(d,a,f,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,s(a,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case rr:return d=d.get(y.key===null?f:y.key)||null,u(a,d,y,E);case Lt:return d=d.get(y.key===null?f:y.key)||null,c(a,d,y,E);case Je:var T=y._init;return S(d,a,f,T(y._payload),E)}if(wn(y)||dn(y))return d=d.get(f)||null,p(a,d,y,E,null);hr(a,y)}return null}function w(d,a,f,y){for(var E=null,T=null,C=a,N=a=0,H=null;C!==null&&N<f.length;N++){C.index>N?(H=C,C=null):H=C.sibling;var I=h(d,C,f[N],y);if(I===null){C===null&&(C=H);break}e&&C&&I.alternate===null&&t(d,C),a=i(I,a,N),T===null?E=I:T.sibling=I,T=I,C=H}if(N===f.length)return n(d,C),z&&St(d,N),E;if(C===null){for(;N<f.length;N++)C=m(d,f[N],y),C!==null&&(a=i(C,a,N),T===null?E=C:T.sibling=C,T=C);return z&&St(d,N),E}for(C=r(d,C);N<f.length;N++)H=S(C,d,N,f[N],y),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?N:H.key),a=i(H,a,N),T===null?E=H:T.sibling=H,T=H);return e&&C.forEach(function(Ne){return t(d,Ne)}),z&&St(d,N),E}function _(d,a,f,y){var E=dn(f);if(typeof E!="function")throw Error(g(150));if(f=E.call(f),f==null)throw Error(g(151));for(var T=E=null,C=a,N=a=0,H=null,I=f.next();C!==null&&!I.done;N++,I=f.next()){C.index>N?(H=C,C=null):H=C.sibling;var Ne=h(d,C,I.value,y);if(Ne===null){C===null&&(C=H);break}e&&C&&Ne.alternate===null&&t(d,C),a=i(Ne,a,N),T===null?E=Ne:T.sibling=Ne,T=Ne,C=H}if(I.done)return n(d,C),z&&St(d,N),E;if(C===null){for(;!I.done;N++,I=f.next())I=m(d,I.value,y),I!==null&&(a=i(I,a,N),T===null?E=I:T.sibling=I,T=I);return z&&St(d,N),E}for(C=r(d,C);!I.done;N++,I=f.next())I=S(C,d,N,I.value,y),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?N:I.key),a=i(I,a,N),T===null?E=I:T.sibling=I,T=I);return e&&C.forEach(function(an){return t(d,an)}),z&&St(d,N),E}function L(d,a,f,y){if(typeof f=="object"&&f!==null&&f.type===Ft&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var E=f.key,T=a;T!==null;){if(T.key===E){if(E=f.type,E===Ft){if(T.tag===7){n(d,T.sibling),a=l(T,f.props.children),a.return=d,d=a;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Je&&ks(E)===T.type){n(d,T.sibling),a=l(T,f.props),a.ref=yn(d,T,f),a.return=d,d=a;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===Ft?(a=Ct(f.props.children,d.mode,y,f.key),a.return=d,d=a):(y=Ir(f.type,f.key,f.props,null,d.mode,y),y.ref=yn(d,a,f),y.return=d,d=y)}return o(d);case Lt:e:{for(T=f.key;a!==null;){if(a.key===T)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Ql(f,d.mode,y),a.return=d,d=a}return o(d);case Je:return T=f._init,L(d,a,T(f._payload),y)}if(wn(f))return w(d,a,f,y);if(dn(f))return _(d,a,f,y);hr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=Yl(f,d.mode,y),a.return=d,d=a),o(d)):n(d,a)}return L}var tn=ca(!0),da=ca(!1),Vr=ht(null),Yr=null,Ht=null,po=null;function ho(){po=Ht=Yr=null}function mo(e){var t=Vr.current;$(Vr),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Yr=e,po=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Yr===null)throw Error(g(308));Ht=e,Yr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var Et=null;function yo(e){Et===null?Et=[e]:Et.push(e)}function fa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Qe(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Qe(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==o&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,p=c=u=null,s=i;do{var h=s.lane,S=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,_=s;switch(h=t,S=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){m=w.call(S,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,h=typeof w=="function"?w.call(S,m,h):w,h==null)break e;m=U({},m,h);break e;case 2:qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,u=m):p=p.next=S,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(p===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=m}}function Cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(g(191,l));l.call(r)}}}var bn={},je=ht(bn),Hn=ht(bn),Gn=ht(bn);function kt(e){if(e===bn)throw Error(g(174));return e}function vo(e,t){switch(F(Gn,t),F(Hn,e),F(je,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oi(t,e)}$(je),F(je,t)}function nn(){$(je),$(Hn),$(Gn)}function ha(e){kt(Gn.current);var t=kt(je.current),n=oi(t,e.type);t!==n&&(F(Hn,e),F(je,n))}function So(e){Hn.current===e&&($(je),$(Hn))}var j=ht(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function wo(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Tr=Xe.ReactCurrentDispatcher,Ul=Xe.ReactCurrentBatchConfig,At=0,B=null,Q=null,Z=null,Xr=!1,An=!1,Vn=0,of=0;function te(){throw Error(g(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,l,i){if(At=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?cf:df,e=n(r,l),An){i=0;do{if(An=!1,Vn=0,25<=i)throw Error(g(301));i+=1,Z=Q=null,t.updateQueue=null,Tr.current=ff,e=n(r,l)}while(An)}if(Tr.current=Zr,t=Q!==null&&Q.next!==null,At=0,Z=Q=B=null,Xr=!1,t)throw Error(g(300));return e}function ko(){var e=Vn!==0;return Vn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Te(){if(Q===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,Q=e;else{if(e===null)throw Error(g(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=Q,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,c=i;do{var p=c.lane;if((At&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,o=r):u=u.next=m,B.lanes|=p,Rt|=p}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=s,Le(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Rt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Te(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Le(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ma(){}function ya(e,t){var n=B,r=Te(),l=t(),i=!Le(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,xo(Sa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Qn(9,va.bind(null,n,r,l,t),void 0,null),J===null)throw Error(g(349));At&30||ga(n,t,l)}return l}function ga(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function va(e,t,n,r){t.value=n,t.getSnapshot=r,wa(t)&&_a(e)}function Sa(e,t,n){return n(function(){wa(t)&&_a(e)})}function wa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function _a(e){var t=Qe(e,1);t!==null&&Pe(t,e,1,-1)}function Ts(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=af.bind(null,B,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return Te().memoizedState}function Nr(e,t,n,r){var l=Me();B.flags|=e,l.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var l=Te();r=r===void 0?null:r;var i=void 0;if(Q!==null){var o=Q.memoizedState;if(i=o.destroy,r!==null&&_o(r,o.deps)){l.memoizedState=Qn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Qn(1|t,n,i,r)}function Ns(e,t){return Nr(8390656,8,e,t)}function xo(e,t){return cl(2048,8,e,t)}function ka(e,t){return cl(4,2,e,t)}function xa(e,t){return cl(4,4,e,t)}function Ca(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ta(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Ca.bind(null,t,e),n)}function Co(){}function Na(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Aa(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ra(e,t,n){return At&21?(Le(n,t)||(n=Lu(),B.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function sf(e,t){var n=P;P=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{P=n,Ul.transition=r}}function Oa(){return Te().memoizedState}function uf(e,t,n){var r=at(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ia(e))Da(t,n);else if(n=fa(e,t,n,r),n!==null){var l=se();Pe(n,e,r,l),Pa(n,t,r)}}function af(e,t,n){var r=at(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ia(e))Da(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Le(s,o)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=fa(e,t,l,r),n!==null&&(l=se(),Pe(n,e,r,l),Pa(n,t,r))}}function Ia(e){var t=e.alternate;return e===B||t!==null&&t===B}function Da(e,t){An=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pa(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var Zr={readContext:Ce,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},cf={readContext:Ce,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ns,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,Ca.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Ts,useDebugValue:Co,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Ts(!1),t=e[0];return e=sf.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Me();if(z){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),J===null)throw Error(g(349));At&30||ga(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ns(Sa.bind(null,r,i,e),[e]),r.flags|=2048,Qn(9,va.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=J.identifierPrefix;if(z){var n=He,r=We;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Ce,useCallback:Na,useContext:Ce,useEffect:xo,useImperativeHandle:Ta,useInsertionEffect:ka,useLayoutEffect:xa,useMemo:Aa,useReducer:Wl,useRef:Ea,useState:function(){return Wl(Yn)},useDebugValue:Co,useDeferredValue:function(e){var t=Te();return Ra(t,Q.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:ma,useSyncExternalStore:ya,useId:Oa,unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:Na,useContext:Ce,useEffect:xo,useImperativeHandle:Ta,useInsertionEffect:ka,useLayoutEffect:xa,useMemo:Aa,useReducer:Hl,useRef:Ea,useState:function(){return Hl(Yn)},useDebugValue:Co,useDeferredValue:function(e){var t=Te();return Q===null?t.memoizedState=e:Ra(t,Q.memoizedState,e)},useTransition:function(){var e=Hl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:ma,useSyncExternalStore:ya,useId:Oa,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ni(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),l=at(e),i=Ge(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Pe(t,e,l,r),Cr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),l=at(e),i=Ge(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Pe(t,e,l,r),Cr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=at(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Pe(t,e,r,n),Cr(t,e,r))}};function As(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!jn(n,r)||!jn(l,i):!0}function La(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=pe(t)?Tt:ie.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Ai(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},go(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=pe(t)?Tt:ie.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ni(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=jc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Fa(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,ji=r),Ri(e,t)},n}function Ma(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ri(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ri(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ds(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var hf=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?da(t,null,n,r):tn(t,e.child,n,r)}function Ps(e,t,n,r,l){n=n.render;var i=t.ref;return Zt(t,l),r=Eo(e,t,n,r,i,l),n=ko(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(z&&n&&ao(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ls(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Po(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$a(e,t,i,r,l)):(e=Ir(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:jn,n(o,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(jn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return Oi(e,t,n,r,l)}function za(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Vt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Vt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(Vt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(Vt,me),me|=r;return oe(e,t,l,n),t.child}function ja(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oi(e,t,n,r,l){var i=pe(n)?Tt:ie.current;return i=bt(t,i),Zt(t,l),n=Eo(e,t,n,r,i,l),r=ko(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):(z&&r&&ao(t),t.flags|=1,oe(e,t,n,l),t.child)}function Fs(e,t,n,r,l){if(pe(n)){var i=!0;Wr(t)}else i=!1;if(Zt(t,l),t.stateNode===null)Ar(e,t),La(t,n,r),Ai(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=pe(n)?Tt:ie.current,c=bt(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Rs(t,o,r,c),qe=!1;var h=t.memoizedState;o.state=h,Qr(t,r,o,l),u=t.memoizedState,s!==r||h!==u||fe.current||qe?(typeof p=="function"&&(Ni(t,n,p,r),u=t.memoizedState),(s=qe||As(t,n,s,r,h,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),o.props=c,m=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=pe(n)?Tt:ie.current,u=bt(t,u));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Rs(t,o,r,u),qe=!1,h=t.memoizedState,o.state=h,Qr(t,r,o,l);var w=t.memoizedState;s!==m||h!==w||fe.current||qe?(typeof S=="function"&&(Ni(t,n,S,r),w=t.memoizedState),(c=qe||As(t,n,c,r,h,w,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ii(e,t,n,r,i,l)}function Ii(e,t,n,r,l,i){ja(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ws(t,n,!1),Ke(e,t,i);r=t.stateNode,hf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,l&&ws(t,n,!0),t.child}function Ba(e){var t=e.stateNode;t.pendingContext?Ss(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ss(e,t.context,!1),vo(e,t.containerInfo)}function Ms(e,t,n,r,l){return en(),fo(l),t.flags|=256,oe(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ua(e,t,n){var r=t.pendingProps,l=j.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(j,l&1),e===null)return Ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=hl(o,r,0,null),e=Ct(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Pi(n),t.memoizedState=Di,e):To(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return mf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ct(s,i):(i=Ct(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Pi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function To(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mr(e,t,n,r){return r!==null&&fo(r),tn(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Gl(Error(g(422))),mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=hl({mode:"visible",children:r.children},l,0,null),i=Ct(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Pi(o),t.memoizedState=Di,i);if(!(t.mode&1))return mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(g(419)),r=Gl(i,r,void 0),mr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Qe(e,l),Pe(r,e,l,-1))}return Do(),r=Gl(Error(g(421))),mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Af.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ot(l.nextSibling),ge=t,z=!0,Ie=null,e!==null&&(_e[Ee++]=We,_e[Ee++]=He,_e[Ee++]=Nt,We=e.id,He=e.overflow,Nt=t),t=To(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function Vl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Wa(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=j.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(j,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Vl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Vl(t,!0,n,null,i);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Ba(t),en();break;case 5:ha(t);break;case 1:pe(t.type)&&Wr(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(Vr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(j,j.current&1),t.flags|=128,null):n&t.child.childLanes?Ua(e,t,n):(F(j,j.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);F(j,j.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Wa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(j,j.current),r)break;return null;case 22:case 23:return t.lanes=0,za(e,t,n)}return Ke(e,t,n)}var Ha,Li,Ga,Va;Ha=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Ga=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kt(je.current);var i=null;switch(n){case"input":l=ni(e,l),r=ni(e,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=ii(e,l),r=ii(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}si(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&M("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Va=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gf(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return pe(t.type)&&Ur(),ne(t),null;case 3:return r=t.stateNode,nn(),$(fe),$(ie),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Wi(Ie),Ie=null))),Li(e,t),ne(t),null;case 5:So(t);var l=kt(Gn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ga(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ne(t),null}if(e=kt(je.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[$e]=t,r[Wn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<En.length;l++)M(En[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Vo(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":Qo(r,i),M("invalid",r)}si(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,s,e),l=["children",""+s]):Dn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&M("scroll",r)}switch(n){case"input":lr(r),Yo(r,i,!0);break;case"textarea":lr(r),Ko(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$e]=t,e[Wn]=r,Ha(e,t,!1,!1),t.stateNode=e;e:{switch(o=ui(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<En.length;l++)M(En[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":Vo(e,r),l=ni(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),M("invalid",e);break;case"textarea":Qo(e,r),l=ii(e,r),M("invalid",e);break;default:l=r}si(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Eu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Pn(e,u):typeof u=="number"&&Pn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&M("scroll",e):u!=null&&Xi(e,i,u,o))}switch(n){case"input":lr(e),Yo(e,r,!1);break;case"textarea":lr(e),Ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Va(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=kt(Gn.current),kt(je.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ne(t),null;case 13:if($(j),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ye!==null&&t.mode&1&&!(t.flags&128))aa(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[$e]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else Ie!==null&&(Wi(Ie),Ie=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||j.current&1?K===0&&(K=3):Do())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Li(e,t),e===null&&Bn(t.stateNode.containerInfo),ne(t),null;case 10:return mo(t.type._context),ne(t),null;case 17:return pe(t.type)&&Ur(),ne(t),null;case 19:if($(j),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)gn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kr(e),o!==null){for(t.flags|=128,gn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(j,j.current&1|2),t.child}e=e.sibling}i.tail!==null&&V()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!z)return ne(t),null}else 2*V()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=V(),t.sibling=null,n=j.current,F(j,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Io(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function vf(e,t){switch(co(t),t.tag){case 1:return pe(t.type)&&Ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),$(fe),$(ie),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return So(t),null;case 13:if($(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(j),null;case 4:return nn(),null;case 10:return mo(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var yr=!1,le=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Gt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){W(e,t,r)}}var zs=!1;function wf(e,t){if(vi=$r,e=Zu(),uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,c=0,p=0,m=e,h=null;t:for(;;){for(var S;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)h=m,m=S;for(;;){if(m===e)break t;if(h===n&&++c===l&&(s=o),h===i&&++p===r&&(u=o),(S=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},$r=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,L=w.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Re(t.type,_),L);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){W(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=zs,zs=!1,w}function Rn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ya(e){var t=e.alternate;t!==null&&(e.alternate=null,Ya(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[Wn],delete t[Ei],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qa(e){return e.tag===5||e.tag===3||e.tag===4}function js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qa(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}function zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zi(e,t,n),e=e.sibling;e!==null;)zi(e,t,n),e=e.sibling}var q=null,Oe=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Ka(e,t,n),n=n.sibling}function Ka(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:le||Gt(n,t);case 6:var r=q,l=Oe;q=null,Ze(e,t,n),q=r,Oe=l,q!==null&&(Oe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Oe?(e=q,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),$n(e)):zl(q,n.stateNode));break;case 4:r=q,l=Oe,q=n.stateNode.containerInfo,Oe=!0,Ze(e,t,n),q=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Fi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&(Gt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Bs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var l=Rf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Oe=!1;break e;case 3:q=s.stateNode.containerInfo,Oe=!0;break e;case 4:q=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(q===null)throw Error(g(160));Ka(i,o,l),q=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xa(t,e),t=t.sibling}function Xa(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Fe(e),r&4){try{Rn(3,e,e.return),fl(3,e)}catch(_){W(e,e.return,_)}try{Rn(5,e,e.return)}catch(_){W(e,e.return,_)}}break;case 1:Ae(t,e),Fe(e),r&512&&n!==null&&Gt(n,n.return);break;case 5:if(Ae(t,e),Fe(e),r&512&&n!==null&&Gt(n,n.return),e.flags&32){var l=e.stateNode;try{Pn(l,"")}catch(_){W(e,e.return,_)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&gu(l,i),ui(s,o);var c=ui(s,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Eu(l,m):p==="dangerouslySetInnerHTML"?wu(l,m):p==="children"?Pn(l,m):Xi(l,p,m,c)}switch(s){case"input":ri(l,i);break;case"textarea":vu(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Yt(l,!!i.multiple,S,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wn]=i}catch(_){W(e,e.return,_)}}break;case 6:if(Ae(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(g(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(_){W(e,e.return,_)}}break;case 3:if(Ae(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(_){W(e,e.return,_)}break;case 4:Ae(t,e),Fe(e);break;case 13:Ae(t,e),Fe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ro=V())),r&4&&Bs(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||p,Ae(t,e),le=c):Ae(t,e),Fe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(k=e,p=e.child;p!==null;){for(m=k=p;k!==null;){switch(h=k,S=h.child,h.tag){case 0:case 11:case 14:case 15:Rn(4,h,h.return);break;case 1:Gt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){W(r,n,_)}}break;case 5:Gt(h,h.return);break;case 22:if(h.memoizedState!==null){Ws(m);continue}}S!==null?(S.return=h,k=S):Ws(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=_u("display",o))}catch(_){W(e,e.return,_)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(_){W(e,e.return,_)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),Fe(e),r&4&&Bs(e);break;case 21:break;default:Ae(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qa(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Pn(l,""),r.flags&=-33);var i=js(e);zi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=js(e);$i(e,s,o);break;default:throw Error(g(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){k=e,Za(e)}function Za(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||yr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||le;s=yr;var c=le;if(yr=o,(le=u)&&!c)for(k=l;k!==null;)o=k,u=o.child,o.tag===22&&o.memoizedState!==null?Hs(l):u!==null?(u.return=o,k=u):Hs(l);for(;i!==null;)k=i,Za(i),i=i.sibling;k=l,yr=s,le=c}Us(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Us(e)}}function Us(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}le||t.flags&512&&Mi(t)}catch(h){W(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Ws(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Hs(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){W(t,l,u)}}var i=t.return;try{Mi(t)}catch(u){W(t,i,u)}break;case 5:var o=t.return;try{Mi(t)}catch(u){W(t,o,u)}}}catch(u){W(t,t.return,u)}if(t===e){k=null;break}var s=t.sibling;if(s!==null){s.return=t.return,k=s;break}k=t.return}}var Ef=Math.ceil,Jr=Xe.ReactCurrentDispatcher,No=Xe.ReactCurrentOwner,xe=Xe.ReactCurrentBatchConfig,D=0,J=null,Y=null,b=0,me=0,Vt=ht(0),K=0,Kn=null,Rt=0,pl=0,Ao=0,On=null,ce=null,Ro=0,ln=1/0,Be=null,qr=!1,ji=null,ut=null,gr=!1,nt=null,br=0,In=0,Bi=null,Rr=-1,Or=0;function se(){return D&6?V():Rr!==-1?Rr:Rr=V()}function at(e){return e.mode&1?D&2&&b!==0?b&-b:lf.transition!==null?(Or===0&&(Or=Lu()),Or):(e=P,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e):1}function Pe(e,t,n,r){if(50<In)throw In=0,Bi=null,Error(g(185));Zn(e,n,r),(!(D&2)||e!==J)&&(e===J&&(!(D&2)&&(pl|=n),K===4&&et(e,b)),he(e,r),n===1&&D===0&&!(t.mode&1)&&(ln=V()+500,al&&mt()))}function he(e,t){var n=e.callbackNode;ld(e,t);var r=Mr(e,e===J?b:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?rf(Gs.bind(null,e)):oa(Gs.bind(null,e)),bd(function(){!(D&6)&&mt()}),n=null;else{switch(Fu(r)){case 1:n=eo;break;case 4:n=Du;break;case 16:n=Fr;break;case 536870912:n=Pu;break;default:n=Fr}n=lc(n,Ja.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ja(e,t){if(Rr=-1,Or=0,D&6)throw Error(g(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Mr(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=el(e,r);else{t=r;var l=D;D|=2;var i=ba();(J!==e||b!==t)&&(Be=null,ln=V()+500,xt(e,t));do try{Cf();break}catch(s){qa(e,s)}while(!0);ho(),Jr.current=i,D=l,Y!==null?t=0:(J=null,b=0,t=K)}if(t!==0){if(t===2&&(l=pi(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Kn,xt(e,0),et(e,r),he(e,V()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!kf(l)&&(t=el(e,r),t===2&&(i=pi(e),i!==0&&(r=i,t=Ui(e,i))),t===1))throw n=Kn,xt(e,0),et(e,r),he(e,V()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:wt(e,ce,Be);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ro+500-V(),10<t)){if(Mr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=_i(wt.bind(null,e,ce,Be),t);break}wt(e,ce,Be);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ef(r/1960))-r,10<r){e.timeoutHandle=_i(wt.bind(null,e,ce,Be),r);break}wt(e,ce,Be);break;case 5:wt(e,ce,Be);break;default:throw Error(g(329))}}}return he(e,V()),e.callbackNode===n?Ja.bind(null,e):null}function Ui(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(xt(e,t).flags|=256),e=el(e,t),e!==2&&(t=ce,ce=n,t!==null&&Wi(t)),e}function Wi(e){ce===null?ce=e:ce.push.apply(ce,e)}function kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Le(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ao,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Gs(e){if(D&6)throw Error(g(327));Jt();var t=Mr(e,0);if(!(t&1))return he(e,V()),null;var n=el(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Kn,xt(e,0),et(e,t),he(e,V()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,Be),he(e,V()),null}function Oo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(ln=V()+500,al&&mt())}}function Ot(e){nt!==null&&nt.tag===0&&!(D&6)&&Jt();var t=D;D|=1;var n=xe.transition,r=P;try{if(xe.transition=null,P=1,e)return e()}finally{P=r,xe.transition=n,D=t,!(D&6)&&mt()}}function Io(){me=Vt.current,$(Vt)}function xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:nn(),$(fe),$(ie),wo();break;case 5:So(r);break;case 4:nn();break;case 13:$(j);break;case 19:$(j);break;case 10:mo(r.type._context);break;case 22:case 23:Io()}n=n.return}if(J=e,Y=e=ct(e.current,null),b=me=t,K=0,Kn=null,Ao=pl=Rt=0,ce=On=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Et=null}return e}function qa(e,t){do{var n=Y;try{if(ho(),Tr.current=Zr,Xr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Xr=!1}if(At=0,Z=Q=B=null,An=!1,Vn=0,No.current=null,n===null||n.return===null){K=1,Kn=t,Y=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=b,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Is(o);if(S!==null){S.flags&=-257,Ds(S,o,s,i,t),S.mode&1&&Os(i,c,t),t=S,u=c;var w=t.updateQueue;if(w===null){var _=new Set;_.add(u),t.updateQueue=_}else w.add(u);break e}else{if(!(t&1)){Os(i,c,t),Do();break e}u=Error(g(426))}}else if(z&&s.mode&1){var L=Is(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Ds(L,o,s,i,t),fo(rn(u,s));break e}}i=u=rn(u,s),K!==4&&(K=2),On===null?On=[i]:On.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Fa(i,u,t);xs(i,d);break e;case 1:s=u;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ma(i,s,t);xs(i,y);break e}}i=i.return}while(i!==null)}tc(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function ba(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Do(){(K===0||K===3||K===2)&&(K=4),J===null||!(Rt&268435455)&&!(pl&268435455)||et(J,b)}function el(e,t){var n=D;D|=2;var r=ba();(J!==e||b!==t)&&(Be=null,xt(e,t));do try{xf();break}catch(l){qa(e,l)}while(!0);if(ho(),D=n,Jr.current=r,Y!==null)throw Error(g(261));return J=null,b=0,K}function xf(){for(;Y!==null;)ec(Y)}function Cf(){for(;Y!==null&&!Xc();)ec(Y)}function ec(e){var t=rc(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?tc(e):Y=t,No.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(n=gf(n,t,me),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var r=P,l=xe.transition;try{xe.transition=null,P=1,Tf(e,t,n,r)}finally{xe.transition=l,P=r}return null}function Tf(e,t,n,r){do Jt();while(nt!==null);if(D&6)throw Error(g(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(id(e,i),e===J&&(Y=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,lc(Fr,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=xe.transition,xe.transition=null;var o=P;P=1;var s=D;D|=4,No.current=null,wf(e,n),Xa(n,e),Vd(Si),$r=!!vi,Si=vi=null,e.current=n,_f(n),Zc(),D=s,P=o,xe.transition=i}else e.current=n;if(gr&&(gr=!1,nt=e,br=l),i=e.pendingLanes,i===0&&(ut=null),bc(n.stateNode),he(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=ji,ji=null,e;return br&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Bi?In++:(In=0,Bi=e):In=0,mt(),null}function Jt(){if(nt!==null){var e=Fu(br),t=xe.transition,n=P;try{if(xe.transition=null,P=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,br=0,D&6)throw Error(g(331));var l=D;for(D|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(k=c;k!==null;){var p=k;switch(p.tag){case 0:case 11:case 15:Rn(8,p,i)}var m=p.child;if(m!==null)m.return=p,k=m;else for(;k!==null;){p=k;var h=p.sibling,S=p.return;if(Ya(p),p===c){k=null;break}if(h!==null){h.return=S,k=h;break}k=S}}}var w=i.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var L=_.sibling;_.sibling=null,_=L}while(_!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var a=e.current;for(k=a;k!==null;){o=k;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,k=f;else e:for(o=a;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(E){W(s,s.return,E)}if(s===o){k=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,k=y;break e}k=s.return}}if(D=l,mt(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{P=n,xe.transition=t}}return!1}function Vs(e,t,n){t=rn(n,t),t=Fa(e,t,1),e=st(e,t,1),t=se(),e!==null&&(Zn(e,1,t),he(e,t))}function W(e,t,n){if(e.tag===3)Vs(e,e,n);else for(;t!==null;){if(t.tag===3){Vs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=Ma(t,e,1),t=st(t,e,1),e=se(),t!==null&&(Zn(t,1,e),he(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(K===4||K===3&&(b&130023424)===b&&500>V()-Ro?xt(e,0):Ao|=n),he(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=se();e=Qe(e,t),e!==null&&(Zn(e,t,n),he(e,n))}function Af(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,yf(e,t,n);de=!!(e.flags&131072)}else de=!1,z&&t.flags&1048576&&sa(t,Gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=bt(t,ie.current);Zt(t,n),l=Eo(null,t,r,e,l,n);var i=ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Wr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,go(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Ai(t,r,e,n),t=Ii(null,t,r,!0,i,n)):(t.tag=0,z&&i&&ao(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=If(r),e=Re(r,e),l){case 0:t=Oi(null,t,r,e,n);break e;case 1:t=Fs(null,t,r,e,n);break e;case 11:t=Ps(null,t,r,e,n);break e;case 14:t=Ls(null,t,r,Re(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Oi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Fs(e,t,r,l,n);case 3:e:{if(Ba(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,l=i.element,pa(e,t),Qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(g(423)),t),t=Ms(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(g(424)),t),t=Ms(e,t,r,n,l);break e}else for(ye=ot(t.stateNode.containerInfo.firstChild),ge=t,z=!0,Ie=null,n=da(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ha(t),e===null&&Ci(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,wi(r,l)?o=null:i!==null&&wi(r,i)&&(t.flags|=32),ja(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ci(t),null;case 13:return Ua(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ps(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,F(Vr,r._currentValue),r._currentValue=o,i!==null)if(Le(i.value,o)){if(i.children===l.children&&!fe.current){t=Ke(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ge(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ti(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(g(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ti(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Zt(t,n),l=Ce(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Ls(e,t,r,l,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Ar(e,t),t.tag=1,pe(r)?(e=!0,Wr(t)):e=!1,Zt(t,n),La(t,r,l),Ai(t,r,l,n),Ii(null,t,r,!0,e,n);case 19:return Wa(e,t,n);case 22:return za(e,t,n)}throw Error(g(156,t.tag))};function lc(e,t){return Iu(e,t)}function Of(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Of(e,t,n,r)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function If(e){if(typeof e=="function")return Po(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ji)return 11;if(e===qi)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ir(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ft:return Ct(n.children,l,i,t);case Zi:o=8,l|=8;break;case ql:return e=ke(12,n,t,l|2),e.elementType=ql,e.lanes=i,e;case bl:return e=ke(13,n,t,l),e.elementType=bl,e.lanes=i,e;case ei:return e=ke(19,n,t,l),e.elementType=ei,e.lanes=i,e;case hu:return hl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fu:o=10;break e;case pu:o=9;break e;case Ji:o=11;break e;case qi:o=14;break e;case Je:o=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=ke(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Ct(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function hl(e,t,n,r){return e=ke(22,e,r,t),e.elementType=hu,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Df(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,i,o,s,u){return e=new Df(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(i),e}function Pf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return ft;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(pe(n))return ia(e,n,t)}return t}function oc(e,t,n,r,l,i,o,s,u){return e=Lo(n,r,!0,e,l,i,o,s,u),e.context=ic(null),n=e.current,r=se(),l=at(n),i=Ge(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,Zn(e,l,r),he(e,r),e}function ml(e,t,n,r){var l=t.current,i=se(),o=at(l);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(Pe(e,l,o,i),Cr(e,l,o)),o}function tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){Ys(e,t),(e=e.alternate)&&Ys(e,t)}function Lf(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}yl.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));ml(e,t,null,null)};yl.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){ml(null,e,null,null)}),t[Ye]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<be.length&&t!==0&&t<be[n].priority;n++);be.splice(n,0,e),n===0&&Bu(e)}};function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qs(){}function Ff(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=tl(o);i.call(c)}}var o=oc(t,r,e,0,null,!1,!1,"",Qs);return e._reactRootContainer=o,e[Ye]=o.current,Bn(e.nodeType===8?e.parentNode:e),Ot(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=tl(u);s.call(c)}}var u=Lo(e,0,!1,null,null,!1,!1,"",Qs);return e._reactRootContainer=u,e[Ye]=u.current,Bn(e.nodeType===8?e.parentNode:e),Ot(function(){ml(t,u,n,r)}),u}function vl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=tl(o);s.call(u)}}ml(t,o,e,l)}else o=Ff(n,t,e,l,r);return tl(o)}Mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(to(t,n|1),he(t,V()),!(D&6)&&(ln=V()+500,mt()))}break;case 13:Ot(function(){var r=Qe(e,1);if(r!==null){var l=se();Pe(r,e,1,l)}}),Fo(e,1)}};no=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=se();Pe(t,e,134217728,n)}Fo(e,134217728)}};$u=function(e){if(e.tag===13){var t=at(e),n=Qe(e,t);if(n!==null){var r=se();Pe(n,e,t,r)}Fo(e,t)}};zu=function(){return P};ju=function(e,t){var n=P;try{return P=e,t()}finally{P=n}};ci=function(e,t,n){switch(t){case"input":if(ri(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(g(90));yu(r),ri(r,l)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Cu=Oo;Tu=Ot;var Mf={usingClientEntryPoint:!1,Events:[qn,jt,ul,ku,xu,Oo]},vn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$f={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ru(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Lf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ll=vr.inject($f),ze=vr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$o(t))throw Error(g(200));return Pf(e,t,null,n)};Se.createRoot=function(e,t){if(!$o(e))throw Error(g(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Mo(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Ru(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ot(e)};Se.hydrate=function(e,t,n){if(!gl(t))throw Error(g(200));return vl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!$o(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,i,o),e[Ye]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new yl(t)};Se.render=function(e,t,n){if(!gl(t))throw Error(g(200));return vl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!gl(e))throw Error(g(40));return e._reactRootContainer?(Ot(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=Oo;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return vl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),uu.exports=Se;var zf=uu.exports,Ks=zf;Zl.createRoot=Ks.createRoot,Zl.hydrateRoot=Ks.hydrateRoot;const jf=[{id:"sql-01",track:"SQL",trackColor:"#60A5FA",trackBg:"#0A1830",title:"Cash Position Rollup",level:"Intermediate",context:"You've just joined Experian Group Treasury. Your manager asks you to pull today's consolidated cash position across all bank accounts, grouped by currency. The TMS database has been running for months and has dirty data — some accounts are inactive, some transactions are pending. She needs net position per currency, excluding pending transactions and closed accounts.",schema:`-- Tables available in this exercise:
CREATE TABLE bank_accounts (
  account_id     INT PRIMARY KEY,
  account_name   VARCHAR(100),
  currency       CHAR(3),
  entity         VARCHAR(50),
  status         VARCHAR(10)  -- 'ACTIVE' | 'CLOSED'
);

CREATE TABLE cash_transactions (
  txn_id         INT PRIMARY KEY,
  account_id     INT REFERENCES bank_accounts,
  value_date     DATE,
  amount         DECIMAL(18,2),  -- positive = inflow, negative = outflow
  status         VARCHAR(10),    -- 'SETTLED' | 'PENDING' | 'FAILED'
  description    VARCHAR(200)
);`,sampleData:`-- bank_accounts (8 rows)
account_id | currency | entity                | status
---------- | -------- | --------------------- | -------
1          | USD      | Experian US LLC        | ACTIVE
2          | USD      | Experian NA Corp       | ACTIVE
3          | GBP      | Experian Ltd UK        | ACTIVE
4          | EUR      | Experian Ireland       | ACTIVE
5          | EUR      | Experian Germany       | ACTIVE
6          | MYR      | Experian Malaysia      | ACTIVE
7          | SGD      | Experian Singapore     | CLOSED
8          | USD      | Experian Legacy        | CLOSED

-- cash_transactions sample
txn_id | account_id | value_date | amount       | status
------ | ---------- | ---------- | ------------ | -------
101    | 1          | 2024-01-15 |  5000000.00  | SETTLED
102    | 1          | 2024-01-15 | -1200000.00  | SETTLED
103    | 2          | 2024-01-15 |  3000000.00  | SETTLED
104    | 3          | 2024-01-15 |  2500000.00  | SETTLED
105    | 4          | 2024-01-15 |  -800000.00  | SETTLED
106    | 4          | 2024-01-15 |  1100000.00  | PENDING
107    | 5          | 2024-01-15 |   900000.00  | SETTLED
108    | 7          | 2024-01-15 |   500000.00  | SETTLED
109    | 8          | 2024-01-15 |   200000.00  | SETTLED`,starterCode:`-- Write a query that returns:
-- currency | net_position | account_count | entity_list
-- Ordered by net_position DESC
--
-- Requirements:
--   1. Only ACTIVE accounts
--   2. Only SETTLED transactions
--   3. entity_list = comma-separated entity names per currency

SELECT
  -- your code here


FROM bank_accounts ba
  -- your joins here


WHERE
  -- your filters here


GROUP BY
  -- your grouping here

ORDER BY net_position DESC;`,solution:`SELECT
  ba.currency,
  SUM(ct.amount)                        AS net_position,
  COUNT(DISTINCT ba.account_id)         AS account_count,
  STRING_AGG(DISTINCT ba.entity, ', ') AS entity_list
FROM bank_accounts ba
  JOIN cash_transactions ct
    ON ba.account_id = ct.account_id
WHERE ba.status = 'ACTIVE'
  AND ct.status  = 'SETTLED'
GROUP BY ba.currency
ORDER BY net_position DESC;`,expectedOutput:`currency | net_position  | account_count | entity_list
-------- | ------------- | ------------- | -----------------------------------
USD      | 6,800,000.00  | 2             | Experian US LLC, Experian NA Corp
GBP      | 2,500,000.00  | 1             | Experian Ltd UK
EUR      |   200,000.00  | 2             | Experian Ireland, Experian Germany
MYR      | (no txns yet) | 1             | Experian Malaysia`,hints:["You need a JOIN between bank_accounts and cash_transactions — what's the linking column?","Filter at the WHERE level, not with CASE — keep it clean and readable.","STRING_AGG(DISTINCT column, ', ') builds a comma-separated list in PostgreSQL.","PENDING transactions should be excluded — what does that mean for your WHERE clause on ct.status?"],realWorldNote:"This exact query pattern — daily cash position by currency — runs automatically every morning at a company like Experian before the treasury team arrives. In the real system it feeds a CFO dashboard and a morning email. The PENDING exclusion matters: including unconfirmed cash gives you a false picture of available liquidity."},{id:"sql-02",track:"SQL",trackColor:"#60A5FA",trackBg:"#0A1830",title:"Interface Failure Detection",level:"Advanced",context:"The Oracle-to-Finastra interface runs every weekday at 06:00. Your job is to detect anomalies: missed runs, duplicate runs, and days where the row count dropped more than 30% from the prior rolling average. This is real monitoring logic — if this query returns rows, someone needs to investigate before markets open.",schema:`CREATE TABLE interface_log (
  log_id         INT PRIMARY KEY,
  interface_name VARCHAR(50),
  run_date       DATE,
  run_time       TIMESTAMP,
  status         VARCHAR(10),   -- 'SUCCESS' | 'FAILED' | 'PARTIAL'
  rows_processed INT,
  error_message  VARCHAR(500)
);`,sampleData:`-- interface_log entries for 'ORACLE_TO_FINASTRA'
log_id | run_date   | run_time            | status  | rows_processed
------ | ---------- | ------------------- | ------- | --------------
1      | 2024-01-08 | 2024-01-08 06:01:03 | SUCCESS | 1240
2      | 2024-01-09 | 2024-01-09 06:00:58 | SUCCESS | 1198
3      | 2024-01-10 | 2024-01-10 06:02:11 | SUCCESS | 1215
4      | 2024-01-11 | 2024-01-11 06:01:44 | SUCCESS | 1201
-- 2024-01-12 is a weekday — NO ROW (missed run!)
5      | 2024-01-13 | 2024-01-13 06:00:33 | SUCCESS | 1230
6      | 2024-01-14 | 2024-01-14 06:01:20 | SUCCESS | 1225
7      | 2024-01-15 | 2024-01-15 06:00:45 | SUCCESS | 412   -- dropped 66%!
8      | 2024-01-15 | 2024-01-15 06:00:52 | SUCCESS | 408   -- DUPLICATE run!`,starterCode:`-- ─────────────────────────────────────────────────────────────
-- Part A: Find weekdays in the last 30 days with NO run
-- ─────────────────────────────────────────────────────────────
WITH date_series AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE,
    INTERVAL '1 day'
  )::DATE AS business_date
),
weekdays AS (
  SELECT business_date
  FROM date_series
  WHERE EXTRACT(DOW FROM business_date) NOT IN (0, 6) -- 0=Sun, 6=Sat
)
-- TODO: LEFT JOIN to find dates with no matching interface_log row


;

-- ─────────────────────────────────────────────────────────────
-- Part B: Find duplicate runs (same interface, same date, >1 row)
-- ─────────────────────────────────────────────────────────────
SELECT
  -- your code here


;

-- ─────────────────────────────────────────────────────────────
-- Part C: Find days where row count dropped >30% vs rolling avg
-- ─────────────────────────────────────────────────────────────
WITH daily_counts AS (
  SELECT
    run_date,
    SUM(rows_processed) AS total_rows,
    AVG(SUM(rows_processed)) OVER (
      ORDER BY run_date
      ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING
    ) AS rolling_avg
  FROM interface_log
  WHERE interface_name = 'ORACLE_TO_FINASTRA'
    AND status = 'SUCCESS'
  GROUP BY run_date
)
-- TODO: filter to rows where total_rows < rolling_avg * 0.70


;`,solution:`-- Part A: Missed runs
WITH date_series AS (
  SELECT generate_series(
    CURRENT_DATE - INTERVAL '30 days',
    CURRENT_DATE,
    INTERVAL '1 day'
  )::DATE AS business_date
),
weekdays AS (
  SELECT business_date FROM date_series
  WHERE EXTRACT(DOW FROM business_date) NOT IN (0, 6)
)
SELECT w.business_date AS missed_date
FROM weekdays w
LEFT JOIN interface_log il
  ON il.run_date = w.business_date
  AND il.interface_name = 'ORACLE_TO_FINASTRA'
WHERE il.log_id IS NULL;

-- Part B: Duplicate runs
SELECT interface_name, run_date, COUNT(*) AS run_count
FROM interface_log
GROUP BY interface_name, run_date
HAVING COUNT(*) > 1;

-- Part C: Row count anomalies
WITH daily_counts AS (
  SELECT run_date,
    SUM(rows_processed) AS total_rows,
    AVG(SUM(rows_processed)) OVER (
      ORDER BY run_date ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING
    ) AS rolling_avg
  FROM interface_log
  WHERE interface_name = 'ORACLE_TO_FINASTRA' AND status = 'SUCCESS'
  GROUP BY run_date
)
SELECT
  run_date,
  total_rows,
  ROUND(rolling_avg, 0)                              AS avg_7d,
  ROUND((total_rows - rolling_avg)/rolling_avg*100, 1) AS pct_change
FROM daily_counts
WHERE total_rows < rolling_avg * 0.70
ORDER BY run_date;`,expectedOutput:`-- Part A
missed_date
-----------
2024-01-12

-- Part B
interface_name      | run_date   | run_count
ORACLE_TO_FINASTRA  | 2024-01-15 | 2

-- Part C
run_date   | total_rows | avg_7d | pct_change
2024-01-15 | 412        | 1218   | -66.2`,hints:["Part A: generate_series creates a sequence of dates. LEFT JOIN to interface_log, then WHERE log_id IS NULL finds the gaps.","Part B: GROUP BY interface_name, run_date — then HAVING COUNT(*) > 1 isolates duplicates.","Part C: The window function ROWS BETWEEN 7 PRECEDING AND 1 PRECEDING excludes today from its own average.","The 0.70 threshold means: flag if today is less than 70% of average (i.e. dropped more than 30%)."],realWorldNote:"This is production monitoring logic. At Experian this runs via APScheduler every morning. If Part A or C returns any rows, an alert fires to a Teams channel before the treasury team's 8am standup — giving them time to investigate before markets open."}],Bf=[{id:"python-01",track:"Python",trackColor:"#FCD34D",trackBg:"#1A1508",title:"MT940 Bank Statement Parser",level:"Intermediate",context:"Banks deliver daily cash statements via SFTP in MT940 format — the SWIFT standard for account statements. Your job is to write a Python parser that reads an MT940 file and outputs structured rows ready to INSERT into the cash_transactions table. This is one of the most common automation tasks in corporate treasury IT and most candidates have never seen this format.",schema:`# Target table:
# cash_transactions(txn_id, account_id, value_date, amount, status, description)

# MT940 tag reference:
# :20:  Transaction reference number
# :25:  Account identification (IBAN / account number)
# :28C: Statement number / sequence
# :60F: Opening balance
#       Format: :60F:C240115GBP2500000,00
#               C/D = Credit/Debit | YYMMDD | CCY | AMOUNT (comma decimal)
# :61:  Transaction line
#       Format: :61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
#               YYMMDD YYMMDD C/D AMOUNT N TRF reference
# :86:  Narrative / description for the PRECEDING :61: transaction
# :62F: Closing balance (same format as :60F:)`,sampleData:`:20:STMT20240115001
:25:GB29EXPN60161331926819
:28C:00001/001
:60F:C240115GBP2500000,00
:61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
:86:Monthly payroll funding from Experian Group Treasury
:61:2401150115D450000,00NTRFRENT Q1 2024
:86:Canary Wharf office Q1 rent payment
:61:2401150115C750000,00NTRFINTERCO TRANSFER
:86:Intercompany transfer from Experian US LLC
:62F:C240115GBP4000000,00`,starterCode:`from dataclasses import dataclass, field
from datetime import datetime
from decimal import Decimal
from typing import List, Optional
import re


@dataclass
class MT940Transaction:
    value_date:  str      # YYYY-MM-DD
    amount:      Decimal  # positive = inflow, negative = outflow
    status:      str      # always 'SETTLED' for MT940
    description: str
    reference:   str


@dataclass
class MT940Statement:
    account_number:  str
    currency:        str
    opening_balance: Decimal
    closing_balance: Decimal
    transactions:    List[MT940Transaction] = field(default_factory=list)


def parse_date(yymmdd: str) -> str:
    """Convert YYMMDD string to YYYY-MM-DD. Assume 2000s."""
    # TODO: use datetime.strptime with format "%y%m%d"
    # then .strftime("%Y-%m-%d")
    pass


def parse_amount(raw: str, direction: str) -> Decimal:
    """
    Convert MT940 amount string to signed Decimal.
    MT940 uses comma as decimal separator (European format).
    C (Credit) = positive inflow
    D (Debit)  = negative outflow

    Examples:
      parse_amount("1200000,00", "C") -> Decimal("1200000.00")
      parse_amount("450000,00",  "D") -> Decimal("-450000.00")
    """
    # TODO: replace comma with dot, convert to Decimal, negate if "D"
    pass


def parse_mt940(raw_text: str) -> MT940Statement:
    """
    Parse a raw MT940 string into a structured MT940Statement.

    Key rules:
    - Process line by line
    - :86: always describes the PRECEDING :61: transaction
      so don't append a transaction until you see the NEXT :61: or EOF
    - C = Credit = positive, D = Debit = negative
    """
    statement = MT940Statement(
        account_number="",
        currency="",
        opening_balance=Decimal("0"),
        closing_balance=Decimal("0"),
    )

    lines = raw_text.strip().split("\\n")
    current_txn: Optional[MT940Transaction] = None

    for line in lines:
        line = line.strip()

        # :25: → account number (everything after the tag)
        if line.startswith(":25:"):
            pass  # TODO

        # :60F: → opening balance
        # body after ':60F:': char[0]=C/D, [1:7]=YYMMDD, [7:10]=CCY, [10:]=amount
        elif line.startswith(":60F:"):
            pass  # TODO

        # :61: → new transaction
        # If there is already a current_txn pending, append it first
        # body after ':61:': [0:6]=value_date YYMMDD, then find C or D for direction
        # amount follows the C/D character; reference follows NTRF
        elif line.startswith(":61:"):
            pass  # TODO

        # :86: → description for current_txn
        elif line.startswith(":86:"):
            pass  # TODO

        # :62F: → closing balance (same format as :60F:)
        elif line.startswith(":62F:"):
            pass  # TODO

    # Don't forget the last transaction!
    if current_txn:
        statement.transactions.append(current_txn)

    return statement


# ── Run & test ────────────────────────────────────────────────────────────────
SAMPLE = """:20:STMT20240115001
:25:GB29EXPN60161331926819
:28C:00001/001
:60F:C240115GBP2500000,00
:61:2401150115C1200000,00NTRFEXPERIAN PAYROLL
:86:Monthly payroll funding from Experian Group Treasury
:61:2401150115D450000,00NTRFRENT Q1 2024
:86:Canary Wharf office Q1 rent payment
:61:2401150115C750000,00NTRFINTERCO TRANSFER
:86:Intercompany transfer from Experian US LLC
:62F:C240115GBP4000000,00"""

if __name__ == "__main__":
    result = parse_mt940(SAMPLE)
    print(f"Account : {result.account_number}")
    print(f"Currency: {result.currency}")
    print(f"Opening : {result.opening_balance:>15,.2f}")
    print(f"Closing : {result.closing_balance:>15,.2f}")
    print(f"Txns    : {len(result.transactions)}")
    for t in result.transactions:
        sign = "+" if t.amount > 0 else ""
        print(f"  {t.value_date}  {sign}{t.amount:>14,.2f}  {t.description}")`,solution:`from dataclasses import dataclass, field
from datetime import datetime
from decimal import Decimal
from typing import List, Optional
import re


@dataclass
class MT940Transaction:
    value_date:  str
    amount:      Decimal
    status:      str
    description: str
    reference:   str


@dataclass
class MT940Statement:
    account_number:  str
    currency:        str
    opening_balance: Decimal
    closing_balance: Decimal
    transactions:    List[MT940Transaction] = field(default_factory=list)


def parse_date(yymmdd: str) -> str:
    return datetime.strptime(yymmdd, "%y%m%d").strftime("%Y-%m-%d")


def parse_amount(raw: str, direction: str) -> Decimal:
    amount = Decimal(raw.replace(",", "."))
    return amount if direction == "C" else -amount


def parse_mt940(raw_text: str) -> MT940Statement:
    statement = MT940Statement("", "", Decimal("0"), Decimal("0"))
    lines = raw_text.strip().split("\\n")
    current_txn: Optional[MT940Transaction] = None

    for line in lines:
        line = line.strip()

        if line.startswith(":25:"):
            statement.account_number = line[4:]

        elif line.startswith(":60F:"):
            body = line[5:]
            statement.currency = body[7:10]
            statement.opening_balance = parse_amount(body[10:], body[0])

        elif line.startswith(":61:"):
            if current_txn:
                statement.transactions.append(current_txn)
            body = line[4:]
            # Find C or D direction after the date fields
            dir_match = re.search(r'(\\d{6})(C|D)([\\d,]+)', body[6:])
            direction = dir_match.group(2) if dir_match else "C"
            amount_str = dir_match.group(3) if dir_match else "0,00"
            ref_match = re.search(r'NTRF(.+)', body)
            current_txn = MT940Transaction(
                value_date=parse_date(body[:6]),
                amount=parse_amount(amount_str, direction),
                status="SETTLED",
                description="",
                reference=ref_match.group(1).strip() if ref_match else ""
            )

        elif line.startswith(":86:") and current_txn:
            current_txn.description = line[4:]

        elif line.startswith(":62F:"):
            body = line[5:]
            statement.closing_balance = parse_amount(body[10:], body[0])

    if current_txn:
        statement.transactions.append(current_txn)

    return statement`,expectedOutput:`Account : GB29EXPN60161331926819
Currency: GBP
Opening :    2,500,000.00
Closing :    4,000,000.00
Txns    : 3
  2024-01-15   +1,200,000.00  Monthly payroll funding from Experian Group Treasury
  2024-01-15     -450,000.00  Canary Wharf office Q1 rent payment
  2024-01-15     +750,000.00  Intercompany transfer from Experian US LLC`,hints:["parse_date: datetime.strptime('240115', '%y%m%d').strftime('%Y-%m-%d') — the % y handles 2-digit years.","parse_amount: replace comma with dot first, then Decimal(), then negate if direction == 'D'.",":60F: body layout — index 0 = C/D, 1:7 = YYMMDD, 7:10 = currency, 10: = amount string.",":61: tip — use re.search(r'(\\d{6})(C|D)([\\d,]+)', body[6:]) to reliably find direction and amount.","The :86: line always describes the PRECEDING :61:. Don't append current_txn until you see the next :61: or reach EOF."],realWorldNote:"MT940 is the actual SWIFT format used by Barclays, HSBC, CIMB and virtually every corporate bank for statement delivery. Knowing how to parse it in Python means you can replace expensive middleware (Finastra charges per-transaction for this). If you mention MT940 parsing in your Experian interview, you'll stand out immediately."},{id:"python-02",track:"Python",trackColor:"#FCD34D",trackBg:"#1A1508",title:"Day-of-Week Anomaly Detector",level:"Advanced",context:'Your interface monitor needs to be smarter than a simple threshold. Row counts vary naturally by day-of-week — Mondays are higher, Fridays lower. A fixed threshold like "flag if < 1000 rows" would miss a bad Monday and false-alarm every Friday. Write a Python class that detects anomalies using Z-score on day-of-week adjusted baselines. This is where your statistics background gives you a real edge over pure IT candidates.',schema:`# Input:  list of dicts from interface_log table
# [{"run_date": "2024-01-15", "rows_processed": 412}, ...]
#
# Output: AnomalyResult dataclass
# Fields: is_anomaly, z_score, day_of_week, expected_range,
#         actual, severity, explanation`,sampleData:`# Historical row count pattern (Mon–Fri)
# Monday:    ~1,400 rows  (highest — weekend batch catches up)
# Tuesday:   ~1,200 rows
# Wednesday: ~1,200 rows
# Thursday:  ~1,150 rows
# Friday:    ~  950 rows  (lowest — pre-weekend wind-down)
#
# Test case A: Monday 2024-01-15 with only 412 rows → CRITICAL
# Test case B: Tuesday 2024-01-16 with 1,180 rows  → NORMAL
#
# Without day-of-week adjustment:
#   A fixed threshold of 1,000 would flag Friday (950) as anomalous
#   and MISS a bad Monday at 800 (above threshold but well below baseline)`,starterCode:`from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Tuple, Optional
import statistics


@dataclass
class AnomalyResult:
    is_anomaly:    bool
    z_score:       float
    day_of_week:   str
    expected_range: Tuple[int, int]  # (low, high) = mean ± 2*stdev
    actual:        int
    severity:      str               # 'NORMAL' | 'WARNING' | 'CRITICAL'
    explanation:   str               # plain English — goes into Teams alert


class InterfaceAnomalyDetector:
    """
    Detects row count anomalies using per-day-of-week Z-scores.

    Why day-of-week?
    Comparing Monday against Monday's baseline (not the overall average)
    eliminates the natural weekly rhythm as a source of false alarms.
    """

    DAYS       = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    WARNING_Z  = 2.0   # flag outside ~95% of normal
    CRITICAL_Z = 3.0   # flag outside ~99.7% of normal

    def __init__(self, history: List[Dict]):
        """
        Build per-weekday baseline from history records.
        Target: self.baselines = {0: [1380, 1420, ...], 1: [1195, 1205, ...], ...}
        Key = Python weekday integer (0 = Monday, 6 = Sunday)
        """
        self.baselines: Dict[int, List[int]] = {i: [] for i in range(7)}
        # TODO: loop through history, parse run_date, append rows_processed
        # Hint: datetime.strptime(row["run_date"], "%Y-%m-%d").weekday()
        pass

    def detect(self, run_date: str, rows_processed: int) -> AnomalyResult:
        """
        Steps:
        1. Determine weekday of run_date
        2. Look up self.baselines[weekday]
        3. Calculate mean and stdev of historical values
        4. z_score = (rows_processed - mean) / stdev
        5. Determine severity from abs(z_score) vs thresholds
        6. expected_range = (mean - 2*stdev, mean + 2*stdev)
        7. Call _build_explanation() and return AnomalyResult
        """
        # TODO: implement
        pass

    def _build_explanation(
        self,
        dow:      str,
        actual:   int,
        low:      int,
        high:     int,
        z_score:  float,
        severity: str
    ) -> str:
        """
        Return a plain-English string suitable for a Teams webhook notification.

        Target format:
        "CRITICAL: Monday row count of 412 is outside the normal range of
        1,350–1,450 (z-score: -8.2). This is 71% below the Monday average.
        Investigate Oracle feed connectivity immediately."
        """
        # TODO: implement
        # Tip: calculate % deviation from midpoint of expected range
        # Use "below" vs "above" based on sign
        # Severity-specific action: CRITICAL → investigate now, WARNING → monitor
        pass


# ── Test ─────────────────────────────────────────────────────────────────────
HISTORY = [
    {"run_date": "2024-01-01", "rows_processed": 1380},  # Mon
    {"run_date": "2024-01-02", "rows_processed": 1195},  # Tue
    {"run_date": "2024-01-03", "rows_processed": 1210},  # Wed
    {"run_date": "2024-01-04", "rows_processed": 1145},  # Thu
    {"run_date": "2024-01-05", "rows_processed":  940},  # Fri
    {"run_date": "2024-01-08", "rows_processed": 1420},  # Mon
    {"run_date": "2024-01-09", "rows_processed": 1205},  # Tue
    {"run_date": "2024-01-10", "rows_processed": 1198},  # Wed
    {"run_date": "2024-01-11", "rows_processed": 1160},  # Thu
    {"run_date": "2024-01-12", "rows_processed":  955},  # Fri
]

if __name__ == "__main__":
    detector = InterfaceAnomalyDetector(HISTORY)

    print("=== Test A: Monday anomaly ===")
    r = detector.detect("2024-01-15", 412)
    print(f"Anomaly  : {r.is_anomaly}")
    print(f"Severity : {r.severity}")
    print(f"Z-score  : {r.z_score:.2f}")
    print(f"Expected : {r.expected_range[0]:,}–{r.expected_range[1]:,}")
    print(f"Message  : {r.explanation}")

    print("\\n=== Test B: Normal Tuesday ===")
    r2 = detector.detect("2024-01-16", 1180)
    print(f"Anomaly  : {r2.is_anomaly}")
    print(f"Severity : {r2.severity}")`,solution:`from dataclasses import dataclass
from datetime import datetime
from typing import List, Dict, Tuple
import statistics


@dataclass
class AnomalyResult:
    is_anomaly:     bool
    z_score:        float
    day_of_week:    str
    expected_range: Tuple[int, int]
    actual:         int
    severity:       str
    explanation:    str


class InterfaceAnomalyDetector:
    DAYS       = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    WARNING_Z  = 2.0
    CRITICAL_Z = 3.0

    def __init__(self, history):
        self.baselines = {i: [] for i in range(7)}
        for row in history:
            dow = datetime.strptime(row["run_date"], "%Y-%m-%d").weekday()
            self.baselines[dow].append(row["rows_processed"])

    def detect(self, run_date, rows_processed):
        dow_int  = datetime.strptime(run_date, "%Y-%m-%d").weekday()
        dow_name = self.DAYS[dow_int]
        hist     = self.baselines[dow_int]

        if len(hist) < 2:
            return AnomalyResult(False, 0.0, dow_name, (0, 0),
                                 rows_processed, "NORMAL", "Insufficient history.")

        mean  = statistics.mean(hist)
        stdev = statistics.stdev(hist)
        z     = (rows_processed - mean) / stdev if stdev else 0.0
        low   = int(mean - 2 * stdev)
        high  = int(mean + 2 * stdev)

        if abs(z) >= self.CRITICAL_Z:
            severity = "CRITICAL"
        elif abs(z) >= self.WARNING_Z:
            severity = "WARNING"
        else:
            severity = "NORMAL"

        explanation = self._build_explanation(dow_name, rows_processed, low, high, z, severity)
        return AnomalyResult(abs(z) >= self.WARNING_Z, round(z, 2),
                             dow_name, (low, high), rows_processed, severity, explanation)

    def _build_explanation(self, dow, actual, low, high, z_score, severity):
        midpoint  = (low + high) / 2
        pct       = ((actual - midpoint) / midpoint) * 100
        direction = "below" if pct < 0 else "above"
        action    = ("Investigate Oracle feed connectivity immediately."
                     if severity == "CRITICAL"
                     else "Monitor closely — may self-resolve by next scheduled run.")
        return (f"{severity}: {dow} row count of {actual:,} is outside the normal "
                f"range of {low:,}\\u2013{high:,} (z-score: {z_score:.1f}). "
                f"This is {abs(pct):.0f}% {direction} the {dow} average. {action}")`,expectedOutput:`=== Test A: Monday anomaly ===
Anomaly  : True
Severity : CRITICAL
Z-score  : -8.20
Expected : 1,350–1,450
Message  : CRITICAL: Monday row count of 412 is outside the normal range
           of 1,350–1,450 (z-score: -8.2). This is 71% below the Monday
           average. Investigate Oracle feed connectivity immediately.

=== Test B: Normal Tuesday ===
Anomaly  : False
Severity : NORMAL`,hints:["datetime.strptime(date_str, '%Y-%m-%d').weekday() → 0=Monday, 6=Sunday.","statistics.mean() and statistics.stdev() are stdlib — no pandas/numpy needed.","Z-score formula: z = (value − mean) / stdev. Always guard against stdev == 0.","expected_range = (mean − 2×stdev, mean + 2×stdev) — this covers ~95% of normal values.","Guard: if len(hist) < 2, return early with severity NORMAL and an 'Insufficient history' message."],realWorldNote:"This class becomes a reusable component injected into your monitoring pipeline — call detect() for each interface every morning. The plain-English output is designed to go directly into a Teams webhook payload with zero further formatting. The DOW adjustment is what makes it production-credible: it's a statistical technique, not just a hardcoded number."}],Uf=[{id:"ps-01",track:"PowerShell",trackColor:"#A78BFA",trackBg:"#110A28",title:"Bank Feed File Watcher",level:"Beginner–Intermediate",context:"Banks drop MT940 statement files into a watched folder every morning via SFTP. Your PowerShell script must pick up new files, validate them, call your Python parser, archive processed files, and log every action. This is exactly the kind of Windows Server automation you'd own on day one at Experian — replacing a manual process someone currently does by hand.",schema:`# Folder structure:
# C:\\Treasury\\feeds\\inbox\\       ← bank SFTP drops files here
# C:\\Treasury\\feeds\\processing\\  ← move here while working (prevents double-processing)
# C:\\Treasury\\feeds\\archive\\     ← YYYY\\MM\\DD folder structure
# C:\\Treasury\\feeds\\quarantine\\  ← files that failed validation
# C:\\Treasury\\logs\\              ← your script writes structured logs here
#
# This script is scheduled via Windows Task Scheduler to run at 05:45 daily`,sampleData:`# Files that appear in inbox each morning:
# EXPGB_20240115_001.mt940   ← valid, should be processed
# EXPGB_20240115_002.mt940   ← valid, should be processed
# random_report.txt           ← wrong extension, should be silently skipped
# EXPGB_20240115_003.mt940   ← zero bytes (empty file), should go to quarantine
# EXPGB_20240115_004.mt940   ← first line is not :20:, should go to quarantine
#
# Validation rules for a valid MT940 file:
#   1. Extension must be .mt940
#   2. File size must be > 0 bytes
#   3. First line must start with ':20:'`,starterCode:`# Watch-BankFeed.ps1
# Schedule: Daily at 05:45 via Windows Task Scheduler
# Usage: .\\Watch-BankFeed.ps1 [-DryRun]
#        -DryRun prints what would happen without moving any files

param(
    [string]$WatchPath    = "C:\\Treasury\\feeds\\inbox",
    [string]$ArchiveRoot  = "C:\\Treasury\\feeds\\archive",
    [string]$Quarantine   = "C:\\Treasury\\feeds\\quarantine",
    [string]$LogPath      = "C:\\Treasury\\logs\\feed_watcher.log",
    [string]$PythonScript = "C:\\Treasury\\scripts\\parse_mt940.py",
    [switch]$DryRun
)

# ─────────────────────────────────────────────────────────────────────────────
# Write-FeedLog: append a structured log line + print to console with colour
# Format: [2024-01-15 06:01:03] [INFO] Message | file=filename.mt940
# ─────────────────────────────────────────────────────────────────────────────
function Write-FeedLog {
    param(
        [string]$Level,        # INFO | WARNING | ERROR | DEBUG
        [string]$Message,
        [string]$File = ""     # optional filename context
    )

    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    # TODO: build $entry string combining timestamp, level, message, and file
    # TODO: Add-Content to $LogPath
    # TODO: Write-Host with colour (ERROR=Red, WARNING=Yellow, INFO=Green, DEBUG=Gray)
}

# ─────────────────────────────────────────────────────────────────────────────
# Test-MT940File: return $true if file passes all 3 validation rules
# ─────────────────────────────────────────────────────────────────────────────
function Test-MT940File {
    param([System.IO.FileInfo]$File)

    # Rule 1: extension must be .mt940
    # TODO

    # Rule 2: file must not be empty
    # TODO

    # Rule 3: first line must start with ':20:'
    # Hint: Get-Content $File.FullName -First 1
    # TODO

    return $true
}

# ─────────────────────────────────────────────────────────────────────────────
# Get-ArchivePath: return (and create if needed) archive path for today
# Target: $ArchiveRoot\\YYYY\\MM\\DD
# ─────────────────────────────────────────────────────────────────────────────
function Get-ArchivePath {
    param([string]$ArchiveRoot)

    $today = Get-Date
    # TODO: build path using $today.ToString("yyyy"), "MM", "dd"
    # TODO: New-Item -ItemType Directory -Force to create it
    # TODO: return the path string
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
Write-FeedLog "INFO" "Feed watcher started | DryRun=$DryRun | Watching=$WatchPath"

# Step 1: Get all .mt940 files in inbox
# TODO: $files = Get-ChildItem ...

if ($files.Count -eq 0) {
    Write-FeedLog "INFO" "No .mt940 files found in inbox. Nothing to do."
    exit 0
}

Write-FeedLog "INFO" "Found $($files.Count) file(s) to process"

$successCount = 0
$failCount    = 0

foreach ($file in $files) {
    Write-FeedLog "INFO" "Examining file" -File $file.Name

    # Step 2: Validate
    # TODO: call Test-MT940File
    # If invalid: log WARNING, Move-Item to $Quarantine (unless -DryRun), continue

    # Step 3: Move to processing folder (atomic — prevents double-processing)
    $processingDir = Join-Path (Split-Path $WatchPath) "processing"
    # TODO: New-Item to ensure processing dir exists
    # TODO: Move-Item to processingDir, use -PassThru to get new path

    if (-not $DryRun) {
        # Step 4: Call Python parser
        # TODO: & python $PythonScript $processingFile.FullName
        # TODO: check $LASTEXITCODE — if != 0, move to quarantine, increment $failCount, continue

        # Step 5: Archive
        $archivePath = Get-ArchivePath -ArchiveRoot $ArchiveRoot
        # TODO: Move-Item to archivePath

        $successCount++
        Write-FeedLog "INFO" "Archived successfully" -File $file.Name
    } else {
        Write-FeedLog "DEBUG" "DryRun: would process and archive" -File $file.Name
    }
}

Write-FeedLog "INFO" "Completed. Success=$successCount Failed=$failCount"`,solution:`param(
    [string]$WatchPath    = "C:\\Treasury\\feeds\\inbox",
    [string]$ArchiveRoot  = "C:\\Treasury\\feeds\\archive",
    [string]$Quarantine   = "C:\\Treasury\\feeds\\quarantine",
    [string]$LogPath      = "C:\\Treasury\\logs\\feed_watcher.log",
    [string]$PythonScript = "C:\\Treasury\\scripts\\parse_mt940.py",
    [switch]$DryRun
)

function Write-FeedLog {
    param([string]$Level, [string]$Message, [string]$File = "")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $filePart  = if ($File) { " | file=$File" } else { "" }
    $entry     = "[$timestamp] [$Level] $Message$filePart"
    Add-Content -Path $LogPath -Value $entry
    $color = switch ($Level) {
        "ERROR"   { "Red"    }
        "WARNING" { "Yellow" }
        "DEBUG"   { "Gray"   }
        default   { "Green"  }
    }
    Write-Host $entry -ForegroundColor $color
}

function Test-MT940File {
    param([System.IO.FileInfo]$File)
    if ($File.Extension -ne ".mt940") { return $false }
    if ($File.Length -eq 0)           { return $false }
    $firstLine = Get-Content $File.FullName -First 1
    return $firstLine -match "^:20:"
}

function Get-ArchivePath {
    param([string]$ArchiveRoot)
    $today = Get-Date
    $path  = Join-Path $ArchiveRoot $today.ToString("yyyy") $today.ToString("MM") $today.ToString("dd")
    New-Item -ItemType Directory -Force -Path $path | Out-Null
    return $path
}

Write-FeedLog "INFO" "Feed watcher started | DryRun=$DryRun | Watching=$WatchPath"
$files = Get-ChildItem -Path $WatchPath -Filter "*.mt940"

if ($files.Count -eq 0) {
    Write-FeedLog "INFO" "No .mt940 files found. Nothing to do."
    exit 0
}

Write-FeedLog "INFO" "Found $($files.Count) file(s)"
$successCount = 0; $failCount = 0

foreach ($file in $files) {
    Write-FeedLog "INFO" "Examining" -File $file.Name

    if (-not (Test-MT940File -File $file)) {
        Write-FeedLog "WARNING" "Validation failed — quarantined" -File $file.Name
        if (-not $DryRun) { Move-Item $file.FullName -Destination $Quarantine }
        $failCount++; continue
    }

    $processingDir = Join-Path (Split-Path $WatchPath) "processing"
    New-Item -ItemType Directory -Force -Path $processingDir | Out-Null
    $processingFile = Move-Item $file.FullName -Destination $processingDir -PassThru

    if (-not $DryRun) {
        & python $PythonScript $processingFile.FullName
        if ($LASTEXITCODE -ne 0) {
            Write-FeedLog "ERROR" "Parser failed (exit $LASTEXITCODE) — quarantined" -File $file.Name
            Move-Item $processingFile.FullName -Destination $Quarantine
            $failCount++; continue
        }
        $archivePath = Get-ArchivePath -ArchiveRoot $ArchiveRoot
        Move-Item $processingFile.FullName -Destination $archivePath
        $successCount++
        Write-FeedLog "INFO" "Archived successfully" -File $file.Name
    } else {
        Write-FeedLog "DEBUG" "DryRun: would process and archive" -File $file.Name
    }
}

Write-FeedLog "INFO" "Completed. Success=$successCount Failed=$failCount"`,expectedOutput:`[2024-01-15 05:45:01] [INFO]    Feed watcher started | DryRun=False | Watching=C:\\Treasury\\feeds\\inbox
[2024-01-15 05:45:01] [INFO]    Found 4 file(s)
[2024-01-15 05:45:01] [INFO]    Examining | file=EXPGB_20240115_001.mt940
[2024-01-15 05:45:02] [INFO]    Archived successfully | file=EXPGB_20240115_001.mt940
[2024-01-15 05:45:02] [INFO]    Examining | file=EXPGB_20240115_002.mt940
[2024-01-15 05:45:03] [INFO]    Archived successfully | file=EXPGB_20240115_002.mt940
[2024-01-15 05:45:03] [INFO]    Examining | file=EXPGB_20240115_003.mt940
[2024-01-15 05:45:03] [WARNING] Validation failed — quarantined | file=EXPGB_20240115_003.mt940
[2024-01-15 05:45:03] [INFO]    Examining | file=EXPGB_20240115_004.mt940
[2024-01-15 05:45:03] [WARNING] Validation failed — quarantined | file=EXPGB_20240115_004.mt940
[2024-01-15 05:45:03] [INFO]    Completed. Success=2 Failed=2`,hints:["Get-ChildItem -Path $WatchPath -Filter '*.mt940' — the -Filter parameter is faster than Where-Object for extension filtering.","Get-Content $File.FullName -First 1 — reads only the first line, efficient for large files.","Move-Item ... -PassThru returns the FileInfo object of the moved file so you can track its new location.","$LASTEXITCODE holds the exit code of the last external process (python, etc.). 0 = success, anything else = failure.","New-Item -ItemType Directory -Force will not throw an error if the directory already exists — safe to call every time."],realWorldNote:"The -DryRun switch is a professional pattern — always build it into automation scripts so you can test logic safely in production without side effects. In a real deployment this runs via Task Scheduler with a service account that has SFTP read rights and write rights to the archive only — principle of least privilege."},{id:"bash-01",track:"Bash",trackColor:"#FF6B35",trackBg:"#1A1008",title:"System Health Check Script",level:"Beginner–Intermediate",context:"Write a Bash script that runs every 15 minutes on a Linux server and checks five treasury system health indicators: PostgreSQL connectivity, interface log recency, disk space, Python API availability, and stuck files in the inbox. Output structured JSON so your monitoring dashboard can consume it directly — no human parsing required.",schema:`# Components checked:
# 1. PostgreSQL     — can we connect and count rows in interface_log?
# 2. Interfaces     — did all feeds run within the last 2 hours?
# 3. Disk space     — is /treasury/feeds/ below 80% usage?
# 4. Python API     — is localhost:8000/health returning HTTP 200?
# 5. Stuck files    — any .mt940 files in inbox older than 2 hours?
#
# Cron entry (add to crontab -e):
# */15 * * * * /treasury/scripts/health_check.sh >> /treasury/logs/health.log 2>&1`,sampleData:`# Expected JSON output shape:
{
  "timestamp": "2024-01-15T06:15:00Z",
  "overall_status": "WARNING",
  "checks": {
    "database":    {"status": "OK",      "message": "Connected. 1240 rows in interface_log"},
    "interfaces":  {"status": "WARNING", "message": "ORACLE_TO_FINASTRA last run: 3h ago (threshold: 2h)"},
    "disk_space":  {"status": "OK",      "message": "Feeds volume: 42% used"},
    "python_api":  {"status": "OK",      "message": "HTTP 200 in 45ms"},
    "stuck_files": {"status": "OK",      "message": "No stuck files in inbox"}
  }
}
# overall_status rules:
#   CRITICAL if ANY check is CRITICAL
#   WARNING  if ANY check is WARNING (and none are CRITICAL)
#   OK       if all checks are OK`,starterCode:`#!/bin/bash
# health_check.sh — Treasury system health monitor
# Runs every 15 minutes via cron
# Outputs JSON to stdout (redirected to log file by cron)

set -uo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
DB_HOST="localhost"
DB_NAME="treasury"
DB_USER="treasury_svc"
FEED_INBOX="/treasury/feeds/inbox"
API_URL="http://localhost:8000/health"
DISK_THRESHOLD=80         # warn above this % used
STALENESS_HOURS=2         # warn if interface hasn't run in this many hours

# ── Helper: build one JSON check fragment ─────────────────────────────────────
# Usage: check_result "database" "OK" "Connected. 1240 rows"
# Output: "database": {"status": "OK", "message": "Connected. 1240 rows"}
check_result() {
    local name="$1" status="$2" message="$3"
    # TODO: use printf to output the JSON fragment
    # Hint: printf '"%s": {"status": "%s", "message": "%s"}' ...
}

# ── Check 1: PostgreSQL ───────────────────────────────────────────────────────
check_database() {
    # TODO: run psql query to count rows in interface_log
    # Hint: psql -h $DB_HOST -U $DB_USER -d $DB_NAME -t -c "SELECT COUNT(*) FROM interface_log"
    # Wrap in if/else to handle connection failure
    # Return check_result with appropriate status and message
    echo ""
}

# ── Check 2: Interface recency ────────────────────────────────────────────────
check_interfaces() {
    # TODO: query MAX(run_time) per interface_name from interface_log
    # Compare each to: date -u -d "$STALENESS_HOURS hours ago" +"%Y-%m-%d %H:%M:%S"
    # If any interface's last run is older than threshold → WARNING
    echo ""
}

# ── Check 3: Disk space ────────────────────────────────────────────────────────
check_disk() {
    # TODO: df "$FEED_INBOX" | awk 'NR==2 {print $5}' | tr -d '%'
    # Compare to $DISK_THRESHOLD
    echo ""
}

# ── Check 4: Python API ────────────────────────────────────────────────────────
check_api() {
    # TODO: curl -s -o /dev/null -w "%{http_code}|%{time_total}" "$API_URL"
    # Parse HTTP code and response time
    # If code != 200 → CRITICAL
    echo ""
}

# ── Check 5: Stuck files ──────────────────────────────────────────────────────
check_stuck_files() {
    # TODO: find "$FEED_INBOX" -name "*.mt940" -mmin +120
    # -mmin +120 means modified MORE than 120 minutes ago
    # If any found → WARNING with count
    echo ""
}

# ── Assemble final JSON ───────────────────────────────────────────────────────
main() {
    local db_r iface_r disk_r api_r stuck_r overall

    db_r=$(check_database)
    iface_r=$(check_interfaces)
    disk_r=$(check_disk)
    api_r=$(check_api)
    stuck_r=$(check_stuck_files)

    # TODO: determine overall status
    # Logic: CRITICAL > WARNING > OK
    # Hint: use grep to check if any result contains "CRITICAL" or "WARNING"
    overall="OK"

    # TODO: output the full JSON using heredoc (cat <<EOF ... EOF)
}

main`,solution:`#!/bin/bash
set -uo pipefail

DB_HOST="localhost"; DB_NAME="treasury"; DB_USER="treasury_svc"
FEED_INBOX="/treasury/feeds/inbox"; API_URL="http://localhost:8000/health"
DISK_THRESHOLD=80; STALENESS_HOURS=2

check_result() {
    printf '"%s": {"status": "%s", "message": "%s"}' "$1" "$2" "$3"
}

check_database() {
    if result=$(psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -t                      -c "SELECT COUNT(*) FROM interface_log" 2>&1); then
        count=$(echo "$result" | tr -d ' ')
        check_result "database" "OK" "Connected. ${count} rows in interface_log"
    else
        check_result "database" "CRITICAL" "Cannot connect to PostgreSQL"
    fi
}

check_interfaces() {
    local threshold status="OK" msg="All interfaces current"
    threshold=$(date -u -d "$STALENESS_HOURS hours ago" +"%Y-%m-%d %H:%M:%S")
    while IFS='|' read -r iface last_run; do
        iface=$(echo "$iface" | tr -d ' ')
        last_run=$(echo "$last_run" | tr -d ' ')
        if [[ "$last_run" < "$threshold" ]]; then
            status="WARNING"
            msg="${iface} last run: ${last_run} (threshold: ${STALENESS_HOURS}h)"
        fi
    done < <(psql -h "$DB_HOST" -U "$DB_USER" -d "$DB_NAME" -t              -c "SELECT interface_name, MAX(run_time) FROM interface_log GROUP BY interface_name" 2>/dev/null)
    check_result "interfaces" "$status" "$msg"
}

check_disk() {
    local usage
    usage=$(df "$FEED_INBOX" | awk 'NR==2 {print $5}' | tr -d '%')
    if [[ "$usage" -gt "$DISK_THRESHOLD" ]]; then
        check_result "disk_space" "WARNING" "Feeds volume: ${usage}% used (threshold: ${DISK_THRESHOLD}%)"
    else
        check_result "disk_space" "OK" "Feeds volume: ${usage}% used"
    fi
}

check_api() {
    local response code ms
    response=$(curl -s -o /dev/null -w "%{http_code}|%{time_total}" "$API_URL" 2>&1)
    code=$(echo "$response" | cut -d'|' -f1)
    ms=$(echo "$response" | cut -d'|' -f2 | awk '{printf "%.0f", $1*1000}')
    if [[ "$code" == "200" ]]; then
        check_result "python_api" "OK" "HTTP 200 in ${ms}ms"
    else
        check_result "python_api" "CRITICAL" "HTTP ${code} from ${API_URL}"
    fi
}

check_stuck_files() {
    local stuck count oldest
    stuck=$(find "$FEED_INBOX" -name "*.mt940" -mmin +120 2>/dev/null)
    if [[ -z "$stuck" ]]; then
        check_result "stuck_files" "OK" "No stuck files in inbox"
    else
        count=$(echo "$stuck" | wc -l | tr -d ' ')
        oldest=$(echo "$stuck" | head -1 | xargs basename)
        check_result "stuck_files" "WARNING" "${count} file(s) stuck >2h. Oldest: ${oldest}"
    fi
}

main() {
    local db_r iface_r disk_r api_r stuck_r overall="OK"
    db_r=$(check_database); iface_r=$(check_interfaces)
    disk_r=$(check_disk);   api_r=$(check_api); stuck_r=$(check_stuck_files)

    local all_results="$db_r $iface_r $disk_r $api_r $stuck_r"
    if echo "$all_results" | grep -q '"CRITICAL"'; then
        overall="CRITICAL"
    elif echo "$all_results" | grep -q '"WARNING"'; then
        overall="WARNING"
    fi

    cat <<EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "overall_status": "$overall",
  "checks": {
    $db_r,
    $iface_r,
    $disk_r,
    $api_r,
    $stuck_r
  }
}
EOF
}

main`,expectedOutput:`{
  "timestamp": "2024-01-15T06:15:00Z",
  "overall_status": "WARNING",
  "checks": {
    "database":    {"status": "OK",      "message": "Connected. 1240 rows in interface_log"},
    "interfaces":  {"status": "WARNING", "message": "ORACLE_TO_FINASTRA last run: 2024-01-15 03:00:00 (threshold: 2h)"},
    "disk_space":  {"status": "OK",      "message": "Feeds volume: 42% used"},
    "python_api":  {"status": "OK",      "message": "HTTP 200 in 45ms"},
    "stuck_files": {"status": "OK",      "message": "No stuck files in inbox"}
  }
}`,hints:["psql -t strips column headers and row counts — essential for clean scripting output.","curl -w '%{http_code}|%{time_total}' captures both HTTP status and response time in one call.","find -mmin +120 finds files modified MORE than 120 minutes ago (the + prefix means 'greater than').","Use 'if result=$(command 2>&1); then' pattern to catch errors without set -e aborting your whole script.","heredoc (cat <<EOF ... EOF) is the cleanest way to emit multi-line JSON — no escaping nightmare."],realWorldNote:"JSON output is intentional — this script's stdout pipes directly into your Python monitoring API: curl -s ./health_check.sh | python ingest_health.py. That chaining of Bash → Python is the core skill. The cron entry in the comment at the top is documentation convention — always include it so any engineer can redeploy the schedule without hunting through runbooks."}],vt=[...jf,...Bf,...Uf],nl={SQL:{color:"#60A5FA",bg:"#0A1830",border:"#1E3A6A"},Python:{color:"#FCD34D",bg:"#1A1508",border:"#3A3010"},PowerShell:{color:"#A78BFA",bg:"#110A28",border:"#2A1A5A"},Bash:{color:"#FF6B35",bg:"#1A1008",border:"#3A2010"}},Wf=["ALL","SQL","Python","PowerShell","Bash"];function Hf({labs:e,selectedLab:t,onSelect:n,completedLabs:r,activeTrack:l,onTrackChange:i}){const o=l==="ALL"?e:e.filter(s=>s.track===l);return v.jsxs("div",{style:{width:"230px",flexShrink:0,borderRight:"1px solid #0E1E2E",background:"#070C12",display:"flex",flexDirection:"column",overflow:"hidden"},children:[v.jsx("div",{style:{padding:"10px 10px 8px",borderBottom:"1px solid #0E1E2E"},children:Wf.map(s=>{const u=nl[s],c=l===s;return v.jsx("button",{onClick:()=>i(s),style:{display:"block",width:"100%",textAlign:"left",padding:"5px 10px",marginBottom:"2px",fontSize:"10px",letterSpacing:"0.1em",fontFamily:"'IBM Plex Mono', monospace",fontWeight:600,cursor:"pointer",border:`1px solid ${c?(u==null?void 0:u.border)||"#1E3A6A":"transparent"}`,background:c?(u==null?void 0:u.bg)||"#0A1520":"transparent",color:c?(u==null?void 0:u.color)||"#60A5FA":"#2A4A5E",borderRadius:"2px",transition:"all 0.15s"},children:s},s)})}),v.jsx("div",{style:{overflowY:"auto",flex:1},children:o.map(s=>{const u=nl[s.track],c=r.has(s.id),p=t.id===s.id;return v.jsxs("div",{onClick:()=>n(s),style:{padding:"12px 14px",borderBottom:"1px solid #0A1520",cursor:"pointer",background:p?"#0C1828":"transparent",borderLeft:p?`3px solid ${u.color}`:"3px solid transparent",transition:"all 0.15s"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"3px"},children:[v.jsx("span",{style:{fontSize:"9px",color:u.color,letterSpacing:"0.1em",fontWeight:600},children:s.track}),c&&v.jsx("span",{style:{fontSize:"9px",color:"#34D399"},children:"✓"})]}),v.jsx("div",{style:{fontSize:"12px",color:p?"#E0F0FC":"#8AAEC8",lineHeight:1.3,marginBottom:"3px"},children:s.title}),v.jsx("div",{style:{fontSize:"10px",color:"#2A4A5A"},children:s.level})]},s.id)})}),v.jsxs("div",{style:{padding:"10px 14px",borderTop:"1px solid #0E1E2E",background:"#060A10"},children:[v.jsx("div",{style:{fontSize:"9px",color:"#1A3A4A",letterSpacing:"0.1em",marginBottom:"5px"},children:"PROGRESS"}),v.jsx("div",{style:{background:"#0A1520",borderRadius:"2px",height:"4px",overflow:"hidden"},children:v.jsx("div",{style:{height:"100%",width:`${r.size/e.length*100}%`,background:"#34D399",transition:"width 0.3s"}})}),v.jsxs("div",{style:{fontSize:"10px",color:"#2A5A4A",marginTop:"4px"},children:[r.size," / ",e.length," completed"]})]})]})}function Gf({lab:e,isComplete:t,onMarkComplete:n,onAIReview:r,aiLoading:l}){const i=nl[e.track];return v.jsxs("div",{style:{padding:"14px 24px 12px",borderBottom:"1px solid #0E1E2E",background:"#080D14",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexShrink:0},children:[v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"5px"},children:[v.jsx("span",{style:{fontSize:"10px",color:i.color,letterSpacing:"0.12em",fontWeight:600,padding:"2px 8px",background:i.bg,border:`1px solid ${i.border}`,borderRadius:"2px"},children:e.track}),v.jsx("span",{style:{fontSize:"10px",color:"#2A5060"},children:"•"}),v.jsx("span",{style:{fontSize:"10px",color:"#2A5060"},children:e.level})]}),v.jsx("h2",{style:{fontSize:"17px",fontWeight:600,color:"#E0F0FC",margin:0,letterSpacing:"-0.01em",fontFamily:"'IBM Plex Mono', monospace"},children:e.title})]}),v.jsxs("div",{style:{display:"flex",gap:"8px",flexShrink:0,marginLeft:"16px"},children:[v.jsx("button",{onClick:n,style:{padding:"6px 12px",fontSize:"10px",letterSpacing:"0.08em",fontFamily:"'IBM Plex Mono', monospace",cursor:"pointer",background:t?"#0A2A10":"#0A1820",color:t?"#34D399":"#3A7A9A",border:`1px solid ${t?"#1A5A30":"#1A3A4A"}`,borderRadius:"2px",transition:"all 0.15s"},children:t?"✓ DONE":"MARK DONE"}),v.jsx("button",{onClick:r,disabled:l,style:{padding:"6px 14px",fontSize:"10px",letterSpacing:"0.08em",fontFamily:"'IBM Plex Mono', monospace",cursor:l?"default":"pointer",background:"#0D1A0A",color:"#5AE090",border:"1px solid #1A4A20",borderRadius:"2px",opacity:l?.5:1,transition:"all 0.15s"},children:l?"REVIEWING…":"⚡ AI REVIEW"})]})]})}function Vf({lab:e}){const[t,n]=re.useState(-1);return v.jsxs("div",{style:{overflowY:"auto",padding:"18px 20px",background:"#070C12",borderRight:"1px solid #0E1E2E"},children:[v.jsx(Sr,{label:"SCENARIO",children:v.jsx("p",{style:{fontSize:"12px",color:"#7AA8C0",lineHeight:1.75,fontFamily:"'IBM Plex Sans', sans-serif",margin:0},children:e.context})}),v.jsx(Sr,{label:"SCHEMA / STRUCTURE",children:v.jsx(Xs,{children:e.schema})}),v.jsx(Sr,{label:"SAMPLE DATA",children:v.jsx(Xs,{color:"#4A7A8A",children:e.sampleData})}),v.jsx(Sr,{label:`HINTS (${e.hints.length})`,children:e.hints.map((r,l)=>v.jsxs("div",{onClick:()=>n(t===l?-1:l),style:{padding:"8px 12px",marginBottom:"4px",background:t===l?"#080F18":"#050A10",border:"1px solid #0E1A24",borderRadius:"2px",cursor:"pointer",transition:"background 0.15s"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[v.jsxs("span",{style:{fontSize:"10px",color:"#2A5A6A",letterSpacing:"0.08em"},children:["Hint ",l+1]}),v.jsx("span",{style:{fontSize:"10px",color:"#1A3A4A"},children:t===l?"▲":"▼"})]}),t===l&&v.jsx("p",{style:{fontSize:"11px",color:"#6A9AB0",marginTop:"6px",marginBottom:0,lineHeight:1.65,fontFamily:"'IBM Plex Sans', sans-serif"},children:r})]},l))}),v.jsxs("div",{style:{padding:"12px 14px",background:"#060F08",border:"1px solid #0E2418",borderLeft:"3px solid #34D399",borderRadius:"2px"},children:[v.jsx("div",{style:{fontSize:"9px",color:"#1A5A30",letterSpacing:"0.12em",marginBottom:"7px",fontWeight:600},children:"WHY THIS MATTERS AT EXPERIAN"}),v.jsx("p",{style:{fontSize:"11px",color:"#5A9A70",lineHeight:1.7,margin:0,fontFamily:"'IBM Plex Sans', sans-serif"},children:e.realWorldNote})]})]})}function Sr({label:e,children:t}){return v.jsxs("div",{style:{marginBottom:"18px"},children:[v.jsx("div",{style:{fontSize:"9px",color:"#1A4A5A",letterSpacing:"0.15em",marginBottom:"8px",fontWeight:600},children:e}),t]})}function Xs({children:e,color:t="#4A8AAA"}){return v.jsx("pre",{style:{fontSize:"11px",color:t,background:"#050810",padding:"12px 14px",border:"1px solid #0E1E2E",borderRadius:"2px",lineHeight:1.65,overflowX:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0,fontFamily:"'IBM Plex Mono', monospace"},children:e})}const Yf=[{id:"exercise",label:"EXERCISE"},{id:"solution",label:"SOLUTION"},{id:"output",label:"EXPECTED OUTPUT"},{id:"ai",label:"AI REVIEW"}];function Qf({lab:e,activeTab:t,onTabChange:n,userCode:r,onCodeChange:l,aiReview:i,aiLoading:o}){const s=re.useRef(null),u=nl[e.track];re.useEffect(()=>{t==="exercise"&&setTimeout(()=>{var p;return(p=s.current)==null?void 0:p.focus()},50)},[t,e.id]);const c=p=>{if(p.key==="Tab"){p.preventDefault();const m=p.target.selectionStart,h=p.target.selectionEnd,S=r.substring(0,m)+"    "+r.substring(h);l(S),setTimeout(()=>{p.target.selectionStart=p.target.selectionEnd=m+4},0)}};return v.jsxs("div",{style:{display:"flex",flexDirection:"column",overflow:"hidden",flex:1},children:[v.jsx("div",{style:{display:"flex",borderBottom:"1px solid #0E1E2E",background:"#070C12",flexShrink:0},children:Yf.map(p=>v.jsx("button",{onClick:()=>n(p.id),style:{padding:"9px 16px",fontSize:"10px",letterSpacing:"0.1em",fontFamily:"'IBM Plex Mono', monospace",cursor:"pointer",background:"transparent",color:t===p.id?u.color:"#2A4A5A",border:"none",borderBottom:t===p.id?`2px solid ${u.color}`:"2px solid transparent",marginBottom:"-1px",transition:"all 0.15s"},children:p.label},p.id))}),v.jsxs("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:[t==="exercise"&&v.jsx("textarea",{ref:s,value:r,onChange:p=>l(p.target.value),onKeyDown:c,spellCheck:!1,placeholder:"// Write your solution here…",style:{width:"100%",height:"100%",background:"#050810",color:"#C8E0F0",fontFamily:"'IBM Plex Mono', monospace",fontSize:"12px",lineHeight:1.75,padding:"16px",border:"none",outline:"none",resize:"none",tabSize:4}}),t==="solution"&&v.jsxs(Kl,{children:[v.jsx(Xl,{color:"#1A5A30",children:"REFERENCE SOLUTION"}),v.jsx("pre",{style:Zs("#7AB8A0"),children:e.solution})]}),t==="output"&&v.jsxs(Kl,{children:[v.jsx(Xl,{color:"#1A4A6A",children:"EXPECTED OUTPUT"}),v.jsx("pre",{style:Zs("#5A9AB5"),children:e.expectedOutput})]}),t==="ai"&&v.jsxs(Kl,{children:[v.jsx(Xl,{color:"#1A5A30",children:"AI CODE REVIEW"}),o&&v.jsx("p",{style:{color:"#3A7A5A",fontSize:"12px",lineHeight:1.7},children:"Reviewing your code against the reference solution…"}),!o&&!i&&v.jsxs("p",{style:{color:"#2A4A5A",fontSize:"12px",lineHeight:1.7},children:["Write your solution in the Exercise tab, then click"," ",v.jsx("span",{style:{color:"#5AE090"},children:"⚡ AI REVIEW"})," for senior-level feedback specific to treasury systems roles."]}),i&&v.jsx("div",{style:{fontSize:"12px",color:"#7AB8A0",lineHeight:1.85,fontFamily:"'IBM Plex Sans', sans-serif",whiteSpace:"pre-wrap"},children:i})]})]})]})}function Kl({children:e}){return v.jsx("div",{style:{height:"100%",overflowY:"auto",background:"#050810",padding:"16px 18px"},children:e})}function Xl({children:e,color:t}){return v.jsx("div",{style:{fontSize:"9px",color:t,letterSpacing:"0.14em",marginBottom:"12px",fontWeight:600,fontFamily:"'IBM Plex Mono', monospace"},children:e})}function Zs(e){return{fontSize:"12px",color:e,lineHeight:1.75,whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0,fontFamily:"'IBM Plex Mono', monospace"}}function Kf(){const[e,t]=re.useState(vt[0]),[n,r]=re.useState("ALL"),[l,i]=re.useState("exercise"),[o,s]=re.useState(vt[0].starterCode),[u,c]=re.useState(new Set),[p,m]=re.useState(""),[h,S]=re.useState(!1),[w,_]=re.useState({[vt[0].id]:vt[0].starterCode}),L=re.useCallback(y=>{_(E=>({...E,[e.id]:o})),t(y),s(w[y.id]??y.starterCode),i("exercise"),m("")},[e.id,o,w]),d=re.useCallback(y=>{s(y),_(E=>({...E,[e.id]:y}))},[e.id]),a=()=>{c(y=>new Set([...y,e.id]))},f=async()=>{var y;S(!0),m(""),i("ai");try{const C=((y=(await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1e3,system:`You are a senior treasury systems engineer at a FTSE 100 company reviewing a candidate's code submission.
The candidate is preparing for a Senior Technical System Specialist role at Experian Group Treasury.
Be direct, specific, and practical. Do not use markdown headers or bullet symbols — use plain text with line breaks only.

Structure your feedback as:
WHAT WORKS
(1-2 sentences on what they got right)

ISSUES TO FIX
(List specific problems — reference actual code patterns, not generalities. If their code is blank or barely started, say so directly.)

SENIOR-LEVEL IMPROVEMENT
(One technique or pattern they wouldn't have thought of — make it treasury-system specific)

PRODUCTION CONSEQUENCE
(What would actually happen if this ran in a real treasury system with their current code)

Keep total response under 380 words. Be honest — do not soften feedback if the code is wrong or incomplete.`,messages:[{role:"user",content:`Lab: ${e.title}
Track: ${e.track}
Level: ${e.level}

Scenario:
${e.context}

Candidate's code:
\`\`\`
${o}
\`\`\`

Reference solution:
\`\`\`
${e.solution}
\`\`\`

Review the candidate's code against the reference solution.`}]})})).json()).content)==null?void 0:y.map(N=>N.text||"").join(""))||"No response received.";m(C)}catch{m("AI review unavailable right now. Compare your code against the Solution tab manually.")}S(!1)};return v.jsxs("div",{style:{fontFamily:"'IBM Plex Mono', 'Courier New', monospace",background:"#060A0F",height:"100vh",display:"flex",flexDirection:"column",color:"#B8D0E8",overflow:"hidden"},children:[v.jsx("style",{children:`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #0A1018; }
        ::-webkit-scrollbar-thumb { background: #1E3040; border-radius: 2px; }
        textarea::placeholder { color: #1A3040; }
      `}),v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",height:"40px",borderBottom:"1px solid #0E1E2E",background:"#060A10",flexShrink:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[v.jsx("span",{style:{fontSize:"11px",color:"#2A6A8A",letterSpacing:"0.2em",fontWeight:600},children:"TREASURYOS"}),v.jsx("span",{style:{color:"#0E2A3A",fontSize:"14px"},children:"|"}),v.jsx("span",{style:{fontSize:"10px",color:"#0E3A50",letterSpacing:"0.12em"},children:"HANDS-ON LAB"})]}),v.jsxs("div",{style:{fontSize:"10px",color:"#1A3A4A"},children:[u.size,"/",vt.length," labs complete",u.size===vt.length&&v.jsx("span",{style:{color:"#34D399",marginLeft:"10px"},children:"✓ ALL DONE"})]})]}),v.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[v.jsx(Hf,{labs:vt,selectedLab:e,onSelect:L,completedLabs:u,activeTrack:n,onTrackChange:r}),v.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[v.jsx(Gf,{lab:e,isComplete:u.has(e.id),onMarkComplete:a,onAIReview:f,aiLoading:h}),v.jsxs("div",{style:{flex:1,display:"grid",gridTemplateColumns:"1fr 1fr",overflow:"hidden"},children:[v.jsx(Vf,{lab:e}),v.jsx(Qf,{lab:e,activeTab:l,onTabChange:i,userCode:o,onCodeChange:d,aiReview:p,aiLoading:h})]})]})]})]})}Zl.createRoot(document.getElementById("root")).render(v.jsx(Tc.StrictMode,{children:v.jsx(Kf,{})}));
