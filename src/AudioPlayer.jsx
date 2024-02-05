// AudioPlayer.js
import React, { useState, useEffect } from 'react';

function AudioPlayer({ audioList }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Load last playing audio file and position from localStorage
    const savedCurrentTrack = localStorage.getItem('currentTrack');
    const savedCurrentTime = localStorage.getItem('currentTime');

    if (savedCurrentTrack && audioList.includes(savedCurrentTrack)) {
      setCurrentTrack(savedCurrentTrack);
    }

    if (savedCurrentTime) {
      setCurrentTime(parseFloat(savedCurrentTime));
    }
  }, [audioList]);

  useEffect(() => {
    // Save current playing audio file and position to localStorage
    localStorage.setItem('currentTrack', currentTrack);
    localStorage.setItem('currentTime', currentTime.toString());
  }, [currentTrack, currentTime]);

  const playNextTrack = () => {
    // Implement logic to play the next track in the playlist
    const currentIndex = audioList.findIndex((track) => track === currentTrack);
    const nextIndex = (currentIndex + 1) % audioList.length;
    setCurrentTrack(audioList[nextIndex]);
    setCurrentTime(0); // Reset currentTime when moving to the next track
  };

  const handleTimeUpdate = (event) => {
    // Update currentTime as the audio progresses
    setCurrentTime(event.target.currentTime);
  };

  return (
    <div>
      <h2>Audio Player</h2>
      {/* Implement HTML audio player with controls and source */}
      {currentTrack && (
        <audio controls onEnded={playNextTrack} onTimeUpdate={handleTimeUpdate} autoPlay>
          <source src={currentTrack} type="audio/mp3" />
        </audio>
      )}

      {/* Implement playlist view */}
      <ul>
        {audioList.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ul>
    </div>
  );
}

export default AudioPlayer;
