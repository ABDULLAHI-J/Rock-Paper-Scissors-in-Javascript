// get the button round class for all buttons
const buttonChoice = document.querySelectorAll(".btn-round");

// get the score class (h1)
let scoreBoard = document.querySelector(".score");

// get the user & computer result section
let usercomputer = document.querySelector(".user-game-choices");

// set the user to empty for now
let userChoice = '';

// the score is set to zero at the beginning
let score = 0;

//get the result text h1 to display the result
let resultText = document.querySelector(".result-text");

// get the reset or play again button to reset the match.
let playAgain = document.querySelector(".play-again");

// get the user choice 
let user_selected_choice = document.getElementById("user-selected-choice");

// get the computer selected choice
let computer_selected_choice = document.getElementById("computer_selected_choice");


// get the buttons id to disable when we go to the second page 
// there are better ways to this i.e for loop
let disableUserBtn = document.querySelector(".user-btn-disable");
let disableCompBtn = document.querySelector(".computer-btn-disable");

//get the rules section here 
//this will help us show/hide the rules 
let open = document.getElementById("open");
let close = document.getElementById("close");
let rules = document.querySelector(".rules");


// choices for the computer to choose
// Computer Choice section 
// here we give choice for the computer to randomly choose 
let choiceForComputer = ['paper','rock','scissors']; 

function computerChoice(){
    return choiceForComputer[Math.floor(Math.random() * choiceForComputer.length)];
}


// loop through all the buttons and do the following 
// this loops through the users choices 
for(let i = 0; i < buttonChoice.length; i++){
    // on click of each button 
    document.querySelectorAll(".btn-round")[i].addEventListener('click' , function(){

        // set the user choice to whatever the user chose and assign it to the variable UserChoice
        userChoice = document.querySelectorAll(".btn-round")[i].getAttribute('data-choice');

    
        // hide the game board here changing it to none so that we can show the second page
        document.querySelector(".game-board").style.display= "none";

        // show the second page after you have hidden the gameboard section
        usercomputer.style.display = "flex";

        // disable the buttons after the user and the computer both made thei choices
        disableBtns();

        // call the game winner function
        gamewinner();
        
    });

   
    
    // check for the winner based on the rules
    function gamewinner(){

        // this vaariables holds whatever the computer choose
        let computerChooses = computerChoice();

        // this two function updates our choices 
        // sets whatever the user and the computer chooses
        updateSelectionScreen(user_selected_choice,userChoice);
        updateSelectionScreen(computer_selected_choice,computerChooses);
        
        // condition for the game rules
        if(userChoice === computerChooses){
            resultText.innerHTML = "Draw"
        } else if(userChoice === "paper" && computerChooses === "rock" || userChoice === "rock" && computerChooses === "scissors" || userChoice === "scissors" && computerChooses == "paper"){

            resultText.innerHTML = "YOU WON"
            updateScore(1);
        }else{
            
            resultText.innerHTML = "YOU LOSE"
            updateScore(-1);
        }
        
    }

    // function disable button after both the user and computer made their choice
    function disableBtns(){
        disableUserBtn.disabled = true;
        disableCompBtn.disabled = true;
    }

    // our function to update the score
    function updateScore(value) {
        score = score + value;
        scoreBoard.innerText = score;
    }

    // this opens the rules section
    open.addEventListener("click",function(){
        rules.style.display = "flex";
    });

    // this closes the rules 
    close.addEventListener("click",function(){
        rules.style.display = "none";
    });

    // reset the game to play again
    playAgain.addEventListener("click",function(){

        // show the gameBOARD to user to play again
        document.querySelector(".game-board").style.display= "flex";

        //Hide the user and computer choices section
        usercomputer.style.display = "none";

    });

 // A function to   
// update the screen after both the user and computer have made their choices
function updateSelectionScreen(selectedElement, choice){

    selectedElement.classList.remove("btn-paper-border");
    selectedElement.classList.remove("btn-scissors-border");
    selectedElement.classList.remove("btn-rock-border");

    let imgchoosen = selectedElement.querySelector("img");
    selectedElement.classList.add('btn-'+choice+"-"+"border");
    console.log(selectedElement.classList.add('btn-') + choice + "- border");
    imgchoosen.src = 'images/icon-' + choice + ".svg";
    // imgchoosen.src = 'images/icon-${choice}.svg';

    imgchoosen.alt = choice;
}

}
