import Game from '../scripts/game'

document.addEventListener("DOMContentLoaded", function () {
    console.log("GAME OF LIFE START!")

    const canvas = document.getElementById("canvas")
    canvas.width = 1920;
    canvas.height = 1080;
    
    // will tell us the size of our grid/universe.  TODO: allow user to input this value
    const col = 100;
    const row = 100;
    const newGame = new Game(canvas, col, row);
})