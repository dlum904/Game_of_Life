import Universe from './universe';

export default class Game {
    constructor(canvas, col, row) {
        this.col = col;
        this.row = row;
        this.ctx = canvas.getContext("2d");
        this.universe = new Universe(col, row);
        this.bigBang();
    }

    // this function will start animating our universe
    bigBang() {
        console.log(this.universe.grid)

        for (let i = 0; i < this.col; i++) {
            for (let j = 0; j < this.row; j++) {
                // if the cell is dead
                if (this.universe.grid[i][j].state === 0) {
                    this.ctx.beginPath();
                    this.ctx.rect(i * 20, j * 20, 20, 20);
                    this.ctx.stroke();
                } else { // if cell is alive
                    this.ctx.fillRect(i * 20, j * 20, 20, 20);
                }
            }
        }
        // debugger
    }


}