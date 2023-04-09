import React from 'react'
import Navbar from '../components/navBar/Navbar'
import BannerSlider from '../components/baner/BannerSlider'
import HomeCatagories from '../components/category/HomeCatagories'
import ProductSidebar from '../components/product/ProductSidebar'


const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCatagories />
      <ProductSidebar />
    </div>
  )
}

export default Home