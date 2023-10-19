import Player from '../player';
import Board from '../board';
import Square from '../square';

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

    public checkMoveConflicts(board: Board, possibleMoves: Square[], currentSquare: Square){
        const occupiedSquares: Square[] = []
        for (let square of possibleMoves){
            if(board.getPiece(square) != null){
                possibleMoves.splice(possibleMoves.indexOf(square),1)
                occupiedSquares.push(square)
            }
        }
        return [possibleMoves,occupiedSquares];
    }
}
