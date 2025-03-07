import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customText, setCustomText] = useState("");
  const [customImage, setCustomImage] = useState(null);
  const [textPosition, setTextPosition] = useState({ x: 50, y: 50 });

  return (
    <div className="app-container">
      <nav>
        <button onClick={() => setActiveTab(1)}>Select Product</button>
        <button onClick={() => setActiveTab(2)} disabled={!selectedProduct}>Edit Product</button>
        <button onClick={() => setActiveTab(3)} disabled={!selectedProduct}>Finalize</button>
      </nav>
      <div className="content">
        {activeTab === 1 && <ProductSelection onSelect={setSelectedProduct} onNext={() => setActiveTab(2)} />}
        {activeTab === 2 && <ProductEditor product={selectedProduct} customText={customText} setCustomText={setCustomText} customImage={customImage} setCustomImage={setCustomImage} textPosition={textPosition} setTextPosition={setTextPosition} />}
        {activeTab === 3 && <ProductFinalization product={selectedProduct} customText={customText} customImage={customImage} textPosition={textPosition} />}
      </div>
    </div>
  );
}

function ProductSelection({ onSelect, onNext }) {
  const products = [
    { id: 1, name: "T-Shirt", image: "shirt.png" },
    { id: 2, name: "Mug", image: "mug.png" },
    { id: 3, name: "Hat", image: "hat.png" }
  ];

  return (
    <div className="product-selection">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item" onClick={() => { onSelect(product); onNext(); }}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductEditor({ product, customText, setCustomText, customImage, setCustomImage, textPosition, setTextPosition }) {
  const handleTextDrag = (e) => {
    setTextPosition({ x: e.clientX, y: e.clientY });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="editor">
      <h2>Editing {product?.name}</h2>
      <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} placeholder="Enter text" />
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      <div className="canvas" style={{ position: "relative", width: "300px", height: "300px", border: "1px solid black" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%" }} />
        {customText && (
          <p
            style={{ position: "absolute", left: textPosition.x, top: textPosition.y, cursor: "grab" }}
            draggable
            onDragEnd={handleTextDrag}
          >
            {customText}
          </p>
        )}
        {customImage && <img src={customImage} alt="Custom Upload" style={{ position: "absolute", left: "50px", top: "50px", width: "100px" }} />}
      </div>
    </div>
  );
}

function ProductFinalization({ product, customText, customImage, textPosition }) {
  return (
    <div className="finalization">
      <h2>Finalized {product?.name}</h2>
      <div className="canvas" style={{ position: "relative", width: "300px", height: "300px", border: "1px solid black" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%" }} />
        {customText && (
          <p style={{ position: "absolute", left: textPosition.x, top: textPosition.y }}>{customText}</p>
        )}
        {customImage && <img src={customImage} alt="Custom Upload" style={{ position: "absolute", left: "50px", top: "50px", width: "100px" }} />}
      </div>
      <button onClick={() => alert("Saved Successfully!")}>Save</button>
    </div>
  );
}

export default App;
