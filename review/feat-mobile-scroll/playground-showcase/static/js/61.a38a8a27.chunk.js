"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[61],{6061:function(e,t,o){o.r(t),o.d(t,{db_toggle:function(){return a}});var n=o(5671),r=o(3144),i=o(824),l=o(6630),a=function(){function e(t){(0,n.Z)(this,e),(0,i.r)(this,t),this.dbChange=(0,i.c)(this,"dbChange",7),this.htmlid="db-"+(0,l.u)()}return(0,r.Z)(e,[{key:"handleChange",value:function(e){this.dbChange.emit(e)}},{key:"render",value:function(){var e=this;return(0,i.h)(i.H,null,(0,i.h)("input",{type:"checkbox",role:"switch",class:"elm-toggle",disabled:this.disabled,checked:this.checked,id:this.htmlid,onChange:function(t){return e.handleChange(t)}}),(0,i.h)("label",{class:"elm-label",htmlFor:this.htmlid},(0,i.h)("slot",null)))}}]),e}();a.style=':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-toggle{appearance:none;width:3rem;height:1.5rem;display:inline-block;position:relative;border-radius:0.75rem;border:none;background-color:#646973;transition:background-color 0.3s ease}@media (prefers-reduced-motion: reduce){.elm-toggle{transition-duration:0.01s !important}}.elm-toggle+.elm-label{vertical-align:top}.elm-toggle::before{content:"";display:block;position:absolute;left:0.125rem;top:0.125rem;width:1.25rem;height:1.25rem;background-color:#ffffff;border-radius:0.625rem;box-shadow:0 5px 30px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.15);transition:border-color, left 0.3s cubic-bezier(0.3, 1.5, 0.7, 1)}@media (prefers-reduced-motion: reduce){.elm-toggle::before{transition-duration:0.01s !important}}.elm-toggle:hover::before{background-color:#f7f7f7}.elm-toggle:active::before{width:1.5rem;transition:width 0.3s cubic-bezier(0.3, 1.5, 0.7, 1)}@media (prefers-reduced-motion: reduce){.elm-toggle:active::before{transition-duration:0.01s !important}}.elm-toggle:checked{background-color:#131821}.elm-toggle:checked::before{left:unset;right:0.125rem}.elm-toggle:disabled,.elm-toggle:disabled+label{opacity:0.5}:host{display:block}.elm-toggle::before{box-sizing:inherit}'},6630:function(e,t,o){o.d(t,{a:function(){return i},g:function(){return r},p:function(){return l},s:function(){return a},u:function(){return n}});var n=function(){try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}catch(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},r=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},i=function e(t,o){t.children&&Array.from(t.children).forEach((function(t){"db-link"===t.tagName.toLowerCase()&&t.setAttribute("icon-variant",o),t.children&&e(t,o)}))},l=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(t){return!1}},a=function(e){e.setAttribute("mobile-scroll","true"),function(e){var t,o=document.documentElement,n=window,r=n.scrollY||o.scrollTop,i=0,l=0;window.addEventListener("scroll",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=0;return function(){var n=(new Date).getTime();n-o>=t&&(e(),t=n)}}((function(){n.screen.width<768&&((t=n.scrollY||o.scrollTop)>r?i=2:t<r&&(i=1),i===l&&r===t||e(i,t),l=i,r=t)})))}((function(t,o){2===t&&o>64?e.setAttribute("scroll-hide","true"):1===t&&e.hasAttribute("scroll-hide")&&e.removeAttribute("scroll-hide")}))}}}]);
//# sourceMappingURL=61.a38a8a27.chunk.js.map