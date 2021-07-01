import Game from '../scripts/game'

document.addEventListener("DOMContentLoaded", function () {
    console.log("GAME OF LIFE START!")

    const canvas = document.getElementById("canvas")
    canvas.width = 1200;
    canvas.height = 900;
    
    // will tell us the size of our grid/universe.  TODO: allow user to input this value
    const col = 50;
    const row = 30;
    const newGame = new Game(canvas, col, row);
})