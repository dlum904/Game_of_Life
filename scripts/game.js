import Universe from './universe';

export default class Game {
    constructor(canvas, col, row) {
        this.col = col;
        this.row = row;
        this.ctx = canvas.getContext("2d");
        this.universe = new Universe(col, row);
        this.paused = false;
        this.scale = 10;
        this.registerEvents();
        this.startAnimating(5);
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
        this.startAnimating(5);
    }

    registerEvents() {
        const pauseButton = document.querySelector("#pause");
        pauseButton.addEventListener("click", () => {
            this.paused = !this.paused;
        })
    }

    // this function will start animating our universe
    bigBang() {
        // draws universe
        this.ctx.clearRect(0, 0, 1920, 1080)
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                // if the cell is DEAD (WHITE SQUARES) 0
                if (this.universe.grid[i][j] === 0) {
                    this.ctx.beginPath();
                    this.ctx.rect(j * this.scale, i * this.scale, this.scale, this.scale);
                    this.ctx.stroke();
                } else if (this.universe.grid[i][j] === 1) { // if cell is ALIVE (BLACK SQUARES) 1
                    this.ctx.fillRect(j * this.scale, i * this.scale, this.scale, this.scale);
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
        if (this.elapsed > this.fpsInterval && !this.paused) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            this.bigBang();
            // console.log(this.universe.grid)
            this.universe.progress();
        }
    }
}