import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './components/StudentCard'
import student from './data/student';
import { Button } from '@mui/material'
import Layout from './layout/Layout'
import { Toolbar } from '@mui/material'

function App(children) {
  return (
    <>
      <section id="center">
        <Layout>
          <Toolbar />
          <StudentCard student={student} />
        </Layout>
      </section>
    </>
  )
}

export default App
