import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        if (this.player===Player.WHITE) {
            if(this.checkIsInBoard(currentSquare.row+1)){
                possibleMoves.push(new Square(currentSquare.row + 1, currentSquare.col));
            }
            if (currentSquare.row == 1) {
                possibleMoves.push(new Square(currentSquare.row + 2, currentSquare.col));
            }
        } else {
            if(this.checkIsInBoard(currentSquare.row-1)){
                possibleMoves.push(new Square(currentSquare.row - 1, currentSquare.col));
            }
            if (currentSquare.row == 6) {
                possibleMoves.push(new Square(currentSquare.row - 2, currentSquare.col));
            }
        }
        return this.checkMoveConflicts(board,possibleMoves, currentSquare);
    }

    public isKing(){
        return false
    }

    public checkMoveConflicts(board: Board, possibleMoves: Square[],currentSquare: Square) {
        let occupiedMoves = super.checkMoveConflicts(board, possibleMoves, currentSquare);
        let newPossibleMoves = possibleMoves.filter((square) => !occupiedMoves.includes(square));
        //if there is a piece in front, remove all possible moves
        for(let square of occupiedMoves){
            if(Math.abs(square.squareDiff(currentSquare)[0])==1){
                newPossibleMoves = []
            }
        }
        return newPossibleMoves
    }
}
