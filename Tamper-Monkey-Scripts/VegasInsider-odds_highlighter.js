// ==UserScript==
// @name         Vegas Insider odds table highlighter
// @namespace    https://www.vegasinsider.com/
// @version      0.1
// @description  Highlights an odds row on hover
// @author       https://github.com/BriceShatzer
// @match        https://www.vegasinsider.com/*
// @icon         https://www.google.com/s2/favicons?domain=vegasinsider.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
table tr:hover {
background: #e5e5e5;
`);
