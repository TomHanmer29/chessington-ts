import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        for (let squareNum = 1; this.checkIsInBoard(squareNum); squareNum++) {
            if(this.checkIsInBoard(currentSquare.row+squareNum)){
                possibleMoves.push(new Square(currentSquare.row+squareNum, currentSquare.col))
                if(this.checkIsInBoard(currentSquare.col+squareNum)){
                    possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col+squareNum));
                }
                if(this.checkIsInBoard(currentSquare.col-squareNum)){
                    possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col-squareNum));
                }
            }
            if(this.checkIsInBoard(currentSquare.row-squareNum)){
                possibleMoves.push(new Square(currentSquare.row-squareNum, currentSquare.col))
                if(this.checkIsInBoard(currentSquare.col+squareNum)){
                    possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col+squareNum));
                }
                if(this.checkIsInBoard(currentSquare.col-squareNum)){
                    possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col-squareNum));
                }
            }
            if(this.checkIsInBoard(currentSquare.col+squareNum)){
                possibleMoves.push(new Square(currentSquare.row, currentSquare.col+squareNum))
            }
            if(this.checkIsInBoard(currentSquare.col-squareNum)){
                possibleMoves.push(new Square(currentSquare.row, currentSquare.col-squareNum))
            }
        }
        return possibleMoves;
    }
}
