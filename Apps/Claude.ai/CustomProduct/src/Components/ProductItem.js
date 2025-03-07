import React from 'react';
import '../styles/components.css';

const ProductItem = ({ product, isSelected, onSelect }) => {
  return (
    <div 
      className={`product-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(product)}
    >
      <div className="product-thumbnail">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;