import React from "react";
import { Heading, Text } from "../components";

const links = [
  { label: "Spotify", href: "https://open.spotify.com/artist/0rPg5GzRyLsiWkNcRSEXUU?si=67qDTh1aTmiAvmucQwEVCA" },
  { label: "Apple Music", href: "https://music.apple.com/us/artist/atlis/1468014326" },
  { label: "Instagram", href: "https://www.instagram.com/atlisbeets/" },
  { label: "Email", href: "mailto:atlisbeets@gmail.com" },
  { label: "GitHub", href: "https://github.com/Atlis-Ky" },
];

function Contact() {
  return (
    <div className="page-container">
      <section className="contact-section">
        <div className="contact-image-panel">
          <img src="/kyle.jpg" alt="Kyle" className="contact-image" />
        </div>

        <div className="contact-text">
          <Heading level="1">Find Me</Heading>
          <Text>
            You can find my work or get in touch via any of the below links!!
          </Text>
          <div className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link-btn"
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
