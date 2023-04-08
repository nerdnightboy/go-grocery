import React from 'react'
import './HomeCategories.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

const HomeCatagories = () => {
  return (
    <div className='homecategories'>
        <div className='container'>
            <img src={image1} alt='image1' />
            <div className='content'>
                <h1>Grocery</h1>
                <span>Shop your home grocery now</span>
            </div>
        </div>
        <div className='container'>
            <img src={image2} alt='image2' />
            <div className='content'>
                <h1>Doorstep</h1>
                <span>Order items to your doorstep</span>
            </div>
        </div>
        <div className='container'>
            <img src={image3} alt='image3' />
            <div className='content'>
                <h1>Fruits</h1>
                <span>Get the best quality fresh food</span>
            </div>
        </div>
        <div className='container'>
            <img src={image4} alt='image4' />
            <div className='content'>
                <h1>Vegetables</h1>
                <span>Buy healthy and fresh vegetables</span>
            </div>
        </div>
    </div>
  )
}

export default HomeCatagories