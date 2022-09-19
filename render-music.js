export function renderMusic(genre) {
    const li = document.createElement('li');
    li.classList.add('cat-item');

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = genre.name;

    const pElem = document.createElement('p');
    pElem.textContent = genre.tempo + ' ' + genre.mood;

    li.append(h2Elem);
    li.append(pElem);

    return li;
}
