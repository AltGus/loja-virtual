import React, { useState } from 'react';
import { registerUser } from '../../Services/api.js';
import './SignupPage.css'; // Certifique-se de ter o arquivo CSS para estilização

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não coincidem!');
      return;
    }

    try {
      await registerUser(email, password); // Função do Firebase
      alert('Cadastro realizado com sucesso!');
      // Redirecionar ou limpar o formulário, dependendo do seu fluxo
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      setError('Falha no cadastro. Tente novamente.');
    }
  };

  return (
    <div>
      {/* Signup Section */}
      <section className="signup_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Cadastro</h2>
                </div>
                <form onSubmit={handleSignup}>
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
                      type="email" 
                      className="form-control" 
                      placeholder="Email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
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
                  <div className="form-group">
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Confirmar Senha" 
                      value={confirmPassword} 
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <button className="btn btn-primary" type="submit">Cadastrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default SignupPage;
