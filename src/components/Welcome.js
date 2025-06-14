import React from "react";
import "../assets/styles.css";
import welcome from "../assets/images/LecturaCB.png"

const Welcome = () => {
  return (
    <div className="background">
      <section className="welcome">
        <h1>Bienvenido</h1>
        <p>Cada palabra, cada historia, cada libro te acerca más a dominar el inglés. Aprende leyendo y disfruta del proceso. Aquí en CHUBUCKS está tu espacio para crecer con la lectura.</p>
        <img className="welcome-image" src={welcome} alt="Lecturas" />
      </section>
    </div>
  );
};

export default Welcome;
