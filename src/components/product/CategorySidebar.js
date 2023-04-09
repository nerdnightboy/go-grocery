import React from 'react'
import './CategorySidebar.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: image1,
            categoryname: 'Category 1',
        },
        {
            id: 2,
            categoryimage: image2,
            categoryname: 'Category 2',
        },
        {
            id: 3,
            categoryimage: image3,
            categoryname: 'Category 3',
        },
        {
            id: 4,
            categoryimage: image4,
            categoryname: 'Category 4',
        },
    ]
  return (
    <div className='categorysidebar'>
        {
            data.map((items) =>{
                return (
                    <div className='category'>
                    <img src={items.categoryimage} alt='categoryimage' />
                    <p>{items.categoryname}</p>
                </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar