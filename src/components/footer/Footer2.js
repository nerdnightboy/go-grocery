import React from 'react'
import pay from '../../assets/images/pay.png'
import social1 from '../../assets/images/social1.png'
import './Footer2.css'
import logo from '../../assets/logo.png'

const Footer2 = () => {
  return (
    <div className='footer2'>
        <div className='footer2-content1'>
            <div className='f1'>
                <img src={logo} alt='logo' className='logo' />
                <p>Go-grocery is a new leading online grocery service which mainly target to aliens and Avatar Navis. We are committed to provide grocery to every alien on best prices.</p>
                <img src={social1} alt='social1' className='social1' />
            </div>
            <div className='f2'>
                <h3>About Us</h3>
                <p>Contact Us</p>
                <p>Customer Support</p>
                <p>FAQs</p>
            </div>
            <div className='f2'>
                <h3>Our Information</h3>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Return Policy</p>

            </div>
            <div className='f2'>
                <h3>Community</h3>
                <p>Announcements</p>
                <p>Answer Center</p>
                <p>Discussion</p>
                <p>Works</p>
            </div>
            <div className='f2'>
                <h3>Subscribe Us</h3>
                <p>Subscribe your email for getting instant updates.</p>
                <div className='inputcontainer'>
                    <span className='icon1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

                    </span>
                    <input type='email' placeholder='Enter your email' />
                    <span className='icon2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

                    </span>
                </div>
            </div>
        </div>
        <div className='footer2-content2'>
            <h3>&copy; Copyright 2023 Go-Grocery, Inc. All rights reserved</h3>
            <img src={pay} alt='pay' className='pay' />
        </div>
    </div>
  )
}

export default Footer2