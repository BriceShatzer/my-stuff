// ==UserScript==
// @name         Amazon Helper
// @namespace    https://www.amazon.com
// @version      2025-10-15
// @description  making Amazon easier to use...
// @author       https://github.com/BriceShatzer
// @match        https://www.amazon.com/hz/wishlist/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const wishListItemNotes = document.querySelectorAll('span[id^="itemComment_"]');

// Regex to match basic HTTP/HTTPS URLs
const urlRegex = /(https?:\/\/[^\s]+)/g;

wishListItemNotes.forEach(span => {
  const text = span.textContent;

  if (urlRegex.test(text)) {
    // Replace each URL in the text with a hyperlink
    const linkedText = text.replace(urlRegex, url => {
      return `<a href="${url}" target="_blank">${url}</a>`;
    });

    // Replace the span's content with the new HTML
    span.innerHTML = linkedText;

    // Add event listener to stop propagation on the new anchor(s)
    const anchors = span.querySelectorAll('a');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.stopPropagation();  // Prevents the event from bubbling up
      });
    });
  }
});

})();