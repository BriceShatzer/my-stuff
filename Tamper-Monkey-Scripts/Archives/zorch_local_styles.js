// ==UserScript==
// @name         Zorch.com/contact Local Styles
// @namespace    http://www.zorch.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.zorch.com/contact/
// @grant        none
// ==/UserScript==
/* jshint -W097 */

/*
for (var i = document.styleSheets.length - 1; i >= 0; i--) {
    document.styleSheets[i].disabled = true;
}
*/
var externalCSSLoadedSuccesfully = false;
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'http://zorch-project.dev/app/themes/zorch/dist/styles/main.css';
link.onload = function() {
    externalCSSLoadedSuccesfully = true;
}

document.getElementsByTagName("head")[0].appendChild(link);

window.onload = function(){
    for (var i = document.styleSheets.length - 1; i >= 0; i--) {
        var string = document.styleSheets[i].href;
//        if( document.styleSheets[i].href == 'http://www.zorch.com/wp-content/themes/zorch/dist/styles/main.css?ver=1777872257'){
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
