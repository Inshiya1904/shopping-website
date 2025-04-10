import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Login from './pages/Login/Login'
import Products from './pages/Product/Products'
import Cart from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetails/ProductDetail'
import Header from './components/Header/Header'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Footer from './components/Footer/Footer'
const App = () => {
  const location = useLocation()
  return (
      <>
    {location.pathname !== '/' && <Header/>}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
        <Route path='/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
        <Route path='/products/:id' element={<ProtectedRoute><ProductDetail/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
      </>
      

  )
}

export default App