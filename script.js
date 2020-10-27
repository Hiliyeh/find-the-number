'use strict'

//secret number
const secretNumber = Math.trunc(Math.random()*20)+1;
//score
let score=20;


document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',function(){

  const guess= Number(document.querySelector('.guess').value) ; 

    if(!guess){
       document.querySelector('.message').textContent="we need a number";
    }else if(guess > secretNumber ){

        if(score > 1){ document.querySelector('.message').textContent="to high";
    document.querySelector('.score').textContent=score;
    score--;} else{
               document.querySelector('.message').textContent="you lost the game";

    }
   
   
    }else if(guess < secretNumber){
    document.querySelector('.message').textContent="to low";
      document.querySelector('.score').textContent=score;
    score--;
   
}
})
