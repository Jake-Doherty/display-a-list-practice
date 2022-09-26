// import functions and grab DOM elements

// List One
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// List Two
import { cats } from './cats-data.js';
import { renderCat } from './render-cat.js';

// List Three
import { musicGenres } from './music-data.js';
import { renderMusic } from './render-music.js';

import { shows } from './show-data.js';
import { renderShow } from './render-shows.js';

const candyList = document.getElementById('candy-list');

const catList = document.getElementById('cat-list');

const musicList = document.getElementById('music-list');

const showList = document.getElementById('show-list');

function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyElement = renderCandy(candy);
        candyList.append(candyElement);
    }
}

function displayCats() {
    catList.innerHTML = '';

    for (let cat of cats) {
        const catElement = renderCat(cat);
        catList.append(catElement);
    }
}

function displayGenres() {
    musicList.innerHTML = '';

    for (let genre of musicGenres) {
        const genreElem = renderMusic(genre);
        musicList.append(genreElem);
    }
}

function displayShows() {
    showList.innerHTML = '';

    for (let show of shows) {
        const showElem = renderShow(show);
        showList.append(showElem);
    }
}

displayCandies();
displayCats();
displayGenres();
displayShows();
