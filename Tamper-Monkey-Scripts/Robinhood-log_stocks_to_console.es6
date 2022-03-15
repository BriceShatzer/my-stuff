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
let stocks;
let loadedSections;
let alphaSort;
let firedCount = 0;

let trigger = document.createElement('span');
trigger.setAttribute('style',`
    font-size:2rem;
    position:absolute;
    bottom:1rem;
    left:1rem;
    z-index:5000;
    cursor:pointer;

    `);
trigger.innerText = '✎';
trigger.addEventListener('click',()=>{logStocksToConsole()});

const interval = window.setInterval(isAppReady, 500);

function logStocksToConsole(){
    stocks = [];
    console.log('fired')
    let target;
    let arr;

    // loadedSections.forEach((section)=>{
    //     if(section.querySelector('header').innerText === 'Stocks'){ target = section }
    // });

    arr = document.querySelectorAll('[data-testid="PositionCell"]');
    arr.forEach(el => {
        let obj = {}
        const values = el.querySelectorAll('div')[0].innerText.split(/\n/);
        obj.ticker = values[0]
        obj.equity = values[1];
        stocks.push(obj);
    });

    alphaSort = stocks.sort( (a, b) => {
        var nameA=a.ticker.toLowerCase(), nameB=b.ticker.toLowerCase()
        if (nameA < nameB){return -1}
        if (nameA > nameB){return 1}
        return 0
    });

    console.log(alphaSort);
    if (firedCount % 5 === 0 ){
        console.log('zoom out to fit all stocks on one screen ಠ_ಠ')
    }
    firedCount++;
}

function isAppReady() {
    loadedSections = document.querySelector('.sidebar-content-sticky');
    if (loadedSections.length !== 0){
        document.querySelector('.app').appendChild(trigger);
        clearInterval(interval);
    }
}
})();