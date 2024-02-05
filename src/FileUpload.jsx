// FileUpload.js
import React, { useState } from 'react';

function FileUpload({ onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Implement logic to store the file using built-in Browser APIs
    if (file) {
      const fileURL = URL.createObjectURL(file);
      onFileUpload(fileURL);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
