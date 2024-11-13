// src/pages/PerfilPage.js
import React from 'react';
import './PerfilPage.css';
import { useNavigate } from 'react-router-dom';

const PerfilPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
  };

  const handleLogout = () => {
    console.log('Logout realizado');
    navigate('/login');
  };

  const handleDeleteAccount = () => {
    console.log('Conta deletada');
    navigate('/signup');
  };

  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <p>Bem-vindo à sua página de perfil! Aqui você pode gerenciar suas informações.</p>

      <div className="profile-options">
        <button onClick={() => navigate('/alt-email')}>Alterar E-mail</button>
        <button onClick={() => navigate('/alt-numero')}>Alterar Número</button> {/* Botão para Alterar Número */}
        <button onClick={() => navigate('/alt-endereco')}>Alterar Endereço</button> {/* Botão para Alterar Endereço */}
        <button onClick={() => navigate('/favorites')}>Favoritos</button>
        <button onClick={handleLogout}>Sair da Conta</button>
        <button onClick={handleDeleteAccount}>Deletar Conta</button>
      </div>
    </div>
  );
};

export default PerfilPage;
