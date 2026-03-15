import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <h1>Welcome to My Music</h1>
        <p>Experience the sound</p>
        <button className="cta-button">Listen Now</button>
      </section>
      
      <section className="featured">
        <h2>Latest Release</h2>
        <div className="featured-content">
          <img src="/album-cover.jpg" alt="Latest Album" className="featured-image" />
          <div className="featured-info">
            <h3>Album Title</h3>
            <p>Released: 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;