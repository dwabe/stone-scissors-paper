'use strict';

// Zmienne

var paper = 'Papier';
var rock = 'Kamień';
var scissors = 'Nożyce';
var output = document.getElementById('output');
var gameResult = document.getElementById('gameResult');
var playerResult = document.getElementById('playerResult').innerHTML = 0;
var computerResult = document.getElementById('computerResult').innerHTML = 0;
var playerChoice = choicePaper || choiceRock || choiceScissors;
var playerMove;
var computerMove;
var rounds;
var computerChoice;
var choicePaper = document.getElementById('paper');
var choiceScissors = document.getElementById('scissors');
var choiceRock = document.getElementById('rock');
var newGame = document.getElementById('newGame');

// Algorytm

newGame.addEventListener('click', function(){
    rounds = window.prompt('Do ilu gramy?');
    playerResult = document.getElementById('playerResult').innerHTML = 0;
    computerResult = document.getElementById('computerResult').innerHTML = 0;
    document.getElementById('gameResult').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    if(isNaN(rounds)){
        output.innerHTML = 'Podaj liczbę!';
    }
});

function computerChoice() { 
    return Math.floor(Math.random()*3+1);
}

function compare() {
    if(playerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'Wymiatasz!' + '<br>' + 'Wygrałeś z blaszakiem.' + '<br>' + 'Zacznij nową grę!' + "</span>";
        document.getElementById('playerResult').innerHTML = rounds;
        return;
    } else if(computerResult == (rounds-1)){
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'Słabo!' + '<br>' + 'Blaszak wygrał.' + '<br>' + 'Zacznij nową grę!' + "</span>";
        document.getElementById('computerResult').innerHTML = rounds;
        return;
    } else {
        if(computerMove == playerMove) {
            output.innerHTML = 'Remis';
        } else if ((playerMove == 1 && computerMove == 2) || (playerMove == 2 && computerMove == 3) || (playerMove == 3 && computerMove == 1)){
            output.innerHTML = 'Przegrałeś. Blaszak wybrał ' + playerChoice;
            document.getElementById('computerResult').innerHTML = 1 + computerResult++;
        } else {
            output.innerHTML = playerChoice + ' to był dobry wybór. Wygrałeś!';
            document.getElementById('playerResult').innerHTML = 1 + playerResult++;
        }
    }
}

// Akcje na przyciskach

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