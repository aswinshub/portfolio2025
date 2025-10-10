import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/aswinpros.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="pb-16 text-5xl font-thin tracking-tight  lg:text-8xl"
              style={{ willChange: 'transform, opacity' }}
            >
              Aswin Chandran
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
              className="mb-2"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="text-3xl tracking-tight bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent animate-gradient">
                Software Developer | UI/UX
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="my-2 max-w-2xl py-6 font-light tracking-tighter text-lg leading-relaxed"
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
