import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  staggerChildren?: number;
  animation?: 'fade' | 'slide' | 'bounce';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  staggerChildren = 0.015,
  animation = 'fade'
}) => {
  // Split text into words
  const words = text.split(' ');

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
      },
    },
  };

  // Different animation options
  const animations = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slide: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    bounce: {
      hidden: { scale: 0 },
      visible: { scale: 1, transition: { type: "spring", damping: 10 } },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={animations[animation]}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}; 