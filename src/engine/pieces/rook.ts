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
        for (let squareNum = 0; squareNum < gameSettings.BOARD_SIZE; squareNum++) {
            if(squareNum!=currentSquare.row){
                possibleMoves.push(new Square(squareNum, currentSquare.col));
            }
            if(squareNum!=currentSquare.col){
                possibleMoves.push(new Square(currentSquare.row, squareNum));
            }
        }
        return possibleMoves;
    }
}
