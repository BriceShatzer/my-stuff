// ==UserScript==
// @name         Local Styles for http://proj-43.tribstaging.com
// @namespace    http://proj-43.tribstaging.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://proj-43.tribstaging.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */


var externalCSSLoadedSuccesfully = false;
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'http://vip.local/wp-content/themes/vip/trib-43/dist/style.css';
link.onload = function() {
    externalCSSLoadedSuccesfully = true;
};

document.getElementsByTagName("head")[0].appendChild(link);


for (var i = document.styleSheets.length - 1; i >= 0; i--) {
        var string = document.styleSheets[i].href;
          if( string && string.indexOf('/wp-content/themes/vip/trib-43/dist/style.css') > 0 ){
            console.dir(document.styleSheets[i]);
            document.styleSheets[i].disabled = true;

            var msg = 'The served version of style.css has been disabled via a userscript \n \n';
            msg += externalCSSLoadedSuccesfully ? 'A local copy of style.css has been loaded to replace it':'Something went wrong attempting to load a local copy of style.css';
            alert(msg);

            break;   
          }
}

