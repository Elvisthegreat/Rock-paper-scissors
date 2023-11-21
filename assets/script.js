var playerText =document.querySelector("#playerText");
var computerText = document.querySelector("#computerText");
var resultText = document.querySelector("#resultText");
var choiceBtns = document.querySelectorAll(".choiceBtn");
// Declare to hold variables
let player;
let computer;
let result;


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));
// The break section
function computerTurn(){
    const randNumb = Math.floor(Math.random() * 3) + 1;

    switch (randNumb){
       case 1:
        computer = "ROCK";
        break;
        case 2:
            computer = "PAPER";
            break; 
            case 3:
                computer = "SCISSORS";
                break;
    }
}
/**
 * 
 * An if statement to check and display if computer is
 * equal to human or if human is eqaul to computer. 
 */
function checkWinner(){
    if(player == computer){
    return "Draw! You have to do better!";
   }
   else if (computer == "ROCK" ){
        return (player == "PAPER") ? "You Win! You won a banana" : "You Messed Up :D! "
    } 
     else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Messed Up :D!";
    }
    else if (computer == "SCISSOR") {
        return (player == "ROCK") ? "You Win!" : "You Messed Up :D!";
    }
}


