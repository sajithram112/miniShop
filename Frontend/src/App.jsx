import { useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import LoginFooter from './components/LoginFooter'

function App() {
  const [count, setCount] = useState(0)
  const {t} = useTranslation()

  return (
    <div className='app'>
    <div className='backgroundImage'></div>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <LoginFooter/>
    </div>
  )
}

export default App
