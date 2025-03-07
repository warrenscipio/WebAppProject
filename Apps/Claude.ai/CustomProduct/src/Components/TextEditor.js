import React from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/components.css';

const TextEditor = () => {
  const { 
    customText, 
    setCustomText, 
    customTextStyle, 
    setCustomTextStyle 
  } = useProductContext();

  const handleTextChange = (e) => {
    setCustomText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setCustomTextStyle({
      ...customTextStyle,
      fontSize: parseInt(e.target.value, 10)
    });
  };

  const handleFontFamilyChange = (e) => {
    setCustomTextStyle({
      ...customTextStyle,
      fontFamily: e.target.value
    });
  };

  const handleRotationChange = (e) => {
    setCustomTextStyle({
      ...customTextStyle,
      rotation: parseInt(e.target.value, 10)
    });
  };

  return (
    <div className="text-editor">
      <h3>Add Custom Text</h3>
      
      <div className="form-group">
        <label htmlFor="customText">Text:</label>
        <input
          type="text"
          id="customText"
          value={customText}
          onChange={handleTextChange}
          placeholder="Enter your text here"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="fontSize">Font Size:</label>
        <select
          id="fontSize"
          value={customTextStyle.fontSize}
          onChange={handleFontSizeChange}
        >
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="28">28</option>
          <option value="32">32</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="fontFamily">Font:</label>
        <select
          id="fontFamily"
          value={customTextStyle.fontFamily}
          onChange={handleFontFamilyChange}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="rotation">Rotation:</label>
        <input
          type="range"
          id="rotation"
          min="0"
          max="359"
          value={customTextStyle.rotation}
          onChange={handleRotationChange}
        />
        <span>{customTextStyle.rotation}°</span>
      </div>
      
      <div className="text-preview">
        <p style={{
          fontFamily: customTextStyle.fontFamily,
          fontSize: `${customTextStyle.fontSize}px`,
          transform: `rotate(${customTextStyle.rotation}deg)`
        }}>
          {customText || 'Preview Text'}
        </p>
      </div>
    </div>
  );
};

export default TextEditor;