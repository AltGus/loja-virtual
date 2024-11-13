// src/pages/AltNumero.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AltNumero.css'; // Adicione um arquivo CSS para estilizar a página, se necessário.

const AltNumero = () => {
  const [numero, setNumero] = useState(''); // Número atual
  const [newNumero, setNewNumero] = useState(''); // Novo número
  const [error, setError] = useState(''); // Mensagem de erro, caso necessário
  const navigate = useNavigate();

  // Função para alterar o número
  const handleChangeNumero = async (e) => {
    e.preventDefault();
    
    if (!newNumero) {
      setError('O novo número não pode estar vazio.');
      return;
    }

    try {
      // Aqui você pode adicionar a lógica para atualizar o número no seu banco de dados ou API.
      // Exemplo: await updateNumero(newNumero);

      // Atualiza o estado ou localStorage, se necessário
      localStorage.setItem('numero', newNumero); // Armazena o novo número no localStorage

      // Redireciona para a página de perfil
      navigate('/profile');
    } catch (err) {
      console.error('Erro ao alterar o número:', err);
      setError('Ocorreu um erro ao tentar alterar o número.');
    }
  };

  return (
    <div className="alt-numero-container">
      <h2>Alterar Número</h2>
      <form onSubmit={handleChangeNumero}>
        <div className="form-group">
          <label htmlFor="numero">Número Atual:</label>
          <input 
            type="text" 
            id="numero" 
            className="form-control" 
            value={numero} 
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="newNumero">Novo Número:</label>
          <input 
            type="text" 
            id="newNumero" 
            className="form-control" 
            value={newNumero} 
            onChange={(e) => setNewNumero(e.target.value)} 
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary">Alterar Número</button>
      </form>
    </div>
  );
};

export default AltNumero;
