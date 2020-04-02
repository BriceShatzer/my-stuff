// ==UserScript==
// @name         Crain's Paywall Avoider
// @namespace    https://www.chicagobusiness.com/
// @version      0.2
// @description  nukes their paywall
// @author       http://github.com/BriceShatzer
// @match        https://www.chicagobusiness.com/*
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
                    const modal = document.querySelector('.tp-modal');
                    const backdrop = document.querySelector('.tp-backdrop');
                    if (modal && backdrop) {
                        document.body.classList.remove('tp-modal-open')
                        modal.parentNode.removeChild(modal);
                        backdrop.parentNode.removeChild(backdrop);
                        hasFired = true;
                        clearInterval(theInterval);
                    }
                }
            }
        },250);
    }
})();