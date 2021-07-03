import Cell from './cell';
export default class Universe {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.grid = new Array()
        for (let i = 0; i < row; i++) {
            this.grid[i] = new Array(col)
            for (let j = 0; j < col; j++) {
                // this.grid[i][j] = Math.floor(Math.random() * 2);
                this.grid[i][j] = 0
            }
        }
    }

    progress() {

        // make copy of the grid
        let nextGrid = new Array();
        for (let k = 0; k < this.row; k++) {
            nextGrid[k] = new Array(this.col)
            for (let l = 0; l < this.col; l++) {
                nextGrid[k][l] = this.grid[k][l];
            }
        }

        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                let numNeighbors = this.countNeighbors(i, j);
                // if less than 2 neighbors; kill the cell
                if (this.grid[i][j] === 1 && numNeighbors < 2) {
                    nextGrid[i][j] = 0;
                // if more than 3 neighbors; kill due to overpopulation
                } else if (this.grid[i][j] === 1 && numNeighbors > 3) {
                    nextGrid[i][j] = 0;
                // if cell is dead, but has exactly 3 neighbors, revives
                } else if (this.grid[i][j] === 0 && numNeighbors === 3) {
                    nextGrid[i][j] = 1;

                };
            }
        }

        // copy back the changes into the original grid
        for (let m = 0; m < this.row; m++) {
            for (let n = 0; n < this.col; n++) {
                if (this.grid[m][n] !== nextGrid[m][n]) {
                    this.grid[m][n] = nextGrid[m][n]
                }
            }
        }
    }

    countNeighbors(row, col) {
        let count = 0;
        // check down
        if (row + 1 < this.row && this.grid[row + 1][col] === 1) {
            count += 1
        }
        // check up
        if (row - 1 >= 0 && this.grid[row - 1][col] === 1) {
            count += 1
        }
        // check left
        if (col - 1 >= 0 && this.grid[row][col - 1] === 1) {
            count += 1
        }
        // check right
        if (col + 1 < this.col && this.grid[row][col + 1] === 1) {
            count += 1
        }
        // check up left
        if ((row - 1 >= 0 && col - 1 >= 0) && this.grid[row - 1][col - 1] === 1) {
            count += 1
        }
        // check up right
        if ((row - 1 >= 0 && col + 1 < this.col) && this.grid[row - 1][col + 1] === 1) {
            count += 1
        }        
        //check down left
        if ((row + 1 < this.row && col - 1 >= 0) && this.grid[row + 1][col - 1] === 1) {
            count += 1
        }
        //check down right
        if ((row + 1 < this.row && col + 1 < this.col) && this.grid[row + 1][col + 1] === 1) {
            count += 1
        }
        return count;
    }
}