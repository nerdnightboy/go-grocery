import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import Navbar from '../../components/navBar/Navbar'
import './ProductPage.css'

const ProductPage = () => {
  const {productid} = useParams()
  const [imageset, setimageset] = useState(null)
  const [productdata, setproductdata] = useState([])
  const [activeimage, setactiveimage] = useState({})
  const [count, setcount] = useState(1)


  const getproductdatabyid = async () => {
    let temp = {
      "code":200,
      "message":"Success",
      "data":[
        {
          "productId":1,
          "productName":"Product 1",
          "productDescription":"Product 1 description",
          "productImage":[
            {
              id :1,
              image : image1,
            },
            {
              id :2,
              image : image2,
            },
            {
              id :3,
              image : image3,
            }
          ],
          "productCode":"P1",
          "productCategory":"Category 1",
          "productSubCategory":"Product Sub-Category 1",
          "productBrand":"Brand 1",
          "productColor":"Color 1",
          "productSize":"Size 1",
          "productWeight":"Weight 1",
          "productMaterial":"Material 1",
          "productQuantity": 5,
          "productUnit":"Unit 1",
          "productPrice":100,
          "salesPrice":80,
          "productDiscount":20,
          "productDiscountType":"Percentage",
          "productTax":20,
          "productTaxType":"Percentage",
          "productShippingCharge":20,
          "productShippingTime":"2-5 Days",
          "productShippingTimeType":"Days",
          "productShippingLocation":"Location 1",
          "productShippingLocationType":"Country",
          "productShippingReturnPolicy":"Return Policy 1",
          "productShippingReturnPolicyType":"Days",
          "productShippingReturnPolicyDescription":"Return Policy Description 1",
          "productShippingReturnPolicyDescriptionType":"Days",
        }
      ]
    }
    if(temp.code == 200){
      setimageset(temp.data[0].productImage)
      setproductdata(temp.data[0])
      setactiveimage(temp.data[0].productImage[0])
    }
  }

  useEffect(() => {
    getproductdatabyid()
  }, [])
  return (
    <div className='productpage'>
      {/* <h1>Product id is - {productid}</h1>
      <p>
        {JSON.stringify(productdata)}
      </p> */}

      <Navbar />

      <div className='pc1'>
        <Link to='/'>
          <button className='goback'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
Go Back
          </button>
        </Link>
        <div className='c11'>
          <div className='imgset'>
            {
              imageset && imageset?.map((item, index) =>{
                return(
                  <div className='imgsmall' onClick={() => {
                    setactiveimage(item)
                  }}>
                    <img src={item.image} alt='image' className={activeimage.id == item.id ? 'active' : ''}/>
                  </div>
                )
              })}
          </div>
          <div className='imgbig'>
            <img src={activeimage.image} alt=''/>
          </div>
        </div>
        <div className='c12'>
          <h1 className='head1'>{productdata.productName}</h1>
          <div className='c121'>
            <p className='price'>
              ${productdata.salesPrice * count}
              <span>${productdata.productPrice * count}</span>
            </p>
            <div className='incrdecr'>
              <button onClick={() =>{
                if(count>1){
                  setcount(count-1)
                }
              }}>-</button>
              <p>{count}</p>
              <button onClick={() =>{
                if(count<10){
                  setcount(count+1)
                }
              }}>+</button>
            </div>
          </div>

          <div className='btncont'>
          <button onClick={() => {
            alert('Added to cart')
          }}>
            Add to Cart
          </button>
          <button onClick={() => {
            alert('Order is Placed redirecting to payment......')
          }}>
            Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage