import React, { useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const ProductCard = ({data}) => {
  const [show,setshow] = useState(false)

  const [count, setcount] = useState(1)

    // const getproductid = () => {
    //   alert(data.id)
    // }

    const addtocart = () =>{
      let cart = JSON.parse(localStorage.getItem('cart'))
      let productdata = data
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
      // toast.success('Item added to cart successfully')
      // setrelodenavbar(!relodenavbar)
      window.location.reload()
    }
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productImage[0].image} alt={'no image'} />
        </div>
        <div className='s2'>
            <h3>
            ${
                data.productPrice - (data.productPrice * data.productDiscount /100)
            }
            <span>${data.productPrice}</span></h3>
            <p>{data.productName}</p>
        </div>
        <div className='s3'>
            <p>{data.counttype}</p>
        </div>
        {
          show ? <div className='addbtn'>
          <div className='qty'>
            <button 
              onClick={()=>{
                if(count>1){
                  setcount(count-1)
                }
              }}
            >-</button>
            <p>{count}</p>
            <button onClick={()=> setcount(count+1)}>+</button>
          </div>
          <button className='addtocart' onClick={()=>{
            setshow(false)
            addtocart()
          }}>Add to cart</button>
        </div> : 
          <div className='addbtn'>
        <Link to={`/product/${data.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setshow(true)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </div>
        }
    </div>
  )
}

export default ProductCard