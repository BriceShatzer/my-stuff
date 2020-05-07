// ==UserScript==
// @name         Google Calendar Weekend Highlighter
// @namespace    https://calendar.google.com/calendar/
// @version      0.1
// @description  Highlight the weekend days in Google Calendar's month view
// @author       https://github.com/BriceShatzer
// @match        https://calendar.google.com/calendar/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

var columnsToChange = [];
var labels = document.querySelectorAll('.mv-dayname');
var rows = document.querySelectorAll('.month-row .st-bg-table tr, .month-row .st-grid tr:first-of-type');
var bgColor = 'LightGoldenRodYellow'

function forEach(array, func){
    Array.prototype.forEach.call(array, func);
};

forEach(labels, function(label,i){
    if(label.title === "Sat" || label.title === "Sun"){
        columnsToChange.push(i);
    }
});

forEach(rows, function(row){
    columnsToChange.forEach(function(value){
        value+=1;
        GM_addStyle(".month-row .st-bg-table tr td:nth-of-type("+value+"), .month-row .st-grid tr:first-of-type td:nth-of-type("+value+"){background-color:"+bgColor+"}"); 
    });
});
