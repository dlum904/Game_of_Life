export default class Cell {
    constructor() {
        // generates random int between 0 and 1
        this.state = Math.floor(Math.random() * 2)
    }
}