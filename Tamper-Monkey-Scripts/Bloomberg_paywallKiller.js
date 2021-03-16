// ==UserScript==
// @name         Bloomberg Paywall Killer
// @namespace    https://www.bloomberg.com/*
// @version      0.1
// @description  Intermittently nukes their modal/backdrop they put up
// @author       https://github.com/BriceShatzer
// @match        https://www.bloomberg.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    window.onload = () => {
        setTimeout(()=>{
            let hasFired = false;
            const theInterval = setInterval(()=>removePaywall(hasFired),350);
            function removePaywall(status){
                if (!status) {
                    const overlay = document.getElementById('graphics-paywall-overlay');
                    if (overlay) {
                        document.body.style.overflow='unset';
                        overlay.parentNode.removeChild(overlay);
                        hasFired = true;
                        clearInterval(theInterval);
                    }
                }
            }
        },250);
    }
})();