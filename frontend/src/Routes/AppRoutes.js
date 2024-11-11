// src/Routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import CartPage from '../Pages/CartPage/CartPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import MyFavorites from '../Pages/MyFavorites/MyFavorites';
import PerfilPage from '../Pages/PerfilPage/PerfilPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/profile" element={<PerfilPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
