import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [{
        id:1,
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Fresh items are AVAILABLE!!!',
        description: 'We have fresh vegetables and good quality groceries for you and aliens',
        button: 'https://www.google.com',
    },
    {
        id:2,
        image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Fresh items are AVAILABLE!!!',
        description: 'We have fresh vegetables and good quality groceries for you and aliens',
        button: 'https://www.google.com',
    },
    {
        id:3,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Fresh items are AVAILABLE!!!',
        description: 'We have fresh vegetables and good quality groceries for you and aliens',
        button: 'https://www.google.com',
    },
]

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='bannerSlider'>
        <Slider className='bannerSlider' {...settings}>
            {
                data.map(item=>{
                    return(
                    <div className='imagecont' key={item.id}>
                        <img src={item.image} alt='noImage' />
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider