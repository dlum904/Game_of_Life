import Cell from './cell';

export default class Universe {
    constructor(col, row) {
        this.grid = new Array()
        for (let i = 0; i < row; i++) {
            this.grid[i] = new Array(col)
            for (let j = 0; j < col; j++) {
                this.grid[i][j] = new Cell();
            }
        }
    }



}