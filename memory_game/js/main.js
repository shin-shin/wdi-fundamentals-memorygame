console.log("It works!");

var cards = [
  {
    rank : "queen",
    suit : "hearts",
    cardImage : "images/queen-of-hearts.png"
  },
  {
    rank : "queen",
    suit : "diamonds",
    cardImage : "images/queen-of-diamonds.png"
  },
  {
    rank : "king",
    suit : "hearts",
    cardImage : "images/king-of-hearts.png"
  },
  {
    rank : "king",
    suit : "diamonds",
    cardImage : "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var score = 0;



function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    score++;
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  };
  document.getElementById("score").innerHTML = "Your score is " + score;
};



console.log(score);


var flipCard = function() {

  let cardId = this.getAttribute("data-id");
  console.log(this);

  // console.log("User flipped " + cards[cardId].rank);
  // console.log("User flipped " + cards[cardId].suit);
  // console.log("User flipped " + cards[cardId].cardImage);

  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute("src", cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  };

};

var createBoard = function() {
  console.log("createBoard called with " + cards.length  + " length");
  for (let i = 0; i < cards.length; i++) {

    var cardElement = document.createElement("img");
    cardElement.setAttribute("src","images/back.png");
    cardElement.setAttribute("data-id",i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
  document.getElementById("score").innerHTML = "Your score is " + score;
};

console.log(document.getElementById("game-board"));

createBoard();

var resetBoard = function() {
  cardsInPlay = [];
  console.log("createBoard called with " + cards.length  + " length");
  document.getElementById("game-board").innerHTML = "";
  createBoard();

};

document.getElementById("reset").addEventListener("click", resetBoard);
