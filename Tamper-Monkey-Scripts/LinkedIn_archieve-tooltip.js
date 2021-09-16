// ==UserScript==
// @name         LinkedIn Archieve Tooltip
// @namespace    https://www.linkedin.com/
// @version      0.1
// @description  Makes it apparent what the archieve icon in linkedIn's messages does
// @author       github.com/briceshatzer
// @match        https://www.linkedin.com/messaging/*
// @icon         https://www.google.com/s2/favicons?domain=linkedin.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

GM_addStyle(`[data-control-name="archive_conversation"]{position:relative;}`)
GM_addStyle(`[data-control-name="archive_conversation"]:after{
  position:absolute;
  content:'Archive';
  background: #DEDEDE;
  font-size: 9px;
}`)
})();