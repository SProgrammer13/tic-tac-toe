import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import StartScreen from './components/StartScreen'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<StartScreen></StartScreen>}></Route>
      <Route path='/game' element={<Board></Board>}></Route>
    </Routes>
  )
}

export default App
