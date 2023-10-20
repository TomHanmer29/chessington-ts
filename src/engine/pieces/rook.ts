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
        let blockFlags = [false, false, false, false]
        let squareToCheck: Square
        for (let squareNum = 1; this.checkIsInBoard(squareNum); squareNum++) {
            if (this.checkIsInBoard(currentSquare.row + squareNum) && !blockFlags[0]) {
                squareToCheck = Square.at(currentSquare.row + squareNum, currentSquare.col)
                blockFlags[0] = this.canSpaceBeMovedTo(board, squareToCheck, possibleMoves)
            }
            if (this.checkIsInBoard(currentSquare.row - squareNum) && !blockFlags[1]) {
                squareToCheck = Square.at(currentSquare.row - squareNum, currentSquare.col)
                blockFlags[1] = this.canSpaceBeMovedTo(board, squareToCheck, possibleMoves)
            }
            if (this.checkIsInBoard(currentSquare.col + squareNum) && !blockFlags[2]) {
                squareToCheck = Square.at(currentSquare.row, currentSquare.col + squareNum)
                blockFlags[2] = this.canSpaceBeMovedTo(board, squareToCheck, possibleMoves)
            }
            if (this.checkIsInBoard(currentSquare.col - squareNum) && !blockFlags[3]) {
                squareToCheck = Square.at(currentSquare.row, currentSquare.col - squareNum)
                blockFlags[3] = this.canSpaceBeMovedTo(board, squareToCheck, possibleMoves)
            }
        }
        return possibleMoves;
    }

    public isKing() {
        return false
    }

    public canSpaceBeMovedTo(board: Board, squareToCheck: Square, possibleMoves: Square[]) {
        let blockFlag = false
        if (board.getPiece(squareToCheck) === undefined) {
            possibleMoves.push(squareToCheck)
        } else if (board.getPiece(squareToCheck)?.player != this.player && !board.getPiece(squareToCheck)?.isKing()) {
            possibleMoves.push(squareToCheck)
            blockFlag = true
        } else {
            blockFlag = true
        }
        return blockFlag
    }
}
