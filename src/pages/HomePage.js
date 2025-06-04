import React from "react";
import Header from "../components/Header";
import PhraseBanner from "../components/PhraseBanner";
import Welcome from "../components/Welcome";

const HomePage = () => {
  return (
    <>
      <Header />
      <PhraseBanner />
      <Welcome />
    </>
  );
};

export default HomePage;
