import React, { useRef } from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/components.css';

const ImageUploader = () => {
  const { setCustomImage } = useProductContext();
  const fileInputRef = useRef(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    processFile(files[0]);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    processFile(files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const processFile = (file) => {
    if (!file) return;
    
    if (!file.type.match('image.*')) {
      alert('Please select an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setCustomImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <h3>Upload Custom Image</h3>
      
      <div 
        className="drop-zone"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        <div className="drop-zone-content">
          <span className="icon">📁</span>
          <p>Drag & Drop your image here</p>
          <p className="or">or</p>
          <button 
            className="browse-button"
            onClick={handleBrowseClick}
          >
            Browse your computer
          </button>
          <input 
            type="file"
            ref={fileInputRef}
            className="file-input"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>
      </div>
      
      <div className="upload-instructions">
        <h4>Image Guidelines</h4>
        <ul>
          <li>Maximum file size: 5MB</li>
          <li>Supported formats: JPG, PNG, GIF</li>
          <li>For best results, use transparent PNG</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;