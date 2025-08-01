import React from 'react';
import { motion } from 'framer-motion';

// Scroll Arrow Component
const ScrollArrow = ({ viewportTopY, minY = 200, scrollDistance = 400 }) => {
    const isVisible = viewportTopY < minY;
  
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={`relative mt-7 justify-center items-center align-center transform  transition-all duration-500 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => {
              window.scrollTo({
                top: window.scrollY + scrollDistance,
                behavior: 'smooth'
              });
            }}
            className="relative"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-[#EF6304] rounded-full blur-lg opacity-50 animate-pulse"></div>
            
            {/* Arrow icon */}
            <div className="relative w-12 h-12 bg-[#EF6304] rounded-full flex items-center justify-center shadow-lg">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Additional glow rings */}
            <div className="absolute inset-0 bg-[#EF6304] rounded-full opacity-30 animate-ping"></div>
            <div className="absolute inset-2 bg-[#EF6304] rounded-full opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

export default ScrollArrow;