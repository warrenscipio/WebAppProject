import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import TextEditor from './TextEditor';
import ImageUploader from './ImageUploader';
import DraggableElement from './DraggableElement';
import '../styles/components.css';

const CustomizeTab = () => {
  const { 
    selectedProduct, 
    customText,
    customTextPosition,
    customTextStyle,
    customImage,
    customImagePosition,
    setActiveTab 
  } = useProductContext();
  
  const [activeEditor, setActiveEditor] = useState('text'); // 'text' or 'image'

  const handleContinue = () => {
    setActiveTab('finalize');
  };

  const handleBack = () => {
    setActiveTab('product');
  };

  if (!selectedProduct) {
    return (
      <div className="customize-tab empty-state">
        <p>No product selected. Please go back and select a product.</p>
        <button onClick={handleBack}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="customize-tab">
      <div className="editor-sidebar">
        <div className="editor-tabs">
          <button 
            className={`editor-tab ${activeEditor === 'text' ? 'active' : ''}`}
            onClick={() => setActiveEditor('text')}
          >
            Add Custom Text
          </button>
          <button 
            className={`editor-tab ${activeEditor === 'image' ? 'active' : ''}`}
            onClick={() => setActiveEditor('image')}
          >
            Upload Image
          </button>
        </div>
        
        <div className="editor-content">
          {activeEditor === 'text' ? (
            <TextEditor />
          ) : (
            <ImageUploader />
          )}
        </div>
      </div>
      
      <div className="product-preview">
        <div className="preview-container">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="product-image-base"
          />
          
          {customText && (
            <DraggableElement
              type="text"
              content={customText}
              position={customTextPosition}
              style={customTextStyle}
            />
          )}
          
          {customImage && (
            <DraggableElement
              type="image"
              content={customImage}
              position={customImagePosition}
            />
          )}
        </div>
        
        <div className="preview-instructions">
          <p>Drag text or images to position them on your product</p>
        </div>
        
        <div className="navigation-buttons">
          <button onClick={handleBack}>Back</button>
          <button onClick={handleContinue}>Continue to Finalize</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTab;