// src/pages/AltEmail.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AltEmail.css'; // Adicione um arquivo CSS para estilizar a página, se necessário.

const AltEmail = () => {
  const [email, setEmail] = useState(''); // E-mail atual
  const [newEmail, setNewEmail] = useState(''); // Novo e-mail
  const [error, setError] = useState(''); // Mensagem de erro, caso necessário
  const navigate = useNavigate();

  // Função para alterar o e-mail
  const handleChangeEmail = async (e) => {
    e.preventDefault();
    
    if (!newEmail) {
      setError('O novo e-mail não pode estar vazio.');
      return;
    }

    try {
      // Aqui você pode adicionar a lógica para atualizar o e-mail no seu banco de dados ou API.
      // Exemplo: await updateEmail(newEmail);

      // Atualize o estado ou localStorage, se necessário
      localStorage.setItem('email', newEmail); // Armazena o novo e-mail no localStorage

      // Redireciona para a página de perfil
      navigate('/profile');
    } catch (err) {
      console.error('Erro ao alterar o e-mail:', err);
      setError('Ocorreu um erro ao tentar alterar o e-mail.');
    }
  };

  return (
    <div className="alt-email-container">
      <h2>Alterar E-mail</h2>
      <form onSubmit={handleChangeEmail}>
        <div className="form-group">
          <label htmlFor="email">E-mail Atual:</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email} 
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="newEmail">Novo E-mail:</label>
          <input 
            type="email" 
            id="newEmail" 
            className="form-control" 
            value={newEmail} 
            onChange={(e) => setNewEmail(e.target.value)} 
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary">Alterar E-mail</button>
      </form>
    </div>
  );
};

export default AltEmail;
