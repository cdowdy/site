!function(a){"use strict";a.picturefill=function(){for(var b=a.document.getElementsByTagName("span"),c=0,d=b.length;d>c;c++)if(null!==b[c].getAttribute("data-picture")){for(var e=b[c].getElementsByTagName("span"),f=[],g=0,h=e.length;h>g;g++){var i=e[g].getAttribute("data-media");(!i||a.matchMedia&&a.matchMedia(i).matches)&&f.push(e[g])}var j=b[c].getElementsByTagName("img")[0];if(f.length){var k=f.pop();if(j&&"NOSCRIPT"!==j.parentNode.nodeName){if(k===j.parentNode)continue}else j=a.document.createElement("img"),j.alt=b[c].getAttribute("data-alt");j.src=k.getAttribute("data-src"),k.appendChild(j),j.removeAttribute("width"),j.removeAttribute("height")}else j&&j.parentNode.removeChild(j)}},a.addEventListener?(a.addEventListener("resize",a.picturefill,!1),a.addEventListener("DOMContentLoaded",function(){a.picturefill(),a.removeEventListener("load",a.picturefill,!1)},!1),a.addEventListener("load",a.picturefill,!1)):a.attachEvent&&a.attachEvent("onload",a.picturefill)}(this),window.matchMedia=window.matchMedia||function(a,b){var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42==g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);