'use strict';

// Zmienne

var paper = 'paper';
var stone = 'stone';
var scissors = 'scissors';
var output = document.getElementById('output');
var gameResult = document.getElementById('gameResult');
var playerResult = document.getElementById('playerResult').innerHTML = 0;
var computerResult = document.getElementById('computerResult').innerHTML = 0;
var playerChoice// = choicePaper || choiceRock || choiceScissors;
var playerMove;
var computerMove;
var rounds;
var computerChoice;
var computerString;
// var choicePaper = document.getElementById('paper');
// var choiceScissors = document.getElementById('scissors');
// var choiceRock = document.getElementById('rock');
var newGame = document.getElementById('newGame');

// Algorytm

newGame.addEventListener('click', function(){
    rounds = window.prompt('how many times we try?');
    playerResult = document.getElementById('playerResult').innerHTML = 0;
    computerResult = document.getElementById('computerResult').innerHTML = 0;
    document.getElementById('gameResult').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    if(isNaN(rounds)){
        output.innerHTML = 'give a number:';
    }
});

function computerChoice() { 
    return Math.floor(Math.random()*3+1);
}

function computerMoveToString() {
    if(computerMove == 1){
        computerString = 'paper';
    } else if(computerMove == 2) {
        computerString = 'scissors';
    } else if(computerMove == 3) {
        computerString = 'stone';
    }
}


function compare() {
    computerMoveToString();
    if(playerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'nice one!' + '<br>' + 'you won.' + '<br>' + 'start new game!' + "</span>";
        document.getElementById('playerResult').innerHTML = rounds;
        return;
    } else if(computerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'you suck!' + '<br>' + 'computer won.' + '<br>' + 'start new game!' + "</span>";
        document.getElementById('computerResult').innerHTML = rounds;
        return;
    } else {
        if(computerMove == playerMove) {
            output.innerHTML = 'there is a tie!';
        } else if ((playerMove == 1 && computerMove == 2) || (playerMove == 2 && computerMove == 3) || (playerMove == 3 && computerMove == 1)){
            output.innerHTML = 'you lost! computer chose ' + computerString;
            document.getElementById('computerResult').innerHTML = 1 + computerResult++;
        } else {
            output.innerHTML = playerChoice + ' was a good choice. you won!';
            document.getElementById('playerResult').innerHTML = 1 + playerResult++;
        }
    }
}

// Akcje na przyciskach

var buttons = document.querySelectorAll('.player-move');

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        playerChoice = this.getAttribute("data-move");
        if (playerChoice == 'paper') {
            playerMove = 1;
        } else if (playerChoice == 'scissors') {
            playerMove = 2;
        } else if (playerChoice == 'stone') {
            playerMove = 3;
        }
        computerMove = computerChoice();
        compare();
    });
}

/*
choicePaper.addEventListener('click', function(){
    playerMove = 1;
    playerChoice = paper;
    computerMove = computerChoice();
    compare();
});

choiceScissors.addEventListener('click', function(){
    playerMove = 2;
    playerChoice = scissors;
    computerMove = computerChoice();
    compare();
});

choiceRock.addEventListener('click', function(){
    playerMove = 3;
    playerChoice = rock;
    computerMove = computerChoice();
    compare();
});
*/