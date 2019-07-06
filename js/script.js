'use strict';

// Zmienne

var params = {
    playerName: '',
    playerMove: '',
    computerMove: '',
    computerSet: '',
    rounds: '',
    playerChoice: '',
    progress: []
}
var output = document.getElementById('output');
var gameResult = document.getElementById('gameResult');
var playerResult = document.getElementById('playerResult').innerHTML = 0;
var computerResult = document.getElementById('computerResult').innerHTML = 0;
var selectMove = document.getElementsByClassName('player-move');
var modal = document.querySelector('#modal-overlay');   
var startModal = document.querySelector('#modal-overlay2');    
var modals = document.querySelectorAll('.modal');
var newGame = document.getElementById('newGame');
var startGame = document.getElementById('start-game');  
var closeButtons = document.querySelectorAll('.modal .close');

// Algorytm

function computerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

function empty() {
    params.progress.length = 0;
}

function compare() {
           
    if (playerResult == (params.rounds - 1)) {
        modal.classList.add('show');           
        document.getElementById('gameResult').innerHTML = "<span style=\"color:green\">" + 'grats!' + '<br>' + 'you won!' + '<br>' + 'game over, start a new game!' + "</span>";
        document.getElementById('playerResult').innerHTML = params.rounds;
        return;
    } else if (computerResult == (params.rounds - 1)) {
        modal.classList.add('show');                 
        document.getElementById('gameResult').innerHTML = "<span style=\"color:red\">" + 'you lost!' + '<br>' + 'game over, start a new game!' + "</span>";
        document.getElementById('computerResult').innerHTML = params.rounds;
        return;
    } else {

        if (params.computerMove == params.playerMove) {
            output.innerHTML = params.playerName + ' tied';
            params.progress.push({content: 'you tied'});
            progressCount();
        } else if ((params.playerMove == 1 && params.computerMove == 2) || (params.playerMove == 2 && params.computerMove == 3) || (params.playerMove == 3 && params.computerMove == 1)) {
            output.innerHTML = params.playerName + ' lost with: ' + params.playerChoice;
            document.getElementById('computerResult').innerHTML = 1 + computerResult++;
            params.progress.push({content: 'you lost with: ' + params.playerChoice + ' computer chose ' + params.computerSet + ', score: ' + playerResult + ' | ' + computerResult});
            progressCount();
        } else {
            output.innerHTML = params.playerName + ' won with: ' + params.playerChoice;
            document.getElementById('playerResult').innerHTML = 1 + playerResult++;
            params.progress.push({content: 'you won with: ' + params.playerChoice + ' computer chose ' + params.computerSet + ', score: ' + playerResult + ' | ' + computerResult});
            progressCount();
        }
    }
}

function progressCount() {
    var scoreTable = document.createElement('p');       
    for (var c in params.progress) {
        scoreTable.innerHTML = params.progress.length + '. ' + params.progress[c].content;
        document.getElementById('modal').appendChild(scoreTable);
    } 
}

// Akcje na przyciskach

for (var p = 0; p < selectMove.length; p++) {
    selectMove[p].addEventListener('click', function () {
        var choice = this.getAttribute('id');
        params.playerMove = choice;
        if (params.playerMove == 1) {
            params.playerChoice = 'paper';
        } else if (params.playerMove == 2) {
            params.playerChoice = 'scissors';
        } else {
            params.playerChoice = 'stone';
        }
        params.computerMove = computerChoice();
        if (params.computerMove == 1) {
            params.computerSet = 'paper';
        } else if (params.computerMove == 2) {
            params.computerSet = 'scissors';
        } else if (params.computerMove == 3){
            params.computerSet = 'stone';
        }
        compare();
    });
}

// Nowa gra

newGame.addEventListener('click', function () {
    startModal.classList.add('show');    
});

startGame.addEventListener('click', function() {
    params.playerName = document.getElementById('player-name').value; 
    params.rounds = document.getElementById('rounds-number').value;
    playerResult = document.getElementById('playerResult').innerHTML = 0;
    computerResult = document.getElementById('computerResult').innerHTML = 0;
    gameResult.innerHTML = '';
    output.innerHTML = '';
    if (isNaN(params.rounds)) {
        output.innerHTML = 'Please pick a number!';
    } 
    
    document.querySelector('#modal-overlay2').classList.remove('show');
});

// Modale

var hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
    document.querySelector('#modal-overlay2').classList.remove('show');
};
document.querySelector('#modal-overlay').addEventListener('click', hideModal);
document.querySelector('#modal-overlay2').addEventListener('click', hideModal);
for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
};

for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
        event.stopPropagation();
    });
};