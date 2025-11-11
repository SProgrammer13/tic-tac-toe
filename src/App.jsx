import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import StartScreen from './components/StartScreen'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import GameProvider from './components/GameProvider'
import Settings from './components/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GameProvider>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartScreen></StartScreen>}></Route>
      <Route path='/game' element={<Board></Board>}></Route>
      <Route path='/settings' element={<Settings></Settings>}></Route>
    </Routes>
    </BrowserRouter>
    </GameProvider>
  )
}

export default App
