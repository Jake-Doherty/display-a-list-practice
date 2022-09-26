export function renderCandy(candy) {
    const li = document.createElement('li');
    li.classList.add('candy-item');

    const h2Elem = document.createElement('h2');
    h2Elem.textContent = candy.name;

    const pELem = document.createElement('p');
    pELem.textContent = candy.flavor + ' ' + candy.type;

    li.append(h2Elem);
    li.append(pELem);

    return li;
}
