let result = '';
let computerMove = '';
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// Function to update the score display
function updateScoreDisplay() {
  document.querySelector('.js-score').innerHTML = `
  WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`;
}

// Initial display update
updateScoreDisplay();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  
  if (playerMove === 'scissor') {
    if (computerMove === 'scissor') {
      result = 'tie..!';
    } else if (computerMove === 'rock') {
      result = 'loose..!';
    } else {
      result = 'Win..!';
    }
  }

  if (playerMove === 'rock') {
    if (computerMove === 'scissor') {
      result = 'Win..!';
    } else if (computerMove === 'rock') {
      result = 'tie..!';
    } else {
      result = 'loose..!';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'scissor') {
      result = 'loose..!';
    } else if (computerMove === 'rock') {
      result = 'Win..!';
    } else {
      result = 'tie..!';
    }
  }

  if (result === 'Win..!') {
    score.wins = score.wins + 1;
  } else if (result === 'tie..!') {
    score.ties = score.ties + 1;
  } else {
    score.losses = score.losses + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreDisplay();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove}-${computerMove} Computer`;
  document.querySelector('.js-moves1').innerHTML = `You 
      <img src="./image/${playerMove.toLowerCase()}.png" alt="" class="move-icon">
    <img src="./image/${computerMove.toLowerCase()}.png" alt="" class="move-icon"> computer`;
}

function reset() {
  score.wins = 0;
  score.ties = 0;
  score.losses = 0;
  localStorage.removeItem('score');
  updateScoreDisplay();
  document.querySelector('.js-result').innerHTML = "RESET DONE"; 
  document.querySelector('.js-moves').innerHTML = '';
  document.querySelector('.js-moves1').innerHTML = '';
}


function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}