import React, { useState, useRef, useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import '../styles/components.css';

const DraggableElement = ({ type, content, position, style }) => {
  const { 
    setCustomTextPosition, 
    setCustomImagePosition 
  } = useProductContext();
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {

      if (isDragging) {
        const x = e.clientX - dragOffset.x;
        const y = e.clientY - dragOffset.y;
        
        if (type === 'text') {
          setCustomTextPosition({ x, y });
        } else if (type === 'image') {
          setCustomImagePosition({ x, y });
        }
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, type, setCustomTextPosition, setCustomImagePosition]);

  const handleMouseDown = (e) => {
    if (elementRef.current) {
      const rect = elementRef.current.offsetParent.getBoundingClientRect();
      
      setDragOffset({
        x: rect.x,
        y: rect.y
      });
      
      setIsDragging(true);
    }
  };

  const getElementStyle = () => {
    const baseStyle = {
      position: 'absolute',
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: isDragging ? 'grabbing' : 'grab',
      userSelect: 'none'
    };
    
    if (type === 'text' && style) {
      return {
        ...baseStyle,
        fontFamily: style.fontFamily,
        fontSize: `${style.fontSize}px`,
        transform: `rotate(${style.rotation}deg)`
      };
    }
    
    return baseStyle;
  };

  return (
    <div
      ref={elementRef}
      className={`draggable-element ${type} ${isDragging ? 'dragging' : ''}`}
      style={getElementStyle()}
      onMouseDown={handleMouseDown}
    >
      {type === 'text' ? (
        <span>{content}</span>
      ) : (
        <img src={content} alt="Custom design" />
      )}
    </div>
  );
};

export default DraggableElement;