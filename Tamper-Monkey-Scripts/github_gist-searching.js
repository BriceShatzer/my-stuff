// ==UserScript==
// @name         Github Gist Searching
// @namespace    gist.github.com
// @version      0.1
// @description  Making it easier to search for my gists
// @author       https://briceshatzer.com
// @match        https://gist.github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
(function() {
'use strict';

//    const nav = document.querySelector('nav');


const nav = document.querySelector('nav');
let el = document.createElement('a');
el.className = 'Header-link';
el.innerText = 'Search My Gists';
el.href = 'https://gist.github.com/search?q=user%3ABriceShatzer';
nav.appendChild(el);

if (window.location.pathname === '/search') {
    let infoLink = document.createElement('a');
    infoLink.href = 'https://gist.github.com/BriceShatzer/86832ab4ccfbd3220468cb3c045dad5c';
    infoLink.target = '_blank';
    infoLink.setAttribute('style',`
    color: #24292f;
    text-decoration: none;
    `);
    infoLink.innerText = ' ⍰' //'❔';
    document.querySelector('label[for="search-query"]').parentElement.appendChild(infoLink);
/*
    var notesElement = '';
    fetch('https://gist.github.com/BriceShatzer/86832ab4ccfbd3220468cb3c045dad5c').then(function(response) {
        // The API call was successful!
        return response.text();
    }).then(function(html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var house = document.querySelector('.application-main')
        notesElement = doc.getElementById('file-search-my-gists-md-readme');
        notesElement.className = "file";
        notesElement.setAttribute('style', `
        position: absolute;
        top:0;
        left:0;
        background-color:white;
        padding: 16px;
        max-width: 33vw;
        transform: scale(.75);
        transform-origin: left top;
        `);
        house.style.position = 'relative';
        house.appendChild(notesElement)
//        console.log(notesElement);

    }).catch(function(err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
*/
}
})();
