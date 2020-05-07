// ==UserScript==
// @name         NYT Paywall Avoider
// @namespace    https://www.nytimes.com/
// @version      0.1
// @description  attempts to nuke their paywall
// @author       http://github.com/BriceShatzer
// @match        https://www.nytimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        console.log('fired');
            const blockage1 = document.getElementById('standalone-footer');
            const blockage2 = document.getElementById('gateway-content');
            const content = document.getElementById('site-content');
            const container = document.querySelector('#app > div > div:first-of-type');

            if (blockage1){blockage1.style.display = 'none';}
            if (blockage2){blockage2.style.display = 'none';}
            if (content){content.style.position = 'static';}
            if (container){
                container.style.position ='static';
                container.style.overflow = 'auto';
                container.children.forEach((el)=>{
                    if (el.children.length===0){el.style.display='none'}
                });
            }

    }
})();
