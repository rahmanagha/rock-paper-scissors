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
