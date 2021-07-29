function roll() {

  var player1Name = document.querySelector(".player1").value;
  var player2Name = document.querySelector(".player2").value;

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".svg");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".svg");

  if (randomNumber1 == randomNumber2) { // draw
    document.querySelector("h1").textContent = "🚩 Draw! 🚩";
  } else if (randomNumber1 > randomNumber2) { // player 1 wins
    document.querySelector("h1").textContent = "🚩 " + player1Name + " Wins!";
  } else { // player 2 wins
    document.querySelector("h1").textContent = player2Name + " Wins! 🚩";
  }
}

var rollBtn = document.querySelector(".roll");
rollBtn.addEventListener("click", roll);
