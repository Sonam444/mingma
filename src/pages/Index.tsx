
import React, { useEffect } from 'react';
import { AnimationProvider } from '../contexts/AnimationContext';
import CSSLion from '../components/CSSLion';

const Index: React.FC = () => {
  // Set document title
  useEffect(() => {
    document.title = "CSS Lion Animation";
  }, []);

  return (
    <AnimationProvider>
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-radial from-amber-50/90 to-amber-100/80 z-0" />
        
        {/* Content */}
        <main className="relative z-10 w-full max-w-4xl px-4 py-16 flex flex-col items-center justify-center gap-12 animate-fade-in-slow">
          {/* Title */}
          <div className="text-center space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-amber-700/90 font-serif leading-tight">
              CSS Lion Animation
            </h1>
            <p className="text-lg md:text-xl text-amber-600/80 font-light max-w-md mx-auto">
              Majestic and animated, built purely with CSS
            </p>
          </div>
          
          {/* CSS Lion */}
          <div className="my-8 w-full max-w-md">
            <CSSLion />
          </div>
          
          {/* Footer text */}
          <div className="mt-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            <p className="text-sm text-amber-500/70 font-light">
              Created with CSS and Animation Magic
            </p>
          </div>
        </main>
      </div>
    </AnimationProvider>
  );
};

export default Index;
