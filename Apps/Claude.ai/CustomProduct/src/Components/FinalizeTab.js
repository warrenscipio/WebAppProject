import React, { useRef } from 'react';
import { useProductContext } from '../context/ProductContext';
import html2canvas from 'html2canvas';
import '../styles/components.css';

const FinalizeTab = () => {
  const { 
    selectedProduct, 
    customText,
    customTextPosition,
    customTextStyle,
    customImage,
    customImagePosition,
    setActiveTab,
    resetCustomizations
  } = useProductContext();
  
  const productPreviewRef = useRef(null);

  const handleBack = () => {
    setActiveTab('customize');
  };

  const handleDownload = () => {
    if (productPreviewRef.current) {
      html2canvas(productPreviewRef.current).then(canvas => {
        const link = document.createElement('a');
        link.download = `${selectedProduct.name.replace(/\s+/g, '-').toLowerCase()}-custom.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  const handleStartOver = () => {
    resetCustomizations();
    setActiveTab('product');
  };

  if (!selectedProduct) {
    return (
      <div className="finalize-tab empty-state">
        <p>No product selected. Please go back and select a product.</p>
        <button onClick={handleStartOver}>Start Over</button>
      </div>
    );
  }

  return (
    <div className="finalize-tab">
      <h2>Finalize Your Design</h2>
      
      <div className="final-product-container">
        <div className="final-product-preview" ref={productPreviewRef}>
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="product-image-base"
          />
          
          {customText && (
            <div 
              className="custom-text-element"
              style={{
                position: 'absolute',
                left: `${customTextPosition.x}px`,
                top: `${customTextPosition.y}px`,
                fontFamily: customTextStyle.fontFamily,
                fontSize: `${customTextStyle.fontSize}px`,
                transform: `rotate(${customTextStyle.rotation}deg)`
              }}
            >
              {customText}
            </div>
          )}
          
          {customImage && (
            <div 
              className="custom-image-element"
              style={{
                position: 'absolute',
                left: `${customImagePosition.x}px`,
                top: `${customImagePosition.y}px`
              }}
            >
              <img src={customImage} alt="Custom design" />
            </div>
          )}
        </div>
        
        <div className="product-summary">
          <h3>{selectedProduct.name}</h3>
          <p className="product-description">{selectedProduct.description}</p>
          <p className="product-dimensions">Dimensions: {selectedProduct.dimensions}</p>
          <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
          
          <div className="customization-summary">
            <h4>Your Customizations:</h4>
            {customText && (
              <p>Custom Text: "{customText}"</p>
            )}
            {customImage && (
              <p>Custom Image: Added</p>
            )}
            {!customText && !customImage && (
              <p>No customizations added</p>
            )}
          </div>
          
          <div className="special-instructions">
            <h4>Special Instructions:</h4>
            <textarea 
              placeholder="Add any special instructions for your order..."
              rows={4}
            />
          </div>
        </div>
      </div>
      
      <div className="finalize-actions">
        <button className="back-button" onClick={handleBack}>
          Back to Customize
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download Design
        </button>
        <button className="start-over-button" onClick={handleStartOver}>
          Start Over
        </button>
      </div>
    </div>
  );
};

export default FinalizeTab;