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
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="my-20 text-center text-5xl font-normal tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center">
            <motion.img 
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              src={profilePic} 
              alt="Aswin"
              variants={imageVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: 'transform', width: '350px', height: '400px' }}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          variants={itemVariants}
        >
          <div className="flex justify-center lg:justify-start">
            <motion.p 
              className="my-2 max-w-xl py-6 leading-relaxed text-lg text-neutral-300"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{ willChange: 'transform, opacity' }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
