// ==UserScript==
// @name         Robinhood - log stocks to console
// @namespace    https://robinhood.com/
// @version      0.3
// @description  Grabs all the stocks, sorts them, and prints them w/ total equity. Used to verify our financial tracking doc.
// @author       http://github.com/BriceShatzer
// @match        https://robinhood.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let stocks;
    let stocksSidebar;
    let alphaSort;
    let zoom = (window.outerWidth / window.innerWidth).toFixed(2)

    let control = document.createElement('div');
    control.id = 'control'
    control.setAttribute('style',`
        font-size:2.5rem;
        position:absolute;
        bottom:1rem;
        left:1rem;
        z-index:5000;
        padding:2px 8px;
        border: 1px solid rgb(227, 233, 237);
        border-radius: 4px;
        line-height: 1;
        `);

    let trigger = document.createElement('span');
    trigger.innerText = '✎';
    trigger.style.cursor = 'pointer';

    trigger.addEventListener('click',()=>{logStocksToConsole()});

    let removeTrigger = document.createElement('span');
    removeTrigger.innerText = '⛒';
    removeTrigger.setAttribute('style',`
       font-size: 0.75rem;
       position: absolute;
       top: -2px;
       z-index:1;
       cursor: pointer;
    `);
    removeTrigger.addEventListener('click',()=>{removeControl()});

    control.appendChild(trigger);
    control.appendChild(removeTrigger);

    const interval = window.setInterval(isAppReady, 500);

    window.onresize = () => {
        zoom = (window.outerWidth / window.innerWidth).toFixed(2);
        updateTriggerElement();
    }

    function updateTriggerElement () {
        const el = document.getElementById('control');
        el.style.zoom = 1 / zoom;
    }

    function logStocksToConsole (){
        stocks = [];
        let target;
        let arr;

        if (zoom < 0.34){
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
        } else {console.info('Zoom to less at least 33%')}
    }

    function isAppReady () {
        console.log('checking if app ready');
        stocksSidebar = document.querySelector('[data-testid="VirtualizedSidebar"]');
        if (stocksSidebar.length !== 0){
            console.log('app seems ready?');
            document.querySelector('.app').appendChild(control);
            clearInterval(interval);
        }
    }

    function removeControl () {
        control.remove();
        window.onresize = null;
    }
})();

