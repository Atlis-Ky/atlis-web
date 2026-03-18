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
    title: "Distance (album)",
    description:
      "Label release. 3rd lo-fi album by Atlis, released in 2025 via Sleep Tales.",
    src: "https://open.spotify.com/embed/album/5c40z37UtSz4IhtHQ1Q35h?utm_source=generator&theme=0",
  },
  {
    id: 2,
    title: "Ambient Studies",
    description:
      "6 track EP of exclusively instrumental ambient music. Independent release by Atlis, released in 2025.",
    src: "https://open.spotify.com/embed/album/1sZ0RZNA9wOqwEvOS7cUpF?utm_source=generator&theme=0",
  },
  {
    id: 3,
    title: "Exploration (album)",
    description:
      "Label release. 2nd lo-fi album by Atlis, released in 2023 via Sleep Tales.",
    src: "https://open.spotify.com/embed/album/69AAYBGbdmHwyHbLYL5i2I?utm_source=generator&theme=0",
  },
  {
    id: 4,
    title: "Dreamscape (album)",
    description:
      "Debut album by Atlis, released in 2021. Label release via Sleep Tales.",
    src: "https://open.spotify.com/embed/album/2NBE2hXvKjdFgyN9zfpP8t?utm_source=generator&theme=0",
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
