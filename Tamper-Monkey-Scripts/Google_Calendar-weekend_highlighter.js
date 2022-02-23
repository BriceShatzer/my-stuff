// ==UserScript==
// @name         Google Calendar Weekend Highlighter
// @namespace    https://calendar.google.com
// @version      0.2
// @description  Highlights the weekend in month view
// @author       http://briceshatzer.com
// @match        https://calendar.google.com/calendar/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const row = 'div[role="row"]';
    const headerSelector = `${row}>div[role="columnheader"]:nth-of-type(n+7)`;
    const daySelector = `${row}>div>div:nth-of-type(n+6)`;
    const style = 'background-color: rgba(255, 255, 50, .25) !important;';
    const css = `
      ${headerSelector},
      ${daySelector} {
        ${style}
      }`;

    const head = document.head || document.getElementsByTagName('head')[0];
    let styleTag = document.createElement('style');
    styleTag.type = "text/css";
    styleTag.id = "target";

    styleTag.appendChild(document.createTextNode(css));
    head.appendChild(styleTag);

})();
