const movesArray = ['Rock','Paper','Scissors'];

function computerMove() {
    return movesArray[Math.floor(Math.random() * 3)];
}


function playerMove () {
    let playerMove;
    getOut = false;
    while(true) {

        playerMove = prompt("Make your move (Rock, Paper or Scissors) or Type Exit: ",);

        if (playerMove === null) {
            playerMove = 'Exit';
        }

        playerMove = playerMove.toLowerCase();
        playerMove = playerMove.replace(playerMove[0], playerMove[0].toUpperCase());

        if (playerMove !== movesArray[0] && playerMove !== movesArray[1] && playerMove !== movesArray[2]) {
            if (playerMove === "Exit") {
                getOut = true;
                playerMove = 'Game Cancelled';
                break;
            } else {
                alert("Invalid Move! Try again.");
            }
        } else {
            break;
        }
    }
    if (getOut) {
        alert('Game Over');
    }
    return playerMove;

}

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

    console.log('Human Player chose: '   , playerMove);
    console.log('Computer Player chose: ', computerMove);

    if (result === 'Tie') {
        return "Tie";
    } else if (result === playerMove) {
        return 'Human';
    } else {
        return 'Computer';
    }
}

const numberOfRounds = parseInt(prompt("How many rounds do you want to play?"));

function gameMatch (numberOfRounds){

    let count = 0;
    let humanWins = 0;
    let computerWins = 0;
    let result;
    let ties = 0;


    while(count < numberOfRounds) {
        console.log("Round ", count + 1);
        result = gameRound(playerMove(), computerMove());

        switch (result) {
            case 'Human':
                console.log('Human Player Wins');
                humanWins++;
                break;
            case 'Computer':
                console.log('Computer Wins');
                computerWins++;
                break;
            case 'Tie':
                console.log('It\'s a tie!');
                ties++;
                break;

            default:
                console.log("There was a problem");
        }

        count++;
    }

    console.log("Final Result: ");
    console.log("Human: ", humanWins);
    console.log("Computer: ", computerWins);
    console.log("Ties: ", ties);

    if (humanWins === computerWins) {
        alert("It\'s a Tie!");
    } else if (humanWins > computerWins) {
        alert("Human player wins!");
    } else {
        alert('Computer wins!');
    }
}

gameMatch(numberOfRounds);
