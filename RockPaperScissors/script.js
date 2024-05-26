const choices = ["rock" , "paper" , "scissors"];
function computerChoice() {



    return choices[Math.floor(Math.random()* choices.length)];
}


function game(playerChoice,  computerChoice){
    
    let result;
    if(playerChoice == computerChoice){
        result = "It's a tie!";
    } 
    else if(
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') 

    ) {
        result = 'you win !';
    }
    else{
        result = ' computer wins!';
    }
    return result;
 
   
}

// function playRound() {
//     const playerSelection = playerChoice();
//     const computerSelection = computerChoice();
//   }

function playerChoice() {
    // const rock = document.querySelector('#rock');
    // const paper = document.querySelector('#paper');
    // const scissor = document.querySelector('#Scissors');
    const buttons = document.querySelectorAll('.btn'); 
     buttons.forEach((button) => {
     button.addEventListener('click', () => {
        const computerSelection = computerChoice();
        const playerSelection =button.id;
        const result = game(playerSelection,computerSelection);
        document.getElementById('result').innerText = result;
        document.getElementById('computer-choice').innerText = "Computer chose: " + computerSelection;
        document.getElementById('Ginni-choice').innerText = "Ginni chose: " + playerSelection;
    
  });
});

  
}
playerChoice();


  
  
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));