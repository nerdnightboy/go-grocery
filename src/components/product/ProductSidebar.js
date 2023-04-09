import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './ProductSidebar.css'

const ProductSidebar = () => {
  return (
    <div className='productsidebar'>
        <CategorySidebar />
        <AllProduct />
    </div>
  )
}

export default ProductSidebar