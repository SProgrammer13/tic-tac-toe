import { useState } from 'react'
import Square from './Square'


function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNextX, setIsNextX] = useState(true)

    function squareClickCheck(index){
        if(squares[index]!=null) return;
        const squaresNew = squares.slice();
        squaresNew[index] = isNextX ? 'X': '0'
         setSquares(squaresNew)
        setIsNextX(!isNextX)
        checkWinner(squaresNew)
    }
    function checkWinner(squares){
        const winnerLines = [
            [0, 1, 2],  
            [3, 4, 5],  
            [6, 7, 8],
            [0, 3, 6],  
            [1, 4, 7],  
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6], 
        ];
        for (const line of winnerLines){
            if(squares[line[0]] && squares[line[0]] === squares[line[1]] && squares[line[0]] === squares[line[2]]){
                alert(squares[line[0]] + 'won!')
            }
        }

    }

    return (
        <div className='board'>
             <h1>Tic-tac-toe</h1>
            <div className="row one">
                <Square value={squares[0]} squareClickCheck={() => squareClickCheck(0)}></Square>
                <Square value={squares[1]} squareClickCheck={() => squareClickCheck(1)}></Square>
                <Square value={squares[2]} squareClickCheck={() => squareClickCheck(2)}></Square>
            </div>
            <div className="row two">
                <Square value={squares[3]} squareClickCheck={() => squareClickCheck(3)}></Square>
                <Square value={squares[4]} squareClickCheck={() => squareClickCheck(4)}></Square>
                <Square value={squares[5]} squareClickCheck={() => squareClickCheck(5)}></Square>
            </div>
            <div className="row three">
                <Square value={squares[6]} squareClickCheck={() => squareClickCheck(6)}></Square>
                <Square value={squares[7]} squareClickCheck={() => squareClickCheck(7)}></Square>
                <Square value={squares[8]} squareClickCheck={() => squareClickCheck(8)}></Square>
            </div>
            <div className="player-box">
                <div className='player one'>Player 1</div>
                <div className='player two'>Player 2</div>
            </div>
        </div>
    )
}

export default Board;