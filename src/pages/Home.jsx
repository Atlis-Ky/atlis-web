import React from "react";
import { Heading, Text, Button } from "../components";

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-left">
          <Heading level="1">Producer</Heading>
          <Heading level="1">Audio Engineer</Heading>
          <Heading level="1">Songwriter</Heading>
          <Text>lo-fi / ambient project by Kyle Smith.</Text>
        </div>
        <div className="hero-right">
          <img src="/atlisblue.jpg" alt="Atlis Profile" />
        </div>
      </section>

      <section className="featured">
        <Heading level="2">Latest Release</Heading>
        <Text level="5">Distance (album)</Text>
        <div className="featured-content">
          <img
            src="/atlis-distance-art.jpg"
            alt="Distance Album"
            className="featured-image"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
