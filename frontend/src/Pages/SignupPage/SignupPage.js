// src/Components/SignupPage/SignupPage.js
import React, { useState } from 'react';
import { auth } from '../../Services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignupPage.css';

const SignupPage = () => {
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
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      setError('Falha no cadastro. Tente novamente.');
    }
  };

  return (
    <div>
      <section className="signup_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
              <div className="form_container">
                <h2>Cadastro</h2>
                <form onSubmit={handleSignup}>
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
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar Senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {error && <div className="error-message">{error}</div>}
                  <button type="submit" className="btn btn-primary">Cadastrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
