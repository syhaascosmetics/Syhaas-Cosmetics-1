import React from 'react';

interface SyhaasLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SyhaasLogo: React.FC<SyhaasLogoProps> = ({ className = '', size = 'md' }) => {
  // Height configurations
  const heightClass = size === 'sm' ? 'h-10' : size === 'lg' ? 'h-16' : 'h-12';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblem SVG: Green 'S' with leaves and serene blush face profile */}
      <svg
        viewBox="0 0 100 120"
        className={`${heightClass} w-auto shrink-0 drop-shadow-xs`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Syhaas Cosmetics Emblem"
      >
        {/* Serene face profile in soft warm peach / blush inside the top curve of S */}
        <path
          d="M 52 22 
             C 56 22, 60 26, 60 32 
             C 60 37, 57 41, 53 43 
             C 56 46, 57 50, 54 53 
             C 52 55, 48 56, 45 56 
             C 42 56, 40 54, 40 50 
             C 40 44, 46 36, 47 30 
             C 48 25, 49 22, 52 22 Z"
          fill="#D9AFA0"
          opacity="0.95"
        />
        {/* Eyelash / closed eye in profile */}
        <path
          d="M 54 32 C 56 34, 58 34, 60 33"
          stroke="#9C7769"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Delicate Lips in soft rose */}
        <path
          d="M 58 45 C 59 45.5, 60 46, 59 47"
          stroke="#C47E72"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Elegant Botanical Leaves on the lower left of S */}
        {/* Leaf 1 (Top Left) */}
        <path
          d="M 37 54 
             C 24 48, 20 60, 34 68 
             C 38 64, 38 58, 37 54 Z"
          fill="#6F7C6D"
        />
        <path
          d="M 24 55 Q 31 60 35 65"
          stroke="#8A9688"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Leaf 2 (Bottom Left) */}
        <path
          d="M 38 68 
             C 22 68, 24 82, 38 84 
             C 41 78, 40 72, 38 68 Z"
          fill="#536052"
        />
        <path
          d="M 26 75 Q 33 76 38 78"
          stroke="#7A8778"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Main Sculpted 'S' in Sage / Deep Olive Green (#485647) */}
        <path
          d="M 64 26 
             C 59 16, 45 15, 38 23 
             C 31 31, 34 44, 44 51 
             C 56 60, 62 68, 60 80 
             C 58 92, 45 97, 34 92 
             C 28 89, 25 84, 25 79 
             C 25 78, 27 77, 28 78 
             C 31 84, 39 90, 48 88 
             C 56 86, 59 78, 57 72 
             C 54 62, 43 56, 35 48 
             C 27 40, 27 27, 36 18 
             C 44 9, 58 9, 66 18 
             C 68 20, 67 24, 64 26 Z"
          fill="#445243"
        />
      </svg>

      {/* Brand Typography Block */}
      <div className="flex flex-col justify-center text-left">
        {/* SYHAAS Wordmark */}
        <span
          className="font-serif font-bold text-2xl sm:text-[26px] tracking-[0.14em] text-[#3D4B3C] leading-none"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          SYHAAS
        </span>

        {/* — COSMETICS — with subtle blush flanking lines */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-5 sm:w-7 h-[1px] bg-[#DEB2A2]" />
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.32em] font-medium text-[#4E5B4D] uppercase leading-none"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif' }}
          >
            COSMETICS
          </span>
          <span className="w-5 sm:w-7 h-[1px] bg-[#DEB2A2]" />
        </div>
      </div>
    </div>
  );
};
