// ==UserScript==
// @name         Chicago Suntimes Paywall Killer
// @namespace    https://chicago.suntimes.com/*
// @version      0.1
// @description  Intermittently nukes their modal/backdrop they put up
// @author       https://github.com/BriceShatzer
// @match        https://chicago.suntimes.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function(){
        var modal = document.querySelector('.tp-modal');
        var overlay = document.querySelector('.tp-backdrop');
        var body = document.querySelector('body');
        overlay.parentNode.removeChild(overlay);
        modal.parentNode.removeChild(modal);
        body.classList.remove('tp-modal-open');
    }, 2500);
})();