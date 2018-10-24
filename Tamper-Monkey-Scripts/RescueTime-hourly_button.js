// ==UserScript==
// @name         Add link to hourly view on RescueTime
// @namespace    https://www.rescuetime.com/dashboard
// @version      0.1
// @description  Inject a link to the hourly view on the RescueTime dashboard pages.
// @author       http://github.com/BriceShatzer
// @match        https://www.rescuetime.com/dashboard?*
// @match        https://www.rescuetime.com/dashboard/for/the/day/of/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

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
link.style= 'font-weight:bold;'+
            'font-size:20px;'+
            'margin-left: 20px;'+
            'padding:10px;'+
            'color: #888;'+
            'background-color: #fff;'+
            'border-radius: 3px;'+
            'border:solid 1px #637787;'
link.href= 'https://www.rescuetime.com/browse/overview/by/hour/for/the/day/of/'+date;


document.querySelector('#page-content-header h1').appendChild(link);
