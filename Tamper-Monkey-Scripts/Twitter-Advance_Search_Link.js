// ==UserScript==
// @name         Twitter Advance Search Link
// @namespace    http://twitter.com/
// @version      0.2
// @description  try to take over the world!
// @author       http://github.com/BriceShatzer
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        let nav = document.getElementsByTagName('nav')[0];
        const link = document.createElement('a');
        link.style.textAlign = 'center'
        link.style.fontWeight = '700';
        link.style.color = 'rgba(29,161,242,1.00)';
        link.style.textDecoration = 'none';
        link.href = 'https://twitter.com/search-advanced';
        link.innerHTML = '🔍 Advance Search';
        nav.insertBefore(link, nav.firstChild);

        function didWeGetNavYet(value){
            if (value){ nav = value; }
            else { setTimeout(()=>{ didWeGetNavYet(document.getElementsByTagName('nav')[0]); }, 1200);}
        }
    }
})();