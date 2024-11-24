import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Q1 from './components/Q1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Coding Questions</h1>
      <Q1/>
    </>
  )
}

export default App
