import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavCard = () => {
  const [songs, setSongs] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://taylor-swift-api.sarbo.workers.dev/songs');
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    fetchData();
  }, []);

  const handleClick = () => {
    setShowPrompt(true);
    setTimeout(() => setShowPrompt(false), 5000);
  };

  return (
    <div style={{ maxHeight: '60vh', overflowY: 'scroll' }}>
      {songs.map((song, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>Title: {song.title}</h2>
          <p>Song ID: {song.song_id}</p>
          <p>Album: {song.album_id}</p>
          <button onClick={handleClick} style={{ display: 'block', margin: 'auto' }}>Add to favourites</button>
          {showPrompt && <p>Yeah fair this songs epic, adding to your favourites</p>}
        </div>
      ))}
    </div>
  );
};

export default FavCard;