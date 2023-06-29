import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterLogin from './pages/Register_Login'
import Messages from './pages/Messages'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterLogin />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </>
  )
}

export default App
