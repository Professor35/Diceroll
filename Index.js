// dice number One
var randomNumber1 = Math.floor(Math.random() * 6) + 1 //Number Between 1 to 6 Will Generate

var randomDiceImage = "Dice" + randomNumber1 + ".png"; // dice1.png - Dice6.png

var randomImageSource = "images2/" + randomDiceImage; //

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", randomImageSource);


// Dice Number Two

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images2/Dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// if statement

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 2 Wins"
} else{
  document.querySelector("h1").innerHTML = "🧛Draw"
}
