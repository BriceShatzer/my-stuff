// ==UserScript==
// @name         Patreon Login hint
// @namespace    http://patreon.com.
// @version      0.1
// @description  reminding me to use Google SSO
// @author       http://github.com/BriceShatzer
// @match        https://www.patreon.com/login*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=patreon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let googleButton = Array.from(document.querySelectorAll('button')).filter(el=> el.innerText ==="Continue with Google")[0];
    googleButton.style.backgroundColor = "yellow"
})();