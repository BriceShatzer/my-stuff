
// ==UserScript==
// @name         Non-relative GitHub
// @namespace    github.com
// @version      0.8
// @description  Setting the times in GitHub to be Non-relative
// @author       http://briceshatzer.com
// @match        https://github.com/*
// @match        https://github.paypal.com/*
// @exclude      https://github.paypal.com/gist/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
[datetime]:hover::after {
    content: attr(title);
    position: absolute;
    padding: 0 0.3em;
    background: white;
    border: 1px solid;
    z-index: 5;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
`);

(function() {
    let state_commitTimesConverted = false;

    function convertCommitTimes() {
        if(state_commitTimesConverted === false) {
            window.setTimeout(convertCommitTimes, 750);
        } else {
            let commitTimes = document.querySelectorAll('relative-time');
            commitTimes.forEach((el)=>{
                let fullTime = el.title;
                el.shadowRoot.innerHTML = '&nbsp;<em>'+fullTime+'</em>';
            });
        }
    }
    window.setInterval(convertCommitTimes, 750);
//    window.setInterval(convertCommitTimes, 3,750);
});
