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
    title: "Ambient Studies (EP)",
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
  { id: 5, title: "Dreamweaver", src: "https://open.spotify.com/embed/track/7e6H6Dfci3E7JYsnrgBnNK?utm_source=generator&theme=0" },
  { id: 6, title: "Light", src: "https://open.spotify.com/embed/track/0ddyX3gdFZcAVLqP7IQHXD?utm_source=generator&theme=0" },
  { id: 7, title: "Twighlight", src: "https://open.spotify.com/embed/track/7mdmk3CDzXO0RWUgwPiI8G?utm_source=generator&theme=0" },
  { id: 8, title: "Reconcile (EP)", src: "https://open.spotify.com/embed/album/74dwIdhASHPvGXPZQwS2QF?utm_source=generator&theme=0" },
  { id: 9, title: "Ghost Town", src: "https://open.spotify.com/embed/track/0KOKnjV6E0DxG0xOlpBpej?utm_source=generator&theme=0" },
  { id: 10, title: "Never Enough", src: "https://open.spotify.com/embed/track/6l4fFm0n8BDfzwtNh9cICJ?utm_source=generator&theme=0" },
  { id: 11, title: "Iris", src: "https://open.spotify.com/embed/track/7HNuHDeJ27f6hQmkgC1Tyi?utm_source=generator&theme=0" },
];

function Discography() {
  return (
    <div className="page-container">
      {largeSections.map((item) => (
        <section key={item.id} className="disco-section disco-section-large">
          <div className="disco-inner">
            <Heading level="1">{item.title}</Heading>
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
