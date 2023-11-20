var playerText =document.querySelector("#playerText");
var computerText = document.querySelector("#computerText");
var resultText = document.querySelector("#resultText");
var choiceBtns = document.querySelectorAll(".choiceBtn");

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

function checkWinner(){
    if(player == computer){
    return "Draw!";

   }else if (computer == "Rock" ){
    return (player == paper)
   }
}