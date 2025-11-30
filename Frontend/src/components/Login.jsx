import React, { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const validateEmail = () => {
    if (!email) setEmailError('Email is required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setEmailError('Invalid email address')
    else setEmailError('')
  }

//   const validatePassword = () => {
//     if (!password) setPasswordError('Password is required')
//     else if (password.length < 6) setPasswordError('Password must be at least 6 characters')
//     else setPasswordError('')
//   }

  const handleSubmit = (e) => {
    e.preventDefault()
    validateEmail()
    // validatePassword()
    if(!emailError){
        localStorage.setItem('logged', true)
        navigate('/home')
    }
  }

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <div className='login-head'>
          Login
        </div>
        <div className='login-body'>
          <div>
            <label>Email</label>
            <input 
              placeholder='Email' 
              type='text' 
              autoComplete='random-mail'
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError('')}}
              onBlur={validateEmail}
            />
            {emailError && <span className='error'>{emailError}</span>}
          </div>
          <div>
            <label>Password</label>
            <input 
              placeholder='Password' 
              type='password' 
              autoComplete='random-pass'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            //   onBlur={validatePassword}
            />
            {passwordError && <span className='error'>{passwordError}</span>}
          </div>
          <div className='centerer'><button onClick={handleSubmit}>Login</button></div>
        </div>
        <div className='login-footer'>
          <div>Register</div>
          <div>Forgot Password</div>
        </div>
      </div>
    </div>
  )
}

export default Login