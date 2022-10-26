// >>>>>>>>>BLACKJACK<<<<<<<
let player = {
  name: "Player",
  chips: 1000,
};
let playerEl = document.querySelector("#playerel");
playerEl.textContent = player.name + ": $" + player.chips;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#messageel");
let sumEl = document.querySelector("#sumel");
let cardsEl = document.querySelector("#cardsel");
let diveverythingEl = document.querySelector("#diveverything");
let betChosen = false;
let betChooseEl = document.querySelector("#betchooseel");

let btnStart = document.querySelector("#btnstart");
let btnNewCard = document.querySelector("#btnnewcard");
let btnStand = document.querySelector("#btnstand");
let btnReset = document.querySelector("#btnreset");

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackjack = true;
    btnReset.style.display = "block";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    btnReset.style.display = "block";
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}
// Upon clicking the button new card, draw a new card from the deck and display it.
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

// Reset the game upon getting blackjack or hitting 22 or more
function resetGame() {
  if (sum >= 21) {
    hasBlackjack = false;
    isAlive = false;
    startGame();
  }
}
// Stand button has been clicked.
function standClicked() {
  if (sum <= 21) {
    stand();
  }
}
function stand() {}

// Function generates a random number (card) between 2 and 11.
function getRandomCard() {
  return Math.floor(Math.random() * 10 + 2);
}

// New card button & stand button are hidden up until game starts. Then they are shown and
// start button goes hidden.
btnStart.addEventListener("click", function () {
  btnNewCard.style.display = "block";
  btnStart.style.display = "none";
  btnStand.style.display = "block";
});

//
btnReset.addEventListener("click", function () {
  btnReset.style.display = "none";
});
