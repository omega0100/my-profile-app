import React, { useState } from 'react';

const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="photo-upload">
      <h2>Upload Your Photo</h2>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      {photo && (
        <div className="photo-preview">
          <img src={photo} alt="Uploaded" width="200" />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
