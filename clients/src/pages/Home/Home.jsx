import React from "react";
import HeroSection from "../../components/Hero/Hero";
import TestimonyList from "../../components/testimony/TestimonyList";
import AboutSection from "../../components/About/About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonyList />
    </>
  );
};

export default Home;
