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
        if(currentSquare.row+2<gameSettings.BOARD_SIZE){
            if(currentSquare.col+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row+2,currentSquare.col+1));
            }
            if(currentSquare.col-1>=0){
                possibleMoves.push(new Square(currentSquare.row+2,currentSquare.col-1));
            }
        }
        if(currentSquare.row-2>=0){
            if(currentSquare.col+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row-2,currentSquare.col+1));
            }
            if(currentSquare.col-1>=0){
                possibleMoves.push(new Square(currentSquare.row-2,currentSquare.col-1));
            }
        }
        if(currentSquare.col+2<gameSettings.BOARD_SIZE){
            if(currentSquare.row+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col+2));
            }
            if(currentSquare.row-1>=0){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col+2));
            }
        }
        if(currentSquare.col-2>=0){
            if(currentSquare.row+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col-2));
            }
            if(currentSquare.row-1>=0){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col-2));
            }
        }
        return possibleMoves;
    }
}
