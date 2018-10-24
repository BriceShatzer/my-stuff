// ==UserScript==
// @name         Twitter Play In Background
// @namespace    http://twitter.com/
// @version      0.1
// @description  Twitter Page Visibility API Blocker
// @author       wpears
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var s = document.createElement('script')
    s.textContent =
        '(function() {' +
        'var a = Node.prototype.addEventListener;' +
        'Node.prototype.addEventListener = function(e) {' +
        "if (e !== 'visibilitychange' && e !== 'webkitvisibilitychange') {" +
        'a.apply(this, arguments)' +
        '}}' +
        '})()'
    ;(document.head || document.documentElement).appendChild(s)
    s.remove()
})();