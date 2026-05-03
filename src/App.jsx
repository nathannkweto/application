import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ButtonA, ButtonB } from './components/Buttons'
import StudentCard from './components/StudentCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <StudentCard />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
