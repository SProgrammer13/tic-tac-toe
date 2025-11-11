import { useNavigate } from "react-router-dom";

function StartScreen(params) {
    const navigate = useNavigate();
    function startGame(){
        navigate('/game')
    }
    return (
        <div>
            <h1>Tic tac toe</h1>
            <button onClick={startGame} className="restart-btn">Open game</button>
        </div>
    )
}
export default StartScreen;