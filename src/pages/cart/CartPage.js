import React from 'react'
import './CartPage.css'
import Navbar from '../../components/navBar/Navbar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import SingleBanner from '../../components/baner/SingleBanner'

const CartPage = () => {
  return (
    <div>
    <Navbar relodenavbar={false} />
    <SingleBanner heading='My Cart' bannerimage='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>

    <Footer1 />
    <Footer2 />
    </div>
  )
}

export default CartPage