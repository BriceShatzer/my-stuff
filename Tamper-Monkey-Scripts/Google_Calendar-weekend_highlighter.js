// ==UserScript==
// @name         Google Calendar Weekend Highlighter
// @namespace    https://calendar.google.com
// @version      0.1
// @description  Highlights the weekend in month view
// @author       http://briceshatzer.com
// @match        https://calendar.google.com/calendar/*/month/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const selector = 'div[role="row"]>div>div:nth-of-type(n+6)';
    const style = 'rgba(255, 255, 50, .25) !important;'
    const css = `${selector}{${style}}`;

    const head = document.head || document.getElementsByTagName('head')[0];
    let styleTag = document.createElement('style');
    styleTag.type = "text/css";

    styleTag.appendChild(document.createTextNode(css));
    head.appendChild(styleTag);

})();
