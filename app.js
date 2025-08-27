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

let computerScore = 0;
let humanScore = 0;

// Write a function to play one round 
function playRound(computerChoice,humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It is a tie. You both chose " + computerChoice)
    } else {
       if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            console.log("You won! Paper beats rock!")
            humanScore++
        } else if (humanChoice === "scissors") {
            console.log("You lost! Rock beats scissors!")
            computerScore++
        }
       } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            console.log("You won! Scissors beats paper!")
            humanScore++
        } else if (humanChoice === "rock") {
            console.log("You lost! Paper beats rock!")
            computerScore++
        }
       }else {
        if (humanChoice === "rock") {
            console.log("You won! Rock beats scissors!")
            humanScore++
        } else if (humanChoice === "paper") {
            console.log("You lost! Scissors beats paper!")
            computerScore++
        }
       }
    }
}