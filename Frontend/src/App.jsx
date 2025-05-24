import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MainHeader from './partials/MainHeader'
import CaptureRouter from './pages/Capture/CaptureRouter'

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
          <Route path='/surefund/*' element={<CaptureRouter/>} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
