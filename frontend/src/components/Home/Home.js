import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";

function Home() {
  return (
    <div className="Home-Container">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
