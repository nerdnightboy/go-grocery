import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import './AuthPage.css'
import { Link } from 'react-router-dom'

const ForgotPass = () => {
  return (
<div className='authpage'>
    <Navbar relodenavbar={false} />


    <div className='authcont'>
      <img src='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='signup' />
    

    <form className='authform'>
        <div className='pass'>
        <h1>New Password</h1>
        
        </div>
        <div className='formgroup'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='xyz@gmail.com' />
        </div>
        <div className='form-group-row'>
        <div className='formgroup'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Give a strong password' />
        </div>
        <div className='formgroup'>
          <label htmlFor='password'>Confirm New Password</label>
          <input type='password' id='password' placeholder='Must be same as password' />
        </div>
        </div>

        <Link to='/login' className='stylenone'>
          <p>Oh! Just remind password! No worry, login again.</p>
        </Link>
        <Link to='/' className='stylenone'>
        <button className='btn'>Verify</button>
        </Link>
        
    </form>
    </div>

  </div>
  )
}

export default ForgotPass