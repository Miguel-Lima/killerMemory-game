const cardBoard = document.querySelector('#cardboard');
const images = [
    'freddyCard.png',
    'ghostfaceCard.png',
    'hellraiserCard.png',
    'leatherfaceCard.png',
    'michaelCard.png',
    'piramideCard.png',
    'jigsaw.png'
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
      <div>
        <img src="imgs/${img}">
        <img src="imgs/jigsaw.png">
      </div>
    `
});

cardBoard.innerHTML = cardHTML;