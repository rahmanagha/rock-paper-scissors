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




// Write a function to play one round 
let computerScore = 0;
let humanScore = 0;
const scoreTable = document.querySelector("#score")


function displayScore (humanScore, computerScore) {
    scoreTable.textContent = `You ${humanScore} - ${computerScore} Computer`
}

function playRound(computerChoice,humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It is a tie. You both chose " + computerChoice);
    } else {
       if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You won! Paper beats rock!")
            humanScore++
            displayScore(humanScore,computerScore);
        } else if (humanChoice === "scissors") {
            console.log("You lost! Rock beats scissors!")
            computerScore++
            displayScore(humanScore, computerScore);
        }
       } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You won! Scissors beats paper!")
            humanScore++
            displayScore(humanScore,computerScore);
        } else if (humanChoice === "rock") {
            console.log("You lost! Paper beats rock!")
            computerScore++
            displayScore(humanScore,computerScore);
        }
       }else {
        if (humanChoice === "rock") {
            console.log("You won! Rock beats scissors!")
            humanScore++
            displayScore(humanScore, computerScore);
        } else if (humanChoice === "paper") {
            console.log("You lost! Scissors beats paper!")
            computerScore++
            displayScore(humanScore, computerScore);
        }
       }
    }
}

const documentContainer = document.querySelector(".choices")
documentContainer.addEventListener('click', e => {
    if(e.target.value) {
        let computerChoice = getComputerChoice();
        playRound(computerChoice, e.target.value)
    }
})

// Write function to play game until someone reaches 5 points
function playGame() {
    if (computerScore === 5 || humanScore === 5) {
        if (computerScore > humanScore) {
            console.log("Game Over! Computer won.")
        }else {
            console.log("Congratulations! You won! Game Over.")
        }
    } 
}

playGame();