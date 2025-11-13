// ==UserScript==
// @name         SAN - Clear Watch & Queue Items
// @namespace    SAN
// @version      2.1
// @description  Adds a hidden button to clear localStorage items that reveals on hover near bottom-right corner
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
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: -250px;
        z-index: 9999;
        padding: 10px 15px;
        background-color: #e74c3c;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        font-size: 14px;
        transition: right 0.3s ease;
        white-space: nowrap;
    `;

    // Create a trigger zone for hover detection
    const triggerZone = document.createElement('div');
    triggerZone.style.cssText = `
        position: fixed;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 100px;
        z-index: 9998;
    `;

    // Create indicator
    const indicator = document.createElement('div');
    indicator.className = 'san-indicator-pulse';
    indicator.textContent = '⚙️';
    indicator.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 9997;
        font-size: 20px;
        opacity: 0.2;
        transition: all 0.3s ease;
        pointer-events: none;
    `;

    // Add CSS for pulsing animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes san-pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
        }
        .san-indicator-pulse {
            animation: san-pulse 3s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // Show/hide functions
    let hideTimeout;

    function showButton() {
        clearTimeout(hideTimeout);
        btn.style.right = '20px';
        indicator.style.opacity = '0.6';
        indicator.style.transform = 'rotate(180deg)';
    }

    function hideButton() {
        hideTimeout = setTimeout(() => {
            btn.style.right = '-250px';
            indicator.style.opacity = '0.2';
            indicator.style.transform = 'rotate(0deg)';
        }, 500);
    }

    // Add hover events
    triggerZone.addEventListener('mouseenter', showButton);
    triggerZone.addEventListener('mouseleave', hideButton);
    btn.addEventListener('mouseenter', showButton);
    btn.addEventListener('mouseleave', hideButton);

    // Add click event to clear localStorage
    btn.addEventListener('click', () => {
        const confirmed = confirm('Are you sure you want to clear all localStorage items?');
        if (confirmed) {
            const originalText = btn.textContent;
            const originalBg = btn.style.backgroundColor;

            localStorage.clear();
            window.dispatchEvent(new StorageEvent('storage'));

            btn.textContent = '✅ Cleared!';
            btn.style.backgroundColor = '#27ae60';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = originalBg;
                hideButton();
            }, 2000);

            console.log('Cleared all localStorage items.');
        }
    });

    // Add elements to the document
    document.body.appendChild(triggerZone);
    document.body.appendChild(btn);
    document.body.appendChild(indicator);

    // Hide indicator after first interaction (optional)
    let firstInteraction = true;
    triggerZone.addEventListener('mouseenter', () => {
        if (firstInteraction) {
            firstInteraction = false;
            setTimeout(() => {
                indicator.classList.remove('san-indicator-pulse');
            }, 1000);
        }
    });
})();