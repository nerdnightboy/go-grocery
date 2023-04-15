import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/homePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './pages/product/ProductPage';
import About from './pages/extras/About';
import Contact from './pages/extras/Contact';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import ForgotPass from './pages/authentication/ForgotPass';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:productid' element={<ProductPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='forgotpassword' element={<ForgotPass />} />
          <Route path='*' element={<div>
            <h1>H-A-H-A Seems Like You Don't Have Enough Knowledge to Access Us. 404 BTW )</h1>
          </div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App