
import React, { useEffect, useState } from 'react';

// Define Rose interface for type safety
interface Rose {
  id: number;
  size: number;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
  animationType: 'float' | 'float-alt';
}

const FloatingRoses: React.FC = () => {
  const [roses, setRoses] = useState<Rose[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate roses on component mount
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const numberOfRoses = Math.max(5, Math.floor(windowWidth * windowHeight / 100000));
    
    const generatedRoses: Rose[] = [];
    
    for (let i = 0; i < numberOfRoses; i++) {
      generatedRoses.push({
        id: i,
        size: Math.random() * 80 + 40, // Size between 40 and 120px
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.5 + 0.2, // Opacity between 0.2 and 0.7
        animationDuration: Math.random() * 8 + 6, // Duration between 6 and 14s
        animationDelay: Math.random() * -10, // Random start times
        animationType: Math.random() > 0.5 ? 'float' : 'float-alt'
      });
    }
    
    setRoses(generatedRoses);
  }, []);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {roses.map((rose) => {
        // Calculate parallax movement based on mouse position
        const moveX = (mousePosition.x / window.innerWidth - 0.5) * 20 * (rose.size / 100);
        const moveY = (mousePosition.y / window.innerHeight - 0.5) * 20 * (rose.size / 100);
        
        return (
          <div
            key={rose.id}
            className={`absolute rose-blur glow ${rose.animationType === 'float' ? 'animate-float' : 'animate-float-alt'}`}
            style={{
              left: `${rose.x}px`,
              top: `${rose.y}px`,
              width: `${rose.size}px`,
              height: `${rose.size}px`,
              opacity: rose.opacity,
              transform: `rotate(${rose.rotation}deg) translate(${moveX}px, ${moveY}px)`,
              animationDuration: `${rose.animationDuration}s`,
              animationDelay: `${rose.animationDelay}s`,
              zIndex: Math.floor(rose.size / 20), // Larger roses appear in front
            }}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full"
              fill={`rgba(244, 114, 182, ${rose.opacity + 0.1})`}
            >
              <path d="M50,0 C55,20 80,20 85,35 C90,50 80,65 50,100 C20,65 10,50 15,35 C20,20 45,20 50,0 Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingRoses;
