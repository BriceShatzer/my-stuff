// ==UserScript==
// @name         Fixing issues cause by Lastpass
// @namespace    Lastpass
// @version      0.2
// @description  Hidding the "Form Fill" icon that last pass adds to unrecognizable form inputs
// @author       BriceShatzer
// @match        https://timelord.doejo.com/*
// @match        https://onlinebanking.ecu.com/*
// @match        https://www.jerseymikes.com/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

if(document.location.hostname.indexOf('onlinebanking.ecu.com')>-1){
   GM_addStyle("#transfer_amount{text-align:left}");
}

if(document.location.hostname.indexOf('www.jerseymikes.com')>-1){
    var accountDropdown = document.querySelectorAll('a[href="/account"]')[0].nextElementSibling;
    accountDropdown.style.visibility = "visible";
    accountDropdown.style.opacity = "1";
}

if(document.location.hostname.indexOf('timelord.doejo.com')>-1){
    GM_addStyle("div[id^='__lpform_input']{display:none !important}");
}

