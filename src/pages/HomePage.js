import React from "react";
import Header from "../components/Header";
import PhraseBanner from "../components/PhraseBanner";
import Welcome from "../components/Welcome";
import Aboutus from "../components/Aboutus"
import Comment from "../components/Comment"
import Footer from "../components/Footer"
import "../assets/styles.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <PhraseBanner />
      <Welcome />
      <Aboutus />
      <Comment />
      <Footer />
    </>
  );
};

export default HomePage;
