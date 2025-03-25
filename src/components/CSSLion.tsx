
import React from 'react';
import '../styles/lion.css';

const CSSLion: React.FC = () => {
  return (
    <div className="lion-container">
      <div className="lion">
        {/* Lion's body */}
        <div className="body">
          <div className="mane"></div>
        </div>
        
        {/* Lion's head */}
        <div className="head">
          {/* Eyes */}
          <div className="eyes">
            <div className="eye left">
              <div className="pupil"></div>
            </div>
            <div className="eye right">
              <div className="pupil"></div>
            </div>
          </div>
          
          {/* Nose */}
          <div className="nose"></div>
          
          {/* Mouth */}
          <div className="mouth">
            <div className="tongue"></div>
          </div>
        </div>
        
        {/* Lion's legs */}
        <div className="legs">
          <div className="leg front left"></div>
          <div className="leg front right"></div>
          <div className="leg back left"></div>
          <div className="leg back right"></div>
        </div>
        
        {/* Lion's tail */}
        <div className="tail">
          <div className="tail-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CSSLion;
