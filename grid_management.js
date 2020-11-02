var gridContainer = document.querySelector('.grid-container');
// var cards = gridContainer.childNodes;
var cards = [];

for (var i=1; i<gridContainer.childNodes.length-1; i+=2) {
    cards.push(gridContainer.childNodes[i]);
}

console.log(cards);

for (var i=0; i<cards.length; i++) {
    for (var j=0; j<2; j++) {
        if (cards[i].classList.contains(`row-${j+1}`)) {
            cards[i].id = `${i+1}-${j+1}`;
            cards[i].style.gridArea = cards[i].id;
            if (cards[i].classList.contains('card-small')) {
                gridContainer.style.gridTemplateAreas = `"${cards[i].id}"`
            }
        }
    }
}
