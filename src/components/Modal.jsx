function Modal({winner, showWindow, onBtnClick}){
    if(!showWindow) return;

    return (
        <div className="overlay">
            <div className="modal-window">
                <h2>Game is finished!</h2>
                <p>
                    {winner != '' ? `Winner is ${winner}!` : 'Tie!'}
                </p>
                <button className="restart-btn" onClick={onBtnClick}>Play again</button>
            </div>
        </div>
    )
}


export default Modal;