/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(x.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var i=e[r];if(!o(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function a(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}function f(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+N.join(r+" ")+r).split(" ");return s(t,"string")||s(t,"undefined")?u(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),a(i,t,n))}function l(){d.input=function(n){for(var r=0,i=n.length;i>r;r++)O[n[r]]=n[r]in w;return O.list&&(O.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),O}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(e){for(var r,i,s,o=0,u=e.length;u>o;o++)w.setAttribute("type",i=e[o]),r="text"!==w.type,r&&(w.value=E,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&w.style.WebkitAppearance!==n?(m.appendChild(w),s=t.defaultView,r=s.getComputedStyle&&"textfield"!==s.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,m.removeChild(w)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?w.checkValidity&&w.checkValidity()===!1:w.value!=E)),A[e[o]]=!!r;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var c,h,p="2.7.1",d={},v=!0,m=t.documentElement,g="modernizr",y=t.createElement(g),b=y.style,w=t.createElement("input"),E=":)",S={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",N=T.split(" "),C=T.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},L={},A={},O={},M=[],_=M.slice,D=function(e,n,r,i){var s,o,u,a,f=t.createElement("div"),l=t.body,c=l||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=i?i[r]:g+(r+1),f.appendChild(u);return s=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),f.id=g,(l?f:c).innerHTML+=s,c.appendChild(f),l||(c.style.background="",c.style.overflow="hidden",a=m.style.overflow,m.style.overflow="hidden",m.appendChild(c)),o=n(f,e),l?f.parentNode.removeChild(f):(c.parentNode.removeChild(c),m.style.overflow=a),!!o},P=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return D("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},H=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var o=e in i;return o||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),o=s(i[e],"function"),s(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty;h=s(B,"undefined")||s(B.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=_.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(_.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(_.call(arguments)))};return r}),L.flexbox=function(){return f("flexWrap")},L.flexboxlegacy=function(){return f("boxDirection")},L.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},L.canvastext=function(){return!!d.canvas&&!!s(t.createElement("canvas").getContext("2d").fillText,"function")},L.webgl=function(){return!!e.WebGLRenderingContext},L.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",x.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},L.geolocation=function(){return"geolocation"in navigator},L.postmessage=function(){return!!e.postMessage},L.websqldatabase=function(){return!!e.openDatabase},L.indexedDB=function(){return!!f("indexedDB",e)},L.hashchange=function(){return H("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},L.history=function(){return!!e.history&&!!history.pushState},L.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},L.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},L.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},L.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},L.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},L.backgroundsize=function(){return f("backgroundSize")},L.borderimage=function(){return f("borderImage")},L.borderradius=function(){return f("borderRadius")},L.boxshadow=function(){return f("boxShadow")},L.textshadow=function(){return""===t.createElement("div").style.textShadow},L.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},L.cssanimations=function(){return f("animationName")},L.csscolumns=function(){return f("columnCount")},L.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),o(b.backgroundImage,"gradient")},L.cssreflections=function(){return f("boxReflect")},L.csstransforms=function(){return!!f("transform")},L.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in m.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},L.csstransitions=function(){return f("transition")},L.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(r.split(" ")[0])}),e},L.generatedcontent=function(){var e;return D(["#",g,"{font:0/0 a}#",g,':after{content:"',E,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},L.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},L.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},L.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},L.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},L.webworkers=function(){return!!e.Worker},L.applicationcache=function(){return!!e.applicationCache},L.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},L.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},L.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(S.call(t.createElementNS(k.svg,"animate")))},L.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(S.call(t.createElementNS(k.svg,"clipPath")))};for(var j in L)h(L,j)&&(c=j.toLowerCase(),d[c]=L[j](),M.push((d[c]?"":"no-")+c));return d.input||l(),d.addTest=function(e,t){if("object"==typeof e)for(var r in e)h(e,r)&&d.addTest(r,e[r]);else{if(e=e.toLowerCase(),d[e]!==n)return d;t="function"==typeof t?t():t,"undefined"!=typeof v&&v&&(m.className+=" "+(t?"":"no-")+e),d[e]=t}return d},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[v]];return t||(t={},m++,e[v]=m,g[m]=t),t}function s(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=i(n));var s;return s=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!s.canHaveChildren||p.test(e)||s.tagUrn?s:r.frag.appendChild(s)}function o(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||i(e);for(var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;a>o;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function a(e){e||(e=t);var r=i(e);return!y.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||u(e,r),e}var f,l,c="3.7.0",h=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,l=!0}}();var y={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:h.shivCSS!==!1,supportsUnknownElements:l,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=y,a(t)}(this,t),d._version=p,d._prefixes=x,d._domPrefixes=C,d._cssomPrefixes=N,d.mq=P,d.hasEvent=H,d.testProp=function(e){return u([e])},d.testAllProps=f,d.testStyles=D,d.prefixed=function(e,t,n){return t?f(e,t,n):f(e,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(v?" js "+M.join(" "):""),d}(this,this.document);