import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
//components
import Home from './Home';
import Products from './Products';
import ContactUs from './ContactUs';
import Cart from './Cart';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kid_banner from './Assets/banner_kids.png'


import './index.css';
import ShopCategory from './ShopCategory';



function App() {
 
 
  return (
    <>
    <div >
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/contactUs" element={<ContactUs/>} />

        </Routes>
        </BrowserRouter>
        
       </div>
      
    </>
  );
}

export default App;