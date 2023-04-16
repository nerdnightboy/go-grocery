import React from 'react'
import Navbar from '../../components/navBar/Navbar'

import { Link } from 'react-router-dom'
import './AuthPage.css'

const Login = () => {
  return (
    <div className='authpage'>
      <Navbar relodenavbar={false} />


      <div className='authcont'>
        <img src='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='login' />
      

      <form className='authform'>
          <h1>Login</h1>
          <div className='formgroup'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='xyz@gmail.com' />
          </div>
          <div className='formgroup'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Give a strong password' />
          </div>

          <Link to='/forgotpassword' className='stylenone'>
            <p>Forgot password?</p>
          </Link>
          <Link to='/' className='stylenone'>
          <button className='btn'>Login</button>
          </Link>
          <h2 className='or'>OR</h2>
          <Link to='/signup' className='stylenone'>
          <button className='btn'>Sign up</button>
          </Link>
      </form>
      </div>

    </div>
  )
}

export default Login