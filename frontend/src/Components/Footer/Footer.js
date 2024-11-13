// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Adicione um arquivo CSS para o estilo do rodapé, se necessário

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="col-md-11 col-lg-8 mx-auto">
          <p>&copy; <span id="displayYear"></span> Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
