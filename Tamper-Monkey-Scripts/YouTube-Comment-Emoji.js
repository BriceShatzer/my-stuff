// ==UserScript==
// @name         YouTube Comment Emoji Fix
// @namespace    youtube.com
// @version      2024-11-29
// @description  Removing Youtube's emoji
// @author       github.com/briceshatzer
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
    #emoji.CATEGORY_TYPE_GLOBAL {display:none;}
    `);
})();