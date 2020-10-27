'use strict';

//secret number
const secretNumber = Math.trunc(Math.random()*20)+1;
//score
let score=20;


document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){

  const guess= Number(document.querySelector('.guess').value) ; 

    if(!guess){
       document.querySelector('.message').textContent="we need a number";
    }else if (guess === secretNumber){
      document.querySelector('.message').textContent = "Bon numero";
    }
    else if(guess > secretNumber ){

        if(score >1){ document.querySelector('.message').textContent="to high";
      score--;
        document.querySelector('.score').textContent=score;
    } else{
                document.querySelector('.message').textContent="you lost the game";
                document.querySelector('.score').textContent=0;
    }
    }else if(guess < secretNumber){
        if(score >1){ document.querySelector('.message').textContent="to low";
         score--;
        document.querySelector('.score').textContent=score;
          }  else{
                document.querySelector('.message').textContent="you lost the game";
                document.querySelector('.score').textContent=0;
    }
}
});
