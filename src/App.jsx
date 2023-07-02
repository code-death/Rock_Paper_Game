import './App.css'
import Header from './components/Header'
import Selector from './components/Selector'
import Rules from './components/Rules'
import { useState, useEffect } from 'react'

function App() {
const [score, setScore] = useState(0)

let handleScoreChange = (e) => {
  setScore(score + e)
};

  return (
    <>
      <Rules />
      <Header score={score} />
      <Selector setScore={handleScoreChange} />
    </>
  )
}

export default App
