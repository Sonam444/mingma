
import React, { createContext, useContext, useState, useEffect } from 'react';

type AnimationContextType = {
  isLetterOpen: boolean;
  openLetter: () => void;
  closeLetter: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
  isPageLoaded: boolean;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    const backgroundMusic = new Audio('/romantic-background.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.4;
    setAudio(backgroundMusic);

    // Set page as loaded after a short delay for animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const openLetter = () => {
    setIsLetterOpen(true);
  };

  const closeLetter = () => {
    setIsLetterOpen(false);
  };

  const toggleMusic = () => {
    if (!audio) return;
    
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <AnimationContext.Provider
      value={{
        isLetterOpen,
        openLetter,
        closeLetter,
        isMusicPlaying,
        toggleMusic,
        isPageLoaded
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
