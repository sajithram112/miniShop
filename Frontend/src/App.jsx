import { useEffect, useState } from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import LoginFooter from './components/LoginFooter'
import HomeDashboard from './pages/HomeDashboard'
import { language } from '../service/userService'
import i18n from './helper/i18n'
import { ToastContainer } from 'react-toastify'

function App() {
  const { t } = useTranslation()
  const [langReady, setLangReady] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged'))
    initFields()
    if (logged) navigate('/home')
    else navigate('/login')
  }, [])

  const initFields = async () => {
    await getLanguageAndSet()
    setLangReady(true)
  }

  const getLanguageAndSet = async () => {
    const result = await language()
    if (result.status) {
      const langArray = result.data
      const en = {}
      const sv = {}
      langArray.forEach(item => {
        en[item.key_name] = item.en
        sv[item.key_name] = item.sv
      })
      i18n.addResourceBundle('en', 'translation', en, true, true)
      i18n.addResourceBundle('sv', 'translation', sv, true, true)
    }
  }

  if (!langReady) return null

  return (
    <div className='app'>
      {location.pathname === '/login'
        ? <div className='backgroundImage'></div>
        : <div></div>}
      <div className='main-container'>
        {location.pathname === '/login'
          ? <Header />
          : null}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomeDashboard />} />
        </Routes>
        {location.pathname === '/login'
          ? <LoginFooter />
          : <></>}
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
