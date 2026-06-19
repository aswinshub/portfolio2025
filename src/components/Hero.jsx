import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/aswinpros.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center border-b border-neutral-800/50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-50"
              style={{ willChange: 'transform, opacity' }}
            >
              Aswin Chandran
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <p className="text-lg md:text-xl text-neutral-400 font-light">
                Software Developer <span className="text-neutral-600">|</span> UI/UX Designer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-base leading-relaxed text-neutral-400 font-light"
              style={{ willChange: 'transform, opacity' }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
