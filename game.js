"use strict";

function main() {
    const startButton = document.getElementById('startButton');
    const startText = document.getElementById('startText');
    const gameField = document.getElementById('gameField');
    let currentPlayer = "X"; 

    startButton.addEventListener('click', () => {
        startText.innerText = 'START GAME!';
    });

    gameField.addEventListener('click', (e) => {
        PlayerMove(e);
    });

    function PlayerMove(e) {
        const targetSquare = e.target;
        
        if (targetSquare.classList.contains('square') && targetSquare.childElementCount === 0) {
            addMove(targetSquare, currentPlayer);
            switchPlayer();
        } else if (targetSquare.childElementCount > 0) {
            alert("Фигура уже стоит!");
        }
    }

    function addMove(targetSquare, player) {
        const move = document.createElement('div');

        if(player === "X") move.className = 'cross';
        else move.className = 'cicle';

        targetSquare.appendChild(move);
    }

    function switchPlayer() {
        if (currentPlayer === "X") {
            currentPlayer = "O";
            
        } else currentPlayer = "X";
    }
}

window.onload = () => {
    main();
};