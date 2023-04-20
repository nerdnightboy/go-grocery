import React, { useEffect, useState } from 'react'
import './CartPage.css'
import Navbar from '../../components/navBar/Navbar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import SingleBanner from '../../components/baner/SingleBanner'
import './Progress.css'
import './CartPageContainer.css'
import { Link } from 'react-router-dom'



const CartPage = () => {

  const [cartdata, setcartdata] = useState([])
  const [subtotal, setsubtotal] = useState(0)
  const [shipping, setshipping] = useState(0)
  const [active, setactive] = useState(1)
  const [tax, settax] = useState(0)

  const getcartitemsfromlocalstorage = () => {

    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart) {
      console.log(cart)
      setcartdata(cart)

      let tempsubtotal = 0
      cart.forEach(item => {
        tempsubtotal += item.productdata.salesPrice * item.quantity
      })
      // console.log(tempsubtotal)
      setsubtotal(tempsubtotal)
      setshipping(80)
      settax(tempsubtotal * 0.18 + 80 * .10)
      setrelodenavbar(!relodenavbar)
    }
    else {
      console.log('Cart is Empty')
      setrelodenavbar(!relodenavbar)
    }
  }

  useEffect(() => {
    getcartitemsfromlocalstorage()
  })

  const checklogin = () => {
    return true
  }
  const [relodenavbar, setrelodenavbar] = useState(false)
  const removeitemfromcart = (index) => {
    // alert(index)
    let temp = [...cartdata]
    temp.splice(index, 1)
    setcartdata(temp)
    localStorage.setItem('cart', JSON.stringify(temp))
    getcartitemsfromlocalstorage()
  }
  return (
    <div>
      <Navbar relodenavbar={relodenavbar} />
      <SingleBanner heading='My Cart' bannerimage='https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />

      <div className='cart'>
        <div className='progress'>
          {
            active == 1 ?
              <div className='c11' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(1)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span>My Cart</span>
              </div>
              :
              <div className='c1' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(1)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span>My Cart</span>
              </div>
          }

          {
            active == 2 ?
              <div className='c11' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(2)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>

                <span>Shipping</span>
              </div>
              :
              <div className='c1' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(2)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>

                <span>Shipping</span>
              </div>
          }
          {
            active == 3 ?
              <div className='c11' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(3)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>


                <span>Payment</span>
              </div>
              :
              <div className='c1' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(3)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>


                <span>Payment</span>
              </div>
          }

          {
            active == 4 ?
              <div className='c11' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(4)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>



                <span>Success</span>
              </div>
              :
              <div className='c1' onClick={() => {
                cartdata.length > 0 && checklogin() && setactive(4)
              }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>



                <span>Sucess</span>
              </div>
          }

        </div>

        {
          active == 1 &&
          <div className='container'>
            {
              cartdata.length > 0 ?
                <table className='carttable'>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartdata.map((item, index) => {
                        return (
                          <tr key={index} className='cartitemrow'>
                            <td >
                              <div className='cartproduct' onClick={() => {
                                window.location.href = '/product/${item.productdata.productId}'
                              }}>
                                <img src={item.productdata.productImage[0].image} alt={item.productdata.productName} />
                                <p>{
                                  item.productdata.productName
                                }</p>
                              </div>
                            </td>
                            <td calssName='quantity'>
                              <button className='minus' onClick={() => {
                                let newcartdata = [...cartdata]

                                if (newcartdata[index].quantity > 1) {
                                  newcartdata[index].quantity -= 1
                                  setcartdata(newcartdata)
                                  localStorage.setItem('cart', JSON.stringify(newcartdata))
                                  getcartitemsfromlocalstorage()

                                }
                              }}>-</button>
                              <span>{item.quantity}</span>
                              <button className='plus' onClick={() => {
                                let newcartdata = [...cartdata]
                                newcartdata[index].quantity += 1
                                setcartdata(newcartdata)
                                localStorage.setItem('cart', JSON.stringify(newcartdata))
                                getcartitemsfromlocalstorage()
                              }}>+</button>
                            </td>

                            <td>
                              <p>$ {item.productdata.salesPrice ? item.productdata.salesPrice.toFixed(2) : 0.00} </p>
                            </td>

                            <td>
                              <p>
                                $ {
                                  (item.productdata.salesPrice * item.quantity).toFixed(2)
                                }
                              </p>
                            </td>

                            <td>
                              <div className='deletebtn' onClick={() => {
                                removeitemfromcart(index)
                              }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Sub-Total</td>
                      <td className='totaltableright'>$ {subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Shipping</td>
                      <td className='totaltableright'>$ {shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Total</td>
                      <td className='totaltableright'>$ {(subtotal + shipping).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Tax</td>
                      <td className='totaltableright'>$ {tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td className='totaltableleft'>Net-Total</td>
                      <td className='totaltableright'>$ {(tax + subtotal + shipping).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
                :
                <div className='emptycart'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p>Your cart is empty</p>

                </div>
            }
          </div>
        }
        {
          active == 2 &&
          <div className='shippingcont'>
            <p>Shipping Cont</p>

          </div>
        }
        {
          active == 3 &&
          <div className='paymentcont'>
            <p>Payment Cont</p>
          </div>
        }
        {
          active == 4 &&
          <div className='successcont'>
            <p>Order Successful</p>
          </div>
        }


        {
          active == 1 && cartdata.length > 0 &&
          <div className='btns'>
            <button className='nextbtn' onClick={() => {
              checklogin() && setactive(2)
            }}>Next</button>
          </div>
        }


        {
          active == 2 &&
          <div className='btns'>
            <button className='backbtn' onClick={() => {
              checklogin() && setactive(1)
            }}>Back</button>
            <button className='nextbtn' onClick={() => {
              checklogin() && setactive(3)
            }}>Next</button>
          </div>
        }

        {
          active == 3 &&
          <div className='btns'>
            <button className='backbtn' onClick={() => {
              checklogin() && setactive(2)
            }}>Back</button>
            <button className='nextbtn' onClick={() => {
              checklogin() && setactive(4)
            }}>Next</button>
          </div>
        }

        {
          active == 4 &&
          <div className='btns'>
            <button className='backbtn' onClick={() => {
              checklogin() && setactive(3)
            }}>Back</button>
            <Link to={'/'}>
              <button className='nextbtn' onClick={() => {
                alert('Order is successfully placed')
              }}>Go to Home</button>
            </Link>
          </div>
        }

      </div>

      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default CartPage