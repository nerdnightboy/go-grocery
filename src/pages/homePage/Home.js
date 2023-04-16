import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import BannerSlider from '../../components/baner/BannerSlider'
import HomeCatagories from '../../components/category/HomeCatagories'
import ProductSidebar from '../../components/product/ProductSidebar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import ProductSlider from '../../components/product/ProductSlider'


const Home = () => {

  const products = [
    {
        id:1,
        productimage:image1,
        productname: 'Product 1',
        productprice: 50,
        counttype:'1 each',
        discountpercent: 10,
    },
    {
        id:2,
        productimage:image2,
        productname: 'Product 2',
        productprice: 150,
        counttype:'10 gram',
        discountpercent: 14,
    },
    {
        id:3,
        productimage:image3,
        productname: 'Product 3',
        productprice: 99,
        counttype:'1 pack',
        discountpercent: 8,
    },
    {
        id:4,
        productimage:image4,
        productname: 'Product 4',
        productprice: 500,
        counttype:'1 kg',
        discountpercent: 80,
    }
]

  return (
    <div>
      <Navbar relodenavbar={false} />
      <BannerSlider />
      <HomeCatagories />
      <ProductSidebar />
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='Related Product' />
      </div>
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='Explore More' />
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default Home