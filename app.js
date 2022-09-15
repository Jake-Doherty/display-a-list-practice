// import functions and grab DOM elements

// List One
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';

// List Two
import { cats } from './cats-data.js';
import { renderCat } from './render-cat.js';

const candyList = document.getElementById('candy-list');

const catList = document.getElementById('cat-list');

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

displayCandies();
displayCats();
