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
        for (let rowNum = 0; rowNum < gameSettings.BOARD_SIZE; rowNum++) {
            if(rowNum!=currentSquare.row){
                possibleMoves.push(new Square(rowNum, currentSquare.col));
            }
        }
        for (let colNum = 0; colNum < gameSettings.BOARD_SIZE; colNum++) {
            if(colNum!=currentSquare.col){
                possibleMoves.push(new Square(currentSquare.row, colNum));
            }
        }
        return possibleMoves;
    }
}
