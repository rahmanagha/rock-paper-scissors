// Write a function to get random choice for computer
function getComputerChoice() {
    const index = Math.floor(Math.random()*3)
    return index === 0 ? "rock": index === 1 ? "paper" : "scissors"
}
// Write function to get human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?")
    return choice.toLowerCase()
}



// Write a function to play one round 
let computerScore = 0;
let humanScore = 0;
function displayScore () {
    console.log("Computer - You: " + computerScore + " - " + humanScore)
}

function playRound(computerChoice,humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It is a tie. You both chose " + computerChoice)
        displayScore();
    } else {
       if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You won! Paper beats rock!")
            humanScore++
            displayScore();
        } else if (humanChoice === "scissors") {
            console.log("You lost! Rock beats scissors!")
            computerScore++
            displayScore();
        }
       } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You won! Scissors beats paper!")
            humanScore++
            displayScore();
        } else if (humanChoice === "rock") {
            console.log("You lost! Paper beats rock!")
            computerScore++
            displayScore();
        }
       }else {
        if (humanChoice === "rock") {
            console.log("You won! Rock beats scissors!")
            humanScore++
            displayScore();
        } else if (humanChoice === "paper") {
            console.log("You lost! Scissors beats paper!")
            computerScore++
            displayScore();
        }
       }
    }
}

// Write function to play game until someone reaches 5 points
function playGame() {
    if (computerScore === 5 || humanScore === 5) {
        if (computerScore > humanScore) {
            console.log("Computer won")
            displayScore();
        }else {
            console.log("You won")
            displayScore();
        }
    } else {
       let computerChoice = getComputerChoice();
       let humanChoice = getHumanChoice();
        playRound(computerChoice,humanChoice)
        playGame();
    }
}

playGame();