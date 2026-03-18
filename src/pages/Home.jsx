import React from "react";
import { Heading, Text, Button } from "../components";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

function Home() {
  const releasesRef = useFadeInOnScroll();
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-left">
          <Heading level="1">Producer</Heading>
          <Heading level="1">Audio Engineer</Heading>
          <Heading level="1">Songwriter</Heading>
          <Heading level="5">(Web Developer)</Heading>
          <Text>lo-fi / ambient project by Kyle Smith.</Text>
        </div>
        <div className="hero-right">
          <img src="/atlisblue.jpg" alt="Atlis Profile" />
        </div>
      </section>

      <section className="featured">
        <Heading level="2">Latest Releases</Heading>
        <div className="releases-grid" ref={releasesRef}>
          <div className="release-card fade-in-item">
            <img
              src="/atlis-distance-art.jpg"
              alt="Distance Album"
              className="featured-image"
              loading="lazy"
            />
            <Text>Distance (Album)</Text>
          </div>
          <div className="release-card fade-in-item">
            <img
              src="/ambientsquare.jpeg"
              alt="Ambient Studies EP"
              className="featured-image"
              loading="lazy"
            />
            <Text>Ambient Studies (EP)</Text>
          </div>
          <div className="release-card fade-in-item">
            <img
              src="/Dreamweaver-cap.jpg"
              alt="Dreamweaver"
              className="featured-image"
              loading="lazy"
            />
            <Text>Dreamweaver (Single)</Text>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
