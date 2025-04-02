import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
