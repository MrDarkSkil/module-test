!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){function t(t){this.elios=t,this.name="test",this.requireVersion="0.0.1",this.showOnStart=!0}return t.prototype.init=function(){console.log("MODULE DEV LOADED "+this.name)},t.prototype.start=function(){var t=this;console.log("MODULE STARTED "+this.name),this.widget=this.elios.createWidget({});var e=0;this.it=setInterval(function(){t.widget.html.next('<div>\n            <div class="card" >\n               Hello form module-test ! :)\n\n                <br>\n                    '+e+"\n                </div>\n            </div>\n            \n            <style>\n                .card {\n                    color: white;\n                    padding: 10px;\n                    height: 150px;\n                    background-color: orange;\n                    border-radius: 5px;\n                }\n            </style>"),e++},1e3)},t.prototype.stop=function(){clearInterval(this.it),console.log("MODULE STOPED "+this.name)},t}();e.default=r}]));