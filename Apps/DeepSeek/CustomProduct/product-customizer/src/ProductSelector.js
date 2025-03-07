import { useState } from 'react';


export default function ProductSelector({ onSelect, selectedProduct }) {
    const [products, setProducts] = useState([
      { id: 1, name: 'T-Shirt', price: 29.99, image: '/tshirt-base.png' },
      { id: 2, name: 'Mug', price: 14.99, image: '/mug-base.png' },
      // Add more products
    ]);
  
    return (
      <div className="product-selector">
        <div className="product-list">
          {products.map(product => (
            <div 
              key={product.id}
              className={`product-card ${selectedProduct?.id === product.id ? 'selected' : ''}`}
              onClick={() => onSelect(product)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }