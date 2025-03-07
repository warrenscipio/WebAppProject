import React from 'react';
import TabNavigation from './TabNavigation';
import ProductTab from './ProductTab';
import CustomizeTab from './CustomizeTab';
import FinalizeTab from './FinalizeTab';
import { useProductContext } from '../context/ProductContext';
import '../styles/App.css';

const App = () => {
  const { activeTab } = useProductContext();

  return (
    <div className="product-customizer">
      <TabNavigation />
      
      <div className="content-container">
        {activeTab === 'product' && <ProductTab />}
        {activeTab === 'customize' && <CustomizeTab />}
        {activeTab === 'finalize' && <FinalizeTab />}
      </div>
      
      <div className="footer">
        <p>© {new Date().getFullYear()} Product Customizer</p>
      </div>
    </div>
  );
};

export default App;