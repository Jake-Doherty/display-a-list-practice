export function renderShow(show) {
    const li = document.createElement('li');
    li.classList.add('show=item');

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = show.name;

    const pElem = document.createElement('p');
    pElem.textContent = show.genre + ' ' + show.subGenre;

    li.append(h2Elem, pElem);

    return li;
}
