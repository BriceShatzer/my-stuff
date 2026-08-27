// ==UserScript==
// @name         Add Claude usage controls
// @namespace    claude.ai/
// @version      2026-08-27
// @description  Adds usage and clock links to the lower-right corner
// @author       https://github.com/BriceShatzer
// @match        https://claude.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=claude.ai
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const container = document.createElement('div');

    Object.assign(container.style, {
        position: 'fixed',
        right: '16px',
        bottom: '16px',
        display: 'flex',
        gap: '12px',
        padding: '10px 12px',
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(0, 0, 0, 0.15)',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
        zIndex: '2147483647',
        fontSize: '22px',
        lineHeight: '1',
    });

    const createLink = (href, label, title) => {
        const link = document.createElement('a');

        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = label;
        link.title = title;

        Object.assign(link.style, {
            display: 'block',
            textDecoration: 'none',
            cursor: 'pointer',
        });

        return link;
    };

    container.append(
        createLink(
            'https://claude.ai/settings/usage',
            '📈',
            'Claude usage'
        ),
        createLink(
            'https://promoclock.co/en',
            '🕰️',
            'PromoClock'
        )
    );

    document.body.append(container);
})();