
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/about" element={<h1>Sobre Nosotros</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
