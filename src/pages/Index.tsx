
import React, { useEffect } from 'react';
import { AnimationProvider } from '../contexts/AnimationContext';
import FloatingRoses from '../components/FloatingRoses';
import LoveButton from '../components/LoveButton';
import LoveLetter from '../components/LoveLetter';
import MusicToggle from '../components/MusicToggle';

const Index: React.FC = () => {
  // Set document title
  useEffect(() => {
    document.title = "For My Beloved";
  }, []);

  return (
    <AnimationProvider>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-rose-texture">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-radial from-rose-50/90 to-rose-100/80 z-0" />
        <FloatingRoses />
        
        {/* Content */}
        <main className="relative z-10 w-full max-w-4xl px-4 py-16 flex flex-col items-center justify-center gap-12 animate-fade-in-slow">
          {/* Title */}
          <div className="text-center space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-rose-700/90 font-serif leading-tight">
              For My Beloved
            </h1>
            <p className="text-lg md:text-xl text-rose-600/80 font-light max-w-md mx-auto">
              Every moment with you feels like a beautiful dream
            </p>
          </div>
          
          {/* Interactive button */}
          <div className="my-8">
            <LoveButton />
          </div>
          
          {/* Footer text */}
          <div className="mt-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <p className="text-sm text-rose-500/70 font-light">
              With love, forever and always
            </p>
          </div>
        </main>
        
        {/* Love letter modal */}
        <LoveLetter />
        
        {/* Music toggle */}
        <MusicToggle />
      </div>
    </AnimationProvider>
  );
};

export default Index;
