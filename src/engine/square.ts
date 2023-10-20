export default class Square {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public static at(row: number, col: number) {
        return new Square(row, col);
    }

    public equals(otherSquare: Square) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    //sum of the difference between current square and input square in rows and columns
    public squareDiff(otherSquare: Square){
        return Math.abs(this.row-otherSquare.row) + Math.abs(this.col-otherSquare.col);
    }

    public toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
