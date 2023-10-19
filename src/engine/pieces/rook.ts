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
        let newPossibleMoves: Square[] = possibleAndOccupiedMoves[0]
        let finalPossibleMoves: Square[] = possibleAndOccupiedMoves[0]
        let occupiedSquares = possibleAndOccupiedMoves[1];
        for (let occupiedSquare of occupiedSquares) {
            let occupiedSquareDiff = occupiedSquare.squareDiff(currentSquare)
            for (let possibleSquare of newPossibleMoves){
                let currentSquareDiff = possibleSquare.squareDiff(currentSquare)
                //same row
                if(occupiedSquareDiff[0]==currentSquareDiff[0]){
                    //if outside the occupied spaces
                    if((currentSquareDiff[1]>occupiedSquareDiff[1]&&occupiedSquareDiff[1]>0)
                        ||(currentSquareDiff[1]<occupiedSquareDiff[1]&&occupiedSquareDiff[1]<0)){
                        finalPossibleMoves.splice(finalPossibleMoves.indexOf(possibleSquare),1);
                    }
                }
                //same col
                if(occupiedSquareDiff[1]==currentSquareDiff[1]){
                    //if outside the occupied spaces
                    if((currentSquareDiff[0]>occupiedSquareDiff[0]&&occupiedSquareDiff[0]>0)
                        ||(currentSquareDiff[0]<occupiedSquareDiff[0]&&occupiedSquareDiff[0]<0)){
                        finalPossibleMoves.splice(finalPossibleMoves.indexOf(possibleSquare),1);
                    }
                }
            }
        }
        return [finalPossibleMoves, occupiedSquares]
    }
}
