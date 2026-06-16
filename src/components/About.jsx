import React from "react";
import profilePic from "../assets/aswinpros.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="py-24 border-b border-neutral-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          className="mb-16 text-center text-3xl md:text-4xl font-light tracking-tight text-neutral-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          About
        </motion.h2>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.img 
              className="rounded-lg w-full max-w-sm object-cover border border-neutral-800"
              src={profilePic} 
              alt="Aswin Chandran"
              variants={imageVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ aspectRatio: '1/1' }}
            />
          </motion.div>
          
          {/* Text */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <motion.p 
              className="text-base leading-loose text-neutral-400 font-light"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
