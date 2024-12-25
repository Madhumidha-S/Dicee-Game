var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h1").innerHTML = "Refresh Me";
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "./images/dice6.png");
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "./images/dice6.png");
});
