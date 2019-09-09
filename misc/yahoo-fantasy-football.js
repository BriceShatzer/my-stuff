/*
*  takes the player lists in yahoo fantasy football and makes them copyable into google sheets
*/

// (document.querySelectorAll('table.Table td.Alt[style="width: 20px;"]')).forEach(el=>el.parentNode.removeChild(el));
// (document.querySelectorAll('a.Nowrap.name+span')).forEach(el=>el.parentNode.removeChild(el));
// (document.querySelectorAll('span.ysf-player-status')).forEach(el=>el.parentNode.removeChild(el));
// (document.querySelectorAll('div.ysf-player-detail')).forEach(el=>el.parentNode.removeChild(el));
// (document.querySelectorAll('span.player-status')).forEach(el=>el.parentNode.removeChild(el));

selectors = ['table.Table td.Alt[style="width: 20px;"]'
'a.Nowrap.name+span',
'span.ysf-player-status',
'div.ysf-player-detail',
'span.player-status'];

selectors.forEach(selector=>{
	remove(getElements(selector));
});

function getElements(selector){
	var arr =
	return document.querySelectorAll(selector);
}
function remove(arrOfElements){
	arrOfElements.forEach(el=>el.parentNode.removeChild(el));
}