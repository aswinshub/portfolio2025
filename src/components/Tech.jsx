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
      className="border-t border-neutral-800 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="my-20 text-center text-5xl font-normal tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
      >
        Technologies
      </motion.h1>
      
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-6"
        variants={containerVariants}
      >
        {techItems.map((tech, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: 'transform' }}
          >
            <motion.div 
              className="rounded-2xl border-4 border-neutral-800 p-6 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              whileHover={{ 
                backgroundColor: "rgba(38, 38, 38, 0.8)",
                borderColor: "#525252"
              }}
              style={{ willChange: 'background-color, border-color' }}
            >
              <tech.icon className={`text-7xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tech;
