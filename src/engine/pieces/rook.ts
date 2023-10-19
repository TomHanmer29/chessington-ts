import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        for (let squareNum = 1; this.checkIsInBoard(squareNum); squareNum++) {
            if(this.checkIsInBoard(currentSquare.row+squareNum)){
                possibleMoves.push(new Square(currentSquare.row+squareNum, currentSquare.col))
            }
            if(this.checkIsInBoard(currentSquare.row-squareNum)){
                possibleMoves.push(new Square(currentSquare.row-squareNum, currentSquare.col))
            }
            if(this.checkIsInBoard(currentSquare.col+squareNum)){
                possibleMoves.push(new Square(currentSquare.row, currentSquare.col+squareNum))
            }
            if(this.checkIsInBoard(currentSquare.col-squareNum)){
                possibleMoves.push(new Square(currentSquare.row, currentSquare.col-squareNum))
            }
        }
        return this.checkMoveConflicts(board, possibleMoves, currentSquare)[0];
    }

    public checkMoveConflicts(board: Board, possibleMoves: Square[], currentSquare: Square) {
        let possibleAndOccupiedMoves = super.checkMoveConflicts(board, possibleMoves, currentSquare);
        let newPossibleMoves = possibleAndOccupiedMoves[0];
        let occupiedSquares = possibleAndOccupiedMoves[1];
        //if there is a piece in a row/column, remove all possible moves after it
        for (let occupiedSquare of occupiedSquares) {
            let occupiedSquareDiff = occupiedSquare.squareDiff(currentSquare)
            for (let possibleSquare of newPossibleMoves){
                let currentSquareDiff = possibleSquare.squareDiff(currentSquare)
                if(occupiedSquareDiff[0]==currentSquareDiff[0]){
                    if((currentSquareDiff[1]>occupiedSquareDiff[1]&&occupiedSquareDiff[1]>0)||(currentSquareDiff[1]<occupiedSquareDiff[1]&&occupiedSquareDiff[1]<0)){
                        newPossibleMoves.splice(newPossibleMoves.indexOf(possibleSquare),1);
                    }
                }
                if(occupiedSquareDiff[1]==currentSquareDiff[1]){
                    if((currentSquareDiff[0]>occupiedSquareDiff[0]&&occupiedSquareDiff[0]>0)||(currentSquareDiff[0]<occupiedSquareDiff[0]&&occupiedSquareDiff[0]<0)){
                        newPossibleMoves.splice(newPossibleMoves.indexOf(possibleSquare),1);
                    }
                }
            }
        }
        return [newPossibleMoves, occupiedSquares]
    }
}
