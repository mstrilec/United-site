import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import CopytradingPage from './pages/CopytradingPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/copytrading' element={<CopytradingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App