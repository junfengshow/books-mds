!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"books-mds","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.ca2179d5.async.js",9],["docs__webgl__texture__index.md.605f6312.async.js",12],["docs__base3D__a1-coordinate__a-1.md.ac67dff7.async.js",17],["docs__webgl__index.md.88282ee1.async.js",33],["docs__index.en-US.md.ec1b3c78.async.js",39],["docs__base3D__index.md.fc33a86a.async.js",43],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.d77837af.async.js",65],["docs__webgl__base__point.md.fb3afd4b.async.js",73],["nm__dumi-theme-apps__dist__layouts__DocLayout__index.4a5fd5cb.chunk.css",604],["nm__dumi-theme-apps__dist__layouts__DocLayout__index.8cfd01f5.async.js",604],["docs__base3D__a1-coordinate__a-2.md.604f61bf.async.js",695],["docs__webgl__shapes__s1sumary.md.2add4e39.async.js",778],["dumi__tmp-production__dumi__theme__ContextWrapper.be7ac25a.async.js",923],["docs__index.md.9aa45bfd.async.js",935]],"r":{"/*":[7,8,10,11,14],"/":[15,10,11,14],"/base3-d":[6,10,11,14],"/webgl":[4,10,11,14],"/~demos/:id":[0,1,14],"/webgl/texture":[2,10,11,14],"/index/en--us":[5,10,11,14],"/base3-d/a1-coordinate/a-1":[3,10,11,14],"/base3-d/a1-coordinate/a-2":[12,10,11,14],"/webgl/shapes/s1sumary":[13,10,11,14],"/webgl/base/point":[9,10,11,14]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();