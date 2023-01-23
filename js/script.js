const btn = document.querySelector('button');
btn.addEventListener('click', event =>{
    
    event.preventDefault();
    
    const name = document.querySelector('input');
    
    document.querySelector('h1').innerText = name.value;
    if(name.value == ''){
        document.querySelector('h1').innerText = 'Player:';
    }
    

    const form = document.querySelector('form');
    form.style.visibility = 'hidden';
})

const generateComputerChoice = () =>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice.textContent;
    document.querySelector('.cChoice').innerText = computerChoice;
}



const choices = document.querySelectorAll('.choice');

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

for(let i = 0; i< choices.length; i++ ){
    choices[i].addEventListener('click', function(){
        playerChoice = choices[i].textContent;
        document.querySelector('.pChoice').innerText = playerChoice;
        generateComputerChoice()

        if(playerChoice == 'ROCK' && computerChoice == 'SCISSORS'){
            playerScore++;
            document.querySelector('.pScore').innerText = playerScore;
        }
        
        else if(playerChoice == 'PAPER' && computerChoice == 'ROCK'){
            playerScore++;
            document.querySelector('.pScore').innerText = playerScore;
        }
        
        else if(playerChoice == 'SCISSORS' && computerChoice == 'PAPER'){
            playerScore++;
            document.querySelector('.pScore').innerText = playerScore;
        }
        
        else if(computerChoice == 'ROCK' && playerChoice == 'SCISSORS'){
            computerScore++;
            document.querySelector('.cScore').innerText = computerScore;
        }
        
        else if(computerChoice == 'PAPER' && playerChoice == 'ROCK'){
            computerScore++;
            document.querySelector('.cScore').innerText = computerScore;
        }
        
        else if(computerChoice == 'SCISSORS' && playerChoice == 'PAPER'){
            computerScore++;
            document.querySelector('.cScore').innerText = computerScore;
        }
        if(computerScore == 3){
            document.querySelector('.winner').innerText =  'Computer is the winner' ;
            
            
            
        }else if(playerScore == 3){ 
            
            document.querySelector('.winner').innerText = 'You are the winner';   
        } 
            
        
    })

    
}
restart()

function restart (){
    const restartButton = document.createElement('button');
    restartButton.classList.add('restartButton');
    restartButton.innerText = 'RESTART';
    document.body.append(restartButton);
    restartButton.addEventListener('click', ()=>{
        computerScore = 0;
        document.querySelector('.cScore').innerText = '0';
        playerScore = 0;
        document.querySelector('.pScore').innerText = playerScore;
        computerChoice = '';
        playerChoice ='';
        document.querySelector('.winner').innerText = '';
        generateComputerChoice; 
        
        
    })
}





