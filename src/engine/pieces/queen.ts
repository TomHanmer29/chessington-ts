import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import gameSettings from "../gameSettings";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const possibleMoves: Square[] = []
        let blockFlags = [false,false,false,false,false,false,false,false]
        for (let squareNum = 1; this.checkIsInBoard(squareNum); squareNum++) {
            if(this.checkIsInBoard(currentSquare.row+squareNum)){
                if(board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col))===undefined && !blockFlags[0]) {
                    possibleMoves.push(new Square(currentSquare.row + squareNum, currentSquare.col))
                }
                else{
                    blockFlags[0] = true
                }
                if(this.checkIsInBoard(currentSquare.col+squareNum)){
                    if(board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col+squareNum))===undefined && !blockFlags[4]) {
                        possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col+squareNum));
                    }
                    else{
                        blockFlags[4]=true
                    }
                }
                if(this.checkIsInBoard(currentSquare.col-squareNum)){
                    if(board.getPiece(Square.at(currentSquare.row+squareNum,currentSquare.col-squareNum))===undefined && !blockFlags[5]) {
                        possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col-squareNum));
                    }
                    else{
                        blockFlags[5]=true
                    }
                }
            }
            if(this.checkIsInBoard(currentSquare.row-squareNum)){
                if(board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col))===undefined && !blockFlags[1]) {
                    possibleMoves.push(new Square(currentSquare.row-squareNum, currentSquare.col))
                }
                else{
                    blockFlags[1] = true
                }
                if(this.checkIsInBoard(currentSquare.col+squareNum)){
                    if(board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col+squareNum))===undefined && !blockFlags[6]) {
                        possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col+squareNum));
                    }
                    else{
                        blockFlags[6]=true
                    }
                }
                if(this.checkIsInBoard(currentSquare.col-squareNum)){
                    if(board.getPiece(Square.at(currentSquare.row-squareNum,currentSquare.col-squareNum))===undefined && !blockFlags[7]) {
                        possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col-squareNum));
                    }
                    else{
                        blockFlags[7]=true
                    }
                }
            }
            if(this.checkIsInBoard(currentSquare.col+squareNum)){
                if(board.getPiece(Square.at(currentSquare.row,currentSquare.col+squareNum))===undefined && !blockFlags[2]) {
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col+squareNum))
                }
                else{
                    blockFlags[2] = true
                }
            }
            if(this.checkIsInBoard(currentSquare.col-squareNum)){
                if(board.getPiece(Square.at(currentSquare.row,currentSquare.col-squareNum))===undefined && !blockFlags[3]) {
                    possibleMoves.push(new Square(currentSquare.row, currentSquare.col-squareNum))
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
