// ==UserScript==
// @name         Improve usablity of docs on browsersync.io
// @namespace    https://browsersync.io/docs/
// @version      1.0
// @description  Make documentation page on browsersync more usable by fixing the navigation to the right side of the viewport.
// @author       http://github.com/BriceShatzer
// @match        https://browsersync.io/docs/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';
GM_addStyle('.sticky-nav{position: fixed; overflow-y: scroll; max-height:85vh;}');

