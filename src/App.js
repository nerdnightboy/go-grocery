import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<div>
            <h1>H-A-H-A Seems Like You Don't Have Enough Knowledge to Access US.</h1>
          </div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App