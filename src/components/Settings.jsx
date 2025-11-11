import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGame } from "./GameProvider";

function Settings(){
    const navigate = useNavigate();
    const { timeLimit, setTimeLimit, theme, setTheme } = useGame();
    return (
        
        <div className="input-time">
            <label>Game time limit: </label>
            <input onChange={(e) => setTimeLimit(Number(e.target.value))} type="number" min="10" max='90'/>
        </div>
    )
}
export default Settings;