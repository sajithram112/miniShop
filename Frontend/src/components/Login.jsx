import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../service/userService'
import { toaster } from '../helper/commonhelper'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()
  const { t } = useTranslation()

  const validateEmail = () => {
    if (!email) setEmailError('Email is required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setEmailError('Invalid email address')
    else setEmailError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateEmail()
    // validatePassword()
    if(!emailError){
      const params = { email, password }
      const result = await login(params)
      if(result.status) {
        toaster('Log in success', 'success')
        navigate('/home')
        localStorage.setItem('logged', true)
      } else {
        switch(result.type) {
          case 'error':
            toaster('Something went wrong, try again later', 'error')
            break
          case 'user_not_found':
            toaster('invalid credentials', 'error')
            break
          default:
            toaster('Something went wrong, try again later', 'error')
        }
      }
    }
  }

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <div className='login-head'>
          {t('login_page')}
        </div>
        <div className='login-body'>
          <div>
            <label>{t('email_placeholder')}</label>
            <input 
              placeholder={t('email_placeholder')} 
              type='text' 
              autoComplete='random-mail'
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError('')}}
              onBlur={validateEmail}
            />
            {emailError && <span className='error'>{emailError}</span>}
          </div>
          <div>
            <label>{t('password_placeholder')}</label>
            <input 
              placeholder={t('password_placeholder')} 
              type='password' 
              autoComplete='random-pass'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            //   onBlur={validatePassword}
            />
            {passwordError && <span className='error'>{passwordError}</span>}
          </div>
          <div className='centerer'><button onClick={handleSubmit}>{t('login_button')}</button></div>
        </div>
        <div className='login-footer'>
          <div>{t('register_link')}</div>
          <div>{t('forgotten_password_link')}</div>
        </div>
      </div>
    </div>
  )
}

export default Login