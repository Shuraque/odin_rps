const moves =  ['Rock', 'Paper', 'Scissors'];
var humanScore= 0, computerScore = 0;

function getComputerChoice() {
    let play = Math.floor(Math.random() * 3);
    return moves[play];
}

function getHumanChoice() {
    let move = ' ';
    while ( !(moves.includes(move)) ) {
        move = prompt('Your move', 'Rock');
        move = move[0].toUpperCase()+ move.slice(1).toLowerCase();
    }
    return move;
}

function playRound(humanChoice, computerChoice) {
    if (moves.indexOf(humanChoice) == moves.indexOf(computerChoice) + 1 || moves.indexOf(humanChoice) == moves.indexOf(computerChoice) - 2) {
        humanScore++;
    } else if (moves.indexOf(humanChoice) == moves.indexOf(computerChoice)){
        return;
    } else {
        computerScore++;
    }
}

function playGame(humanFunc, compFunc, roundFunc) {
    let humanChoice, computerChoice;
    for (let i = 0; i < 5; i++) {
        
        humanChoice = humanFunc();
        computerChoice = compFunc();
        roundFunc(humanChoice, computerChoice);

        console.log(computerChoice, humanChoice);
        console.log(computerScore, humanScore);
      }
    
    if (humanScore > computerScore) {
        return 'Human wins with ' + humanScore + ' points.';
    } else if (humanScore == computerScore) {
        return 'Tie!!';
    } else {
        return 'Cybernet wins with ' + computerScore + ' points.';
    }
}

console.log(playGame(getHumanChoice, getComputerChoice, playRound));