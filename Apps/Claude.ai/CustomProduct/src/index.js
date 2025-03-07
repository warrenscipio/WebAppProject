import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ProductProvider } from './context/ProductContext';
import './styles/App.css';

// Check if we're running within an iframe
const isInIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

// Handle cross-origin iframe messaging if needed
const setupIframeMessaging = () => {
  window.addEventListener('message', (event) => {
    // Handle any messages from parent window if needed
    // Example: 
    // if (event.data.type === 'INITIALIZE_PRODUCT') {
    //   // Handle initialization
    // }
  });
  
  // Let parent know the app is ready
  window.parent.postMessage({ type: 'APP_LOADED' }, '*');
};

// Initialize the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);

// Set up iframe communication if running in an iframe
if (isInIframe()) {
  setupIframeMessaging();
}