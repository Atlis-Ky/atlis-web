import React from "react";
import { Heading, Text, Button } from "../components";

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <Heading level="1">Producer</Heading>
        <Heading level="2">Audio Engineer</Heading>
        <Heading level="3">Songwriter</Heading>
        <Text>lo-fi / ambient project</Text>
      </section>

      <section className="featured">
        <Heading level="2">Latest Release</Heading>
        <div className="featured-content">
          <img
            src="/album-cover.jpg"
            alt="Latest Album"
            className="featured-image"
          />
          <div className="featured-info">
            <Heading level="3">Album Title</Heading>
            <Text>Released: 2026</Text>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
