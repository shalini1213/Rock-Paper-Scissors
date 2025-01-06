let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const shaluMove = pickShaluMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (shaluMove  === 'rock') {
      result = 'You lose.';
    } else if (shaluMove  === 'paper') {
      result = 'You win.';
    } else if (shaluMove  === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (shaluMove  === 'rock') {
      result = 'You win.';
    } else if (shaluMove  === 'paper') {
      result = 'Tie.';
    } else if (shaluMove  === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (shaluMove  === 'rock') {
      result = 'Tie.';
    } else if (shaluMove === 'paper') {
      result = 'You lose.';
    } else if (shaluMove=== 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="icon"> - <img src="images/${shaluMove}-emoji.png" class="icon"> Shalu`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickShaluMove() {
  const randomNumber = Math.random();

  let shaluMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    shaluMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    shaluMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    shaluMove = 'scissors';
  }

  return shaluMove;
}