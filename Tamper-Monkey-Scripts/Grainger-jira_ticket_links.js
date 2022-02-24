// ==UserScript==
// @name         Grainger - Fix Old Jira Ticket Links
// @namespace    https://bitbucket.org/wwgrainger/
// @version      0.1
// @description  looks for and updates old Jira ticket links
// @author       http://briceshatzer.com
// @match        https://bitbucket.org/wwgrainger/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bitbucket.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const links = document.querySelectorAll('a[href^="https://jira.grainger.com"]');

    links.forEach((el)=>{
        const ticket = el.href.match(/[A-Z]*-\d*/)[0]
        console.log(ticket);
        el.href = `https://grainger.atlassian.net/browse/${ticket}`;
    });

})();
