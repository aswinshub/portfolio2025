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
          Experience
        </motion.h2>
        
        {/* Experience Timeline */}
        <motion.div className="max-w-4xl mx-auto space-y-12" variants={containerVariants}>
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 group"
              variants={experienceVariants}
            >
              {/* Year - Left Column */}
              <motion.div 
                className="md:text-right"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-sm text-neutral-500 font-light">
                  {experience.year}
                </p>
              </motion.div>
              
              {/* Content - Right Column */}
              <motion.div 
                className="md:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* Role & Company */}
                <h3 className="text-lg font-normal text-neutral-100 mb-1">
                  {experience.role}
                </h3>
                <p className="text-sm text-neutral-500 mb-3 font-light">
                  {experience.company}
                </p>
                
                {/* Description */}
                <p className="text-base text-neutral-400 leading-relaxed mb-4 font-light">
                  {experience.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-full font-light hover:border-neutral-700 hover:text-neutral-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
