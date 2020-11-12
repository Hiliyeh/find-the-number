'use strict';
//secret number between (1 and 20) random choice
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//score
let score = 20;

// hightscore
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('We need number');
  }
  //player win
  else if (guess === secretNumber) {
    displayMessage('bon numero');
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'to high' : 'to low');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //player loose
    else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// restart game
document.querySelector('.again').addEventListener('click', function () {
  //secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //score
  let score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
