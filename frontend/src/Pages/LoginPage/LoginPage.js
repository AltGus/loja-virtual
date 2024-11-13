import React, { useState } from 'react';
import { loginUser, logoutUser } from '../../Services/api'; // Importando funções de login e logout do Firebase
import './LoginPage.css'; // Certifique-se de ter o arquivo CSS para estilização
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Função para login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser(username, password);  // Função de login do Firebase
      localStorage.setItem('username', username);  // Armazena o username no localStorage
      navigate('/home');  // Redireciona para a página inicial
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setError('Falha no login. Verifique suas credenciais!');
    }
  };

  // Função para logout
  const handleLogout = () => {
    logoutUser(); // Chama a função de logout do Firebase
    localStorage.removeItem('username'); // Limpa o username do localStorage
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div>
      {/* Login Section */}
      <section className="login_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Login</h2>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Usuário" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Senha" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <button className="btn btn-primary" type="submit">Entrar</button>
                </form>

                {/* Botão de Logout */}
                <button className="btn btn-secondary" onClick={handleLogout}>Sair</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
