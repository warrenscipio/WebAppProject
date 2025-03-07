export default function Finalizer({ product, textElements, uploadedImage }) {
    const handleSave = () => {
      // Send final design to parent window
      window.parent.postMessage({
        type: 'SAVE_DESIGN',
        data: {
          product,
          textElements,
          uploadedImage,
        }
      }, 'https://parent-site.com');
    };
  
    return (
      <div className="finalizer">
        <div className="preview">
          <img src={product.image} alt="Base product" className="base-image" />
          
          {textElements.map((element) => (
            <div
              key={element.id}
              className="text-element"
              style={{
                left: `${element.x}px`,
                top: `${element.y}px`,
              }}
            >
              {element.text}
            </div>
          ))}
          
          {uploadedImage && (
            <img 
              src={uploadedImage} 
              alt="Custom upload" 
              className="uploaded-image"
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            />
          )}
        </div>
        
        <button onClick={handleSave}>Save Design</button>
      </div>
    );
  }