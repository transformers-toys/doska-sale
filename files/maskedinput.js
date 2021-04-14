!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){var t=document.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}function i(e){var t="text"==e||"tel"==e;if(!t){var i=document.createElement("input");i.setAttribute("type",e),t="text"===i.type,i=null}return t}function a(t,i,n){var o=n.aliases[t];return!!o&&(o.alias&&a(o.alias,void 0,n),e.extend(!0,n,o),e.extend(!0,n,i),!0)}function n(t){function i(i){function a(e,t,i,a){this.matches=[],this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function n(i,a,n){var o=t.definitions[a],r=0==i.matches.length;if(n=void 0!=n?n:i.matches.length,o&&!p){o.placeholder=e.isFunction(o.placeholder)?o.placeholder.call(this,t):o.placeholder;for(var s=o.prevalidator,l=s?s.length:0,u=1;u<o.cardinality;u++){var c=l>=u?s[u-1]:[],d=c.validator,f=c.cardinality;i.matches.splice(n++,0,{fn:d?"string"==typeof d?new RegExp(d):new function(){this.test=d}:new RegExp("."),cardinality:f||1,optionality:i.isOptional,newBlockMarker:r,casing:o.casing,def:o.definitionSymbol||a,placeholder:o.placeholder,mask:a})}i.matches.splice(n++,0,{fn:o.validator?"string"==typeof o.validator?new RegExp(o.validator):new function(){this.test=o.validator}:new RegExp("."),cardinality:o.cardinality,optionality:i.isOptional,newBlockMarker:r,casing:o.casing,def:o.definitionSymbol||a,placeholder:o.placeholder,mask:a})}else i.matches.splice(n++,0,{fn:null,cardinality:0,optionality:i.isOptional,newBlockMarker:r,casing:null,def:a,placeholder:void 0,mask:a}),p=!1}for(var o,r,s,l,u,c,d=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,p=!1,f=new a,v=[],m=[];o=d.exec(i);)switch((r=o[0]).charAt(0)){case t.optionalmarker.end:case t.groupmarker.end:if(s=v.pop(),v.length>0){if((l=v[v.length-1]).matches.push(s),l.isAlternator){u=v.pop();for(P=0;P<u.matches.length;P++)u.matches[P].isGroup=!1;v.length>0?(l=v[v.length-1]).matches.push(u):f.matches.push(u)}}else f.matches.push(s);break;case t.optionalmarker.start:v.push(new a(!1,!0));break;case t.groupmarker.start:v.push(new a(!0));break;case t.quantifiermarker.start:var h=new a(!1,!1,!0),k=(r=r.replace(/[{}]/g,"")).split(","),g=isNaN(k[0])?k[0]:parseInt(k[0]),y=1==k.length?g:isNaN(k[1])?k[1]:parseInt(k[1]);if(("*"==y||"+"==y)&&(g="*"==y?0:1),h.quantifier={min:g,max:y},v.length>0){var b=v[v.length-1].matches;(o=b.pop()).isGroup||((_=new a(!0)).matches.push(o),o=_),b.push(o),b.push(h)}else{if(!(o=f.matches.pop()).isGroup){var _=new a(!0);_.matches.push(o),o=_}f.matches.push(o),f.matches.push(h)}break;case t.escapeChar:p=!0;break;case t.alternatormarker:v.length>0?(l=v[v.length-1],c=l.matches.pop()):c=f.matches.pop(),c.isAlternator?v.push(c):((u=new a(!1,!1,!1,!0)).matches.push(c),v.push(u));break;default:if(v.length>0){if((l=v[v.length-1]).matches.length>0&&(c=l.matches[l.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end)),n(l,r),l.isAlternator){u=v.pop();for(var P=0;P<u.matches.length;P++)u.matches[P].isGroup=!1;v.length>0?(l=v[v.length-1]).matches.push(u):f.matches.push(u)}}else f.matches.length>0&&(c=f.matches[f.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end)),n(f,r)}return f.matches.length>0&&((c=f.matches[f.matches.length-1]).isGroup&&(c.isGroup=!1,n(c,t.groupmarker.start,0),n(c,t.groupmarker.end)),m.push(f)),m}function a(a,n){if(void 0!=a&&""!=a){if(1==a.length&&0==t.greedy&&0!=t.repeat&&(t.placeholder=""),t.repeat>0||"*"==t.repeat||"+"==t.repeat){var o="*"==t.repeat?0:"+"==t.repeat?1:t.repeat;a=t.groupmarker.start+a+t.groupmarker.end+t.quantifiermarker.start+o+","+t.repeat+t.quantifiermarker.end}return void 0==e.inputmask.masksCache[a]&&(e.inputmask.masksCache[a]={mask:a,maskToken:i(a),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n}),e.extend(!0,{},e.inputmask.masksCache[a])}}function n(e){if(e=e.toString(),t.numericInput){e=e.split("").reverse();for(var i=0;i<e.length;i++)e[i]==t.optionalmarker.start?e[i]=t.optionalmarker.end:e[i]==t.optionalmarker.end?e[i]=t.optionalmarker.start:e[i]==t.groupmarker.start?e[i]=t.groupmarker.end:e[i]==t.groupmarker.end&&(e[i]=t.groupmarker.start);e=e.join("")}return e}var o=void 0;if(e.isFunction(t.mask)&&(t.mask=t.mask.call(this,t)),e.isArray(t.mask)){if(t.mask.length>1){t.keepStatic=void 0==t.keepStatic||t.keepStatic;var r="(";return e.each(t.mask,function(t,i){r.length>1&&(r+=")|("),r+=n(void 0==i.mask||e.isFunction(i.mask)?i:i.mask)}),r+=")",a(r,t.mask)}t.mask=t.mask.pop()}return t.mask&&(o=void 0==t.mask.mask||e.isFunction(t.mask.mask)?a(n(t.mask),t.mask):a(n(t.mask.mask),t.mask)),o}function o(a,n,o){function r(e,t,i){t=t||0;var a,n,o,r=[],s=0;do{if(!0===e&&c().validPositions[s]){var l=c().validPositions[s];n=l.match,a=l.locator.slice(),r.push(!0===i?l.input:j(s,n))}else o=m(s,a,s-1),n=o.match,a=o.locator.slice(),r.push(j(s,n));s++}while((void 0==te||te>s-1)&&null!=n.fn||null==n.fn&&""!=n.def||t>=s);return r.pop(),r}function c(){return n}function d(e){var t=c();t.buffer=void 0,t.tests={},!0!==e&&(t._buffer=void 0,t.validPositions={},t.p=0)}function p(e){var t=-1,i=c().validPositions;void 0==e&&(e=-1);var a=t,n=t;for(var o in i){var r=parseInt(o);(-1==e||null!=i[r].match.fn)&&(e>=r&&(a=r),r>=e&&(n=r))}return t=-1!=a&&e-a>1||e>n?a:n}function f(t,i,a){if(o.insertMode&&void 0!=c().validPositions[t]&&void 0==a){var n,r=e.extend(!0,{},c().validPositions),s=p();for(n=t;s>=n;n++)delete c().validPositions[n];c().validPositions[t]=i;var l,u=!0;for(n=t;s>=n;n++){var d=r[n];if(void 0!=d){var f=c().validPositions;u=k(l=!o.keepStatic&&f[n]&&(void 0!=f[n+1]&&g(n+1,f[n].locator.slice(),n).length>1||void 0!=f[n].alternation)?n+1:M(n),d.match.def)?u&&!1!==C(l,d.input,!0,!0):null==d.match.fn}if(!u)break}if(!u)return c().validPositions=e.extend(!0,{},r),!1}else c().validPositions[t]=i;return!0}function v(e,t,i,a){var n,r=e;for(c().p=e,void 0!=c().validPositions[e]&&c().validPositions[e].input==o.radixPoint&&(t++,r++),n=r;t>n;n++)void 0!=c().validPositions[n]&&(!0===i||0!=o.canClearPosition(c(),n,p(),a,o))&&delete c().validPositions[n];for(d(!0),n=r+1;n<=p();){for(;void 0!=c().validPositions[r];)r++;var s=c().validPositions[r];r>n&&(n=r+1);var l=c().validPositions[n];void 0!=l&&void 0==s?(k(r,l.match.def)&&!1!==C(r,l.input,!0)&&(delete c().validPositions[n],n++),r++):n++}var u=p();u>=e&&void 0!=c().validPositions[u]&&c().validPositions[u].input==o.radixPoint&&delete c().validPositions[u],d(!0)}function m(e,t,i){for(var a,n=g(e,t,i),r=p(),s=c().validPositions[r]||g(0)[0],l=void 0!=s.alternation?s.locator[s.alternation].split(","):[],u=0;u<n.length&&!((a=n[u]).match&&(o.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(void 0==s.alternation||void 0!=a.locator[s.alternation]&&E(a.locator[s.alternation].toString().split(","),l)));u++);return a}function h(e){return c().validPositions[e]?c().validPositions[e].match:g(e)[0].match}function k(e,t){for(var i=!1,a=g(e),n=0;n<a.length;n++)if(a[n].match&&a[n].match.def==t){i=!0;break}return i}function g(t,i,a){function n(i,a,o,s){function d(o,s,f){if(r>1e4)return alert("jquery.inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+c().mask),!0;if(r==t&&void 0==o.matches)return l.push({match:o,locator:s.reverse()}),!0;if(void 0!=o.matches){if(o.isGroup&&!0!==f){if(o=d(i.matches[p+1],s))return!0}else if(o.isOptional){var v=o;if(o=n(o,a,s,f)){var m=l[l.length-1].match;(G=0==e.inArray(m,v.matches))&&(u=!0),r=t}}else if(o.isAlternator){var h,k=o,g=[],y=l.slice(),b=s.length,_=a.length>0?a.shift():-1;if(-1==_||"string"==typeof _){var P,E=r,C=a.slice();"string"==typeof _&&(P=_.split(","));for(var x=0;x<k.matches.length;x++){l=[],o=d(k.matches[x],[x].concat(s),f)||o,h=l.slice(),r=E,l=[];for(var w=0;w<C.length;w++)a[w]=C[w];for(var M=0;M<h.length;M++)for(var A=h[M],S=0;S<g.length;S++){var O=g[S];if(A.match.mask==O.match.mask&&("string"!=typeof _||-1!=e.inArray(A.locator[b].toString(),P))){h.splice(M,1),O.locator[b]=O.locator[b]+","+A.locator[b],O.alternation=b;break}}g=g.concat(h)}"string"==typeof _&&(g=e.map(g,function(t,i){if(isFinite(i)){var a=t.locator[b].toString().split(",");t.locator[b]=void 0,t.alternation=void 0;for(var n=0;n<a.length;n++)-1!=e.inArray(a[n],P)&&(void 0!=t.locator[b]?(t.locator[b]+=",",t.alternation=b,t.locator[b]+=a[n]):t.locator[b]=parseInt(a[n]));if(void 0!=t.locator[b])return t}})),l=y.concat(g),u=!0}else o=d(k.matches[_],[_].concat(s),f);if(o)return!0}else if(o.isQuantifier&&!0!==f)for(var j=o,T=a.length>0&&!0!==f?a.shift():0;T<(isNaN(j.quantifier.max)?T+1:j.quantifier.max)&&t>=r;T++){var D=i.matches[e.inArray(j,i.matches)-1];if(o=d(D,[T].concat(s),!0)){(m=l[l.length-1].match).optionalQuantifier=T>j.quantifier.min-1;var G=0==e.inArray(m,D.matches);if(G){if(T>j.quantifier.min-1){u=!0,r=t;break}return!0}return!0}}else if(o=n(o,a,s,f))return!0}else r++}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var f=d(i.matches[p],[p].concat(o),s);if(f&&r==t)return f;if(r>t)break}}var o=c().maskToken,r=i?a:0,s=i||[0],l=[],u=!1;if(void 0==i){for(var d,p=t-1;void 0==(d=c().validPositions[p])&&p>-1;)p--;if(void 0!=d&&p>-1)r=p,s=d.locator.slice();else{for(p=t-1;void 0==(d=c().tests[p])&&p>-1;)p--;void 0!=d&&p>-1&&(r=p,s=d[0].locator.slice())}}for(var f=s.shift();f<o.length&&!(n(o[f],s,[f])&&r==t||r>t);f++);return(0==l.length||u)&&l.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]}),c().tests[t]=e.extend(!0,[],l),c().tests[t]}function y(){return void 0==c()._buffer&&(c()._buffer=r(!1,1)),c()._buffer}function b(){return void 0==c().buffer&&(c().buffer=r(!0,p(),!0)),c().buffer}function _(e,t,i){if(i=i||b().slice(),!0===e)d(),e=0,t=i.length;else for(a=e;t>a;a++)delete c().validPositions[a],delete c().tests[a];for(var a=e;t>a;a++)i[a]!=o.skipOptionalPartCharacter&&C(a,i[a],!0,!0)}function P(e,t){switch(t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase()}return e}function E(t,i){for(var a=o.greedy?i:i.slice(0,1),n=!1,r=0;r<t.length;r++)if(-1!=e.inArray(t[r],a)){n=!0;break}return n}function C(t,i,a,n){function r(t,i,a,n){var r=!1;return e.each(g(t),function(s,l){for(var u=l.match,m=i?1:0,h="",k=(b(),u.cardinality);k>m;k--)h+=S(t-(k-1));if(i&&(h+=i),!1!==(r=null!=u.fn?u.fn.test(h,c(),t,a,o):(i==u.def||i==o.skipOptionalPartCharacter)&&""!=u.def&&{c:u.def,pos:t})){var g=void 0!=r.c?r.c:i;g=g==o.skipOptionalPartCharacter&&null===u.fn?u.def:g;var y=t;if(void 0!=r.remove&&v(r.remove,r.remove+1,!0),r.refreshFromBuffer){var E=r.refreshFromBuffer;if(a=!0,_(!0===E?E:E.start,E.end),void 0==r.pos&&void 0==r.c)return r.pos=p(),!1;if((y=void 0!=r.pos?r.pos:t)!=t)return r=e.extend(r,C(y,g,!0)),!1}else if(!0!==r&&void 0!=r.pos&&r.pos!=t&&(y=r.pos,_(t,y),y!=t))return r=e.extend(r,C(y,g,!0)),!1;return(1==r||void 0!=r.pos||void 0!=r.c)&&(s>0&&d(!0),f(y,e.extend({},l,{input:P(g,u)}),n)||(r=!1),!1)}}),r}a=!0===a;for(var s=b(),l=t-1;l>-1&&!c().validPositions[l];l--);for(l++;t>l;l++)void 0==c().validPositions[l]&&((!x(l)||s[l]!=j(l))&&g(l).length>1||s[l]==o.radixPoint||"0"==s[l]&&e.inArray(o.radixPoint,s)<l)&&r(l,s[l],!0);var u=t,m=!1,h=e.extend(!0,{},c().validPositions);if(u<w()&&(m=r(u,i,a,n),!a&&!1===m)){var k=c().validPositions[u];if(!k||null!=k.match.fn||k.match.def!=i&&i!=o.skipOptionalPartCharacter){if((o.insertMode||void 0==c().validPositions[M(u)])&&!x(u))for(var y=u+1,A=M(u);A>=y;y++)if(!1!==(m=r(y,i,a,n))){(function(t,i){for(var a=c().validPositions[i].locator,n=a.length,o=t;i>o;o++)if(!x(o)){var r=g(o),s=r[0],l=-1;e.each(r,function(e,t){for(var i=0;n>i;i++)t.locator[i]&&E(t.locator[i].toString().split(","),a[i].toString().split(","))&&i>l&&(l=i,s=t)}),f(o,e.extend({},s,{input:s.match.def}),!0)}})(u,y),u=y;break}}else m={caret:M(u)}}return!1===m&&o.keepStatic&&R(s)&&(m=function(t,i,a,n){var r,s,l=e.extend(!0,{},c().validPositions);for(r=p();r>=0;r--)if(c().validPositions[r]&&void 0!=c().validPositions[r].alternation){s=c().validPositions[r].alternation;break}if(void 0!=s)for(var u in c().validPositions)if(parseInt(u)>parseInt(r)&&void 0===c().validPositions[u].alternation){for(var f=c().validPositions[u].locator[s],v=c().validPositions[r].locator[s].split(","),m=0;m<v.length;m++)if(f<v[m]){for(var h,k,g=u-1;g>=0;g--)if(void 0!=(h=c().validPositions[g])){k=h.locator[s],h.locator[s]=v[m];break}if(f!=h.locator[s]){for(var y=b().slice(),_=u;_<p()+1;_++)delete c().validPositions[_],delete c().tests[_];for(d(!0),o.keepStatic=!o.keepStatic,_=u;_<y.length;_++)y[_]!=o.skipOptionalPartCharacter&&C(p()+1,y[_],!1,!0);h.locator[s]=k;var P=C(t,i,a,n);if(o.keepStatic=!o.keepStatic,P)return P;d(),c().validPositions=e.extend(!0,{},l)}}break}return!1}(t,i,a,n)),!0===m&&(m={pos:u}),!e.isFunction(o.postValidation)||0==m||a||(d(!0),o.postValidation(b(),o))?m:(d(!0),c().validPositions=e.extend(!0,{},h),!1)}function x(e){var t=h(e);return null!=t.fn&&t.fn}function w(){var e;-1==(te=ee.prop("maxLength"))&&(te=void 0);var t,i=p(),a=c().validPositions[i],n=void 0!=a?a.locator.slice():void 0;for(t=i+1;void 0==a||null!=a.match.fn||null==a.match.fn&&""!=a.match.def;t++)a=m(t,n,t-1),n=a.locator.slice();return e=t,void 0==te||te>e?e:te}function M(e){var t=w();if(e>=t)return t;for(var i=e;++i<t&&!x(i)&&(!0!==o.nojumps||o.nojumpsThreshold>i););return i}function A(e){var t=e;if(0>=t)return 0;for(;--t>0&&!x(t););return t}function S(e){return void 0==c().validPositions[e]?j(e):c().validPositions[e].input}function O(t,i,a,n,r){if(n&&e.isFunction(o.onBeforeWrite)){var s=o.onBeforeWrite.call(t,n,i,a,o);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;_(!0===l?l:l.start,l.end,s.buffer),d(!0),i=b()}a=s.caret||a}}t._valueSet(i.join("")),void 0!=a&&B(t,a),!0===r&&(ne=!0,e(t).trigger("input"))}function j(e,t){return void 0!=(t=t||h(e)).placeholder?t.placeholder:null==t.fn?t.def:o.placeholder.charAt(e%o.placeholder.length)}function T(t,i,a,n){function o(){var e=!1,t=y().slice(l,M(l)).join("").indexOf(s);if(-1!=t&&!x(l)){e=!0;for(var i=y().slice(l,l+t),a=0;a<i.length;a++)if(" "!=i[a]){e=!1;break}}return e}var r=void 0!=n?n.slice():t._valueGet().split(""),s="",l=0;d(),c().p=M(-1),i&&t._valueSet("");var u=y().slice(0,M(-1)).join(""),f=r.join("").match(new RegExp(D(u),"g"));f&&f.length>0&&(r.splice(0,f.length*u.length),l=M(l)),e.each(r,function(i,n){var r=e.Event("keypress");r.which=n.charCodeAt(0),s+=n;var u=p(),d=c().validPositions[u],f=m(u+1,d?d.locator.slice():void 0,u);if(!o()||a){var v=a?i:null==f.match.fn&&f.match.optionality&&u+1<c().p?u+1:c().p;q.call(t,r,!0,!1,a,v),l=v+1,s=""}else q.call(t,r,!0,!1,!0,u+1)}),i&&O(t,b(),e(t).is(":focus")?M(p(0)):void 0,e.Event("checkval"))}function D(t){return e.inputmask.escapeRegex.call(this,t)}function G(t){if(t.data("_inputmask")&&!t.hasClass("hasDatepicker")){var i=[],a=c().validPositions;for(var n in a)a[n].match&&null!=a[n].match.fn&&i.push(a[n].input);var r=(ie?i.reverse():i).join(""),s=(ie?b().slice().reverse():b()).join("");return e.isFunction(o.onUnMask)&&(r=o.onUnMask.call(t,s,r,o)||r),r}return t[0]._valueGet()}function F(e){return!ie||"number"!=typeof e||o.greedy&&""==o.placeholder||(e=b().length-e),e}function B(t,i,a){var n,r=t.jquery&&t.length>0?t[0]:t;if("number"!=typeof i)return r.setSelectionRange?(i=r.selectionStart,a=r.selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),i=0-n.duplicate().moveStart("character",-1e5),a=i+n.text.length),{begin:F(i),end:F(a)};if(i=F(i),a=F(a),a="number"==typeof a?a:i,e(r).is(":visible")){var s=e(r).css("font-size").replace("px","")*a;r.scrollLeft=s>r.scrollWidth?s:0,0==o.insertMode&&i==a&&a++,r.setSelectionRange?(r.selectionStart=i,r.selectionEnd=a):r.createTextRange&&((n=r.createTextRange()).collapse(!0),n.moveEnd("character",a),n.moveStart("character",i),n.select())}}function I(t){var i,a,n=b(),o=n.length,r=p(),s={},l=c().validPositions[r],u=void 0!=l?l.locator.slice():void 0;for(i=r+1;i<n.length;i++)a=m(i,u,i-1),u=a.locator.slice(),s[i]=e.extend(!0,{},a);var d=l&&void 0!=l.alternation?l.locator[l.alternation].split(","):[];for(i=o-1;i>r&&((a=s[i].match).optionality||a.optionalQuantifier||l&&void 0!=l.alternation&&void 0!=s[i].locator[l.alternation]&&-1!=e.inArray(s[i].locator[l.alternation].toString(),d))&&n[i]==j(i,a);i--)o--;return t?{l:o,def:s[o]?s[o].match:void 0}:o}function K(e){for(var t=I(),i=e.length-1;i>t&&!x(i);i--);e.splice(t,i+1-t)}function R(t){if(e.isFunction(o.isComplete))return o.isComplete.call(ee,t,o);if("*"!=o.repeat){var i=!1,a=I(!0),n=A(a.l);if(p(),void 0==a.def||a.def.newBlockMarker||a.def.optionalQuantifier){i=!0;for(var r=0;n>=r;r++){var s=x(r),l=h(r);if(s&&void 0==c().validPositions[r]&&!0!==l.optionality&&!0!==l.optionalQuantifier||!s&&t[r]!=j(r)){i=!1;break}}}return i}}function L(e,t){return ie?e-t>1||e-t==1&&o.insertMode:t-e>1||t-e==1&&o.insertMode}function N(t){var i=e._data(t).events;e.each(i,function(t,i){e.each(i,function(e,t){if("inputmask"==t.namespace&&"setvalue"!=t.type){var i=t.handler;t.handler=function(e){if(!this.disabled&&(!this.readOnly||"keydown"==e.type&&e.ctrlKey&&67==e.keyCode)){switch(e.type){case"input":if(!0===ne)return ne=!1,e.preventDefault();break;case"keydown":ae=!1;break;case"keypress":if(!0===ae)return e.preventDefault();ae=!0;break;case"compositionstart":break;case"compositionupdate":ne=!0}return i.apply(this,arguments)}e.preventDefault()}}})})}function H(t){var i,a;t._valueGet||(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(t,"value"),document.__lookupGetter__&&t.__lookupGetter__("value")?(i=t.__lookupGetter__("value"),a=t.__lookupSetter__("value"),t.__defineGetter__("value",function(){var t=e(this),a=e(this).data("_inputmask");return a?a.opts.autoUnmask?t.inputmask("unmaskedvalue"):i.call(this)!=y().join("")?i.call(this):"":i.call(this)}),t.__defineSetter__("value",function(t){var i=e(this).data("_inputmask");i?(a.call(this,e.isFunction(i.opts.onBeforeMask)?i.opts.onBeforeMask.call(de,t,i.opts)||t:t),e(this).triggerHandler("setvalue.inputmask")):a.call(this,t)})):(i=function(){return t.value},a=function(e){t.value=e},function(t){if(void 0==e.valHooks[t]||1!=e.valHooks[t].inputmaskpatch){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},a=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(t){var a=e(t);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");var n=i(t),o=a.data("_inputmask").maskset._buffer;return o=o?o.join(""):"",n!=o?n:""}return i(t)},set:function(t,i){var n,o=e(t),r=o.data("_inputmask");return r?(n=a(t,e.isFunction(r.opts.onBeforeMask)?r.opts.onBeforeMask.call(de,i,r.opts)||i:i),o.triggerHandler("setvalue.inputmask")):n=a(t,i),n},inputmaskpatch:!0}}}(t.type),function(t){e(t).bind("mouseenter.inputmask",function(){var t=e(this),i=this._valueGet();""!=i&&i!=b().join("")&&(this._valueSet(e.isFunction(o.onBeforeMask)?o.onBeforeMask.call(de,i,o)||i:i),t.triggerHandler("setvalue.inputmask"))});var i=e._data(t).events.mouseover;if(i){for(var a=i[i.length-1],n=i.length-1;n>0;n--)i[n]=i[n-1];i[0]=a}}(t)),t._valueGet=function(e){return ie&&!0!==e?i.call(this).split("").reverse().join(""):i.call(this)},t._valueSet=function(e){a.call(this,ie?e.split("").reverse().join(""):e)})}function U(t,i,a,n){if((o.numericInput||ie)&&(i==e.inputmask.keyCode.BACKSPACE?i=e.inputmask.keyCode.DELETE:i==e.inputmask.keyCode.DELETE&&(i=e.inputmask.keyCode.BACKSPACE),ie)){var r=a.end;a.end=a.begin,a.begin=r}if(i==e.inputmask.keyCode.BACKSPACE&&(a.end-a.begin<1||0==o.insertMode)?a.begin=A(a.begin):i==e.inputmask.keyCode.DELETE&&a.begin==a.end&&(a.end=x(a.end)?a.end+1:M(a.end)+1),v(a.begin,a.end,!1,n),!0!==n){!function(){if(o.keepStatic){d(!0);var i,a=[];for(i=p();i>=0;i--)if(c().validPositions[i]){if(void 0!=c().validPositions[i].alternation)break;a.push(c().validPositions[i].input),delete c().validPositions[i]}if(i>0)for(;a.length>0;){c().p=M(p());var n=e.Event("keypress");n.which=a.pop().charCodeAt(0),q.call(t,n,!0,!1,!1,c().p)}}}();var s=p(a.begin);s<a.begin?(-1==s&&d(),c().p=M(s)):c().p=a.begin}}function W(i){var a=this,n=e(a),r=i.keyCode,l=B(a);r==e.inputmask.keyCode.BACKSPACE||r==e.inputmask.keyCode.DELETE||s&&127==r||i.ctrlKey&&88==r&&!t("cut")?(i.preventDefault(),88==r&&(Z=b().join("")),U(a,r,l),O(a,b(),c().p,i,Z!=b().join("")),a._valueGet()==y().join("")?n.trigger("cleared"):!0===R(b())&&n.trigger("complete"),o.showTooltip&&n.prop("title",c().mask)):r==e.inputmask.keyCode.END||r==e.inputmask.keyCode.PAGE_DOWN?setTimeout(function(){var e=M(p());o.insertMode||e!=w()||i.shiftKey||e--,B(a,i.shiftKey?l.begin:e,e)},0):r==e.inputmask.keyCode.HOME&&!i.shiftKey||r==e.inputmask.keyCode.PAGE_UP?B(a,0,i.shiftKey?l.begin:0):(o.undoOnEscape&&r==e.inputmask.keyCode.ESCAPE||90==r&&i.ctrlKey)&&!0!==i.altKey?(T(a,!0,!1,Z.split("")),n.click()):r!=e.inputmask.keyCode.INSERT||i.shiftKey||i.ctrlKey?0!=o.insertMode||i.shiftKey||(r==e.inputmask.keyCode.RIGHT?setTimeout(function(){var e=B(a);B(a,e.begin)},0):r==e.inputmask.keyCode.LEFT&&setTimeout(function(){var e=B(a);B(a,ie?e.begin+1:e.begin-1)},0)):(o.insertMode=!o.insertMode,B(a,o.insertMode||l.begin!=w()?l.begin:l.begin-1)),o.onKeyDown.call(this,i,b(),B(a).begin,o),oe=-1!=e.inArray(r,o.ignorables)}function q(t,i,a,n,r){var s=this,l=e(s),u=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||oe))return!0;if(u){46==u&&0==t.shiftKey&&","==o.radixPoint&&(u=44);var p,v=i?{begin:r,end:r}:B(s),m=String.fromCharCode(u),h=L(v.begin,v.end);h&&(c().undoPositions=e.extend(!0,{},c().validPositions),U(s,e.inputmask.keyCode.DELETE,v,!0),v.begin=c().p,o.insertMode||(o.insertMode=!o.insertMode,f(v.begin,n),o.insertMode=!o.insertMode),h=!o.multi),c().writeOutBuffer=!0;var k=ie&&!h?v.end:v.begin,y=C(k,m,n);if(!1!==y){if(!0!==y&&(k=void 0!=y.pos?y.pos:k,m=void 0!=y.c?y.c:m),d(!0),void 0!=y.caret)p=y.caret;else{var P=c().validPositions;p=!o.keepStatic&&(void 0!=P[k+1]&&g(k+1,P[k].locator.slice(),k).length>1||void 0!=P[k].alternation)?k+1:M(k)}c().p=p}if(!1!==a){var E=this;if(setTimeout(function(){o.onKeyValidation.call(E,y,o)},0),c().writeOutBuffer&&!1!==y){var x=b();O(s,x,i?void 0:o.numericInput?A(p):p,t,!0!==i),!0!==i&&setTimeout(function(){!0===R(x)&&l.trigger("complete")},0)}else h&&(c().buffer=void 0,c().validPositions=c().undoPositions)}else h&&(c().buffer=void 0,c().validPositions=c().undoPositions);if(o.showTooltip&&l.prop("title",c().mask),i&&e.isFunction(o.onBeforeWrite)){var w=o.onBeforeWrite.call(this,t,b(),p,o);if(w&&w.refreshFromBuffer){var S=w.refreshFromBuffer;_(!0===S?S:S.start,S.end,w.buffer),d(!0),w.caret&&(c().p=w.caret)}}t.preventDefault()}}function $(t){var i=this,a=e(i),n=i._valueGet(!0),r=B(i);if("propertychange"==t.type&&i._valueGet().length<=w())return!0;if("paste"==t.type){var s=n.substr(0,r.begin),l=n.substr(r.end,n.length);s==y().slice(0,r.begin).join("")&&(s=""),l==y().slice(r.end).join("")&&(l=""),window.clipboardData&&window.clipboardData.getData?n=s+window.clipboardData.getData("Text")+l:t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.getData&&(n=s+t.originalEvent.clipboardData.getData("text/plain")+l)}var u=n;if(e.isFunction(o.onBeforePaste)){if(!1===(u=o.onBeforePaste.call(i,n,o)))return t.preventDefault(),!1;u||(u=n)}return T(i,!0,!1,ie?u.split("").reverse():u.split("")),a.click(),!0===R(b())&&a.trigger("complete"),!1}function Q(t){var i=this;T(i,!0,!1),!0===R(b())&&e(i).trigger("complete"),t.preventDefault()}function V(e){var t=this;Z=b().join(""),(""==X||0!=e.originalEvent.data.indexOf(X))&&(Y=B(t))}function z(t){var i=this,a=Y||B(i);0==t.originalEvent.data.indexOf(X)&&(d(),a={begin:0,end:0});var n=t.originalEvent.data;B(i,a.begin,a.end);for(var r=0;r<n.length;r++){var s=e.Event("keypress");s.which=n.charCodeAt(r),ae=!1,oe=!1,q.call(i,s)}setTimeout(function(){var e=c().p;O(i,b(),o.numericInput?A(e):e)},0),X=t.originalEvent.data}function J(){}var Z,Y,X,ee,te,ie=!1,ae=!1,ne=!1,oe=!1,re=!0;if(void 0!=a)switch(a.action){case"isComplete":return ee=e(a.el),n=ee.data("_inputmask").maskset,o=ee.data("_inputmask").opts,R(a.buffer);case"unmaskedvalue":return ee=a.$input,n=ee.data("_inputmask").maskset,o=ee.data("_inputmask").opts,ie=a.$input.data("_inputmask").isRTL,G(a.$input);case"mask":Z=b().join(""),function(t){if((ee=e(t)).is(":input")&&i(ee.attr("type"))){if(ee.data("_inputmask",{maskset:n,opts:o,isRTL:!1}),o.showTooltip&&ee.prop("title",c().mask),("rtl"==t.dir||o.rightAlign)&&ee.css("text-align","right"),"rtl"==t.dir||o.numericInput){t.dir="ltr",ee.removeAttr("dir");var a=ee.data("_inputmask");a.isRTL=!0,ee.data("_inputmask",a),ie=!0}ee.unbind(".inputmask"),ee.closest("form").bind("submit",function(){Z!=b().join("")&&ee.change(),ee[0]._valueGet&&ee[0]._valueGet()==y().join("")&&ee[0]._valueSet(""),o.removeMaskOnSubmit&&ee.inputmask("remove")}).bind("reset",function(){setTimeout(function(){ee.triggerHandler("setvalue.inputmask")},0)}),ee.bind("mouseenter.inputmask",function(){var t=this;!e(this).is(":focus")&&o.showMaskOnHover&&t._valueGet()!=b().join("")&&O(t,b())}).bind("blur.inputmask",function(t){var i=e(this),a=this;if(i.data("_inputmask")){var n=a._valueGet(),r=b().slice();re=!0,Z!=r.join("")&&setTimeout(function(){i.change(),Z=r.join("")},0),""!=n&&(o.clearMaskOnLostFocus&&(n==y().join("")?r=[]:K(r)),!1===R(r)&&(i.trigger("incomplete"),o.clearIncomplete&&(d(),r=o.clearMaskOnLostFocus?[]:y().slice())),O(a,r,void 0,t))}}).bind("focus.inputmask",function(){var t=(e(this),this),i=t._valueGet();o.showMaskOnFocus&&(!o.showMaskOnHover||o.showMaskOnHover&&""==i)&&t._valueGet()!=b().join("")&&O(t,b(),M(p())),Z=b().join("")}).bind("mouseleave.inputmask",function(){var t=e(this),i=this;if(o.clearMaskOnLostFocus){var a=b().slice(),n=i._valueGet();t.is(":focus")||n==t.attr("placeholder")||""==n||(n==y().join("")?a=[]:K(a),O(i,a))}}).bind("click.inputmask",function(){var t=this;if(e(this).is(":focus")){var i=B(t);if(i.begin==i.end)if(o.radixFocus&&""!=o.radixPoint&&-1!=e.inArray(o.radixPoint,b())&&(re||b().join("")==y().join("")))B(t,e.inArray(o.radixPoint,b())),re=!1;else{var a=ie?F(i.begin):i.begin,n=M(p(a));n>a?B(t,x(a)?a:M(a)):B(t,n)}}}).bind("dblclick.inputmask",function(){var e=this;setTimeout(function(){B(e,0,M(p()))},0)}).bind(u+".inputmask dragdrop.inputmask drop.inputmask",$).bind("setvalue.inputmask",function(){var e=this;T(e,!0,!1),Z=b().join(""),(o.clearMaskOnLostFocus||o.clearIncomplete)&&e._valueGet()==y().join("")&&e._valueSet("")}).bind("cut.inputmask",function(t){ne=!0;var i=this,a=e(i),n=B(i);U(i,e.inputmask.keyCode.DELETE,n),O(i,b(),c().p,t,Z!=b().join("")),i._valueGet()==y().join("")&&a.trigger("cleared"),o.showTooltip&&a.prop("title",c().mask)}).bind("complete.inputmask",o.oncomplete).bind("incomplete.inputmask",o.onincomplete).bind("cleared.inputmask",o.oncleared),ee.bind("keydown.inputmask",W).bind("keypress.inputmask",q),l||ee.bind("compositionstart.inputmask",V).bind("compositionupdate.inputmask",z).bind("compositionend.inputmask",J),"paste"===u&&ee.bind("input.inputmask",Q),H(t),T(t,!0,!1,(e.isFunction(o.onBeforeMask)?o.onBeforeMask.call(t,t._valueGet(),o)||t._valueGet():t._valueGet()).split(""));var r=b().slice();Z=r.join("");var s;try{s=document.activeElement}catch(e){}!1===R(r)&&o.clearIncomplete&&d(),o.clearMaskOnLostFocus&&(r.join("")==y().join("")?r=[]:K(r)),O(t,r),s===t&&B(t,M(p())),N(t)}}(a.el);break;case"format":(ee=e({})).data("_inputmask",{maskset:n,opts:o,isRTL:o.numericInput}),o.numericInput&&(ie=!0);se=(e.isFunction(o.onBeforeMask)?o.onBeforeMask.call(ee,a.value,o)||a.value:a.value).split("");return T(ee,!1,!1,ie?se.reverse():se),e.isFunction(o.onBeforeWrite)&&o.onBeforeWrite.call(this,void 0,b(),0,o),a.metadata?{value:ie?b().slice().reverse().join(""):b().join(""),metadata:ee.inputmask("getmetadata")}:ie?b().slice().reverse().join(""):b().join("");case"isValid":(ee=e({})).data("_inputmask",{maskset:n,opts:o,isRTL:o.numericInput}),o.numericInput&&(ie=!0);var se=a.value.split("");T(ee,!1,!0,ie?se.reverse():se);for(var le=b(),ue=I(),ce=le.length-1;ce>ue&&!x(ce);ce--);return le.splice(ue,ce+1-ue),R(le)&&a.value==le.join("");case"getemptymask":return ee=e(a.el),n=ee.data("_inputmask").maskset,o=ee.data("_inputmask").opts,y();case"remove":var de=a.el;ee=e(de),n=ee.data("_inputmask").maskset,o=ee.data("_inputmask").opts,de._valueSet(G(ee)),ee.unbind(".inputmask"),ee.removeData("_inputmask");var pe;Object.getOwnPropertyDescriptor&&(pe=Object.getOwnPropertyDescriptor(de,"value")),pe&&pe.get?de._valueGet&&Object.defineProperty(de,"value",{get:de._valueGet,set:de._valueSet}):document.__lookupGetter__&&de.__lookupGetter__("value")&&de._valueGet&&(de.__defineGetter__("value",de._valueGet),de.__defineSetter__("value",de._valueSet));try{delete de._valueGet,delete de._valueSet}catch(e){de._valueGet=void 0,de._valueSet=void 0}break;case"getmetadata":if(ee=e(a.el),n=ee.data("_inputmask").maskset,o=ee.data("_inputmask").opts,e.isArray(n.metadata)){for(var fe,ve=p(),me=ve;me>=0;me--)if(c().validPositions[me]&&void 0!=c().validPositions[me].alternation){fe=c().validPositions[me].alternation;break}return void 0!=fe?n.metadata[c().validPositions[ve].locator[fe]]:n.metadata[0]}return n.metadata}}if(void 0===e.fn.inputmask){var r=navigator.userAgent,s=null!==r.match(new RegExp("iphone","i")),l=(r.match(new RegExp("android.*safari.*","i")),r.match(new RegExp("android.*chrome.*","i")),null!==r.match(new RegExp("android.*firefox.*","i"))),u=(/Kindle/i.test(r)||/Silk/i.test(r)||/KFTT/i.test(r)||/KFOT/i.test(r)||/KFJWA/i.test(r)||/KFJWI/i.test(r)||/KFSOWI/i.test(r)||/KFTHWA/i.test(r)||/KFTHWI/i.test(r)||/KFAPWA/i.test(r)||/KFAPWI/i.test(r),t("paste")?"paste":t("input")?"input":"propertychange");e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:e.noop,onBeforeMask:void 0,onBeforePaste:void 0,onBeforeWrite:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixFocus:!1,nojumps:!1,nojumpsThreshold:0,keepStatic:void 0,definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,canClearPosition:e.noop,postValidation:void 0},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},masksCache:{},escapeRegex:function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},format:function(t,i,r){var s=e.extend(!0,{},e.inputmask.defaults,i);return a(s.alias,i,s),o({action:"format",value:t,metadata:r},n(s),s)},isValid:function(t,i){var r=e.extend(!0,{},e.inputmask.defaults,i);return a(r.alias,i,r),o({action:"isValid",value:t},n(r),r)}},e.fn.inputmask=function(t,i){function r(t,i,n){var o=e(t);o.data("inputmask-alias")&&a(o.data("inputmask-alias"),{},i);for(var r in i){var s=o.data("inputmask-"+r.toLowerCase());void 0!=s&&("mask"==r&&0==s.indexOf("[")?(i[r]=s.replace(/[\s[\]]/g,"").split("','"),i[r][0]=i[r][0].replace("'",""),i[r][i[r].length-1]=i[r][i[r].length-1].replace("'","")):i[r]="boolean"==typeof s?s:s.toString(),n&&(n[r]=i[r]))}return i}var s,l=e.extend(!0,{},e.inputmask.defaults,i);if("string"==typeof t)switch(t){case"mask":return a(l.alias,i,l),void 0==(s=n(l))?this:this.each(function(){o({action:"mask",el:this},e.extend(!0,{},s),r(this,l))});case"unmaskedvalue":var u=e(this);return u.data("_inputmask")?o({action:"unmaskedvalue",$input:u}):u.val();case"remove":return this.each(function(){e(this).data("_inputmask")&&o({action:"remove",el:this})});case"getemptymask":return this.data("_inputmask")?o({action:"getemptymask",el:this}):"";case"hasMaskedValue":return!!this.data("_inputmask")&&!this.data("_inputmask").opts.autoUnmask;case"isComplete":return!this.data("_inputmask")||o({action:"isComplete",buffer:this[0]._valueGet().split(""),el:this});case"getmetadata":return this.data("_inputmask")?o({action:"getmetadata",el:this}):void 0;default:return a(l.alias,i,l),a(t,i,l)||(l.mask=t),void 0==(s=n(l))?this:this.each(function(){o({action:"mask",el:this},e.extend(!0,{},s),r(this,l))})}else{if("object"==typeof t)return l=e.extend(!0,{},e.inputmask.defaults,t),a(l.alias,t,l),void 0==(s=n(l))?this:this.each(function(){o({action:"mask",el:this},e.extend(!0,{},s),r(this,l))});if(void 0==t)return this.each(function(){var t=e(this).attr("data-inputmask");if(t&&""!=t)try{t=t.replace(new RegExp("'","g"),'"');var n=e.parseJSON("{"+t+"}");e.extend(!0,n,i),l=e.extend(!0,{},e.inputmask.defaults,n),a((l=r(this,l)).alias,n,l),l.alias=void 0,e(this).inputmask("mask",l)}catch(e){}if(e(this).attr("data-inputmask-mask")||e(this).attr("data-inputmask-alias")){l=e.extend(!0,{},e.inputmask.defaults,{});var o={};a((l=r(this,l,o)).alias,o,l),l.alias=void 0,e(this).inputmask("mask",l)}})}}}return e.fn.inputmask});$(document).ready(function(){$('input[name="phone"]').inputmask("+38(999)999-99-99",{"clearIncomplete":true}).attr('type','tel');});