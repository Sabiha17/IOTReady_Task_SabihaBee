// App.js
import React, { useState } from 'react';
import AudioPlayer from './AudioPlayers';
import FileUpload from './FileUpload';

function App() {
  const [audioList, setAudioList] = useState([]);

  const handleFileUpload = (fileURL) => {
    setAudioList((prevAudioList) => [...prevAudioList, fileURL]);
  };

  return (
    <div>
      <h1>Audio Player App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <AudioPlayer audioList={audioList} />
    </div>
  );
}

export default App;
