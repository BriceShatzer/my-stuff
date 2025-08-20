// ==UserScript==
// @name         2025 yahoo fantasy football prices
// @namespace    https://football.fantasysports.yahoo.com
// @version      2025-08-20
// @description  try to take over the world!
// @author       briceshatzer.com
// @match        https://football.fantasysports.yahoo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yahoo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function showPrices () {
        let playerNameLinks = document.querySelectorAll('a.name[data-ys-playerid]');

        if(playerNameLinks.length){
            playerNameLinks.forEach((el)=>{
                el.innerHTML=el.innerHTML+'<strong style="color:#000"> - '+playerData[el.title].price+'</strong>'
            });
        }
    }
    const control = document.createElement("span");
    control.id = 'priceShower';
    control.style.position = 'fixed';
    control.style.bottom = '3rem';
    control.style.left = '1rem';
    control.style.zIndex='12000';
    control.style.fontSize ='2rem';
    control.style.cursor = 'pointer';
    control.innerText = '💰';
    control.addEventListener('click', ()=>showPrices);


    const playerData = {
    "Christian McCaffrey": {
        "price": '$7',
        "team": "EL NINO"
    },
    "Marvin Harrison Jr.": {
        "price": '$4',
        "team": "The Dynamic Duo"
    },
    "Josh Allen": {
        "price": '$0',
        "team": "Herb Your Enthusiasm"
    },
    "Travis Kelce": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Aaron Jones Sr.": {
        "price": '$9',
        "team": "Ravenous Squirrels"
    },
    "Drake London": {
        "price": '$8',
        "team": "Past My Prime"
    },
    "Aaron Rodgers": {
        "price": '$9',
        "team": "EL NINO"
    },
    "Joe Burrow": {
        "price": '$4',
        "team": "FedexPress"
    },
    "Kyle Pitts Sr.": {
        "price": '$7',
        "team": "Cleveland Steamers"
    },
    "Joe Mixon": {
        "price": '$0',
        "team": "Ravenous Squirrels"
    },
    "Cooper Kupp": {
        "price": '$9',
        "team": "Cleveland Steamers"
    },
    "Derrick Henry": {
        "price": '$6',
        "team": "Bad Newz Kennels"
    },
    "Jaylen Waddle": {
        "price": '$3',
        "team": "EL NINO`"
    },
    "Stefon Diggs": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Travis Etienne Jr.": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Lamar Jackson": {
        "price": '$0',
        "team": "The Dynamic Duo"
    },
    "Mark Andrews": {
        "price": '$5',
        "team": "Past My Prime"
    },
    "Malik Nabers": {
        "price": '$9',
        "team": "The Dynamic Duo"
    },
    "Caleb Williams": {
        "price": '$5',
        "team": "Hawkeyes"
    },
    "Dallas Goedert": {
        "price": '$8',
        "team": "Ravenous Squirrels"
    },
    "Terry McLaurin": {
        "price": '$7',
        "team": "It’s Gonna Be Maye"
    },
    "Najee Harris": {
        "price": '$5',
        "team": "Hawkeyes"
    },
    "Zay Flowers": {
        "price": '$6',
        "team": "FedexPress"
    },
    "Keenan Allen": {
        "price": '$6',
        "team": "Ravenous Squirrels"
    },
    "Rome Odunze": {
        "price": '$8',
        "team": "It’s Gonna Be Maye"
    },
    "Tyler Lockett": {
        "price": '$7',
        "team": "Ravenous Squirrels"
    },
    "Javonte Williams": {
        "price": '$4',
        "team": "The Dynamic Duo"
    },
    "Brock Bowers": {
        "price": '$0',
        "team": "Herb Your Enthusiasm"
    },
    "T.J. Hockenson": {
        "price": '$6',
        "team": "The Dynamic Duo"
    },
    "Jaxon Smith-Njigba": {
        "price": '$0',
        "team": "EL NINO"
    },
    "Matthew Stafford": {
        "price": '$9',
        "team": "Cleveland Steamers"
    },
    "Brian Thomas Jr.": {
        "price": '$9',
        "team": "Herb Your Enthusiasm"
    },
    "Romeo Doubs": {
        "price": '$7',
        "team": "Ravenous Squirrels"
    },
    "Austin Ekeler": {
        "price": '$1',
        "team": "The Dynamic Duo"
    },
    "Jayden Daniels": {
        "price": '$2',
        "team": "The Dynamic Duo"
    },
    "Courtland Sutton": {
        "price": '$8',
        "team": "Ravenous Squirrels"
    },
    "Bo Nix": {
        "price": '$4',
        "team": "Chasing TDs"
    },
    "Baker Mayfield": {
        "price": '$7',
        "team": "Ravenous Squirrels"
    },
    "Russell Wilson": {
        "price": '$8',
        "team": "Chasing TDs"
    },
    "Justin Fields": {
        "price": '$9',
        "team": "Past My Prime"
    },
    "Bryce Young": {
        "price": '$1',
        "team": "Cleveland Steamers"
    },
    "Xavier Worthy": {
        "price": '$4',
        "team": "Ravenous Squirrels"
    },
    "Jordan Addison": {
        "price": '$9',
        "team": "Ravenous Squirrels"
    },
    "Ladd McConkey": {
        "price": '$6',
        "team": "Ravenous Squirrels"
    },
    "Jonathon Brooks": {
        "price": '$9',
        "team": "Herb Your Enthusiasm"
    },
    "Jameson Williams": {
        "price": '$9',
        "team": "The Dynamic Duo"
    },
    "Drake Maye": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "Blake Corum": {
        "price": '$7',
        "team": "Hawkeyes"
    },
    "Ezekiel Elliott": {
        "price": '$2',
        "team": "Ravenous Squirrels"
    },
    "Josh Downs": {
        "price": '$3',
        "team": "WowYoureSoBad"
    },
    "Tampa Bay": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Dallas": {
        "price": '$5',
        "team": "Ravenous Squirrels"
    },
    "Green Bay": {
        "price": '$4',
        "team": "It’s Gonna Be Maye"
    },
    "Jakobi Meyers": {
        "price": '$7',
        "team": "Ravenous Squirrels"
    },
    "Mike Williams": {
        "price": '$6',
        "team": "EL NINO"
    },
    "MarShawn Lloyd": {
        "price": '$7',
        "team": "FedexPress"
    },
    "Nick Chubb": {
        "price": '$8',
        "team": "Herb Your Enthusiasm"
    },
    "Luke Musgrave": {
        "price": '$3',
        "team": "WowYoureSoBad"
    },
    "Derek Carr": {
        "price": '$7',
        "team": "FedexPress"
    },
    "Zach Charbonnet": {
        "price": '$5',
        "team": "WowYoureSoBad"
    },
    "Trey Benson": {
        "price": '$7',
        "team": "Past My Prime"
    },
    "Pat Freiermuth": {
        "price": '$4',
        "team": "It’s Gonna Be Maye"
    },
    "Noah Fant": {
        "price": '$2',
        "team": "FedexPress"
    },
    "Kansas City": {
        "price": '$8',
        "team": "Herb Your Enthusiasm"
    },
    "J.J. McCarthy": {
        "price": '$4',
        "team": "EL NINO"
    },
    "Keon Coleman": {
        "price": '$0',
        "team": "Cleveland Steamers"
    },
    "Michael Penix Jr.": {
        "price": '$8',
        "team": "Past My Prime"
    },
    "J.K. Dobbins": {
        "price": '$9',
        "team": "The Dynamic Duo"
    },
    "Khalil Herbert": {
        "price": '$7',
        "team": "Past My Prime"
    },
    "Jerry Jeudy": {
        "price": '$7',
        "team": "Hawkeyes"
    },
    "Adonai Mitchell": {
        "price": '$9',
        "team": "The Dynamic Duo"
    },
    "Brandin Cooks": {
        "price": '$5',
        "team": "WowYoureSoBad"
    },
    "Jahan Dotson": {
        "price": '$3',
        "team": "EL NINO"
    },
    "Buffalo": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Ricky Pearsall": {
        "price": '$7',
        "team": "The Dynamic Duo"
    },
    "Jameis Winston": {
        "price": '$3',
        "team": "The Dynamic Duo"
    },
    "Joe Flacco": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "Gabe Davis": {
        "price": '$7',
        "team": "Cleveland Steamers"
    },
    "Adam Thielen": {
        "price": '$8',
        "team": "The Dynamic Duo"
    },
    "Tank Bigsby": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Jaylen Wright": {
        "price": '$7',
        "team": "Past My Prime"
    },
    "Ty Chandler": {
        "price": '$6',
        "team": "Hawkeyes"
    },
    "Jordan Mason": {
        "price": '$1',
        "team": "The Dynamic Duo"
    },
    "Antonio Gibson": {
        "price": '$5',
        "team": "Hawkeyes"
    },
    "Bucky Irving": {
        "price": '$7',
        "team": "Herb Your Enthusiasm"
    },
    "Ben Sinnott": {
        "price": '$3',
        "team": "FedexPress"
    },
    "Ja'Lynn Polk": {
        "price": '$8',
        "team": "Hawkeyes"
    },
    "Malik Willis": {
        "price": '$1',
        "team": "WowYoureSoBad"
    },
    "Jonnu Smith": {
        "price": '$2',
        "team": "WowYoureSoBad"
    },
    "DeMario Douglas": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "--empty--": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Tyrone Tracy Jr.": {
        "price": '$5',
        "team": "EL NINO"
    },
    "Will Shipley": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Miami": {
        "price": '$5',
        "team": "The Dynamic Duo"
    },
    "Kendre Miller": {
        "price": '$3',
        "team": "The Dynamic Duo"
    },
    "Minnesota": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "Ray Davis": {
        "price": '$5',
        "team": "FedexPress"
    },
    "Roman Wilson": {
        "price": '$5',
        "team": "FedexPress"
    },
    "Keaton Mitchell": {
        "price": '$5',
        "team": "Ravenous Squirrels"
    },
    "Xavier Legette": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Tennessee": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Marvin Mims Jr.": {
        "price": '$3',
        "team": "Hawkeyes"
    },
    "Elijah Mitchell": {
        "price": '$2',
        "team": "It’s Gonna Be Maye"
    },
    "Chig Okonkwo": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Kimani Vidal": {
        "price": '$4',
        "team": "Cleveland Steamers"
    },
    "DJ Chark": {
        "price": '$2',
        "team": "Bad Newz Kennels"
    },
    "Braelon Allen": {
        "price": '$6',
        "team": "Cleveland Steamers"
    },
    "Cincinnati": {
        "price": '$3',
        "team": "EL NINO"
    },
    "Roschon Johnson": {
        "price": '$5',
        "team": "EL NINO"
    },
    "Los Angeles": {
        "price": '$3',
        "team": "FedexPress"
    },
    "Mitchell Trubisky": {
        "price": '$1',
        "team": "WowYoureSoBad"
    },
    "Wan'Dale Robinson": {
        "price": '$3',
        "team": "WowYoureSoBad"
    },
    "Demarcus Robinson": {
        "price": '$3',
        "team": "EL NINO"
    },
    "New Orleans": {
        "price": '$4',
        "team": "Hawkeyes"
    },
    "Jordan Whittington": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Blake Watson": {
        "price": '$1',
        "team": "Cleveland Steamers"
    },
    "Colby Parkinson": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "Quentin Johnston": {
        "price": '$5',
        "team": "Herb Your Enthusiasm"
    },
    "Jalen McMillan": {
        "price": '$3',
        "team": "Chasing TDs"
    },
    "Elijah Moore": {
        "price": '$1',
        "team": "EL NINO"
    },
    "Luke McCaffrey": {
        "price": '$5',
        "team": "Hawkeyes"
    },
    "Joe Milton III": {
        "price": '$1',
        "team": "WowYoureSoBad"
    },
    "Jarrett Stidham": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Dameon Pierce": {
        "price": '$3',
        "team": "Chasing TDs"
    },
    "Nick Mullens": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Malachi Corley": {
        "price": '$6',
        "team": "Chasing TDs"
    },
    "Pierre Strong Jr.": {
        "price": '$2',
        "team": "Herb Your Enthusiasm"
    },
    "Treylon Burks": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "Indianapolis": {
        "price": '$2',
        "team": "FedexPress"
    },
    "Jermaine Burton": {
        "price": '$0',
        "team": "FedexPress"
    },
    "Kenneth Gainwell": {
        "price": '$3',
        "team": "EL NINO"
    },
    "Jake Browning": {
        "price": '$3',
        "team": "FedexPress"
    },
    "Seattle": {
        "price": '$2',
        "team": "Cleveland Steamers"
    },
    "Zach Wilson": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Isaiah Likely": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "A.J. Dillon": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Casey Washington": {
        "price": '$2',
        "team": "EL NINO"
    },
    "Tyrod Taylor": {
        "price": '$3',
        "team": "Cleveland Steamers"
    },
    "Tre Tucker": {
        "price": '$1',
        "team": "It’s Gonna Be Maye"
    },
    "Jacksonville": {
        "price": '$1',
        "team": "The Dynamic Duo"
    },
    "Andrei Iosivas": {
        "price": '$1',
        "team": "Hawkeyes"
    },
    "Jalen Tolbert": {
        "price": '$1',
        "team": "EL NINO"
    },
    "Javon Baker": {
        "price": '$5',
        "team": "FedexPress"
    },
    "Michael Mayer": {
        "price": '$2',
        "team": "Chasing TDs"
    },
    "Los Angeles": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Kendrick Bourne": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Denver": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Sam Howell": {
        "price": '$4',
        "team": "WowYoureSoBad"
    },
    "Tutu Atwell": {
        "price": '$1',
        "team": "Cleveland Steamers"
    },
    "Alexander Mattison": {
        "price": '$2',
        "team": "FedexPress"
    },
    "Dyami Brown": {
        "price": '$4',
        "team": "EL NINO"
    },
    "Trey Sermon": {
        "price": '$3',
        "team": "EL NINO"
    },
    "Kenny Pickett": {
        "price": '$1',
        "team": "FedexPress"
    },
    "A.T. Perry": {
        "price": '$1',
        "team": "WowYoureSoBad"
    },
    "Las Vegas": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Miles Sanders": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Audric Estime": {
        "price": '$2',
        "team": "Chasing TDs"
    },
    "Theo Johnson": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Tyler Higbee": {
        "price": '$1',
        "team": "It’s Gonna Be Maye"
    },
    "Carolina": {
        "price": '$1',
        "team": "Hawkeyes"
    },
    "Troy Franklin": {
        "price": '$3',
        "team": "Herb Your Enthusiasm"
    },
    "Bo Melton": {
        "price": '$1',
        "team": "FedexPress"
    },
    "Emanuel Wilson": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Zach Ertz": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Devontez Walker": {
        "price": '$1',
        "team": "Herb Your Enthusiasm"
    },
    "Jamaal Williams": {
        "price": '$1',
        "team": "It’s Gonna Be Maye"
    },
    "Skyy Moore": {
        "price": '$1',
        "team": "EL NINO"
    },
    "Gerald Everett": {
        "price": '$1',
        "team": "FedexPress"
    },
    "Jordan Travis": {
        "price": '$1',
        "team": "Chasing TDs"
    },
    "Jonathan Mingo": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Trey Palmer": {
        "price": '$1',
        "team": "It’s Gonna Be Maye"
    },
    "D'Onta Foreman": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Jalin Hyatt": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Justice Hill": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Tim Patrick": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "New England": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Joshua Dobbs": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Will Dissly": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Van Jefferson": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Darius Slayton": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Cleveland": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Jacoby Brissett": {
        "price": '$4',
        "team": "Cleveland Steamers"
    },
    "Dontayvion Wicks": {
        "price": '$5',
        "team": "Cleveland Steamers"
    },
    "Will Levis": {
        "price": '$0',
        "team": "Cleveland Steamers"
    },
    "Isiah Pacheco": {
        "price": '$2',
        "team": "Cleveland Steamers"
    },
    "Jaylen Warren": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Taysom Hill": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Tony Pollard": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Breece Hall": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "DeAndre Hopkins": {
        "price": '$8',
        "team": "Cleveland Steamers"
    },
    "Amon-Ra St. Brown": {
        "price": '$2',
        "team": "Cleveland Steamers"
    },
    "Kyler Murray": {
        "price": '$6',
        "team": "Cleveland Steamers"
    },
    "Atlanta": {
        "price": '$5',
        "team": "Past My Prime"
    },
    "Philadelphia": {
        "price": '$0',
        "team": "Past My Prime"
    },
    "San Francisco": {
        "price": '$0',
        "team": "Past My Prime"
    },
    "Jaleel McLaughlin": {
        "price": '$5',
        "team": "Past My Prime"
    },
    "Trevor Lawrence": {
        "price": '$3',
        "team": "Past My Prime"
    },
    "Aidan O'Connell": {
        "price": '$5',
        "team": "Past My Prime"
    },
    "Cole Kmet": {
        "price": '$4',
        "team": "Past My Prime"
    },
    "Trey McBride": {
        "price": '$4',
        "team": "Past My Prime"
    },
    "Tyler Allgeier": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Nico Collins": {
        "price": '$7',
        "team": "Past My Prime"
    },
    "Justin Jefferson": {
        "price": '$9',
        "team": "Past My Prime"
    },
    "Calvin Ridley": {
        "price": '$1',
        "team": "Past My Prime"
    },
    "Jared Goff": {
        "price": '$4',
        "team": "Past My Prime"
    },
    "Anthony Richardson Sr.": {
        "price": '$4',
        "team": "It’s Gonna Be Maye"
    },
    "Deshaun Watson": {
        "price": '$2',
        "team": "It’s Gonna Be Maye"
    },
    "Christian Kirk": {
        "price": '$2',
        "team": "It’s Gonna Be Maye"
    },
    "Raheem Mostert": {
        "price": '$8',
        "team": "It’s Gonna Be Maye"
    },
    "David Njoku": {
        "price": '$7',
        "team": "It’s Gonna Be Maye"
    },
    "Jonathan Taylor": {
        "price": '$3',
        "team": "It’s Gonna Be Maye"
    },
    "David Montgomery": {
        "price": '$4',
        "team": "It’s Gonna Be Maye"
    },
    "Brandon Aiyuk": {
        "price": '$8',
        "team": "It’s Gonna Be Maye"
    },
    "Deebo Samuel": {
        "price": '$9',
        "team": "It’s Gonna Be Maye"
    },
    "Pittsburgh": {
        "price": '$9',
        "team": "WowYoureSoBad"
    },
    "New York": {
        "price": '$8',
        "team": "WowYoureSoBad"
    },
    "Jayden Reed": {
        "price": '$0',
        "team": "WowYoureSoBad"
    },
    "Chase Brown": {
        "price": '$8',
        "team": "WowYoureSoBad"
    },
    "Gus Edwards": {
        "price": '$7',
        "team": "WowYoureSoBad"
    },
    "Kenneth Walker III": {
        "price": '$8',
        "team": "WowYoureSoBad"
    },
    "Michael Pittman Jr.": {
        "price": '$5',
        "team": "WowYoureSoBad"
    },
    "James Cook": {
        "price": '$5',
        "team": "WowYoureSoBad"
    },
    "Kyren Williams": {
        "price": '$6',
        "team": "WowYoureSoBad"
    },
    "Tyreek Hill": {
        "price": '$6',
        "team": "WowYoureSoBad"
    },
    "Davante Adams": {
        "price": '$9',
        "team": "WowYoureSoBad"
    },
    "Mike Evans": {
        "price": '$1',
        "team": "WowYoureSoBad"
    },
    "Jordan Love": {
        "price": '$9',
        "team": "WowYoureSoBad"
    },
    "Dak Prescott": {
        "price": '$9',
        "team": "WowYoureSoBad"
    },
    "Daniel Jones": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Sam Darnold": {
        "price": '$5',
        "team": "Hawkeyes"
    },
    "George Kittle": {
        "price": '$6',
        "team": "Hawkeyes"
    },
    "Sam LaPorta": {
        "price": '$4',
        "team": "Hawkeyes"
    },
    "Zack Moss": {
        "price": '$8',
        "team": "Hawkeyes"
    },
    "Chuba Hubbard": {
        "price": '$7',
        "team": "Hawkeyes"
    },
    "A.J. Brown": {
        "price": '$9',
        "team": "Hawkeyes"
    },
    "Garrett Wilson": {
        "price": '$2',
        "team": "Hawkeyes"
    },
    "Tua Tagovailoa": {
        "price": '$9',
        "team": "Hawkeyes"
    },
    "D'Andre Swift": {
        "price": '$1',
        "team": "The Dynamic Duo"
    },
    "Chicago": {
        "price": '$4',
        "team": "The Dynamic Duo"
    },
    "Hollywood Brown": {
        "price": '$5',
        "team": "The Dynamic Duo"
    },
    "Dalton Kincaid": {
        "price": '$9',
        "team": "The Dynamic Duo"
    },
    "Tucker Kraft": {
        "price": '$4',
        "team": "The Dynamic Duo"
    },
    "Dalton Schultz": {
        "price": '$6',
        "team": "The Dynamic Duo"
    },
    "Jahmyr Gibbs": {
        "price": '$4',
        "team": "The Dynamic Duo"
    },
    "George Pickens": {
        "price": '$6',
        "team": "The Dynamic Duo"
    },
    "Detroit": {
        "price": '$4',
        "team": "Bad Newz Kennels"
    },
    "Rico Dowdle": {
        "price": '$4',
        "team": "Bad Newz Kennels"
    },
    "Mike Gesicki": {
        "price": '$5',
        "team": "Bad Newz Kennels"
    },
    "Hunter Henry": {
        "price": '$6',
        "team": "Bad Newz Kennels"
    },
    "Kirk Cousins": {
        "price": '$1',
        "team": "Bad Newz Kennels"
    },
    "Diontae Johnson": {
        "price": '$2',
        "team": "Bad Newz Kennels"
    },
    "Tyler Conklin": {
        "price": '$4',
        "team": "Bad Newz Kennels"
    },
    "James Conner": {
        "price": '$4',
        "team": "Bad Newz Kennels"
    },
    "Bijan Robinson": {
        "price": '$9',
        "team": "Bad Newz Kennels"
    },
    "Amari Cooper": {
        "price": '$0',
        "team": "Bad Newz Kennels"
    },
    "Chris Godwin": {
        "price": '$4',
        "team": "Bad Newz Kennels"
    },
    "Khalil Shakir": {
        "price": '$4',
        "team": "Herb Your Enthusiasm"
    },
    "Gardner Minshew": {
        "price": '$4',
        "team": "Herb Your Enthusiasm"
    },
    "Justin Herbert": {
        "price": '$9',
        "team": "Herb Your Enthusiasm"
    },
    "Rhamondre Stevenson": {
        "price": '$0',
        "team": "Herb Your Enthusiasm"
    },
    "Evan Engram": {
        "price": '$7',
        "team": "Herb Your Enthusiasm"
    },
    "De'Von Achane": {
        "price": '$5',
        "team": "Herb Your Enthusiasm"
    },
    "Rachaad White": {
        "price": '$8',
        "team": "Herb Your Enthusiasm"
    },
    "Puka Nacua": {
        "price": '$4',
        "team": "Herb Your Enthusiasm"
    },
    "CeeDee Lamb": {
        "price": '$4',
        "team": "Herb Your Enthusiasm"
    },
    "Tank Dell": {
        "price": '$5',
        "team": "FedexPress"
    },
    "Brian Robinson Jr.": {
        "price": '$1',
        "team": "FedexPress"
    },
    "Josh Jacobs": {
        "price": '$6',
        "team": "FedexPress"
    },
    "Zamir White": {
        "price": '$9',
        "team": "FedexPress"
    },
    "DJ Moore": {
        "price": '$0',
        "team": "FedexPress"
    },
    "Tee Higgins": {
        "price": '$9',
        "team": "FedexPress"
    },
    "DK Metcalf": {
        "price": '$7',
        "team": "FedexPress"
    },
    "Jalen Hurts": {
        "price": '$9',
        "team": "FedexPress"
    },
    "Tyjae Spears": {
        "price": '$9',
        "team": "Chasing TDs"
    },
    "Ja'Marr Chase": {
        "price": '$8',
        "team": "Chasing TDs"
    },
    "Christian Watson": {
        "price": '$4',
        "team": "Chasing TDs"
    },
    "Devin Singletary": {
        "price": '$5',
        "team": "Chasing TDs"
    },
    "Jerome Ford": {
        "price": '$8',
        "team": "Chasing TDs"
    },
    "Alvin Kamara": {
        "price": '$9',
        "team": "Chasing TDs"
    },
    "DeVonta Smith": {
        "price": '$9',
        "team": "Chasing TDs"
    },
    "Chris Olave": {
        "price": '$5',
        "team": "Chasing TDs"
    },
    "Rashee Rice": {
        "price": '$7',
        "team": "Chasing TDs"
    },
    "Patrick Mahomes": {
        "price": '$9',
        "team": "Chasing TDs"
    },
    "Houston": {
        "price": '$5',
        "team": "Ravenous Squirrels"
    },
    "Darnell Mooney": {
        "price": '$6',
        "team": "Ravenous Squirrels"
    },
    "Michael Wilson": {
        "price": '$4',
        "team": "Ravenous Squirrels"
    },
    "Greg Dortch": {
        "price": '$5',
        "team": "Ravenous Squirrels"
    },
    "Geno Smith": {
        "price": '$0',
        "team": "Ravenous Squirrels"
    },
    "C.J. Stroud": {
        "price": '$9',
        "team": "Ravenous Squirrels"
    },
    "Rashod Bateman": {
        "price": '$8',
        "team": "Ravenous Squirrels"
    },
    "Cade Otton": {
        "price": '$4',
        "team": "Ravenous Squirrels"
    },
    "Curtis Samuel": {
        "price": '$5',
        "team": "Ravenous Squirrels"
    },
    "Rashid Shaheed": {
        "price": '$4',
        "team": "Ravenous Squirrels"
    },
    "Baltimore": {
        "price": '$8',
        "team": "EL NINO"
    },
    "Joshua Palmer": {
        "price": '$4',
        "team": "EL NINO"
    },
    "Juwan Johnson": {
        "price": '$8',
        "team": "EL NINO"
    },
    "Jake Ferguson": {
        "price": '$4',
        "team": "EL NINO"
    },
    "Tyler Boyd": {
        "price": '$7',
        "team": "EL NINO"
    },
    "Saquon Barkley": {
        "price": '$3',
        "team": "EL NINO"
    },
    "Brock Purdy": {
        "price": '$8',
        "team": "EL NINO"
    },
    }

    document.body.prepend(control);
    setTimeout(showPrices(),500);

})();