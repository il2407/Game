import React, { useState } from "react";

const SongMatchGame = () => {
  const [matches, setMatches] = useState([]);
  const [score, setScore] = useState(0);

  const songs = [
    { id: 1, name: "Hysteria", lyrics: "Its bugging me, grating me" },
    { id: 2, name: "Starlight", lyrics: "Our hopes and expectations" },
    { id: 3, name: "Uprising", lyrics: "They will not control us" },
  ];

  const lyrics = [
    "It's bugging me, grating me",
    "Our hopes and expectations",
    "They will not control us",
  ];

  const handleMatch = (songId, lyric) => {
    const song = songs.find((song) => song.id === songId);

    if (song.lyrics === lyric && !matches.includes(songId)) {
      setMatches([...matches, songId]);
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div>
      <h1>Song Match Game</h1>
      <p>Score: {score}</p>
      <div className="game-grid">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`song ${matches.includes(song.id) ? "matched" : ""}`}
            onClick={() => handleMatch(song.id, song.lyrics)}
          >
            {song.name}
          </div>
        ))}
      </div>
      <div className="lyrics-grid">
        {lyrics.map((lyric) => (
          <div key={lyric} className="lyric">
            {lyric}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongMatchGame;
