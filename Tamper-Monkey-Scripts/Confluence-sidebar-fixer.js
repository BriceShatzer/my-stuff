// ==UserScript==
// @name         Confluence Sidebar Fixer
// @namespace    Confluence
// @version      0.4
// @description  Pins page tree of Confluence pages in view
// @author       http://briceshatzer.com
// @match        https://engineering.paypalcorp.com/confluence/display/*
// @match        https://engineering.paypalcorp.com/confluence/pages/*
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

    function pinSidebar () {
        const pagetree = document.getElementById('rw_page_tree_wrapper');
        const splitter = document.getElementById('rw_splitter');
        let fixedHeight = viewportHeight - mainContent.offsetTop;

        document.querySelectorAll('.confluence-information-macro').forEach((el)=>{
            el.style.display = 'none';
            // el.parentNode.removeChild(el);
        });
        document.getElementById('rw_main').style.paddingBottom = '0';
        document.getElementById('rw_footer_wrapper').style.display = 'none';
        function getPagetreeStyles() { return {
            maxHeight: fixedHeight + 'px',
            position: 'fixed',
            left: pagetree.offsetLeft,
            bottom: 0,
            overflow: 'scroll',
            marginBottom: 0,
            width: splitter.offsetLeft - pagetree.offsetLeft + 'px',
            zIndex: 1,
            backgroundColor: '#ededed'
        }}


        styleElement(mainContent, {
            zIndex: 9,
            position: 'relative'
        });
        styleElement(splitter, {zIndex:8});
        styleElement(pagetree, getPagetreeStyles());
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
            splitter.addEventListener('mouseup', function(e){
                setTimeout(()=>{
                    let value = splitter.offsetLeft - pagetree.offsetLeft + 'px';
                    console.log(value);
                    styleElement(
                        pagetree,
                        getPagetreeStyles()
                    );
                    setPagetreeBasedScroll(window.scrollY);
                }, 25 );
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