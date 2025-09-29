// ==UserScript==
// @name         RescueTime upgrader
// @namespace    https://www.rescuetime.com/
// @version      29-9-2025
// @description  fixes a few things
// @author       http://github.com/BriceShatzer
// @match        https://www.rescuetime.com/dashboard/*
// @match        https://www.rescuetime.com/dashboard?*
// @match        https://www.rescuetime.com/dashboard/for/the/day/of/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


// --- Add link to hourly view on RescueTime
var path = document.location.pathname
var link = document.createElement('a');
var date = '';

function parseOutDate(string){
    return string.substring(string.lastIndexOf('/')+1);
}




if ( /dashboard\/for\/the\/day\/of/.test.path ){
    date = parseOutDate(path);
} else {
    date = parseOutDate(document.querySelector('#dashboard-overview-list a').href);
}
//set link attributes
link.appendChild( document.createTextNode('See Hourly Overview') )
link.style= 'clear: both;'+
            'float: left;'+
            'font-weight:bold;'+
            'font-size:20px;'+
            'margin-left: 20px;'+
            'padding:10px;'+
            'color: #888;'+
            'background-color: #fff;'+
            'border-radius: 3px;'+
            'border:solid 1px #637787;'
link.href= 'https://www.rescuetime.com/browse/overview/by/hour/for/the/day/of/'+date;

document.querySelector('#page-content-header h1').appendChild(link);

// --- replace non-sense label with chrome plugin name
/*
Doesn't seem to work ಠ_ಠ

const targetString = "dhdgffkkebhmkfjojejmpbldmpobfkfo";
const replacement = "TamperMonkey extension";

function replaceText(node) {
    alert('fired');
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.nodeValue.includes(targetString)) {
            node.nodeValue = node.nodeValue.replaceAll(targetString, replacement);
        }
    } else {
        console.log('yo');
        for (let child of node.childNodes) {
            replaceText(child);
        }
    }
}

// Initial replacement on page load
replaceText(document.body);

// Set up a MutationObserver to watch for DOM changes
const observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            replaceText(node);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

*/