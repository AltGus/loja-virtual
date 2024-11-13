// src/Pages/LogoutPage/LogoutPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Services/api'; // Certifique-se de que a função logoutUser está corretamente definida
import './LogoutPage.css'; // Estilo da página de logout, se necessário

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Limpa o localStorage e chama a função de logout do Firebase
    localStorage.removeItem('username');
    logoutUser(); // Função de logout

    // Redireciona para a página de login após o logout
    navigate('/login');
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>Desconectando...</h2>
      <p>Você será redirecionado para a página de login em breve.</p>
    </div>
  );
};

export default LogoutPage;
