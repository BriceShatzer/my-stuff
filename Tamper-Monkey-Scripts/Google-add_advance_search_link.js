// ==UserScript==
// @name         Add Advance Search Link to Google.com
// @namespace    https://google.com
// @version      0.1
// @description  try to take over the world!
// @author       github.com/briceshatzer
// @match        https://www.google.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const el = document.querySelectorAll('[value="Google Search"]')[1];
    let copy = el.cloneNode(true);

    copy.value = 'Advance Search';
    copy.name = '';
    copy.dataset.ved = '';
    copy.setAttribute('aria-label', 'Advance Search');

    el.parentElement.appendChild(copy);

    copy.addEventListener('click', () => {window.location = 'https://www.google.com/advanced_search'});
})();