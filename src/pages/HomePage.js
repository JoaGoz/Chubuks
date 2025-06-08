import React from "react";
import Header from "../components/Header";
import PhraseBanner from "../components/PhraseBanner";
import Welcome from "../components/Welcome";
import Aboutus from "../components/Aboutus"
import "../assets/styles.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <PhraseBanner />
      <Welcome />
      <Aboutus />
    </>
  );
};

export default HomePage;
