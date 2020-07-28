// ==UserScript==
// @name         Confluence Sidebar Fixer
// @namespace    Confluence
// @version      0.3
// @description  try to take over the world!
// @author       http://briceshatzer.com
// @match        https://engineering.paypalcorp.com/confluence/display/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let scrollPosition = 0;
    let ticking = false;
    let pinned = false;
    const mainContent = document.getElementById('rw_main_column');
    const viewportHeight = window.visualViewport.height;

    const pinControl = document.createElement('a');
    pinControl.innerText = '📌';
    pinControl.onclick = ()=>pinSidebar();

    const pinControlStyles = {
        position: 'fixed',
        left: '15px',
        fontSize: '1.6em',
        bottom: '15px',
        zIndex: 5,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'transform 325ms'
    }

    styleElement(pinControl, pinControlStyles);
    document.body.appendChild(pinControl);


    document.querySelectorAll('.confluence-information-macro').forEach((el)=>{
        el.parentNode.removeChild(el);
    });



    function pinSidebar () {
        const pagetree = document.getElementById('rw_page_tree_wrapper');
        const splitter = document.getElementById('rw_splitter');
        let fixedHeight = viewportHeight - mainContent.offsetTop;

        document.getElementById('rw_main').style.paddingBottom = '0';
        document.getElementById('rw_footer_wrapper').style.display = 'none';
        let pagetreeStyles = {
            width: pagetree.offsetWidth + 'px',
            maxHeight: fixedHeight + 'px',
            position: 'fixed',
            left: pagetree.offsetLeft,
            bottom: 0,
            overflow: 'scroll',
            marginBottom: 0,
            width: splitter.offsetLeft - pagetree.offsetLeft + 'px',
            zIndex: 1,
            backgroundColor: '#ededed'
        }

        styleElement(mainContent, {
            zIndex: 10,
            position: 'relative'
        });
        styleElement(splitter, {zIndex:8});
        styleElement(pagetree, pagetreeStyles);
        setPagetreeBasedScroll(window.scrollY);

        if (!pinned){
                pinControl.style.transform = 'rotate(45deg) translateX(-30px)';

                window.addEventListener('scroll', function(e) {
                    if (!ticking) {
                        window.requestAnimationFrame(function() {
                            setPagetreeBasedScroll(window.scrollY);
                            ticking = false;
                        });
                        ticking = true;
                    }
                });
            pinned = true;
        }

        // scroll current page in tree into view
        document.querySelector('.rw_current_page_item').scrollIntoView();

        function setPagetreeBasedScroll (scrollPosition) {
            if(scrollPosition < mainContent.offsetTop){
                styleElement(pagetree, {
                    maxHeight: viewportHeight - mainContent.getBoundingClientRect().y + 'px',
                    top: mainContent.getBoundingClientRect().y
                });
            } else {
                styleElement(pagetree, {maxHeight: viewportHeight + 'px'});
            }
        }

    }

    function styleElement(element, styleObject) {
        for (const styleAttribute in styleObject) {
            element.style[styleAttribute] = styleObject[styleAttribute];
        }
    }


})();