import React , { useState } from 'react'
import { FaCamera } from 'react-icons/fa';

function ProfilePicture() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  
  };
  return (
    <>
  <h2 style={{ textAlign: 'left' }}>Sohail khan</h2>
  <label htmlFor="upload-input" style={{ display: 'block', textAlign: 'left', marginBottom: '20px', cursor: 'pointer' }}>
    <div style={{ 
      width: '150px', 
      height: '150px', 
      borderRadius: '50%', 
      overflow: 'hidden',
      backgroundColor: '#ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {image ? (
        <img 
          src={image} 
          alt="Profile" 
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block',
            borderRadius: '50%', // Make the image rounded
            marginTop: 'calc((150px - 100%) / 2)' // Center the image vertically
          }} 
        />
      ) : (
        <FaCamera style={{ fontSize: '64px', color: '#fff' }} />
      )}
    </div>
  </label>
  <input 
    id="upload-input"
    type="file" 
    accept="image/*" 
    onChange={handleImageChange}
    style={{ display: 'none' }}
  />
</>




  )
}

export default ProfilePicture
