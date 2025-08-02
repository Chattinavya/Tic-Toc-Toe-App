import { useState } from 'react'
import './App.css'
import TicTacToe from './TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TicTacToe/>
    </>
  )
}

export default App
