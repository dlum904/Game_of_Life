import Cell from './cell';
export default class Universe {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.grid = new Array()
        for (let i = 0; i < row; i++) {
            this.grid[i] = new Array(col)
            for (let j = 0; j < col; j++) {
                this.grid[i][j] = new Cell();
            }
        }
    }

    progress() {

        // make copy of the grid
        let nextGrid = new Array();
        for (let k = 0; k < this.row; k++) {
            nextGrid[k] = new Array(this.col)
            for (let l = 0; l < this.col; l++) {
                nextGrid[k][l] = new Cell();
                nextGrid[k][l].state = this.grid[k][l].state;
            }
        }

        // debugger
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                let numNeighbors = this.countNeighbors(i, j);
                // if less than 2 neighbors; kill the cell
                debugger
                if (this.grid[i][j].state === 1 && numNeighbors < 2) {
                    nextGrid[i][j].state = 0;
                    console.log(`${i} ${j} has been killed`)
                    // console.log(`${i} ${j} should be ded`)
                    // if more than 3 neighbors; kill due to overpopulation
                } else if (this.grid[i][j].state === 1 && numNeighbors > 3) {
                    nextGrid[i][j].state = 0;
                    console.log(`${i} ${j} dies from overpopulation`);
                    debugger
                    // if cell is dead, but has exactly 3 neighbors, revives
                } else if (this.grid[i][j].state === 0 && numNeighbors === 3) {
                    nextGrid[i][j].state = 1;
                    console.log(`${i} ${j} should be revived`)
                    debugger

                };
            }
        }

        // copy back the changes into the original grid
        for (let m = 0; m < this.row; m++) {
            for (let n = 0; n < this.col; n++) {
                if (this.grid[m][n].state !== nextGrid[m][n].state) {
                    // console.log(this.grid[m][n].state)
                    // console.log(nextGrid[m][n].state)
                    // debugger
                    this.grid[m][n].state = nextGrid[m][n].state
                    // debugger
                }

            }
        }
        // this.grid = nextGrid;
        // debugger
    }

    countNeighbors(row, col) {
        let count = 0;
        // console.log(`row ${row}`);
        // console.log(`col ${col}`);
        // check down
        if (row + 1 < this.row && this.grid[row + 1][col].state === 1) count += 1;
        // check up
        if (row - 1 > 0 && this.grid[row - 1][col].state === 1) count += 1;
        // check left
        if (col - 1 > 0 && this.grid[row][col - 1].state === 1) count += 1;
        // check right
        if (col + 1 < this.col && this.grid[row][col + 1].state === 1) count += 1;

        // check up left
        if ((row - 1 > 0 && col - 1 > 0) && this.grid[row - 1][col - 1].state === 1) count += 1;
        // check up right
        if ((row - 1 > 0 && col + 1 < this.col) && this.grid[row - 1][col + 1].state === 1) count += 1;
        
        //check down left
        if ((row + 1 < this.row && col - 1 > 0) && this.grid[row + 1][col - 1].state === 1) count += 1;
        //check down right
        if ((row + 1 < this.row && col + 1 < this.col) && this.grid[row + 1][col + 1].state === 1) count += 1;

        // debugger
        return count;
    }
}