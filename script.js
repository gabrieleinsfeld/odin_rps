let humanScore = 0
let computerScore = 0




function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const computerChoice = options[randomNum]
    return computerChoice
}

function getHumanChoice(){
    const choice = prompt("Please enter rock, paper or scissors").toLowerCase()
    if (choice == "rock"){
        return "Rock"
    }else if(choice == "paper"){
        return "Paper"
    }else if(choice == "scissors"){
        return "Scissors"
    }else{
        console.log('Not a valid option')
        return
    }
}


function playRound(humanChoice, computerChoice){
    console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}`)
    if (humanChoice == computerChoice){
        console.log('It is a tie!')
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log(`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log(`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log(`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log(`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else{
        console.log('Something went wrong')
    }
    return
}


function playGame(){
    for (let i = 0; i<5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (computerScore == humanScore){
        console.log(`It was a tie, the computer scored ${computerScore} points and you scored ${humanScore} points`)
    }else if(humanScore > computerScore){
        console.log(`You won!! The computer scored ${computerScore} points and you scored ${humanScore} points`)
    }else if (humanScore < computerScore){
        console.log(`You lost, the computer scored ${computerScore} points and you scored ${humanScore} points`)
    }else{
        console.log('Something went wrong')
    }
}

playGame()
