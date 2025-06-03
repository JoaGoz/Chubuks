import React, { useEffect, useState } from "react";
import "../assets/styles.css";

const phrases = [
  "Explora un mundo lleno de historias.",
  "Cada libro es un viaje único.",
  "Las mejores lecturas, en un solo lugar.",
  "Descubre tu próxima historia favorita."
];

const PhraseBanner = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phrase-banner">
      <p className="animated-text">{phrases[currentPhrase]}</p>
    </div>
  );
};

export default PhraseBanner;
