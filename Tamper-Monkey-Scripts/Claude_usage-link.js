// ==UserScript==
// @name         Add Claude usage link
// @namespace    claude.ai/
// @version      2025-11-18
// @description  adds a link to the usage page
// @author       https://github.com/BriceShatzer
// @match        https://claude.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=claude.ai
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
    const el = document.querySelector('nav>div');
    const link = document.createElement('a');

    link.href = "https://claude.ai/settings/usage";
    link.target = "_blank";
    link.innerText = "📈";
    el.append(link);
    el.style = 'justify-content: space-between';
    }, 3000);


    // Your code here...
})();