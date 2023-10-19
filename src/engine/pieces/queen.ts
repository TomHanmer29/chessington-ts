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
        for (let squareNum = 0; squareNum < gameSettings.BOARD_SIZE; squareNum++) {
            if(squareNum!=currentSquare.row){
                possibleMoves.push(new Square(squareNum, currentSquare.col));
            }
            if(squareNum!=currentSquare.col){
                possibleMoves.push(new Square(currentSquare.row, squareNum));
            }
            if(squareNum>0){
                if(currentSquare.row+squareNum<gameSettings.BOARD_SIZE){
                    if(currentSquare.col+squareNum<gameSettings.BOARD_SIZE){
                        possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col+squareNum));
                    }
                    if(currentSquare.col-squareNum>=0){
                        possibleMoves.push(new Square(currentSquare.row+squareNum,currentSquare.col-squareNum));
                    }
                }
                if(currentSquare.row-squareNum>=0){
                    if(currentSquare.col+squareNum<gameSettings.BOARD_SIZE){
                        possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col+squareNum));
                    }
                    if(currentSquare.col-squareNum>=0){
                        possibleMoves.push(new Square(currentSquare.row-squareNum,currentSquare.col-squareNum));
                    }
                }
            }
    }
        return possibleMoves;
    }
}
