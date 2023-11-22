/**
 * I believe honesty is also one key to succeed, i tried alot of my own 
 * personal codes but nothing was really working out because i still don't really
 * understand how js work, i only got few days left
 * to my dealine day and not to be left behind! Most of the codes Not all! written here are not mine
 * they are all from youtube! I have to be honest so i won't fail this project 
 */
var playerText =document.querySelector("#playerText");
var computerText = document.querySelector("#computerText");
var resultText = document.querySelector("#resultText");
var choiceBtns = document.querySelectorAll(".choiceBtn");
// Declare to hold variables
let player;
let computer;
let fruits;

/**
 * for loop to be alerted out if the human draws with the computer
 */
fruits = ["orange", "mangoes", "bananas", "cherry", "apple"];
function fruits(){
    for(let i = 0; i < fruits.length; i++);
}


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
        // The loop section in the if statement
    alert ("You can share the fruit with computer");
    return fruits;
   }
   else if (computer == "ROCK" ){
        return (player == "PAPER") ? "You Win! You won a banana" : "You Messed Up :D! ";
    } 
     else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win!" : "You Messed Up :D!";
    }
    else if (computer == "SCISSOR") {
        return (player == "ROCK") ? "You Win!" : "You Messed Up :D!";
    }
}


