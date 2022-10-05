// ==UserScript==
// @name         FoxNews adblock popup-killer
// @namespace    https://www.foxnews.com/
// @version      0.1
// @description  try to take over the world!
// @author       https://briceshatzer.com
// @match        https://www.foxnews.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=foxnews.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let didIt = false;
    const getPopup = () => document.querySelector('.fc-ab-root');

    const removePopup = () => {
        if (getPopup() && !didIt) {
            const el = getPopup()
            el.remove();
            document.body.style.overflow = 'scroll'
            didIt = true;
        } else {
            setTimeout( ()=>removePopup(), 750)
        }
    }

    removePopup();

})();