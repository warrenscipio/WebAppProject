import { useState, useEffect } from 'react';
import ProductSelector from './ProductSelector';
import Editor from './Editor';
import Finalizer from './Finalizer';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [textElements, setTextElements] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Iframe communication
  useEffect(() => {
    const handleMessage = (event) => {
      // Validate parent origin
      if (event.origin !== 'https://parent-site.com') return;
      
      // Handle messages from parent
      if (event.data.type === 'LOAD_PRODUCTS') {
        // Set initial products if needed
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="app">
      <div className="tabs">
        <button onClick={() => setActiveTab(0)} disabled={activeTab === 0}>
          Select Product
        </button>
        <button 
          onClick={() => setActiveTab(1)} 
          disabled={!selectedProduct || activeTab === 1}
        >
          Edit
        </button>
        <button 
          onClick={() => setActiveTab(2)} 
          disabled={!selectedProduct || activeTab === 2}
        >
          Finalize
        </button>
      </div>

      {activeTab === 0 && (
        <ProductSelector 
          onSelect={setSelectedProduct} 
          selectedProduct={selectedProduct}
        />
      )}

      {activeTab === 1 && (
        <Editor
          product={selectedProduct}
          textElements={textElements}
          setTextElements={setTextElements}
          uploadedImage={uploadedImage}
          setUploadedImage={setUploadedImage}
        />
      )}

      {activeTab === 2 && (
        <Finalizer
          product={selectedProduct}
          textElements={textElements}
          uploadedImage={uploadedImage}
        />
      )}
    </div>
  );
}

export default App;