import React from 'react';

function Discography() {
  const albums = [
    { id: 1, title: 'Album Name 1', year: '2026', cover: '/album1.jpg' },
    { id: 2, title: 'Album Name 2', year: '2025', cover: '/album2.jpg' },
    { id: 3, title: 'EP Name', year: '2024', cover: '/ep1.jpg' },
  ];

  return (
    <div className="page-container">
      <h1>Discography</h1>
      <div className="discography-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <h3>{album.title}</h3>
            <p>{album.year}</p>
            <button className="listen-button">Listen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discography;