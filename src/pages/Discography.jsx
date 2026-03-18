import React from "react";
import { Heading, Text } from "../components";

const EMBED_PLACEHOLDER =
  "https://open.spotify.com/embed/album/1sZ0RZNA9wOqwEvOS7cUpF?utm_source=generator&theme=0";

function SpotifyEmbed({ src, compact = false }) {
  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: "12px" }}
      src={src}
      width="100%"
      height={compact ? "152" : "352"}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Spotify embed"
    />
  );
}

const largeSections = [
  {
    id: 1,
    title: "Release Title One",
    description:
      "A short description of this release — the inspiration, mood, and themes behind the project.",
    src: EMBED_PLACEHOLDER,
  },
  {
    id: 2,
    title: "Release Title Two",
    description:
      "A short description of this release — the inspiration, mood, and themes behind the project.",
    src: EMBED_PLACEHOLDER,
  },
  {
    id: 3,
    title: "Release Title Three",
    description:
      "A short description of this release — the inspiration, mood, and themes behind the project.",
    src: EMBED_PLACEHOLDER,
  },
  {
    id: 4,
    title: "Release Title Four",
    description:
      "A short description of this release — the inspiration, mood, and themes behind the project.",
    src: EMBED_PLACEHOLDER,
  },
];

const smallSections = [
  { id: 5, title: "Release Title Five", src: EMBED_PLACEHOLDER },
  { id: 6, title: "Release Title Six", src: EMBED_PLACEHOLDER },
  { id: 7, title: "Release Title Seven", src: EMBED_PLACEHOLDER },
  { id: 8, title: "Release Title Eight", src: EMBED_PLACEHOLDER },
  { id: 9, title: "Release Title Nine", src: EMBED_PLACEHOLDER },
  { id: 10, title: "Release Title Ten", src: EMBED_PLACEHOLDER },
  { id: 11, title: "Release Title Eleven", src: EMBED_PLACEHOLDER },
];

function Discography() {
  return (
    <div className="page-container">
      {largeSections.map((item) => (
        <section key={item.id} className="disco-section disco-section-large">
          <div className="disco-inner">
            <Heading level="2">{item.title}</Heading>
            <Text>{item.description}</Text>
            <SpotifyEmbed src={item.src} />
          </div>
        </section>
      ))}

      {smallSections.map((item) => (
        <section key={item.id} className="disco-section disco-section-small">
          <div className="disco-inner">
            <Heading level="3">{item.title}</Heading>
            <SpotifyEmbed src={item.src} compact />
          </div>
        </section>
      ))}
    </div>
  );
}

export default Discography;
