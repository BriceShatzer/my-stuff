// ==UserScript==
// @name         Replace investors.com stylesheet with local copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at document-start
// @match        http://www.investors.com/*
// @match        http://research.investors.com/*
// @match        http://www.dev4investors.com/*
// @match        http://shop.dev4investors.com/*
// @match        http://www.dev7investors.com/news*
// @match        http://www.dev7investors.com/ibd-university*
// @match        http://research.dev7investors.com/markettrend.aspx

// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
/*
for (var i = document.styleSheets.length - 1; i >= 0; i--) {
    document.styleSheets[i].disabled = true;
}
*/
var externalCSSLoadedSuccesfully = false;
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'http://investors.app/wp-content/themes/ibd/dist/styles/main.css';
link.onload = function() {
    externalCSSLoadedSuccesfully = true;
}

document.getElementsByTagName("head")[0].appendChild(link);

window.onload = function(){
    for (var i = document.styleSheets.length - 1; i >= 0; i--) {
        var string = document.styleSheets[i].href;
//        if( document.styleSheets[i].href == 'http://www.investors.com/wp-content/themes/ibd/dist/styles/main.css'){
          if( string && string.indexOf('/wp-content/themes/ibd/dist/styles/main.css') > 0 ){
            console.dir(document.styleSheets[i]);
            document.styleSheets[i].disabled = true;

            var msg = 'The served version of main.css has been disabled via a userscript \n \n';
            msg += externalCSSLoadedSuccesfully ? 'A local copy of main.css has been loaded to replace it':'Something went wrong attempting to load a local copy of main.css';
            alert(msg);

            break;   
              
        }
    }
}



