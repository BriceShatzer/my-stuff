// ==UserScript==
// @name         Tinder Sidebar Toggle
// @namespace    tinder.com
// @version      0.1
// @description  hidind the sidebar in tinder's messager
// @author       github.com/briceshatzer
// @match        https://tinder.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	window.onload = () => initSidebarToggle();


	function initSidebarToggle() {
		let oldButton = document.getElementById('showHideButton');
	    if (oldButton){
	        document.body.removeChild(oldButton);
	    }

	    let showHideButton = document.createElement('button');
	    showHideButton.setAttribute('id','showHideButton');
	    showHideButton.innerText = '⍁';
		showHideButton.addEventListener('click', () => {
			let sidebar = document.querySelector('div.BdStart');
			sidebar.classList.toggle('hideSidebar');
		});

	    let toggleStyle = `
	    	#showHideButton {
	    		font-family: monospace;
	    		position: absolute;
	    		top: 0;
	    		right: 0;
                z-index: 5000;
                font-size: 20px;
                line-height: 1;
                background-color: darkgray;
                padding: 3px 5px;
                cursor: pointer;
                border-bottom-left-radius: 5px;
	    	}

	    	.hideSidebar {
	    		min-width: 0px !important;
	    		max-width: 0px !important;
	    		overflow: hidden;
	    	}
	    `;

	    if(!document.getElementById('hideSidebar')) {
	        attachAStyleSheet(toggleStyle,'hideSidebar');
	    }

		document.body.append(showHideButton);

	/* Utility function which writes a stylesheet to the page*/
	    function attachAStyleSheet(styleSheet,id) {
	            (function () {
	              var s = document.createElement('style');
	              if(id){ s.id = id;}
	              s.type = "text/css";
	              s.innerHTML = styleSheet;
	              (document.head || document.documentElement).appendChild(s);
	            })();
	    }


	}



})();
