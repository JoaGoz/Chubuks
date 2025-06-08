import React, { useEffect, useState } from "react";
import "../assets/styles.css";

const phrases = [
  "Explora un mundo lleno de historias.",
  "Cada libro es un viaje único.",
  "Las mejores lecturas, en un solo lugar.",
  "Descubre tu próxima historia favorita."
];

const PhraseBanner = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); 
    }, 4000);

    const changePhraseTimer = setTimeout(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setFadeOut(false); 
    }, 3000); // 🔹

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(changePhraseTimer);
    };
  }, [currentPhraseIndex]);

  return (
    <div className="phrase-banner">
      <p className={`animated-text ${fadeOut ? "fade-out" : "fade-in"}`}>
        {phrases[currentPhraseIndex]}
      </p>
    </div>
  );
};

export default PhraseBanner;
