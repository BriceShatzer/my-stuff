// ==UserScript==
// @name         Enable Text Selection-EVERYWHERE
// @namespace    ALL FUCKING WEBSITES
// @version      0.1
// @description  Remove user-select: none from all elements
// @author       briceshatzer.com
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Method 1: CSS override
    const style = document.createElement('style');
    style.textContent = '* { user-select: text !important; }';
    document.head.appendChild(style);
    
    // Method 2: Remove inline styles (for dynamically added content)
    const observer = new MutationObserver(() => {
        document.querySelectorAll('[style*="user-select"]').forEach(el => {
            el.style.userSelect = 'text';
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();