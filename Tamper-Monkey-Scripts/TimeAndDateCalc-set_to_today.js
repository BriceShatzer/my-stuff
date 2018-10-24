// ==UserScript==
// @name         Auto-set Timecalc to today
// @namespace    http://www.timeanddate.com/date/timeduration.html
// @version      0.1
// @description  Trigger the 'Today' click handlers for the Start & End dates on load
// @author       https://github.com/BriceShatzer
// @match        http://www.timeanddate.com/date/timeduration.html
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var todayLinks = document.querySelectorAll('a[title$="Date to today\'s date."]');

todayLinks[0].onclick.apply(todayLinks[0]);
todayLinks[1].onclick.apply(todayLinks[1]);

if(todayLinks.length>2){
    alert('the userscript that has been setup for this page may no longer be valid ');
}