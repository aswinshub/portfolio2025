import React from "react";
import logo from "../assets/logo as.png";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              className="w-8 h-8 cursor-pointer"
              src={logo} 
              alt="Aswin Chandran"
              whileHover={{ rotate: 3 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 text-xl"
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: FaLinkedin, color: "#0077b5", delay: 0, label: "LinkedIn", href: "https://www.linkedin.com/in/aswin-chandran-8b852a1a9/" },
              { icon: FaGithub, color: "#e6edf3", delay: 1, label: "GitHub", href: "https://github.com/aswinshub" },
              { icon: FaDribbble, color: "#ea4c89", delay: 2, label: "Dribbble", href: "https://dribbble.com/AswinChandran" }
            ].map(({ icon: Icon, color, delay, label, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                custom={delay}
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  color: color,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="text-neutral-400 hover:text-neutral-100 transition-colors cursor-pointer"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
