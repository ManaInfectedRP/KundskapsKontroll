(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))A(O);new MutationObserver(O=>{for(const I of O)if(I.type==="childList")for(const re of I.addedNodes)re.tagName==="LINK"&&re.rel==="modulepreload"&&A(re)}).observe(document,{childList:!0,subtree:!0});function p(O){const I={};return O.integrity&&(I.integrity=O.integrity),O.referrerPolicy&&(I.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?I.credentials="include":O.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function A(O){if(O.ep)return;O.ep=!0;const I=p(O);fetch(O.href,I)}})();function Vs(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var zi={exports:{}},wr={},ji={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs;function Af(){if(zs)return Q;zs=1;var w=Symbol.for("react.element"),_=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),re=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Y=Symbol.iterator;function X(c){return c===null||typeof c!="object"?null:(c=Y&&c[Y]||c["@@iterator"],typeof c=="function"?c:null)}var Ee={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,W={};function F(c,g,U){this.props=c,this.context=g,this.refs=W,this.updater=U||Ee}F.prototype.isReactComponent={},F.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},F.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Ce(){}Ce.prototype=F.prototype;function we(c,g,U){this.props=c,this.context=g,this.refs=W,this.updater=U||Ee}var ge=we.prototype=new Ce;ge.constructor=we,Me(ge,F.prototype),ge.isPureReactComponent=!0;var ie=Array.isArray,De=Object.prototype.hasOwnProperty,de={current:null},ke={key:!0,ref:!0,__self:!0,__source:!0};function _e(c,g,U){var L,J={},q=null,le=null;if(g!=null)for(L in g.ref!==void 0&&(le=g.ref),g.key!==void 0&&(q=""+g.key),g)De.call(g,L)&&!ke.hasOwnProperty(L)&&(J[L]=g[L]);var ee=arguments.length-2;if(ee===1)J.children=U;else if(1<ee){for(var ce=Array(ee),qe=0;qe<ee;qe++)ce[qe]=arguments[qe+2];J.children=ce}if(c&&c.defaultProps)for(L in ee=c.defaultProps,ee)J[L]===void 0&&(J[L]=ee[L]);return{$$typeof:w,type:c,key:q,ref:le,props:J,_owner:de.current}}function H(c,g){return{$$typeof:w,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function Je(c){return typeof c=="object"&&c!==null&&c.$$typeof===w}function rt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(U){return g[U]})}var $e=/\/+/g;function $(c,g){return typeof c=="object"&&c!==null&&c.key!=null?rt(""+c.key):g.toString(36)}function ve(c,g,U,L,J){var q=typeof c;(q==="undefined"||q==="boolean")&&(c=null);var le=!1;if(c===null)le=!0;else switch(q){case"string":case"number":le=!0;break;case"object":switch(c.$$typeof){case w:case _:le=!0}}if(le)return le=c,J=J(le),c=L===""?"."+$(le,0):L,ie(J)?(U="",c!=null&&(U=c.replace($e,"$&/")+"/"),ve(J,g,U,"",function(qe){return qe})):J!=null&&(Je(J)&&(J=H(J,U+(!J.key||le&&le.key===J.key?"":(""+J.key).replace($e,"$&/")+"/")+c)),g.push(J)),1;if(le=0,L=L===""?".":L+":",ie(c))for(var ee=0;ee<c.length;ee++){q=c[ee];var ce=L+$(q,ee);le+=ve(q,g,U,ce,J)}else if(ce=X(c),typeof ce=="function")for(c=ce.call(c),ee=0;!(q=c.next()).done;)q=q.value,ce=L+$(q,ee++),le+=ve(q,g,U,ce,J);else if(q==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return le}function ze(c,g,U){if(c==null)return c;var L=[],J=0;return ve(c,L,"","",function(q){return g.call(U,q,J++)}),L}function Fe(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(U){(c._status===0||c._status===-1)&&(c._status=1,c._result=U)},function(U){(c._status===0||c._status===-1)&&(c._status=2,c._result=U)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var se={current:null},h={transition:null},E={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:h,ReactCurrentOwner:de};function C(){throw Error("act(...) is not supported in production builds of React.")}return Q.Children={map:ze,forEach:function(c,g,U){ze(c,function(){g.apply(this,arguments)},U)},count:function(c){var g=0;return ze(c,function(){g++}),g},toArray:function(c){return ze(c,function(g){return g})||[]},only:function(c){if(!Je(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},Q.Component=F,Q.Fragment=p,Q.Profiler=O,Q.PureComponent=we,Q.StrictMode=A,Q.Suspense=B,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,Q.act=C,Q.cloneElement=function(c,g,U){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var L=Me({},c.props),J=c.key,q=c.ref,le=c._owner;if(g!=null){if(g.ref!==void 0&&(q=g.ref,le=de.current),g.key!==void 0&&(J=""+g.key),c.type&&c.type.defaultProps)var ee=c.type.defaultProps;for(ce in g)De.call(g,ce)&&!ke.hasOwnProperty(ce)&&(L[ce]=g[ce]===void 0&&ee!==void 0?ee[ce]:g[ce])}var ce=arguments.length-2;if(ce===1)L.children=U;else if(1<ce){ee=Array(ce);for(var qe=0;qe<ce;qe++)ee[qe]=arguments[qe+2];L.children=ee}return{$$typeof:w,type:c.type,key:J,ref:q,props:L,_owner:le}},Q.createContext=function(c){return c={$$typeof:re,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:I,_context:c},c.Consumer=c},Q.createElement=_e,Q.createFactory=function(c){var g=_e.bind(null,c);return g.type=c,g},Q.createRef=function(){return{current:null}},Q.forwardRef=function(c){return{$$typeof:V,render:c}},Q.isValidElement=Je,Q.lazy=function(c){return{$$typeof:G,_payload:{_status:-1,_result:c},_init:Fe}},Q.memo=function(c,g){return{$$typeof:K,type:c,compare:g===void 0?null:g}},Q.startTransition=function(c){var g=h.transition;h.transition={};try{c()}finally{h.transition=g}},Q.unstable_act=C,Q.useCallback=function(c,g){return se.current.useCallback(c,g)},Q.useContext=function(c){return se.current.useContext(c)},Q.useDebugValue=function(){},Q.useDeferredValue=function(c){return se.current.useDeferredValue(c)},Q.useEffect=function(c,g){return se.current.useEffect(c,g)},Q.useId=function(){return se.current.useId()},Q.useImperativeHandle=function(c,g,U){return se.current.useImperativeHandle(c,g,U)},Q.useInsertionEffect=function(c,g){return se.current.useInsertionEffect(c,g)},Q.useLayoutEffect=function(c,g){return se.current.useLayoutEffect(c,g)},Q.useMemo=function(c,g){return se.current.useMemo(c,g)},Q.useReducer=function(c,g,U){return se.current.useReducer(c,g,U)},Q.useRef=function(c){return se.current.useRef(c)},Q.useState=function(c){return se.current.useState(c)},Q.useSyncExternalStore=function(c,g,U){return se.current.useSyncExternalStore(c,g,U)},Q.useTransition=function(){return se.current.useTransition()},Q.version="18.3.1",Q}var js;function Mi(){return js||(js=1,ji.exports=Af()),ji.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs;function Vf(){if(Rs)return wr;Rs=1;var w=Mi(),_=Symbol.for("react.element"),p=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,O=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function re(V,B,K){var G,Y={},X=null,Ee=null;K!==void 0&&(X=""+K),B.key!==void 0&&(X=""+B.key),B.ref!==void 0&&(Ee=B.ref);for(G in B)A.call(B,G)&&!I.hasOwnProperty(G)&&(Y[G]=B[G]);if(V&&V.defaultProps)for(G in B=V.defaultProps,B)Y[G]===void 0&&(Y[G]=B[G]);return{$$typeof:_,type:V,key:X,ref:Ee,props:Y,_owner:O.current}}return wr.Fragment=p,wr.jsx=re,wr.jsxs=re,wr}var Ls;function Bf(){return Ls||(Ls=1,zi.exports=Vf()),zi.exports}var y=Bf(),ne=Mi();const Hf=Vs(ne);var Tl={},Ri={exports:{}},Ze={},Li={exports:{}},Ti={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts;function Wf(){return Ts||(Ts=1,(function(w){function _(h,E){var C=h.length;h.push(E);e:for(;0<C;){var c=C-1>>>1,g=h[c];if(0<O(g,E))h[c]=E,h[C]=g,C=c;else break e}}function p(h){return h.length===0?null:h[0]}function A(h){if(h.length===0)return null;var E=h[0],C=h.pop();if(C!==E){h[0]=C;e:for(var c=0,g=h.length,U=g>>>1;c<U;){var L=2*(c+1)-1,J=h[L],q=L+1,le=h[q];if(0>O(J,C))q<g&&0>O(le,J)?(h[c]=le,h[q]=C,c=q):(h[c]=J,h[L]=C,c=L);else if(q<g&&0>O(le,C))h[c]=le,h[q]=C,c=q;else break e}}return E}function O(h,E){var C=h.sortIndex-E.sortIndex;return C!==0?C:h.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var I=performance;w.unstable_now=function(){return I.now()}}else{var re=Date,V=re.now();w.unstable_now=function(){return re.now()-V}}var B=[],K=[],G=1,Y=null,X=3,Ee=!1,Me=!1,W=!1,F=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,we=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(h){for(var E=p(K);E!==null;){if(E.callback===null)A(K);else if(E.startTime<=h)A(K),E.sortIndex=E.expirationTime,_(B,E);else break;E=p(K)}}function ie(h){if(W=!1,ge(h),!Me)if(p(B)!==null)Me=!0,Fe(De);else{var E=p(K);E!==null&&se(ie,E.startTime-h)}}function De(h,E){Me=!1,W&&(W=!1,Ce(_e),_e=-1),Ee=!0;var C=X;try{for(ge(E),Y=p(B);Y!==null&&(!(Y.expirationTime>E)||h&&!rt());){var c=Y.callback;if(typeof c=="function"){Y.callback=null,X=Y.priorityLevel;var g=c(Y.expirationTime<=E);E=w.unstable_now(),typeof g=="function"?Y.callback=g:Y===p(B)&&A(B),ge(E)}else A(B);Y=p(B)}if(Y!==null)var U=!0;else{var L=p(K);L!==null&&se(ie,L.startTime-E),U=!1}return U}finally{Y=null,X=C,Ee=!1}}var de=!1,ke=null,_e=-1,H=5,Je=-1;function rt(){return!(w.unstable_now()-Je<H)}function $e(){if(ke!==null){var h=w.unstable_now();Je=h;var E=!0;try{E=ke(!0,h)}finally{E?$():(de=!1,ke=null)}}else de=!1}var $;if(typeof we=="function")$=function(){we($e)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,ze=ve.port2;ve.port1.onmessage=$e,$=function(){ze.postMessage(null)}}else $=function(){F($e,0)};function Fe(h){ke=h,de||(de=!0,$())}function se(h,E){_e=F(function(){h(w.unstable_now())},E)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(h){h.callback=null},w.unstable_continueExecution=function(){Me||Ee||(Me=!0,Fe(De))},w.unstable_forceFrameRate=function(h){0>h||125<h?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<h?Math.floor(1e3/h):5},w.unstable_getCurrentPriorityLevel=function(){return X},w.unstable_getFirstCallbackNode=function(){return p(B)},w.unstable_next=function(h){switch(X){case 1:case 2:case 3:var E=3;break;default:E=X}var C=X;X=E;try{return h()}finally{X=C}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(h,E){switch(h){case 1:case 2:case 3:case 4:case 5:break;default:h=3}var C=X;X=h;try{return E()}finally{X=C}},w.unstable_scheduleCallback=function(h,E,C){var c=w.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,h){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=C+g,h={id:G++,callback:E,priorityLevel:h,startTime:C,expirationTime:g,sortIndex:-1},C>c?(h.sortIndex=C,_(K,h),p(B)===null&&h===p(K)&&(W?(Ce(_e),_e=-1):W=!0,se(ie,C-c))):(h.sortIndex=g,_(B,h),Me||Ee||(Me=!0,Fe(De))),h},w.unstable_shouldYield=rt,w.unstable_wrapCallback=function(h){var E=X;return function(){var C=X;X=E;try{return h.apply(this,arguments)}finally{X=C}}}})(Ti)),Ti}var Ms;function $f(){return Ms||(Ms=1,Li.exports=Wf()),Li.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Os;function Qf(){if(Os)return Ze;Os=1;var w=Mi(),_=$f();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,O={};function I(e,t){re(e,t),re(e+"Capture",t)}function re(e,t){for(O[e]=t,e=0;e<t.length;e++)A.add(t[e])}var V=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},Y={};function X(e){return B.call(Y,e)?!0:B.call(G,e)?!1:K.test(e)?Y[e]=!0:(G[e]=!0,!1)}function Ee(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Me(e,t,n,r){if(t===null||typeof t>"u"||Ee(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ce=/[\-:]([a-z])/g;function we(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ce,we);F[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ce,we);F[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ce,we);F[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ge(e,t,n,r){var l=F.hasOwnProperty(t)?F[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Me(t,n,l,r)&&(n=null),r||l===null?X(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ie=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,De=Symbol.for("react.element"),de=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Je=Symbol.for("react.provider"),rt=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),h=Symbol.iterator;function E(e){return e===null||typeof e!="object"?null:(e=h&&e[h]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var U=!1;function L(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var l=m.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function J(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=L(e.type,!1),e;case 11:return e=L(e.type.render,!1),e;case 1:return e=L(e.type,!0),e;default:return""}}function q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ke:return"Fragment";case de:return"Portal";case H:return"Profiler";case _e:return"StrictMode";case $:return"Suspense";case ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rt:return(e.displayName||"Context")+".Consumer";case Je:return(e._context.displayName||"Context")+".Provider";case $e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return t=e.displayName||null,t!==null?t:q(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return q(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qe(e){var t=ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=qe(e))}function Oi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ce(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ii(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ee(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Di(e,t){t=t.checked,t!=null&&ge(e,"checked",t,!1)}function Il(e,t){Di(e,t);var n=ee(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ee(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ui(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(In(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ee(n)}}function Ai(e,t){var n=ee(t.value),r=ee(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Hi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hs=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Hs.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function Wi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function $i(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Wi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ws=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(Ws[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,fn=null,dn=null;function Qi(e){if(e=or(e)){if(typeof Wl!="function")throw Error(p(280));var t=e.stateNode;t&&(t=Gr(t),Wl(e.stateNode,e.type,t))}}function Ki(e){fn?dn?dn.push(e):dn=[e]:fn=e}function Gi(){if(fn){var e=fn,t=dn;if(dn=fn=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function Yi(e,t){return e(t)}function Xi(){}var $l=!1;function Zi(e,t,n){if($l)return e(t,n);$l=!0;try{return Yi(e,t,n)}finally{$l=!1,(fn!==null||dn!==null)&&(Xi(),Gi())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var Ql=!1;if(V)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ql=!1}function $s(e,t,n,r,l,o,i,u,a){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(x){this.onError(x)}}var Vn=!1,_r=null,Nr=!1,Kl=null,Qs={onError:function(e){Vn=!0,_r=e}};function Ks(e,t,n,r,l,o,i,u,a){Vn=!1,_r=null,$s.apply(Qs,arguments)}function Gs(e,t,n,r,l,o,i,u,a){if(Ks.apply(this,arguments),Vn){if(Vn){var m=_r;Vn=!1,_r=null}else throw Error(p(198));Nr||(Nr=!0,Kl=m)}}function Xt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ji(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qi(e){if(Xt(e)!==e)throw Error(p(188))}function Ys(e){var t=e.alternate;if(!t){if(t=Xt(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return qi(l),e;if(o===r)return qi(l),t;o=o.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function bi(e){return e=Ys(e),e!==null?eu(e):null}function eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eu(e);if(t!==null)return t;e=e.sibling}return null}var tu=_.unstable_scheduleCallback,nu=_.unstable_cancelCallback,Xs=_.unstable_shouldYield,Zs=_.unstable_requestPaint,ye=_.unstable_now,Js=_.unstable_getCurrentPriorityLevel,Gl=_.unstable_ImmediatePriority,ru=_.unstable_UserBlockingPriority,Pr=_.unstable_NormalPriority,qs=_.unstable_LowPriority,lu=_.unstable_IdlePriority,zr=null,vt=null;function bs(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:nc,ec=Math.log,tc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(ec(e)/tc|0)|0}var jr=64,Rr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=Bn(u):(o&=i,o!==0&&(r=Bn(o)))}else i=n&~l,i!==0?r=Bn(i):o!==0&&(r=Bn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function rc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-ct(o),u=1<<i,a=l[i];a===-1?((u&n)===0||(u&r)!==0)&&(l[i]=rc(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=jr;return jr<<=1,(jr&4194240)===0&&(jr=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function oc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var te=0;function iu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var uu,Jl,au,su,cu,ql=!1,Tr=[],Rt=null,Lt=null,Tt=null,Wn=new Map,$n=new Map,Mt=[],ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function Qn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=or(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uc(e,t,n,r,l){switch(t){case"focusin":return Rt=Qn(Rt,e,t,n,r,l),!0;case"dragenter":return Lt=Qn(Lt,e,t,n,r,l),!0;case"mouseover":return Tt=Qn(Tt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Wn.set(o,Qn(Wn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,$n.set(o,Qn($n.get(o)||null,e,t,n,r,l)),!0}return!1}function du(e){var t=Zt(e.target);if(t!==null){var n=Xt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ji(n),t!==null){e.blockedOn=t,cu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=or(n),t!==null&&Jl(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){Mr(e)&&n.delete(t)}function ac(){ql=!1,Rt!==null&&Mr(Rt)&&(Rt=null),Lt!==null&&Mr(Lt)&&(Lt=null),Tt!==null&&Mr(Tt)&&(Tt=null),Wn.forEach(pu),$n.forEach(pu)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,ac)))}function Gn(e){function t(l){return Kn(l,e)}if(0<Tr.length){Kn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Kn(Rt,e),Lt!==null&&Kn(Lt,e),Tt!==null&&Kn(Tt,e),Wn.forEach(t),$n.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)du(n),n.blockedOn===null&&Mt.shift()}var pn=ie.ReactCurrentBatchConfig,Or=!0;function sc(e,t,n,r){var l=te,o=pn.transition;pn.transition=null;try{te=1,bl(e,t,n,r)}finally{te=l,pn.transition=o}}function cc(e,t,n,r){var l=te,o=pn.transition;pn.transition=null;try{te=4,bl(e,t,n,r)}finally{te=l,pn.transition=o}}function bl(e,t,n,r){if(Or){var l=eo(e,t,n,r);if(l===null)yo(e,t,r,Ir,n),fu(e,r);else if(uc(l,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<ic.indexOf(e)){for(;l!==null;){var o=or(l);if(o!==null&&uu(o),o=eo(e,t,n,r),o===null&&yo(e,t,r,Ir,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else yo(e,t,r,null,n)}}var Ir=null;function eo(e,t,n,r){if(Ir=null,e=Hl(r),e=Zt(e),e!==null)if(t=Xt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ji(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Js()){case Gl:return 1;case ru:return 4;case Pr:case qs:return 16;case lu:return 536870912;default:return 16}default:return 16}}var Ot=null,to=null,Dr=null;function hu(){if(Dr)return Dr;var e,t=to,n=t.length,r,l="value"in Ot?Ot.value:Ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function gu(){return!1}function be(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ur:gu,this.isPropagationStopped=gu,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},no=be(mn),Yn=C({},mn,{view:0,detail:0}),fc=be(Yn),ro,lo,Xn,Ar=C({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ro=e.screenX-Xn.screenX,lo=e.screenY-Xn.screenY):lo=ro=0,Xn=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),vu=be(Ar),dc=C({},Ar,{dataTransfer:0}),pc=be(dc),mc=C({},Yn,{relatedTarget:0}),oo=be(mc),hc=C({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),gc=be(hc),vc=C({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yc=be(vc),xc=C({},mn,{data:0}),yu=be(xc),wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ec(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sc[e])?!!t[e]:!1}function io(){return Ec}var Cc=C({},Yn,{key:function(e){if(e.key){var t=wc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_c=be(Cc),Nc=C({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=be(Nc),Pc=C({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),zc=be(Pc),jc=C({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rc=be(jc),Lc=C({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tc=be(Lc),Mc=[9,13,27,32],uo=V&&"CompositionEvent"in window,Zn=null;V&&"documentMode"in document&&(Zn=document.documentMode);var Oc=V&&"TextEvent"in window&&!Zn,wu=V&&(!uo||Zn&&8<Zn&&11>=Zn),ku=" ",Su=!1;function Eu(e,t){switch(e){case"keyup":return Mc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Ic(e,t){switch(e){case"compositionend":return Cu(t);case"keypress":return t.which!==32?null:(Su=!0,ku);case"textInput":return e=t.data,e===ku&&Su?null:e;default:return null}}function Dc(e,t){if(hn)return e==="compositionend"||!uo&&Eu(e,t)?(e=hu(),Dr=to=Ot=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Fc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fc[e.type]:t==="textarea"}function Nu(e,t,n,r){Ki(r),t=$r(t,"onChange"),0<t.length&&(n=new no("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,qn=null;function Uc(e){$u(e,0)}function Vr(e){var t=wn(e);if(Oi(t))return e}function Ac(e,t){if(e==="change")return t}var Pu=!1;if(V){var ao;if(V){var so="oninput"in document;if(!so){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),so=typeof zu.oninput=="function"}ao=so}else ao=!1;Pu=ao&&(!document.documentMode||9<document.documentMode)}function ju(){Jn&&(Jn.detachEvent("onpropertychange",Ru),qn=Jn=null)}function Ru(e){if(e.propertyName==="value"&&Vr(qn)){var t=[];Nu(t,qn,e,Hl(e)),Zi(Uc,t)}}function Vc(e,t,n){e==="focusin"?(ju(),Jn=t,qn=n,Jn.attachEvent("onpropertychange",Ru)):e==="focusout"&&ju()}function Bc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vr(qn)}function Hc(e,t){if(e==="click")return Vr(t)}function Wc(e,t){if(e==="input"||e==="change")return Vr(t)}function $c(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:$c;function bn(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!B.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qc(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Tu(n,o);var i=Tu(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kc=V&&"documentMode"in document&&11>=document.documentMode,gn=null,fo=null,er=null,po=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;po||gn==null||gn!==Er(r)||(r=gn,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&bn(er,r)||(er=r,r=$r(fo,"onSelect"),0<r.length&&(t=new no("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},mo={},Du={};V&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Hr(e){if(mo[e])return mo[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return mo[e]=t[n];return e}var Fu=Hr("animationend"),Uu=Hr("animationiteration"),Au=Hr("animationstart"),Vu=Hr("transitionend"),Bu=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){Bu.set(e,t),I(t,[e])}for(var ho=0;ho<Hu.length;ho++){var go=Hu[ho],Gc=go.toLowerCase(),Yc=go[0].toUpperCase()+go.slice(1);It(Gc,"on"+Yc)}It(Fu,"onAnimationEnd"),It(Uu,"onAnimationIteration"),It(Au,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(Vu,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),I("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),I("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),I("onBeforeInput",["compositionend","keypress","textInput","paste"]),I("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),I("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),I("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gs(r,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,m=u.currentTarget;if(u=u.listener,a!==o&&l.isPropagationStopped())break e;Wu(l,u,m),o=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,m=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;Wu(l,u,m),o=a}}}if(Nr)throw e=Kl,Nr=!1,Kl=null,e}function ue(e,t){var n=t[Co];n===void 0&&(n=t[Co]=new Set);var r=e+"__bubble";n.has(r)||(Qu(t,e,2,!1),n.add(r))}function vo(e,t,n){var r=0;t&&(r|=4),Qu(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[Wr]){e[Wr]=!0,A.forEach(function(n){n!=="selectionchange"&&(Xc.has(n)||vo(n,!1,e),vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,vo("selectionchange",!1,t))}}function Qu(e,t,n,r){switch(mu(t)){case 1:var l=sc;break;case 4:l=cc;break;default:l=bl}n=l.bind(null,t,n,e),l=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function yo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Zt(u),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}u=u.parentNode}}r=r.return}Zi(function(){var m=o,x=Hl(n),k=[];e:{var v=Bu.get(e);if(v!==void 0){var N=no,z=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":N=_c;break;case"focusin":z="focus",N=oo;break;case"focusout":z="blur",N=oo;break;case"beforeblur":case"afterblur":N=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=zc;break;case Fu:case Uu:case Au:N=gc;break;case Vu:N=Rc;break;case"scroll":N=fc;break;case"wheel":N=Tc;break;case"copy":case"cut":case"paste":N=yc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xu}var j=(t&4)!==0,xe=!j&&e==="scroll",f=j?v!==null?v+"Capture":null:v;j=[];for(var s=m,d;s!==null;){d=s;var S=d.stateNode;if(d.tag===5&&S!==null&&(d=S,f!==null&&(S=Un(s,f),S!=null&&j.push(rr(s,S,d)))),xe)break;s=s.return}0<j.length&&(v=new N(v,z,null,n,x),k.push({event:v,listeners:j}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&n!==Bl&&(z=n.relatedTarget||n.fromElement)&&(Zt(z)||z[St]))break e;if((N||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,N?(z=n.relatedTarget||n.toElement,N=m,z=z?Zt(z):null,z!==null&&(xe=Xt(z),z!==xe||z.tag!==5&&z.tag!==6)&&(z=null)):(N=null,z=m),N!==z)){if(j=vu,S="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(j=xu,S="onPointerLeave",f="onPointerEnter",s="pointer"),xe=N==null?v:wn(N),d=z==null?v:wn(z),v=new j(S,s+"leave",N,n,x),v.target=xe,v.relatedTarget=d,S=null,Zt(x)===m&&(j=new j(f,s+"enter",z,n,x),j.target=d,j.relatedTarget=xe,S=j),xe=S,N&&z)t:{for(j=N,f=z,s=0,d=j;d;d=yn(d))s++;for(d=0,S=f;S;S=yn(S))d++;for(;0<s-d;)j=yn(j),s--;for(;0<d-s;)f=yn(f),d--;for(;s--;){if(j===f||f!==null&&j===f.alternate)break t;j=yn(j),f=yn(f)}j=null}else j=null;N!==null&&Ku(k,v,N,j,!1),z!==null&&xe!==null&&Ku(k,xe,z,j,!0)}}e:{if(v=m?wn(m):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var R=Ac;else if(_u(v))if(Pu)R=Wc;else{R=Bc;var T=Vc}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(R=Hc);if(R&&(R=R(e,m))){Nu(k,R,n,x);break e}T&&T(e,v,m),e==="focusout"&&(T=v._wrapperState)&&T.controlled&&v.type==="number"&&Dl(v,"number",v.value)}switch(T=m?wn(m):window,e){case"focusin":(_u(T)||T.contentEditable==="true")&&(gn=T,fo=m,er=null);break;case"focusout":er=fo=gn=null;break;case"mousedown":po=!0;break;case"contextmenu":case"mouseup":case"dragend":po=!1,Iu(k,n,x);break;case"selectionchange":if(Kc)break;case"keydown":case"keyup":Iu(k,n,x)}var M;if(uo)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else hn?Eu(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(wu&&n.locale!=="ko"&&(hn||D!=="onCompositionStart"?D==="onCompositionEnd"&&hn&&(M=hu()):(Ot=x,to="value"in Ot?Ot.value:Ot.textContent,hn=!0)),T=$r(m,D),0<T.length&&(D=new yu(D,e,null,n,x),k.push({event:D,listeners:T}),M?D.data=M:(M=Cu(n),M!==null&&(D.data=M)))),(M=Oc?Ic(e,n):Dc(e,n))&&(m=$r(m,"onBeforeInput"),0<m.length&&(x=new yu("onBeforeInput","beforeinput",null,n,x),k.push({event:x,listeners:m}),x.data=M))}$u(k,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Un(e,n),o!=null&&r.unshift(rr(e,o,l)),o=Un(e,t),o!=null&&r.push(rr(e,o,l))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,m=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&m!==null&&(u=m,l?(a=Un(n,o),a!=null&&i.unshift(rr(n,a,u))):l||(a=Un(n,o),a!=null&&i.push(rr(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Zc=/\r\n?/g,Jc=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Zc,`
`).replace(Jc,"")}function Qr(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(p(425))}function Kr(){}var xo=null,wo=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,qc=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,bc=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(ef)}:So;function ef(e){setTimeout(function(){throw e})}function Eo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Gn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),yt="__reactFiber$"+xn,lr="__reactProps$"+xn,St="__reactContainer$"+xn,Co="__reactEvents$"+xn,tf="__reactListeners$"+xn,nf="__reactHandles$"+xn;function Zt(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xu(e);e!==null;){if(n=e[yt])return n;e=Xu(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[yt]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Gr(e){return e[lr]||null}var _o=[],kn=-1;function Ft(e){return{current:e}}function ae(e){0>kn||(e.current=_o[kn],_o[kn]=null,kn--)}function oe(e,t){kn++,_o[kn]=e.current,e.current=t}var Ut={},Ue=Ft(Ut),Qe=Ft(!1),Jt=Ut;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ke(e){return e=e.childContextTypes,e!=null}function Yr(){ae(Qe),ae(Ue)}function Zu(e,t,n){if(Ue.current!==Ut)throw Error(p(168));oe(Ue,t),oe(Qe,n)}function Ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(p(108,le(e)||"Unknown",l));return C({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Jt=Ue.current,oe(Ue,e),oe(Qe,Qe.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=Ju(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,ae(Qe),ae(Ue),oe(Ue,e)):ae(Qe),oe(Qe,n)}var Et=null,Zr=!1,No=!1;function bu(e){Et===null?Et=[e]:Et.push(e)}function rf(e){Zr=!0,bu(e)}function At(){if(!No&&Et!==null){No=!0;var e=0,t=te;try{var n=Et;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,Zr=!1}catch(l){throw Et!==null&&(Et=Et.slice(e+1)),tu(Gl,At),l}finally{te=t,No=!1}}return null}var En=[],Cn=0,Jr=null,qr=0,lt=[],ot=0,qt=null,Ct=1,_t="";function bt(e,t){En[Cn++]=qr,En[Cn++]=Jr,Jr=e,qr=t}function ea(e,t,n){lt[ot++]=Ct,lt[ot++]=_t,lt[ot++]=qt,qt=e;var r=Ct;e=_t;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var o=32-ct(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ct=1<<32-ct(t)+l|n<<l|r,_t=o+e}else Ct=1<<o|n<<l|r,_t=e}function Po(e){e.return!==null&&(bt(e,1),ea(e,1,0))}function zo(e){for(;e===Jr;)Jr=En[--Cn],En[Cn]=null,qr=En[--Cn],En[Cn]=null;for(;e===qt;)qt=lt[--ot],lt[ot]=null,_t=lt[--ot],lt[ot]=null,Ct=lt[--ot],lt[ot]=null}var et=null,tt=null,fe=!1,dt=null;function ta(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:Ct,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(fe){var t=tt;if(t){var n=t;if(!na(e,t)){if(jo(e))throw Error(p(418));t=Dt(n.nextSibling);var r=et;t&&na(e,t)?ta(r,n):(e.flags=e.flags&-4097|2,fe=!1,et=e)}}else{if(jo(e))throw Error(p(418));e.flags=e.flags&-4097|2,fe=!1,et=e}}}function ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function br(e){if(e!==et)return!1;if(!fe)return ra(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=tt)){if(jo(e))throw la(),Error(p(418));for(;t;)ta(e,t),t=Dt(t.nextSibling)}if(ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?Dt(e.stateNode.nextSibling):null;return!0}function la(){for(var e=tt;e;)e=Dt(e.nextSibling)}function _n(){tt=et=null,fe=!1}function Lo(e){dt===null?dt=[e]:dt.push(e)}var lf=ie.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function el(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oa(e){var t=e._init;return t(e._payload)}function ia(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=Gt(f,s),f.index=0,f.sibling=null,f}function o(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,S){return s===null||s.tag!==6?(s=Si(d,f.mode,S),s.return=f,s):(s=l(s,d),s.return=f,s)}function a(f,s,d,S){var R=d.type;return R===ke?x(f,s,d.props.children,S,d.key):s!==null&&(s.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fe&&oa(R)===s.type)?(S=l(s,d.props),S.ref=ir(f,s,d),S.return=f,S):(S=Cl(d.type,d.key,d.props,null,f.mode,S),S.ref=ir(f,s,d),S.return=f,S)}function m(f,s,d,S){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Ei(d,f.mode,S),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function x(f,s,d,S,R){return s===null||s.tag!==7?(s=an(d,f.mode,S,R),s.return=f,s):(s=l(s,d),s.return=f,s)}function k(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Si(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case De:return d=Cl(s.type,s.key,s.props,null,f.mode,d),d.ref=ir(f,null,s),d.return=f,d;case de:return s=Ei(s,f.mode,d),s.return=f,s;case Fe:var S=s._init;return k(f,S(s._payload),d)}if(In(s)||E(s))return s=an(s,f.mode,d,null),s.return=f,s;el(f,s)}return null}function v(f,s,d,S){var R=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return R!==null?null:u(f,s,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case De:return d.key===R?a(f,s,d,S):null;case de:return d.key===R?m(f,s,d,S):null;case Fe:return R=d._init,v(f,s,R(d._payload),S)}if(In(d)||E(d))return R!==null?null:x(f,s,d,S,null);el(f,d)}return null}function N(f,s,d,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(d)||null,u(s,f,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case De:return f=f.get(S.key===null?d:S.key)||null,a(s,f,S,R);case de:return f=f.get(S.key===null?d:S.key)||null,m(s,f,S,R);case Fe:var T=S._init;return N(f,s,d,T(S._payload),R)}if(In(S)||E(S))return f=f.get(d)||null,x(s,f,S,R,null);el(s,S)}return null}function z(f,s,d,S){for(var R=null,T=null,M=s,D=s=0,Le=null;M!==null&&D<d.length;D++){M.index>D?(Le=M,M=null):Le=M.sibling;var b=v(f,M,d[D],S);if(b===null){M===null&&(M=Le);break}e&&M&&b.alternate===null&&t(f,M),s=o(b,s,D),T===null?R=b:T.sibling=b,T=b,M=Le}if(D===d.length)return n(f,M),fe&&bt(f,D),R;if(M===null){for(;D<d.length;D++)M=k(f,d[D],S),M!==null&&(s=o(M,s,D),T===null?R=M:T.sibling=M,T=M);return fe&&bt(f,D),R}for(M=r(f,M);D<d.length;D++)Le=N(M,f,D,d[D],S),Le!==null&&(e&&Le.alternate!==null&&M.delete(Le.key===null?D:Le.key),s=o(Le,s,D),T===null?R=Le:T.sibling=Le,T=Le);return e&&M.forEach(function(Yt){return t(f,Yt)}),fe&&bt(f,D),R}function j(f,s,d,S){var R=E(d);if(typeof R!="function")throw Error(p(150));if(d=R.call(d),d==null)throw Error(p(151));for(var T=R=null,M=s,D=s=0,Le=null,b=d.next();M!==null&&!b.done;D++,b=d.next()){M.index>D?(Le=M,M=null):Le=M.sibling;var Yt=v(f,M,b.value,S);if(Yt===null){M===null&&(M=Le);break}e&&M&&Yt.alternate===null&&t(f,M),s=o(Yt,s,D),T===null?R=Yt:T.sibling=Yt,T=Yt,M=Le}if(b.done)return n(f,M),fe&&bt(f,D),R;if(M===null){for(;!b.done;D++,b=d.next())b=k(f,b.value,S),b!==null&&(s=o(b,s,D),T===null?R=b:T.sibling=b,T=b);return fe&&bt(f,D),R}for(M=r(f,M);!b.done;D++,b=d.next())b=N(M,f,D,b.value,S),b!==null&&(e&&b.alternate!==null&&M.delete(b.key===null?D:b.key),s=o(b,s,D),T===null?R=b:T.sibling=b,T=b);return e&&M.forEach(function(Uf){return t(f,Uf)}),fe&&bt(f,D),R}function xe(f,s,d,S){if(typeof d=="object"&&d!==null&&d.type===ke&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case De:e:{for(var R=d.key,T=s;T!==null;){if(T.key===R){if(R=d.type,R===ke){if(T.tag===7){n(f,T.sibling),s=l(T,d.props.children),s.return=f,f=s;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fe&&oa(R)===T.type){n(f,T.sibling),s=l(T,d.props),s.ref=ir(f,T,d),s.return=f,f=s;break e}n(f,T);break}else t(f,T);T=T.sibling}d.type===ke?(s=an(d.props.children,f.mode,S,d.key),s.return=f,f=s):(S=Cl(d.type,d.key,d.props,null,f.mode,S),S.ref=ir(f,s,d),S.return=f,f=S)}return i(f);case de:e:{for(T=d.key;s!==null;){if(s.key===T)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Ei(d,f.mode,S),s.return=f,f=s}return i(f);case Fe:return T=d._init,xe(f,s,T(d._payload),S)}if(In(d))return z(f,s,d,S);if(E(d))return j(f,s,d,S);el(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,d),s.return=f,f=s):(n(f,s),s=Si(d,f.mode,S),s.return=f,f=s),i(f)):n(f,s)}return xe}var Nn=ia(!0),ua=ia(!1),tl=Ft(null),nl=null,Pn=null,To=null;function Mo(){To=Pn=nl=null}function Oo(e){var t=tl.current;ae(tl),e._currentValue=t}function Io(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){nl=e,To=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(nl===null)throw Error(p(308));Pn=e,nl.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var en=null;function Do(e){en===null?en=[e]:en.push(e)}function aa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Do(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Z&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Do(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;Vt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,m=a.next;a.next=null,i===null?o=m:i.next=m,i=a;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==i&&(u===null?x.firstBaseUpdate=m:u.next=m,x.lastBaseUpdate=a))}if(o!==null){var k=l.baseState;i=0,x=m=a=null,u=o;do{var v=u.lane,N=u.eventTime;if((r&v)===v){x!==null&&(x=x.next={eventTime:N,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var z=e,j=u;switch(v=t,N=n,j.tag){case 1:if(z=j.payload,typeof z=="function"){k=z.call(N,k,v);break e}k=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=j.payload,v=typeof z=="function"?z.call(N,k,v):z,v==null)break e;k=C({},k,v);break e;case 2:Vt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[u]:v.push(u))}else N={eventTime:N,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(m=x=N,a=k):x=x.next=N,i|=v;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;v=u,u=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(x===null&&(a=k),l.baseState=a,l.firstBaseUpdate=m,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);rn|=i,e.lanes=i,e.memoizedState=k}}function fa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var ur={},xt=Ft(ur),ar=Ft(ur),sr=Ft(ur);function tn(e){if(e===ur)throw Error(p(174));return e}function Uo(e,t){switch(oe(sr,t),oe(ar,e),oe(xt,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}ae(xt),oe(xt,t)}function jn(){ae(xt),ae(ar),ae(sr)}function da(e){tn(sr.current);var t=tn(xt.current),n=Ul(t,e.type);t!==n&&(oe(ar,e),oe(xt,n))}function Ao(e){ar.current===e&&(ae(xt),ae(ar))}var pe=Ft(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function Bo(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var il=ie.ReactCurrentDispatcher,Ho=ie.ReactCurrentBatchConfig,nn=0,me=null,Ne=null,je=null,ul=!1,cr=!1,fr=0,of=0;function Ae(){throw Error(p(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,l,o){if(nn=o,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?cf:ff,e=n(r,l),cr){o=0;do{if(cr=!1,fr=0,25<=o)throw Error(p(301));o+=1,je=Ne=null,t.updateQueue=null,il.current=df,e=n(r,l)}while(cr)}if(il.current=cl,t=Ne!==null&&Ne.next!==null,nn=0,je=Ne=me=null,ul=!1,t)throw Error(p(300));return e}function Qo(){var e=fr!==0;return fr=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?me.memoizedState=je=e:je=je.next=e,je}function ut(){if(Ne===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=je===null?me.memoizedState:je.next;if(t!==null)je=t,Ne=e;else{if(e===null)throw Error(p(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},je===null?me.memoizedState=je=e:je=je.next=e}return je}function dr(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=ut(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=Ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,a=null,m=o;do{var x=m.lane;if((nn&x)===x)a!==null&&(a=a.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var k={lane:x,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};a===null?(u=a=k,i=r):a=a.next=k,me.lanes|=x,rn|=x}m=m.next}while(m!==null&&m!==o);a===null?i=r:a.next=u,ft(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,me.lanes|=o,rn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=ut(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ft(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pa(){}function ma(e,t){var n=me,r=ut(),l=t(),o=!ft(r.memoizedState,l);if(o&&(r.memoizedState=l,Ge=!0),r=r.queue,Yo(va.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,pr(9,ga.bind(null,n,r,l,t),void 0,null),Re===null)throw Error(p(349));(nn&30)!==0||ha(n,t,l)}return l}function ha(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ga(e,t,n,r){t.value=n,t.getSnapshot=r,ya(t)&&xa(e)}function va(e,t,n){return n(function(){ya(t)&&xa(e)})}function ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function xa(e){var t=Nt(e,1);t!==null&&gt(t,e,1,-1)}function wa(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=sf.bind(null,me,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ka(){return ut().memoizedState}function al(e,t,n,r){var l=wt();me.flags|=e,l.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=ut();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var i=Ne.memoizedState;if(o=i.destroy,r!==null&&Wo(r,i.deps)){l.memoizedState=pr(t,n,o,r);return}}me.flags|=e,l.memoizedState=pr(1|t,n,o,r)}function Sa(e,t){return al(8390656,8,e,t)}function Yo(e,t){return sl(2048,8,e,t)}function Ea(e,t){return sl(4,2,e,t)}function Ca(e,t){return sl(4,4,e,t)}function _a(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Na(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,_a.bind(null,t,e),n)}function Xo(){}function Pa(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function za(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ja(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(ft(n,t)||(n=ou(),me.lanes|=n,rn|=n,e.baseState=!0),t)}function uf(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{te=n,Ho.transition=r}}function Ra(){return ut().memoizedState}function af(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ta(t,n);else if(n=aa(e,t,n,r),n!==null){var l=We();gt(n,e,r,l),Ma(n,t,r)}}function sf(e,t,n){var r=Qt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ta(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,ft(u,i)){var a=t.interleaved;a===null?(l.next=l,Do(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=aa(e,t,l,r),n!==null&&(l=We(),gt(n,e,r,l),Ma(n,t,r))}}function La(e){var t=e.alternate;return e===me||t!==null&&t===me}function Ta(e,t){cr=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ma(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var cl={readContext:it,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},cf={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Sa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,_a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:Xo,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=uf.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,l=wt();if(fe){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),Re===null)throw Error(p(349));(nn&30)!==0||ha(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Sa(va.bind(null,r,o,e),[e]),r.flags|=2048,pr(9,ga.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=wt(),t=Re.identifierPrefix;if(fe){var n=_t,r=Ct;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:it,useCallback:Pa,useContext:it,useEffect:Yo,useImperativeHandle:Na,useInsertionEffect:Ea,useLayoutEffect:Ca,useMemo:za,useReducer:Ko,useRef:ka,useState:function(){return Ko(dr)},useDebugValue:Xo,useDeferredValue:function(e){var t=ut();return ja(t,Ne.memoizedState,e)},useTransition:function(){var e=Ko(dr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Ra,unstable_isNewReconciler:!1},df={readContext:it,useCallback:Pa,useContext:it,useEffect:Yo,useImperativeHandle:Na,useInsertionEffect:Ea,useLayoutEffect:Ca,useMemo:za,useReducer:Go,useRef:ka,useState:function(){return Go(dr)},useDebugValue:Xo,useDeferredValue:function(e){var t=ut();return Ne===null?t.memoizedState=e:ja(t,Ne.memoizedState,e)},useTransition:function(){var e=Go(dr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Ra,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Xt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),l=Qt(e),o=Pt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(gt(t,e,l,r),rl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),l=Qt(e),o=Pt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(gt(t,e,l,r),rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Qt(e),l=Pt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(gt(t,e,r,n),rl(t,e,r))}};function Oa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,o):!0}function Ia(e,t,n){var r=!1,l=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=it(o):(l=Ke(t)?Jt:Ue.current,r=t.contextTypes,o=(r=r!=null)?Sn(e,l):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Da(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Jo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=it(o):(o=Ke(t)?Jt:Ue.current,l.context=Sn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&fl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=J(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Fa(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,mi=r),bo(e,t)},n}function Ua(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Pf.bind(null,e,t,n),t.then(e,e))}function Va(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ba(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var mf=ie.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?ua(t,null,n,r):Nn(t,e.child,n,r)}function Ha(e,t,n,r,l){n=n.render;var o=t.ref;return zn(t,l),r=$o(e,t,n,r,o,l),n=Qo(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(fe&&n&&Po(t),t.flags|=1,He(e,t,r,l),t.child)}function Wa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ki(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$a(e,t,o,r,l)):(e=Cl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(i,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(bn(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,zt(e,t,l)}return ei(e,t,n,r,l)}function Qa(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Tn,nt),nt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Tn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,oe(Tn,nt),nt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,oe(Tn,nt),nt|=r;return He(e,t,l,n),t.child}function Ka(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ei(e,t,n,r,l){var o=Ke(n)?Jt:Ue.current;return o=Sn(t,o),zn(t,l),n=$o(e,t,n,r,o,l),r=Qo(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(fe&&r&&Po(t),t.flags|=1,He(e,t,n,l),t.child)}function Ga(e,t,n,r,l){if(Ke(n)){var o=!0;Xr(t)}else o=!1;if(zn(t,l),t.stateNode===null)pl(e,t),Ia(t,n,r),Jo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,m=n.contextType;typeof m=="object"&&m!==null?m=it(m):(m=Ke(n)?Jt:Ue.current,m=Sn(t,m));var x=n.getDerivedStateFromProps,k=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==m)&&Da(t,i,r,m),Vt=!1;var v=t.memoizedState;i.state=v,ll(t,r,i,l),a=t.memoizedState,u!==r||v!==a||Qe.current||Vt?(typeof x=="function"&&(Zo(t,n,x,r),a=t.memoizedState),(u=Vt||Oa(t,n,u,r,v,a,m))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=m,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,sa(e,t),u=t.memoizedProps,m=t.type===t.elementType?u:pt(t.type,u),i.props=m,k=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Ke(n)?Jt:Ue.current,a=Sn(t,a));var N=n.getDerivedStateFromProps;(x=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==k||v!==a)&&Da(t,i,r,a),Vt=!1,v=t.memoizedState,i.state=v,ll(t,r,i,l);var z=t.memoizedState;u!==k||v!==z||Qe.current||Vt?(typeof N=="function"&&(Zo(t,n,N,r),z=t.memoizedState),(m=Vt||Oa(t,n,m,r,v,z,a)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,z,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,z,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=z),i.props=r,i.state=z,i.context=a,r=m):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return ti(e,t,n,r,o,l)}function ti(e,t,n,r,l,o){Ka(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&qu(t,n,!1),zt(e,t,o);r=t.stateNode,mf.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,o),t.child=Nn(t,null,u,o)):He(e,t,u,o),t.memoizedState=r.state,l&&qu(t,n,!0),t.child}function Ya(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),Uo(e,t.containerInfo)}function Xa(e,t,n,r,l){return _n(),Lo(l),t.flags|=256,He(e,t,n,r),t.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function Za(e,t,n){var r=t.pendingProps,l=pe.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),oe(pe,l&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=_l(i,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ri(n),t.memoizedState=ni,e):li(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return hf(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Gt(u,o):(o=an(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?ri(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ni,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function li(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&Lo(r),Nn(t,e.child,null,n),e=li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(p(422))),dl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=an(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,i),t.child.memoizedState=ri(i),t.memoizedState=ni,o);if((t.mode&1)===0)return dl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(p(419)),r=qo(o,r,void 0),dl(e,t,i,r)}if(u=(i&e.childLanes)!==0,Ge||u){if(r=Re,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Nt(e,l),gt(r,e,l,-1))}return wi(),r=qo(Error(p(421))),dl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,tt=Dt(l.nextSibling),et=t,fe=!0,dt=null,e!==null&&(lt[ot++]=Ct,lt[ot++]=_t,lt[ot++]=qt,Ct=e.id,_t=e.overflow,qt=t),t=li(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Io(e.return,t,n)}function oi(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function qa(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(He(e,t,r.children,n),r=pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),oi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ol(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}oi(t,!0,n,null,o);break;case"together":oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Ya(t),_n();break;case 5:da(t);break;case 1:Ke(t.type)&&Xr(t);break;case 4:Uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;oe(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Za(e,t,n):(oe(pe,pe.current&1),e=zt(e,t,n),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return qa(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,Qa(e,t,n)}return zt(e,t,n)}var ba,ii,es,ts;ba=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ii=function(){},es=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(xt.current);var o=null;switch(n){case"input":l=Ol(e,l),r=Ol(e,r),o=[];break;case"select":l=C({},l,{value:void 0}),r=C({},r,{value:void 0}),o=[];break;case"textarea":l=Fl(e,l),r=Fl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}Al(n,r);var i;n=null;for(m in l)if(!r.hasOwnProperty(m)&&l.hasOwnProperty(m)&&l[m]!=null)if(m==="style"){var u=l[m];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(O.hasOwnProperty(m)?o||(o=[]):(o=o||[]).push(m,null));for(m in r){var a=r[m];if(u=l!=null?l[m]:void 0,r.hasOwnProperty(m)&&a!==u&&(a!=null||u!=null))if(m==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(m,n)),n=a;else m==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(m,a)):m==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(m,""+a):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(O.hasOwnProperty(m)?(a!=null&&m==="onScroll"&&ue("scroll",e),o||u===a||(o=[])):(o=o||[]).push(m,a))}n&&(o=o||[]).push("style",n);var m=o;(t.updateQueue=m)&&(t.flags|=4)}},ts=function(e,t,n,r){n!==r&&(t.flags|=4)};function mr(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(zo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ke(t.type)&&Yr(),Ve(t),null;case 3:return r=t.stateNode,jn(),ae(Qe),ae(Ue),Bo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(vi(dt),dt=null))),ii(e,t),Ve(t),null;case 5:Ao(t);var l=tn(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)es(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return Ve(t),null}if(e=tn(xt.current),br(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[lr]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(l=0;l<tr.length;l++)ue(tr[l],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Ii(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":Ui(r,o),ue("invalid",r)}Al(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),l=["children",""+u]):O.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&ue("scroll",r)}switch(n){case"input":Sr(r),Fi(r,o,!0);break;case"textarea":Sr(r),Vi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[yt]=t,e[lr]=r,ba(e,t,!1,!1),t.stateNode=e;e:{switch(i=Vl(n,r),n){case"dialog":ue("cancel",e),ue("close",e),l=r;break;case"iframe":case"object":case"embed":ue("load",e),l=r;break;case"video":case"audio":for(l=0;l<tr.length;l++)ue(tr[l],e);l=r;break;case"source":ue("error",e),l=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),l=r;break;case"details":ue("toggle",e),l=r;break;case"input":Ii(e,r),l=Ol(e,r),ue("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=C({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Ui(e,r),l=Fl(e,r),ue("invalid",e);break;default:l=r}Al(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?$i(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hi(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(O.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ue("scroll",e):a!=null&&ge(e,o,a,i))}switch(n){case"input":Sr(e),Fi(e,r,!1);break;case"textarea":Sr(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)ts(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=tn(sr.current),tn(xt.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ve(t),null;case 13:if(ae(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)la(),_n(),t.flags|=98560,o=!1;else if(o=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(p(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[yt]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else dt!==null&&(vi(dt),dt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(pe.current&1)!==0?Pe===0&&(Pe=3):wi())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return jn(),ii(e,t),e===null&&nr(t.stateNode.containerInfo),Ve(t),null;case 10:return Oo(t.type._context),Ve(t),null;case 17:return Ke(t.type)&&Yr(),Ve(t),null;case 19:if(ae(pe),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)mr(o,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ol(e),i!==null){for(t.flags|=128,mr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>Mn&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ol(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!fe)return Ve(t),null}else 2*ye()-o.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,mr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return xi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function yf(e,t){switch(zo(t),t.tag){case 1:return Ke(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),ae(Qe),ae(Ue),Bo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(ae(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(pe),null;case 4:return jn(),null;case 10:return Oo(t.type._context),null;case 22:case 23:return xi(),null;case 24:return null;default:return null}}var ml=!1,Be=!1,xf=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function ui(e,t,n){try{n()}catch(r){he(e,t,r)}}var ns=!1;function wf(e,t){if(xo=Or,e=Ou(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,m=0,x=0,k=e,v=null;t:for(;;){for(var N;k!==n||l!==0&&k.nodeType!==3||(u=i+l),k!==o||r!==0&&k.nodeType!==3||(a=i+r),k.nodeType===3&&(i+=k.nodeValue.length),(N=k.firstChild)!==null;)v=k,k=N;for(;;){if(k===e)break t;if(v===n&&++m===l&&(u=i),v===o&&++x===r&&(a=i),(N=k.nextSibling)!==null)break;k=v,v=k.parentNode}k=N}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},Or=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var j=z.memoizedProps,xe=z.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?j:pt(t.type,j),xe);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return z=ns,ns=!1,z}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ui(t,n,o)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rs(e){var t=e.alternate;t!==null&&(e.alternate=null,rs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[lr],delete t[Co],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ls(e){return e.tag===5||e.tag===3||e.tag===4}function os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ls(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(si(e,t,n),e=e.sibling;e!==null;)si(e,t,n),e=e.sibling}function ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ci(e,t,n),e=e.sibling;e!==null;)ci(e,t,n),e=e.sibling}var Oe=null,mt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)is(e,t,n),n=n.sibling}function is(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 5:Be||Ln(n,t);case 6:var r=Oe,l=mt;Oe=null,Ht(e,t,n),Oe=r,mt=l,Oe!==null&&(mt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(mt?(e=Oe,n=n.stateNode,e.nodeType===8?Eo(e.parentNode,n):e.nodeType===1&&Eo(e,n),Gn(e)):Eo(Oe,n.stateNode));break;case 4:r=Oe,l=mt,Oe=n.stateNode.containerInfo,mt=!0,Ht(e,t,n),Oe=r,mt=l;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&ui(n,t,i),l=l.next}while(l!==r)}Ht(e,t,n);break;case 1:if(!Be&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){he(n,t,u)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Ht(e,t,n),Be=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function us(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xf),t.forEach(function(r){var l=jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:Oe=u.stateNode,mt=!1;break e;case 3:Oe=u.stateNode.containerInfo,mt=!0;break e;case 4:Oe=u.stateNode.containerInfo,mt=!0;break e}u=u.return}if(Oe===null)throw Error(p(160));is(o,i,l),Oe=null,mt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(m){he(l,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)as(t,e),t=t.sibling}function as(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),r&4){try{hr(3,e,e.return),hl(3,e)}catch(j){he(e,e.return,j)}try{hr(5,e,e.return)}catch(j){he(e,e.return,j)}}break;case 1:ht(t,e),kt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ht(t,e),kt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(j){he(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Di(l,o),Vl(u,i);var m=Vl(u,o);for(i=0;i<a.length;i+=2){var x=a[i],k=a[i+1];x==="style"?$i(l,k):x==="dangerouslySetInnerHTML"?Hi(l,k):x==="children"?Dn(l,k):ge(l,x,k,m)}switch(u){case"input":Il(l,o);break;case"textarea":Ai(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?cn(l,!!o.multiple,N,!1):v!==!!o.multiple&&(o.defaultValue!=null?cn(l,!!o.multiple,o.defaultValue,!0):cn(l,!!o.multiple,o.multiple?[]:"",!1))}l[lr]=o}catch(j){he(e,e.return,j)}}break;case 6:if(ht(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(j){he(e,e.return,j)}}break;case 3:if(ht(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(j){he(e,e.return,j)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(pi=ye())),r&4&&us(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(m=Be)||x,ht(t,e),Be=m):ht(t,e),kt(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!x&&(e.mode&1)!==0)for(P=e,x=e.child;x!==null;){for(k=P=x;P!==null;){switch(v=P,N=v.child,v.tag){case 0:case 11:case 14:case 15:hr(4,v,v.return);break;case 1:Ln(v,v.return);var z=v.stateNode;if(typeof z.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,z.props=t.memoizedProps,z.state=t.memoizedState,z.componentWillUnmount()}catch(j){he(r,n,j)}}break;case 5:Ln(v,v.return);break;case 22:if(v.memoizedState!==null){fs(k);continue}}N!==null?(N.return=v,P=N):fs(k)}x=x.sibling}e:for(x=null,k=e;;){if(k.tag===5){if(x===null){x=k;try{l=k.stateNode,m?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=k.stateNode,a=k.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Wi("display",i))}catch(j){he(e,e.return,j)}}}else if(k.tag===6){if(x===null)try{k.stateNode.nodeValue=m?"":k.memoizedProps}catch(j){he(e,e.return,j)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;x===k&&(x=null),k=k.return}x===k&&(x=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ht(t,e),kt(e),r&4&&us(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ls(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=os(e);ci(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=os(e);si(e,u,i);break;default:throw Error(p(161))}}catch(a){he(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){P=e,ss(e)}function ss(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||ml;if(!i){var u=l.alternate,a=u!==null&&u.memoizedState!==null||Be;u=ml;var m=Be;if(ml=i,(Be=a)&&!m)for(P=l;P!==null;)i=P,a=i.child,i.tag===22&&i.memoizedState!==null?ds(l):a!==null?(a.return=i,P=a):ds(l);for(;o!==null;)P=o,ss(o),o=o.sibling;P=l,ml=u,Be=m}cs(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,P=o):cs(e)}}function cs(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Be||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fa(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var x=m.memoizedState;if(x!==null){var k=x.dehydrated;k!==null&&Gn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Be||t.flags&512&&ai(t)}catch(v){he(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function fs(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ds(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(a){he(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){he(t,l,a)}}var o=t.return;try{ai(t)}catch(a){he(t,o,a)}break;case 5:var i=t.return;try{ai(t)}catch(a){he(t,i,a)}}}catch(a){he(t,t.return,a)}if(t===e){P=null;break}var u=t.sibling;if(u!==null){u.return=t.return,P=u;break}P=t.return}}var Sf=Math.ceil,gl=ie.ReactCurrentDispatcher,fi=ie.ReactCurrentOwner,at=ie.ReactCurrentBatchConfig,Z=0,Re=null,Se=null,Ie=0,nt=0,Tn=Ft(0),Pe=0,gr=null,rn=0,vl=0,di=0,vr=null,Ye=null,pi=0,Mn=1/0,jt=null,yl=!1,mi=null,Wt=null,xl=!1,$t=null,wl=0,yr=0,hi=null,kl=-1,Sl=0;function We(){return(Z&6)!==0?ye():kl!==-1?kl:kl=ye()}function Qt(e){return(e.mode&1)===0?1:(Z&2)!==0&&Ie!==0?Ie&-Ie:lf.transition!==null?(Sl===0&&(Sl=ou()),Sl):(e=te,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e)}function gt(e,t,n,r){if(50<yr)throw yr=0,hi=null,Error(p(185));Hn(e,n,r),((Z&2)===0||e!==Re)&&(e===Re&&((Z&2)===0&&(vl|=n),Pe===4&&Kt(e,Ie)),Xe(e,r),n===1&&Z===0&&(t.mode&1)===0&&(Mn=ye()+500,Zr&&At()))}function Xe(e,t){var n=e.callbackNode;lc(e,t);var r=Lr(e,e===Re?Ie:0);if(r===0)n!==null&&nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nu(n),t===1)e.tag===0?rf(ms.bind(null,e)):bu(ms.bind(null,e)),bc(function(){(Z&6)===0&&At()}),n=null;else{switch(iu(r)){case 1:n=Gl;break;case 4:n=ru;break;case 16:n=Pr;break;case 536870912:n=lu;break;default:n=Pr}n=Ss(n,ps.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ps(e,t){if(kl=-1,Sl=0,(Z&6)!==0)throw Error(p(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Lr(e,e===Re?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=El(e,r);else{t=r;var l=Z;Z|=2;var o=gs();(Re!==e||Ie!==t)&&(jt=null,Mn=ye()+500,on(e,t));do try{_f();break}catch(u){hs(e,u)}while(!0);Mo(),gl.current=o,Z=l,Se!==null?t=0:(Re=null,Ie=0,t=Pe)}if(t!==0){if(t===2&&(l=Yl(e),l!==0&&(r=l,t=gi(e,l))),t===1)throw n=gr,on(e,0),Kt(e,r),Xe(e,ye()),n;if(t===6)Kt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Ef(l)&&(t=El(e,r),t===2&&(o=Yl(e),o!==0&&(r=o,t=gi(e,o))),t===1))throw n=gr,on(e,0),Kt(e,r),Xe(e,ye()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:un(e,Ye,jt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=pi+500-ye(),10<t)){if(Lr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=So(un.bind(null,e,Ye,jt),t);break}un(e,Ye,jt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-ct(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sf(r/1960))-r,10<r){e.timeoutHandle=So(un.bind(null,e,Ye,jt),r);break}un(e,Ye,jt);break;case 5:un(e,Ye,jt);break;default:throw Error(p(329))}}}return Xe(e,ye()),e.callbackNode===n?ps.bind(null,e):null}function gi(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=El(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&vi(t)),e}function vi(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Ef(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ft(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~di,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function ms(e){if((Z&6)!==0)throw Error(p(327));On();var t=Lr(e,0);if((t&1)===0)return Xe(e,ye()),null;var n=El(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=gi(e,r))}if(n===1)throw n=gr,on(e,0),Kt(e,t),Xe(e,ye()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ye,jt),Xe(e,ye()),null}function yi(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Mn=ye()+500,Zr&&At())}}function ln(e){$t!==null&&$t.tag===0&&(Z&6)===0&&On();var t=Z;Z|=1;var n=at.transition,r=te;try{if(at.transition=null,te=1,e)return e()}finally{te=r,at.transition=n,Z=t,(Z&6)===0&&At()}}function xi(){nt=Tn.current,ae(Tn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qc(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(zo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:jn(),ae(Qe),ae(Ue),Bo();break;case 5:Ao(r);break;case 4:jn();break;case 13:ae(pe);break;case 19:ae(pe);break;case 10:Oo(r.type._context);break;case 22:case 23:xi()}n=n.return}if(Re=e,Se=e=Gt(e.current,null),Ie=nt=t,Pe=0,gr=null,di=vl=rn=0,Ye=vr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}en=null}return e}function hs(e,t){do{var n=Se;try{if(Mo(),il.current=cl,ul){for(var r=me.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(nn=0,je=Ne=me=null,cr=!1,fr=0,fi.current=null,n===null||n.return===null){Pe=1,gr=t,Se=null;break}e:{var o=e,i=n.return,u=n,a=t;if(t=Ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var m=a,x=u,k=x.tag;if((x.mode&1)===0&&(k===0||k===11||k===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var N=Va(i);if(N!==null){N.flags&=-257,Ba(N,i,u,o,t),N.mode&1&&Aa(o,m,t),t=N,a=m;var z=t.updateQueue;if(z===null){var j=new Set;j.add(a),t.updateQueue=j}else z.add(a);break e}else{if((t&1)===0){Aa(o,m,t),wi();break e}a=Error(p(426))}}else if(fe&&u.mode&1){var xe=Va(i);if(xe!==null){(xe.flags&65536)===0&&(xe.flags|=256),Ba(xe,i,u,o,t),Lo(Rn(a,u));break e}}o=a=Rn(a,u),Pe!==4&&(Pe=2),vr===null?vr=[o]:vr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Fa(o,a,t);ca(o,f);break e;case 1:u=a;var s=o.type,d=o.stateNode;if((o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wt===null||!Wt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Ua(o,u,t);ca(o,S);break e}}o=o.return}while(o!==null)}ys(n)}catch(R){t=R,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function gs(){var e=gl.current;return gl.current=cl,e===null?cl:e}function wi(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||(rn&268435455)===0&&(vl&268435455)===0||Kt(Re,Ie)}function El(e,t){var n=Z;Z|=2;var r=gs();(Re!==e||Ie!==t)&&(jt=null,on(e,t));do try{Cf();break}catch(l){hs(e,l)}while(!0);if(Mo(),Z=n,gl.current=r,Se!==null)throw Error(p(261));return Re=null,Ie=0,Pe}function Cf(){for(;Se!==null;)vs(Se)}function _f(){for(;Se!==null&&!Xs();)vs(Se)}function vs(e){var t=ks(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ys(e):Se=t,fi.current=null}function ys(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=vf(n,t,nt),n!==null){Se=n;return}}else{if(n=yf(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Pe===0&&(Pe=5)}function un(e,t,n){var r=te,l=at.transition;try{at.transition=null,te=1,Nf(e,t,n,r)}finally{at.transition=l,te=r}return null}function Nf(e,t,n,r){do On();while($t!==null);if((Z&6)!==0)throw Error(p(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(oc(e,o),e===Re&&(Se=Re=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xl||(xl=!0,Ss(Pr,function(){return On(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=at.transition,at.transition=null;var i=te;te=1;var u=Z;Z|=4,fi.current=null,wf(e,n),as(n,e),Qc(wo),Or=!!xo,wo=xo=null,e.current=n,kf(n),Zs(),Z=u,te=i,at.transition=o}else e.current=n;if(xl&&(xl=!1,$t=e,wl=l),o=e.pendingLanes,o===0&&(Wt=null),bs(n.stateNode),Xe(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=mi,mi=null,e;return(wl&1)!==0&&e.tag!==0&&On(),o=e.pendingLanes,(o&1)!==0?e===hi?yr++:(yr=0,hi=e):yr=0,At(),null}function On(){if($t!==null){var e=iu(wl),t=at.transition,n=te;try{if(at.transition=null,te=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,wl=0,(Z&6)!==0)throw Error(p(331));var l=Z;for(Z|=4,P=e.current;P!==null;){var o=P,i=o.child;if((P.flags&16)!==0){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var m=u[a];for(P=m;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:hr(8,x,o)}var k=x.child;if(k!==null)k.return=x,P=k;else for(;P!==null;){x=P;var v=x.sibling,N=x.return;if(rs(x),x===m){P=null;break}if(v!==null){v.return=N,P=v;break}P=N}}}var z=o.alternate;if(z!==null){var j=z.child;if(j!==null){z.child=null;do{var xe=j.sibling;j.sibling=null,j=xe}while(j!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var s=e.current;for(P=s;P!==null;){i=P;var d=i.child;if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,P=d;else e:for(i=s;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:hl(9,u)}}catch(R){he(u,u.return,R)}if(u===i){P=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,P=S;break e}P=u.return}}if(Z=l,At(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{te=n,at.transition=t}}return!1}function xs(e,t,n){t=Rn(n,t),t=Fa(e,t,1),e=Bt(e,t,1),t=We(),e!==null&&(Hn(e,1,t),Xe(e,t))}function he(e,t,n){if(e.tag===3)xs(e,e,n);else for(;t!==null;){if(t.tag===3){xs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Rn(n,e),e=Ua(t,e,1),t=Bt(t,e,1),e=We(),t!==null&&(Hn(t,1,e),Xe(t,e));break}}t=t.return}}function Pf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ie&n)===n&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>ye()-pi?on(e,0):di|=n),Xe(e,t)}function ws(e,t){t===0&&((e.mode&1)===0?t=1:(t=Rr,Rr<<=1,(Rr&130023424)===0&&(Rr=4194304)));var n=We();e=Nt(e,t),e!==null&&(Hn(e,t,n),Xe(e,n))}function zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ws(e,n)}function jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),ws(e,n)}var ks;ks=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,gf(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,fe&&(t.flags&1048576)!==0&&ea(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pl(e,t),e=t.pendingProps;var l=Sn(t,Ue.current);zn(t,n),l=$o(null,t,r,e,l,n);var o=Qo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,Xr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fo(t),l.updater=fl,t.stateNode=l,l._reactInternals=t,Jo(t,r,e,n),t=ti(null,t,r,!0,o,n)):(t.tag=0,fe&&o&&Po(t),He(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lf(r),e=pt(r,e),l){case 0:t=ei(null,t,r,e,n);break e;case 1:t=Ga(null,t,r,e,n);break e;case 11:t=Ha(null,t,r,e,n);break e;case 14:t=Wa(null,t,r,pt(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),ei(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Ga(e,t,r,l,n);case 3:e:{if(Ya(t),e===null)throw Error(p(387));r=t.pendingProps,o=t.memoizedState,l=o.element,sa(e,t),ll(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Rn(Error(p(423)),t),t=Xa(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(p(424)),t),t=Xa(e,t,r,n,l);break e}else for(tt=Dt(t.stateNode.containerInfo.firstChild),et=t,fe=!0,dt=null,n=ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===l){t=zt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return da(t),e===null&&Ro(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ko(r,l)?i=null:o!==null&&ko(r,o)&&(t.flags|=32),Ka(e,t),He(e,t,i,n),t.child;case 6:return e===null&&Ro(t),null;case 13:return Za(e,t,n);case 4:return Uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),Ha(e,t,r,l,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,oe(tl,r._currentValue),r._currentValue=i,o!==null)if(ft(o.value,i)){if(o.children===l.children&&!Qe.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Pt(-1,n&-n),a.tag=2;var m=o.updateQueue;if(m!==null){m=m.shared;var x=m.pending;x===null?a.next=a:(a.next=x.next,x.next=a),m.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Io(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(p(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Io(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}He(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,zn(t,n),l=it(l),r=r(l),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,l=pt(r,t.pendingProps),l=pt(r.type,l),Wa(e,t,r,l,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:pt(r,l),pl(e,t),t.tag=1,Ke(r)?(e=!0,Xr(t)):e=!1,zn(t,n),Ia(t,r,l),Jo(t,r,l,n),ti(null,t,r,!0,e,n);case 19:return qa(e,t,n);case 22:return Qa(e,t,n)}throw Error(p(156,t.tag))};function Ss(e,t){return tu(e,t)}function Rf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Rf(e,t,n,r)}function ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$e)return 11;if(e===ze)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ki(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ke:return an(n.children,l,o,t);case _e:i=8,l|=8;break;case H:return e=st(12,n,t,l|2),e.elementType=H,e.lanes=o,e;case $:return e=st(13,n,t,l),e.elementType=$,e.lanes=o,e;case ve:return e=st(19,n,t,l),e.elementType=ve,e.lanes=o,e;case se:return _l(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Je:i=10;break e;case rt:i=9;break e;case $e:i=11;break e;case ze:i=14;break e;case Fe:i=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=st(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=st(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function Si(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Ei(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ci(e,t,n,r,l,o,i,u,a){return e=new Tf(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Es(e){if(!e)return Ut;e=e._reactInternals;e:{if(Xt(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Ju(e,n,t)}return t}function Cs(e,t,n,r,l,o,i,u,a){return e=Ci(n,r,!0,e,l,o,i,u,a),e.context=Es(null),n=e.current,r=We(),l=Qt(n),o=Pt(r,l),o.callback=t??null,Bt(n,o,l),e.current.lanes=l,Hn(e,l,r),Xe(e,r),e}function Nl(e,t,n,r){var l=t.current,o=We(),i=Qt(l);return n=Es(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,i),e!==null&&(gt(e,l,i,o),rl(e,l,i)),i}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _s(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _i(e,t){_s(e,t),(e=e.alternate)&&_s(e,t)}function Of(){return null}var Ns=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ni(e){this._internalRoot=e}zl.prototype.render=Ni.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));Nl(e,t,null,null)},zl.prototype.unmount=Ni.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Nl(null,e,null,null)}),t[St]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=su();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&du(e)}};function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ps(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var m=Pl(i);o.call(m)}}var i=Cs(t,r,e,0,null,!1,!1,"",Ps);return e._reactRootContainer=i,e[St]=i.current,nr(e.nodeType===8?e.parentNode:e),ln(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var m=Pl(a);u.call(m)}}var a=Ci(e,0,!1,null,null,!1,!1,"",Ps);return e._reactRootContainer=a,e[St]=a.current,nr(e.nodeType===8?e.parentNode:e),ln(function(){Nl(t,a,n,r)}),a}function Rl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var a=Pl(i);u.call(a)}}Nl(t,i,e,l)}else i=If(n,t,e,l,r);return Pl(i)}uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Zl(t,n|1),Xe(t,ye()),(Z&6)===0&&(Mn=ye()+500,At()))}break;case 13:ln(function(){var r=Nt(e,1);if(r!==null){var l=We();gt(r,e,1,l)}}),_i(e,1)}},Jl=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=We();gt(t,e,134217728,n)}_i(e,134217728)}},au=function(e){if(e.tag===13){var t=Qt(e),n=Nt(e,t);if(n!==null){var r=We();gt(n,e,t,r)}_i(e,t)}},su=function(){return te},cu=function(e,t){var n=te;try{return te=e,t()}finally{te=n}},Wl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Gr(r);if(!l)throw Error(p(90));Oi(r),Il(r,l)}}}break;case"textarea":Ai(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}},Yi=yi,Xi=ln;var Df={usingClientEntryPoint:!1,Events:[or,wn,Gr,Ki,Gi,yi]},xr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bi(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{zr=Ll.inject(Ff),vt=Ll}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df,Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pi(t))throw Error(p(200));return Mf(e,t,null,n)},Ze.createRoot=function(e,t){if(!Pi(e))throw Error(p(299));var n=!1,r="",l=Ns;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ci(e,1,!1,null,null,n,!1,r,l),e[St]=t.current,nr(e.nodeType===8?e.parentNode:e),new Ni(t)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=bi(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return ln(e)},Ze.hydrate=function(e,t,n){if(!jl(t))throw Error(p(200));return Rl(null,e,t,!0,n)},Ze.hydrateRoot=function(e,t,n){if(!Pi(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Ns;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Cs(t,null,e,1,n??null,l,!1,o,i),e[St]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)},Ze.render=function(e,t,n){if(!jl(t))throw Error(p(200));return Rl(null,e,t,!1,n)},Ze.unmountComponentAtNode=function(e){if(!jl(e))throw Error(p(40));return e._reactRootContainer?(ln(function(){Rl(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1},Ze.unstable_batchedUpdates=yi,Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jl(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Rl(e,t,n,!1,r)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var Is;function Kf(){if(Is)return Ri.exports;Is=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(_){console.error(_)}}return w(),Ri.exports=Qf(),Ri.exports}var Ds;function Gf(){if(Ds)return Tl;Ds=1;var w=Kf();return Tl.createRoot=w.createRoot,Tl.hydrateRoot=w.hydrateRoot,Tl}var Yf=Gf();const Xf=Vs(Yf),sn="/api",Ml=[{id:"realistic",name:"Realistisk",emoji:"📷"},{id:"artistic",name:"Konstnärlig",emoji:"🎨"},{id:"anime",name:"Anime",emoji:"🎌"},{id:"cyberpunk",name:"Cyberpunk",emoji:"🌃"},{id:"fantasy",name:"Fantasy",emoji:"🧙"},{id:"sketch",name:"Skiss",emoji:"✏️"},{id:"watercolor",name:"Akvarell",emoji:"🖌️"},{id:"vintage",name:"Vintage",emoji:"📼"}],Te={log:async(w,_,p="")=>{const A=new Date().toISOString();console.log(`[${w}] ${_}`,p);try{await fetch(`${sn}/log-frontend`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({level:w,message:_,details:JSON.stringify(p),timestamp:A})})}catch(O){console.error("Failed to send log to backend:",O)}},info:(w,_)=>Te.log("INFO",w,_),error:(w,_)=>Te.log("ERROR",w,_),warning:(w,_)=>Te.log("WARNING",w,_)},Zf=async()=>(await(await fetch(`${sn}/prompts`)).json()).prompts||[],Jf=async(w,_)=>{const p=new FormData;p.append("file",w);const A=await fetch(`${sn}/generate-prompt?style=${_}`,{method:"POST",body:p});if(!A.ok)throw await A.text(),new Error(`Failed to generate prompt: ${A.status}`);return await A.json()},Fs=async(w,_)=>{const p=await fetch(`${sn}/generate-image`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:w,style:_,num_inference_steps:30,guidance_scale:7.5})});if(!p.ok)throw new Error("Failed to generate image");return await p.json()},qf=async(w,_)=>{const p=new FormData;p.append("file",w),_&&p.append("style",_);const A=await fetch(`${sn}/recreate-image`,{method:"POST",body:p});if(!A.ok)throw await A.text(),new Error(`Failed to recreate image: ${A.status}`);return await A.json()},bf=async(w,_)=>{const p=await fetch(`${sn}/recreate-prompt`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:w,style:_})});if(!p.ok)throw new Error("Failed to recreate prompt");return await p.json()};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=(...w)=>w.filter((_,p,A)=>!!_&&_.trim()!==""&&A.indexOf(_)===p).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=w=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(_,p,A)=>A?A.toUpperCase():p.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=w=>{const _=td(w);return _.charAt(0).toUpperCase()+_.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=w=>{for(const _ in w)if(_.startsWith("aria-")||_==="role"||_==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=ne.forwardRef(({color:w="currentColor",size:_=24,strokeWidth:p=2,absoluteStrokeWidth:A,className:O="",children:I,iconNode:re,...V},B)=>ne.createElement("svg",{ref:B,...nd,width:_,height:_,stroke:w,strokeWidth:A?Number(p)*24/Number(_):p,className:Bs("lucide",O),...!I&&!rd(V)&&{"aria-hidden":"true"},...V},[...re.map(([K,G])=>ne.createElement(K,G)),...Array.isArray(I)?I:[I]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=(w,_)=>{const p=ne.forwardRef(({className:A,...O},I)=>ne.createElement(ld,{ref:I,iconNode:_,className:Bs(`lucide-${ed(Us(w))}`,`lucide-${w}`,A),...O}));return p.displayName=Us(w),p};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],id=kr("arrow-left",od);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],As=kr("camera",ud);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],sd=kr("download",ad);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fd=kr("sparkles",cd);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],pd=kr("upload",dd);function md({selectedStyle:w,setSelectedStyle:_,recentPrompts:p,useRecentPrompt:A,useRecreateMode:O,setUseRecreateMode:I,fileInputRef:re,cameraInputRef:V,handleImageUpload:B,carouselIndex:K,setCarouselIndex:G,handlePromptSubmit:Y}){const[X,Ee]=ne.useState(""),W=Math.ceil(Ml.length/100),F=ne.useRef(null),[Ce,we]=ne.useState(null),[ge,ie]=ne.useState(!1),[De,de]=ne.useState(0);ne.useEffect(()=>{if(F.current){const $=K*F.current.offsetWidth;F.current.scrollTo({left:$,behavior:"smooth"})}},[K]);const ke=()=>{G($=>($+1)%W)},_e=()=>{G($=>($-1+W)%W)},H=$=>{we($.clientX),ie(!1),de(0)},Je=$=>{if(Ce!==null&&F.current){const ve=$.clientX-Ce;de(ve),Math.abs(ve)>10&&ie(!0);const ze=K*F.current.offsetWidth-ve;F.current.scrollLeft=ze}},rt=$=>{if(Ce!==null){const ve=$.clientX-Ce;if(Math.abs(ve)>100)ve<0?ke():_e();else if(F.current){const ze=K*F.current.offsetWidth;F.current.scrollTo({left:ze,behavior:"smooth"})}we(null),de(0),setTimeout(()=>ie(!1),100)}},$e=$=>{ge||_($)};return y.jsxs("div",{className:"home-screen",children:[y.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
          color: #ececec;
          overflow-x: hidden;
        }

        .home-screen {
          min-height: 100vh;
          width: 80%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
        }

        .header {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo {
          font-weight: 600;
          font-size: 14px;
          color: #ececec;
        }

        .close-btn {
          background: none;
          border: none;
          color: #ececec;
          font-size: 20px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .home-content {
          flex: 1;
          padding: 60px 40px;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .home-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 32px;
          text-align: center;
        }

        .search-bar {
          max-width: 800px;
          margin: 0 auto 60px;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 32px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s;
        }

        .search-bar:focus-within {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .search-icon {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }

        .search-input {
          flex: 1;
          background: none;
          border: none;
          color: #ececec;
          font-size: 15px;
          outline: none;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .search-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .search-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .search-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .upload-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .upload-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .section {
          margin-bottom: 60px;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 600;
        }

        .section-nav {
          display: flex;
          gap: 8px;
        }

        .nav-btn {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: #ececec;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .styles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .style-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          opacity: ${ge?.7:1};
        }

        .style-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .style-card.selected {
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
        }

        .style-preview {
          width: 100%;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          background: rgba(255, 255, 255, 0.05);
        }

        .style-name {
          padding: 12px;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
        }

        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .suggestion-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .suggestion-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .suggestion-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .suggestion-text {
          font-size: 14px;
          font-weight: 500;
        }

        .mode-section {
          margin-bottom: 60px;
        }

        .mode-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 4px;
          max-width: 400px;
          margin: 0 auto;
        }

        .mode-btn {
          flex: 1;
          padding: 12px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .mode-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .mode-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ececec;
        }

        .camera-section {
          text-align: center;
        }

        .camera-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .camera-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 28px;
          }

          .styles-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .suggestions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),y.jsx("header",{className:"header",children:y.jsx("div",{className:"header-left",children:y.jsx("div",{className:"logo",children:"Kundskapskontrollen"})})}),y.jsxs("div",{className:"home-content",children:[y.jsx("h1",{className:"home-title",children:"Bilder"}),y.jsxs("div",{className:"search-bar",children:[y.jsx("button",{className:"upload-btn",onClick:()=>re.current.click(),children:y.jsx(pd,{size:20})}),y.jsx("input",{type:"text",className:"search-input",placeholder:"Beskriv en ny bild",value:X,onChange:$=>Ee($.target.value),onKeyDown:$=>{$.key==="Enter"&&X.trim()&&(Y(X),Ee(""))}}),y.jsx("div",{className:"search-actions",children:y.jsx("button",{className:"search-btn",onClick:()=>V.current.click(),children:y.jsx(As,{size:20})})})]}),y.jsx("input",{type:"file",ref:re,onChange:B,accept:"image/*",style:{display:"none"}}),y.jsx("input",{type:"file",ref:V,onChange:B,accept:"image/*",capture:"environment",style:{display:"none"}}),y.jsxs("div",{className:"section",children:[y.jsx("div",{className:"section-header",children:y.jsx("h2",{className:"section-title",children:"Prova en stil på en bild"})}),y.jsx("div",{ref:F,className:"styles-grid",onMouseDown:H,onMouseMove:Je,onMouseUp:rt,onMouseLeave:rt,style:{cursor:Ce!==null?"grabbing":"grab",userSelect:"none"},children:Ml.slice(0,8).map(($,ve)=>y.jsxs("div",{className:`style-card ${w===$.id?"selected":""}`,onClick:()=>$e($.id),onDragStart:ze=>ze.preventDefault(),children:[y.jsx("div",{className:"style-preview",children:$.emoji}),y.jsx("div",{className:"style-name",children:$.name})]},$.id))})]}),y.jsx("div",{className:"mode-section",children:y.jsxs("div",{className:"mode-toggle",children:[y.jsx("button",{className:`mode-btn ${O?"active":""}`,onClick:()=>I(!0),children:"🎨 Återskapa Bild"}),y.jsx("button",{className:`mode-btn ${O?"":"active"}`,onClick:()=>I(!1),children:"💭 Generera Prompt"})]})}),y.jsx("div",{className:"camera-section",children:y.jsxs("button",{className:"camera-btn",onClick:()=>V.current.click(),children:[y.jsx(As,{size:20}),"Ta ett foto"]})})]})]})}function hd({onBackToHome:w,initialPrompt:_="",selectedStyle:p=null,setSelectedStyle:A,capturedImage:O,useRecreateMode:I,isLoading:re,generatedPrompt:V,analysisData:B,isGeneratingImage:K,generatedImage:G,resetSession:Y,generateImage:X,recreatePrompt:Ee,chatScrollRef:Me}){var _e;const[W,F]=ne.useState(_),[Ce,we]=ne.useState(!1),ge=()=>{if(!G)return;const H=document.createElement("a");H.href=G,H.download=`generated_${Date.now()}.png`,document.body.appendChild(H),H.click(),document.body.removeChild(H)},ie=()=>{W.trim()&&(F(W.trim()),X())},De=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),ie())},de=H=>{A(H.id),we(!1),setTimeout(()=>Ee(),100)},ke=()=>{we(!0)};return y.jsxs("div",{className:"chat-room",children:[y.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
          color: #ececec;
          overflow-x: hidden;
        }

        .chat-room {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #2d1b4e 0%, #3d2f4a 50%, #4a3a38 100%);
        }

        .header {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .back-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ececec;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .logo {
          font-weight: 600;
          font-size: 14px;
          color: #ececec;
        }

        .close-btn {
          background: none;
          border: none;
          color: #ececec;
          font-size: 20px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .chat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .content-wrapper {
          width: 100%;
          max-width: 900px;
        }

        .chat-container {
          flex: 1;
          width: 100%;
          max-height: 600px;
          overflow-y: auto;
          margin-bottom: 32px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chat-message {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
        }

        .message-content {
          max-width: 80%;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-message .message-content {
          align-self: flex-end;
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
        }

        .ai-message .message-content {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.05);
        }

        .chat-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .generated {
          border: 2px solid rgba(102, 126, 234, 0.5);
        }

        .message-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .prompt-box {
          background: rgba(0, 0, 0, 0.3);
          padding: 12px;
          border-radius: 8px;
          font-style: italic;
          margin-bottom: 12px;
        }

        .analysis-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .chip {
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.8);
        }

        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .gradient-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border-radius: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .download-image-btn {
          background: rgba(102, 126, 234, 0.8);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 12px;
          margin-top: 8px;
          transition: all 0.2s;
        }

        .download-image-btn:hover {
          background: rgba(102, 126, 234, 1);
        }

        .image-display {
          width: 100%;
          margin-bottom: 32px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .loading-text {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .image-caption {
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .caption-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .caption-text {
          color: #ececec;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .image-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          color: #ececec;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .prompt-section {
          width: 100%;
          position: relative;
        }

        .prompt-input-wrapper {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          transition: all 0.3s;
          overflow: hidden;
        }

        .prompt-input-wrapper:focus-within {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .prompt-textarea {
          width: 100%;
          min-height: 120px;
          padding: 20px;
          background: transparent;
          border: none;
          color: #ececec;
          font-size: 15px;
          font-family: inherit;
          line-height: 1.6;
          resize: none;
          outline: none;
        }

        .prompt-textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .input-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.2);
        }

        .voice-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }

        .voice-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
        }

        .voice-btn svg {
          width: 20px;
          height: 20px;
        }

        .generate-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .generate-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        .generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .generate-btn svg {
          width: 16px;
          height: 16px;
        }

        .chat-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          padding: 20px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(102, 126, 234, 0.6);
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ececec;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .action-btn.success {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
          color: white;
          box-shadow: 0 4px 16px rgba(74, 222, 128, 0.4);
        }

        .action-btn.success:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(74, 222, 128, 0.6);
        }

        .action-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .footer-note {
          text-align: center;
          margin-top: 24px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          max-width: 600px;
        }

        .footer-note a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
        }

        .footer-note a:hover {
          text-decoration: underline;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
          gap: 16px;
          padding: 80px 20px;
        }

        .empty-state svg {
          width: 64px;
          height: 64px;
          opacity: 0.3;
        }

        .empty-state-text {
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .chat-content {
            padding: 20px 16px;
          }

          .content-wrapper {
            max-width: 100%;
          }

          .chat-actions {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background: linear-gradient(135deg, #3d2f4a 0%, #4a3a38 100%);
          border-radius: 16px;
          padding: 24px;
          max-width: 400px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .modal-content h3 {
          color: #ececec;
          margin-bottom: 20px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }

        .style-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .style-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .style-option:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .style-option.selected {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.1);
        }

        .style-emoji {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .style-name {
          font-size: 12px;
          color: #ececec;
          font-weight: 500;
        }

        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          color: #ececec;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 480px) {
          .style-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),y.jsxs("header",{className:"header",children:[y.jsxs("div",{className:"header-left",children:[y.jsx("div",{className:"logo",children:"Kundskapskontrollen"}),y.jsxs("button",{className:"back-btn",onClick:w||Y,children:[y.jsx(id,{size:16}),"Tillbaka"]})]}),y.jsx("button",{className:"close-btn",children:"×"})]}),y.jsx("div",{className:"chat-content",children:y.jsxs("div",{className:"content-wrapper",children:[G||K?y.jsxs("div",{className:"image-display",children:[y.jsx("div",{className:"image-container",children:K?y.jsxs("div",{className:"loading-state",children:[y.jsx("div",{className:"spinner"}),y.jsx("div",{className:"loading-text",children:"Skapar bild..."})]}):y.jsx("img",{src:G,alt:"Generated"})}),G&&!K&&y.jsxs("div",{className:"image-caption",children:[y.jsxs("div",{className:"caption-label",children:["Bilden har skapats • ",(p==null?void 0:p.name)||"Anpassad stil"]}),y.jsx("div",{className:"caption-text",children:(V==null?void 0:V.prompt)||W}),y.jsx("div",{className:"image-actions",children:y.jsxs("button",{className:"action-btn",onClick:ge,children:[y.jsx(sd,{size:16}),"Ladda ner"]})})]})]}):y.jsxs("div",{className:"chat-container",ref:Me,children:[O&&y.jsx("div",{className:"chat-message user-message",children:y.jsxs("div",{className:"message-content",children:[y.jsx("img",{src:O,alt:"Uploaded",className:"chat-image"}),y.jsx("div",{className:"message-label",children:I?"🎨 Återskapa denna bild":"💭 Generera prompt"})]})}),re&&!V&&y.jsx("div",{className:"chat-message ai-message",children:y.jsxs("div",{className:"message-content loading-content",children:[y.jsx("div",{className:"spinner"}),y.jsx("p",{children:"Analyserar bild..."})]})}),V&&y.jsx("div",{className:"chat-message ai-message",children:y.jsxs("div",{className:"message-content",children:[y.jsx("div",{className:"message-label",children:"💬 Genererad prompt:"}),y.jsx("div",{className:"prompt-box",children:V.prompt}),B&&y.jsxs("div",{className:"analysis-chips",children:[y.jsxs("span",{className:"chip",children:["🎨 ",B.colors]}),y.jsxs("span",{className:"chip",children:["💡 ",B.lighting]}),((_e=B.facial_features)==null?void 0:_e.faces_detected)>0&&y.jsxs("span",{className:"chip",children:["👤 ",B.facial_features.faces_detected," ansikte(n)"]})]})]})}),K&&!G&&y.jsx("div",{className:"chat-message ai-message",children:y.jsxs("div",{className:"message-content loading-content",children:[y.jsx("div",{className:"message-label",children:"Skapar bild..."}),y.jsx("div",{className:"gradient-placeholder"})]})}),G&&y.jsx("div",{className:"chat-message ai-message",children:y.jsxs("div",{className:"message-content",children:[y.jsx("div",{className:"message-label",children:"✨ Färdig bild:"}),y.jsx("img",{src:G,alt:"Generated",className:"chat-image generated",onError:H=>{console.error("Image failed to load:",G.substring(0,100)),H.target.style.border="2px solid red"},onLoad:H=>{console.log("Image loaded successfully, dimensions:",H.target.naturalWidth,"x",H.target.naturalHeight)}}),y.jsx("button",{className:"download-image-btn",onClick:ge,children:"⬇️ Ladda ner bild"})]})})]}),y.jsx("div",{className:"prompt-section",children:y.jsxs("div",{className:"prompt-input-wrapper",children:[y.jsx("textarea",{className:"prompt-textarea",placeholder:"Beskriv bilden du vill skapa...",value:W,onChange:H=>F(H.target.value),onKeyPress:De,autoFocus:!0}),y.jsx("div",{className:"input-footer",children:y.jsxs("button",{className:"generate-btn",onClick:ie,disabled:!W.trim()||K,children:[y.jsx(fd,{}),"Generera"]})})]})}),y.jsx("div",{className:"chat-actions",children:V&&!K&&y.jsxs(y.Fragment,{children:[!G&&y.jsxs("button",{className:"action-btn primary",onClick:X,children:["🎨 ",I?"Generera bild från prompt":"Generera bild"]}),y.jsx("button",{className:"action-btn secondary",onClick:ke,disabled:re,children:"🔄 Ändra stil"}),G&&y.jsx("button",{className:"action-btn success",onClick:Y,children:"✨ Skapa ny bild"})]})})]})}),Ce&&y.jsx("div",{className:"modal-overlay",onClick:()=>we(!1),children:y.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[y.jsx("h3",{children:"Välj en ny stil"}),y.jsx("div",{className:"style-grid",children:Ml.slice(0,5).map(H=>y.jsxs("div",{className:`style-option ${(p==null?void 0:p.id)===H.id?"selected":""}`,onClick:()=>de(H),children:[y.jsx("div",{className:"style-emoji",children:H.emoji}),y.jsx("div",{className:"style-name",children:H.name})]},H.id))}),y.jsx("button",{className:"modal-close",onClick:()=>we(!1),children:"✕"})]})})]})}function gd(){const[w,_]=ne.useState("realistic"),[p,A]=ne.useState(null),[O,I]=ne.useState(null),[re,V]=ne.useState(null),[B,K]=ne.useState(!1),[G,Y]=ne.useState(!1),[X,Ee]=ne.useState([]),[Me,W]=ne.useState(null),[F,Ce]=ne.useState(!0),[we,ge]=ne.useState(!1),[ie,De]=ne.useState(0),de=ne.useRef(null),ke=ne.useRef(null),_e=ne.useRef(null);ne.useEffect(()=>{Te.info("Application Started",{timestamp:new Date().toISOString(),apiUrl:sn,defaultMode:F?"recreation":"prompt-generation"}),H()},[]);const H=async()=>{try{const h=await Zf();Ee(h.slice(0,6))}catch(h){console.error("Error loading prompts:",h)}},Je=async h=>{const E=h.target.files[0];if(!E)return;const C=new FileReader;C.onloadend=()=>{A(C.result),ge(!0)},C.readAsDataURL(E),F?await ve(E):await $e(E)},rt=()=>{A(null),I(null),V(null),W(null),ge(!1)},$e=async h=>{K(!0),I(null),Te.info("Generate Prompt - Started",{mode:"prompt-generation",filename:h.name,fileSize:h.size,style:w});try{Te.info("API Call - Generate Prompt",{endpoint:"/generate-prompt",method:"POST",style:w});const E=await Jf(h,w);Te.info("Generate Prompt - Success",{prompt:E.prompt,confidence:E.confidence,analysis:E.analysis}),I(E),await H()}catch(E){Te.error("Generate Prompt - Exception",{error:E.message}),alert(`Error: ${E.message}`)}finally{K(!1)}},$=async()=>{if(O){Y(!0),Te.info("Generate Image - Started",{prompt:O.prompt,style:w,steps:30,guidance:7.5});try{Te.info("API Call - Generate Image",{endpoint:"/generate-image",method:"POST"});const h=await Fs(O.prompt,w);h.success&&(Te.info("Generate Image - Success",{imageLength:h.image.length,promptUsed:h.prompt}),V(h.image))}catch(h){Te.error("Generate Image - Exception",{error:h.message}),alert(`Error generating image: ${h.message}`)}finally{Y(!1)}}},ve=async h=>{var E,C,c,g,U;K(!0),Y(!0),I(null),V(null),W(null),Te.info("Recreate Image - Started",{mode:"image-recreation",filename:h.name,fileSize:h.size,style:w||"auto-detect"});try{Te.info("API Call - Recreate Image",{endpoint:"/recreate-image",method:"POST",style:w||"auto-detect"});const L=await qf(h,w);Te.info("Recreate Image - Success",{baseCaption:L.base_caption,promptUsed:L.prompt_used,facesDetected:((C=(E=L.analysis)==null?void 0:E.facial_features)==null?void 0:C.faces_detected)||0,colors:(c=L.analysis)==null?void 0:c.colors,lighting:(g=L.analysis)==null?void 0:g.lighting,imageLength:((U=L.generated_image)==null?void 0:U.length)||0}),L.success&&(I({prompt:L.prompt_used,base_caption:L.base_caption}),V(L.generated_image),W(L.analysis))}catch(L){Te.error("Recreate Image - Exception",{error:L.message}),alert(`Error: ${L.message}`)}finally{K(!1),Y(!1)}},ze=async()=>{if(O){K(!0);try{const h=await bf(O.prompt,w);I({...O,prompt:h.new_prompt})}catch(h){alert(`Error recreating prompt: ${h.message}`)}finally{K(!1)}}},Fe=h=>{I({prompt:h.prompt,base_caption:h.base_caption})},se=async h=>{if(h.trim()){Y(!0),I({prompt:h}),V(null),W(null),ge(!0);try{Te.info("API Call - Generate Image (prompt input)",{endpoint:"/generate-image",prompt:h,style:w});const E=await Fs(h,w);E.success&&(V(E.image),I({prompt:E.prompt}))}catch(E){Te.error("Generate Image (prompt input) - Exception",{error:E.message}),alert(`Error generating image: ${E.message}`)}finally{Y(!1)}}};return y.jsx("div",{className:"app",children:we?y.jsx(hd,{capturedImage:p,useRecreateMode:F,isLoading:B,generatedPrompt:O,analysisData:Me,isGeneratingImage:G,generatedImage:re,resetSession:rt,generateImage:$,recreatePrompt:ze,chatScrollRef:_e,selectedStyle:Ml.find(h=>h.id===w),setSelectedStyle:_}):y.jsx(md,{selectedStyle:w,setSelectedStyle:_,recentPrompts:X,useRecentPrompt:Fe,useRecreateMode:F,setUseRecreateMode:Ce,fileInputRef:de,cameraInputRef:ke,handleImageUpload:Je,carouselIndex:ie,setCarouselIndex:De,handlePromptSubmit:se})})}Xf.createRoot(document.getElementById("root")).render(y.jsx(Hf.StrictMode,{children:y.jsx(gd,{})}));
