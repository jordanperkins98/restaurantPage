(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\ninput{\n    appearance: none;\n    border: none;\n}\ntextarea{\n    appearance: none;\n    border: none;\n}\n\n/* End of reset.css */\n\n/* Start of style.css */\n\n\n\nbody{\n    background-color: rgb(29, 29, 29);\n    color: rgb(228, 228, 228);\n    \n    \n}\n\n:root{\n    --primary-color: #f1c500;\n    \n\n}\n\nhtml{\n    font-size: 16px;\n    font-family: "Roboto", sans-serif;\n    \n}\n\n\n\n\nnav {\n    display: flex;\n    justify-content: space-between;\n    padding: 2rem 5rem;\n    gap: 2rem;\n    \n}\n\n.tabs{\n    display: flex;\n    gap: 3rem;\n    align-items: center;\n    font-weight: 600;\n    z-index: 1;\n    \n    \n}\n\n.tabs > a{\n    cursor: pointer;\n\n    \n}\n\n\n\nbutton{\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    border: none;\n}\n\n.cta-order{\n    background-color: inherit;\n    color: var(--primary-color);\n    padding: 0.5rem 1rem;\n    border: 2px solid var(--primary-color);\n    border-radius: 20px;\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.cta-order:hover{\n    background-color: var(--primary-color);\n    color: rgb(29, 29, 29);\n\n}\n\n.active{\n    color: var(--primary-color);\n    position: relative;\n    margin-top: 7px;\n    align-self: center;\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    \n\n}\n\n.active::after{\n    content: "\\2022";\n    color: var(--primary-color);\n    display: block;\n    height: 2px;\n    text-align: center;\n    margin-top: 5px;\n\n}\n\n\n.left-links{\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: flex-start;\n    gap: 10rem;\n    \n    \n}\n\n.left-links h1{\n    font-size: 2rem;\n    font-weight: 700;\n    color: #858585;\n    cursor: pointer;\n}\n\n.left-links h1 span{\n    color: var(--primary-color);\n\n}\n\n\n\n.right-links{\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: flex-end;\n    margin-right: 2rem;\n\n    \n}\n\n\n.hero{\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    padding: 0;\n    \n}\n\n.hero-text{\n    color: var(--primary-color);\n    font-size: 5rem;\n    font-weight: 800;\n    margin-left: -7rem;\n}\n\n.hero > img{\n    justify-self: center;\n    margin-top: -7rem;\n    \n\n}\n\n.sub-hero{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 10rem;\n    gap: 1rem;\n    margin-top: 2rem;\n    margin-left: -12rem;\n    z-index: 10;\n\n}\n\n.hero-text span{\n    text-decoration: underline;\n    font-size: 1rem;\n    position: relative;\n    bottom: 1rem;\n}\n\n.hero-subtext{\n    color: var(--primary-color);\n    font-size: 1.5rem;\n    text-decoration: underline;\n    font-weight: 800;\n    margin-left: 5rem;\n \n\n}\n\n.address-container > img{\n    height: 3rem;\n    width: 3rem;\n    filter:  brightness(0) invert(1);\n}\n\n.address-container{\n    display: flex;\n    margin-left: 4rem;\n    margin-top: 5rem;\n}\n\n.address{\n    text-align: center;\n    font-size: 1.5rem;\n    font-weight: 500;\n    color: rgb(230, 230, 230);\n\n}\n\n.about{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.hero-about{\n    color: var(--primary-color);\n    font-size: 2rem;\n    font-weight: 600;\n    margin-top: 1rem;\n    margin-left: 20rem;\n    text-align: center;\n    \n\n}\n\n.about > img{\n    justify-self: center;\n    margin-top: -4rem;\n    margin-left: 10rem;\n    \n    z-index: 1;\n}\n\n\n/* homepage ends here */\n\n/* Start of menu.css */\n\n\n.menu-container{\n    display: flex;\n    justify-content: center;\n    font-family: "Roboto", sans-serif;\n\n}\n\n.menu{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    margin: 2rem 15rem 5rem 15rem;\n    background-color: var(--primary-color);\n    color: black;\n    font-weight: 500;\n    font-family: "Roboto", sans-serif;\n    border: black dashed 4px;\n    padding: 2rem;\n\n}\n\n.menu-title{\n    font-size: 2rem;\n    font-weight: 800;\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    color: rgb(29, 29, 29);\n    grid-column: 1 / -1;\n}\n\n.menu-item{\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    gap: .5rem;\n    font-weight: 300;\n}\n\n\n.menu-item-name{\n    font-size: 1.2rem;\n    font-weight: 400;\n}\n\n.menu-item-price{\n    grid-row:  1 / -1;\n    grid-column: 2 / -1;\n    text-align: right;\n}\n\n\n/* Contact Starts here */\n\n.contact-container{\n    display: flex;\n    gap: 5rem;\n    justify-content: center;\n    margin-top: 5rem;\n    background-color: #2a2d2f;\n    padding-bottom: 10rem;\n\n}\n\n.contact{\n    display: flex;\n    flex-direction: column;\n\n\n}\n\n.contact-header{\n    font-size: 2rem;\n    font-weight: 800;\n    text-align: center;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n.contact-form{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n.form-input{\n    width: 30rem;\n    height: 3rem;\n    background-color: #3b3b3b;\n    text-align: start;\n    font-size: 1rem;\n    color: white;\n}\n\n.form-input::placeholder{\n    color: #5f5d59;\n\n}\n\n.submit-button{\n    background-color: var(--primary-color);\n    border-radius: 30px;\n    color: #3b3b3b;\n    font-family: "Roboto", sans-serif;\n    font-weight: 500;\n    font-size: 1.4rem;\n    width: 10rem;\n    height: 2rem;\n    padding: 0.2rem 1rem;\n}\n\n.submit-button:hover{\n\n    cursor: pointer;\n}\n\n.contact-message {\n    margin-top: 2rem;\n    text-align: center;\n    font-family: "Roboto", sans-serif;\n    font-weight: 300;\n\n}\n\n.pub-iframe{\n    margin-top: 2rem;\n    display: flex;\n    width: 40rem;\n    height: 30rem;\n\n}\n\n.pub-iframe > iframe{\n    flex: 1 1 auto;\n    width: 100%;\n    height: 100%;\n    margin-top: 2rem;\n}\n\n.message-div > textarea{\n    height: 6rem;\n\n}\n\ntextarea{\n    resize: none;\n}\n\n\n@media screen and (max-width: 768px){\n\n\n    .logo{\n        visibility: hidden;\n    }\n    nav{\n        display: flex;\n\n        justify-content: start;\n        margin-left: -17rem;\n        gap: 2rem;\n        padding: 2rem 0;\n    }\n\n    .contact-container{\n        display: flex;\n        flex-direction: column;\n        gap: 2rem;\n        justify-content: center;\n        margin-top: 5rem;\n        background-color: #2a2d2f;\n        padding-bottom: 10rem;\n    }\n\n    .contact{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .contact-form{\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n    }\n\n    .form-input{\n        width: 20rem;\n    }\n\n    .submit-button{\n        width: 8rem;\n        height: 2rem;\n    }\n\n    .pub-iframe{\n        width: 20rem;\n        height: 15rem;\n    }\n\n    .pub-iframe > iframe{\n        width: 100%;\n        height: 100%;\n    }\n\n    .message-div > textarea{\n        height: 4rem;\n    }\n\n    .contact-message{\n        font-size: 1rem;\n    }\n\n    .pub-iframe{\n        visibility: hidden;\n    }\n\n    .contact{\n        margin-top: -18rem;\n    }\n\n\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var p=t(m),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"f1b13a2cd61a857befce.jpg",e=t.p+"04bb48bcb600f95ebabc.jpg",r=t.p+"f683db05a23291ba4c17.png";var o=t(72),a=t.n(o),i=t(825),c=t.n(i),s=t(659),d=t.n(s),l=t(56),m=t.n(l),p=t(540),u=t.n(p),f=t(113),h=t.n(f),g=t(208),b={};function y(n){const e=document.createElement("div");return e.classList.add(n),e}function v(n,e){const t=document.createElement("p");return t.classList.add(n),t.innerHTML=e,t}function x(n){const e=new Image;return e.src=n,e}function w(n,e){const t=x(e);n.appendChild(t)}b.styleTagTransform=h(),b.setAttributes=m(),b.insert=d().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=u(),a()(g.A,b),g.A&&g.A.locals&&g.A.locals;const C=function(){const t=document.getElementById("content"),o=y("hero");w(o,n);const a=y("sub-hero"),i=v("hero-text","Good Times <span>with</span><br> Great Friends");a.appendChild(i);const c=v("hero-subtext","Discover Your Taste");a.appendChild(c);const s=y("address-container"),d=x(r);s.appendChild(d);const l=v("address","123 Main Street<br>Oakville, CA<br>92655");s.appendChild(l),a.appendChild(s),o.appendChild(a),t.appendChild(o);const m=y("about"),p=v("hero-about","Serving Great Food since 99");m.appendChild(p),w(m,e),t.appendChild(m)};let k=[{name:"The Classic Burger",price:"£8",description:"A juicy beef patty with lettuce, tomato, onion, and your choice of cheese, served on a toasted brioche bun."},{name:"Fish and Chips",price:"£12",description:"Beer-battered cod fillets with thick-cut chips, served with tartar sauce and mushy peas."},{name:"Shepherd's Pie",price:"£10",description:"A hearty dish of ground lamb and vegetables, topped with mashed potatoes and a crispy cheese crust."},{name:"Bangers and Mash",price:"£9",description:"Grilled pork sausages served with creamy mashed potatoes, caramelized onion gravy, and a side of buttered peas."},{name:"Ploughman's Platter",price:"£11",description:"A selection of cured meats, cheeses, pickled vegetables, crusty bread, and a tangy chutney."},{name:"Pint of Ale",price:"£4",description:"A refreshing pint of our locally-brewed ale, perfect to enjoy with your meal."},{name:"Sticky Toffee Pudding",price:"£5",description:"A warm, gooey date cake smothered in toffee sauce, served with a scoop of vanilla ice cream."}];Array.from(document.querySelectorAll(".tabs > a")).forEach((n=>{n.addEventListener("click",(n=>{switch(document.querySelector(".active").classList.remove("active"),n.target.classList.add("active"),document.getElementById("content").innerHTML="",n.target.id){case"home":console.log("loading homepage...."),C();break;case"menu":console.log("loading menu...."),function(){const n=document.getElementById("content"),e=y("menu-container"),t=y("menu"),r=document.createElement("h2");r.classList.add("menu-title"),r.innerHTML="Our Menu",t.appendChild(r),k.forEach((n=>{const e=y("menu-item"),r=v("menu-item-name",n.name),o=v("menu-item-description",n.description),a=v("menu-item-price",n.price);e.appendChild(r),e.appendChild(o),e.appendChild(a),t.appendChild(e)})),e.appendChild(t),n.appendChild(e)}();break;case"contact":console.log("loading contact...."),function(){const n=document.getElementById("content"),e=v("contact-message","If you have any questions about the pub we would love to hear from you. You can get in <br> touch by filling out the form below for any general enquiries.");e.classList.add("contact-message"),n.appendChild(e);const t=y("contact-container"),r=y("pub-iframe"),o=document.createElement("iframe");o.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.073292073073!2d-0.1413126842292927!3d51.50136657963469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b0b0f0e1e7%3A0x7b3b1b3b1b3b1b3b!2sThe%20Churchill%20Arms!5e0!3m2!1sen!2suk!4v1629783660003!5m2!1sen!2suk",r.appendChild(o),t.appendChild(r);const a=y("contact"),i=document.createElement("h2");i.classList.add("contact-header"),i.innerHTML="Contact Form",a.appendChild(i);const c=document.createElement("form");c.action="",c.method="post",c.classList.add("contact-form");const s=y("name-div"),d=document.createElement("input");s.classList.add("form-item"),d.classList.add("form-input"),d.type="text",d.id="name",d.name="name",d.placeholder="YOUR NAME",d.required=!0,s.appendChild(d);const l=y("email-div"),m=document.createElement("input");l.classList.add("form-item"),m.classList.add("form-input"),m.type="email",m.id="email",m.name="email",m.placeholder="YOUR EMAIL",m.required=!0,l.appendChild(m);const p=y("message-div"),u=document.createElement("textarea");p.classList.add("form-item"),u.classList.add("form-input"),u.id="message",u.name="message",u.placeholder="YOUR MESSAGE",u.required=!0,p.appendChild(u);const f=document.createElement("button");f.type="submit",f.innerHTML="Send",f.classList.add("submit-button"),c.appendChild(s),c.appendChild(l),c.appendChild(p),c.appendChild(f),a.appendChild(c),t.appendChild(a),n.appendChild(t)}()}}))})),C()})()})();