const playerMove = document.querySelector('.player.choice');
const computerMove = document.querySelector('.computer.choice');
const roundResult = document.querySelector('.result');
const playerScore = document.querySelector('.player h3');
const computerScore = document.querySelector('.computer h3');
const gameButtons = document.querySelectorAll('.game-button');
const gamesPlayed = document.querySelector('.overall.games');
const gameResult = document.querySelector('.game-result');
const overallPlayerScore = document.querySelector('.overall.player');
const overallComputerScore = document.querySelector('.overall.computer');

let playerGameScore = 0;
let playerChoice = "";
let computerGameScore = 0;
let computerChoice = "";
let gameNumber = 0;
let overallPlayerScores = 0;
let overallComputersScores = 0;

gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        startGameRound(button);
        if (playerGameScore === 3 || computerGameScore === 3){
            if (playerGameScore === 3) {
                overallPlayerScores++;
                gameResult.textContent = "You won!";
            } else {
                overallComputersScores++;
                gameResult.textContent = "Computer won!";
            }
            restartGame();
        }
    });
})

const startGameRound = (clickedButton) => {
    gameResult.textContent = "...";
    getPlayerMove(clickedButton);
    let roundWinner = compareMove(playerChoice, computerChoice);
    assignScore(roundWinner);
    playerScore.textContent = playerGameScore;
    computerScore.textContent = computerGameScore;
}

const getPlayerMove = (clickedButton) => {
    let choice = clickedButton.textContent.toLowerCase();
    //choice = choice.slice(0, 10);
    console.log(choice);
    playerMove.textContent = choice.toUpperCase();
    playerChoice = choice;
    computerChoice = setComputerMove();
}

const setComputerMove = () => {
    let choice = getRandom(0 , 2);
    switch(choice){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("error");
            break;
    }
    console.log(`pc: ${choice}`);
    computerMove.textContent = choice.toUpperCase();
    return choice;
}

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const compareMove = (playerMove, computerMove) => {
    if (playerMove === computerMove){
        return 'Draw!';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')) {
        console.log('Player won');
        return 'player';
    } else {
        return 'computer';
    }
}

const assignScore = (roundWinner) => {
    switch(roundWinner) {
        case 'player':
            playerGameScore++;
            playerScore.textContent = playerGameScore;
            roundResult.textContent = "You!";
            break;
        case 'computer':
            computerGameScore++;
            computerScore.textContent = computerGameScore;
            roundResult.textContent = "Computer!";
            break;
        default:
            roundResult.textContent = draw;
            break;
    }
}

const restartGame = () => {
    playerGameScore = 0;
    computerGameScore = 0;
    playerScore.textContent = playerGameScore;
    computerScore.textContent = computerGameScore;
    gameNumber++;
    gamesPlayed.textContent = gameNumber;
    overallComputerScore.textContent = overallComputersScores;
    overallPlayerScore.textContent = overallPlayerScores;
}