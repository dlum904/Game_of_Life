import Universe from './universe';

export default class Game {
    constructor(canvas, col, row) {
        this.col = col;
        this.row = row;
        this.ctx = canvas.getContext("2d");
        this.universe = new Universe(col, row);
        this.paused = false;
        this.startAnimating(5);
    }

    // this function will start animating our universe
    bigBang() {
        // draws out universe
        this.ctx.clearRect(0, 0, 1200, 900)
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                // if the cell is DEAD (WHITE SQUARES) 0
                if (this.universe.grid[i][j].state === 0) {
                    this.ctx.beginPath();
                    this.ctx.rect(j * 20, i * 20, 20, 20);
                    this.ctx.stroke();
                } else if (this.universe.grid[i][j].state === 1) { // if cell is ALIVE (BLACK SQUARES) 1
                    this.ctx.fillRect(j * 20, i * 20, 20, 20);
                }
            }
        }

    }
    
    startAnimating(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.bigBang();
            console.log(this.universe.grid)
            // debugger
            this.universe.progress();
        }
    }
}