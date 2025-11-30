import { useEffect, useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import LoginFooter from './components/LoginFooter'
import MainHeader from './components/MainHeader'
import HomeDashboard from './pages/HomeDashboard'

function App() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged'))
    if (logged) navigate('/home')
    else navigate('/login')
    // navigate('/login')
  }, [])
  return (
    <div className='app'>
    {location.pathname === '/login'
    ? <div className='backgroundImage'></div>
    : <div></div>}
    <div className='main-container'>
      {location.pathname === '/login'
      ? <Header/>
      : null}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element= {<HomeDashboard />} />
      </Routes>
      {location.pathname === '/login'
       ? <LoginFooter/>
       : <></> }
    </div>
    </div>
  )
}

export default App
