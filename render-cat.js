export function renderCat(cat) {
    const li = document.createElement('li');
    li.classList.add('cat-item');

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = cat.name;

    const pElem = document.createElement('p');
    pElem.textContent = cat.color + ' ' + cat.breed;

    li.append(h2Elem);
    li.append(pElem);

    return li;
}
