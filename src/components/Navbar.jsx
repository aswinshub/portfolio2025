import React from "react";
import logo from "../assets/aswinlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
  const iconVariants = {
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
    <motion.nav 
      className="mb-20 flex items-center justify-between py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div 
        className="flex flex-shrink-0 items-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ willChange: 'transform' }}
      >
        <motion.img 
          className="mx-2 w-10 cursor-pointer"
          src={logo} 
          alt="logo"
          whileHover={{ rotate: 3 }}
          transition={{ duration: 0.2 }}
          style={{ willChange: 'transform' }}
        />
      </motion.div>

      <motion.div 
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        initial="hidden"
        animate="visible"
      >
        {[
          { icon: FaLinkedin, color: "#0077b5", delay: 0 },
          { icon: FaGithub, color: "#333", delay: 1 },
          { icon: FaInstagram, color: "#e4405f", delay: 2 }
        ].map(({ icon: Icon, color, delay }, index) => (
          <motion.div
            key={index}
            custom={delay}
            variants={iconVariants}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              color: color,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform, color' }}
            className="cursor-pointer transition-colors duration-300"
          >
            <Icon />
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
