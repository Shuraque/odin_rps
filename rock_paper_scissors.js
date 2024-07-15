const moves =  ['Rock', 'Paper', 'Scissors'];

const rock = document.querySelector("#hrock");
const paper = document.querySelector("#hpaper");
const scissors = document.querySelector("#hscissors");

const crock = document.querySelector("#crock");
const cpaper = document.querySelector("#cpaper");
const cscissors = document.querySelector("#cscissors");

const hscore = document.querySelector("#humanScore h2");
const cscore = document.querySelector("#comScore h2");

const hstatus = document.querySelector("#hpfp");
const cstatus = document.querySelector("#cpfp");

const endscreen = document.querySelector("h3");

var humanScore= 0, computerScore = 0;

function getComputerChoice() {
    let play = Math.floor(Math.random() * 3);
    return moves[play];
}

function playRound(move, computerChoice) {
    computerChoice = getComputerChoice();

    hstatus.textContent = move;
    cstatus.textContent = computerChoice;

    setTimeout(function() {
        hstatus.textContent = "🗿";
        cstatus.textContent = "🤖"; 
      }, 1000);

    
    if (moves.indexOf(move) == moves.indexOf(computerChoice) + 1 || moves.indexOf(move) == moves.indexOf(computerChoice) - 2) {
        humanScore++;
        hscore.textContent = humanScore;
        
        if (humanScore != null) {
            window.localStorage.setItem("hS", "" + humanScore);
        }

    } else if (moves.indexOf(move) == moves.indexOf(computerChoice)){
        return;
    } else {
        computerScore++;
        cscore.textContent = computerScore;
        
        if (computerChoice != null) {
            window.localStorage.setItem("cS", "" + computerScore);
        }
    }    

    if (humanScore + computerScore == 5){
        window.location.href = "endscreen.html";
    }

    
}

rock.addEventListener("click", function(){playRound(moves[0],  getComputerChoice); });
paper.addEventListener("click", function(){playRound(moves[1],  getComputerChoice); });
scissors.addEventListener("click", function(){playRound(moves[2],  getComputerChoice); });
