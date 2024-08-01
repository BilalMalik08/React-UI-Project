import React from "react";
import "./home.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import MasterCard from "../MasterCard/MasterCard";

function Home() {
  return (
    <div className="Home-Container">
      <Hero />
      <About />
      <MasterCard />
    </div>
  );
}

export default Home;
