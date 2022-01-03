const movesArray = ['Rock','Paper','Scissors'];

const resultToDisplay = document.querySelector('.result');
const roundToDiplay = document.querySelector('.current-round');
const humanWinsToDisplay = document.querySelector('.human-wins');
const cpuWinsToDisplay = document.querySelector('.cpu-wins');
const tiesToDisplay = document.querySelector('.ties');


let cpuWins = 0;
let humanWins = 0;
let numberOfRounds = 0;
let ties = 0;

function reset () {
    cpuWins = 0;
    humanWins = 0;
    ties = 0;
    numberOfRounds = 0;

    resultToDisplay.textContent = 'Ready to Play!';
    tiesToDisplay.textContent = ties;
    humanWinsToDisplay.textContent = humanWins;
    cpuWinsToDisplay.textContent = cpuWins;
    roundToDiplay.textContent = '-';
}

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener('click', reset);

function computerMove() {
    return movesArray[Math.floor(Math.random() * 3)];
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
        const playerMovement = movesArray[0];
        const cpuMovement = computerMove();
        gameRound(playerMovement, cpuMovement);
        imageSelector(playerMovement,cpuMovement);

});

paper.addEventListener('click', () => {
        const playerMovement = movesArray[1];
        const cpuMovement = computerMove();
        gameRound(playerMovement, cpuMovement);
        imageSelector(playerMovement,cpuMovement);

});

scissors.addEventListener('click', () => {
        const playerMovement = movesArray[2];
        const cpuMovement = computerMove();
        gameRound(playerMovement, cpuMovement);
        imageSelector(playerMovement,cpuMovement);

});


function gameRound (playerMove, computerMove) {

    if (playerMove === computerMove) {
        result = 'Tie';

    } else {

        if ((playerMove === movesArray[0] && computerMove === movesArray[1]) ||
            (playerMove === movesArray[1] && computerMove === movesArray[0])) {

            result = movesArray[1];

        } else if ((playerMove === movesArray[0] && computerMove === movesArray[2]) ||
                   (playerMove === movesArray[2] && computerMove === movesArray[0])) {

            result = movesArray[0];

        } else {
            result = movesArray[2];
        }

    }

    numberOfRounds++;
    roundToDiplay.textContent = numberOfRounds;

    if (result === 'Tie') {
        ties++;
        resultToDisplay.textContent = 'It\'s a Tie';
        tiesToDisplay.textContent = ties;

    } else if (result === playerMove) {

        humanWins++;
        humanWinsToDisplay.textContent = humanWins;
        resultToDisplay.textContent = 'You win!';

    } else {
        cpuWins++;
        cpuWinsToDisplay.textContent = cpuWins;
        resultToDisplay.textContent = 'Computer Wins!';

    }

    if(numberOfRounds === 5) {
        announceWinner();
    }
}

function imageSelector(playerMove, cpuMove) {
    const playerChoice = document.querySelector(".player-choice");
    const cpuChoice = document.querySelector(".cpu-choice");

    playerChoice.src = "./images/" + playerMove + ".png";
    cpuChoice.src = "./images/" + cpuMove + ".png";
}

function announceWinner() {

    const finalWinner = document.createElement('h1');
    finalWinner.classList.add('finalWinner');
    const resultsDisplayMainContainer = document.querySelector('.results-display');

    resultsDisplayMainContainer.appendChild(finalWinner);

    if(humanWins > cpuWins) {
        finalWinner.textContent = 'The Final winner is: Human!';
    } else if (cpuWins > humanWins) {
        finalWinner.textContent = 'The Final winner is: Computer!';
    } else {
        finalWinner.textContent = 'Nobody Wins!';
    }
}
