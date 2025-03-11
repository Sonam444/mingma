
import React, { useEffect, useState, useRef } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { Heart, X } from 'lucide-react';
import ParticleEffect from './ParticleEffect';

const LoveLetter: React.FC = () => {
  const { isLetterOpen, closeLetter } = useAnimation();
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [letterText, setLetterText] = useState('');
  const fullText = "I love you, Mingma. ❤️ Thank you for coming into my life, dear. You are my greatest blessing, and I will love you for my whole life. Every moment with you is precious, and I promise to cherish you forever. Yours, Sonam. 💖";
  const letterRef = useRef<HTMLDivElement>(null);
  
  // Handle the letter opening animation sequence
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isLetterOpen) {
      // Reset states when opening
      setIsUnfolded(false);
      setLetterText('');
      
      // First unfold the letter
      timeout = setTimeout(() => {
        setIsUnfolded(true);
        
        // Then start the typewriter effect
        timeout = setTimeout(() => {
          typeWriter();
        }, 1000);
      }, 500);
    }
    
    return () => clearTimeout(timeout);
  }, [isLetterOpen]);
  
  // Typewriter effect function
  const typeWriter = () => {
    let i = 0;
    const speed = 70; // Typing speed (ms)
    
    const type = () => {
      if (i < fullText.length) {
        setLetterText(fullText.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else {
        // When typing is complete, add the "unfolded" class
        if (letterRef.current) {
          letterRef.current.classList.add('unfolded');
        }
      }
    };
    
    type();
  };
  
  // If the letter is not open, don't render anything
  if (!isLetterOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div
        className={`relative max-w-lg w-full transform transition-all duration-700 ease-out
          ${isUnfolded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        ref={letterRef}
      >
        {/* Close button */}
        <button 
          onClick={closeLetter}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 text-rose-500 hover:bg-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Letter content */}
        <div className="glass-effect rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-rose-200 rounded-full opacity-50 blur-xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 translate-x-16 translate-y-16 bg-rose-300 rounded-full opacity-50 blur-xl" />
          
          {/* Heart icon */}
          <div className="flex justify-center mb-8 opacity-80">
            <Heart className="w-10 h-10 text-rose-500 animate-pulse-soft" fill="#f43f5e" />
          </div>
          
          {/* Letter heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-rose-700 opacity-90">My Beloved</h2>
          
          {/* Letter content with typewriter effect */}
          <div className="letter-content text-lg font-serif text-center leading-relaxed text-rose-900/90 min-h-[200px]">
            {letterText}
          </div>
          
          {/* Signature */}
          <div className="mt-8 text-right pr-8 font-serif italic text-lg text-rose-700/80 opacity-0 transition-opacity duration-1000"
               style={{ opacity: letterText.length === fullText.length ? 1 : 0 }}>
            With all my love
          </div>
        </div>
        
        {/* Particle effects */}
        <ParticleEffect isActive={isUnfolded} />
      </div>
    </div>
  );
};

export default LoveLetter;
