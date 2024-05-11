import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TradingPage from './pages/TradingPage'
import CopytradingPage from './pages/CopytradingPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/trading' element={<TradingPage />} />
          <Route path='/copytrading' element={<CopytradingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App