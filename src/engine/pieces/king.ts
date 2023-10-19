import Piece from './piece';
import Player from '../player';
import Board from '../board';
import gameSettings from "../gameSettings";
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        if(currentSquare.row+1<gameSettings.BOARD_SIZE){
            possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col))
            if(currentSquare.col+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col+1))
            }
            if(currentSquare.col-1>=0){
                possibleMoves.push(new Square(currentSquare.row+1,currentSquare.col-1))
            }
        }
        if(currentSquare.row-1>=0){
            possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col))
            if(currentSquare.col+1<gameSettings.BOARD_SIZE){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col+1))
            }
            if(currentSquare.col-1>=0){
                possibleMoves.push(new Square(currentSquare.row-1,currentSquare.col-1))
            }
        }
        if(currentSquare.col+1<gameSettings.BOARD_SIZE){
            possibleMoves.push(new Square(currentSquare.row,currentSquare.col+1))
        }
        if(currentSquare.col-1>=0){
            possibleMoves.push(new Square(currentSquare.row,currentSquare.col-1))
        }
        return possibleMoves;
    }
}
