const random = (max) => {
    return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
    let num = random(3);
    let computerChoice = "";

    if (num === 0) {
        return computerChoice = "Scissors";
    } else if (num === 1) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Rock";
    }
}

const getHumanChoice = () => {
    let choice = Number(prompt("Enter a number: 1. Scissors, 2. Paper, 3.Rock", ""));
    let humanChoice = "";

    if (choice === 1) {
        return humanChoice = "Scissors";
    } else if (choice === 2) {
        return humanChoice = "Paper";
    } else if (choice === 3) {
        return humanChoice = "Rock";
    } else {
        alert("Please choice a correct number");
    }
}

const playRound = (humanChoice, computerChoice) => {
    let humanScore = 0;
    let computerScore = 0;

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("It's a draw");
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("It's a draw");
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("It's a draw");
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("The computer won, Rock rules");
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You won, Scissors rules");
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You won, Rock rules");
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("The computer won, Paper rules");
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You won, Paper rules");
        humanScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("The computer won, Scissors rules");
        computerScore++;
        console.log(humanScore);
        console.log(computerScore);
    } else {
        alert("Error");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
