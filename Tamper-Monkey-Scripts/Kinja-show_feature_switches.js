// ==UserScript==
// @name         Kinja Feature Switches
// @namespace    Kinja
// @version      0.1
// @description  Shows currently active Feature Switches on Kinja Sites
// @author       https://github.com/BriceShatzer
// @match        https://*.avclub*
// @match        http://*.avclub.localhost:3000*
// @match        http://*.avclub.localhost:9000*
// @match        https://*.clickhole*
// @match        http://*.clickhole.localhost:3000*
// @match        http://*.clickhole.localhost:9000*
// @match        https://*.deadspin*
// @match        http://*.deadspin.localhost:3000*
// @match        http://*.deadspin.localhost:9000*
// @match        https://*.earther*
// @match        http://*.earther.localhost:3000*
// @match        http://*.earther.localhost:9000*
// @match        https://*.gizmodo*
// @match        *://gizmodo*
// @match        http://*.xgizmodo.localhost:3000*
// @match        http://*.xgizmodo.localhost:9000*
// @match        https://*.jalopnik*
// @match        http://*.jalopnik.localhost:3000*
// @match        http://*.jalopnik.localhost:9000*
// @match        https://*.jezebel*
// @match        http://*.jezebel.localhost:3000*
// @match        http://*.jezebel.localhost:9000*
// @match        https://*.kotaku*
// @match        http://*.kotaku.localhost:3000*
// @match        http://*.kotaku.localhost:9000*
// @match        https://*.lifehacker*
// @match        http://*.lifehacker.localhost:3000*
// @match        http://*.lifehacker.localhost:9000*
// @match        https://*.splinter*
// @match        http://*.splinter.localhost:3000*
// @match        http://*.splinter.localhost:9000*
// @match        https://*.theinventory*
// @match        http://*.theinventory.localhost:3000*
// @match        http://*.theinventory.localhost:9000*
// @match        https://*.theonion*
// @match        http://*.theonion.localhost:3000*
// @match        http://*.theonion.localhost:9000*
// @match        https://*.theroot*
// @match        http://*.theroot.localhost:3000*
// @match        http://*.theroot.localhost:9000*
// @match        https://*.thetakeout*
// @match        http://*.thetakeout.localhost:3000*
// @match        http://*.thetakeout.localhost:9000*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	remove();

	let el = document.createElement('div');
	el.classList.add('fmg-whats-on');
	el.style.overflow = 'hidden';
	el.style.backgroundColor = '#eee';
	el.style.width = 'auto';
	el.style.position = 'fixed';
	el.style.right = 0;
	el.style.top = 0;
	el.style.zIndex = 1e16;

	let content = document.createElement('div');
	content.classList.add('fmg-whats-on--content');
	content.style.padding = '1em';
	content.innerHTML = `
		<div style="display:relative;padding:0.25em 0 0.5em;text-align:center;">
			<span style="line-height:1; position:absolute; top:0; left:0; font-weight:700; cursor:pointer;" onclick="remove()">⊠</span>
			What feature Switches are on?
		</div>`

	//get & set fs elements
	let fsElems = [];
	[...document.body.classList]
		.filter((a) => { return /^f_(.+)_on$/.test(a) })
		.forEach((a) => {
			fsElems.push(`<li>${a.split(/f_(.+)_on$/)[1]}</li>`)
		})
	content.innerHTML = content.innerHTML+=fsElems.join('');

	el.appendChild(content);
	document.body.appendChild(el);

	//set mouseover behavior
	let attached = document.querySelector('.fmg-whats-on')
	attached.addEventListener('mouseenter', (e) => {
			attached.style.opacity = "1";
			attached.style.height = "100vh";
			attached.style.overflow="scroll";
		})
	attached.addEventListener('mouseleave', (e) => {
			attached.style.opacity = ".4";
			attached.style.height = "56px";
		});

	function remove(){
		let old = document.querySelector('.fmg-whats-on');
		if (old) { old.parentNode.removeChild(old); }
	}
})();