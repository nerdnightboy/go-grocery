import React from 'react'
import image5 from '../../assets/images/image5.png'
import './Footer1.css'

const Footer1 = () => {
  return (
    <div className='footer1'>
        <div className='left'>
            <img src={image5} alt='image5' />
        </div>
        <div className='right'>
            <h1>Aliens are our Premium Members</h1>
            <p>We have the best and fresh vegetables and fruites. Branded groceries on minimum price.</p>
        </div>
    </div>
  )
}

export default Footer1