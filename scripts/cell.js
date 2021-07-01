export default class Cell {
    constructor() {
        // generates random int between 1 and 2
        this.state = Math.floor(Math.random() * 2)
    }
}