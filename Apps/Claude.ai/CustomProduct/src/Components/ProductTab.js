import React from 'react';
import { useProductContext } from '../context/ProductContext';
import products from '../data/products';
import ProductItem from './ProductItem';
import '../styles/components.css';

const ProductTab = () => {
  const { selectedProduct, setSelectedProduct, setActiveTab } = useProductContext();

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleContinue = () => {
    if (selectedProduct) {
      setActiveTab('customize');
    } else {
      alert('Please select a product to continue');
    }
  };

  return (
    <div className="product-tab">
      <div className="product-list-container">
        <h2>Select a Product</h2>
        <div className="product-list">
          {products.map(product => (
            <ProductItem 
              key={product.id}
              product={product}
              isSelected={selectedProduct && product.id === selectedProduct.id}
              onSelect={handleProductSelect}
            />
          ))}
        </div>
      </div>
      
      <div className="product-display">
        {selectedProduct ? (
          <div className="selected-product">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="product-image"
            />
            <div className="product-details">
              <h2>{selectedProduct.name}</h2>
              <p className="product-description">{selectedProduct.description}</p>
              <p className="product-dimensions">Dimensions: {selectedProduct.dimensions}</p>
              <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div className="no-selection">
            <p>Select a product from the list to see details</p>
          </div>
        )}
        
        <button 
          className="continue-button"
          disabled={!selectedProduct}
          onClick={handleContinue}
        >
          Continue to Customize
        </button>
      </div>
    </div>
  );
};

export default ProductTab;