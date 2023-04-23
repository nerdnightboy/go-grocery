import React, { useEffect, useState } from 'react'
import './CartPage.css'
import Navbar from '../../components/navBar/Navbar'
import Footer1 from '../../components/footer/Footer1'
import Footer2 from '../../components/footer/Footer2'
import SingleBanner from '../../components/baner/SingleBanner'
import './Progress.css'
import './CartPageContainer.css'
import { Link } from 'react-router-dom'
import './ShippingContainer.css'
import './PaymentContainer.css'
import './SuccessContainer.css'



const CartPage = () => {

  const [cartdata, setcartdata] = useState([])
  const [subtotal, setsubtotal] = useState(0)
  const [shipping, setshipping] = useState(0)
  const [active, setactive] = useState(1)
  const [tax, settax] = useState(0)
  const [deliverydate, setdeliverydate] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  )

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

  const saveaddress = [
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "284204",
    },
    {
      AddressLine1: "Address Line 1",
      AddressLine2: "Address Line 2",
      AddressLine3: "Address Line 3",
      postalcode: "284568",
    },
  ]
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
              <div className='selectdate'>
              <h2 className='mainhead1'>Select Delivery Date</h2>
              <input
                min={new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                type='date'
                value={deliverydate}
                onChange={(e) => {
                  setdeliverydate(e.target.value)
                }}
              />
            </div>
            <div className='previous'>
              <h2 className='mainhead1'>Previous Saved Address</h2>
              {
                saveaddress.length > 0 ?
                  saveaddress.map((item, index) => {
                    return (
                      <div className='radio'>
                        <input type='radio' name='address' id={index} />
                        <span>
                          {
                            item.AddressLine1 + ', ' + item.AddressLine2 + ', ' + item.AddressLine3 + ', ' + item.postalcode
                          }
                        </span>
                      </div>
                    )
                  })
                  :
                  <div className='emptyaddress'>
                    <p>No Address Found</p>
                  </div>
              }
            </div>
            <h3>OR</h3>
            <div className='shippingadd'>
              <input type='text' placeholder='Address Line 1' />
              <input type='text' placeholder='Address Line 2' />
              <input type='text' placeholder='Address Line 3' />
              <input type='text' placeholder='Postal code' />
              <button>Save</button>
            </div>

          </div>
        }
        {
          active == 3 &&
          <div className='paymentcont'>
            <h2 className='mainhead1'>Selcet Payment Method</h2>
            <div className='paymenttypes'>
              <div className='cl1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='data:image/png;base64,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' alt='paytm' />
              </div>
              <div className='cl1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='data:image/png;base64,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' alt='bharatpay' />
              </div>
              <div className='cl1'>
                <input type='radio' name='payment' id='payment1' />
                <img src='data:image/png;base64,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' alt='amazonpay' />
              </div>
            </div>
            <div className='paymentagreement'>
              <input type='checkbox' name='agreement' id='agreement' />
              <label htmlFor='agreement'>I agree to the Terms and Conditions</label>
            </div>
            <div className='c2'>
              <span>Net Total:</span>
              &nbsp;&nbsp;
              <span>
                $ {(subtotal + tax +shipping).toFixed(2)}
              </span>
            </div>
          </div>
        }
        {
          active == 4 &&
          <div className='successcont'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>
<h2 className='mainhead1'>Order Placed Successfully</h2>
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
                window.location.herf = '/'
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