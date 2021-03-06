// ==UserScript==
// @name         Robinhood - log stocks to console
// @namespace    https://robinhood.com/
// @version      0.2
// @description  Grabs all the stocks, sorts them, and prints them w/ total equity. Used to verify our financial tracking doc.
// @author       http://github.com/BriceShatzer
// @match        https://robinhood.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let stocks = [];
let loadedSections;
let alphaSort;

const interval = window.setInterval(isAppReady, 500);


function logStocksToConsole(){
    let target;
    let arr;

    loadedSections.forEach((section)=>{
        if(section.querySelector('h3').innerText === 'Stocks'){ target = section }
    });

    arr = target.querySelectorAll('a');
    arr.forEach(el => {
        let obj = {}
        obj.ticker = el.querySelector('h4').innerText;
        obj.equity = el.querySelector('h3').innerText;
        stocks.push(obj);
    });

    alphaSort = stocks.sort( (a, b) => {
        var nameA=a.ticker.toLowerCase(), nameB=b.ticker.toLowerCase()
        if (nameA < nameB){return -1}
        if (nameA > nameB){return 1}
        return 0
    });

    console.log(alphaSort);
}

function isAppReady() {
    loadedSections = document.querySelectorAll('.main-container .col-5 section');
    if (loadedSections.length !== 0){
        logStocksToConsole();
        clearInterval(interval)
    }
}
})();
