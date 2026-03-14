// Write an array consist of choices 
const choices = ["rock","paper","scissors"]

// Write an object to show which item beats what
const beats = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

// Write a function to get random choice for computer
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

let humanScore = 0;
let computerScore = 0;

const scoreTable = document.querySelector("#score")
const info = document.querySelector("#info")

function displayScore (humanScore, computerScore) {
    scoreTable.textContent = `You ${humanScore} - ${computerScore} Computer`
}

// Write a function to play one round 
function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        info.textContent = `It is a tie. You both choose ${humanChoice}`;
        displayScore(humanScore,computerScore);
    } else {
       if (beats[humanChoice] === computerChoice) {
          humanScore++
          info.textContent = `You won! ${humanChoice} beats ${computerChoice}`
          displayScore(humanScore, computerScore)
       } else {
          computerScore++
          info.textContent = `You lost! ${computerChoice} beats ${humanChoice}`
          displayScore(humanScore, computerScore)
       }
    }
    playGame()
}


const documentContainer = document.querySelector(".choices")
// Attach event listener to every item button
documentContainer.addEventListener('click', e => {
    if(e.target.value) {
        let computerChoice = getComputerChoice();
        playRound(e.target.value, computerChoice)
    }
})

// Write function to play game until someone reaches 5 points
function playGame() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            info.textContent = "Congratulations! You won! Game Over."
            humanScore = 0;
            computerScore = 0;
        }else {
            info.textContent = "Game Over! Computer won."
            humanScore = 0;
            computerScore = 0;
        }
      }
    }