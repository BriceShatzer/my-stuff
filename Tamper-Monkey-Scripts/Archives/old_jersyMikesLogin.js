// ==UserScript==
// @name         JerseyMikes Login
// @namespace    http://www.jerseymikes.com'
// @version      0.1
// @description  Make dropdown account work with lastpass
// @author       https://github.com/BriceShatzer
// @match        https://www.jerseymikes.com/
// ==/UserScript==

(function() { // -- now part of Lastpass-fixing_issues.js
    'use strict';
    var accountDropdown = document.querySelectorAll('a[href="/account"]')[0].nextElementSibling;
    accountDropdown.style.visibility = "visible";
    accountDropdown.style.opacity = "1";
})();