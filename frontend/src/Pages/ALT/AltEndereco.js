// src/pages/AltEndereco.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AltEndereco.css'; // Adicione um arquivo CSS para estilizar a página, se necessário.

const AltEndereco = () => {
  const [endereco, setEndereco] = useState(''); // Endereço atual
  const [newEndereco, setNewEndereco] = useState(''); // Novo endereço
  const [error, setError] = useState(''); // Mensagem de erro, caso necessário
  const navigate = useNavigate();

  // Função para alterar o endereço
  const handleChangeEndereco = async (e) => {
    e.preventDefault();
    
    if (!newEndereco) {
      setError('O novo endereço não pode estar vazio.');
      return;
    }

    try {
      // Aqui você pode adicionar a lógica para atualizar o endereço no seu banco de dados ou API.
      // Exemplo: await updateEndereco(newEndereco);

      // Atualiza o estado ou localStorage, se necessário
      localStorage.setItem('endereco', newEndereco); // Armazena o novo endereço no localStorage

      // Redireciona para a página de perfil
      navigate('/profile');
    } catch (err) {
      console.error('Erro ao alterar o endereço:', err);
      setError('Ocorreu um erro ao tentar alterar o endereço.');
    }
  };

  return (
    <div className="alt-endereco-container">
      <h2>Alterar Endereço</h2>
      <form onSubmit={handleChangeEndereco}>
        <div className="form-group">
          <label htmlFor="endereco">Endereço Atual:</label>
          <input 
            type="text" 
            id="endereco" 
            className="form-control" 
            value={endereco} 
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="newEndereco">Novo Endereço:</label>
          <input 
            type="text" 
            id="newEndereco" 
            className="form-control" 
            value={newEndereco} 
            onChange={(e) => setNewEndereco(e.target.value)} 
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary">Alterar Endereço</button>
      </form>
    </div>
  );
};

export default AltEndereco;
