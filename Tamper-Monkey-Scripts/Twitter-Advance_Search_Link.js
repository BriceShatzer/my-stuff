// ==UserScript==
// @name         Twitter Advance Search Link
// @namespace    http://twitter.com/
// @version      0.1
// @description  try to take over the world!
// @author       http://github.com/BriceShatzer
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        console.log('yo we fired');
        const nav = document.getElementsByTagName('nav')[0];
        const link = document.createElement('a');
        link.style.textAlign = 'center'
        link.style.fontWeight = '700';
        link.style.color = 'rgba(29,161,242,1.00)';
        link.style.textDecoration = 'none';
        link.href = 'https://twitter.com/search-advanced';
        link.innerHTML = '🔍 Advance Search';
        nav.insertBefore(link, nav.firstChild);
    }

})();