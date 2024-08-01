import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import MasterCard from "../MasterCard/MasterCard";
import Benefits from "../Benefits/Benefits";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <div className="Home-Container">
      <Hero />
      <About />
      <MasterCard />
      <Benefits />
      <Projects />
    </div>
  );
}

export default Home;
