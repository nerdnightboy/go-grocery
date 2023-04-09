import React from 'react'
import './AllProduct.css'
import ProductCard from './ProductCard'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

const AllProduct = () => {
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
    <div className='allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item) => {
                    return(
                        <ProductCard data={item} key={item.id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProduct