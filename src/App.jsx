import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ButtonA, ButtonB } from './components/Buttons'
import StudentCard from './components/StudentCard'
import student from './data/student';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
          <StudentCard student={student}/>
      </section>
    </>
  )
}

export default App
