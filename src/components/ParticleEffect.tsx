
import React, { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  isActive: boolean;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!isActive || !containerRef.current) return;
    
    const container = containerRef.current;
    particlesRef.current = [];
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create particles
    const createParticles = () => {
      if (!isActive || !container) return;
      
      // Get container dimensions
      const rect = container.getBoundingClientRect();
      
      // Generate random properties for the particle
      const size = Math.random() * 10 + 5;
      const x = Math.random() * rect.width;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;
      
      // Create heart particle
      const particle = document.createElement('div');
      particle.classList.add('heart-particle');
      
      // Random heart color variation
      const hue = 345 + Math.random() * 15;
      const lightness = 70 + Math.random() * 20;
      const opacity = 0.5 + Math.random() * 0.5;
      
      // Apply styles
      Object.assign(particle.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        bottom: '10px',
        backgroundColor: `hsla(${hue}, 90%, ${lightness}%, ${opacity})`,
        animation: `particle-float ${duration}s ease-out ${delay}s`,
      });
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, (duration + delay) * 1000);
      
      container.appendChild(particle);
      particlesRef.current.push(particle);
    };
    
    // Create particles at interval
    const interval = setInterval(() => {
      if (isActive) {
        createParticles();
      }
    }, 200);
    
    // Initial batch of particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticles, i * 100);
    }
    
    return () => {
      clearInterval(interval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

export default ParticleEffect;
