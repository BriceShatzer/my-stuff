// ==UserScript==
// @name         Set Tone to Regular People on markdown humanizer -**
// @namespace    https://markdowner.github.io/
// @version      1.1
// @description  select "Regular People" tone + fix paragraph wrapping
// @match        *://markdowner.github.io/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  window.addEventListener('load', function () {
    // Set tone
    const select = document.getElementById('tone-select');
    if (select) {
      select.value = 'everyday';
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Add paragraph styling
    const style = document.createElement('style');
      //  max-width: unset !important;
    style.textContent = `
      p {
        overflow-wrap: normal !important;
        word-break: normal !important;
        hyphens: none !important;
         max-width: unset !important;
      }
      .content {max-width: unset !important}
      .container {
max-width: 1240px !important;
}
    `;
    document.head.appendChild(style);
  });
})();