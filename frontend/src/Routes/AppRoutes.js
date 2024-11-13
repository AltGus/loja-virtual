// src/Routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import CartPage from '../Pages/CartPage/CartPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import MyFavorites from '../Pages/MyFavorites/MyFavorites';
import PerfilPage from '../Pages/PerfilPage/PerfilPage';
import AltEmail from '../Pages/ALT/AltEmail';
import AltNumero from '../Pages/ALT/AltNumero';
import AltEndereco from '../Pages/ALT/AltEndereco';
import LogoutPage from '../Pages/Logout/LogoutPage';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import AddProductForm from '../Components/AddProduct/AddProduct';  // Corrigido para importar o formulário

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<MyFavorites />} />
        <Route path="/profile" element={<PerfilPage />} />
        <Route path="/alt-email" element={<AltEmail />} />
        <Route path="/alt-numero" element={<AltNumero />} />
        <Route path="/alt-endereco" element={<AltEndereco />} />
        <Route path="/logout" element={<LogoutPage />} />
        
        {/* Nova rota para adicionar produtos */}
        <Route path="/add-product" element={<AddProductForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
