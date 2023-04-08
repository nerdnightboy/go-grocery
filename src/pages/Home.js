import React from 'react'
import Navbar from '../components/navBar/Navbar'
import BannerSlider from '../components/baner/BannerSlider'
import HomeCatagories from '../components/category/HomeCatagories'


const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCatagories />
      Home
    </div>
  )
}

export default Home