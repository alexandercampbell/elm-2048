(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(){!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function o(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return n(r,t,e,u,i,o)}}}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function f(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function c(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function s(n,r,t,e,u,i,o){return 6===n.a?n.f(r,t,e,u,i,o):n(r)(t)(e)(u)(i)(o)}var d=e(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),l=t(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,L(t,r)}),b=t(function(n,r){return r[n]}),h={$:0};function g(n,r){return{$:1,a:n,b:r}}var p=t(g);function $(n){for(var r=h,t=n.length;t--;)r=g(n[t],r);return r}function m(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var w=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(a(n,r.a,t.a));return $(e)}),y=t(function(n,r){return $(m(r).sort(function(r,t){var e=a(n,r,t);return e===dr?0:e===lr?-1:1}))});function k(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function A(n,r){for(var t,e=[],u=_(n,r,0,e);u&&(t=e.pop());u=_(t.a,t.b,0,e));return u}function _(n,r,t,e){if(t>100)return e.push(L(n,r)),!0;if(n===r)return!0;if("object"!==typeof n||null===n||null===r)return"function"===typeof n&&k(5),!1;for(var u in n.$<0&&(n=pr(n),r=pr(r)),n)if(!_(n[u],r[u],t+1,e))return!1;return!0}function E(n,r,t){if("object"!==typeof n)return n===r?0:n<r?-1:1;if("undefined"===typeof n.$)return(t=E(n.a,r.a))?t:(t=E(n.b,r.b))?t:E(n.c,r.c);for(;n.b&&r.b&&!(t=E(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var j=t(function(n,r){var t=E(n,r);return t<0?lr:t?hr:dr}),N=0;function L(n,r){return{a:n,b:r}}function x(n,r,t){return{a:n,b:r,c:t}}function T(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function C(n,r){if("string"===typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var O=t(function(n,r){return n+r}),S=Math.ceil,F=Math.floor,W=Math.log;function B(n){return{$:0,a:n}}function R(n){return{$:2,b:n,c:null}}var D=t(function(n,r){return{$:3,b:n,d:r}}),q=0;function K(n){var r={$:0,e:q++,f:n,g:null,h:[]};return M(r),r}function J(n){return R(function(r){r(B(K(n)))})}function Z(n,r){n.h.push(r),M(n)}var z=t(function(n,r){return R(function(t){Z(n,r),t(B(N))})}),I=!1,G=[];function M(n){if(G.push(n),!I){for(I=!0;n=G.shift();)V(n);I=!1}}function V(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,M(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var P=t(function(n,r){return r.join(n)}),Q=e(function(n,r,t){return t.slice(n,r)}),U=t(function(n,r){return r.indexOf(n)>-1}),Y=t(function(n,r){return 0===r.indexOf(n)}),H=t(function(n,r){var t=n.length;if(t<1)return h;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return $(u)});function X(n){return{$:2,b:n}}X(function(n){return"number"!==typeof n?cn("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Ct(n):!isFinite(n)||n%1?cn("an INT",n):Ct(n)}),X(function(n){return"boolean"===typeof n?Ct(n):cn("a BOOL",n)}),X(function(n){return"number"===typeof n?Ct(n):cn("a FLOAT",n)}),X(function(n){return Ct(dn(n))});var nn=X(function(n){return"string"===typeof n?Ct(n):n instanceof String?Ct(n+""):cn("a STRING",n)}),rn=t(function(n,r){return{$:6,d:n,b:r}});var tn=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),en=t(function(n,r){return un(n,ln(r))});function un(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Ct(n.c):cn("null",r);case 3:return an(r)?on(n.b,r,$):cn("a LIST",r);case 4:return an(r)?on(n.b,r,fn):cn("an ARRAY",r);case 6:var t=n.d;if("object"!==typeof r||null===r||!(t in r))return cn("an OBJECT with a field named `"+t+"`",r);var e=un(n.b,r[t]);return jt(e)?e:Tt(a(St,t,e.a));case 7:var u=n.e;return an(r)?u<r.length?(e=un(n.b,r[u]),jt(e)?e:Tt(a(Ft,u,e.a))):cn("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):cn("an ARRAY",r);case 8:if("object"!==typeof r||null===r||an(r))return cn("an OBJECT",r);var i=h;for(var o in r)if(r.hasOwnProperty(o)){if(e=un(n.b,r[o]),!jt(e))return Tt(a(St,o,e.a));i=g(L(o,e.a),i)}return Ct(Sr(i));case 9:for(var f=n.f,c=n.g,v=0;v<c.length;v++){if(e=un(c[v],r),!jt(e))return e;f=f(e.a)}return Ct(f);case 10:return e=un(n.b,r),jt(e)?un(n.h(e.a),r):e;case 11:for(var s=h,d=n.g;d.b;d=d.b){if(e=un(d.a,r),jt(e))return e;s=g(e.a,s)}return Tt(Wt(Sr(s)));case 1:return Tt(a(Ot,n.a,dn(r)));case 0:return Ct(n.a)}}function on(n,r,t){for(var e=r.length,u=Array(e),i=0;i<e;i++){var o=un(n,r[i]);if(!jt(o))return Tt(a(Ft,i,o.a));u[i]=o.a}return Ct(t(u))}function an(n){return Array.isArray(n)||"undefined"!==typeof FileList&&n instanceof FileList}function fn(n){return a(xt,n.length,function(r){return n[r]})}function cn(n,r){return Tt(a(Ot,"Expecting "+n,dn(r)))}function vn(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return vn(n.b,r.b);case 6:return n.d===r.d&&vn(n.b,r.b);case 7:return n.e===r.e&&vn(n.b,r.b);case 9:return n.f===r.f&&sn(n.g,r.g);case 10:return n.h===r.h&&vn(n.b,r.b);case 11:return sn(n.g,r.g)}}function sn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!vn(n[e],r[e]))return!1;return!0}function dn(n){return n}function ln(n){return n}dn(null);var bn={};function hn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function gn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,o=n.f;return t.h=K(a(D,function n(r){return a(D,n,{$:5,b:function(n){var a=n.a;return 0===n.$?f(u,t,a,r):i&&o?c(e,t,a.i,a.j,r):f(e,t,i?a.i:a.j,r)}})},n.b))}var pn,$n=t(function(n,r){return R(function(t){n.g(r),t(B(N))})}),mn=t(function(n,r){return a(z,n.h,{$:0,a:r})});function wn(n){return function(r){return{$:1,k:n,l:r}}}function yn(n,r,t){var e={};for(var u in kn(!0,r,e,null),kn(!1,t,e,null),n)Z(n[u],{$:"fx",a:e[u]||{i:h,j:h}})}function kn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){return a(n?bn[t].e:bn[t].f,function(n){for(var r=e;r;r=r.q)n=r.p(n);return n},r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:h,j:h},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,i,t[u]));case 2:for(var o=r.m;o.b;o=o.b)kn(n,o.a,t,e);return;case 3:return void kn(n,r.o,t,{p:r.n,q:e})}}var An="undefined"!==typeof document?document:{};function _n(n,r){n.appendChild(r)}function En(n){return{$:0,a:n}}var jn=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b||0,u.push(o)}return i+=u.length,{$:1,c:r,d:Sn(t),e:u,f:n,b:i}})})(void 0),Nn=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b.b||0,u.push(o)}return i+=u.length,{$:2,c:r,d:Sn(t),e:u,f:n,b:i}})})(void 0);var Ln,xn=t(function(n,r){return{$:5,l:[n,r],m:function(){return n(r)},k:void 0}}),Tn=t(function(n,r){return{$:"a0",n:n,o:r}}),Cn=t(function(n,r){return{$:"a2",n:n,o:r}}),On=t(function(n,r){return{$:"a3",n:n,o:r}});function Sn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var o=r[e]||(r[e]={});"a3"===e&&"class"===u?Fn(o,u,i):o[u]=i}else"className"===u?Fn(r,u,ln(i)):r[u]=ln(i)}return r}function Fn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Wn(n,r){var t=n.$;if(5===t)return Wn(n.k||(n.k=n.m()),r);if(0===t)return An.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!==typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(o=Wn(e,i)).elm_event_node_ref=i,o}if(3===t)return Bn(o=n.h(n.g),r,n.d),o;var o=n.f?An.createElementNS(n.f,n.c):An.createElement(n.c);pn&&"a"==n.c&&o.addEventListener("click",pn(o)),Bn(o,r,n.d);for(var a=n.e,f=0;f<a.length;f++)_n(o,Wn(1===t?a[f]:a[f].b,r));return o}function Bn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Rn(n,u):"a0"===e?Kn(n,r,u):"a3"===e?Dn(n,u):"a4"===e?qn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Rn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Dn(n,r){for(var t in r){var e=r[t];"undefined"!==typeof e?n.setAttribute(t,e):n.removeAttribute(t)}}function qn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;"undefined"!==typeof i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function Kn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],o=e[u];if(i){if(o){if(o.q.$===i.$){o.q=i;continue}n.removeEventListener(u,o)}o=Jn(r,i),n.addEventListener(u,o,Ln&&{passive:we(i)<2}),e[u]=o}else n.removeEventListener(u,o),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ln=!0}}))}catch(n){}function Jn(n,r){function t(r){var e=t.q,u=un(e.a,r);if(jt(u)){for(var i,o=we(e),a=u.a,f=o?o<3?a.a:a.t:a,c=1==o?a.b:3==o&&a.af,v=(c&&r.stopPropagation(),(2==o?a.b:3==o&&a.ad)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)f=i(f);else for(var s=i.length;s--;)f=i[s](f);v=v.p}v(f,c)}}return t.q=r,t}function Zn(n,r){return n.$==r.$&&vn(n.a,r.a)}function zn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function In(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void zn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var o=n.l,a=r.l,f=o.length,c=f===a.length;c&&f--;)c=o[f]===a[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return In(n.k,r.k,v,0),void(v.length>0&&zn(t,1,e,v));case 4:for(var s=n.j,d=r.j,l=!1,b=n.k;4===b.$;)l=!0,"object"!==typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)l=!0,"object"!==typeof d?d=[d,h.j]:d.push(h.j),h=h.k;return l&&s.length!==d.length?void zn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,d):s===d)||zn(t,2,e,d),void In(b,h,t,e+1));case 0:return void(n.a!==r.a&&zn(t,3,e,r.a));case 1:return void Gn(n,r,t,e,Vn);case 2:return void Gn(n,r,t,e,Pn);case 3:if(n.h!==r.h)return void zn(t,0,e,r);var g=Mn(n.d,r.d);g&&zn(t,4,e,g);var p=r.i(n.g,r.g);return void(p&&zn(t,5,e,p))}}}function Gn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=Mn(n.d,r.d);i&&zn(t,4,e,i),u(n,r,t,e)}else zn(t,0,e,r)}function Mn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],o=r[u];i===o&&"value"!==u&&"checked"!==u||"a0"===t&&Zn(i,o)||((e=e||{})[u]=o)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"===typeof n[u]?"":null;else{var a=Mn(n[u],r[u]||{},u);a&&((e=e||{})[u]=a)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function Vn(n,r,t,e){var u=n.e,i=r.e,o=u.length,a=i.length;o>a?zn(t,6,e,{v:a,i:o-a}):o<a&&zn(t,7,e,{v:o,e:i});for(var f=o<a?o:a,c=0;c<f;c++){var v=u[c];In(v,i[c],t,++e),e+=v.b||0}}function Pn(n,r,t,e){for(var u=[],i={},o=[],a=n.e,f=r.e,c=a.length,v=f.length,s=0,d=0,l=e;s<c&&d<v;){var b=(j=a[s]).a,h=(N=f[d]).a,g=j.b,p=N.b,$=void 0,m=void 0;if(b!==h){var w=a[s+1],y=f[d+1];if(w){var k=w.a,A=w.b;m=h===k}if(y){var _=y.a,E=y.b;$=b===_}if($&&m)In(g,E,u,++l),Un(i,u,b,p,d,o),l+=g.b||0,Yn(i,u,b,A,++l),l+=A.b||0,s+=2,d+=2;else if($)l++,Un(i,u,h,p,d,o),In(g,E,u,l),l+=g.b||0,s+=1,d+=2;else if(m)Yn(i,u,b,g,++l),l+=g.b||0,In(A,p,u,++l),l+=A.b||0,s+=2,d+=1;else{if(!w||k!==_)break;Yn(i,u,b,g,++l),Un(i,u,h,p,d,o),l+=g.b||0,In(A,E,u,++l),l+=A.b||0,s+=2,d+=2}}else In(g,p,u,++l),l+=g.b||0,s++,d++}for(;s<c;){var j;Yn(i,u,(j=a[s]).a,g=j.b,++l),l+=g.b||0,s++}for(;d<v;){var N,L=L||[];Un(i,u,(N=f[d]).a,N.b,void 0,L),d++}(u.length>0||o.length>0||L)&&zn(t,8,e,{w:u,x:o,y:L})}var Qn="_elmW6BL";function Un(n,r,t,e,u,i){var o=n[t];if(!o)return i.push({r:u,A:o={c:0,z:e,r:u,s:void 0}}),void(n[t]=o);if(1===o.c){i.push({r:u,A:o}),o.c=2;var a=[];return In(o.z,e,a,o.r),o.r=u,void(o.s.s={w:a,A:o})}Un(n,r,t+Qn,e,u,i)}function Yn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var o=[];return In(e,i.z,o,u),void zn(r,9,u,{w:o,A:i})}Yn(n,r,t+Qn,e,u)}else{var a=zn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:a}}}function Hn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,o,a,f){for(var c=u[i],v=c.r;v===o;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(d=c.s.w).length>0&&r(t,e,d,0,o,a,f);else if(9===s){c.t=t,c.u=f;var d,l=c.s;l&&(l.A.s=t,(d=l.w).length>0&&r(t,e,d,0,o,a,f))}else c.t=t,c.u=f;if(!(c=u[++i])||(v=c.r)>a)return i}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,o+1,a,t.elm_event_node_ref)}for(var g=e.e,p=t.childNodes,$=0;$<g.length;$++){o++;var m=1===b?g[$]:g[$].b,w=o+(m.b||0);if(o<=v&&v<=w&&(!(c=u[i=r(p[$],m,u,i,o,w,f)])||(v=c.r)>a))return i;o=w}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),Xn(n,t))}function Xn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,i=nr(u,e);u===n&&(n=i)}return n}function nr(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=Wn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Bn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Xn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Wn(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var o=t.A;return"undefined"!==typeof o.r&&n.parentNode.removeChild(n),o.s=Xn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=An.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;_n(t,2===u.c?u.s:Wn(u.z,r.u))}return t}}(t.y,r);n=Xn(n,t.w);for(var u=t.x,i=0;i<u.length;i++){var o=u[i],a=o.A,f=2===a.c?a.s:Wn(a.z,r.u);n.insertBefore(f,n.childNodes[o.r])}return e&&_n(n,e),n}(n,r);case 5:return r.s(n);default:k(10)}}var rr=u(function(n,r,t,e){return function(n,r,t,e,u,i){var o=a(en,n,dn(r?r.flags:void 0));jt(o)||k(2);var f={},c=(o=t(o.a)).a,v=i(d,c),s=function(n,r){var t;for(var e in bn){var u=bn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=gn(u,r)}return t}(f,d);function d(n,r){v(c=(o=a(e,n,c)).a,r),yn(f,o.b,u(c))}return yn(f,o.b,u(c)),s?{ports:s}:{}}(r,e,n.aS,n.a$,n.aZ,function(r,t){var e=n.Q&&n.Q(r),u=n.a0,i=An.title,o=An.body,c=function n(r){if(3===r.nodeType)return En(r.textContent);if(1!==r.nodeType)return En("");for(var t=h,e=r.attributes,u=e.length;u--;){var i=e[u];t=g(a(On,i.name,i.value),t)}var o=r.tagName.toLowerCase(),c=h,v=r.childNodes;for(u=v.length;u--;)c=g(n(v[u]),c);return f(jn,o,t,c)}(o);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(tr(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&tr(e),t=2)}}(t,function(n){pn=e;var t=u(n),a=jn("body")(h)(t.aJ),f=function(n,r){var t=[];return In(n,r,t,0),t}(c,a);o=Hn(o,c,f,r),c=a,pn=0,i!==t.a_&&(An.title=i=t.a_)})})}),tr=("undefined"!==typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function er(){return Se(An.location.href).a||k(1)}var ur,ir,or=t(function(n,r){return a($e,de,R(function(){history.pushState({},"",r),n()}))}),ar={addEventListener:function(){},removeEventListener:function(){}},fr="undefined"!==typeof document?document:ar,cr="undefined"!==typeof window?window:ar,vr=e(function(n,r,t){return J(R(function(){function e(n){K(t(n))}return n.addEventListener(r,e,Ln&&{passive:!0}),function(){n.removeEventListener(r,e)}}))}),sr=t(function(n,r){var t=un(n,r);return jt(t)?lt(t.a):bt}),dr=1,lr=0,br=p,hr=2,gr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,i=f(n,t.b,t.c,f(gr,n,r,t.e));n=u,r=i,t=e}}),pr=function(n){return f(gr,e(function(n,r,t){return a(br,L(n,r),t)}),h,n)},$r=e(function(n,r,t){for(;;){if(E(n,r)>=1)return t;var e=n,u=r-1,i=a(br,r,t);n=e,r=u,t=i}}),mr=t(function(n,r){return f($r,n,r,h)}),wr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),yr={$:-2},kr=yr,Ar=kr,_r=i(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),Er=j,jr=i(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return v(_r,n,r,t,e,u);var i=e.d;return o=e.e,v(_r,0,e.b,e.c,v(_r,1,i.b,i.c,i.d,i.e),v(_r,1,r,t,o,u))}var o,a=u.b,f=u.c,c=u.d,s=u.e;return-1!==e.$||e.a?v(_r,n,a,f,v(_r,0,r,t,e,c),s):v(_r,0,r,t,v(_r,1,e.b,e.c,e.d,o=e.e),v(_r,1,a,f,c,s))}),Nr=e(function(n,r,t){if(-2===t.$)return v(_r,0,n,r,yr,yr);var e=t.a,u=t.b,i=t.c,o=t.d,c=t.e;switch(a(Er,n,u)){case 0:return v(jr,e,u,i,f(Nr,n,r,o),c);case 1:return v(_r,e,u,r,o,c);default:return v(jr,e,u,i,o,f(Nr,n,r,c))}}),Lr=e(function(n,r,t){var e=f(Nr,n,r,t);return-1!==e.$||e.a?e:v(_r,1,e.b,e.c,e.d,e.e)}),xr=t(function(n,r){return f(Lr,n,0,r)}),Tr=function(n){return f(wr,xr,Ar,n)},Cr=Tr(a(mr,1,16)),Or=O,Sr=function(n){return f(wr,br,h,n)},Fr=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var o=i.a,v=i.b;if(v.b){var s=v.a,d=v.b;if(d.b){var l=d.b;return a(n,u,a(n,o,a(n,s,a(n,d.a,t>500?f(wr,n,r,Sr(l)):c(Fr,n,r,t+1,l)))))}return a(n,u,a(n,o,a(n,s,r)))}return a(n,u,a(n,o,r))}return a(n,u,r)}return r}),Wr=e(function(n,r,t){return c(Fr,n,r,0,t)}),Br=t(function(n,r){return f(Wr,t(function(r,t){return a(br,n(r),t)}),h,r)}),Rr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Dr=S,qr=t(function(n,r){return W(r)/W(n)}),Kr=Dr(a(qr,2,32)),Jr=[],Zr=c(Rr,0,Kr,Jr,Jr),zr=function(n){return{$:1,a:n}},Ir=l,Gr=t(function(n,r){for(;;){var t=a(Ir,32,n),e=t.b,u=a(br,{$:0,a:t.a},r);if(!e.b)return Sr(u);n=e,r=u}}),Mr=t(function(n,r){for(;;){var t=Dr(r/32);if(1===t)return a(Ir,32,n).a;n=a(Gr,n,h),r=t}}),Vr=F,Pr=t(function(n,r){return E(n,r)>0?n:r}),Qr=function(n){return n.length},Ur=t(function(n,r){if(r.a){var t=32*r.a,e=Vr(a(qr,32,t-1)),u=n?Sr(r.d):r.d,i=a(Mr,u,r.a);return c(Rr,Qr(r.c)+t,a(Pr,5,e*Kr),i,r.c)}return c(Rr,Qr(r.c),Kr,Jr,r.c)}),Yr=e(function(n,r,t){for(;;){var e=a(Ir,32,n),u=e.a,i=e.b;if(E(Qr(u),32)<0)return a(Ur,!0,{d:r,a:t,c:u});n=i,r=a(br,zr(u),r),t+=1}}),Hr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.e,u=n,i=f(n,t.b,t.c,f(Hr,n,r,t.d));n=u,r=i,t=e}}),Xr=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.e.d.$||n.e.d.a){var r=n.d,t=n.e;return o=t.b,a=t.c,e=t.d,s=t.e,v(_r,1,n.b,n.c,v(_r,0,r.b,r.c,r.d,r.e),v(_r,0,o,a,e,s))}var e,u=n.d,i=n.e,o=i.b,a=i.c,f=(e=i.d).d,c=e.e,s=i.e;return v(_r,0,e.b,e.c,v(_r,1,n.b,n.c,v(_r,0,u.b,u.c,u.d,u.e),f),v(_r,1,o,a,c,s))}return n},nt=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.d.d.$||n.d.d.a){var r=n.d,t=n.e;return c=t.b,s=t.c,d=t.d,l=t.e,v(_r,1,e=n.b,u=n.c,v(_r,0,r.b,r.c,r.d,a=r.e),v(_r,0,c,s,d,l))}var e=n.b,u=n.c,i=n.d,o=i.d,a=i.e,f=n.e,c=f.b,s=f.c,d=f.d,l=f.e;return v(_r,0,i.b,i.c,v(_r,1,o.b,o.c,o.d,o.e),v(_r,1,e,u,a,v(_r,0,c,s,d,l)))}return n},rt=r(7,ir=function(n,r,t,e,u,i,o){if(-1!==i.$||i.a){n:for(;;){if(-1===o.$&&1===o.a){if(-1===o.d.$){if(1===o.d.a)return nt(r);break n}return nt(r)}break n}return r}return v(_r,t,i.b,i.c,i.d,v(_r,0,e,u,i.e,o))},function(n){return function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return ir(n,r,t,e,u,i,o)}}}}}}}),tt=function(n){if(-1===n.$&&-1===n.d.$){var r=n.a,t=n.b,e=n.c,u=n.d,i=u.d,o=n.e;if(1===u.a){if(-1!==i.$||i.a){var a=Xr(n);if(-1===a.$){var f=a.e;return v(jr,a.a,a.b,a.c,tt(a.d),f)}return yr}return v(_r,r,t,e,tt(u),o)}return v(_r,r,t,e,tt(u),o)}return yr},et=t(function(n,r){if(-2===r.$)return yr;var t,e,u,i,o,f,c,s,d=r.a,l=r.b,b=r.c,h=r.d,g=r.e;if(E(n,l)<0){if(-1===h.$&&1===h.a){var p=h.d;if(-1!==p.$||p.a){var $=Xr(r);if(-1===$.$){var m=$.e;return v(jr,$.a,$.b,$.c,a(et,n,$.d),m)}return yr}return v(_r,d,l,b,a(et,n,h),g)}return v(_r,d,l,b,a(et,n,h),g)}return a(ut,n,(e=n,u=r,i=d,o=l,f=b,c=h,s=g,7===(t=rt).a?t.f(e,u,i,o,f,c,s):t(e)(u)(i)(o)(f)(c)(s)))}),ut=t(function(n,r){if(-1===r.$){var t=r.a,e=r.b,u=r.c,i=r.d,o=r.e;if(A(n,e)){var f=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(o);return-1===f.$?v(jr,t,f.b,f.c,i,tt(o)):yr}return v(jr,t,e,u,i,a(et,n,o))}return yr}),it=t(function(n,r){var t=a(et,n,r);return-1!==t.$||t.a?t:v(_r,1,t.b,t.c,t.d,t.e)}),ot=t(function(n,r){return f(Hr,e(function(n,r,t){return a(it,n,t)}),n,r)}),at=t(function(n,r){return a(ot,n,r)}),ft=function(n){return t=n.b?a(at,Cr,function(n){return Tr(a(Br,function(n){return n.L},n))}(n)):Cr,u=t,(r=f(gr,e(function(n,r,t){return a(br,n,t)}),h,u)).b?f(Yr,r,h,0):Zr;var r,t,u},ct=function(n){return{$:3,a:n}},vt=4294967295>>>32-Kr,st=b,dt=e(function(n,r,t){for(;;){var e=a(st,vt&r>>>n,t);if(e.$)return a(st,vt&r,e.a);n-=Kr,r=r,t=e.a}}),lt=function(n){return{$:0,a:n}},bt={$:1},ht=t(function(n,r){var t=r.a,e=r.b,u=r.c,i=r.d;return n<0||E(n,t)>-1?bt:E(n,function(n){return n>>>5<<5}(t))>-1?lt(a(st,vt&n,i)):lt(f(dt,e,n,u))}),gt=t(function(n,r){return r.$?n:r.a}),pt=t(function(n,r){return{$:0,a:n,b:r}}),$t=function(n){var r=n.b;return a(pt,1664525*n.a+r>>>0,r)},mt=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},wt=t(function(n,r){return function(t){var e=E(n,r)<0?L(n,r):L(r,n),u=e.a,i=e.b-u+1;if(i-1&i){var o=(-i>>>0)%i>>>0;return function(n){for(;;){var r=mt(n),t=$t(n);if(E(r,o)>=0)return L(r%i+u,t);n=t}}(t)}return L(((i-1&mt(t))>>>0)+u,$t(t))}}),yt=t(function(n,r){var t=r;return function(r){var e=t(r),u=e.b;return L(n(e.a),u)}}),kt=D,At=B,_t=(ur=function(n){return n},R(function(n){n(B(ur(Date.now())))})),Et=a(kt,function(n){return At(function(n){var r=$t(a(pt,0,1013904223));return $t(a(pt,r.a+n>>>0,r.b))}(n))},_t),jt=function(n){return!n.$},Nt=d,Lt=i(function(n,r,t,e,u){for(;;){if(r<0)return a(Ur,!1,{d:e,a:t/32|0,c:u});var i=zr(f(Nt,32,r,n));n=n,r-=32,t=t,e=a(br,i,e),u=u}}),xt=t(function(n,r){if(n>0){var t=n%32;return v(Lt,r,n-t-32,n,h,f(Nt,t,n-t,r))}return Zr}),Tt=function(n){return{$:1,a:n}},Ct=function(n){return{$:0,a:n}},Ot=t(function(n,r){return{$:3,a:n,b:r}}),St=t(function(n,r){return{$:0,a:n,b:r}}),Ft=t(function(n,r){return{$:1,a:n,b:r}}),Wt=function(n){return{$:2,a:n}},Bt=w,Rt=function(n){return n+""},Dt=t(function(n,r){return a(P,n,m(r))}),qt=$n,Kt=t(function(n,r){return n(r)}),Jt=e(function(n,r,t){if(r.b){var e=r.b,u=a(Kt,r.a,t),i=u.b;return a(kt,function(){return f(Jt,n,e,i)},a(qt,n,u.a))}return At(t)});bn.Random=hn(Et,Jt,e(function(n,r,t){return At(t)}),t(function(n,r){return a(yt,n,r)}));var Zt=wn("Random"),zt=t(function(n,r){return Zt(a(yt,n,r))}),It=t(function(n,r){return r+4*(n-1)}),Gt=t(function(n,r){var t=a(It,r.p,r.o),e=a(It,n.p,n.o);return E(e,t)>0?2:E(e,t)<0?0:1}),Mt=y,Vt=function(n){return a(Br,function(n){return T(n,{L:a(It,n.p,n.o)})},a(Mt,Gt,n))},Pt={$:2,m:h},Qt=function(n){return E((e=n,f(wr,t(function(n,r){return r+1}),0,e)),16)<0?(r=ft(Vt(n)),a(zt,ct,function(n){return a(yt,function(r){return function(n){return{o:(n-1)%4+1,L:n,x:0,y:!1,W:!0,p:1+((n-1)/4|0),e:2}}(a(gt,1,a(ht,r-1,n)))},a(wt,1,n.a))}(r))):Pt;var r,e},Ut=t(function(n,r){return{K:0,x:r,N:1,Z:0,g:h,ag:n}}),Yt=e(function(n,r,t){return L(a(Ut,r,t),Qt(h))}),Ht={$:5},Xt={$:7},ne={$:6},re={$:4},te={$:0},ee=tn,ue=a(ee,function(n){switch(n){case"ArrowUp":return re;case"ArrowDown":return Ht;case"ArrowRight":return ne;case"ArrowLeft":return Xt;default:return te}},a(rn,"key",nn)),ie=e(function(n,r,t){return{$:0,a:n,b:r,c:t}}),oe=t(function(n,r){return{at:r,aD:n}}),ae=At(a(oe,h,kr)),fe=function(n){return L(C(n.a?"w_":"d_",n.b),n)},ce=t(function(n,r){return{al:r,x:n}}),ve=mn,se=t(function(n,r){return a(kt,function(r){return At(n(r))},r)}),de=function(n){for(;;)n=n},le=At(0),be=e(function(n,r,t){return a(kt,function(r){return a(kt,function(t){return At(a(n,r,t))},t)},r)}),he=function(n){return f(Wr,be(br),At(h),n)},ge=t(function(n,r){var t=r;return J(a(kt,qt(n),t))});bn.Task=hn(le,e(function(n,r){return a(se,function(){return 0},he(a(Br,ge(n),r)))}),e(function(){return At(0)}),t(function(n,r){return a(se,n,r)}));var pe=wn("Task"),$e=t(function(n,r){return pe(a(se,n,r))}),me=function(n){return{$:0,a:n}},we=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ye=Q,ke=t(function(n,r){return n<1?r:f(ye,n,r.length,r)}),Ae=Y,_e=H,Ee=function(n){return""===n},je=t(function(n,r){return n<1?"":f(ye,0,n,r)}),Ne=U,Le=o(function(n,r,t,e,u,i){return{am:i,ao:r,as:e,au:t,ax:n,ay:u}}),xe=i(function(n,r,t,e,u){if(Ee(u)||a(Ne,"@",u))return bt;var i=a(_e,":",u);if(i.b){if(i.b.b)return bt;var o=i.a,f=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var i=n.charCodeAt(u);if(i<48||57<i)return bt;r=10*r+i-48}return u==e?bt:lt(45==t?-r:r)}(a(ke,o+1,u));if(1===f.$)return bt;var c=f;return lt(s(Le,n,a(je,o,u),c,r,t,e))}return lt(s(Le,n,u,bt,r,t,e))}),Te=u(function(n,r,t,e){if(Ee(e))return bt;var u=a(_e,"/",e);if(u.b){var i=u.a;return v(xe,n,a(ke,i,e),r,t,a(je,i,e))}return v(xe,n,"/",r,t,e)}),Ce=e(function(n,r,t){if(Ee(t))return bt;var e=a(_e,"?",t);if(e.b){var u=e.a;return c(Te,n,lt(a(ke,u+1,t)),r,a(je,u,t))}return c(Te,n,bt,r,t)}),Oe=t(function(n,r){if(Ee(r))return bt;var t=a(_e,"#",r);if(t.b){var e=t.a;return f(Ce,n,lt(a(ke,e+1,r)),a(je,e,r))}return f(Ce,n,bt,r)}),Se=function(n){return a(Ae,"http://",n)?a(Oe,0,a(ke,7,n)):a(Ae,"https://",n)?a(Oe,1,a(ke,8,n)):bt},Fe=e(function(n,r,t){return a(se,function(n){return L(r,n)},f(vr,t.a?cr:fr,t.b,function(t){return a(ve,n,a(ce,r,t))}))}),We=function(n){return f(wr,t(function(n,r){return f(Lr,n.a,n.b,r)}),kr,n)},Be=o(function(n,r,u,i,o,a){var v=f(Hr,e(function(t,e,i){n:for(;;){var o=i.a,a=i.b;if(o.b){var v=o.a,s=v.a,d=v.b,l=o.b;if(E(s,t)<0){t=t,e=e,i=L(l,f(n,s,d,a));continue n}return E(s,t)>0?L(o,f(u,t,e,a)):L(l,c(r,s,d,e,a))}return L(o,f(u,t,e,a))}}),L(pr(i),a),o),s=v.a,d=v.b;return f(wr,t(function(r,t){return f(n,r.a,r.b,t)}),d,s)}),Re=t(function(n,r){return f(Hr,Lr,r,n)}),De=function(n){return R(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(B(N))})},qe=e(function(n,r,t){var i=e(function(r,t,e){var u=e.c;return x(e.a,e.b,a(br,f(Fe,n,r,t),u))}),o=e(function(n,r,t){var e=t.b,u=t.c;return x(a(br,r,t.a),e,u)}),c=u(function(n,r,t,e){var u=e.c;return x(e.a,f(Lr,n,r,e.b),u)}),v=a(Br,fe,r),d=s(Be,o,c,i,t.at,We(v),x(h,kr,h)),l=d.b,b=d.c;return a(kt,function(n){return At(a(oe,v,a(Re,l,We(n))))},a(kt,function(){return he(b)},he(a(Br,De,d.a))))}),Ke=e(function(n,r,t){var e=n(r);return e.$?t:a(br,e.a,t)}),Je=t(function(n,r){return f(Wr,Ke(n),h,r)});bn["Browser.Events"]=hn(ae,qe,e(function(n,r,t){var e=r.x,u=r.al,i=a(Je,function(n){var r=n.b.c;return A(n.a,e)?a(sr,r,u):bt},t.aD);return a(kt,function(){return At(t)},he(a(Br,qt(n),i)))}),0,t(function(n,r){return f(ie,r.a,r.b,a(ee,n,r.c))}));var Ze,ze,Ie,Ge,Me,Ve,Pe=wn("Browser.Events"),Qe=a(e(function(n,r,t){return Pe(f(ie,n,r,t))}),0,"keydown"),Ue=t(function(n,r){return a(br,T(n,{x:r.N}),a(Br,function(n){return T(n,{W:!1})},r.g))}),Ye=t(function(n,r){return f(Wr,t(function(r,t){return n(r)?a(br,r,t):t}),h,r)}),He=e(function(n,r,e){return f(Bt,t(function(n,r){return T(n,{p:r})}),a(Ye,function(n){return A(n.o,r)},e),n)}),Xe=u(function(n,r,t,e){n:for(;;){if(!e.b)return A(r.e,t.e)?Sr(a(br,T(r,{y:!0,e:2*r.e}),n)):Sr(a(br,t,a(br,r,n)));if(e.b.b){var u=e.a,i=e.b,o=i.a,f=i.b;if(A(r.e,t.e)){n=a(br,T(r,{y:!0,e:2*r.e}),n),r=u,t=o,e=f;continue n}n=a(br,r,n),r=t,t=u,e=a(br,o,f)}else{if(u=e.a,A(r.e,t.e))return $([T(r,{y:!0,e:2*r.e}),u]);n=a(br,r,n),r=t,t=u,e=h}}}),nu=function(n){if(n.b&&n.b.b){var r=n.b;return c(Xe,h,n.a,r.a,r.b)}return n},ru=Sr(a(mr,1,4)),tu=t(function(n,r){return r.b?f(Wr,br,r,n):n}),eu=function(n){return f(Wr,tu,h,n)},uu=t(function(n,r){return eu($([f(He,n,1,nu(f(He,n,1,r))),f(He,n,2,nu(f(He,ru,2,r))),f(He,n,3,nu(f(He,n,3,r))),f(He,n,4,nu(f(He,n,4,r)))]))}),iu=function(n){return a(Br,function(n){return T(n,{y:!1})},n)},ou=e(function(n,r,e){return f(Bt,t(function(n,r){return T(n,{o:r})}),a(Ye,function(n){return A(n.p,r)},e),n)}),au=t(function(n,r){return eu($([f(ou,n,1,nu(f(ou,n,1,r))),f(ou,n,2,nu(f(ou,ru,2,r))),f(ou,n,3,nu(f(ou,n,3,r))),f(ou,n,4,nu(f(ou,n,4,r)))]))}),fu=a(mr,1,4),cu=function(n){return R(function(r){var t=setTimeout(function(){r(B(N))},n);return function(){clearTimeout(t)}})},vu=a($e,t(function(n){return n})({$:2}),cu(600)),su=t(function(n,r){return n+4*(r-1)}),du=t(function(n,r){var t=a(su,r.p,r.o),e=a(su,n.p,n.o);return E(e,t)>0?2:E(e,t)<0?0:1}),lu=function(n){return a(Br,function(n){return T(n,{L:a(su,n.p,n.o)})},a(Mt,du,n))},bu=or,hu=t(function(n,r){return 1===n.$?r:r+":"+Rt(n.a)}),gu=e(function(n,r,t){return 1===r.$?t:C(t,C(n,r.a))}),pu=t(function(n,r){switch(n.$){case 0:return L(r,Pt);case 1:return L(T(r,{g:h}),Qt(h));case 2:return L(r,Qt(r.g));case 3:return L(function(n){var r=f(wr,Or,0,a(Br,function(n){return n.e},n.g));return T(n,{K:a(Pr,r,n.K),Z:r})}(T(r,{N:r.N+1,g:a(Ue,n.a,r)})),Pt);case 4:return L(T(r,{g:Vt((e=Vt(r.g),Vt(a(uu,fu,iu(e)))))}),vu);case 5:return L(T(r,{g:Vt(function(n){return Vt(a(uu,ru,iu(n)))}(Vt(r.g)))}),vu);case 7:return L(T(r,{g:Vt(function(n){return Vt(a(au,fu,iu(n)))}(lu(r.g)))}),vu);case 6:return L(T(r,{g:Vt(function(n){return Vt(a(au,ru,iu(n)))}(lu(r.g)))}),vu);case 8:var t=n.a;return L(r,t.$?function(n){return a($e,de,R(function(){try{cr.location=n}catch(n){An.location.reload(!1)}}))}(t.a):a(bu,r.x,function(n){return f(gu,"#",n.am,f(gu,"?",n.ay,C(a(hu,n.au,C(n.ax?"https://":"http://",n.ao)),n.as)))}(t.a)));default:return L(T(r,{ag:n.a}),Pt)}var e}),$u=jn("button"),mu=jn("div"),wu=jn("p"),yu=jn("strong"),ku=En,Au=dn,_u=t(function(n,r){return a(Cn,n,Au(r))}),Eu=_u("className"),ju=Tn,Nu=t(function(n,r){return a(ju,n,{$:0,a:r})}),Lu=a(mu,$([Eu("above-game")]),$([a(wu,$([Eu("game-intro")]),$([ku("Join the numbers and get to the "),a(yu,h,$([ku("2048 tile!")]))])),a($u,$([Eu("restart-button"),(Ze={$:1},a(Nu,"click",me(Ze)))]),$([ku("New Game")]))])),xu=a(jn("hr"),h,h),Tu=a(wu,$([Eu("game-explanation")]),$([a(yu,$([Eu("important")]),$([ku("How to play: ")])),ku("Use your "),a(yu,h,$([ku("arrow keys")])),ku(" to move the tiles. When two tiles with the same number touch, they "),a(yu,h,$([ku("merge into one!")]))])),Cu=jn("a"),Ou=function(n){return a(_u,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},Su=_u("target"),Fu=a(wu,h,$([ku("Original 2048 created by "),a(Cu,$([Ou("http://gabrielecirulli.com"),Su("_blank")]),$([ku("Gabriele Cirulli. ")])),ku("Based on "),a(Cu,$([Ou("https://itunes.apple.com/us/app/1024!/id823499224"),Su("_blank")]),$([ku("1024 by Veewo Studio ")])),ku("and conceptually similar to "),a(Cu,$([Ou("http://asherv.com/threes/"),Su("_blank")]),$([ku("Threes by Asher Vollmer.")]))])),Wu=jn("h1"),Bu=a(mu,$([Eu("game-message")]),$([a(wu,h,h),a(mu,$([Eu("lower")]),$([a(Cu,$([Eu("keep-playing-button")]),$([ku("Keep going")])),a(Cu,$([Eu("retry-button")]),$([ku("Try again")]))]))])),Ru=a(wu,h,$([a(yu,$([Eu("important")]),$([ku("Note: ")])),ku("This is not the official version of 2048! It is an "),ku("implementation of Gabriele Cirulli's "),a(Cu,$([Ou("https://github.com/gabrielecirulli/2048")]),$([ku("2048 game ")])),ku("written in "),a(Cu,$([Ou("https://elm-lang.org/")]),$([ku("Elm")])),ku(". You can find the code for this Elm implementation here: "),a(Cu,$([Ou("https://github.com/stepheneb/elm-2048")]),$([ku("github.com/stepheneb/elm-2048")])),ku(".")])),Du=a(mu,$([Eu("grid-row")]),$([a(mu,$([Eu("grid-cell")]),h),a(mu,$([Eu("grid-cell")]),h),a(mu,$([Eu("grid-cell")]),h),a(mu,$([Eu("grid-cell")]),h)])),qu=a(mu,$([Eu("grid-container")]),$([Du,Du,Du,Du])),Ku=function(n){return a(mu,$([Eu(function(n){return C(a(Dt," ",$(["tile","tile-"+Rt(n.e),"tile-position-"+Rt(n.o)+"-"+Rt(n.p)])),C(function(n){return n.W?" tile-new ":""}(n),function(n){return n.y?" tile-merged ":""}(n)))}(n))]),$([a(mu,$([Eu("tile-inner")]),$([ku(Rt(n.e))]))]))},Ju=xn,Zu=function(n){return L(Rt(n.x),a(Ju,Ku,n))},zu=function(n){return Nn(function(n){return"script"==n?"p":n}(n))};ze={Main:{init:(Ge=(Ie={aS:Yt,aV:function(n){return{$:9,a:n}},aW:function(n){return{$:8,a:n}},aZ:function(){return Qe(ue)},a$:pu,a0:function(n){return{aJ:$([a(mu,$([Eu("container")]),$([function(n){return a(mu,$([Eu("heading")]),$([a(Wu,$([Eu("title")]),$([ku("Elm 2048")])),a(mu,$([Eu("scores-container")]),$([a(mu,$([Eu("score-container")]),$([ku(Rt(n.Z))])),a(mu,$([Eu("best-container")]),$([ku(Rt(n.K))]))]))]))}(n),Lu,a(mu,$([Eu("game-container")]),$([Bu,qu,(r=n.g,f(zu,"div",$([Eu("tile-container")]),function(n){return a(Br,Zu,n)}(r)))])),Tu,xu,Ru,xu,Fu]))]),a_:"Elm 2048"};var r}}).aV,Me=Ie.aW,Ve=function(){Ve.a(Ge(er()))},rr({Q:function(n){return Ve.a=n,cr.addEventListener("popstate",Ve),cr.navigator.userAgent.indexOf("Trident")<0||cr.addEventListener("hashchange",Ve),t(function(r,t){if(!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.button<1&&!r.target&&!r.hasAttribute("download")){t.preventDefault();var e=r.href,u=er(),i=Se(e).a;n(Me(i&&u.ax===i.ax&&u.ao===i.ao&&u.au.a===i.au.a?{$:0,a:i}:function(n){return{$:1,a:n}}(e)))}})},aS:function(n){return f(Ie.aS,n,er(),Ve)},a0:Ie.a0,a$:Ie.a$,aZ:Ie.aZ}))(me(0))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?k(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,ze):n.Elm=ze}(this)},function(n,r,t){t(3),n.exports=t(11)},,,,,,,,function(){},function(n,r,t){"use strict";t.r(r),t(10);var e=t(1),u=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var r=n.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}e.Elm.Main.init({node:document.getElementById("root")}),function(){if("serviceWorker"in navigator){if(new URL("/elm-2048",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/elm-2048","/service-worker.js");u?function(n){fetch(n).then(function(r){404===r.status||-1===r.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):i(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):i(n)})}}(),window.addEventListener("keydown",function(n){n.key.includes("Arrow")&&n.preventDefault()})}],[[2,1,2]]]);
//# sourceMappingURL=main.e8f9537b.chunk.js.map