import React from "react";
import "../assets/styles.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/images/logo.png"></img>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/stories">Historias</a></li>
                    <li><a href="/aboutus">Sobre Nosotros</a></li>
                    <li><a href="/comments">Comentarios</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;