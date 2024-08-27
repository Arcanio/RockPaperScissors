const random = (max) => {
    return Math.floor(Math.random() * max);
}

const getComputerChoice = () => {
    let num = random(3);

    if (num === 0) {
        return console.log("Scissors");
    } else if (num === 1) {
        return console.log("Paper");
    } else {
        return console.log("Rock");
    }
}

const getHumanChoice = () => {
    let choice = Number(prompt("Enter a number: 1. Scissors, 2. Paper, 3.Rock", ""));

    switch (choice) {
        case 1:
            console.log("Scissors");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Rock");
            break;
        default:
            alert("Please choice a correct number");
    }
}

getHumanChoice();
getComputerChoice();
