import { Children } from "react";
import { createContext, useContext, useState } from "react";

const GameContext = createContext();

function GameProvider({children}){
    const [timeLimit, setTimeLimit] = useState(30);
    const [theme, setTheme] = useState('dark');

    return( 
         <GameContext.Provider value={{timeLimit, setTimeLimit, theme, setTheme}}>
            {children}
         </GameContext.Provider>
        )
}

export default GameProvider;

export function useGame(){
    return useContext(GameContext);
}