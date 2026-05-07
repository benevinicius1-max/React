import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sua Logo</h3>
          <p>Slogan ou uma breve descrição da sua empresa.</p>
        </div>
        
        <div className="footer-section">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
