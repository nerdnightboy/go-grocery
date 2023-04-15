import React, { useState } from 'react'
import Navbar from '../../components/navBar/Navbar'
import SingleBanner from '../../components/baner/SingleBanner'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import './ExtraPages.css'

const Contact = () => {
  const [rating, setrating] = useState(0)
  return (
    <div className='extrapage'>
        <Navbar />
        <SingleBanner heading='Contact Us' bannerimage='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>

        <form className='extrapageform'>
          <h1 className='formheading'>Get in Touch</h1>
                <div className='formgroup'>
                  <label htmlFor=''>Name</label>
                  <input type='text' placeholder='Your Name'/>
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Email</label>
                  <input type='email' placeholder='xyz@gmail.com' />
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Contact Number</label>
                  <input type='number' placeholder='+91 XXXXXXXXXX'/>
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Review</label>
                  <textarea name='' id='' cols='30' rows='10' placeholder='Explain your thoughts'></textarea>
                </div>
                


<div className='btn'>

                <button >Submit</button>
</div>
              </form>

        <Footer1 />
        <Footer2 />
        </div>
  )
}

export default Contact