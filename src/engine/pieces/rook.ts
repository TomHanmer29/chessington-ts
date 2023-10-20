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
        let blockFlags = [false,false,false,false]
        for (let squareNum = 1; this.checkIsInBoard(squareNum); squareNum++) {
            if(this.checkIsInBoard(currentSquare.row+squareNum)){
                if(board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col))===undefined && !blockFlags[0]) {
                    possibleMoves.push(new Square(currentSquare.row + squareNum, currentSquare.col))
                }
                else if(board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col))?.player != this.player && !blockFlags[0]
                && !board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col))?.isKing()){
                    possibleMoves.push(new Square(currentSquare.row + squareNum, currentSquare.col))
                    blockFlags[0] = true
                }
                else{
                    blockFlags[0] = true
                }
            }
            if(this.checkIsInBoard(currentSquare.row-squareNum)){
                if(board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col))===undefined && !blockFlags[1]) {
                    possibleMoves.push(new Square(currentSquare.row-squareNum, currentSquare.col))
                }
                else if(board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col))?.player != this.player && !blockFlags[1]
                    && !board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col))?.isKing()){
                    possibleMoves.push(new Square(currentSquare.row - squareNum, currentSquare.col))
                    blockFlags[1] = true
                }
                else{
                    blockFlags[1] = true
                }
            }
            if(this.checkIsInBoard(currentSquare.col+squareNum)){
                if(board.getPiece(Square.at(currentSquare.row,currentSquare.col+squareNum))===undefined && !blockFlags[2]) {
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col+squareNum))
                }
                else if(board.getPiece(Square.at(currentSquare.row,currentSquare.col+squareNum))?.player != this.player && !blockFlags[2]
                    && !board.getPiece(Square.at(currentSquare.row,currentSquare.col+squareNum))?.isKing()){
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col+squareNum))
                    blockFlags[2] = true
                }
                else{
                    blockFlags[2] = true
                }
            }
            if(this.checkIsInBoard(currentSquare.col-squareNum)){
                if(board.getPiece(Square.at(currentSquare.row,currentSquare.col-squareNum))===undefined && !blockFlags[3]) {
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col-squareNum))
                }
                else if(board.getPiece(Square.at(currentSquare.row,currentSquare.col-squareNum))?.player != this.player && !blockFlags[3]
                    && !board.getPiece(Square.at(currentSquare.row,currentSquare.col-squareNum))?.isKing()){
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col-squareNum))
                    blockFlags[3] = true
                }
                else{
                    blockFlags[3] = true
                }
            }
        }
        return possibleMoves;
    }

    public isKing(){
        return false
    }
}
