import { useCallback, useState } from 'react';

export default function Editor({ product, textElements, setTextElements }) {
  const [newText, setNewText] = useState('');
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleAddText = () => {
    if (newText.trim()) {
      setTextElements([...textElements, {
        id: Date.now(),
        text: newText,
        x: 50,
        y: 50,
      }]);
      setNewText('');
    }
  };

  const handleMouseDown = useCallback((id, e) => {
    setDraggingId(id);
    const rect = e.target.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!draggingId) return;
    
    setTextElements(elements => elements.map(el => {
      if (el.id === draggingId) {
        return {
          ...el,
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        };
      }
      return el;
    }));
  }, [draggingId, dragOffset]);

  const handleMouseUp = useCallback(() => {
    setDraggingId(null);
  }, []);

  return (
    <div className="editor">
      <div className="tools">
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddText()}
          placeholder="Add text label"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {/* Handle image upload */}}
        />
      </div>

      <div 
        className="canvas"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={product.image} alt="Base product" className="base-image" />
        
        {textElements.map((element) => (
          <div
            key={element.id}
            className="text-element"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
            }}
            onMouseDown={(e) => handleMouseDown(element.id, e)}
          >
            {element.text}
          </div>
        ))}
      </div>
    </div>
  );
}