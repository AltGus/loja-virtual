// src/Components/LoginPage/LoginPage.js
import React, { useState } from 'react';
import { auth } from '../../Services/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setError('Falha no login. Verifique suas credenciais!');
    }
  };

  const handleLogout = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <div>
      <section className="login_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div className="form_container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <div className="error-message">{error}</div>}
                  <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
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
