// ==UserScript==
// @name         SAN - Clear Watch & Queue Items
// @namespace    SAN
// @version      1.2
// @description  Adds a button to clear localStorage items: recentlyWatchedItems and myQueueItems on SAN sites
// @author       BriceShatzer.com
// @match        http://san.vipdev.lndo.site/*
// @match        https://stage.internal.san.com/*
// @match        https://dev.internal.san.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Create the button
    const btn = document.createElement('button');
    btn.textContent = '🗑️ Clear localStorage';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.zIndex = '9999';
    btn.style.padding = '10px';
    btn.style.backgroundColor = '#e74c3c';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0px 0px 5px rgba(0,0,0,0.3)';

    // Add click event to remove the items
    btn.addEventListener('click', () => {
        localStorage.removeItem('recentlyWatchedItems');
        localStorage.removeItem('myQueueItems');
        window.dispatchEvent( new StorageEvent( 'storage' ) );
        console.log('Cleared recentlyWatchedItems and myQueueItems from localStorage.');
    });

    // Add the button to the document
    document.body.appendChild(btn);
})();
