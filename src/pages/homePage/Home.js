import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import BannerSlider from '../../components/baner/BannerSlider'
import HomeCatagories from '../../components/category/HomeCatagories'
import ProductSidebar from '../../components/product/ProductSidebar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'


const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <HomeCatagories />
      <ProductSidebar />
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home