/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-touchevents-setclasses !*/
 !function(e,n,t,r){function o(e,n){return typeof e===n}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function a(e,n,r,o){var a,l,u,f,c="modernizr",d=i("div"),p=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:c+(r+1),d.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+c,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=n(d,e),p.fake&&p.parentNode?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e,t,r){var o;if("getComputedStyle"in n){o=getComputedStyle.call(n,e,t);var i=n.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[r];return o}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(e,t){var o=e.length;if("CSS"in n&&"supports"in n.CSS){for(;o--;)if(n.CSS.supports(f(e[o]),t))return!0;return!1}if("CSSSupportsRule"in n){for(var i=[];o--;)i.push("("+f(e[o])+":"+t+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===l(e,null,"position")})}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,t,s){function a(){f&&(delete E.style,delete E.modElem)}if(s=!o(s,"undefined")&&s,!o(t,"undefined")){var l=c(e,t);if(!o(l,"undefined"))return l}for(var f,p,m,h,v,y=["modernizr","tspan","samp"];!E.style&&y.length;)f=!0,E.modElem=i(y.shift()),E.style=E.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=E.style[h],u(h,"-")&&(h=d(h)),E.style[h]!==r){if(s||o(t,"undefined"))return a(),"pfx"!==n||h;try{E.style[h]=t}catch(e){}if(E.style[h]!==v)return a(),"pfx"!==n||h}return a(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function h(e,n,t){var r;for(var i in e)if(e[i]in n)return!1===t?e[i]:(r=n[e[i]],o(r,"function")?m(r,t||n):r);return!1}function v(e,n,t,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return o(n,"string")||o(n,"undefined")?p(a,n,r,i):(a=(e+" "+N.join(s+" ")+s).split(" "),h(a,n,t))}function y(e,n,t){return v(e,r,r,n,t)}var g=[],C={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],S=t.documentElement,_="svg"===S.nodeName.toLowerCase(),b=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=b;var x=function(){var e=n.matchMedia||n.msMatchMedia;return e?function(n){var t=e(n);return t&&t.matches||!1}:function(e){var n=!1;return a("@media "+e+" { #modernizr { position: absolute; } }",function(e){n="absolute"===l(e,null,"position")}),n}}();C.mq=x,Modernizr.addTest("touchevents",function(){if("ontouchstart"in n||n.TouchEvent||n.DocumentTouch&&t instanceof DocumentTouch)return!0;var e=["(",b.join("touch-enabled),("),"heartz",")"].join("");return x(e)});var z="Moz O ms Webkit",P=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=P;var T={elem:i("modernizr")};Modernizr._q.push(function(){delete T.elem});var E={style:T.elem.style};Modernizr._q.unshift(function(){delete E.style});var N=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=N,C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("backdropfilter",y("backdropFilter")),function(){var e,n,t,r,i,s,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(Modernizr[a[0]]&&(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean)||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),w.push((r?"":"no-")+a.join("-"))}}(),function(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),_?S.className.baseVal=n:S.className=n)}(w),delete C.addTest,delete C.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,window,document);