import React from "react";
import "../assets/styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/LogoCHUBUCKS.png" alt="CHUBUCKS" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/stories">Historias</a></li>
          <li><a href="/aboutus">Sobre Nosotros</a></li>
          <li><a href="/comments">Comentarios</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="register-button">Registro</button>
        <button className="login-button">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
