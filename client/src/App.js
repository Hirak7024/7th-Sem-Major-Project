import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ProductPage from './Pages/Product/ProductPage';
import WishListPage from './Pages/Wishlist/WishListPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/productPage' element={<ProductPage />} />
          <Route path='/wishlistPage' element={<WishListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
