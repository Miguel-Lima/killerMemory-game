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
let firstCard, secondCard;
let lockCards = false;

function flipCard() {
  if (lockCards) return false;
  this.classList.add("flip");

  if (!firstCard) {
    firstCard = this;
    return false;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;

  !isMatch ? disableCards() : true;
}

function disableCards() {
  
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1000)
  
}

cards.forEach(card => card.addEventListener("click", flipCard));

