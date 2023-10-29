
let data = {
  'rock': 'images/rock.png',
  'paper': 'images/paper.png',  
  'scissor': 'images/scissor.png'
};

const userChoiceDisplay = document.querySelector(".user-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const userScore = document.querySelector(".p-score");
const computerScore = document.querySelector(".c-score");
const movesLeftDisplay = document.querySelector('.moves');
const resultDisplay = document.querySelector('.result');
const playAgainBtn = document.querySelector(".play-again");
const givenChoices = document.querySelector(".options");

let moves = 0;
let playerScore = 0;
let cpuScore = 0;

function cScores(){
  cpuScore++;
  console.log(cpuScore);
  computerScore.textContent = cpuScore;
  console.log(computerScore.textContent);
}

function pScores(){
  playerScore++
  console.log(playerScore);
  userScore.textContent = playerScore;
  console.log(userScore.textContent);
}

function userSelection(userChoice){ 

  userChoiceDisplay.innerHTML = `<img src= "${data[userChoice]}">`;

    const cpuChoice = generateComputerChoice();
    console.log(data[cpuChoice]);
    computerChoiceDisplay.innerHTML = `<img src= "${data[cpuChoice]}">`;
 
    getResult(userChoice, cpuChoice);

    moves++;
    movesLeftDisplay.innerText = `Moves Left: ${10 - moves}`;
    movesLeft = movesLeftDisplay.innerText;

    if(moves == 10) {
       gameOver(playerScore, cpuScore);
    }
}
 
function generateComputerChoice(){
    const computerOption = Object.keys(data);
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOption[randomNumber]; 
}

function getResult(userChoice, cpuChoice){

  if(userChoice === cpuChoice){
      draw();
  }

  else if(userChoice == 'rock'){
    if(cpuChoice == 'paper'){
        cScores();
    }else{
        pScores();
    }
  }

  else if(userChoice == 'scissor'){
    if(cpuChoice == 'rock'){
        cScores();
    }else{
        pScores();
    }
  }

  else if(userChoice == 'paper'){
    if(cpuChoice == 'scissor'){
        cScores();
    }else{
        pScores();
    } 
  }  
}

function gameOver(playerScore, cpuScore){   

    movesLeftDisplay.innerText = 'none';
    movesLeftDisplay.innerText = '-- Game Over --';
    movesLeftDisplay.style.fontSize= '3em';
    movesLeftDisplay.style.letterSpacing= '3px';
    movesLeftDisplay.style.fontFamily= 'cursive';
    movesLeftDisplay.style.color= 'aliceblue';

    if(playerScore === cpuScore){
    resultDisplay.style.fontSize = '2rem';
    resultDisplay.innerText = "It's a Draw!";
    resultDisplay.style.color = "white";
    }

    if(playerScore > cpuScore){
      resultDisplay.style.fontSize = '5em';
      resultDisplay.style.letterSpacing = '1px';
      resultDisplay.innerText = 'YOU WIN :)';
      resultDisplay.style.color = "#2ad32a";
      resultDisplay.style.fontFamily = 'Agbalumo';
    }

    else if(playerScore < cpuScore){
      resultDisplay.style.fontSize = '5em';
      resultDisplay.style.letterSpacing = '1px';
      resultDisplay.innerText = 'YOU LOSE :(';
      resultDisplay.style.color = "#ff0000";
      resultDisplay.style.fontFamily = 'Agbalumo';
    }

     givenChoices.style.display = 'none';

     playAgainBtn.innerText = 'Play Again!';
     playAgainBtn.classList.add('play-again');
     playAgainBtn.style.display = 'block';
     playAgainBtn.addEventListener('click', () => {
       window.location.reload();
})
}
