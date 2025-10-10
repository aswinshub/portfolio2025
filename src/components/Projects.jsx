import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { HoverEffect, Card, CardTitle, CardDescription } from "./HoverEffect";

const Projects = () => {
  // Transform PROJECTS data to match HoverEffect format
  const projectItems = PROJECTS.map((project, index) => ({
    title: project.title,
    description: project.description,
    link: "#", // You can add actual project links here
    technologies: project.technologies,
    image: project.image
  }));

  return (
    <motion.div 
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="my-20 text-center text-5xl  font-normal tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>
      
      <HoverEffect items={projectItems} className="max-w-7xl mx-auto" />
    </motion.div>
  );
};

export default Projects;
