import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainHeader from './partials/MainHeader'

function App() {

  return (
    <Router>
      <section
        className='flex flex-col justify-start items-center w-screen h-screen bg-gray-900'
      >

        <header
          className='flex w-full h-auto p-2'
        >
          <MainHeader/>
        </header>

        <Routes>
          <Route path='/' element={<Navigate to='/surefund' replace />} />
          <Route path='/surefund' element={<h1>Hello</h1>} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
