
let humanScore = 0
let computerScore = 0

const rock = document.getElementById('button1')
const paper = document.getElementById('button2')
const scissors = document.getElementById('button3')
const result = document.getElementById('result')
const score = document.getElementById('score')
const humanScoreDiv = document.getElementById('humanScore')
const computerScoreDiv = document.getElementById('computerScore')


rock.addEventListener("click", () =>{playRound('Rock', getComputerChoice())})
paper.addEventListener("click", () =>{playRound('Paper', getComputerChoice())})
scissors.addEventListener("click", () =>{playRound('Scissors', getComputerChoice())})


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
    result.innerHTML =(`You picked ${humanChoice} and the computer picked ${computerChoice}` + '<br>')
    if (humanChoice == computerChoice){
        result.innerHTML= result.innerHTML + ('It is a tie!')
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        result.innerHTML= result.innerHTML + (`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        result.innerHTML= result.innerHTML + (`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        result.innerHTML= result.innerHTML + (`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        result.innerHTML= result.innerHTML + (`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        result.innerHTML= result.innerHTML + (`You lost, ${computerChoice} beats ${humanChoice}`)
        computerScore += 1
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        result.innerHTML= result.innerHTML + (`You won!!${humanChoice} beats ${computerChoice}`)
        humanScore +=1
    }else{
        result.innerHTML= result.innerHTML + ('Something went wrong')
    }
    updateScore(humanScore, computerScore)
    return
    
}

function updateScore(humanScore, computerScore){
    humanScoreDiv.textContent = `Your Score: ${humanScore}`
    computerScoreDiv.textContent = `Your Score: ${computerScore}`
}






// function playGame(){
//     for (let i = 0; i<5; i++){
//         playRound(getHumanChoice(), getComputerChoice())
//     }
//     if (computerScore == humanScore){
//         console.log(`It was a tie, the computer scored ${computerScore} points and you scored ${humanScore} points`)
//     }else if(humanScore > computerScore){
//         console.log(`You won!! The computer scored ${computerScore} points and you scored ${humanScore} points`)
//     }else if (humanScore < computerScore){
//         console.log(`You lost, the computer scored ${computerScore} points and you scored ${humanScore} points`)
//     }else{
//         console.log('Something went wrong')
//     }
// }

