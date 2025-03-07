import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Selected product state
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Customization states
  const [customText, setCustomText] = useState('');
  const [customTextPosition, setCustomTextPosition] = useState({ x: 0, y: 0 });
  const [customTextStyle, setCustomTextStyle] = useState({
    fontSize: 16,
    fontFamily: 'Arial',
    rotation: 0
  });
  
  // Custom image state
  const [customImage, setCustomImage] = useState(null);
  const [customImagePosition, setCustomImagePosition] = useState({ x: 0, y: 0 });
  
  // Active tab state
  const [activeTab, setActiveTab] = useState('product');
  
  const resetCustomizations = () => {
    setCustomText('');
    setCustomTextPosition({ x: 0, y: 0 });
    setCustomImage(null);
    setCustomImagePosition({ x: 0, y: 0 });
  };
  
  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        customText,
        setCustomText,
        customTextPosition,
        setCustomTextPosition,
        customTextStyle,
        setCustomTextStyle,
        customImage,
        setCustomImage,
        customImagePosition,
        setCustomImagePosition,
        activeTab,
        setActiveTab,
        resetCustomizations
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

export default ProductContext;