import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { HoverEffect, Card, CardTitle, CardDescription } from "./HoverEffect";

const Projects = () => {
  // Transform PROJECTS data to match HoverEffect format
  const projectItems = PROJECTS.map((project) => ({
    title: project.title,
    description: project.description,
    liveLinks: project.liveLinks,
    technologies: project.technologies,
    image: project.image,
  }));

  return (
    <motion.div 
      className="py-24 border-b border-neutral-800/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          Projects
        </motion.h2>
        
        <HoverEffect items={projectItems} className="max-w-4xl mx-auto" />
      </div>
    </motion.div>
  );
};

export default Projects;
