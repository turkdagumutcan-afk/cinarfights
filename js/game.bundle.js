/* ÇINAR FIGHTS — OTOMATİK ÜRETİLDİ. Elle düzenleme: src/ klasörünü düzenle, sonra `npm run build`. */
// 00-vendor-runtime-libs.js — ÜÇÜNCÜ TARAF (React, react-router, sonner, framer-motion). DÜZENLEME.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return E(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ie(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ae(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ae(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ae(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=ae(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=ae(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ae(ie(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return ae(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&re(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function ee(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&re(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(ee)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,ne=te.port2;te.port1.onmessage=ee,D=function(){ne.postMessage(null)}}else D=function(){_(ee,0)};function re(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,re(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),ee=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),re=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=re&&e[re]||e[`@@iterator`],typeof e==`function`?e:null)}var ae=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ee:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function A(e){return{current:e}}function j(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function M(e,t){ue++,le[ue]=e.current,e.current=t}var de=A(null),fe=A(null),pe=A(null),me=A(null);function he(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Kd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function ge(){j(de),j(fe),j(pe)}function _e(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Kd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function ve(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),np._currentValue=ce)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function N(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var P=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function F(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-P(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&tt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-P(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function nt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-P(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function rt(e,t){var n=t&-t;return n=n&42?1:it(n),(n&(e.suspendedLanes|t))===0?n:0}function it(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ot(){var e=k.p;return e===0?(e=window.event,e===void 0?32:vp(e.type)):e}function st(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ct=Math.random().toString(36).slice(2),lt=`__reactFiber$`+ct,ut=`__reactProps$`+ct,dt=`__reactContainer$`+ct,ft=`__reactEvents$`+ct,pt=`__reactListeners$`+ct,mt=`__reactHandles$`+ct,ht=`__reactResources$`+ct,gt=`__reactMarker$`+ct;function _t(e){delete e[lt],delete e[ut],delete e[ft],delete e[pt],delete e[mt]}function vt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hf(e);e!==null;){if(n=e[lt])return n;e=hf(e)}return t}e=n,n=e.parentNode}return null}function yt(e){if(e=e[lt]||e[dt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function xt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function St(e){e[gt]=!0}var Ct=new Set,wt={};function Tt(e,t){Et(e,t),Et(e+`Capture`,t)}function Et(e,t){for(wt[e]=t,e=0;e<t.length;e++)Ct.add(t[e])}var Dt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ot={},kt={};function At(e){return Ee.call(kt,e)?!0:Ee.call(Ot,e)?!1:Dt.test(e)?kt[e]=!0:(Ot[e]=!0,!1)}function jt(e,t,n){if(At(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Mt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Nt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Pt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ft(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function It(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=Ft(e)?`checked`:`value`;e._valueTracker=It(e,t,``+e[t])}}function Rt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ft(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function zt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Bt=/[\n"\\]/g;function Vt(e){return e.replace(Bt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Ht(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Pt(t)):e.value!==``+Pt(t)&&(e.value=``+Pt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Wt(e,o,Pt(n)):Wt(e,o,Pt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Pt(s):e.removeAttribute(`name`)}function Ut(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Lt(e);return}n=n==null?``:``+Pt(n),t=t==null?n:``+Pt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Lt(e)}function Wt(e,t,n){t===`number`&&zt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kt(e,t,n){if(t!=null&&(t=``+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Pt(n)}function qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Pt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Lt(e)}function Jt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Xt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Yt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Zt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Xt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Xt(e,o,t[o])}function Qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var $t=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),en=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tn(e){return en.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function nn(){}var rn=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=yt(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Ht(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Vt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ut]||null;if(!a)throw Error(i(90));Ht(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Rt(r)}break a;case`textarea`:Kt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(wu(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ut]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=f({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=f({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(f({},An,{dataTransfer:0})),Nn=Sn(f({},Tn,{relatedTarget:0})),Pn=Sn(f({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(f({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(f({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(f({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(f({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(f({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(f({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(f({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(f({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Ad(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){Cd(e,0)}function fr(e){if(Rt(bt(e)))return e}function pr(e,t){if(e===`change`)return t}var mr=!1;if(fn){var hr;if(fn){var gr=`oninput`in document;if(!gr){var _r=document.createElement(`div`);_r.setAttribute(`oninput`,`return;`),gr=typeof _r.oninput==`function`}hr=gr}else hr=!1;mr=hr&&(!document.documentMode||9<document.documentMode)}function vr(){lr&&(lr.detachEvent(`onpropertychange`,yr),ur=lr=null)}function yr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,an(e)),un(dr,t)}}function br(e,t,n){e===`focusin`?(vr(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,yr)):e===`focusout`&&vr()}function xr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function Sr(e,t){if(e===`click`)return fr(t)}function Cr(e,t){if(e===`input`||e===`change`)return fr(t)}function wr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Tr=typeof Object.is==`function`?Object.is:wr;function Er(e,t){if(Tr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Tr(e[i],t[i]))return!1}return!0}function Dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Or(e,t){var n=Dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Dr(n)}}function kr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ar(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=zt(e.document)}return t}function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Mr=fn&&`documentMode`in document&&11>=document.documentMode,Nr=null,Pr=null,Fr=null,Ir=!1;function Lr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ir||Nr==null||Nr!==zt(r)||(r=Nr,`selectionStart`in r&&jr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&Er(Fr,r)||(Fr=r,r=Ad(Pr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var zr={animationend:Rr(`Animation`,`AnimationEnd`),animationiteration:Rr(`Animation`,`AnimationIteration`),animationstart:Rr(`Animation`,`AnimationStart`),transitionrun:Rr(`Transition`,`TransitionRun`),transitionstart:Rr(`Transition`,`TransitionStart`),transitioncancel:Rr(`Transition`,`TransitionCancel`),transitionend:Rr(`Transition`,`TransitionEnd`)},Br={},Vr={};fn&&(Vr=document.createElement(`div`).style,`AnimationEvent`in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),`TransitionEvent`in window||delete zr.transitionend.transition);function Hr(e){if(Br[e])return Br[e];if(!zr[e])return e;var t=zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vr)return Br[e]=t[n];return e}var Ur=Hr(`animationend`),Wr=Hr(`animationiteration`),Gr=Hr(`animationstart`),Kr=Hr(`transitionrun`),qr=Hr(`transitionstart`),Jr=Hr(`transitioncancel`),Yr=Hr(`transitionend`),Xr=new Map,Zr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Zr.push(`scrollEnd`);function Qr(e,t){Xr.set(e,t),Tt(t,[e])}var $r=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ei=[],ti=0,ni=0;function ri(){for(var e=ti,t=ni=ti=0;t<e;){var n=ei[t];ei[t++]=null;var r=ei[t];ei[t++]=null;var i=ei[t];ei[t++]=null;var a=ei[t];if(ei[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&si(n,i,a)}}function ii(e,t,n,r){ei[ti++]=e,ei[ti++]=t,ei[ti++]=n,ei[ti++]=r,ni|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ai(e,t,n,r){return ii(e,t,n,r),ci(e)}function oi(e,t){return ii(e,null,null,t),ci(e)}function si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-P(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ci(e){if(50<hu)throw hu=0,gu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var li={};function ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,r){return new ui(e,t,n,r)}function fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pi(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)fi(e)&&(s=1);else if(typeof e==`string`)s=qf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=di(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return gi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=di(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=di(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=di(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ee:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function gi(e,t,n,r){return e=di(7,e,r,t),e.lanes=n,e}function _i(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function vi(e){var t=di(18,null,null,0);return t.stateNode=e,t}function yi(e,t,n){return t=di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bi=new WeakMap;function xi(e,t){if(typeof e==`object`&&e){var n=bi.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},bi.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var Si=[],Ci=0,wi=null,Ti=0,Ei=[],Di=0,Oi=null,ki=1,Ai=``;function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=wi,wi=e,Ti=t}function Mi(e,t,n){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,Oi=e;var r=ki;e=Ai;var i=32-P(r)-1;r&=~(1<<i),n+=1;var a=32-P(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ki=1<<32-P(t)+i|n<<i|r,Ai=a+e}else ki=1<<a|n<<i|r,Ai=e}function Ni(e){e.return!==null&&(ji(e,1),Mi(e,1,0))}function Pi(e){for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null;for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,Ai=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null}function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Ai,Ei[Di++]=Oi,ki=t.id,Ai=t.overflow,Oi=e}var Ii=null,Li=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(xi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[lt]=e,t[ut]=r,n){case`dialog`:J(`cancel`,t),J(`close`,t);break;case`iframe`:case`object`:case`embed`:J(`load`,t);break;case`video`:case`audio`:for(n=0;n<xd.length;n++)J(xd[n],t);break;case`source`:J(`error`,t);break;case`img`:case`image`:case`link`:J(`error`,t),J(`load`,t);break;case`details`:J(`toggle`,t);break;case`input`:J(`invalid`,t),Ut(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:J(`invalid`,t);break;case`textarea`:J(`invalid`,t),qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Id(t.textContent,n)?(r.popover!=null&&(J(`beforetoggle`,t),J(`toggle`,t)),r.onScroll!=null&&J(`scroll`,t),r.onScrollEnd!=null&&J(`scrollend`,t),r.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Ii=e.return;Ii;)switch(Ii.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Ii=Ii.return}}function Wi(e){if(e!==Ii)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||qd(e.type,e.memoizedProps)),n=!n),n&&Li&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Li=mf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Li=mf(e)}else t===27?(t=Li,tf(e.type)?(e=pf,pf=null,Li=e):Li=t):Li=Ii?ff(e.stateNode.nextSibling):null;return!0}function Gi(){Li=Ii=null,I=!1}function Ki(){var e=Ri;return e!==null&&(tu===null?tu=e:tu.push.apply(tu,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=A(null),Yi=null,Xi=null;function Zi(e,t,n){M(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,j(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Tr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[np]:e.push(np))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Tr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=hd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=O.S;O.S=function(e,t){iu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=A(null);function Sa(){var e=xa.current;return e===null?U.pooledCache:e}function Ca(e,t){t===null?M(xa,xa.current):M(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(nn,nn);else{if(e=U,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=_i(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=hi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=gi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=_i(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=hi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=yi(t,e.mode,n),t.return=e,t;case D:return t=ja(t),f(e,t,n)}if(se(t)||ie(t))return t=gi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=ja(n),p(e,t,n,r)}if(se(n)||ie(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=ja(r),m(e,t,n,r,i)}if(se(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&ji(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&ji(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&ji(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&ji(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&ji(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&ji(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=gi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=hi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=yi(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=ja(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ie(o)){if(l=ie(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=_i(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ci(e),si(e,null,n),t}return ii(e,r,t,n),ci(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(G&p)===p:(r&p)===p){p!==0&&p===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Ua=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Yl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=A(null),no=A(0);function ro(e,t){e=ql,M(no,e),M(to,t),ql=e|t.baseLanes}function io(){M(no,ql),M(to,to.current)}function ao(){ql=no.current,j(to),j(no)}var oo=A(null),so=null;function co(e){var t=e.alternate;M(mo,mo.current&1),M(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){M(mo,mo.current),M(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(M(mo,mo.current),M(oo,e),so===null&&(so=e)):fo(e)}function fo(){M(mo,mo.current),M(oo,oo.current)}function po(e){j(oo),so===e&&(so=null),j(mo)}var mo=A(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lf(n)||uf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,z=0,xo=0,So=null,Co=0;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Vs:Hs,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){O.H=Bs;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,xo=0,So=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&na(e)&&(ac=!0))}function Oo(e,t,n,r){L=e;var a=0;do{if(yo&&(So=null),xo=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Us,o=t(n,r)}while(yo);return o}function ko(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Ao(){var e=z!==0;return z=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,xo=z=0,So=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Po(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=xo;return xo+=1,So===null&&(So=[]),e=Aa(So,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Vs:Hs),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(Po(),R,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(G&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((go&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Yl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Yl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Tr(o,e.memoizedState)&&(ac=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Tr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=L,a=Po(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Tr((R||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,ps(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),U===null)throw Error(i(349));o||go&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Fo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tr(e,n)}catch{return!0}}function Jo(e){var t=oi(e,2);t!==null&&yu(t,e,2)}function Yo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){N(!0);try{n()}finally{N(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function B(e,t,n,r){return e.baseState=n,Vo(e,R,typeof r==`function`?r:zo)}function Xo(e,t,n,r,a){if(Ls(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(I){var n=U.formState;if(n!==null){a:{var r=L;if(I){if(Li){b:{for(var i=Li,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=ff(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Li=ff(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Ps.bind(null,L,r),r.dispatch=n,r=Yo(!1),a=Is.bind(null,L,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(Po(),R,e)}function as(e,t,n){if(t=Vo(e,t,ns)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=Po(),n=R;if(n!==null)return as(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Fo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return Po().memoizedState}function us(e,t,n,r){var i=No();L.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&To(r,R.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(L.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Fo(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=Po().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(H&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function V(){}function bs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){N(!0);try{e()}finally{N(!1)}}return n.memoizedState=[r,t],r}function Ss(e,t,n){return n===void 0||go&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=vu(),L.lanes|=e,Yl|=e,n)}function Cs(e,t,n,r){return Tr(n,t)?n:to.current===null?!(go&42)||go&1073741824&&!(G&261930)?(ac=!0,e.memoizedState=n):(e=vu(),L.lanes|=e,Yl|=e,t):(e=Ss(e,n,r),Tr(e,t)||(ac=!0),e)}function ws(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Is(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Fs(e,t,ya(c,r),_u(e)):Fs(e,t,r,_u(e))}catch(n){Fs(e,t,{then:function(){},status:`rejected`,reason:n},_u())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Ts(){}function Es(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ds(e).queue;ws(e,a,t,ce,n===null?Ts:function(){return Os(e),n(r)})}function Ds(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Os(e){var t=Ds(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},_u())}function ks(){return ia(np)}function As(){return Po().memoizedState}function js(){return Po().memoizedState}function Ms(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=_u();e=Ka(n);var r=qa(t,e,n);r!==null&&(yu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ns(e,t,n){var r=_u();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Rs(t,n):(n=ai(e,t,n,r),n!==null&&(yu(n,e,r),zs(n,t,r)))}function Ps(e,t,n){Fs(e,t,n,_u())}function Fs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Rs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tr(s,o))return ii(e,t,i,0),U===null&&ri(),!1}catch{}if(n=ai(e,t,i,r),n!==null)return yu(n,e,r),zs(n,t,r),!0}return!1}function Is(e,t,n,r){if(r={lane:2,revertLane:hd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(t)throw Error(i(479))}else t=ai(e,n,r,2),t!==null&&yu(t,e,2)}function Ls(e){var t=e.alternate;return e===L||t!==null&&t===L}function Rs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nt(e,n)}}var Bs={readContext:ia,use:Lo,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useInsertionEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useSyncExternalStore:wo,useId:wo,useHostTransitionStatus:wo,useFormState:wo,useActionState:wo,useOptimistic:wo,useMemoCache:wo,useCacheRefresh:wo};Bs.useEffectEvent=wo;var Vs={readContext:ia,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){N(!0);try{e()}finally{N(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){N(!0);try{n(t)}finally{N(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ns.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Ps.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:V,useDeferredValue:function(e,t){return Ss(No(),e,t)},useTransition:function(){var e=Yo(!1);return e=ws.bind(null,L,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=No();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),U===null)throw Error(i(349));G&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Ko.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=U.identifierPrefix;if(I){var n=Ai,r=ki;n=(r&~(1<<32-P(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=z++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ks,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Is.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=Ms.bind(null,L)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(H&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:ia,use:Lo,useCallback:bs,useContext:ia,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:xs,useReducer:Bo,useRef:ls,useState:function(){return Bo(zo)},useDebugValue:V,useDeferredValue:function(e,t){return Cs(Po(),R.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:ks,useFormState:is,useActionState:is,useOptimistic:function(e,t){return B(Po(),R,e,t)},useMemoCache:Ro,useCacheRefresh:js};Hs.useEffectEvent=hs;var Us={readContext:ia,use:Lo,useCallback:bs,useContext:ia,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:xs,useReducer:Ho,useRef:ls,useState:function(){return Ho(zo)},useDebugValue:V,useDeferredValue:function(e,t){var n=Po();return R===null?Ss(n,e,t):Cs(n,R.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:ks,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=Po();return R===null?(n.baseState=e,[e,n.queue.dispatch]):B(n,R,e,t)},useMemoCache:Ro,useCacheRefresh:js};Us.useEffectEvent=hs;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_u(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(yu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_u(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(yu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_u(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(yu(t,e,n),Ja(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){$r(e)}function Xs(e){console.error(e)}function Zs(e){$r(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=Ka(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(su===null?su=new Set([this]):su.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?ju():n.alternate===null&&Jl===0&&(Jl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Yu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Yu(e,r,a)),!1}throw Error(i(435,n.tag))}return Yu(e,r,a),ju(),!1}if(I)return t=oo.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=xi(r,n),a=ec(e.stateNode,r,a),Ya(e,a),Jl!==4&&(Jl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(xi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=xi(o,n),eu===null?eu=[o]:eu.push(o),Jl!==4&&(Jl=2),t===null)return!0;r=xi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(su===null||!su.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function oc(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!ac?(jo(e,t,i),jc(e,t,i)):(I&&s&&Ni(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Er:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Er(a,r)&&e.ref===t.ref)if(ac=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Va(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(lo(t),(e=Li)?(e=cf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,Li=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ac||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=U,r!==null&&(s=rt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,oi(e,s),yu(r,e,s),ic;ju(),t=mc(e,t,n)}else e=o.treeContext,Li=ff(s.nextSibling),Ii=t,I=!0,Ri=null,zi=!1,e!==null&&Fi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return ra(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!ac?(jo(e,t,i),jc(e,t,i)):(I&&r&&Ni(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!ac?(jo(e,t,a),jc(e,t,a)):(I&&r&&Ni(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=li,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):li,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=li,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Ua||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=li,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Ua||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Gi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:wa()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Ql),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(I){if(a?co(t):fo(t),(e=Li)?(e=cf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Oi===null?null:{id:ki,overflow:Ai},retryLane:536870912,hydrationErrors:null},n=vi(e),n.return=t,t.child=n,Ii=t,Li=null)):e=null,e===null)throw Vi(t);return uf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=gi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(co(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=gi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),uf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(ac||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=U,s!==null&&(r=rt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,oi(e,r),yu(s,e,r),ic;lf(c)||ju(),t=Dc(e,t,n)}else lf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Li=ff(c.nextSibling),Ii=t,I=!0,Ri=null,zi=!1,e!==null&&Fi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=pi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=gi(c,a,n,null),c.flags|=2):c=pi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Va(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(mo,o),oc(e,t,r,n),r=I?Ti:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&na(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Gi();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(mo,mo.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Mc(e,n)&&!(t.flags&128))return ac=!1,Nc(e,t,n);ac=!!(e.flags&131072)}else ac=!1,I&&t.flags&1048576&&Mi(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)fi(e)?(r=Js(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===ee){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=xi(Error(i(424)),t),qi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Li=ff(e.firstChild),Ii=t,I=!0,Ri=null,zi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=Nf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Wd(pe.current).createElement(n),r[lt]=t,r[ut]=e,Rd(r,n,e),St(r),t.stateNode=r):t.memoizedState=Nf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&I&&(r=t.stateNode=gf(t.type,t.pendingProps,pe.current),Ii=t,zi=!0,a=Li,tf(t.type)?(pf=a,Li=ff(r.firstChild)):Li=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=Li)&&(r=of(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Ii=t,Li=ff(r.firstChild),zi=!1,a=!0)),a||Vi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,qd(a,o)?r=null:s!==null&&qd(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),np._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=Li)&&(n=sf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Ii=t,Li=null,e=!0)),e||Vi(t)),null;case 13:return wc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=U,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Ou())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(t))if(Ou())e.flags|=8192;else throw Ma=Oa,Ea}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,$l|=t)}function zc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bc(t),null;case 1:return Bc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),Bc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(Bc(t),Ic(t,a,null,r,n)):(Bc(t),Lc(t,o))):o?o===e.memoizedState?(Bc(t),t.flags&=-16777217):(Fc(t),Bc(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),Bc(t),Ic(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}e=de.current,Wi(t)?Hi(t,e):(e=gf(a,r,n),t.stateNode=e,Fc(t))}return Bc(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Bc(t),null}if(o=de.current,Wi(t))Hi(t,o);else{var s=Wd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[lt]=t,o[ut]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Rd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return Bc(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ii,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[lt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Id(e.nodeValue,n)),e||Vi(t,!0)}else e=Wd(e).createTextNode(r),e[lt]=t,t.stateNode=e}return Bc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[lt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return Bc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[lt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bc(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),Bc(t),null);case 4:return ge(),e===null&&Ed(t.stateNode.containerInfo),Bc(t),null;case 10:return Qi(t.type),Bc(t),null;case 19:if(j(mo),r=t.memoizedState,r===null)return Bc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(Jl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mi(n,e),n=n.sibling;return M(mo,mo.current&1|2),I&&ji(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>au&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return Bc(t),null}else 2*je()-r.renderingStartTime>au&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Bc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=mo.current,M(mo,a?n&1|2:n&1),I&&ji(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Bc(t),t.subtreeFlags&6&&(t.flags|=8192)):Bc(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),Bc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(mo),null;case 4:return ge(),null;case 10:return Qi(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&j(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Uc(e,t){switch(Pi(t),t.tag){case 3:Qi(ua),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:j(mo);break;case 10:Qi(t.type);break;case 22:case 23:po(t),ao(),e!==null&&j(xa);break;case 24:Qi(ua)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){q(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){q(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){q(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){q(e,e.return,t)}}}function qc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){q(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){q(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){q(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){q(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){q(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;zd(r,e.type,n,t),r[ut]=t}catch(t){q(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tf(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tf(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&tf(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Rd(t,r,n),t[lt]=e,t[ut]=n}catch(t){q(e,e.return,t)}}var rl=!1,il=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,sl=null;function cl(e,t){if(e=e.containerInfo,Hd=dp,e=Ar(e),jr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},dp=!1,sl=t;sl!==null;)if(t=sl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,sl=e;else for(;sl!==null;){switch(t=sl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){q(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)af(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:af(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,sl=e;break}sl=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:wl(e,n),r&4&&Wc(5,n);break;case 1:if(wl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){q(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){q(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(wl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){q(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:wl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:wl(e,n);break;case 31:wl(e,n),r&4&&hl(e,n);break;case 13:wl(e,n),r&4&&gl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Qu.bind(null,n),df(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||il,i=rl;var a=il;rl=r,(il=t)&&!a?El(e,n,(n.subtreeFlags&8772)!=0):wl(e,n),rl=i,il=a}break;case 30:break;default:wl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var dl=null,fl=!1;function pl(e,t,n){for(n=n.child;n!==null;)ml(e,t,n),n=n.sibling}function ml(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:il||Yc(n,t),pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:il||Yc(n,t);var r=dl,i=fl;tf(n.type)&&(dl=n.stateNode,fl=!1),pl(e,t,n),_f(n.stateNode),dl=r,fl=i;break;case 5:il||Yc(n,t);case 6:if(r=dl,i=fl,dl=null,pl(e,t,n),dl=r,fl=i,dl!==null)if(fl)try{(dl.nodeType===9?dl.body:dl.nodeName===`HTML`?dl.ownerDocument.body:dl).removeChild(n.stateNode)}catch(e){q(n,t,e)}else try{dl.removeChild(n.stateNode)}catch(e){q(n,t,e)}break;case 18:dl!==null&&(fl?(e=dl,nf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Lp(e)):nf(dl,n.stateNode));break;case 4:r=dl,i=fl,dl=n.stateNode.containerInfo,fl=!0,pl(e,t,n),dl=r,fl=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),il||Gc(4,n,t),pl(e,t,n);break;case 1:il||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:il=(r=il)||n.memoizedState!==null,pl(e,t,n),il=r;break;default:pl(e,t,n)}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Lp(e)}catch(e){q(t,t.return,e)}}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lp(e)}catch(e){q(t,t.return,e)}}function _l(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function vl(e,t){var n=_l(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=$u.bind(null,e,t);t.then(r,r)}})}function yl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(tf(c.type)){dl=c.stateNode,fl=!1;break a}break;case 5:dl=c.stateNode,fl=!1;break a;case 3:case 4:dl=c.stateNode.containerInfo,fl=!0;break a}c=c.return}if(dl===null)throw Error(i(160));ml(o,s,a),dl=null,fl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)xl(t,e),t=t.sibling}var bl=null;function xl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yl(t,e),Sl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:yl(t,e),Sl(e),r&512&&(il||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=bl;if(yl(t,e),Sl(e),r&512&&(il||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[lt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Rd(o,r,n),o[lt]=e,St(o),r=o;break a;case`link`:var s=Gf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Rd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Gf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Rd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[lt]=e,St(o),r=o}e.stateNode=r}else Kf(a,e.type,e.stateNode);else e.stateNode=Bf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Kf(a,e.type,e.stateNode):Bf(a,r,e.memoizedProps))}break;case 27:yl(t,e),Sl(e),r&512&&(il||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(yl(t,e),Sl(e),r&512&&(il||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{Jt(a,``)}catch(t){q(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(yl(t,e),Sl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){q(e,e.return,t)}}break;case 3:if(Wf=null,a=bl,bl=bf(t.containerInfo),yl(t,e),bl=a,Sl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lp(t.containerInfo)}catch(t){q(e,e.return,t)}al&&(al=!1,Cl(e));break;case 4:r=bl,bl=bf(e.stateNode.containerInfo),yl(t,e),Sl(e),bl=r;break;case 12:yl(t,e),Sl(e);break;case 31:yl(t,e),Sl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 13:yl(t,e),Sl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=il;if(rl=u||a,il=d||l,yl(t,e),il=d,rl=u,Sl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||il||Tl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){q(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){q(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?rf(m,!0):rf(l.stateNode,!1)}catch(e){q(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,vl(e,n))));break;case 19:yl(t,e),Sl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vl(e,r)));break;case 30:break;case 21:break;default:yl(t,e),Sl(e)}}function Sl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Jt(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){q(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function Tl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Tl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Tl(t);break;case 27:_f(t.stateNode);case 26:case 5:Yc(t,t.return),Tl(t);break;case 22:t.memoizedState===null&&Tl(t);break;case 30:Tl(t);break;default:Tl(t)}e=e.sibling}}function El(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:El(i,a,n),Wc(4,a);break;case 1:if(El(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){q(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){q(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:El(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:El(i,a,n);break;case 31:El(i,a,n),n&&o&4&&hl(i,a);break;case 13:El(i,a,n),n&&o&4&&gl(i,a);break;case 22:a.memoizedState===null&&El(i,a,n),Jc(a,a.return);break;case 30:break;default:El(i,a,n)}t=t.sibling}}function Dl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Ol(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function kl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Al(e,t,n,r),t=t.sibling}function Al(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:kl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:kl(e,t,n,r);break;case 3:kl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){kl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){q(t,t.return,e)}}else kl(e,t,n,r);break;case 31:kl(e,t,n,r);break;case 13:kl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?kl(e,t,n,r):(a._visibility|=2,jl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?kl(e,t,n,r):Ml(e,t),i&2048&&Dl(o,t);break;case 24:kl(e,t,n,r),i&2048&&Ol(t.alternate,t);break;default:kl(e,t,n,r)}}function jl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:jl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,jl(a,o,s,c,i)):u._visibility&2?jl(a,o,s,c,i):Ml(a,o),i&&l&2048&&Dl(o.alternate,o);break;case 24:jl(a,o,s,c,i),i&&l&2048&&Ol(o.alternate,o);break;default:jl(a,o,s,c,i)}t=t.sibling}}function Ml(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ml(n,r),i&2048&&Dl(r.alternate,r);break;case 24:Ml(n,r),i&2048&&Ol(r.alternate,r);break;default:Ml(n,r)}t=t.sibling}}var Nl=8192;function Pl(e,t,n){if(e.subtreeFlags&Nl)for(e=e.child;e!==null;)Fl(e,t,n),e=e.sibling}function Fl(e,t,n){switch(e.tag){case 26:Pl(e,t,n),e.flags&Nl&&e.memoizedState!==null&&Yf(n,bl,e.memoizedState,e.memoizedProps);break;case 5:Pl(e,t,n);break;case 3:case 4:var r=bl;bl=bf(e.stateNode.containerInfo),Pl(e,t,n),bl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Nl,Nl=16777216,Pl(e,t,n),Nl=r):Pl(e,t,n));break;default:Pl(e,t,n)}}function Il(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,Bl(r,e)}Il(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rl(e),e=e.sibling}function Rl(e){switch(e.tag){case 0:case 11:case 15:Ll(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Ll(e);break;case 12:Ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zl(e)):Ll(e);break;default:Ll(e)}}function zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];sl=r,Bl(r,e)}Il(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),zl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zl(t));break;default:zl(t)}e=e.sibling}}function Bl(e,t){for(;sl!==null;){var n=sl;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,sl=r;else a:for(n=e;sl!==null;){r=sl;var i=r.sibling,a=r.return;if(ul(r),r===n){sl=null;break a}if(i!==null){i.return=a,sl=i;break a}sl=a}}}var Vl={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Hl=typeof WeakMap==`function`?WeakMap:Map,H=0,U=null,W=null,G=0,K=0,Ul=null,Wl=!1,Gl=!1,Kl=!1,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=0,$l=0,eu=null,tu=null,nu=!1,ru=0,iu=0,au=1/0,ou=null,su=null,cu=0,lu=null,uu=null,du=0,fu=0,pu=null,mu=null,hu=0,gu=null;function _u(){return H&2&&G!==0?G&-G:O.T===null?ot():hd()}function vu(){if(Ql===0)if(!(G&536870912)||I){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Ql=e}else Ql=536870912;return e=oo.current,e!==null&&(e.flags|=32),Ql}function yu(e,t,n){(e===U&&(K===2||K===9)||e.cancelPendingCommit!==null)&&(Eu(e,0),Cu(e,G,Ql,!1)),F(e,n),(!(H&2)||e!==U)&&(e===U&&(!(H&2)&&(Xl|=n),Jl===4&&Cu(e,G,Ql,!1)),sd(e))}function bu(e,t,n){if(H&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Xe(e,t),a=r?Pu(e,t):Mu(e,t,!0),o=r;do{if(a===0){Gl&&!r&&Cu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Su(n)){a=Mu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=eu;var l=c.current.memoizedState.isDehydrated;if(l&&(Eu(c,s).flags|=256),s=Mu(c,s,!1),s!==2){if(Kl&&!l){c.errorRecoveryDisabledLanes|=o,Xl|=o,a=4;break a}o=tu,tu=a,o!==null&&(tu===null?tu=o:tu.push.apply(tu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Eu(e,0),Cu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Cu(r,t,Ql,!Wl);break a;case 2:tu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=ru+300-je(),10<a)){if(Cu(r,t,Ql,!Wl),Ye(r,0,!0)!==0)break a;du=t,r.timeoutHandle=Xd(xu.bind(null,r,n,tu,ou,nu,t,Ql,Xl,$l,Wl,o,`Throttled`,-0,0),a);break a}xu(r,n,tu,ou,nu,t,Ql,Xl,$l,Wl,o,null,-0,0)}}break}while(1);sd(e)}function xu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Fl(t,a,d);var m=(a&62914560)===a?ru-je():(a&4194048)===a?iu-je():0;if(m=Zf(d,m),m!==null){du=a,e.cancelPendingCommit=m(Vu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Cu(e,a,o,!l);return}}Vu(e,t,a,n,r,i,o,s,c)}function Su(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Tr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cu(e,t,n,r){t&=~Zl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-P(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&tt(e,n,t)}function wu(){return H&6?!0:(cd(0,!1),!1)}function Tu(){if(W!==null){if(K===0)var e=W.return;else e=W,Xi=Yi=null,Mo(e),Fa=null,Ia=0,e=W;for(;e!==null;)Uc(e.alternate,e),e=e.return;W=null}}function Eu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Zd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),du=0,Tu(),U=e,W=n=pi(e.current,null),G=t,K=0,Ul=null,Wl=!1,Gl=Xe(e,t),Kl=!1,$l=Ql=Zl=Xl=Yl=Jl=0,tu=eu=null,nu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-P(r),a=1<<i;t|=e[i],r&=~a}return ql=t,ri(),n}function Du(e,t){L=null,O.H=Bs,t===Ta||t===Da?(t=Na(),K=3):t===Ea?(t=Na(),K=4):K=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ul=t,W===null&&(Jl=1,Qs(e,xi(t,e.current)))}function Ou(){var e=oo.current;return e===null?!0:(G&4194048)===G?so===null:(G&62914560)===G||G&536870912?e===so:!1}function ku(){var e=O.H;return O.H=Bs,e===null?Bs:e}function Au(){var e=O.A;return O.A=Vl,e}function ju(){Jl=4,Wl||(G&4194048)!==G&&oo.current!==null||(Gl=!0),!(Yl&134217727)&&!(Xl&134217727)||U===null||Cu(U,G,Ql,!1)}function Mu(e,t,n){var r=H;H|=2;var i=ku(),a=Au();(U!==e||G!==t)&&(ou=null,Eu(e,t)),t=!1;var o=Jl;a:do try{if(K!==0&&W!==null){var s=W,c=Ul;switch(K){case 8:Tu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=K;if(K=0,Ul=null,Ru(e,s,c,l),n&&Gl){o=0;break a}break;default:l=K,K=0,Ul=null,Ru(e,s,c,l)}}Nu(),o=Jl;break}catch(t){Du(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,H=r,O.H=i,O.A=a,W===null&&(U=null,G=0,ri()),o}function Nu(){for(;W!==null;)Iu(W)}function Pu(e,t){var n=H;H|=2;var r=ku(),a=Au();U!==e||G!==t?(ou=null,au=je()+500,Eu(e,t)):Gl=Xe(e,t);a:do try{if(K!==0&&W!==null){t=W;var o=Ul;b:switch(K){case 1:K=0,Ul=null,Ru(e,t,o,1);break;case 2:case 9:if(ka(o)){K=0,Ul=null,Lu(t);break}t=function(){K!==2&&K!==9||U!==e||(K=7),sd(e)},o.then(t,t);break a;case 3:K=7;break a;case 4:K=5;break a;case 7:ka(o)?(K=0,Ul=null,Lu(t)):(K=0,Ul=null,Ru(e,t,o,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var c=W;if(s?Jf(s):c.stateNode.complete){K=0,Ul=null;var l=c.sibling;if(l!==null)W=l;else{var u=c.return;u===null?W=null:(W=u,zu(u))}break b}}K=0,Ul=null,Ru(e,t,o,5);break;case 6:K=0,Ul=null,Ru(e,t,o,6);break;case 8:Tu(),Jl=6;break a;default:throw Error(i(462))}}Fu();break}catch(t){Du(e,t)}while(1);return Xi=Yi=null,O.H=r,O.A=a,H=n,W===null?(U=null,G=0,ri(),Jl):0}function Fu(){for(;W!==null&&!ke();)Iu(W)}function Iu(e){var t=Pc(e.alternate,e,ql);e.memoizedProps=e.pendingProps,t===null?zu(e):W=t}function Lu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Mo(t);default:Uc(n,t),t=W=mi(t,ql),t=Pc(n,t,ql)}e.memoizedProps=e.pendingProps,t===null?zu(e):W=t}function Ru(e,t,n,r){Xi=Yi=null,Mo(t),Fa=null,Ia=0;var i=t.return;try{if(rc(e,i,t,n,G)){Jl=1,Qs(e,xi(n,e.current)),W=null;return}}catch(t){if(i!==null)throw W=i,t;Jl=1,Qs(e,xi(n,e.current)),W=null;return}t.flags&32768?(I||r===1?e=!0:Gl||G&536870912?e=!1:(Wl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Bu(t,e)):zu(t)}function zu(e){var t=e;do{if(t.flags&32768){Bu(t,Wl);return}e=t.return;var n=Vc(t.alternate,t,ql);if(n!==null){W=n;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Jl===0&&(Jl=5)}function Bu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,W=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=n}while(e!==null);Jl=6,W=null}function Vu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Ku();while(cu!==0);if(H&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ni,et(e,n,o,s,c,l),e===U&&(W=U=null,G=0),uu=t,lu=e,du=n,fu=o,pu=a,mu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ed(Fe,function(){return qu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=H,H|=4;try{cl(e,t,n)}finally{H=s,k.p=a,O.T=r}}cu=1,Hu(),Uu(),Wu()}}function Hu(){if(cu===1){cu=0;var e=lu,t=uu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=H;H|=4;try{xl(t,e);var a=Ud,o=Ar(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&kr(s.ownerDocument.documentElement,s)){if(c!==null&&jr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Or(s,h),v=Or(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}dp=!!Hd,Ud=Hd=null}finally{H=i,k.p=r,O.T=n}}e.current=t,cu=2}}function Uu(){if(cu===2){cu=0;var e=lu,t=uu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=H;H|=4;try{ll(e,t.alternate,t)}finally{H=i,k.p=r,O.T=n}}cu=3}}function Wu(){if(cu===4||cu===3){cu=0,Ae();var e=lu,t=uu,n=du,r=mu;t.subtreeFlags&10256||t.flags&10256?cu=5:(cu=0,uu=lu=null,Gu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(su=null),at(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}du&3&&Ku(),sd(e),i=e.pendingLanes,n&261930&&i&42?e===gu?hu++:(hu=0,gu=e):hu=0,cd(0,!1)}}function Gu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Ku(){return Hu(),Uu(),Wu(),qu()}function qu(){if(cu!==5)return!1;var e=lu,t=fu;fu=0;var n=at(du),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=pu,pu=null;var o=lu,s=du;if(cu=0,uu=lu=null,du=0,H&6)throw Error(i(331));var c=H;if(H|=4,Rl(o.current),Al(o,o.current,s,n),H=c,cd(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{k.p=a,O.T=r,Gu(e,t)}}function Ju(e,t,n){t=xi(n,t),t=ec(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(F(e,2),sd(e))}function q(e,t,n){if(e.tag===3)Ju(e,e,n);else for(;t!==null;){if(t.tag===3){Ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(su===null||!su.has(r))){e=xi(n,e),n=tc(2),r=qa(t,n,2),r!==null&&(nc(n,r,t,e),F(r,2),sd(r));break}}t=t.return}}function Yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Kl=!0,i.add(n),e=Xu.bind(null,e,t,n),t.then(e,e))}function Xu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,U===e&&(G&n)===n&&(Jl===4||Jl===3&&(G&62914560)===G&&300>je()-ru?!(H&2)&&Eu(e,0):Zl|=n,$l===G&&($l=0)),sd(e)}function Zu(e,t){t===0&&(t=Qe()),e=oi(e,t),e!==null&&(F(e,t),sd(e))}function Qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zu(e,n)}function $u(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Zu(e,n)}function ed(e,t){return De(e,t)}var td=null,nd=null,rd=!1,id=!1,ad=!1,od=0;function sd(e){e!==nd&&e.next===null&&(nd===null?td=nd=e:nd=nd.next=e),id=!0,rd||(rd=!0,md())}function cd(e,t){if(!ad&&id){ad=!0;do for(var n=!1,r=td;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-P(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,pd(r,a))}else a=G,a=Ye(r,r===U?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Xe(r,a)||(n=!0,pd(r,a));r=r.next}while(n);ad=!1}}function ld(){ud()}function ud(){id=rd=!1;var e=0;od!==0&&Yd()&&(e=od);for(var t=je(),n=null,r=td;r!==null;){var i=r.next,a=dd(r,t);a===0?(r.next=null,n===null?td=i:n.next=i,i===null&&(nd=n)):(n=r,(e!==0||a&3)&&(id=!0)),r=i}cu!==0&&cu!==5||cd(e,!1),od!==0&&(od=0)}function dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-P(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=U,n=G,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(K===2||K===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),at(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=fd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(cu!==0&&cu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ku()&&e.callbackNode!==n)return null;var r=G;return r=Ye(e,e===U?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bu(e,r,t),dd(e,je()),e.callbackNode!=null&&e.callbackNode===n?fd.bind(null,e):null)}function pd(e,t){if(Ku())return null;bu(e,t,!0)}function md(){$d(function(){H&6?De(Ne,ld):ud()})}function hd(){if(od===0){var e=ha;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),od=e}return od}function gd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:tn(``+e)}function _d(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=gd((i[ut]||null).action),o=r.submitter;o&&(t=(t=o[ut]||null)?gd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(od!==0){var e=o?_d(i,o):new FormData(i);Es(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?_d(i,o):new FormData(i),Es(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var yd=0;yd<Zr.length;yd++){var bd=Zr[yd];Qr(bd.toLowerCase(),`on`+(bd[0].toUpperCase()+bd.slice(1)))}Qr(Ur,`onAnimationEnd`),Qr(Wr,`onAnimationIteration`),Qr(Gr,`onAnimationStart`),Qr(`dblclick`,`onDoubleClick`),Qr(`focusin`,`onFocus`),Qr(`focusout`,`onBlur`),Qr(Kr,`onTransitionRun`),Qr(qr,`onTransitionStart`),Qr(Jr,`onTransitionCancel`),Qr(Yr,`onTransitionEnd`),Et(`onMouseEnter`,[`mouseout`,`mouseover`]),Et(`onMouseLeave`,[`mouseout`,`mouseover`]),Et(`onPointerEnter`,[`pointerout`,`pointerover`]),Et(`onPointerLeave`,[`pointerout`,`pointerover`]),Tt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Tt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Tt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Tt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Tt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var xd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Sd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(xd));function Cd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){$r(e)}i.currentTarget=null,a=c}}}}function J(e,t){var n=t[ft];n===void 0&&(n=t[ft]=new Set);var r=e+`__bubble`;n.has(r)||(Dd(t,e,2,!1),n.add(r))}function wd(e,t,n){var r=0;t&&(r|=4),Dd(n,e,r,t)}var Td=`_reactListening`+Math.random().toString(36).slice(2);function Ed(e){if(!e[Td]){e[Td]=!0,Ct.forEach(function(t){t!==`selectionchange`&&(Sd.has(t)||wd(t,!1,e),wd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Td]||(t[Td]=!0,wd(`selectionchange`,!1,t))}}function Dd(e,t,n,r){switch(vp(t)){case 2:var i=fp;break;case 8:i=pp;break;default:i=mp}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Od(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=Xr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Nn;break;case`focusout`:u=`blur`,l=Nn;break;case`beforeblur`:case`afterblur`:l=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Ur:case Wr:case Gr:l=Pn;break;case Yr:l=Gn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(kd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==rn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[dt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:bt(l),h=u==null?c:bt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=jd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Md(s,c,l,d,!1),u!==null&&f!==null&&Md(s,f,u,d,!0)}}a:{if(c=r?bt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c))if(mr)v=Cr;else{v=xr;var y=br}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Qt(r.elementType)&&(v=pr):v=Sr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Wt(c,`number`,c.value)}switch(y=r?bt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(Nr=y,Pr=r,Fr=null);break;case`focusout`:Fr=Pr=Nr=null;break;case`mousedown`:Ir=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ir=!1,Lr(s,n,i);break;case`selectionchange`:if(Mr)break;case`keydown`:case`keyup`:Lr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Ad(r,x),0<y.length&&(x=new In(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Ad(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),vd(s,e,r,n,i)}Cd(s,t)})}function kd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(kd(e,i,a)),i=dn(e,t),i!=null&&r.push(kd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function jd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(kd(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(kd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Nd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Fd(e){return(typeof e==`string`?e:``+e).replace(Nd,`
`).replace(Pd,``)}function Id(e,t){return t=Fd(t),Fd(e)===t}function Y(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Jt(e,``+r);break;case`className`:Mt(e,`class`,r);break;case`tabIndex`:Mt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Mt(e,n,r);break;case`style`:Zt(e,r,o);break;case`data`:if(t!==`object`){Mt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Y(e,t,`name`,a.name,a,null),Y(e,t,`formEncType`,a.formEncType,a,null),Y(e,t,`formMethod`,a.formMethod,a,null),Y(e,t,`formTarget`,a.formTarget,a,null)):(Y(e,t,`encType`,a.encType,a,null),Y(e,t,`method`,a.method,a,null),Y(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=tn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=tn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:J(`beforetoggle`,e),J(`toggle`,e),jt(e,`popover`,r);break;case`xlinkActuate`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Nt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Nt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:jt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=$t.get(n)||n,jt(e,n,r))}}function Ld(e,t,n,r,a,o){switch(n){case`style`:Zt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Jt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Jt(e,``+r);break;case`onScroll`:r!=null&&J(`scroll`,e);break;case`onScrollEnd`:r!=null&&J(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=nn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!wt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ut]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):jt(e,n,r)}}}function Rd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:J(`error`,e),J(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Y(e,t,o,s,n,null)}}a&&Y(e,t,`srcSet`,n.srcSet,n,null),r&&Y(e,t,`src`,n.src,n,null);return;case`input`:J(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Y(e,t,r,d,n,null)}}Ut(e,o,c,l,u,s,a,!1);return;case`select`:for(a in J(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Y(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Gt(e,!!r,n,!0):Gt(e,!!r,t,!1);return;case`textarea`:for(s in J(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Y(e,t,s,c,n,null)}qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Y(e,t,l,r,n,null)}return;case`dialog`:J(`beforetoggle`,e),J(`toggle`,e),J(`cancel`,e),J(`close`,e);break;case`iframe`:case`object`:J(`load`,e);break;case`video`:case`audio`:for(r=0;r<xd.length;r++)J(xd[r],e);break;case`image`:J(`error`,e),J(`load`,e);break;case`details`:J(`toggle`,e);break;case`embed`:case`source`:case`link`:J(`error`,e),J(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Y(e,t,u,r,n,null)}return;default:if(Qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Ld(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Y(e,t,c,r,n,null))}function zd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Y(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Y(e,t,p,m,r,f)}}Ht(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Y(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Y(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Gt(e,!!n,n?[]:``,!1):Gt(e,!!n,t,!0)):Gt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Y(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Y(e,t,s,a,r,o)}Kt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Y(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Y(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Y(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Y(e,t,u,p,r,m)}return;default:if(Qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Ld(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Ld(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Y(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Y(e,t,f,p,r,m)}function Bd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Vd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Bd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Bd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Hd=null,Ud=null;function Wd(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Kd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function qd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=null;function Yd(){var e=window.event;return e&&e.type===`popstate`?e===Jd?!1:(Jd=e,!0):(Jd=null,!1)}var Xd=typeof setTimeout==`function`?setTimeout:void 0,Zd=typeof clearTimeout==`function`?clearTimeout:void 0,Qd=typeof Promise==`function`?Promise:void 0,$d=typeof queueMicrotask==`function`?queueMicrotask:Qd===void 0?Xd:function(e){return Qd.resolve(null).then(e).catch(ef)};function ef(e){setTimeout(function(){throw e})}function tf(e){return e===`head`}function nf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Lp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_f(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_f(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_f(e.ownerDocument.body);n=i}while(n);Lp(t)}function rf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function af(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:af(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function of(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=ff(e.nextSibling),e===null)break}return null}function sf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=ff(e.nextSibling),e===null))return null;return e}function cf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=ff(e.nextSibling),e===null))return null;return e}function lf(e){return e.data===`$?`||e.data===`$~`}function uf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function df(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function ff(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pf=null;function mf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return ff(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gf(e,t,n){switch(t=Wd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function _f(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var vf=new Map,yf=new Set;function bf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xf=k.d;k.d={f:Sf,r:Cf,D:Ef,C:Df,L:Of,m:kf,X:jf,S:Af,M:Mf};function Sf(){var e=xf.f(),t=wu();return e||t}function Cf(e){var t=yt(e);t!==null&&t.tag===5&&t.type===`form`?Os(t):xf.r(e)}var wf=typeof document>`u`?null:document;function Tf(e,t,n){var r=wf;if(r&&typeof t==`string`&&t){var i=Vt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),yf.has(i)||(yf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Rd(t,`link`,e),St(t),r.head.appendChild(t)))}}function Ef(e){xf.D(e),Tf(`dns-prefetch`,e,null)}function Df(e,t){xf.C(e,t),Tf(`preconnect`,e,t)}function Of(e,t,n){xf.L(e,t,n);var r=wf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Vt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Vt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Vt(n.imageSizes)+`"]`)):i+=`[href="`+Vt(e)+`"]`;var a=i;switch(t){case`style`:a=Pf(e);break;case`script`:a=Rf(e)}vf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Ff(a))||t===`script`&&r.querySelector(zf(a))||(t=r.createElement(`link`),Rd(t,`link`,e),St(t),r.head.appendChild(t)))}}function kf(e,t){xf.m(e,t);var n=wf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Vt(r)+`"][href="`+Vt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rf(e)}if(!vf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),vf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zf(a)))return}r=n.createElement(`link`),Rd(r,`link`,e),St(r),n.head.appendChild(r)}}}function Af(e,t,n){xf.S(e,t,n);var r=wf;if(r&&e){var i=xt(r).hoistableStyles,a=Pf(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ff(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vf.get(a))&&Hf(e,n);var c=o=r.createElement(`link`);St(c),Rd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jf(e,t){xf.X(e,t);var n=wf;if(n&&e){var r=xt(n).hoistableScripts,i=Rf(e),a=r.get(i);a||(a=n.querySelector(zf(i)),a||(e=f({src:e,async:!0},t),(t=vf.get(i))&&Uf(e,t),a=n.createElement(`script`),St(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mf(e,t){xf.M(e,t);var n=wf;if(n&&e){var r=xt(n).hoistableScripts,i=Rf(e),a=r.get(i);a||(a=n.querySelector(zf(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=vf.get(i))&&Uf(e,t),a=n.createElement(`script`),St(a),Rd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nf(e,t,n,r){var a=(a=pe.current)?bf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Pf(n.href),n=xt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pf(n.href);var o=xt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Ff(e)))&&!o._p&&(s.instance=o,s.state.loading=5),vf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vf.set(e,n),o||Lf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Rf(n),n=xt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pf(e){return`href="`+Vt(e)+`"`}function Ff(e){return`link[rel="stylesheet"][`+e+`]`}function If(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Lf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Rd(t,`link`,n),St(t),e.head.appendChild(t))}function Rf(e){return`[src="`+Vt(e)+`"]`}function zf(e){return`script[async]`+e}function Bf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Vt(n.href)+`"]`);if(r)return t.instance=r,St(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),St(r),Rd(r,`style`,a),Vf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pf(n.href);var o=e.querySelector(Ff(a));if(o)return t.state.loading|=4,t.instance=o,St(o),o;r=If(n),(a=vf.get(a))&&Hf(r,a),o=(e.ownerDocument||e).createElement(`link`),St(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Rd(o,`link`,r),t.state.loading|=4,Vf(o,n.precedence,e),t.instance=o;case`script`:return o=Rf(n.src),(a=e.querySelector(zf(o)))?(t.instance=a,St(a),a):(r=n,(a=vf.get(o))&&(r=f({},n),Uf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),St(a),Rd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vf(r,n.precedence,e));return t.instance}function Vf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Uf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wf=null;function Gf(e,t,n){if(Wf===null){var r=new Map,i=Wf=new Map;i.set(n,r)}else i=Wf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[lt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Kf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Yf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pf(r.href),a=t.querySelector(Ff(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Qf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,St(a);return}a=t.ownerDocument||t,r=If(r),(i=vf.get(i))&&Hf(r,i),a=a.createElement(`link`),St(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Rd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Qf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Xf=0;function Zf(e,t){return e.stylesheets&&e.count===0&&ep(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Xf===0&&(Xf=62500*Vd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ep(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Xf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ep(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $f=null;function ep(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$f=new Map,t.forEach(tp,e),$f=null,Qf.call(e))}function tp(e,t){if(!(t.state.loading&4)){var n=$f.get(e);if(n)var r=n.get(null);else{n=new Map,$f.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Qf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var np={$$typeof:C,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function rp(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ip(e,t,n,r,i,a,o,s,c,l,u,d){return e=new rp(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=di(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function ap(e){return e?(e=li,e):li}function op(e,t,n,r,i,a){i=ap(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(yu(n,e,t),Ja(n,e,t))}function sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cp(e,t){sp(e,t),(e=e.alternate)&&sp(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=oi(e,67108864);t!==null&&yu(t,e,67108864),cp(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=_u();t=it(t);var n=oi(e,t);n!==null&&yu(n,e,t),cp(e,t)}}var dp=!0;function fp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,mp(e,t,n,r)}finally{k.p=a,O.T=i}}function pp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,mp(e,t,n,r)}finally{k.p=a,O.T=i}}function mp(e,t,n,r){if(dp){var i=hp(r);if(i===null)Od(e,t,r,gp,n),Dp(e,r);else if(kp(i,e,t,n,r))r.stopPropagation();else if(Dp(e,r),t&4&&-1<Ep.indexOf(e)){for(;i!==null;){var a=yt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-P(o);s.entanglements[1]|=c,o&=~c}sd(a),!(H&6)&&(au=je()+500,cd(0,!1))}}break;case 31:case 13:s=oi(a,2),s!==null&&yu(s,a,2),wu(),cp(a,2)}if(a=hp(r),a===null&&Od(e,t,r,gp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Od(e,t,r,null,n)}}function hp(e){return e=an(e),_p(e)}var gp=null;function _p(e){if(gp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gp=e,null}function vp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var yp=!1,bp=null,xp=null,Sp=null,Cp=new Map,wp=new Map,Tp=[],Ep=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Dp(e,t){switch(e){case`focusin`:case`focusout`:bp=null;break;case`dragenter`:case`dragleave`:xp=null;break;case`mouseover`:case`mouseout`:Sp=null;break;case`pointerover`:case`pointerout`:Cp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:wp.delete(t.pointerId)}}function Op(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=yt(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kp(e,t,n,r,i){switch(t){case`focusin`:return bp=Op(bp,e,t,n,r,i),!0;case`dragenter`:return xp=Op(xp,e,t,n,r,i),!0;case`mouseover`:return Sp=Op(Sp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Cp.set(a,Op(Cp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,wp.set(a,Op(wp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ap(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,st(e.priority,function(){up(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,st(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rn=r,n.target.dispatchEvent(r),rn=null}else return t=yt(n),t!==null&&lp(t),e.blockedOn=n,!1;t.shift()}return!0}function Mp(e,t,n){jp(e)&&n.delete(t)}function Np(){yp=!1,bp!==null&&jp(bp)&&(bp=null),xp!==null&&jp(xp)&&(xp=null),Sp!==null&&jp(Sp)&&(Sp=null),Cp.forEach(Mp),wp.forEach(Mp)}function Pp(e,n){e.blockedOn===n&&(e.blockedOn=null,yp||(yp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Np)))}var Fp=null;function Ip(e){Fp!==e&&(Fp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Fp===e&&(Fp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(_p(r||n)===null)continue;break}var a=yt(n);a!==null&&(e.splice(t,3),t-=3,Es(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Lp(e){function t(t){return Pp(t,e)}bp!==null&&Pp(bp,e),xp!==null&&Pp(xp,e),Sp!==null&&Pp(Sp,e),Cp.forEach(t),wp.forEach(t);for(var n=0;n<Tp.length;n++){var r=Tp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Tp.length&&(n=Tp[0],n.blockedOn===null);)Ap(n),n.blockedOn===null&&Tp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ut]||null;if(typeof a==`function`)o||Ip(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ut]||null)s=o.formAction;else if(_p(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Ip(n)}}}function Rp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function zp(e){this._internalRoot=e}Bp.prototype.render=zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;op(n,_u(),e,t,null,null)},Bp.prototype.unmount=zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;op(e.current,2,null,e,null,null),wu(),t[dt]=null}};function Bp(e){this._internalRoot=e}Bp.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tp.length&&t!==0&&t<Tp[n].priority;n++);Tp.splice(n,0,e),n===0&&Ap(e)}};var Vp=n.version;if(Vp!==`19.2.8`)throw Error(i(527,Vp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Hp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Up=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Up.isDisabled&&Up.supportsFiber)try{Be=Up.inject(Hp),Ve=Up}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ip(e,1,!1,null,null,n,r,null,o,s,c,Rp),e[dt]=t.current,Ed(e),new zp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},x=new class extends b{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e==`boolean`?this.#e:globalThis.document?.visibilityState!==`hidden`}},S={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},C=new class{#e=S;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};
function w(e){setTimeout(e,0)}
var T=typeof window>`u`||`Deno`in globalThis;
function E(){}
function ee(e,t){return typeof e==`function`?e(t):e}
function D(e){return typeof e==`number`&&e>=0&&e!==1/0}
function te(e,t){return Math.max(e+(t||0)-Date.now(),0)}
function ne(e,t){return typeof e==`function`?e(t):e}
function re(e,t){return typeof e==`function`?e(t):e}
function ie(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==oe(o,t.options))return!1}else if(!O(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}
function ae(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(se(t.options.mutationKey)!==se(a))return!1}else if(!O(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}
function oe(e,t){return(t?.queryKeyHashFn||se)(e)}
function se(e){return JSON.stringify(e,(e,t)=>ue(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}
function O(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(Array.isArray(e)&&Array.isArray(t)){for(let n=0;n<t.length;n++)if(!O(e[n],t[n]))return!1;return!0}let n=Object.keys(t);for(let r of n)if(!O(e[r],t[r]))return!1;return!0}return!1}
var k=Object.prototype.hasOwnProperty;
function ce(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=le(e)&&le(t);if(!r&&!(ue(e)&&ue(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:k.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=ce(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}
function le(e){return Array.isArray(e)&&e.length===Object.keys(e).length}
function ue(e){if(!A(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!A(n)||!n.hasOwnProperty(`isPrototypeOf`)||Object.getPrototypeOf(e)!==Object.prototype)}
function A(e){return Object.prototype.toString.call(e)===`[object Object]`}
function j(e){return new Promise(t=>{C.setTimeout(t,e)})}
function M(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:ce(e,t)}
function de(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}
function fe(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}
var pe=Symbol();
function me(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===pe?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}
function he(e,t,n){let r=!1,i;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(i??=t(),r?i:(r=!0,i.aborted?n():i.addEventListener(`abort`,n,{once:!0}),i))}),e}
var ge=(()=>{let e=()=>T;return{isServer(){return e()},setIsServer(t){e=t}}})();
function _e(){let e,t,n=new Promise((n,r)=>{e=n,t=r});n.status=`pending`,n.catch(()=>{});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.resolve=t=>{r({status:`fulfilled`,value:t}),e(t)},n.reject=e=>{r({status:`rejected`,reason:e}),t(e)},n}
var ve=w;
function ye(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=ve,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}
var be=ye(),xe=new class extends b{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#e}};
function Se(e){return Math.min(1e3*2**e,3e4)}
function Ce(e){return(e??`online`)!==`online`||xe.isOnline()}
var we=class extends Error{constructor(e){super(`CancelledError`),this.revert=e?.revert,this.silent=e?.silent}};
function Te(e){let t=!1,n=0,r,i=_e(),a=()=>i.status!==`pending`,o=t=>{if(!a()){let n=new we(t);f(n),e.onCancel?.(n)}},s=()=>{t=!0},c=()=>{t=!1},l=()=>x.isFocused()&&(e.networkMode===`always`||xe.isOnline())&&e.canRun(),u=()=>Ce(e.networkMode)&&e.canRun(),d=e=>{a()||(r?.(),i.resolve(e))},f=e=>{a()||(r?.(),i.reject(e))},p=()=>new Promise(t=>{r=e=>{(a()||l())&&t(e)},e.onPause?.()}).then(()=>{r=void 0,a()||e.onContinue?.()}),m=()=>{if(a())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(d).catch(r=>{if(a())return;let i=e.retry??(ge.isServer()?0:3),o=e.retryDelay??Se,s=typeof o==`function`?o(n,r):o,c=i===!0||typeof i==`number`&&n<i||typeof i==`function`&&i(n,r);if(t||!c){f(r);return}n++,e.onFail?.(n,r),j(s).then(()=>l()?void 0:p()).then(()=>{t?f(r):m()})})};return{promise:i,status:()=>i.status,cancel:o,continue:()=>(r?.(),i),cancelRetry:s,continueRetry:c,canStart:u,start:()=>(u()?m():p().then(m),i)}}
var Ee=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),D(this.gcTime)&&(this.#e=C.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(ge.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(C.clearTimeout(this.#e),this.#e=void 0)}};
function De(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{he(e,()=>t.signal,()=>n=!0)},u=me(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(r==null&&e.pages.length)return Promise.resolve(e);let a=(()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})(),o=await u(a),{maxPages:s}=t.options,c=i?fe:de;return{pages:c(e.pages,o,s),pageParams:c(e.pageParams,r,s)}};if(i&&a.length){let e=i===`backward`,t=e?ke:Oe,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:Oe(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}
function Oe(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}
function ke(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}
var Ae=class extends Ee{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e){super(),this.#s=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#r=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=Ne(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(e){if(this.options={...this.#o,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=Ne(this.options);e.data!==void 0&&(this.setState(Me(e.data,e.dataUpdatedAt)),this.#t=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&this.#r.remove(this)}setData(e,t){let n=M(this.state.data,e,this.options);return this.#l({data:n,type:`success`,dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:`setState`,state:e})}cancel(e){let t=this.#a?.promise;return this.#a?.cancel(e),t?t.then(E).catch(E):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>re(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===pe||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>ne(e.options.staleTime,this)===`static`)}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!te(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#a&&(this.#s||this.#c()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}#c(){return this.state.fetchStatus===`paused`&&this.state.status===`pending`}invalidate(){this.state.isInvalidated||this.#l({type:`invalidate`})}async fetch(e,t){if(this.state.fetchStatus!==`idle`&&this.#a?.status()!==`rejected`){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#s=!0,n.signal)})},i=()=>{let e=me(this.options,t),n=(()=>{let e={client:this.#i,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#s=!1,this.options.persister?this.options.persister(e,n,this):e(n)},a=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:i};return r(e),e})();(this.#e===`infinite`?De(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus===`idle`||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:`fetch`,meta:a.fetchOptions?.meta}),this.#a=Te({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:e=>{e instanceof we&&e.revert&&this.setState({...this.#n,fetchStatus:`idle`}),n.abort()},onFail:(e,t)=>{this.#l({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#l({type:`pause`})},onContinue:()=>{this.#l({type:`continue`})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{let e=await this.#a.start();if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof we){if(e.silent)return this.#a.promise;if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw this.#l({type:`error`,error:e}),this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#l(e){let t=t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...je(t.data,this.options),fetchMeta:e.meta??null};case`success`:let n={...t,...Me(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?n:void 0,n;case`error`:let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:`idle`,status:`error`,isInvalidated:!0};case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}};this.state=t(this.state),be.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:`updated`,action:e})})}};
function je(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ce(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}
function Me(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}
function Ne(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}
var Pe=class extends Ee{#e;#t;#n;#r;constructor(e){super(),this.#e=e.client,this.mutationId=e.mutationId,this.#n=e.mutationCache,this.#t=[],this.state=e.state||Fe(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#n.notify({type:`observerAdded`,mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:`observerRemoved`,mutation:this,observer:e})}optionalRemove(){this.#t.length||(this.state.status===`pending`?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#i({type:`continue`})},n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#r=Te({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(Error(`No mutationFn found`)),onFail:(e,t)=>{this.#i({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#i({type:`pause`})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let r=this.state.status===`pending`,i=!this.#r.canStart();try{if(r)t();else{this.#i({type:`pending`,variables:e,isPaused:i}),this.#n.config.onMutate&&await this.#n.config.onMutate(e,this,n);let t=await this.options.onMutate?.(e,n);t!==this.state.context&&this.#i({type:`pending`,context:t,variables:e,isPaused:i})}let a=await this.#r.start();return await this.#n.config.onSuccess?.(a,e,this.state.context,this,n),await this.options.onSuccess?.(a,e,this.state.context,n),await this.#n.config.onSettled?.(a,null,this.state.variables,this.state.context,this,n),await this.options.onSettled?.(a,null,e,this.state.context,n),this.#i({type:`success`,data:a}),a}catch(t){try{await this.#n.config.onError?.(t,e,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,n)}catch(e){Promise.reject(e)}try{await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,n)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,n)}catch(e){Promise.reject(e)}throw this.#i({type:`error`,error:t}),t}finally{this.#n.runNext(this)}}#i(e){let t=t=>{switch(e.type){case`failed`:return{...t,failureCount:e.failureCount,failureReason:e.error};case`pause`:return{...t,isPaused:!0};case`continue`:return{...t,isPaused:!1};case`pending`:return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:`pending`,variables:e.variables,submittedAt:Date.now()};case`success`:return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:`success`,isPaused:!1};case`error`:return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:`error`}}};this.state=t(this.state),be.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:`updated`,action:e})})}};
function Fe(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:`idle`,variables:void 0,submittedAt:0}}
var Ie=class extends b{constructor(e={}){super(),this.config=e,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(e,t,n){let r=new Pe({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#e.add(e);let t=Le(e);if(typeof t==`string`){let n=this.#t.get(t);n?n.push(e):this.#t.set(t,[e])}this.notify({type:`added`,mutation:e})}remove(e){if(this.#e.delete(e)){let t=Le(e);if(typeof t==`string`){let n=this.#t.get(t);if(n)if(n.length>1){let t=n.indexOf(e);t!==-1&&n.splice(t,1)}else n[0]===e&&this.#t.delete(t)}}this.notify({type:`removed`,mutation:e})}canRun(e){let t=Le(e);if(typeof t==`string`){let n=this.#t.get(t)?.find(e=>e.state.status===`pending`);return!n||n===e}else return!0}runNext(e){let t=Le(e);return typeof t==`string`?(this.#t.get(t)?.find(t=>t!==e&&t.state.isPaused))?.continue()??Promise.resolve():Promise.resolve()}clear(){be.batch(()=>{this.#e.forEach(e=>{this.notify({type:`removed`,mutation:e})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>ae(t,e))}findAll(e={}){return this.getAll().filter(t=>ae(e,t))}notify(e){be.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return be.batch(()=>Promise.all(e.map(e=>e.continue().catch(E))))}};
function Le(e){return e.options.scope?.id}
var Re=class extends b{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let r=t.queryKey,i=t.queryHash??oe(r,t),a=this.get(i);return a||(a=new Ae({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(a)),a}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:`added`,query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:`removed`,query:e}))}clear(){be.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>ie(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>ie(e,t)):t}notify(e){be.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){be.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){be.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},ze=class{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e={}){this.#e=e.queryCache||new Re,this.#t=e.mutationCache||new Ie,this.#n=e.defaultOptions||{},this.#r=new Map,this.#i=new Map,this.#a=0}mount(){this.#a++,this.#a===1&&(this.#o=x.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#s=xe.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#a--,this.#a===0&&(this.#o?.(),this.#o=void 0,this.#s?.(),this.#s=void 0)}isFetching(e){return this.#e.findAll({...e,fetchStatus:`fetching`}).length}isMutating(e){return this.#t.findAll({...e,status:`pending`}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),n=this.#e.build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(ne(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#e.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),i=this.#e.get(r.queryHash)?.state.data,a=ee(t,i);if(a!==void 0)return this.#e.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return be.batch(()=>this.#e.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#e.get(t.queryHash)?.state}removeQueries(e){let t=this.#e;be.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#e;return be.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:`active`,...e},t)))}cancelQueries(e,t={}){let n={revert:!0,...t},r=be.batch(()=>this.#e.findAll(e).map(e=>e.cancel(n)));return Promise.all(r).then(E).catch(E)}invalidateQueries(e,t={}){return be.batch(()=>(this.#e.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType===`none`?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??`active`},t)))}refetchQueries(e,t={}){let n={...t,cancelRefetch:t.cancelRefetch??!0},r=be.batch(()=>this.#e.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(E)),e.state.fetchStatus===`paused`?Promise.resolve():t}));return Promise.all(r).then(E)}fetchQuery(e){let t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);let n=this.#e.build(this,t);return n.isStaleByTime(ne(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(E).catch(E)}fetchInfiniteQuery(e){return e._type=`infinite`,this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(E).catch(E)}ensureInfiniteQueryData(e){return e._type=`infinite`,this.ensureQueryData(e)}resumePausedMutations(){return xe.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(e){this.#n=e}setQueryDefaults(e,t){this.#r.set(se(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],n={};return t.forEach(t=>{O(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#i.set(se(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{O(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#n.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||=oe(t.queryKey,t),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!==`always`),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode=`offlineFirst`),t.queryFn===pe&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#n.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},Be=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ve=s(((e,t)=>{t.exports=Be()})),N=u(p(),1),P=Ve(),He=N.createContext(void 0),Ue=({client:e,children:t})=>(N.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,P.jsx)(He.Provider,{value:e,children:t})),We=`modulepreload`,Ge=function(e,t){return new URL(e,t).href},Ke={},qe=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ge(t,n),t=s(t),t in Ke)return;Ke[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:We,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Je=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Ye=/^[\\/]{2}/;
function Xe(e,t){return t+e.replace(/\\/g,`/`)}
var Ze=`popstate`;
function Qe(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}
function $e(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=at(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),rt(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:it(t))}function r(e,t){et(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return ot(t,n,r,e)}
function F(e,t){if(e===!1||e==null)throw Error(t)}
function et(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}
function tt(){return Math.random().toString(36).substring(2,10)}
function nt(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}
function rt(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?at(t):t,state:n,key:t&&t.key||r||tt(),mask:i}}
function it({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}
function at(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}
function ot(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=Qe(e)?e:rt(h.location,e,t);n&&n(r,e),l=u()+1;let d=nt(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=Qe(e)?e:rt(h.location,e,t);n&&n(r,e),l=u();let i=nt(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return st(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(Ze,d),c=e,()=>{i.removeEventListener(Ze,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}
function st(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),F(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:it(t);return i=i.replace(/ $/,`%20`),!n&&Ye.test(i)&&(i=r+i),new URL(i,r)}
function ct(e,t,n=`/`){return lt(e,t,n,!1)}
function lt(e,t,n,r,i){let a=kt((typeof t==`string`?at(t):t).pathname||`/`,n);if(a==null)return null;let o=i??dt(e),s=null,c=Ot(a);for(let e=0;s==null&&e<o.length;++e)s=wt(o[e],c,r);return s}
function ut(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}
function dt(e){let t=ft(e);return mt(t),t}
function ft(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;F(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Lt([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(F(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ft(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:St(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Dt(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of pt(e.path))a(e,t,!0,n)}),t}
function pt(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=pt(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}
function mt(e){e.sort((e,t)=>e.score===t.score?Ct(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}
var ht=/^:[\w-]+$/,gt=3,_t=2,vt=1,yt=10,bt=-2,xt=e=>e===`*`;
function St(e,t){let n=e.split(`/`),r=n.length;return n.some(xt)&&(r+=bt),t&&(r+=_t),n.filter(e=>!xt(e)).reduce((e,t)=>e+(ht.test(t)?gt:t===``?vt:yt),r)}
function Ct(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}
function wt(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Et(u,l,s.matcher,s.compiledParams):Tt(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Tt({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Lt([a,d.pathname]),pathnameBase:zt(Lt([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Lt([a,d.pathnameBase]))}return o}
function Tt(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dt(e.path,e.caseSensitive,e.end);return Et(e,t,n,r)}
function Et(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Rt(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Rt(a.slice(0,a.length-e.length),1)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}
function Dt(e,t=!1,n=!0){et(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}
function Ot(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return et(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}
function kt(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}
function At(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?at(e):e,a;return n?(n=It(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?jt(n.substring(1),`/`):jt(n,t)):a=t,{pathname:a,search:Bt(r),hash:Vt(i)}}
function jt(e,t){let n=Rt(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}
function Mt(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}
function Nt(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}
function Pt(e){let t=Nt(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}
function Ft(e,t,n,r=!1){let i;typeof e==`string`?i=at(e):(i={...e},F(!i.pathname||!i.pathname.includes(`?`),Mt(`?`,`pathname`,`search`,i)),F(!i.pathname||!i.pathname.includes(`#`),Mt(`#`,`pathname`,`hash`,i)),F(!i.search||!i.search.includes(`#`),Mt(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=At(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}
var It=e=>e.replace(/[\\/]{2,}/g,`/`),Lt=e=>It(e.join(`/`));
function Rt(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}
var zt=e=>Rt(e).replace(/^\/*/,`/`),Bt=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Vt=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Ht=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};
function Ut(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}
function Wt(e){return Lt(e.map(e=>e.route.path).filter(Boolean))||`/`}
var Gt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;
function Kt(e,t){let n=e;if(typeof n!=`string`||!Je.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Gt)try{let e=new URL(window.location.href),r=Ye.test(n)?new URL(Xe(n,e.protocol)):new URL(n),a=kt(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{et(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var qt=new URL(`http://localhost`);
function Jt(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),qt)}catch{return qt}}
function Yt(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}
function Xt(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}
function Zt(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!Yt(i,n),s=!Yt(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!Xt(e,i)||!Yt(i,a)))throw Error(`External navigation is not allowed`)}
var Qt=[`POST`,`PUT`,`PATCH`,`DELETE`];
new Set(Qt);
var $t=[`GET`,...Qt];
new Set($t);
var en=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];
function tn(e){try{return en.includes(new URL(e).protocol)}catch{return!1}}
var nn=N.createContext(null);
nn.displayName=`DataRouter`;
var rn=N.createContext(null);
rn.displayName=`DataRouterState`;
var an=N.createContext(!1);
function on(){return N.useContext(an)}
var sn=N.createContext({isTransitioning:!1});
sn.displayName=`ViewTransition`;
var cn=N.createContext(new Map);
cn.displayName=`Fetchers`;
var ln=N.createContext(null);
ln.displayName=`Await`;
var un=N.createContext(null);
un.displayName=`Navigation`;
var dn=N.createContext(null);
dn.displayName=`Location`;
var fn=N.createContext({outlet:null,matches:[],isDataRoute:!1});
fn.displayName=`Route`;
var pn=N.createContext(null);
pn.displayName=`RouteError`;
var mn=`REACT_ROUTER_ERROR`,hn=`REDIRECT`,gn=`ROUTE_ERROR_RESPONSE`;
function _n(e){if(e.startsWith(`${mn}:${hn}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}
function vn(e){if(e.startsWith(`${mn}:${gn}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Ht(t.status,t.statusText,t.data)}catch{}}
function yn(e,{relative:t}={}){F(bn(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=N.useContext(un),{hash:i,pathname:a,search:o}=En(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Lt([n,a])),r.createHref({pathname:s,search:o,hash:i})}
function bn(){return N.useContext(dn)!=null}
function xn(){return F(bn(),`useLocation() may be used only in the context of a <Router> component.`),N.useContext(dn).location}
var Sn=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function Cn(e){N.useContext(un).static||N.useLayoutEffect(e)}
function wn(){let{isDataRoute:e}=N.useContext(fn);return e?Gn():Tn()}
function Tn(){F(bn(),`useNavigate() may be used only in the context of a <Router> component.`);let e=N.useContext(nn),{basename:t,navigator:n}=N.useContext(un),{matches:r}=N.useContext(fn),{pathname:i}=xn(),a=JSON.stringify(Pt(r)),o=N.useRef(!1);return Cn(()=>{o.current=!0}),N.useCallback((r,s={})=>{if(et(o.current,Sn),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ft(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Lt([t,c.pathname])),Zt(typeof r==`string`?r:it(r),n.createHref(c),Jt(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}
N.createContext(null);
function En(e,{relative:t}={}){let{matches:n}=N.useContext(fn),{pathname:r}=xn(),i=JSON.stringify(Pt(n));return N.useMemo(()=>Ft(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}
function Dn(e,t){return On(e,t)}
function On(e,t,n){F(bn(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=N.useContext(un),{matches:i}=N.useContext(fn),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;qn(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=xn(),d;if(t){let e=typeof t==`string`?at(t):t;F(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ct(e,{pathname:p});et(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),et(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Fn(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Lt([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Lt([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?N.createElement(dn.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}
function kn(){let e=Wn(),t=Ut(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=N.createElement(N.Fragment,null,N.createElement(`p`,null,`💿 Hey developer 👋`),N.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,N.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,N.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),N.createElement(N.Fragment,null,N.createElement(`h2`,null,`Unexpected Application Error!`),N.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?N.createElement(`pre`,{style:i},n):null,o)}
var An=N.createElement(kn,null),jn=class extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=vn(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:N.createElement(fn.Provider,{value:this.props.routeContext},N.createElement(pn.Provider,{value:e,children:this.props.component}));return this.context?N.createElement(Nn,{error:e},t):t}};
jn.contextType=an;
var Mn=new WeakMap;
function Nn({children:e,error:t}){let{basename:n,navigator:r}=N.useContext(un);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=_n(t.digest);if(e){let i=Mn.get(t);if(i)throw i;let a=Kt(e.location,n),o=a.absoluteURL||a.to;if(Zt(e.location,o,Jt(r),`allow-explicit`),tn(o))throw Error(`Invalid redirect location`);if(Gt&&!Mn.get(t))if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Mn.set(t,n),n}return N.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}
function Pn({routeContext:e,match:t,children:n}){let r=N.useContext(nn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(fn.Provider,{value:e},n)}
function Fn(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);F(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Wt(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||An,o&&(s<0&&c===0?(qn(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?N.createElement(n.route.Component,null):n.route.element?n.route.element:e,N.createElement(Pn,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?N.createElement(jn,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}
function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function Ln(e){let t=N.useContext(nn);return F(t,In(e)),t}
function Rn(e){let t=N.useContext(rn);return F(t,In(e)),t}
function zn(e){let t=N.useContext(fn);return F(t,In(e)),t}
function Bn(e){let t=zn(e),n=t.matches[t.matches.length-1];return F(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}
function Vn(){return Bn(`useRouteId`)}
function Hn(){let e=Rn(`useNavigation`);return N.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}
function Un(){let{matches:e,loaderData:t}=Rn(`useMatches`);return N.useMemo(()=>e.map(e=>ut(e,t)),[e,t])}
function Wn(){let e=N.useContext(pn),t=Rn(`useRouteError`),n=Bn(`useRouteError`);return e===void 0?t.errors?.[n]:e}
function Gn(){let{router:e}=Ln(`useNavigate`),t=Bn(`useNavigate`),n=N.useRef(!1);return Cn(()=>{n.current=!0}),N.useCallback(async(r,i={})=>{et(n.current,Sn),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}
var Kn={};
function qn(e,t,n){!t&&!Kn[e]&&(Kn[e]=!0,et(!1,n))}
N.memo(Jn);
function Jn({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return On(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}
function Yn({to:e,replace:t,state:n,relative:r}){F(bn(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i,navigator:a}=N.useContext(un);et(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:o}=N.useContext(fn),{pathname:s}=xn(),c=wn(),l=Ft(e,Pt(o),s,r===`path`);Zt(typeof e==`string`?e:it(e),a.createHref(l),Jt(a),`reject`);let u=JSON.stringify(l);return N.useEffect(()=>{c(JSON.parse(u),{replace:t,state:n,relative:r})},[c,u,r,t,n]),null}
function Xn(e){F(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}
function Zn({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){F(!bn(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=N.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=at(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=N.useMemo(()=>{let e=kt(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return et(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:N.createElement(un.Provider,{value:c},N.createElement(dn.Provider,{children:t,value:h}))}
function Qn({children:e,location:t}){return Dn($n(e),t)}
N.Component;
function $n(e,t=[]){let n=[];return N.Children.forEach(e,(e,r)=>{if(!N.isValidElement(e))return;let i=[...t,r];if(e.type===N.Fragment){n.push.apply(n,$n(e.props.children,i));return}F(e.type===Xn,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),F(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=$n(e.props.children,i)),n.push(a)}),n}
var er=`get`,tr=`application/x-www-form-urlencoded`;
function nr(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}
function rr(e){return nr(e)&&e.tagName.toLowerCase()===`button`}
function ir(e){return nr(e)&&e.tagName.toLowerCase()===`form`}
function ar(e){return nr(e)&&e.tagName.toLowerCase()===`input`}
function or(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}
function sr(e,t){return e.button===0&&(!t||t===`_self`)&&!or(e)}
function cr(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}
function lr(e,t){let n=cr(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}
var ur=null;
function dr(){if(ur===null)try{new FormData(document.createElement(`form`),0),ur=!1}catch{ur=!0}return ur}
var fr=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);
function pr(e){return e!=null&&!fr.has(e)?(et(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`),null):e}
function mr(e,t){let n,r,i,a,o;if(ir(e)){let o=e.getAttribute(`action`);r=o?kt(o,t):null,n=e.getAttribute(`method`)||er,i=pr(e.getAttribute(`enctype`))||tr,a=new FormData(e)}else if(rr(e)||ar(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?kt(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||er,i=pr(e.getAttribute(`formenctype`))||pr(o.getAttribute(`enctype`))||tr,a=new FormData(o,e),!dr()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(nr(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=er,r=null,i=tr,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var hr={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},gr=/[&><\u2028\u2029]/g;
function _r(e){return e.replace(gr,e=>hr[e])}
function vr(e,t){if(e===!1||e==null)throw Error(t)}
function yr(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&kt(i.pathname,t)===`/`?i.pathname=`${Rt(t)}/_root.${r}`:i.pathname=`${Rt(i.pathname)}.${r}`,i}
async function br(e,t){if(e.id in t)return t[e.id];try{let n=await qe(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}
function xr(e){return e!=null&&typeof e.page==`string`}
function Sr(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}
async function Cr(e,t,n){return Or((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await br(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Sr).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}
function wr(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}
function Tr(e,t,{includeHydrateFallback:n}={}){return Er(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}
function Er(e){return[...new Set(e)]}
function Dr(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}
function Or(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!xr(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Dr(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}
function kr(){let e=N.useContext(nn);return vr(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}
function Ar(){let e=N.useContext(rn);return vr(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}
var jr=N.createContext(void 0);
jr.displayName=`FrameworkContext`;
function Mr(){let e=N.useContext(jr);return vr(e,`You must render this element inside a <HydratedRouter> element`),e}
function Nr(e,t){let n=N.useContext(jr),[r,i]=N.useState(!1),[a,o]=N.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=N.useRef(null);N.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),N.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Pr(s,p),onBlur:Pr(c,m),onMouseEnter:Pr(l,p),onMouseLeave:Pr(u,m),onTouchStart:Pr(d,p)}]:[a,f,{}]:[!1,f,{}]}
function Pr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}
function Fr({page:e,...t}){let n=on(),{nonce:r}=Mr(),{router:i}=kr(),a=N.useMemo(()=>ct(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?N.createElement(Lr,{page:e,matches:a,...t}):N.createElement(Rr,{page:e,matches:a,...t})):null}
function Ir(e){let{manifest:t,routeModules:n}=Mr(),[r,i]=N.useState([]);return N.useEffect(()=>{let r=!1;return Cr(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}
function Lr({page:e,matches:t,...n}){let r=xn(),{future:i}=Mr(),{basename:a}=kr(),o=N.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=yr(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return N.createElement(N.Fragment,null,o.map(e=>N.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}
function Rr({page:e,matches:t,...n}){let r=xn(),{future:i,manifest:a,routeModules:o}=Mr(),{basename:s}=kr(),{loaderData:c,matches:l}=Ar(),u=N.useMemo(()=>wr(e,t,l,a,r,`data`),[e,t,l,a,r]),d=N.useMemo(()=>wr(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=N.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=yr(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=N.useMemo(()=>Tr(d,a),[d,a]),m=Ir(d);return N.createElement(N.Fragment,null,f.map(e=>N.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>N.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>N.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}
function zr(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}
N.Component;
var Br=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;
try{Br&&(window.__reactRouterVersion=`7.18.4`)}catch{}
function Vr({basename:e,children:t,useTransitions:n,window:r}){let i=N.useRef();i.current??=$e({window:r,v5Compat:!0});let a=i.current,[o,s]=N.useState({action:a.action,location:a.location}),c=N.useCallback(e=>{n===!1?s(e):N.startTransition(()=>s(e))},[n]);return N.useLayoutEffect(()=>a.listen(c),[a,c]),N.createElement(Zn,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}
function Hr({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=N.useState({action:n.action,location:n.location}),o=N.useCallback(e=>{r===!1?a(e):N.startTransition(()=>a(e))},[r]);return N.useLayoutEffect(()=>n.listen(o),[n,o]),N.createElement(Zn,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}
Hr.displayName=`unstable_HistoryRouter`;
var Ur=N.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=N.useContext(un),v=typeof l==`string`&&Je.test(l),y=Kt(l,h);l=y.to;let b=yn(l,{relative:r}),x=xn(),S=null;if(o){let e=Ft(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Lt([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=Nr(n,p),E=Xr(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ee(t){e&&e(t),t.defaultPrevented||E(t)}let D=!(y.isExternal||i),te=N.createElement(`a`,{...p,...T,href:(D?S:void 0)||y.absoluteURL||b,onClick:D?ee:e,ref:zr(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?N.createElement(N.Fragment,null,te,N.createElement(Fr,{page:b})):te});
Ur.displayName=`Link`;
var Wr=N.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=En(a,{relative:c.relative}),d=xn(),f=N.useContext(rn),{navigator:p,basename:m}=N.useContext(un),h=f!=null&&si(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=kt(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return N.createElement(Ur,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});
Wr.displayName=`NavLink`;
var Gr=N.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=er,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=N.useContext(un),g=ei(),_=ti(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Je.test(s);return N.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?N.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});
Gr.displayName=`Form`;
function Kr({getKey:e,storageKey:t,...n}){let r=N.useContext(jr),{basename:i}=N.useContext(un),a=xn(),o=Un();ai({getKey:e,storageKey:t});let s=N.useMemo(()=>{if(!r||!e)return null;let t=ii(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),N.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${_r(JSON.stringify(t||ni))}, ${_r(JSON.stringify(s))})`}})}
Kr.displayName=`ScrollRestoration`;
function qr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}
function Jr(e){let t=N.useContext(nn);return F(t,qr(e)),t}
function Yr(e){let t=N.useContext(rn);return F(t,qr(e)),t}
function Xr(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=wn(),d=xn(),f=En(e,{relative:o});return N.useCallback(p=>{if(sr(p,t)){p.preventDefault();let t=n===void 0?it(d)===it(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?N.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}
function Zr(e){et(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=N.useRef(cr(e)),n=N.useRef(!1),r=xn(),i=N.useMemo(()=>lr(r.search,n.current?null:t.current),[r.search]),a=wn();return[i,N.useCallback((e,t)=>{let r=cr(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}
var Qr=0,$r=()=>`__${String(++Qr)}__`;
function ei(){let{router:e}=Jr(`useSubmit`),{basename:t}=N.useContext(un),n=Vn(),r=e.fetch,i=e.navigate;return N.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=mr(e,t);if(a.navigate===!1){let e=a.fetcherKey||$r();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}
function ti(e,{relative:t}={}){let{basename:n}=N.useContext(un),r=N.useContext(fn);F(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...En(e||`.`,{relative:t})},o=xn();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Lt([n,a.pathname])),it(a)}
var ni=`react-router-scroll-positions`,ri={};
function ii(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:kt(e.pathname,n)||e.pathname},t)),i??=e.key,i}
function ai({getKey:e,storageKey:t}={}){let{router:n}=Jr(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Yr(`useScrollRestoration`),{basename:a}=N.useContext(un),o=xn(),s=Un(),c=Hn();N.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),oi(N.useCallback(()=>{if(c.state===`idle`){let t=ii(o,s,a,e);ri[t]=window.scrollY}try{sessionStorage.setItem(t||ni,JSON.stringify(ri))}catch(e){et(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(N.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||ni);e&&(ri=JSON.parse(e))}catch{}},[t]),N.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(ri,()=>window.scrollY,e?(t,n)=>ii(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),N.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{et(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}
function oi(e,t){let{capture:n}=t||{};N.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}
function si(e,{relative:t}={}){let n=N.useContext(sn);F(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Jr(`useViewTransitionState`),i=En(e,{relative:t});if(!n.isTransitioning)return!1;let a=kt(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=kt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Tt(i.pathname,o)!=null||Tt(i.pathname,a)!=null}
var ci=y(),li=u(_(),1);
function ui(e){if(!e||typeof document>`u`)return;let t=document.head||document.getElementsByTagName(`head`)[0],n=document.createElement(`style`);n.type=`text/css`,t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}
var di=e=>{switch(e){case`success`:return mi;case`info`:return gi;case`warning`:return hi;case`error`:return _i;default:return null}},fi=Array(12).fill(0),pi=({visible:e,className:t})=>N.createElement(`div`,{className:[`sonner-loading-wrapper`,t].filter(Boolean).join(` `),"data-visible":e},N.createElement(`div`,{className:`sonner-spinner`},fi.map((e,t)=>N.createElement(`div`,{className:`sonner-loading-bar`,key:`spinner-bar-${t}`})))),mi=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,clipRule:`evenodd`})),hi=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,clipRule:`evenodd`})),gi=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,clipRule:`evenodd`})),_i=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,height:`20`,width:`20`},N.createElement(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,clipRule:`evenodd`})),vi=N.createElement(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`},N.createElement(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),N.createElement(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})),yi=()=>{let[e,t]=N.useState(document.hidden);return N.useEffect(()=>{let e=()=>{t(document.hidden)};return document.addEventListener(`visibilitychange`,e),()=>window.removeEventListener(`visibilitychange`,e)},[]),e},bi=1,xi=new class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{let{message:t,...n}=e,r=typeof e?.id==`number`||e.id?.length>0?e.id:bi++,i=this.toasts.find(e=>e.id===r),a=e.dismissible===void 0||e.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),i?this.toasts=this.toasts.map(n=>n.id===r?(this.publish({...n,...e,id:r,title:t}),{...n,...e,id:r,dismissible:a,title:t}):n):this.addToast({title:t,...n,dismissible:a,id:r}),r},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(t=>t({id:e,dismiss:!0})))):this.toasts.forEach(e=>{this.subscribers.forEach(t=>t({id:e.id,dismiss:!0}))}),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:`error`}),this.success=(e,t)=>this.create({...t,type:`success`,message:e}),this.info=(e,t)=>this.create({...t,type:`info`,message:e}),this.warning=(e,t)=>this.create({...t,type:`warning`,message:e}),this.loading=(e,t)=>this.create({...t,type:`loading`,message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:`loading`,message:t.loading,description:typeof t.description==`function`?void 0:t.description}));let r=Promise.resolve(e instanceof Function?e():e),i=n!==void 0,a,o=r.then(async e=>{if(a=[`resolve`,e],N.isValidElement(e))i=!1,this.create({id:n,type:`default`,message:e});else if(Ci(e)&&!e.ok){i=!1;let r=typeof t.error==`function`?await t.error(`HTTP error! status: ${e.status}`):t.error,a=typeof t.description==`function`?await t.description(`HTTP error! status: ${e.status}`):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(e instanceof Error){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}else if(t.success!==void 0){i=!1;let r=typeof t.success==`function`?await t.success(e):t.success,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`success`,description:a,...o})}}).catch(async e=>{if(a=[`reject`,e],t.error!==void 0){i=!1;let r=typeof t.error==`function`?await t.error(e):t.error,a=typeof t.description==`function`?await t.description(e):t.description,o=typeof r==`object`&&!N.isValidElement(r)?r:{message:r};this.create({id:n,type:`error`,description:a,...o})}}).finally(()=>{i&&(this.dismiss(n),n=void 0),t.finally==null||t.finally.call(t)}),s=()=>new Promise((e,t)=>o.then(()=>a[0]===`reject`?t(a[1]):e(a[1])).catch(t));return typeof n!=`string`&&typeof n!=`number`?{unwrap:s}:Object.assign(n,{unwrap:s})},this.custom=(e,t)=>{let n=t?.id||bi++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Si=(e,t)=>{let n=t?.id||bi++;return xi.addToast({title:e,...t,id:n}),n},Ci=e=>e&&typeof e==`object`&&`ok`in e&&typeof e.ok==`boolean`&&`status`in e&&typeof e.status==`number`,wi=Object.assign(Si,{success:xi.success,info:xi.info,warning:xi.warning,error:xi.error,custom:xi.custom,message:xi.message,promise:xi.promise,dismiss:xi.dismiss,loading:xi.loading},{getHistory:()=>xi.toasts,getToasts:()=>xi.getActiveToasts()});
ui(`[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`);
function Ti(e){return e.label!==void 0}
var Ei=3,Di=`24px`,Oi=`16px`,ki=4e3,Ai=356,ji=14,Mi=45,Ni=200;
function Pi(...e){return e.filter(Boolean).join(` `)}
function Fi(e){let[t,n]=e.split(`-`),r=[];return t&&r.push(t),n&&r.push(n),r}
var Ii=e=>{let{invert:t,toast:n,unstyled:r,interacting:i,setHeights:a,visibleToasts:o,heights:s,index:c,toasts:l,expanded:u,removeToast:d,defaultRichColors:f,closeButton:p,style:m,cancelButtonStyle:h,actionButtonStyle:g,className:_=``,descriptionClassName:v=``,duration:y,position:b,gap:x,expandByDefault:S,classNames:C,icons:w,closeButtonAriaLabel:T=`Close toast`}=e,[E,ee]=N.useState(null),[D,te]=N.useState(null),[ne,re]=N.useState(!1),[ie,ae]=N.useState(!1),[oe,se]=N.useState(!1),[O,k]=N.useState(!1),[ce,le]=N.useState(!1),[ue,A]=N.useState(0),[j,M]=N.useState(0),de=N.useRef(n.duration||y||ki),fe=N.useRef(null),pe=N.useRef(null),me=c===0,he=c+1<=o,ge=n.type,_e=n.dismissible!==!1,ve=n.className||``,ye=n.descriptionClassName||``,be=N.useMemo(()=>s.findIndex(e=>e.toastId===n.id)||0,[s,n.id]),xe=N.useMemo(()=>n.closeButton??p,[n.closeButton,p]),Se=N.useMemo(()=>n.duration||y||ki,[n.duration,y]),Ce=N.useRef(0),we=N.useRef(0),Te=N.useRef(0),Ee=N.useRef(null),[De,Oe]=b.split(`-`),ke=N.useMemo(()=>s.reduce((e,t,n)=>n>=be?e:e+t.height,0),[s,be]),Ae=yi(),je=n.invert||t,Me=ge===`loading`;we.current=N.useMemo(()=>be*x+ke,[be,ke]),N.useEffect(()=>{de.current=Se},[Se]),N.useEffect(()=>{re(!0)},[]),N.useEffect(()=>{let e=pe.current;if(e){let t=e.getBoundingClientRect().height;return M(t),a(e=>[{toastId:n.id,height:t,position:n.position},...e]),()=>a(e=>e.filter(e=>e.toastId!==n.id))}},[a,n.id]),N.useLayoutEffect(()=>{if(!ne)return;let e=pe.current,t=e.style.height;e.style.height=`auto`;let r=e.getBoundingClientRect().height;e.style.height=t,M(r),a(e=>e.find(e=>e.toastId===n.id)?e.map(e=>e.toastId===n.id?{...e,height:r}:e):[{toastId:n.id,height:r,position:n.position},...e])},[ne,n.title,n.description,a,n.id,n.jsx,n.action,n.cancel]);let Ne=N.useCallback(()=>{ae(!0),A(we.current),a(e=>e.filter(e=>e.toastId!==n.id)),setTimeout(()=>{d(n)},Ni)},[n,d,a,we]);N.useEffect(()=>{if(n.promise&&ge===`loading`||n.duration===1/0||n.type===`loading`)return;let e;return u||i||Ae?(()=>{if(Te.current<Ce.current){let e=new Date().getTime()-Ce.current;de.current-=e}Te.current=new Date().getTime()})():de.current!==1/0&&(Ce.current=new Date().getTime(),e=setTimeout(()=>{n.onAutoClose==null||n.onAutoClose.call(n,n),Ne()},de.current)),()=>clearTimeout(e)},[u,i,n,ge,Ae,Ne]),N.useEffect(()=>{n.delete&&(Ne(),n.onDismiss==null||n.onDismiss.call(n,n))},[Ne,n.delete]);function Pe(){return w?.loading?N.createElement(`div`,{className:Pi(C?.loader,n?.classNames?.loader,`sonner-loader`),"data-visible":ge===`loading`},w.loading):N.createElement(pi,{className:Pi(C?.loader,n?.classNames?.loader),visible:ge===`loading`})}let Fe=n.icon||w?.[ge]||di(ge);return N.createElement(`li`,{tabIndex:0,ref:pe,className:Pi(_,ve,C?.toast,n?.classNames?.toast,C?.default,C?.[ge],n?.classNames?.[ge]),"data-sonner-toast":``,"data-rich-colors":n.richColors??f,"data-styled":!(n.jsx||n.unstyled||r),"data-mounted":ne,"data-promise":!!n.promise,"data-swiped":ce,"data-removed":ie,"data-visible":he,"data-y-position":De,"data-x-position":Oe,"data-index":c,"data-front":me,"data-swiping":oe,"data-dismissible":_e,"data-type":ge,"data-invert":je,"data-swipe-out":O,"data-swipe-direction":D,"data-expanded":!!(u||S&&ne),"data-testid":n.testId,style:{"--index":c,"--toasts-before":c,"--z-index":l.length-c,"--offset":`${ie?ue:we.current}px`,"--initial-height":S?`auto`:`${j}px`,...m,...n.style},onDragEnd:()=>{se(!1),ee(null),Ee.current=null},onPointerDown:e=>{e.button!==2&&(Me||!_e||(fe.current=new Date,A(we.current),e.target.setPointerCapture(e.pointerId),e.target.tagName!==`BUTTON`&&(se(!0),Ee.current={x:e.clientX,y:e.clientY})))},onPointerUp:()=>{if(O||!_e)return;Ee.current=null;let e=Number(pe.current?.style.getPropertyValue(`--swipe-amount-x`).replace(`px`,``)||0),t=Number(pe.current?.style.getPropertyValue(`--swipe-amount-y`).replace(`px`,``)||0),r=new Date().getTime()-fe.current?.getTime(),i=E===`x`?e:t,a=Math.abs(i)/r;if(Math.abs(i)>=Mi||a>.11){A(we.current),n.onDismiss==null||n.onDismiss.call(n,n),te(E===`x`?e>0?`right`:`left`:t>0?`down`:`up`),Ne(),k(!0);return}else{var o,s;(o=pe.current)==null||o.style.setProperty(`--swipe-amount-x`,`0px`),(s=pe.current)==null||s.style.setProperty(`--swipe-amount-y`,`0px`)}le(!1),se(!1),ee(null)},onPointerMove:t=>{var n,r;if(!Ee.current||!_e||window.getSelection()?.toString().length>0)return;let i=t.clientY-Ee.current.y,a=t.clientX-Ee.current.x,o=e.swipeDirections??Fi(b);!E&&(Math.abs(a)>1||Math.abs(i)>1)&&ee(Math.abs(a)>Math.abs(i)?`x`:`y`);let s={x:0,y:0},c=e=>1/(1.5+Math.abs(e)/20);if(E===`y`){if(o.includes(`top`)||o.includes(`bottom`))if(o.includes(`top`)&&i<0||o.includes(`bottom`)&&i>0)s.y=i;else{let e=i*c(i);s.y=Math.abs(e)<Math.abs(i)?e:i}}else if(E===`x`&&(o.includes(`left`)||o.includes(`right`)))if(o.includes(`left`)&&a<0||o.includes(`right`)&&a>0)s.x=a;else{let e=a*c(a);s.x=Math.abs(e)<Math.abs(a)?e:a}(Math.abs(s.x)>0||Math.abs(s.y)>0)&&le(!0),(n=pe.current)==null||n.style.setProperty(`--swipe-amount-x`,`${s.x}px`),(r=pe.current)==null||r.style.setProperty(`--swipe-amount-y`,`${s.y}px`)}},xe&&!n.jsx&&ge!==`loading`?N.createElement(`button`,{"aria-label":T,"data-disabled":Me,"data-close-button":!0,onClick:Me||!_e?()=>{}:()=>{Ne(),n.onDismiss==null||n.onDismiss.call(n,n)},className:Pi(C?.closeButton,n?.classNames?.closeButton)},w?.close??vi):null,(ge||n.icon||n.promise)&&n.icon!==null&&(w?.[ge]!==null||n.icon)?N.createElement(`div`,{"data-icon":``,className:Pi(C?.icon,n?.classNames?.icon)},n.promise||n.type===`loading`&&!n.icon?n.icon||Pe():null,n.type===`loading`?null:Fe):null,N.createElement(`div`,{"data-content":``,className:Pi(C?.content,n?.classNames?.content)},N.createElement(`div`,{"data-title":``,className:Pi(C?.title,n?.classNames?.title)},n.jsx?n.jsx:typeof n.title==`function`?n.title():n.title),n.description?N.createElement(`div`,{"data-description":``,className:Pi(v,ye,C?.description,n?.classNames?.description)},typeof n.description==`function`?n.description():n.description):null),N.isValidElement(n.cancel)?n.cancel:n.cancel&&Ti(n.cancel)?N.createElement(`button`,{"data-button":!0,"data-cancel":!0,style:n.cancelButtonStyle||h,onClick:e=>{Ti(n.cancel)&&_e&&(n.cancel.onClick==null||n.cancel.onClick.call(n.cancel,e),Ne())},className:Pi(C?.cancelButton,n?.classNames?.cancelButton)},n.cancel.label):null,N.isValidElement(n.action)?n.action:n.action&&Ti(n.action)?N.createElement(`button`,{"data-button":!0,"data-action":!0,style:n.actionButtonStyle||g,onClick:e=>{Ti(n.action)&&(n.action.onClick==null||n.action.onClick.call(n.action,e),!e.defaultPrevented&&Ne())},className:Pi(C?.actionButton,n?.classNames?.actionButton)},n.action.label):null)};
function Li(){if(typeof window>`u`||typeof document>`u`)return`ltr`;let e=document.documentElement.getAttribute(`dir`);return e===`auto`||!e?window.getComputedStyle(document.documentElement).direction:e}
function I(e,t){let n={};return[e,t].forEach((e,t)=>{let r=t===1,i=r?`--mobile-offset`:`--offset`,a=r?Oi:Di;function o(e){[`top`,`right`,`bottom`,`left`].forEach(t=>{n[`${i}-${t}`]=typeof e==`number`?`${e}px`:e})}typeof e==`number`||typeof e==`string`?o(e):typeof e==`object`?[`top`,`right`,`bottom`,`left`].forEach(t=>{e[t]===void 0?n[`${i}-${t}`]=a:n[`${i}-${t}`]=typeof e[t]==`number`?`${e[t]}px`:e[t]}):o(a)}),n}
var Ri=N.forwardRef(function(e,t){let{id:n,invert:r,position:i=`bottom-right`,hotkey:a=[`altKey`,`KeyT`],expand:o,closeButton:s,className:c,offset:l,mobileOffset:u,theme:d=`light`,richColors:f,duration:p,style:m,visibleToasts:h=Ei,toastOptions:g,dir:_=Li(),gap:v=ji,icons:y,containerAriaLabel:b=`Notifications`}=e,[x,S]=N.useState([]),C=N.useMemo(()=>n?x.filter(e=>e.toasterId===n):x.filter(e=>!e.toasterId),[x,n]),w=N.useMemo(()=>Array.from(new Set([i].concat(C.filter(e=>e.position).map(e=>e.position)))),[C,i]),[T,E]=N.useState([]),[ee,D]=N.useState(!1),[te,ne]=N.useState(!1),[re,ie]=N.useState(d===`system`?typeof window<`u`&&window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:d),ae=N.useRef(null),oe=a.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),se=N.useRef(null),O=N.useRef(!1),k=N.useCallback(e=>{S(t=>(t.find(t=>t.id===e.id)?.delete||xi.dismiss(e.id),t.filter(({id:t})=>t!==e.id)))},[]);return N.useEffect(()=>xi.subscribe(e=>{if(e.dismiss){requestAnimationFrame(()=>{S(t=>t.map(t=>t.id===e.id?{...t,delete:!0}:t))});return}setTimeout(()=>{li.flushSync(()=>{S(t=>{let n=t.findIndex(t=>t.id===e.id);return n===-1?[e,...t]:[...t.slice(0,n),{...t[n],...e},...t.slice(n+1)]})})})}),[x]),N.useEffect(()=>{if(d!==`system`){ie(d);return}if(d===`system`&&(window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?ie(`dark`):ie(`light`)),typeof window>`u`)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`);try{e.addEventListener(`change`,({matches:e})=>{ie(e?`dark`:`light`)})}catch{e.addListener(({matches:e})=>{try{ie(e?`dark`:`light`)}catch(e){console.error(e)}})}},[d]),N.useEffect(()=>{x.length<=1&&D(!1)},[x]),N.useEffect(()=>{let e=e=>{if(a.every(t=>e[t]||e.code===t)){var t;D(!0),(t=ae.current)==null||t.focus()}e.code===`Escape`&&(document.activeElement===ae.current||ae.current?.contains(document.activeElement))&&D(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a]),N.useEffect(()=>{if(ae.current)return()=>{se.current&&(se.current.focus({preventScroll:!0}),se.current=null,O.current=!1)}},[ae.current]),N.createElement(`section`,{ref:t,"aria-label":`${b} ${oe}`,tabIndex:-1,"aria-live":`polite`,"aria-relevant":`additions text`,"aria-atomic":`false`,suppressHydrationWarning:!0},w.map((t,n)=>{let[i,a]=t.split(`-`);return C.length?N.createElement(`ol`,{key:t,dir:_===`auto`?Li():_,tabIndex:-1,ref:ae,className:c,"data-sonner-toaster":!0,"data-sonner-theme":re,"data-y-position":i,"data-x-position":a,style:{"--front-toast-height":`${T[0]?.height||0}px`,"--width":`${Ai}px`,"--gap":`${v}px`,...m,...I(l,u)},onBlur:e=>{O.current&&!e.currentTarget.contains(e.relatedTarget)&&(O.current=!1,se.current&&=(se.current.focus({preventScroll:!0}),null))},onFocus:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||O.current||(O.current=!0,se.current=e.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{te||D(!1)},onDragEnd:()=>D(!1),onPointerDown:e=>{e.target instanceof HTMLElement&&e.target.dataset.dismissible===`false`||ne(!0)},onPointerUp:()=>ne(!1)},C.filter(e=>!e.position&&n===0||e.position===t).map((n,i)=>N.createElement(Ii,{key:n.id,icons:y,index:i,toast:n,defaultRichColors:f,duration:g?.duration??p,className:g?.className,descriptionClassName:g?.descriptionClassName,invert:r,visibleToasts:h,closeButton:g?.closeButton??s,interacting:te,position:t,style:g?.style,unstyled:g?.unstyled,classNames:g?.classNames,cancelButtonStyle:g?.cancelButtonStyle,actionButtonStyle:g?.actionButtonStyle,closeButtonAriaLabel:g?.closeButtonAriaLabel,removeToast:k,toasts:C.filter(e=>e.position==n.position),heights:T.filter(e=>e.position==n.position),setHeights:E,expandByDefault:o,gap:v,expanded:ee,swipeDirections:e.swipeDirections}))):null}))}),zi=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Bi=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Vi=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Hi=e=>{let t=Vi(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ui={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Wi=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Gi=(0,N.createContext)({}),Ki=()=>(0,N.useContext)(Gi),qi=(0,N.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=Ki()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,N.createElement)(`svg`,{ref:c,...Ui,width:t??l??Ui.width,height:t??l??Ui.height,stroke:e??f,strokeWidth:m,className:zi(`lucide`,p,i),...!a&&!Wi(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,N.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),Ji=(e,t)=>{let n=(0,N.forwardRef)(({className:n,...r},i)=>(0,N.createElement)(qi,{ref:i,iconNode:t,className:zi(`lucide-${Bi(Hi(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Hi(e),n},Yi=Ji(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Xi=Ji(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Zi=Ji(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Qi=Ji(`octagon-x`,[[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z`,key:`2d38gg`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),$i=Ji(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ea=`#151515`,ta=N.forwardRef(function({title:e=`CodeSandbox`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ea),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z`})]})}),na=`#EA4C89`,ra=N.forwardRef(function({title:e=`Dribbble`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=na),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z`})]})}),ia=`#0866FF`,aa=N.forwardRef(function({title:e=`Facebook`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ia),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z`})]})}),oa=`#F24E1E`,sa=N.forwardRef(function({title:e=`Figma`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=oa),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z`})]})}),ca=`#0055FF`,la=N.forwardRef(function({title:e=`Framer`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ca),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z`})]})}),ua=`#181717`,da=N.forwardRef(function({title:e=`GitHub`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ua),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12`})]})}),fa=`#FC6D26`,pa=N.forwardRef(function({title:e=`GitLab`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=fa),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z`})]})}),ma=`#4285F4`,ha=N.forwardRef(function({title:e=`Google Chrome`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ma),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z`})]})}),ga=`#FF0069`,_a=N.forwardRef(function({title:e=`Instagram`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ga),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077`})]})}),va=`#0052CC`,ya=N.forwardRef(function({title:e=`Trello`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=va),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z`})]})}),ba=`#9146FF`,xa=N.forwardRef(function({title:e=`Twitch`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=ba),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z`})]})}),Sa=`#000000`,Ca=N.forwardRef(function({title:e=`X`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=Sa),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z`})]})}),wa=`#FF0000`,Ta=N.forwardRef(function({title:e=`YouTube`,color:t=`currentColor`,size:n=24,...r},i){return t==="default"&&(t=wa),(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:n,height:n,fill:t,viewBox:`0 0 24 24`,ref:i,...r,children:[(0,P.jsx)(`title`,{children:e}),(0,P.jsx)(`path`,{d:`M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z`})]})});
function Ea(e,t){let n=(0,N.forwardRef)(function(e,n){let{size:r=24,color:i=`currentColor`,strokeWidth:a,absoluteStrokeWidth:o,...s}=e;return(0,P.jsx)(t,{ref:n,size:r,color:i,...s})});return n.displayName=e,n}
Ea(`Chrome`,ha),Ea(`Codesandbox`,ta),Ea(`Dribbble`,ra),Ea(`Facebook`,aa),Ea(`Figma`,sa),Ea(`Framer`,la),Ea(`Github`,da),Ea(`Gitlab`,pa),Ea(`Instagram`,_a),Ea(`Trello`,ya),Ea(`Twitch`,xa),Ea(`Twitter`,Ca),Ea(`Youtube`,Ta),Ji(`linkedin`,[[`path`,{d:`M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,key:`c2jq9f`}],[`rect`,{width:`4`,height:`12`,x:`2`,y:`9`,key:`mk3on5`}],[`circle`,{cx:`4`,cy:`4`,r:`2`,key:`bt5ra8`}]]),Ji(`slack`,[[`rect`,{width:`3`,height:`8`,x:`13`,y:`2`,rx:`1.5`,key:`diqz80`}],[`path`,{d:`M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5`,key:`183iwg`}],[`rect`,{width:`3`,height:`8`,x:`8`,y:`14`,rx:`1.5`,key:`hqg7r1`}],[`path`,{d:`M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5`,key:`76g71w`}],[`rect`,{width:`8`,height:`3`,x:`14`,y:`13`,rx:`1.5`,key:`1kmz0a`}],[`path`,{d:`M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5`,key:`jc4sz0`}],[`rect`,{width:`8`,height:`3`,x:`2`,y:`8`,rx:`1.5`,key:`1omvl4`}],[`path`,{d:`M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5`,key:`16f3cl`}]]),Ji(`pocket`,[[`path`,{d:`M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z`,key:`1uodqw`}],[`path`,{d:`m8 10 4 4 4-4`,key:`1mxd5q`}]]),Ji(`codepen`,[[`polygon`,{points:`12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2`,key:`srzb37`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`15.5`,key:`1t73f2`}],[`polyline`,{points:`22 8.5 12 15.5 2 8.5`,key:`ajlxae`}],[`polyline`,{points:`2 15.5 12 8.5 22 15.5`,key:`susrui`}],[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`8.5`,key:`2cldga`}]]),Ji(`chromium`,[[`path`,{d:`M10.88 21.94 15.46 14`,key:`xkve6t`}],[`path`,{d:`M21.17 8H12`,key:`19dcdn`}],[`path`,{d:`M3.95 6.06 8.54 14`,key:`g8jz9m`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}]]);
var Da=e=>{let t=new MutationObserver(e);return t.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),()=>t.disconnect()},Oa=()=>document.documentElement.classList.contains(`dark`)?`dark`:`light`,ka=()=>`light`,Aa=({...e})=>(0,P.jsx)(Ri,{theme:(0,N.useSyncExternalStore)(Da,Oa,ka),position:`bottom-right`,className:`toaster group`,icons:{success:(0,P.jsx)(Yi,{className:`size-4`}),info:(0,P.jsx)(Xi,{className:`size-4`}),warning:(0,P.jsx)($i,{className:`size-4`}),error:(0,P.jsx)(Qi,{className:`size-4`}),loading:(0,P.jsx)(Zi,{className:`size-4 animate-spin`})},style:{"--normal-bg":`var(--popover)`,"--normal-text":`var(--popover-foreground)`,"--normal-border":`var(--border)`,"--border-radius":`var(--radius)`},toastOptions:{classNames:{toast:`cn-toast`}},...e}),ja=(0,N.createContext)({});
function Ma(e){let t=(0,N.useRef)(null);return t.current===null&&(t.current=e()),t.current}
var Na=typeof window<`u`?N.useLayoutEffect:N.useEffect,Pa=(0,N.createContext)(null);
function Fa(e,t){e.indexOf(t)===-1&&e.push(t)}
function Ia(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}
var La=(e,t,n)=>n>t?t:n<e?e:n,Ra={},za=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ba=e=>typeof e==`object`&&!!e,Va=e=>/^0[^.\s]+$/u.test(e);
function Ha(e){let t;return()=>(t===void 0&&(t=e()),t)}
var Ua=e=>e,Wa=(...e)=>e.reduce((e,t)=>n=>t(e(n))),Ga=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},Ka=class{constructor(){this.subscriptions=[]}add(e){return Fa(this.subscriptions,e),()=>Ia(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},qa=e=>e*1e3,Ja=e=>e/1e3,Ya=(e,t)=>t?1e3/t*e:0,Xa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Za=1e-7,Qa=12;
function $a(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Xa(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Za&&++s<Qa);return o}
function eo(e,t,n,r){if(e===t&&n===r)return Ua;let i=t=>$a(t,0,1,e,n);return e=>e===0||e===1?e:Xa(i(e),t,r)}
var to=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,no=e=>t=>1-e(1-t),ro=eo(.33,1.53,.69,.99),io=no(ro),ao=to(io),oo=e=>e>=1?1:(e*=2)<1?.5*io(e):.5*(2-2**(-10*(e-1))),so=e=>1-Math.sin(Math.acos(e)),co=no(so),lo=to(so),uo=eo(.42,0,1,1),fo=eo(0,0,.58,1),po=eo(.42,0,.58,1),mo=e=>Array.isArray(e)&&typeof e[0]!=`number`,ho=e=>Array.isArray(e)&&typeof e[0]==`number`,go={linear:Ua,easeIn:uo,easeInOut:po,easeOut:fo,circIn:so,circInOut:lo,circOut:co,backIn:io,backInOut:ao,backOut:ro,anticipate:oo},L=e=>typeof e==`string`,R=e=>{if(ho(e)){e.length;let[t,n,r,i]=e;return eo(t,n,r,i)}else if(L(e))return go[e],`${e}`,go[e];return e},_o=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];
function vo(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}
var yo=40;
function bo(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=_o.reduce((e,t)=>(e[t]=vo(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=Ra.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,yo),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:_o.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<_o.length;t++)o[_o[t]].cancel(e)},state:i,steps:o}}
var{schedule:z,cancel:xo,state:So,steps:Co}=bo(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ua,!0),wo;
function To(){wo=void 0}
var Eo={now:()=>(wo===void 0&&Eo.set(So.isProcessing||Ra.useManualTiming?So.timestamp:performance.now()),wo),set:e=>{wo=e,queueMicrotask(To)}},Do=e=>t=>typeof t==`string`&&t.startsWith(e),Oo=Do(`--`),ko=Do(`var(--`),Ao=e=>ko(e)?jo.test(e.split(`/*`)[0].trim()):!1,jo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Mo(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}
var No={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Po={...No,transform:e=>La(0,1,e)},Fo={...No,default:1},Io=e=>Math.round(e*1e5)/1e5,Lo=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ro(e){return e==null}
var zo=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bo=(e,t)=>n=>!!(typeof n==`string`&&zo.test(n)&&n.startsWith(e)||t&&!Ro(n)&&Object.prototype.hasOwnProperty.call(n,t)),Vo=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Lo);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Ho=e=>La(0,255,e),Uo={...No,transform:e=>Math.round(Ho(e))},Wo={test:Bo(`rgb`,`red`),parse:Vo(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Uo.transform(e)+`, `+Uo.transform(t)+`, `+Uo.transform(n)+`, `+Io(Po.transform(r))+`)`};
function Go(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}
var Ko={test:Bo(`#`),parse:Go,transform:Wo.transform},qo=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Jo=qo(`deg`),Yo=qo(`%`),B=qo(`px`),Xo=qo(`vh`),Zo=qo(`vw`),Qo={...Yo,parse:e=>Yo.parse(e)/100,transform:e=>Yo.transform(e*100)},$o={test:Bo(`hsl`,`hue`),parse:Vo(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Yo.transform(Io(t))+`, `+Yo.transform(Io(n))+`, `+Io(Po.transform(r))+`)`},es={test:e=>Wo.test(e)||Ko.test(e)||$o.test(e),parse:e=>Wo.test(e)?Wo.parse(e):$o.test(e)?$o.parse(e):Ko.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Wo.transform(e):$o.transform(e),getAnimatableNone:e=>{let t=es.parse(e);return t.alpha=0,es.transform(t)}},ts=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ns(e){return isNaN(e)&&typeof e==`string`&&(e.match(Lo)?.length||0)+(e.match(ts)?.length||0)>0}
var rs=`number`,is=`color`,as=`var`,os=`var(`,ss="${}",cs=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ls(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(cs,e=>(es.test(e)?(r.color.push(a),i.push(is),n.push(es.parse(e))):e.startsWith(os)?(r.var.push(a),i.push(as),n.push(e)):(r.number.push(a),i.push(rs),n.push(parseFloat(e))),++a,ss)).split(ss),indexes:r,types:i}}
function us(e){return ls(e).values}
function ds({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===rs?i+=Io(r[a]):e===is?i+=es.transform(r[a]):i+=r[a]}return i}}
function fs(e){return ds(ls(e))}
var ps=e=>typeof e==`number`?0:es.test(e)?es.getAnimatableNone(e):e,ms=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:ps(e);
function hs(e){let t=ls(e);return ds(t)(t.values.map((e,n)=>ms(e,t.split[n])))}
var gs={test:ns,parse:us,createTransformer:fs,getAnimatableNone:hs};
function _s(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}
function vs({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=_s(s,r,e+1/3),a=_s(s,r,e),o=_s(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}
function ys(e,t){return n=>n>0?t:e}
var V=(e,t,n)=>e+(t-e)*n,bs=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},xs=[Ko,Wo,$o],Ss=e=>xs.find(t=>t.test(e));
function Cs(e){let t=Ss(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===$o&&(n=vs(n)),n}
var ws=(e,t)=>{let n=Cs(e),r=Cs(t);if(!n||!r)return ys(e,t);let i={...n};return e=>(i.red=bs(n.red,r.red,e),i.green=bs(n.green,r.green,e),i.blue=bs(n.blue,r.blue,e),i.alpha=V(n.alpha,r.alpha,e),Wo.transform(i))},Ts=new Set([`none`,`hidden`]);
function Es(e,t){return Ts.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}
function Ds(e,t){return n=>V(e,t,n)}
function Os(e){return typeof e==`number`?Ds:typeof e==`string`?Ao(e)?ys:es.test(e)?ws:Ms:Array.isArray(e)?ks:typeof e==`object`?es.test(e)?ws:As:ys}
function ks(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Os(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}
function As(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Os(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}
function js(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}
var Ms=(e,t)=>{let n=gs.createTransformer(t),r=ls(e),i=ls(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ts.has(e)&&!i.values.length||Ts.has(t)&&!r.values.length?Es(e,t):Wa(ks(js(r,i),i.values),n):(`${e}${t}`,ys(e,t))};
function Ns(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?V(e,t,n):Os(e)(e,t)}
var Ps=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>z.update(t,e),stop:()=>xo(t),now:()=>So.isProcessing?So.timestamp:Eo.now()}},Fs=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Is=2e4;
function Ls(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}
function Rs(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Ls(r),Is);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Ja(i)}}
var zs={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};
function Bs(e,t){return e*Math.sqrt(1-t*t)}
var Vs=12;
function Hs(e,t,n){let r=n;for(let n=1;n<Vs;n++)r-=e(r)/t(r);return r}
var Us=.001;
function Ws({duration:e=zs.duration,bounce:t=zs.bounce,velocity:n=zs.velocity,mass:r=zs.mass}){let i,a;zs.maxDuration;let o=1-t;o=La(zs.minDamping,zs.maxDamping,o),e=La(zs.minDuration,zs.maxDuration,Ja(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Bs(t,o),c=Math.exp(-i);return Us-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Bs(t**2,o);return(-i(t)+Us>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Hs(i,a,s);if(e=qa(e),isNaN(c))return{stiffness:zs.stiffness,damping:zs.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}
var Gs=[`duration`,`bounce`],Ks=[`stiffness`,`damping`,`mass`];
function qs(e,t){return t.some(t=>e[t]!==void 0)}
function Js(e){let t={velocity:zs.velocity,stiffness:zs.stiffness,damping:zs.damping,mass:zs.mass,isResolvedFromDuration:!1,...e};if(!qs(e,Ks)&&qs(e,Gs))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*La(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:zs.mass,stiffness:i,damping:a}}else{let n=Ws({...e,velocity:0});t={...t,...n,mass:zs.mass},t.isResolvedFromDuration=!0}return t}
function Ys(e=zs.visualDuration,t=zs.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Js({...n,velocity:-Ja(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Ja(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?zs.restSpeed.granular:zs.restSpeed.default,i||=v?zs.restDelta.granular:zs.restDelta.default;let y,b,x,S,C,w;if(h<1)x=Bs(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>qa(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=qa(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=qa(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Ls(T),Is),t=Fs(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}
Ys.applyToOptions=e=>{let t=Rs(e,100,Ys);return e.ease=t.ease,e.duration=qa(t.duration),e.type=`keyframes`,e};
var Xs=5;
function Zs(e,t,n){let r=Math.max(t-Xs,0);return Ya(n-e(r),t-r)}
function Qs({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=Ys({keyframes:[f.value,m(f.value)],velocity:Zs(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}
function $s(e,t,n){let r=[],i=n||Ra.mix||Ns,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Wa(Array.isArray(t)?t[n]||Ua:t,a)),r.push(a)}return r}
function ec(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=$s(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=Ga(e[r],e[r+1],n);return s[r](i)};return n?t=>l(La(e[0],e[a-1],t)):l}
function tc(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=Ga(0,t,r);e.push(V(n,1,i))}}
function nc(e){let t=[0];return tc(t,e.length-1),t}
function rc(e,t){return e.map(e=>e*t)}
function ic(e,t){return e.map(()=>t||po).splice(0,e.length-1)}
function ac({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=mo(r)?r.map(R):R(r),a={done:!1,value:t[0]},o=ec(rc(n&&n.length===t.length?n:nc(t),e),t,{ease:Array.isArray(i)?i:ic(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}
var oc=e=>e!==null;
function sc(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(oc),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}
var cc={decay:Qs,inertia:Qs,tween:ac,keyframes:ac,spring:Ys};
function lc(e){typeof e.type==`string`&&(e.type=cc[e.type])}
var uc=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},dc=e=>e/100,fc=class extends uc{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Eo.now()&&this.tick(Eo.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;lc(e);let{type:t=ac,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||ac;s!==ac&&typeof o[0]!=`number`&&(this.mixKeyframes=Wa(dc,Ns(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Ls(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=La(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Qs&&(b.value=sc(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Ja(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ja(e)}get time(){return Ja(this.currentTime)}set time(e){e=qa(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Zs(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Eo.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Ja(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ps,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Eo.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};
function pc(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}
var mc=e=>e*180/Math.PI,hc=e=>_c(mc(Math.atan2(e[1],e[0]))),gc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:hc,rotateZ:hc,skewX:e=>mc(Math.atan(e[1])),skewY:e=>mc(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},_c=e=>(e%=360,e<0&&(e+=360),e),vc=hc,yc=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),bc=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),xc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yc,scaleY:bc,scale:e=>(yc(e)+bc(e))/2,rotateX:e=>_c(mc(Math.atan2(e[6],e[5]))),rotateY:e=>_c(mc(Math.atan2(-e[2],e[0]))),rotateZ:vc,rotate:vc,skewX:e=>mc(Math.atan(e[4])),skewY:e=>mc(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};
function Sc(e){return+!!e.includes(`scale`)}
function Cc(e,t){if(!e||e===`none`)return Sc(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=xc,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=gc,i=t}if(!i)return Sc(t);let a=r[t],o=i[1].split(`,`).map(Tc);return typeof a==`function`?a(o):o[a]}
var wc=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Cc(n,t)};
function Tc(e){return parseFloat(e.trim())}
var Ec=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Dc=new Set([...Ec,`pathRotation`]),Oc=e=>e===No||e===B,kc=new Set([`x`,`y`,`z`]),Ac=Ec.filter(e=>!kc.has(e));
function jc(e){let t=[];return Ac.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}
var Mc={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Cc(t,`x`),y:(e,{transform:t})=>Cc(t,`y`)};
Mc.translateX=Mc.x,Mc.translateY=Mc.y;
var Nc=new Set,Pc=!1,Fc=!1,Ic=!1;
function Lc(){if(Fc){let e=Array.from(Nc).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=jc(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Fc=!1,Pc=!1,Nc.forEach(e=>e.complete(Ic)),Nc.clear()}
function Rc(){Nc.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fc=!0)})}
function zc(){Ic=!0,Rc(),Lc(),Ic=!1}
var Bc=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Nc.add(this),Pc||(Pc=!0,z.read(Rc),z.resolveKeyframes(Lc))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}pc(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Nc.delete(this)}cancel(){this.state===`scheduled`&&(Nc.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Vc=e=>e.startsWith(`--`);
function Hc(e,t,n){Vc(t)?e.style.setProperty(t,n):e.style[t]=n}
var Uc={};
function Wc(e,t){let n=Ha(e);return()=>Uc[t]??n()}
var Gc=Wc(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Kc=Wc(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),qc=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Jc={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:qc([0,.65,.55,1]),circOut:qc([.55,0,1,.45]),backIn:qc([.31,.01,.66,-.59]),backOut:qc([.33,1.53,.69,.99])};
function Yc(e,t){if(e)return typeof e==`function`?Kc()?Fs(e,t):`ease-out`:ho(e)?qc(e):Array.isArray(e)?e.map(e=>Yc(e,t)||Jc.easeOut):Jc[e]}
function Xc(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Yc(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}
function Zc(e){return typeof e==`function`&&`applyToOptions`in e}
function Qc({type:e,...t}){return Zc(e)&&Kc()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}
var $c=class extends uc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Qc(e);this.animation=Xc(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=sc(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Hc(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Ja(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Ja(e)}get time(){return Ja(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=qa(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Gc()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Ua):r(this)}},el={anticipate:oo,backInOut:ao,circInOut:lo};
function tl(e){return e in el}
function nl(e){typeof e.ease==`string`&&tl(e.ease)&&(e.ease=el[e.ease])}
var rl=10,il=class extends $c{constructor(e){nl(e),lc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new fc({...a,autoplay:!1}),s=Math.max(rl,Eo.now()-this.startTime),c=La(0,rl,s-rl),l=o.sample(s).value,{name:u}=this.options;i&&u&&Hc(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},al=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(gs.test(e)||e===`0`)&&!e.startsWith(`url(`));
function ol(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}
function sl(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=al(i,t),s=al(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:ol(e)||(n===`spring`||Zc(n))&&r}
function cl(e){e.duration=0,e.type=`keyframes`}
var ll=new Set([`opacity`,`clipPath`,`filter`,`transform`]),ul=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function dl(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&ul.test(e[t]))return!0;return!1}
var fl=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),pl=Ha(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));
function ml(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return pl()&&n&&(ll.has(n)||fl.has(n)&&dl(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}
var hl=40,gl=class extends uc{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Eo.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Bc;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Eo.now();let u=!0;sl(e,i,a,o)||(u=!1,(Ra.instantAnimations||!s)&&l?.(sc(e,n,t)),e[0]=e[e.length-1],cl(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>hl?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&ml(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new il({...d,element:p})}catch{m=new fc(d)}else m=new fc(d);m.finished.then(()=>{this.notifyFinished()}).catch(Ua),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),zc()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};
function _l(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}
var vl=30,yl=e=>!isNaN(parseFloat(e)),bl={current:void 0},xl=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Eo.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Eo.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=yl(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Ka);let n=this.events[e].add(t);return e===`change`?()=>{n(),z.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return bl.current&&bl.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Eo.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>vl)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,vl);return Ya(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};
function Sl(e,t){return new xl(e,t)}
function Cl(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}
function wl(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Cl(n,e)}
var Tl={type:`spring`,stiffness:500,damping:25,restSpeed:10},El=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Dl={type:`keyframes`,duration:.8},Ol={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},kl=(e,{keyframes:t})=>t.length>2?Dl:Dc.has(e)?e.startsWith(`scale`)?El(t[1]):Tl:Ol,Al=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);
function jl(e){for(let t in e)if(!Al.has(t))return!0;return!1}
var Ml=(e,t,n,r={},i,a)=>o=>{let s=wl(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=qa(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};jl(s)||Object.assign(u,kl(e,u)),u.duration&&=qa(u.duration),u.repeatDelay&&=qa(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(cl(u),u.delay===0&&(d=!0)),(Ra.instantAnimations||Ra.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,cl(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=sc(u.keyframes,s);if(e!==void 0){z.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new fc(u):new gl(u)},Nl=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Pl(e){let t=Nl.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}
function Fl(e,t,n=1){`${e}`;let[r,i]=Pl(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return za(e)?parseFloat(e):e}return Ao(i)?Fl(i,t,n+1):i}
function Il(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}
function Ll(e,t,n,r){if(typeof t==`function`){let[i,a]=Il(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Il(r);t=t(n===void 0?e.custom:n,i,a)}return t}
function Rl(e,t,n){let r=e.getProps();return Ll(r,t,n===void 0?r.custom:n,e)}
var zl=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Ec]),Bl=e=>Array.isArray(e);
function Vl(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Sl(n))}
function Hl(e){return Bl(e)?e[e.length-1]||0:e}
function H(e,t){let{transitionEnd:n={},transition:r={},...i}=Rl(e,t)||{};i={...i,...n};for(let t in i)Vl(e,t,Hl(i[t]))}
var U=e=>!!(e&&e.getVelocity);
function W(e){return!!(U(e)&&e.add)}
function G(e,t){let n=e.getValue(`willChange`);if(W(n))return n.add(t);if(!n&&Ra.WillChange){let n=new Ra.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}
function K(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}
var Ul=`data-`+K(`framerAppearId`);
function Wl(e){return e.props[Ul]}
function Gl({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}
function Kl(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Cl(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Gl(f,t))continue;let o={delay:n,...wl(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){z.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=Wl(e);if(n){let e=window.MotionHandoffAnimation(n,t,z);e!==null&&(o.startTime=e,p=!0)}}G(e,t);let m=l??e.shouldReduceMotion;r.start(Ml(t,r,i,m&&zl.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>z.update(()=>{o&&H(e,o)});d.length?Promise.all(d).then(t):t()}return d}
function ql(e,t,n={}){let r=Rl(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Kl(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Jl(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}
function Jl(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(ql(c,t,{...o,delay:n+(typeof r==`function`?0:r)+_l(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}
function Yl(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>ql(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=ql(e,t,n);else{let i=typeof t==`function`?Rl(e,t,n.custom):t;r=Promise.all(Kl(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}
var Xl={test:e=>e===`auto`,parse:e=>e},Zl=e=>t=>t.test(e),Ql=[No,B,Yo,Jo,Zo,Xo,Xl],$l=e=>Ql.find(Zl(e));
function eu(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||Va(e)}
var tu=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);
function nu(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Lo)||[];if(!r)return e;let i=n.replace(r,``),a=+!!tu.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}
var ru=/\b([a-z-]*)\(.*?\)/gu,iu={...gs,getAnimatableNone:e=>{let t=e.match(ru);return t?t.map(nu).join(` `):e}},au={...gs,getAnimatableNone:e=>{let t=gs.parse(e);return gs.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},ou={...No,transform:Math.round},su={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:Jo,pathRotation:Jo,rotateX:Jo,rotateY:Jo,rotateZ:Jo,scale:Fo,scaleX:Fo,scaleY:Fo,scaleZ:Fo,skew:Jo,skewX:Jo,skewY:Jo,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:Po,originX:Qo,originY:Qo,originZ:B,zIndex:ou,fillOpacity:Po,strokeOpacity:Po,numOctaves:ou},cu={...su,color:es,backgroundColor:es,outlineColor:es,fill:es,stroke:es,borderColor:es,borderTopColor:es,borderRightColor:es,borderBottomColor:es,borderLeftColor:es,filter:iu,WebkitFilter:iu,mask:au,WebkitMask:au},lu=e=>cu[e],uu=new Set([iu,au]);
function du(e,t){let n=lu(e);return uu.has(n)||(n=gs),n.getAnimatableNone?n.getAnimatableNone(t):void 0}
var fu=new Set([`auto`,`none`,`0`]);
function pu(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!fu.has(t)&&ls(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=du(n,i)}
var mu=class extends Bc{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ao(r))){let i=Fl(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!zl.has(n)||e.length!==2)return;let[r,i]=e,a=$l(r),o=$l(i);if(Mo(r)!==Mo(i)&&Mc[n]){this.needsMeasurement=!0;return}if(a!==o)if(Oc(a)&&Oc(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Mc[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||eu(e[t]))&&n.push(t);n.length&&pu(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mc[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Mc[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},hu=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];
function gu(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}
var _u=(e,t)=>t&&typeof e==`number`?t.transform(e):e;
function vu(e){return Ba(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}
var{schedule:yu,cancel:bu}=bo(queueMicrotask,!1),xu={x:!1,y:!1};
function Su(){return xu.x||xu.y}
function Cu(e){return e===`x`||e===`y`?xu[e]?null:(xu[e]=!0,()=>{xu[e]=!1}):xu.x||xu.y?null:(xu.x=xu.y=!0,()=>{xu.x=xu.y=!1})}
function wu(e,t){let n=gu(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}
function Tu(e){return!(e.pointerType===`touch`||Su())}
function Eu(e,t,n={}){let[r,i,a]=wu(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Tu(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}
var Du=(e,t)=>t?e===t||Du(e,t.parentElement):!1,Ou=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,ku=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);
function Au(e){return ku.has(e.tagName)||e.isContentEditable===!0}
var ju=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);
function Mu(e){return ju.has(e.tagName)||e.isContentEditable===!0}
var Nu=new WeakSet;
function Pu(e){return t=>{t.key===`Enter`&&e(t)}}
function Fu(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}
var Iu=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Pu(()=>{if(Nu.has(n))return;Fu(n,`down`);let e=Pu(()=>{Fu(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Fu(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};
function Lu(e){return Ou(e)&&!Su()}
var Ru=new WeakSet;
function zu(e,t,n={}){let[r,i,a]=wu(e,n),o=e=>{let r=e.currentTarget;if(!Lu(e)||Ru.has(e))return;Nu.add(r),n.stopPropagation&&Ru.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),Nu.has(r)&&Nu.delete(r),Lu(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Du(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),vu(e)&&(e.addEventListener(`focus`,e=>Iu(e,i)),!Au(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}
function Bu(e){return Ba(e)&&`ownerSVGElement`in e}
var Vu=new WeakMap,Hu,Uu=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Bu(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Wu=Uu(`inline`,`width`,`offsetWidth`),Gu=Uu(`block`,`height`,`offsetHeight`);
function Ku({target:e,borderBoxSize:t}){Vu.get(e)?.forEach(n=>{n(e,{get width(){return Wu(e,t)},get height(){return Gu(e,t)}})})}
function qu(e){e.forEach(Ku)}
function Ju(){typeof ResizeObserver>`u`||(Hu=new ResizeObserver(qu))}
function q(e,t){Hu||Ju();let n=gu(e);return n.forEach(e=>{let n=Vu.get(e);n||(n=new Set,Vu.set(e,n)),n.add(t),Hu?.observe(e)}),()=>{n.forEach(e=>{let n=Vu.get(e);n?.delete(t),n?.size||Hu?.unobserve(e)})}}
var Yu=new Set,Xu;
function Zu(){Xu=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Yu.forEach(t=>t(e))},window.addEventListener(`resize`,Xu)}
function Qu(e){return Yu.add(e),Xu||Zu(),()=>{Yu.delete(e),!Yu.size&&typeof Xu==`function`&&(window.removeEventListener(`resize`,Xu),Xu=void 0)}}
function $u(e,t){return typeof e==`function`?Qu(e):q(e,t)}
var ed={value:null,addProjectionMetrics:null};
function td(e){return Bu(e)&&e.tagName===`svg`}
var nd=[...Ql,es,gs],rd=e=>nd.find(Zl(e)),id=()=>({translate:0,scale:1,origin:0,originPoint:0}),ad=()=>({x:id(),y:id()}),od=()=>({min:0,max:0}),sd=()=>({x:od(),y:od()}),cd=new WeakMap;
function ld(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}
function ud(e){return typeof e==`string`||Array.isArray(e)}
var dd=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],fd=[`initial`,...dd];
function pd(e){return ld(e.animate)||fd.some(t=>ud(e[t]))}
function md(e){return!!(pd(e)||e.variants)}
function hd(e,t,n){for(let r in t){let i=t[r],a=n[r];if(U(i))e.addValue(r,i);else if(U(a))e.addValue(r,Sl(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Sl(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}
var gd={current:null},_d={current:!1},vd=typeof window<`u`;
function yd(){if(_d.current=!0,vd)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>gd.current=e.matches;e.addEventListener(`change`,t),t()}else gd.current=!1}
var bd=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],xd={};
function Sd(e){xd=e}
function Cd(){return xd}
var J=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Bc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Eo.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,z.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=pd(t),this.isVariantNode=md(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&U(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,cd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(_d.current||yd(),this.shouldReduceMotion=gd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),xo(this.notifyUpdate),xo(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&ll.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new $c({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:qa(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Dc.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&z.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in xd){let t=xd[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):sd()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<bd.length;t++){let n=bd[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=hd(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Sl(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(za(n)||Va(n))?n=parseFloat(n):!rd(n)&&gs.test(t)&&(n=du(e,t)),this.setBaseTarget(e,U(n)?n.get():n)),U(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Ll(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!U(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ka),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){yu.render(this.render)}},wd=class extends J{constructor(){super(...arguments),this.KeyframeResolver=mu}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;U(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Td=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};
function Ed({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}
function Dd({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}
function Od(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}
function kd(e){return e===void 0||e===1}
function Ad({scale:e,scaleX:t,scaleY:n}){return!kd(e)||!kd(t)||!kd(n)}
function jd(e){return Ad(e)||Md(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}
function Md(e){return Nd(e.x)||Nd(e.y)}
function Nd(e){return e&&e!==`0%`}
function Pd(e,t,n){return n+t*(e-n)}
function Fd(e,t,n,r,i){return i!==void 0&&(e=Pd(e,i,r)),Pd(e,n,r)+t}
function Id(e,t=0,n=1,r,i){e.min=Fd(e.min,t,n,r,i),e.max=Fd(e.max,t,n,r,i)}
function Y(e,{x:t,y:n}){Id(e.x,t.translate,t.scale,t.originPoint),Id(e.y,n.translate,n.scale,n.originPoint)}
var Ld=.999999999999,Rd=1.0000000000001;
function zd(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Bd(e.x,-a.scroll.offset.x),Bd(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Y(e,o)),r&&jd(a.latestValues)&&Ud(e,a.latestValues,a.layout?.layoutBox))}t.x<Rd&&t.x>Ld&&(t.x=1),t.y<Rd&&t.y>Ld&&(t.y=1)}
function Bd(e,t){e.min+=t,e.max+=t}
function Vd(e,t,n,r,i=.5){Id(e,t,n,V(e.min,e.max,i),r)}
function Hd(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}
function Ud(e,t,n){let r=n??e;Vd(e.x,Hd(t.x,r.x),t.scaleX,t.scale,t.originX),Vd(e.y,Hd(t.y,r.y),t.scaleY,t.scale,t.originY)}
function Wd(e,t){return Ed(Od(e.getBoundingClientRect(),t))}
function Gd(e,t,n){let r=Wd(e,n),{scroll:i}=t;return i&&(Bd(r.x,i.offset.x),Bd(r.y,i.offset.y)),r}
var Kd={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},qd=Ec.length;
function Jd(e,t,n){let r=``,i=!0;for(let a=0;a<qd;a++){let o=Ec[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=_u(s,su[o]);if(!c){i=!1;let t=Kd[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${_u(a,su.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}
function Yd(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Dc.has(e)){o=!0;continue}else if(Oo(e)){i[e]=n;continue}else{let t=_u(n,su[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Jd(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}
function Xd(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}
function Zd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}
var Qd={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${Zd(e,t.target.x)}% ${Zd(e,t.target.y)}%`}},$d={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=gs.parse(e);if(i.length>5)return r;let a=gs.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=V(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ef={borderRadius:{...Qd,applyTo:[...hu]},borderTopLeftRadius:Qd,borderTopRightRadius:Qd,borderBottomLeftRadius:Qd,borderBottomRightRadius:Qd,boxShadow:$d};
function tf(e,{layout:t,layoutId:n}){return Dc.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ef[e]||e===`opacity`)}
function nf(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(U(r[t])||i&&U(i[t])||tf(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}
function rf(e){return window.getComputedStyle(e)}
var af=class extends wd{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Xd}readValueFromInstance(e,t){if(Dc.has(t))return this.projection?.isProjecting?Sc(t):wc(e,t);{let n=rf(e),r=(Oo(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Wd(e,t)}build(e,t,n){Yd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return nf(e,t,n)}},of={offset:`stroke-dashoffset`,array:`stroke-dasharray`},sf={offset:`strokeDashoffset`,array:`strokeDasharray`};
function cf(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?of:sf;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}
var lf=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];
function uf(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Yd(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of lf)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&cf(d,i,a,o,!1)}
var df=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),ff=e=>typeof e==`string`&&e.toLowerCase()===`svg`;
function pf(e,t,n,r){Xd(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(df.has(n)?n:K(n),t.attrs[n])}
function mf(e,t,n){let r=nf(e,t,n);for(let n in e)if(U(e[n])||U(t[n])){let t=Ec.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}
var hf=class extends wd{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=sd}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Dc.has(t)){let e=lu(t);return e&&e.default||0}return t=df.has(t)?t:K(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return mf(e,t,n)}build(e,t,n){uf(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){pf(e,t,n,r)}mount(e){this.isSVGTag=ff(e.tagName),super.mount(e)}},gf=fd.length;
function _f(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&_f(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<gf;n++){let r=fd[n],i=e.props[r];(ud(i)||i===!1)&&(t[r]=i)}return t}
function vf(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}
var yf=[...dd].reverse(),bf=dd.length;
function xf(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Yl(e,t,n)))}
function Sf(e){let t=xf(e),n=Tf(),r=!0,i=!1,a=t=>(n,r)=>{let i=Rl(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=_f(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<bf;t++){let p=yf[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=ud(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||ld(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Cf(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Bl(t)&&Bl(n)?!vf(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ee=v&&y;b&&(!ee||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ee&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Rl(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=_l(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Rl(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Tf(),i=!0}}}
function Cf(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!vf(t,e):!1}
function wf(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}
function Tf(){return{animate:wf(!0),whileInView:wf(),whileHover:wf(),whileTap:wf(),whileDrag:wf(),whileFocus:wf(),exit:wf()}}
function Ef(e,t){e.min=t.min,e.max=t.max}
function Df(e,t){Ef(e.x,t.x),Ef(e.y,t.y)}
function Of(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}
var kf=.9999,Af=1.0001,jf=-.01,Mf=.01;
function Nf(e){return e.max-e.min}
function Pf(e,t,n){return Math.abs(e-t)<=n}
function Ff(e,t,n,r=.5){e.origin=r,e.originPoint=V(t.min,t.max,e.origin),e.scale=Nf(n)/Nf(t),e.translate=V(n.min,n.max,e.origin)-e.originPoint,(e.scale>=kf&&e.scale<=Af||isNaN(e.scale))&&(e.scale=1),(e.translate>=jf&&e.translate<=Mf||isNaN(e.translate))&&(e.translate=0)}
function If(e,t,n,r){Ff(e.x,t.x,n.x,r?r.originX:void 0),Ff(e.y,t.y,n.y,r?r.originY:void 0)}
function Lf(e,t,n,r=0){e.min=(r?V(n.min,n.max,r):n.min)+t.min,e.max=e.min+Nf(t)}
function Rf(e,t,n,r){Lf(e.x,t.x,n.x,r?.x),Lf(e.y,t.y,n.y,r?.y)}
function zf(e,t,n,r=0){let i=r?V(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Nf(t)}
function Bf(e,t,n,r){zf(e.x,t.x,n.x,r?.x),zf(e.y,t.y,n.y,r?.y)}
function Vf(e,t,n,r,i){return e-=t,e=Pd(e,1/n,r),i!==void 0&&(e=Pd(e,1/i,r)),e}
function Hf(e,t=0,n=1,r=.5,i,a=e,o=e){if(Yo.test(t)&&(t=parseFloat(t),t=V(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=V(a.min,a.max,r);e===a&&(s-=t),e.min=Vf(e.min,t,n,s,i),e.max=Vf(e.max,t,n,s,i)}
function Uf(e,t,[n,r,i],a,o){Hf(e,t[n],t[r],t[i],t.scale,a,o)}
var Wf=[`x`,`scaleX`,`originX`],Gf=[`y`,`scaleY`,`originY`];
function Kf(e,t,n,r){Uf(e.x,t,Wf,n?n.x:void 0,r?r.x:void 0),Uf(e.y,t,Gf,n?n.y:void 0,r?r.y:void 0)}
function qf(e){return e.translate===0&&e.scale===1}
function Jf(e){return qf(e.x)&&qf(e.y)}
function Yf(e,t){return e.min===t.min&&e.max===t.max}
function Xf(e,t){return Yf(e.x,t.x)&&Yf(e.y,t.y)}
function Zf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}
function Qf(e,t){return Zf(e.x,t.x)&&Zf(e.y,t.y)}
function $f(e){return Nf(e.x)/Nf(e.y)}
function ep(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}
function tp(e){return[e(`x`),e(`y`)]}
function np(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}
var rp=hu.length,ip=e=>typeof e==`string`?parseFloat(e):e,ap=e=>typeof e==`number`||B.test(e);
function op(e,t,n,r,i,a){i?(e.opacity=V(0,n.opacity??1,cp(r)),e.opacityExit=V(t.opacity??1,0,lp(r))):a&&(e.opacity=V(t.opacity??1,n.opacity??1,r));for(let i=0;i<rp;i++){let a=hu[i],o=sp(t,a),s=sp(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||ap(o)===ap(s)?(e[a]=Math.max(V(ip(o),ip(s),r),0),(Yo.test(s)||Yo.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=V(t.rotate||0,n.rotate||0,r))}
function sp(e,t){return e[t]===void 0?e.borderRadius:e[t]}
var cp=up(0,.5,co),lp=up(.5,.95,Ua);
function up(e,t,n){return r=>r<e?0:r>t?1:n(Ga(e,t,r))}
function dp(e,t,n){let r=U(e)?e:Sl(e);return r.start(Ml(``,r,t,n)),r.animation}
function fp(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}
var pp=(e,t)=>e.depth-t.depth,mp=class{constructor(){this.children=[],this.isDirty=!1}add(e){Fa(this.children,e),this.isDirty=!0}remove(e){Ia(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(pp),this.isDirty=!1,this.children.forEach(e)}};
function hp(e,t){let n=Eo.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(xo(r),e(a-t))};return z.setup(r,!0),()=>xo(r)}
function gp(e){return U(e)?e.get():e}
var _p=class{constructor(){this.members=[]}add(e){Fa(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(Ia(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(Ia(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},vp={hasAnimatedSinceResize:!0,hasEverUpdated:!1},yp={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},bp=[``,`X`,`Y`,`Z`],xp=1e3,Sp=0;
function Cp(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}
function wp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Wl(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,z,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&wp(r)}
function Tp({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Sp++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ed.value&&(yp.nodes=yp.calculatedTargetDeltas=yp.calculatedProjections=0),this.nodes.forEach(Op),this.nodes.forEach(Lp),this.nodes.forEach(Rp),this.nodes.forEach(kp),ed.addProjectionMetrics&&ed.addProjectionMetrics(yp)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new mp)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ka),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Bu(t)&&!td(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;z.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=hp(i,250),vp.hasAnimatedSinceResize&&(vp.hasAnimatedSinceResize=!1,this.nodes.forEach(Ip)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Gp,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Qf(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...wl(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||Ip(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zp),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Mp),this.nodes.forEach(jp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Np);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Pp),this.nodes.forEach(Fp),this.nodes.forEach(Ep),this.nodes.forEach(Dp)):this.nodes.forEach(Np),this.clearAllSnapshots();let e=Eo.now();So.delta=La(0,1e3/60,e-So.timestamp),So.timestamp=e,So.isProcessing=!0,Co.update.process(So),Co.preRender.process(So),Co.render.process(So),So.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ap),this.sharedNodes.forEach(Bp)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Nf(this.snapshot.measuredBox.x)&&!Nf(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=sd(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Jf(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||jd(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Yp(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return sd();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Zp))){let{scroll:e}=this.root;e&&(Bd(t.x,e.offset.x),Bd(t.y,e.offset.y))}return t}removeElementScroll(e){let t=sd();if(Df(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Df(t,e),Bd(t.x,i.offset.x),Bd(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||sd();Df(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Bd(r.x,-n.scroll.offset.x),Bd(r.y,-n.scroll.offset.y)),jd(n.latestValues)&&Ud(r,n.latestValues,n.layout?.layoutBox)}return jd(this.latestValues)&&Ud(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=sd();Df(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!jd(n.latestValues))continue;let r;n.instance&&(Ad(n.latestValues)&&n.updateSnapshot(),r=sd(),Df(r,n.measurePageBox())),Kf(t,n.latestValues,n.snapshot?.layoutBox,r)}return jd(this.latestValues)&&Kf(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==So.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=So.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=sd(),this.targetWithTransforms=sd()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Rf(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Df(this.target,this.layout.layoutBox),Y(this.target,this.targetDelta)):Df(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),ed.value&&yp.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Ad(this.parent.latestValues)||Md(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=sd(),this.relativeTargetOrigin=sd(),Bf(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Df(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===So.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Df(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;zd(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=sd());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Of(this.prevProjectionDelta.x,this.projectionDelta.x),Of(this.prevProjectionDelta.y,this.projectionDelta.y)),If(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!ep(this.projectionDelta.x,this.prevProjectionDelta.x)||!ep(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),ed.value&&yp.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ad(),this.projectionDelta=ad(),this.projectionDeltaWithTransform=ad()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=ad();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=sd(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(Wp));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=V(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=V(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(Vp(o.x,e.x,n),Vp(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Bf(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Up(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&Xf(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=sd(),Df(f,this.relativeTarget)),c&&(this.animationValues=a,op(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(xo(this.pendingAnimation),void 0),this.pendingAnimation=z.update(()=>{vp.hasAnimatedSinceResize=!0,this.motionValue||=Sl(0),this.motionValue.jump(0,!1),this.currentAnimation=dp(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(xp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Xp(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||sd();let t=Nf(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Nf(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Df(t,n),Ud(t,i),If(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new _p),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Cp(`z`,e,r,this.animationValues);for(let t=0;t<bp.length;t++)Cp(`rotate${bp[t]}`,e,r,this.animationValues),Cp(`skew${bp[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=gp(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=gp(t?.pointerEvents)||``),this.hasProjected&&!jd(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=np(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in ef){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=ef[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?gp(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(jp),this.root.sharedNodes.clear()}}}
function Ep(e){e.updateLayout()}
function Dp(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)tp(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Nf(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ef(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Xp(i,t.layoutBox,n)&&tp(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Nf(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=ad();If(o,n,t.layoutBox);let s=ad();a?If(s,e.applyTransform(r,!0),t.measuredBox):If(s,n,t.layoutBox);let c=!Jf(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=sd();Bf(s,t.layoutBox,i.layoutBox,o);let c=sd();Bf(c,n,a.layoutBox,o),Qf(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}
function Op(e){ed.value&&yp.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}
function kp(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}
function Ap(e){e.clearSnapshot()}
function jp(e){e.clearMeasurements()}
function Mp(e){e.isLayoutDirty=!0,e.updateLayout()}
function Np(e){e.isLayoutDirty=!1}
function Pp(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}
function Fp(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}
function Ip(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}
function Lp(e){e.resolveTargetDelta()}
function Rp(e){e.calcProjection()}
function zp(e){e.resetSkewAndRotation()}
function Bp(e){e.removeLeadSnapshot()}
function Vp(e,t,n){e.translate=V(t.translate,0,n),e.scale=V(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}
function Hp(e,t,n,r){e.min=V(t.min,n.min,r),e.max=V(t.max,n.max,r)}
function Up(e,t,n,r){Hp(e.x,t.x,n.x,r),Hp(e.y,t.y,n.y,r)}
function Wp(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}
var Gp={duration:.45,ease:[.4,0,.1,1]},Kp=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),qp=Kp(`applewebkit/`)&&!Kp(`chrome/`)?Math.round:Ua;
function Jp(e){e.min=qp(e.min),e.max=qp(e.max)}
function Yp(e){Jp(e.x),Jp(e.y)}
function Xp(e,t,n){return e===`position`||e===`preserve-aspect`&&!Pf($f(t),$f(n),.2)}
function Zp(e){return e!==e.root&&e.scroll?.wasRoot}
var Qp=Tp({attachResizeListener:(e,t)=>fp(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),$p={current:void 0},em=Tp({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$p.current){let e=new Qp({});e.mount(window),e.setOptions({layoutScroll:!0}),$p.current=e}return $p.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),tm=(0,N.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});
function nm(e=!0){let t=(0,N.useContext)(Pa);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,N.useId)();(0,N.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,N.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}
var rm=(0,N.createContext)({strict:!1}),im={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},am=!1;
function om(){if(am)return;let e={};for(let t in im)e[t]={isEnabled:e=>im[t].some(t=>!!e[t])};Sd(e),am=!0}
function sm(){return om(),Cd()}
function cm(e){let t=sm();for(let n in e)t[n]={...t[n],...e[n]};Sd(t)}
var lm=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));
function um(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||lm.has(e)}
var dm=c({default:()=>fm}),fm,pm=o((()=>{throw fm={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),mm=e=>!um(e);
function hm(e){typeof e==`function`&&(mm=t=>t.startsWith(`on`)?!um(t):e(t))}
try{hm((pm(),d(dm)).default)}catch{}
function gm(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||U(e[i])||(mm(i)||n===!0&&um(i)||!t&&!um(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}
var _m=(0,N.createContext)({});
function vm(e,t){if(pd(e)){let{initial:t,animate:n}=e;return{initial:t===!1||ud(t)?t:void 0,animate:ud(n)?n:void 0}}return e.inherit===!1?{}:t}
function ym(e){let{initial:t,animate:n}=vm(e,(0,N.useContext)(_m));return(0,N.useMemo)(()=>({initial:t,animate:n}),[bm(t),bm(n)])}
function bm(e){return Array.isArray(e)?e.join(` `):e}
var xm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});
function Sm(e,t,n){for(let r in t)!U(t[r])&&!tf(r,n)&&(e[r]=t[r])}
function Cm({transformTemplate:e},t){return(0,N.useMemo)(()=>{let n=xm();return Yd(n,t,e),Object.assign({},n.vars,n.style)},[t])}
function wm(e,t){let n=e.style||{},r={};return Sm(r,n,e),Object.assign(r,Cm(e,t)),r}
function Tm(e,t){let n={},r=wm(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}
var Em=()=>({...xm(),attrs:{}});
function Dm(e,t,n,r){let i=(0,N.useMemo)(()=>{let n=Em();return uf(n,t,ff(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Sm(t,e.style,e),i.style={...t,...i.style}}return i}
var Om=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];
function km(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Om.indexOf(e)>-1||/[A-Z]/u.test(e))}
function Am(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??km(e)?Dm:Tm)(t,r,i,e),c=gm(t,typeof e==`string`,a),l=e===N.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,N.useMemo)(()=>U(u)?u.get():u,[u]);return(0,N.createElement)(e,{...l,children:d})}
function jm({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Mm(n,r,i,e),renderState:t()}}
function Mm(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=gp(a[e]);let{initial:o,animate:s}=e,c=pd(e),l=md(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!ld(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ll(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}
var Nm=e=>(t,n)=>{let r=(0,N.useContext)(_m),i=(0,N.useContext)(Pa),a=()=>jm(e,t,r,i);return n?a():Ma(a)},Pm=Nm({scrapeMotionValuesFromProps:nf,createRenderState:xm}),Fm=Nm({scrapeMotionValuesFromProps:mf,createRenderState:Em}),Im=Symbol.for(`motionComponentSymbol`);
function Lm(e,t,n){let r=(0,N.useRef)(n);(0,N.useInsertionEffect)(()=>{r.current=n});let i=(0,N.useRef)(null);return(0,N.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}
var Rm=(0,N.createContext)({});
function zm(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}
function Bm(e,t,n,r,i,a){let{visualElement:o}=(0,N.useContext)(_m),s=(0,N.useContext)(rm),c=(0,N.useContext)(Pa),l=(0,N.useContext)(tm),u=l.reducedMotion,d=l.skipAnimations,f=(0,N.useRef)(null),p=(0,N.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,N.useContext)(Rm);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Vm(f.current,n,i,h);let g=(0,N.useRef)(!1);(0,N.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Ul],v=(0,N.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Na(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,N.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}
function Vm(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Hm(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&zm(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}
function Hm(e){if(e)return e.options.allowProjection===!1?Hm(e.parent):e.projection}
function Um(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&cm(r);let a=n?n===`svg`:km(e),o=a?Fm:Pm;function s(n,s){let c,l={...(0,N.useContext)(tm),...n,layoutId:Wm(n)},{isStatic:u}=l,d=ym(n),f=o(n,u);if(!u&&typeof window<`u`){Gm(l,r);let t=Km(l);c=t.MeasureLayout,d.visualElement=Bm(e,f,l,i,t.ProjectionNode,a)}return(0,P.jsxs)(_m.Provider,{value:d,children:[c&&d.visualElement?(0,P.jsx)(c,{visualElement:d.visualElement,...l}):null,Am(e,n,Lm(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,N.forwardRef)(s);return c[Im]=e,c}
function Wm({layoutId:e}){let t=(0,N.useContext)(ja).id;return t&&e!==void 0?t+`-`+e:e}
function Gm(e,t){(0,N.useContext)(rm).strict}
function Km(e){let{drag:t,layout:n}=sm();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}
function qm(e,t){if(typeof Proxy>`u`)return Um;let n=new Map,r=(n,r)=>Um(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Um(a,void 0,e,t)),n.get(a))})}
var Jm=(e,t)=>t.isSVG??km(e)?new hf(t):new af(t,{allowProjection:e!==N.Fragment}),Ym=class extends Td{constructor(e){super(e),e.animationState||=Sf(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ld(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Xm=0,Zm={animation:{Feature:Ym},exit:{Feature:class extends Td{constructor(){super(...arguments),this.id=Xm++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Rl(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};
function Qm(e){return{point:{x:e.pageX,y:e.pageY}}}
var $m=e=>t=>Ou(t)&&e(t,Qm(t));
function eh(e,t,n,r){return fp(e,t,$m(n),r)}
var th=({current:e})=>e?e.ownerDocument.defaultView:null,nh=(e,t)=>Math.abs(e-t);
function rh(e,t){let n=nh(e.x,t.x),r=nh(e.y,t.y);return Math.sqrt(n**2+r**2)}
var ih=new Set([`auto`,`scroll`]),ah=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=oh(this.lastRawMoveEventInfo,this.transformPagePoint));let e=ch(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=rh(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=So;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=oh(t,this.transformPagePoint),z.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=ch(e.type===`pointercancel`?this.lastMoveEventInfo:oh(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ou(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=oh(Qm(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=So;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,ch(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=Wa(eh(this.contextWindow,`pointermove`,this.handlePointerMove,d),eh(this.contextWindow,`pointerup`,this.handlePointerUp,d),eh(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ih.has(e.overflowX)||ih.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),z.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),xo(this.updatePoint)}};
function oh(e,t){return t?{point:t(e.point)}:e}
function sh(e,t){return{x:e.x-t.x,y:e.y-t.y}}
function ch({point:e},t){return{point:e,delta:sh(e,uh(t)),offset:sh(e,lh(t)),velocity:dh(t,.1)}}
function lh(e){return e[0]}
function uh(e){return e[e.length-1]}
function dh(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=uh(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>qa(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>qa(t)*2&&(r=e[1]);let a=Ja(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}
function fh(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?V(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?V(n,e,r.max):Math.min(e,n)),e}
function ph(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}
function mh(e,{top:t,left:n,bottom:r,right:i}){return{x:ph(e.x,n,i),y:ph(e.y,t,r)}}
function hh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}
function gh(e,t){return{x:hh(e.x,t.x),y:hh(e.y,t.y)}}
function _h(e,t){let n=.5,r=Nf(e),i=Nf(t);return i>r?n=Ga(t.min,t.max-r,e.min):r>i&&(n=Ga(e.min,e.max-i,t.min)),La(0,1,n)}
function vh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}
var yh=.35;
function bh(e=yh){return e===!1?e=0:e===!0&&(e=yh),{x:xh(e,`left`,`right`),y:xh(e,`top`,`bottom`)}}
function xh(e,t,n){return{min:Sh(e,t),max:Sh(e,n)}}
function Sh(e,t){return typeof e==`number`?e:e[t]||0}
var Ch=new WeakMap,wh=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=sd(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Qm(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Cu(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tp(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Yo.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Nf(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&z.update(()=>i(e,t),!1,!0),G(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Oh(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&z.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new ah(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:th(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&z.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Dh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=fh(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&zm(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=mh(n.layoutBox,e):this.constraints=!1,this.elastic=bh(t),r!==this.constraints&&!zm(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&tp(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=vh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!zm(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Gd(n,r.root,this.visualElement.getTransformPagePoint()),a=gh(r.layout.layoutBox,i);if(t){let e=t(Dd(a));this.hasMutatedConstraints=!!e,e&&(a=Ed(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=tp(o=>{if(!Dh(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return G(this.visualElement,e),n.start(Ml(e,n,0,t,this.visualElement,!1))}stopAnimation(){tp(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){tp(t=>{let{drag:n}=this.getProps();if(!Dh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-V(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!zm(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};tp(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=_h({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),tp(t=>{if(!Dh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(V(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ch.set(this.visualElement,this);let e=this.visualElement.current,t=eh(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Mu(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();zm(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Eh(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),z.read(r);let o=fp(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(tp(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=yh,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};
function Th(e){let t=!0;return()=>{if(t){t=!1;return}e()}}
function Eh(e,t,n){let r=$u(e,Th(n)),i=$u(t,Th(n));return()=>{r(),i()}}
function Dh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}
function Oh(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}
var kh=class extends Td{constructor(e){super(e),this.removeGroupControls=Ua,this.removeListeners=Ua,this.controls=new wh(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ua}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Ah=e=>(t,n)=>{e&&z.update(()=>e(t,n),!1,!0)},jh=class extends Td{constructor(){super(...arguments),this.removePointerDownListener=Ua}onPointerDown(e){this.session=new ah(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:th(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ah(e),onStart:Ah(t),onMove:Ah(n),onEnd:(e,t)=>{delete this.session,r&&z.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=eh(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Mh=!1,Nh=class extends N.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Mh&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vp.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Mh=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||z.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),yu.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Mh=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};
function Ph(e){let[t,n]=nm(),r=(0,N.useContext)(ja);return(0,P.jsx)(Nh,{...e,layoutGroup:r,switchLayoutGroup:(0,N.useContext)(Rm),isPresent:t,safeToRemove:n})}
var Fh={pan:{Feature:jh},drag:{Feature:kh,ProjectionNode:em,MeasureLayout:Ph}};
function Ih(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&z.postRender(()=>i(t,Qm(t)))}
var Lh=class extends Td{mount(){let{current:e}=this.node;e&&(this.unmount=Eu(e,(e,t)=>(Ih(this.node,t,`Start`),e=>Ih(this.node,e,`End`))))}unmount(){}},Rh=class extends Td{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Wa(fp(this.node.current,`focus`,()=>this.onFocus()),fp(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};
function zh(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&z.postRender(()=>i(t,Qm(t)))}
var Bh=class extends Td{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=zu(e,(e,t)=>(zh(this.node,t,`Start`),(e,{success:t})=>zh(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Vh=new WeakMap,Hh=new WeakMap,Uh=e=>{let t=Vh.get(e.target);t&&t(e)},Wh=e=>{e.forEach(Uh)};
function Gh({root:e,...t}){let n=e||document;Hh.has(n)||Hh.set(n,{});let r=Hh.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Wh,{root:e,...t})),r[i]}
function Kh(e,t,n){let r=Gh(t);return Vh.set(e,n),r.observe(e),()=>{Vh.delete(e),r.unobserve(e)}}
var qh={some:0,all:1},Jh=class extends Td{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:qh[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Kh(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Yh(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};
function Yh({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}
var Xh = {inView:{Feature:Jh},tap:{Feature:Bh},focus:{Feature:Rh},hover:{Feature:Lh}};
var Zh = {layout:{ProjectionNode:em,MeasureLayout:Ph}};
var Qh = qm({...Zm,...Xh,...Fh,...Zh},Jm);

// 10-game-constants-assets.js — Ses motoru (X), fizik sabitleri, renkler, poz listesi, sprite/asset yükleyiciler, karakter tanımları.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var X = new (class {
  ctx = null;
  master = null;
  noiseBuf = null;
  ensure() {
    try {
      if (!this.ctx) {
        let e = window.AudioContext ?? window.webkitAudioContext;
        ((this.ctx = new e()),
          (this.master = this.ctx.createGain()),
          (this.master.gain.value = (0.4 * AF_S.vol) / 100),
          this.master.connect(this.ctx.destination));
        let t = Math.floor(this.ctx.sampleRate * 0.6);
        this.noiseBuf = this.ctx.createBuffer(1, t, this.ctx.sampleRate);
        let n = this.noiseBuf.getChannelData(0);
        for (let e = 0; e < t; e++) n[e] = Math.random() * 2 - 1;
      }
      this.ctx.state === `suspended` && this.ctx.resume();
    } catch {}
  }
  tone(e, t, n, r, i, a = 0) {
    try {
      if (!this.ctx || !this.master) return;
      let o = this.ctx.currentTime + a,
        s = this.ctx.createOscillator(),
        c = this.ctx.createGain();
      ((s.type = e),
        s.frequency.setValueAtTime(Math.max(1, t), o),
        s.frequency.exponentialRampToValueAtTime(Math.max(1, n), o + r),
        c.gain.setValueAtTime(i, o),
        c.gain.exponentialRampToValueAtTime(1e-4, o + r),
        s.connect(c).connect(this.master),
        s.start(o),
        s.stop(o + r + 0.02));
    } catch {}
  }
  noise(e, t, n = 0, r = 2e4, i = 0) {
    try {
      if (!this.ctx || !this.master || !this.noiseBuf) return;
      let a = this.ctx.currentTime + i,
        o = this.ctx.createBufferSource();
      o.buffer = this.noiseBuf;
      let s = this.ctx.createGain();
      (s.gain.setValueAtTime(t, a), s.gain.exponentialRampToValueAtTime(1e-4, a + e));
      let c = o;
      if (n > 0) {
        let e = this.ctx.createBiquadFilter();
        ((e.type = `highpass`), (e.frequency.value = n), c.connect(e), (c = e));
      }
      if (r < 2e4) {
        let e = this.ctx.createBiquadFilter();
        ((e.type = `lowpass`), (e.frequency.value = r), c.connect(e), (c = e));
      }
      (c.connect(s).connect(this.master), o.start(a), o.stop(a + e + 0.02));
    } catch {}
  }
  uiClick() {
    this.tone(`square`, 880, 660, 0.06, 0.12);
  }
  jump() {
    this.tone(`sine`, 180, 430, 0.16, 0.16);
  }
  land() {
    (this.tone(`sine`, 95, 55, 0.09, 0.2), this.noise(0.05, 0.06, 0, 900));
  }
  swing() {
    this.noise(0.06, 0.1, 1400);
  }
  hitLight() {
    (this.tone(`square`, 240, 70, 0.09, 0.22), this.noise(0.07, 0.16, 0, 5e3));
  }
  hitHeavy() {
    (this.tone(`square`, 130, 45, 0.2, 0.3), this.noise(0.16, 0.26, 0, 3200));
  }
  meterFull() {
    (this.tone(`square`, 880, 880, 0.07, 0.12), this.tone(`square`, 1320, 1320, 0.09, 0.12, 0.08));
  }
  fireball() {
    (this.tone(`sawtooth`, 95, 40, 0.55, 0.3),
      this.noise(0.45, 0.22, 0, 1800),
      this.tone(`square`, 55, 30, 0.4, 0.18, 0.05));
  }
  flashWave() {
    (this.noise(0.04, 0.3, 3500),
      this.tone(`sine`, 2600, 1700, 0.5, 0.14, 0.02),
      this.tone(`sine`, 120, 60, 0.4, 0.22, 0.02));
  }
  shutter(e = 0) {
    (this.noise(0.03, 0.22, 4e3, 2e4, e), this.tone(`square`, 1800, 900, 0.04, 0.08, e));
  }
  carRev() {
    (this.tone(`sawtooth`, 70, 260, 0.45, 0.2), this.tone(`square`, 140, 420, 0.35, 0.08, 0.05));
  }
  ringChime() {
    [988, 1319, 1568, 1976].forEach((e, t) => this.tone(`sine`, e, e, 0.25, 0.1, 0.15 + t * 0.06));
  }
  ko() {
    (this.tone(`sawtooth`, 220, 55, 1.1, 0.3),
      this.tone(`sawtooth`, 165, 40, 1.2, 0.24, 0.05),
      this.noise(0.5, 0.3, 0, 1400));
  }
  roundStart() {
    (this.tone(`sine`, 330, 330, 0.5, 0.2), this.tone(`sine`, 495, 495, 0.55, 0.16, 0.02));
  }
})();

var $h = 1376;

var eg = 2900;

var tg = 1.85;

var ng = 0.82;

var rg = -1300;

var ig = 1e3 / 60;

var ag = `UMUT`;

var og = `SUDEM`;

var sg = 250 * 0.91;

var cg = `#ff2a5f`;

var lg = `#ffffff`;

var ug = `#00f0ff`;

var dg = `#ffd24a`;

var fg = `#ffd700`;

var pg = (e, t, n) => Math.max(t, Math.min(n, e));

var mg = [
  `idle`,
  `crouch`,
  `punch`,
  `kick`,
  `hurt`,
  `jump`,
  `ult`,
  `run`,
  `guard`,
  `guardlow`,
  `cast`,
];

var hg = {
  idle: 1,
  punch: 0.97,
  kick: 0.98,
  hurt: 0.95,
  jump: 0.84,
  ult: 0.95,
  crouch: 0.71,
  run: 1,
  guard: 0.98,
  guardlow: 0.78,
  cast: 0.97,
};

function gg(e) {
  return window.__ANKARA_ASSETS__?.[e] ?? e;
}

var _g = { p1: `/assets/fotograf_canavari.png`, p2: `/assets/mcqueen.png` },
  vg = `/assets/ankara_map.png`,
  yg = (e, t) => `/assets/frames/${e}_${t}.png`;

function bg(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => t(r)), (r.onerror = () => n(Error(`missing asset: ${e}`))), (r.src = gg(e)));
  });
}

function xg(e, t, n, r, r2) {
  let i = document.createElement(`canvas`);
  ((i.width = t), (i.height = n));
  let a = i.getContext(`2d`, { willReadFrequently: !0 });
  a.drawImage(e, 0, 0);
  let o = a.getImageData(0, 0, t, n).data,
    s = (e, n) => o[(n * t + e) * 4 + 3] > 60,
    c = t,
    l = n,
    u = -1,
    d = -1;
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++)
      s(n, e) && (n < c && (c = n), n > u && (u = n), e < l && (l = e), e > d && (d = e));
  u < 0 && ((c = 0), (l = 0), (u = t - 1), (d = n - 1));
  let f = d - l + 1,
    p = Array(t).fill(0),
    m = 0,
    h = l + Math.floor(f * 0.45);
  for (let e = l; e <= h; e++) for (let t = c; t <= u; t++) s(t, e) && (p[t]++, m++);
  let g = 0,
    _ = (c + u) / 2;
  for (let e = c; e <= u; e++)
    if (((g += p[e]), g >= m / 2)) {
      _ = e;
      break;
    }
  let v = 0,
    y = 0;
  for (let e = Math.max(c, u - 8); e <= u; e++)
    for (let t = l; t <= d; t++) s(e, t) && ((v += t), y++);
  let b = y ? v / y : l + f * 0.3,
    x = r / f;
  if (r2) {
    let e2 = document.createElement(`canvas`);
    ((e2.width = t), (e2.height = n));
    let t2 = e2.getContext(`2d`);
    ((t2.filter = `hue-rotate(165deg) saturate(1.15)`), t2.drawImage(e, 0, 0), (e = e2));
  }
  return {
    img: e,
    w: t,
    h: n,
    bx: c,
    by: l,
    bw: u - c + 1,
    bh: f,
    ax: _,
    scale: x,
    visibleH: f * x,
    tipX: (u - _) * x,
    tipY: (d - b) * x,
  };
}

function Sg(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 240), (n.height = 320));
  let r = n.getContext(`2d`);
  ((r.strokeStyle = e), (r.lineWidth = 10), (r.lineCap = `round`));
  let i = t === `crouch` ? 110 : 0,
    a = (e) => {
      (r.beginPath(), r.moveTo(e[0], e[1]));
      for (let t = 2; t < e.length; t += 2) r.lineTo(e[t], e[t + 1]);
      r.stroke();
    };
  return (
    r.beginPath(),
    r.arc(110, 50 + i, 24, 0, Math.PI * 2),
    r.stroke(),
    a([110, 76 + i, 106, 180]),
    a(
      t === `punch` || t === `ult`
        ? [108, 110 + i, 230, 110 + i]
        : [108, 104 + i, 150, 130 + i, 168, 106 + i],
    ),
    a(t === `kick` ? [106, 180, 230, 180] : [106, 180, 150, 240 + i * 0.2, 140, 310]),
    a([106, 180, 70, 240 + i * 0.2, 78, 310]),
    n
  );
}

// Takla kareleri (back0-15) idle'dan daha iri çizilmişti (kafa ~1,65×). Çizim ölçeği bu çarpanla kafa boyunda eşitlenir.
var AF_BACK_SIZE = 0.62;

async function Cg(e, t, n, r2, same) {
  let r = await Promise.all(
      mg.map((t) =>
        (t === `run` && !AF_char(e).run) ||
        ((t === `guard` || t === `guardlow`) && !AF_char(e).guard) ||
        (t === `cast` && !AF_char(e).proj)
          ? Promise.resolve(null)
          : bg(yg(e, t)).catch(() => null),
      ),
    ),
    i = {},
    idleBh = 0;
  mg.forEach((e, a) => {
    let o = r[a];
    if ((e === `run` || e === `guard` || e === `guardlow` || e === `cast`) && !o) return;
    let s = o ?? Sg(n, e),
      c = o ? o.naturalWidth : 240,
      l = o ? o.naturalHeight : 320,
      rr = t * (hg[e] || 1);
    if (same && o) {
      let q = xg(s, c, l, 1, !1);
      e === `idle` && (idleBh = q.bh);
      rr = (t * q.bh) / idleBh;
    }
    i[e] = xg(s, c, l, rr, r2);
  });
  let rollFrames = null,
    rollScale = 1,
    rollPad = 0,
    backFrames = null,
    backScale = 1,
    backJumpH = 0,
    sweepFrames = null,
    sweepScale = 1,
    sweepAnchorX = 0;
  if (AF_char(e).roll) {
    let ri = await Promise.all(
      [0, 1, 2, 3, 4, 5, 6, 7].map((k) => bg(`/assets/frames/${e}_roll${k}.png`).catch(() => null)),
    );
    if (ri[0]) {
      ((rollFrames = ri), (rollScale = i.idle.visibleH / 310), (rollPad = 2));
    }
    let rb = await Promise.all(
      Array.from({ length: 16 }).map((_, k) =>
        bg(`/assets/frames/${e}_back${k}.png`).catch(() => null),
      ),
    );
    if (rb[0] && rb.every(Boolean)) {
      ((backFrames = rb),
        (backScale = (i.idle.visibleH / 286) * AF_BACK_SIZE),
        (backJumpH = i.idle.visibleH * 0.82));
    }
    let sw = await Promise.all(
      Array.from({ length: 12 }).map((_, k) =>
        bg(`/assets/frames/${e}_sweep${k}.png`).catch(() => null),
      ),
    );
    if (sw[0] && sw.every(Boolean)) {
      ((sweepFrames = sw), (sweepScale = i.idle.scale * 1.75), (sweepAnchorX = 190));
    }
  }
  // Çok kareli animasyonlar: <id>_punch0..N, _kick0..N, _run0..N (en az 2 kare varsa kullanılır).
  // Ölçek tek karelerle aynı (idle'a göre); vuruş kutusu yine tek "punch"/"kick" (tepe) karesinden hesaplanır.
  let seq = {};
  for (let p of [`punch`, `kick`, `run`]) {
    // yalnızca asset manifestinde olan kareleri iste (olmayanı istemek konsola 404 düşürür)
    let im = await Promise.all(
      Array.from({ length: 6 }).map((_, k) => {
        let yol = `/assets/frames/${e}_${p}${k}.png`;
        return window.__ANKARA_ASSETS__ && !(yol in window.__ANKARA_ASSETS__)
          ? null
          : bg(yol).catch(() => null);
      }),
    );
    let ok = [];
    for (let o of im) {
      if (!o) break;
      ok.push(o);
    }
    if (ok.length < 2) continue;
    seq[p] = ok.map((o) => {
      let w = o.naturalWidth,
        h = o.naturalHeight,
        rr = t * (hg[p] || 1);
      if (same && idleBh) rr = (t * xg(o, w, h, 1, !1).bh) / idleBh;
      return xg(o, w, h, rr, r2);
    });
    seq[p].peak = seq[p].reduce((b, f, k, a) => (f.bw > a[b].bw ? k : b), 0);
  }
  // dikey basıklık (yalnız eğilme pozları): çizimde ve vuruş/boy ölçülerinde birlikte uygulanır
  let sy = AF_char(e).crouchSy;
  if (sy)
    for (let p of [`crouch`, `guardlow`])
      i[p] && ((i[p].sy = sy), (i[p].visibleH *= sy), (i[p].tipY *= sy));
  let a = i.idle;
  return {
    frames: i,
    seq,
    halfW: Math.max(30, Math.min(58, a.bw * a.scale * 0.3)),
    hasRun: !!r[mg.indexOf(`run`)],
    rollFrames,
    rollScale,
    rollPad,
    backFrames,
    backScale,
    backJumpH,
    sweepFrames,
    sweepScale,
    sweepAnchorX,
  };
}

function wg() {
  let e = document.createElement(`canvas`);
  ((e.width = $h), (e.height = 768));
  let t = e.getContext(`2d`),
    n = t.createLinearGradient(0, 0, 0, 768);
  return (
    n.addColorStop(0, `#05060f`),
    n.addColorStop(1, `#1a2140`),
    (t.fillStyle = n),
    t.fillRect(0, 0, $h, 768),
    e
  );
}

// UMUT'a özel takla / yer taklası / süpürme tekme: yeni tasarımda karesi yok, GEÇİCİ olarak kapalı.
// Kod yerinde duruyor; true yapınca (eski karelerle) geri gelir.
var AF_UMUT_OZEL = !1;

var AF_CHARS = {
  umut: {
    id: `umut`,
    name: `UMUT`,
    color: `#ff2a5f`,
    color2: `#ff7aa8`,
    scale: 250,
    same: !0,
    guard: !0,
    roll: AF_UMUT_OZEL,
    // ulti mermilerinin çıkış noktası (idle boyuna oran): pozdaki en ön nokta ayakkabı olduğu için elle
    ultAt: { x: 0.42, y: 0.62 },
    tag: `Fotoğrafçı · Hızlı yumruklar, dengeli`,
    ultName: `FLAŞ PATLAMASI`,
    ultHint: `flaş + uçan fotoğraflar`,
    img: () => gg(_g.p1),
    stats: [
      [`HIZ`, 0.75],
      [`GÜÇ`, 0.8],
      [`MENZİL`, 0.85],
    ],
  },
  sudem: {
    id: `sudem`,
    name: `SUDEM`,
    color: `#00f0ff`,
    color2: `#2dd4bf`,
    scale: sg,
    same: !0,
    guard: !0,
    proj: !0, // F: sihirli yüzük (uzak menzil)
    crouchSy: 0.88, // eğilme pozu yüksek çizilmiş: dikeyde %88 (≈ diğerlerinin eğilme boyu)
    tag: `McQueen hayranı · Çevik tekmeler, uzaktan yüzük`,
    ultName: `KA-ÇOV!`,
    ultHint: `yarış arabası`,
    img: () => gg(_g.p2),
    stats: [
      [`HIZ`, 0.9],
      [`GÜÇ`, 0.65],
      [`MENZİL`, 0.8],
    ],
  },
  metehan: {
    id: `metehan`,
    name: `METEHAN`,
    color: `#ffd21f`,
    color2: `#fff08a`,
    scale: 232,
    same: !0,
    guard: !0,
    run: !0,
    // reach: kısa kollar için vuruş kutusu çarpanı (genişlik) ve öne kaydırma (px)
    mod: { spd: 0.78, dmg: 1.3, sup: 1.25, jump: 1.03, kb: 1.15, hp: 175, reach: 1.15, reachX: 12 },
    tag: `Müzisyen · Tank: hantal ama çok sert vuruyor`,
    ultName: `YILDIRIM NOTALARI`,
    ultHint: `gitardan yıldırımlı notalar`,
    img: () => gg(`/assets/metehan.png`),
    stats: [
      [`HIZ`, 0.45],
      [`GÜÇ`, 1],
      [`MENZİL`, 0.7],
    ],
  },
  ahmet: {
    id: `ahmet`,
    name: `AHMET`,
    color: `#ff7a1a`,
    color2: `#ffb36b`,
    scale: 252,
    same: !0,
    guard: !0,
    tag: `Motorcu · Sakin, güçlü ve dengeli`,
    ultName: `GAZA BAS!`,
    ultHint: `arkadan gelen motor`,
    img: () => gg(`/assets/ahmet.png`),
    stats: [
      [`HIZ`, 0.7],
      [`GÜÇ`, 0.85],
      [`MENZİL`, 0.8],
    ],
  },
};

function AF_char(e) {
  return AF_CHARS[e] ?? AF_CHARS.umut;
}

function AF_def(e, d) {
  const m = e.mod;
  return m && m.sup !== 1
    ? { ...d, startup: Math.round(d.startup * m.sup), recovery: Math.round(d.recovery * m.sup) }
    : d;
}

function AF_spd(e) {
  return e.mod ? e.mod.spd : 1;
}

// 11-game-effects-notes.js — Ek ses efektleri, şimşek ve müzik notası efektleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

X.zap = function () {
  (this.noise(0.18, 0.3, 1800),
    this.tone(`sawtooth`, 1400, 180, 0.22, 0.16),
    this.tone(`square`, 90, 40, 0.25, 0.2, 0.02),
    this.tone(`sine`, 880, 1320, 0.12, 0.1, 0.05));
};

X.zapCast = function () {
  (this.noise(0.08, 0.3, 3000),
    this.tone(`sine`, 2200, 300, 0.45, 0.16),
    this.tone(`square`, 110, 55, 0.4, 0.22),
    [392, 523, 659].forEach((e, t) => this.tone(`triangle`, e, e, 0.2, 0.14, 0.12 + t * 0.19)));
};

function AF_rnd(e) {
  e = Math.sin(e * 12.9898) * 43758.5453;
  return e - Math.floor(e);
}

function AF_bolt(e, x0, y0, ang, len, seed, w) {
  let n = 5,
    x = x0,
    y = y0;
  (e.beginPath(), e.moveTo(x, y));
  for (let i = 1; i <= n; i++) {
    const a = ang + (AF_rnd(seed + i * 3.1) - 0.5) * 1.6,
      l = len / n;
    ((x += Math.cos(a) * l), (y += Math.sin(a) * l), e.lineTo(x, y));
  }
  ((e.lineWidth = w), e.stroke());
}

var AF_noteG = {};

function AF_noteGlyph(ci, shape) {
  const k = ci + `_` + shape;
  if (AF_noteG[k]) return AF_noteG[k];
  const NC = [`#4fd6ff`, `#c06cff`, `#6f9eff`][ci % 3],
    w = 22,
    h = 26,
    cv = document.createElement(`canvas`);
  ((cv.width = w), (cv.height = h));
  const x = cv.getContext(`2d`);
  ((x.lineJoin = `round`),
    (x.lineCap = `round`),
    (x.strokeStyle = `#160f44`),
    (x.lineWidth = 2.6),
    (x.fillStyle = NC));
  const nt = (hx, hy, st) => {
    (x.beginPath(),
      x.ellipse(hx, hy, 3.7, 2.8, -0.4, 0, Math.PI * 2),
      x.fill(),
      x.stroke(),
      x.beginPath(),
      x.rect(hx + 2, hy - st, 1.9, st),
      x.fill(),
      x.stroke());
  };
  if (shape === 1) {
    (nt(6.5, 18.5, 12.5),
      nt(14, 15.5, 12.5),
      x.beginPath(),
      x.moveTo(7.6, 4.5),
      x.lineTo(16.2, 3),
      x.lineTo(16.2, 6.3),
      x.lineTo(7.6, 7.8),
      x.closePath(),
      x.fill(),
      x.stroke());
  } else {
    (nt(9, 18.5, 13.5),
      x.beginPath(),
      x.moveTo(10.8, 4),
      x.quadraticCurveTo(17, 6, 15.6, 10.6),
      x.quadraticCurveTo(13.9, 6.6, 10.8, 6.6),
      x.closePath(),
      x.fill(),
      x.stroke());
  }
  // highlight top of fill
  ((x.globalCompositeOperation = `source-atop`),
    (x.fillStyle = `rgba(255,255,255,.4)`),
    x.fillRect(0, 0, w, 11),
    (x.globalCompositeOperation = `source-over`));
  const id = x.getImageData(0, 0, w, h),
    d = id.data;
  for (let m = 0; m < d.length; m += 4) d[m + 3] = d[m + 3] > 120 ? 255 : 0;
  x.putImageData(id, 0, 0);
  return (AF_noteG[k] = cv);
}

function AF_drawNote(e, t) {
  const dir = Math.sign(t.vx) || 1,
    ci = (t.col || 0) % 3,
    seed = Math.floor(t.t / 45) * 17 + ci * 101;
  const P = [
    {
      c0: `rgba(90,216,255,.7)`,
      c1: `rgba(120,120,255,.26)`,
      n: `#46d8ff`,
      b: `rgba(120,210,255,.55)`,
    },
    {
      c0: `rgba(196,120,255,.7)`,
      c1: `rgba(255,120,220,.26)`,
      n: `#c06cff`,
      b: `rgba(210,130,255,.55)`,
    },
    {
      c0: `rgba(110,160,255,.7)`,
      c1: `rgba(150,100,255,.26)`,
      n: `#6a9bff`,
      b: `rgba(140,170,255,.55)`,
    },
  ][ci];
  const BC = [`#5ad8ff`, `#c06cff`, `#7aa0ff`, `#ff9ae8`];
  e.scale(dir * 1.3, 1.3);
  e.globalCompositeOperation = `lighter`;
  let g = e.createRadialGradient(0, 0, 4, 0, 0, 86);
  (g.addColorStop(0, P.c0),
    g.addColorStop(0.5, P.c1),
    g.addColorStop(1, `rgba(120,120,255,0)`),
    (e.fillStyle = g),
    e.beginPath(),
    e.arc(0, 0, 86, 0, Math.PI * 2),
    e.fill());
  ((e.lineCap = `round`), (e.lineJoin = `round`));
  const bolts = [];
  for (let b = 0; b < 8; b++) {
    const ang = AF_rnd(seed + b * 5.7) * Math.PI * 2,
      back = b < 3;
    bolts.push([
      back ? Math.PI + (AF_rnd(seed + b) - 0.5) * 0.7 : ang,
      back ? 70 + AF_rnd(seed + b * 2) * 60 : 34 + AF_rnd(seed + b * 3) * 34,
      seed + b * 9,
    ]);
  }
  ((e.strokeStyle = P.b), bolts.forEach((b) => AF_bolt(e, 0, 0, b[0], b[1], b[2], 7)));
  bolts.forEach((b, bi) => {
    ((e.strokeStyle = BC[bi % 4]), AF_bolt(e, 0, 0, b[0], b[1], b[2], 2.4));
  });
  e.globalCompositeOperation = `source-over`;
  const G = AF_noteGlyph(ci, t.rot === 1 ? 1 : 0),
    ps = 2;
  ((e.imageSmoothingEnabled = !1), (e.shadowColor = P.n), (e.shadowBlur = 7));
  e.drawImage(
    G,
    Math.round((-G.width * ps) / 2),
    Math.round((-G.height * ps) / 2),
    G.width * ps,
    G.height * ps,
  );
  e.shadowBlur = 0;
}

// 12-game-sprite-cache-menu.js — Karakter sprite önbelleği ve ana menü seçenekleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var AF_sprC = {},
  AF_bgC = null;

function AF_loadChar(e, t) {
  let n = e + (t ? `#m` : ``);
  return (AF_sprC[n] ||= Cg(
    AF_char(e).id,
    AF_char(e).scale,
    AF_char(e).color,
    t,
    !!AF_char(e).same,
  ));
}

function Eg(e, t) {
  return Dg(e, t);
}

// Ulti / mermi görselleri (assets/fx). Yüklenemezse eski kodla çizilen hâli kullanılır.
var AF_FX = {},
  AF_FX_LIST = [
    `ahmet_motor`,
    `sudem_araba`,
    `sudem_yuzuk`,
    `metehan_nota0`,
    `metehan_nota1`,
    `metehan_nota2`,
    `metehan_nota3`,
    `umut_foto0`,
    `umut_foto1`,
    `umut_foto2`,
  ],
  AF_fxP = null;

function AF_loadFx() {
  return (AF_fxP ||= Promise.all(
    AF_FX_LIST.map((k) =>
      bg(`/assets/fx/${k}.png`)
        .then((im) => (AF_FX[k] = im))
        .catch(() => null),
    ),
  ));
}

async function Dg(e = `umut`, t = `sudem`) {
  AF_bgC ||= bg(vg).catch(() => null);
  let [n, r, i] = await Promise.all([AF_loadChar(e, !1), AF_loadChar(t, e === t), AF_bgC, AF_loadFx()]);
  return { p1: n, p2: r, bg: i ?? wg() };
}

var Og = [
  { id: `bot`, label: `1VSBOT`, hint: `Karakterini ve rakip botu kendin seç` },
  { id: `2p`, label: `1VS1`, hint: `Tek klavyede arkadaşınla kapış` },
  { id: `settings`, label: `AYARLAR`, hint: `Ses, raunt, hasar ve kontrolleri düzenle` },
  { id: `quit`, label: `ÇIKIŞ`, hint: `Oyunu kapat ve masaüstüne dön` },
];

// 20-ui-settings-screen.js — AYARLAR ekranı (React bileşeni).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_Settings({ onClose, inGame }) {
  const [, bump] = (0, N.useState)(0),
    [tab, setTab] = (0, N.useState)(0),
    [cap, setCap] = (0, N.useState)(null);
  const up = () => bump((v) => v + 1);
  (0, N.useEffect)(() => {
    AF_modal++;
    return () => {
      AF_modal--;
    };
  }, []);
  (0, N.useEffect)(() => {
    const h = (e) => {
      if (e.code === `Tab`) return;
      e.stopImmediatePropagation();
      if (cap) {
        e.preventDefault();
        if (e.code === `Escape`) {
          setCap(null);
          return;
        }
        if (AF_BAD.has(e.code) || e.repeat) return;
        AF_rebind(cap.p, cap.a, e.code);
        setCap(null);
        up();
        X.uiClick();
        return;
      }
      if (e.code === `Escape`) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener(`keydown`, h, !0);
    return () => window.removeEventListener(`keydown`, h, !0);
  }, [cap, onClose]);
  const C = { bg: `#121124`, line: `#272744`, cy: `#00f0ff`, pk: `#ff2a5f`, mut: `#8b92b8` };
  const btn = (on, label, fn, key, col) =>
    (0, P.jsx)(
      `button`,
      {
        type: `button`,
        onClick: () => {
          X.ensure();
          X.uiClick();
          fn();
        },
        style: {
          padding: `6px 12px`,
          minWidth: 46,
          borderRadius: 6,
          border: `2px solid ${on ? col || C.cy : C.line}`,
          background: on ? `rgba(0,240,255,.16)` : `rgba(0,0,0,.35)`,
          color: on ? `#fff` : C.mut,
          fontWeight: 800,
          fontSize: 13,
          cursor: `pointer`,
          fontFamily: `inherit`,
          letterSpacing: `.04em`,
        },
        children: label,
      },
      key,
    );
  const row = (label, ctl, note) =>
    (0, P.jsxs)(
      `div`,
      {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          gap: 12,
          padding: `10px 0`,
          borderBottom: `1px solid ${C.line}`,
          flexWrap: `wrap`,
        },
        children: [
          (0, P.jsxs)(`div`, {
            style: { minWidth: 160 },
            children: [
              (0, P.jsx)(`div`, {
                style: { color: `#fff`, fontWeight: 700, fontSize: 14 },
                children: label,
              }),
              note &&
                (0, P.jsx)(`div`, {
                  style: { color: C.mut, fontSize: 11, marginTop: 2 },
                  children: note,
                }),
            ],
          }),
          (0, P.jsx)(`div`, {
            style: { display: `flex`, gap: 6, flexWrap: `wrap` },
            children: ctl,
          }),
        ],
      },
      label,
    );
  const onoff = (k, label, note) =>
    row(
      label,
      [
        btn(
          AF_S[k],
          `AÇIK`,
          () => {
            AF_set(k, !0);
            up();
          },
          `a`,
        ),
        btn(
          !AF_S[k],
          `KAPALI`,
          () => {
            AF_set(k, !1);
            up();
          },
          `b`,
          C.pk,
        ),
      ],
      note,
    );
  const pick = (k, label, vals, fmt, note) =>
    row(
      label,
      vals.map((v) =>
        btn(
          AF_S[k] === v,
          fmt(v),
          () => {
            AF_set(k, v);
            up();
          },
          String(v),
        ),
      ),
      note,
    );
  const NEW = inGame ? `Yeni maçta geçerli` : void 0;
  const tabs = [`SES`, `OYUN`, `GÖRÜNTÜ`, `KONTROLLER`];
  let body;
  if (tab === 0)
    body = [
      row(
        `Ses seviyesi`,
        [
          (0, P.jsx)(`input`, {
            key: `v`,
            type: `range`,
            min: 0,
            max: 100,
            step: 5,
            value: AF_S.vol,
            onChange: (e) => {
              AF_set(`vol`, +e.target.value);
              up();
            },
            onPointerUp: () => {
              X.ensure();
              X.hitLight();
            },
            "data-testid": `settings-volume`,
            style: { width: 200, accentColor: C.cy },
          }),
          (0, P.jsxs)(`span`, {
            key: `n`,
            style: { color: `#fff`, fontWeight: 800, minWidth: 46, textAlign: `right` },
            children: [`%${AF_S.vol}`],
          }),
        ],
        `Efekt sesleri (müzik yok)`,
      ),
      row(`Sessize al`, [
        btn(
          AF_S.vol === 0,
          `SESSİZ`,
          () => {
            AF_set(`vol`, 0);
            up();
          },
          `m`,
          C.pk,
        ),
        btn(
          AF_S.vol > 0,
          `SESLİ`,
          () => {
            AF_set(`vol`, AF_S.vol || 100);
            up();
          },
          `u`,
        ),
      ]),
    ];
  else if (tab === 1)
    body = [
      pick(
        `rounds`,
        `Raunt sayısı`,
        AF_OPT.rounds,
        (v) => `${v}`,
        (NEW ? NEW + ` · ` : ``) + `Kazanmak için ${(AF_S.rounds + 1) >> 1} raunt gerekir`,
      ),
      pick(
        `time`,
        `Raunt süresi`,
        AF_OPT.time,
        (v) => (v ? `${v} sn` : `∞`),
        NEW || `∞ = süre sınırı yok`,
      ),
      pick(`dmg`, `Hasar çarpanı`, AF_OPT.dmg, (v) => `×${v}`, `Vuruşların verdiği hasar`),
      onoff(`guard`, `Koruma (guard)`, `Kapatılırsa kimse koruma yapamaz`),
      onoff(`ult`, `Ulti (özel saldırı)`, `Kapatılırsa ulti barı dolmaz`),
    ];
  else if (tab === 2)
    body = [
      onoff(`shake`, `Ekran sarsıntısı`),
      onoff(`dmgnum`, `Hasar sayıları`, `Vuruşta uçan rakamlar`),
      onoff(`scan`, `Tarama çizgileri (CRT)`, `Retro ekran efekti`),
      onoff(`hints`, `Kontrol ipuçları`, `Savaş ekranının altındaki tuş çubuğu`),
      onoff(`boxes`, `Hitbox görünümü`, `F2 ile de açılıp kapanır`),
    ];
  else {
    const A = [
      [`left`, `Sol`],
      [`right`, `Sağ`],
      [`jump`, `Zıpla`],
      [`down`, `Eğil`],
      [`atk0`, `Yumruk`],
      [`atk1`, `Tekme`],
      [`atk2`, `Güçlü yumruk`],
      [`atk3`, `Ağır tekme`],
      [`guard`, `Koruma`],
      [`ult`, `Ulti`],
      [`proj`, `Sihirli Yüzük (SUDEM)`],
      [`sweep`, `Süpürme Tekme (şimdilik kapalı)`],
      [`dash`, `Koşu Çarpması (METEHAN)`],
      [`flip`, `Hava taklası (şimdilik kapalı)`],
    ];
    const col = (p, title, color) =>
      (0, P.jsxs)(`div`, {
        style: { flex: `1 1 260px`, minWidth: 240 },
        children: [
          (0, P.jsx)(`div`, {
            style: {
              color,
              fontWeight: 800,
              letterSpacing: `.12em`,
              fontSize: 12,
              marginBottom: 6,
            },
            children: title,
          }),
          A.map(([a, lab]) => {
            const on = cap && cap.p === p && cap.a === a;
            return (0, P.jsxs)(
              `div`,
              {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                  gap: 8,
                  padding: `4px 0`,
                },
                children: [
                  (0, P.jsx)(`span`, { style: { color: `#fff`, fontSize: 13 }, children: lab }),
                  (0, P.jsx)(`button`, {
                    type: `button`,
                    "data-testid": `bind-${p}-${a}`,
                    onClick: () => {
                      X.ensure();
                      X.uiClick();
                      setCap(on ? null : { p, a });
                    },
                    style: {
                      minWidth: 128,
                      padding: `5px 10px`,
                      borderRadius: 6,
                      border: `2px solid ${on ? `#ffd700` : C.line}`,
                      background: on ? `rgba(255,215,0,.14)` : `rgba(0,0,0,.4)`,
                      color: on ? `#ffd700` : `#e8eaff`,
                      fontWeight: 800,
                      fontSize: 12,
                      cursor: `pointer`,
                      fontFamily: `inherit`,
                    },
                    children: on ? `TUŞA BAS…` : AF_S.keys[p][a].map((c) => AF_kl(c)).join(` / `),
                  }),
                ],
              },
              a,
            );
          }),
        ],
      });
    body = [
      (0, P.jsxs)(`div`, {
        key: `k`,
        style: { display: `flex`, gap: 24, flexWrap: `wrap`, paddingTop: 8 },
        children: [col(`p1`, `OYUNCU 1`, C.pk), col(`p2`, `OYUNCU 2`, C.cy)],
      }),
      (0, P.jsx)(`p`, {
        key: `n`,
        style: { color: C.mut, fontSize: 11, marginTop: 12, lineHeight: 1.5 },
        children: `Bir tuşa tıkla, sonra yeni tuşa bas. Başka bir eyleme ait tuşu seçersen iki eylemin tuşu yer değiştirir. ESC iptal eder. Menü tuşları (Enter, ESC, P, F2, seçim ekranındaki Z / Num 1) sabittir.`,
      }),
      (0, P.jsx)(`div`, {
        key: `r`,
        style: { marginTop: 10 },
        children: btn(
          !1,
          `TUŞLARI VARSAYILANA DÖNDÜR`,
          () => {
            const k = AF_clone(AF_DEFKEYS);
            AF_S.keys = k;
            AF_save();
            AF_apply(`keys`);
            setCap(null);
            up();
          },
          `rk`,
        ),
      }),
    ];
  }
  return (0, P.jsx)(`div`, {
    "data-testid": `settings-modal`,
    style: {
      position: `fixed`,
      inset: 0,
      zIndex: 80,
      background: `rgba(0,0,0,.82)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: 12,
    },
    onClick: (e) => {
      e.target === e.currentTarget && onClose();
    },
    children: (0, P.jsxs)(`div`, {
      className: `font-monox`,
      style: {
        width: `min(760px,100%)`,
        maxHeight: `92vh`,
        overflow: `auto`,
        background: `rgba(18,17,36,.98)`,
        border: `1px solid ${C.cy}88`,
        borderRadius: 14,
        boxShadow: `0 0 40px rgba(0,240,255,.25)`,
        padding: `20px 22px`,
      },
      children: [
        (0, P.jsx)(`h2`, {
          className: `font-display`,
          style: {
            margin: 0,
            color: `#fff`,
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: `.14em`,
            textAlign: `center`,
          },
          children: `AYARLAR`,
        }),
        (0, P.jsx)(`div`, {
          style: {
            display: `flex`,
            gap: 6,
            justifyContent: `center`,
            margin: `14px 0 6px`,
            flexWrap: `wrap`,
          },
          children: tabs.map((t, i) =>
            (0, P.jsx)(
              `button`,
              {
                type: `button`,
                "data-testid": `settings-tab-${i}`,
                onClick: () => {
                  X.ensure();
                  X.uiClick();
                  setCap(null);
                  setTab(i);
                },
                style: {
                  padding: `7px 16px`,
                  borderRadius: 8,
                  border: `2px solid ${tab === i ? C.cy : C.line}`,
                  background: tab === i ? `rgba(0,240,255,.16)` : `transparent`,
                  color: tab === i ? `#fff` : C.mut,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: `.1em`,
                  cursor: `pointer`,
                  fontFamily: `inherit`,
                },
                children: t,
              },
              t,
            ),
          ),
        }),
        (0, P.jsx)(`div`, { style: { minHeight: 250 }, children: body }),
        (0, P.jsxs)(`div`, {
          style: {
            display: `flex`,
            justifyContent: `space-between`,
            gap: 10,
            marginTop: 16,
            flexWrap: `wrap`,
          },
          children: [
            btn(
              !1,
              `HEPSİNİ SIFIRLA`,
              () => {
                AF_resetAll();
                setCap(null);
                up();
              },
              `rs`,
              C.pk,
            ),
            (0, P.jsx)(`button`, {
              type: `button`,
              "data-testid": `settings-close`,
              onClick: () => {
                X.uiClick();
                onClose();
              },
              style: {
                padding: `9px 28px`,
                borderRadius: 8,
                border: `2px solid ${C.cy}`,
                background: C.cy,
                color: `#06070f`,
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: `.12em`,
                cursor: `pointer`,
                fontFamily: `inherit`,
              },
              children: `KAPAT`,
            }),
          ],
        }),
        (0, P.jsx)(`p`, {
          style: { textAlign: `center`, color: C.mut, fontSize: 10, marginTop: 10 },
          children: `Ayarlar bu tarayıcıda otomatik kaydedilir`,
        }),
      ],
    }),
  });
}

// 21-ui-title-screen.js — Başlık ekranı (React bileşeni).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function kg() {
  let e = wn(),
    [t, n] = (0, N.useState)(0),
    [afOpen, setAfOpen] = (0, N.useState)(!1),
    [bye, setBye] = (0, N.useState)(!1),
    [, afV] = (0, N.useState)(0),
    r = (0, N.useRef)(0);
  r.current = t;
  let i = (0, N.useRef)(!1),
    a = (0, N.useCallback)(
      (t) => {
        if (t === `settings`) {
          (X.ensure(), X.uiClick(), setAfOpen(!0));
          return;
        }
        if (t === `quit`) {
          (X.ensure(),
            X.uiClick(),
            setBye(!0),
            window.setTimeout(() => {
              try {
                window.close();
              } catch {}
            }, 80));
          return;
        }
        i.current ||
          ((i.current = !0),
          X.ensure(),
          X.uiClick(),
          window.setTimeout(() => e(`/select?mode=${t}`), 220));
      },
      [e],
    );
  return (
    (0, N.useEffect)(() => {
      let h = (k) => {
        if (afOpen) return;
        [`ArrowUp`, `KeyW`].includes(k.code)
          ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + Og.length - 1) % Og.length))
          : [`ArrowDown`, `KeyS`].includes(k.code)
            ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + 1) % Og.length))
            : k.code === `Enter` || k.code === `Space`
              ? (k.preventDefault(), a(Og[r.current].id))
              : k.code === `Digit1` || k.code === `Numpad1`
                ? a(`bot`)
                : k.code === `Digit2` || k.code === `Numpad2`
                  ? a(`2p`)
                  : k.code === `Digit3` || k.code === `Numpad3`
                    ? a(`settings`)
                    : (k.code === `Digit4` || k.code === `Numpad4`) && a(`quit`);
      };
      return (
        window.addEventListener(`keydown`, h),
        () => window.removeEventListener(`keydown`, h)
      );
    }, [a, afOpen]),
    (0, P.jsxs)(`div`, {
      "data-testid": `title-screen`,
      className: `scanlines relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#06070f]`,
      children: [
        afOpen &&
          (0, P.jsx)(AF_Settings, {
            onClose: () => {
              (setAfOpen(!1), afV((v) => v + 1));
            },
          }),
        (0, P.jsx)(`img`, {
          src: gg(`/assets/title_bg.png`),
          alt: ``,
          onError: (e) => (e.currentTarget.style.display = `none`),
          style: {
            position: `absolute`,
            inset: 0,
            width: `100%`,
            height: `100%`,
            objectFit: `cover`,
            pointerEvents: `none`,
          },
        }),
        (0, P.jsx)(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            pointerEvents: `none`,
            background: `radial-gradient(ellipse at 50% 40%, rgba(4,6,15,.28), rgba(4,6,15,.86))`,
          },
        }),
        (0, P.jsxs)(Qh.div, {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: `relative z-10 flex flex-col items-center px-6 text-center`,
          children: [
            (0, P.jsx)(`h1`, {
              className: `anim-flicker neon-cyan font-display text-6xl font-black leading-none tracking-tight text-white sm:text-8xl`,
              children: `ÇINAR`,
            }),
            (0, P.jsx)(`h1`, {
              className: `anim-flicker neon-red font-display -mt-2 text-6xl font-black italic leading-none tracking-tight text-white sm:text-8xl`,
              children: `FIGHTS`,
            }),
            (0, P.jsx)(`div`, {
              className: `mt-6 h-px w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent`,
            }),
            (0, P.jsx)(`div`, {
              className: `mt-8 flex w-[360px] max-w-[88vw] flex-col gap-3`,
              role: `menu`,
              children: Og.map((o, idx) => {
                let sel = t === idx;
                return (0, P.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    role: `menuitem`,
                    "data-testid": `title-mode-${o.id}-button`,
                    onMouseEnter: () => n(idx),
                    onClick: () => a(o.id),
                    className: `font-display group relative rounded-lg border-2 px-6 py-3.5 text-left text-xl font-black tracking-wider transition-[background-color,border-color,box-shadow,transform] duration-200 ${sel ? `scale-[1.03] border-cyan-300 bg-cyan-400/15 text-white shadow-[0_0_28px_rgba(0,240,255,0.45)]` : `border-[#272744] bg-black/55 text-slate-200 hover:text-white`}`,
                    children: [
                      (0, P.jsx)(`span`, {
                        className: `mr-2 inline-block transition-opacity duration-200 ${sel ? `anim-blink text-amber-300 opacity-100` : `opacity-0`}`,
                        children: `▶`,
                      }),
                      o.label,
                      (0, P.jsx)(`span`, {
                        className: `font-monox mt-0.5 block pl-6 text-[10px] font-normal tracking-widest text-slate-400`,
                        children: o.hint,
                      }),
                    ],
                  },
                  o.id,
                );
              }),
            }),
            (0, P.jsx)(`p`, {
              "data-testid": `title-cta`,
              className: `font-monox mt-5 text-[11px] tracking-[0.25em] text-amber-300/90`,
              children: `W/S veya ▲/▼ SEÇ · ENTER BAŞLA`,
            }),
          ],
        }),
        bye &&
          (0, P.jsx)(`div`, {
            onClick: () => setBye(!1),
            style: {
              position: `fixed`,
              inset: 0,
              zIndex: 60,
              background: `rgba(0,0,0,.9)`,
              display: `flex`,
              flexDirection: `column`,
              gap: 10,
              alignItems: `center`,
              justifyContent: `center`,
              padding: 24,
              textAlign: `center`,
              cursor: `pointer`,
            },
            className: `font-display text-2xl font-black text-white`,
            children: [
              (0, P.jsx)(`div`, { children: `GÖRÜŞÜRÜZ!` }, `a`),
              (0, P.jsx)(
                `div`,
                {
                  className: `font-monox text-sm font-normal text-slate-300`,
                  children: `Oyunu kapatmak için bu sekmeyi/pencereyi kapat · geri dönmek için tıkla`,
                },
                `b`,
              ),
            ],
          }),
      ],
    })
  );
}

// 30-vendor-ui-kit.js — ÜÇÜNCÜ TARAF yardımcılar (base-ui, class-variance-authority, tailwind-merge, button). DÜZENLEME.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function Ag(){return typeof window<`u`}
function jg(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}
function Mg(e){return Ag()?e instanceof HTMLElement||e instanceof jg(e).HTMLElement:!1}
var Ng={...N},Pg={};
function Fg(e,t){let n=N.useRef(Pg);return n.current===Pg&&(n.current=e(t)),n}
var Ig=Ng.useInsertionEffect,Lg=Ig&&Ig!==Ng.useLayoutEffect?Ig:e=>e();
function Rg(e){let t=Fg(zg).current;return t.next=e,Lg(t.effect),t.trampoline}
function zg(){let e={next:void 0,callback:Bg,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}
function Bg(){}
var Vg=typeof document<`u`?N.useLayoutEffect:()=>{};
function Hg(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}
var Ug={};
function Wg(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Kg(t);let a=Kg(e);return t&&(a=qg(a,t)),n&&(a=qg(a,n)),r&&(a=qg(a,r)),i&&(a=qg(a,i)),a}
function Gg(e){if(e.length===0)return Ug;if(e.length===1)return Kg(e[0]);let t=Kg(e[0]);for(let n=1;n<e.length;n+=1)t=qg(t,e[n]);return t}
function Kg(e){return Zg(e)?{...Qg(e,Ug)}:Jg(e)}
function qg(e,t){return Zg(t)?Qg(t,e):Yg(e,t)}
function Jg(e){let t={...e};for(let e in t){let n=t[e];Xg(e,n)&&(t[e]=e_(n))}return t}
function Yg(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=Hg(e.style,r);break;case`className`:e[n]=n_(e.className,r);break;default:Xg(n,r)?e[n]=$g(e[n],r):e[n]=r}}return e}
function Xg(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}
function Zg(e){return typeof e==`function`}
function Qg(e,t){return Zg(e)?e(t):e??Ug}
function $g(e,t){return t?e?(...n)=>{let r=n[0];if(r_(r)){let i=r;t_(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:e_(t):e}
function e_(e){return e&&((...t)=>{let n=t[0];return r_(n)&&t_(n),e(...t)})}
function t_(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}
function n_(e,t){return t?e?t+` `+e:t:e}
function r_(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}
function i_(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}
var a_=i_(`https://base-ui.com/production-error`,`Base UI`),o_=N.createContext(void 0);
function s_(e=!1){let t=N.useContext(o_);if(t===void 0&&!e)throw Error(a_(16));return t}
function c_(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return{props:N.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}}
function l_(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:a}=e,o=N.useRef(null),s=s_(!0),c=a??s!==void 0,{props:l}=c_({focusableWhenDisabled:n,disabled:t,composite:c,tabIndex:r,isNativeButton:i}),u=N.useCallback(()=>{let e=o.current;u_(e)&&c&&t&&l.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,l.disabled,c]);return Vg(u,[u]),{getButtonProps:N.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...u}=e;return Wg({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(t_(e),o?.(e),e.baseUIHandlerPrevented))return;let r=e.target===e.currentTarget,a=e.currentTarget,s=u_(a),l=!i&&d_(a),u=r&&(i?s:!l),d=e.key===`Enter`,f=e.key===` `,p=a.getAttribute(`role`),m=p?.startsWith(`menuitem`)||p===`option`||p===`gridcell`;if(r&&c&&f){if(e.defaultPrevented&&m)return;e.preventDefault(),l||i&&s?(a.click(),e.preventBaseUIHandler()):u&&(n?.(e),e.preventBaseUIHandler());return}u&&(!i&&(f||d)&&e.preventDefault(),!i&&d&&n?.(e))},onKeyUp(e){if(!t){if(t_(e),a?.(e),e.target===e.currentTarget&&i&&c&&u_(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!c&&e.key===` `&&n?.(e)}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},l,u)},[t,l,c,i]),buttonRef:Rg(e=>{o.current=e,u()})}}
function u_(e){return Mg(e)&&e.tagName===`BUTTON`}
function d_(e){return!!(e?.tagName===`A`&&e?.href)}
function f_(e,t,n,r){let i=Fg(m_).current;return h_(i,e,t,n,r)&&__(i,[e,t,n,r]),i.callback}
function p_(e){let t=Fg(m_).current;return g_(t,e)&&__(t,e),t.callback}
function m_(){return{callback:null,cleanup:null,refs:[]}}
function h_(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}
function g_(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}
function __(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n;break;default:}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null;break;default:}}}}}}
var v_=19;
function y_(e){return v_>=e}
function b_(e){if(!N.isValidElement(e))return null;let t=e,n=t.props;return(y_(19)?n?.ref:t.ref)??null}
Object.freeze([]);
var x_=Object.freeze({});
function S_(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}
function C_(e,t){return typeof e==`function`?e(t):e}
function w_(e,t){return typeof e==`function`?e(t):e}
function T_(e,t,n={}){let r=t.render,i=E_(t,n);return n.enabled===!1?null:k_(e,r,i,n.state??x_)}
function E_(e,t={}){let{className:n,style:r,render:i}=e,{state:a=x_,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?C_(n,a):void 0,d=l?w_(r,a):void 0,f=l?S_(a,c):x_,p=l&&s?D_(s):void 0,m=l?Hg(f,p)??{}:x_;return typeof document<`u`&&(l?Array.isArray(o)?m.ref=p_([m.ref,b_(i),...o]):m.ref=f_(m.ref,b_(i),o):f_(null,null)),l?(u!==void 0&&(m.className=n_(m.className,u)),d!==void 0&&(m.style=Hg(m.style,d)),m):x_}
function D_(e){return Array.isArray(e)?Gg(e):Wg(void 0,e)}
var O_=Symbol.for(`react.lazy`);
function k_(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=Wg(n,t.props);e.ref=n.ref;let i=t;return i?.$$typeof===O_&&(i=N.Children.toArray(t)[0]),N.cloneElement(i,e)}if(e&&typeof e==`string`)return A_(e,n);throw Error(a_(8))}
function A_(e,t){return e===`button`?(0,N.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,N.createElement)(`img`,{alt:``,...t,key:t.key}):N.createElement(e,t)}
var j_=N.forwardRef(function(e,t){let{render:n,className:r,disabled:i=!1,focusableWhenDisabled:a=!1,nativeButton:o=!0,style:s,...c}=e,{getButtonProps:l,buttonRef:u}=l_({disabled:i,focusableWhenDisabled:a,native:o});return T_(`button`,e,{state:{disabled:i},ref:[t,u],props:[c,l]})});
function M_(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=M_(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}
function N_(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=M_(e))&&(r&&(r+=` `),r+=t);return r}
var P_=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,F_=N_,I_=(e,t)=>n=>{if(t?.variants==null)return F_(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=P_(t)||P_(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return F_(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)},L_=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},R_=(e,t)=>({classGroupId:e,validator:t}),z_=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),B_=`-`,V_=[],H_=`arbitrary..`,U_=e=>{let t=K_(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return G_(e);let n=e.split(B_);return W_(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?L_(i,t):t:i||V_}return n[e]||V_}}},W_=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=W_(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(B_):e.slice(t).join(B_),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},G_=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?H_+r:void 0})(),K_=e=>{let{theme:t,classGroups:n}=e;return q_(n,t)},q_=(e,t)=>{let n=z_();for(let r in e){let i=e[r];J_(i,n,r,t)}return n},J_=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Y_(i,t,n,r)}},Y_=(e,t,n,r)=>{if(typeof e==`string`){X_(e,t,n);return}if(typeof e==`function`){Z_(e,t,n,r);return}Q_(e,t,n,r)},X_=(e,t,n)=>{let r=e===``?t:$_(t,e);r.classGroupId=n},Z_=(e,t,n,r)=>{if(ev(e)){J_(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(R_(n,e))},Q_=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];J_(o,$_(t,a),n,r)}},$_=(e,t)=>{let n=e,r=t.split(B_),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=z_(),n.nextPart.set(t,i)),n=i}return n},ev=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,tv=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},nv=`!`,rv=`:`,iv=[],av=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),ov=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===rv){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(nv)?(c=s.slice(0,-1),l=!0):s.startsWith(nv)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return av(t,l,c,u)};if(t){let e=t+rv,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):av(iv,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},sv=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},cv=e=>({cache:tv(e.cacheSize),parseClassName:ov(e),sortModifiers:sv(e),postfixLookupClassGroupIds:lv(e),...U_(e)}),lv=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},uv=/\s+/,dv=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(uv),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h){l=t+(l.length>0?` `+l:l);continue}if(g=r(p),!g){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+nv:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},fv=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=pv(n))&&(i&&(i+=` `),i+=r);return i},pv=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=pv(e[r]))&&(n&&(n+=` `),n+=t);return n},mv=(e,...t)=>{let n,r,i,a,o=o=>(n=cv(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=dv(e,n);return i(e,a),a};return a=o,(...e)=>a(fv(...e))},hv=[],gv=e=>{let t=t=>t[e]||hv;return t.isThemeGetter=!0,t},_v=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,vv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,yv=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,bv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Sv=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Cv=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wv=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Tv=e=>yv.test(e),Z=e=>!!e&&!Number.isNaN(Number(e)),Ev=e=>!!e&&Number.isInteger(Number(e)),Dv=e=>e.endsWith(`%`)&&Z(e.slice(0,-1)),Ov=e=>bv.test(e),kv=()=>!0,Av=e=>xv.test(e)&&!Sv.test(e),jv=()=>!1,Mv=e=>Cv.test(e),Nv=e=>wv.test(e),Pv=e=>!Q(e)&&!$(e),Fv=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Iv=e=>Zv(e,ty,jv),Q=e=>_v.test(e),Lv=e=>Zv(e,ny,Av),Rv=e=>Zv(e,ry,Z),zv=e=>Zv(e,ay,kv),Bv=e=>Zv(e,iy,jv),Vv=e=>Zv(e,$v,jv),Hv=e=>Zv(e,ey,Nv),Uv=e=>Zv(e,oy,Mv),$=e=>vv.test(e),Wv=e=>Qv(e,ny),Gv=e=>Qv(e,iy),Kv=e=>Qv(e,$v),qv=e=>Qv(e,ty),Jv=e=>Qv(e,ey),Yv=e=>Qv(e,oy,!0),Xv=e=>Qv(e,ay,!0),Zv=(e,t,n)=>{let r=_v.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},Qv=(e,t,n=!1)=>{let r=vv.exec(e);return r?r[1]?t(r[1]):n:!1},$v=e=>e===`position`||e===`percentage`,ey=e=>e===`image`||e===`url`,ty=e=>e===`length`||e===`size`||e===`bg-size`,ny=e=>e===`length`,ry=e=>e===`number`,iy=e=>e===`family-name`,ay=e=>e===`number`||e===`weight`,oy=e=>e===`shadow`,sy=mv(()=>{let e=gv(`color`),t=gv(`font`),n=gv(`text`),r=gv(`font-weight`),i=gv(`tracking`),a=gv(`leading`),o=gv(`breakpoint`),s=gv(`container`),c=gv(`spacing`),l=gv(`radius`),u=gv(`shadow`),d=gv(`inset-shadow`),f=gv(`text-shadow`),p=gv(`drop-shadow`),m=gv(`blur`),h=gv(`perspective`),g=gv(`aspect`),_=gv(`ease`),v=gv(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),$,Q],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[$,Q,c],T=()=>[Tv,`full`,`auto`,...w()],E=()=>[Ev,`none`,`subgrid`,$,Q],ee=()=>[`auto`,{span:[`full`,Ev,$,Q]},Ev,$,Q],D=()=>[Ev,`auto`,$,Q],te=()=>[`auto`,`min`,`max`,`fr`,$,Q],ne=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],re=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ie=()=>[`auto`,...w()],ae=()=>[Tv,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],oe=()=>[Tv,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],se=()=>[Tv,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],O=()=>[e,$,Q],k=()=>[...b(),Kv,Vv,{position:[$,Q]}],ce=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],le=()=>[`auto`,`cover`,`contain`,qv,Iv,{size:[$,Q]}],ue=()=>[Dv,Wv,Lv],A=()=>[``,`none`,`full`,l,$,Q],j=()=>[``,Z,Wv,Lv],M=()=>[`solid`,`dashed`,`dotted`,`double`],de=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],fe=()=>[Z,Dv,Kv,Vv],pe=()=>[``,`none`,m,$,Q],me=()=>[`none`,Z,$,Q],he=()=>[`none`,Z,$,Q],ge=()=>[Z,$,Q],_e=()=>[Tv,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Ov],breakpoint:[Ov],color:[kv],container:[Ov],"drop-shadow":[Ov],ease:[`in`,`out`,`in-out`],font:[Pv],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Ov],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Ov],shadow:[Ov],spacing:[`px`,Z],text:[Ov],"text-shadow":[Ov],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,Tv,Q,$,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,$,Q]}],"container-named":[Fv],columns:[{columns:[Z,Q,$,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[Ev,`auto`,$,Q]}],basis:[{basis:[Tv,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[Z,Tv,`auto`,`initial`,`none`,Q]}],grow:[{grow:[``,Z,$,Q]}],shrink:[{shrink:[``,Z,$,Q]}],order:[{order:[Ev,`first`,`last`,`none`,$,Q]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:ee()}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:ee()}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...ne(),`normal`]}],"justify-items":[{"justify-items":[...re(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...re()]}],"align-content":[{content:[`normal`,...ne()]}],"align-items":[{items:[...re(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...re(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":ne()}],"place-items":[{"place-items":[...re(),`baseline`]}],"place-self":[{"place-self":[`auto`,...re()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:ie()}],mx:[{mx:ie()}],my:[{my:ie()}],ms:[{ms:ie()}],me:[{me:ie()}],mbs:[{mbs:ie()}],mbe:[{mbe:ie()}],mt:[{mt:ie()}],mr:[{mr:ie()}],mb:[{mb:ie()}],ml:[{ml:ie()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:ae()}],"inline-size":[{inline:[`auto`,...oe()]}],"min-inline-size":[{"min-inline":[`auto`,...oe()]}],"max-inline-size":[{"max-inline":[`none`,...oe()]}],"block-size":[{block:[`auto`,...se()]}],"min-block-size":[{"min-block":[`auto`,...se()]}],"max-block-size":[{"max-block":[`none`,...se()]}],w:[{w:[s,`screen`,...ae()]}],"min-w":[{"min-w":[s,`screen`,`none`,...ae()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...ae()]}],h:[{h:[`screen`,`lh`,...ae()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...ae()]}],"max-h":[{"max-h":[`screen`,`lh`,...ae()]}],"font-size":[{text:[`base`,n,Wv,Lv]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Xv,zv]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Dv,Q]}],"font-family":[{font:[Gv,Bv,t]}],"font-features":[{"font-features":[Q]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,$,Q]}],"line-clamp":[{"line-clamp":[Z,`none`,$,Rv]}],leading:[{leading:[a,...w()]}],"list-image":[{"list-image":[`none`,$,Q]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,$,Q]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...M(),`wavy`]}],"text-decoration-thickness":[{decoration:[Z,`from-font`,`auto`,$,Lv]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[Z,`auto`,$,Q]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[Ev,$,Q]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,$,Q]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,$,Q]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:k()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:le()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},Ev,$,Q],radial:[``,$,Q],conic:[Ev,$,Q]},Jv,Hv]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:ue()}],"gradient-via-pos":[{via:ue()}],"gradient-to-pos":[{to:ue()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:A()}],"rounded-s":[{"rounded-s":A()}],"rounded-e":[{"rounded-e":A()}],"rounded-t":[{"rounded-t":A()}],"rounded-r":[{"rounded-r":A()}],"rounded-b":[{"rounded-b":A()}],"rounded-l":[{"rounded-l":A()}],"rounded-ss":[{"rounded-ss":A()}],"rounded-se":[{"rounded-se":A()}],"rounded-ee":[{"rounded-ee":A()}],"rounded-es":[{"rounded-es":A()}],"rounded-tl":[{"rounded-tl":A()}],"rounded-tr":[{"rounded-tr":A()}],"rounded-br":[{"rounded-br":A()}],"rounded-bl":[{"rounded-bl":A()}],"border-w":[{border:j()}],"border-w-x":[{"border-x":j()}],"border-w-y":[{"border-y":j()}],"border-w-s":[{"border-s":j()}],"border-w-e":[{"border-e":j()}],"border-w-bs":[{"border-bs":j()}],"border-w-be":[{"border-be":j()}],"border-w-t":[{"border-t":j()}],"border-w-r":[{"border-r":j()}],"border-w-b":[{"border-b":j()}],"border-w-l":[{"border-l":j()}],"divide-x":[{"divide-x":j()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":j()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...M(),`hidden`,`none`]}],"divide-style":[{divide:[...M(),`hidden`,`none`]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-bs":[{"border-bs":O()}],"border-color-be":[{"border-be":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...M(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[Z,$,Q]}],"outline-w":[{outline:[``,Z,Wv,Lv]}],"outline-color":[{outline:O()}],shadow:[{shadow:[``,`none`,u,Yv,Uv]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":[`none`,d,Yv,Uv]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:j()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[Z,Lv]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":j()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":[`none`,f,Yv,Uv]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[Z,$,Q]}],"mix-blend":[{"mix-blend":[...de(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":de()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[Z]}],"mask-image-linear-from-pos":[{"mask-linear-from":fe()}],"mask-image-linear-to-pos":[{"mask-linear-to":fe()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":fe()}],"mask-image-t-to-pos":[{"mask-t-to":fe()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":fe()}],"mask-image-r-to-pos":[{"mask-r-to":fe()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":fe()}],"mask-image-b-to-pos":[{"mask-b-to":fe()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":fe()}],"mask-image-l-to-pos":[{"mask-l-to":fe()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":fe()}],"mask-image-x-to-pos":[{"mask-x-to":fe()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":fe()}],"mask-image-y-to-pos":[{"mask-y-to":fe()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[$,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":fe()}],"mask-image-radial-to-pos":[{"mask-radial-to":fe()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Z]}],"mask-image-conic-from-pos":[{"mask-conic-from":fe()}],"mask-image-conic-to-pos":[{"mask-conic-to":fe()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:k()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:le()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,$,Q]}],filter:[{filter:[``,`none`,$,Q]}],blur:[{blur:pe()}],brightness:[{brightness:[Z,$,Q]}],contrast:[{contrast:[Z,$,Q]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Yv,Uv]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:[``,Z,$,Q]}],"hue-rotate":[{"hue-rotate":[Z,$,Q]}],invert:[{invert:[``,Z,$,Q]}],saturate:[{saturate:[Z,$,Q]}],sepia:[{sepia:[``,Z,$,Q]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,$,Q]}],"backdrop-blur":[{"backdrop-blur":pe()}],"backdrop-brightness":[{"backdrop-brightness":[Z,$,Q]}],"backdrop-contrast":[{"backdrop-contrast":[Z,$,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,Z,$,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Z,$,Q]}],"backdrop-invert":[{"backdrop-invert":[``,Z,$,Q]}],"backdrop-opacity":[{"backdrop-opacity":[Z,$,Q]}],"backdrop-saturate":[{"backdrop-saturate":[Z,$,Q]}],"backdrop-sepia":[{"backdrop-sepia":[``,Z,$,Q]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,$,Q]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[Z,`initial`,$,Q]}],ease:[{ease:[`linear`,`initial`,_,$,Q]}],delay:[{delay:[Z,$,Q]}],animate:[{animate:[`none`,v,$,Q]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,$,Q]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:me()}],"rotate-x":[{"rotate-x":me()}],"rotate-y":[{"rotate-y":me()}],"rotate-z":[{"rotate-z":me()}],scale:[{scale:he()}],"scale-x":[{"scale-x":he()}],"scale-y":[{"scale-y":he()}],"scale-z":[{"scale-z":he()}],"scale-3d":[`scale-3d`],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[$,Q,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:_e()}],"translate-x":[{"translate-x":_e()}],"translate-y":[{"translate-y":_e()}],"translate-z":[{"translate-z":_e()}],"translate-none":[`translate-none`],zoom:[{zoom:[Ev,$,Q]}],accent:[{accent:O()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,$,Q]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":O()}],"scrollbar-track-color":[{"scrollbar-track":O()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,$,Q]}],fill:[{fill:[`none`,...O()]}],"stroke-w":[{stroke:[Z,Wv,Lv,Rv]}],stroke:[{stroke:[`none`,...O()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});
function cy(...e){return sy(N_(e))}
var ly=I_(`group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/80`,outline:`border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,ghost:`hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,destructive:`bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,xs:`h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5`,lg:`h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,icon:`size-8`,"icon-xs":`size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg`,"icon-lg":`size-9`}},defaultVariants:{variant:`default`,size:`default`}});
function uy({className:e,variant:t=`default`,size:n=`default`,nativeButton:r,render:i,...a}){return(0,P.jsx)(j_,{"data-slot":`button`,render:i,nativeButton:r??(i==null||(0,N.isValidElement)(i)&&i.type===`button`),className:cy(ly({variant:t,size:n,className:e})),...a})}

// 40-ui-character-select.js — Karakter seçim ekranı: Türkiye haritası verisi, kartlar, ızgara, seçim ekranı.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var dy = [
    [
      0.8244, 0.0903, 0.841, 0.1035, 0.8464, 0.0935, 0.8617, 0.0952, 0.8754, 0.1024, 0.8828, 0.0806,
      0.8924, 0.083, 0.8942, 0.0941, 0.9116, 0.1229, 0.9118, 0.134, 0.9147, 0.1397, 0.9229, 0.141,
      0.9267, 0.1464, 0.9279, 0.1607, 0.9373, 0.1817, 0.9423, 0.2141, 0.9392, 0.2368, 0.934, 0.2511,
      0.9415, 0.3001, 0.9392, 0.3063, 0.9538, 0.3225, 0.9724, 0.3198, 0.9783, 0.3266, 1.0006,
      0.3802, 0.9883, 0.3619, 0.9812, 0.3778, 0.9778, 0.4158, 0.9582, 0.4228, 0.9613, 0.4474,
      0.9664, 0.459, 0.9647, 0.4822, 0.9661, 0.4916, 0.9714, 0.5067, 0.973, 0.5766, 0.981, 0.5847,
      0.9682, 0.651, 0.9868, 0.6764, 0.9883, 0.6818, 0.986, 0.6898, 0.9875, 0.7244, 0.9994, 0.7503,
      0.9973, 0.7583, 0.9977, 0.7699, 0.9893, 0.7648, 0.972, 0.7956, 0.9678, 0.784, 0.9672, 0.7532,
      0.963, 0.7451, 0.9576, 0.7432, 0.9482, 0.7573, 0.9398, 0.7567, 0.9312, 0.754, 0.9087, 0.7349,
      0.9003, 0.7416, 0.8917, 0.7343, 0.8748, 0.7721, 0.8696, 0.7751, 0.8671, 0.7565, 0.8612,
      0.7459, 0.8537, 0.76, 0.8245, 0.7783, 0.8113, 0.7813, 0.795, 0.7751, 0.7816, 0.777, 0.7448,
      0.819, 0.7097, 0.8414, 0.6782, 0.8398, 0.661, 0.8134, 0.6476, 0.8074, 0.6073, 0.8476, 0.5877,
      0.846, 0.581, 0.8295, 0.5659, 0.8228, 0.5626, 0.8384, 0.5595, 0.8765, 0.5647, 0.911, 0.5563,
      0.9132, 0.5509, 0.9207, 0.5494, 0.9469, 0.5415, 0.9571, 0.5377, 0.9736, 0.5252, 0.9604,
      0.5285, 0.9477, 0.5208, 0.8994, 0.5246, 0.8843, 0.5409, 0.8449, 0.5404, 0.822, 0.5335, 0.8061,
      0.5128, 0.8349, 0.5108, 0.846, 0.5062, 0.8546, 0.4986, 0.8581, 0.4617, 0.8206, 0.4403, 0.8536,
      0.4219, 0.9016, 0.4081, 0.9191, 0.3672, 0.9326, 0.3601, 0.9417, 0.3463, 0.9318, 0.3379,
      0.9188, 0.3189, 0.8643, 0.2832, 0.8231, 0.2456, 0.8128, 0.2422, 0.8236, 0.241, 0.8657, 0.2351,
      0.9056, 0.2318, 0.9096, 0.2236, 0.8997, 0.1946, 0.9231, 0.1699, 0.897, 0.1657, 0.8856, 0.1601,
      0.8398, 0.1565, 0.8363, 0.1524, 0.8428, 0.1482, 0.8425, 0.1306, 0.8225, 0.121, 0.8212, 0.1152,
      0.8409, 0.1058, 0.849, 0.1055, 0.8433, 0.1093, 0.8306, 0.0943, 0.8331, 0.0865, 0.8425, 0.0757,
      0.8368, 0.0763, 0.8314, 0.0851, 0.8252, 0.1051, 0.8182, 0.1177, 0.7875, 0.07, 0.7891, 0.0654,
      0.7958, 0.0648, 0.7797, 0.0675, 0.7724, 0.08, 0.7667, 0.0792, 0.7535, 0.0715, 0.7392, 0.0631,
      0.7316, 0.0594, 0.6982, 0.055, 0.6898, 0.0556, 0.6853, 0.0635, 0.6793, 0.0639, 0.64, 0.0485,
      0.627, 0.0451, 0.6281, 0.0412, 0.6151, 0.0345, 0.606, 0.0291, 0.6135, 0.0136, 0.5936, 0.0165,
      0.5793, 0.0203, 0.5795, 0.0211, 0.5682, 0.018, 0.5493, 0.0184, 0.5396, 0.0217, 0.5372, 0.0255,
      0.5388, 0.0295, 0.5501, 0.0299, 0.5717, 0.0341, 0.5847, 0.037, 0.5717, 0.0441, 0.5787, 0.0568,
      0.5723, 0.0591, 0.5666, 0.0499, 0.5671, 0.0466, 0.562, 0.0389, 0.5264, 0.0466, 0.5162, 0.0522,
      0.4989, 0.0416, 0.4873, 0.0437, 0.4633, 0.0345, 0.4361, 0.0468, 0.401, 0.046, 0.3959, 0.0422,
      0.394, 0.0042, 0.4088, 0.0033, 0.4005, 0.0065, 0.3794, 0.0079, 0.3276, 0.015, 0.3223, 0.0236,
      0.2953, 0.0376, 0.2637, 0.0522, 0.2645, 0.0579, 0.2556, 0.0665, 0.2551, 0.0692, 0.2675,
      0.0769, 0.2764, 0.0903, 0.2751, 0.0966, 0.2667, 0.0905, 0.2513, 0.0924, 0.2467, 0.098, 0.2462,
      0.1041, 0.25, 0.1009, 0.267, 0.1028, 0.2686, 0.12, 0.2635, 0.1383, 0.2675, 0.1584, 0.2653,
      0.1609, 0.2602, 0.1467, 0.243, 0.1557, 0.2281, 0.2031, 0.2114, 0.2033, 0.2079, 0.1774, 0.2003,
      0.1641, 0.1804, 0.1605, 0.1696, 0.163, 0.1432, 0.1659, 0.1364, 0.1751, 0.1354, 0.2069, 0.1472,
      0.2297, 0.1399, 0.2545, 0.1575, 0.278, 0.154, 0.283, 0.1461, 0.289, 0.1211, 0.3223, 0.079,
      0.334, 0.0574, 0.3862, 0.0145, 0.4642, 0.0221, 0.4779, 0.0054, 0.4859, 0.011, 0.4836, 0.0221,
      0.4842, 0.0323, 0.4934, 0.0574, 0.5074, 0.0722, 0.5266, 0.0598, 0.5337, 0.0647, 0.5404,
      0.1043, 0.5524, 0.1281, 0.558, 0.13, 0.5653, 0.1159, 0.5722, 0.1143, 0.5837, 0.1278, 0.5877,
      0.1421, 0.6249, 0.1583, 0.6326, 0.1704, 0.6577, 0.1823, 0.7133, 0.1542, 0.7337, 0.1734,
      0.7507, 0.1796, 0.758, 0.1766, 0.7804, 0.154, 0.7875, 0.141, 0.8015, 0.13, 0.8192, 0.1049,
    ],
    [
      0.1055, 0.0202, 0.1041, 0.0377, 0.1152, 0.0844, 0.1231, 0.0981, 0.1611, 0.1351, 0.1557,
      0.1693, 0.1463, 0.1747, 0.1139, 0.158, 0.1007, 0.172, 0.0913, 0.1685, 0.078, 0.1747, 0.0744,
      0.1955, 0.0652, 0.2192, 0.0393, 0.2486, 0.0157, 0.3069, 0.009, 0.3144, 0.0121, 0.2945, 0.0117,
      0.2772, 0.0221, 0.257, 0.0366, 0.2413, 0.0405, 0.2287, 0.0038, 0.2311, 0.0002, 0.213, 0.004,
      0.2095, 0.0159, 0.1777, 0.0159, 0.1335, 0.0303, 0.1157, 0.0314, 0.1081, 0.0291, 0.0774,
      0.0153, 0.0593, 0.0157, 0.0507, 0.0255, 0.0423, 0.0311, 0.0207, 0.0453, 0.0167, 0.0522,
      0.0062, 0.0644, 0.0008, 0.08, 0.0275, 0.0984, 0.0175,
    ],
  ],
  fy = [
    { n: `İSTANBUL`, x: 0.1569, y: 0.1694, ox: -12, oy: -4, al: `right` },
    { n: `SAKARYA`, x: 0.2314, y: 0.2084, ox: 6, oy: 17, al: `left` },
    { n: `KAYSERİ`, x: 0.5031, y: 0.5231, ox: 0, oy: 0, al: `center` },
    { n: `SAMSUN`, x: 0.5484, y: 0.1261, ox: 0, oy: 21, al: `center` },
    { n: `ÇORUM`, x: 0.4752, y: 0.2405, ox: 0, oy: 0, al: `center` },
  ],
  py = { x: 0.3636, y: 0.3364 };

function my() {
  let e = (0, N.useRef)(null);
  return (
    (0, N.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = t.getContext(`2d`),
        r = (t.width = 760),
        i = (t.height = 360),
        a = 0,
        o = (e) => {
          (n.clearRect(0, 0, r, i), (n.strokeStyle = `rgba(0,240,255,0.07)`), (n.lineWidth = 1));
          for (let e = 0; e <= r; e += 38)
            (n.beginPath(), n.moveTo(e, 0), n.lineTo(e, i), n.stroke());
          for (let e = 0; e <= i; e += 38)
            (n.beginPath(), n.moveTo(0, e), n.lineTo(r, e), n.stroke());
          let t = r - 80,
            s = i - 60;
          n.beginPath();
          for (const rg of dy) {
            for (let q = 0; q < rg.length; q += 2) {
              const X = 40 + rg[q] * t,
                Y = 30 + rg[q + 1] * s;
              q ? n.lineTo(X, Y) : n.moveTo(X, Y);
            }
            n.closePath();
          }
          ((n.fillStyle = `rgba(0,240,255,0.06)`),
            n.fill(),
            (n.shadowColor = `#00f0ff`),
            (n.shadowBlur = 22),
            (n.strokeStyle = `#4ff5ff`),
            (n.lineWidth = 2.5),
            (n.lineJoin = `round`),
            (n.lineCap = `round`),
            n.stroke(),
            (n.shadowBlur = 0),
            (n.font = `600 11px "JetBrains Mono Variable", monospace`),
            (n.fillStyle = `rgba(148,163,184,0.85)`),
            (n.textAlign = `left`),
            n.fillText(`TÜRKİYE · 36°–42° K`, 40, i - 10),
            (n.textAlign = `center`));
          for (let e of fy) {
            let r = 40 + e.x * t,
              i = 30 + e.y * s;
            ((n.fillStyle = `rgba(148,163,184,0.9)`),
              n.beginPath(),
              n.arc(r, i, 3, 0, Math.PI * 2),
              n.fill(),
              (n.lineWidth = 1.3),
              (n.strokeStyle = `#05060f`),
              n.stroke(),
              (n.textAlign = e.al || `center`),
              n.fillText(e.n, r + (e.ox || 0), i - 7 + (e.oy || 0)),
              (n.textAlign = `center`));
          }
          let l = 40 + py.x * t,
            u = 30 + py.y * s,
            d = (e * 0.0016) % 1;
          for (let e = 0; e < 3; e++) {
            let t = (d + e / 3) % 1;
            ((n.strokeStyle = `rgba(255,215,0,${(1 - t) * 0.8})`),
              (n.lineWidth = 2),
              n.beginPath(),
              n.arc(l, u, 6 + t * 30, 0, Math.PI * 2),
              n.stroke());
          }
          ((n.fillStyle = `#ffd700`),
            (n.shadowColor = `#ffd700`),
            (n.shadowBlur = 16),
            n.beginPath(),
            n.arc(l, u, 5, 0, Math.PI * 2),
            n.fill(),
            (n.shadowBlur = 0),
            (n.font = `800 14px "JetBrains Mono Variable", monospace`),
            (n.fillStyle = `#ffd700`),
            n.fillText(`★ ANKARA`, l, u - 16),
            (a = requestAnimationFrame(o)));
        };
      return ((a = requestAnimationFrame(o)), () => cancelAnimationFrame(a));
    }, []),
    (0, P.jsx)(`canvas`, {
      ref: e,
      "data-testid": `select-map-canvas`,
      className: `w-full max-w-[760px] rounded-lg border border-[#272744] bg-black/30`,
    })
  );
}

function hy({
  side: e,
  img: t,
  name: n,
  tag: r,
  color: i,
  ready: a,
  onReady: o,
  controls: s,
  stats: c,
}) {
  return (0, P.jsxs)(Qh.div, {
    initial: { opacity: 0, x: e === 1 ? -30 : 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
    "data-testid": `p${e}-card`,
    className: `flex w-full flex-col rounded-xl border bg-[#121124]/90 p-4 lg:w-[300px]`,
    style: { borderColor: a ? i : `#272744`, boxShadow: a ? `0 0 24px ${i}55` : `none` },
    children: [
      (0, P.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, P.jsxs)(`span`, {
            className: `font-monox text-xs tracking-widest`,
            style: { color: i },
            children: [`OYUNCU `, e],
          }),
          (0, P.jsx)(`span`, {
            "data-testid": `p${e}-ready-indicator`,
            className: `font-monox rounded border px-2 py-0.5 text-[10px] tracking-widest`,
            style: { borderColor: i, color: a ? `#06070f` : i, background: a ? i : `transparent` },
            children: a ? `HAZIR ✓` : `BEKLİYOR`,
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `relative mt-3 flex h-44 items-center justify-center overflow-hidden rounded-lg bg-black/50`,
        children: (0, P.jsx)(`img`, {
          src: t,
          alt: n,
          onError: (e) => (e.currentTarget.style.display = `none`),
          className: `max-h-40 object-contain`,
          style: { filter: `drop-shadow(0 0 18px ${i}66)` },
        }),
      }),
      (0, P.jsx)(`h2`, { className: `font-display mt-3 text-xl font-black`, children: n }),
      (0, P.jsx)(`p`, { className: `text-xs text-slate-400`, children: r }),
      (0, P.jsx)(`div`, {
        className: `mt-3 space-y-1.5`,
        children: c.map(([e, t]) =>
          (0, P.jsxs)(
            `div`,
            {
              className: `font-monox flex items-center gap-2 text-[10px]`,
              children: [
                (0, P.jsx)(`span`, { className: `w-14 text-slate-500`, children: e }),
                (0, P.jsx)(`div`, {
                  className: `h-1.5 flex-1 rounded bg-black/60`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full rounded`,
                    style: { width: `${t * 100}%`, background: i },
                  }),
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, P.jsx)(`div`, {
        className: `font-monox mt-3 space-y-0.5 text-[10px] text-slate-400`,
        children: s.map((e) => (0, P.jsx)(`p`, { children: e }, e)),
      }),
      (0, P.jsx)(uy, {
        "data-testid": `p${e}-ready-button`,
        variant: a ? `default` : `outline`,
        className: `font-display mt-4 font-bold tracking-widest`,
        style: a ? { background: i, color: `#06070f` } : { borderColor: i, color: i },
        onClick: o,
        children: a ? `HAZIR ✓` : `HAZIR`,
      }),
    ],
  });
}

var AF_HOME = { umut: `ANKARA`, sudem: `ANKARA`, metehan: `SAMSUN`, ahmet: `ÇORUM` };

var AF_SEL = [`umut`, `sudem`, `metehan`, `ahmet`, `random`];

function AF_pick() {
  return [`umut`, `sudem`, `metehan`, `ahmet`][(Math.random() * 4) | 0];
}

function AF_Map({ p1, p2 }) {
  const ref = (0, N.useRef)(null),
    st = (0, N.useRef)({ p1, p2 });
  st.current = { p1, p2 };
  (0, N.useEffect)(() => {
    const cv = ref.current;
    if (!cv) return;
    const g = cv.getContext(`2d`),
      W = (cv.width = 760),
      H = (cv.height = 360),
      K = 4,
      sw = W / K,
      sh = H / K;
    const mk = () => {
      const c = document.createElement(`canvas`);
      c.width = sw;
      c.height = sh;
      return c;
    };
    const A = mk(),
      B = mk(),
      a = A.getContext(`2d`),
      b = B.getContext(`2d`);
    const path = new Path2D();
    for (const rg of dy) {
      for (let q = 0; q < rg.length; q += 2) {
        const x = (40 + rg[q] * 680) / K,
          y = (30 + rg[q + 1] * 300) / K;
        q ? path.lineTo(x, y) : path.moveTo(x, y);
      }
      path.closePath();
    }
    b.fillStyle = `#7d1d1d`;
    b.fill(path);
    const gr = a.createLinearGradient(0, 0, 0, sh);
    gr.addColorStop(0, `#a9c653`);
    gr.addColorStop(0.55, `#5fae3e`);
    gr.addColorStop(1, `#2f8a4a`);
    a.fillStyle = gr;
    a.fill(path);
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 900; i++) {
      const x = rnd() * sw,
        y = rnd() * sh;
      if (a.isPointInPath(path, x, y)) {
        a.fillStyle = rnd() < 0.55 ? `rgba(20,70,20,.35)` : `rgba(255,255,170,.28)`;
        a.fillRect(x | 0, y | 0, 1, 1);
      }
    }
    a.lineJoin = `round`;
    a.lineWidth = 0.9;
    a.strokeStyle = `#050a05`;
    a.stroke(path);
    const fl = document.createElement(`canvas`);
    fl.width = 18;
    fl.height = 12;
    const f = fl.getContext(`2d`);
    f.fillStyle = `#e30a17`;
    f.fillRect(0, 0, 18, 12);
    f.fillStyle = `#fff`;
    f.beginPath();
    f.arc(6.5, 6, 3.6, 0, 7);
    f.fill();
    f.fillStyle = `#e30a17`;
    f.beginPath();
    f.arc(7.7, 6, 2.9, 0, 7);
    f.fill();
    f.fillStyle = `#fff`;
    f.beginPath();
    f.arc(11.2, 6, 1.35, 0, 7);
    f.fill();
    // ANKARA şehir listesinde değil, arena yıldızının yerinde (py)
    const city = (n) => fy.find((c) => c.n === n) || (n === `ANKARA` ? { n, x: py.x, y: py.y } : null);
    const cx = (c) => 40 + c.x * 680,
      cy = (c) => 30 + c.y * 300;
    const lab = (t, x, y, col, al) => {
      g.font = `800 11px "JetBrains Mono Variable", monospace`;
      g.textAlign = al || `center`;
      g.lineWidth = 3.5;
      g.strokeStyle = `#050a05`;
      g.lineJoin = `round`;
      g.strokeText(t, x, y);
      g.fillStyle = col;
      g.fillText(t, x, y);
    };
    const where = {
      İSTANBUL: [`right`, -9, -4],
      SAKARYA: [`left`, 9, 10],
      KAYSERİ: [`center`, 0, 16],
      SAMSUN: [`center`, 0, 16],
      ÇORUM: [`center`, 0, 16],
    };
    let raf = 0;
    const draw = (t) => {
      const s = st.current;
      const sea = g.createLinearGradient(0, 0, 0, H);
      sea.addColorStop(0, `#0a1a78`);
      sea.addColorStop(1, `#0b1250`);
      g.fillStyle = sea;
      g.fillRect(0, 0, W, H);
      g.fillStyle = `rgba(255,255,255,.035)`;
      for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 1);
      g.imageSmoothingEnabled = !1;
      g.drawImage(B, 5, 8, W, H);
      g.drawImage(A, 0, 0, W, H);
      g.imageSmoothingEnabled = !0;
      const names = fy.map((c) => c.n);
      const resolve = (id, rand) => (rand ? names[((t / 140) | 0) % names.length] : AF_HOME[id]);
      const mkr = [
        [s.p1, `1P`, `#ff2a5f`],
        [s.p2, `2P`, `#00c8ff`],
      ].map(([p, tag, col]) => ({
        tag,
        col,
        city: resolve(p.id, p.rand),
        ready: p.ready,
        bot: p.bot,
      }));
      for (const c of fy) {
        const x = cx(c),
          y = cy(c),
          w = where[c.n] || [`center`, 0, 16];
        g.fillStyle = `#050a05`;
        g.fillRect(x - 1, y - 20, 2, 21);
        g.fillStyle = `rgba(0,0,0,.45)`;
        g.beginPath();
        g.ellipse(x, y + 1, 4, 1.8, 0, 0, 7);
        g.fill();
        for (let i = 0; i < 9; i++) {
          g.drawImage(
            fl,
            i * 2,
            0,
            2,
            12,
            x + 1 + i * 2,
            y - 20 + Math.sin(t * 0.006 + i * 0.7) * 1.1,
            2,
            12,
          );
        }
        g.strokeStyle = `#050a05`;
        g.lineWidth = 1.2;
        g.strokeRect(x + 0.5, y - 20.5, 19, 13);
        const own = mkr.filter((m) => m.city === c.n);
        lab(c.n, x + w[1], y + w[2], own.length ? own[own.length - 1].col : `#ffffff`, w[0]);
      }
      const ax = 40 + py.x * 680,
        ay = 30 + py.y * 300,
        d = (t * 0.0016) % 1;
      for (let i = 0; i < 3; i++) {
        const q = (d + i / 3) % 1;
        g.strokeStyle = `rgba(255,215,0,${(1 - q) * 0.8})`;
        g.lineWidth = 2;
        g.beginPath();
        g.arc(ax, ay, 6 + q * 28, 0, 7);
        g.stroke();
      }
      g.fillStyle = `#ffd700`;
      g.shadowColor = `#ffd700`;
      g.shadowBlur = 14;
      g.beginPath();
      g.arc(ax, ay, 5, 0, 7);
      g.fill();
      g.shadowBlur = 0;
      g.lineWidth = 1.5;
      g.strokeStyle = `#050a05`;
      g.stroke();
      lab(`★ ANKARA · ARENA`, ax, ay + 19, `#ffd700`);
      for (const m of mkr) {
        const c = city(m.city);
        if (!c) continue;
        const same = mkr[0].city === mkr[1].city,
          off = same ? (m.tag === `1P` ? -17 : 17) : 0,
          x = cx(c) + off + 9,
          y = cy(c) - 38 + Math.sin(t * 0.008 + (m.tag === `1P` ? 0 : 2)) * 2.5;
        g.save();
        g.fillStyle = m.col;
        g.strokeStyle = `#050a05`;
        g.lineWidth = 2;
        g.beginPath();
        g.roundRect(x - 15, y - 9, 30, 17, 3);
        g.fill();
        g.stroke();
        g.beginPath();
        g.moveTo(x - 5, y + 8);
        g.lineTo(x, y + 15);
        g.lineTo(x + 5, y + 8);
        g.closePath();
        g.fill();
        g.font = `900 12px "JetBrains Mono Variable", monospace`;
        g.textAlign = `center`;
        g.fillStyle = `#fff`;
        g.fillText(m.bot ? `BOT` : m.tag, x, y + 4);
        g.setLineDash([4, 3]);
        g.lineDashOffset = -t * 0.02;
        g.strokeStyle = m.col;
        g.lineWidth = 2;
        g.strokeRect(cx(c) - 4 + off * 0.4, cy(c) - 23, 28, 28);
        g.restore();
      }
      g.font = `700 10px "JetBrains Mono Variable", monospace`;
      g.textAlign = `left`;
      g.fillStyle = `rgba(190,205,255,.75)`;
      g.fillText(`TÜRKİYE`, 12, H - 10);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (0, P.jsx)(`canvas`, {
    ref,
    "data-testid": `select-map-canvas`,
    style: {
      width: `100%`,
      maxWidth: 560,
      borderRadius: 8,
      border: `4px solid #0a0a14`,
      boxShadow: `0 0 0 2px #00f0ff55, 0 0 26px rgba(0,240,255,.2)`,
      imageRendering: `auto`,
    },
  });
}

function AF_Turntable({ sig, color, ready, src, mystery }) {
  const ref = (0, N.useRef)(null),
    st = (0, N.useRef)({ t0: -1e9, dur: 900, turns: 1 }),
    rd = (0, N.useRef)(ready);
  rd.current = ready;
  (0, N.useEffect)(() => {
    st.current = { t0: performance.now(), dur: 950, turns: 1 };
  }, [sig]);
  (0, N.useEffect)(() => {
    if (ready) st.current = { t0: performance.now(), dur: 1300, turns: 2 };
  }, [ready]);
  (0, N.useEffect)(() => {
    let raf = 0;
    const loop = (t) => {
      const el = ref.current;
      if (el) {
        const s = st.current,
          e = t - s.t0;
        let a;
        if (e < s.dur) {
          const p = Math.max(0, e) / s.dur;
          a = 360 * s.turns * (1 - Math.pow(1 - p, 3));
        } else a = Math.sin(t * 0.0016) * (rd.current ? 9 : 17) * Math.min(1, (e - s.dur) / 600);
        el.style.transform = `rotateY(${a}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const L = 9,
    layers = [];
  for (let i = 0; i < L; i++) {
    const edge = i === 0 || i === L - 1,
      z = (i - (L - 1) / 2) * 2.8;
    const flt = edge ? `drop-shadow(0 0 16px ${color}77)` : `brightness(.32) saturate(.6)`;
    layers.push(
      (0, P.jsx)(
        `div`,
        {
          style: {
            position: `absolute`,
            inset: 0,
            transform: `translateZ(${z}px)`,
            display: `flex`,
            alignItems: `flex-end`,
            justifyContent: `center`,
            filter: flt,
          },
          children: mystery
            ? (0, P.jsx)(`span`, {
                style: {
                  fontSize: 230,
                  lineHeight: `260px`,
                  fontWeight: 900,
                  color: `#ffd24a`,
                  fontFamily: `"Outfit Variable", Outfit, sans-serif`,
                  marginBottom: 20,
                },
                children: `?`,
              })
            : (0, P.jsx)(`img`, {
                src,
                alt: ``,
                draggable: !1,
                onError: (e) => (e.currentTarget.style.display = `none`),
                style: {
                  height: `100%`,
                  width: `100%`,
                  objectFit: `contain`,
                  objectPosition: `50% 100%`,
                },
              }),
        },
        i,
      ),
    );
  }
  return (0, P.jsxs)(`div`, {
    style: {
      position: `relative`,
      height: 288,
      perspective: 900,
      display: `flex`,
      alignItems: `flex-end`,
      justifyContent: `center`,
      background: `radial-gradient(ellipse at 50% 100%, ${color}40, transparent 62%), rgba(0,0,0,.5)`,
      borderRadius: 8,
      overflow: `hidden`,
      paddingBottom: 6,
    },
    children: [
      (0, P.jsx)(`div`, {
        style: {
          position: `absolute`,
          bottom: 6,
          left: `50%`,
          width: 170,
          height: 22,
          marginLeft: -85,
          borderRadius: `50%`,
          background: `radial-gradient(ellipse, rgba(0,0,0,.75), transparent 70%)`,
        },
      }),
      (0, P.jsx)(`div`, {
        ref,
        style: {
          position: `relative`,
          width: `86%`,
          height: `80%`,
          marginBottom: 14,
          transformStyle: `preserve-3d`,
        },
        children: layers,
      }),
    ],
  });
}

function AF_Card({
  side: e,
  charId: t,
  onPrev: pv,
  onNext: nx,
  ready: r,
  onReady: i,
  isBot: a,
  canSwitch: o,
}) {
  const rnd = t === `random`,
    s = AF_char(t),
    c = rnd ? `#ffd24a` : s.color;
  const l = rnd
    ? [
        `Karakter, dövüş başlarken rastgele seçilir`,
        `HAZIR'a basınca ya da dövüş başlayınca belli olur`,
      ]
    : a
      ? [`Bot yönetir — karakterini sen seç`, `Ulti: ${s.ultName} (${s.ultHint})`]
      : AF_cardLines(e === 1 ? 0 : 1, s);
  const arrow = (tid, fn, txt) =>
    (0, P.jsx)(`button`, {
      type: `button`,
      "data-testid": tid,
      onClick: fn,
      disabled: !o,
      className: `font-display rounded border border-[#272744] px-2.5 py-1 text-sm font-black hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30`,
      style: { color: c },
      children: txt,
    });
  return (0, P.jsxs)(Qh.div, {
    initial: { opacity: 0, x: e === 1 ? -30 : 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
    "data-testid": `p${e}-card`,
    className: `flex w-full flex-col rounded-xl border bg-[#121124]/90 p-4 lg:w-[300px]`,
    style: { borderColor: r ? c : `#272744`, boxShadow: r ? `0 0 24px ${c}55` : `none` },
    children: [
      (0, P.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, P.jsx)(`span`, {
            className: `font-monox text-xs tracking-widest`,
            style: { color: e === 1 ? `#ff2a5f` : `#00c8ff` },
            children: a ? `BOT` : `OYUNCU ${e}`,
          }),
          (0, P.jsx)(`span`, {
            "data-testid": `p${e}-ready-indicator`,
            className: `font-monox rounded border px-2 py-0.5 text-[10px] tracking-widest`,
            style: { borderColor: c, color: r ? `#06070f` : c, background: r ? c : `transparent` },
            children: r ? `HAZIR ✓` : `BEKLİYOR`,
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `mt-3`,
        children: (0, P.jsx)(AF_Turntable, {
          sig: t,
          color: c,
          ready: r,
          src: rnd ? `` : s.img(),
          mystery: rnd,
        }),
      }),
      (0, P.jsxs)(`div`, {
        className: `mt-3 flex items-center justify-between gap-2`,
        children: [
          arrow(`p${e}-prev-char`, pv, `◀`),
          (0, P.jsx)(`h2`, {
            "data-testid": `p${e}-char-name`,
            className: `font-display text-xl font-black tracking-wide`,
            style: { color: c, textShadow: `2px 2px 0 #000` },
            children: rnd ? `RASTGELE` : s.name,
          }),
          arrow(`p${e}-next-char`, nx, `▶`),
        ],
      }),
      (0, P.jsx)(`p`, {
        className: `mt-1 text-xs text-slate-400`,
        children: rnd ? `Sürpriz karakter` : s.tag,
      }),
      (0, P.jsx)(`div`, {
        className: `mt-3 space-y-1.5`,
        children: (rnd ? [] : s.stats).map(([e, t]) =>
          (0, P.jsxs)(
            `div`,
            {
              className: `font-monox flex items-center gap-2 text-[10px]`,
              children: [
                (0, P.jsx)(`span`, { className: `w-14 text-slate-500`, children: e }),
                (0, P.jsx)(`div`, {
                  className: `h-1.5 flex-1 rounded bg-black/60`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full rounded`,
                    style: { width: `${t * 100}%`, background: c },
                  }),
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, P.jsx)(`div`, {
        className: `font-monox mt-3 space-y-0.5 text-[10px] text-slate-400`,
        children: l.map((e) => (0, P.jsx)(`p`, { children: e }, e)),
      }),
      (0, P.jsx)(uy, {
        "data-testid": `p${e}-ready-button`,
        variant: r ? `default` : `outline`,
        disabled: a,
        className: `font-display mt-4 font-bold tracking-widest disabled:opacity-80`,
        style: r ? { background: c, color: `#06070f` } : { borderColor: c, color: c },
        onClick: i,
        children: a ? `BOT HAZIR ✓` : r ? `HAZIR ✓` : `HAZIR`,
      }),
    ],
  });
}

function AF_Grid({ p1c, p2c, r1, r2, bot, onPick }) {
  const cells = [`umut`, `sudem`, `metehan`, `ahmet`, `random`, 0];
  const tag = (txt, col, side) =>
    (0, P.jsx)(`span`, {
      className: `anim-blink font-monox`,
      style: {
        position: `absolute`,
        top: -11,
        [side]: -4,
        background: col,
        color: `#fff`,
        fontSize: 11,
        fontWeight: 900,
        padding: `1px 6px`,
        borderRadius: 3,
        border: `2px solid #050a05`,
        zIndex: 3,
      },
      children: txt,
    });
  return (0, P.jsx)(`div`, {
    "data-testid": `char-grid`,
    style: {
      display: `grid`,
      gridTemplateColumns: `repeat(3, 92px)`,
      gap: 10,
      justifyContent: `center`,
      padding: `14px 8px 4px`,
    },
    children: cells.map((id, i) => {
      const lock = !id,
        rnd = id === `random`,
        ch = !lock && !rnd ? AF_char(id) : null;
      const sel1 = !!id && p1c === id,
        sel2 = !!id && p2c === id;
      return (0, P.jsxs)(`button`, {
        type: `button`,
        key: i,
        "data-testid": lock ? `grid-locked-${i}` : `grid-${id}`,
        disabled: lock,
        onClick: (e) => {
          lock || onPick(e.shiftKey ? 2 : 1, id);
        },
        onContextMenu: (e) => {
          e.preventDefault();
          lock || onPick(2, id);
        },
        style: {
          position: `relative`,
          width: 92,
          height: 92,
          padding: 0,
          border: `3px solid ${lock ? `#1b1b30` : `#3a3a66`}`,
          borderRadius: 6,
          background: lock
            ? `#0b0b18`
            : rnd
              ? `radial-gradient(circle, #3a2a00, #120c00)`
              : `#10102a`,
          overflow: `visible`,
          cursor: lock ? `not-allowed` : `pointer`,
        },
        children: [
          (0, P.jsxs)(`div`, {
            style: { position: `absolute`, inset: 0, overflow: `hidden`, borderRadius: 3 },
            children: [
              ch &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    backgroundImage: `url(${ch.img()})`,
                    backgroundSize: `215% auto`,
                    backgroundPosition: `50% 2%`,
                    backgroundRepeat: `no-repeat`,
                    filter: sel1 || sel2 ? `none` : `brightness(.7)`,
                  },
                }),
              rnd &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    fontSize: 60,
                    fontWeight: 900,
                    color: `#ffd24a`,
                    textShadow: `3px 3px 0 #000`,
                    fontFamily: `"Outfit Variable", Outfit, sans-serif`,
                  },
                  children: `?`,
                }),
              lock &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    color: `#2c2c4a`,
                    fontWeight: 900,
                  },
                  children: [
                    (0, P.jsx)(`span`, {
                      key: `q`,
                      style: { fontSize: 46, lineHeight: 1 },
                      children: `?`,
                    }),
                    (0, P.jsx)(`span`, {
                      key: `y`,
                      className: `font-monox`,
                      style: { fontSize: 9, letterSpacing: `.15em`, marginTop: 2 },
                      children: `YAKINDA`,
                    }),
                  ],
                }),
              !lock &&
                (0, P.jsx)(`div`, {
                  className: `font-monox`,
                  style: {
                    position: `absolute`,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `rgba(0,0,0,.72)`,
                    color: `#fff`,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: `.12em`,
                    padding: `2px 0`,
                    textAlign: `center`,
                  },
                  children: rnd ? `RASTGELE` : ch.name,
                }),
            ],
          }),
          sel1 &&
            (0, P.jsx)(`div`, {
              className: `anim-blink`,
              style: {
                position: `absolute`,
                inset: -5,
                border: `4px solid #ff2a5f`,
                borderRadius: 8,
                boxShadow: `0 0 14px #ff2a5f`,
                zIndex: 2,
                pointerEvents: `none`,
              },
            }),
          sel2 &&
            (0, P.jsx)(`div`, {
              className: `anim-blink`,
              style: {
                position: `absolute`,
                inset: sel1 ? -1 : -5,
                border: `4px ${sel1 ? `dashed` : `solid`} #00c8ff`,
                borderRadius: 8,
                boxShadow: `0 0 14px #00c8ff`,
                zIndex: 2,
                pointerEvents: `none`,
              },
            }),
          sel1 && tag(r1 ? `1P ✓` : `1P`, `#ff2a5f`, `left`),
          sel2 && tag(bot ? `BOT` : r2 ? `2P ✓` : `2P`, `#00a8d8`, `right`),
        ],
      });
    }),
  });
}

var AF_DIFFS = [
  [`easy`, `KOLAY`, `#3ddc84`],
  [`normal`, `NORMAL`, `#ffd24a`],
  [`hard`, `ZOR`, `#ff2a5f`],
];

function gy() {
  let nav = wn(),
    [q] = Zr(),
    bot = q.get(`mode`) === `bot`;
  const norm = (v) => (v === `random` ? v : AF_char(v).id);
  const [p1c, sp1] = (0, N.useState)(norm(q.get(`p1`) || `umut`)),
    [p2c, sp2] = (0, N.useState)(norm(q.get(`p2`) || `sudem`)),
    [df, setDf] = (0, N.useState)(
      [`easy`, `normal`, `hard`].includes(q.get(`diff`)) ? q.get(`diff`) : `normal`,
    ),
    [r1, setR1] = (0, N.useState)(!1),
    [r2, setR2] = (0, N.useState)(bot);
  const lock = (0, N.useRef)(!1),
    rf = (0, N.useRef)({});
  rf.current = { p1c, p2c, df, bot, r1, r2 };
  const start = (0, N.useCallback)(() => {
    if (lock.current) return;
    lock.current = !0;
    X.ensure();
    X.uiClick();
    const t = rf.current,
      a = t.p1c === `random` ? AF_pick() : t.p1c,
      b = t.p2c === `random` ? AF_pick() : t.p2c;
    sp1(a);
    sp2(b);
    setR1(!0);
    setR2(!0);
    window.setTimeout(
      () => nav(`/battle?mode=${t.bot ? `bot` : `2p`}&p1=${a}&p2=${b}&diff=${t.df}`),
      650,
    );
  }, [nav]);
  const ready1 = (0, N.useCallback)(() => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    const t = rf.current;
    if (!t.r1 && t.p1c === `random`) {
      const c = AF_pick();
      sp1(c);
      t.p1c = c;
    }
    setR1((v) => !v);
  }, []);
  const ready2 = (0, N.useCallback)(() => {
    if (bot || lock.current) return;
    X.ensure();
    X.uiClick();
    const t = rf.current;
    if (!t.r2 && t.p2c === `random`) {
      const c = AF_pick();
      sp2(c);
      t.p2c = c;
    }
    setR2((v) => !v);
  }, [bot]);
  const step = (c, d) => AF_SEL[(AF_SEL.indexOf(c) + d + AF_SEL.length) % AF_SEL.length];
  const mv1 = (0, N.useCallback)((d) => {
    if (rf.current.r1 || lock.current) return;
    X.ensure();
    X.uiClick();
    sp1((c) => step(c, d));
  }, []);
  const mv2 = (0, N.useCallback)((d) => {
    if (lock.current || (!rf.current.bot && rf.current.r2)) return;
    X.ensure();
    X.uiClick();
    sp2((c) => step(c, d));
  }, []);
  const pick = (0, N.useCallback)((side, id) => {
    if (lock.current) return;
    const t = rf.current;
    if (side === 1) {
      if (t.r1) return;
      X.ensure();
      X.uiClick();
      sp1(id);
    } else {
      if (!t.bot && t.r2) return;
      X.ensure();
      X.uiClick();
      sp2(id);
    }
  }, []);
  const dsel = (0, N.useCallback)((e) => {
    X.ensure();
    X.uiClick();
    setDf(e);
  }, []);
  const d = r1 && r2;
  (0, N.useEffect)(() => {
    d && start();
  }, [d, start]);
  (0, N.useEffect)(() => {
    const h = (e) => {
      [
        `ArrowUp`,
        `ArrowDown`,
        `ArrowLeft`,
        `ArrowRight`,
        `Numpad0`,
        `Numpad1`,
        `Numpad2`,
        `Numpad4`,
        `Numpad5`,
      ].includes(e.code) && e.preventDefault();
      e.code === `KeyZ`
        ? ready1()
        : e.code === `Numpad1` || e.code === `KeyJ`
          ? ready2()
          : e.code === `Enter`
            ? start()
            : e.code === `KeyA`
              ? mv1(-1)
              : e.code === `KeyD`
                ? mv1(1)
                : e.code === `ArrowLeft`
                  ? mv2(-1)
                  : e.code === `ArrowRight`
                    ? mv2(1)
                    : bot && e.code === `Digit1`
                      ? dsel(`easy`)
                      : bot && e.code === `Digit2`
                        ? dsel(`normal`)
                        : bot && e.code === `Digit3` && dsel(`hard`);
    };
    window.addEventListener(`keydown`, h);
    return () => window.removeEventListener(`keydown`, h);
  }, [ready1, ready2, start, mv1, mv2, dsel, bot]);
  const mp = (id, ready, isBot) => ({ id, rand: id === `random`, ready, bot: isBot });
  return (0, P.jsxs)(`div`, {
    "data-testid": `select-screen`,
    className: `scanlines relative min-h-svh overflow-hidden bg-[#06070f] px-4 py-6 text-white`,
    children: [
      (0, P.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,240,255,0.08),transparent_55%)]`,
      }),
      (0, P.jsxs)(`div`, {
        className: `relative z-10 mx-auto max-w-7xl`,
        children: [
          (0, P.jsxs)(`div`, {
            className: `text-center`,
            children: [
              (0, P.jsx)(`h1`, {
                className: `neon-cyan font-display text-3xl font-black tracking-wide sm:text-4xl`,
                children: `DÖVÜŞÇÜ SEÇİMİ`,
              }),
              (0, P.jsxs)(`p`, {
                "data-testid": `select-mode-label`,
                className: `font-monox mt-1 text-xs tracking-[0.3em] text-slate-400`,
                children: [
                  bot ? `1 OYUNCU · BOTA KARŞI` : `2 OYUNCU · YEREL`,
                  ` · 99 SANİYE · EN İYİ 3 RAUNT`,
                ],
              }),
            ],
          }),
          (0, P.jsxs)(`div`, {
            className: `mt-6 flex flex-col items-stretch justify-center gap-4 lg:flex-row`,
            children: [
              (0, P.jsx)(AF_Card, {
                side: 1,
                charId: p1c,
                onPrev: () => mv1(-1),
                onNext: () => mv1(1),
                ready: r1,
                onReady: ready1,
                isBot: !1,
                canSwitch: !r1,
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-1 flex-col items-center justify-start gap-2`,
                children: [
                  (0, P.jsx)(AF_Map, { p1: mp(p1c, r1, !1), p2: mp(p2c, r2, bot) }),
                  (0, P.jsx)(AF_Grid, { p1c, p2c, r1, r2, bot, onPick: pick }),
                  bot &&
                    (0, P.jsxs)(`div`, {
                      "data-testid": `difficulty-picker`,
                      className: `flex flex-col items-center gap-2`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `font-monox text-[10px] tracking-[0.3em] text-slate-500`,
                          children: `BOT ZORLUĞU · 1/2/3`,
                        }),
                        (0, P.jsx)(`div`, {
                          className: `flex gap-2`,
                          children: AF_DIFFS.map(([e, t, n]) =>
                            (0, P.jsx)(
                              uy,
                              {
                                "data-testid": `diff-${e}`,
                                variant: df === e ? `default` : `outline`,
                                size: `sm`,
                                onClick: () => dsel(e),
                                className: `font-display font-bold tracking-widest`,
                                style:
                                  df === e
                                    ? { background: n, color: `#06070f` }
                                    : { borderColor: n, color: n },
                                children: t,
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  p1c === p2c &&
                    p1c !== `random` &&
                    (0, P.jsx)(`p`, {
                      className: `font-monox text-[10px] tracking-widest text-amber-300/80`,
                      children: `AYNA MAÇI — P2 farklı renk tonuyla dövüşür`,
                    }),
                  (0, P.jsx)(`p`, {
                    "data-testid": `select-status`,
                    className: `font-monox text-center text-sm text-slate-300`,
                    children: d
                      ? `DÖVÜŞ BAŞLIYOR...`
                      : bot
                        ? `KARAKTER: A/D (SEN) · ◄/► (BOT) · HAZIR OL: Z`
                        : `KARAKTER: A/D (P1) · ◄/► (P2) · HAZIR: Z / NUM 1`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `font-monox text-center text-[10px] tracking-wider text-slate-500`,
                    children: `Kutuya tıkla: P1 · sağ tık veya Shift+tık: P2 · ? = rastgele`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `select-fight-button`,
                    size: `lg`,
                    onClick: start,
                    className: `font-display px-10 text-xl font-black tracking-widest`,
                    children: `DÖVÜŞ! ▶`,
                  }),
                ],
              }),
              (0, P.jsx)(AF_Card, {
                side: 2,
                charId: p2c,
                onPrev: () => mv2(-1),
                onNext: () => mv2(1),
                ready: r2,
                onReady: ready2,
                isBot: bot,
                canSwitch: bot ? !0 : !r2,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

// 50-game-render-hud-ko.js — HUD çizimi, KO yatış geometrisi.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var _y = `"JetBrains Mono Variable", "JetBrains Mono", monospace`;

function vy(e, t) {
  let n = e.replace(`#`, ``);
  return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${t})`;
}

function yy(e) {
  let t = e.ctx;
  (t.setTransform(1, 0, 0, 1, 0, 0),
    (t.imageSmoothingEnabled = !0),
    (t.fillStyle = `#05060f`),
    t.fillRect(0, 0, $h, 768));
  let n = 0,
    r = 0;
  if (e.shakeT > 0) {
    let t = e.shakeMag * (e.shakeT / e.shakeDur);
    ((n = (Math.random() * 2 - 1) * t), (r = (Math.random() * 2 - 1) * t * 0.7));
  }
  (t.save(),
    t.translate(n, r),
    t.drawImage(e.assets.bg, 0, 0, $h, 768),
    by(t, e.p1),
    by(t, e.p2),
    xy(t, e.p2),
    xy(t, e.p1));
  for (let n of e.projectiles) Ty(t, n);
  (Ey(t, e.lensFlashes),
    Dy(t, e.sparks),
    Oy(t, e.dmgs),
    e.showBoxes && Sy(t, e),
    t.restore(),
    My(t, e),
    Ny(t, e),
    Py(t, e),
    e.flashA > 0 &&
      ((t.fillStyle = `rgba(255,255,255,${pg(e.flashA, 0, 0.92)})`), t.fillRect(0, 0, $h, 768)));
}

function by(e, t) {
  let n = t.x > 387 && t.x < 990 && t.y <= 489,
    r = t.ground === `table` || n ? 429 : 704,
    i = Math.max(0, r - t.y),
    a = 0.4 * pg(1 - i / 480, 0.12, 1),
    o = t.halfW * (1.4 + i / 420 + (t.state === `ko` ? 1.8 * Math.min(1, t.koT / 450) : 0));
  (e.save(),
    (e.fillStyle = `rgba(0,0,0,${a})`),
    e.beginPath(),
    e.ellipse(t.x, r + 3, o, o * 0.2, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}

function AF_legParts(r) {
  if (r.__lp !== undefined) return r.__lp;
  r.__lp = null;
  try {
    const w = r.w,
      h = r.h,
      c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(r.img, 0, 0);
    const d = g.getImageData(0, 0, w, h).data,
      solid = (x, y) => d[(y * w + x) * 4 + 3] > 60;
    const runs = (y) => {
      const o = [];
      let st = -1,
        pv = -9;
      for (let x = 0; x < w; x++)
        if (solid(x, y)) {
          if (st < 0) st = x;
          else if (x - pv > 3) {
            o.push([st, pv]);
            st = x;
          }
          pv = x;
        }
      if (st >= 0) o.push([st, pv]);
      return o;
    };
    const bot = r.by + r.bh - 1;
    let cr = -1;
    for (let y = Math.floor(r.by + r.bh * 0.5); y < bot - 20 && cr < 0; y++) {
      if (runs(y).length >= 2) {
        let ok = true;
        for (let k = 1; k < 20; k++)
          if (runs(y + k).length < 2) {
            ok = false;
            break;
          }
        if (ok) cr = y;
      }
    }
    if (cr < 0) return null;
    const rr = runs(cr + 10)
      .sort((a, b) => b[1] - b[0] - (a[1] - a[0]))
      .slice(0, 2)
      .sort((a, b) => a[0] - b[0]);
    if (rr.length < 2) return null;
    const sx = Math.floor((rr[0][1] + rr[1][0]) / 2),
      cut = cr - 10,
      ovl = 16;
    const mk = (x0, y0, ww, hh) => {
      const k = document.createElement("canvas");
      k.width = w;
      k.height = h;
      const q = k.getContext("2d");
      q.beginPath();
      q.rect(x0, y0, ww, hh);
      q.clip();
      q.drawImage(r.img, 0, 0);
      return k;
    };
    const sole = (x0, x1) => {
      let low = -1;
      for (let y = h - 1; y >= cut && low < 0; y--)
        for (let x = x0; x < x1; x++)
          if (solid(x, y)) {
            low = y;
            break;
          }
      if (low < 0) return [];
      let xl = 1e9,
        xr = -1;
      for (let y = Math.max(cut, low - 6); y <= low; y++)
        for (let x = x0; x < x1; x++)
          if (solid(x, y)) {
            if (x < xl) xl = x;
            if (x > xr) xr = x;
          }
      const yb = low + 1;
      return [
        [xl, yb],
        [xr, yb],
        [(xl + xr) / 2, yb],
      ];
    };
    r.__lp = {
      legL: mk(0, cut, sx, h - cut),
      legR: mk(sx, cut, w - sx, h - cut),
      upper: mk(0, 0, w, cut + ovl),
      px: sx,
      cut,
      soleL: sole(0, sx),
      soleR: sole(sx, w),
    };
  } catch (err) {
    r.__lp = null;
  }
  return r.__lp;
}

function AF_koGeom(r) {
  if (r.__ko !== undefined) return r.__ko;
  r.__ko = null;
  try {
    const w = r.w,
      h = r.h,
      c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(r.img, 0, 0);
    const d = g.getImageData(0, 0, w, h).data,
      sc = r.scale,
      ox = r.ax,
      oy = r.by + r.bh,
      top = r.by,
      bh = r.bh;
    const pts = [],
      hx = [],
      hx2 = [],
      fx = [];
    let hy = 0,
      hn = 0,
      py = 0,
      pn = 0,
      fy = 0,
      fn = 0;
    for (let y = 0; y < h; y += 2)
      for (let x = 0; x < w; x += 2)
        if (d[(y * w + x) * 4 + 3] > 60) {
          const lx = (x - ox) * sc,
            ly = (y - oy) * sc;
          pts.push([lx, ly, y]);
          if (y < top + bh * 0.15) {
            hx.push(lx);
            hy += ly;
            hn++;
          } else if (y >= top + bh * 0.42 && y < top + bh * 0.52) {
            hx2.push(lx);
            py += ly;
            pn++;
          } else if (y >= top + bh * 0.88) {
            fx.push(lx);
            fy += ly;
            fn++;
          }
        }
    if (!pts.length || !hn || !pn || !fn) return null;
    const med = (a) => {
      a.sort((p, q) => p - q);
      return a[a.length >> 1];
    };
    const Hx = med(hx2),
      Hy = py / pn,
      cutY = Hy / sc + oy; // kalça = gövde/bacak ayrım noktası (menteşe)
    // gövde ekseni kafa->kalça, bacak ekseni kalça->ayaklar; ikisi de ayrı ayrı yere paralel yatırılır
    const Au = Math.atan2(Hy - hy / hn, Hx - med(hx)),
      Al = Math.atan2(fy / fn - Hy, med(fx) - Hx);
    const ov = Math.round(h * 0.035),
      slH = Math.round(h * 0.12);
    const mk = (y0, y1) => {
      const k = document.createElement("canvas");
      k.width = w;
      k.height = h;
      const q = k.getContext("2d");
      q.beginPath();
      q.rect(0, y0, w, y1 - y0);
      q.clip();
      q.drawImage(r.img, 0, 0);
      return k;
    };
    const cy = Math.round(cutY),
      Dc = 0.12 * bh * sc;
    const dl = (p, a, b) => {
      const vx = b[0] - a[0],
        vy = b[1] - a[1];
      return Math.abs((p[0] - a[0]) * vy - (p[1] - a[1]) * vx) / Math.hypot(vx, vy);
    };
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const hull = (P) => {
      P = P.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const lo = [];
      for (const p of P) {
        while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
        lo.push(p);
      }
      const up = [];
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i];
        while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop();
        up.push(p);
      }
      return lo.slice(0, -1).concat(up.slice(0, -1));
    };
    r.__ko = {
      Au,
      Al,
      H: [Hx, Hy],
      up: mk(0, cy + ov),
      lo: mk(cy, h),
      sl: mk(cy, cy + slH),
      hu: hull(pts.filter((p) => p[2] < cy + ov)),
      hl: hull(pts.filter((p) => p[2] >= cy)),
      cu: hull(pts.filter((p) => p[2] < cy + ov && dl(p, [med(hx), hy / hn], [Hx, Hy]) < Dc)),
      cl: hull(pts.filter((p) => p[2] >= cy && dl(p, [Hx, Hy], [med(fx), fy / fn]) < Dc)),
    };
  } catch (err) {
    r.__ko = null;
  }
  return r.__ko;
}

function AF_koAng(t, g) {
  const n = Math.min(1, t.koT / 450);
  return [g.Au * n, g.Al * n];
}

function AF_koPt(g, p, th) {
  const dx = p[0] - g.H[0],
    dy = p[1] - g.H[1],
    s = Math.sin(th),
    c = Math.cos(th);
  return [g.H[0] + dx * c + dy * s, g.H[1] - dx * s + dy * c];
}

function AF_koLift(t) {
  const g = AF_koGeom(t.spr.frames.hurt);
  if (!g) return 0;
  const [a, b] = AF_koAng(t, g);
  let m = -1e9;
  for (const p of g.cu) {
    const y = AF_koPt(g, p, a)[1];
    if (y > m) m = y;
  }
  for (const p of g.cl) {
    const y = AF_koPt(g, p, b)[1];
    if (y > m) m = y;
  }
  return m;
}

function AF_koClamp(t) {
  const g = AF_koGeom(t.spr.frames.hurt);
  if (!g) return pg(t.x, 40, $h - 40);
  const [a, b] = AF_koAng(t, g);
  let mn = 1e9,
    mx = -1e9;
  const f = (P, th) => {
    for (const p of P) {
      const v = t.facing * AF_koPt(g, p, th)[0];
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  };
  f(g.hu, a);
  f(g.hl, b);
  return pg(t.x, 8 - mn, $h - 8 - mx);
}

// 51-game-settings-keymap-rounds.js — Ayar deposu, varsayılan tuş haritası, tuş etiketleri, raunt metinleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var AF_DEFKEYS = {
  p1: {
    left: [`KeyA`],
    right: [`KeyD`],
    jump: [`KeyW`],
    down: [`KeyS`],
    atk0: [`KeyZ`],
    atk1: [`KeyX`],
    atk2: [`ShiftLeft`],
    atk3: [`ControlLeft`],
    guard: [`KeyV`],
    ult: [`KeyC`],
    proj: [`KeyF`],
    sweep: [`KeyG`],
    dash: [`Space`],
    flip: [`KeyE`], // W/A/D'nin hemen yanında; sol elle en rahat ulaşılan boş tuş
  },
  p2: {
    left: [`ArrowLeft`],
    right: [`ArrowRight`],
    jump: [`ArrowUp`],
    down: [`ArrowDown`],
    atk0: [`Numpad1`, `KeyJ`],
    atk1: [`Numpad2`, `KeyK`],
    atk2: [`Numpad4`, `KeyU`],
    atk3: [`Numpad5`, `KeyI`],
    guard: [`Numpad3`, `KeyL`],
    ult: [`Numpad0`, `KeyO`],
    proj: [`Numpad9`, `KeyH`],
    sweep: [`Numpad8`, `KeyM`],
    dash: [`ShiftRight`, `Numpad7`],
    flip: [`Numpad6`, `KeyN`], // Numpad'de 4/5'in yanı; numpad yoksa J/H'nin altındaki N
  },
};

var AF_DEF = {
  vol: 100,
  rounds: 3,
  time: 99,
  dmg: 1,
  guard: !0,
  ult: !0,
  shake: !0,
  dmgnum: !0,
  scan: !0,
  boxes: !1,
  hints: !0,
  keys: AF_DEFKEYS,
};

var AF_OPT = { rounds: [1, 3, 5], time: [30, 60, 99, 0], dmg: [0.5, 1, 1.5, 2] };

var AF_KEY = `ankara-fighter-ayarlar-v1`;

var AF_modal = 0;

var AF_BAD = new Set([
  `Escape`,
  `KeyP`,
  `F2`,
  `Enter`,
  `NumpadEnter`,
  `Tab`,
  `MetaLeft`,
  `MetaRight`,
  `ContextMenu`,
]);

function AF_clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function AF_load() {
  const s = AF_clone(AF_DEF);
  try {
    const r = JSON.parse(localStorage.getItem(AF_KEY) || `null`);
    if (r && typeof r === `object`) {
      if (typeof r.vol === `number` && r.vol >= 0 && r.vol <= 100) s.vol = Math.round(r.vol);
      for (const k of Object.keys(AF_OPT)) if (AF_OPT[k].includes(r[k])) s[k] = r[k];
      for (const k of [`guard`, `ult`, `shake`, `dmgnum`, `scan`, `boxes`, `hints`])
        if (typeof r[k] === `boolean`) s[k] = r[k];
      if (r.keys && typeof r.keys === `object`)
        for (const p of [`p1`, `p2`])
          for (const a of Object.keys(AF_DEFKEYS[p])) {
            const v = r.keys[p] && r.keys[p][a];
            // Eski varsayılan takla tuşları (R / T) kayıtlıysa yeni varsayılana geç.
            if (a === `flip` && Array.isArray(v) && v.length === 1 && (v[0] === `KeyR` || v[0] === `KeyT`))
              continue;
            if (
              Array.isArray(v) &&
              v.length &&
              v.every((x) => typeof x === `string` && x.length < 24 && !AF_BAD.has(x))
            )
              s.keys[p][a] = v.slice(0, 3);
          }
    }
  } catch {}
  return s;
}

var AF_S = AF_load();

function AF_save() {
  try {
    localStorage.setItem(AF_KEY, JSON.stringify(AF_S));
  } catch {}
}

function AF_keymap() {
  const m = {};
  for (const [pi, p] of [
    [0, `p1`],
    [1, `p2`],
  ])
    for (const a of Object.keys(AF_S.keys[p]))
      for (const c of AF_S.keys[p][a]) m[c] = { player: pi, action: a };
  return m;
}

function AF_apply(k) {
  if (!k || k === `vol`)
    try {
      X.master && (X.master.gain.value = (0.4 * AF_S.vol) / 100);
    } catch {}
  if (!k || k === `scan`)
    try {
      let st = document.getElementById(`af-scan`);
      if (AF_S.scan) {
        st && st.remove();
      } else if (!st) {
        st = document.createElement(`style`);
        st.id = `af-scan`;
        st.textContent = `.scanlines:after{display:none!important}`;
        document.head.appendChild(st);
      }
    } catch {}
  if (!k || k === `keys`)
    try {
      Fy = AF_keymap();
      Iy = new Set([...Object.keys(Fy), `Space`]);
    } catch {}
}

function AF_set(k, v) {
  AF_S[k] = v;
  AF_save();
  AF_apply(k);
}

function AF_resetAll() {
  AF_S = AF_clone(AF_DEF);
  AF_save();
  AF_apply();
}

function AF_rebind(p, a, code) {
  const K = AF_S.keys,
    old = K[p][a][0];
  for (const q of [`p1`, `p2`])
    for (const b of Object.keys(K[q])) {
      const i = K[q][b].indexOf(code);
      if (i >= 0) {
        K[q][b].splice(i, 1);
        if (!K[q][b].length && old && !(q === p && b === a)) K[q][b].push(old);
      }
    }
  K[p][a] = [code];
  AF_save();
  AF_apply(`keys`);
}

function AF_kl(c, short) {
  if (!c) return `—`;
  const f = {
    ArrowLeft: `◄`,
    ArrowRight: `►`,
    ArrowUp: `▲`,
    ArrowDown: `▼`,
    ShiftLeft: short ? `SHIFT` : `SOL SHIFT`,
    ShiftRight: short ? `SHIFT` : `SAĞ SHIFT`,
    ControlLeft: short ? `CTRL` : `SOL CTRL`,
    ControlRight: short ? `CTRL` : `SAĞ CTRL`,
    AltLeft: `SOL ALT`,
    AltRight: `SAĞ ALT`,
    Space: `BOŞLUK`,
    Backspace: `SİL`,
    Comma: `,`,
    Period: `.`,
    Slash: `/`,
    Semicolon: `;`,
    Quote: `'`,
    BracketLeft: `[`,
    BracketRight: `]`,
    Backslash: `\\`,
    Minus: `-`,
    Equal: `=`,
    Backquote: `\``,
    NumpadAdd: `NUM +`,
    NumpadSubtract: `NUM -`,
    NumpadMultiply: `NUM *`,
    NumpadDivide: `NUM /`,
    NumpadDecimal: `NUM .`,
  };
  if (f[c]) return f[c];
  let m = /^Key([A-Z])$/.exec(c);
  if (m) return m[1];
  m = /^Digit(\d)$/.exec(c);
  if (m) return m[1];
  m = /^Numpad(\d)$/.exec(c);
  if (m) return `NUM ` + m[1];
  return c.toUpperCase();
}

function AF_k(pi, a, short) {
  return AF_kl(AF_S.keys[pi === 0 ? `p1` : `p2`][a][0], short !== !1);
}

function AF_pair(a, b) {
  return a.startsWith(`NUM `) && b.startsWith(`NUM `)
    ? `NUM ${a.slice(4)}/${b.slice(4)}`
    : `${a}/${b}`;
}

function AF_legend(pi) {
  const k = (a) => AF_k(pi, a),
    takla = AF_UMUT_OZEL ? ` · ${k(`flip`)}+YÖN TAKLA · ${k(`sweep`)} SÜPÜRME` : ``;
  return [
    `${k(`left`)}/${k(`right`)} HAREKET · ${k(`jump`)} ZIPLA · ${k(`down`)} EĞİL · ${k(`guard`)} KORUMA`,
    `${k(`atk0`)} YUMRUK · ${k(`atk1`)} TEKME · ${AF_pair(k(`atk2`), k(`atk3`))} GÜÇLÜ · ${k(`proj`)} YÜZÜK (SUDEM) · ${k(`dash`)} KOŞU (METEHAN)${takla} · ${k(`ult`)} ULTİ`,
  ];
}

function AF_footer(pi) {
  const k = (a) => AF_k(pi, a),
    takla = AF_UMUT_OZEL ? ` · ${k(`flip`)}+YÖN TAKLA · ${k(`sweep`)} SÜPÜRME` : ``;
  return ` ${k(`left`)}/${k(`right`)} · ${k(`jump`)} ZIPLA · ${k(`down`)} EĞİL · ${k(`atk0`)} YUMRUK · ${k(`atk1`)} TEKME · ${AF_pair(k(`atk2`), k(`atk3`))} GÜÇLÜ · ${k(`guard`)} KORUMA · ${k(`proj`)} YÜZÜK · ${k(`dash`)} KOŞU${takla} · ${k(`ult`)} ULTİ`;
}

function AF_cardLines(pi, s) {
  const k = (a) => AF_k(pi, a);
  const ozel = s.proj
    ? `${k(`proj`)} — sihirli yüzük (uzaktan)`
    : s.run
      ? `${k(`dash`)} — koşu çarpması (zırhlı)`
      : s.roll
        ? `${k(`flip`)}+yön takla · ${k(`sweep`)} süpürme`
        : null;
  return [
    `${k(`left`)}/${k(`right`)} hareket · ${k(`jump`)} zıpla · ${k(`down`)} eğil`,
    `${k(`atk0`)} yumruk · ${k(`atk1`)} tekme · ${AF_pair(k(`atk2`), k(`atk3`))} güçlü`,
    `${k(`guard`)} — koruma (basılı tut)`,
    ozel,
    `${k(`ult`)} — ${s.ultName} (${s.ultHint})`,
  ].filter(Boolean);
}

function AF_scaleHit(n) {
  const m = AF_S.dmg;
  return m === 1 ? n : { ...n, damage: Math.max(1, Math.round(n.damage * m)) };
}

function AF_final(g) {
  return g.need > 1 && g.wins[0] === g.need - 1 && g.wins[1] === g.need - 1;
}

function AF_roundText(g) {
  return AF_final(g) ? `SON RAUNT!` : `RAUNT ${g.round}`;
}

// 52-game-round-guard.js — Raunt akışı, koruma (guard) efekti ve yürüyüş adımı.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_resetFighter(f) {
  f.x = f.idx === 0 ? $h * 0.26 : $h * 0.74;
  f.y = 704;
  f.vx = 0;
  f.vy = 0;
  f.facing = f.idx === 0 ? 1 : -1;
  f.hp = f.maxHp;
  f.ghostHp = f.maxHp;
  f.state = `idle`;
  f.ground = `g1`;
  f.attack = null;
  f.hitstunT = 0;
  f.hitFlash = 0;
  f.dropT = 0;
  f.koT = 0;
  f.combo = 0;
  f.comboT = 0;
  f.comboPopT = 999;
  f.ultiAuraT = 0;
  f.bufAtk = -1;
  f.bufAtkT = 0;
  f.bufUltT = 0;
  f.projCd = 0;
  f.rollCd = 0;
  f.rollInv = !1;
  f.rollT = 0;
  f.airFlip = !1;
  f.airFlipT = 0;
  f.airFlipDir = 0;
  f.airFlipCrossed = !1;
  f.flipLandDir = 0;
  f.flipLandT = 0;
  f.bufFlipT = 0;
  f.bufDirT = 0;
  f.bufDirDir = 0;
  f.jumpGraceT = 0;
  f.tableLock = !1;
  f.landT = 0;
  f.jumpT = 0;
  f.walkP = 0;
  f.walkB = 0;
  f.gp = 100;
  f.blockT = 0;
  f.guardLow = !1;
}

function AF_endRound(g) {
  const w = g.pendingWinner;
  if (w === 1) g.wins[0]++;
  else if (w === 2) g.wins[1]++;
  else {
    g.wins[0]++;
    g.wins[1]++;
  }
  if (g.wins[0] >= g.need || g.wins[1] >= g.need || g.round >= g.maxRounds) {
    g.finish();
    return;
  }
  g.round++;
  AF_resetFighter(g.p1);
  AF_resetFighter(g.p2);
  g.phase = `intro`;
  g.phaseT = 0;
  g.timeLeft = g.roundTime;
  g.fightAnnounced = !1;
  g.hitstopT = 0;
  g.shakeT = 0;
  g.flashA = 0.55;
  g.sparks = [];
  g.dmgs = [];
  g.projectiles = [];
  g.lensFlashes = [];
  g.announce = {
    text: AF_roundText(g),
    t: 0,
    dur: 800,
    size: 72,
    color: AF_final(g) ? `#ff2a5f` : `#ffffff`,
  };
  g.vsBot && (g.bot = new Hy(g.diff));
  X.roundStart();
}

function AF_roundHud(e, t) {
  const cx = $h / 2;
  e.save();
  e.textAlign = `center`;
  e.font = `800 13px ${_y}`;
  e.fillStyle = `rgba(255,255,255,.8)`;
  e.fillText(t.maxRounds > 1 ? `RAUNT ${t.round}` : `TEK RAUNT`, cx, 98);
  for (let sd = 0; sd < 2; sd++) {
    const p = sd === 0 ? t.p1 : t.p2;
    for (let k = 0; k < t.need; k++) {
      const x = cx + (sd === 0 ? -1 : 1) * (62 + k * 22),
        won = t.wins[sd] > k;
      e.beginPath();
      e.arc(x, 94, 7, 0, Math.PI * 2);
      e.fillStyle = won ? p.accent : `rgba(4,5,12,.8)`;
      e.fill();
      if (won) {
        e.save();
        e.shadowColor = p.accent;
        e.shadowBlur = 10;
        e.fill();
        e.restore();
      }
      e.lineWidth = 2;
      e.strokeStyle = won ? `#ffffff` : `rgba(255,255,255,.45)`;
      e.stroke();
    }
  }
  e.restore();
}

function AF_block(g, e, t, n, a, r, i) {
  const ult = n.pose === `ult`,
    drain = n.damage * (ult ? 3.5 : 2.6);
  if (t.gp < drain) {
    t.gp = 30;
    g.dmgs.push({
      x: t.x,
      y: t.y - t.spr.frames.idle.visibleH * 0.95,
      text: `KORUMA KIRILDI!`,
      life: 900,
      max: 900,
      color: `#ff5a5a`,
      size: 24,
    });
    return !1;
  }
  t.gp -= drain;
  const chip = Math.min(
    Math.max(0, t.hp - 1),
    Math.max(1, Math.round(n.damage * (ult ? 0.3 : 0.12))),
  );
  t.hp -= chip;
  e.damageDealt += chip;
  g.addMeter(e, Math.round(n.meter * 0.4));
  g.addMeter(t, Math.round(n.meter * 0.3));
  t.blockT = 140;
  t.vx = a * Math.min(420, n.kbx * 0.5);
  ult || (e.vx = -a * 160);
  g.hitstopT = Math.min(90, 40 + n.damage * 2);
  g.shake(2 + n.damage * 0.3, 100);
  g.burst(r, i, 6 + (n.damage >> 1), a, `#9fd8ff`);
  g.dmgs.push({
    x: r,
    y: i - 30,
    text: chip > 0 ? `BLOK -${chip}` : `BLOK`,
    life: 600,
    max: 600,
    color: `#9fd8ff`,
    size: 18,
  });
  X.hitLight();
  return !0;
}

function AF_guardFx(e, t, r) {
  if (t.state === `ko`) return;
  const g = t.state === `guard`;
  if (g || t.gp < 99) {
    const w = 56,
      y = -t.spr.frames.idle.visibleH - 20;
    e.save();
    e.fillStyle = `rgba(4,5,12,.85)`;
    e.fillRect(-w / 2 - 2, y - 2, w + 4, 9);
    e.strokeStyle = `rgba(255,255,255,.55)`;
    e.lineWidth = 1;
    e.strokeRect(-w / 2 - 2, y - 2, w + 4, 9);
    e.fillStyle = t.gp > 35 ? `#7cc8ff` : `#ff5a5a`;
    e.fillRect(-w / 2, y, (w * Math.max(0, t.gp)) / 100, 5);
    e.restore();
  }
}

function AF_walkStep(t, dt) {
  const wk = t.state === "walk" && t.grounded;
  t.walkB = wk ? Math.min(1, t.walkB + dt / 90) : Math.max(0, t.walkB - dt / 110);
  if (wk) t.walkP += (t.vx * t.facing >= 0 ? 1 : -1) * Math.abs(t.vx) * (dt / 1e3) * 0.0353;
}

// 53-game-render-fighters-fx.js — Dövüşçü çizimi (xy), parçacıklar, HUD parçaları, duyuru yazıları.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_drawBody(e, t, r) {
  const X = -r.ax * r.scale,
    Y = -(r.by + r.bh) * r.scale * (r.sy || 1),
    Wd = r.w * r.scale,
    Ht = r.h * r.scale * (r.sy || 1);
  if (t.state === "ko") {
    const g = AF_koGeom(r);
    if (g) {
      const [a, b] = AF_koAng(t, g),
        H = g.H;
      const part = (img, th) => {
        e.save();
        e.translate(H[0], H[1]);
        e.rotate(-th);
        e.translate(-H[0], -H[1]);
        e.drawImage(img, X, Y, Wd, Ht);
        e.restore();
      };
      for (let k = 1; k < 5; k++) part(g.sl, a + ((b - a) * k) / 5); // kalça bükümündeki boşluğu doldur
      part(g.lo, b);
      part(g.up, a);
      return;
    }
  }
  if (t.walkB > 0.001 && t.grounded && t.state !== "attack" && t.pose() === "idle") {
    const lp = AF_legParts(r);
    if (lp) {
      const B = t.walkB,
        ph = t.walkP,
        fwd = t.vx * t.facing >= 0,
        A = (((fwd ? 12 : 9) * Math.PI) / 180) * B,
        sn = Math.sin(ph),
        cs = Math.cos(ph);
      const px = (lp.px - r.ax) * r.scale,
        py = (lp.cut - (r.by + r.bh)) * r.scale;
      const leg = (img, th, lift) => {
        e.save();
        e.translate(px, py);
        e.rotate(th);
        e.scale(1, 1 - 0.07 * lift * B);
        e.translate(-px, -py);
        e.drawImage(img, X, Y, Wd, Ht);
        e.restore();
      };
      const low = (sole, th, lift) => {
        const s_ = 1 - 0.07 * lift * B,
          sn_ = Math.sin(th),
          cn_ = Math.cos(th);
        let m = -1e9;
        for (const q of sole) {
          const ddx = (q[0] - r.ax) * r.scale - px,
            ddy = (q[1] - (r.by + r.bh)) * r.scale - py,
            yy = py + ddx * sn_ + ddy * s_ * cn_;
          if (yy > m) m = yy;
        }
        return m;
      };
      const thL = -A * sn,
        thR = A * sn,
        lfL = Math.max(0, cs),
        lfR = Math.max(0, -cs);
      const lw = Math.max(low(lp.soleL, thL, lfL), low(lp.soleR, thR, lfR));
      e.save();
      if (lw > -1e8) e.translate(0, -lw); // en alçak ayak her karede zemin çizgisinde
      leg(lp.legL, thL, lfL);
      leg(lp.legR, thR, lfR);
      e.drawImage(lp.upper, X, Y, Wd, Ht);
      e.restore();
      return;
    }
  }
  e.drawImage(r.img, X, Y, Wd, Ht);
}

function AF_applyAnim(e, t) {
  if (t.state === "ko") return;

  const D = Math.PI / 180,
    T = t.animT;
  let dx = 0,
    dy = 0,
    rot = 0,
    sx = 1,
    sy = 1;
  if (t.landT > 0) {
    const k = t.landT / 150;
    sy *= 1 - 0.13 * k;
    sx *= 1 + 0.09 * k;
  }
  if (t.jumpT > 0 && !t.grounded) {
    const k = t.jumpT / 130;
    sy *= 1 + 0.08 * k;
    sx *= 1 - 0.05 * k;
  }
  const a = t.attack;
  if (t.state === "attack" && a && a.def.pose !== "ult" && a.def.startup > 0) {
    const d = a.def,
      amp = Math.min(8, d.startup / 25);
    if (a.t < d.startup) {
      const p = a.t / d.startup,
        q = p * p;
      dx = -amp * q;
      rot = -Math.min(5, d.startup / 40) * q * D;
      sy *= 1 - 0.025 * q;
    } else {
      const q = Math.min(1, (a.t - d.startup) / (d.active + d.recovery * 0.6)),
        r = 1 - q;
      dx = amp * r;
      rot = Math.min(4, d.startup / 50) * r * D;
    }
  } else if (t.state === "guard") {
    const k = t.blockT / 140;
    dx = -4 - 7 * k;
    rot = (-3 - 2 * k) * D;
    sy *= 0.985;
  } else if (t.pose() === "run") {
    dy = -Math.abs(Math.sin(t.walkP * 2)) * 4;
  } else if (t.walkB > 0.001 && t.grounded && t.pose() === "idle") {
    // sekme ve eğilme yok: kalça hareketi, basılı ayağın zemine oturmasından doğal olarak çıkar (AF_drawBody)
    dy = 0;
    rot = 0;
  } else if ((t.state === "idle" || t.state === "crouch") && t.grounded) {
    const b = Math.sin(T * 0.0042),
      k = t.state === "crouch" ? 0.6 : 1;
    sy *= 1 + b * 0.013 * k;
    sx *= 1 - b * 0.006 * k;
  }
  e.translate(dx * t.facing, dy);
  if (rot) e.rotate(rot * t.facing);
  e.scale(sx, sy);
}

// Çok kareli yumruk/tekme/koşu: saldırının evresine göre kare seçer.
// Hazırlık (startup) -> tepeye kadarki kareler, aktif -> tepe karesi, toparlanma -> tepeden sonraki kareler.
function AF_seqFrame(t) {
  const S = t.spr.seq;
  if (!S || t.state === `ko`) return null;
  const a = t.attack;
  if (t.state === `attack` && a && (a.def.pose === `punch` || a.def.pose === `kick`) && S[a.def.pose]) {
    const q = S[a.def.pose],
      pk = q.peak,
      d = a.def,
      tt = a.t;
    let f;
    if (tt < d.startup) {
      const L = q.slice(0, pk);
      f = L.length ? L[Math.min(L.length - 1, Math.floor((tt / d.startup) * L.length))] : q[pk];
    } else if (tt <= d.startup + d.active) f = q[pk];
    else {
      const L = q.slice(pk + 1),
        p = (tt - d.startup - d.active) / Math.max(1, d.recovery);
      f = L.length ? L[Math.min(L.length - 1, Math.floor(p * L.length))] : q[pk];
    }
    // az kareli tekmede (SUDEM, 3 kare) tepe anında hız izi: hareket ani değil çok hızlı görünür
    const hiz = q.length <= 3 && f === q[pk] && tt <= d.startup + d.active + 60 ? q : null;
    return { f, hiz };
  }
  if (t.pose() === `run` && S.run) return { f: S.run[Math.floor(t.animT / 85) % S.run.length], hiz: null };
  return null;
}

function AF_speedTrail(e, t, q) {
  const f = q[q.peak],
    kalca = -f.visibleH * 0.45;
  for (const [aci, saydam] of [
    [0.34, 0.16],
    [0.17, 0.3],
  ]) {
    e.save();
    e.globalAlpha = saydam;
    e.translate(0, kalca);
    e.rotate(aci);
    e.translate(0, -kalca);
    AF_drawBody(e, t, f);
    e.restore();
  }
}

function AF_rollIndex(p) {
  const c = [4, 9, 12, 18, 24, 29, 34, 40],
    x = p * 40;
  for (let i = 0; i < 8; i++) if (x < c[i]) return i;
  return 7;
}

function xy(e, t) {
  if (t.state === `air` && t.airFlip && t.spr.backFrames) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let p = pg(t.airFlipT / t.airFlipDur, 0, 1),
      frames = t.spr.backFrames,
      img = frames[Math.min(frames.length - 1, Math.floor(p * frames.length))],
      scale = t.spr.backScale,
      w = img.width * scale,
      h = img.height * scale;
    t.hitFlash > 0 && (e.filter = `brightness(2.4) saturate(0.5)`);
    // Karenin en alt noktası (ayak) dövüşçünün y'sinde; yükseklik zaten gerçek yerçekimi yayından gelir.
    e.drawImage(img, -w / 2, -h, w, h);
    ((e.filter = `none`), e.restore());
    return;
  }
  if (t.state === `attack` && t.attack && t.attack.def.pose === `sweep` && t.spr.sweepFrames) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let d = t.attack.def,
      p = Math.min(1, t.attack.t / (d.startup + d.active + d.recovery)),
      s = t.spr.sweepScale,
      img = t.spr.sweepFrames[Math.min(11, (p * 12) | 0)],
      iw = img.width,
      ih = img.height;
    (e.drawImage(img, -t.spr.sweepAnchorX * s, -ih * s, iw * s, ih * s), e.restore());
    return;
  }
  if (t.state === `roll` && (t.spr.rollFrames || t.spr.backFrames)) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let p = Math.min(1, t.rollT / t.rollDur);
    if (t.rollBack && t.spr.backFrames) {
      let s = t.spr.backScale,
        img = t.spr.backFrames[Math.min(15, (p * 16) | 0)],
        iw = img.width,
        ih = img.height,
        arc = t.spr.backJumpH * Math.sin(Math.PI * p);
      e.drawImage(img, -(iw * s) / 2, -ih * s - arc, iw * s, ih * s);
    } else if (t.spr.rollFrames) {
      let s = t.spr.rollScale,
        img = t.spr.rollFrames[AF_rollIndex(p)],
        iw = img.width,
        ih = img.height,
        pad = t.spr.rollPad * s;
      e.drawImage(img, -(iw * s) / 2, -ih * s + pad, iw * s, ih * s);
    }
    e.restore();
    return;
  }
  let n = t.pose(),
    r = t.spr.frames[n],
    hiz = null;
  {
    const sq = AF_seqFrame(t);
    sq && ((r = sq.f), (hiz = sq.hiz));
  }
  if ((e.save(), e.translate(t.x, t.y), t.state === `ko`))
    (e.beginPath(), e.rect(-2e3, -2e3, 4e3, 2e3), e.clip(), e.translate(0, -AF_koLift(t)));
  if ((t.state === `hitstun` && e.translate((Math.random() - 0.5) * 8, 0), t.ultiAuraT > 0)) {
    let n = t.idx === 0 ? `#ffffff` : dg;
    (e.save(), (e.globalCompositeOperation = `lighter`));
    let i = r.visibleH,
      a = e.createRadialGradient(0, -i * 0.5, 10, 0, -i * 0.5, i * 0.95);
    (a.addColorStop(0, vy(n, 0.45)),
      a.addColorStop(1, vy(n, 0)),
      (e.fillStyle = a),
      e.fillRect(-i, -i * 1.5, i * 2, i * 2),
      e.restore());
  }
  (AF_applyAnim(e, t),
    e.scale(t.facing, 1),
    t.hitFlash > 0 && (e.filter = `brightness(2.4) saturate(0.5)`),
    hiz && AF_speedTrail(e, t, hiz),
    AF_drawBody(e, t, r),
    (e.filter = `none`),
    t.state !== `roll` && AF_guardFx(e, t, r),
    e.restore());
}

function Sy(e, t) {
  (e.save(), (e.lineWidth = 2));
  for (let n of [t.p1, t.p2]) {
    let t = n.hurtbox();
    ((e.strokeStyle = `rgba(0,255,140,0.9)`), e.strokeRect(t.x, t.y, t.w, t.h));
    let r = n.attack;
    if (r && !r.def.noHit && r.t >= r.def.startup && r.t <= r.def.startup + r.def.active) {
      let t = Jy(n, r.def);
      ((e.fillStyle = `rgba(255,40,60,0.35)`),
        e.fillRect(t.x, t.y, t.w, t.h),
        (e.strokeStyle = `rgba(255,40,60,0.95)`),
        e.strokeRect(t.x, t.y, t.w, t.h));
    }
  }
  ((e.strokeStyle = `rgba(255,215,0,0.8)`),
    e.beginPath(),
    e.moveTo(0, 704),
    e.lineTo($h, 704),
    e.moveTo(387, 429),
    e.lineTo(990, 429),
    e.stroke(),
    (e.font = `700 12px ${_y}`),
    (e.fillStyle = `#ffd700`),
    e.fillText(`HITBOX (F2) · ${Uy.length} vuruş`, 16, 756),
    e.restore());
}

var Cy = null;

function wy() {
  if (Cy) return Cy;
  let e = document.createElement(`canvas`);
  ((e.width = 90), (e.height = 42));
  let t = e.getContext(`2d`),
    n = (e, n, r, i, a) => {
      ((t.fillStyle = a), t.fillRect(e * 3, n * 3, r * 3, i * 3));
    };
  (n(3, 6, 25, 5, `#d8141b`),
    n(1, 7, 2, 3, `#d8141b`),
    n(0, 4, 4, 2, `#a80c10`),
    n(7, 3, 14, 3, `#e81c22`),
    n(9, 2, 9, 1, `#e81c22`),
    n(18, 3, 4, 3, `#ffffff`),
    n(19, 4, 1, 1, `#2a6bff`),
    n(21, 4, 1, 1, `#2a6bff`),
    n(27, 8, 2, 2, `#fff6c0`),
    n(23, 9, 4, 1, `#7a0508`),
    n(3, 10, 25, 1, `#7a0508`),
    n(8, 7, 4, 1, `#ffd21f`),
    n(11, 8, 4, 1, `#ffd21f`),
    n(14, 7, 4, 1, `#ffd21f`),
    n(17, 8, 3, 1, `#ff9a1f`));
  for (let e of [5, 21])
    (n(e, 10, 5, 4, `#111111`), n(e + 1, 11, 3, 2, `#c9c9c9`), n(e + 2, 11, 1, 2, `#ff3b2f`));
  return ((t.font = `900 12px ${_y}`), (t.fillStyle = `#ffd21f`), (Cy = e), e);
}

// Ulti/mermi görseli (assets/fx). Yoksa null döner ve eski çizim kullanılır.
function AF_fxImg(t) {
  const k =
    t.kind === `motor`
      ? `ahmet_motor`
      : t.kind === `car`
        ? `sudem_araba`
        : t.kind === `ringshot`
          ? `sudem_yuzuk`
          : t.kind === `note`
            ? `metehan_nota${(t.col || 0) % 4}`
            : t.kind === `photo`
              ? `umut_foto${(t.fi || 0) % 3}`
              : null;
  return k && AF_FX[k] ? AF_FX[k] : null;
}

function Ty(e, t) {
  if (t.delay > 0) return;
  let n = Math.sign(t.vx) || 1;
  const im = AF_fxImg(t);
  if (im) {
    // boy (px) ve yatay çapa (görselin solunda iz/duman var, gövde sağda)
    const [h, ax, zemin] =
      t.kind === `motor`
        ? [130, 0.58, !0]
        : t.kind === `car`
          ? [104, 0.6, !0]
          : t.kind === `ringshot`
            ? [62, 0.66, !1]
            : t.kind === `note`
              ? [54, 0.5, !1]
              : [66, 0.55, !1];
    const w = (im.width * h) / im.height;
    (e.save(), e.translate(t.x, t.y), e.scale(n, 1));
    t.kind === `note` && e.rotate(Math.sin(t.t * 0.014 + (t.col || 0)) * 0.3);
    t.kind === `photo` && e.rotate(Math.sin(t.t * 0.012 + (t.fi || 0)) * 0.25);
    (e.drawImage(im, -w * ax, zemin ? -h : -h / 2, w, h), e.restore());
    return;
  }
  if ((e.save(), e.translate(t.x, t.y), t.kind === `photo`)) {
    (e.rotate(t.rot),
      (e.shadowColor = `rgba(255,255,255,0.9)`),
      (e.shadowBlur = 16),
      (e.fillStyle = `#fbfbf4`),
      e.fillRect(-22, -26, 44, 52),
      (e.shadowBlur = 0));
    let n = e.createLinearGradient(0, -21, 0, 13);
    (n.addColorStop(0, `#0d1a46`),
      n.addColorStop(1, `#2b3f86`),
      (e.fillStyle = n),
      e.fillRect(-18, -21, 36, 34),
      (e.fillStyle = `#f6f0d6`),
      e.beginPath(),
      e.arc(8, -12, 5, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#e8a73a`),
      e.fillRect(-14, 0, 20, 13),
      (e.fillStyle = `#c22`),
      e.fillRect(-6, 3, 4, 6));
  } else if (t.kind === `car`) {
    let t = wy();
    (e.scale(n, 1), (e.imageSmoothingEnabled = !1), (e.globalCompositeOperation = `lighter`));
    let r = e.createRadialGradient(0, -20, 4, 0, -20, 70);
    (r.addColorStop(0, `rgba(255,80,40,0.35)`),
      r.addColorStop(1, `rgba(255,80,40,0)`),
      (e.fillStyle = r),
      e.fillRect(-80, -90, 160, 110),
      (e.globalCompositeOperation = `source-over`),
      e.drawImage(t, -t.width / 2, -t.height),
      (e.fillStyle = `rgba(255,210,31,0.75)`));
    for (let n = 0; n < 3; n++) e.fillRect(-t.width / 2 - 26 - n * 10, -30 + n * 9, 18, 3);
    (e.scale(n, 1),
      (e.font = `900 12px ${_y}`),
      (e.textAlign = `center`),
      (e.fillStyle = `#ffd21f`),
      e.fillText(`95`, 0, -25));
  } else if (t.kind === `note`) AF_drawNote(e, t);
  else if (t.kind === `flash`) {
    e.globalCompositeOperation = `lighter`;
    let g = e.createRadialGradient(0, 0, 3, 0, 0, t.r * 2.6);
    (g.addColorStop(0, `rgba(175,228,255,0.68)`),
      g.addColorStop(0.45, `rgba(70,150,255,0.33)`),
      g.addColorStop(1, `rgba(40,120,255,0)`));
    ((e.fillStyle = g), e.beginPath(), e.arc(0, 0, t.r * 2.6, 0, Math.PI * 2), e.fill());
    ((e.strokeStyle = `rgba(140,205,255,0.55)`), (e.lineWidth = 3));
    for (let k = 0; k < 3; k++) {
      let yy = (k - 1) * 11;
      (e.beginPath(),
        e.moveTo(-n * (t.r + 4), yy),
        e.lineTo(-n * (t.r + 30 + k * 12), yy),
        e.stroke());
    }
    ((e.globalCompositeOperation = `source-over`), e.rotate(t.rot));
    ((e.fillStyle = `#12326c`), e.beginPath(), e.arc(0, 0, t.r, 0, Math.PI * 2), e.fill());
    e.fillStyle = `#2f74d6`;
    for (let k = 0; k < 6; k++) {
      (e.rotate(Math.PI / 3),
        e.beginPath(),
        e.moveTo(0, -t.r * 0.92),
        e.lineTo(t.r * 0.52, -t.r * 0.16),
        e.lineTo(-t.r * 0.12, -t.r * 0.16),
        e.closePath(),
        e.fill());
    }
    ((e.fillStyle = `#cfeaff`), e.beginPath());
    for (let k = 0; k < 6; k++) {
      let aa = (k * Math.PI) / 3 + Math.PI / 6,
        rr = t.r * 0.34,
        xx = Math.cos(aa) * rr,
        yy = Math.sin(aa) * rr;
      k ? e.lineTo(xx, yy) : e.moveTo(xx, yy);
    }
    (e.closePath(), e.fill());
    ((e.lineWidth = 2.5),
      (e.strokeStyle = `#9fe0ff`),
      e.beginPath(),
      e.arc(0, 0, t.r, 0, Math.PI * 2),
      e.stroke());
  } else {
    let n = Math.abs(Math.cos(t.t * 0.01));
    e.globalCompositeOperation = `lighter`;
    let r = e.createRadialGradient(0, 0, 4, 0, 0, t.r * 2.2);
    (r.addColorStop(0, `rgba(255,226,122,0.55)`),
      r.addColorStop(1, `rgba(255,143,216,0)`),
      (e.fillStyle = r),
      e.beginPath(),
      e.arc(0, 0, t.r * 2.2, 0, Math.PI * 2),
      e.fill(),
      (e.lineWidth = 9),
      (e.strokeStyle = `#ffd24a`),
      (e.shadowColor = `#ffe27a`),
      (e.shadowBlur = 20),
      e.beginPath(),
      e.ellipse(0, 0, Math.max(5, t.r * n), t.r, 0, 0, Math.PI * 2),
      e.stroke(),
      (e.lineWidth = 3),
      (e.strokeStyle = `#fff7d6`),
      e.stroke(),
      (e.shadowBlur = 0),
      (e.fillStyle = `#ff8fd8`),
      e.fillRect(-5, -t.r - 8, 10, 10));
  }
  e.restore();
}

function Ey(e, t) {
  (e.save(), (e.globalCompositeOperation = `lighter`));
  for (let n of t) {
    let t = n.t / 420,
      r = 1 - t,
      i = e.createRadialGradient(n.x, n.y, 2, n.x, n.y, 40 + t * 220);
    (i.addColorStop(0, `rgba(255,255,255,${r})`),
      i.addColorStop(0.4, `rgba(200,230,255,${r * 0.5})`),
      i.addColorStop(1, `rgba(200,230,255,0)`),
      (e.fillStyle = i),
      e.beginPath(),
      e.arc(n.x, n.y, 40 + t * 220, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `rgba(255,255,255,${r})`),
      (e.lineWidth = 3));
    for (let r = 0; r < 8; r++) {
      let i = (r / 8) * Math.PI * 2,
        a = 30 + t * 180 * (r % 2 ? 0.6 : 1);
      (e.beginPath(),
        e.moveTo(n.x + Math.cos(i) * 12, n.y + Math.sin(i) * 12),
        e.lineTo(n.x + Math.cos(i) * a, n.y + Math.sin(i) * a),
        e.stroke());
    }
  }
  e.restore();
}

function Dy(e, t) {
  (e.save(), (e.globalCompositeOperation = `lighter`));
  for (let n of t) {
    let t = n.life / n.max;
    (e.save(),
      e.translate(n.x, n.y),
      e.rotate(n.rot),
      (e.globalAlpha = Math.min(1, t * 1.4)),
      (e.fillStyle = n.color));
    let r = n.size * (0.5 + t * 0.5);
    (e.fillRect(-r / 2, -r / 2, r, r), e.restore());
  }
  e.restore();
}

function Oy(e, t) {
  for (let n of t) {
    let t = n.life / n.max,
      r = n.y - (1 - t) * 74,
      i = t > 0.35 ? 1 : t / 0.35;
    ((e.font = `800 ${Math.round(n.size)}px ${_y}`),
      (e.textAlign = `center`),
      (e.lineWidth = 6),
      (e.strokeStyle = `rgba(5,6,15,${i})`),
      e.strokeText(n.text, n.x, r),
      (e.fillStyle = vy(n.color, i)),
      e.fillText(n.text, n.x, r));
  }
}

function ky(e, t, n, r, i, a, o) {
  (e.beginPath(),
    o
      ? (e.moveTo(t, n), e.lineTo(t + r - a, n), e.lineTo(t + r, n + i), e.lineTo(t + a, n + i))
      : (e.moveTo(t + a, n), e.lineTo(t + r, n), e.lineTo(t + r - a, n + i), e.lineTo(t, n + i)),
    e.closePath());
}

function Ay(e, t, n, r, i, a, o, s, c, l) {
  (ky(e, t, n, r, i, 14, s), (e.fillStyle = `rgba(10,10,20,0.85)`), e.fill(), e.save(), e.clip());
  let u = r * Math.max(a, o);
  ((e.fillStyle = `rgba(255,255,255,0.75)`), e.fillRect(s ? t + r - u : t, n, u, i));
  let d = r * a,
    f = e.createLinearGradient(t, 0, t + r, 0);
  (f.addColorStop(0, s ? l : c),
    f.addColorStop(1, s ? c : l),
    (e.fillStyle = f),
    e.fillRect(s ? t + r - d : t, n, d, i));
  let p = e.createLinearGradient(0, n, 0, n + i);
  (p.addColorStop(0, `rgba(255,255,255,0.3)`),
    p.addColorStop(0.5, `rgba(255,255,255,0.04)`),
    p.addColorStop(1, `rgba(0,0,0,0.25)`),
    (e.fillStyle = p),
    e.fillRect(t, n, r, i),
    e.restore(),
    ky(e, t, n, r, i, 14, s),
    (e.strokeStyle = `rgba(255,255,255,0.75)`),
    (e.lineWidth = 2),
    e.stroke());
}

function jy(e, t, n, r, i, a, o, s, c, l, u) {
  (ky(e, t, n, r, i, 6, o), (e.fillStyle = `rgba(10,10,20,0.85)`), e.fill());
  let d = a >= 1;
  (e.save(),
    e.clip(),
    (e.shadowColor = d ? c : `transparent`),
    (e.shadowBlur = d ? 14 : 0),
    (e.fillStyle = d ? c : s));
  let f = r * Math.min(1, a);
  (e.fillRect(o ? t + r - f : t, n, f, i), (e.shadowBlur = 0), (e.fillStyle = `rgba(5,6,15,0.8)`));
  for (let a of [0.25, 0.5, 0.75]) e.fillRect(t + r * a - 1, n, 2, i);
  if (
    (e.restore(),
    ky(e, t, n, r, i, 6, o),
    (e.strokeStyle = d ? c : `rgba(255,255,255,0.45)`),
    (e.lineWidth = d ? 2 : 1.5),
    e.stroke(),
    d)
  ) {
    let a = 0.65 + Math.sin(l * 0.012) * 0.35;
    ((e.font = `800 13px ${_y}`),
      (e.fillStyle = vy(c, a)),
      (e.textAlign = o ? `right` : `left`),
      e.fillText(`ULTİ HAZIR! (${u})`, o ? t + r : t, n + i + 16));
  }
}

function My(e, t) {
  ((e.font = `800 16px ${_y}`),
    (e.textAlign = `left`),
    (e.fillStyle = t.p1.accent2),
    e.fillText(`P1 · ${t.p1.name}`, 34, 22),
    (e.textAlign = `right`),
    (e.fillStyle = t.p2.accent2),
    e.fillText(
      t.vsBot
        ? `${t.p2.name} · BOT · ${t.diff === `easy` ? `KOLAY` : t.diff === `hard` ? `ZOR` : `NORMAL`}`
        : `${t.p2.name} · P2`,
      $h - 34,
      22,
    ),
    Ay(
      e,
      30,
      30,
      540,
      26,
      t.p1.hp / t.p1.maxHp,
      t.p1.ghostHp / t.p1.maxHp,
      !1,
      t.p1.accent,
      t.p1.accent2,
    ),
    Ay(
      e,
      $h - 30 - 540,
      30,
      540,
      26,
      t.p2.hp / t.p2.maxHp,
      t.p2.ghostHp / t.p2.maxHp,
      !0,
      t.p2.accent,
      t.p2.accent2,
    ),
    jy(e, 34, 64, 330, 11, t.p1.meter / 100, !1, t.p1.accent, lg, t.p1.animT, AF_k(0, `ult`)),
    jy(
      e,
      $h - 34 - 330,
      64,
      330,
      11,
      t.p2.meter / 100,
      !0,
      t.p2.accent,
      dg,
      t.p2.animT,
      AF_k(1, `ult`),
    ));
  let n = $h / 2 - 66;
  ((e.fillStyle = `rgba(4,5,12,0.72)`),
    e.fillRect(n, 22, 132, 58),
    (e.strokeStyle = `rgba(255,255,255,0.85)`),
    (e.lineWidth = 2),
    e.strokeRect(n, 22, 132, 58));
  let r = Math.max(0, Math.ceil(t.timeLeft)),
    i = r <= 10,
    a = i ? 1 + Math.sin(t.p1.animT * 0.02) * 0.08 : 1;
  (e.save(),
    e.translate($h / 2, 51),
    e.scale(a, a),
    (e.font = `800 40px ${_y}`),
    (e.textAlign = `center`),
    (e.fillStyle = i ? `#ff4d5e` : fg),
    e.fillText(isFinite(r) ? String(r) : `∞`, 0, 14),
    e.restore(),
    AF_roundHud(e, t));
}

function Ny(e, t) {
  for (let n of [t.p1, t.p2]) {
    if (n.combo < 2 || n.comboT <= 0 || n.state === `ko`) continue;
    let t = 1 + 0.45 * Math.max(0, 1 - n.comboPopT / 160),
      r = n.idx === 0 ? 200 : $h - 200;
    (e.save(),
      e.translate(r, 126),
      e.scale(t, t),
      (e.font = `800 30px ${_y}`),
      (e.textAlign = `center`),
      (e.lineWidth = 7),
      (e.strokeStyle = `rgba(5,6,15,0.9)`));
    let i = `${n.combo} VURUŞ!`;
    (e.strokeText(i, 0, 0), (e.fillStyle = n.accent), e.fillText(i, 0, 0), e.restore());
  }
}

function Py(e, t) {
  let n = t.announce;
  if (!n) return;
  let r = n.t / n.dur,
    i = r < 0.12 ? r / 0.12 : r > 0.7 ? Math.max(0, (1 - r) / 0.3) : 1,
    a = 1 + Math.max(0, 1 - n.t / 120) * 0.35;
  (e.save(),
    e.translate($h / 2, 300),
    e.scale(a, a),
    (e.globalAlpha = i),
    (e.font = `800 ${n.size}px ${_y}`),
    (e.textAlign = `center`),
    (e.lineWidth = 12),
    (e.strokeStyle = `rgba(5,6,15,0.92)`),
    e.strokeText(n.text, 0, 0),
    (e.fillStyle = n.color),
    e.fillText(n.text, 0, 0),
    e.restore());
}

// 60-game-input.js — Klavye girişi (By sınıfı): basılı tuşlar, kenar olayları, çift dokunma.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Fy = AF_keymap(),
  Iy = new Set([...Object.keys(Fy), `Space`]),
  Ly = new Set([`Escape`, `KeyP`]),
  Ry = 280;

function zy() {
  return {
    left: !1,
    right: !1,
    down: !1,
    jumpEdge: !1,
    dropEdge: !1,
    attacks: [!1, !1, !1, !1],
    ultEdge: !1,
    projEdge: !1,
    rollEdge: 0,
    sweepEdge: !1,
    flipPress: !1, // takla tuşuna YENİ basıldı (tampon için)
    dirPress: 0, // yön tuşuna YENİ basıldı: -1 sol, 1 sağ (tampon için)
    guard: !1,
    dash: !1,
  };
}

var By = class {
  held = [new Set(), new Set()];
  edges = [zy(), zy()];
  pauseEdge = !1;
  boxesEdge = !1;
  lastDownTap = [0, 0];
  lastLeftTap = [0, 0];
  lastRightTap = [0, 0];
  constructor() {
    (window.addEventListener(`keydown`, this.onDown),
      window.addEventListener(`keyup`, this.onUp),
      window.addEventListener(`blur`, this.onBlur));
  }
  onDown = (e) => {
    if (AF_modal > 0) return;
    if (e.code === `F2`) {
      (e.preventDefault(), e.repeat || (this.boxesEdge = !0));
      return;
    }
    if (Ly.has(e.code)) {
      (e.preventDefault(), e.repeat || (this.pauseEdge = !0));
      return;
    }
    if (!Iy.has(e.code) || (e.preventDefault(), e.repeat)) return;
    let t = Fy[e.code];
    if (!t) return;
    this.held[t.player].add(t.action);
    let n = this.edges[t.player];
    // Takla için tuş + yön ayrı ayrı kaydedilir; birleştirme AF_tryAirFlip içindeki tamponda yapılır.
    if (t.action === `flip`) n.flipPress = !0;
    else if (t.action === `left`) n.dirPress = -1;
    else if (t.action === `right`) n.dirPress = 1;
    if (t.action === `jump`) n.jumpEdge = !0;
    else if (t.action === `down`) {
      let e = performance.now();
      (e - this.lastDownTap[t.player] <= Ry && (n.dropEdge = !0), (this.lastDownTap[t.player] = e));
    } else if (t.action === `left`) {
      let e2 = performance.now();
      (e2 - this.lastLeftTap[t.player] <= Ry && (n.rollEdge = -1),
        (this.lastLeftTap[t.player] = e2));
    } else if (t.action === `right`) {
      let e2 = performance.now();
      (e2 - this.lastRightTap[t.player] <= Ry && (n.rollEdge = 1),
        (this.lastRightTap[t.player] = e2));
    } else
      t.action === `ult`
        ? (n.ultEdge = !0)
        : t.action === `proj`
          ? (n.projEdge = !0)
          : t.action === `sweep`
            ? (n.sweepEdge = !0)
            : t.action.startsWith(`atk`) && (n.attacks[Number(t.action[3])] = !0);
  };
  onUp = (e) => {
    let t = Fy[e.code];
    t && this.held[t.player].delete(t.action);
  };
  onBlur = () => {
    (this.held[0].clear(), this.held[1].clear());
  };
  consume() {
    let e = (e) => ({
        left: this.held[e].has(`left`),
        right: this.held[e].has(`right`),
        down: this.held[e].has(`down`),
        jumpEdge: this.edges[e].jumpEdge,
        dropEdge: this.edges[e].dropEdge,
        attacks: [...this.edges[e].attacks],
        ultEdge: this.edges[e].ultEdge,
        projEdge: this.edges[e].projEdge,
        rollEdge: this.edges[e].rollEdge,
        sweepEdge: this.edges[e].sweepEdge,
        flipPress: this.edges[e].flipPress,
        dirPress: this.edges[e].dirPress,
        flip: this.held[e].has(`flip`),
        guard: this.held[e].has(`guard`),
        dash: this.held[e].has(`dash`),
      }),
      t = { p1: e(0), p2: e(1), pauseEdge: this.pauseEdge, boxesEdge: this.boxesEdge };
    return ((this.edges = [zy(), zy()]), (this.pauseEdge = !1), (this.boxesEdge = !1), t);
  }
  dispose() {
    (window.removeEventListener(`keydown`, this.onDown),
      window.removeEventListener(`keyup`, this.onUp),
      window.removeEventListener(`blur`, this.onBlur));
  }
};

function Vy() {
  return {
    left: !1,
    right: !1,
    down: !1,
    jumpEdge: !1,
    dropEdge: !1,
    attacks: [!1, !1, !1, !1],
    ultEdge: !1,
    projEdge: !1,
    rollEdge: 0,
    sweepEdge: !1,
    flipPress: !1,
    dirPress: 0,
    flip: !1,
    guard: !1,
    dash: !1,
  };
}

// 61-game-bot-ai.js — Bot yapay zekâsı (Hy sınıfı).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Hy = class {
  thinkT = 400;
  cool = 0;
  crouchT = 0;
  retreatT = 0;
  hold = { left: !1, right: !1 };
  guardT = 0;
  guardCool = 0;
  constructor(e) {
    this.cfg =
      e === `easy`
        ? {
            tMin: 280,
            tVar: 280,
            cMin: 760,
            cVar: 720,
            dodge: 0.18,
            crouch: 0.08,
            ult: 0.18,
            chase: 0.3,
            atk: 0.55,
            guard: 0.12,
          }
        : e === `hard`
          ? {
              tMin: 70,
              tVar: 60,
              cMin: 210,
              cVar: 240,
              dodge: 0.8,
              crouch: 0.4,
              ult: 0.65,
              chase: 0.8,
              atk: 1,
              guard: 0.5,
            }
          : {
              tMin: 110,
              tVar: 120,
              cMin: 380,
              cVar: 480,
              dodge: 0.45,
              crouch: 0.22,
              ult: 0.4,
              chase: 0.55,
              atk: 1,
              guard: 0.3,
            };
  }
  think(e, t) {
    let n = Vy();
    ((this.thinkT -= t),
      (this.cool -= t),
      (this.crouchT -= t),
      (this.retreatT -= t),
      (this.guardT -= t),
      (this.guardCool -= t));
    let r = e.p2,
      i = e.p1;
    if (e.phase !== `fight` || r.state === `ko`) return n;
    let a = i.x - r.x,
      o = Math.abs(a),
      s = a >= 0 ? `right` : `left`,
      c = a >= 0 ? `left` : `right`,
      l = r.spr.frames.punch.tipX + r.halfW * 0.4,
      u = r.spr.frames.kick.tipX + r.halfW * 0.4,
      d = Math.abs(i.y - r.y) < 70;
    if (this.thinkT <= 0)
      if (
        ((this.thinkT = this.cfg.tMin + Math.random() * this.cfg.tVar),
        (this.hold = { left: !1, right: !1 }),
        r.grounded &&
          this.guardCool <= 0 &&
          r.gp > 25 &&
          ((i.state === `attack` && i.attack && !i.attack.def.noHit && o < u + 80) ||
            e.projectiles.some(
              (e) =>
                e.owner === 0 &&
                e.delay <= 0 &&
                Math.sign(e.vx) === Math.sign(r.x - e.x) &&
                Math.abs(e.x - r.x) < 300,
            )) &&
          Math.random() < this.cfg.guard)
      )
        ((this.guardT = 360 + Math.random() * 260), (this.guardCool = this.guardT + 450));
      else if (
        e.projectiles.some(
          (e) =>
            e.owner === 0 &&
            e.delay <= 0 &&
            Math.sign(e.vx) === Math.sign(r.x - e.x) &&
            Math.abs(e.x - r.x) < 340,
        ) &&
        r.grounded &&
        Math.random() < this.cfg.dodge
      )
        n.jumpEdge = !0;
      else if (r.meter >= 100 && r.grounded && o > 260 && Math.random() < this.cfg.ult)
        n.ultEdge = !0;
      else if (
        AF_char(r.charId).proj &&
        r.grounded &&
        r.projCd <= 0 &&
        o > 380 &&
        Math.random() < 0.03
      )
        n.projEdge = !0;
      else if (
        AF_char(r.charId).roll &&
        r.grounded &&
        r.rollCd <= 0 &&
        o < 150 &&
        Math.random() < 0.02
      )
        n.rollEdge = r.x < i.x ? -1 : 1;
      else if (!d && i.y < r.y - 70)
        ((this.hold[s] = o > 40),
          r.grounded && o < 300 && Math.random() < this.cfg.chase && (n.jumpEdge = !0));
      else if (!d && i.y > r.y + 70 && r.ground === `table`)
        Math.random() < 0.5 ? (n.dropEdge = !0) : (this.hold[s] = !0);
      else if (o > u) this.hold[this.retreatT > 0 ? c : s] = !0;
      else if (i.state === `attack` && Math.random() < this.cfg.crouch) this.crouchT = 320;
      else if (this.cool <= 0 && Math.random() < this.cfg.atk) {
        let e = Math.random(),
          t = o <= l ? (e < 0.45 ? 0 : e < 0.8 ? 1 : e < 0.92 ? 2 : 3) : e < 0.75 ? 1 : 3;
        ((n.attacks[t] = !0),
          (this.cool = this.cfg.cMin + Math.random() * this.cfg.cVar),
          Math.random() < 0.2 && (this.retreatT = 380));
      } else Math.random() < 0.15 && (this.hold[c] = !0);
    return (
      (n.left = this.hold.left),
      (n.right = this.hold.right),
      (n.down = this.crouchT > 0),
      this.guardT > 0 &&
        r.grounded &&
        ((n.guard = !0),
        (n.left = n.right = n.down = !1),
        (n.attacks = [!1, !1, !1, !1]),
        (n.ultEdge = !1),
        (n.jumpEdge = !1),
        (n.dropEdge = !1)),
      n
    );
  }
};

// 62-game-attack-defs.js — Saldırı tabloları, ulti/flaş/süpürme/koşu tanımları ve mermi haritası.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Uy = [
  {
    id: `punch`,
    label: `YUMRUK`,
    pose: `punch`,
    startup: 70,
    active: 100,
    recovery: 170,
    damage: 7,
    w: 72,
    h: 60,
    kbx: 260,
    kby: 0,
    hitstun: 330,
    meter: 8,
  },
  {
    id: `kick`,
    label: `TEKME`,
    pose: `kick`,
    startup: 140,
    active: 120,
    recovery: 270,
    damage: 11,
    w: 86,
    h: 70,
    kbx: 600,
    kby: -180,
    hitstun: 500,
    meter: 11,
  },
  {
    id: `strong`,
    label: `GÜÇLÜ YUMRUK`,
    pose: `punch`,
    startup: 150,
    active: 110,
    recovery: 260,
    damage: 12,
    w: 82,
    h: 66,
    kbx: 580,
    kby: -140,
    hitstun: 480,
    meter: 12,
  },
  {
    id: `heavy`,
    label: `AĞIR TEKME`,
    pose: `kick`,
    startup: 210,
    active: 120,
    recovery: 340,
    damage: 15,
    w: 96,
    h: 78,
    kbx: 700,
    kby: -520,
    hitstun: 640,
    meter: 14,
  },
];

var Wy = {
  id: `ult-cast`,
  label: `ULTİ`,
  pose: `ult`,
  startup: 0,
  active: 0,
  recovery: 560,
  damage: 0,
  w: 0,
  h: 0,
  kbx: 0,
  kby: 0,
  hitstun: 0,
  meter: 0,
  noHit: !0,
};

var AF_projCast = {
  id: `flash-cast`,
  label: `FLAŞ DALGASI`,
  pose: `cast`,
  startup: 0,
  active: 200,
  recovery: 300,
  damage: 0,
  w: 0,
  h: 0,
  kbx: 0,
  kby: 0,
  hitstun: 0,
  meter: 0,
  noHit: !0,
};

var AF_sweepDef = {
  id: `sweep`,
  label: `SÜPÜRME`,
  pose: `sweep`,
  startup: 300,
  active: 110,
  recovery: 210,
  damage: 9,
  w: 150,
  h: 64,
  hbx: 104,
  hby: 34,
  kbx: 400,
  kby: -230,
  hitstun: 420,
  meter: 10,
};

var Gy = {
  photo: {
    id: `photo`,
    label: `FOTOĞRAF`,
    pose: `ult`,
    startup: 0,
    active: 0,
    recovery: 0,
    damage: 9,
    w: 0,
    h: 0,
    kbx: 320,
    kby: -140,
    hitstun: 440,
    meter: 0,
  },
  car: {
    id: `car`,
    label: `OYUNCAK ARABA`,
    pose: `ult`,
    startup: 0,
    active: 0,
    recovery: 0,
    damage: 14,
    w: 0,
    h: 0,
    kbx: 520,
    kby: -380,
    hitstun: 600,
    meter: 0,
  },
  note: {
    id: `note`,
    label: `YILDIRIM NOTASI`,
    pose: `ult`,
    startup: 0,
    active: 0,
    recovery: 0,
    damage: 2,
    w: 0,
    h: 0,
    kbx: 150,
    kby: -40,
    hitstun: 150,
    meter: 0,
  },
  ring: {
    id: `ring`,
    label: `SİHİRLİ YÜZÜK`,
    pose: `ult`,
    startup: 0,
    active: 0,
    recovery: 0,
    damage: 12,
    w: 0,
    h: 0,
    kbx: 560,
    kby: -320,
    hitstun: 640,
    meter: 0,
  },
  flash: {
    id: `flash`,
    label: `FLAŞ DALGASI`,
    pose: `cast`,
    startup: 0,
    active: 0,
    recovery: 0,
    damage: 7,
    w: 0,
    h: 0,
    kbx: 340,
    kby: -120,
    hitstun: 420,
    meter: 0,
  },
};

var AF_ringShot = {
  id: `ringshot`,
  label: `SİHİRLİ YÜZÜK`,
  pose: `cast`,
  startup: 0,
  active: 0,
  recovery: 0,
  damage: 6,
  w: 0,
  h: 0,
  kbx: 380,
  kby: -120,
  hitstun: 400,
  meter: 4,
};

var AF_motorHit = {
  id: `motor`,
  label: `GAZA BAS!`,
  pose: `ult`,
  startup: 0,
  active: 0,
  recovery: 0,
  damage: 16,
  w: 0,
  h: 0,
  kbx: 700,
  kby: -460,
  hitstun: 680,
  meter: 0,
};

var AF_dashHit = {
  id: `dash`,
  label: `KOŞU ÇARPMASI`,
  pose: `run`,
  startup: 0,
  active: 0,
  recovery: 0,
  damage: 6,
  w: 0,
  h: 0,
  kbx: 470,
  kby: -110,
  hitstun: 300,
  meter: 0,
};

// 63-game-fighter.js — Dövüşçü sınıfı (Ky): durum, hurtbox, pose.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Ky = class {
  idx;
  spr;
  accent;
  x;
  y = 704;
  vx = 0;
  vy = 0;
  facing;
  hp = 150;
  ghostHp = 150;
  meter = 0;
  state = `idle`;
  ground = `g1`;
  attack = null;
  hitstunT = 0;
  hitFlash = 0;
  dropT = 0;
  koT = 0;
  animT = Math.random() * 1e3;
  comboPopT = 999;
  combo = 0;
  comboT = 0;
  maxCombo = 0;
  damageDealt = 0;
  ultiAuraT = 0;
  bufAtk = -1;
  bufAtkT = 0;
  bufUltT = 0;
  tableLock = !1;
  landT = 0;
  jumpT = 0;
  walkP = 0;
  walkB = 0;
  guardLow = !1;
  gp = 100;
  blockT = 0;
  pL = !1;
  pR = !1;
  tapT = 0;
  dashT = 0;
  dashHit = !1;
  dashCd = 0;
  dashChain = 0; // 3 sn içindeki art arda koşu sayısı (METEHAN)
  dashChainT = 0;
  bounceT = 0; // köşe çarpmasından geri sekme süresi (ms)
  projCd = 0;
  rollT = 0;
  rollDur = 700;
  rollGroundY = 0;
  rollH = 150;
  rollVx = 0;
  rollSpin = 1;
  rollCd = 0;
  rollInv = !1;
  rollBack = !1;
  airFlip = !1;
  airFlipT = 0;
  airFlipDur = 900;
  airFlipStartX = 0;
  airFlipStartY = 704;
  airFlipDir = 0;
  airFlipCrossed = !1;
  flipLandDir = 0;
  flipLandT = 0;
  bufFlipT = 0; // takla tuşu tamponu (ms)
  bufDirT = 0; // yön tuşu tamponu (ms)
  bufDirDir = 0; // tamponlanan yön
  jumpGraceT = 0; // zıplama sonrası yön kilitleme penceresi (ms)
  running = !1;
  armor = 0;
  pDash = !1;
  maxHp = 150;
  dashHit = !1;
  constructor(e, t, n) {
    ((this.idx = e), (this.spr = t));
    let r = n || AF_char(e === 0 ? `umut` : `sudem`);
    ((this.charId = r.id),
      (this.mod = r.mod || null),
      (this.name = r.name),
      (this.accent = r.color),
      (this.accent2 = r.color2),
      (this.x = e === 0 ? $h * 0.26 : $h * 0.74),
      (this.facing = e === 0 ? 1 : -1),
      (this.maxHp = (r.mod && r.mod.hp) || 150),
      (this.hp = this.maxHp),
      (this.ghostHp = this.maxHp));
  }
  get halfW() {
    return this.spr.halfW;
  }
  get grounded() {
    return this.ground !== null;
  }
  pose() {
    if (this.state === `ko` || this.state === `hitstun`) return `hurt`;
    if (this.state === `roll`) return `crouch`;
    if (this.state === `attack` && this.attack && this.attack.def.pose === `sweep`) return `crouch`;
    if (this.state === `attack` && this.attack) {
      let e = this.attack.def,
        t = this.attack.t;
      return e.pose === `ult`
        ? `ult`
        : t >= e.startup && t <= e.startup + e.active + e.recovery * 0.5
          ? e.pose
          : this.grounded
            ? `idle`
            : `jump`;
    }
    return this.grounded
      ? this.state === `crouch`
        ? `crouch`
        : this.state === `guard`
          ? this.guardLow
            ? this.spr.frames.guardlow
              ? `guardlow`
              : `crouch`
            : this.spr.frames.guard
              ? `guard`
              : `idle`
          : this.dashT > 0 && this.spr.frames.run
            ? `run`
            : `idle`
      : `jump`;
  }
  frame() {
    return this.spr.frames[this.pose()];
  }
  hurtbox() {
    let e = this.spr.frames.idle.visibleH * 0.94,
      t = this.pose() === `crouch`,
      n = this.halfW * 2 * (t ? 1.05 : 0.9),
      r = t ? e * 0.5 : this.frame().visibleH * 0.94;
    return { x: this.x - n / 2, y: this.y - r, w: n, h: r };
  }
};

// 64-game-collision-helpers.js — Çarpışma yardımcıları ve UMUT havadan takla tetikleyicisi.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function qy(e, t) {
  let n = Math.max(e.x, t.x),
    r = Math.min(e.x + e.w, t.x + t.w),
    i = Math.max(e.y, t.y),
    a = Math.min(e.y + e.h, t.y + t.h);
  return r <= n || a <= i ? null : { x: (n + r) / 2, y: (i + a) / 2 };
}

function Jy(e, t) {
  if (t.pose === `sweep`) {
    let r = e.x + e.facing * (t.hbx || 0),
      i = e.y - (t.hby || 0);
    return { x: r - t.w / 2, y: i - t.h / 2, w: t.w, h: t.h };
  }
  // mod.reach / mod.reachX: kısa kollu karakterlerde (METEHAN) vuruş kutusu biraz geniş ve önde
  let n = e.spr.frames[t.pose],
    w = t.w * ((e.mod && e.mod.reach) || 1),
    r = e.x + e.facing * (n.tipX - w * 0.3 + ((e.mod && e.mod.reachX) || 0)),
    i = e.y - n.tipY;
  return { x: r - w / 2, y: i - t.h / 2, w, h: t.h };
}

function Yy(e, t, n, r) {
  let i = pg(e, r.x, r.x + r.w),
    a = pg(t, r.y, r.y + r.h),
    o = e - i,
    s = t - a;
  return o * o + s * s > n * n ? null : { x: i, y: a };
}

// Normal zıplama (W / W+yön) rakibin üzerinden geçebilsin mi? false = yalnız takla geçer (varsayılan).
var AF_JUMP_CROSS = false;

// Zıplama kalkışında yön yoksa, yön tuşuna bu süre (ms) içinde basılırsa zıplama o yöne kilitlenir.
var AF_JUMP_DIR_GRACE = 90;

// Giriş tamponu: takla tuşu ile yön tuşu bu süre (ms) içinde basılırsa SIRASI FARK ETMEDEN birlikte sayılır.
// Ayrıca takla, o an yapılamıyorsa (iniş toparlanması, saldırı bitişi) süre dolana kadar beklemeye alınır.
var AF_FLIP_BUFFER = 130;

function AF_tryAirFlip(e, t, n, dt) {
  if (!t) return !1;
  e.bufFlipT = Math.max(0, e.bufFlipT - dt);
  e.bufDirT = Math.max(0, e.bufDirT - dt);
  if (t.flipPress) e.bufFlipT = AF_FLIP_BUFFER;
  if (t.dirPress) {
    e.bufDirT = AF_FLIP_BUFFER;
    e.bufDirDir = t.dirPress;
  }
  const held = (t.right ? 1 : 0) - (t.left ? 1 : 0);
  const dir = held || (e.bufDirT > 0 ? e.bufDirDir : 0);
  // Tetik: takla tuşu (basılı ya da yeni basıldı) + yön + en az bir YENİ basış.
  // (İki tuşu basılı tutmak tekrar tekrar takla atmaz.)
  const fresh = e.bufFlipT > 0 || e.bufDirT > 0;
  if (!fresh || !dir || !(t.flip || e.bufFlipT > 0)) return !1;
  if (
    !AF_char(e.charId).roll ||
    !e.grounded ||
    !e.spr.backFrames ||
    e.spr.backFrames.length !== 16 ||
    e.state === `ko` ||
    e.state === `hitstun` ||
    e.state === `attack` ||
    e.state === `guard` ||
    e.state === `roll` ||
    e.dashT > 0
  )
    return !1;
  e.bufFlipT = 0;
  e.bufDirT = 0;
  e.airFlip = !0;
  e.airFlipT = 0;
  e.airFlipDir = dir;
  e.airFlipCrossed = !1;
  e.flipLandDir = 0;
  e.flipLandT = 0;
  e.airFlipStartX = e.x;
  e.airFlipStartY = e.y;
  e.facing = dir;
  e.ground = null;
  e.state = `air`;
  e.jumpT = 0;
  e.vy = rg * (e.mod ? e.mod.jump : 1);
  const upSpeed = -e.vy,
    flightTime = (2 * upSpeed) / eg,
    speed = 530 * AF_spd(e);
  e.airFlipDur = Math.max(250, flightTime * 1000);
  if (e.airFlipStartY > 429 && upSpeed * upSpeed >= 2 * eg * (e.airFlipStartY - 429)) {
    const platformTime =
      (upSpeed + Math.sqrt(upSpeed * upSpeed - 2 * eg * (e.airFlipStartY - 429))) / eg;
    const landingX = e.airFlipStartX + dir * speed * platformTime;
    if (landingX > 381 && landingX < 996)
      e.airFlipDur = Math.min(e.airFlipDur, Math.max(250, platformTime * 1000));
  }
  e.vx = dir * speed;
  X.jump();
  return !0;
}

// ---- METEHAN koşu çarpması dengesi ----
var AF_DASH_CD = 1500; // koşular arası bekleme (ms)
var AF_DASH_CHAIN = [1, 0.6, 0.3]; // 3 sn içindeki 1./2./3.+ koşunun hasar çarpanı

function AF_dashImpact(g, e, n) {
  const a = e.x <= n.x ? 1 : -1,
    korudu = n.state === `guard` && n.facing === -a,
    duvar = n.x < 90 || n.x > $h - 90,
    k = AF_DASH_CHAIN[Math.min(AF_DASH_CHAIN.length - 1, e.dashChain || 0)];
  e.dashHit = !0;
  e.dashT = 0;
  e.dashCd = AF_DASH_CD;
  e.armor = 0;
  e.vx *= 0.2;
  g.shake(12, 180);
  g.applyHit(e, n, { ...AF_dashHit, damage: Math.max(1, Math.round(AF_dashHit.damage * k)) }, (e.x + n.x) / 2, e.y - 90);
  if (korudu) {
    // korunan koşu cezasız değil: kısa süre savunmasız kalır
    e.state = `hitstun`;
    e.attack = null;
    e.hitstunT = Math.max(e.hitstunT || 0, 350);
  } else if (duvar) {
    // köşede rakip itilemez: METEHAN geri seker (~150 px), aynı yerde yapışıp tekrar vuramaz.
    // Hasar pozuna girmez: normal duruşta kayar, bu sırada (bounceT) tuş girişi kilitli.
    e.state = `idle`;
    e.attack = null;
    e.bounceT = 260;
    e.vx = -a * 1100;
  }
}

// 65-game-match-engine.js — Maç motoru (Xy): güncelleme döngüsü, saldırı çözümü, separateBodies, çizim.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Xy = class {
  ctx;
  assets;
  vsBot;
  bot;
  p1;
  p2;
  phase = `intro`;
  phaseT = 0;
  timeLeft = 99;
  paused = !1;
  ended = !1;
  hitstopT = 0;
  shakeT = 0;
  shakeDur = 1;
  shakeMag = 0;
  flashA = 0;
  showBoxes = !1;
  sparks = [];
  dmgs = [];
  projectiles = [];
  lensFlashes = [];
  announce = null;
  cb;
  input = new By();
  raf = 0;
  last = 0;
  acc = 0;
  disposed = !1;
  fightAnnounced = !1;
  pendingWinner = 0;
  pendingReason = `ko`;
  constructor(e, t, n, r = {}) {
    ((this.ctx = e.getContext(`2d`)),
      (this.assets = t),
      (this.vsBot = !!r.vsBot),
      (this.diff = r.diff || `normal`),
      (this.chars = r.chars || [AF_char(`umut`), AF_char(`sudem`)]),
      (this.bot = this.vsBot ? new Hy(this.diff) : null),
      (this.cb = n),
      (window.__AF_match = this), // test/hata ayıklama kancası (tools/test bunu kullanır)
      (this.p1 = new Ky(0, t.p1)),
      (this.p2 = new Ky(1, t.p2)),
      this.reset());
  }
  start() {
    (X.ensure(), (this.last = performance.now()), (this.raf = requestAnimationFrame(this.frame)));
  }
  dispose() {
    ((this.disposed = !0), cancelAnimationFrame(this.raf), this.input.dispose());
  }
  setPaused(e) {
    this.ended || ((this.paused = e), this.cb.onPauseChange(e));
  }
  togglePause() {
    this.setPaused(!this.paused);
  }
  restart() {
    (this.reset(), this.cb.onPauseChange(!1));
  }
  reset() {
    ((this.p1 = new Ky(0, this.assets.p1, this.chars?.[0])),
      (this.p2 = new Ky(1, this.assets.p2, this.chars?.[1])),
      this.chars &&
        this.chars[0].id === this.chars[1].id &&
        ((this.p2.name += ` II`),
        (this.p2.accent = this.chars[0].id === `umut` ? `#3ddc84` : `#ff5a7a`),
        (this.p2.accent2 = this.chars[0].id === `umut` ? `#8af5b9` : `#ff9ab0`)),
      (this.roundTime = AF_S.time > 0 ? AF_S.time : 1 / 0),
      (this.maxRounds = AF_S.rounds),
      (this.need = (AF_S.rounds + 1) >> 1),
      (this.wins = [0, 0]),
      (this.round = 1),
      (this.phase = `intro`),
      (this.phaseT = 0),
      (this.timeLeft = this.roundTime),
      (this.ended = !1),
      (this.paused = !1),
      (this.fightAnnounced = !1),
      (this.hitstopT = 0),
      (this.shakeT = 0),
      (this.flashA = 0),
      (this.sparks = []),
      (this.dmgs = []),
      (this.projectiles = []),
      (this.lensFlashes = []),
      (this.announce = { text: `RAUNT 1`, t: 0, dur: 800, size: 72, color: `#ffffff` }),
      this.vsBot && (this.bot = new Hy(this.diff)),
      X.ensure(),
      X.roundStart());
  }
  frame = (e) => {
    if (this.disposed) return;
    let t = Math.min(50, e - this.last);
    for (this.last = e, this.acc += t; this.acc >= ig;) (this.step(ig), (this.acc -= ig));
    (yy(this), (this.raf = requestAnimationFrame(this.frame)));
  };
  step(e) {
    let t = this.input.consume();
    if (
      ((this.showBoxes = AF_S.boxes),
      t.pauseEdge && this.togglePause(),
      t.boxesEdge && AF_set(`boxes`, !AF_S.boxes),
      !this.paused)
    ) {
      if (
        ((this.phaseT += e),
        this.announce &&
          ((this.announce.t += e), this.announce.t >= this.announce.dur && (this.announce = null)),
        this.shakeT > 0 && (this.shakeT = Math.max(0, this.shakeT - e)),
        this.flashA > 0 && (this.flashA = Math.max(0, this.flashA - e * 0.0018)),
        this.hitstopT > 0)
      ) {
        ((this.hitstopT -= e), this.updateEffects(e * 0.3));
        return;
      }
      if (this.phase === `intro`) {
        (!this.fightAnnounced &&
          this.phaseT >= 850 &&
          ((this.fightAnnounced = !0),
          (this.announce = { text: `DÖVÜŞ!`, t: 0, dur: 650, size: 92, color: `#ffd700` }),
          X.roundStart()),
          this.phaseT >= 1450 && ((this.phase = `fight`), (this.phaseT = 0)),
          (this.p1.animT += e),
          (this.p2.animT += e));
        return;
      }
      if (this.phase === `fight`) {
        this.updateFighter(this.p1, t.p1, this.p2, e);
        let n = this.bot ? this.bot.think(this, e) : t.p2;
        (this.updateFighter(this.p2, n, this.p1, e),
          this.separateBodies(this.p1, this.p2),
          this.resolveAttacks(),
          this.updateProjectiles(e),
          this.updateEffects(e),
          (this.timeLeft -= e / 1e3),
          this.timeLeft <= 0 && ((this.timeLeft = 0), this.onTimeUp()));
        return;
      }
      if (this.phase === `ko` || this.phase === `timeup`) {
        (this.updateFighter(this.p1, null, this.p2, e),
          this.updateFighter(this.p2, null, this.p1, e),
          this.updateEffects(e),
          this.phaseT >= 750 && AF_endRound(this));
        return;
      }
    }
  }
  updateFighter(e, t, n, r) {
    let i = r / 1e3;
    ((e.animT += r),
      e.airFlip && !e.grounded && (e.airFlipT += r),
      e.flipLandT > 0 &&
        ((e.flipLandT = Math.max(0, e.flipLandT - r)), e.flipLandT === 0 && (e.flipLandDir = 0)),
      AF_walkStep(e, r),
      (e.comboPopT += r),
      e.comboT > 0 && ((e.comboT -= r), e.comboT <= 0 && (e.combo = 0)),
      e.hitFlash > 0 && (e.hitFlash -= r),
      e.landT > 0 && (e.landT = Math.max(0, e.landT - r)),
      e.blockT > 0 && (e.blockT = Math.max(0, e.blockT - r)),
      e.dashCd > 0 && (e.dashCd = Math.max(0, e.dashCd - r)),
      e.projCd > 0 && (e.projCd = Math.max(0, e.projCd - r)),
      e.dashChainT > 0 && (e.dashChainT = Math.max(0, e.dashChainT - r)),
      e.bounceT > 0 && (e.bounceT = Math.max(0, e.bounceT - r)),
      e.dashT > 0 &&
        ((e.dashT = Math.max(0, e.dashT - r)), e.dashT === 0 && ((e.dashCd = AF_DASH_CD), (e.armor = 0))),
      e.state !== `guard` && e.gp < 100 && (e.gp = Math.min(100, e.gp + r * 0.012)),
      e.jumpT > 0 && (e.jumpT = Math.max(0, e.jumpT - r)),
      e.jumpGraceT > 0 && (e.jumpGraceT = Math.max(0, e.jumpGraceT - r)),
      e.ultiAuraT > 0 && (e.ultiAuraT -= r),
      e.state === `ko` && (e.koT += r),
      (e.dropT = Math.max(0, e.dropT - r)),
      e.bufAtkT > 0 &&
        ((e.bufAtkT = Math.max(0, e.bufAtkT - r)), e.bufAtkT === 0 && (e.bufAtk = -1)),
      e.bufUltT > 0 && (e.bufUltT = Math.max(0, e.bufUltT - r)),
      e.rollCd > 0 && (e.rollCd = Math.max(0, e.rollCd - r)));
    let a = e.state !== `ko`;
    if (e.state === `roll`) {
      e.rollT += r;
      let rp = e.rollT / e.rollDur;
      if (rp >= 1) {
        ((e.state = `idle`), (e.y = e.rollGroundY), (e.vx = 0), (e.rollInv = !1), (e.rollCd = 420));
      } else {
        ((e.x += e.rollVx * i),
          (e.x = Math.max(40, Math.min($h - 40, e.x))),
          (e.y = e.rollGroundY),
          (e.rollInv = rp > 0.15 && rp < 0.85));
      }
      return;
    }
    if (a && t && this.phase === `fight` && AF_tryAirFlip(e, t, n, r)) return;
    if (
      t &&
      t.rollEdge &&
      AF_char(e.charId).roll &&
      a &&
      e.grounded &&
      e.rollCd <= 0 &&
      this.phase === `fight` &&
      (e.state === `idle` || e.state === `walk` || e.state === `crouch`)
    ) {
      ((e.state = `roll`),
        (e.rollT = 0),
        (e.rollDur = 700),
        (e.rollGroundY = e.y),
        (e.rollH = 150),
        (e.rollVx = t.rollEdge * 520),
        (e.rollSpin = t.rollEdge),
        (e.rollBack = t.rollEdge !== e.facing),
        (e.rollInv = !1),
        X.jump && X.jump());
      return;
    }
    if (
      a &&
      e.grounded &&
      (e.state === `idle` || e.state === `walk` || e.state === `crouch` || e.state === `guard`) &&
      n.state !== `ko`
    ) {
      let t = Math.sign(n.x - e.x);
      t !== 0 && (e.facing = t);
    }
    if (e.state === `attack` && e.attack) {
      e.attack.t += r;
      let t = e.attack.def;
      e.attack.t >= t.startup + t.active + t.recovery &&
        ((e.attack = null), (e.state = e.grounded ? `idle` : `air`));
    }
    if (
      (e.state === `hitstun` &&
        ((e.hitstunT -= r), e.hitstunT <= 0 && e.grounded && (e.state = `idle`)),
      a && t && this.phase === `fight`)
    ) {
      for (let n = 0; n < 4; n++)
        if (t.attacks[n]) {
          ((e.bufAtk = n), (e.bufAtkT = 250));
          break;
        }
      t.ultEdge && (e.bufUltT = 250);
    }
    let dE = !!(t && t.dash) && !e.pDash;
    e.pDash = !!(t && t.dash);
    if (
      e.spr.frames.run &&
      dE &&
      a &&
      e.grounded &&
      e.dashCd <= 0 &&
      e.dashT <= 0 &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard`
    ) {
      // Koşu çarpması ulti barı harcamaz; 3 sn içindeki tekrarlar zayıflar ve zırhsızdır (köşe döngüsü olmasın).
      ((e.dashChain = e.dashChainT > 0 ? (e.dashChain || 0) + 1 : 0),
        (e.dashChainT = 3000),
        (e.dashT = 420),
        (e.armor = e.dashChain ? 0 : 1),
        (e.dashHit = !1),
        X.jump());
    }
    if (
      t &&
      t.projEdge &&
      AF_char(e.charId).proj &&
      a &&
      e.grounded &&
      e.projCd <= 0 &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard`
    )
      this.tryProjectile(e);
    if (
      t &&
      t.sweepEdge &&
      AF_char(e.charId).roll &&
      a &&
      e.grounded &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard` &&
      e.state !== `roll`
    ) {
      ((e.attack = { def: AF_sweepDef, t: 0, hit: !1 }), (e.state = `attack`), (e.vx = 0));
    }
    if (a && t && this.phase === `fight` && e.state !== `attack` && e.state !== `hitstun` && !(e.bounceT > 0))
      if (t.guard && AF_S.guard && e.grounded)
        (e.state !== `guard` && (e.vx = 0),
          (e.state = `guard`),
          (e.guardLow = !!t.down),
          (e.bufAtk = -1),
          (e.bufAtkT = 0),
          (e.bufUltT = 0));
      else if (e.bufAtk >= 0 && e.bufAtkT > 0)
        ((e.attack = { def: AF_def(e, Uy[e.bufAtk]), t: 0, hit: !1 }),
          (e.state = `attack`),
          e.grounded && (e.vx *= 0.25),
          X.swing(),
          (e.bufAtk = -1),
          (e.bufAtkT = 0));
      else if (e.bufUltT > 0 && e.grounded && e.meter >= 100)
        this.tryUltimate(e) && (e.bufUltT = 0);
      else if (e.grounded)
        if (t.dropEdge && e.ground === `table`)
          ((e.ground = null),
            (e.dropT = 400),
            (e.vy = 160),
            (e.y += 6),
            (e.state = `air`),
            X.swing());
        else if (t.down) ((e.state = `crouch`), (e.vx = 0));
        else {
          let d = !!t.right - +!!t.left;
          t.jumpEdge
            ? ((e.vy = rg * (e.mod ? e.mod.jump : 1)),
              // Street Fighter tarzı: ileri zıplama kalkışta yatay hıza kilitlenir (havada D'yi tutmak gerekmez).
              (e.vx = d * 330 * AF_spd(e)),
              // Yön tuşu zıplamadan hemen SONRA basılırsa da (≤ AF_JUMP_DIR_GRACE ms) aynı kilitlenme olur.
              (e.jumpGraceT = d === 0 ? AF_JUMP_DIR_GRACE : 0),
              (e.jumpT = 130),
              (e.airFlip = !1),
              (e.airFlipT = 0),
              (e.airFlipStartX = e.x),
              (e.airFlipStartY = e.y),
              (e.ground = null),
              (e.state = `air`),
              X.jump())
            : ((e.vx = d * 330 * AF_spd(e)), (e.state = d === 0 ? `idle` : `walk`));
        }
      else {
        let d = !!t.right - +!!t.left;
        const graceLock = e.jumpGraceT > 0 && d !== 0 && !e.airFlip;
        if (graceLock) e.jumpGraceT = 0;
        ((e.vx = e.airFlip
          ? e.airFlipDir * 530 * AF_spd(e)
          : graceLock
            ? d * 330 * AF_spd(e)
            : d === 0
              ? e.vx * 0.995
              : d * 330 * ng * AF_spd(e)),
          (e.state = `air`));
      }
    let o = e.y;
    if (!e.grounded) {
      let n = eg;
      (a && t && t.down && (n *= tg), (e.vy += n * i));
    }
    e.dashT > 0 &&
      e.grounded &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `ko` &&
      ((e.vx = e.facing * 780), (e.state = `walk`));
    if (
      ((e.y += e.vy * i),
      (e.x += e.vx * i),
      e.airFlip &&
        n &&
        e.airFlipDir * (e.x - n.x) > Math.min(8, n.halfW * 0.16) &&
        (e.airFlipCrossed = !0),
      e.grounded &&
        (e.state === `hitstun` ||
          e.state === `attack` ||
          e.state === `ko` ||
          e.state === `guard` ||
          e.bounceT > 0) &&
        (e.vx *= 0.88 ** (r / 16.7)),
      e.ground === `table` &&
        (e.x < 375 || e.x > 1002) &&
        ((e.ground = null),
        (e.state === `idle` || e.state === `walk` || e.state === `crouch`) && (e.state = `air`)),
      !e.grounded && e.vy >= 0)
    ) {
      let t = e.x > 381 && e.x < 996;
      e.dropT <= 0 && t && o <= 429 && e.y >= 429
        ? ((e.y = 429), (e.vy = 0), (e.ground = `table`), this.onLand(e))
        : e.y >= 704 && ((e.y = 704), (e.vy = 0), (e.ground = `g1`), this.onLand(e));
    }
    (e.tableLock &&
      (e.state === `hitstun` ? (e.x = pg(e.x, 387 + e.halfW, 990 - e.halfW)) : (e.tableLock = !1)),
      (e.x = e.state === `ko` ? AF_koClamp(e) : pg(e.x, 40, $h - 40)),
      e.dashT > 0 &&
        !e.dashHit &&
        n.state !== `ko` &&
        Math.abs(e.x - n.x) < e.halfW + n.halfW + 14 &&
        Math.abs(e.y - n.y) < 135 &&
        AF_dashImpact(this, e, n),
      e.ghostHp > e.hp ? (e.ghostHp = Math.max(e.hp, e.ghostHp - r * 0.055)) : (e.ghostHp = e.hp));
  }
  onLand(e) {
    if (e.airFlip) {
      e.flipLandDir = e.airFlipCrossed ? e.airFlipDir : 0;
      e.flipLandT = e.flipLandDir ? 110 : 0;
    }
    ((e.airFlip = !1),
      (e.airFlipT = 0),
      (e.airFlipDir = 0),
      (e.airFlipCrossed = !1),
      e.state !== `ko` && (e.landT = 150),
      e.state === `air` && ((e.state = `idle`), X.land()));
  }
  separateBodies(e, t) {
    if (e.state === `ko` || t.state === `ko`) return;
    let a = e.hurtbox(),
      b = t.hurtbox();
    // Rakibin üzerinden YALNIZCA takla (airFlip) geçebilir. Normal zıplama (W, W+yön) rakibi aşamaz:
    // yan yana ya da baş hizasında bile görünmez bir duvar gibi durur (AF_JUMP_CROSS ile eski davranış açılır).
    const level = (f) => (f.ground === `table` ? 429 : f.ground !== null ? 704 : f.y < 430 ? 429 : 704);
    const flipClear = (upper, lower) =>
      upper.airFlip &&
      upper.ground === null &&
      upper.state === `air` &&
      lower.y - upper.y >= lower.spr.frames.idle.visibleH * 0.34;
    const jumpClear = (upper, lower) =>
      AF_JUMP_CROSS &&
      upper.ground === null &&
      (upper.state === `air` || upper.state === `attack`) &&
      lower.y - upper.y >= lower.spr.frames.idle.visibleH * 0.35;
    const airBlock = (upper, lower) =>
      !AF_JUMP_CROSS &&
      upper.ground === null &&
      !upper.airFlip &&
      (upper.state === `air` || upper.state === `attack`) &&
      lower.ground !== null &&
      level(upper) === level(lower);
    if (flipClear(e, t) || flipClear(t, e) || jumpClear(e, t) || jumpClear(t, e)) return;
    const apart = a.y >= b.y + b.h || b.y >= a.y + a.h;
    if (apart && !(airBlock(e, t) || airBlock(t, e))) return;
    const overlap = (e.halfW + t.halfW) * 0.9 - Math.abs(e.x - t.x);
    if (overlap <= 0) return;
    const bounds = (f) => (f.ground === `table` ? [387 + f.halfW, 990 - f.halfW] : [40, $h - 40]);
    const jumper =
      e.flipLandT > 0 && e.flipLandDir && e.grounded
        ? e
        : t.flipLandT > 0 && t.flipLandDir && t.grounded
          ? t
          : null;
    if (jumper) {
      const rival = jumper === e ? t : e,
        dir = jumper.flipLandDir;
      if (dir * (jumper.x - rival.x) >= 0) {
        const [lo, hi] = bounds(jumper),
          room = Math.max(0, dir > 0 ? hi - jumper.x : jumper.x - lo);
        const shift = Math.min(overlap, room);
        jumper.x = pg(jumper.x + dir * shift, lo, hi);
        if (overlap > shift) {
          const [rl, rh] = bounds(rival);
          rival.x = pg(rival.x - dir * (overlap - shift), rl, rh);
        }
        return;
      }
    }
    let left = e.x <= t.x ? e : t,
      right = left === e ? t : e;
    const [ll, lh] = bounds(left),
      [rl, rh] = bounds(right);
    const lr = Math.max(0, left.x - ll),
      rr = Math.max(0, rh - right.x);
    let x = Math.min(lr, overlap / 2),
      y = Math.min(rr, overlap - x);
    x += Math.min(lr - x, overlap - x - y);
    y += Math.min(rr - y, overlap - x - y);
    left.x = pg(left.x - x, ll, lh);
    right.x = pg(right.x + y, rl, rh);
  }
  resolveAttacks() {
    let e = [
      [this.p1, this.p2],
      [this.p2, this.p1],
    ];
    for (let [t, n] of e) {
      if (n.state === `ko`) continue;
      let e = t.attack;
      if (!e || e.hit || e.def.noHit) continue;
      let r = e.def;
      if (e.t < r.startup || e.t > r.startup + r.active) continue;
      let i = qy(Jy(t, r), n.hurtbox());
      i && ((e.hit = !0), this.applyHit(t, n, r, i.x, i.y));
    }
  }
  applyHit(e, t, n, r, i) {
    if (t.state === `ko` || this.phase !== `fight` || t.rollInv) return;
    e.mod &&
      (n = {
        ...n,
        damage: Math.max(1, Math.round(n.damage * e.mod.dmg)),
        kbx: Math.round(n.kbx * e.mod.kb),
      });
    let a = e.x <= t.x ? 1 : -1;
    if (t.state === `guard` && t.facing === -a && AF_block(this, e, t, n, a, r, i)) return;
    n = AF_scaleHit(n);
    if (t.dashT > 0 && t.armor > 0) {
      t.armor = 0;
      let ad = Math.max(1, Math.round(n.damage * 0.3));
      ((t.hp = Math.max(1, t.hp - ad)),
        (e.damageDealt += ad),
        this.addMeter(e, n.meter),
        (t.hitFlash = 140),
        (this.hitstopT = Math.min(120, 50 + ad * 3)),
        this.burst(r, i, 12, a, `#ffd24a`),
        AF_S.dmgnum && this.dmgNum(r, i - 30, ad, `#ffd24a`),
        X.hitLight());
      return;
    }
    if (t.dashT > 0) {
      ((t.dashT = 0), (t.dashCd = AF_DASH_CD), (t.armor = 0));
    }
    ((t.hp = Math.max(0, t.hp - n.damage)),
      (e.damageDealt += n.damage),
      this.addMeter(e, n.meter),
      this.addMeter(t, Math.round(n.meter * 0.45)),
      (e.combo += 1),
      (e.comboT = 1300),
      (e.comboPopT = 0),
      (e.maxCombo = Math.max(e.maxCombo, e.combo)),
      (t.combo = 0),
      (t.comboT = 0),
      (t.ground === `table` || t.tableLock) && (t.tableLock = !0),
      (t.state = `hitstun`),
      (t.airFlip = !1),
      (t.flipLandDir = 0),
      (t.attack = null),
      (t.hitstunT = n.hitstun),
      (t.vx = n.kbx * a),
      (t.vy = n.kby),
      n.kby < 0 && (t.ground = null),
      (t.hitFlash = 140),
      (this.hitstopT = Math.min(150, 70 + n.damage * 3)),
      this.shake(n.damage >= 12 ? 20 : 4 + n.damage * 1.1, 150 + n.damage * 5),
      this.burst(r, i, 10 + n.damage, a, e.accent),
      this.dmgNum(r, i - 30, n.damage, e.accent),
      n.damage >= 10 ? X.hitHeavy() : X.hitLight(),
      t.hp <= 0 && this.onKo(e, t));
  }
  addMeter(e, t) {
    if (t <= 0 || !AF_S.ult) return;
    let n = e.meter;
    ((e.meter = Math.min(100, e.meter + t)),
      e.meter >= 100 && n < 100 && (X.meterFull(), this.cb.onUltiReady(e.idx)));
  }
  tryProjectile(e) {
    if (
      e.state === `ko` ||
      e.state === `hitstun` ||
      e.state === `attack` ||
      !e.grounded ||
      e.projCd > 0 ||
      this.phase !== `fight`
    )
      return !1;
    // SUDEM: sihirli yüzük (F). Eski UMUT flaşı (kind "flash") kod olarak duruyor ama kimseye atanmadı.
    const yuzuk = e.charId === `sudem`;
    ((e.projCd = yuzuk ? 900 : 620),
      (e.attack = { def: AF_projCast, t: 0, hit: !0 }),
      (e.state = `attack`),
      (e.vx = 0));
    let t = e.spr.frames.cast || e.spr.frames.idle,
      n = e.x + e.facing * ((t.tipX || 40) + 10),
      r = e.y - (t.tipY || e.spr.frames.idle.visibleH * 0.52);
    if (yuzuk) {
      this.projectiles.push({
        kind: `ringshot`,
        owner: e.idx,
        x: n,
        y: r,
        vx: 660 * e.facing,
        vy: 0,
        r: 26,
        rot: 0,
        vr: 0,
        t: 0,
        delay: 80,
        baseY: r,
        dead: !1,
      });
      X.ringChime();
      return !0;
    }
    this.projectiles.push({
      kind: `flash`,
      owner: e.idx,
      x: n,
      y: r,
      vx: 740 * e.facing,
      vy: 0,
      r: 30,
      rot: 0,
      vr: 7 * e.facing,
      t: 0,
      delay: 90,
      baseY: r,
      dead: !1,
    });
    (this.lensFlashes.push({ x: n, y: r, t: 0 }),
      (this.flashA = Math.max(this.flashA, 0.4)),
      X.flashWave && X.flashWave(),
      this.shake(5, 140));
    return !0;
  }
  tryUltimate(e) {
    if (
      !AF_S.ult ||
      this.phase !== `fight` ||
      e.state === `ko` ||
      e.state === `hitstun` ||
      e.state === `attack` ||
      e.meter < 100 ||
      !e.grounded
    )
      return !1;
    ((e.meter = 0),
      (e.ultiAuraT = 520),
      (e.attack = { def: Wy, t: 0, hit: !0 }),
      (e.state = `attack`),
      (e.vx = 0));
    let t = e.spr.frames.ult,
      at = AF_char(e.charId).ultAt,
      iH = e.spr.frames.idle.visibleH,
      n = e.x + e.facing * (at ? at.x * iH : t.tipX),
      r = e.y - (at ? at.y * iH : t.tipY),
      i = (t, r, i, a, o, s, c) => ({
        kind: t,
        owner: e.idx,
        x: n,
        y: r,
        vx: i * e.facing,
        vy: a,
        r: o,
        rot: 0,
        vr: c * e.facing,
        t: 0,
        delay: s,
        baseY: r,
        dead: !1,
      });
    return (
      e.charId === `metehan`
        ? ((this.flashA = 0.55),
          Array.from({ length: 14 }).forEach((_, k) => {
            let yy = r + (Math.random() - 0.5) * 150,
              p = i(
                `note`,
                yy,
                720 + Math.random() * 280,
                (Math.random() - 0.5) * 80,
                22 + Math.random() * 18,
                k * 32,
                0,
              );
            ((p.rot = k % 2), (p.col = k % 4), this.projectiles.push(p));
          }),
          this.lensFlashes.push({ x: n, y: r, t: 0 }),
          (this.announce = {
            text: `YILDIRIM NOTALARI!`,
            t: 0,
            dur: 900,
            size: 50,
            color: `#8ad8ff`,
          }),
          X.zapCast())
        : e.charId === `umut`
          ? (this.lensFlashes.push({ x: n, y: r, t: 0 }),
            (this.flashA = 0.78),
            this.projectiles.push({ ...i(`photo`, r, 860, -110, 30, 60, 9), fi: 0 }),
            this.projectiles.push({ ...i(`photo`, r, 900, 0, 30, 150, -8), fi: 1 }),
            this.projectiles.push({ ...i(`photo`, r, 860, 110, 30, 240, 10), fi: 2 }),
            (this.announce = { text: `FLAŞ PATLAMASI!`, t: 0, dur: 900, size: 54, color: lg }),
            X.flashWave(),
            X.shutter(0.08),
            X.shutter(0.17),
            X.shutter(0.26))
          : e.charId === `ahmet`
            ? // GAZA BAS!: sürücüsüz motor ekranın AHMET'in arkasındaki kenarından gaz vererek gelir
              (this.projectiles.push({
                ...i(`motor`, e.y - 2, 1150, 0, 52, 380, 0),
                x: e.facing > 0 ? -100 : $h + 100,
              }),
              (this.announce = { text: `GAZA BAS!`, t: 0, dur: 900, size: 64, color: `#ff7a1a` }),
              X.carRev(),
              X.carRev())
            : (this.projectiles.push(i(`car`, e.y - 2, 980, 0, 48, 40, 0)),
              (this.announce = { text: `KA-ÇOV!`, t: 0, dur: 900, size: 64, color: dg }),
              X.carRev()),
      this.shake(10, 260),
      !0
    );
  }
  giveUlti(e) {
    (e === 0 ? this.p1 : this.p2).meter = 100;
  }
  setHp(e, t) {
    let n = e === 0 ? this.p1 : this.p2;
    ((n.hp = Math.max(1, t)), (n.ghostHp = n.hp));
  }
  updateProjectiles(e) {
    let t = e / 1e3;
    for (let n of this.projectiles) {
      if (n.dead) continue;
      if (n.delay > 0) {
        n.delay -= e;
        continue;
      }
      if (((n.t += e), (n.x += n.vx * t), (n.rot += n.vr * t), n.kind === `ring`))
        n.y = n.baseY + Math.sin(n.t * 0.012) * 16;
      else if (n.kind === `car` || n.kind === `motor`) {
        let e = n.x > 387 && n.x < 990 && n.y <= 430 ? 429 : 704;
        (n.y < e - 2
          ? ((n.vy += eg * t), (n.y = Math.min(e - 2, n.y + n.vy * t)))
          : ((n.vy = 0), (n.y = e - 2)),
          Math.random() < 0.6 &&
            this.sparks.push({
              x: n.x - Math.sign(n.vx) * 30,
              y: n.y - 6,
              vx: -n.vx * 0.15,
              vy: -60 - Math.random() * 80,
              size: 3 + Math.random() * 4,
              life: 260,
              max: 260,
              color:
                n.kind === `motor`
                  ? [`#ff9a1f`, `#ffd24a`, `#9aa0a6`][(Math.random() * 3) | 0]
                  : Math.random() < 0.5
                    ? `#ffd24a`
                    : `#ff3b2f`,
              rot: 0,
              spin: 4,
            }));
      } else n.y += n.vy * t;
      (n.kind === `note` &&
        Math.random() < 0.9 &&
        this.sparks.push({
          x: n.x - Math.sign(n.vx) * (10 + Math.random() * 50),
          y: n.y + (Math.random() - 0.5) * 60,
          vx: -n.vx * 0.12,
          vy: (Math.random() - 0.5) * 160,
          size: 2 + Math.random() * 4,
          life: 300,
          max: 300,
          color: [`#5ad8ff`, `#c06cff`, `#7aa0ff`, `#ff9ae8`, `#ffffff`][(Math.random() * 5) | 0],
          rot: 0,
          spin: 6,
        }),
        (n.kind === `ring` || n.kind === `ringshot`) &&
          Math.random() < 0.7 &&
          this.sparks.push({
            x: n.x + (Math.random() - 0.5) * 30,
            y: n.y + (Math.random() - 0.5) * 30,
            vx: -n.vx * 0.1,
            vy: (Math.random() - 0.5) * 60,
            size: 2 + Math.random() * 4,
            life: 380,
            max: 380,
            color: Math.random() < 0.5 ? `#ffe27a` : `#ff8fd8`,
            rot: 0,
            spin: 6,
          }));
      let r = n.owner === 0 ? this.p1 : this.p2,
        i = n.owner === 0 ? this.p2 : this.p1;
      if (i.state !== `ko`) {
        let e = n.kind === `car` || n.kind === `motor` ? n.y - 40 : n.y,
          t = Yy(n.x, e, n.r, i.hurtbox());
        t &&
          ((n.dead = !0),
          this.applyHit(r, i, n.kind === `ringshot` ? AF_ringShot : n.kind === `motor` ? AF_motorHit : Gy[n.kind], t.x, t.y),
          this.burst(
            t.x,
            t.y,
            20,
            Math.sign(n.vx),
            n.kind === `photo`
              ? `#ffffff`
              : n.kind === `car`
                ? `#ff3b2f`
                : n.kind === `motor`
                  ? `#ff7a1a`
                : n.kind === `flash`
                  ? `#8ad8ff`
                  : `#ffe27a`,
          ),
          (n.kind === `photo` || n.kind === `flash`) && (this.flashA = Math.max(this.flashA, 0.25)),
          n.kind === `note` &&
            ((this.flashA = Math.max(this.flashA, 0.14)),
            Math.random() < 0.3 && X.zap(),
            this.shake(6, 110),
            this.burst(t.x, t.y, 6, Math.sign(n.vx), Math.random() < 0.5 ? `#8ad8ff` : `#c06cff`)));
      }
      (n.x < -120 || n.x > 1496 || n.y > 900 || n.y < -200) && (n.dead = !0);
    }
    this.projectiles = this.projectiles.filter((e) => !e.dead);
    for (let t of this.lensFlashes) t.t += e;
    ((this.lensFlashes = this.lensFlashes.filter((e) => e.t < 420)),
      this.sparks.length > 420 && this.sparks.splice(0, this.sparks.length - 420));
  }
  updateEffects(e) {
    let t = e / 1e3;
    for (let n of this.sparks)
      ((n.life -= e),
        (n.x += n.vx * t),
        (n.y += n.vy * t),
        (n.vx *= 0.96),
        (n.vy = n.vy * 0.96 + 500 * t),
        (n.rot += n.spin * t));
    this.sparks = this.sparks.filter((e) => e.life > 0);
    for (let t of this.dmgs) t.life -= e;
    this.dmgs = this.dmgs.filter((e) => e.life > 0);
  }
  shake(e, t) {
    if (!AF_S.shake) return;
    ((this.shakeMag = Math.max(this.shakeT > 0 ? this.shakeMag : 0, e)),
      (this.shakeDur = t),
      (this.shakeT = t));
  }
  burst(e, t, n, r, i) {
    for (let a = 0; a < n; a++) {
      let n = 300 + Math.random() * 300;
      this.sparks.push({
        x: e + (Math.random() - 0.5) * 26,
        y: t + (Math.random() - 0.5) * 26,
        vx: (Math.random() - 0.25) * 420 + r * 170,
        vy: (Math.random() - 0.7) * 440,
        size: 3 + Math.random() * 5 + (a % 3 == 0 ? 3 : 0),
        life: n,
        max: n,
        color: a % 3 == 0 ? `#ffffff` : i,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 10,
      });
    }
  }
  dmgNum(e, t, n, r) {
    AF_S.dmgnum &&
      this.dmgs.push({
        x: e + (Math.random() - 0.5) * 18,
        y: t,
        text: String(n),
        life: 750,
        max: 750,
        color: r,
        size: 20 + n * 1.1,
      });
  }
  onKo(e, t) {
    this.phase === `fight` &&
      ((this.phase = `ko`),
      (this.phaseT = 0),
      (this.pendingWinner = e.idx === 0 ? 1 : 2),
      (this.pendingReason = `ko`),
      (t.state = `ko`),
      (t.hp = 0),
      (t.attack = null),
      (t.ground = null),
      (t.hitstunT = 0),
      (t.tableLock = !1),
      (t.dashT = 0),
      (t.armor = 0),
      (t.running = !1),
      (t.dashHit = !1),
      (t.vy = Math.min(t.vy, -520)),
      (t.vx = (t.x <= e.x ? -1 : 1) * 420),
      (this.hitstopT = 0),
      (this.announce = { text: `K.O.!`, t: 0, dur: 900, size: 110, color: `#ff2a5f` }),
      X.ko(),
      this.shake(26, 500),
      (this.flashA = Math.max(this.flashA, 0.3)));
  }
  onTimeUp() {
    ((this.phase = `timeup`),
      (this.phaseT = 0),
      (this.pendingReason = `time`),
      (this.pendingWinner = this.p1.hp > this.p2.hp ? 1 : this.p2.hp > this.p1.hp ? 2 : 0),
      (this.announce = { text: `SÜRE DOLDU`, t: 0, dur: 1500, size: 64, color: `#ffd700` }),
      X.ko());
  }
  finish() {
    if (this.ended) return;
    ((this.ended = !0), (this.phase = `over`));
    let e = (e) => ({ damageDealt: e.damageDealt, maxCombo: e.maxCombo, hpLeft: Math.round(e.hp) }),
      t = {
        winner: this.wins[0] > this.wins[1] ? 1 : this.wins[1] > this.wins[0] ? 2 : 0,
        reason: this.pendingReason,
        rounds: [this.wins[0], this.wins[1]],
        p1: e(this.p1),
        p2: e(this.p2),
      };
    this.cb.onMatchEnd(t);
  }
  debugState() {
    let e = (e) => ({
      x: Math.round(e.x),
      y: Math.round(e.y),
      ground: e.ground,
      state: e.state,
      pose: e.pose(),
      hp: e.hp,
      meter: e.meter,
      hurtH: Math.round(e.hurtbox().h),
      standH: Math.round(e.spr.frames.idle.visibleH * 10) / 10,
    });
    return {
      vsBot: this.vsBot,
      round: this.round,
      wins: this.wins,
      phase: this.phase,
      timeLeft: Math.ceil(this.timeLeft),
      paused: this.paused,
      p1: e(this.p1),
      p2: e(this.p2),
      projectiles: this.projectiles.map((e) => e.kind),
    };
  }
};

// 70-ui-battle-screen.js — Dövüş ekranı (canvas + React bileşeni) ve uygulama kökü bileşeni.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function Zy(e, t, n) {
  return (0, P.jsxs)(
    `div`,
    {
      className: `font-monox grid grid-cols-3 items-center gap-2 text-[11px]`,
      children: [
        (0, P.jsx)(`span`, { className: `text-right font-bold text-[#ff2a5f]`, children: t }),
        (0, P.jsx)(`span`, {
          className: `text-center tracking-widest text-slate-500`,
          children: e,
        }),
        (0, P.jsx)(`span`, { className: `text-left font-bold text-cyan-300`, children: n }),
      ],
    },
    e,
  );
}

function Qy() {
  let e = (0, N.useRef)(null),
    t = (0, N.useRef)(null),
    [n, r] = (0, N.useState)(!1),
    [i, a] = (0, N.useState)(!1),
    [o, s] = (0, N.useState)(null),
    [afSet, setAfSet] = (0, N.useState)(!1),
    [, afBump] = (0, N.useState)(0),
    c = wn(),
    [l] = Zr(),
    u = l.get(`mode`) === `bot`,
    af1 = AF_char(l.get(`p1`) || `umut`),
    af2 = AF_char(l.get(`p2`) || `sudem`),
    afd = [`easy`, `normal`, `hard`].includes(l.get(`diff`)) ? l.get(`diff`) : `normal`,
    d = `?mode=${u ? `bot` : `2p`}&p1=${af1.id}&p2=${af2.id}&diff=${afd}`;
  (0, N.useEffect)(() => {
    let n = e.current;
    if (!n) return;
    let i = !1,
      o = null;
    return (
      Eg(af1.id, af2.id).then((e) => {
        i ||
          ((o = new Xy(
            n,
            e,
            {
              onPauseChange: a,
              onMatchEnd: (e) => s(e),
              onUltiReady: (e) =>
                wi(
                  e === 0
                    ? `${af1.name} · ULTİ HAZIR! (${AF_k(0, `ult`)})`
                    : u
                      ? `${af2.name} (BOT) · ULTİ HAZIR!`
                      : `${af2.name} · ULTİ HAZIR! (${AF_k(1, `ult`)})`,
                  { description: `Özel atak hazır — kullan veya kaybet!` },
                ),
            },
            { vsBot: u, diff: afd, chars: [af1, af2] },
          )),
          (t.current = o),
          o.start(),
          r(!0));
      }),
      () => {
        ((i = !0), o?.dispose(), (t.current = null));
      }
    );
  }, [u, af1, af2, afd]);
  let f = () => {
      (X.uiClick(), t.current?.setPaused(!1));
    },
    p = () => {
      (X.uiClick(), s(null), t.current?.restart());
    },
    m = (e) => {
      (X.uiClick(), c(e));
    };
  return (0, P.jsxs)(`div`, {
    "data-testid": `battle-screen`,
    className: `scanlines relative flex min-h-svh flex-col bg-[#06070f]`,
    children: [
      (0, P.jsx)(`div`, {
        className: `flex flex-1 items-center justify-center p-2`,
        children: (0, P.jsx)(`canvas`, {
          ref: e,
          width: 1376,
          height: 768,
          "data-testid": `battle-canvas`,
          className: `h-auto max-h-[calc(100svh-56px)] w-full max-w-[1376px] border border-[#272744] bg-black`,
          style: { aspectRatio: `1376 / 768` },
        }),
      }),
      AF_S.hints &&
        (0, P.jsxs)(`footer`, {
          className: `font-monox flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-3 pb-2 text-[10px] tracking-wider text-slate-500`,
          children: [
            (0, P.jsxs)(`span`, {
              children: [
                (0, P.jsx)(`b`, { className: `text-[#ff2a5f]`, children: `P1` }),
                AF_footer(0),
              ],
            }),
            (0, P.jsx)(`span`, {
              children: u
                ? (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(`b`, { className: `text-cyan-300`, children: `P2` }),
                      ` BOT (YAPAY ZEKA)`,
                    ],
                  })
                : (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(`b`, { className: `text-cyan-300`, children: `P2` }),
                      AF_footer(1),
                    ],
                  }),
            }),
            (0, P.jsx)(`span`, { children: `ESC / P — DURAKLAT · F2 — HITBOX` }),
          ],
        }),
      afSet &&
        (0, P.jsx)(AF_Settings, {
          inGame: !0,
          onClose: () => {
            setAfSet(!1);
            afBump((v) => v + 1);
          },
        }),
      i &&
        !o &&
        (0, P.jsx)(`div`, {
          "data-testid": `pause-overlay`,
          className: `absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm`,
          children: (0, P.jsxs)(`div`, {
            className: `w-[320px] rounded-xl border border-cyan-400/50 bg-[#121124]/95 p-6 text-center shadow-[0_0_40px_rgba(0,240,255,0.25)]`,
            children: [
              (0, P.jsx)(`h2`, {
                className: `font-display text-3xl font-black tracking-widest text-white`,
                children: `DURDURULDU`,
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-5 flex flex-col gap-2.5`,
                children: [
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-resume-button`,
                    onClick: f,
                    children: `DEVAM ET`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-settings-button`,
                    variant: `outline`,
                    onClick: () => {
                      (X.uiClick(), setAfSet(!0));
                    },
                    children: `AYARLAR`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-restart-button`,
                    variant: `outline`,
                    onClick: p,
                    children: `YENİDEN BAŞLAT`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-select-button`,
                    variant: `outline`,
                    onClick: () => m(`/select${d}`),
                    children: `KARAKTER SEÇİMİ`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-title-button`,
                    variant: `outline`,
                    onClick: () => m(`/`),
                    children: `ANA MENÜ`,
                  }),
                ],
              }),
            ],
          }),
        }),
      o &&
        (0, P.jsx)(`div`, {
          "data-testid": `result-overlay`,
          className: `absolute inset-0 z-20 flex items-center justify-center bg-black/75 backdrop-blur-sm`,
          children: (0, P.jsxs)(`div`, {
            className: `w-[440px] rounded-xl border bg-[#121124]/95 p-7 text-center`,
            style: {
              borderColor: o.winner === 2 ? af2.color : af1.color,
              boxShadow: `0 0 46px ${o.winner === 2 ? `rgba(0,240,255,0.3)` : `rgba(255,42,95,0.3)`}`,
            },
            children: [
              (0, P.jsx)(`p`, {
                className: `font-monox text-xs tracking-[0.4em] text-slate-400`,
                children: o.reason === `ko` ? `NAKAVT` : `SÜRE DOLDU`,
              }),
              (0, P.jsx)(`h2`, {
                "data-testid": `result-title`,
                className: `font-display mt-2 text-4xl font-black text-white`,
                children:
                  o.winner === 0 ? `BERABERE!` : o.winner === 1 ? `P1 KAZANDI!` : `P2 KAZANDI!`,
              }),
              (0, P.jsx)(`p`, {
                className: `font-monox mt-1 text-sm`,
                style: { color: o.winner === 2 ? af2.color : af1.color },
                children: o.winner === 1 ? af1.name : o.winner === 2 ? af2.name : `KAZANAN YOK`,
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-5 space-y-1.5`,
                children: [
                  Zy(`RAUNT`, o.rounds ? o.rounds[0] : `-`, o.rounds ? o.rounds[1] : `-`),
                  Zy(`HASAR`, o.p1.damageDealt, o.p2.damageDealt),
                  Zy(`EN İYİ KOMBO`, `${o.p1.maxCombo}×`, `${o.p2.maxCombo}×`),
                  Zy(`KALAN CAN`, o.p1.hpLeft, o.p2.hpLeft),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-6 flex flex-col gap-2.5`,
                children: [
                  (0, P.jsx)(uy, {
                    "data-testid": `result-replay-button`,
                    onClick: p,
                    children: `TEKRAR OYNA`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `result-select-button`,
                    variant: `outline`,
                    onClick: () => m(`/select${d}`),
                    children: `KARAKTER SEÇİMİ`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `result-title-button`,
                    variant: `outline`,
                    onClick: () => m(`/`),
                    children: `ANA MENÜ`,
                  }),
                ],
              }),
            ],
          }),
        }),
      !n &&
        (0, P.jsx)(`div`, {
          className: `absolute inset-0 z-10 flex items-center justify-center bg-black`,
          children: (0, P.jsx)(`p`, {
            className: `font-monox animate-pulse text-sm tracking-[0.4em] text-cyan-300`,
            children: `YÜKLENİYOR...`,
          }),
        }),
    ],
  });
}

function $y() {
  return (0, P.jsxs)(P.Fragment, {
    children: [
      (0, P.jsxs)(Qn, {
        children: [
          (0, P.jsx)(Xn, { path: `/`, element: (0, P.jsx)(kg, {}) }),
          (0, P.jsx)(Xn, { path: `/select`, element: (0, P.jsx)(gy, {}) }),
          (0, P.jsx)(Xn, { path: `/battle`, element: (0, P.jsx)(Qy, {}) }),
          (0, P.jsx)(Xn, { path: `*`, element: (0, P.jsx)(Yn, { to: `/`, replace: !0 }) }),
        ],
      }),
      (0, P.jsx)(Aa, {}),
    ],
  });
}

// 99-app-bootstrap.js — Uygulamayı başlatır.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var eb = new ze(),
  tb = Vr;

(AF_apply(),
  (0, ci.createRoot)(document.getElementById(`root`)).render(
    (0, P.jsx)(N.StrictMode, {
      children: (0, P.jsx)(Ue, {
        client: eb,
        children: (0, P.jsx)(tb, { children: (0, P.jsx)($y, {}) }),
      }),
    }),
  ));
