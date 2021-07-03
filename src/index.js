import "../styles/index.css";
import Game from '../scripts/game'

document.addEventListener("DOMContentLoaded", function () {
    console.log("GAME OF LIFE START!");
    const row = prompt("Please enter grid height", "100");
    const col = prompt("Please enter grid width", "100");
    const canvas = document.getElementById("canvas");
    canvas.width = col * 10;
    canvas.height = row * 10;
    
    // will tell us the size of our grid/universe.
    // const col = 100;
    // const row = 100;
    const newGame = new Game(canvas, col, row);
})