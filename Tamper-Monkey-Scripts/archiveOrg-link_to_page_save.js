// ==UserScript==
// @name         Link to Save Page
// @namespace    https://archive.org
// @version      0.2
// @description  Add a link to save a webpage
// @author       http://briceshatzer.com
// @match        *.archive.org/*
// @grant        none
// ==/UserScript==

(function() {
    let targetElement = document.getElementById('topnav').firstElementChild.shadowRoot.querySelector('.topnav').querySelector('primary-nav').shadowRoot.querySelector('.upload');
    let link = document.createElement('span');

    link.style.float = 'right';
    link.style.marginTop = '1rem';
    link.style.transition = 'filter 250ms';
    link.innerHTML = "<a href='https://web.archive.org/save/'><img src='https://archive.org/web/images/icon_savePage.png' alt='save a webpage' style='height:30px;' /></a>";
    link.onmouseover = ()=>{link.style.filter = 'hue-rotate(180deg)'}
    link.onmouseout = ()=>{link.style.filter = ''};
    targetElement.insertAdjacentElement('afterend',link);

})();
