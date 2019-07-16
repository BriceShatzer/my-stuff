// ==UserScript==
// @name         Tab Camo
// @namespace    tabcamo
// @version      0.1
// @description  hide the ico & tab name of certain tabs
// @author       github.com/briceshatzer
// @match        https://tinder.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function replaceIcon() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://cdn.sstatic.net/Sites/apple/img/favicon.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    window.setInterval(replaceIcon, 2000);
})();