import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import Navbar from '../../components/navBar/Navbar'
import './ProductPage.css'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import ProductSlider from '../../components/product/ProductSlider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductPage = () => {
  const { productid } = useParams()
  const [imageset, setimageset] = useState(null)
  const [productdata, setproductdata] = useState([])
  const [activeimage, setactiveimage] = useState({})
  const [count, setcount] = useState(1)
  const [showreview, setshowreview] = useState(false)


  const getproductdatabyid = async () => {
    let temp = {
      "code": 200,
      "message": "Success",
      "data": [
        {
          "productId": 1,
          "productName": "Product 1",
          "productDescription": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          "productImage": [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            }
          ],
          "productCode": "P1",
          "productCategory": "Category 1",
          "productSubCategory": "Product Sub-Category 1",
          "productBrand": "Brand 1",
          "productColor": "Color 1",
          "productSize": "Size 1",
          "productWeight": "Weight 1",
          "productMaterial": "Material 1",
          "productQuantity": 5,
          "productUnit": "Unit 1",
          "productPrice": 100,
          "salesPrice": 80,
          "productDiscount": 20,
          "productDiscountType": "Percentage",
          "productTax": 20,
          "productTaxType": "Percentage",
          "productShippingCharge": 20,
          "productShippingTime": "2-5 Days",
          "productShippingTimeType": "Days",
          "productShippingLocation": "Location 1",
          "productShippingLocationType": "Country",
          "productShippingReturnPolicy": "Return Policy 1",
          "productShippingReturnPolicyType": "Days",
          "productShippingReturnPolicyDescription": "Return Policy Description 1",
          "productShippingReturnPolicyDescriptionType": "Days",
          "productReviews" : [
            {
              "reviewid": 1,
              "name" : "Satyam Sahu",
              "email" : "",
              "rating" : 5,
              "date" : "2023-01-04",
              "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",

            },
            {
              "reviewid": 2,
              "name" : "Anupam Mittal",
              "email" : "",
              "rating" : 4,
              "date" : "2023-01-26",
              "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance..",

            },
            {
              "reviewid": 3,
              "name" : "Ashneer Grover",
              "email" : "",
              "rating" : 3,
              "date" : "2023-02-26",
              "review" : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.. Lovely btw.",

            },
          ]
        }
      ]
    }
    if (temp.code == 200) {
      setimageset(temp.data[0].productImage)
      setproductdata(temp.data[0])
      setactiveimage(temp.data[0].productImage[0])
    }
  }

  useEffect(() => {
    getproductdatabyid()
    window.scroll(0,0)
  }, [])

  const [rating, setrating] = useState(0)

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

const[relodenavbar, setrelodenavbar] = useState(false)

const addtocart = () =>{
  let cart = JSON.parse(localStorage.getItem('cart'))
  if(cart){
    // alert('1 item is added to the cart')
    let itemincart = cart.find(item => item.productdata.productId === productdata.productId)
    if(itemincart){
      cart = cart.map(item =>{
        if(item.productdata.productId === productdata.productId){
          return {
            ...item,
            quantity: item.quantity + count
          }
        }
        else{
          return item
        }
      })
      localStorage.setItem('cart',JSON.stringify(cart))
    }
    else{
      cart = [
        ...cart,{
          productdata,
          quantity: count
        }
      ]
      localStorage.setItem('cart',JSON.stringify(cart))
    }
  }
  else{
    cart = [{
      productdata,
      quantity: count
    }]
    // console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  setrelodenavbar(!relodenavbar)
  toast.success('Item added to cart successfully')
  // window.location.relode()
}

  return (
    <div className='productpage'>
      {/* <h1>Product id is - {productid}</h1>
      <p>
        {JSON.stringify(productdata)}
      </p> */}

      <Navbar relodenavbar={relodenavbar} />

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
              imageset && imageset?.map((item, index) => {
                return (
                  <div className='imgsmall' onClick={() => {
                    setactiveimage(item)
                  }}>
                    <img src={item.image} alt='image' className={activeimage.id == item.id ? 'active' : ''} />
                  </div>
                )
              })}
          </div>
          <div className='imgbig'>
            <img src={activeimage.image} alt='' />
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
              <button onClick={() => {
                if (count > 1) {
                  setcount(count - 1)
                }
              }}>-</button>
              <p>{count}</p>
              <button onClick={() => {
                if (count < 10) {
                  setcount(count + 1)
                }
              }}>+</button>
            </div>
          </div>

          <div className='btncont'>
            <button onClick={() => {
              addtocart()
            }}>
              Add to cart
            </button>
            <button onClick={() => {
              alert('Order is Placed redirecting to payment......')
            }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className='pc2'>
        {
          showreview ?
            <div className='tabs'>
              <button className='inactive' onClick={() => {
                setshowreview(false)
              }}>Description</button>
              <button className='active' onClick={() => {
                setshowreview(true)
              }}>Reviews</button>
            </div>
            :
            <div className='tabs'>
              <button className='active' onClick={() => {
                setshowreview(false)
              }}>Description</button>
              <button className='inactive' onClick={() => {
                setshowreview(true)
              }}>Reviews</button>
            </div>
        }
        {
          showreview ?
            <div className='reviewcont'>
              <form>
                <div className='formgroup'>
                  <label htmlFor=''>Name</label>
                  <input type='text' />
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Email</label>
                  <input type='email' />
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Review</label>
                  <textarea name='' id='' cols='30' rows='10'></textarea>
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Rating</label>
                  <div className='rating'>
                    <div className='star' onClick={() => {
                      setrating(1)
                    }}>
                      {
                        rating >= 1 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star' onClick={() => {
                      setrating(2)
                    }}>
                      {
                        rating >= 2 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star' onClick={() => {
                      setrating(3)
                    }}>
                      {
                        rating >= 3 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star' onClick={() => {
                      setrating(4)
                    }}>
                      {
                        rating >= 4 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star' onClick={() => {
                      setrating(5)
                    }}>
                      {
                        rating >= 5 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                  </div>
                </div>



                <button>Submit</button>
              </form>


              <div className='allreview'>
                <h1 className='head1'>Product Reviews</h1>
                {productdata.productReviews && 
                productdata.productReviews.map((item, index) => {
                  return(
                    <div className='review'>
                      <div className='reviewhead'>
                        <p className='name'>{item.name}</p>
                        <div className='rating1'>
                    <div className='star'>
                      {
                        item.rating >= 1 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star'>
                      {
                        item.rating >= 2 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star'>
                      {
                        item.rating >= 3 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star'>
                      {
                        item.rating >= 4 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    <div className='star'>
                      {
                        item.rating >= 5 ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                      }
                    </div>
                    
                  </div>
                        <span className='date'>{item.date}</span>
                      </div>
                      <div className='reviewbody'>
                        {item.review}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            :
            <p className='desc'>{productdata.productDescription}</p>
        }
      </div>

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

export default ProductPage