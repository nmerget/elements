"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[293],{"./packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_chip:()=>DbChip});var _index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-60c9fafb.js");function cov_2337hc8xnq(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"7790ac5af6354b3b42040c31a933443927011b2f"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-chip.entry.js",statementMap:{0:{start:{line:3,column:18},end:{line:3,column:4561}},1:{start:{line:5,column:15},end:{line:28,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:11,column:4},end:{line:11,column:32}},4:{start:{line:15,column:4},end:{line:15,column:26}},5:{start:{line:19,column:4},end:{line:19,column:55}},6:{start:{line:23,column:4},end:{line:23,column:24}},7:{start:{line:26,column:4},end:{line:26,column:500}},8:{start:{line:29,column:0},end:{line:29,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:24,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:25,column:2},end:{line:25,column:3}},loc:{start:{line:25,column:11},end:{line:27,column:3}},line:25}},branchMap:{0:{loc:{start:{line:26,column:64},end:{line:26,column:113}},type:"cond-expr",locations:[{start:{line:26,column:93},end:{line:26,column:103}},{start:{line:26,column:106},end:{line:26,column:113}}],line:26},1:{loc:{start:{line:26,column:315},end:{line:26,column:390}},type:"cond-expr",locations:[{start:{line:26,column:327},end:{line:26,column:383}},{start:{line:26,column:386},end:{line:26,column:390}}],line:26},2:{loc:{start:{line:26,column:409},end:{line:26,column:496}},type:"cond-expr",locations:[{start:{line:26,column:427},end:{line:26,column:488}},{start:{line:26,column:492},end:{line:26,column:496}}],line:26}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7790ac5af6354b3b42040c31a933443927011b2f"});var actualCoverage=coverage[path];return cov_2337hc8xnq=function(){return actualCoverage},actualCoverage}cov_2337hc8xnq();var dbChipCss=(cov_2337hc8xnq().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.elm-chip+label{align-items:center;border:solid 1px #878c96;border-radius:0.25rem;display:inline-flex;font-size:0.875rem;height:1.75rem;justify-content:center;padding-left:0.4375rem;padding-right:0.4375rem;white-space:nowrap;text-decoration:none;text-transform:capitalize}.elm-chip+label[data-icon]::before,.elm-chip+label[data-icon-before]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip+label[data-icon-after]::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-chip:not(:disabled,:checked)+label:hover{background-color:rgba(40, 45, 55, 0.03)}.elm-chip:checked+label{border-color:transparent;background-color:#282d37;color:#ffffff}.elm-chip:checked+label[data-variant=warning]{background-color:#f75f00}.elm-chip:checked+label[data-variant=error]{background-color:#ec0016}.elm-chip:checked+label[data-variant=informative]{background-color:#0087b9}.elm-chip:checked+label[data-variant=success]{background-color:#508b1b}.elm-chip:checked+label[data-variant=poi-essen-trinken]{background-color:#f39200;color:#282d37}.elm-chip:checked+label[data-variant=poi-einkaufen]{background-color:#814997}.elm-chip:checked+label[data-variant=poi-gesundheit]{background-color:#a9455d}.elm-chip:checked+label[data-variant=poi-kunst-kultur]{background-color:#e93e8f}.elm-chip:checked+label[data-variant=poi-wissenswertes]{background-color:#858379}.elm-chip:checked+label[data-variant=poi-freizeit]{background-color:#408335}.elm-chip:checked+label[data-variant=poi-zivile-rel-einrichtungen]{background-color:#00a099}.elm-chip:checked+label[data-variant=poi-dienstleistungen]{background-color:#309fd1;color:#282d37}.elm-chip:checked+label[data-variant=poi-db-services-einrichtung]{background-color:#0c3992}.elm-chip:checked+label[data-variant=poi-wegeleitung]{background-color:#3c414b}.elm-chip:disabled+label{opacity:0.5}.elm-chip[type=checkbox],.elm-chip[type=radio]{display:none}');cov_2337hc8xnq().s[1]++;var DbChip=function(){function DbChip(hostRef){cov_2337hc8xnq().f[0]++,cov_2337hc8xnq().s[2]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2337hc8xnq().s[3]++,this.datatype="selection",cov_2337hc8xnq().s[4]++,this.disabled=!1,cov_2337hc8xnq().s[5]++,this.input_id="chip-"+Math.random().toString(),cov_2337hc8xnq().s[6]++,this.name="chips"}return DbChip.prototype.render=function render(){return cov_2337hc8xnq().f[1]++,cov_2337hc8xnq().s[7]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:"elm-chip",type:"filter"===this.datatype?(cov_2337hc8xnq().b[0][0]++,"checkbox"):(cov_2337hc8xnq().b[0][1]++,"radio"),id:this.input_id,"data-type":this.datatype,disabled:this.disabled,name:this.name}),(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.input_id,role:"button","aria-hidden":"true","data-variant":this.variant},this.icon?(cov_2337hc8xnq().b[1][0]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.icon})):(cov_2337hc8xnq().b[1][1]++,null),(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),this.iconafter?(cov_2337hc8xnq().b[2][0]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("db-icon",{variant:"20-outline",icon:this.iconafter})):(cov_2337hc8xnq().b[2][1]++,null)))},DbChip}();cov_2337hc8xnq().s[8]++,DbChip.style=dbChipCss}}]);