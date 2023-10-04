// ==UserScript==
// @name         Github Gist Upgrades
// @namespace    gist.github.com
// @version      0.3
// @description  Making Github's gist site easier to use
// @author       https://briceshatzer.com
// @match        https://gist.github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    
    const nav = document.querySelector('nav');
    const pathname = window.location.pathname;
    
    nav.querySelector('a[href="https://github.com"]').setAttribute('style', 'margin-right: 8px !important');
    
    const searchLink = makeHeaderLink('Search My Gists','https://gist.github.com/search?q=user%3ABriceShatzer');
    searchLink.style.borderLeft = "1px solid #fff";
    searchLink.style.paddingLeft = "8px";
    const allGistsLink = makeHeaderLink('All My Gists','https://gist.github.com/BriceShatzer?direction=desc&sort=updated');
    nav.append(searchLink, allGistsLink);
    
    const prettyLink = (() => {
        let str = [...pathname];
        str.splice(1,0,'@')
    
        let link = makeLink('PrettyPage','https://gist.io' + str.join(''));
        link.className = 'btn btn-sm';
        link.target = '_blank';
    
        let li = document.createElement('li');
        li.append(link);
        return li;
    })();
    document.querySelector('ul.pagehead-actions').prepend(prettyLink)
    
    function makeHeaderLink(text, href) {
        let el = makeLink(text,href);
        el.className = 'Header-link';
        el.style.marginRight = "16px";
        return el;
    }
    function makeLink(text, href){
        let el = document.createElement('a');
        el.innerText = text;
        el.href = href;
        return el;
    }
    
    if (pathname === '/search') {
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
