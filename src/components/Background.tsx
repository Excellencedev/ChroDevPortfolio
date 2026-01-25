import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Center Left Blob */}
      <div className="absolute top-[60%] left-[10%] w-96 h-96 bg-theme-red/20 rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Top Right/Center Blob */}
      <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-theme-red/10 rounded-full blur-[140px]" />
      
      {/* Bottom Right Blob */}
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-theme-red/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      {/* Subtle overlay for noise/texture (optional, kept clean for now) */}
    </div>
  );
};

export default Background;