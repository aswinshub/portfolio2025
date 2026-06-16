import React from "react";
import { FaFigma, FaGithub, FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "motion/react";

const Tech = () => {
  const techItems = [
    { icon: GrReactjs, color: "text-cyan-300", name: "React" },
    { icon: SiMongodb, color: "text-green-700", name: "MongoDB" },
    { icon: SiExpress, color: "text-neutral-500", name: "Express" },
    { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
    { icon: FaFigma, color: "text-red-600", name: "Figma" },
    { icon: FaGithub, color: "text-neutral-100", name: "GitHub" },
    { icon: RiTailwindCssFill, color: "text-cyan-400", name: "Tailwind" },
    { icon: TbBrandNextjs, color: "text-neutral-100", name: "Next.js" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
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
          Technologies
        </motion.h2>
        
        {/* Tech Grid */}
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-full aspect-square flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <tech.icon className={`text-5xl ${tech.color}`} />
              </motion.div>
              
              {/* Label */}
              <p className="mt-3 text-sm text-neutral-500 font-light group-hover:text-neutral-400 transition-colors">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tech;
