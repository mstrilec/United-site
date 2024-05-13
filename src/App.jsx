import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import TradingPage from './pages/TradingPage'
import CopytradingPage from './pages/CopytradingPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/trading' element={<TradingPage />} />
          <Route path='/copytrading' element={<CopytradingPage/>}/>
        </Routes>
        <ToastContainer
          position="top-right"
          theme="dark"
          pauseOnHover={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App