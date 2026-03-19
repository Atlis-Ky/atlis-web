import React from "react";
import { Heading, Text } from "../components";

const links = [
  { label: "Spotify", href: "https://open.spotify.com/artist/" },
  { label: "Apple Music", href: "https://music.apple.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Email", href: "mailto:kyle@example.com" },
  { label: "GitHub", href: "https://github.com/" },
];

function Contact() {
  return (
    <div className="page-container">
      <section className="contact-section">
        <div className="contact-image-panel">
          <img src="/kyle.jpg" alt="Kyle Smith" className="contact-image" />
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
