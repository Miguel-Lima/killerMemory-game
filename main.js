const cardBoard = document.querySelector("#cardboard");
const imgs = [
  "freddyCard.png",
  "ghostfaceCard.png",
  "hellraiserCard.png",
  "leatherfaceCard.png",
  "michaelCard.png",
  "piramideCard.png"
];

let cardHTML = "";

imgs.forEach(img => {
  cardHTML += `<div class="memory-card" data-card="${img}">
    <img class="front-face" src="img/${img}"/>
    <img class="back-face" src="img/jigsaw.png">
  </div>`;
});

cardBoard.innerHTML = cardHTML + cardHTML;

// **** //

const cards = document.querySelectorAll(".memory-card");
 
function flipCard() {
  this.classList.add('flip')
}

cards.forEach(card => card.addEventListener("click", flipCard));

