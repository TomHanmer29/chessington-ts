import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        if(this.checkIsInBoard(currentSquare.row+2)){
            if(this.checkIsInBoard(currentSquare.col+1)){
                possibleMoves.push(new Square(currentSquare.row+2,currentSquare.col+1));
            }
            if(this.checkIsInBoard(currentSquare.col-1)){
                possibleMoves.push(new Square(currentSquare.row+2,currentSquare.col-1));
            }
        }
        if(this.checkIsInBoard(currentSquare.row-2)){
            if(this.checkIsInBoard(currentSquare.col+1)){
                possibleMoves.push(new Square(currentSquare.row-2,currentSquare.col+1));
            }
            if(this.checkIsInBoard(currentSquare.col-1)){
                possibleMoves.push(new Square(currentSquare.row-2,currentSquare.col-1));
            }
        }
        if(this.checkIsInBoard(currentSquare.col+2)){
            if(this.checkIsInBoard(currentSquare.row+1)){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col+2));
            }
            if(this.checkIsInBoard(currentSquare.row-1)){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col+2));
            }
        }
        if(this.checkIsInBoard(currentSquare.col-2)){
            if(this.checkIsInBoard(currentSquare.row+1)){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col-2));
            }
            if(this.checkIsInBoard(currentSquare.row-1)){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col-2));
            }
        }
        return possibleMoves;
    }

    public isKing(){
        return false
    }
}
