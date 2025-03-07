import React from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/components.css';

const TabNavigation = () => {
  const { activeTab, setActiveTab, selectedProduct } = useProductContext();

  const handleTabClick = (tab) => {
    // Only allow navigation to customize if a product is selected
    if (tab === 'customize' && !selectedProduct) {
      alert('Please select a product first');
      return;
    }
    
    // Only allow navigation to finalize if a product is selected
    if (tab === 'finalize' && !selectedProduct) {
      alert('Please select a product first');
      return;
    }
    
    setActiveTab(tab);
  };

  return (
    <div className="tab-navigation">
      <div 
        className={`tab ${activeTab === 'product' ? 'active' : ''}`}
        onClick={() => handleTabClick('product')}
      >
        Product
      </div>
      <div 
        className={`tab ${activeTab === 'customize' ? 'active' : ''}`}
        onClick={() => handleTabClick('customize')}
      >
        Customize
      </div>
      <div 
        className={`tab ${activeTab === 'finalize' ? 'active' : ''}`}
        onClick={() => handleTabClick('finalize')}
      >
        Finalize
      </div>
    </div>
  );
};

export default TabNavigation;