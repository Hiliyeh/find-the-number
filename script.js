"use strict";

//secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//score
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "we need a number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Bon numero";
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
  //high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "to high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "to low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //secret number
  secretNumber;
  //score
  let score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
