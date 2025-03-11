
import React from 'react';
import { Music, MusicOff } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const MusicToggle: React.FC = () => {
  const { isMusicPlaying, toggleMusic, isPageLoaded } = useAnimation();
  
  const visibilityClass = isPageLoaded 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-5';

  return (
    <button
      onClick={toggleMusic}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-white/80 shadow-md hover:shadow-lg transition-all duration-700 ease-out ${visibilityClass} backdrop-blur-sm`}
      style={{ transitionDelay: '1500ms' }}
      aria-label={isMusicPlaying ? "Pause Music" : "Play Music"}
    >
      {isMusicPlaying ? (
        <Music className="w-5 h-5 text-rose-500" />
      ) : (
        <MusicOff className="w-5 h-5 text-rose-400/80" />
      )}
      
      <span className="absolute left-0 top-0 -translate-y-full -translate-x-1/2 bg-white/90 rounded px-2 py-1 text-xs text-rose-500 shadow opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
        {isMusicPlaying ? "Pause Music" : "Play Music"}
      </span>
    </button>
  );
};

export default MusicToggle;
