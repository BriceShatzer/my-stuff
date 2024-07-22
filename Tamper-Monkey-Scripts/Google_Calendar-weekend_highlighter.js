// ==UserScript==
// @name         Google Calendar Weekend Highlighter & Import Link
// @namespace    https://calendar.google.com
// @version      0.4
// @description  Highlights the weekend in month view & adds a link in the toolbar to import page for .ics files
// @author       http://briceshatzer.com
// @match        https://calendar.google.com/calendar/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
      createHTML: (string, sink) => string
  });
}

// Weekend Highlighter
  const row = 'div[role="row"]';
  const headerSelector = `${row}>div[role="columnheader"]:nth-of-type(n+7)`;
  const daySelector = `${row}>div>div:nth-of-type(n+6)`;
  const style = 'background-color: rgba(255, 255, 50, .25) !important;';
  let css = `
    ${headerSelector},
    ${daySelector} {
      ${style}
    }
    `;

// Left-aligning the dates
  css+=`
  ${row} h2 {
      margin: 8px;
      display: block;
  }
  `

  const head = document.head || document.getElementsByTagName('head')[0];
  let styleTag = document.createElement('style');
  styleTag.type = "text/css";
  styleTag.id = "target";

  styleTag.appendChild(document.createTextNode(css));
  head.appendChild(styleTag);

// Import Link
  const searchLink=[...document.querySelectorAll('button[aria-label="Search"]')].at(-1);
  const importLink = createElementFromHTML('<a href="https://calendar.google.com/calendar/u/0/r/settings/export"><i class="google-material-icons meh4fc hggPq CJ947" aria-hidden="true">file_upload</i></a>');
  searchLink.parentElement.parentElement.parentElement.prepend(importLink)
  function createElementFromHTML(htmlString) {
      var div = document.createElement('div');
      div.innerHTML = window.trustedTypes.defaultPolicy.createHTML(htmlString.trim());
      // Change this to div.childNodes to support multiple top-level nodes.
      return div.firstChild;
  }

})();