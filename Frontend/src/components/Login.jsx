import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <div className='login-main-container'>
        <div className='login-container'>
            <div className='login-head'>
                Login
            </div>
            <div className='login-body'>
                <div>
                    <label>Email</label>
                    <input placeholder='Email' type='text' autoComplete='random-mail' />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder='Password' type='password' autoComplete='random-pass' />
                </div>
                <div className='centerer'><button>Login</button></div>
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