import Player from '../player';
import Board from '../board';
import Square from '../square';
import gameSettings from "../gameSettings";

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    public checkIsInBoard(currentValue: number){
        return(currentValue < gameSettings.BOARD_SIZE && currentValue>=0);
    }

    public checkMoveConflicts(board: Board, possibleMoves: Square[], currentSquare: Square){
        return possibleMoves.filter((square) => board.getPiece(square) != null);
    }
}
