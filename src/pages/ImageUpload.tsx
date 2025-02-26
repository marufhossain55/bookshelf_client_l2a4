/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert('Please select an image first!');

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'marufhossain55');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/drcynlax7/image/upload',
        formData
      );
      setImageUrl(response.data.secure_url);
      alert('Image uploaded successfully!');
    } catch (error) {
      alert('Failed to upload image.');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>

      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
