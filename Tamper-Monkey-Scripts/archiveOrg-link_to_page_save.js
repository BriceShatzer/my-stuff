// ==UserScript==
// @name         Link to Save Page
// @namespace    https://archive.org
// @version      0.1
// @description  Add a link to save a webpage
// @author       http://briceshatzer.com
// @match        *.archive.org/*
// @grant        none
// ==/UserScript==

(function() {
let el = document.querySelector('.navbar-nav .leftmost').previousElementSibling;
let li = document.createElement('li');
    li.className = "dropdown dropdown-ia pull-right";
    li.style.textAlignment ='middle';
    li.innerHTML = "<a href='https://web.archive.org/save/'><img src='https://archive.org/web/images/icon_savePage.png' alt='save a webpage' style='height:30px;' /></a>";

    el.insertAdjacentElement('afterend',li);

})();
