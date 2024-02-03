const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "TIE!";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN!" : "LOSER!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN!" : "LOSER!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN!" : "LOSER!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    
    resultDisplay.classList.remove("winText","loseText","tieText");

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("winText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "LOSER!":
            resultDisplay.classList.add("loseText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "TIE!":
            resultDisplay.classList.add("tieText");
            break;
    }

    resultDisplay.textContent = `${result}`;
}
