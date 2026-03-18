import React from "react";
import { Heading, Text } from "../components";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

function About() {
  const pageRef = useFadeInOnScroll();
  return (
    <div className="page-container" ref={pageRef}>
      {/* Producer */}
      <section className="about-section fade-in-item">
        <div className="about-text">
          <Heading level="1">Producer</Heading>
          <Text>
            Multi-Discipline producer of 10+ years, most notably on the "Atlis"
            project, which has amassed over 40 million streams through lofi and
            ambient releases. Practical skills in arrangement, writing and sound
            design. Additional understanding and experience producing and
            collaborating cross genre in Electronic Music, Rock, Metal, and
            Synthwave to name a few.
          </Text>
        </div>
        <div className="about-image-panel">
          <img
            src="/atlisblue2.jpg"
            alt="Producer"
            className="about-image"
            loading="lazy"
          />
        </div>
      </section>

      {/* Audio Engineer */}
      <section className="about-section fade-in-item">
        <div className="about-image-panel">
          <img
            src="/snowblue3.jpg"
            alt="Audio Engineer"
            className="about-image"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <Heading level="1">Audio Engineer</Heading>
          <Text>
            Mixing and Mastering proficiency for self and others. Knowledgeable
            in studio hardware, software, acoustics, and digital audio
            workflows. Extremely knowledgable and familiar with Ableton Live
            suite, have spent almost half of my life learning the software, its
            stock plugins and functions, as well as a strong grasp of many third
            party plugin suites.
          </Text>
        </div>
      </section>

      {/* Songwriter */}
      <section className="about-section fade-in-item">
        <div className="about-text">
          <Heading level="1">Songwriter</Heading>
          <Text>
            MultiCredited songwriter across genres for various artists and
            projects. Proficient in arrangement and structure for both
            instrumental and vocal centric music. Currently behind the scenes
            writing for yet to debut rock band.
          </Text>
        </div>
        <div className="about-image-panel">
          <img
            src="/atlisblue3.jpg"
            alt="Songwriter"
            className="about-image"
            loading="lazy"
          />
        </div>
      </section>

      {/* Web Developer */}
      <section className="about-section fade-in-item">
        <div className="about-image-panel">
          <img
            src="/snowblue.jpg"
            alt="Web Developer"
            className="about-image"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <Heading level="1">Web Developer</Heading>
          <Text>
            Highly motivated and self-taught React developer with hands on
            experience building frontend applications using modern JavaScript
            frameworks and various styling tools. Competent understanding of API
            integration, component based architecture, and responsive UI design.
            Recently completed an internship working in a production React
            codebase for a large online store.
          </Text>
        </div>
      </section>
    </div>
  );
}

export default About;
