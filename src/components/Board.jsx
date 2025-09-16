import { useState } from 'react'
import Square from './Square'


function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))

    function squareClickCheck(index){

    }

    return (
        <div className='board'>
            <div className="row">
                <Square value={squares[0]} squareClickCheck={() => squareClickCheck(0)}></Square>
                <Square value={squares[1]} squareClickCheck={() => squareClickCheck(1)}></Square>
                <Square value={squares[2]} squareClickCheck={() => squareClickCheck(2)}></Square>
            </div>
            <div className="row">
                <Square value={squares[3]} squareClickCheck={() => squareClickCheck(3)}></Square>
                <Square value={squares[4]} squareClickCheck={() => squareClickCheck(4)}></Square>
                <Square value={squares[5]} squareClickCheck={() => squareClickCheck(5)}></Square>
            </div>
            <div className="row">
                <Square value={squares[6]} squareClickCheck={() => squareClickCheck(6)}></Square>
                <Square value={squares[7]} squareClickCheck={() => squareClickCheck(7)}></Square>
                <Square value={squares[8]} squareClickCheck={() => squareClickCheck(8)}></Square>
            </div>
        </div>
    )
}

export default Board;