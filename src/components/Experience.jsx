import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const AI_TOOLS = new Set(["Figma Make", "Stitch", "Lovable", "Claude Design"]);

const AiSparkleIcon = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M8 1.2 8.95 4.85 12.6 5.8 8.95 6.75 8 10.4 7.05 6.75 3.4 5.8 7.05 4.85 8 1.2Z" />
    <path d="M2.8 2.2 3.25 3.55 4.6 4 3.25 4.45 2.8 5.8 2.35 4.45 1 4 2.35 3.55 2.8 2.2Z" />
    <path d="M12.8 9.8 13.2 10.95 14.35 11.35 13.2 11.75 12.8 12.9 12.4 11.75 11.25 11.35 12.4 10.95 12.8 9.8Z" />
  </svg>
);

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
      id="experience"
      className="py-24 border-b border-neutral-800/50 scroll-mt-28"
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
        <motion.div className="max-w-6xl mx-auto space-y-12" variants={containerVariants}>
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
                {experience.points ? (
                  <ul className="text-base text-neutral-400 leading-relaxed mb-4 font-light space-y-2 list-disc pl-5">
                    {experience.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-neutral-400 leading-relaxed mb-4 font-light">
                    {experience.description}
                  </p>
                )}
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => {
                    const label = tech.trim();
                    const showAiIcon = AI_TOOLS.has(label);

                    return (
                      <span
                        key={techIndex}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-neutral-400 bg-neutral-900/50 border border-neutral-800 rounded-full font-light hover:border-neutral-700 hover:text-neutral-300 transition-colors"
                      >
                        {showAiIcon && (
                          <AiSparkleIcon className="h-3.5 w-3.5 shrink-0" />
                        )}
                        {label}
                      </span>
                    );
                  })}
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
