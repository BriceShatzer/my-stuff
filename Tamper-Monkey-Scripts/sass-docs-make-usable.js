// ==UserScript==
// @name         Improve usablity of docs on sass-lang.com
// @namespace    http://sass-lang.com/documentation/
// @version      2.0
// @description  Make documentation page on sass-lang.com more usable by fixing the TOC to the right side of the viewport.
// @author       http://github.com/BriceShatzer
// @match        *://sass-lang.com/documentation/file.SASS_REFERENCE.html
// @match        *://sass-lang.com/documentation/Sass/Script*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

GM_addStyle('#toc{position: fixed; right: 0;top: 0; overflow-y: scroll; margin-left:0;height: 100%;}');
GM_addStyle('#search{position: fixed; right: 0;top: 0; overflow-y: scroll; margin-top:4px;}');

GM_addStyle('#content{padding-right:'+document.getElementById('toc').scrollWidth+'px;}');

