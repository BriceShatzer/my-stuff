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

/*
*  builds an object that contains all the prices of defense from the draft results page
*  at https://football.fantasysports.yahoo.com/f1/178397/lastseason
*/

var thing = {};
const everySpan = document.querySelectorAll('span.F-position');
const filteredSpans = Array.from(everySpan).filter(span => span.textContent.includes('DEF'));

filteredSpans.forEach((el)=>{
    var key=el.innerText;
    thing[key] = el.parentElement.parentElement.querySelector('.auctioncost').innerText
})

/*
*  take that object of defense prices and apply it to the player search page 
*  at https://football.fantasysports.yahoo.com/f1/178397/players
*/

var spans = document.querySelectorAll('span>span');
var obj = {
    "NYJ - DEF": "5",
    "Pit - DEF": "6",
    "Min - DEF": "-",
    "KC - DEF": "3",
    "Dal - DEF": "8",
    "Det - DEF": "1",
    "TB - DEF": "1",
    "Sea - DEF": "5",
    "Ten - DEF": "1",
    "LV - DEF": "-",
    "GB - DEF": "4",
    "Bal - DEF": "5",
    "Cin - DEF": "4",
    "NYG - DEF": "-",
    "Jax - DEF": "5",
    "Den - DEF": "5",
    "NO - DEF": "4",
    "Ind - DEF": "1",
    "Buf - DEF": "12",
    "Hou - DEF": "-",
    "Mia - DEF": "6",
    "Chi - DEF": "1",
    "SF - DEF": "7",
    "Phi - DEF": "7",
    "Atl - DEF": "-",
    "Cle - DEF": "5",
    "NE - DEF": "5"
}
for (var [key, value] of Object.entries(obj)){
    var span = Array.from(spans).filter(span => span.textContent.includes(key));
    if (span[0]){
        span[0].innerHTML =  `${key} - <b>${value}</b>`
    }
    //span.innerText = `${key} - <b>${value}</b>`
    console.log(span)
    //span.innerText = 'xxx';
    
}
