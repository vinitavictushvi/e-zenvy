import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

// Banners
import banner_mens from './Assets/banner_mens.png';
import banner_women from './Assets/banner_women.png';
import banner_kids from './Assets/banner_kids.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} category="men" />}
          />

          <Route
            path="/womens"
            element={<ShopCategory banner={banner_women} category="women" />}
          />

          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kids" />}
          />

          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
