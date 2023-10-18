import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        for (let rowNum = currentSquare.row; rowNum < gameSettings.BOARD_SIZE; rowNum++) {
            for (let colNum = currentSquare.col; colNum < gameSettings.BOARD_SIZE; colNum++) {
               if()
            }
        }
        return possibleMoves;
    }
}
