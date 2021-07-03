import Universe from './universe';

export default class Game {
    constructor(canvas, col, row) {
        this.col = col;
        this.row = row;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.universe = new Universe(col, row);
        this.paused = true;
        this.scale = 10;
        this.fps = 15;
        this.registerEvents();
        this.bigBang();
        this.startAnimating(this.fps);
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
        const saveButton = document.querySelector("#save");
        const loadButton = document.querySelector("#load");

        let that = this;
        pauseButton.addEventListener("click", () => {
            this.paused = !this.paused;
        });

        saveButton.addEventListener("click", () => {
            localStorage.setItem("savedUniverse", JSON.stringify(this.universe.grid));
        });

        loadButton.addEventListener("click", () => {
            let loadedUniverse = JSON.parse(localStorage.getItem("savedUniverse"));

            if (loadedUniverse.length !== this.universe.grid.length) {
                alert("saved grid size does not match")
            } else {
                this.universe.grid = JSON.parse(localStorage.getItem("savedUniverse"));
            }
        });

        this.canvas.addEventListener("click", (e) => {
            // if the cell is 1 set it to 0, else set it 1.
            this.universe.grid[Math.floor(e.offsetY / 10)][Math.floor(e.offsetX / 10)] = this.universe.grid[Math.floor(e.offsetY / 10)][Math.floor(e.offsetX / 10)] === 1 ? 0 : 1;
            this.bigBang();
        })
    }

    // this function will start animating our universe
    bigBang() {
        // draws universe
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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