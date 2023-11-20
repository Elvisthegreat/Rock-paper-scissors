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
}));

function computerTurn(){
    const randNumb = Math.floor(Math.random() * 3) + 1;

    switch (randNumb){
        
    }
}