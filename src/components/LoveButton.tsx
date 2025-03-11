
import React, { useState } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { Heart } from 'lucide-react';

const LoveButton: React.FC = () => {
  const { openLetter, isPageLoaded } = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  // Delay animation for staggered loading effect
  const buttonVisibilityClass = isPageLoaded 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10';

  return (
    <div className={`relative flex items-center justify-center transition-all duration-1000 ease-out ${buttonVisibilityClass}`}
      style={{ transitionDelay: '1000ms' }}>
      <div 
        className={`absolute w-16 h-16 rounded-full bg-rose-400/20 ${isHovered ? 'animate-pulse-soft' : ''}`}
        style={{ 
          transform: 'scale(1.2)',
          filter: 'blur(8px)',
        }}
      />
      
      <button
        className={`relative px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium shadow-lg 
          transition-all duration-500 transform hover:shadow-xl flex items-center gap-2
          ${isHovered ? 'scale-105' : 'scale-100'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openLetter}
      >
        <span className="relative z-10">Click Here for Surprise</span>
        <Heart 
          className={`w-5 h-5 ${isHovered ? 'animate-heartbeat' : ''}`} 
          fill={isHovered ? "white" : "none"}
        />
        
        {/* Add subtle ring effect */}
        <div className={`absolute inset-0 rounded-full transition-all duration-700 ${isHovered ? 'ring-4 ring-rose-300/50' : 'ring-0'}`} />
      </button>
    </div>
  );
};

export default LoveButton;
