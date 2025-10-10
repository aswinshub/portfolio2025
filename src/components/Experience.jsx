import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const experienceVariants = {
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

  const techVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
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
        className="my-20 text-center text-5xl  font-normal tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
      >
        Experience
      </motion.h2>
      
      <motion.div variants={containerVariants}>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-center group"
            variants={experienceVariants}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
            style={{ willChange: 'transform' }}
          >
            <motion.div 
              className="w-full lg:w-1/4 lg:pr-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.p 
                className="mb-2 text-base text-neutral-400 font-medium"
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.2 }}
                style={{ willChange: 'color' }}
              >
                {experience.year}
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h6 
                className="mb-2 font-semibold text-xl group-hover:text-green-400 transition-colors duration-300"
                whileHover={{ x: 2 }}
                style={{ willChange: 'transform, color' }}
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100 font-normal">
                  {experience.company}
                </span>
              </motion.h6>
              
              <motion.p 
                className="mb-4 text-neutral-400 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {experience.description}
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="inline-block bg-neutral-900 text-green-500 rounded-full px-3 py-1 text-xs font-medium border border-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
                    variants={techVariants}
                    custom={techIndex}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#1a1a1a",
                      boxShadow: "0 0 8px rgba(34, 197, 94, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ willChange: 'transform, background-color, box-shadow' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
