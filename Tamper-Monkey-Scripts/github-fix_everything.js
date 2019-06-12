// ==UserScript==
// @name         Universal GitHub Tasks
// @namespace    github.com
// @version      0.3
// @description  Making GitHub work more to my liking...
// @author       https://github.com/BriceShatzer
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let state_commitTimesConverted = false;
    let state_diffCollapserCreated = false;
    let state_usernamesConverted = false;
    let state_githubIsWide = false

    makeGithubWide();

    window.onload = () => updateState();

    //extending history.pushState to run updateState, because github doesn't fire a popstate in many instances
    (function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        console.log('history.onpushstate fired');
        updateState();
        return pushState.apply(history, arguments);
    }
    })(window.history);


    function updateState() {
        state_commitTimesConverted = document.querySelectorAll('relative-time').length > 0 ? true : false;
        state_diffCollapserCreated = document.getElementById('diffCollapser') ? true : false;
        state_usernamesConverted = document.querySelectorAll('real-name').length > 0 ? true : false;
        state_githubIsWide = document.getElementById('makeGithubWide') ? true : false;

        console.log('states updated:');
        // console.log('commitTimesConverted-'+state_commitTimesConverted);
        // console.log('diffCollapserCreated-'+state_diffCollapserCreated);
        // console.log('usernamesConverted-'+state_usernamesConverted);
        // console.log('githubIsWide-'+state_githubIsWide);

        createDiffCollapser();
        convertCommitTimes();
        //convertUsernamesToRealNames();
        if (state_githubIsWide !== true){makeGithubWide();}
        attachCustomControlsToPage();
    }
/* ಠ_ಠ
    function showWikiButtons() {
        let wikiButtons = document.getElementById('gollum-editor-function-buttons');
        if(wikiButtons){wikiButtons.style.display = 'block';}
    }
*/


/* Attach custom controls to the page */
    function attachCustomControlsToPage(){
        let oldControls = document.getElementById('customControls');
        let repoInfo;

        if (document.head.querySelector("[name=octolytics-dimension-repository_nwo][content]")) {
            repoInfo = document.head.querySelector("[name=octolytics-dimension-repository_nwo][content]").content;
        }

        if (oldControls){
            document.body.removeChild(oldControls)
        }
        let controlPositioningTop = '80px' //height of header + standard padding on elements | 64px + 16px
        let styles = `
            .searchToggleControl {
                cursor: pointer;
                padding: 2px 0 0 2px;
            }
            .searchToggleControl:hover {
                text-decoration: none;
            }
            #searchControls {
                display: inline-flex;
                transition: width 300ms ease;
                width: 0;
                overflow: hidden;
            }
            #searchControls.open {
                width: 160px;
                position: relative;
                top: -23px;
                left: 18px;
            }
            #searchControls input[type='text']{
                width: 120px;
                margin-right: 0.5rem;
            }
            #customControls {
                position:fixed;
                top: ${controlPositioningTop};
                left: 16px;
                z-index: 199;
                display: flex;
                flex-direction: column;
            }
        `

        if(!document.getElementById('controlStyles')) {
            attachAStyleSheet(styles,'controlStyles');
        }


    /* Create Tampermonkey Re-run Button */
        let reRunButton = document.createElement('img');
        reRunButton.setAttribute('src','https://camo.githubusercontent.com/9919bc7e220f6919cdac2d9ec00b99caa9791c3b/687474703a2f2f692e696d6775722e636f6d2f3539566766457a2e706e67');
        reRunButton.setAttribute('style','cursor:pointer;max-width:16px');
        reRunButton.addEventListener('click', () => {
            updateState();
        });
        //document.body.append(reRunButton);

    /* Create Repo Search Controls */
        let searchField = document.createElement('input');
        searchField.setAttribute('type','text');
        searchField.setAttribute('id','searchField');

       let searchButton = document.createElement('button');
        searchButton.textContent = '»';
        searchButton.addEventListener('click', () => {
            let searchValue = document.getElementById('searchField').value;
            searchValue = searchValue.split(' ').join('+');

            let searchUrl = 'https://github.com/' + repoInfo + '/search?q=' + searchValue;

            window.location = searchUrl;
        });

        let searchToggleControl = document.createElement('a');
        searchToggleControl.textContent = '🔍';
        searchToggleControl.classList.add('searchToggleControl');
        searchToggleControl.addEventListener('click', () => {
            let controls = document.getElementById('searchControls');
            controls.classList.toggle('open');
            if(controls.classList.contains('open')){
                searchField.focus();
            }

        });

        let searchControls = document.createElement('div');
        searchControls.setAttribute('id','searchControls');
        searchControls.append(searchField);
        searchControls.append(searchButton);

        let customControls = document.createElement('div');
        customControls.setAttribute('id', 'customControls');
        customControls.append(reRunButton);
        if (repoInfo) {
            customControls.append(searchToggleControl);
            customControls.append(searchControls);
        }

        document.body.append(customControls);
    }

/* Convert Commit Times To Non-realtive */
    function convertCommitTimes() {
        if(state_commitTimesConverted === false) {
            window.setTimeout(convertCommitTimes, 750);
        } else {
            state_commitTimesConverted = true;
            let commitTimes = document.querySelectorAll('relative-time');
            commitTimes.forEach((el)=>{
                let fullTime = el.title;
                el.innerHTML = '<strong>'+fullTime+'</strong>';
            });
        }
    }

/* Create Diff Collapser */
    function createDiffCollapser() {
        if(state_diffCollapserCreated === false && getCollapsibleElements().length) {
        //     window.setTimeout(createDiffCollapser, 750);
        // } else {
            state_diffCollapserCreated = true;
            let staleElements = document.querySelectorAll('#diffCollapser');
            if(staleElements.length>0){
                staleElements.forEach((el)=>{
                    el.parentNode.removeChild(el);
                });
            }
            let el = document.createElement('img');
            //let el = document.createElement('button');
            //let styleText = 'position:fixed;left:2rem;bottom:50vh;z-index:50;min-width:1rem;'

            el.src = "https://raw.githubusercontent.com/webdog/octicons-png/master/black/fold.png";
            el.alt ="Collapse/Expand Diffs";
            el.id  = "diffCollapser";
            let styleText = `
                position:fixed;
                left:.5rem;
                bottom:50vh;
                max-width:1rem;
                z-index:50;
                cursor:pointer
                `;

            el.setAttribute('style',styleText);
            //el
            //el.setAttribute('class', 'btn');
            //el.innerHTML = 'Collapse Diffs';
            el.addEventListener('click',()=>{
                function setStatus(status) {
                    el.setAttribute('data-status',status);
                }

                if(el.getAttribute('data-status') === 'Collapse'){
                    collapseDiffs();
                    setStatus('Expand');
                    //el.innerHTML = 'Expand Diffs';
                } else {
                    expandDiffs();
                    setStatus('Collapse');
                    //el.innerHTML = 'Collapse Diffs';
                }

            });
            document.body.append(el);
        }

        function expandDiffs() {
            let collapsedElements = getCollapsibleElements().filter(el=> el.getAttribute('aria-expanded')==='false');
            clickElements(collapsedElements);
        }

        function collapseDiffs() {
            let expandedElements = getCollapsibleElements().filter(el=> el.getAttribute('aria-expanded')==='true');
            clickElements(expandedElements);
        }



        function clickElements(elementsArr) {
            elementsArr.forEach((el)=>{
                el.click();
            });
        }

        function getCollapsibleElements() {
            let allElements = document.querySelectorAll('button[aria-label="Toggle diff contents"]');
            return Object.values(allElements);
        }
    }

/* Wide-Github */
// source: https://github.com/xthexder/wide-github
    function makeGithubWide() {
        var styleSheet = "" +
        ".header .container {" +
          "width: auto !important;" +
          "margin-left: 20px !important;" +
          "margin-right: 20px !important;" +
          "min-width: 980px;" +
        "}" +
        "#js-repo-pjax-container .container {" +
          "width: auto !important;" +
          "margin-left: 20px !important;" +
          "margin-right: 20px !important;" +
          "min-width: 980px;" +
        "}" +
        ".full-width .container {" +
          "padding-left: 0px !important;" +
          "padding-right: 0px !important;" +
        "}" +

        // New PR split diff
        ".full-width .new-pr-form {" +
          "max-width: none !important;" +
        "}" +

        // Repository Issues
        "#js-repo-pjax-container .repository-content .discussion-timeline {" +  // Issue body
          "margin-left: -220px;" +
          "padding-left: 220px;" +
          "width: 100% !important;" +
        "}" +
        ".repository-content .discussion-sidebar {" +
          "width: 200px !important;" +
        "}" +
        ".repository-content .timeline-new-comment {" + // New Issue / issue comment form
          "max-width: 100% !important;" +
        "}" +
        ".repository-content .inline-comments .comment-holder {" + // Diff / code comments
          "max-width: 960px !important;" +
        "}" +
        ".repository-content .inline-comments .inline-comment-form-container {" +
          "max-width: 960px !important;" +
        "}" +
        ".repository-content .inline-comments .inline-comment-form {" +
          "max-width: 960px !important;" +
        "}" +

        // Repository pulse page
        ".repository-content .authors-and-code .section {" + // Contributors bar graph
          "width: 50%;" +
          "height: 180px;" +
        "}" +
        ".repository-content .authors-and-code .section svg {" +
          "height: 180px;" +
        "}" +

        // Repository graph page
        ".repository-content .capped-card {" + // Graph cards on contributors / graph list
          "margin:10px 10px 0 0 !important;" +
        "}" +

        // Gists
        ".gist-content-wrapper .container {" +
          "width: auto !important;" +
          "margin-left: 20px !important;" +
          "margin-right: 20px !important;" +
          "min-width: 980px;" +
        "}" +

        // ultrawide margins
        "@media (min-width: 1280px) { "+
            ".header .container, " +
            "#js-repo-pjax-container .container, " +
            ".gist-content-wrapper .container {" +
              "margin-left: 3% !important;" +
              "margin-right: 3% !important;" +
            "}"+
        "}"+

        "";
        if(!document.getElementById('makeGithubWide')){
            attachAStyleSheet(styleSheet,'makeGithubWide');
        }

        // (function () {
        //   var s = document.createElement('style');
        //   s.id = "makeGithubWide";
        //   s.type = "text/css";
        //   s.innerHTML = styleSheet;
        //   (document.head || document.documentElement).appendChild(s);
        // })();
    }

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

/* Convert Usernames to Real Names ?(WIP)? */
    function convertUsernamesToRealNames() {
        const usernames = [...document.querySelectorAll('.author')];

        usernames.forEach( (element) => {
            let url = 'https://api.github.com/users/'+element.innerText;
            let request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function() {
              if (this.status >= 200 && this.status < 400) {
                // Success!
                var resp = this.response;
                var userObj = JSON.parse(resp);
                console.log(userObj);

                //console.log( resp);

              } else {
                console.log('Looks like there was a problem. Status Code: ' + this.status);
                // We reached our target server, but it returned an error
              }
            };

            request.onerror = function(err) {
              // There was a connection error of some sort
              console.log('Fetch Error :-S', err);

            };
            request.send();


            //-- trying to use fetch
/*
            let newName = fetch(url)
                .then( (response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return 'ErrorInRetrivial';
                    }

                    response.json().then(function(data) {
                        console.log(data.name);
                        return data.name;
                    });
                })
                .catch(function(err) {
                    console.log('Fetch Error :-S', err);
                    return 'ErrorInRetrivial';
                });
            if (newName !== 'ErrorInRetrivial') {
                element.innerText = newName;
                element.classList.add('real-name');
            }
*/

        }); // usernames.forEach() end
    }





    // -- adventures in mutationObserving
/*
    let target = document.querySelector('div[role="main"]');
    let config = { attributes: true, childList: true, characterData: true };
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            console.log(mutation.type);
        });
    });
    observer.observe(target, config);
*/



    // -- setting state at an interval
/*    window.setInterval(function(){
        console.log('state_commitTimesConverted: ' + state_commitTimesConverted);
        console.log('state_diffCollapserCreated: ' + state_diffCollapserCreated);
    }, 3000);
*/


})();