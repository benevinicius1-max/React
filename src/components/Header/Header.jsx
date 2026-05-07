import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MeuSite</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;