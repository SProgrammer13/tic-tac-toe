import { useState } from 'react'
import { useEffect } from 'react';
import Square from './Square'
import Modal from './Modal'


function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNextX, setIsNextX] = useState(true)
    const [stopGame, setStopGame] = useState(false)
    const [winner, setWinner] = useState('')
    const [startGame, setStartGame] = useState(false)
    let timer = 60;
    const [time, setTime] = useState(timer)


    function squareClickCheck(index){
        if(!startGame) return;
        if(squares[index]!=null) return;
        const squaresNew = squares.slice();
        squaresNew[index] = isNextX ? 'X': '0'
        setIsNextX(!isNextX)
        setSquares(squaresNew)
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
                setWinner(squares[line[0]])
                setStopGame(true)
            }
        }
        if(squares.every(square => square!=null)){
            setStopGame(true)
        }
             
    }

    function playerChoise(event){
        if(startGame) return;
        const div = event.target;
       if(div.className.includes('player one')){
        setIsNextX(true);
       }
       if(div.className.includes('player two')){
        setIsNextX(false);
       }
        setStartGame(true)
    }

    useEffect(() => {
        if(startGame){
            setInterval(() => {
            setTime(current => current-1)
        }, 1000)
       }})


    function restartGame(){
         setSquares(Array(9).fill(null))
         setStopGame(false)
         setIsNextX(true)
         setWinner('')
         setStartGame(false)
    }


    return (
        <div className='board'>
             <h1>Tic-tac-toe</h1>
             <div className='timer'>{time}</div>
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
            <div>{!startGame && <h3>Choose your sign!</h3>}</div>
            <div className="player-box">
                <div onClick={playerChoise} className={`player one ${isNextX ? 'active' : ''}`}>Player X</div>
                <div onClick={playerChoise} className={`player two ${!isNextX ? 'active' : ''}`}>Player O</div>
            </div>
            <Modal winner={winner} showWindow={stopGame} onBtnClick={restartGame}></Modal>
        </div>
    )
}

export default Board;