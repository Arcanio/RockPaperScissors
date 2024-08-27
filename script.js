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

getComputerChoice();
