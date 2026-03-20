import React from "react";
import { Heading, Text } from "../components";

function Shop() {
  return (
    <div className="page-container shop-page">
      <section className="shop-header">
        <Heading level="2" align="center">
          MERCHANDISE
        </Heading>
        <Text align="center">
          Nothing to see here (just yet!!) Working on getting a few bits ready
          to ship in the near future, so stick around and follow for updates on
          new releases and merch!
        </Text>
      </section>

      <section className="shop-grid-section">
        <div className="shop-grid">
          <div className="shop-card">
            <div className="shop-card-image-placeholder">
              <img src="/IMG_8939.jpeg" alt="Hats" className="shop-card-img" />
              <Heading level="4" align="center">
                Hats
              </Heading>
              <Text align="center">Arriving soon.</Text>
            </div>
          </div>
          <div className="shop-card">
            <div className="shop-card-image-placeholder">
              <img
                src="/IMG_8940.jpeg"
                alt="Physical Copies"
                className="shop-card-img"
              />
              <Heading level="4" align="center">
                Physical Copies
              </Heading>
              <Text align="center">Arriving soon.</Text>
            </div>
          </div>
          <div className="shop-card">
            <div className="shop-card-image-placeholder">
              <img src="/IMG_8908.jpg" alt="Tees" className="shop-card-img" />
              <Heading level="4" align="center">
                Tees
              </Heading>
              <Text align="center">Arriving soon.</Text>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;
