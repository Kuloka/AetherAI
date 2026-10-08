(()=>{var IM=Object.create;var T0=Object.defineProperty;var LM=Object.getOwnPropertyDescriptor;var PM=Object.getOwnPropertyNames;var NM=Object.getPrototypeOf,OM=Object.prototype.hasOwnProperty;var Ui=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var FM=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of PM(e))!OM.call(t,s)&&s!==n&&T0(t,s,{get:()=>e[s],enumerable:!(i=LM(e,s))||i.enumerable});return t};var Bi=(t,e,n)=>(n=t!=null?IM(NM(t)):{},FM(e||!t||!t.__esModule?T0(n,"default",{value:t,enumerable:!0}):n,t));var N0=Ui(Oe=>{"use strict";var nd=Symbol.for("react.transitional.element"),zM=Symbol.for("react.portal"),HM=Symbol.for("react.fragment"),GM=Symbol.for("react.strict_mode"),VM=Symbol.for("react.profiler"),kM=Symbol.for("react.consumer"),WM=Symbol.for("react.context"),XM=Symbol.for("react.forward_ref"),YM=Symbol.for("react.suspense"),qM=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),QM=Symbol.for("react.activity"),b0=Symbol.iterator;function ZM(t){return t===null||typeof t!="object"?null:(t=b0&&t[b0]||t["@@iterator"],typeof t=="function"?t:null)}var U0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B0=Object.assign,I0={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||U0}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=Sa.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||U0}var sd=id.prototype=new L0;sd.constructor=id;B0(sd,Sa.prototype);sd.isPureReactComponent=!0;var w0=Array.isArray;function td(){}var Mt={H:null,A:null,T:null,S:null},P0=Object.prototype.hasOwnProperty;function rd(t,e,n){var i=n.ref;return{$$typeof:nd,type:t,key:e,ref:i!==void 0?i:null,props:n}}function KM(t,e){return rd(t.type,e,t.props)}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===nd}function JM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var C0=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JM(""+t.key):e.toString(36)}function jM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(td,td):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Aa(t,e,n,i,s){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case nd:case zM:a=!0;break;case D0:return a=t._init,Aa(a(t._payload),e,n,i,s)}}if(a)return s=s(t),a=i===""?"."+ed(t,0):i,w0(s)?(n="",a!=null&&(n=a.replace(C0,"$&/")+"/"),Aa(s,e,n,"",function(c){return c})):s!=null&&(ad(s)&&(s=KM(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(C0,"$&/")+"/")+a)),e.push(s)),1;a=0;var o=i===""?".":i+":";if(w0(t))for(var l=0;l<t.length;l++)i=t[l],r=o+ed(i,l),a+=Aa(i,e,n,r,s);else if(l=ZM(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+ed(i,l++),a+=Aa(i,e,n,r,s);else if(r==="object"){if(typeof t.then=="function")return Aa(jM(t),e,n,i,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function bc(t,e,n){if(t==null)return t;var i=[],s=0;return Aa(t,i,"","",function(r){return e.call(n,r,s++)}),i}function $M(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var R0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},eE={map:bc,forEach:function(t,e,n){bc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bc(t,function(){e++}),e},toArray:function(t){return bc(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Activity=QM;Oe.Children=eE;Oe.Component=Sa;Oe.Fragment=HM;Oe.Profiler=VM;Oe.PureComponent=id;Oe.StrictMode=GM;Oe.Suspense=YM;Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;Oe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Mt.H.useMemoCache(t)}};Oe.cache=function(t){return function(){return t.apply(null,arguments)}};Oe.cacheSignal=function(){return null};Oe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=B0({},t.props),s=t.key;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)!P0.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return rd(t.type,s,i)};Oe.createContext=function(t){return t={$$typeof:WM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:kM,_context:t},t};Oe.createElement=function(t,e,n){var i,s={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)P0.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=e[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return rd(t,r,s)};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:XM,render:t}};Oe.isValidElement=ad;Oe.lazy=function(t){return{$$typeof:D0,_payload:{_status:-1,_result:t},_init:$M}};Oe.memo=function(t,e){return{$$typeof:qM,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Mt.T,n={};Mt.T=n;try{var i=t(),s=Mt.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(td,R0)}catch(r){R0(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),Mt.T=e}};Oe.unstable_useCacheRefresh=function(){return Mt.H.useCacheRefresh()};Oe.use=function(t){return Mt.H.use(t)};Oe.useActionState=function(t,e,n){return Mt.H.useActionState(t,e,n)};Oe.useCallback=function(t,e){return Mt.H.useCallback(t,e)};Oe.useContext=function(t){return Mt.H.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t,e){return Mt.H.useDeferredValue(t,e)};Oe.useEffect=function(t,e){return Mt.H.useEffect(t,e)};Oe.useEffectEvent=function(t){return Mt.H.useEffectEvent(t)};Oe.useId=function(){return Mt.H.useId()};Oe.useImperativeHandle=function(t,e,n){return Mt.H.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return Mt.H.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return Mt.H.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return Mt.H.useMemo(t,e)};Oe.useOptimistic=function(t,e){return Mt.H.useOptimistic(t,e)};Oe.useReducer=function(t,e,n){return Mt.H.useReducer(t,e,n)};Oe.useRef=function(t){return Mt.H.useRef(t)};Oe.useState=function(t){return Mt.H.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return Mt.H.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return Mt.H.useTransition()};Oe.version="19.2.8"});var Ma=Ui((m3,O0)=>{"use strict";O0.exports=N0()});var q0=Ui(Rt=>{"use strict";function ud(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,s=t[i];if(0<wc(s,e))t[i]=e,t[n]=s,n=i;else break e}}function Ii(t){return t.length===0?null:t[0]}function Rc(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,s=t.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=t[a],l=a+1,c=t[l];if(0>wc(o,n))l<s&&0>wc(c,o)?(t[i]=c,t[l]=n,i=l):(t[i]=o,t[a]=n,i=a);else if(l<s&&0>wc(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function wc(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}Rt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(F0=performance,Rt.unstable_now=function(){return F0.now()}):(od=Date,z0=od.now(),Rt.unstable_now=function(){return od.now()-z0});var F0,od,z0,qi=[],Ts=[],tE=1,si=null,fn=3,hd=!1,Xo=!1,Yo=!1,fd=!1,V0=typeof setTimeout=="function"?setTimeout:null,k0=typeof clearTimeout=="function"?clearTimeout:null,H0=typeof setImmediate<"u"?setImmediate:null;function Cc(t){for(var e=Ii(Ts);e!==null;){if(e.callback===null)Rc(Ts);else if(e.startTime<=t)Rc(Ts),e.sortIndex=e.expirationTime,ud(qi,e);else break;e=Ii(Ts)}}function dd(t){if(Yo=!1,Cc(t),!Xo)if(Ii(qi)!==null)Xo=!0,Ta||(Ta=!0,Ea());else{var e=Ii(Ts);e!==null&&pd(dd,e.startTime-t)}}var Ta=!1,qo=-1,W0=5,X0=-1;function Y0(){return fd?!0:!(Rt.unstable_now()-X0<W0)}function ld(){if(fd=!1,Ta){var t=Rt.unstable_now();X0=t;var e=!0;try{e:{Xo=!1,Yo&&(Yo=!1,k0(qo),qo=-1),hd=!0;var n=fn;try{t:{for(Cc(t),si=Ii(qi);si!==null&&!(si.expirationTime>t&&Y0());){var i=si.callback;if(typeof i=="function"){si.callback=null,fn=si.priorityLevel;var s=i(si.expirationTime<=t);if(t=Rt.unstable_now(),typeof s=="function"){si.callback=s,Cc(t),e=!0;break t}si===Ii(qi)&&Rc(qi),Cc(t)}else Rc(qi);si=Ii(qi)}if(si!==null)e=!0;else{var r=Ii(Ts);r!==null&&pd(dd,r.startTime-t),e=!1}}break e}finally{si=null,fn=n,hd=!1}e=void 0}}finally{e?Ea():Ta=!1}}}var Ea;typeof H0=="function"?Ea=function(){H0(ld)}:typeof MessageChannel<"u"?(cd=new MessageChannel,G0=cd.port2,cd.port1.onmessage=ld,Ea=function(){G0.postMessage(null)}):Ea=function(){V0(ld,0)};var cd,G0;function pd(t,e){qo=V0(function(){t(Rt.unstable_now())},e)}Rt.unstable_IdlePriority=5;Rt.unstable_ImmediatePriority=1;Rt.unstable_LowPriority=4;Rt.unstable_NormalPriority=3;Rt.unstable_Profiling=null;Rt.unstable_UserBlockingPriority=2;Rt.unstable_cancelCallback=function(t){t.callback=null};Rt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W0=0<t?Math.floor(1e3/t):5};Rt.unstable_getCurrentPriorityLevel=function(){return fn};Rt.unstable_next=function(t){switch(fn){case 1:case 2:case 3:var e=3;break;default:e=fn}var n=fn;fn=e;try{return t()}finally{fn=n}};Rt.unstable_requestPaint=function(){fd=!0};Rt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=fn;fn=t;try{return e()}finally{fn=n}};Rt.unstable_scheduleCallback=function(t,e,n){var i=Rt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,t={id:tE++,callback:e,priorityLevel:t,startTime:n,expirationTime:s,sortIndex:-1},n>i?(t.sortIndex=n,ud(Ts,t),Ii(qi)===null&&t===Ii(Ts)&&(Yo?(k0(qo),qo=-1):Yo=!0,pd(dd,n-i))):(t.sortIndex=s,ud(qi,t),Xo||hd||(Xo=!0,Ta||(Ta=!0,Ea()))),t};Rt.unstable_shouldYield=Y0;Rt.unstable_wrapCallback=function(t){var e=fn;return function(){var n=fn;fn=e;try{return t.apply(this,arguments)}finally{fn=n}}}});var Z0=Ui((v3,Q0)=>{"use strict";Q0.exports=q0()});var J0=Ui(Sn=>{"use strict";var nE=Ma();function K0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function bs(){}var An={d:{f:bs,r:function(){throw Error(K0(522))},D:bs,C:bs,L:bs,m:bs,X:bs,S:bs,M:bs},p:0,findDOMNode:null},iE=Symbol.for("react.portal");function sE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:iE,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Qo=nE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Dc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=An;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(K0(299));return sE(t,e,null,n)};Sn.flushSync=function(t){var e=Qo.T,n=An.p;try{if(Qo.T=null,An.p=2,t)return t()}finally{Qo.T=e,An.p=n,An.d.f()}};Sn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,An.d.C(t,e))};Sn.prefetchDNS=function(t){typeof t=="string"&&An.d.D(t)};Sn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Dc(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?An.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&An.d.X(t,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Sn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Dc(e.as,e.crossOrigin);An.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&An.d.M(t)};Sn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Dc(n,e.crossOrigin);An.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Sn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Dc(e.as,e.crossOrigin);An.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else An.d.m(t)};Sn.requestFormReset=function(t){An.d.r(t)};Sn.unstable_batchedUpdates=function(t,e){return t(e)};Sn.useFormState=function(t,e,n){return Qo.H.useFormState(t,e,n)};Sn.useFormStatus=function(){return Qo.H.useHostTransitionStatus()};Sn.version="19.2.8"});var ev=Ui((y3,$0)=>{"use strict";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),$0.exports=J0()});var f_=Ui(th=>{"use strict";var qt=Z0(),bx=Ma(),rE=ev();function Z(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function wx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rx(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tv(t){if(Ll(t)!==t)throw Error(Z(188))}function aE(t){var e=t.alternate;if(!e){if(e=Ll(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return tv(s),t;if(r===i)return tv(s),e;r=r.sibling}throw Error(Z(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function Dx(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Dx(t),e!==null)return e;t=t.sibling}return null}var bt=Object.assign,oE=Symbol.for("react.element"),Uc=Symbol.for("react.transitional.element"),nl=Symbol.for("react.portal"),Ua=Symbol.for("react.fragment"),Ux=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),Bx=Symbol.for("react.consumer"),ts=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),ws=Symbol.for("react.lazy");Symbol.for("react.scope");var Jd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var lE=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var nv=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var cE=Symbol.for("react.client.reference");function jd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===cE?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ua:return"Fragment";case Qd:return"Profiler";case Ux:return"StrictMode";case Zd:return"Suspense";case Kd:return"SuspenseList";case Jd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nl:return"Portal";case ts:return t.displayName||"Context";case Bx:return(t._context.displayName||"Context")+".Consumer";case kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:jd(t.type)||"Memo";case ws:e=t._payload,t=t._init;try{return jd(t(e))}catch{}}return null}var il=Array.isArray,Ie=bx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt=rE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ur={pending:!1,data:null,method:null,action:null},$d=[],Ba=-1;function Fi(t){return{current:t}}function nn(t){0>Ba||(t.current=$d[Ba],$d[Ba]=null,Ba--)}function xt(t,e){Ba++,$d[Ba]=t.current,t.current=e}var Oi=Fi(null),_l=Fi(null),Fs=Fi(null),uu=Fi(null);function hu(t,e){switch(xt(Fs,e),xt(_l,t),xt(Oi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?cx(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=cx(e),t=j1(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nn(Oi),xt(Oi,t)}function Ka(){nn(Oi),nn(_l),nn(Fs)}function ep(t){t.memoizedState!==null&&xt(uu,t);var e=Oi.current,n=j1(e,t.type);e!==n&&(xt(_l,t),xt(Oi,n))}function fu(t){_l.current===t&&(nn(Oi),nn(_l)),uu.current===t&&(nn(uu),Ul._currentValue=Ur)}var md,iv;function wr(t){if(md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);md=e&&e[1]||"",iv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+md+t+iv}var gd=!1;function vd(t,e){if(!t||gd)return"";gd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(t,[],d)}else{try{d.call()}catch(p){f=p}t.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=t())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=i&&0<=s);break}}}finally{gd=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?wr(n):""}function uE(t,e){switch(t.tag){case 26:case 27:case 5:return wr(t.type);case 16:return wr("Lazy");case 13:return t.child!==e&&e!==null?wr("Suspense Fallback"):wr("Suspense");case 19:return wr("SuspenseList");case 0:case 15:return vd(t.type,!1);case 11:return vd(t.type.render,!1);case 1:return vd(t.type,!0);case 31:return wr("Activity");default:return""}}function sv(t){try{var e="",n=null;do e+=uE(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tp=Object.prototype.hasOwnProperty,Xp=qt.unstable_scheduleCallback,xd=qt.unstable_cancelCallback,hE=qt.unstable_shouldYield,fE=qt.unstable_requestPaint,kn=qt.unstable_now,dE=qt.unstable_getCurrentPriorityLevel,Ix=qt.unstable_ImmediatePriority,Lx=qt.unstable_UserBlockingPriority,du=qt.unstable_NormalPriority,pE=qt.unstable_LowPriority,Px=qt.unstable_IdlePriority,mE=qt.log,gE=qt.unstable_setDisableYieldValue,Pl=null,Wn=null;function Is(t){if(typeof mE=="function"&&gE(t),Wn&&typeof Wn.setStrictMode=="function")try{Wn.setStrictMode(Pl,t)}catch{}}var Xn=Math.clz32?Math.clz32:yE,vE=Math.log,xE=Math.LN2;function yE(t){return t>>>=0,t===0?32:31-(vE(t)/xE|0)|0}var Bc=256,Ic=262144,Lc=4194304;function Cr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,r=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=Cr(i):(a&=o,a!==0?s=Cr(a):n||(n=o&~t,n!==0&&(s=Cr(n))))):(o=i&~r,o!==0?s=Cr(o):a!==0?s=Cr(a):n||(n=i&~t,n!==0&&(s=Cr(n)))),s===0?0:e!==0&&e!==s&&(e&r)===0&&(r=s&-s,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:s}function Nl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function _E(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nx(){var t=Lc;return Lc<<=1,(Lc&62914560)===0&&(Lc=4194304),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ol(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function AE(t,e,n,i,s,r){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=a&~n;0<n;){var h=31-Xn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Ox(t,i,0),r!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=r&~(a&~e))}function Ox(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Xn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Fx(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}function zx(t,e){var n=e&-e;return n=(n&42)!==0?1:Yp(n),(n&(t.suspendedLanes|e))!==0?0:n}function Yp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qp(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hx(){var t=lt.p;return t!==0?t:(t=window.event,t===void 0?32:c_(t.type))}function rv(t,e){var n=lt.p;try{return lt.p=t,e()}finally{lt.p=n}}var Js=Math.random().toString(36).slice(2),ln="__reactFiber$"+Js,Bn="__reactProps$"+Js,oo="__reactContainer$"+Js,np="__reactEvents$"+Js,SE="__reactListeners$"+Js,ME="__reactHandles$"+Js,av="__reactResources$"+Js,Fl="__reactMarker$"+Js;function Qp(t){delete t[ln],delete t[Bn],delete t[np],delete t[SE],delete t[ME]}function Ia(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oo]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=px(t);t!==null;){if(n=t[ln])return n;t=px(t)}return e}t=n,n=t.parentNode}return null}function lo(t){if(t=t[ln]||t[oo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function sl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(Z(33))}function ka(t){var e=t[av];return e||(e=t[av]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function tn(t){t[Fl]=!0}var Gx=new Set,Vx={};function Gr(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(Vx[t]=e,t=0;t<e.length;t++)Gx.add(e[t])}var EE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ov={},lv={};function TE(t){return tp.call(lv,t)?!0:tp.call(ov,t)?!1:EE.test(t)?lv[t]=!0:(ov[t]=!0,!1)}function Zc(t,e,n){if(TE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Pc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Qi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ai(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bE(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ip(t){if(!t._valueTracker){var e=kx(t)?"checked":"value";t._valueTracker=bE(t,e,""+t[e])}}function Wx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wE=/[\n"\\]/g;function ci(t){return t.replace(wE,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function sp(t,e,n,i,s,r,a,o){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ai(e)):t.value!==""+ai(e)&&(t.value=""+ai(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?rp(t,a,ai(e)):n!=null?rp(t,a,ai(n)):i!=null&&t.removeAttribute("value"),s==null&&r!=null&&(t.defaultChecked=!!r),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ai(o):t.removeAttribute("name")}function Xx(t,e,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){ip(t);return}n=n!=null?""+ai(n):"",e=e!=null?""+ai(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),ip(t)}function rp(t,e,n){e==="number"&&pu(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Wa(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ai(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Yx(t,e,n){if(e!=null&&(e=""+ai(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ai(n):""}function qx(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(Z(92));if(il(i)){if(1<i.length)throw Error(Z(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ai(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),ip(t)}function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var CE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cv(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||CE.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Qx(t,e,n){if(e!=null&&typeof e!="object")throw Error(Z(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var s in e)i=e[s],e.hasOwnProperty(s)&&n[s]!==i&&cv(t,s,i)}else for(var r in e)e.hasOwnProperty(r)&&cv(t,r,e[r])}function Zp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kc(t){return DE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ns(){}var ap=null;function Kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var La=null,Xa=null;function uv(t){var e=lo(t);if(e&&(t=e.stateNode)){var n=t[Bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(sp(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ci(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=i[Bn]||null;if(!s)throw Error(Z(90));sp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Wx(i)}break e;case"textarea":Yx(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Wa(t,!!n.multiple,e,!1)}}}var _d=!1;function Zx(t,e,n){if(_d)return t(e,n);_d=!0;try{var i=t(e);return i}finally{if(_d=!1,(La!==null||Xa!==null)&&(Ju(),La&&(e=La,t=Xa,Xa=La=null,uv(e),t)))for(e=0;e<t.length;e++)uv(t[e])}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var os=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=!1;if(os)try{ba={},Object.defineProperty(ba,"passive",{get:function(){op=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{op=!1}var ba,Ls=null,Jp=null,Jc=null;function Kx(){if(Jc)return Jc;var t,e=Jp,n=e.length,i,s="value"in Ls?Ls.value:Ls.textContent,r=s.length;for(t=0;t<n&&e[t]===s[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===s[r-i];i++);return Jc=s.slice(t,1<i?1-i:void 0)}function jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nc(){return!0}function hv(){return!1}function In(t){function e(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Nc:hv,this.isPropagationStopped=hv,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nc)},persist:function(){},isPersistent:Nc}),e}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=In(Vr),zl=bt({},Vr,{view:0,detail:0}),UE=In(zl),Ad,Sd,Ko,Gu=bt({},zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Ad=t.screenX-Ko.screenX,Sd=t.screenY-Ko.screenY):Sd=Ad=0,Ko=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),fv=In(Gu),BE=bt({},Gu,{dataTransfer:0}),IE=In(BE),LE=bt({},zl,{relatedTarget:0}),Md=In(LE),PE=bt({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),NE=In(PE),OE=bt({},Vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FE=In(OE),zE=bt({},Vr,{data:0}),dv=In(zE),HE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VE[t])?!!e[t]:!1}function jp(){return kE}var WE=bt({},zl,{key:function(t){if(t.key){var e=HE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XE=In(WE),YE=bt({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pv=In(YE),qE=bt({},zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),QE=In(qE),ZE=bt({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=In(ZE),JE=bt({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=In(JE),$E=bt({},Vr,{newState:0,oldState:0}),eT=In($E),tT=[9,13,27,32],$p=os&&"CompositionEvent"in window,ol=null;os&&"documentMode"in document&&(ol=document.documentMode);var nT=os&&"TextEvent"in window&&!ol,Jx=os&&(!$p||ol&&8<ol&&11>=ol),mv=" ",gv=!1;function jx(t,e){switch(t){case"keyup":return tT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $x(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pa=!1;function iT(t,e){switch(t){case"compositionend":return $x(e);case"keypress":return e.which!==32?null:(gv=!0,mv);case"textInput":return t=e.data,t===mv&&gv?null:t;default:return null}}function sT(t,e){if(Pa)return t==="compositionend"||!$p&&jx(t,e)?(t=Kx(),Jc=Jp=Ls=null,Pa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jx&&e.locale!=="ko"?null:e.data;default:return null}}var rT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rT[t.type]:e==="textarea"}function ey(t,e,n,i){La?Xa?Xa.push(i):Xa=[i]:La=i,e=Bu(e,"onChange"),0<e.length&&(n=new Hu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ll=null,Sl=null;function aT(t){Z1(t,0)}function Vu(t){var e=sl(t);if(Wx(e))return t}function xv(t,e){if(t==="change")return e}var ty=!1;os&&(os?(Fc="oninput"in document,Fc||(Ed=document.createElement("div"),Ed.setAttribute("oninput","return;"),Fc=typeof Ed.oninput=="function"),Oc=Fc):Oc=!1,ty=Oc&&(!document.documentMode||9<document.documentMode));var Oc,Fc,Ed;function yv(){ll&&(ll.detachEvent("onpropertychange",ny),Sl=ll=null)}function ny(t){if(t.propertyName==="value"&&Vu(Sl)){var e=[];ey(e,Sl,t,Kp(t)),Zx(aT,e)}}function oT(t,e,n){t==="focusin"?(yv(),ll=e,Sl=n,ll.attachEvent("onpropertychange",ny)):t==="focusout"&&yv()}function lT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vu(Sl)}function cT(t,e){if(t==="click")return Vu(e)}function uT(t,e){if(t==="input"||t==="change")return Vu(e)}function hT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:hT;function Ml(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!tp.call(e,s)||!qn(t[s],e[s]))return!1}return!0}function _v(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Av(t,e){var n=_v(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_v(n)}}function iy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pu(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pu(t.document)}return e}function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var fT=os&&"documentMode"in document&&11>=document.documentMode,Na=null,lp=null,cl=null,cp=!1;function Sv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cp||Na==null||Na!==pu(i)||(i=Na,"selectionStart"in i&&em(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),cl&&Ml(cl,i)||(cl=i,i=Bu(lp,"onSelect"),0<i.length&&(e=new Hu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Na)))}function br(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oa={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},Td={},ry={};os&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function kr(t){if(Td[t])return Td[t];if(!Oa[t])return t;var e=Oa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ry)return Td[t]=e[n];return t}var ay=kr("animationend"),oy=kr("animationiteration"),ly=kr("animationstart"),dT=kr("transitionrun"),pT=kr("transitionstart"),mT=kr("transitioncancel"),cy=kr("transitionend"),uy=new Map,up="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");up.push("scrollEnd");function Mi(t,e){uy.set(t,e),Gr(e,[t])}var mu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Fa=0,tm=0;function ku(){for(var t=Fa,e=tm=Fa=0;e<t;){var n=ri[e];ri[e++]=null;var i=ri[e];ri[e++]=null;var s=ri[e];ri[e++]=null;var r=ri[e];if(ri[e++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&hy(n,s,r)}}function Wu(t,e,n,i){ri[Fa++]=t,ri[Fa++]=e,ri[Fa++]=n,ri[Fa++]=i,tm|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function nm(t,e,n,i){return Wu(t,e,n,i),gu(t)}function Wr(t,e){return Wu(t,null,null,e),gu(t)}function hy(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(s=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,s&&e!==null&&(s=31-Xn(n),t=r.hiddenUpdates,i=t[s],i===null?t[s]=[e]:i.push(e),e.lane=n|536870912),r):null}function gu(t){if(50<xl)throw xl=0,Up=null,Error(Z(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var za={};function gT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new gT(t,e,n,i)}function im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ss(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function fy(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function $c(t,e,n,i,s,r){var a=0;if(i=t,typeof t=="function")im(t)&&(a=1);else if(typeof t=="string")a=yb(t,n,Oi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Jd:return t=Gn(31,n,e,s),t.elementType=Jd,t.lanes=r,t;case Ua:return Br(n.children,s,r,e);case Ux:a=8,s|=24;break;case Qd:return t=Gn(12,n,e,s|2),t.elementType=Qd,t.lanes=r,t;case Zd:return t=Gn(13,n,e,s),t.elementType=Zd,t.lanes=r,t;case Kd:return t=Gn(19,n,e,s),t.elementType=Kd,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ts:a=10;break e;case Bx:a=9;break e;case kp:a=11;break e;case Wp:a=14;break e;case ws:a=16,i=null;break e}a=29,n=Error(Z(130,t===null?"null":typeof t,"")),i=null}return e=Gn(a,n,e,s),e.elementType=t,e.type=i,e.lanes=r,e}function Br(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function bd(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function dy(t){var e=Gn(18,null,null,0);return e.stateNode=t,e}function wd(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Mv=new WeakMap;function ui(t,e){if(typeof t=="object"&&t!==null){var n=Mv.get(t);return n!==void 0?n:(e={value:t,source:e,stack:sv(e)},Mv.set(t,e),e)}return{value:t,source:e,stack:sv(e)}}var Ha=[],Ga=0,vu=null,El=0,oi=[],li=0,qs=null,Li=1,Pi="";function $i(t,e){Ha[Ga++]=El,Ha[Ga++]=vu,vu=t,El=e}function py(t,e,n){oi[li++]=Li,oi[li++]=Pi,oi[li++]=qs,qs=t;var i=Li;t=Pi;var s=32-Xn(i)-1;i&=~(1<<s),n+=1;var r=32-Xn(e)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,Li=1<<32-Xn(e)+s|n<<s|i,Pi=r+t}else Li=1<<r|n<<s|i,Pi=t}function sm(t){t.return!==null&&($i(t,1),py(t,1,0))}function rm(t){for(;t===vu;)vu=Ha[--Ga],Ha[Ga]=null,El=Ha[--Ga],Ha[Ga]=null;for(;t===qs;)qs=oi[--li],oi[li]=null,Pi=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null}function my(t,e){oi[li++]=Li,oi[li++]=Pi,oi[li++]=qs,Li=e.id,Pi=e.overflow,qs=t}var cn=null,Tt=null,je=!1,zs=null,hi=!1,hp=Error(Z(519));function Qs(t){var e=Error(Z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(ui(e,t)),hp}function Ev(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[ln]=t,e[Bn]=i,n){case"dialog":Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":case"embed":Ye("load",e);break;case"video":case"audio":for(n=0;n<Rl.length;n++)Ye(Rl[n],e);break;case"source":Ye("error",e);break;case"img":case"image":case"link":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"input":Ye("invalid",e),Xx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ye("invalid",e);break;case"textarea":Ye("invalid",e),qx(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||J1(e.textContent,n)?(i.popover!=null&&(Ye("beforetoggle",e),Ye("toggle",e)),i.onScroll!=null&&Ye("scroll",e),i.onScrollEnd!=null&&Ye("scrollend",e),i.onClick!=null&&(e.onclick=ns),e=!0):e=!1,e||Qs(t,!0)}function Tv(t){for(cn=t.return;cn;)switch(cn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:cn=cn.return}}function wa(t){if(t!==cn)return!1;if(!je)return Tv(t),je=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Np(t.type,t.memoizedProps)),n=!n),n&&Tt&&Qs(t),Tv(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));Tt=dx(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));Tt=dx(t)}else e===27?(e=Tt,js(t.type)?(t=Hp,Hp=null,Tt=t):Tt=e):Tt=cn?di(t.stateNode.nextSibling):null;return!0}function Nr(){Tt=cn=null,je=!1}function Cd(){var t=zs;return t!==null&&(Dn===null?Dn=t:Dn.push.apply(Dn,t),zs=null),t}function Tl(t){zs===null?zs=[t]:zs.push(t)}var fp=Fi(null),Xr=null,is=null;function Rs(t,e,n){xt(fp,e._currentValue),e._currentValue=n}function rs(t){t._currentValue=fp.current,nn(fp)}function dp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function pp(t,e,n,i){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=s;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),dp(r.return,n,t),i||(a=null);break e}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(Z(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),dp(a,n,t),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function co(t,e,n,i){t=null;for(var s=e,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(Z(387));if(a=a.memoizedProps,a!==null){var o=s.type;qn(s.pendingProps.value,a.value)||(t!==null?t.push(o):t=[o])}}else if(s===uu.current){if(a=s.alternate,a===null)throw Error(Z(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}s=s.return}t!==null&&pp(e,t,n,i),e.flags|=262144}function xu(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Or(t){Xr=t,is=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function un(t){return gy(Xr,t)}function zc(t,e){return Xr===null&&Or(t),gy(t,e)}function gy(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},is===null){if(t===null)throw Error(Z(308));is=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else is=is.next=e;return n}var vT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},xT=qt.unstable_scheduleCallback,yT=qt.unstable_NormalPriority,Gt={$$typeof:ts,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function am(){return{controller:new vT,data:new Map,refCount:0}}function Hl(t){t.refCount--,t.refCount===0&&xT(yT,function(){t.controller.abort()})}var ul=null,mp=0,$a=0,Ya=null;function _T(t,e){if(ul===null){var n=ul=[];mp=0,$a=Um(),Ya={status:"pending",value:void 0,then:function(i){n.push(i)}}}return mp++,e.then(bv,bv),e}function bv(){if(--mp===0&&ul!==null){Ya!==null&&(Ya.status="fulfilled");var t=ul;ul=null,$a=0,Ya=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function AT(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var wv=Ie.S;Ie.S=function(t,e){D1=kn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&_T(t,e),wv!==null&&wv(t,e)};var Ir=Fi(null);function om(){var t=Ir.current;return t!==null?t:vt.pooledCache}function eu(t,e){e===null?xt(Ir,Ir.current):xt(Ir,e.pool)}function vy(){var t=om();return t===null?null:{parent:Gt._currentValue,pool:t}}var uo=Error(Z(460)),lm=Error(Z(474)),Xu=Error(Z(542)),yu={then:function(){}};function Cv(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xy(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ns,ns),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dv(t),t;default:if(typeof e.status=="string")e.then(ns,ns);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(Z(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=i}},function(i){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Dv(t),t}throw Lr=e,uo}}function Rr(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Lr=n,uo):n}}var Lr=null;function Rv(){if(Lr===null)throw Error(Z(459));var t=Lr;return Lr=null,t}function Dv(t){if(t===uo||t===Xu)throw Error(Z(483))}var qa=null,bl=0;function Hc(t){var e=bl;return bl+=1,qa===null&&(qa=[]),xy(qa,t,e)}function Jo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Gc(t,e){throw e.$$typeof===oE?Error(Z(525)):(t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function yy(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u){for(var v=new Map;u!==null;)u.key!==null?v.set(u.key,u):v.set(u.index,u),u=u.sibling;return v}function s(u,v){return u=ss(u,v),u.index=0,u.sibling=null,u}function r(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=67108866,v):x):(u.flags|=67108866,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,v,x,y){return v===null||v.tag!==6?(v=bd(x,u.mode,y),v.return=u,v):(v=s(v,x),v.return=u,v)}function l(u,v,x,y){var T=x.type;return T===Ua?h(u,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ws&&Rr(T)===v.type)?(v=s(v,x.props),Jo(v,x),v.return=u,v):(v=$c(x.type,x.key,x.props,null,u.mode,y),Jo(v,x),v.return=u,v)}function c(u,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=wd(x,u.mode,y),v.return=u,v):(v=s(v,x.children||[]),v.return=u,v)}function h(u,v,x,y,T){return v===null||v.tag!==7?(v=Br(x,u.mode,y,T),v.return=u,v):(v=s(v,x),v.return=u,v)}function d(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=bd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Uc:return x=$c(v.type,v.key,v.props,null,u.mode,x),Jo(x,v),x.return=u,x;case nl:return v=wd(v,u.mode,x),v.return=u,v;case ws:return v=Rr(v),d(u,v,x)}if(il(v)||Zo(v))return v=Br(v,u.mode,x,null),v.return=u,v;if(typeof v.then=="function")return d(u,Hc(v),x);if(v.$$typeof===ts)return d(u,zc(u,v),x);Gc(u,v)}return null}function f(u,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return T!==null?null:o(u,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uc:return x.key===T?l(u,v,x,y):null;case nl:return x.key===T?c(u,v,x,y):null;case ws:return x=Rr(x),f(u,v,x,y)}if(il(x)||Zo(x))return T!==null?null:h(u,v,x,y,null);if(typeof x.then=="function")return f(u,v,Hc(x),y);if(x.$$typeof===ts)return f(u,v,zc(u,x),y);Gc(u,x)}return null}function p(u,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(x)||null,o(v,u,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uc:return u=u.get(y.key===null?x:y.key)||null,l(v,u,y,T);case nl:return u=u.get(y.key===null?x:y.key)||null,c(v,u,y,T);case ws:return y=Rr(y),p(u,v,x,y,T)}if(il(y)||Zo(y))return u=u.get(x)||null,h(v,u,y,T,null);if(typeof y.then=="function")return p(u,v,x,Hc(y),T);if(y.$$typeof===ts)return p(u,v,x,zc(v,y),T);Gc(v,y)}return null}function g(u,v,x,y){for(var T=null,b=null,w=v,U=v=0,S=null;w!==null&&U<x.length;U++){w.index>U?(S=w,w=null):S=w.sibling;var M=f(u,w,x[U],y);if(M===null){w===null&&(w=S);break}t&&w&&M.alternate===null&&e(u,w),v=r(M,v,U),b===null?T=M:b.sibling=M,b=M,w=S}if(U===x.length)return n(u,w),je&&$i(u,U),T;if(w===null){for(;U<x.length;U++)w=d(u,x[U],y),w!==null&&(v=r(w,v,U),b===null?T=w:b.sibling=w,b=w);return je&&$i(u,U),T}for(w=i(w);U<x.length;U++)S=p(w,u,U,x[U],y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?U:S.key),v=r(S,v,U),b===null?T=S:b.sibling=S,b=S);return t&&w.forEach(function(D){return e(u,D)}),je&&$i(u,U),T}function _(u,v,x,y){if(x==null)throw Error(Z(151));for(var T=null,b=null,w=v,U=v=0,S=null,M=x.next();w!==null&&!M.done;U++,M=x.next()){w.index>U?(S=w,w=null):S=w.sibling;var D=f(u,w,M.value,y);if(D===null){w===null&&(w=S);break}t&&w&&D.alternate===null&&e(u,w),v=r(D,v,U),b===null?T=D:b.sibling=D,b=D,w=S}if(M.done)return n(u,w),je&&$i(u,U),T;if(w===null){for(;!M.done;U++,M=x.next())M=d(u,M.value,y),M!==null&&(v=r(M,v,U),b===null?T=M:b.sibling=M,b=M);return je&&$i(u,U),T}for(w=i(w);!M.done;U++,M=x.next())M=p(w,u,U,M.value,y),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?U:M.key),v=r(M,v,U),b===null?T=M:b.sibling=M,b=M);return t&&w.forEach(function(O){return e(u,O)}),je&&$i(u,U),T}function m(u,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Ua&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Uc:e:{for(var T=x.key;v!==null;){if(v.key===T){if(T=x.type,T===Ua){if(v.tag===7){n(u,v.sibling),y=s(v,x.props.children),y.return=u,u=y;break e}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ws&&Rr(T)===v.type){n(u,v.sibling),y=s(v,x.props),Jo(y,x),y.return=u,u=y;break e}n(u,v);break}else e(u,v);v=v.sibling}x.type===Ua?(y=Br(x.props.children,u.mode,y,x.key),y.return=u,u=y):(y=$c(x.type,x.key,x.props,null,u.mode,y),Jo(y,x),y.return=u,u=y)}return a(u);case nl:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),y=s(v,x.children||[]),y.return=u,u=y;break e}else{n(u,v);break}else e(u,v);v=v.sibling}y=wd(x,u.mode,y),y.return=u,u=y}return a(u);case ws:return x=Rr(x),m(u,v,x,y)}if(il(x))return g(u,v,x,y);if(Zo(x)){if(T=Zo(x),typeof T!="function")throw Error(Z(150));return x=T.call(x),_(u,v,x,y)}if(typeof x.then=="function")return m(u,v,Hc(x),y);if(x.$$typeof===ts)return m(u,v,zc(u,x),y);Gc(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),y=s(v,x),y.return=u,u=y):(n(u,v),y=bd(x,u.mode,y),y.return=u,u=y),a(u)):n(u,v)}return function(u,v,x,y){try{bl=0;var T=m(u,v,x,y);return qa=null,T}catch(w){if(w===uo||w===Xu)throw w;var b=Gn(29,w,null,u.mode);return b.lanes=y,b.return=u,b}finally{}}}var Fr=yy(!0),_y=yy(!1),Cs=!1;function cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Gs(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(ot&2)!==0){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,e=gu(t),hy(t,null,n),e}return Wu(t,i,e,n),gu(t)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fx(t,n)}}function Rd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=e:r=r.next=e}else s=r=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var vp=!1;function fl(){if(vp){var t=Ya;if(t!==null)throw t}}function dl(t,e,n,i){vp=!1;var s=t.updateQueue;Cs=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;a=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Ke&f)===f:(i&f)===f){f!==0&&f===$a&&(vp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var g=t,_=o;f=e;var m=n;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(m,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break e;d=bt({},d,f);break e;case 2:Cs=!0}}f=o.callback,f!==null&&(t.flags|=64,p&&(t.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,r===null&&(s.shared.lanes=0),Ks|=a,t.lanes=a,t.memoizedState=d}}function Ay(t,e){if(typeof t!="function")throw Error(Z(191,t));t.call(e)}function Sy(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ay(n[t],e)}var eo=Fi(null),_u=Fi(0);function Uv(t,e){t=hs,xt(_u,t),xt(eo,e),hs=t|e.baseLanes}function xp(){xt(_u,hs),xt(eo,eo.current)}function um(){hs=_u.current,nn(eo),nn(_u)}var Qn=Fi(null),fi=null;function Ds(t){var e=t.alternate;xt(Ot,Ot.current&1),xt(Qn,t),fi===null&&(e===null||eo.current!==null||e.memoizedState!==null)&&(fi=t)}function yp(t){xt(Ot,Ot.current),xt(Qn,t),fi===null&&(fi=t)}function My(t){t.tag===22?(xt(Ot,Ot.current),xt(Qn,t),fi===null&&(fi=t)):Us(t)}function Us(){xt(Ot,Ot.current),xt(Qn,Qn.current)}function Hn(t){nn(Qn),fi===t&&(fi=null),nn(Ot)}var Ot=Fi(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Fp(n)||zp(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ls=0,ze=null,mt=null,zt=null,Su=!1,Qa=!1,zr=!1,Mu=0,wl=0,Za=null,ST=0;function Lt(){throw Error(Z(321))}function hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function fm(t,e,n,i,s,r){return ls=r,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ie.H=t===null||t.memoizedState===null?e1:Mm,zr=!1,r=n(i,s),zr=!1,Qa&&(r=Ty(e,n,i,s)),Ey(t),r}function Ey(t){Ie.H=Cl;var e=mt!==null&&mt.next!==null;if(ls=0,zt=mt=ze=null,Su=!1,wl=0,Za=null,e)throw Error(Z(300));t===null||Vt||(t=t.dependencies,t!==null&&xu(t)&&(Vt=!0))}function Ty(t,e,n,i){ze=t;var s=0;do{if(Qa&&(Za=null),wl=0,Qa=!1,25<=s)throw Error(Z(301));if(s+=1,zt=mt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ie.H=t1,r=e(n,i)}while(Qa);return r}function MT(){var t=Ie.H,e=t.useState()[0];return e=typeof e.then=="function"?Gl(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(ze.flags|=1024),e}function dm(){var t=Mu!==0;return Mu=0,t}function pm(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function mm(t){if(Su){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Su=!1}ls=0,zt=mt=ze=null,Qa=!1,wl=Mu=0,Za=null}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ze.memoizedState=zt=t:zt=zt.next=t,zt}function Ft(){if(mt===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=zt===null?ze.memoizedState:zt.next;if(e!==null)zt=e,mt=t;else{if(t===null)throw ze.alternate===null?Error(Z(467)):Error(Z(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},zt===null?ze.memoizedState=zt=t:zt=zt.next=t}return zt}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(t){var e=wl;return wl+=1,Za===null&&(Za=[]),t=xy(Za,t,e),e=ze,(zt===null?e.memoizedState:zt.next)===null&&(e=e.alternate,Ie.H=e===null||e.memoizedState===null?e1:Mm),t}function qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Gl(t);if(t.$$typeof===ts)return un(t)}throw Error(Z(438,String(t)))}function gm(t){var e=null,n=ze.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=ze.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Yu(),ze.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=lE;return e.index++,n}function cs(t,e){return typeof e=="function"?e(t):e}function tu(t){var e=Ft();return vm(e,mt,t)}function vm(t,e,n){var i=t.queue;if(i===null)throw Error(Z(311));i.lastRenderedReducer=n;var s=t.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}e.baseQueue=s=r,i.pending=null}if(r=t.baseState,s===null)t.memoizedState=r;else{e=s.next;var o=a=null,l=null,c=e,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Ke&d)===d:(ls&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===$a&&(h=!0);else if((ls&f)===f){c=c.next,f===$a&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,a=r):l=l.next=d,ze.lanes|=f,Ks|=f;d=c.action,zr&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,ze.lanes|=d,Ks|=d;c=c.next}while(c!==null&&c!==e);if(l===null?a=r:l.next=o,!qn(r,t.memoizedState)&&(Vt=!0,h&&(n=Ya,n!==null)))throw n;t.memoizedState=r,t.baseState=a,t.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Dd(t){var e=Ft(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,r=e.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=t(r,a.action),a=a.next;while(a!==s);qn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function by(t,e,n){var i=ze,s=Ft(),r=je;if(r){if(n===void 0)throw Error(Z(407));n=n()}else n=e();var a=!qn((mt||s).memoizedState,n);if(a&&(s.memoizedState=n,Vt=!0),s=s.queue,xm(Ry.bind(null,i,s,t),[t]),s.getSnapshot!==e||a||zt!==null&&zt.memoizedState.tag&1){if(i.flags|=2048,to(9,{destroy:void 0},Cy.bind(null,i,s,n,e),null),vt===null)throw Error(Z(349));r||(ls&127)!==0||wy(i,e,n)}return n}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e=Yu(),ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cy(t,e,n,i){e.value=n,e.getSnapshot=i,Dy(e)&&Uy(t)}function Ry(t,e,n){return n(function(){Dy(e)&&Uy(t)})}function Dy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function Uy(t){var e=Wr(t,2);e!==null&&Un(e,t,2)}function _p(t){var e=Mn();if(typeof t=="function"){var n=t;if(t=n(),zr){Is(!0);try{n()}finally{Is(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},e}function By(t,e,n,i){return t.baseState=n,vm(t,mt,typeof i=="function"?i:cs)}function ET(t,e,n,i,s){if(Zu(t))throw Error(Z(485));if(t=e.action,t!==null){var r={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Ie.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Iy(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Iy(t,e){var n=e.action,i=e.payload,s=t.state;if(e.isTransition){var r=Ie.T,a={};Ie.T=a;try{var o=n(s,i),l=Ie.S;l!==null&&l(a,o),Bv(t,e,o)}catch(c){Ap(t,e,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Ie.T=r}}else try{r=n(s,i),Bv(t,e,r)}catch(c){Ap(t,e,c)}}function Bv(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Iv(t,e,i)},function(i){return Ap(t,e,i)}):Iv(t,e,n)}function Iv(t,e,n){e.status="fulfilled",e.value=n,Ly(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Iy(t,n)))}function Ap(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Ly(e),e=e.next;while(e!==i)}t.action=null}function Ly(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Py(t,e){return e}function Lv(t,e){if(je){var n=vt.formState;if(n!==null){e:{var i=ze;if(je){if(Tt){t:{for(var s=Tt,r=hi;s.nodeType!==8;){if(!r){s=null;break t}if(s=di(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Tt=di(s.nextSibling),i=s.data==="F!";break e}}Qs(i)}i=!1}i&&(e=n[0])}}return n=Mn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Py,lastRenderedState:e},n.queue=i,n=Jy.bind(null,ze,i),i.dispatch=n,i=_p(!1),r=Sm.bind(null,ze,!1,i.queue),i=Mn(),s={state:e,dispatch:null,action:t,pending:null},i.queue=s,n=ET.bind(null,ze,s,r,n),s.dispatch=n,i.memoizedState=t,[e,n,!1]}function Pv(t){var e=Ft();return Ny(e,mt,t)}function Ny(t,e,n){if(e=vm(t,e,Py)[0],t=tu(cs)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Gl(e)}catch(a){throw a===uo?Xu:a}else i=e;e=Ft();var s=e.queue,r=s.dispatch;return n!==e.memoizedState&&(ze.flags|=2048,to(9,{destroy:void 0},TT.bind(null,s,n),null)),[i,r,t]}function TT(t,e){t.action=e}function Nv(t){var e=Ft(),n=mt;if(n!==null)return Ny(e,n,t);Ft(),e=e.memoizedState,n=Ft();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function to(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=ze.updateQueue,e===null&&(e=Yu(),ze.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Oy(){return Ft().memoizedState}function nu(t,e,n,i){var s=Mn();ze.flags|=t,s.memoizedState=to(1|e,{destroy:void 0},n,i===void 0?null:i)}function Qu(t,e,n,i){var s=Ft();i=i===void 0?null:i;var r=s.memoizedState.inst;mt!==null&&i!==null&&hm(i,mt.memoizedState.deps)?s.memoizedState=to(e,r,n,i):(ze.flags|=t,s.memoizedState=to(1|e,r,n,i))}function Ov(t,e){nu(8390656,8,t,e)}function xm(t,e){Qu(2048,8,t,e)}function bT(t){ze.flags|=4;var e=ze.updateQueue;if(e===null)e=Yu(),ze.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Fy(t){var e=Ft().memoizedState;return bT({ref:e,nextImpl:t}),function(){if((ot&2)!==0)throw Error(Z(440));return e.impl.apply(void 0,arguments)}}function zy(t,e){return Qu(4,2,t,e)}function Hy(t,e){return Qu(4,4,t,e)}function Gy(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vy(t,e,n){n=n!=null?n.concat([t]):null,Qu(4,4,Gy.bind(null,e,t),n)}function ym(){}function ky(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&hm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wy(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&hm(e,i[1]))return i[0];if(i=t(),zr){Is(!0);try{t()}finally{Is(!1)}}return n.memoizedState=[i,e],i}function _m(t,e,n){return n===void 0||(ls&1073741824)!==0&&(Ke&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=B1(),ze.lanes|=t,Ks|=t,n)}function Xy(t,e,n,i){return qn(n,e)?n:eo.current!==null?(t=_m(t,n,i),qn(t,e)||(Vt=!0),t):(ls&42)===0||(ls&1073741824)!==0&&(Ke&261930)===0?(Vt=!0,t.memoizedState=n):(t=B1(),ze.lanes|=t,Ks|=t,e)}function Yy(t,e,n,i,s){var r=lt.p;lt.p=r!==0&&8>r?r:8;var a=Ie.T,o={};Ie.T=o,Sm(t,!1,e,n);try{var l=s(),c=Ie.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=AT(l,i);pl(t,e,h,Yn(t))}else pl(t,e,i,Yn(t))}catch(d){pl(t,e,{then:function(){},status:"rejected",reason:d},Yn())}finally{lt.p=r,a!==null&&o.types!==null&&(a.types=o.types),Ie.T=a}}function wT(){}function Sp(t,e,n,i){if(t.tag!==5)throw Error(Z(476));var s=qy(t).queue;Yy(t,s,e,Ur,n===null?wT:function(){return Qy(t),n(i)})}function qy(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Ur,baseState:Ur,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:Ur},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Qy(t){var e=qy(t);e.next===null&&(e=t.alternate.memoizedState),pl(t,e.next.queue,{},Yn())}function Am(){return un(Ul)}function Zy(){return Ft().memoizedState}function Ky(){return Ft().memoizedState}function CT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Yn();t=Hs(n);var i=Gs(e,t,n);i!==null&&(Un(i,e,n),hl(i,e,n)),e={cache:am()},t.payload=e;return}e=e.return}}function RT(t,e,n){var i=Yn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(t)?jy(e,n):(n=nm(t,e,n,i),n!==null&&(Un(n,t,i),$y(n,e,i)))}function Jy(t,e,n){var i=Yn();pl(t,e,n,i)}function pl(t,e,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(t))jy(e,s);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var a=e.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,qn(o,a))return Wu(t,e,s,0),vt===null&&ku(),!1}catch{}finally{}if(n=nm(t,e,s,i),n!==null)return Un(n,t,i),$y(n,e,i),!0}return!1}function Sm(t,e,n,i){if(i={lane:2,revertLane:Um(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Zu(t)){if(e)throw Error(Z(479))}else e=nm(t,n,i,2),e!==null&&Un(e,t,2)}function Zu(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function jy(t,e){Qa=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $y(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fx(t,n)}}var Cl={readContext:un,use:qu,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};Cl.useEffectEvent=Lt;var e1={readContext:un,use:qu,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Ov,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,nu(4194308,4,Gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){nu(4,2,t,e)},useMemo:function(t,e){var n=Mn();e=e===void 0?null:e;var i=t();if(zr){Is(!0);try{t()}finally{Is(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Mn();if(n!==void 0){var s=n(e);if(zr){Is(!0);try{n(e)}finally{Is(!1)}}}else s=e;return i.memoizedState=i.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},i.queue=t,t=t.dispatch=RT.bind(null,ze,t),[i.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:function(t){t=_p(t);var e=t.queue,n=Jy.bind(null,ze,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ym,useDeferredValue:function(t,e){var n=Mn();return _m(n,t,e)},useTransition:function(){var t=_p(!1);return t=Yy.bind(null,ze,t.queue,!0,!1),Mn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=ze,s=Mn();if(je){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),vt===null)throw Error(Z(349));(Ke&127)!==0||wy(i,e,n)}s.memoizedState=n;var r={value:n,getSnapshot:e};return s.queue=r,Ov(Ry.bind(null,i,r,t),[t]),i.flags|=2048,to(9,{destroy:void 0},Cy.bind(null,i,r,n,e),null),n},useId:function(){var t=Mn(),e=vt.identifierPrefix;if(je){var n=Pi,i=Li;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Mu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=ST++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Am,useFormState:Lv,useActionState:Lv,useOptimistic:function(t){var e=Mn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Sm.bind(null,ze,!0,n),n.dispatch=e,[t,e]},useMemoCache:gm,useCacheRefresh:function(){return Mn().memoizedState=CT.bind(null,ze)},useEffectEvent:function(t){var e=Mn(),n={impl:t};return e.memoizedState=n,function(){if((ot&2)!==0)throw Error(Z(440));return n.impl.apply(void 0,arguments)}}},Mm={readContext:un,use:qu,useCallback:ky,useContext:un,useEffect:xm,useImperativeHandle:Vy,useInsertionEffect:zy,useLayoutEffect:Hy,useMemo:Wy,useReducer:tu,useRef:Oy,useState:function(){return tu(cs)},useDebugValue:ym,useDeferredValue:function(t,e){var n=Ft();return Xy(n,mt.memoizedState,t,e)},useTransition:function(){var t=tu(cs)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Gl(t),e]},useSyncExternalStore:by,useId:Zy,useHostTransitionStatus:Am,useFormState:Pv,useActionState:Pv,useOptimistic:function(t,e){var n=Ft();return By(n,mt,t,e)},useMemoCache:gm,useCacheRefresh:Ky};Mm.useEffectEvent=Fy;var t1={readContext:un,use:qu,useCallback:ky,useContext:un,useEffect:xm,useImperativeHandle:Vy,useInsertionEffect:zy,useLayoutEffect:Hy,useMemo:Wy,useReducer:Dd,useRef:Oy,useState:function(){return Dd(cs)},useDebugValue:ym,useDeferredValue:function(t,e){var n=Ft();return mt===null?_m(n,t,e):Xy(n,mt.memoizedState,t,e)},useTransition:function(){var t=Dd(cs)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Gl(t),e]},useSyncExternalStore:by,useId:Zy,useHostTransitionStatus:Am,useFormState:Nv,useActionState:Nv,useOptimistic:function(t,e){var n=Ft();return mt!==null?By(n,mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:gm,useCacheRefresh:Ky};t1.useEffectEvent=Fy;function Ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mp={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yn(),s=Hs(i);s.payload=e,n!=null&&(s.callback=n),e=Gs(t,s,i),e!==null&&(Un(e,t,i),hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yn(),s=Hs(i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gs(t,s,i),e!==null&&(Un(e,t,i),hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yn(),i=Hs(n);i.tag=2,e!=null&&(i.callback=e),e=Gs(t,i,n),e!==null&&(Un(e,t,n),hl(e,t,n))}};function Fv(t,e,n,i,s,r,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,a):e.prototype&&e.prototype.isPureReactComponent?!Ml(n,i)||!Ml(s,r):!0}function zv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mp.enqueueReplaceState(e,e.state,null)}function Hr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=bt({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}function n1(t){mu(t)}function i1(t){console.error(t)}function s1(t){mu(t)}function Eu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Hv(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ep(t,e,n){return n=Hs(n),n.tag=3,n.payload={element:null},n.callback=function(){Eu(t,e)},n}function r1(t){return t=Hs(t),t.tag=3,t}function a1(t,e,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;t.payload=function(){return s(r)},t.callback=function(){Hv(e,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Hv(e,n,i),typeof s!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function DT(t,e,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&co(e,n,s,!0),n=Qn.current,n!==null){switch(n.tag){case 31:case 13:return fi===null?Ru():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===yu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Vd(t,i,s)),!1;case 22:return n.flags|=65536,i===yu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Vd(t,i,s)),!1}throw Error(Z(435,n.tag))}return Vd(t,i,s),Ru(),!1}if(je)return e=Qn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,i!==hp&&(t=Error(Z(422),{cause:i}),Tl(ui(t,n)))):(i!==hp&&(e=Error(Z(423),{cause:i}),Tl(ui(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,i=ui(i,n),s=Ep(t.stateNode,i,s),Rd(t,s),Pt!==4&&(Pt=2)),!1;var r=Error(Z(520),{cause:i});if(r=ui(r,n),vl===null?vl=[r]:vl.push(r),Pt!==4&&(Pt=2),e===null)return!0;i=ui(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=Ep(n.stateNode,i,t),Rd(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Vs===null||!Vs.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=r1(s),a1(s,t,n,i),Rd(n,s),!1}n=n.return}while(n!==null);return!1}var Em=Error(Z(461)),Vt=!1;function on(t,e,n,i){e.child=t===null?_y(e,null,n,i):Fr(e,t.child,n,i)}function Gv(t,e,n,i,s){n=n.render;var r=e.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Or(e),i=fm(t,e,n,a,r,s),o=dm(),t!==null&&!Vt?(pm(t,e,s),us(t,e,s)):(je&&o&&sm(e),e.flags|=1,on(t,e,i,s),e.child)}function Vv(t,e,n,i,s){if(t===null){var r=n.type;return typeof r=="function"&&!im(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,o1(t,e,r,i,s)):(t=$c(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Tm(t,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(a,i)&&t.ref===e.ref)return us(t,e,s)}return e.flags|=1,t=ss(r,i),t.ref=e.ref,t.return=e,e.child=t}function o1(t,e,n,i,s){if(t!==null){var r=t.memoizedProps;if(Ml(r,i)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=i=r,Tm(t,s))(t.flags&131072)!==0&&(Vt=!0);else return e.lanes=t.lanes,us(t,e,s)}return Tp(t,e,n,i,s)}function l1(t,e,n,i){var s=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,e.child=null;return kv(t,e,r,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&eu(e,r!==null?r.cachePool:null),r!==null?Uv(e,r):xp(),My(e);else return i=e.lanes=536870912,kv(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(eu(e,r.cachePool),Uv(e,r),Us(e),e.memoizedState=null):(t!==null&&eu(e,null),xp(),Us(e));return on(t,e,s,n),e.child}function rl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function kv(t,e,n,i,s){var r=om();return r=r===null?null:{parent:Gt._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&eu(e,null),xp(),My(e),t!==null&&co(t,e,i,!0),e.childLanes=s,null}function iu(t,e){return e=Tu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Wv(t,e,n){return Fr(e,t.child,null,n),t=iu(e,e.pendingProps),t.flags|=2,Hn(e),e.memoizedState=null,t}function UT(t,e,n){var i=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(je){if(i.mode==="hidden")return t=iu(e,i),e.lanes=536870912,rl(null,t);if(yp(e),(t=Tt)?(t=e_(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qs!==null?{id:Li,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},n=dy(t),n.return=e,e.child=n,cn=e,Tt=null)):t=null,t===null)throw Qs(e);return e.lanes=536870912,null}return iu(e,i)}var r=t.memoizedState;if(r!==null){var a=r.dehydrated;if(yp(e),s)if(e.flags&256)e.flags&=-257,e=Wv(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(Z(558));else if(Vt||co(t,e,n,!1),s=(n&t.childLanes)!==0,Vt||s){if(i=vt,i!==null&&(a=zx(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,Wr(t,a),Un(i,t,a),Em;Ru(),e=Wv(t,e,n)}else t=r.treeContext,Tt=di(a.nextSibling),cn=e,je=!0,zs=null,hi=!1,t!==null&&my(e,t),e=iu(e,i),e.flags|=4096;return e}return t=ss(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function su(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Z(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Tp(t,e,n,i,s){return Or(e),n=fm(t,e,n,i,void 0,s),i=dm(),t!==null&&!Vt?(pm(t,e,s),us(t,e,s)):(je&&i&&sm(e),e.flags|=1,on(t,e,n,s),e.child)}function Xv(t,e,n,i,s,r){return Or(e),e.updateQueue=null,n=Ty(e,i,n,s),Ey(t),i=dm(),t!==null&&!Vt?(pm(t,e,r),us(t,e,r)):(je&&i&&sm(e),e.flags|=1,on(t,e,n,r),e.child)}function Yv(t,e,n,i,s){if(Or(e),e.stateNode===null){var r=za,a=n.contextType;typeof a=="object"&&a!==null&&(r=un(a)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Mp,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},cm(e),a=n.contextType,r.context=typeof a=="object"&&a!==null?un(a):za,r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Ud(e,n,a,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Mp.enqueueReplaceState(r,r.state,null),dl(e,i,r,s),fl(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=Hr(n,o);r.props=l;var c=r.context,h=n.contextType;a=za,typeof h=="object"&&h!==null&&(a=un(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&zv(e,r,i,a),Cs=!1;var f=e.memoizedState;r.state=f,dl(e,i,r,s),fl(),c=e.memoizedState,o||f!==c||Cs?(typeof d=="function"&&(Ud(e,n,d,i),c=e.memoizedState),(l=Cs||Fv(e,n,l,i,f,c,a))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,gp(t,e),a=e.memoizedProps,h=Hr(n,a),r.props=h,d=e.pendingProps,f=r.context,c=n.contextType,l=za,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==d||f!==l)&&zv(e,r,i,l),Cs=!1,f=e.memoizedState,r.state=f,dl(e,i,r,s),fl();var p=e.memoizedState;a!==d||f!==p||Cs||t!==null&&t.dependencies!==null&&xu(t.dependencies)?(typeof o=="function"&&(Ud(e,n,o,i),p=e.memoizedState),(h=Cs||Fv(e,n,h,i,f,p,l)||t!==null&&t.dependencies!==null&&xu(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,su(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Fr(e,t.child,null,s),e.child=Fr(e,null,n,s)):on(t,e,n,s),e.memoizedState=r.state,t=e.child):t=us(t,e,s),t}function qv(t,e,n,i){return Nr(),e.flags|=256,on(t,e,n,i),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Id(t){return{baseLanes:t,cachePool:vy()}}function Ld(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Vn),t}function c1(t,e,n){var i=e.pendingProps,s=!1,r=(e.flags&128)!==0,a;if((a=r)||(a=t!==null&&t.memoizedState===null?!1:(Ot.current&2)!==0),a&&(s=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(je){if(s?Ds(e):Us(e),(t=Tt)?(t=e_(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:qs!==null?{id:Li,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},n=dy(t),n.return=e,e.child=n,cn=e,Tt=null)):t=null,t===null)throw Qs(e);return zp(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Us(e),s=e.mode,o=Tu({mode:"hidden",children:o},s),i=Br(i,s,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=Id(n),i.childLanes=Ld(t,a,n),e.memoizedState=Bd,rl(null,i)):(Ds(e),bp(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(Ds(e),e.flags&=-257,e=Pd(t,e,n)):e.memoizedState!==null?(Us(e),e.child=t.child,e.flags|=128,e=null):(Us(e),o=i.fallback,s=e.mode,i=Tu({mode:"visible",children:i.children},s),o=Br(o,s,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,Fr(e,t.child,null,n),i=e.child,i.memoizedState=Id(n),i.childLanes=Ld(t,a,n),e.memoizedState=Bd,e=rl(null,i));else if(Ds(e),zp(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(Z(419)),i.stack="",i.digest=a,Tl({value:i,source:null,stack:null}),e=Pd(t,e,n)}else if(Vt||co(t,e,n,!1),a=(n&t.childLanes)!==0,Vt||a){if(a=vt,a!==null&&(i=zx(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Wr(t,i),Un(a,t,i),Em;Fp(o)||Ru(),e=Pd(t,e,n)}else Fp(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Tt=di(o.nextSibling),cn=e,je=!0,zs=null,hi=!1,t!==null&&my(e,t),e=bp(e,i.children),e.flags|=4096);return e}return s?(Us(e),o=i.fallback,s=e.mode,l=t.child,c=l.sibling,i=ss(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ss(c,o):(o=Br(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,rl(null,i),i=e.child,o=t.child.memoizedState,o===null?o=Id(n):(s=o.cachePool,s!==null?(l=Gt._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=vy(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ld(t,a,n),e.memoizedState=Bd,rl(t.child,i)):(Ds(e),n=t.child,t=n.sibling,n=ss(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function bp(t,e){return e=Tu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Tu(t,e){return t=Gn(22,t,null,e),t.lanes=0,t}function Pd(t,e,n){return Fr(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dp(t.return,e,n)}function Nd(t,e,n,i,s,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function u1(t,e,n){var i=e.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=Ot.current,o=(a&2)!==0;if(o?(a=a&1|2,e.flags|=128):a&=1,xt(Ot,a),on(t,e,i,n),i=je?El:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Nd(e,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Au(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Nd(e,!0,n,null,r,i);break;case"together":Nd(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function us(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ks|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(co(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tm(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&xu(t)))}function BT(t,e,n){switch(e.tag){case 3:hu(e,e.stateNode.containerInfo),Rs(e,Gt,t.memoizedState.cache),Nr();break;case 27:case 5:ep(e);break;case 4:hu(e,e.stateNode.containerInfo);break;case 10:Rs(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,yp(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ds(e),e.flags|=128,null):(n&e.child.childLanes)!==0?c1(t,e,n):(Ds(e),t=us(t,e,n),t!==null?t.sibling:null);Ds(e);break;case 19:var s=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(co(t,e,n,!1),i=(n&e.childLanes)!==0),s){if(i)return u1(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xt(Ot,Ot.current),i)break;return null;case 22:return e.lanes=0,l1(t,e,n,e.pendingProps);case 24:Rs(e,Gt,t.memoizedState.cache)}return us(t,e,n)}function h1(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Vt=!0;else{if(!Tm(t,n)&&(e.flags&128)===0)return Vt=!1,BT(t,e,n);Vt=(t.flags&131072)!==0}else Vt=!1,je&&(e.flags&1048576)!==0&&py(e,El,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Rr(e.elementType),e.type=t,typeof t=="function")im(t)?(i=Hr(t,i),e.tag=1,e=Yv(null,e,t,i,n)):(e.tag=0,e=Tp(null,e,t,i,n));else{if(t!=null){var s=t.$$typeof;if(s===kp){e.tag=11,e=Gv(null,e,t,i,n);break e}else if(s===Wp){e.tag=14,e=Vv(null,e,t,i,n);break e}}throw e=jd(t)||t,Error(Z(306,e,""))}}return e;case 0:return Tp(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,s=Hr(i,e.pendingProps),Yv(t,e,i,s,n);case 3:e:{if(hu(e,e.stateNode.containerInfo),t===null)throw Error(Z(387));i=e.pendingProps;var r=e.memoizedState;s=r.element,gp(t,e),dl(e,i,null,n);var a=e.memoizedState;if(i=a.cache,Rs(e,Gt,i),i!==r.cache&&pp(e,[Gt],n,!0),fl(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=qv(t,e,i,n);break e}else if(i!==s){s=ui(Error(Z(424)),e),Tl(s),e=qv(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Tt=di(t.firstChild),cn=e,je=!0,zs=null,hi=!0,n=_y(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Nr(),i===s){e=us(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 26:return su(t,e),t===null?(n=gx(e.type,null,e.pendingProps,null))?e.memoizedState=n:je||(n=e.type,t=e.pendingProps,i=Iu(Fs.current).createElement(n),i[ln]=e,i[Bn]=t,hn(i,n,t),tn(i),e.stateNode=i):e.memoizedState=gx(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ep(e),t===null&&je&&(i=e.stateNode=t_(e.type,e.pendingProps,Fs.current),cn=e,hi=!0,s=Tt,js(e.type)?(Hp=s,Tt=di(i.firstChild)):Tt=s),on(t,e,e.pendingProps.children,n),su(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&je&&((s=i=Tt)&&(i=ab(i,e.type,e.pendingProps,hi),i!==null?(e.stateNode=i,cn=e,Tt=di(i.firstChild),hi=!1,s=!0):s=!1),s||Qs(e)),ep(e),s=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,i=r.children,Np(s,r)?i=null:a!==null&&Np(s,a)&&(e.flags|=32),e.memoizedState!==null&&(s=fm(t,e,MT,null,null,n),Ul._currentValue=s),su(t,e),on(t,e,i,n),e.child;case 6:return t===null&&je&&((t=n=Tt)&&(n=ob(n,e.pendingProps,hi),n!==null?(e.stateNode=n,cn=e,Tt=null,t=!0):t=!1),t||Qs(e)),null;case 13:return c1(t,e,n);case 4:return hu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fr(e,null,i,n):on(t,e,i,n),e.child;case 11:return Gv(t,e,e.type,e.pendingProps,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Rs(e,e.type,i.value),on(t,e,i.children,n),e.child;case 9:return s=e.type._context,i=e.pendingProps.children,Or(e),s=un(s),i=i(s),e.flags|=1,on(t,e,i,n),e.child;case 14:return Vv(t,e,e.type,e.pendingProps,n);case 15:return o1(t,e,e.type,e.pendingProps,n);case 19:return u1(t,e,n);case 31:return UT(t,e,n);case 22:return l1(t,e,n,e.pendingProps);case 24:return Or(e),i=un(Gt),t===null?(s=om(),s===null&&(s=vt,r=am(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),e.memoizedState={parent:i,cache:s},cm(e),Rs(e,Gt,s)):((t.lanes&n)!==0&&(gp(t,e),dl(e,null,null,n),fl()),s=t.memoizedState,r=e.memoizedState,s.parent!==i?(s={parent:i,cache:i},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Rs(e,Gt,i)):(i=r.cache,Rs(e,Gt,i),i!==s.cache&&pp(e,[Gt],n,!0))),on(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(Z(156,e.tag))}function Zi(t){t.flags|=4}function Od(t,e,n,i,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(P1())t.flags|=8192;else throw Lr=yu,lm}else t.flags&=-16777217}function Zv(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!s_(e))if(P1())t.flags|=8192;else throw Lr=yu,lm}function Vc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nx():536870912,t.lanes|=e,no|=e)}function jo(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function IT(t,e,n){var i=e.pendingProps;switch(rm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return Et(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),rs(Gt),Ka(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(wa(e)?Zi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Cd())),Et(e),null;case 26:var s=e.type,r=e.memoizedState;return t===null?(Zi(e),r!==null?(Et(e),Zv(e,r)):(Et(e),Od(e,s,null,i,n))):r?r!==t.memoizedState?(Zi(e),Et(e),Zv(e,r)):(Et(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Zi(e),Et(e),Od(e,s,t,i,n)),null;case 27:if(fu(e),n=Fs.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Zi(e);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Et(e),null}t=Oi.current,wa(e)?Ev(e,t):(t=t_(s,i,n),e.stateNode=t,Zi(e))}return Et(e),null;case 5:if(fu(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Zi(e);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Et(e),null}if(r=Oi.current,wa(e))Ev(e,r);else{var a=Iu(Fs.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[ln]=e,r[Bn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=r;e:switch(hn(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Zi(e)}}return Et(e),Od(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Zi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(t=Fs.current,wa(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}t[ln]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||J1(t.nodeValue,n)),t||Qs(e,!0)}else t=Iu(t).createTextNode(i),t[ln]=e,e.stateNode=t}return Et(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=wa(e),n!==null){if(t===null){if(!i)throw Error(Z(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(557));t[ln]=e}else Nr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),t=!1}else n=Cd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Hn(e),e):(Hn(e),null);if((e.flags&128)!==0)throw Error(Z(558))}return Et(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[ln]=e}else Nr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else s=Cd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Hn(e),e):(Hn(e),null)}return Hn(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Vc(e,e.updateQueue),Et(e),null);case 4:return Ka(),t===null&&Bm(e.stateNode.containerInfo),Et(e),null;case 10:return rs(e.type),Et(e),null;case 19:if(nn(Ot),i=e.memoizedState,i===null)return Et(e),null;if(s=(e.flags&128)!==0,r=i.rendering,r===null)if(s)jo(i,!1);else{if(Pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=Au(t),r!==null){for(e.flags|=128,jo(i,!1),t=r.updateQueue,e.updateQueue=t,Vc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)fy(n,t),n=n.sibling;return xt(Ot,Ot.current&1|2),je&&$i(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&kn()>wu&&(e.flags|=128,s=!0,jo(i,!1),e.lanes=4194304)}else{if(!s)if(t=Au(r),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,Vc(e,t),jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!je)return Et(e),null}else 2*kn()-i.renderingStartTime>wu&&n!==536870912&&(e.flags|=128,s=!0,jo(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=kn(),t.sibling=null,n=Ot.current,xt(Ot,s?n&1|2:n&1),je&&$i(e,i.treeForkCount),t):(Et(e),null);case 22:case 23:return Hn(e),um(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),n=e.updateQueue,n!==null&&Vc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&nn(Ir),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),rs(Gt),Et(e),null;case 25:return null;case 30:return null}throw Error(Z(156,e.tag))}function LT(t,e){switch(rm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(Gt),Ka(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fu(e),null;case 31:if(e.memoizedState!==null){if(Hn(e),e.alternate===null)throw Error(Z(340));Nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Hn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));Nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nn(Ot),null;case 4:return Ka(),null;case 10:return rs(e.type),null;case 22:case 23:return Hn(e),um(),t!==null&&nn(Ir),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return rs(Gt),null;case 25:return null;default:return null}}function f1(t,e){switch(rm(e),e.tag){case 3:rs(Gt),Ka();break;case 26:case 27:case 5:fu(e);break;case 4:Ka();break;case 31:e.memoizedState!==null&&Hn(e);break;case 13:Hn(e);break;case 19:nn(Ot);break;case 10:rs(e.type);break;case 22:case 23:Hn(e),um(),t!==null&&nn(Ir);break;case 24:rs(Gt)}}function Vl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){ht(e,e.return,o)}}function Zs(t,e,n){try{var i=e.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&t)===t){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=e;var l=n,c=o;try{c()}catch(h){ht(s,l,h)}}}i=i.next}while(i!==r)}}catch(h){ht(e,e.return,h)}}function d1(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Sy(e,n)}catch(i){ht(t,t.return,i)}}}function p1(t,e,n){n.props=Hr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ht(t,e,i)}}function ml(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(s){ht(t,e,s)}}function Ni(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ht(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ht(t,e,s)}else n.current=null}function m1(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ht(t,t.return,s)}}function Fd(t,e,n){try{var i=t.stateNode;eb(i,t.type,n,e),i[Bn]=e}catch(s){ht(t,t.return,s)}}function g1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&js(t.type)||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&js(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ns));else if(i!==4&&(i===27&&js(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(wp(t,e,n),t=t.sibling;t!==null;)wp(t,e,n),t=t.sibling}function bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&js(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}function v1(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);hn(e,i,n),e[ln]=t,e[Bn]=n}catch(r){ht(t,t.return,r)}}var es=!1,Ht=!1,Hd=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,en=null;function PT(t,e){if(t=t.containerInfo,Lp=Ou,t=sy(t),em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=a+s),d!==r||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===s&&(o=a),f===r&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pp={focusedElem:t,selectionRange:n},Ou=!1,en=e;en!==null;)if(e=en,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,en=t;else for(;en!==null;){switch(e=en,r=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)s=t[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,n=e,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var g=Hr(n.type,s);t=i.getSnapshotBeforeUpdate(g,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(_){ht(n,n.return,_)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Op(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Op(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(Z(163))}if(t=e.sibling,t!==null){t.return=e.return,en=t;break}en=e.return}}function x1(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ji(t,n),i&4&&Vl(5,n);break;case 1:if(Ji(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){ht(n,n.return,a)}else{var s=Hr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){ht(n,n.return,a)}}i&64&&d1(n),i&512&&ml(n,n.return);break;case 3:if(Ji(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Sy(t,e)}catch(a){ht(n,n.return,a)}}break;case 27:e===null&&i&4&&v1(n);case 26:case 5:Ji(t,n),e===null&&i&4&&m1(n),i&512&&ml(n,n.return);break;case 12:Ji(t,n);break;case 31:Ji(t,n),i&4&&A1(t,n);break;case 13:Ji(t,n),i&4&&S1(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=WT.bind(null,n),lb(t,n))));break;case 22:if(i=n.memoizedState!==null||es,!i){e=e!==null&&e.memoizedState!==null||Ht,s=es;var r=Ht;es=i,(Ht=e)&&!r?ji(t,n,(n.subtreeFlags&8772)!==0):Ji(t,n),es=s,Ht=r}break;case 30:break;default:Ji(t,n)}}function y1(t){var e=t.alternate;e!==null&&(t.alternate=null,y1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,Rn=!1;function Ki(t,e,n){for(n=n.child;n!==null;)_1(t,e,n),n=n.sibling}function _1(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 26:Ht||Ni(n,e),Ki(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ht||Ni(n,e);var i=Dt,s=Rn;js(n.type)&&(Dt=n.stateNode,Rn=!1),Ki(t,e,n),yl(n.stateNode),Dt=i,Rn=s;break;case 5:Ht||Ni(n,e);case 6:if(i=Dt,s=Rn,Dt=null,Ki(t,e,n),Dt=i,Rn=s,Dt!==null)if(Rn)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(r){ht(n,e,r)}else try{Dt.removeChild(n.stateNode)}catch(r){ht(n,e,r)}break;case 18:Dt!==null&&(Rn?(t=Dt,hx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ao(t)):hx(Dt,n.stateNode));break;case 4:i=Dt,s=Rn,Dt=n.stateNode.containerInfo,Rn=!0,Ki(t,e,n),Dt=i,Rn=s;break;case 0:case 11:case 14:case 15:Zs(2,n,e),Ht||Zs(4,n,e),Ki(t,e,n);break;case 1:Ht||(Ni(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&p1(n,e,i)),Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:Ht=(i=Ht)||n.memoizedState!==null,Ki(t,e,n),Ht=i;break;default:Ki(t,e,n)}}function A1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ao(t)}catch(n){ht(e,e.return,n)}}}function S1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ao(t)}catch(n){ht(e,e.return,n)}}function NT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Kv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Kv),e;default:throw Error(Z(435,t.tag))}}function kc(t,e){var n=NT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var s=XT.bind(null,t,i);i.then(s,s)}})}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 27:if(js(o.type)){Dt=o.stateNode,Rn=!1;break e}break;case 5:Dt=o.stateNode,Rn=!1;break e;case 3:case 4:Dt=o.stateNode.containerInfo,Rn=!0;break e}o=o.return}if(Dt===null)throw Error(Z(160));_1(r,a,s),Dt=null,Rn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)M1(e,t),e=e.sibling}var Si=null;function M1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(e,t),Cn(t),i&4&&(Zs(3,t,t.return),Vl(3,t),Zs(5,t,t.return));break;case 1:wn(e,t),Cn(t),i&512&&(Ht||n===null||Ni(n,n.return)),i&64&&es&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Si;if(wn(e,t),Cn(t),i&512&&(Ht||n===null||Ni(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Fl]||r[ln]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),hn(r,i,n),r[ln]=t,tn(r),i=r;break e;case"link":var a=xx("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break t}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;case"meta":if(a=xx("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break t}}r=s.createElement(i),hn(r,i,n),s.head.appendChild(r);break;default:throw Error(Z(468,i))}r[ln]=t,tn(r),i=r}t.stateNode=i}else yx(s,t.type,t.stateNode);else t.stateNode=vx(s,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?yx(s,t.type,t.stateNode):vx(s,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Fd(t,t.memoizedProps,n.memoizedProps)}break;case 27:wn(e,t),Cn(t),i&512&&(Ht||n===null||Ni(n,n.return)),n!==null&&i&4&&Fd(t,t.memoizedProps,n.memoizedProps);break;case 5:if(wn(e,t),Cn(t),i&512&&(Ht||n===null||Ni(n,n.return)),t.flags&32){s=t.stateNode;try{ja(s,"")}catch(g){ht(t,t.return,g)}}i&4&&t.stateNode!=null&&(s=t.memoizedProps,Fd(t,s,n!==null?n.memoizedProps:s)),i&1024&&(Hd=!0);break;case 6:if(wn(e,t),Cn(t),i&4){if(t.stateNode===null)throw Error(Z(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(g){ht(t,t.return,g)}}break;case 3:if(ou=null,s=Si,Si=Lu(e.containerInfo),wn(e,t),Si=s,Cn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(g){ht(t,t.return,g)}Hd&&(Hd=!1,E1(t));break;case 4:i=Si,Si=Lu(t.stateNode.containerInfo),wn(e,t),Cn(t),Si=i;break;case 12:wn(e,t),Cn(t);break;case 31:wn(e,t),Cn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,kc(t,i)));break;case 13:wn(e,t),Cn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ku=kn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,kc(t,i)));break;case 22:s=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=es,h=Ht;if(es=c||s,Ht=h||l,wn(e,t),Ht=h,es=c,Cn(t),i&8192)e:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(n===null||l||es||Ht||Dr(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(g){ht(l,l.return,g)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(g){ht(l,l.return,g)}}}else if(e.tag===18){if(n===null){l=e;try{var p=l.stateNode;s?fx(p,!0):fx(l.stateNode,!1)}catch(g){ht(l,l.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,kc(t,n))));break;case 19:wn(e,t),Cn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,kc(t,i)));break;case 30:break;case 21:break;default:wn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(g1(i)){n=i;break}i=i.return}if(n==null)throw Error(Z(160));switch(n.tag){case 27:var s=n.stateNode,r=zd(t);bu(t,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(ja(a,""),n.flags&=-33);var o=zd(t);bu(t,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=zd(t);wp(t,c,l);break;default:throw Error(Z(161))}}catch(h){ht(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;E1(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ji(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)x1(t,e.alternate,e),e=e.sibling}function Dr(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Zs(4,e,e.return),Dr(e);break;case 1:Ni(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&p1(e,e.return,n),Dr(e);break;case 27:yl(e.stateNode);case 26:case 5:Ni(e,e.return),Dr(e);break;case 22:e.memoizedState===null&&Dr(e);break;case 30:Dr(e);break;default:Dr(e)}t=t.sibling}}function ji(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,s=t,r=e,a=r.flags;switch(r.tag){case 0:case 11:case 15:ji(s,r,n),Vl(4,r);break;case 1:if(ji(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ht(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Ay(l[s],o)}catch(c){ht(i,i.return,c)}}n&&a&64&&d1(r),ml(r,r.return);break;case 27:v1(r);case 26:case 5:ji(s,r,n),n&&i===null&&a&4&&m1(r),ml(r,r.return);break;case 12:ji(s,r,n);break;case 31:ji(s,r,n),n&&a&4&&A1(s,r);break;case 13:ji(s,r,n),n&&a&4&&S1(s,r);break;case 22:r.memoizedState===null&&ji(s,r,n),ml(r,r.return);break;case 30:break;default:ji(s,r,n)}e=e.sibling}}function bm(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Hl(n))}function wm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hl(t))}function Ai(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T1(t,e,n,i),e=e.sibling}function T1(t,e,n,i){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Ai(t,e,n,i),s&2048&&Vl(9,e);break;case 1:Ai(t,e,n,i);break;case 3:Ai(t,e,n,i),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hl(t)));break;case 12:if(s&2048){Ai(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ht(e,e.return,l)}}else Ai(t,e,n,i);break;case 31:Ai(t,e,n,i);break;case 13:Ai(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,a=e.alternate,e.memoizedState!==null?r._visibility&2?Ai(t,e,n,i):gl(t,e):r._visibility&2?Ai(t,e,n,i):(r._visibility|=2,Ra(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),s&2048&&bm(a,e);break;case 24:Ai(t,e,n,i),s&2048&&wm(e.alternate,e);break;default:Ai(t,e,n,i)}}function Ra(t,e,n,i,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,a=e,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(r,a,o,l,s),Vl(8,a);break;case 23:break;case 22:var h=a.stateNode;a.memoizedState!==null?h._visibility&2?Ra(r,a,o,l,s):gl(r,a):(h._visibility|=2,Ra(r,a,o,l,s)),s&&c&2048&&bm(a.alternate,a);break;case 24:Ra(r,a,o,l,s),s&&c&2048&&wm(a.alternate,a);break;default:Ra(r,a,o,l,s)}e=e.sibling}}function gl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,s=i.flags;switch(i.tag){case 22:gl(n,i),s&2048&&bm(i.alternate,i);break;case 24:gl(n,i),s&2048&&wm(i.alternate,i);break;default:gl(n,i)}e=e.sibling}}var al=8192;function Ca(t,e,n){if(t.subtreeFlags&al)for(t=t.child;t!==null;)b1(t,e,n),t=t.sibling}function b1(t,e,n){switch(t.tag){case 26:Ca(t,e,n),t.flags&al&&t.memoizedState!==null&&_b(n,Si,t.memoizedState,t.memoizedProps);break;case 5:Ca(t,e,n);break;case 3:case 4:var i=Si;Si=Lu(t.stateNode.containerInfo),Ca(t,e,n),Si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=al,al=16777216,Ca(t,e,n),al=i):Ca(t,e,n));break;default:Ca(t,e,n)}}function w1(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function $o(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];en=i,R1(i,t)}w1(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C1(t),t=t.sibling}function C1(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&Zs(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ru(t)):$o(t);break;default:$o(t)}}function ru(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];en=i,R1(i,t)}w1(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Zs(8,e,e.return),ru(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ru(e));break;default:ru(e)}t=t.sibling}}function R1(t,e){for(;en!==null;){var n=en;switch(n.tag){case 0:case 11:case 15:Zs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,en=i;else e:for(n=t;en!==null;){i=en;var s=i.sibling,r=i.return;if(y1(i),i===n){en=null;break e}if(s!==null){s.return=r,en=s;break e}en=r}}}var OT={getCacheForType:function(t){var e=un(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return un(Gt).controller.signal}},FT=typeof WeakMap=="function"?WeakMap:Map,ot=0,vt=null,qe=null,Ke=0,ut=0,zn=null,Ps=!1,ho=!1,Cm=!1,hs=0,Pt=0,Ks=0,Pr=0,Rm=0,Vn=0,no=0,vl=null,Dn=null,Cp=!1,Ku=0,D1=0,wu=1/0,Cu=null,Vs=null,Yt=0,ks=null,io=null,as=0,Rp=0,Dp=null,U1=null,xl=0,Up=null;function Yn(){return(ot&2)!==0&&Ke!==0?Ke&-Ke:Ie.T!==null?Um():Hx()}function B1(){if(Vn===0)if((Ke&536870912)===0||je){var t=Ic;Ic<<=1,(Ic&3932160)===0&&(Ic=262144),Vn=t}else Vn=536870912;return t=Qn.current,t!==null&&(t.flags|=32),Vn}function Un(t,e,n){(t===vt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(so(t,0),Ns(t,Ke,Vn,!1)),Ol(t,n),((ot&2)===0||t!==vt)&&(t===vt&&((ot&2)===0&&(Pr|=n),Pt===4&&Ns(t,Ke,Vn,!1)),zi(t))}function I1(t,e,n){if((ot&6)!==0)throw Error(Z(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Nl(t,e),s=i?GT(t,e):Gd(t,e,!0),r=i;do{if(s===0){ho&&!i&&Ns(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!zT(n)){s=Gd(t,e,!1),r=!1;continue}if(s===2){if(r=e,t.errorRecoveryDisabledLanes&r)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var o=t;s=vl;var l=o.current.memoizedState.isDehydrated;if(l&&(so(o,a).flags|=256),a=Gd(o,a,!1),a!==2){if(Cm&&!l){o.errorRecoveryDisabledLanes|=r,Pr|=r,s=4;break e}r=Dn,Dn=s,r!==null&&(Dn===null?Dn=r:Dn.push.apply(Dn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){so(t,0),Ns(t,e,0,!0);break}e:{switch(i=t,r=s,r){case 0:case 1:throw Error(Z(345));case 4:if((e&4194048)!==e)break;case 6:Ns(i,e,Vn,!Ps);break e;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(Z(329))}if((e&62914560)===e&&(s=Ku+300-kn(),10<s)){if(Ns(i,e,Vn,!Ps),zu(i,0,!0)!==0)break e;as=e,i.timeoutHandle=$1(Jv.bind(null,i,n,Dn,Cu,Cp,e,Vn,Pr,no,Ps,r,"Throttled",-0,0),s);break e}Jv(i,n,Dn,Cu,Cp,e,Vn,Pr,no,Ps,r,null,-0,0)}}break}while(!0);zi(t)}function Jv(t,e,n,i,s,r,a,o,l,c,h,d,f,p){if(t.timeoutHandle=-1,d=e.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ns},b1(e,r,d);var g=(r&62914560)===r?Ku-kn():(r&4194048)===r?D1-kn():0;if(g=Ab(d,g),g!==null){as=r,t.cancelPendingCommit=g($v.bind(null,t,e,r,n,i,s,a,o,l,h,d,null,f,p)),Ns(t,r,a,!c);return}}$v(t,e,r,n,i,s,a,o,l)}function zT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!qn(r(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ns(t,e,n,i){e&=~Rm,e&=~Pr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var s=e;0<s;){var r=31-Xn(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&Ox(t,n,e)}function Ju(){return(ot&6)===0?(kl(0,!1),!1):!0}function Dm(){if(qe!==null){if(ut===0)var t=qe.return;else t=qe,is=Xr=null,mm(t),qa=null,bl=0,t=qe;for(;t!==null;)f1(t.alternate,t),t=t.return;qe=null}}function so(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,ib(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),as=0,Dm(),vt=t,qe=n=ss(t.current,null),Ke=e,ut=0,zn=null,Ps=!1,ho=Nl(t,e),Cm=!1,no=Vn=Rm=Pr=Ks=Pt=0,Dn=vl=null,Cp=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var s=31-Xn(i),r=1<<s;e|=t[s],i&=~r}return hs=e,ku(),n}function L1(t,e){ze=null,Ie.H=Cl,e===uo||e===Xu?(e=Rv(),ut=3):e===lm?(e=Rv(),ut=4):ut=e===Em?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,zn=e,qe===null&&(Pt=1,Eu(t,ui(e,t.current)))}function P1(){var t=Qn.current;return t===null?!0:(Ke&4194048)===Ke?fi===null:(Ke&62914560)===Ke||(Ke&536870912)!==0?t===fi:!1}function N1(){var t=Ie.H;return Ie.H=Cl,t===null?Cl:t}function O1(){var t=Ie.A;return Ie.A=OT,t}function Ru(){Pt=4,Ps||(Ke&4194048)!==Ke&&Qn.current!==null||(ho=!0),(Ks&134217727)===0&&(Pr&134217727)===0||vt===null||Ns(vt,Ke,Vn,!1)}function Gd(t,e,n){var i=ot;ot|=2;var s=N1(),r=O1();(vt!==t||Ke!==e)&&(Cu=null,so(t,e)),e=!1;var a=Pt;e:do try{if(ut!==0&&qe!==null){var o=qe,l=zn;switch(ut){case 8:Dm(),a=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var c=ut;if(ut=0,zn=null,Va(t,o,l,c),n&&ho){a=0;break e}break;default:c=ut,ut=0,zn=null,Va(t,o,l,c)}}HT(),a=Pt;break}catch(h){L1(t,h)}while(!0);return e&&t.shellSuspendCounter++,is=Xr=null,ot=i,Ie.H=s,Ie.A=r,qe===null&&(vt=null,Ke=0,ku()),a}function HT(){for(;qe!==null;)F1(qe)}function GT(t,e){var n=ot;ot|=2;var i=N1(),s=O1();vt!==t||Ke!==e?(Cu=null,wu=kn()+500,so(t,e)):ho=Nl(t,e);e:do try{if(ut!==0&&qe!==null){e=qe;var r=zn;t:switch(ut){case 1:ut=0,zn=null,Va(t,e,r,1);break;case 2:case 9:if(Cv(r)){ut=0,zn=null,jv(e);break}e=function(){ut!==2&&ut!==9||vt!==t||(ut=7),zi(t)},r.then(e,e);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:Cv(r)?(ut=0,zn=null,jv(e)):(ut=0,zn=null,Va(t,e,r,7));break;case 5:var a=null;switch(qe.tag){case 26:a=qe.memoizedState;case 5:case 27:var o=qe;if(a?s_(a):o.stateNode.complete){ut=0,zn=null;var l=o.sibling;if(l!==null)qe=l;else{var c=o.return;c!==null?(qe=c,ju(c)):qe=null}break t}}ut=0,zn=null,Va(t,e,r,5);break;case 6:ut=0,zn=null,Va(t,e,r,6);break;case 8:Dm(),Pt=6;break e;default:throw Error(Z(462))}}VT();break}catch(h){L1(t,h)}while(!0);return is=Xr=null,Ie.H=i,Ie.A=s,ot=n,qe!==null?0:(vt=null,Ke=0,ku(),Pt)}function VT(){for(;qe!==null&&!hE();)F1(qe)}function F1(t){var e=h1(t.alternate,t,hs);t.memoizedProps=t.pendingProps,e===null?ju(t):qe=e}function jv(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Xv(n,e,e.pendingProps,e.type,void 0,Ke);break;case 11:e=Xv(n,e,e.pendingProps,e.type.render,e.ref,Ke);break;case 5:mm(e);default:f1(n,e),e=qe=fy(e,hs),e=h1(n,e,hs)}t.memoizedProps=t.pendingProps,e===null?ju(t):qe=e}function Va(t,e,n,i){is=Xr=null,mm(e),qa=null,bl=0;var s=e.return;try{if(DT(t,s,e,n,Ke)){Pt=1,Eu(t,ui(n,t.current)),qe=null;return}}catch(r){if(s!==null)throw qe=s,r;Pt=1,Eu(t,ui(n,t.current)),qe=null;return}e.flags&32768?(je||i===1?t=!0:ho||(Ke&536870912)!==0?t=!1:(Ps=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),z1(e,t)):ju(e)}function ju(t){var e=t;do{if((e.flags&32768)!==0){z1(e,Ps);return}t=e.return;var n=IT(e.alternate,e,hs);if(n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Pt===0&&(Pt=5)}function z1(t,e){do{var n=LT(t.alternate,t);if(n!==null){n.flags&=32767,qe=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){qe=t;return}qe=t=n}while(t!==null);Pt=6,qe=null}function $v(t,e,n,i,s,r,a,o,l){t.cancelPendingCommit=null;do $u();while(Yt!==0);if((ot&6)!==0)throw Error(Z(327));if(e!==null){if(e===t.current)throw Error(Z(177));if(r=e.lanes|e.childLanes,r|=tm,AE(t,n,r,a,o,l),t===vt&&(qe=vt=null,Ke=0),io=e,ks=t,as=n,Rp=r,Dp=s,U1=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,YT(du,function(){return W1(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=Ie.T,Ie.T=null,s=lt.p,lt.p=2,a=ot,ot|=4;try{PT(t,e,n)}finally{ot=a,lt.p=s,Ie.T=i}}Yt=1,H1(),G1(),V1()}}function H1(){if(Yt===1){Yt=0;var t=ks,e=io,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=Ie.T,Ie.T=null;var i=lt.p;lt.p=2;var s=ot;ot|=4;try{M1(e,t);var r=Pp,a=sy(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&iy(o.ownerDocument.documentElement,o)){if(l!==null&&em(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),g=o.textContent.length,_=Math.min(l.start,g),m=l.end===void 0?_:Math.min(l.end,g);!p.extend&&_>m&&(a=m,m=_,_=a);var u=Av(o,_),v=Av(o,m);if(u&&v&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var x=d.createRange();x.setStart(u.node,u.offset),p.removeAllRanges(),_>m?(p.addRange(x),p.extend(v.node,v.offset)):(x.setEnd(v.node,v.offset),p.addRange(x))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Ou=!!Lp,Pp=Lp=null}finally{ot=s,lt.p=i,Ie.T=n}}t.current=e,Yt=2}}function G1(){if(Yt===2){Yt=0;var t=ks,e=io,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Ie.T,Ie.T=null;var i=lt.p;lt.p=2;var s=ot;ot|=4;try{x1(t,e.alternate,e)}finally{ot=s,lt.p=i,Ie.T=n}}Yt=3}}function V1(){if(Yt===4||Yt===3){Yt=0,fE();var t=ks,e=io,n=as,i=U1;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Yt=5:(Yt=0,io=ks=null,k1(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Vs=null),qp(n),e=e.stateNode,Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Pl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ie.T,s=lt.p,lt.p=2,Ie.T=null;try{for(var r=t.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Ie.T=e,lt.p=s}}(as&3)!==0&&$u(),zi(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===Up?xl++:(xl=0,Up=t):xl=0,kl(0,!1)}}function k1(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hl(e)))}function $u(){return H1(),G1(),V1(),W1()}function W1(){if(Yt!==5)return!1;var t=ks,e=Rp;Rp=0;var n=qp(as),i=Ie.T,s=lt.p;try{lt.p=32>n?32:n,Ie.T=null,n=Dp,Dp=null;var r=ks,a=as;if(Yt=0,io=ks=null,as=0,(ot&6)!==0)throw Error(Z(331));var o=ot;if(ot|=4,C1(r.current),T1(r,r.current,a,n),ot=o,kl(0,!1),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Pl,r)}catch{}return!0}finally{lt.p=s,Ie.T=i,k1(t,e)}}function ex(t,e,n){e=ui(n,e),e=Ep(t.stateNode,e,2),t=Gs(t,e,2),t!==null&&(Ol(t,2),zi(t))}function ht(t,e,n){if(t.tag===3)ex(t,t,n);else for(;e!==null;){if(e.tag===3){ex(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vs===null||!Vs.has(i))){t=ui(n,t),n=r1(2),i=Gs(e,n,2),i!==null&&(a1(n,i,e,t),Ol(i,2),zi(i));break}}e=e.return}}function Vd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new FT;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(Cm=!0,s.add(n),t=kT.bind(null,t,e,n),e.then(t,t))}function kT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,vt===t&&(Ke&n)===n&&(Pt===4||Pt===3&&(Ke&62914560)===Ke&&300>kn()-Ku?(ot&2)===0&&so(t,0):Rm|=n,no===Ke&&(no=0)),zi(t)}function X1(t,e){e===0&&(e=Nx()),t=Wr(t,e),t!==null&&(Ol(t,e),zi(t))}function WT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X1(t,n)}function XT(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(Z(314))}i!==null&&i.delete(e),X1(t,n)}function YT(t,e){return Xp(t,e)}var Du=null,Da=null,Bp=!1,Uu=!1,kd=!1,Os=0;function zi(t){t!==Da&&t.next===null&&(Da===null?Du=Da=t:Da=Da.next=t),Uu=!0,Bp||(Bp=!0,QT())}function kl(t,e){if(!kd&&Uu){kd=!0;do for(var n=!1,i=Du;i!==null;){if(!e)if(t!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Xn(42|t)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,tx(i,r))}else r=Ke,r=zu(i,i===vt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Nl(i,r)||(n=!0,tx(i,r));i=i.next}while(n);kd=!1}}function qT(){Y1()}function Y1(){Uu=Bp=!1;var t=0;Os!==0&&nb()&&(t=Os);for(var e=kn(),n=null,i=Du;i!==null;){var s=i.next,r=q1(i,e);r===0?(i.next=null,n===null?Du=s:n.next=s,s===null&&(Da=n)):(n=i,(t!==0||(r&3)!==0)&&(Uu=!0)),i=s}Yt!==0&&Yt!==5||kl(t,!1),Os!==0&&(Os=0)}function q1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var a=31-Xn(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=_E(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=vt,n=Ke,n=zu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&xd(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Nl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&xd(i),qp(n)){case 2:case 8:n=Lx;break;case 32:n=du;break;case 268435456:n=Px;break;default:n=du}return i=Q1.bind(null,t),n=Xp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&xd(i),t.callbackPriority=2,t.callbackNode=null,2}function Q1(t,e){if(Yt!==0&&Yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if($u()&&t.callbackNode!==n)return null;var i=Ke;return i=zu(t,t===vt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(I1(t,i,e),q1(t,kn()),t.callbackNode!=null&&t.callbackNode===n?Q1.bind(null,t):null)}function tx(t,e){if($u())return null;I1(t,e,!0)}function QT(){sb(function(){(ot&6)!==0?Xp(Ix,qT):Y1()})}function Um(){if(Os===0){var t=$a;t===0&&(t=Bc,Bc<<=1,(Bc&261888)===0&&(Bc=256)),Os=t}return Os}function nx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Kc(""+t)}function ix(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function ZT(t,e,n,i,s){if(e==="submit"&&n&&n.stateNode===s){var r=nx((s[Bn]||null).action),a=i.submitter;a&&(e=(e=a[Bn]||null)?nx(e.formAction):a.getAttribute("formAction"),e!==null&&(r=e,a=null));var o=new Hu("action","action",null,i,s);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Os!==0){var l=a?ix(s,a):new FormData(s);Sp(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?ix(s,a):new FormData(s),Sp(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(Wc=0;Wc<up.length;Wc++)Xc=up[Wc],sx=Xc.toLowerCase(),rx=Xc[0].toUpperCase()+Xc.slice(1),Mi(sx,"on"+rx);var Xc,sx,rx,Wc;Mi(ay,"onAnimationEnd");Mi(oy,"onAnimationIteration");Mi(ly,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi(dT,"onTransitionRun");Mi(pT,"onTransitionStart");Mi(mT,"onTransitionCancel");Mi(cy,"onTransitionEnd");Ja("onMouseEnter",["mouseout","mouseover"]);Ja("onMouseLeave",["mouseout","mouseover"]);Ja("onPointerEnter",["pointerout","pointerover"]);Ja("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function Z1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=c;try{r(s)}catch(h){mu(h)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break e;r=o,s.currentTarget=c;try{r(s)}catch(h){mu(h)}s.currentTarget=null,r=l}}}}function Ye(t,e){var n=e[np];n===void 0&&(n=e[np]=new Set);var i=t+"__bubble";n.has(i)||(K1(e,t,2,!1),n.add(i))}function Wd(t,e,n){var i=0;e&&(i|=4),K1(n,t,i,e)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function Bm(t){if(!t[Yc]){t[Yc]=!0,Gx.forEach(function(n){n!=="selectionchange"&&(KT.has(n)||Wd(n,!1,t),Wd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yc]||(e[Yc]=!0,Wd("selectionchange",!1,e))}}function K1(t,e,n,i){switch(c_(e)){case 2:var s=Eb;break;case 8:s=Tb;break;default:s=Nm}n=s.bind(null,e,n,t),s=void 0,!op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Xd(t,e,n,i,s){var r=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=Ia(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue e}o=o.parentNode}}i=i.return}Zx(function(){var c=r,h=Kp(n),d=[];e:{var f=uy.get(t);if(f!==void 0){var p=Hu,g=t;switch(t){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":p=XE;break;case"focusin":g="focus",p=Md;break;case"focusout":g="blur",p=Md;break;case"beforeblur":case"afterblur":p=Md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=IE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QE;break;case ay:case oy:case ly:p=NE;break;case cy:p=KE;break;case"scroll":case"scrollend":p=UE;break;case"wheel":p=jE;break;case"copy":case"cut":case"paste":p=FE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pv;break;case"toggle":case"beforetoggle":p=eT}var _=(e&4)!==0,m=!_&&(t==="scroll"||t==="scrollend"),u=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,x;v!==null;){var y=v;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||u===null||(y=Al(v,u),y!=null&&_.push(Dl(v,y,x))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,n,h),d.push({event:f,listeners:_}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==ap&&(g=n.relatedTarget||n.fromElement)&&(Ia(g)||g[oo]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Ia(g):null,g!==null&&(m=Ll(g),_=g.tag,g!==m||_!==5&&_!==27&&_!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=fv,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=pv,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:sl(p),x=g==null?f:sl(g),f=new _(y,v+"leave",p,n,h),f.target=m,f.relatedTarget=x,y=null,Ia(h)===c&&(_=new _(u,v+"enter",g,n,h),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=JT,u=p,v=g,x=0,y=u;y;y=_(y))x++;y=0;for(var T=v;T;T=_(T))y++;for(;0<x-y;)u=_(u),x--;for(;0<y-x;)v=_(v),y--;for(;x--;){if(u===v||v!==null&&u===v.alternate){_=u;break t}u=_(u),v=_(v)}_=null}else _=null;p!==null&&ax(d,f,p,_,!1),g!==null&&m!==null&&ax(d,m,g,_,!0)}}e:{if(f=c?sl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=xv;else if(vv(f))if(ty)b=uT;else{b=lT;var w=oT}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Zp(c.elementType)&&(b=xv):b=cT;if(b&&(b=b(t,c))){ey(d,b,n,h);break e}w&&w(t,f,c),t==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&rp(f,"number",f.value)}switch(w=c?sl(c):window,t){case"focusin":(vv(w)||w.contentEditable==="true")&&(Na=w,lp=c,cl=null);break;case"focusout":cl=lp=Na=null;break;case"mousedown":cp=!0;break;case"contextmenu":case"mouseup":case"dragend":cp=!1,Sv(d,n,h);break;case"selectionchange":if(fT)break;case"keydown":case"keyup":Sv(d,n,h)}var U;if($p)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Pa?jx(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Jx&&n.locale!=="ko"&&(Pa||S!=="onCompositionStart"?S==="onCompositionEnd"&&Pa&&(U=Kx()):(Ls=h,Jp="value"in Ls?Ls.value:Ls.textContent,Pa=!0)),w=Bu(c,S),0<w.length&&(S=new dv(S,t,null,n,h),d.push({event:S,listeners:w}),U?S.data=U:(U=$x(n),U!==null&&(S.data=U)))),(U=nT?iT(t,n):sT(t,n))&&(S=Bu(c,"onBeforeInput"),0<S.length&&(w=new dv("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:S}),w.data=U)),ZT(d,t,c,n,h)}Z1(d,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Al(t,n),s!=null&&i.unshift(Dl(t,s,r)),s=Al(t,e),s!=null&&i.push(Dl(t,s,r))),t.tag===3)return i;t=t.return}return[]}function JT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ax(t,e,n,i,s){for(var r=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Al(n,r),c!=null&&a.unshift(Dl(n,c,l))):s||(c=Al(n,r),c!=null&&a.push(Dl(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var jT=/\r\n?/g,$T=/\u0000|\uFFFD/g;function ox(t){return(typeof t=="string"?t:""+t).replace(jT,`
`).replace($T,"")}function J1(t,e){return e=ox(e),ox(t)===e}function pt(t,e,n,i,s,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ja(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ja(t,""+i);break;case"className":Pc(t,"class",i);break;case"tabIndex":Pc(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Pc(t,n,i);break;case"style":Qx(t,i,r);break;case"data":if(e!=="object"){Pc(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Kc(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&pt(t,e,"name",s.name,s,null),pt(t,e,"formEncType",s.formEncType,s,null),pt(t,e,"formMethod",s.formMethod,s,null),pt(t,e,"formTarget",s.formTarget,s,null)):(pt(t,e,"encType",s.encType,s,null),pt(t,e,"method",s.method,s,null),pt(t,e,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Kc(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ns);break;case"onScroll":i!=null&&Ye("scroll",t);break;case"onScrollEnd":i!=null&&Ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Kc(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Ye("beforetoggle",t),Ye("toggle",t),Zc(t,"popover",i);break;case"xlinkActuate":Qi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Qi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Qi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Qi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Qi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Qi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Qi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Zc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=RE.get(n)||n,Zc(t,n,i))}}function Ip(t,e,n,i,s,r){switch(n){case"style":Qx(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Z(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Z(60));t.innerHTML=n}}break;case"children":typeof i=="string"?ja(t,i):(typeof i=="number"||typeof i=="bigint")&&ja(t,""+i);break;case"onScroll":i!=null&&Ye("scroll",t);break;case"onScrollEnd":i!=null&&Ye("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),r=t[Bn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,s);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Zc(t,n,i)}}}function hn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",t),Ye("load",t);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,e));default:pt(t,e,r,a,n,null)}}s&&pt(t,e,"srcSet",n.srcSet,n,null),i&&pt(t,e,"src",n.src,n,null);return;case"input":Ye("invalid",t);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":a=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Z(137,e));break;default:pt(t,e,i,h,n,null)}}Xx(t,r,o,l,c,a,s,!1);return;case"select":Ye("invalid",t),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:pt(t,e,s,o,n,null)}e=r,n=a,t.multiple=!!i,e!=null?Wa(t,!!i,e,!1):n!=null&&Wa(t,!!i,n,!0);return;case"textarea":Ye("invalid",t),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Z(91));break;default:pt(t,e,a,o,n,null)}qx(t,i,s,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(t,e,l,i,n,null)}return;case"dialog":Ye("beforetoggle",t),Ye("toggle",t),Ye("cancel",t),Ye("close",t);break;case"iframe":case"object":Ye("load",t);break;case"video":case"audio":for(i=0;i<Rl.length;i++)Ye(Rl[i],t);break;case"image":Ye("error",t),Ye("load",t);break;case"details":Ye("toggle",t);break;case"embed":case"source":case"link":Ye("error",t),Ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Z(137,e));default:pt(t,e,c,i,n,null)}return;default:if(Zp(e)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Ip(t,e,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&pt(t,e,o,i,n,null))}function eb(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||pt(t,e,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Z(137,e));break;default:p!==d&&pt(t,e,f,p,i,d)}}sp(t,a,o,l,c,h,r,s);return;case"select":p=a=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||pt(t,e,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&pt(t,e,s,r,i,l)}e=o,n=a,i=p,f!=null?Wa(t,!!n,f,!1):!!i!=!!n&&(e!=null?Wa(t,!!n,e,!0):Wa(t,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pt(t,e,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Z(91));break;default:s!==r&&pt(t,e,a,s,i,r)}Yx(t,f,p);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:pt(t,e,g,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:pt(t,e,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&pt(t,e,_,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Z(137,e));break;default:pt(t,e,c,f,i,p)}return;default:if(Zp(e)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Ip(t,e,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Ip(t,e,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&pt(t,e,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||pt(t,e,d,f,i,p)}function lx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&lx(a)){for(a=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&lx(d)&&(l=l.responseEnd,a+=h*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+a)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Lp=null,Pp=null;function Iu(t){return t.nodeType===9?t:t.ownerDocument}function cx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j1(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Np(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=null;function nb(){var t=window.event;return t&&t.type==="popstate"?t===Yd?!1:(Yd=t,!0):(Yd=null,!1)}var $1=typeof setTimeout=="function"?setTimeout:void 0,ib=typeof clearTimeout=="function"?clearTimeout:void 0,ux=typeof Promise=="function"?Promise:void 0,sb=typeof queueMicrotask=="function"?queueMicrotask:typeof ux<"u"?function(t){return ux.resolve(null).then(t).catch(rb)}:$1;function rb(t){setTimeout(function(){throw t})}function js(t){return t==="head"}function hx(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(s),ao(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")yl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,yl(n);for(var r=n.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[Fl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&yl(t.ownerDocument.body);n=s}while(n);ao(e)}function fx(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Op(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Op(n),Qp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ab(t,e,n,i){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Fl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function ob(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function e_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=di(t.nextSibling),t===null))return null;return t}function Fp(t){return t.data==="$?"||t.data==="$~"}function zp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lb(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Hp=null;function dx(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return di(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function px(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function t_(t,e,n){switch(e=Iu(n),t){case"html":if(t=e.documentElement,!t)throw Error(Z(452));return t;case"head":if(t=e.head,!t)throw Error(Z(453));return t;case"body":if(t=e.body,!t)throw Error(Z(454));return t;default:throw Error(Z(451))}}function yl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qp(t)}var pi=new Map,mx=new Set;function Lu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fs=lt.d;lt.d={f:cb,r:ub,D:hb,C:fb,L:db,m:pb,X:gb,S:mb,M:vb};function cb(){var t=fs.f(),e=Ju();return t||e}function ub(t){var e=lo(t);e!==null&&e.tag===5&&e.type==="form"?Qy(e):fs.r(t)}var fo=typeof document>"u"?null:document;function n_(t,e,n){var i=fo;if(i&&typeof e=="string"&&e){var s=ci(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),mx.has(s)||(mx.add(s),t={rel:t,crossOrigin:n,href:e},i.querySelector(s)===null&&(e=i.createElement("link"),hn(e,"link",t),tn(e),i.head.appendChild(e)))}}function hb(t){fs.D(t),n_("dns-prefetch",t,null)}function fb(t,e){fs.C(t,e),n_("preconnect",t,e)}function db(t,e,n){fs.L(t,e,n);var i=fo;if(i&&t&&e){var s='link[rel="preload"][as="'+ci(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ci(n.imageSizes)+'"]')):s+='[href="'+ci(t)+'"]';var r=s;switch(e){case"style":r=ro(t);break;case"script":r=po(t)}pi.has(r)||(t=bt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),pi.set(r,t),i.querySelector(s)!==null||e==="style"&&i.querySelector(Wl(r))||e==="script"&&i.querySelector(Xl(r))||(e=i.createElement("link"),hn(e,"link",t),tn(e),i.head.appendChild(e)))}}function pb(t,e){fs.m(t,e);var n=fo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+ci(i)+'"][href="'+ci(t)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=po(t)}if(!pi.has(r)&&(t=bt({rel:"modulepreload",href:t},e),pi.set(r,t),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xl(r)))return}i=n.createElement("link"),hn(i,"link",t),tn(i),n.head.appendChild(i)}}}function mb(t,e,n){fs.S(t,e,n);var i=fo;if(i&&t){var s=ka(i).hoistableStyles,r=ro(t);e=e||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(Wl(r)))o.loading=5;else{t=bt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=pi.get(r))&&Im(t,n);var l=a=i.createElement("link");tn(l),hn(l,"link",t),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,au(a,e,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function gb(t,e){fs.X(t,e);var n=fo;if(n&&t){var i=ka(n).hoistableScripts,s=po(t),r=i.get(s);r||(r=n.querySelector(Xl(s)),r||(t=bt({src:t,async:!0},e),(e=pi.get(s))&&Lm(t,e),r=n.createElement("script"),tn(r),hn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function vb(t,e){fs.M(t,e);var n=fo;if(n&&t){var i=ka(n).hoistableScripts,s=po(t),r=i.get(s);r||(r=n.querySelector(Xl(s)),r||(t=bt({src:t,async:!0,type:"module"},e),(e=pi.get(s))&&Lm(t,e),r=n.createElement("script"),tn(r),hn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function gx(t,e,n,i){var s=(s=Fs.current)?Lu(s):null;if(!s)throw Error(Z(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ro(n.href),n=ka(s).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ro(n.href);var r=ka(s).hoistableStyles,a=r.get(t);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,a),(r=s.querySelector(Wl(t)))&&!r._p&&(a.instance=r,a.state.loading=5),pi.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pi.set(t,n),r||xb(s,t,n,a.state))),e&&i===null)throw Error(Z(528,""));return a}if(e&&i!==null)throw Error(Z(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=po(n),n=ka(s).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Z(444,t))}}function ro(t){return'href="'+ci(t)+'"'}function Wl(t){return'link[rel="stylesheet"]['+t+"]"}function i_(t){return bt({},t,{"data-precedence":t.precedence,precedence:null})}function xb(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),hn(e,"link",n),tn(e),t.head.appendChild(e))}function po(t){return'[src="'+ci(t)+'"]'}function Xl(t){return"script[async]"+t}function vx(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+ci(n.href)+'"]');if(i)return e.instance=i,tn(i),i;var s=bt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),tn(i),hn(i,"style",s),au(i,n.precedence,t),e.instance=i;case"stylesheet":s=ro(n.href);var r=t.querySelector(Wl(s));if(r)return e.state.loading|=4,e.instance=r,tn(r),r;i=i_(n),(s=pi.get(s))&&Im(i,s),r=(t.ownerDocument||t).createElement("link"),tn(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),e.state.loading|=4,au(r,n.precedence,t),e.instance=r;case"script":return r=po(n.src),(s=t.querySelector(Xl(r)))?(e.instance=s,tn(s),s):(i=n,(s=pi.get(r))&&(i=bt({},n),Lm(i,s)),t=t.ownerDocument||t,s=t.createElement("script"),tn(s),hn(s,"link",i),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(Z(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,au(i,n.precedence,t));return e.instance}function au(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===e)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Im(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Lm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ou=null;function xx(t,e,n){if(ou===null){var i=new Map,s=ou=new Map;s.set(n,i)}else s=ou,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var r=n[s];if(!(r[Fl]||r[ln]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(e)||"";a=t+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function yx(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function yb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function s_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _b(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ro(i.href),r=e.querySelector(Wl(s));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,tn(r);return}r=e.ownerDocument||e,i=i_(i),(s=pi.get(s))&&Im(i,s),r=r.createElement("link"),tn(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),hn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Pu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var qd=0;function Ab(t,e){return t.stylesheets&&t.count===0&&lu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&qd===0&&(qd=62500*tb());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lu(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>qd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nu=null;function lu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nu=new Map,e.forEach(Sb,t),Nu=null,Pu.call(t))}function Sb(t,e){if(!(e.state.loading&4)){var n=Nu.get(t);if(n)var i=n.get(null);else{n=new Map,Nu.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=e.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Pu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Ul={$$typeof:ts,Provider:null,Consumer:null,_currentValue:Ur,_currentValue2:Ur,_threadCount:0};function Mb(t,e,n,i,s,r,a,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.hiddenUpdates=yd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function r_(t,e,n,i,s,r,a,o,l,c,h,d){return t=new Mb(t,e,n,a,l,c,h,d,o),e=1,r===!0&&(e|=24),r=Gn(3,null,null,e),t.current=r,r.stateNode=t,e=am(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},cm(r),t}function a_(t){return t?(t=za,t):za}function o_(t,e,n,i,s,r){s=a_(s),i.context===null?i.context=s:i.pendingContext=s,i=Hs(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Gs(t,i,e),n!==null&&(Un(n,t,e),hl(n,t,e))}function _x(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pm(t,e){_x(t,e),(t=t.alternate)&&_x(t,e)}function l_(t){if(t.tag===13||t.tag===31){var e=Wr(t,67108864);e!==null&&Un(e,t,67108864),Pm(t,67108864)}}function Ax(t){if(t.tag===13||t.tag===31){var e=Yn();e=Yp(e);var n=Wr(t,e);n!==null&&Un(n,t,e),Pm(t,e)}}var Ou=!0;function Eb(t,e,n,i){var s=Ie.T;Ie.T=null;var r=lt.p;try{lt.p=2,Nm(t,e,n,i)}finally{lt.p=r,Ie.T=s}}function Tb(t,e,n,i){var s=Ie.T;Ie.T=null;var r=lt.p;try{lt.p=8,Nm(t,e,n,i)}finally{lt.p=r,Ie.T=s}}function Nm(t,e,n,i){if(Ou){var s=Gp(i);if(s===null)Xd(t,e,i,Fu,n),Sx(t,i);else if(wb(s,t,e,n,i))i.stopPropagation();else if(Sx(t,i),e&4&&-1<bb.indexOf(t)){for(;s!==null;){var r=lo(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=Cr(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-Xn(a);o.entanglements[1]|=l,a&=~l}zi(r),(ot&6)===0&&(wu=kn()+500,kl(0,!1))}}break;case 31:case 13:o=Wr(r,2),o!==null&&Un(o,r,2),Ju(),Pm(r,2)}if(r=Gp(i),r===null&&Xd(t,e,i,Fu,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Xd(t,e,i,null,n)}}function Gp(t){return t=Kp(t),Om(t)}var Fu=null;function Om(t){if(Fu=null,t=Ia(t),t!==null){var e=Ll(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Cx(e),t!==null)return t;t=null}else if(n===31){if(t=Rx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fu=t,null}function c_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dE()){case Ix:return 2;case Lx:return 8;case du:case pE:return 32;case Px:return 268435456;default:return 32}default:return 32}}var Vp=!1,Ws=null,Xs=null,Ys=null,Bl=new Map,Il=new Map,Bs=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sx(t,e){switch(t){case"focusin":case"focusout":Ws=null;break;case"dragenter":case"dragleave":Xs=null;break;case"mouseover":case"mouseout":Ys=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function el(t,e,n,i,s,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},e!==null&&(e=lo(e),e!==null&&l_(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function wb(t,e,n,i,s){switch(e){case"focusin":return Ws=el(Ws,t,e,n,i,s),!0;case"dragenter":return Xs=el(Xs,t,e,n,i,s),!0;case"mouseover":return Ys=el(Ys,t,e,n,i,s),!0;case"pointerover":var r=s.pointerId;return Bl.set(r,el(Bl.get(r)||null,t,e,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Il.set(r,el(Il.get(r)||null,t,e,n,i,s)),!0}return!1}function u_(t){var e=Ia(t.target);if(e!==null){var n=Ll(e);if(n!==null){if(e=n.tag,e===13){if(e=Cx(n),e!==null){t.blockedOn=e,rv(t.priority,function(){Ax(n)});return}}else if(e===31){if(e=Rx(n),e!==null){t.blockedOn=e,rv(t.priority,function(){Ax(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gp(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ap=i,n.target.dispatchEvent(i),ap=null}else return e=lo(n),e!==null&&l_(e),t.blockedOn=n,!1;e.shift()}return!0}function Mx(t,e,n){cu(t)&&n.delete(e)}function Cb(){Vp=!1,Ws!==null&&cu(Ws)&&(Ws=null),Xs!==null&&cu(Xs)&&(Xs=null),Ys!==null&&cu(Ys)&&(Ys=null),Bl.forEach(Mx),Il.forEach(Mx)}function qc(t,e){t.blockedOn===e&&(t.blockedOn=null,Vp||(Vp=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,Cb)))}var Qc=null;function Ex(t){Qc!==t&&(Qc=t,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,function(){Qc===t&&(Qc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],s=t[e+2];if(typeof i!="function"){if(Om(i||n)===null)continue;break}var r=lo(n);r!==null&&(t.splice(e,3),e-=3,Sp(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function ao(t){function e(l){return qc(l,t)}Ws!==null&&qc(Ws,t),Xs!==null&&qc(Xs,t),Ys!==null&&qc(Ys,t),Bl.forEach(e),Il.forEach(e);for(var n=0;n<Bs.length;n++){var i=Bs[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Bs.length&&(n=Bs[0],n.blockedOn===null);)u_(n),n.blockedOn===null&&Bs.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Bn]||null;if(typeof r=="function")a||Ex(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Bn]||null)o=a.formAction;else if(Om(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Ex(n)}}}function h_(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function Fm(t){this._internalRoot=t}eh.prototype.render=Fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));var n=e.current,i=Yn();o_(n,i,t,e,null,null)};eh.prototype.unmount=Fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;o_(t.current,2,null,t,null,null),Ju(),e[oo]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bs.length&&e!==0&&e<Bs[n].priority;n++);Bs.splice(n,0,t),n===0&&u_(t)}};var Tx=bx.version;if(Tx!=="19.2.8")throw Error(Z(527,Tx,"19.2.8"));lt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=aE(e),t=t!==null?Dx(t):null,t=t===null?null:t.stateNode,t};var Rb={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Ie,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(tl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!tl.isDisabled&&tl.supportsFiber))try{Pl=tl.inject(Rb),Wn=tl}catch{}var tl;th.createRoot=function(t,e){if(!wx(t))throw Error(Z(299));var n=!1,i="",s=n1,r=i1,a=s1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=r_(t,1,!1,null,null,n,i,null,s,r,a,h_),t[oo]=e.current,Bm(t),new Fm(e)};th.hydrateRoot=function(t,e,n){if(!wx(t))throw Error(Z(299));var i=!1,s="",r=n1,a=i1,o=s1,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=r_(t,1,!0,e,n??null,i,s,l,r,a,o,h_),e.context=a_(null),n=e.current,i=Yn(),i=Yp(i),s=Hs(i),s.callback=null,Gs(n,s,i),n=i,e.current.lanes=n,Ol(e,n),zi(e),t[oo]=e.current,Bm(t),new eh(e)};th.version="19.2.8"});var m_=Ui((A3,p_)=>{"use strict";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),p_.exports=f_()});var BA=Ui(uh=>{"use strict";var Xb=Symbol.for("react.transitional.element"),Yb=Symbol.for("react.fragment");function UA(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var s in e)s!=="key"&&(n[s]=e[s])}else n=e;return e=n.ref,{$$typeof:Xb,type:t,key:i,ref:e!==void 0?e:null,props:n}}uh.Fragment=Yb;uh.jsx=UA;uh.jsxs=UA});var Zr=Ui((oB,IA)=>{"use strict";IA.exports=BA()});var UM=Bi(Ma()),BM=Bi(m_());var ms=Bi(Ma());function Yr(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function nh(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function g_(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function zm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function Hm(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function v_(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function x_(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function sh(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function y_(t,e){let n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)}function __(t,e){let n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s}function Gm(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function A_(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function S_(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function ih(t,e){let n=e[0],i=e[1],s=e[2],r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function Vm(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function km(t,e,n){let i=e[0],s=e[1],r=e[2],a=n[0],o=n[1],l=n[2];return t[0]=s*l-r*o,t[1]=r*a-i*l,t[2]=i*o-s*a,t}function M_(t,e,n,i){let s=e[0],r=e[1],a=e[2];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t[2]=a+i*(n[2]-a),t}function E_(t,e,n,i,s){let r=Math.exp(-i*s),a=e[0],o=e[1],l=e[2];return t[0]=n[0]+(a-n[0])*r,t[1]=n[1]+(o-n[1])*r,t[2]=n[2]+(l-n[2])*r,t}function T_(t,e,n){let i=e[0],s=e[1],r=e[2],a=n[3]*i+n[7]*s+n[11]*r+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/a,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/a,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/a,t}function b_(t,e,n){let i=e[0],s=e[1],r=e[2],a=n[3]*i+n[7]*s+n[11]*r+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*s+n[8]*r)/a,t[1]=(n[1]*i+n[5]*s+n[9]*r)/a,t[2]=(n[2]*i+n[6]*s+n[10]*r)/a,t}function w_(t,e,n){let i=e[0],s=e[1],r=e[2];return t[0]=i*n[0]+s*n[3]+r*n[6],t[1]=i*n[1]+s*n[4]+r*n[7],t[2]=i*n[2]+s*n[5]+r*n[8],t}function C_(t,e,n){let i=e[0],s=e[1],r=e[2],a=n[0],o=n[1],l=n[2],c=n[3],h=o*r-l*s,d=l*i-a*r,f=a*s-o*i,p=o*f-l*d,g=l*h-a*f,_=a*d-o*h,m=c*2;return h*=m,d*=m,f*=m,p*=2,g*=2,_*=2,t[0]=i+h+p,t[1]=s+d+g,t[2]=r+f+_,t}var R_=(function(){let t=[0,0,0],e=[0,0,0];return function(n,i){nh(t,n),nh(e,i),ih(t,t),ih(e,e);let s=Vm(t,e);return s>1?0:s<-1?Math.PI:Math.acos(s)}})();function D_(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}var Ln=class t extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(g_(this,e,n,i),this)}copy(e){return nh(this,e),this}add(e,n){return n?zm(this,e,n):zm(this,this,e),this}sub(e,n){return n?Hm(this,e,n):Hm(this,this,e),this}multiply(e){return e.length?v_(this,this,e):sh(this,this,e),this}divide(e){return e.length?x_(this,this,e):sh(this,this,1/e),this}inverse(e=this){return S_(this,e),this}len(){return Yr(this)}distance(e){return e?y_(this,e):Yr(this)}squaredLen(){return Gm(this)}squaredDistance(e){return e?__(this,e):Gm(this)}negate(e=this){return A_(this,e),this}cross(e,n){return n?km(this,e,n):km(this,this,e),this}scale(e){return sh(this,this,e),this}normalize(){return ih(this,this),this}dot(e){return Vm(this,e)}equals(e){return D_(this,e)}applyMatrix3(e){return w_(this,this,e),this}applyMatrix4(e){return T_(this,this,e),this}scaleRotateMatrix4(e){return b_(this,this,e),this}applyQuaternion(e){return C_(this,this,e),this}angle(e){return R_(this,e)}lerp(e,n){return M_(this,this,e,n),this}smoothLerp(e,n,i){return E_(this,this,e,n,i),this}clone(){return new t(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){let n=this[0],i=this[1],s=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*s,this[1]=e[1]*n+e[5]*i+e[9]*s,this[2]=e[2]*n+e[6]*i+e[10]*s,this.normalize()}};var B_=new Ln,Db=1,Ub=1,I_=!1,rh=class{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=Db++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=Ub++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){let n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:s})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}let r=this.attributes[i];this.gl.bindBuffer(r.target,r.buffer),this.glState.boundBuffer=r.buffer;let a=1;s===35674&&(a=2),s===35675&&(a=3),s===35676&&(a=4);let o=r.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(n+h,o,r.type,r.normalized,r.stride+l,r.offset+h*c),this.gl.enableVertexAttribArray(n+h),this.gl.renderer.vertexAttribDivisor(n+h,r.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:r})=>{let a=this.attributes[r];a.needsUpdate&&this.updateAttribute(a)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){let e=this.attributes.position;if(e.data)return e;if(!I_)return console.warn("No position buffer data found to compute bounds"),I_=!0}computeBoundingBox(e){e||(e=this.getPosition());let n=e.data,i=e.size;this.bounds||(this.bounds={min:new Ln,max:new Ln,center:new Ln,scale:new Ln,radius:1/0});let s=this.bounds.min,r=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;s.set(1/0),r.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){let h=n[l],d=n[l+1],f=n[l+2];s.x=Math.min(h,s.x),s.y=Math.min(d,s.y),s.z=Math.min(f,s.z),r.x=Math.max(h,r.x),r.y=Math.max(d,r.y),r.z=Math.max(f,r.z)}o.sub(r,s),a.add(s,r).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());let n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let s=0;for(let r=0,a=n.length;r<a;r+=i)B_.fromArray(n,r),s=Math.max(s,this.bounds.center.squaredDistance(B_));this.bounds.radius=Math.sqrt(s)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}};var Bb=1,L_={},qr=class{constructor(e,{vertex:n,fragment:i,uniforms:s={},transparent:r=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=s,this.id=Bb++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=r,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${P_(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${P_(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));let l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;let s=[],r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(s[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=s.join("")}setBlendFunc(e,n,i,s){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=s,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((s,r)=>{let a=this.uniforms[r.uniformName];for(let o of r.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return N_(`Active uniform ${r.name} has not been supplied`);if(a&&a.value===void 0)return N_(`${r.name} uniform is missing a value parameter`);if(a.value.texture)return n=n+1,a.value.update(n),Wm(this.gl,r.type,s,n);if(a.value.length&&a.value[0].texture){let o=[];return a.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Wm(this.gl,r.type,s,o)}Wm(this.gl,r.type,s,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function Wm(t,e,n,i){i=i.length?Ib(i):i;let s=t.renderer.state.uniformLocations.get(n);if(i.length)if(s===void 0||s.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(Lb(s,i))return;s.set?s.set(i):Pb(s,i),t.renderer.state.uniformLocations.set(n,s)}else{if(s===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function P_(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function Ib(t){let e=t.length,n=t[0].length;if(n===void 0)return t;let i=e*n,s=L_[i];s||(L_[i]=s=new Float32Array(i));for(let r=0;r<e;r++)s.set(t[r],r*n);return s}function Lb(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pb(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}var Xm=0;function N_(t){Xm>100||(console.warn(t),Xm++,Xm>100&&console.warn("More than 100 program warnings - stopping logs."))}var Ym=new Ln,Nb=1,Yl=class{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:s=1,alpha:r=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:d="default",autoClear:f=!0,webgl:p=2}={}){let g={alpha:r,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d};this.dpr=s,this.alpha=r,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=f,this.id=Nb++,p===2&&(this.gl=e.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,s=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=s,this.gl.viewport(i,s,e,n))}setScissor(e,n,i=0,s=0){this.gl.scissor(i,s,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,s){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===s||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=s,i!==void 0?this.gl.blendFuncSeparate(e,n,i,s):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:s}){let r=[];if(n&&i&&n.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&n&&!n.frustumIntersectsMesh(a)||r.push(a))}),s){let a=[],o=[],l=[];r.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(Ym),Ym.applyMatrix4(n.projectionViewMatrix),c.zDepth=Ym.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),r=a.concat(o,l)}return r}render({scene:e,camera:n,target:i=null,update:s=!0,sort:r=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),s&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:a,sort:r}).forEach(c=>{c.draw({camera:n})})}};function O_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function F_(t,e,n,i,s){return t[0]=e,t[1]=n,t[2]=i,t[3]=s,t}function z_(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=n*n+i*i+s*s+r*r;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=i*a,t[2]=s*a,t[3]=r*a,t}function H_(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function G_(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function V_(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function qm(t,e,n){let i=e[0],s=e[1],r=e[2],a=e[3],o=n[0],l=n[1],c=n[2],h=n[3];return t[0]=i*h+a*o+s*c-r*l,t[1]=s*h+a*l+r*o-i*c,t[2]=r*h+a*c+i*l-s*o,t[3]=a*h-i*o-s*l-r*c,t}function k_(t,e,n){n*=.5;let i=e[0],s=e[1],r=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+a*o,t[1]=s*l+r*o,t[2]=r*l-s*o,t[3]=a*l-i*o,t}function W_(t,e,n){n*=.5;let i=e[0],s=e[1],r=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-r*o,t[1]=s*l+a*o,t[2]=r*l+i*o,t[3]=a*l-s*o,t}function X_(t,e,n){n*=.5;let i=e[0],s=e[1],r=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+s*o,t[1]=s*l-i*o,t[2]=r*l+a*o,t[3]=a*l-r*o,t}function Y_(t,e,n,i){let s=e[0],r=e[1],a=e[2],o=e[3],l=n[0],c=n[1],h=n[2],d=n[3],f,p,g,_,m;return p=s*l+r*c+a*h+o*d,p<0&&(p=-p,l=-l,c=-c,h=-h,d=-d),1-p>1e-6?(f=Math.acos(p),g=Math.sin(f),_=Math.sin((1-i)*f)/g,m=Math.sin(i*f)/g):(_=1-i,m=i),t[0]=_*s+m*l,t[1]=_*r+m*c,t[2]=_*a+m*h,t[3]=_*o+m*d,t}function q_(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=n*n+i*i+s*s+r*r,o=a?1/a:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-s*o,t[3]=r*o,t}function Q_(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Z_(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let s=0;e[4]>e[0]&&(s=1),e[8]>e[s*3+s]&&(s=2);let r=(s+1)%3,a=(s+2)%3;i=Math.sqrt(e[s*3+s]-e[r*3+r]-e[a*3+a]+1),t[s]=.5*i,i=.5/i,t[3]=(e[r*3+a]-e[a*3+r])*i,t[r]=(e[r*3+s]+e[s*3+r])*i,t[a]=(e[a*3+s]+e[s*3+a])*i}return t}function K_(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),s=Math.cos(e[0]*.5),r=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*a*l+s*r*o,t[1]=s*r*l-i*a*o,t[2]=s*a*o+i*r*l,t[3]=s*a*l-i*r*o):n==="YXZ"?(t[0]=i*a*l+s*r*o,t[1]=s*r*l-i*a*o,t[2]=s*a*o-i*r*l,t[3]=s*a*l+i*r*o):n==="ZXY"?(t[0]=i*a*l-s*r*o,t[1]=s*r*l+i*a*o,t[2]=s*a*o+i*r*l,t[3]=s*a*l-i*r*o):n==="ZYX"?(t[0]=i*a*l-s*r*o,t[1]=s*r*l+i*a*o,t[2]=s*a*o-i*r*l,t[3]=s*a*l+i*r*o):n==="YZX"?(t[0]=i*a*l+s*r*o,t[1]=s*r*l+i*a*o,t[2]=s*a*o-i*r*l,t[3]=s*a*l-i*r*o):n==="XZY"&&(t[0]=i*a*l-s*r*o,t[1]=s*r*l-i*a*o,t[2]=s*a*o+i*r*l,t[3]=s*a*l+i*r*o),t}var J_=O_,j_=F_;var $_=H_;var eA=z_;var ah=class extends Array{constructor(e=0,n=0,i=0,s=1){super(e,n,i,s),this.onChange=()=>{},this._target=this;let r=["0","1","2","3"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return G_(this._target),this.onChange(),this}set(e,n,i,s){return e.length?this.copy(e):(j_(this._target,e,n,i,s),this.onChange(),this)}rotateX(e){return k_(this._target,this._target,e),this.onChange(),this}rotateY(e){return W_(this._target,this._target,e),this.onChange(),this}rotateZ(e){return X_(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return q_(this._target,e),this.onChange(),this}conjugate(e=this._target){return Q_(this._target,e),this.onChange(),this}copy(e){return J_(this._target,e),this.onChange(),this}normalize(e=this._target){return eA(this._target,e),this.onChange(),this}multiply(e,n){return n?qm(this._target,e,n):qm(this._target,this._target,e),this.onChange(),this}dot(e){return $_(this._target,e)}fromMatrix3(e){return Z_(this._target,e),this.onChange(),this}fromEuler(e,n){return K_(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return V_(this._target,e,n),this.onChange(),this}slerp(e,n){return Y_(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}};var zb=1e-6;function tA(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function nA(t,e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m){return t[0]=e,t[1]=n,t[2]=i,t[3]=s,t[4]=r,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t[9]=h,t[10]=d,t[11]=f,t[12]=p,t[13]=g,t[14]=_,t[15]=m,t}function iA(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function sA(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],v=n*o-i*a,x=n*l-s*a,y=n*c-r*a,T=i*l-s*o,b=i*c-r*o,w=s*c-r*l,U=h*_-d*g,S=h*m-f*g,M=h*u-p*g,D=d*m-f*_,O=d*u-p*_,G=f*u-p*m,z=v*G-x*O+y*D+T*M-b*S+w*U;return z?(z=1/z,t[0]=(o*G-l*O+c*D)*z,t[1]=(s*O-i*G-r*D)*z,t[2]=(_*w-m*b+u*T)*z,t[3]=(f*b-d*w-p*T)*z,t[4]=(l*M-a*G-c*S)*z,t[5]=(n*G-s*M+r*S)*z,t[6]=(m*y-g*w-u*x)*z,t[7]=(h*w-f*y+p*x)*z,t[8]=(a*O-o*M+c*U)*z,t[9]=(i*M-n*O-r*U)*z,t[10]=(g*b-_*y+u*v)*z,t[11]=(d*y-h*b-p*v)*z,t[12]=(o*S-a*D-l*U)*z,t[13]=(n*D-i*S+s*U)*z,t[14]=(_*x-g*T-m*v)*z,t[15]=(h*T-d*x+f*v)*z,t):null}function Qm(t){let e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],f=t[11],p=t[12],g=t[13],_=t[14],m=t[15],u=e*a-n*r,v=e*o-i*r,x=e*l-s*r,y=n*o-i*a,T=n*l-s*a,b=i*l-s*o,w=c*g-h*p,U=c*_-d*p,S=c*m-f*p,M=h*_-d*g,D=h*m-f*g,O=d*m-f*_;return u*O-v*D+x*M+y*S-T*U+b*w}function Zm(t,e,n){let i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=e[9],p=e[10],g=e[11],_=e[12],m=e[13],u=e[14],v=e[15],x=n[0],y=n[1],T=n[2],b=n[3];return t[0]=x*i+y*o+T*d+b*_,t[1]=x*s+y*l+T*f+b*m,t[2]=x*r+y*c+T*p+b*u,t[3]=x*a+y*h+T*g+b*v,x=n[4],y=n[5],T=n[6],b=n[7],t[4]=x*i+y*o+T*d+b*_,t[5]=x*s+y*l+T*f+b*m,t[6]=x*r+y*c+T*p+b*u,t[7]=x*a+y*h+T*g+b*v,x=n[8],y=n[9],T=n[10],b=n[11],t[8]=x*i+y*o+T*d+b*_,t[9]=x*s+y*l+T*f+b*m,t[10]=x*r+y*c+T*p+b*u,t[11]=x*a+y*h+T*g+b*v,x=n[12],y=n[13],T=n[14],b=n[15],t[12]=x*i+y*o+T*d+b*_,t[13]=x*s+y*l+T*f+b*m,t[14]=x*r+y*c+T*p+b*u,t[15]=x*a+y*h+T*g+b*v,t}function rA(t,e,n){let i=n[0],s=n[1],r=n[2],a,o,l,c,h,d,f,p,g,_,m,u;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],h=e[4],d=e[5],f=e[6],p=e[7],g=e[8],_=e[9],m=e[10],u=e[11],t[0]=a,t[1]=o,t[2]=l,t[3]=c,t[4]=h,t[5]=d,t[6]=f,t[7]=p,t[8]=g,t[9]=_,t[10]=m,t[11]=u,t[12]=a*i+h*s+g*r+e[12],t[13]=o*i+d*s+_*r+e[13],t[14]=l*i+f*s+m*r+e[14],t[15]=c*i+p*s+u*r+e[15]),t}function aA(t,e,n){let i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function oA(t,e,n,i){let s=i[0],r=i[1],a=i[2],o=Math.hypot(s,r,a),l,c,h,d,f,p,g,_,m,u,v,x,y,T,b,w,U,S,M,D,O,G,z,F;return Math.abs(o)<zb?null:(o=1/o,s*=o,r*=o,a*=o,l=Math.sin(n),c=Math.cos(n),h=1-c,d=e[0],f=e[1],p=e[2],g=e[3],_=e[4],m=e[5],u=e[6],v=e[7],x=e[8],y=e[9],T=e[10],b=e[11],w=s*s*h+c,U=r*s*h+a*l,S=a*s*h-r*l,M=s*r*h-a*l,D=r*r*h+c,O=a*r*h+s*l,G=s*a*h+r*l,z=r*a*h-s*l,F=a*a*h+c,t[0]=d*w+_*U+x*S,t[1]=f*w+m*U+y*S,t[2]=p*w+u*U+T*S,t[3]=g*w+v*U+b*S,t[4]=d*M+_*D+x*O,t[5]=f*M+m*D+y*O,t[6]=p*M+u*D+T*O,t[7]=g*M+v*D+b*O,t[8]=d*G+_*z+x*F,t[9]=f*G+m*z+y*F,t[10]=p*G+u*z+T*F,t[11]=g*G+v*z+b*F,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function lA(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Km(t,e){let n=e[0],i=e[1],s=e[2],r=e[4],a=e[5],o=e[6],l=e[8],c=e[9],h=e[10];return t[0]=Math.hypot(n,i,s),t[1]=Math.hypot(r,a,o),t[2]=Math.hypot(l,c,h),t}function cA(t){let e=t[0],n=t[1],i=t[2],s=t[4],r=t[5],a=t[6],o=t[8],l=t[9],c=t[10],h=e*e+n*n+i*i,d=s*s+r*r+a*a,f=o*o+l*l+c*c;return Math.sqrt(Math.max(h,d,f))}var Jm=(function(){let t=[1,1,1];return function(e,n){let i=t;Km(i,n);let s=1/i[0],r=1/i[1],a=1/i[2],o=n[0]*s,l=n[1]*r,c=n[2]*a,h=n[4]*s,d=n[5]*r,f=n[6]*a,p=n[8]*s,g=n[9]*r,_=n[10]*a,m=o+d+_,u=0;return m>0?(u=Math.sqrt(m+1)*2,e[3]=.25*u,e[0]=(f-g)/u,e[1]=(p-c)/u,e[2]=(l-h)/u):o>d&&o>_?(u=Math.sqrt(1+o-d-_)*2,e[3]=(f-g)/u,e[0]=.25*u,e[1]=(l+h)/u,e[2]=(p+c)/u):d>_?(u=Math.sqrt(1+d-o-_)*2,e[3]=(p-c)/u,e[0]=(l+h)/u,e[1]=.25*u,e[2]=(f+g)/u):(u=Math.sqrt(1+_-o-d)*2,e[3]=(l-h)/u,e[0]=(p+c)/u,e[1]=(f+g)/u,e[2]=.25*u),e}})();function uA(t,e,n,i){let s=Yr([t[0],t[1],t[2]]),r=Yr([t[4],t[5],t[6]]),a=Yr([t[8],t[9],t[10]]);Qm(t)<0&&(s=-s),n[0]=t[12],n[1]=t[13],n[2]=t[14];let l=t.slice(),c=1/s,h=1/r,d=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=h,l[5]*=h,l[6]*=h,l[8]*=d,l[9]*=d,l[10]*=d,Jm(e,l),i[0]=s,i[1]=r,i[2]=a}function hA(t,e,n,i){let s=t,r=e[0],a=e[1],o=e[2],l=e[3],c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,_=a*h,m=a*d,u=o*d,v=l*c,x=l*h,y=l*d,T=i[0],b=i[1],w=i[2];return s[0]=(1-(_+u))*T,s[1]=(p+y)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(f+u))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+x)*w,s[9]=(m-v)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=n[0],s[13]=n[1],s[14]=n[2],s[15]=1,s}function fA(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=n+n,o=i+i,l=s+s,c=n*a,h=i*a,d=i*o,f=s*a,p=s*o,g=s*l,_=r*a,m=r*o,u=r*l;return t[0]=1-d-g,t[1]=h+u,t[2]=f-m,t[3]=0,t[4]=h-u,t[5]=1-c-g,t[6]=p+_,t[7]=0,t[8]=f+m,t[9]=p-_,t[10]=1-c-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dA(t,e,n,i,s){let r=1/Math.tan(e/2),a=1/(i-s);return t[0]=r/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(s+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*s*i*a,t[15]=0,t}function pA(t,e,n,i,s,r,a){let o=1/(e-n),l=1/(i-s),c=1/(r-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(s+i)*l,t[14]=(a+r)*c,t[15]=1,t}function mA(t,e,n,i){let s=e[0],r=e[1],a=e[2],o=i[0],l=i[1],c=i[2],h=s-n[0],d=r-n[1],f=a-n[2],p=h*h+d*d+f*f;p===0?f=1:(p=1/Math.sqrt(p),h*=p,d*=p,f*=p);let g=l*f-c*d,_=c*h-o*f,m=o*d-l*h;return p=g*g+_*_+m*m,p===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,g=l*f-c*d,_=c*h-o*f,m=o*d-l*h,p=g*g+_*_+m*m),p=1/Math.sqrt(p),g*=p,_*=p,m*=p,t[0]=g,t[1]=_,t[2]=m,t[3]=0,t[4]=d*m-f*_,t[5]=f*g-h*m,t[6]=h*_-d*g,t[7]=0,t[8]=h,t[9]=d,t[10]=f,t[11]=0,t[12]=s,t[13]=r,t[14]=a,t[15]=1,t}function jm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function $m(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function gA(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}var ds=class extends Array{constructor(e=1,n=0,i=0,s=0,r=0,a=1,o=0,l=0,c=0,h=0,d=1,f=0,p=0,g=0,_=0,m=1){return super(e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m){return e.length?this.copy(e):(nA(this,e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m),this)}translate(e,n=this){return rA(this,n,e),this}rotate(e,n,i=this){return oA(this,i,e,n),this}scale(e,n=this){return aA(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?jm(this,e,n):jm(this,this,e),this}sub(e,n){return n?$m(this,e,n):$m(this,this,e),this}multiply(e,n){return e.length?n?Zm(this,e,n):Zm(this,this,e):gA(this,this,e),this}identity(){return iA(this),this}copy(e){return tA(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:s}={}){return dA(this,e,n,i,s),this}fromOrthogonal({left:e,right:n,bottom:i,top:s,near:r,far:a}){return pA(this,e,n,i,s,r,a),this}fromQuaternion(e){return fA(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return sA(this,e),this}compose(e,n,i){return hA(this,e,n,i),this}decompose(e,n,i){return uA(this,e,n,i),this}getRotation(e){return Jm(e,this),this}getTranslation(e){return lA(e,this),this}getScaling(e){return Km(e,this),this}getMaxScaleOnAxis(){return cA(this)}lookAt(e,n,i){return mA(this,e,n,i),this}determinant(){return Qm(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}};function vA(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}var xA=new ds,oh=class extends Array{constructor(e=0,n=e,i=e,s="YXZ"){super(e,n,i),this.order=s,this.onChange=()=>{},this._target=this;let r=["0","1","2"];return new Proxy(this,{set(a,o){let l=Reflect.set(...arguments);return l&&r.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return vA(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return xA.fromQuaternion(e),this._target.fromRotationMatrix(xA,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}};var lh=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new ds,this.worldMatrix=new ds,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Ln,this.quaternion=new ah,this.scale=new Ln(1),this.rotation=new oh,this.up=new Ln(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function yA(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function _A(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=n+n,o=i+i,l=s+s,c=n*a,h=i*a,d=i*o,f=s*a,p=s*o,g=s*l,_=r*a,m=r*o,u=r*l;return t[0]=1-d-g,t[3]=h-u,t[6]=f+m,t[1]=h+u,t[4]=1-c-g,t[7]=p-_,t[2]=f-m,t[5]=p+_,t[8]=1-c-d,t}function AA(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function SA(t,e,n,i,s,r,a,o,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=s,t[4]=r,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t}function MA(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function EA(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=-h*r+o*l,p=c*r-a*l,g=n*d+i*f+s*p;return g?(g=1/g,t[0]=d*g,t[1]=(-h*i+s*c)*g,t[2]=(o*i-s*a)*g,t[3]=f*g,t[4]=(h*n-s*l)*g,t[5]=(-o*n+s*r)*g,t[6]=p*g,t[7]=(-c*n+i*l)*g,t[8]=(a*n-i*r)*g,t):null}function eg(t,e,n){let i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=n[0],p=n[1],g=n[2],_=n[3],m=n[4],u=n[5],v=n[6],x=n[7],y=n[8];return t[0]=f*i+p*a+g*c,t[1]=f*s+p*o+g*h,t[2]=f*r+p*l+g*d,t[3]=_*i+m*a+u*c,t[4]=_*s+m*o+u*h,t[5]=_*r+m*l+u*d,t[6]=v*i+x*a+y*c,t[7]=v*s+x*o+y*h,t[8]=v*r+x*l+y*d,t}function TA(t,e,n){let i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=n[0],p=n[1];return t[0]=i,t[1]=s,t[2]=r,t[3]=a,t[4]=o,t[5]=l,t[6]=f*i+p*a+c,t[7]=f*s+p*o+h,t[8]=f*r+p*l+d,t}function bA(t,e,n){let i=e[0],s=e[1],r=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],d=e[8],f=Math.sin(n),p=Math.cos(n);return t[0]=p*i+f*a,t[1]=p*s+f*o,t[2]=p*r+f*l,t[3]=p*a-f*i,t[4]=p*o-f*s,t[5]=p*l-f*r,t[6]=c,t[7]=h,t[8]=d,t}function wA(t,e,n){let i=n[0],s=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function CA(t,e){let n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],v=n*o-i*a,x=n*l-s*a,y=n*c-r*a,T=i*l-s*o,b=i*c-r*o,w=s*c-r*l,U=h*_-d*g,S=h*m-f*g,M=h*u-p*g,D=d*m-f*_,O=d*u-p*_,G=f*u-p*m,z=v*G-x*O+y*D+T*M-b*S+w*U;return z?(z=1/z,t[0]=(o*G-l*O+c*D)*z,t[1]=(l*M-a*G-c*S)*z,t[2]=(a*O-o*M+c*U)*z,t[3]=(s*O-i*G-r*D)*z,t[4]=(n*G-s*M+r*S)*z,t[5]=(i*M-n*O-r*U)*z,t[6]=(_*w-m*b+u*T)*z,t[7]=(m*y-g*w-u*x)*z,t[8]=(g*b-_*y+u*v)*z,t):null}var ch=class extends Array{constructor(e=1,n=0,i=0,s=0,r=1,a=0,o=0,l=0,c=1){return super(e,n,i,s,r,a,o,l,c),this}set(e,n,i,s,r,a,o,l,c){return e.length?this.copy(e):(SA(this,e,n,i,s,r,a,o,l,c),this)}translate(e,n=this){return TA(this,n,e),this}rotate(e,n=this){return bA(this,n,e),this}scale(e,n=this){return wA(this,n,e),this}multiply(e,n){return n?eg(this,e,n):eg(this,this,e),this}identity(){return MA(this),this}copy(e){return AA(this,e),this}fromMatrix4(e){return yA(this,e),this}fromQuaternion(e){return _A(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return EA(this,e),this}getNormalMatrix(e){return CA(this,e),this}};var kb=0,Qr=class extends lh{constructor(e,{geometry:n,program:i,mode:s=e.TRIANGLES,frustumCulled:r=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=kb++,this.geometry=n,this.program=i,this.mode=s,this.frustumCulled=r,this.renderOrder=a,this.modelViewMatrix=new ds,this.normalMatrix=new ch,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};var RA=new Uint8Array(4);function DA(t){return(t&t-1)===0}var Wb=1,ps=class{constructor(e,{image:n,target:i=e.TEXTURE_2D,type:s=e.UNSIGNED_BYTE,format:r=e.RGBA,internalFormat:a=r,wrapS:o=e.CLAMP_TO_EDGE,wrapT:l=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:h=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:d=h?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:f=e.LINEAR,premultiplyAlpha:p=!1,unpackAlignment:g=4,flipY:_=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:u=0,width:v,height:x=v,length:y=1}={}){this.gl=e,this.id=Wb++,this.image=n,this.target=i,this.type=s,this.format=r,this.internalFormat=a,this.minFilter=d,this.magFilter=f,this.wrapS=o,this.wrapT=l,this.wrapR=c,this.generateMipmaps=h,this.premultiplyAlpha=p,this.unpackAlignment=g,this.flipY=_,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=u,this.width=v,this.height=x,this.length=y,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let n=!(this.image===this.store.image&&!this.needsUpdate);if((n||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!n){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!DA(this.image.width)||!DA(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,RA);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,RA);this.store.image=this.image}}};var mo=class{constructor(e,{width:n=e.canvas.width,height:i=e.canvas.height,target:s=e.FRAMEBUFFER,color:r=1,depth:a=!0,stencil:o=!1,depthTexture:l=!1,wrapS:c=e.CLAMP_TO_EDGE,wrapT:h=e.CLAMP_TO_EDGE,wrapR:d=e.CLAMP_TO_EDGE,minFilter:f=e.LINEAR,magFilter:p=f,type:g=e.UNSIGNED_BYTE,format:_=e.RGBA,internalFormat:m=_,unpackAlignment:u,premultiplyAlpha:v}={}){this.gl=e,this.width=n,this.height=i,this.depth=a,this.stencil=o,this.buffer=this.gl.createFramebuffer(),this.target=s,this.gl.renderer.bindFramebuffer(this),this.textures=[];let x=[];for(let y=0;y<r;y++)this.textures.push(new ps(e,{width:n,height:i,wrapS:c,wrapT:h,wrapR:d,minFilter:f,magFilter:p,type:g,format:_,internalFormat:m,unpackAlignment:u,premultiplyAlpha:v,flipY:!1,generateMipmaps:!1})),this.textures[y].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+y,this.gl.TEXTURE_2D,this.textures[y].texture,0),x.push(this.gl.COLOR_ATTACHMENT0+y);x.length>1&&this.gl.renderer.drawBuffers(x),this.texture=this.textures[0],l&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new ps(e,{width:n,height:i,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!o&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),o&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&o&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,n,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,n){if(!(this.width===e&&this.height===n)){this.width=e,this.height=n,this.gl.renderer.bindFramebuffer(this);for(let i=0;i<this.textures.length;i++)this.textures[i].width=e,this.textures[i].height=n,this.textures[i].needsUpdate=!0,this.textures[i].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+i,this.gl.TEXTURE_2D,this.textures[i].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=n,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,n)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,n)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,n))),this.gl.renderer.bindFramebuffer({target:this.target})}}};var ql=class extends rh{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}};var HA=Bi(Zr()),LA={silk:{pattern:"dot",wave:"silk",spacing:9,markSize:.95,depth:.95,light:0,shine:.8,contrast:1.2,speed:.35,scale:1,direction:20},ocean:{pattern:"dot",wave:"swell",spacing:10,markSize:.9,depth:.42,light:0,shine:1,contrast:1.2,speed:.5,scale:1,direction:100},pond:{pattern:"dot",wave:"ripple",spacing:10,markSize:.9,depth:.55,light:0,shine:1.2,contrast:1.2,speed:.5,scale:1,direction:35},lines:{pattern:"line",wave:"silk",spacing:12,markSize:.42,depth:.9,light:0,shine:.6,contrast:1.2,speed:.3,scale:1,direction:20},terminal:{pattern:"glyph",wave:"ripple",spacing:13,markSize:.95,depth:.75,light:0,shine:.9,contrast:1.4,speed:.3,scale:1.1,direction:200},mesh:{pattern:"plus",wave:"silk",spacing:14,markSize:.8,depth:.95,light:0,shine:1,contrast:1.45,speed:.4,scale:1.1,direction:325}},qb={dot:0,square:1,plus:2,line:3,glyph:4},Qb={silk:0,swell:1,ripple:2},Zb={none:0,edges:1,center:2,bottom:3,top:4},FA=".:-=+*#%@",Kb="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",Kr=128,PA=520,NA=8,Jb=60,jb=45e5,$b=2,En=(t,e,n)=>Math.min(Math.max(t,e),n),tg=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],OA=(t,e)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=t;let i=n.fillStyle;if(i.startsWith("#")){let r=parseInt(i.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255,1]}let s=i.match(/[\d.]+/g);return!s||s.length<3?e:[Number(s[0])/255,Number(s[1])/255,Number(s[2])/255,s[3]?Number(s[3]):1]}catch{return e}},e2=t=>{let e=Array.from(t&&t.length?t:FA),n=Math.ceil(Math.sqrt(e.length)),i=Math.ceil(e.length/n),s=document.createElement("canvas");s.width=n*Kr,s.height=i*Kr;let r=s.getContext("2d");return r?(r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font=`500 ${Math.round(Kr*.86)}px ${Kb}`,e.forEach((a,o)=>{let l=o%n*Kr+Kr/2,c=Math.floor(o/n)*Kr+Kr/2;r.fillText(a,l,c)}),{canvas:s,columns:n,lines:i,count:e.length}):null},ng=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,t2=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uSize;
uniform float uDpr;
uniform vec2 uOrigin;
uniform vec2 uPitch;
uniform int uWave;
uniform float uTime;
uniform float uUnit;
uniform vec2 uHeading;
uniform float uAmp;
uniform float uDepth;
uniform vec3 uLight;
uniform float uShine;
uniform float uContrast;
uniform float uInk;
uniform float uOpacity;
uniform int uFade;
uniform float uFadeSize;
uniform float uAppear;
uniform sampler2D tRipple;
uniform float uRipple;
out vec4 fragColor;

const float FOLDS = 5.5;

uvec3 scramble(uvec3 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * v.z;
  v.y += v.z * v.x;
  v.z += v.x * v.y;
  v ^= v >> 16u;
  v.x += v.y * v.z;
  v.y += v.z * v.x;
  v.z += v.x * v.y;
  return v;
}

vec3 lattice(vec3 corner) {
  uvec3 h = scramble(uvec3(ivec3(corner) + 4096));
  return vec3(h & 65535u) / 32767.5 - 1.0;
}

float gradientNoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = p - i;
  vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float n000 = dot(lattice(i), f);
  float n100 = dot(lattice(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0));
  float n010 = dot(lattice(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0));
  float n110 = dot(lattice(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0));
  float n001 = dot(lattice(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0));
  float n101 = dot(lattice(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0));
  float n011 = dot(lattice(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0));
  float n111 = dot(lattice(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0));
  return mix(
    mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
    mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
    u.z
  );
}

vec2 turn(vec2 v, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}

float surface(vec2 p, float t) {
  if (uWave == 0) {
    vec2 side = vec2(-uHeading.y, uHeading.x);
    float u = dot(p, uHeading);
    float v = dot(p, side);
    float bend = gradientNoise(vec3(v * 0.85, u * 0.3, t * 0.05)) * 1.7 + 0.4 * sin(v * 1.6 + t * 0.2);
    float phase = u * FOLDS + bend - t * 0.45;
    float swell = 0.6 + 0.4 * gradientNoise(vec3(u * 0.55 + 3.0, v * 0.45, t * 0.04));
    float fold = sin(phase) + 0.32 * sin(2.0 * phase + 1.3);
    float ripple = 0.16 * sin(u * FOLDS * 2.5 + bend * 1.9 - t * 0.9 + 2.1);
    return (fold + ripple) * swell;
  }
  if (uWave == 1) {
    float bend = gradientNoise(vec3(p * 0.6, t * 0.05)) * 0.6;
    float phase = dot(p, uHeading) * 15.0 + bend * 2.2 - t * 1.4;
    float swell = sin(phase) + 0.3 * sin(2.0 * phase - 0.8);
    float roll = 0.75 + 0.25 * gradientNoise(vec3(p * 0.9 + 11.0, t * 0.05));
    return 0.8 * swell * roll;
  }
  float r = length(p + uHeading * 1.2);
  float bend = gradientNoise(vec3(p * 1.2, t * 0.05)) * 0.1;
  return sin((r + bend) * 9.0 - t * 1.8) * (0.45 + 0.55 * exp(-(r - 0.6) * 0.8));
}

float heightAt(vec2 css) {
  float h = surface((css - 0.5 * uSize) / uUnit, uTime) * uAmp;
  if (uRipple > 0.0) h += texture(tRipple, css / uSize).r * uRipple;
  return h;
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy);
  vec2 center = uOrigin + (cell + 0.5) * uPitch;
  vec2 css = center / uDpr;
  vec2 uv = css / uSize;
  float e = max(uPitch.y / uDpr, 4.0);
  float h = heightAt(css);
  float hx = (heightAt(css + vec2(e, 0.0)) - heightAt(css - vec2(e, 0.0))) / (2.0 * e);
  float hy = (heightAt(css + vec2(0.0, e)) - heightAt(css - vec2(0.0, e))) / (2.0 * e);
  vec2 grad = vec2(hx, hy) * uUnit * uDepth * 0.4;
  vec3 n = normalize(vec3(-grad, 1.0));

  float diffuse = clamp(dot(n, uLight), 0.0, 1.0);
  vec3 halfway = normalize(uLight + vec3(0.0, 0.0, 1.0));
  float spec = pow(clamp(dot(n, halfway), 0.0, 1.0), 160.0) * uShine * 1.15;
  float hollow = 0.7 + 0.3 * clamp(h * 0.5 + 0.5, 0.0, 1.0);
  float tone = clamp(diffuse * hollow * 0.78 + spec, 0.0, 1.0);
  tone = clamp((tone - 0.42) * uContrast + 0.42, 0.0, 1.0);

  float level = uInk > 0.5 ? pow(clamp(1.0 - tone / 0.46, 0.0, 1.0), 2.4) * 0.72 : pow(tone, 2.2);
  float emphasis = uInk > 0.5 ? smoothstep(0.55, 0.95, level) : clamp(spec * 1.6, 0.0, 1.0);

  float fade = 1.0;
  vec2 c = uv * 2.0 - 1.0;
  if (uFade == 1) {
    fade = 1.0 - smoothstep(1.0 - uFadeSize, 1.18, length(c));
  } else if (uFade == 2) {
    fade = mix(0.05, 1.0, smoothstep(0.08, 0.08 + uFadeSize, length(c * vec2(1.0, 1.35))));
  } else if (uFade == 3) {
    fade = smoothstep(0.0, uFadeSize, uv.y);
  } else if (uFade == 4) {
    fade = smoothstep(0.0, uFadeSize, 1.0 - uv.y);
  }

  float reach = length(css - 0.5 * uSize) / max(0.5 * length(uSize), 1.0);
  float appear = smoothstep(reach - 0.05, reach + 0.3, uAppear * 1.35);

  float alpha = uOpacity * fade * appear * (0.22 + 0.78 * level);
  float lift = clamp(h * uDepth * 0.42, -0.48, 0.48);
  fragColor = vec4(level, alpha, emphasis, lift + 0.5);
}
`,n2=`#version 300 es
precision highp float;
uniform sampler2D tState;
uniform vec2 uTexel;
uniform vec2 uSize;
uniform vec2 uFrom;
uniform vec2 uTo;
uniform float uRadius;
uniform float uImpulse;
uniform float uDamping;
out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy * uTexel;
  vec2 state = texture(tState, uv).rg;
  float left = texture(tState, uv - vec2(uTexel.x, 0.0)).r;
  float right = texture(tState, uv + vec2(uTexel.x, 0.0)).r;
  float below = texture(tState, uv - vec2(0.0, uTexel.y)).r;
  float above = texture(tState, uv + vec2(0.0, uTexel.y)).r;
  float next = ((left + right + below + above) * 0.5 - state.g) * uDamping;
  vec2 p = uv * uSize;
  vec2 segment = uTo - uFrom;
  float along = clamp(dot(p - uFrom, segment) / max(dot(segment, segment), 1e-4), 0.0, 1.0);
  float d = length(p - uFrom - segment * along) / uRadius;
  next -= uImpulse * exp(-d * d * 2.0);
  fragColor = vec4(next, state.r, 0.0, 1.0);
}
`,i2=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D tField;
uniform sampler2D tAtlas;
uniform vec2 uOrigin;
uniform vec2 uPitch;
uniform vec2 uGrid;
uniform int uPattern;
uniform float uMarkSize;
uniform float uStroke;
uniform vec3 uColor;
uniform vec3 uAccent;
uniform vec4 uBackground;
uniform vec3 uAtlas;
out vec4 fragColor;

float box(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float coverage(vec2 local, float level) {
  float span = uPitch.y * uMarkSize;
  float area = max(sqrt(level), 0.14);
  if (uPattern == 0) {
    return clamp(0.5 - (length(local) - 0.5 * span * area), 0.0, 1.0);
  }
  if (uPattern == 1) {
    float extent = 0.5 * span * area;
    return clamp(0.5 - box(local, vec2(extent), extent * 0.3), 0.0, 1.0);
  }
  if (uPattern == 2) {
    float arm = 0.5 * span * mix(0.3, 1.0, level);
    float width = 0.5 * uStroke;
    return clamp(0.5 - min(box(local, vec2(arm, width), width), box(local, vec2(width, arm), width)), 0.0, 1.0);
  }
  if (uAtlas.z < 1.0) return 0.0;
  vec2 g = local / span + 0.5;
  if (g.x < 0.0 || g.y < 0.0 || g.x > 1.0 || g.y > 1.0) return 0.0;
  float index = min(floor(level * uAtlas.z), uAtlas.z - 1.0);
  vec2 tile = vec2(mod(index, uAtlas.x), floor(index / uAtlas.x));
  vec2 atlasUv = (tile + vec2(g.x, 1.0 - g.y)) / uAtlas.xy;
  vec2 texel = 1.0 / (span * uAtlas.xy);
  return textureGrad(tAtlas, atlasUv, vec2(texel.x, 0.0), vec2(0.0, texel.y)).a;
}

vec4 lineInk(vec2 rel) {
  float fx = rel.x / uPitch.x - 0.5;
  float c0 = clamp(floor(fx), 0.0, uGrid.x - 1.0);
  float c1 = min(c0 + 1.0, uGrid.x - 1.0);
  float t = clamp(fx - c0, 0.0, 1.0);
  float row = floor(rel.y / uPitch.y);
  vec4 ink = vec4(0.0);
  for (int k = -1; k <= 1; k++) {
    float cy = row + float(k);
    if (cy < 0.0 || cy >= uGrid.y) continue;
    vec4 a = texelFetch(tField, ivec2(int(c0), int(cy)), 0);
    vec4 b = texelFetch(tField, ivec2(int(c1), int(cy)), 0);
    vec4 f = mix(a, b, t);
    if (f.g < 0.002) continue;
    float y = (cy + 0.5 + f.a - 0.5) * uPitch.y;
    float slope = (b.a - a.a) * uPitch.y / uPitch.x;
    float thickness = max(uStroke, uPitch.y * uMarkSize * f.r);
    float d = abs(rel.y - y) / sqrt(1.0 + slope * slope) - 0.5 * thickness;
    float alpha = clamp(0.5 - d, 0.0, 1.0) * f.g;
    if (alpha > ink.a) ink = vec4(mix(uColor, uAccent, f.b) * alpha, alpha);
  }
  return ink;
}

void main() {
  vec2 rel = gl_FragCoord.xy - uOrigin;
  vec4 background = vec4(uBackground.rgb * uBackground.a, uBackground.a);
  vec4 ink = vec4(0.0);
  if (uPattern == 3) {
    ink = lineInk(rel);
  } else {
    float cx = floor(rel.x / uPitch.x);
    float row = floor(rel.y / uPitch.y);
    if (cx >= 0.0 && cx < uGrid.x) {
      for (int k = -1; k <= 1; k++) {
        float cy = row + float(k);
        if (cy < 0.0 || cy >= uGrid.y) continue;
        vec4 f = texelFetch(tField, ivec2(int(cx), int(cy)), 0);
        if (f.g < 0.002) continue;
        vec2 center = (vec2(cx, cy) + 0.5) * uPitch + vec2(0.0, (f.a - 0.5) * uPitch.y);
        float alpha = coverage(rel - center, f.r) * f.g;
        if (alpha > ink.a) ink = vec4(mix(uColor, uAccent, f.b) * alpha, alpha);
      }
    }
  }
  fragColor = ink + background * (1.0 - ink.a);
}
`,s2=({preset:t="silk",pattern:e,wave:n,spacing:i,markSize:s,depth:r,light:a,shine:o,contrast:l,speed:c,scale:h,direction:d,color:f="#ffffff",backgroundColor:p="#000000",opacity:g=1,fade:_="edges",fadeSize:m=.5,characters:u=FA,interactive:v=!0,cursorSize:x=50,cursorStrength:y=.6,intro:T=!0,paused:b=!1,className:w="",style:U})=>{let S=(0,ms.useRef)(null),M=(0,ms.useRef)(null),D=(0,ms.useRef)(null),O=LA[t]||LA.silk,G=(F,H)=>F??O[H],z=(0,ms.useMemo)(()=>({color:OA(f,[1,1,1,1]),background:OA(p,[0,0,0,1])}),[f,p]);return(0,ms.useEffect)(()=>{M.current={...z,pattern:G(e,"pattern"),wave:G(n,"wave"),spacing:G(i,"spacing"),markSize:G(s,"markSize"),depth:G(r,"depth"),light:G(a,"light"),shine:G(o,"shine"),contrast:G(l,"contrast"),speed:G(c,"speed"),scale:G(h,"scale"),direction:G(d,"direction"),opacity:g,fade:_,fadeSize:m,characters:u,interactive:v,cursorSize:x,cursorStrength:y,intro:T,paused:b},D.current?.()}),(0,ms.useEffect)(()=>{let F=S.current;if(!F)return;let H=new Yl({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1}),Y=H.gl;if(!H.isWebgl2){Y.getExtension("WEBGL_lose_context")?.loseContext();return}Y.clearColor(0,0,0,0);let k=Y.canvas;k.style.display="block",k.style.width="100%",k.style.height="100%",k.setAttribute("aria-hidden","true"),F.appendChild(k);let oe=new ql(Y),pe=new ps(Y),Ee=!!Y.getExtension("EXT_color_buffer_float"),Le=J=>{Y.deleteFramebuffer(J.buffer),Y.deleteTexture(J.texture.texture)},it=(J,j)=>new mo(Y,{width:J,height:j,depth:!1,minFilter:Y.NEAREST,magFilter:Y.NEAREST}),ct=(J,j)=>new mo(Y,{width:J,height:j,depth:!1,type:Y.HALF_FLOAT,format:Y.RGBA,internalFormat:Y.RGBA16F,minFilter:Y.LINEAR,magFilter:Y.LINEAR}),Fe=it(1,1),q=null,$=new ps(Y,{generateMipmaps:!0,minFilter:Y.LINEAR_MIPMAP_LINEAR,magFilter:Y.LINEAR,flipY:!1}),te={uSize:{value:[1,1]},uDpr:{value:1},uOrigin:{value:[0,0]},uPitch:{value:[1,1]},uWave:{value:0},uTime:{value:0},uUnit:{value:PA},uHeading:{value:[1,0]},uAmp:{value:0},uDepth:{value:.5},uLight:{value:[0,0,1]},uShine:{value:.8},uContrast:{value:1},uInk:{value:0},uOpacity:{value:1},uFade:{value:0},uFadeSize:{value:.5},uAppear:{value:0},tRipple:{value:pe},uRipple:{value:0}},be=new Qr(Y,{geometry:oe,program:new qr(Y,{vertex:ng,fragment:t2,uniforms:te,depthTest:!1,depthWrite:!1})}),ve={tState:{value:pe},uTexel:{value:[1,1]},uSize:{value:[1,1]},uFrom:{value:[0,0]},uTo:{value:[0,0]},uRadius:{value:40},uImpulse:{value:0},uDamping:{value:.975}},We=new Qr(Y,{geometry:oe,program:new qr(Y,{vertex:ng,fragment:n2,uniforms:ve,depthTest:!1,depthWrite:!1})}),at={tField:{value:Fe.texture},tAtlas:{value:$},uOrigin:{value:[0,0]},uPitch:{value:[1,1]},uGrid:{value:[1,1]},uPattern:{value:0},uMarkSize:{value:.9},uStroke:{value:2},uColor:{value:[1,1,1]},uAccent:{value:[1,1,1]},uBackground:{value:[0,0,0,1]},uAtlas:{value:[1,1,0]}},R=new Qr(Y,{geometry:oe,program:new qr(Y,{vertex:ng,fragment:i2,uniforms:at,depthTest:!1,depthWrite:!1})}),Je=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,Ce=1,le=1,ae=0,Xe=performance.now(),me=0,Ue=0,_t=!0,At=!0,C=!0,A=0,P=!1,Q=0,ee="",N={x:0,y:0,inside:!1,placed:!1,lastX:0,lastY:0,burst:0},Te=()=>{if(!Ee)return;let J=En(Math.ceil(Ce/NA),4,512),j=En(Math.ceil(le/NA),4,512);q&&q.width===J&&q.height===j||(q&&(Le(q.read),Le(q.write)),q={width:J,height:j,read:ct(J,j),write:ct(J,j)},P=!1)},ce=()=>{q&&([q.read,q.write].forEach(J=>{H.bindFramebuffer(J),Y.viewport(0,0,J.width,J.height),Y.clear(Y.COLOR_BUFFER_BIT)}),H.bindFramebuffer())},Ae=J=>{if(J.characters===ee)return;ee=J.characters;let j=e2(J.characters);j&&($.image=j.canvas,at.uAtlas.value=[j.columns,j.lines,j.count])},Se=()=>{Ce=Math.max(1,F.clientWidth),le=Math.max(1,F.clientHeight),H.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(jb/(Ce*le))),H.setSize(Ce,le),Te(),C=!0,we()},se=(J,j,Qe)=>{Q=Math.min(Q+Qe*Jb,4);let Ve=En(j.cursorStrength,0,1),Nn=Math.hypot(N.x-N.lastX,N.y-N.lastY),an=(N.inside?Math.min(Nn/14,1)*.35*Ve:0)+N.burst*Ve;for(N.burst=0,ve.uTexel.value=[1/J.width,1/J.height],ve.uSize.value=[Ce,le],ve.uFrom.value=[N.lastX,le-N.lastY],ve.uTo.value=[N.x,le-N.y],ve.uRadius.value=En(j.cursorSize,8,400);Q>=1;){Q-=1,ve.tState.value=J.read.texture,ve.uImpulse.value=an,H.render({scene:We,target:J.write,clear:!1});let ga=J.read;J.read=J.write,J.write=ga,an=0}N.lastX=N.x,N.lastY=N.y},de=J=>{if(ae=0,!At)return;let j=M.current,Qe=Math.min(.05,Math.max(1/240,(J-Xe)/1e3));if(Xe=J,!j)return;let Ve=!j.paused&&!Je&&j.speed!==0;Ve&&(me+=Qe*j.speed),Ue=j.intro&&!Je?Math.min(1,Ue+Qe/$b):1;let Nn=1-Math.pow(1-En(Ue/.75,0,1),3),an=En((Ue-.1)/.9,0,1),ga=an*an*(3-2*an),_i=j.interactive&&!Je&&!!q&&j.cursorStrength>0;_i&&N.inside&&!N.placed&&(N.lastX=N.x,N.lastY=N.y,N.placed=!0),_i&&(N.inside||N.burst>0)&&(A=J+5e3);let va=_i&&J<A;va&&q?(se(q,j,Qe),P=!0):P&&(ce(),P=!1);let _r=qb[j.pattern]??0;_r===4&&Ae(j);let xa=Y.canvas.width,Ar=Y.canvas.height,Sr=xa/Ce,ti=Math.max(4,Math.round(En(j.spacing,4,120)*Sr)),Mr=_r===3?Math.max(2,Math.round(ti/4)):ti,Er=Math.min(4096,Math.ceil(xa/Mr)+1),ya=Math.min(4096,Math.ceil(Ar/ti)+2),Mc=[Math.floor((xa-Er*Mr)/2),Math.floor((Ar-ya*ti)/2)];(Fe.width!==Er||Fe.height!==ya)&&(Le(Fe),Fe=it(Er,ya),at.tField.value=Fe.texture);let Ec=j.direction*Math.PI/180,Tc=(j.direction+180+En(j.light,-90,90))*Math.PI/180,Vo=j.background,ko=Vo[3]>.02?tg(j.color)<tg(Vo):tg(j.color)<.5;te.uSize.value=[Ce,le],te.uDpr.value=Sr,te.uOrigin.value=Mc,te.uPitch.value=[Mr,ti],te.uWave.value=Qb[j.wave]??0,te.uTime.value=me,te.uUnit.value=PA*En(j.scale,.2,5),te.uHeading.value=[Math.cos(Ec),Math.sin(Ec)],te.uAmp.value=ga,te.uDepth.value=En(j.depth,0,1.5),te.uLight.value=[Math.cos(Tc)*.78,Math.sin(Tc)*.78,.62],te.uShine.value=En(j.shine,0,2),te.uContrast.value=En(j.contrast,.3,3),te.uInk.value=ko?1:0,te.uOpacity.value=En(j.opacity,0,1),te.uFade.value=Zb[j.fade]??0,te.uFadeSize.value=En(j.fadeSize,.05,1),te.uAppear.value=Nn,te.tRipple.value=q&&P?q.read.texture:pe,te.uRipple.value=P?.32:0,H.render({scene:be,target:Fe}),at.uOrigin.value=Mc,at.uPitch.value=[Mr,ti],at.uGrid.value=[Er,ya],at.uPattern.value=_r,at.uMarkSize.value=En(j.markSize,.05,1),at.uStroke.value=_r===3?.9*Sr:Math.max(1.1*Sr,ti*.08);let E=ko?0:1,I=ko?.35:.55;at.uColor.value=j.color.slice(0,3),at.uAccent.value=j.color.slice(0,3).map(V=>V+(E-V)*I),at.uBackground.value=Vo,H.render({scene:R}),C=!1,_t&&(Ve||Ue<1||va||C)&&(ae=requestAnimationFrame(de))},we=()=>{ae||!_t||!At||(Xe=performance.now(),ae=requestAnimationFrame(de))},Me=J=>{let j=F.getBoundingClientRect(),Qe=J.clientX-j.left,Ve=J.clientY-j.top;return{x:Qe,y:Ve,inside:Qe>=0&&Ve>=0&&Qe<=j.width&&Ve<=j.height}},he=J=>{let j=Me(J);N.x=j.x,N.y=j.y,j.inside!==N.inside&&(N.placed=!1),N.inside=j.inside,j.inside&&we()},Ne=J=>{let j=Me(J);j.inside&&(N.x=j.x,N.y=j.y,N.inside||(N.lastX=j.x,N.lastY=j.y),N.burst=1.2,we())},B=()=>{N.inside=!1,N.placed=!1,we()},ie=J=>{J.relatedTarget||B()},ue=J=>{J.pointerType==="touch"&&B()},xe=()=>{document.hidden||we()};window.addEventListener("pointermove",he,{passive:!0}),window.addEventListener("pointerdown",Ne,{passive:!0}),window.addEventListener("pointerout",ie,{passive:!0}),window.addEventListener("pointerup",ue,{passive:!0}),window.addEventListener("blur",B),document.addEventListener("visibilitychange",xe);let ne=new ResizeObserver(Se);ne.observe(F);let K=new IntersectionObserver(([J])=>{_t=J.isIntersecting,we()});return K.observe(F),D.current=()=>{C=!0,we()},Se(),()=>{At=!1,_t=!1,cancelAnimationFrame(ae),ne.disconnect(),K.disconnect(),window.removeEventListener("pointermove",he),window.removeEventListener("pointerdown",Ne),window.removeEventListener("pointerout",ie),window.removeEventListener("pointerup",ue),window.removeEventListener("blur",B),document.removeEventListener("visibilitychange",xe),D.current=null,q&&(Le(q.read),Le(q.write)),Le(Fe),Y.deleteTexture($.texture),Y.getExtension("WEBGL_lose_context")?.loseContext(),k.parentNode&&k.parentNode.removeChild(k)}},[]),(0,HA.jsx)("div",{ref:S,className:`pattern-waves ${w}`.trim(),style:U})},zA=s2;var sS=0,Bg=1,rS=2;var Ig=1,aS=2,Wi=3,Ci=0,Xt=1,Tn=2,$n=0,ia=1,Lg=2,Pg=3,Ng=4,oS=5,or=100,lS=101,cS=102,uS=103,hS=104,fS=200,dS=201,pS=202,mS=203,Dh=204,Uh=205,gS=206,vS=207,xS=208,yS=209,_S=210,AS=211,SS=212,MS=213,ES=214,ef=0,Po=1,tf=2,sa=3,nf=4,sf=5,rf=6,af=7,Og=0,TS=1,bS=2,Es=0,wS=1,CS=2,RS=3,DS=4,US=5,BS=6,IS=7;var Fg=300,oa=301,la=302,of=303,lf=304,pc=306,Bh=1e3,ar=1001,Ih=1002,gi=1003,LS=1004;var mc=1005;var Wt=1006,cf=1007;var dr=1008;var rn=1009,zg=1010,Hg=1011,No=1012,uf=1013,pr=1014,xi=1015,Oo=1016,hf=1017,ff=1018,mr=1020,Gg=35902,Vg=35899,kg=1021,Wg=1022,yi=1023,Ro=1026,gr=1027,Xg=1028,df=1029,Yg=1030,pf=1031;var mf=1033,gc=33776,vc=33777,xc=33778,yc=33779,gf=35840,vf=35841,xf=35842,yf=35843,_f=36196,Af=37492,Sf=37496,Mf=37808,Ef=37809,Tf=37810,bf=37811,wf=37812,Cf=37813,Rf=37814,Df=37815,Uf=37816,Bf=37817,If=37818,Lf=37819,Pf=37820,Nf=37821,Of=36492,Ff=36494,zf=36495,Hf=36283,Gf=36284,Vf=36285,kf=36286;var $l=2300,Lh=2301,Rh=2302,bg=2400,wg=2401,Cg=2402;var Xi=3200,PS=3201;var NS=0,OS=1,ei="",Ct="srgb",Ri="srgb-linear",ec="linear",ft="srgb";var ta=7680;var Rg=519,FS=512,zS=513,HS=514,qg=515,GS=516,VS=517,kS=518,WS=519,Dg=35044;var _c="300 es",wi=2e3,tc=2001;var Jn=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ig=Math.PI/180,Ph=180/Math.PI;function Ac(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function r2(t,e){return(t%e+e)%e}function sg(t,e,n){return(1-n)*t+n*e}function Ql(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var He=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ss=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==p||h!==g){let m=1-o,u=l*f+c*p+h*g+d*_,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let T=Math.sqrt(x),b=Math.atan2(T,u*v);m=Math.sin(m*b)/T,o=Math.sin(o*b)/T}let y=o*v;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,d=d*m+_*y,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[n]=o*g+h*d+l*p-c*f,e[n+1]=l*g+h*f+c*d-o*p,e[n+2]=c*g+h*p+o*f-l*d,e[n+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(GA.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(GA.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rg.copy(this).projectOnVector(e),this.sub(rg)}reflect(e){return this.sub(rg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rg=new W,GA=new Ss,Ge=class t{constructor(e,n,i,s,r,a,o,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],u=s[6],v=s[1],x=s[4],y=s[7],T=s[2],b=s[5],w=s[8];return r[0]=a*_+o*v+l*T,r[3]=a*m+o*x+l*b,r[6]=a*u+o*y+l*w,r[1]=c*_+h*v+d*T,r[4]=c*m+h*x+d*b,r[7]=c*u+h*y+d*w,r[2]=f*_+p*v+g*T,r[5]=f*m+p*x+g*b,r[8]=f*u+p*y+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=n*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*n-s*l)*_,e[5]=(s*r-o*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ag.makeScale(e,n)),this}rotate(e){return this.premultiply(ag.makeRotation(-e)),this}translate(e,n){return this.premultiply(ag.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ag=new Ge;function Qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XS(){let t=nc("canvas");return t.style.display="block",t}var VA={};function Do(t){t in VA||(VA[t]=!0,console.warn(t))}function YS(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var kA=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),WA=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a2(){let t={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Co(s.r),s.g=Co(s.g),s.b=Co(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?ec:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ri]:{primaries:e,whitePoint:i,transfer:ec,toXYZ:kA,fromXYZ:WA,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:kA,fromXYZ:WA,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),t}var nt=a2();function As(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Co(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var go,Nh=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{go===void 0&&(go=nc("canvas")),go.width=e.width,go.height=e.height;let s=go.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=go}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=nc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=As(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(As(n[i]/255)*255):n[i]=As(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},o2=0,Uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o2++}),this.uuid=Ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(og(s[a].image)):r.push(og(s[a]))}else r=og(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function og(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Nh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l2=0,lg=new W,Zt=class t extends Jn{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ar,s=ar,r=Wt,a=dr,o=yi,l=rn,c=t.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=Ac(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lg).x}get height(){return this.source.getSize(lg).y}get depth(){return this.source.getSize(lg).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Fg;Zt.DEFAULT_ANISOTROPY=1;var Nt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(p+1)/2,T=(u+1)/2,b=(h+f)/4,w=(d+_)/4,U=(g+m)/4;return x>y&&x>T?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=b/i,r=w/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=U/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=w/r,s=U/r),this.set(i,s,r,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oh=class extends Jn{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);let s={width:e,height:n,depth:i.depth},r=new Zt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Uo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Oh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ic=class extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fh=class extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hh.copy(i.boundingBox)),hh.applyMatrix4(e.matrixWorld),this.union(hh)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zl),fh.subVectors(this.max,Zl),vo.subVectors(e.a,Zl),xo.subVectors(e.b,Zl),yo.subVectors(e.c,Zl),$s.subVectors(xo,vo),er.subVectors(yo,xo),Jr.subVectors(vo,yo);let n=[0,-$s.z,$s.y,0,-er.z,er.y,0,-Jr.z,Jr.y,$s.z,0,-$s.x,er.z,0,-er.x,Jr.z,0,-Jr.x,-$s.y,$s.x,0,-er.y,er.x,0,-Jr.y,Jr.x,0];return!cg(n,vo,xo,yo,fh)||(n=[1,0,0,0,1,0,0,0,1],!cg(n,vo,xo,yo,fh))?!1:(dh.crossVectors($s,er),n=[dh.x,dh.y,dh.z],cg(n,vo,xo,yo,fh))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gs=[new W,new W,new W,new W,new W,new W,new W,new W],Ei=new W,hh=new lr,vo=new W,xo=new W,yo=new W,$s=new W,er=new W,Jr=new W,Zl=new W,fh=new W,dh=new W,jr=new W;function cg(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){jr.fromArray(t,r);let o=s.x*Math.abs(jr.x)+s.y*Math.abs(jr.y)+s.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),h=i.dot(jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var c2=new lr,Kl=new W,ug=new W,Bo=class{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):c2.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kl.subVectors(e,this.center);let n=Kl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Kl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ug.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kl.copy(e.center).add(ug)),this.expandByPoint(Kl.copy(e.center).sub(ug))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vs=new W,hg=new W,ph=new W,tr=new W,fg=new W,mh=new W,dg=new W,zh=class{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=vs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,n),vs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){hg.copy(e).add(n).multiplyScalar(.5),ph.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(hg);let r=e.distanceTo(n)*.5,a=-this.direction.dot(ph),o=tr.dot(this.direction),l=-tr.dot(ph),c=tr.lengthSq(),h=Math.abs(1-a*a),d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hg).addScaledVector(ph,f),p}intersectSphere(e,n){vs.subVectors(e.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,n,i,s,r){fg.subVectors(n,e),mh.subVectors(i,e),dg.crossVectors(fg,mh);let a=this.direction.dot(dg),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,e);let l=o*this.direction.dot(mh.crossVectors(tr,mh));if(l<0)return null;let c=o*this.direction.dot(fg.cross(tr));if(c<0||l+c>a)return null;let h=-o*tr.dot(dg);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class t{constructor(e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m)}set(e,n,i,s,r,a,o,l,c,h,d,f,p,g,_,m){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/_o.setFromMatrixColumn(e,0).length(),r=1/_o.setFromMatrixColumn(e,1).length(),a=1/_o.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*d,g=o*h,_=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,g=c*h,_=c*d;n[0]=f+_*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-g,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,g=c*h,_=c*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*h,n[9]=_-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*d,g=o*h,_=o*d;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*h,n[4]=_-f*d,n[8]=g*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+g,n[10]=f-_*d}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+_,n[5]=a*h,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u2,e,h2)}lookAt(e,n,i){let s=this.elements;return Zn.subVectors(e,n),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),nr.crossVectors(i,Zn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),nr.crossVectors(i,Zn)),nr.normalize(),gh.crossVectors(Zn,nr),s[0]=nr.x,s[4]=gh.x,s[8]=Zn.x,s[1]=nr.y,s[5]=gh.y,s[9]=Zn.y,s[2]=nr.z,s[6]=gh.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],v=i[3],x=i[7],y=i[11],T=i[15],b=s[0],w=s[4],U=s[8],S=s[12],M=s[1],D=s[5],O=s[9],G=s[13],z=s[2],F=s[6],H=s[10],Y=s[14],k=s[3],oe=s[7],pe=s[11],Ee=s[15];return r[0]=a*b+o*M+l*z+c*k,r[4]=a*w+o*D+l*F+c*oe,r[8]=a*U+o*O+l*H+c*pe,r[12]=a*S+o*G+l*Y+c*Ee,r[1]=h*b+d*M+f*z+p*k,r[5]=h*w+d*D+f*F+p*oe,r[9]=h*U+d*O+f*H+p*pe,r[13]=h*S+d*G+f*Y+p*Ee,r[2]=g*b+_*M+m*z+u*k,r[6]=g*w+_*D+m*F+u*oe,r[10]=g*U+_*O+m*H+u*pe,r[14]=g*S+_*G+m*Y+u*Ee,r[3]=v*b+x*M+y*z+T*k,r[7]=v*w+x*D+y*F+T*oe,r[11]=v*U+x*O+y*H+T*pe,r[15]=v*S+x*G+y*Y+T*Ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+n*l*p-n*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],v=d*m*c-_*f*c+_*l*p-o*m*p-d*l*u+o*f*u,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,y=h*_*c-g*d*c+g*o*p-a*_*p-h*o*u+a*d*u,T=g*d*l-h*_*l-g*o*f+a*_*f+h*o*m-a*d*m,b=n*v+i*x+s*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=v*w,e[1]=(_*f*r-d*m*r-_*s*p+i*m*p+d*s*u-i*f*u)*w,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*u+i*l*u)*w,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*p-i*l*p)*w,e[4]=x*w,e[5]=(h*m*r-g*f*r+g*s*p-n*m*p-h*s*u+n*f*u)*w,e[6]=(g*l*r-a*m*r-g*s*c+n*m*c+a*s*u-n*l*u)*w,e[7]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*p+n*l*p)*w,e[8]=y*w,e[9]=(g*d*r-h*_*r-g*i*p+n*_*p+h*i*u-n*d*u)*w,e[10]=(a*_*r-g*o*r+g*i*c-n*_*c-a*i*u+n*o*u)*w,e[11]=(h*o*r-a*d*r-h*i*c+n*d*c+a*i*p-n*o*p)*w,e[12]=T*w,e[13]=(h*_*s-g*d*s+g*i*f-n*_*f-h*i*m+n*d*m)*w,e[14]=(g*o*s-a*_*s-g*i*l+n*_*l+a*i*m-n*o*m)*w,e[15]=(a*d*s-h*o*s+h*i*l-n*d*l-a*i*f+n*o*f)*w,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,_=a*h,m=a*d,u=o*d,v=l*c,x=l*h,y=l*d,T=i.x,b=i.y,w=i.z;return s[0]=(1-(_+u))*T,s[1]=(p+y)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(f+u))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+x)*w,s[9]=(m-v)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=_o.set(s[0],s[1],s[2]).length(),a=_o.set(s[4],s[5],s[6]).length(),o=_o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);let c=1/r,h=1/a,d=1/o;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,n.setFromRotationMatrix(Ti),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=wi,l=!1){let c=this.elements,h=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),p=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===wi)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===tc)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=wi,l=!1){let c=this.elements,h=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),p=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===wi)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===tc)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},_o=new W,Ti=new Qt,u2=new W(0,0,0),h2=new W(1,1,1),nr=new W,gh=new W,Zn=new W,XA=new Qt,YA=new Ss,Vi=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return XA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(XA,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return YA.setFromEuler(this),this.setFromQuaternion(YA,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var sc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f2=0,qA=new W,Ao=new Ss,xs=new Qt,vh=new W,Jl=new W,d2=new W,p2=new Ss,QA=new W(1,0,0),ZA=new W(0,1,0),KA=new W(0,0,1),JA={type:"added"},m2={type:"removed"},So={type:"childadded",child:null},pg={type:"childremoved",child:null},vi=class t extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=Ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new W,n=new Vi,i=new Ss,s=new W(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ge}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(QA,e)}rotateY(e){return this.rotateOnAxis(ZA,e)}rotateZ(e){return this.rotateOnAxis(KA,e)}translateOnAxis(e,n){return qA.copy(e).applyQuaternion(this.quaternion),this.position.add(qA.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(QA,e)}translateY(e){return this.translateOnAxis(ZA,e)}translateZ(e){return this.translateOnAxis(KA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vh.copy(e):vh.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Jl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Jl,vh,this.up):xs.lookAt(vh,Jl,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(xs),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(JA),So.child=e,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m2),pg.child=e,this.dispatchEvent(pg),pg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(JA),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,e,d2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jl,p2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};vi.DEFAULT_UP=new W(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bi=new W,ys=new W,mg=new W,_s=new W,Mo=new W,Eo=new W,jA=new W,gg=new W,vg=new W,xg=new W,yg=new Nt,_g=new Nt,Ag=new Nt,rr=class t{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),bi.subVectors(e,n),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){bi.subVectors(s,n),ys.subVectors(i,n),mg.subVectors(e,n);let a=bi.dot(bi),o=bi.dot(ys),l=bi.dot(mg),c=ys.dot(ys),h=ys.dot(mg),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_s.x),l.addScaledVector(a,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return yg.setScalar(0),_g.setScalar(0),Ag.setScalar(0),yg.fromBufferAttribute(e,n),_g.fromBufferAttribute(e,i),Ag.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yg,r.x),a.addScaledVector(_g,r.y),a.addScaledVector(Ag,r.z),a}static isFrontFacing(e,n,i,s){return bi.subVectors(i,n),ys.subVectors(e,n),bi.cross(ys).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),bi.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;Mo.subVectors(s,i),Eo.subVectors(r,i),gg.subVectors(e,i);let l=Mo.dot(gg),c=Eo.dot(gg);if(l<=0&&c<=0)return n.copy(i);vg.subVectors(e,s);let h=Mo.dot(vg),d=Eo.dot(vg);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Mo,a);xg.subVectors(e,r);let p=Mo.dot(xg),g=Eo.dot(xg);if(g>=0&&p<=g)return n.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Eo,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return jA.subVectors(r,s),o=(d-h)/(d-h+(p-g)),n.copy(s).addScaledVector(jA,o);let u=1/(m+_+f);return a=_*u,o=f*u,n.copy(i).addScaledVector(Mo,a).addScaledVector(Eo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},xh={h:0,s:0,l:0};function Sg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=nt.workingColorSpace){if(e=r2(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Sg(a,r,e+1/3),this.g=Sg(a,r,e),this.b=Sg(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,n=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ct){let i=qS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return nt.workingToColorSpace(pn.copy(this),e),Math.round($e(pn.r*255,0,255))*65536+Math.round($e(pn.g*255,0,255))*256+Math.round($e(pn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(pn.copy(this),n);let i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ct){nt.workingToColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,s=pn.b;return e!==Ct?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(xh);let i=sg(ir.h,xh.h,n),s=sg(ir.s,xh.s,n),r=sg(ir.l,xh.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new et;et.NAMES=qS;var g2=0,Di=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=Ac(),this.name="",this.type="Material",this.blending=ia,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Uh,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dh&&(i.blendSrc=this.blendSrc),this.blendDst!==Uh&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rc=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new W,yh=new He,v2=0,gn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dg,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yh.fromBufferAttribute(this,n),yh.applyMatrix3(e),this.setXY(n,yh.x,yh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ql(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ql(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ql(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ql(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ql(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dg&&(e.usage=this.usage),e}};var ac=class extends gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var oc=class extends gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Gi=class extends gn{constructor(e,n,i){super(new Float32Array(e),n,i)}},x2=0,mi=new Qt,Mg=new vi,To=new W,Kn=new lr,jl=new lr,sn=new W,ki=class t extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=Ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?oc:ac)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,i){return mi.makeTranslation(e,n,i),this.applyMatrix4(mi),this}scale(e,n,i){return mi.makeScale(e,n,i),this.applyMatrix4(mi),this}lookAt(e){return Mg.lookAt(e),Mg.updateMatrix(),this.applyMatrix4(Mg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gi(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];jl.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Kn.min,jl.min),Kn.expandByPoint(sn),sn.addVectors(Kn.max,jl.max),Kn.expandByPoint(sn)):(Kn.expandByPoint(jl.min),Kn.expandByPoint(jl.max))}Kn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(To.fromBufferAttribute(e,c),sn.add(To)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new W,l[U]=new W;let c=new W,h=new W,d=new W,f=new He,p=new He,g=new He,_=new W,m=new W;function u(U,S,M){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[U].add(_),o[S].add(_),o[M].add(_),l[U].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,S=v.length;U<S;++U){let M=v[U],D=M.start,O=M.count;for(let G=D,z=D+O;G<z;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let x=new W,y=new W,T=new W,b=new W;function w(U){T.fromBufferAttribute(s,U),b.copy(T);let S=o[U];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(b,S);let D=y.dot(l[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,D)}for(let U=0,S=v.length;U<S;++U){let M=v[U],D=M.start,O=M.count;for(let G=D,z=D+O;G<z;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,d=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new gn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$A=new Qt,$r=new zh,_h=new Bo,eS=new W,Ah=new W,Sh=new W,Mh=new W,Eg=new W,Eh=new W,tS=new W,Th=new W,vn=class extends vi{constructor(e=new ki,n=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Eh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Eg.fromBufferAttribute(d,e),a?Eh.addScaledVector(Eg,h):Eh.addScaledVector(Eg.sub(n),h))}n.add(Eh)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_h.copy(i.boundingSphere),_h.applyMatrix4(r),$r.copy(e.ray).recast(e.near),!(_h.containsPoint($r.origin)===!1&&($r.intersectSphere(_h,eS)===null||$r.origin.distanceToSquared(eS)>(e.far-e.near)**2))&&($A.copy(r).invert(),$r.copy(e.ray).applyMatrix4($A),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){let b=o.getX(y),w=o.getX(y+1),U=o.getX(y+2);s=bh(this,u,e,i,c,h,d,b,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let v=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=bh(this,a,e,i,c,h,d,v,x,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],u=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){let b=y,w=y+1,U=y+2;s=bh(this,u,e,i,c,h,d,b,w,U),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){let v=m,x=m+1,y=m+2;s=bh(this,a,e,i,c,h,d,v,x,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function y2(t,e,n,i,s,r,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ci,o),l===null)return null;Th.copy(o),Th.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Th);return c<n.near||c>n.far?null:{distance:c,point:Th.clone(),object:t}}function bh(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Ah),t.getVertexPosition(l,Sh),t.getVertexPosition(c,Mh);let h=y2(t,e,n,i,Ah,Sh,Mh,tS);if(h){let d=new W;rr.getBarycoord(tS,Ah,Sh,Mh,d),s&&(h.uv=rr.getInterpolatedAttribute(s,o,l,c,d,new He)),r&&(h.uv1=rr.getInterpolatedAttribute(r,o,l,c,d,new He)),a&&(h.normal=rr.getInterpolatedAttribute(a,o,l,c,d,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new W,materialIndex:0};rr.getNormal(Ah,Sh,Mh,f.normal),h.face=f,h.barycoord=d}return h}var Io=class t extends ki{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(h,3)),this.setAttribute("uv",new Gi(d,2));function g(_,m,u,v,x,y,T,b,w,U,S){let M=y/w,D=T/U,O=y/2,G=T/2,z=b/2,F=w+1,H=U+1,Y=0,k=0,oe=new W;for(let pe=0;pe<H;pe++){let Ee=pe*D-G;for(let Le=0;Le<F;Le++){let it=Le*M-O;oe[_]=it*v,oe[m]=Ee*x,oe[u]=z,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[u]=b>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(Le/w),d.push(1-pe/U),Y+=1}}for(let pe=0;pe<U;pe++)for(let Ee=0;Ee<w;Ee++){let Le=f+Ee+F*pe,it=f+Ee+F*(pe+1),ct=f+(Ee+1)+F*(pe+1),Fe=f+(Ee+1)+F*pe;l.push(Le,it,Fe),l.push(it,ct,Fe),k+=6}o.addGroup(p,k,S),p+=k,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ca(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function xn(t){let e={};for(let n=0;n<t.length;n++){let i=ca(t[n]);for(let s in i)e[s]=i[s]}return e}function _2(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zg(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var QS={clone:ca,merge:xn},A2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A2,this.fragmentShader=S2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=_2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},lc=class extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sr=new W,nS=new He,iS=new He,mn=class extends lc{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ig*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(ig*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,nS,iS),n.subVectors(iS,nS)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(ig*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},bo=-90,wo=1,Hh=class extends vi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(bo,wo,e,n);s.layers=this.layers,this.add(s);let r=new mn(bo,wo,e,n);r.layers=this.layers,this.add(r);let a=new mn(bo,wo,e,n);a.layers=this.layers,this.add(a);let o=new mn(bo,wo,e,n);o.layers=this.layers,this.add(o);let l=new mn(bo,wo,e,n);l.layers=this.layers,this.add(l);let c=new mn(bo,wo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cc=class extends Zt{constructor(e=[],n=oa,i,s,r,a,o,l,c,h){super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gh=class extends Kt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Io(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:$n});r.uniforms.tEquirect.value=n;let a=new vn(s,r),o=n.minFilter;return n.minFilter===dr&&(n.minFilter=Wt),new Hh(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},na=class extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}},M2={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var cr=class extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Tg=new W,E2=new W,T2=new Ge,Hi=class{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Tg.subVectors(i,n).cross(E2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Tg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||T2.getNormalMatrix(e),s=this.coplanarPoint(Tg).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ea=new Bo,b2=new He(.5,.5),wh=new W,uc=class{constructor(e=new Hi,n=new Hi,i=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],m=r[10],u=r[11],v=r[12],x=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,p-h,u-g,T-v).normalize(),s[1].setComponents(c+a,p+h,u+g,T+v).normalize(),s[2].setComponents(c+o,p+d,u+_,T+x).normalize(),s[3].setComponents(c-o,p-d,u-_,T-x).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,u-m,T-y).normalize();else if(s[4].setComponents(c-l,p-f,u-m,T-y).normalize(),n===wi)s[5].setComponents(c+l,p+f,u+m,T+y).normalize();else if(n===tc)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ea.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ea)}intersectsSprite(e){ea.center.set(0,0,0);let n=b2.distanceTo(e.center);return ea.radius=.7071067811865476+n,ea.applyMatrix4(e.matrixWorld),this.intersectsSphere(ea)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(wh.x=s.normal.x>0?e.max.x:e.min.x,wh.y=s.normal.y>0?e.max.y:e.min.y,wh.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wh)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends Zt{constructor(e,n,i=pr,s,r,a,o=gi,l=gi,c,h=Ro,d=1){if(h!==Ro&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:n,depth:d};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},hc=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ra=class t extends ki{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=n/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let v=u*f-a;for(let x=0;x<c;x++){let y=x*d-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){let x=v+c*u,y=v+c*(u+1),T=v+1+c*(u+1),b=v+1+c*u;p.push(x,y,b),p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vh=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kh=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ch(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function w2(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var aa=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends aa{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bg,endingEnd:bg}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wg:r=e,o=2*n-i;break;case Cg:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wg:a=e,l=2*i-n;break;case Cg:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),_=g*g,m=_*g,u=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let T=0;T!==o;++T)r[T]=u*a[h+T]+v*a[c+T]+x*a[l+T]+y*a[d+T];return r}},Xh=class extends aa{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Yh=class extends aa{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ch(n,this.TimeBufferType),this.values=Ch(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Ch(e.times,Array),values:Ch(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case $l:n=this.InterpolantFactoryMethodDiscrete;break;case Lh:n=this.InterpolantFactoryMethodLinear;break;case Rh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $l;case this.InterpolantFactoryMethodLinear:return Lh;case this.InterpolantFactoryMethodSmooth:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&w2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Rh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let _=n[d+g];if(_!==n[f+g]||_!==n[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Lh;var ur=class extends jn{constructor(e,n,i){super(e,n,i)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=$l;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};qh.prototype.ValueTypeName="color";var Qh=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};Qh.prototype.ValueTypeName="number";var Zh=class extends aa{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)Ss.slerpFlat(r,0,a,c-o,a,c,l);return r}},fc=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Zh(this.times,this.values,this.getValueSize(),e)}};fc.prototype.ValueTypeName="quaternion";fc.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends jn{constructor(e,n,i){super(e,n,i)}};hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=$l;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Kh=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};Kh.prototype.ValueTypeName="vector";var Jh=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ZS=new Jh,jh=class{constructor(e){this.manager=e!==void 0?e:ZS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jh.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends lc{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var $h=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},dc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};var Kg="\\[\\]\\.:\\/",C2=new RegExp("["+Kg+"]","g"),Jg="[^"+Kg+"]",R2="[^"+Kg.replace("\\.","")+"]",D2=/((?:WC+[\/:])*)/.source.replace("WC",Jg),U2=/(WCOD+)?/.source.replace("WCOD",R2),B2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jg),I2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jg),L2=new RegExp("^"+D2+U2+B2+I2+"$"),P2=["material","materials","bones","map"],Ug=class{constructor(e,n,i){let s=i||wt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},wt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C2,"")}static parseTrackName(e){let n=L2.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);P2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Ug;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hB=new Float32Array(1);var yt=class t{constructor(e){this.value=e}clone(){return new t(this.value.clone===void 0?this.value:this.value.clone())}};function jg(t,e,n,i){let s=N2(i);switch(n){case kg:return t*e;case Xg:return t*e/s.components*s.byteLength;case df:return t*e/s.components*s.byteLength;case Yg:return t*e*2/s.components*s.byteLength;case pf:return t*e*2/s.components*s.byteLength;case Wg:return t*e*3/s.components*s.byteLength;case yi:return t*e*4/s.components*s.byteLength;case mf:return t*e*4/s.components*s.byteLength;case gc:case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(t,16)*Math.max(e,8)/4;case gf:case xf:return Math.max(t,8)*Math.max(e,8)/2;case _f:case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Of:case Ff:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vf:case kf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function N2(t){switch(t){case rn:case zg:return{byteLength:1,components:1};case No:case Hg:case Oo:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case pr:case uf:case xi:return{byteLength:4,components:1};case Gg:case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yM(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function O2(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let _=d[p];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var F2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,X2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ow=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",mw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ew=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ow=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ww=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$w=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_C=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:F2,alphahash_pars_fragment:z2,alphamap_fragment:H2,alphamap_pars_fragment:G2,alphatest_fragment:V2,alphatest_pars_fragment:k2,aomap_fragment:W2,aomap_pars_fragment:X2,batching_pars_vertex:Y2,batching_vertex:q2,begin_vertex:Q2,beginnormal_vertex:Z2,bsdfs:K2,iridescence_fragment:J2,bumpmap_pars_fragment:j2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:ew,clipping_planes_pars_vertex:tw,clipping_planes_vertex:nw,color_fragment:iw,color_pars_fragment:sw,color_pars_vertex:rw,color_vertex:aw,common:ow,cube_uv_reflection_fragment:lw,defaultnormal_vertex:cw,displacementmap_pars_vertex:uw,displacementmap_vertex:hw,emissivemap_fragment:fw,emissivemap_pars_fragment:dw,colorspace_fragment:pw,colorspace_pars_fragment:mw,envmap_fragment:gw,envmap_common_pars_fragment:vw,envmap_pars_fragment:xw,envmap_pars_vertex:yw,envmap_physical_pars_fragment:Dw,envmap_vertex:_w,fog_vertex:Aw,fog_pars_vertex:Sw,fog_fragment:Mw,fog_pars_fragment:Ew,gradientmap_pars_fragment:Tw,lightmap_pars_fragment:bw,lights_lambert_fragment:ww,lights_lambert_pars_fragment:Cw,lights_pars_begin:Rw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Iw,lights_phong_pars_fragment:Lw,lights_physical_fragment:Pw,lights_physical_pars_fragment:Nw,lights_fragment_begin:Ow,lights_fragment_maps:Fw,lights_fragment_end:zw,logdepthbuf_fragment:Hw,logdepthbuf_pars_fragment:Gw,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:kw,map_fragment:Ww,map_pars_fragment:Xw,map_particle_fragment:Yw,map_particle_pars_fragment:qw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:Zw,morphinstance_vertex:Kw,morphcolor_vertex:Jw,morphnormal_vertex:jw,morphtarget_pars_vertex:$w,morphtarget_vertex:eC,normal_fragment_begin:tC,normal_fragment_maps:nC,normal_pars_fragment:iC,normal_pars_vertex:sC,normal_vertex:rC,normalmap_pars_fragment:aC,clearcoat_normal_fragment_begin:oC,clearcoat_normal_fragment_maps:lC,clearcoat_pars_fragment:cC,iridescence_pars_fragment:uC,opaque_fragment:hC,packing:fC,premultiplied_alpha_fragment:dC,project_vertex:pC,dithering_fragment:mC,dithering_pars_fragment:gC,roughnessmap_fragment:vC,roughnessmap_pars_fragment:xC,shadowmap_pars_fragment:yC,shadowmap_pars_vertex:_C,shadowmap_vertex:AC,shadowmask_pars_fragment:SC,skinbase_vertex:MC,skinning_pars_vertex:EC,skinning_vertex:TC,skinnormal_vertex:bC,specularmap_fragment:wC,specularmap_pars_fragment:CC,tonemapping_fragment:RC,tonemapping_pars_fragment:DC,transmission_fragment:UC,transmission_pars_fragment:BC,uv_pars_fragment:IC,uv_pars_vertex:LC,uv_vertex:PC,worldpos_vertex:NC,background_vert:OC,background_frag:FC,backgroundCube_vert:zC,backgroundCube_frag:HC,cube_vert:GC,cube_frag:VC,depth_vert:kC,depth_frag:WC,distanceRGBA_vert:XC,distanceRGBA_frag:YC,equirect_vert:qC,equirect_frag:QC,linedashed_vert:ZC,linedashed_frag:KC,meshbasic_vert:JC,meshbasic_frag:jC,meshlambert_vert:$C,meshlambert_frag:eR,meshmatcap_vert:tR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:sR,meshphong_vert:rR,meshphong_frag:aR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:cR,meshtoon_frag:uR,points_vert:hR,points_frag:fR,shadow_vert:dR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},fe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yi={basic:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:xn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:xn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:xn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:xn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:xn([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:xn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:xn([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:xn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:xn([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:xn([fe.common,fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:xn([fe.lights,fe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yi.physical={uniforms:xn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Wf={r:0,b:0,g:0},ua=new Vi,vR=new Qt;function xR(t,e,n,i,s,r,a){let o=new et(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function _(x){let y=!1,T=g(x);T===null?u(o,l):T&&T.isColor&&(u(T,1),y=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){let T=g(y);T&&(T.isCubeTexture||T.mapping===pc)?(h===void 0&&(h=new vn(new Io(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:ca(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ua.copy(y.backgroundRotation),ua.x*=-1,ua.y*=-1,ua.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ua.y*=-1,ua.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vR.makeRotationFromEuler(ua)),h.material.toneMapped=nt.getTransfer(T.colorSpace)!==ft,(d!==T||f!==T.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new vn(new ra(2,2),new Jt({name:"BackgroundMaterial",uniforms:ca(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(T.colorSpace)!==ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Wf,Zg(t)),i.buffers.color.setClear(Wf.r,Wf.g,Wf.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:_,addToRenderList:m,dispose:v}}function yR(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(M,D,O,G,z){let F=!1,H=d(G,O,D);r!==H&&(r=H,c(r.object)),F=p(M,G,O,z),F&&g(M,G,O,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(M,D,O,G),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function h(M){return t.deleteVertexArray(M)}function d(M,D,O){let G=O.wireframe===!0,z=i[M.id];z===void 0&&(z={},i[M.id]=z);let F=z[D.id];F===void 0&&(F={},z[D.id]=F);let H=F[G];return H===void 0&&(H=f(l()),F[G]=H),H}function f(M){let D=[],O=[],G=[];for(let z=0;z<n;z++)D[z]=0,O[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,D,O,G){let z=r.attributes,F=D.attributes,H=0,Y=O.getAttributes();for(let k in Y)if(Y[k].location>=0){let pe=z[k],Ee=F[k];if(Ee===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),pe===void 0||pe.attribute!==Ee||Ee&&pe.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==G}function g(M,D,O,G){let z={},F=D.attributes,H=0,Y=O.getAttributes();for(let k in Y)if(Y[k].location>=0){let pe=F[k];pe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let Ee={};Ee.attribute=pe,pe&&pe.data&&(Ee.data=pe.data),z[k]=Ee,H++}r.attributes=z,r.attributesNum=H,r.index=G}function _(){let M=r.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){let O=r.newAttributes,G=r.enabledAttributes,z=r.attributeDivisors;O[M]=1,G[M]===0&&(t.enableVertexAttribArray(M),G[M]=1),z[M]!==D&&(t.vertexAttribDivisor(M,D),z[M]=D)}function v(){let M=r.newAttributes,D=r.enabledAttributes;for(let O=0,G=D.length;O<G;O++)D[O]!==M[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function x(M,D,O,G,z,F,H){H===!0?t.vertexAttribIPointer(M,D,O,z,F):t.vertexAttribPointer(M,D,O,G,z,F)}function y(M,D,O,G){_();let z=G.attributes,F=O.getAttributes(),H=D.defaultAttributeValues;for(let Y in F){let k=F[Y];if(k.location>=0){let oe=z[Y];if(oe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let pe=oe.normalized,Ee=oe.itemSize,Le=e.get(oe);if(Le===void 0)continue;let it=Le.buffer,ct=Le.type,Fe=Le.bytesPerElement,q=ct===t.INT||ct===t.UNSIGNED_INT||oe.gpuType===uf;if(oe.isInterleavedBufferAttribute){let $=oe.data,te=$.stride,be=oe.offset;if($.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)u(k.location+ve,$.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ve=0;ve<k.locationSize;ve++)m(k.location+ve);t.bindBuffer(t.ARRAY_BUFFER,it);for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve,Ee/k.locationSize,ct,pe,te*Fe,(be+Ee/k.locationSize*ve)*Fe,q)}else{if(oe.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)u(k.location+$,oe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);t.bindBuffer(t.ARRAY_BUFFER,it);for(let $=0;$<k.locationSize;$++)x(k.location+$,Ee/k.locationSize,ct,pe,Ee*Fe,Ee/k.locationSize*$*Fe,q)}}else if(H!==void 0){let pe=H[Y];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(k.location,pe);break;case 3:t.vertexAttrib3fv(k.location,pe);break;case 4:t.vertexAttrib4fv(k.location,pe);break;default:t.vertexAttrib1fv(k.location,pe)}}}}v()}function T(){U();for(let M in i){let D=i[M];for(let O in D){let G=D[O];for(let z in G)h(G[z].object),delete G[z];delete D[O]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;let D=i[M.id];for(let O in D){let G=D[O];for(let z in G)h(G[z].object),delete G[z];delete D[O]}delete i[M.id]}function w(M){for(let D in i){let O=i[D];if(O[M.id]===void 0)continue;let G=O[M.id];for(let z in G)h(G[z].object),delete G[z];delete O[M.id]}}function U(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function _R(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function AR(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==yi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let U=w===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==rn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xi&&!U)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:T,maxSamples:b}}function SR(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Hi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,x=v*4,y=u.clippingState||null;l.value=y,y=h(g,f,x,p);for(let T=0;T!==x;++T)y[T]=n[T];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let u=p+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==_;++x,y+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function MR(t){let e=new WeakMap;function n(a,o){return o===of?a.mapping=oa:o===lf&&(a.mapping=la),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===of||o===lf)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gh(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var zo=4,KS=[.125,.215,.35,.446,.526,.582],da=20,$g=new fr,JS=new et,e0=null,t0=0,n0=0,i0=!1,fa=(1+Math.sqrt(5))/2,Fo=1/fa,jS=[new W(-fa,Fo,0),new W(fa,Fo,0),new W(-Fo,0,fa),new W(Fo,0,fa),new W(0,fa,-Fo),new W(0,fa,Fo),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],ER=new W,qf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=ER}=r;e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(e0,t0,n0),this._renderer.xr.enabled=i0,e.scissorTest=!1,Xf(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),e0=this._renderer.getRenderTarget(),t0=this._renderer.getActiveCubeFace(),n0=this._renderer.getActiveMipmapLevel(),i0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Oo,format:yi,colorSpace:Ri,depthBuffer:!1},s=$S(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$S(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TR(r)),this._blurMaterial=bR(r,e,n)}return s}_compileMaterial(e){let n=new vn(this._lodPlanes[0],e);this._renderer.compile(n,$g)}_sceneToCubeUV(e,n,i,s,r){let l=new mn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(JS),d.toneMapping=Es,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new rc({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new vn(new Io,_),u=!1,v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,u=!0):(_.color.copy(JS),u=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let T=this._cubeSize;Xf(s,y*T,x>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===oa||e.mapping===la;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eM());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Xf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,$g)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jS[(s-r-1)%jS.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new vn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*da-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):da;m>da&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${da}`);let u=[],v=0;for(let w=0;w<da;++w){let U=w/_,S=Math.exp(-U*U/2);u.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let y=this._sizeLods[s],T=3*y*(s>x-zo?s-x+zo:0),b=4*(this._cubeSize-y);Xf(n,T,b,3*y,2*y),l.setRenderTarget(n),l.render(d,$g)}};function TR(t){let e=[],n=[],i=[],s=t,r=t-zo+1+KS.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>t-zo?l=KS[a-t+zo-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let b=0;b<p;b++){let w=b%3*2/3-1,U=b>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(S,_*g*b),x.set(f,m*g*b);let M=[b,b,b,b,b,b];y.set(M,u*g*b)}let T=new ki;T.setAttribute("position",new gn(v,_)),T.setAttribute("uv",new gn(x,m)),T.setAttribute("faceIndex",new gn(y,u)),e.push(T),s>zo&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $S(t,e,n){let i=new Kt(t,e,n);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xf(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function bR(t,e,n){let i=new Float32Array(da),s=new W(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:da,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:d0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function eM(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:d0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function tM(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:d0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function d0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wR(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===of||l===lf,h=l===oa||l===la;if(c||h){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new qf(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new qf(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function CR(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Do("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function RR(t,e,n,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,g=d.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){let T=v[x+0],b=v[x+1],w=v[x+2];f.push(T,b,b,w,w,T)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){let T=x+0,b=x+1,w=x+2;f.push(T,b,b,w,w,T)}}else return;let m=new(Qg(f)?oc:ac)(f,1);m.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function DR(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,r,f*a),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,r,f*a,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v]*_[v];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function UR(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function BR(t,e,n){let i=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*T*4*d),w=new ic(b,y,T,d);w.type=xi,w.needsUpdate=!0;let U=x*4;for(let M=0;M<d;M++){let D=m[M],O=u[M],G=v[M],z=y*T*4*M;for(let F=0;F<D.count;F++){let H=F*U;p===!0&&(s.fromBufferAttribute(D,F),b[z+H+0]=s.x,b[z+H+1]=s.y,b[z+H+2]=s.z,b[z+H+3]=0),g===!0&&(s.fromBufferAttribute(O,F),b[z+H+4]=s.x,b[z+H+5]=s.y,b[z+H+6]=s.z,b[z+H+7]=0),_===!0&&(s.fromBufferAttribute(G,F),b[z+H+8]=s.x,b[z+H+9]=s.y,b[z+H+10]=s.z,b[z+H+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:w,size:new He(y,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function IR(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var _M=new Zt,nM=new Ms(1,1),AM=new ic,SM=new Fh,MM=new cc,iM=[],sM=[],rM=new Float32Array(16),aM=new Float32Array(9),oM=new Float32Array(4);function Go(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=iM[s];if(r===void 0&&(r=new Float32Array(s),iM[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kf(t,e){let n=sM[e];n===void 0&&(n=new Int32Array(e),sM[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function NR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function OR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function FR(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;oM.set(i),t.uniformMatrix2fv(this.addr,!1,oM),$t(n,i)}}function zR(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;aM.set(i),t.uniformMatrix3fv(this.addr,!1,aM),$t(n,i)}}function HR(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(jt(n,i))return;rM.set(i),t.uniformMatrix4fv(this.addr,!1,rM),$t(n,i)}}function GR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function kR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function WR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function XR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function qR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function QR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function ZR(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(nM.compareFunction=qg,r=nM):r=_M,n.setTexture2D(e||r,s)}function KR(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||SM,s)}function JR(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||MM,s)}function jR(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||AM,s)}function $R(t){switch(t){case 5126:return LR;case 35664:return PR;case 35665:return NR;case 35666:return OR;case 35674:return FR;case 35675:return zR;case 35676:return HR;case 5124:case 35670:return GR;case 35667:case 35671:return VR;case 35668:case 35672:return kR;case 35669:case 35673:return WR;case 5125:return XR;case 36294:return YR;case 36295:return qR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return KR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return jR}}function eD(t,e){t.uniform1fv(this.addr,e)}function tD(t,e){let n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function nD(t,e){let n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function iD(t,e){let n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function sD(t,e){let n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rD(t,e){let n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function aD(t,e){let n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oD(t,e){t.uniform1iv(this.addr,e)}function lD(t,e){t.uniform2iv(this.addr,e)}function cD(t,e){t.uniform3iv(this.addr,e)}function uD(t,e){t.uniform4iv(this.addr,e)}function hD(t,e){t.uniform1uiv(this.addr,e)}function fD(t,e){t.uniform2uiv(this.addr,e)}function dD(t,e){t.uniform3uiv(this.addr,e)}function pD(t,e){t.uniform4uiv(this.addr,e)}function mD(t,e,n){let i=this.cache,s=e.length,r=Kf(n,s);jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||_M,r[a])}function gD(t,e,n){let i=this.cache,s=e.length,r=Kf(n,s);jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||SM,r[a])}function vD(t,e,n){let i=this.cache,s=e.length,r=Kf(n,s);jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||MM,r[a])}function xD(t,e,n){let i=this.cache,s=e.length,r=Kf(n,s);jt(i,r)||(t.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||AM,r[a])}function yD(t){switch(t){case 5126:return eD;case 35664:return tD;case 35665:return nD;case 35666:return iD;case 35674:return sD;case 35675:return rD;case 35676:return aD;case 5124:case 35670:return oD;case 35667:case 35671:return lD;case 35668:case 35672:return cD;case 35669:case 35673:return uD;case 5125:return hD;case 36294:return fD;case 36295:return dD;case 36296:return pD;case 35678:case 36198:case 36298:case 36306:case 35682:return mD;case 35679:case 36299:case 36307:return gD;case 35680:case 36300:case 36308:case 36293:return vD;case 36289:case 36303:case 36311:case 36292:return xD}}var r0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$R(n.type)}},a0=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yD(n.type)}},o0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},s0=/(\w+)(\])?(\[|\.)?/g;function lM(t,e){t.seq.push(e),t.map[e.id]=e}function _D(t,e,n){let i=t.name,s=i.length;for(s0.lastIndex=0;;){let r=s0.exec(i),a=s0.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lM(n,c===void 0?new r0(o,t,e):new a0(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new o0(o),lM(n,d)),n=d}}}var Ho=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);_D(r,a,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function cM(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var AD=37297,SD=0;function MD(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var uM=new Ge;function ED(t){nt._getMatrix(uM,nt.workingColorSpace,t);let e=`mat3( ${uM.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case ec:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hM(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+MD(t.getShaderSource(e),o)}else return r}function TD(t,e){let n=ED(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bD(t,e){let n;switch(e){case wS:n="Linear";break;case CS:n="Reinhard";break;case RS:n="Cineon";break;case DS:n="ACESFilmic";break;case BS:n="AgX";break;case IS:n="Neutral";break;case US:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Yf=new W;function wD(){nt.getLuminanceCoefficients(Yf);let t=Yf.x.toFixed(4),e=Yf.y.toFixed(4),n=Yf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sc).join(`
`)}function RD(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DD(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Sc(t){return t!==""}function fM(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dM(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var UD=/^[ \t]*#include +<([\w\d./]+)>/gm;function l0(t){return t.replace(UD,ID)}var BD=new Map;function ID(t,e){let n=ke[e];if(n===void 0){let i=BD.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return l0(n)}var LD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pM(t){return t.replace(LD,PD)}function PD(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ND(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function OD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oa:case la:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case la:e="ENVMAP_MODE_REFRACTION";break}return e}function zD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Og:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function HD(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function GD(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=ND(n),c=OD(n),h=FD(n),d=zD(n),f=HD(n),p=CD(n),g=RD(r),_=s.createProgram(),m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Sc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Sc).join(`
`),u.length>0&&(u+=`
`)):(m=[mM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sc).join(`
`),u=[mM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Es?"#define TONE_MAPPING":"",n.toneMapping!==Es?ke.tonemapping_pars_fragment:"",n.toneMapping!==Es?bD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,TD("linearToOutputTexel",n.outputColorSpace),wD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sc).join(`
`)),a=l0(a),a=fM(a,n),a=dM(a,n),o=l0(o),o=fM(o,n),o=dM(o,n),a=pM(a),o=pM(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=v+m+a,y=v+u+o,T=cM(s,s.VERTEX_SHADER,x),b=cM(s,s.FRAGMENT_SHADER,y);s.attachShader(_,T),s.attachShader(_,b),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(t.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(b)||"",F=O.trim(),H=G.trim(),Y=z.trim(),k=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,T,b);else{let pe=hM(s,T,"vertex"),Ee=hM(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+pe+`
`+Ee)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||Y==="")&&(oe=!1);oe&&(D.diagnostics={runnable:k,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(T),s.deleteShader(b),U=new Ho(s,_),S=DD(s,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,AD)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}var VD=0,c0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new u0(e),n.set(e,i)),i}},u0=class{constructor(e){this.id=VD++,this.code=e,this.usedTimes=0}};function kD(t,e,n,i,s,r,a){let o=new sc,l=new c0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,O,G){let z=O.fog,F=G.geometry,H=S.isMeshStandardMaterial?O.environment:null,Y=(S.isMeshStandardMaterial?n:e).get(S.envMap||H),k=Y&&Y.mapping===pc?Y.image.height:null,oe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let pe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=pe!==void 0?pe.length:0,Le=0;F.morphAttributes.position!==void 0&&(Le=1),F.morphAttributes.normal!==void 0&&(Le=2),F.morphAttributes.color!==void 0&&(Le=3);let it,ct,Fe,q;if(oe){let Ve=Yi[oe];it=Ve.vertexShader,ct=Ve.fragmentShader}else it=S.vertexShader,ct=S.fragmentShader,l.update(S),Fe=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);let $=t.getRenderTarget(),te=t.state.buffers.depth.getReversed(),be=G.isInstancedMesh===!0,ve=G.isBatchedMesh===!0,We=!!S.map,at=!!S.matcap,R=!!Y,Je=!!S.aoMap,Ce=!!S.lightMap,le=!!S.bumpMap,ae=!!S.normalMap,Xe=!!S.displacementMap,me=!!S.emissiveMap,Ue=!!S.metalnessMap,_t=!!S.roughnessMap,At=S.anisotropy>0,C=S.clearcoat>0,A=S.dispersion>0,P=S.iridescence>0,Q=S.sheen>0,ee=S.transmission>0,N=At&&!!S.anisotropyMap,Te=C&&!!S.clearcoatMap,ce=C&&!!S.clearcoatNormalMap,Ae=C&&!!S.clearcoatRoughnessMap,Se=P&&!!S.iridescenceMap,se=P&&!!S.iridescenceThicknessMap,de=Q&&!!S.sheenColorMap,we=Q&&!!S.sheenRoughnessMap,Me=!!S.specularMap,he=!!S.specularColorMap,Ne=!!S.specularIntensityMap,B=ee&&!!S.transmissionMap,ie=ee&&!!S.thicknessMap,ue=!!S.gradientMap,xe=!!S.alphaMap,ne=S.alphaTest>0,K=!!S.alphaHash,J=!!S.extensions,j=Es;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(j=t.toneMapping);let Qe={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:ct,defines:S.defines,customVertexShaderID:Fe,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:ve,batchingColor:ve&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ri,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:at,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:k,aoMap:Je,lightMap:Ce,bumpMap:le,normalMap:ae,displacementMap:f&&Xe,emissiveMap:me,normalMapObjectSpace:ae&&S.normalMapType===OS,normalMapTangentSpace:ae&&S.normalMapType===NS,metalnessMap:Ue,roughnessMap:_t,anisotropy:At,anisotropyMap:N,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:A,iridescence:P,iridescenceMap:Se,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:de,sheenRoughnessMap:we,specularMap:Me,specularColorMap:he,specularIntensityMap:Ne,transmission:ee,transmissionMap:B,thicknessMap:ie,gradientMap:ue,opaque:S.transparent===!1&&S.blending===ia&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:K,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:Je&&_(S.aoMap.channel),lightMapUv:Ce&&_(S.lightMap.channel),bumpMapUv:le&&_(S.bumpMap.channel),normalMapUv:ae&&_(S.normalMap.channel),displacementMapUv:Xe&&_(S.displacementMap.channel),emissiveMapUv:me&&_(S.emissiveMap.channel),metalnessMapUv:Ue&&_(S.metalnessMap.channel),roughnessMapUv:_t&&_(S.roughnessMap.channel),anisotropyMapUv:N&&_(S.anisotropyMap.channel),clearcoatMapUv:Te&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:he&&_(S.specularColorMap.channel),specularIntensityMapUv:Ne&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:ie&&_(S.thicknessMap.channel),alphaMapUv:xe&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ae||At),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&(We||xe),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:J&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J&&S.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function u(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(M,S),x(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let M=g[S.type],D;if(M){let O=Yi[M];D=QS.clone(O.uniforms)}else D=S.uniforms;return D}function T(S,M){let D;for(let O=0,G=h.length;O<G;O++){let z=h[O];if(z.cacheKey===M){D=z,++D.usedTimes;break}}return D===void 0&&(D=new GD(t,M,S,r),h.push(D)),D}function b(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:U}}function WD(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function XD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vM(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,f,p,g,_,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function o(d,f,p,g,_,m){let u=a(d,f,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,g,_,m){let u=a(d,f,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||XD),i.length>1&&i.sort(f||gM),s.length>1&&s.sort(f||gM)}function h(){for(let d=e,f=t.length;d<f;d++){let p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function YD(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new vM,t.set(i,[a])):s>=r.length?(a=new vM,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function qD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new et};break;case"SpotLight":n={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function QD(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var ZD=0;function KD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JD(t){let e=new qD,n=QD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,r=new Qt,a=new Qt;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,v=0,x=0,y=0,T=0,b=0,w=0;c.sort(KD);for(let S=0,M=c.length;S<M;S++){let D=c[S],O=D.color,G=D.intensity,z=D.distance,F=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*G,d+=O.g*G,f+=O.b*G;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],G);w++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,k=n.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=H,p++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(O).multiplyScalar(G),H.distance=z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[_]=H;let Y=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,Y.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[_]=Y.matrix,D.castShadow){let k=n.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=F,y++}_++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy(O).multiplyScalar(G),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=H,m++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let Y=D.shadow,k=n.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=H,g++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(G),H.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[u]=H,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==v||U.numPointShadows!==x||U.numSpotShadows!==y||U.numSpotMaps!==T||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=v,U.numPointShadows=x,U.numSpotShadows=y,U.numSpotMaps=T,U.numLightProbes=w,i.version=ZD++)}function l(c,h){let d=0,f=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){let x=c[u];if(x.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function xM(t){let e=new JD(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jD(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new xM(t),e.set(s,[o])):r>=a.length?(o=new xM(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var $D=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tU(t,e,n){let i=new uc,s=new He,r=new He,a=new Nt,o=new Vh({depthPacking:PS}),l=new kh,c={},h=n.maxTextureSize,d={[Ci]:Xt,[Xt]:Ci,[Tn]:Tn},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:$D,fragmentShader:eU}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ki;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let u=this.type;this.render=function(b,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending($n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=u!==Wi&&this.type===Wi,z=u===Wi&&this.type!==Wi;for(let F=0,H=b.length;F<H;F++){let Y=b[F],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let oe=k.getFrameExtents();if(s.multiply(oe),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,k.mapSize.y=r.y)),k.map===null||G===!0||z===!0){let Ee=this.type!==Wi?{minFilter:gi,magFilter:gi}:{};k.map!==null&&k.map.dispose(),k.map=new Kt(s.x,s.y,Ee),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();let pe=k.getViewportCount();for(let Ee=0;Ee<pe;Ee++){let Le=k.getViewport(Ee);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),O.viewport(a),k.updateMatrices(Y,Ee),i=k.getFrustum(),y(w,U,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Wi&&v(k,U),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,D)};function v(b,w){let U=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kt(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,U,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,U,p,_,null)}function x(b,w,U,S){let M=null,D=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=M.uuid,G=w.uuid,z=c[O];z===void 0&&(z={},c[O]=z);let F=z[G];F===void 0&&(F=M.clone(),z[G]=F,w.addEventListener("dispose",T)),M=F}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Wi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:d[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=t.properties.get(M);O.light=U}return M}function y(b,w,U,S,M){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Wi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);let G=e.update(b),z=b.material;if(Array.isArray(z)){let F=G.groups;for(let H=0,Y=F.length;H<Y;H++){let k=F[H],oe=z[k.materialIndex];if(oe&&oe.visible){let pe=x(b,oe,S,M);b.onBeforeShadow(t,b,w,U,G,pe,k),t.renderBufferDirect(U,null,G,pe,b,k),b.onAfterShadow(t,b,w,U,G,pe,k)}}}else if(z.visible){let F=x(b,z,S,M);b.onBeforeShadow(t,b,w,U,G,F,null),t.renderBufferDirect(U,null,G,F,b,null),b.onAfterShadow(t,b,w,U,G,F,null)}}let O=b.children;for(let G=0,z=O.length;G<z;G++)y(O[G],w,U,S,M)}function T(b){b.target.removeEventListener("dispose",T);for(let U in c){let S=c[U],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var nU={[ef]:Po,[tf]:rf,[nf]:af,[sa]:sf,[Po]:ef,[rf]:tf,[af]:nf,[sf]:sa};function iU(t,e){function n(){let B=!1,ie=new Nt,ue=null,xe=new Nt(0,0,0,0);return{setMask:function(ne){ue!==ne&&!B&&(t.colorMask(ne,ne,ne,ne),ue=ne)},setLocked:function(ne){B=ne},setClear:function(ne,K,J,j,Qe){Qe===!0&&(ne*=j,K*=j,J*=j),ie.set(ne,K,J,j),xe.equals(ie)===!1&&(t.clearColor(ne,K,J,j),xe.copy(ie))},reset:function(){B=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let B=!1,ie=!1,ue=null,xe=null,ne=null;return{setReversed:function(K){if(ie!==K){let J=e.get("EXT_clip_control");K?J.clipControlEXT(J.LOWER_LEFT_EXT,J.ZERO_TO_ONE_EXT):J.clipControlEXT(J.LOWER_LEFT_EXT,J.NEGATIVE_ONE_TO_ONE_EXT),ie=K;let j=ne;ne=null,this.setClear(j)}},getReversed:function(){return ie},setTest:function(K){K?$(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(K){ue!==K&&!B&&(t.depthMask(K),ue=K)},setFunc:function(K){if(ie&&(K=nU[K]),xe!==K){switch(K){case ef:t.depthFunc(t.NEVER);break;case Po:t.depthFunc(t.ALWAYS);break;case tf:t.depthFunc(t.LESS);break;case sa:t.depthFunc(t.LEQUAL);break;case nf:t.depthFunc(t.EQUAL);break;case sf:t.depthFunc(t.GEQUAL);break;case rf:t.depthFunc(t.GREATER);break;case af:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=K}},setLocked:function(K){B=K},setClear:function(K){ne!==K&&(ie&&(K=1-K),t.clearDepth(K),ne=K)},reset:function(){B=!1,ue=null,xe=null,ne=null,ie=!1}}}function s(){let B=!1,ie=null,ue=null,xe=null,ne=null,K=null,J=null,j=null,Qe=null;return{setTest:function(Ve){B||(Ve?$(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(Ve){ie!==Ve&&!B&&(t.stencilMask(Ve),ie=Ve)},setFunc:function(Ve,Nn,an){(ue!==Ve||xe!==Nn||ne!==an)&&(t.stencilFunc(Ve,Nn,an),ue=Ve,xe=Nn,ne=an)},setOp:function(Ve,Nn,an){(K!==Ve||J!==Nn||j!==an)&&(t.stencilOp(Ve,Nn,an),K=Ve,J=Nn,j=an)},setLocked:function(Ve){B=Ve},setClear:function(Ve){Qe!==Ve&&(t.clearStencil(Ve),Qe=Ve)},reset:function(){B=!1,ie=null,ue=null,xe=null,ne=null,K=null,J=null,j=null,Qe=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,v=null,x=null,y=null,T=null,b=null,w=new et(0,0,0),U=0,S=!1,M=null,D=null,O=null,G=null,z=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Y>=2);let oe=null,pe={},Ee=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),it=new Nt().fromArray(Ee),ct=new Nt().fromArray(Le);function Fe(B,ie,ue,xe){let ne=new Uint8Array(4),K=t.createTexture();t.bindTexture(B,K),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let J=0;J<ue;J++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ie+J,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return K}let q={};q[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(t.DEPTH_TEST),a.setFunc(sa),le(!1),ae(Bg),$(t.CULL_FACE),Je($n);function $(B){h[B]!==!0&&(t.enable(B),h[B]=!0)}function te(B){h[B]!==!1&&(t.disable(B),h[B]=!1)}function be(B,ie){return d[B]!==ie?(t.bindFramebuffer(B,ie),d[B]=ie,B===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ie),B===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function ve(B,ie){let ue=p,xe=!1;if(B){ue=f.get(ie),ue===void 0&&(ue=[],f.set(ie,ue));let ne=B.textures;if(ue.length!==ne.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let K=0,J=ne.length;K<J;K++)ue[K]=t.COLOR_ATTACHMENT0+K;ue.length=ne.length,xe=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ue)}function We(B){return g!==B?(t.useProgram(B),g=B,!0):!1}let at={[or]:t.FUNC_ADD,[lS]:t.FUNC_SUBTRACT,[cS]:t.FUNC_REVERSE_SUBTRACT};at[uS]=t.MIN,at[hS]=t.MAX;let R={[fS]:t.ZERO,[dS]:t.ONE,[pS]:t.SRC_COLOR,[Dh]:t.SRC_ALPHA,[_S]:t.SRC_ALPHA_SATURATE,[xS]:t.DST_COLOR,[gS]:t.DST_ALPHA,[mS]:t.ONE_MINUS_SRC_COLOR,[Uh]:t.ONE_MINUS_SRC_ALPHA,[yS]:t.ONE_MINUS_DST_COLOR,[vS]:t.ONE_MINUS_DST_ALPHA,[AS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(B,ie,ue,xe,ne,K,J,j,Qe,Ve){if(B===$n){_===!0&&(te(t.BLEND),_=!1);return}if(_===!1&&($(t.BLEND),_=!0),B!==oS){if(B!==m||Ve!==S){if((u!==or||y!==or)&&(t.blendEquation(t.FUNC_ADD),u=or,y=or),Ve)switch(B){case ia:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ng:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ia:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ng:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,x=null,T=null,b=null,w.set(0,0,0),U=0,m=B,S=Ve}return}ne=ne||ie,K=K||ue,J=J||xe,(ie!==u||ne!==y)&&(t.blendEquationSeparate(at[ie],at[ne]),u=ie,y=ne),(ue!==v||xe!==x||K!==T||J!==b)&&(t.blendFuncSeparate(R[ue],R[xe],R[K],R[J]),v=ue,x=xe,T=K,b=J),(j.equals(w)===!1||Qe!==U)&&(t.blendColor(j.r,j.g,j.b,Qe),w.copy(j),U=Qe),m=B,S=!1}function Ce(B,ie){B.side===Tn?te(t.CULL_FACE):$(t.CULL_FACE);let ue=B.side===Xt;ie&&(ue=!ue),le(ue),B.blending===ia&&B.transparent===!1?Je($n):Je(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let xe=B.stencilWrite;o.setTest(xe),xe&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function ae(B){B!==sS?($(t.CULL_FACE),B!==D&&(B===Bg?t.cullFace(t.BACK):B===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),D=B}function Xe(B){B!==O&&(H&&t.lineWidth(B),O=B)}function me(B,ie,ue){B?($(t.POLYGON_OFFSET_FILL),(G!==ie||z!==ue)&&(t.polygonOffset(ie,ue),G=ie,z=ue)):te(t.POLYGON_OFFSET_FILL)}function Ue(B){B?$(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function _t(B){B===void 0&&(B=t.TEXTURE0+F-1),oe!==B&&(t.activeTexture(B),oe=B)}function At(B,ie,ue){ue===void 0&&(oe===null?ue=t.TEXTURE0+F-1:ue=oe);let xe=pe[ue];xe===void 0&&(xe={type:void 0,texture:void 0},pe[ue]=xe),(xe.type!==B||xe.texture!==ie)&&(oe!==ue&&(t.activeTexture(ue),oe=ue),t.bindTexture(B,ie||q[B]),xe.type=B,xe.texture=ie)}function C(){let B=pe[oe];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(B){it.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),it.copy(B))}function we(B){ct.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ct.copy(B))}function Me(B,ie){let ue=c.get(ie);ue===void 0&&(ue=new WeakMap,c.set(ie,ue));let xe=ue.get(B);xe===void 0&&(xe=t.getUniformBlockIndex(ie,B.name),ue.set(B,xe))}function he(B,ie){let xe=c.get(ie).get(B);l.get(ie)!==xe&&(t.uniformBlockBinding(ie,xe,B.__bindingPointIndex),l.set(ie,xe))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},oe=null,pe={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,v=null,x=null,y=null,T=null,b=null,w=new et(0,0,0),U=0,S=!1,M=null,D=null,O=null,G=null,z=null,it.set(0,0,t.canvas.width,t.canvas.height),ct.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:te,bindFramebuffer:be,drawBuffers:ve,useProgram:We,setBlending:Je,setMaterial:Ce,setFlipSided:le,setCullFace:ae,setLineWidth:Xe,setPolygonOffset:me,setScissorTest:Ue,activeTexture:_t,bindTexture:At,unbindTexture:C,compressedTexImage2D:A,compressedTexImage3D:P,texImage2D:Se,texImage3D:se,updateUBOMapping:Me,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:N,compressedTexSubImage3D:Te,scissor:de,viewport:we,reset:Ne}}function sU(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return p?new OffscreenCanvas(C,A):nc("canvas")}function _(C,A,P){let Q=1,ee=At(C);if((ee.width>P||ee.height>P)&&(Q=P/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let N=Math.floor(Q*ee.width),Te=Math.floor(Q*ee.height);d===void 0&&(d=g(N,Te));let ce=A?g(N,Te):d;return ce.width=N,ce.height=Te,ce.getContext("2d").drawImage(C,0,0,N,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+N+"x"+Te+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,A,P,Q,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let N=A;if(A===t.RED&&(P===t.FLOAT&&(N=t.R32F),P===t.HALF_FLOAT&&(N=t.R16F),P===t.UNSIGNED_BYTE&&(N=t.R8)),A===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.R8UI),P===t.UNSIGNED_SHORT&&(N=t.R16UI),P===t.UNSIGNED_INT&&(N=t.R32UI),P===t.BYTE&&(N=t.R8I),P===t.SHORT&&(N=t.R16I),P===t.INT&&(N=t.R32I)),A===t.RG&&(P===t.FLOAT&&(N=t.RG32F),P===t.HALF_FLOAT&&(N=t.RG16F),P===t.UNSIGNED_BYTE&&(N=t.RG8)),A===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RG8UI),P===t.UNSIGNED_SHORT&&(N=t.RG16UI),P===t.UNSIGNED_INT&&(N=t.RG32UI),P===t.BYTE&&(N=t.RG8I),P===t.SHORT&&(N=t.RG16I),P===t.INT&&(N=t.RG32I)),A===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RGB8UI),P===t.UNSIGNED_SHORT&&(N=t.RGB16UI),P===t.UNSIGNED_INT&&(N=t.RGB32UI),P===t.BYTE&&(N=t.RGB8I),P===t.SHORT&&(N=t.RGB16I),P===t.INT&&(N=t.RGB32I)),A===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),P===t.UNSIGNED_INT&&(N=t.RGBA32UI),P===t.BYTE&&(N=t.RGBA8I),P===t.SHORT&&(N=t.RGBA16I),P===t.INT&&(N=t.RGBA32I)),A===t.RGB&&(P===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(N=t.R11F_G11F_B10F)),A===t.RGBA){let Te=ee?ec:nt.getTransfer(Q);P===t.FLOAT&&(N=t.RGBA32F),P===t.HALF_FLOAT&&(N=t.RGBA16F),P===t.UNSIGNED_BYTE&&(N=Te===ft?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function y(C,A){let P;return C?A===null||A===pr||A===mr?P=t.DEPTH24_STENCIL8:A===xi?P=t.DEPTH32F_STENCIL8:A===No&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===pr||A===mr?P=t.DEPTH_COMPONENT24:A===xi?P=t.DEPTH_COMPONENT32F:A===No&&(P=t.DEPTH_COMPONENT16),P}function T(C,A){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==gi&&C.minFilter!==Wt?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function b(C){let A=C.target;A.removeEventListener("dispose",b),U(A),A.isVideoTexture&&h.delete(A)}function w(C){let A=C.target;A.removeEventListener("dispose",w),M(A)}function U(C){let A=i.get(C);if(A.__webglInit===void 0)return;let P=C.source,Q=f.get(P);if(Q){let ee=Q[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(C),Object.keys(Q).length===0&&f.delete(P)}i.remove(C)}function S(C){let A=i.get(C);t.deleteTexture(A.__webglTexture);let P=C.source,Q=f.get(P);delete Q[A.__cacheKey],a.memory.textures--}function M(C){let A=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let ee=0;ee<A.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(A.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)t.deleteFramebuffer(A.__webglFramebuffer[Q]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let P=C.textures;for(let Q=0,ee=P.length;Q<ee;Q++){let N=i.get(P[Q]);N.__webglTexture&&(t.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(P[Q])}i.remove(C)}let D=0;function O(){D=0}function G(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function z(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function F(C,A){let P=i.get(C);if(C.isVideoTexture&&Ue(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(P,C,A);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+A)}function H(C,A){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){q(P,C,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+A)}function Y(C,A){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){q(P,C,A);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+A)}function k(C,A){let P=i.get(C);if(C.version>0&&P.__version!==C.version){$(P,C,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+A)}let oe={[Bh]:t.REPEAT,[ar]:t.CLAMP_TO_EDGE,[Ih]:t.MIRRORED_REPEAT},pe={[gi]:t.NEAREST,[LS]:t.NEAREST_MIPMAP_NEAREST,[mc]:t.NEAREST_MIPMAP_LINEAR,[Wt]:t.LINEAR,[cf]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Ee={[FS]:t.NEVER,[WS]:t.ALWAYS,[zS]:t.LESS,[qg]:t.LEQUAL,[HS]:t.EQUAL,[kS]:t.GEQUAL,[GS]:t.GREATER,[VS]:t.NOTEQUAL};function Le(C,A){if(A.type===xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Wt||A.magFilter===cf||A.magFilter===mc||A.magFilter===dr||A.minFilter===Wt||A.minFilter===cf||A.minFilter===mc||A.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,oe[A.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,oe[A.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,oe[A.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,pe[A.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,pe[A.minFilter]),A.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==mc&&A.minFilter!==dr||A.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function it(C,A){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",b));let Q=A.source,ee=f.get(Q);ee===void 0&&(ee={},f.set(Q,ee));let N=z(A);if(N!==C.__cacheKey){ee[N]===void 0&&(ee[N]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),ee[N].usedTimes++;let Te=ee[C.__cacheKey];Te!==void 0&&(ee[C.__cacheKey].usedTimes--,Te.usedTimes===0&&S(A)),C.__cacheKey=N,C.__webglTexture=ee[N].texture}return P}function ct(C,A,P){return Math.floor(Math.floor(C/P)/A)}function Fe(C,A,P,Q){let N=C.updateRanges;if(N.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,A.width,A.height,P,Q,A.data);else{N.sort((se,de)=>se.start-de.start);let Te=0;for(let se=1;se<N.length;se++){let de=N[Te],we=N[se],Me=de.start+de.count,he=ct(we.start,A.width,4),Ne=ct(de.start,A.width,4);we.start<=Me+1&&he===Ne&&ct(we.start+we.count-1,A.width,4)===he?de.count=Math.max(de.count,we.start+we.count-de.start):(++Te,N[Te]=we)}N.length=Te+1;let ce=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Se=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,A.width);for(let se=0,de=N.length;se<de;se++){let we=N[se],Me=Math.floor(we.start/4),he=Math.ceil(we.count/4),Ne=Me%A.width,B=Math.floor(Me/A.width),ie=he,ue=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Ne,B,ie,ue,P,Q,A.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function q(C,A,P){let Q=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=t.TEXTURE_3D);let ee=it(C,A),N=A.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+P);let Te=i.get(N);if(N.version!==Te.__version||ee===!0){n.activeTexture(t.TEXTURE0+P);let ce=nt.getPrimaries(nt.workingColorSpace),Ae=A.colorSpace===ei?null:nt.getPrimaries(A.colorSpace),Se=A.colorSpace===ei||ce===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let se=_(A.image,!1,s.maxTextureSize);se=_t(A,se);let de=r.convert(A.format,A.colorSpace),we=r.convert(A.type),Me=x(A.internalFormat,de,we,A.colorSpace,A.isVideoTexture);Le(Q,A);let he,Ne=A.mipmaps,B=A.isVideoTexture!==!0,ie=Te.__version===void 0||ee===!0,ue=N.dataReady,xe=T(A,se);if(A.isDepthTexture)Me=y(A.format===gr,A.type),ie&&(B?n.texStorage2D(t.TEXTURE_2D,1,Me,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Me,se.width,se.height,0,de,we,null));else if(A.isDataTexture)if(Ne.length>0){B&&ie&&n.texStorage2D(t.TEXTURE_2D,xe,Me,Ne[0].width,Ne[0].height);for(let ne=0,K=Ne.length;ne<K;ne++)he=Ne[ne],B?ue&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,we,he.data):n.texImage2D(t.TEXTURE_2D,ne,Me,he.width,he.height,0,de,we,he.data);A.generateMipmaps=!1}else B?(ie&&n.texStorage2D(t.TEXTURE_2D,xe,Me,se.width,se.height),ue&&Fe(A,se,de,we)):n.texImage2D(t.TEXTURE_2D,0,Me,se.width,se.height,0,de,we,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){B&&ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Me,Ne[0].width,Ne[0].height,se.depth);for(let ne=0,K=Ne.length;ne<K;ne++)if(he=Ne[ne],A.format!==yi)if(de!==null)if(B){if(ue)if(A.layerUpdates.size>0){let J=jg(he.width,he.height,A.format,A.type);for(let j of A.layerUpdates){let Qe=he.data.subarray(j*J/he.data.BYTES_PER_ELEMENT,(j+1)*J/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,j,he.width,he.height,1,de,Qe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Me,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,de,we,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Me,he.width,he.height,se.depth,0,de,we,he.data)}else{B&&ie&&n.texStorage2D(t.TEXTURE_2D,xe,Me,Ne[0].width,Ne[0].height);for(let ne=0,K=Ne.length;ne<K;ne++)he=Ne[ne],A.format!==yi?de!==null?B?ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ue&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,we,he.data):n.texImage2D(t.TEXTURE_2D,ne,Me,he.width,he.height,0,de,we,he.data)}else if(A.isDataArrayTexture)if(B){if(ie&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Me,se.width,se.height,se.depth),ue)if(A.layerUpdates.size>0){let ne=jg(se.width,se.height,A.format,A.type);for(let K of A.layerUpdates){let J=se.data.subarray(K*ne/se.data.BYTES_PER_ELEMENT,(K+1)*ne/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,de,we,J)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,we,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,se.width,se.height,se.depth,0,de,we,se.data);else if(A.isData3DTexture)B?(ie&&n.texStorage3D(t.TEXTURE_3D,xe,Me,se.width,se.height,se.depth),ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,we,se.data)):n.texImage3D(t.TEXTURE_3D,0,Me,se.width,se.height,se.depth,0,de,we,se.data);else if(A.isFramebufferTexture){if(ie)if(B)n.texStorage2D(t.TEXTURE_2D,xe,Me,se.width,se.height);else{let ne=se.width,K=se.height;for(let J=0;J<xe;J++)n.texImage2D(t.TEXTURE_2D,J,Me,ne,K,0,de,we,null),ne>>=1,K>>=1}}else if(Ne.length>0){if(B&&ie){let ne=At(Ne[0]);n.texStorage2D(t.TEXTURE_2D,xe,Me,ne.width,ne.height)}for(let ne=0,K=Ne.length;ne<K;ne++)he=Ne[ne],B?ue&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,we,he):n.texImage2D(t.TEXTURE_2D,ne,Me,de,we,he);A.generateMipmaps=!1}else if(B){if(ie){let ne=At(se);n.texStorage2D(t.TEXTURE_2D,xe,Me,ne.width,ne.height)}ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,we,se)}else n.texImage2D(t.TEXTURE_2D,0,Me,de,we,se);m(A)&&u(Q),Te.__version=N.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function $(C,A,P){if(A.image.length!==6)return;let Q=it(C,A),ee=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+P);let N=i.get(ee);if(ee.version!==N.__version||Q===!0){n.activeTexture(t.TEXTURE0+P);let Te=nt.getPrimaries(nt.workingColorSpace),ce=A.colorSpace===ei?null:nt.getPrimaries(A.colorSpace),Ae=A.colorSpace===ei||Te===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Se=A.isCompressedTexture||A.image[0].isCompressedTexture,se=A.image[0]&&A.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Se&&!se?de[K]=_(A.image[K],!0,s.maxCubemapSize):de[K]=se?A.image[K].image:A.image[K],de[K]=_t(A,de[K]);let we=de[0],Me=r.convert(A.format,A.colorSpace),he=r.convert(A.type),Ne=x(A.internalFormat,Me,he,A.colorSpace),B=A.isVideoTexture!==!0,ie=N.__version===void 0||Q===!0,ue=ee.dataReady,xe=T(A,we);Le(t.TEXTURE_CUBE_MAP,A);let ne;if(Se){B&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ne,we.width,we.height);for(let K=0;K<6;K++){ne=de[K].mipmaps;for(let J=0;J<ne.length;J++){let j=ne[J];A.format!==yi?Me!==null?B?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J,0,0,j.width,j.height,Me,j.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J,Ne,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J,0,0,j.width,j.height,Me,he,j.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J,Ne,j.width,j.height,0,Me,he,j.data)}}}else{if(ne=A.mipmaps,B&&ie){ne.length>0&&xe++;let K=At(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(se){B?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Me,he,de[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,de[K].width,de[K].height,0,Me,he,de[K].data);for(let J=0;J<ne.length;J++){let Qe=ne[J].image[K].image;B?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J+1,0,0,Qe.width,Qe.height,Me,he,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J+1,Ne,Qe.width,Qe.height,0,Me,he,Qe.data)}}else{B?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,he,de[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Me,he,de[K]);for(let J=0;J<ne.length;J++){let j=ne[J];B?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J+1,0,0,Me,he,j.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J+1,Ne,Me,he,j.image[K])}}}m(A)&&u(t.TEXTURE_CUBE_MAP),N.__version=ee.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function te(C,A,P,Q,ee,N){let Te=r.convert(P.format,P.colorSpace),ce=r.convert(P.type),Ae=x(P.internalFormat,Te,ce,P.colorSpace),Se=i.get(A),se=i.get(P);if(se.__renderTarget=A,!Se.__hasExternalTextures){let de=Math.max(1,A.width>>N),we=Math.max(1,A.height>>N);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,N,Ae,de,we,A.depth,0,Te,ce,null):n.texImage2D(ee,N,Ae,de,we,0,Te,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),me(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,se.__webglTexture,0,Xe(A)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,se.__webglTexture,N),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(C,A,P){if(t.bindRenderbuffer(t.RENDERBUFFER,C),A.depthBuffer){let Q=A.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,N=y(A.stencilBuffer,ee),Te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Xe(A);me(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,N,A.width,A.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,N,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,N,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,C)}else{let Q=A.textures;for(let ee=0;ee<Q.length;ee++){let N=Q[ee],Te=r.convert(N.format,N.colorSpace),ce=r.convert(N.type),Ae=x(N.internalFormat,Te,ce,N.colorSpace),Se=Xe(A);P&&me(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Ae,A.width,A.height):me(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,Ae,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(A.depthTexture);Q.__renderTarget=A,(!Q.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ee=Q.__webglTexture,N=Xe(A);if(A.depthTexture.format===Ro)me(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(A.depthTexture.format===gr)me(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function We(C){let A=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){let ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),A.__depthDisposeCallback=ee}A.__boundDepthTexture=Q}if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let Q=C.texture.mipmaps;Q&&Q.length>0?ve(A.__webglFramebuffer[0],C):ve(A.__webglFramebuffer,C)}else if(P){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=t.createRenderbuffer(),be(A.__webglDepthbuffer[Q],C,!1);else{let ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=A.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,N)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),be(A.__webglDepthbuffer,C,!1);else{let ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,N)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(C,A,P){let Q=i.get(C);A!==void 0&&te(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&We(C)}function R(C){let A=C.texture,P=i.get(C),Q=i.get(A);C.addEventListener("dispose",w);let ee=C.textures,N=C.isWebGLCubeRenderTarget===!0,Te=ee.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=A.version,a.memory.textures++),N){P.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){P.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)P.__webglFramebuffer[ce][Ae]=t.createFramebuffer()}else P.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){P.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)P.__webglFramebuffer[ce]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ce=0,Ae=ee.length;ce<Ae;ce++){let Se=i.get(ee[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&me(C)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){let Ae=ee[ce];P.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[ce]);let Se=r.convert(Ae.format,Ae.colorSpace),se=r.convert(Ae.type),de=x(Ae.internalFormat,Se,se,Ae.colorSpace,C.isXRRenderTarget===!0),we=Xe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,P.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),be(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)te(P.__webglFramebuffer[ce][Ae],C,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else te(P.__webglFramebuffer[ce],C,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ce=0,Ae=ee.length;ce<Ae;ce++){let Se=ee[ce],se=i.get(Se),de=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,se.__webglTexture),Le(de,Se),te(P.__webglFramebuffer,C,Se,t.COLOR_ATTACHMENT0+ce,de,0),m(Se)&&u(de)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),Le(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)te(P.__webglFramebuffer[Ae],C,A,t.COLOR_ATTACHMENT0,ce,Ae);else te(P.__webglFramebuffer,C,A,t.COLOR_ATTACHMENT0,ce,0);m(A)&&u(ce),n.unbindTexture()}C.depthBuffer&&We(C)}function Je(C){let A=C.textures;for(let P=0,Q=A.length;P<Q;P++){let ee=A[P];if(m(ee)){let N=v(C),Te=i.get(ee).__webglTexture;n.bindTexture(N,Te),u(N),n.unbindTexture()}}}let Ce=[],le=[];function ae(C){if(C.samples>0){if(me(C)===!1){let A=C.textures,P=C.width,Q=C.height,ee=t.COLOR_BUFFER_BIT,N=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(C),ce=A.length>1;if(ce)for(let Se=0;Se<A.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Ae=C.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let se=i.get(A[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,P,Q,0,0,P,Q,ee,t.NEAREST),l===!0&&(Ce.length=0,le.length=0,Ce.push(t.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ce.push(N),le.push(N),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,le)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Se=0;Se<A.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);let se=i.get(A[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let A=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Xe(C){return Math.min(s.maxSamples,C.samples)}function me(C){let A=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ue(C){let A=a.render.frame;h.get(C)!==A&&(h.set(C,A),C.update())}function _t(C,A){let P=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==Ri&&P!==ei&&(nt.getTransfer(P)===ft?(Q!==yi||ee!==rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),A}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=at,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=te,this.useMultisampledRTT=me}function rU(t,e){function n(i,s=ei){let r,a=nt.getTransfer(s);if(i===rn)return t.UNSIGNED_BYTE;if(i===hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zg)return t.BYTE;if(i===Hg)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===uf)return t.INT;if(i===pr)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Oo)return t.HALF_FLOAT;if(i===kg)return t.ALPHA;if(i===Wg)return t.RGB;if(i===yi)return t.RGBA;if(i===Ro)return t.DEPTH_COMPONENT;if(i===gr)return t.DEPTH_STENCIL;if(i===Xg)return t.RED;if(i===df)return t.RED_INTEGER;if(i===Yg)return t.RG;if(i===pf)return t.RG_INTEGER;if(i===mf)return t.RGBA_INTEGER;if(i===gc||i===vc||i===xc||i===yc)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===vf||i===xf||i===yf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_f||i===Af||i===Sf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_f||i===Af)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mf||i===Ef||i===Tf||i===bf||i===wf||i===Cf||i===Rf||i===Df||i===Uf||i===Bf||i===If||i===Lf||i===Pf||i===Nf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===If)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nf)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Of||i===Ff||i===zf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Of)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hf||i===Gf||i===Vf||i===kf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var aU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,h0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new hc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Jt({vertexShader:aU,fragmentShader:oU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},f0=class extends Jn{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new h0,u={},v=n.getContextAttributes(),x=null,y=null,T=[],b=[],w=new He,U=null,S=new mn;S.viewport=new Nt;let M=new mn;M.viewport=new Nt;let D=[S,M],O=new $h,G=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=T[q];return $===void 0&&($=new Lo,T[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=T[q];return $===void 0&&($=new Lo,T[q]=$),$.getGripSpace()},this.getHand=function(q){let $=T[q];return $===void 0&&($=new Lo,T[q]=$),$.getHandSpace()};function F(q){let $=b.indexOf(q.inputSource);if($===-1)return;let te=T[$];te!==void 0&&(te.update(q.inputSource,q.frame,c||a),te.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<T.length;q++){let $=b[q];$!==null&&(b[q]=null,T[q].disconnect($))}G=null,z=null,m.reset();for(let q in u)delete u[q];e.setRenderTarget(x),p=null,f=null,d=null,s=null,y=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,be=null,ve=null;v.depth&&(ve=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=v.stencil?gr:Ro,be=v.stencil?mr:pr);let We={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Kt(f.textureWidth,f.textureHeight,{format:yi,type:rn,depthTexture:new Ms(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Kt(p.framebufferWidth,p.framebufferHeight,{format:yi,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let $=0;$<q.removed.length;$++){let te=q.removed[$],be=b.indexOf(te);be>=0&&(b[be]=null,T[be].disconnect(te))}for(let $=0;$<q.added.length;$++){let te=q.added[$],be=b.indexOf(te);if(be===-1){for(let We=0;We<T.length;We++)if(We>=b.length){b.push(te),be=We;break}else if(b[We]===null){b[We]=te,be=We;break}if(be===-1)break}let ve=T[be];ve&&ve.connect(te)}}let k=new W,oe=new W;function pe(q,$,te){k.setFromMatrixPosition($.matrixWorld),oe.setFromMatrixPosition(te.matrixWorld);let be=k.distanceTo(oe),ve=$.projectionMatrix.elements,We=te.projectionMatrix.elements,at=ve[14]/(ve[10]-1),R=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],Ce=(ve[9]-1)/ve[5],le=(ve[8]-1)/ve[0],ae=(We[8]+1)/We[0],Xe=at*le,me=at*ae,Ue=be/(-le+ae),_t=Ue*-le;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_t),q.translateZ(Ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let At=at+Ue,C=R+Ue,A=Xe-_t,P=me+(be-_t),Q=Je*R/C*At,ee=Ce*R/C*At;q.projectionMatrix.makePerspective(A,P,Q,ee,At,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ee(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,te=q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(te=m.depthFar)),O.near=M.near=S.near=$,O.far=M.far=S.far=te,(G!==O.near||z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,z=O.far),O.layers.mask=q.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let be=q.parent,ve=O.cameras;Ee(O,be);for(let We=0;We<ve.length;We++)Ee(ve[We],be);ve.length===2?pe(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),Le(q,O,be)};function Le(q,$,te){te===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ph*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return u[q]};let it=null;function ct(q,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let te=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let be=!1;te.length!==O.cameras.length&&(O.cameras.length=0,be=!0);for(let R=0;R<te.length;R++){let Je=te[R],Ce=null;if(p!==null)Ce=p.getViewport(Je);else{let ae=d.getViewSubImage(f,Je);Ce=ae.viewport,R===0&&(e.setRenderTargetTextures(y,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(y))}let le=D[R];le===void 0&&(le=new mn,le.layers.enable(R),le.viewport=new Nt,D[R]=le),le.matrix.fromArray(Je.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Je.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),R===0&&(O.matrix.copy(le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),be===!0&&O.cameras.push(le)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let R=d.getDepthInformation(te[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let R=0;R<te.length;R++){let Je=te[R].camera;if(Je){let Ce=u[Je];Ce||(Ce=new hc,u[Je]=Ce);let le=d.getCameraImage(Je);Ce.sourceTexture=le}}}}for(let te=0;te<T.length;te++){let be=b[te],ve=T[te];be!==null&&ve!==void 0&&ve.update(be,$,c||a)}it&&it(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let Fe=new yM;Fe.setAnimationLoop(ct),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}},ha=new Vi,lU=new Qt;function cU(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Zg(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Xt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Xt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=e.get(u),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,ha.copy(y),ha.x*=-1,ha.y*=-1,ha.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ha.y*=-1,ha.z*=-1),m.envMapRotation.value.setFromMatrix4(lU.makeRotationFromEuler(ha)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uU(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){let y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let T=x.program;i.updateUBOMapping(v,T);let b=e.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function h(v){let x=d();v.__bindingPointIndex=x;let y=t.createBuffer(),T=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=s[v.id],y=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,w=y.length;b<w;b++){let U=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=U.length;S<M;S++){let D=U[S];if(p(D,b,S,T)===!0){let O=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],z=0;for(let F=0;F<G.length;F++){let H=G[F],Y=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,O+z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,y,T){let b=v.value,w=x+"_"+y;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{let U=T[w];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return T[w]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(v){let x=v.uniforms,y=0,T=16;for(let w=0,U=x.length;w<U;w++){let S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,D=S.length;M<D;M++){let O=S[M],G=Array.isArray(O.value)?O.value:[O.value];for(let z=0,F=G.length;z<F;z++){let H=G[z],Y=_(H),k=y%T,oe=k%Y.boundary,pe=k+oe;y+=oe,pe!==0&&T-pe<Y.storage&&(y+=T-pe),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Y.storage}}}let b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let v in s)t.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Qf=class{constructor(e={}){let{canvas:n=XS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Ct;let b=0,w=0,U=null,S=-1,M=null,D=new Nt,O=new Nt,G=null,z=new et(0),F=0,H=n.width,Y=n.height,k=1,oe=null,pe=null,Ee=new Nt(0,0,H,Y),Le=new Nt(0,0,H,Y),it=!1,ct=new uc,Fe=!1,q=!1,$=new Qt,te=new W,be=new Nt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function at(){return U===null?k:1}let R=i;function Je(E,I){return n.getContext(E,I)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",ne,!1),R===null){let I="webgl2";if(R=Je(I,E),R===null)throw Je(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ce,le,ae,Xe,me,Ue,_t,At,C,A,P,Q,ee,N,Te,ce,Ae,Se,se,de,we,Me,he,Ne;function B(){Ce=new CR(R),Ce.init(),Me=new rU(R,Ce),le=new AR(R,Ce,e,Me),ae=new iU(R,Ce),le.reversedDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),Xe=new UR(R),me=new WD,Ue=new sU(R,Ce,ae,me,le,Me,Xe),_t=new MR(y),At=new wR(y),C=new O2(R),he=new yR(R,C),A=new RR(R,C,Xe,he),P=new IR(R,A,C,Xe),se=new BR(R,le,Ue),ce=new SR(me),Q=new kD(y,_t,At,Ce,le,he,ce),ee=new cU(y,me),N=new YD,Te=new jD(Ce),Se=new xR(y,_t,At,ae,P,p,l),Ae=new tU(y,P,le),Ne=new uU(R,Xe,le,ae),de=new _R(R,Ce,Xe),we=new DR(R,Ce,Xe),Xe.programs=Q.programs,y.capabilities=le,y.extensions=Ce,y.properties=me,y.renderLists=N,y.shadowMap=Ae,y.state=ae,y.info=Xe}B();let ie=new f0(y,R);this.xr=ie,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=Ce.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ce.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(H,Y,!1))},this.getSize=function(E){return E.set(H,Y)},this.setSize=function(E,I,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Y=I,n.width=Math.floor(E*k),n.height=Math.floor(I*k),V===!0&&(n.style.width=E+"px",n.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(H*k,Y*k).floor()},this.setDrawingBufferSize=function(E,I,V){H=E,Y=I,k=V,n.width=Math.floor(E*V),n.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,I,V,X){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,I,V,X),ae.viewport(D.copy(Ee).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,I,V,X){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,I,V,X),ae.scissor(O.copy(Le).multiplyScalar(k).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){ae.setScissorTest(it=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){pe=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,V=!0){let X=0;if(E){let L=!1;if(U!==null){let re=U.texture.format;L=re===mf||re===pf||re===df}if(L){let re=U.texture.type,ge=re===rn||re===pr||re===No||re===mr||re===hf||re===ff,_e=Se.getClearColor(),ye=Se.getClearAlpha(),Be=_e.r,Pe=_e.g,Re=_e.b;ge?(g[0]=Be,g[1]=Pe,g[2]=Re,g[3]=ye,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Be,_[1]=Pe,_[2]=Re,_[3]=ye,R.clearBufferiv(R.COLOR,0,_))}else X|=R.COLOR_BUFFER_BIT}I&&(X|=R.DEPTH_BUFFER_BIT),V&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),Se.dispose(),N.dispose(),Te.dispose(),me.dispose(),_t.dispose(),At.dispose(),P.dispose(),he.dispose(),Ne.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",an),ie.removeEventListener("sessionend",ga),_i.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=Xe.autoReset,I=Ae.enabled,V=Ae.autoUpdate,X=Ae.needsUpdate,L=Ae.type;B(),Xe.autoReset=E,Ae.enabled=I,Ae.autoUpdate=V,Ae.needsUpdate=X,Ae.type=L}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function K(E){let I=E.target;I.removeEventListener("dispose",K),J(I)}function J(E){j(E),me.remove(E)}function j(E){let I=me.get(E).programs;I!==void 0&&(I.forEach(function(V){Q.releaseProgram(V)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,X,L,re){I===null&&(I=ve);let ge=L.isMesh&&L.matrixWorld.determinant()<0,_e=ya(E,I,V,X,L);ae.setMaterial(X,ge);let ye=V.index,Be=1;if(X.wireframe===!0){if(ye=A.getWireframeAttribute(V),ye===void 0)return;Be=2}let Pe=V.drawRange,Re=V.attributes.position,Ze=Pe.start*Be,dt=(Pe.start+Pe.count)*Be;re!==null&&(Ze=Math.max(Ze,re.start*Be),dt=Math.min(dt,(re.start+re.count)*Be)),ye!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,ye.count)):Re!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Re.count));let It=dt-Ze;if(It<0||It===1/0)return;he.setup(L,X,_e,V,ye);let St,gt=de;if(ye!==null&&(St=C.get(ye),gt=we,gt.setIndex(St)),L.isMesh)X.wireframe===!0?(ae.setLineWidth(X.wireframeLinewidth*at()),gt.setMode(R.LINES)):gt.setMode(R.TRIANGLES);else if(L.isLine){let De=X.linewidth;De===void 0&&(De=1),ae.setLineWidth(De*at()),L.isLineSegments?gt.setMode(R.LINES):L.isLineLoop?gt.setMode(R.LINE_LOOP):gt.setMode(R.LINE_STRIP)}else L.isPoints?gt.setMode(R.POINTS):L.isSprite&&gt.setMode(R.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))gt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let De=L._multiDrawStarts,Ut=L._multiDrawCounts,st=L._multiDrawCount,On=ye?C.get(ye).bytesPerElement:1,_a=me.get(X).currentProgram.getUniforms();for(let Fn=0;Fn<st;Fn++)_a.setValue(R,"_gl_DrawID",Fn),gt.render(De[Fn]/On,Ut[Fn])}else if(L.isInstancedMesh)gt.renderInstances(Ze,It,L.count);else if(V.isInstancedBufferGeometry){let De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ut=Math.min(V.instanceCount,De);gt.renderInstances(Ze,It,Ut)}else gt.render(Ze,It)};function Qe(E,I,V){E.transparent===!0&&E.side===Tn&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,ti(E,I,V),E.side=Ci,E.needsUpdate=!0,ti(E,I,V),E.side=Tn):ti(E,I,V)}this.compile=function(E,I,V=null){V===null&&(V=E),u=Te.get(V),u.init(I),x.push(u),V.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),E!==V&&E.traverseVisible(function(L){L.isLight&&L.layers.test(I.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();let X=new Set;return E.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let re=L.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){let _e=re[ge];Qe(_e,V,L),X.add(_e)}else Qe(re,V,L),X.add(re)}),u=x.pop(),X},this.compileAsync=function(E,I,V=null){let X=this.compile(E,I,V);return new Promise(L=>{function re(){if(X.forEach(function(ge){me.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){L(E);return}setTimeout(re,10)}Ce.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ve=null;function Nn(E){Ve&&Ve(E)}function an(){_i.stop()}function ga(){_i.start()}let _i=new yM;_i.setAnimationLoop(Nn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(E){Ve=E,ie.setAnimationLoop(E),E===null?_i.stop():_i.start()},ie.addEventListener("sessionstart",an),ie.addEventListener("sessionend",ga),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,I,U),u=Te.get(E,x.length),u.init(I),x.push(u),$.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ct.setFromProjectionMatrix($,wi,I.reversedDepth),q=this.localClippingEnabled,Fe=ce.init(this.clippingPlanes,q),m=N.get(E,v.length),m.init(),v.push(m),ie.enabled===!0&&ie.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&va(re,I,-1/0,y.sortObjects)}va(E,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(oe,pe),We=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,We&&Se.addToRenderList(m,E),this.info.render.frame++,Fe===!0&&ce.beginShadows();let V=u.state.shadowsArray;Ae.render(V,E,I),Fe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,L=m.transmissive;if(u.setupLights(),I.isArrayCamera){let re=I.cameras;if(L.length>0)for(let ge=0,_e=re.length;ge<_e;ge++){let ye=re[ge];xa(X,L,E,ye)}We&&Se.render(E);for(let ge=0,_e=re.length;ge<_e;ge++){let ye=re[ge];_r(m,E,ye,ye.viewport)}}else L.length>0&&xa(X,L,E,I),We&&Se.render(E),_r(m,E,I);U!==null&&w===0&&(Ue.updateMultisampleRenderTarget(U),Ue.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(y,E,I),he.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],Fe===!0&&ce.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function va(E,I,V,X){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ct.intersectsSprite(E)){X&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);let ge=P.update(E),_e=E.material;_e.visible&&m.push(E,ge,_e,V,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ct.intersectsObject(E))){let ge=P.update(E),_e=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),be.copy(ge.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4($)),Array.isArray(_e)){let ye=ge.groups;for(let Be=0,Pe=ye.length;Be<Pe;Be++){let Re=ye[Be],Ze=_e[Re.materialIndex];Ze&&Ze.visible&&m.push(E,ge,Ze,V,be.z,Re)}}else _e.visible&&m.push(E,ge,_e,V,be.z,null)}}let re=E.children;for(let ge=0,_e=re.length;ge<_e;ge++)va(re[ge],I,V,X)}function _r(E,I,V,X){let L=E.opaque,re=E.transmissive,ge=E.transparent;u.setupLightsView(V),Fe===!0&&ce.setGlobalState(y.clippingPlanes,V),X&&ae.viewport(D.copy(X)),L.length>0&&Ar(L,I,V),re.length>0&&Ar(re,I,V),ge.length>0&&Ar(ge,I,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function xa(E,I,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Kt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?Oo:rn,minFilter:dr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let re=u.state.transmissionRenderTarget[X.id],ge=X.viewport||D;re.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);let _e=y.getRenderTarget(),ye=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(re),y.getClearColor(z),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),We&&Se.render(V);let Pe=y.toneMapping;y.toneMapping=Es;let Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Fe===!0&&ce.setGlobalState(y.clippingPlanes,X),Ar(E,V,X),Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let dt=0,It=I.length;dt<It;dt++){let St=I[dt],gt=St.object,De=St.geometry,Ut=St.material,st=St.group;if(Ut.side===Tn&&gt.layers.test(X.layers)){let On=Ut.side;Ut.side=Xt,Ut.needsUpdate=!0,Sr(gt,V,X,De,Ut,st),Ut.side=On,Ut.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ue.updateMultisampleRenderTarget(re),Ue.updateRenderTargetMipmap(re))}y.setRenderTarget(_e,ye,Be),y.setClearColor(z,F),Re!==void 0&&(X.viewport=Re),y.toneMapping=Pe}function Ar(E,I,V){let X=I.isScene===!0?I.overrideMaterial:null;for(let L=0,re=E.length;L<re;L++){let ge=E[L],_e=ge.object,ye=ge.geometry,Be=ge.group,Pe=ge.material;Pe.allowOverride===!0&&X!==null&&(Pe=X),_e.layers.test(V.layers)&&Sr(_e,I,V,ye,Pe,Be)}}function Sr(E,I,V,X,L,re){E.onBeforeRender(y,I,V,X,L,re),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),L.onBeforeRender(y,I,V,X,E,re),L.transparent===!0&&L.side===Tn&&L.forceSinglePass===!1?(L.side=Xt,L.needsUpdate=!0,y.renderBufferDirect(V,I,X,L,E,re),L.side=Ci,L.needsUpdate=!0,y.renderBufferDirect(V,I,X,L,E,re),L.side=Tn):y.renderBufferDirect(V,I,X,L,E,re),E.onAfterRender(y,I,V,X,L,re)}function ti(E,I,V){I.isScene!==!0&&(I=ve);let X=me.get(E),L=u.state.lights,re=u.state.shadowsArray,ge=L.state.version,_e=Q.getParameters(E,L.state,re,I,V),ye=Q.getProgramCacheKey(_e),Be=X.programs;X.environment=E.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(E.isMeshStandardMaterial?At:_t).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",K),Be=new Map,X.programs=Be);let Pe=Be.get(ye);if(Pe!==void 0){if(X.currentProgram===Pe&&X.lightsStateVersion===ge)return Er(E,_e),Pe}else _e.uniforms=Q.getUniforms(E),E.onBeforeCompile(_e,y),Pe=Q.acquireProgram(_e,ye),Be.set(ye,Pe),X.uniforms=_e.uniforms;let Re=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=ce.uniform),Er(E,_e),X.needsLights=Ec(E),X.lightsStateVersion=ge,X.needsLights&&(Re.ambientLightColor.value=L.state.ambient,Re.lightProbe.value=L.state.probe,Re.directionalLights.value=L.state.directional,Re.directionalLightShadows.value=L.state.directionalShadow,Re.spotLights.value=L.state.spot,Re.spotLightShadows.value=L.state.spotShadow,Re.rectAreaLights.value=L.state.rectArea,Re.ltc_1.value=L.state.rectAreaLTC1,Re.ltc_2.value=L.state.rectAreaLTC2,Re.pointLights.value=L.state.point,Re.pointLightShadows.value=L.state.pointShadow,Re.hemisphereLights.value=L.state.hemi,Re.directionalShadowMap.value=L.state.directionalShadowMap,Re.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Re.spotShadowMap.value=L.state.spotShadowMap,Re.spotLightMatrix.value=L.state.spotLightMatrix,Re.spotLightMap.value=L.state.spotLightMap,Re.pointShadowMap.value=L.state.pointShadowMap,Re.pointShadowMatrix.value=L.state.pointShadowMatrix),X.currentProgram=Pe,X.uniformsList=null,Pe}function Mr(E){if(E.uniformsList===null){let I=E.currentProgram.getUniforms();E.uniformsList=Ho.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Er(E,I){let V=me.get(E);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function ya(E,I,V,X,L){I.isScene!==!0&&(I=ve),Ue.resetTextureUnits();let re=I.fog,ge=X.isMeshStandardMaterial?I.environment:null,_e=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ri,ye=(X.isMeshStandardMaterial?At:_t).get(X.envMap||ge),Be=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color,It=Es;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(It=y.toneMapping);let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,gt=St!==void 0?St.length:0,De=me.get(X),Ut=u.state.lights;if(Fe===!0&&(q===!0||E!==M)){let _n=E===M&&X.id===S;ce.setState(X,E,_n)}let st=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Ut.state.version||De.outputColorSpace!==_e||L.isBatchedMesh&&De.batching===!1||!L.isBatchedMesh&&De.batching===!0||L.isBatchedMesh&&De.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&De.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&De.instancing===!1||!L.isInstancedMesh&&De.instancing===!0||L.isSkinnedMesh&&De.skinning===!1||!L.isSkinnedMesh&&De.skinning===!0||L.isInstancedMesh&&De.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&De.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&De.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&De.instancingMorph===!1&&L.morphTexture!==null||De.envMap!==ye||X.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ce.numPlanes||De.numIntersection!==ce.numIntersection)||De.vertexAlphas!==Be||De.vertexTangents!==Pe||De.morphTargets!==Re||De.morphNormals!==Ze||De.morphColors!==dt||De.toneMapping!==It||De.morphTargetsCount!==gt)&&(st=!0):(st=!0,De.__version=X.version);let On=De.currentProgram;st===!0&&(On=ti(X,I,L));let _a=!1,Fn=!1,Wo=!1,Bt=On.getUniforms(),ni=De.uniforms;if(ae.useProgram(On.program)&&(_a=!0,Fn=!0,Wo=!0),X.id!==S&&(S=X.id,Fn=!0),_a||M!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Bt.setValue(R,"projectionMatrix",E.projectionMatrix),Bt.setValue(R,"viewMatrix",E.matrixWorldInverse);let bn=Bt.map.cameraPosition;bn!==void 0&&bn.setValue(R,te.setFromMatrixPosition(E.matrixWorld)),le.logarithmicDepthBuffer&&Bt.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fn=!0,Wo=!0)}if(L.isSkinnedMesh){Bt.setOptional(R,L,"bindMatrix"),Bt.setOptional(R,L,"bindMatrixInverse");let _n=L.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Bt.setValue(R,"boneTexture",_n.boneTexture,Ue))}L.isBatchedMesh&&(Bt.setOptional(R,L,"batchingTexture"),Bt.setValue(R,"batchingTexture",L._matricesTexture,Ue),Bt.setOptional(R,L,"batchingIdTexture"),Bt.setValue(R,"batchingIdTexture",L._indirectTexture,Ue),Bt.setOptional(R,L,"batchingColorTexture"),L._colorsTexture!==null&&Bt.setValue(R,"batchingColorTexture",L._colorsTexture,Ue));let ii=V.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&se.update(L,V,On),(Fn||De.receiveShadow!==L.receiveShadow)&&(De.receiveShadow=L.receiveShadow,Bt.setValue(R,"receiveShadow",L.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ni.envMap.value=ye,ni.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&I.environment!==null&&(ni.envMapIntensity.value=I.environmentIntensity),Fn&&(Bt.setValue(R,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Mc(ni,Wo),re&&X.fog===!0&&ee.refreshFogUniforms(ni,re),ee.refreshMaterialUniforms(ni,X,k,Y,u.state.transmissionRenderTarget[E.id]),Ho.upload(R,Mr(De),ni,Ue)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ho.upload(R,Mr(De),ni,Ue),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(R,"center",L.center),Bt.setValue(R,"modelViewMatrix",L.modelViewMatrix),Bt.setValue(R,"normalMatrix",L.normalMatrix),Bt.setValue(R,"modelMatrix",L.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let _n=X.uniformsGroups;for(let bn=0,$f=_n.length;bn<$f;bn++){let Tr=_n[bn];Ne.update(Tr,On),Ne.bind(Tr,On)}}return On}function Mc(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Ec(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,I,V){let X=me.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),me.get(E.texture).__webglTexture=I,me.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:V,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){let V=me.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};let Tc=R.createFramebuffer();this.setRenderTarget=function(E,I=0,V=0){U=E,b=I,w=V;let X=!0,L=null,re=!1,ge=!1;if(E){let ye=me.get(E);if(ye.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)Ue.setupRenderTarget(E);else if(ye.__hasExternalTextures)Ue.rebindTextures(E,me.get(E.texture).__webglTexture,me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Re=E.depthTexture;if(ye.__boundDepthTexture!==Re){if(Re!==null&&me.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let Pe=me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?L=Pe[I][V]:L=Pe[I],re=!0):E.samples>0&&Ue.useMultisampledRTT(E)===!1?L=me.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[V]:L=Pe,D.copy(E.viewport),O.copy(E.scissor),G=E.scissorTest}else D.copy(Ee).multiplyScalar(k).floor(),O.copy(Le).multiplyScalar(k).floor(),G=it;if(V!==0&&(L=Tc),ae.bindFramebuffer(R.FRAMEBUFFER,L)&&X&&ae.drawBuffers(E,L),ae.viewport(D),ae.scissor(O),ae.setScissorTest(G),re){let ye=me.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,ye.__webglTexture,V)}else if(ge){let ye=I;for(let Be=0;Be<E.textures.length;Be++){let Pe=me.get(E.textures[Be]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Be,Pe.__webglTexture,V,ye)}}else if(E!==null&&V!==0){let ye=me.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ye.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(E,I,V,X,L,re,ge,_e=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){ae.bindFramebuffer(R.FRAMEBUFFER,ye);try{let Be=E.textures[_e],Pe=Be.format,Re=Be.type;if(!le.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-X&&V>=0&&V<=E.height-L&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(I,V,X,L,Me.convert(Pe),Me.convert(Re),re))}finally{let Be=U!==null?me.get(U).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,I,V,X,L,re,ge,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(I>=0&&I<=E.width-X&&V>=0&&V<=E.height-L){ae.bindFramebuffer(R.FRAMEBUFFER,ye);let Be=E.textures[_e],Pe=Be.format,Re=Be.type;if(!le.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.bufferData(R.PIXEL_PACK_BUFFER,re.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(I,V,X,L,Me.convert(Pe),Me.convert(Re),0);let dt=U!==null?me.get(U).__webglFramebuffer:null;ae.bindFramebuffer(R.FRAMEBUFFER,dt);let It=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await YS(R,It,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,re),R.deleteBuffer(Ze),R.deleteSync(It),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,V=0){let X=Math.pow(2,-V),L=Math.floor(E.image.width*X),re=Math.floor(E.image.height*X),ge=I!==null?I.x:0,_e=I!==null?I.y:0;Ue.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,ge,_e,L,re),ae.unbindTexture()};let Vo=R.createFramebuffer(),ko=R.createFramebuffer();this.copyTextureToTexture=function(E,I,V=null,X=null,L=0,re=null){re===null&&(L!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=L,L=0):re=0);let ge,_e,ye,Be,Pe,Re,Ze,dt,It,St=E.isCompressedTexture?E.mipmaps[re]:E.image;if(V!==null)ge=V.max.x-V.min.x,_e=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Be=V.min.x,Pe=V.min.y,Re=V.isBox3?V.min.z:0;else{let ii=Math.pow(2,-L);ge=Math.floor(St.width*ii),_e=Math.floor(St.height*ii),E.isDataArrayTexture?ye=St.depth:E.isData3DTexture?ye=Math.floor(St.depth*ii):ye=1,Be=0,Pe=0,Re=0}X!==null?(Ze=X.x,dt=X.y,It=X.z):(Ze=0,dt=0,It=0);let gt=Me.convert(I.format),De=Me.convert(I.type),Ut;I.isData3DTexture?(Ue.setTexture3D(I,0),Ut=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ue.setTexture2DArray(I,0),Ut=R.TEXTURE_2D_ARRAY):(Ue.setTexture2D(I,0),Ut=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);let st=R.getParameter(R.UNPACK_ROW_LENGTH),On=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_a=R.getParameter(R.UNPACK_SKIP_PIXELS),Fn=R.getParameter(R.UNPACK_SKIP_ROWS),Wo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Re);let Bt=E.isDataArrayTexture||E.isData3DTexture,ni=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){let ii=me.get(E),_n=me.get(I),bn=me.get(ii.__renderTarget),$f=me.get(_n.__renderTarget);ae.bindFramebuffer(R.READ_FRAMEBUFFER,bn.__webglFramebuffer),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,$f.__webglFramebuffer);for(let Tr=0;Tr<ye;Tr++)Bt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(E).__webglTexture,L,Re+Tr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(I).__webglTexture,re,It+Tr)),R.blitFramebuffer(Be,Pe,ge,_e,Ze,dt,ge,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(L!==0||E.isRenderTargetTexture||me.has(E)){let ii=me.get(E),_n=me.get(I);ae.bindFramebuffer(R.READ_FRAMEBUFFER,Vo),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,ko);for(let bn=0;bn<ye;bn++)Bt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ii.__webglTexture,L,Re+bn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ii.__webglTexture,L),ni?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_n.__webglTexture,re,It+bn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_n.__webglTexture,re),L!==0?R.blitFramebuffer(Be,Pe,ge,_e,Ze,dt,ge,_e,R.COLOR_BUFFER_BIT,R.NEAREST):ni?R.copyTexSubImage3D(Ut,re,Ze,dt,It+bn,Be,Pe,ge,_e):R.copyTexSubImage2D(Ut,re,Ze,dt,Be,Pe,ge,_e);ae.bindFramebuffer(R.READ_FRAMEBUFFER,null),ae.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ni?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ut,re,Ze,dt,It,ge,_e,ye,gt,De,St.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,re,Ze,dt,It,ge,_e,ye,gt,St.data):R.texSubImage3D(Ut,re,Ze,dt,It,ge,_e,ye,gt,De,St):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,re,Ze,dt,ge,_e,gt,De,St.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,re,Ze,dt,St.width,St.height,gt,St.data):R.texSubImage2D(R.TEXTURE_2D,re,Ze,dt,ge,_e,gt,De,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,st),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,On),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_a),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Wo),re===0&&I.generateMipmaps&&R.generateMipmap(Ut),ae.unbindTexture()},this.initRenderTarget=function(E){me.get(E).__webglFramebuffer===void 0&&Ue.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ue.setTextureCube(E,0):E.isData3DTexture?Ue.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ue.setTexture2DArray(E,0):Ue.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){b=0,w=0,U=null,ae.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}};var fU=(()=>{let t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new ki;return n.setAttribute("position",new gn(t,3)),n.setAttribute("uv",new gn(e,2)),n})(),vr=class v0{static get fullscreenGeometry(){return fU}constructor(e="Pass",n=new cr,i=new fr){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new vn(v0.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new cr),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Xi){}render(e,n,i,s,r){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(let e of Object.keys(this)){let n=this[e];(n instanceof Kt||n instanceof Di||n instanceof Zt||n instanceof v0)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},dU=class extends vr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,s){let r=t.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},pU=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,mU="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",gU=class extends Jt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new yt(null),depthBuffer:new yt(null),channelWeights:new yt(null),opacity:new yt(1)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:pU,vertexShader:mU}),this.depthFunc=Po}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){let e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){let e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},vU=class extends vr{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new gU,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new Kt(1,1,{minFilter:Wt,magFilter:Wt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,s){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==rn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Ct&&(this.renderTarget.texture.colorSpace=Ct))}},EM=new et,wM=class extends vr{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,s){let r=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=r!==null,c=a>=0;l?(t.getClearColor(EM),t.setClearColor(r,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(EM,o):c&&t.setClearAlpha(o)}},xU=class extends vr{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new wM(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,s){let r=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,d=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}};function yU(t,e){let n=t.getContext();if(e<=0||typeof n.renderbufferStorageMultisample!="function")return 0;let i=n.getParameter(n.MAX_SAMPLES),s=Math.min(e,i);if(s<=0)return 0;let r=n.getParameter(n.RENDERBUFFER_BINDING),a=n.createRenderbuffer();try{return n.bindRenderbuffer(n.RENDERBUFFER,a),n.renderbufferStorageMultisample(n.RENDERBUFFER,s,n.RGBA8,1,1),s}catch{return 0}finally{n.bindRenderbuffer(n.RENDERBUFFER,r),n.deleteRenderbuffer(a)}}var p0=1/1e3,_U=1e3,AU=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*p0}get fixedDelta(){return this._fixedDelta*p0}set fixedDelta(t){this._fixedDelta=t*_U}get elapsed(){return this._elapsed*p0}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},x0=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:s=rn}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new vU,this.depthRenderTarget=null,this.passes=[],this.timer=new AU,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){let e=this.renderer===null?t:yU(this.renderer,t);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let e=t.getSize(new He),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===rn&&t.outputColorSpace===Ct&&(this.inputBuffer.texture.colorSpace=Ct,this.outputBuffer.texture.colorSpace=Ct,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;this.multisampling=s,t.autoClear=!1,this.setSize(e.width,e.height);for(let r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){let n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){let t=new Ms;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=gr,t.type=mr):t.type=xi;let e=new Ms;e.format=t.format,e.type=t.type,e.name="EffectComposer.OutputDepth";let n=new Ms;n.format=t.format,n.type=t.type,n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new Kt(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(t){let e=this.renderer,n=this.depthRenderTarget,i=e.properties,s=e.getContext();e.setRenderTarget(n);let r=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,r),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let t=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,n,i){let s=this.renderer,r=s===null?new He:s.getDrawingBufferSize(new He),a=new Kt(r.width,r.height,{minFilter:Wt,magFilter:Wt,samples:i,stencilBuffer:e,depthBuffer:t,type:n});return n===rn&&s!==null&&s.outputColorSpace===Ct&&(a.texture.colorSpace=Ct),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(let e of this.passes)e.mainScene=t}setMainCamera(t){for(let e of this.passes)e.mainCamera=t}addPass(t,e){let n=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new He),r=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(s.width,s.height),t.initialize(i,r,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let o of n)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){let e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){let r=this.stableDepthTexture;if(r!==null){let a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===r&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let e=this.renderer,n=this.copyPass,i=this.inputBuffer,s=this.outputBuffer,r,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(let o of this.passes)if(o.enabled){if(o.render(e,i,s,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;let l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),n.render(e,i,s,t,a),c.setFunc(l.EQUAL,1,4294967295)}r=i,i=s,s=r}o instanceof xU?a=!0:o instanceof dU&&(a=!1)}}setSize(t,e,n){let i=this.renderer,s=i.getSize(new He);(t===void 0||e===void 0)&&(t=s.width,e=s.height),(s.width!==t||s.height!==e)&&i.setSize(t,e,n);let r=i.getDrawingBufferSize(new He);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(r.width,r.height);for(let a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],vr.fullscreenGeometry.dispose()}},ma={NONE:0,DEPTH:1,CONVOLUTION:2},rt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},SU=class{constructor(){this.shaderParts=new Map([[rt.FRAGMENT_HEAD,null],[rt.FRAGMENT_MAIN_UV,null],[rt.FRAGMENT_MAIN_IMAGE,null],[rt.VERTEX_HEAD,null],[rt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ma.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ri}};var m0=!1,TM=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Tn:n=this.materialsFlatShadedDoubleSide;break;case Xt:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Tn:n=this.materialsDoubleSide;break;case Xt:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Jt))return t.clone();let e=t.uniforms,n=new Map;for(let s in e){let r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,n.set(s,r))}let i=t.clone();for(let s of n)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){let e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(let n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Ci;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Xt,i}),this.materialsDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Tn,i}),this.materialsFlatShaded=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Xt,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{let i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Tn,i})}}render(t,e,n){let i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,m0){let s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(let r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{let s=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=s}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return m0}static set workaroundEnabled(t){m0=t}};var tt={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},MU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",TU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",YU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jU="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",$U="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",e3="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",t3=new Map([[tt.ADD,MU],[tt.ALPHA,EU],[tt.AVERAGE,TU],[tt.COLOR,bU],[tt.COLOR_BURN,wU],[tt.COLOR_DODGE,CU],[tt.DARKEN,RU],[tt.DIFFERENCE,DU],[tt.DIVIDE,UU],[tt.DST,null],[tt.EXCLUSION,BU],[tt.HARD_LIGHT,IU],[tt.HARD_MIX,LU],[tt.HUE,PU],[tt.INVERT,NU],[tt.INVERT_RGB,OU],[tt.LIGHTEN,FU],[tt.LINEAR_BURN,zU],[tt.LINEAR_DODGE,HU],[tt.LINEAR_LIGHT,GU],[tt.LUMINOSITY,VU],[tt.MULTIPLY,kU],[tt.NEGATION,WU],[tt.NORMAL,XU],[tt.OVERLAY,YU],[tt.PIN_LIGHT,qU],[tt.REFLECT,QU],[tt.SATURATION,ZU],[tt.SCREEN,KU],[tt.SOFT_LIGHT,JU],[tt.SRC,jU],[tt.SUBTRACT,$U],[tt.VIVID_LIGHT,e3]]),n3=class extends Jn{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new yt(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return t3.get(this.blendFunction)}};var y0=class extends Jn{constructor(t,e,{attributes:n=ma.NONE,blendFunction:i=tt.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new n3(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ri,this._outputColorSpace=ei}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Xi){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(let t of Object.keys(this)){let e=this[t];(e instanceof Kt||e instanceof Di||e instanceof Zt||e instanceof vr)&&this[t].dispose()}}};var eN=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])];var _0=class extends vr{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new wM,this.overrideMaterialManager=n===null?null:new TM(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){let t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){let e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new TM(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,s){let r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=t.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,r,a):t.render(r,a),a.layers.mask=l,r.background=c,t.shadowMap.autoUpdate=h}};var tN=Math.PI*.5;var i3=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,s3="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",r3=class extends Jt{constructor(t,e,n,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"180".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new yt(null),depthBuffer:new yt(null),resolution:new yt(new He),texelSize:new yt(new He),cameraNear:new yt(.3),cameraFar:new yt(1e3),aspect:new yt(1),time:new yt(0)},blending:$n,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Xi){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=i3.replace(rt.FRAGMENT_HEAD,t.get(rt.FRAGMENT_HEAD)||"").replace(rt.FRAGMENT_MAIN_UV,t.get(rt.FRAGMENT_MAIN_UV)||"").replace(rt.FRAGMENT_MAIN_IMAGE,t.get(rt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=s3.replace(rt.VERTEX_HEAD,t.get(rt.VERTEX_HEAD)||"").replace(rt.VERTEX_MAIN_SUPPORT,t.get(rt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(let e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(let e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(let e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof mn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){let n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return rt}};var iN=Number("180".replace(/\D+/g,"")),pa=255/256,sN=new Float32Array([pa/256**3,pa/256**2,pa/256,pa]),rN=new Float32Array([pa,pa/256,pa/256**2,1/256**3]);function bM(t,e,n){for(let i of e){let s="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),r=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(r,s))}}function a3(t,e,n){let i=e.getFragmentShader(),s=e.getVertexShader(),r=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(n.attributes&ma.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts,c=l.get(rt.FRAGMENT_HEAD)||"",h=l.get(rt.FRAGMENT_MAIN_UV)||"",d=l.get(rt.FRAGMENT_MAIN_IMAGE)||"",f=l.get(rt.VERTEX_HEAD)||"",p=l.get(rt.VERTEX_MAIN_SUPPORT)||"",g=new Set,_=new Set;if(a&&(h+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){let v=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);p+=`	${t}MainSupport(`,p+=v?`vUv);
`:`);
`;for(let x of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let y of x[1].split(/\s*,\s*/))n.varyings.add(y),g.add(y),_.add(y);for(let x of s.matchAll(o))_.add(x[1])}for(let v of i.matchAll(o))_.add(v[1]);for(let v of e.defines.keys())_.add(v.replace(/\([\w\s,]*\)/g,""));for(let v of e.uniforms.keys())_.add(v);_.delete("while"),_.delete("for"),_.delete("if"),e.uniforms.forEach((v,x)=>n.uniforms.set(t+x.charAt(0).toUpperCase()+x.slice(1),v)),e.defines.forEach((v,x)=>n.defines.set(t+x.charAt(0).toUpperCase()+x.slice(1),v));let m=new Map([["fragment",i],["vertex",s]]);bM(t,_,n.defines),bM(t,_,m),i=m.get("fragment"),s=m.get("vertex");let u=e.blendMode;if(n.blendModes.set(u.blendFunction,u),r){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(d+=e.inputColorSpace===Ct?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ei?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);let v=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${t}MainImage(color0, UV, `,(n.attributes&ma.DEPTH)!==0&&v.test(i)&&(d+="depth, ",n.readDepth=!0),d+=`color1);
	`;let x=t+"BlendOpacity";n.uniforms.set(x,u.opacity),d+=`color0 = blend${u.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,s!==null&&(f+=s+`
`),l.set(rt.FRAGMENT_HEAD,c),l.set(rt.FRAGMENT_MAIN_UV,h),l.set(rt.FRAGMENT_MAIN_IMAGE,d),l.set(rt.VERTEX_HEAD,f),l.set(rt.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(let v of e.extensions)n.extensions.add(v)}}var A0=class extends vr{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new r3(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(let e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(let e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){let e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let t=new SU,e=0;for(let a of this.effects)if(a.blendMode.blendFunction===tt.DST)t.attributes|=a.getAttributes()&ma.DEPTH;else{if((t.attributes&a.getAttributes()&ma.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);a3("e"+e++,a,t)}let n=t.shaderParts.get(rt.FRAGMENT_HEAD),i=t.shaderParts.get(rt.FRAGMENT_MAIN_IMAGE),s=t.shaderParts.get(rt.FRAGMENT_MAIN_UV),r=/\bblend\b/g;for(let a of t.blendModes.values())n+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(t.attributes&ma.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ct&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(rt.FRAGMENT_HEAD,n),t.shaderParts.set(rt.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(rt.FRAGMENT_MAIN_UV,s);for(let[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Xi){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(let n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,s){for(let r of this.effects)r.update(t,e,i);if(!this.skipRendering||this.renderToScreen){let r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(let n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(let i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==rn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};var oN=[new Float32Array(3),new Float32Array(3)],lN=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],cN=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var uN=[new Float32Array(2),new Float32Array(2)];var hN=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),fN=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],dN=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],pN=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var mN=new Map([[yn(0,0,0,0),new Float32Array([0,0,0,0])],[yn(0,0,0,1),new Float32Array([0,0,0,1])],[yn(0,0,1,0),new Float32Array([0,0,1,0])],[yn(0,0,1,1),new Float32Array([0,0,1,1])],[yn(0,1,0,0),new Float32Array([0,1,0,0])],[yn(0,1,0,1),new Float32Array([0,1,0,1])],[yn(0,1,1,0),new Float32Array([0,1,1,0])],[yn(0,1,1,1),new Float32Array([0,1,1,1])],[yn(1,0,0,0),new Float32Array([1,0,0,0])],[yn(1,0,0,1),new Float32Array([1,0,0,1])],[yn(1,0,1,0),new Float32Array([1,0,1,0])],[yn(1,0,1,1),new Float32Array([1,0,1,1])],[yn(1,1,0,0),new Float32Array([1,1,0,0])],[yn(1,1,0,1),new Float32Array([1,1,0,1])],[yn(1,1,1,0),new Float32Array([1,1,1,0])],[yn(1,1,1,1),new Float32Array([1,1,1,1])]]);function g0(t,e,n){return t+(e-t)*n}function yn(t,e,n,i){let s=g0(t,e,.75),r=g0(n,i,1-.25);return g0(s,r,1-.125)}var xr=Bi(Ma());var DM=Bi(Zr()),o3=()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);let i=new Zt(e);i.minFilter=Wt,i.magFilter=Wt,i.generateMipmaps=!1;let s=[],r=null,a=64,o=.1*64,l=1/a,c=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},h=p=>{let g={x:p.x*64,y:(1-p.y)*64},_=1,m=y=>Math.sin(y*Math.PI/2),u=y=>-y*(y-2);p.age<a*.3?_=m(p.age/(a*.3)):_=u(1-(p.age-a*.3)/(a*.7))||0,_*=p.force;let v=`${(p.vx+1)/2*255}, ${(p.vy+1)/2*255}, ${_*255}`,x=320;n.shadowOffsetX=x,n.shadowOffsetY=x,n.shadowBlur=o,n.shadowColor=`rgba(${v},${.22*_})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(g.x-x,g.y-x,o,0,Math.PI*2),n.fill()};return{canvas:e,texture:i,addTouch:p=>{let g=0,_=0,m=0;if(r){let u=p.x-r.x,v=p.y-r.y;if(u===0&&v===0)return;let x=u*u+v*v,y=Math.sqrt(x);_=u/(y||1),m=v/(y||1),g=Math.min(x*1e4,1)}r={x:p.x,y:p.y},s.push({x:p.x,y:p.y,age:0,force:g,vx:_,vy:m})},update:()=>{c();for(let p=s.length-1;p>=0;p--){let g=s[p],_=g.force*l*(1-g.age/a);g.x+=g.vx*_,g.y+=g.vy*_,g.age++,g.age>a&&s.splice(p,1)}for(let p=0;p<s.length;p++)h(s[p]);i.needsUpdate=!0},set radiusScale(p){o=.1*64*p},get radiusScale(){return o/(.1*64)},size:64}},l3=(t,e)=>{let n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new y0("LiquidEffect",n,{uniforms:new Map([["uTexture",new yt(t)],["uStrength",new yt(e?.strength??.025)],["uTime",new yt(0)],["uFreq",new yt(e?.freq??4.5)]])})},CM={square:0,circle:1,triangle:2,diamond:3},c3=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,u3=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,S0=10,h3=({variant:t="square",pixelSize:e=3,color:n="#B497CF",className:i,style:s,antialias:r=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:h=1,pixelSizeJitter:d=0,enableRipples:f=!0,rippleIntensityScale:p=1,rippleThickness:g=.1,rippleSpeed:_=.3,liquidWobbleSpeed:m=4.5,autoPauseOffscreen:u=!0,speed:v=.5,transparent:x=!0,edgeFade:y=.5,noiseAmount:T=0})=>{let b=(0,xr.useRef)(null),w=(0,xr.useRef)({visible:!0}),U=(0,xr.useRef)(v),S=(0,xr.useRef)(null),M=(0,xr.useRef)(null);return(0,xr.useEffect)(()=>{let D=b.current;if(!D)return;U.current=v;let O=["antialias","liquid","noiseAmount"],G={antialias:r,liquid:l,noiseAmount:T},z=!1;if(!S.current)z=!0;else if(M.current){for(let F of O)if(M.current[F]!==G[F]){z=!0;break}}if(z){if(S.current){let le=S.current;le.resizeObserver?.disconnect(),cancelAnimationFrame(le.raf),le.quad?.geometry.dispose(),le.material.dispose(),le.composer?.dispose(),le.renderer.dispose(),le.renderer.forceContextLoss(),le.renderer.domElement.parentElement===D&&D.removeChild(le.renderer.domElement),S.current=null}let F=document.createElement("canvas"),H=new Qf({canvas:F,antialias:r,alpha:!0,powerPreference:"high-performance"});H.domElement.style.width="100%",H.domElement.style.height="100%",H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.appendChild(H.domElement),x?H.setClearAlpha(0):H.setClearColor(0,1);let Y={uResolution:{value:new He(0,0)},uTime:{value:0},uColor:{value:new et(n)},uClickPos:{value:Array.from({length:S0},()=>new He(-1,-1))},uClickTimes:{value:new Float32Array(S0)},uShapeType:{value:CM[t]??0},uPixelSize:{value:e*H.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:d},uEnableRipples:{value:f?1:0},uRippleSpeed:{value:_},uRippleThickness:{value:g},uRippleIntensity:{value:p},uEdgeFade:{value:y}},k=new cr,oe=new fr(-1,1,1,-1,0,1),pe=new Jt({vertexShader:c3,fragmentShader:u3,uniforms:Y,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:_c}),Ee=new ra(2,2),Le=new vn(Ee,pe);k.add(Le);let it=new dc,ct=()=>{let le=D.clientWidth||1,ae=D.clientHeight||1;H.setSize(le,ae,!1),Y.uResolution.value.set(H.domElement.width,H.domElement.height),S.current?.composer&&S.current.composer.setSize(H.domElement.width,H.domElement.height),Y.uPixelSize.value=e*H.getPixelRatio()};ct();let Fe=new ResizeObserver(ct);Fe.observe(D);let $=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){let le=new Uint32Array(1);return window.crypto.getRandomValues(le),le[0]/4294967295}return Math.random()})()*1e3,te,be,ve;if(l){be=o3(),be.radiusScale=h,te=new x0(H);let le=new _0(k,oe);ve=l3(be.texture,{strength:c,freq:m});let ae=new A0(oe,ve);ae.renderToScreen=!0,te.addPass(le),te.addPass(ae)}if(T>0){te||(te=new x0(H),te.addPass(new _0(k,oe)));let le=new y0("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new yt(0)],["uAmount",new yt(T)]])}),ae=new A0(oe,le);ae.renderToScreen=!0,te&&te.passes.length>0&&te.passes.forEach(Xe=>Xe.renderToScreen=!1),te.addPass(ae)}te&&te.setSize(H.domElement.width,H.domElement.height);let We=le=>{let ae=H.domElement.getBoundingClientRect(),Xe=H.domElement.width/ae.width,me=H.domElement.height/ae.height,Ue=(le.clientX-ae.left)*Xe,_t=(ae.height-(le.clientY-ae.top))*me;return{fx:Ue,fy:_t,w:H.domElement.width,h:H.domElement.height}},at=le=>{let{fx:ae,fy:Xe}=We(le),me=S.current?.clickIx??0;Y.uClickPos.value[me].set(ae,Xe),Y.uClickTimes.value[me]=Y.uTime.value,S.current&&(S.current.clickIx=(me+1)%S0)},R=le=>{if(!be)return;let{fx:ae,fy:Xe,w:me,h:Ue}=We(le);be.addTouch({x:ae/me,y:Xe/Ue})};H.domElement.addEventListener("pointerdown",at,{passive:!0}),H.domElement.addEventListener("pointermove",R,{passive:!0});let Je=0,Ce=()=>{if(S.current){if(u&&!w.current.visible){Je=requestAnimationFrame(Ce),S.current.raf=Je;return}Y.uTime.value=$+it.getElapsedTime()*U.current,ve&&(ve.uniforms.get("uTime").value=Y.uTime.value),te?(be&&be.update(),te.passes.forEach(le=>{let ae=le.effects;ae&&ae.forEach(Xe=>{let me=Xe.uniforms?.get("uTime");me&&(me.value=Y.uTime.value)})}),te.render()):H.render(k,oe),Je=requestAnimationFrame(Ce),S.current.raf=Je}};Je=requestAnimationFrame(Ce),S.current={renderer:H,scene:k,camera:oe,material:pe,clock:it,clickIx:0,uniforms:Y,resizeObserver:Fe,raf:Je,quad:Le,timeOffset:$,composer:te,touch:be,liquidEffect:ve}}else{let F=S.current;if(F.uniforms.uShapeType.value=CM[t]??0,F.uniforms.uPixelSize.value=e*F.renderer.getPixelRatio(),F.uniforms.uColor.value.set(n),F.uniforms.uScale.value=a,F.uniforms.uDensity.value=o,F.uniforms.uPixelJitter.value=d,F.uniforms.uEnableRipples.value=f?1:0,F.uniforms.uRippleIntensity.value=p,F.uniforms.uRippleThickness.value=g,F.uniforms.uRippleSpeed.value=_,F.uniforms.uEdgeFade.value=y,x?F.renderer.setClearAlpha(0):F.renderer.setClearColor(0,1),F.liquidEffect){let H=F.liquidEffect;H&&(H.value=c);let Y=F.liquidEffect.uniforms.get("uFreq");Y&&(Y.value=m)}F.touch&&(F.touch.radiusScale=h)}return M.current=G,()=>{if(S.current&&z||!S.current)return;let F=S.current;F.resizeObserver?.disconnect(),cancelAnimationFrame(F.raf),F.quad?.geometry.dispose(),F.material.dispose(),F.composer?.dispose(),F.renderer.dispose(),F.renderer.forceContextLoss(),F.renderer.domElement.parentElement===D&&D.removeChild(F.renderer.domElement),S.current=null}},[r,l,T,e,a,o,f,p,g,_,d,y,x,c,h,m,u,t,n,v]),(0,DM.jsx)("div",{ref:b,className:`pixel-blast-container ${i??""}`,style:s,"aria-label":"PixelBlast interactive background"})},RM=h3;var Jf=Bi(Zr()),M0=class extends UM.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(){let e=document.getElementById("appBackgroundEffects");e.dataset.unavailable="true",e.classList.add("static-background")}render(){return this.state.failed?null:this.props.children}},jf=document.getElementById("appBackgroundEffects"),f3=(0,BM.createRoot)(jf),yr={};function E0(){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=!document.hidden&&!t;jf.dataset.background=yr.background||"none",f3.render((0,Jf.jsx)(M0,{children:e&&yr.background==="pattern"?(0,Jf.jsx)(zA,{color:yr.color,backgroundColor:"transparent",interactive:!1,speed:.25,opacity:.35}):e&&yr.background==="pixel"?(0,Jf.jsx)(RM,{color:yr.color,pixelSize:3,speed:.35,enableRipples:!1,antialias:!1,patternDensity:.65}):null},yr.background)),jf.classList.toggle("static-background",t&&["pattern","pixel"].includes(yr.background))}window.MultiMindBackgrounds={update(t){yr=t,delete jf.dataset.unavailable,E0()}};document.addEventListener("visibilitychange",E0);matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",E0);})();
/*! For license information please see background-effects.js.LEGAL.txt */
