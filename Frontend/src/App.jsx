import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Router>
      <section
        className='flex flex-col justify-start items-center w-screen h-screen'
      >

        <Routes>
          <Route path='/' element={<Navigate to='/surefund' replace />} />
          <Route path='/surefund' element={<h1>Hello</h1>} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
