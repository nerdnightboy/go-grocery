import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import './AuthPage.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='authpage'>
    <Navbar relodenavbar={false} />


    <div className='authcont'>
      <img src='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='signup' />
    

    <form className='authform'>
        <h1>Sign up</h1>
        <div className='form-group-row'>
        <div className='formgroup'>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' placeholder='First Name' />
        </div>
        <div className='formgroup'>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' placeholder='Last Name' />
        </div>
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
          <label htmlFor='password'>Confirm Password</label>
          <input type='password' id='password' placeholder='Must be same as password' />
        </div>
        </div>

        <Link to='/login' className='stylenone'>
          <p>Already have an account?</p>
        </Link>
        <Link to='/' className='stylenone'>
        <button className='btn'>Sign up</button>
        </Link>
        
    </form>
    </div>

  </div>
  )
}

export default SignUp