import { useState } from 'react'

function Square({value, squareClickCheck}){
    return (
        <div className='square' onClick={squareClickCheck}>{value}</div>
    )
}

export default Square;
