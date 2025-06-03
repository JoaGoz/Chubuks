
import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import PhraseBanner from "./components/PhraseBanner"
import Welcome from "./components/Welcome"

function App() {
  return (
    <>
      <Header />
      <PhraseBanner />
      <Welcome />
    </>
  );
}

export default App;
